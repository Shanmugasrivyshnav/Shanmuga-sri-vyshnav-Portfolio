import styled from "styled-components";

export const AboutSection = styled.section`
  background: ${(props) => props.theme.colorBgSecondary};
  padding: 80px 40px;

  @media (max-width: 880px) {
    padding: 64px 24px;
  }

  @media (max-width: 600px) {
    padding: 50px 16px;
  }

  @media (max-width: 400px) {
    padding: 45px 12px;
  }
`;

export const SectionHeader = styled.div`
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;

  @media (max-width: 600px) {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  margin: 0 0 18px;

  @media (max-width: 600px) {
    font-size: 27px;
    margin-bottom: 14px;
  }

  @media (max-width: 400px) {
    font-size: 25px;
  }
`;

export const SectionIntro = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colorTextMuted};
  line-height: 1.8;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 1.7;
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 32px;
  max-width: 1160px;
  margin: 0 auto;
  min-width: 0;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
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
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;

  h3 {
    margin-top: 0;
    margin-bottom: 18px;
  }

  @media (max-width: 600px) {
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 18px;
  }

  @media (max-width: 400px) {
    padding: 16px;
    border-radius: 18px;
  }
`;

export const AboutCardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 14px;
  font-size: 17px;
  min-width: 0;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const AboutCardContent = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colorTextMuted};
  line-height: 1.85;
  min-width: 0;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 1.7;
  }
`;

export const AboutList = styled.div`
  display: grid;
  gap: 14px;
  min-width: 0;

  @media (max-width: 600px) {
    gap: 10px;
  }
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

  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 12px 14px;
    gap: 8px;
  }

  @media (max-width: 400px) {
    padding: 10px 12px;
    gap: 8px;
  }
`;

export const AboutLabel = styled.span`
  font-size: 15px;
  color: ${(props) => props.theme.colorTextMuted};

  min-width: 0;
  flex: 1 1 45%;
  overflow-wrap: anywhere;
  word-break: break-word;

  @media (max-width: 600px) {
    font-size: 13px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const AboutValue = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colorText};

  min-width: 0;
  flex: 1 1 55%;
  text-align: right;
  overflow-wrap: anywhere;
  word-break: break-word;

  @media (max-width: 600px) {
    font-size: 13px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
