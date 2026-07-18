import {
  AboutSection,
  SectionHeader,
  SectionTitle,
  SectionIntro,
  AboutGrid,
  AboutCard,
  AboutCardTitle,
  AboutCardContent,
  AboutList,
  AboutListItem,
  AboutLabel,
  AboutValue,
} from "./StyledAboutme";

import { BsCheckCircleFill } from "react-icons/bs";

const highlights = [
  {
    title: "Full Stack Development",
    content:
      "Building modern applications with React, Node.js, and clean architecture.",
  },
  {
    title: "Production Leadership",
    content: "3+ years leading teams in production and process optimization.",
  },
  {
    title: "Analytical Mindset",
    content:
      "Strong problem solving, debugging, and process improvement experience.",
  },
  {
    title: "Team Collaboration",
    content:
      "Working well with stakeholders, designers, and engineers to ship quality software.",
  },
];

const skillDetails = [
  { label: "Location", value: "Anantapur, Andhra Pradesh" },
  { label: "Email", value: "Shanmukhasri00@gmail.com" },
  { label: "Availability", value: "Open to full-time & freelance" },
  { label: "Focus", value: "Web & product experiences" },
];

const AboutMe = () => {
  return (
    <AboutSection id="about">
      <SectionHeader>
        <SectionTitle>About Me</SectionTitle>
        <SectionIntro>
          I combine technical passion with practical leadership experience to
          deliver polished web applications and reliable digital products.
          Results driven Developer with a background in Production Management
          and a Active foundation in full-stack web development. Active at
          building scalable systems, optimizing logic, and translating complex
          data into actionable insights. Strong team managment and process
          improvement.
        </SectionIntro>
      </SectionHeader>

      <AboutGrid>
        <div>
          {highlights.map((item) => (
            <AboutCard key={item.title}>
              <AboutCardTitle>
                <BsCheckCircleFill /> {item.title}
              </AboutCardTitle>
              <AboutCardContent>{item.content}</AboutCardContent>
            </AboutCard>
          ))}
        </div>

        <div>
          <AboutCard>
            <h3>Quick Facts</h3>
            <AboutList>
              {skillDetails.map((item) => (
                <AboutListItem key={item.label}>
                  <AboutLabel>{item.label}</AboutLabel>
                  <AboutValue>{item.value}</AboutValue>
                </AboutListItem>
              ))}
            </AboutList>
          </AboutCard>
        </div>
      </AboutGrid>
    </AboutSection>
  );
};

export default AboutMe;
