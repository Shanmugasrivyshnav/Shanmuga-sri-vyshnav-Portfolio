import Seo from "../Seo/Seo";
import {
  LegalSection,
  LegalTitle,
  LegalUpdated,
  LegalHeading,
  LegalParagraph,
  LegalLink,
  LegalTable,
} from "./StyledLegal";

const LAST_UPDATED = "July 26, 2026";

const CookiePolicy = () => {
  return (
    <LegalSection id="cookie-policy">
      <Seo
        title="Cookie Policy | Shanmuga Sri Vyshnav"
        description="Details on the cookies used on shanmuga-sri-vyshnav-portfolio.vercel.app, including analytics and advertising cookies."
        path="/cookie-policy"
      />

      <LegalTitle>Cookie Policy</LegalTitle>
      <LegalUpdated>Last updated: {LAST_UPDATED}</LegalUpdated>

      <LegalParagraph>
        This Cookie Policy explains what cookies are, which ones this site
        uses, and how you can control them.
      </LegalParagraph>

      <LegalHeading>1. What Are Cookies?</LegalHeading>
      <LegalParagraph>
        Cookies are small text files stored on your device by your browser.
        They help websites remember information about your visit and are
        widely used to make sites work, or work more efficiently, as well
        as to provide reporting information and support advertising.
      </LegalParagraph>

      <LegalHeading>2. Cookies We Use</LegalHeading>
      <LegalTable>
        <thead>
          <tr>
            <th>Category</th>
            <th>Purpose</th>
            <th>Example providers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Essential</td>
            <td>Required for basic site functionality</td>
            <td>Vercel</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>Understand how visitors use the site</td>
            <td>Google Analytics</td>
          </tr>
          <tr>
            <td>Advertising</td>
            <td>Serve and measure relevant ads</td>
            <td>Google AdSense / DoubleClick</td>
          </tr>
        </tbody>
      </LegalTable>

      <LegalHeading>3. Managing Cookies</LegalHeading>
      <LegalParagraph>
        Most browsers let you refuse or delete cookies via their settings.
        Blocking all cookies may affect site functionality. For advertising
        cookies specifically, you can opt out via{" "}
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

      <LegalHeading>4. More Information</LegalHeading>
      <LegalParagraph>
        For details on how information collected via cookies is used more
        broadly, see our <LegalLink href="/privacy-policy">Privacy Policy</LegalLink>.
      </LegalParagraph>
    </LegalSection>
  );
};

export default CookiePolicy;
