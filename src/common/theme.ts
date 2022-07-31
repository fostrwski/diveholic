// @ts-nocheck

import { extendTheme } from "@mui/joy";

const theme = extendTheme({
  components: {
    JoyButton: {
      defaultProps: {
        variant: "soft",
      },
    },
    JoyLink: {
      defaultProps: {
        underline: "none",
        variant: "plain",
      },
    },
    JoyCheckbox: {
      defaultProps: {
        variant: "soft",
        color: "neutral",
      },
    },
    JoyCard: {
      defaultProps: {
        variant: "outlined",
      },
    },
    JoyList: {
      styleOverrides: {
        root: {
          "--List-item-paddingX": "0px",
        },
      },
    },
    JoyInput: {
      defaultProps: {
        variant: "outlined",
        required: true,
      },
    },
    JoyMenu: {
      styleOverrides: {
        root: {
          padding: "0.4rem",
        },
      },
    },
    JoyMenuItem: {
      styleOverrides: {
        root: {
          padding: "0 0.6rem",
          borderRadius: "var(--joy-radius-xs)",
        },
      },
    },
    JoyRadio: {
      defaultProps: {
        color: "neutral",
      },
    },
  },
});

export default theme;
