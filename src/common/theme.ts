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
          borderRadius: "var(--joy-radius-sm)",
        },
      },
    },
    JoyLink: {
      defaultProps: {
        underline: "none",
        variant: "plain",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: theme.vars.fontWeight.md,
        }),
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
    JoySelect: {
      defaultProps: {
        variant: "soft",
        color: "neutral",
      },
    },
    JoyOption: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(1),
        }),
      },
    },
    JoyAutocomplete: {
      defaultProps : {
        variant: "soft"
      }
    },
    JoyModalDialog: {
      defaultProps: {
        variant: "plain",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(4),
        }),
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
        variant: "soft",
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
          borderRadius: "var(--joy-radius-sm)",
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
          fontWeight: "var(--joy-fontWeight-md)",
        },
      },
    },
    JoyAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "var(--joy-radius-sm)",
        },
      },
    },
    JoySheet: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
          borderRadius: theme.vars.radius.sm,

          ...(ownerState.variant === "soft" && {
            [theme.getColorSchemeSelector("light")]: {
              backgroundColor: theme.palette.neutral[50],
            },
          }),
        }),
      },
    },
    JoyTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: theme.vars.fontWeight.md,
        }),
      },
    },
    JoySlider: {
      defaultProps: {
        color: "neutral",
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
