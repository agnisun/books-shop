import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "18px",
        color: "#000",
        lineHeight: "1.5",
      },
      option: {
        color: "#000",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "inherit",
      },
    },
    Container: {
      baseStyle: {
        maxWidth: "1440px",
      },
    },
  },
});
