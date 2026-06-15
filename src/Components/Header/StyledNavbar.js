import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 16px 40px;
  background-color: ${(props) => props.theme.colorBgSecondary};
  color: ${(props) => props.theme.colorText};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 16px 20px;
    position: relative;
  }
`;

export const HeaderImageContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 120px;
  }
`;

export const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  color: ${(props) => props.theme.colorText};
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 20;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    color: #007bff;
    transform: scale(1.1);
  }
`;

export const HeaderElementsContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    background-color: ${(props) => props.theme.colorBgSecondary};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    max-height: ${(props) => (props.isOpen ? "400px" : "0")};
    overflow: hidden;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  }
`;

export const HeaderElement = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colorText};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  padding-right: 30px;

  &.active {
    color: #1d4ed8;
    font-weight: 700;
  }

  &:hover {
    color: #007bff;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #007bff;
    transition: width 0.3s ease-in-out;
  }

  &.active::after {
    width: 100%;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 0;
    width: 100%;
    text-align: center;

    &::after {
      display: none;
    }
  }
`;

export const ThemeToggleBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: ${(props) =>
    props.theme.colorScheme === "dark" ? "#1e1e1e" : "#f0f0f0"};
  color: ${(props) =>
    props.theme.colorScheme === "dark" ? "#ffd700" : "#ff9500"};
  border: 2px solid
    ${(props) => (props.theme.colorScheme === "dark" ? "#ffd700" : "#ff9500")};
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.theme.colorScheme === "dark" ? "#ffd700" : "#ff9500"};
    color: ${(props) => (props.theme.colorScheme === "dark" ? "#000" : "#fff")};
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
    gap: 6px;
  }
`;
export const HeaderElementIcons = styled.span`
  margin: 2px;
  padding: 2px;
`;
