import styled from "styled-components";

export const AboutSection = styled.section`
  background: ${(props) => props.theme.colorBgSecondary};
  padding: 80px 40px;
  @media (max-width: 880px) {
    padding: 64px 24px;
  }
`;

export const SectionHeader = styled.div`
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  margin: 0 0 18px;
`;

export const SectionIntro = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colorTextMuted};
  line-height: 1.8;
  // max-width: 620px;
  width:50%;
  margin-left: auto;
  margin-right: auto;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 32px;
  max-width: 1160px;
  margin: 0 auto;
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutCard = styled.div`
  background: ${(props) => props.theme.colorCard};
  border: 1px solid ${(props) => props.theme.colorBorder};
  border-radius: 28px;
  padding: 28px;
  box-shadow: ${(props) => props.theme.shadow};
  color: ${(props) => props.theme.colorText};
  margin-bottom: 24px;
  h3 {
    margin-top: 0;
    margin-bottom: 18px;
  }
`;

export const AboutCardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 14px;
  font-size: 17px;
`;

export const AboutCardContent = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colorTextMuted};
  line-height: 1.85;
`;

export const AboutList = styled.div`
  display: grid;
  gap: 14px;
`;

export const AboutListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 16px;
  background: ${(props) => props.theme.colorBg};
  border: 1px solid ${(props) => props.theme.colorBorder};
`;

export const AboutLabel = styled.span`
  font-size: 15px;
  color: ${(props) => props.theme.colorTextMuted};
`;

export const AboutValue = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colorText};
`;
