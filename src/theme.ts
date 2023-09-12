import { TextStylesParams } from "@mantine/core";
import {
  MantineTheme,
  MantineThemeComponents,
} from "@mantine/styles/lib/theme/types/MantineTheme";
import textVariants from "./textVariants";

const getTheme = () => {
  return {
    components: {
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
  };
};
export default getTheme;
