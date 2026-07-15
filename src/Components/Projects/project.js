import { useEffect, useState } from "react";
import { getProjects } from "../../services/api.js";
import {
  ProjectsSection,
  SectionHeader,
  SectionTitle,
  SectionIntro,
  ProjectsGrid,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  ProjectTag,
  ProjectLinks,
  ProjectLink,
  MoreOnGitHubContainer,
  HeadingGitHub,
  LinkGitHub,
} from "./StyledProjects";

const GitHubLink = [
  {
    gitHublink: "https://github.com/Shanmugasrivyshnav?tab=repositories",
  },
];

// Default fallback projects if API doesn't return data
const defaultProjectList = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio to showcase projects, skills, and contact details.",
    tags: ["React", "Styled Components", "Responsive"],
    github:
      "https://github.com/Shanmugasrivyshnav/Shanmuga-sri-vyshnav-Portfolio",
  },
  {
    title: "Crypto Currency UI",
    description:
      "A Frontend cryptocurrency to showcase  Prices and Crypto details.",
    tags: ["React", "Responsive"],
    github: "https://github.com/Shanmugasrivyshnav/cryptocurrency-ui-React-",
  },
  {
    title: "Login UI",
    description:
      "A basic of Login page with react UI with username and password.",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Shanmugasrivyshnav/basic_login-app_React",
  },
  {
    title: "Expense Tracker UI",
    description:
      "Track expenses and visualize spending with charts and filters.",
    tags: ["React", "CSS", "JS"],
    github:
      "https://github.com/Shanmugasrivyshnav/basic-expensive-manager_React",
  },
];

const Projects = () => {
  const [projectList, setProjectList] = useState(defaultProjectList);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        if (data && Array.isArray(data)) {
          // Map backend data to match component expectations
          const mappedProjects = data.map((project) => ({
            title: project.title,
            description: project.description,
            tags: project.tags?.map((t) => t.tag?.name || t.name) || [],
            github: project.github_url || project.github,
          }));
          setProjectList(
            mappedProjects.length > 0 ? mappedProjects : defaultProjectList,
          );
        }
      } catch (err) {
        console.warn("Failed to fetch projects, using defaults:", err);
        setError(null); // Don't show error, just use defaults
        setProjectList(defaultProjectList);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsSection id="projects">
      <SectionHeader>
        <SectionTitle>Projects</SectionTitle>
        <SectionIntro>
          A selection of recent work that highlights my ability to build modern,
          usable, and performant applications.
        </SectionIntro>
      </SectionHeader>

      {loading && (
        <div style={{ textAlign: "center", padding: "2rem", color: "#666" }}>
          <p>Loading projects...</p>
        </div>
      )}

      {!loading && error && (
        <div style={{ textAlign: "center", padding: "2rem", color: "#d32f2f" }}>
          <p>Error loading projects. Showing default projects.</p>
        </div>
      )}

      <ProjectsGrid>
        {projectList.map((project) => (
          <ProjectCard key={project.title}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTags>
              {project.tags.map((tag) => (
                <ProjectTag key={tag}>#{tag}</ProjectTag>
              ))}
            </ProjectTags>
            <ProjectLinks>
              <ProjectLink
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      <MoreOnGitHubContainer>
        <HeadingGitHub>More on GitHub Repository</HeadingGitHub>
        <LinkGitHub
          href={GitHubLink[0].gitHublink}
          target="_blank"
          alt="Link of GitHub"
        >
          Click to view Repositories
        </LinkGitHub>
      </MoreOnGitHubContainer>
    </ProjectsSection>
  );
};

export default Projects;
