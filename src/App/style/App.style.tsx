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
  height: ${(props: any) => props.h || "100%"};
  width: ${(props: any) => props.w || "100%"};
  color: ${(props: any) => (props.variant === "primary" ? "snow" : "cyan")};
  background-color: ${(props: any) =>
    props.variant === "primary" ? "cyan" : "snow"};
  border: ${(props: any) =>
    props.variant === "primary" ? "none" : "1px solid cyan"};
  border-radius: ${(props: any) => props.borderRadius};
  text-decoration: none;
  font-family: ${(props: any) => props.fontFamily};
  font-size: ${(props: any) => props.fontSize};
  font-weight: ${(props: any) => props.fontWeight};
  margin-top: 50px;

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:hover {
    outline: 0;
    color: ${(props: any) =>
      props.variant === "primary"
        ? "snow"
        : props.variant === "third"
        ? "cyan"
        : "black"};
    background: ${(props: any) =>
      props.variant === "primary"
        ? "linear-gradient(rgb(0 184 122/100%) 0 0);"
        : props.variant === "third"
        ? "snow"
        : "white"};
    border: ${(props: any) =>
      props.variant === "primary"
        ? "none"
        : props.variant === "third"
        ? "2px solid cyan"
        : "1px solid black"};
    border-radius: ${(props: any) => props.borderRadius};
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
  padding: string;
}
export const Input = styled.input<InputProps>`
  font-family: ${(props: any) =>
    props.fontFamily || "Space Grotesk, sans-serif"};
  font-weight: ${(props: any) => props.fontWeight || 700};
  border-top-right-radius: ${(props: any) =>
    props.bordertoprightradius || "20px"};
  border-bottom-right-radius: ${(props: any) =>
    props.borderbottomrightradius || "20px"};
  outline: none;
  box-sizing: border-box;
  border: ${(props: any) => props.border || "1px solid black"};
  width: ${(props: any) => props.width || "100%"};
  height: ${(props: any) => props.height || "100%"};
  background: ${(props: any) => props.backgroundcolor || "#FFFFFF"};
  border-left: "2px solid red";
  border-radius: ${(props: any) => props.borderradius || "20px"};
  font-style: "normal";
  font-size: ${(props: any) => props.fontSize || "12px"};
  padding-left: ${(props: any) => props.paddingleft};
  padding: ${(props: any) => props.padding};
  margin-top: 12px;
  display: block;
`;

interface FormProps {
  height: string;
}
export const StyledForm = styled.form<FormProps>`
  height: ${(props: any) => props.height || "300px"};
  width: 60%;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.01);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  font-family: "Poppins", sans-serif;
  color: #000000;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
`;

export const Page = styled.div`
  

height:100%;
width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
