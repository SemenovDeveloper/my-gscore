import styled from "styled-components";
import { COLORS } from "src/lib";

interface IButton {
  children: React.ReactNode;
  theme: string;
  size?: string;
  darkLabel?: boolean;
  type?: string;
  smallText: boolean;
}


export const Button = styled.button<IButton>`
  width: ${(props) => (props.size === "wide" ? "100%" : "fit-content")};
  background-color: ${(props) =>
    props.theme === "primary" ? COLORS.lightRed : COLORS.white};
  color: ${(props) =>
    props.theme === "primary"
      ? COLORS.white
      : props.darkLabel
      ? COLORS.black
      : COLORS.lightRed};
  border: 0;
  border-radius: 4px;
  font-size: ${(props) => (props.smallText? '16px': "18px")};
  line-height: ${(props) => (props.smallText? '18px': "20px")};
  font-weight: 700;
  padding: 20px 38px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme === "secondary" ? COLORS.white : COLORS.darkRed};
    color: ${(props) =>
      props.theme === "primary"
        ? COLORS.white
        : props.darkLabel
        ? COLORS.gray
        : COLORS.darkRed};
  }
  transition: all 0.4s linear;
`;
