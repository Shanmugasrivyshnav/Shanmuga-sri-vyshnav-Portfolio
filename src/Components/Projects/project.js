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
} from "./StyledProjects";

const projectList = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio to showcase projects, skills, and contact details.",
    tags: ["React", "Styled Components", "Responsive"],
    github: "",
  },
  {
    title: "Crypto Currency Ui",
    description:
      "A Frontend cryptocurrency to showcase  Prices and Crypto details.",
    tags: ["React", "Responsive"],
    github: "https://github.com/Shanmugasrivyshnav/cryptocurrency-ui-React-",
  },
  {
    title: "Task Manager App",
    description:
      "A full stack task management system with CRUD and authentication support.",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Shanmugasrivyshnav/task-manager-app",
  },
  {
    title: "Expense Tracker",
    description:
      "Track expenses and visualize spending with charts and filters.",
    tags: ["React", "Chart.js", "CSS"],
    github: "https://github.com/Shanmugasrivyshnav/expense-tracker",
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
    </ProjectsSection>
  );
};

export default Projects;
