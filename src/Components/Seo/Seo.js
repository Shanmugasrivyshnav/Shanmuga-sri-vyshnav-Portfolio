import { Helmet } from "react-helmet-async";

const SITE_URL = "https://shanmuga-sri-vyshnav-portfolio.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/web-logo-shannu-png.png`;

/**
 * Drop this at the top of every route component to give each page its
 * own title, description, canonical URL, and Open Graph/Twitter tags.
 * Without this, every route on a CRA site shares the single title/
 * description in public/index.html, which reads as duplicate/thin
 * content to crawlers.
 *
 * Usage:
 *   <Seo
 *     title="About Me | Shanmuga Sri Vyshnav"
 *     description="..."
 *     path="/about"
 *   />
 */
const Seo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  noindex = false,
}) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Shanmuga Sri Vyshnav Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
