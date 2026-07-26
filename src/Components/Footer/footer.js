import { Link } from "react-router-dom";
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
          <FooterLink as={Link} to="/">
            Home
          </FooterLink>
          <FooterLink as={Link} to="/about">
            About me
          </FooterLink>
          <FooterLink as={Link} to="/projects">
            Projects
          </FooterLink>
          <FooterLink as={Link} to="/certificates">
            Certificates
          </FooterLink>
          <FooterLink as={Link} to="/resume">
            Resume
          </FooterLink>
          <FooterLink as={Link} to="/contact">
            Contact
          </FooterLink>
        </FooterNav>
        <FooterNav>
          <FooterLink as={Link} to="/privacy-policy">
            Privacy Policy
          </FooterLink>
          <FooterLink as={Link} to="/terms-and-conditions">
            Terms &amp; Conditions
          </FooterLink>
          <FooterLink as={Link} to="/cookie-policy">
            Cookie Policy
          </FooterLink>
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
