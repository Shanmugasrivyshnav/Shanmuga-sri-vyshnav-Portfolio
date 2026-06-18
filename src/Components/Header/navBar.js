import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdDarkMode,
  MdLightMode,
  MdHomeFilled,
  MdCoPresent,
  MdContactMail,
  MdDashboard,
  MdDownload,
  MdWorkspacePremium,
} from "react-icons/md";
import { RiMenu5Line, RiCloseLine } from "react-icons/ri";
import {
  HeaderContainer,
  HeaderImageContainer,
  Logo,
  HeaderElementsContainer,
  HeaderElement,
  ThemeToggleBtn,
  MobileMenuBtn,
  HeaderElementIcons,
} from "./StyledNavbar";

const NavBar = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const darkLogo =
    "https://res.cloudinary.com/dhdmdsvy1/image/upload/v1767538937/main-logo_shanmukha_png_k3ixxy.png";
  const lightLogo =
    "https://res.cloudinary.com/dhdmdsvy1/image/upload/v1781437061/main-logo-light-mode-png_zxpc6y.png";

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <HeaderImageContainer>
        <Logo src={isDarkMode ? lightLogo : darkLogo} alt="Portfolio Logo" />
      </HeaderImageContainer>

      <MobileMenuBtn onClick={toggleMenu} isDarkMode={isDarkMode}>
        {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu5Line />}
      </MobileMenuBtn>

      <HeaderElementsContainer isOpen={isMobileMenuOpen}>
        <HeaderElement
          as={NavLink}
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={() => setIsMobileMenuOpen(false)}
          isDarkMode={isDarkMode}
        >
          <HeaderElementIcons>
            <MdHomeFilled />
          </HeaderElementIcons>
          Home
        </HeaderElement>
        <HeaderElement
          as={NavLink}
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={() => setIsMobileMenuOpen(false)}
          isDarkMode={isDarkMode}
        >
          <HeaderElementIcons>
            <MdCoPresent />
          </HeaderElementIcons>
          About
        </HeaderElement>
        <HeaderElement
          as={NavLink}
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={() => setIsMobileMenuOpen(false)}
          isDarkMode={isDarkMode}
        >
          <HeaderElementIcons>
            <MdDashboard />
          </HeaderElementIcons>
          Projects
        </HeaderElement>
        <HeaderElement
          as={NavLink}
          to="/certifecates"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={() => setIsMobileMenuOpen(false)}
          isDarkMode={isDarkMode}
        >
          <HeaderElementIcons>
            <MdWorkspacePremium />
          </HeaderElementIcons>
          Certificates
        </HeaderElement>
        <HeaderElement
          as={NavLink}
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={() => setIsMobileMenuOpen(false)}
          isDarkMode={isDarkMode}
        >
          <HeaderElementIcons>
            <MdContactMail />
          </HeaderElementIcons>
          Contact
        </HeaderElement>
        <HeaderElement
          as={NavLink}
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={() => setIsMobileMenuOpen(false)}
          isDarkMode={isDarkMode}
        >
          <HeaderElementIcons>
            <MdDownload />
          </HeaderElementIcons>
          Resume
        </HeaderElement>
        <ThemeToggleBtn onClick={toggleTheme} isDarkMode={isDarkMode}>
          {isDarkMode ? (
            <>
              <MdLightMode /> Light
            </>
          ) : (
            <>
              <MdDarkMode /> Dark
            </>
          )}
        </ThemeToggleBtn>
      </HeaderElementsContainer>
    </HeaderContainer>
  );
};
export default NavBar;
