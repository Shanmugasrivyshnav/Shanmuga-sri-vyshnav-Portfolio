import {
  FooterContainer,
  FooterContent,
  FooterText,
  FooterLinkContainer,
  FooterNav,
  FooterLink,
} from "./StyledFooter";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkContainer>
        <FooterNav>
          <FooterLink href="/home">Home</FooterLink>
          <FooterLink href="/about">About me </FooterLink>
          <FooterLink href="/projects">Projects</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterNav>
      </FooterLinkContainer>
      <FooterContent>
        <FooterText>
          © {new Date().getFullYear()} KG Shanmuga Sri Vyshnav. All rights
          reserved.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};
export default Footer;
