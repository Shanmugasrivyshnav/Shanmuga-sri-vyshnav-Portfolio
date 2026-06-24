import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colorBgSecondary};
  padding: 32px 40px;
  border-top: 1px solid ${(props) => props.theme.colorBorder};
  @media (max-width: 880px) {
    padding: 28px 24px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 720px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colorTextMuted};
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 720px) {
    justify-content: center;
  }
  justify-content: center;
  flex-direction: column;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colorText};
  font-weight: 600;
  transition: color 0.25s ease;

  &:hover {
    color: ${(props) => props.theme.colorAccent};
  }
`;
