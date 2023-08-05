import { CarProps } from ".";

export interface CarCardProps {
  car: CarProps;
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}
