import { styled } from "styled-components";
import { ChangeEvent, RefObject } from "react";
export const AppBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
interface ButtonProps {
  variant?: "primary" | "secondary" | "third";
  h?: string;
  w?: string;
  borderRadius?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  onClick: () => void;
  disabled?: boolean;
}
export const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${(props) => props.h || "100%"};
  width: ${(props) => props.w || "100%"};
  color: ${(props) => (props.variant === "primary" ? "snow" : "cyan")};
  background-color: ${(props) =>
    props.variant === "primary" ? "cyan" : "snow"};
  border: ${(props) =>
    props.variant === "primary" ? "none" : "1px solid cyan"};
  border-radius: ${(props) => props.borderRadius};
  text-decoration: none;
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:hover {
    outline: 0;
    color: ${(props) =>
      props.variant === "primary"
        ? "snow"
        : props.variant === "third"
        ? "cyan"
        : "black"};
    background: ${(props) =>
      props.variant === "primary"
        ? "linear-gradient(rgb(0 184 122/100%) 0 0);"
        : props.variant === "third"
        ? "snow"
        : "white"};
    border: ${(props) =>
      props.variant === "primary"
        ? "none"
        : props.variant === "third"
        ? "2px solid cyan"
        : "1px solid black"};
    border-radius: ${(props) => props.borderRadius};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

interface InputProps {
  label?: string;
  id?: string;
  type?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: () => void;
  placeholder?: string;
  value?: string;
  inputRef?: RefObject<HTMLInputElement>;
  pattern?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  fontFamily: string;
  fontWeight: string;
  bordertoprightradius: string;
  borderbottomrightradius: string;
  width: string;
  height: string;
  fontSize: string;
  paddingleft: string;
  backgroundcolor: string;
  border: string;
  borderradius: string;
}
export const Input = styled.input<InputProps>`
  font-family: ${(props) => props.fontFamily || "Space Grotesk, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 700};
  border-top-right-radius: ${(props) => props.bordertoprightradius || "20px"};
  border-bottom-right-radius: ${(props) =>
    props.borderbottomrightradius || "20px"};
  outline: none;
  box-sizing: border-box;
  border: ${(props) => props.border || "1px solid black"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background: ${(props) => props.backgroundcolor || "#FFFFFF"};
  border-left: "2px solid red";
  border-radius: ${(props) => props.borderradius || "20px"};
  font-style: "normal";
  font-size: ${(props) => props.fontSize || "12px"};
  padding-left: ${(props) => props.paddingleft};
`;