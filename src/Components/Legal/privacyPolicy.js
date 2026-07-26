import Seo from "../Seo/Seo";
import {
  LegalSection,
  LegalTitle,
  LegalUpdated,
  LegalHeading,
  LegalParagraph,
  LegalList,
  LegalLink,
} from "./StyledLegal";

const LAST_UPDATED = "July 26, 2026";

const PrivacyPolicy = () => {
  return (
    <LegalSection id="privacy-policy">
      <Seo
        title="Privacy Policy | Shanmuga Sri Vyshnav"
        description="Privacy Policy for shanmuga-sri-vyshnav-portfolio.vercel.app, covering data collection, cookies, and third-party advertising."
        path="/privacy-policy"
      />

      <LegalTitle>Privacy Policy</LegalTitle>
      <LegalUpdated>Last updated: {LAST_UPDATED}</LegalUpdated>

      <LegalParagraph>
        This Privacy Policy describes how this website
        ("shanmuga-sri-vyshnav-portfolio.vercel.app," "we," "us") collects,
        uses, and discloses information when you visit.
      </LegalParagraph>

      <LegalHeading>1. Information We Collect</LegalHeading>
      <LegalParagraph>
        <strong>Information you provide:</strong> If you use the contact
        form, we collect your name, email address, and message content
        solely to respond to your inquiry.
      </LegalParagraph>
      <LegalParagraph>
        <strong>Automatically collected information:</strong> Like most
        websites, we automatically collect certain information through
        cookies and similar technologies, including IP address, browser
        type, device type, pages visited, and time spent on pages, via
        analytics tools and advertising partners.
      </LegalParagraph>

      <LegalHeading>2. Cookies and Tracking Technologies</LegalHeading>
      <LegalParagraph>
        We use cookies to operate the site, understand how visitors use it,
        and — where applicable — to serve relevant advertising. See our{" "}
        <LegalLink href="/cookie-policy">Cookie Policy</LegalLink> for full
        details.
      </LegalParagraph>

      <LegalHeading>3. Google AdSense and Third-Party Advertising</LegalHeading>
      <LegalParagraph>
        This site may display advertisements served by Google AdSense and
        other third-party ad networks. These parties may use cookies, web
        beacons, and similar technologies to collect information about your
        visits to this and other sites to provide advertisements about
        goods and services of interest to you.
      </LegalParagraph>
      <LegalParagraph>
        Google's use of advertising cookies enables it and its partners to
        serve ads based on your visits to this and other sites. You may opt
        out of personalized advertising via{" "}
        <LegalLink
          href="https://adssettings.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Ads Settings
        </LegalLink>{" "}
        or{" "}
        <LegalLink
          href="https://www.aboutads.info/choices/"
          target="_blank"
          rel="noopener noreferrer"
        >
          aboutads.info
        </LegalLink>
        .
      </LegalParagraph>

      <LegalHeading>4. How We Use Information</LegalHeading>
      <LegalList>
        <li>To respond to messages sent through the contact form</li>
        <li>To understand and improve site content and performance</li>
        <li>To serve relevant advertising through third-party networks</li>
        <li>To maintain the security and integrity of the site</li>
      </LegalList>

      <LegalHeading>5. Data Sharing</LegalHeading>
      <LegalParagraph>
        We do not sell your personal information. We share limited data
        with service providers (hosting, analytics, and advertising
        partners such as Google) strictly to operate and monetize the
        site, subject to their own privacy policies.
      </LegalParagraph>

      <LegalHeading>6. Your Rights</LegalHeading>
      <LegalParagraph>
        Depending on your location, you may have the right to access,
        correct, or delete your personal data, and to opt out of certain
        data processing, including targeted advertising. Contact us using
        the details below to exercise these rights.
      </LegalParagraph>

      <LegalHeading>7. Children's Privacy</LegalHeading>
      <LegalParagraph>
        This site is not directed at children under 13, and we do not
        knowingly collect personal information from children under 13.
      </LegalParagraph>

      <LegalHeading>8. Changes to This Policy</LegalHeading>
      <LegalParagraph>
        We may update this Privacy Policy from time to time. The "Last
        updated" date above reflects the most recent changes.
      </LegalParagraph>

      <LegalHeading>9. Contact Us</LegalHeading>
      <LegalParagraph>
        Questions about this policy can be sent via the{" "}
        <LegalLink href="/contact">contact page</LegalLink> or to{" "}
        <LegalLink href="mailto:Shanmukhasri00@gmail.com">
          Shanmukhasri00@gmail.com
        </LegalLink>
        .
      </LegalParagraph>
    </LegalSection>
  );
};

export default PrivacyPolicy;
