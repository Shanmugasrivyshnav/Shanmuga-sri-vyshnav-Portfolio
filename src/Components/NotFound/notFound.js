// import { Link } from "react-router-dom";
import Seo from "../Seo/Seo";

import { Wrapper, Code, Message, HomeLink } from "./StyledNotFound";

const NotFound = () => {
  return (
    <Wrapper>
      <Seo
        title="Page Not Found | Shanmuga Sri Vyshnav"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />
      <Code>404</Code>
      <Message>
        The page you're looking for doesn't exist or may have been moved. Check
        the URL, or head back to the homepage.
      </Message>
      <HomeLink to="/">Return Home</HomeLink>
    </Wrapper>
  );
};

export default NotFound;
