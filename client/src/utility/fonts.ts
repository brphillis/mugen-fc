import {
  Acme,
  Archivo_Black,
  Electrolize,
  Londrina_Solid,
  Press_Start_2P,
  Protest_Revolution,
  Saira_Stencil_One,
  Silkscreen,
} from "next/font/google";

const archivo_black_init = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-archivo_black",
});

const acme_init = Acme({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-acme",
});

const silkscreen_init = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-silkscreen",
});

const press_start_2p_init = Press_Start_2P({
  subsets: ["cyrillic"],
  weight: ["400"],
  style: "normal",
  variable: "--font-press_start_2p",
});

const londrina_Solid_init = Londrina_Solid({
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"],
  style: "normal",
  variable: "--font-londrina_solid",
});

const electrolize = Electrolize({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  variable: "--font-electrolize",
});

const protest_revolution = Protest_Revolution({
  subsets: ["latin", "latin-ext", "math", "symbols", "vietnamese"],
  weight: ["400"],
  style: "normal",
  variable: "--font-protest_revolution",
});

const saira_stencil_one = Saira_Stencil_One({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400"],
  style: "normal",
  variable: "--font-saira_stencil_one",
});

export const fontVariables = `${londrina_Solid_init.variable}  ${press_start_2p_init.variable} ${archivo_black_init.variable} ${acme_init.variable} ${silkscreen_init.variable} ${electrolize.variable} ${protest_revolution.variable} ${saira_stencil_one.variable}`;
