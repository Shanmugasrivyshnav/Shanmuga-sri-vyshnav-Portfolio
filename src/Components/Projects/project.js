import { useState } from "react";
import { MdDownloading } from "react-icons/md";
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
  ApkExpensiveTracker,
  DownloadIcon,
} from "./StyledProjects";

const GitHubLink = [
  {
    gitHublink: "https://github.com/Shanmugasrivyshnav?tab=repositories",
  },
];

const apkDownloadUrl = process.env.REACT_APP_APK_DOWNLOAD_URL;

// Default fallback projects if API doesn't return data
const defaultProjectList = [
  {
    title: "Tracker Daily Expensive",
    description:
      "Track expenses and spending with incoming and outgoing messages once you receive and get.",
    tags: ["React Native", "JS", "CSS"],
    github: "",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio to showcase projects, skills, and contact details.",
    tags: ["React.js", "Styled Components", "Responsive"],
    github:
      "https://github.com/Shanmugasrivyshnav/Shanmuga-sri-vyshnav-Portfolio",
  },
  {
    title: "Expense Manage UI",
    description: "Adding expenses with own for tracking what we have spending.",
    tags: ["React.js", "CSS", "JS"],
    github:
      "https://github.com/Shanmugasrivyshnav/basic-expensive-manager_React",
  },
  {
    title: "Crypto Currency UI",
    description:
      "A Frontend cryptocurrency to showcase  Prices and Crypto details.",
    tags: ["React.js", "Responsive"],
    github: "https://github.com/Shanmugasrivyshnav/cryptocurrency-ui-React-",
  },
  {
    title: "Login UI",
    description:
      "A basic of Login page with react UI with username and password.",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Shanmugasrivyshnav/basic_login-app_React",
  },
];

const Projects = () => {
  const [projectList] = useState(defaultProjectList);

  return (
    <ProjectsSection id="projects">
      <SectionHeader>
        <SectionTitle>Projects</SectionTitle>
        <SectionIntro>
          A selection of recent work that highlights my ability to build modern,
          usable, and performant applications.
        </SectionIntro>
      </SectionHeader>

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
      {apkDownloadUrl && (
        <ApkExpensiveTracker
          href={apkDownloadUrl}
          target="_blank"
          rel="noreferrer"
        >
          <DownloadIcon>
            <MdDownloading />
          </DownloadIcon>
          Tracker Daily Expensive
        </ApkExpensiveTracker>
      )}
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
