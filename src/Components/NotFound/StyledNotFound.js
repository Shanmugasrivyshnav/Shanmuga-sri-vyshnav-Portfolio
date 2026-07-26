import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 24px;
  color: ${({ theme }) => theme.colorText};
`;

export const Code = styled.h1`
  font-size: 4rem;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colorAccent};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colorTextMuted};
  margin-bottom: 24px;
  max-width: 480px;
`;

export const HomeLink = styled.a`
  padding: 12px 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colorAccent};
  color: #fff;
  text-decoration: none;
  font-weight: 600;
`;
