import styled from "styled-components";

export const ContactSection = styled.section`
  background: ${(props) => props.theme.colorBgSecondary};
  padding: 80px 40px;
  @media (max-width: 880px) {
    padding: 64px 24px;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  max-width: 1160px;
  margin: 0 auto;
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled.div`
  background: ${(props) => props.theme.colorCard};
  border: 1px solid ${(props) => props.theme.colorBorder};
  border-radius: 28px;
  padding: 32px;
  box-shadow: ${(props) => props.theme.shadow};
`;

export const ContactTitle = styled.h2`
  margin: 0 0 18px;
  font-size: 24px;
`;

export const ContactText = styled.p`
  margin: 0 0 24px;
  color: ${(props) => props.theme.colorTextMuted};
  line-height: 1.8;
`;

export const ContactInfoList = styled.div`
  display: grid;
  gap: 14px;
`;

export const ContactInfoItem = styled.a`
  color: ${(props) => props.theme.colorText};
  padding: 14px 16px;
  border-radius: 18px;
  border: 1px solid ${(props) => props.theme.colorBorder};
  display: block;
  transition: all 0.25s ease;

  &:hover {
    background: ${(props) => props.theme.colorAccentSoft};
    border-color: ${(props) => props.theme.colorAccent};
  }

  strong {
    color: ${(props) => props.theme.colorText};
  }
`;

export const ContactForm = styled.form`
  display: grid;
  gap: 18px;
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid ${(props) => props.theme.colorBorder};
  background: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorText};
  outline: none;
  font-size: 15px;

  &:focus {
    border-color: ${(props) => props.theme.colorAccent};
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
  }
`;

export const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid ${(props) => props.theme.colorBorder};
  background: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorText};
  outline: none;
  font-size: 15px;
  resize: vertical;

  &:focus {
    border-color: ${(props) => props.theme.colorAccent};
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
  }
`;

export const ContactButton = styled.button`
  width: fit-content;
  padding: 14px 26px;
  border-radius: 999px;
  border: none;
  background: ${(props) => props.theme.colorAccent};
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const StatusMessage = styled.p`
  margin: 0;
  color: ${(props) => (props.$success ? "#16a34a" : "#2563eb")};
  font-weight: 600;
`;
