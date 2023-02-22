import SecurityRounded from "@mui/icons-material/SecurityRounded";
import Alert from "@mui/joy/Alert";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import React from "react";

interface CookieConsentProps {
  handleAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ handleAccept }) => {
  return (
    <Alert
      sx={{
        zIndex: 100,
        position: "absolute",
        inset: (theme) => ({
          xs: `${theme.spacing(2)}`
        }),
        top: {
          xs: "auto"
        },
        left: {
          sm: "auto"
        },
        bgcolor: (theme) => theme.palette.common.black,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        px: 4,
        gap: 4,
        maxWidth: 360
      }}
      size="lg"
      variant="plain"
      color="neutral"
    >
      <div>
        <Typography
          level="h5"
          component="p"
          startDecorator={<SecurityRounded />}
          sx={{ alignItems: "flex-start", fontWeight: "xl" }}
        >
          We care about your privacy
        </Typography>
        <Typography mt={2} textColor="GrayText" fontSize="sm">
          This web application uses cookies 🍪 We'd like to use analytics to
          track app usage. Everything is opt-in!
        </Typography>
      </div>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <Button variant="plain" color="neutral" fullWidth>
          Decline
        </Button>
        <Button color="success" fullWidth onClick={handleAccept}>
          Accept
        </Button>
      </Box>
    </Alert>
  );
};

export default CookieConsent;
