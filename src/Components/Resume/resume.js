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
        <ResumeTitle>Resume Download</ResumeTitle>
        <ResumeText>
          Click the button below to download my resume.
          <br />
          It contains my work experience, skills, and contact information.
        </ResumeText>
        {/* To use your own file, replace the existing PDF at public/resume.pdf
        with your resume document. */}
        <ResumeButton href="/resume.pdf" download>
          Download Resume
        </ResumeButton>
        <ResumeNotice>
          This PDF includes my experience, skills, and contact details.
        </ResumeNotice>
      </ResumeContent>
    </ResumeSection>
  );
};

export default Resume;
