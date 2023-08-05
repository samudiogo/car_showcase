import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled: boolean;
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
}
