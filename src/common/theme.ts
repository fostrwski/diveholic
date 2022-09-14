// @ts-nocheck
import { extendTheme } from "@mui/joy";

const theme = extendTheme({
  components: {
    JoyButton: {
      defaultProps: {
        variant: "soft",
      },
      styleOverrides: {
        root: {
          borderRadius: "var(--joy-radius-xl)",
        },
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
          borderRadius: "var(--joy-radius-md)",
        },
      },
    },
    JoyChip: {
      defaultProps: {
        color: "neutral",
        variant: "soft",
      },
      styleOverrides: {
        root: {
          borderRadius: "var(--joy-radius-xl)",
        },
      },
    },
    JoySheet: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
          borderRadius: theme.vars.radius.md,

          ...(ownerState.variant === "soft" && {
            [theme.getColorSchemeSelector("light")]: {
              backgroundColor: theme.palette.neutral[50],
            },
          }),
        }),
      },
    },
  },
  typography: {
    subtitle1: {
      fontWeight: "var(--joy-fontWeight-md)",
      color: "GrayText",
    },
    subtitle2: {
      color: "GrayText",
    },
  },
});

declare module "@mui/joy/styles" {
  interface TypographySystemOverrides {
    subtitle1: true;
    subtitle2: true;
  }
}

export default theme;
