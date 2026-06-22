import styled from "styled-components";

export const ProjectsSection = styled.section`
  background: ${(props) => props.theme.colorBgSecondary};
  padding: 80px 40px;
  @media (max-width: 880px) {
    padding: 64px 24px;
  }
`;

export const SectionHeader = styled.div`
  max-width: 760px;
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  max-width: 1160px;
  margin: 0 auto;
  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article`
  background: ${(props) => props.theme.colorCard};
  border: 1px solid ${(props) => props.theme.colorBorder};
  border-radius: 24px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: ${(props) => props.theme.shadow};
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 20px;
`;

export const ProjectDescription = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colorTextMuted};
  line-height: 1.8;
  flex: 1;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ProjectTag = styled.span`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorTextMuted};
  font-size: 13px;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 999px;
  background: ${(props) => props.theme.colorAccent};
  color: #fff;
  font-weight: 700;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    background: #4f46e5;
  }
`;
export const MoreOnGitHubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
  width: 50%;
  background: ${(props) => props.theme.colorCard};
  border: 1px solid ${(props) => props.theme.colorBorder};
  border-radius: 24px;
  padding: 26px;
  gap: 18px;
  box-shadow: ${(props) => props.theme.shadow};
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const HeadingGitHub = styled.h2`
  max-width: 760px;
  margin: 0 auto 20px;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: auto;
    height: 4px;
    background: ${(props) => props.theme.colorBorder};
    margin: 0 auto 0;
    border-radius: 2px;
  }
`;
export const LinkGitHub = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 999px;
  background: ${(props) => props.theme.colorAccent};
  color: #fff;
  font-weight: 700;
  transition: transform 0.25s ease;
  &:hover {
    transform: translateY(-1px);
    background: #4f46e5;
  }
`;
