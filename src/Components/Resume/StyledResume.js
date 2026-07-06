import styled from "styled-components";

export const ResumeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 90px);
  padding: 64px 24px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
  margin: 32px auto;
  max-width: 860px;
  @media (max-width: 768px) {
    padding: 32px 16px;
    // flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ResumeContent = styled.div`
  text-align: center;
`;

export const ResumeTitle = styled.h2`
  font-size: 44px;
  margin-bottom: 19px;
  color: #111827;
`;

export const ResumeText = styled.p`
  color: #475569;
  line-height: 1.8;
  margin-bottom: 32px;
  font-size: 16px;
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 32px;
  border-radius: 999px;
  background: #4f46e5;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    background: #4338ca;
  }
`;

export const ResumeNotice = styled.p`
  margin-top: 20px;
  color: #6b7280;
  font-size: 15px;
`;
/*export const br = styled.br`
  border: 1px solid #000000;
`; */
