import { TextStylesParams } from "@mantine/core";
import {
  MantineTheme,
  MantineThemeComponents,
} from "@mantine/styles/lib/theme/types/MantineTheme";
import textVariants from "./textVariants";
import colors from "./colors";

const getTheme = () => {
  return {
    colors: colors,
    components: {
      Button: {
        styles: (_theme: MantineTheme) => ({
          root: {
            borderRadius: ".375rem",
            boxShadow:
              "0px 1px 3px 0px rgba(0, 0, 0, 0.05), 0px 10px 15px -5px rgba(0, 0, 0, 0.05), 0px 7px 7px -5px rgba(0, 0, 0, 0.04)",
          },
        }),
      },
      Input: {
        styles: (theme: MantineTheme) => ({
          input: {
            boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05);",
            borderRadius: ".375rem",
            border: `1px solid ${theme.colors.gray[1]}`,
          },
        }),
      },
      Text: {
        styles: (
          _theme: MantineTheme,
          _params: TextStylesParams,
          { variant }
        ) => ({
          root: textVariants[variant as string],
        }),
      },
    } as MantineThemeComponents,
  } as MantineTheme;
};
export default getTheme;
