import { styled } from "styled-components";

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
