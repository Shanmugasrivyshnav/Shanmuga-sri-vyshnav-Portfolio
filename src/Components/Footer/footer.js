import {
  FooterContainer,
  FooterContent,
  FooterText,
  FooterNav,
  FooterLink,
} from "./StyledFooter";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © {new Date().getFullYear()} KG Shanmuga Sri Vyshnav. All rights
          reserved.
        </FooterText>
        <FooterNav>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterNav>
      </FooterContent>
    </FooterContainer>
  );
};
export default Footer;
