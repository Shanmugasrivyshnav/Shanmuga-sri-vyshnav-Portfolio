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
          href="/KG ShanmugaSriVyshnav-FullStack-Resume.pdf"
          download="ShanmugaSriVyshnav-Full-Stack-Resume.pdf"
        >
          Download Resume
        </ResumeButton>
      </ResumeContent>
      <ResumeContent>
        <ResumeTitle>Frontend Resume Download</ResumeTitle>
        <ResumeButton
          href="/KG-ShanmugaSriVyshnav-frontend-Resume.pdf"
          download="ShanmugaSriVyshnav-Frontend-Resume.pdf"
        >
          Download Resume
        </ResumeButton>
      </ResumeContent>
      <ResumeContent>
        <ResumeTitle>Backend Resume Download</ResumeTitle>
        <ResumeButton
          href="/KG-ShanmugaSriVyshnav-Backend-Resume.pdf"
          download="ShanmugaSriVyshnav-Backend-Resume.pdf"
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
