import styled, { keyframes } from "styled-components";

export const HomeSection = styled.section`
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  align-items: center;
  gap: 48px;
  min-height: calc(100vh - 80px);
  padding: 100px 40px 80px;
  background: ${(props) => props.theme.colorBgSecondary};

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    padding: 80px 24px 56px;
  }
`;

export const HomeContent = styled.div`
  max-width: 640px;
`;

const shine = keyframes`
  0% {
    transform: translateX(-120%);
  }
  50% {
    transform: translateX(120%);
  }
  100% {
    transform: translateX(120%);
  }
`;

export const HomeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  margin-bottom: 24px;
  border-radius: 20px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-weight: 700;

  &:before {
    transform: translateX(-120%);
    animation: ${shine} 3s ease-in-out infinite;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const HomeBadgeText = styled.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  min-width: 200px;
  text-align: center;
  letter-spacing: 0.64px;
  text-transform: uppercase;
`;

export const HomeHeading = styled.h1`
  font-size: 45px;
  line-height: 0.95;
  margin: 0;
  margin-bottom: 24px;
  letter-spacing: -0.03em;
`;

export const HomeSubtitle = styled.p`
  margin: 0;
  margin-bottom: 20px;
  max-width: 600px;
  color: ${(props) => props.theme.colorText};
  font-size: 18px;
  font-weight: 600;
`;

export const HomeDescription = styled.p`
  margin: 0;
  margin-bottom: 30px;
  max-width: 620px;
  color: ${(props) => props.theme.colorTextMuted};
  line-height: 1.9;
`;

export const HomeTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;

export const HomeTag = styled.span`
  display: inline-flex;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colorBorder};
  background: ${(props) => props.theme.colorCard};
  color: ${(props) => props.theme.colorTextMuted};
  font-size: 14px;
  font-weight: 600;
`;

export const HomeActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;
`;

export const HomeAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: 700;
  transition: all 0.25s ease;
  border: 2px solid transparent;
  color: ${(props) => (props.secondary ? props.theme.colorText : "#ffffff")};
  background: ${(props) =>
    props.secondary ? props.theme.colorCard : props.theme.colorAccent};
  box-shadow: ${(props) =>
    props.secondary ? "none" : "0 18px 30px rgba(99, 102, 241, 0.24)"};

  &:hover {
    transform: translateY(-1px);
    background: ${(props) =>
      props.secondary ? props.theme.colorAccentSoft : "#4f46e5"};
  }
`;

export const HomeStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const HomeStat = styled.div`
  min-width: 120px;
  background: ${(props) => props.theme.colorCard};
  border: 1px solid ${(props) => props.theme.colorBorder};
  border-radius: 18px;
  padding: 24px;
`;

export const HomeStatValue = styled.div`
  font-size: 29px;
  font-weight: 800;
  margin-bottom: 6px;
`;

export const HomeStatLabel = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.colorTextMuted};
`;

export const HeroVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
`;

export const HeroCircle = styled.div`
  height: min(360px, 100%);
  display: grid;
  place-items: center;
`;
export const ProfilePicture = styled.img`
  width: 100%;
  height: auto;
`;
