import { CustomFilterProps } from "@/types";
import { title } from "process";
import React from "react";

export const CustomFilter = ({ title, options }: CustomFilterProps) => {
  return <div>{title}</div>;
};
