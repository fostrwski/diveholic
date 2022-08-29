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
        variant: "plain",
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    JoyList: {
      styleOverrides: {
        root: {
          "--List-item-paddingX": "0px",
        },
      },
    },
    JoyMenu: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(1),
        }),
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
    JoyTextField: {
      defaultProps: {
        variant: "soft",
      },
    },
    JoyListDivider: {
      styleOverrides: {
        root: {
          borderRadius: "2px",
        },
      },
    },
    JoyChip: {
      defaultProps: {
        color: "neutral",
        variant: "soft",
      },
    },
    JoySheet: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
          borderRadius: theme.vars.radius.xs,
        }),
      },
    },
  },
});

export default theme;
