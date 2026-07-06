import {
  ResumeSection,
  ResumeContent,
  ResumeTitle,
  ResumeText,
  ResumeButton,
  ResumeNotice,
} from "./StyledResume";

const Resume = () => {
  return (
    <ResumeSection id="resume">
      <ResumeContent>
        <ResumeText>
          Click the button below to download my resume.
          <br />
          It contains my work experience, skills, and contact information.
        </ResumeText>
        <ResumeTitle>Full-Stack Resume Download</ResumeTitle>
        <ResumeButton
          href="/kg_shanmuga_sri_vyshnav_fullstack_resume.pdf"
          download="Full-Stack-Resume.pdf"
        >
          Download Resume
        </ResumeButton>
      </ResumeContent>
      <ResumeContent>
        <ResumeTitle>Frontend Resume Download</ResumeTitle>
        <ResumeButton
          href="/kg_shanmuga_sri_vyshnav_frontend_resume.pdf"
          download="Frontend-Resume.pdf"
        >
          Download Resume
        </ResumeButton>
      </ResumeContent>
      <ResumeContent>
        <ResumeTitle>Backend Resume Download</ResumeTitle>
        <ResumeButton
          href="/kg_shanmuga_sri_vyshnav_backend_resume.pdf"
          download="Backend-Resume.pdf"
        >
          Download Resume
        </ResumeButton>
      </ResumeContent>
      <ResumeNotice>
        This PDF includes my experience, skills, and contact details.
      </ResumeNotice>
    </ResumeSection>
  );
};

export default Resume;
