import styled from "styled-components";

export const SocialSection = styled.section`
  background: ${(props) => props.theme.colorBg};
  padding: 80px 40px;
  @media (max-width: 880px) {
    padding: 64px 24px;
  }
`;

export const SectionHeader = styled.div`
  max-width: 720px;
  margin: 0 auto 40px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  margin: 0 0 16px;
`;

export const SectionIntro = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colorTextMuted};
  line-height: 1.8;
`;

export const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  max-width: 1160px;
  margin: 0 auto;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const SocialLinkItem = styled.div`
  background: ${(props) => props.theme.colorCard};
  border: 1px solid ${(props) => props.theme.colorBorder};
  border-radius: 22px;
  box-shadow: ${(props) => props.theme.shadow};
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 22px 20px;
  color: ${(props) => props.theme.colorText};
  font-size: 16px;
  font-weight: 700;
  transition:
    background 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: ${(props) => props.theme.colorAccentSoft};
    transform: translateY(-2px);
    background-color: transparent;
  }
`;
