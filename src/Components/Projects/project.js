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
const projectList = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio to showcase projects, skills, and contact details.",
    tags: ["React", "Styled Components", "Responsive"],
    github:
      "https://github.com/Shanmugasrivyshnav/Shanmuga-sri-vyshnav-Portfolio",
  },
  {
    title: "Crypto Currency Ui",
    description:
      "A Frontend cryptocurrency to showcase  Prices and Crypto details.",
    tags: ["React", "Responsive"],
    github: "https://github.com/Shanmugasrivyshnav/cryptocurrency-ui-React-",
  },
  {
    title: "Crypto Currency Ui",
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
