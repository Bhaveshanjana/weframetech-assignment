import { Manrope } from "next/font/google";

const manrope_init = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const manrope = manrope_init.className;
