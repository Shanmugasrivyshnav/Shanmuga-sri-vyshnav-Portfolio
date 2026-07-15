import { useState } from "react";
import { submitContactForm } from "../../services/api.js";
import {
  ContactSection,
  ContactGrid,
  ContactCard,
  ContactTitle,
  ContactText,
  ContactInfoList,
  ContactInfoItem,
  ContactForm,
  ContactInput,
  ContactTextarea,
  ContactButton,
  StatusMessage,
} from "./StyledContacts";

const contactDetails = [
  {
    label: "Email",
    value: "Shanmukhasri00@gmail.com",
    href: "mailto:Shanmukhasri00@gmail.com",
  },
  { label: "Phone", value: "Click To Know", href: "tel:+917995247940" },
  {
    label: "Location",
    value: "Anantapur, Andhra Pradesh",
    href: "https://maps.google.com/?q=Anantapur",
  },
];

const Contacts = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await submitContactForm({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      window.setTimeout(() => setStatus(null), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      window.setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <ContactSection id="contact">
      <ContactGrid>
        <ContactCard>
          <ContactTitle>Let's Work Together</ContactTitle>
          <ContactText>
            Have a project, opportunity, or question? I’m available for contract
            and full-time work. Send a message and I’ll respond as soon as
            possible.
          </ContactText>

          <ContactInfoList>
            {contactDetails.map((item) => (
              <ContactInfoItem
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <strong>{item.label}:</strong> {item.value}
              </ContactInfoItem>
            ))}
          </ContactInfoList>
        </ContactCard>

        <ContactCard>
          <ContactTitle>Contact Form</ContactTitle>
          <ContactForm onSubmit={handleSubmit}>
            <ContactInput
              type="text"
              placeholder="Your name"
              value={form.name}
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <ContactInput
              type="email"
              placeholder="Your email"
              value={form.email}
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <ContactInput
              type="text"
              placeholder="Subject"
              value={form.subject}
              required
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            <ContactTextarea
              placeholder="Your message"
              value={form.message}
              required
              rows={6}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <ContactButton type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </ContactButton>
            {status && (
              <StatusMessage
                $success={status === "success"}
                $error={status === "error"}
              >
                {status === "sending"
                  ? "Sending message..."
                  : status === "error"
                    ? "Failed to send message. Please try again."
                    : "Message sent successfully!"}
              </StatusMessage>
            )}
          </ContactForm>
        </ContactCard>
      </ContactGrid>
    </ContactSection>
  );
};

export default Contacts;
