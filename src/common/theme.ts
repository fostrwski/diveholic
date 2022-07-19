import { extendTheme } from "@mui/joy";

const theme = extendTheme({
  components: {
    JoyButton: {
      defaultProps: {
        variant: "soft"
      }
    },
    JoyLink: {
      defaultProps: {
        underline: "none"
      }
    }
  }
})

export default theme
