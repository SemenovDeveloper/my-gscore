import styled from "styled-components";

interface IButton {
  children: React.ReactNode;
  theme: string;
  size?: string;
  darkLabel?: boolean;
  type?: string;
  smallText?: boolean;
}

export const Button = styled.button<IButton>`
  width: ${(props) => (props.size === "wide" ? "100%" : "fit-content")};
  padding: 20px 38px;
  height: fit-content;
  border: 0;
  border-radius: 4px;
  font-size: ${(props) => (props.smallText ? "16px" : "18px")};
  line-height: ${(props) => (props.smallText ? "18px" : "20px")};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s linear;
  background-color: ${(props) =>
    props.theme === "primary" ? "var(--light-red)" : "var(--white)"};
  color: ${(props) =>
    props.theme === "primary"
      ? "var(--white)"
      : props.darkLabel
      ? "var(--black)"
      : "var(--light-red)"};
  &:hover {
    background-color: ${(props) =>
      props.theme === "secondary" ? "var(--white)" : "var(--dark-red)"};
    color: ${(props) =>
      props.theme === "primary"
        ? "var(--white)"
        : props.darkLabel
        ? "var(--gray)"
        : "var(--dark-red)"};
  }
`;
