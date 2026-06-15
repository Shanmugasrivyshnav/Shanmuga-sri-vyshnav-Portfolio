import {
  SocialSection,
  SectionHeader,
  SectionTitle,
  SectionIntro,
  SocialLinks,
  SocialLinkItem,
  SocialLink,
} from "./StyledSocialAccounts";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Shanmugasrivyshnav",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shanmugasrivyshnav",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/shanmugasrivyshnav",
    icon: FaInstagram,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/shanmugasrivyshnav",
    icon: FaTwitter,
  },
];

const ScocialAccount = () => {
  return (
    <SocialSection id="socials">
      <SectionHeader>
        <SectionTitle>Connect with Me</SectionTitle>
        <SectionIntro>
          Follow my journey, find project updates, and reach out on the
          platforms I use most.
        </SectionIntro>
      </SectionHeader>

      <SocialLinks>
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <SocialLinkItem key={social.label}>
              <SocialLink href={social.href} target="_blank" rel="noreferrer">
                <Icon size={22} />
                {social.label}
              </SocialLink>
            </SocialLinkItem>
          );
        })}
      </SocialLinks>
    </SocialSection>
  );
};

export default ScocialAccount;
