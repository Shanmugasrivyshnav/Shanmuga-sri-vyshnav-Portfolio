import { Helmet } from "react-helmet-async";

/**
 * Person structured data — helps Google understand who the site
 * belongs to (supports E-E-A-T signals). Render this once, in Home.
 * Fill in real values for sameAs (LinkedIn/GitHub), jobTitle, etc.
 */
const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shanmuga Sri Vyshnav",
    url: "https://shanmuga-sri-vyshnav-portfolio.vercel.app/",
    jobTitle: "Full Stack Developer",
    image: "https://shanmuga-sri-vyshnav-portfolio.vercel.app/web-logo-shannu-png.png",
    email: "mailto:Shanmukhasri00@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Anantapur",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Shanmugasrivyshnav",
      "https://www.linkedin.com/in/shanmuga-sree-vyshnav/",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default PersonSchema;
