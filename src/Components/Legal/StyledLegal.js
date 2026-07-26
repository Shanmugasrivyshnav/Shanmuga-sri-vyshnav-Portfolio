import styled from "styled-components";

export const LegalSection = styled.section`
  max-width: 820px;
  margin: 0 auto;
  padding: 64px 24px 96px;
  color: ${({ theme }) => theme.colorText};
  line-height: 1.7;
`;

export const LegalTitle = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 8px;
`;

export const LegalUpdated = styled.p`
  color: ${({ theme }) => theme.colorTextMuted};
  margin-bottom: 32px;
  font-size: 0.9rem;
`;

export const LegalHeading = styled.h2`
  font-size: 1.3rem;
  margin-top: 32px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colorAccent};
`;

export const LegalParagraph = styled.p`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colorTextMuted};
`;

export const LegalList = styled.ul`
  margin: 0 0 12px 22px;
  color: ${({ theme }) => theme.colorTextMuted};
`;

export const LegalLink = styled.a`
  color: ${({ theme }) => theme.colorAccent};
  text-decoration: underline;
`;

export const LegalTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;

  th,
  td {
    border: 1px solid ${({ theme }) => theme.colorBorder};
    padding: 8px 12px;
    text-align: left;
  }
`;
