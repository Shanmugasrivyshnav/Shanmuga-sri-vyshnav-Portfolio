import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavBar from "./Components/Header/navBar.js";
import Home from "./Components/Home/home.js";
import AboutMe from "./Components/AboutMe/aboutme.js";
import Certificates from "./Components/Certificates/certificates.js";
import Projects from "./Components/Projects/project.js";
import Contacts from "./Components/Contact/contacts.js";
import SocialAccount from "./Components/SocialMedia/socialAccounts.js";
import Resume from "./Components/Resume/resume.js";
import Footer from "./Components/Footer/footer.js";

import "./App.css";
import { GlobalStyle } from "./StyledApp.js";

const lightTheme = {
  colorScheme: "light",
  colorBg: "#eff3ff",
  colorBgSecondary: "#ffffff",
  colorCard: "#ffffff",
  colorBorder: "#dbeafe",
  colorText: "#0f172a",
  colorTextMuted: "#475569",
  colorAccent: "#6366f1",
  colorAccentSoft: "rgba(99, 102, 241, 0.12)",
  textureLine: "rgba(15,23,42,0.08)",
  textureLineSoft: "rgba(15,23,42,0.03)",
  shadow: "0 24px 60px rgba(15, 23, 42, 0.16)",
};

const darkTheme = {
  colorScheme: "dark",
  colorBg: "#020617",
  colorBgSecondary: "#081428",
  colorCard: "#0f172a",
  colorBorder: "#1f2937",
  colorText: "#e2e8f0",
  colorTextMuted: "#94a3b8",
  colorAccent: "#6366f1",
  colorAccentSoft: "rgba(99, 102, 241, 0.12)",
  textureLine: "rgba(255,255,255,0.06)",
  textureLineSoft: "rgba(255,255,255,0.03)",
  shadow: "0 24px 60px rgba(15, 23, 42, 0.16)",
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <SocialAccount />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
