import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
   color-scheme: ${(props) => props.theme.colorScheme};
    background-color: ${(props) => props.theme.colorBg};
    background-image:
      linear-gradient(90deg, ${(props) => props.theme.textureLine} 1px, transparent 1px),
      linear-gradient(180deg, ${(props) => props.theme.textureLine} 1px, transparent 1px),
      radial-gradient(circle at top left, ${(props) => props.theme.textureLineSoft}, transparent 18%),
      radial-gradient(circle at bottom right, ${(props) => props.theme.textureLineSoft}, transparent 22%);
    background-size: 40px 40px, 40px 40px, 300px 300px, 300px 300px;
    background-position: 0 0, 0 0, 20% 20%, 80% 80%;
    color: ${(props) => props.theme.colorText};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 0.3s ease, color 0.3s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
  }

  #root {
    min-height: 100vh;
    background: ${(props) => props.theme.colorBg};
  }

  .gradient-text {
    background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
