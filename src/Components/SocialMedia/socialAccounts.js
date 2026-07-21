import {
  SocialSection,
  SectionHeader,
  SectionTitle,
  SectionIntro,
  SocialLinks,
  SocialLinkItem,
  SocialLink,
} from "./StyledSocialAccounts";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Shanmugasrivyshnav",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shanmuga-sree-vyshnav/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sha_sync__/",
    icon: FaInstagram,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@shanmukha_sri",
    icon: FaYoutube,
  },
  {
    label: "Twitter",
    href: "https://x.com/shanmukha_sri_",
    icon: FaTwitter,
  },
];

const SocialAccount = () => {
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
              <SocialLink href={social.href} target="_blank" rel="_blank">
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

export default SocialAccount;
