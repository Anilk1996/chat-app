import { TextStylesParams } from "@mantine/core";
import {
  MantineTheme,
  MantineThemeComponents,
} from "@mantine/styles/lib/theme/types/MantineTheme";

const getTheme = () => {
  return {
    components: {
      Text: {
        styles: (
          _theme: MantineTheme,
          _params: TextStylesParams,
          { variant }
        ) => ({
          root: { ...getTextVariants(variant) },
        }),
      },
    } as MantineThemeComponents,
  };
};
const getTextVariants: any = (variant: string) => {
  const values = parseStringToObject(variant);
  return {
    [variant]: {
      fontSize: `${values.fs}px`,
      fontWeight: values.fw,
      lineHeight: `${values.lh}px`,
    },
  }[variant];
};
function parseStringToObject(inputString: string): Record<string, number> {
  const keyValuePairs = inputString.match(/[a-zA-Z]+(\d+)/g);

  if (!keyValuePairs) {
    return {};
  }

  const result: Record<string, number> = {};

  keyValuePairs.forEach((pair) => {
    const [key, value] = pair.match(/[a-zA-Z]+|\d+/g) as [string, string];
    result[key] = parseInt(value, 10);
  });

  return result;
}
export default getTheme;
