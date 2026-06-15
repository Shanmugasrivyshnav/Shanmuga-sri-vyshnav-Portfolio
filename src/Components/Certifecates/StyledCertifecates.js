import styled from "styled-components";

export const CertificateSection = styled.section`
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
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`;

export const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  max-width: 1160px;
  margin: 0 auto;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const CertificateCard = styled.div`
  background: ${(props) => props.theme.colorCard};
  border: 1px solid ${(props) => props.theme.colorBorder};
  border-radius: 24px;
  padding: 28px;
  box-shadow: ${(props) => props.theme.shadow};
`;

export const CertificateTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 18px;
`;

export const CertificateIssuer = styled.p`
  margin: 0 0 10px;
  color: ${(props) => props.theme.colorTextMuted};
`;

export const CertificateDate = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colorAccent};
  font-weight: 700;
`;
