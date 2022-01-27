import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      white: "#ffffff",
      lightpink: "#FFF8F9",
      lightgrey: "#c4c4c4",
      darkergrey: "#403E3E",
      textgrey: "#332E2E",
      lightertextgrey: "#86878B",
      deepgrey: "#263238",
      bluishgrey: "#1D3547",
      fuscia: "#CF3A5E",
      gold: "#ECB32C",
      green: "#3C9A9D",
    },
  },
  fonts: {
    heading: `SF Pro Display, ${base.fonts?.heading}`,
    body: `SF Pro Display, ${base.fonts?.body}`,
  },
});
export default theme;
