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
        {/* To use your own file, replace the existing PDF at public/resume.pdf
        with your resume document. */}
        <ResumeTitle>Full-Stack Resume Download</ResumeTitle>
        <ResumeButton href="/resume.pdf" download>
          Download Resume
        </ResumeButton>
      </ResumeContent>
      <ResumeContent>
        <ResumeTitle>Frontend Resume Download</ResumeTitle>
        <ResumeButton href="/frontend_Resume.pdf" download>
          Download Resume
        </ResumeButton>
      </ResumeContent>
      <ResumeContent>
        <ResumeTitle>Backend Resume Download</ResumeTitle>
        <ResumeButton href="/backend_Resume.pdf" download>
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
