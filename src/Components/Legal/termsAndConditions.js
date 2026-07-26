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

const TermsAndConditions = () => {
  return (
    <LegalSection id="terms-and-conditions">
      <Seo
        title="Terms and Conditions | Shanmuga Sri Vyshnav"
        description="Terms and Conditions for using shanmuga-sri-vyshnav-portfolio.vercel.app."
        path="/terms-and-conditions"
      />

      <LegalTitle>Terms and Conditions</LegalTitle>
      <LegalUpdated>Last updated: {LAST_UPDATED}</LegalUpdated>

      <LegalParagraph>
        By accessing this website, you agree to be bound by these Terms and
        Conditions. If you do not agree, please discontinue use of this
        site.
      </LegalParagraph>

      <LegalHeading>1. Intellectual Property</LegalHeading>
      <LegalParagraph>
        All content on this site — including text, project descriptions,
        code samples, graphics, and design — is the original work of
        Shanmuga Sri Vyshnav unless otherwise credited, and is protected by
        applicable copyright law. You may not reproduce, redistribute, or
        republish this content without prior written permission.
      </LegalParagraph>

      <LegalHeading>2. Acceptable Use</LegalHeading>
      <LegalParagraph>You agree not to use this website to:</LegalParagraph>
      <LegalList>
        <li>Attempt unauthorized access to any part of the site or its infrastructure</li>
        <li>Introduce malware, viruses, or harmful code</li>
        <li>Scrape or harvest data in violation of applicable law</li>
        <li>Misrepresent your identity or affiliation with this site</li>
      </LegalList>

      <LegalHeading>3. Third-Party Links and Advertising</LegalHeading>
      <LegalParagraph>
        This site may contain links to third-party websites and may display
        advertising served by third parties, including Google AdSense. We
        are not responsible for the content, accuracy, or practices of
        third-party sites or advertisers.
      </LegalParagraph>

      <LegalHeading>4. No Warranty</LegalHeading>
      <LegalParagraph>
        This site and its content are provided "as is" without warranties
        of any kind, express or implied. While reasonable care is taken to
        keep information accurate and up to date, we make no guarantee of
        completeness or accuracy.
      </LegalParagraph>

      <LegalHeading>5. Limitation of Liability</LegalHeading>
      <LegalParagraph>
        To the fullest extent permitted by law, Shanmuga Sri Vyshnav shall
        not be liable for any indirect, incidental, or consequential
        damages arising from your use of this website.
      </LegalParagraph>

      <LegalHeading>6. Changes to These Terms</LegalHeading>
      <LegalParagraph>
        These Terms may be updated periodically. Continued use of the site
        after changes constitutes acceptance of the revised Terms.
      </LegalParagraph>

      <LegalHeading>7. Governing Law</LegalHeading>
      <LegalParagraph>
        These Terms are governed by the laws of India, without regard to
        conflict-of-law principles.
      </LegalParagraph>

      <LegalHeading>8. Contact</LegalHeading>
      <LegalParagraph>
        Questions about these Terms can be sent via the{" "}
        <LegalLink href="/contact">contact page</LegalLink>.
      </LegalParagraph>
    </LegalSection>
  );
};

export default TermsAndConditions;
