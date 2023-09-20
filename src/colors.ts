import { DefaultMantineColor, Tuple } from "@mantine/core";

type ExtendedCustomColors = DefaultMantineColor | "sky" | string;
const colors: Record<ExtendedCustomColors, Tuple<string, 10>> = {
  black: [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5C5F66",
    "#373A40",
    "#2C2E33",
    "#25262B",
    "#1A1B1E",
    "#141517",
    "#0E0E2C",
  ],
  green: [
    "#EBFBEE",
    "#D3F9D8",
    "#B2F2BB",
    "#8CE99A",
    "#69DB7C",
    "#51CF66",
    "#42B72A",
    "#37B24D",
    "#2F9E44",
    "#2B8A3E",
  ],
  gray: [
    "#F8F9FA",
    "#E4E4E7",
    "#E2E8F0",
    "#DEE2E6",
    "#CED4DA",
    "#ADB5BD",
    "#868E96",
    "#5C5F66",
    "#343A40",
    "#212529",
  ],
  sky: [
    "#A6FFFF",
    "#80E9FF",
    "#59D4FF",
    "#32BFFF",
    "#06A9FF",
    "#0284C7",
    "#0099EE",
    "#007BC2",
    "#005C97",
    "#003D6B",
  ],
};
export default colors;
