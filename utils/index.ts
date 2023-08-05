import { CarProps, FilterProps } from "@/types";

export async function fecthCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
  const headers: HeadersInit = {
    "X-RapidAPI-Key":
      process.env.NEXT_PUBLIC_RAPID_API_KEY ||
      "e1967a8e51msh2b6cdadca37b690p1638d3jsn8b7db3b94482",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `${
    process.env.CARS_ENDPOINT || "https://cars-by-api-ninjas.p.rapidapi.com/v1/"
  }cars??make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

  const response = await fetch(url, { headers });
  return await response.json();
}

export function calculateCarRent(city_mpg: number, year: number) {
  const ragePricePerDay = [50, 80, 100, 300, 200, 223, 159];
  const basePricePerDay =
    ragePricePerDay[Math.floor(Math.random() * ragePricePerDay.length)];
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;

  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const ratePerDay = basePricePerDay + mileageRate + ageRate;
  return ratePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  // url.searchParams.append(
  //   "customer",
  //   process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  // );
  // url.searchParams.append("make", make);
  // url.searchParams.append("modelFamily", model.split(" ")[0]);
  // url.searchParams.append("zoomType", "fullscreen");
  // url.searchParams.append("modelYear", `${year}`);
  // // url.searchParams.append('zoomLevel', zoomLevel);
  // url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
