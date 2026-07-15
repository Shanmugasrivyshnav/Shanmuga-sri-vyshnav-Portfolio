/**
 * API Service for frontend
 * Handles all backend API calls with proper error handling and base URL
 */

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || data.error || `HTTP Error: ${response.status}`,
    );
  }

  return data;
};

// Generic GET request
export const getRequest = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`GET ${endpoint} failed:`, error);
    throw error;
  }
};

// Generic POST request
export const postRequest = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`POST ${endpoint} failed:`, error);
    throw error;
  }
};

// Get all projects
export const getProjects = () => getRequest("/projects");

// Get single project
export const getProject = (id) => getRequest(`/projects/${id}`);

// Get all skills
export const getSkills = () => getRequest("/skills");

// Get all certifications
export const getCertifications = () => getRequest("/certifications");

// Get all education
export const getEducation = () => getRequest("/education");

// Get all blog posts
export const getBlogPosts = () => getRequest("/blog");

// Submit contact form
export const submitContactForm = (formData) =>
  postRequest("/contact", formData);

// Admin routes (with authentication if needed)
export const getContactMessages = (token) =>
  fetch(`${API_BASE_URL}/admin/contact-messages`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(handleResponse)
    .catch((error) => {
      console.error("Get contact messages failed:", error);
      throw error;
    });

export const markMessageAsRead = (id, token) =>
  fetch(`${API_BASE_URL}/admin/contact-messages/${id}/read`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(handleResponse)
    .catch((error) => {
      console.error("Mark message as read failed:", error);
      throw error;
    });

export const deleteContactMessage = (id, token) =>
  fetch(`${API_BASE_URL}/admin/contact-messages/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return { success: true };
    })
    .catch((error) => {
      console.error("Delete contact message failed:", error);
      throw error;
    });
