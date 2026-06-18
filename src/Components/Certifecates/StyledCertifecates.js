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

export const CertificateCarousel = styled.div`
  max-width: 980px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

export const CertificateTrack = styled.div`
  display: flex;
  transition: transform 0.45s ease;
  transform: translateX(${(props) => props.activeIndex * -100}%);
`;

export const CertificateSlide = styled.div`
  min-width: 100%;
  padding: 0 14px;
  box-sizing: border-box;
`;

export const CertificateCard = styled.div`
  background: ${(props) => props.theme.colorCard};
  border: 1px solid ${(props) => props.theme.colorBorder};
  border-radius: 24px;
  padding: 36px 32px;
  box-shadow: ${(props) => props.theme.shadow};
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CertificateTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 22px;
`;

export const CertificateIssuer = styled.p`
  margin: 0 0 10px;
  color: ${(props) => props.theme.colorTextMuted};
  font-size: 15px;
`;

export const CertificateDate = styled.p`
  margin: 0 0 20px;
  color: ${(props) => props.theme.colorAccent};
  font-weight: 700;
`;

export const CertificateDescription = styled.p`
  margin: 0 0 24px;
  color: ${(props) => props.theme.colorTextMuted};
  line-height: 1.8;
`;

export const CertificateLink = styled.a`
  display: inline-block;
  margin-top: auto;
  padding: 12px 20px;
  border-radius: 999px;
  background: ${(props) => props.theme.colorAccent};
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 28px;
`;

export const CarouselButton = styled.button`
  padding: 12px 20px;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colorBorder};
  background: ${(props) => props.theme.colorCard};
  color: ${(props) => props.theme.colorText};
  cursor: pointer;
  font-weight: 600;
  transition:
    background 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: ${(props) => props.theme.colorAccentSoft};
    transform: translateY(-1px);
  }
`;

export const CarouselSlideList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 18px;
`;

export const CarouselSlide = styled.button`
  width: 50px;
  height: 6px;
  // border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.$active ? props.theme.colorAccent : props.theme.colorBorder};
  cursor: pointer;
  transition: background 0.25s ease;
`;
