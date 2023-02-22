import SecurityRounded from "@mui/icons-material/SecurityRounded";
import Alert from "@mui/joy/Alert";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import initGA from "common/utils/ga";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const CookieConsent: React.FC = () => {
  const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false);

  useEffect(() => {
    setShowCookieConsent(!Cookies.get("CookieConsent"));
  }, []);

  const handleAccept = () => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
      return console.error("Google analytics id not specified");

    Cookies.set("CookieConsent", "true");
    initGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
    setShowCookieConsent(false);
  };

  if (!showCookieConsent) return <></>;

  return (
    <Alert
      sx={{
        zIndex: 100,
        position: "fixed",
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
          level="h6"
          component="p"
          startDecorator={<SecurityRounded />}
          sx={{ alignItems: "flex-start", fontWeight: "xl" }}
        >
          We care about your privacy
        </Typography>
        <Typography mt={2} textColor="GrayText" fontSize="xs">
          This web application uses cookies 🍪 We'd like to use analytics to
          track app usage. Everything is opt-in! If you don't accept it now, cookies will be declined.
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
        <Button variant="plain" color="neutral" fullWidth tabIndex={1} size="sm">
          Decline
        </Button>
        <Button color="success" fullWidth onClick={handleAccept} tabIndex={2} size="sm">
          Accept
        </Button>
      </Box>
    </Alert>
  );
};

export default CookieConsent;
