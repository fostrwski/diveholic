import ScubaDivingRounded from "@mui/icons-material/ScubaDivingRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import NextLink from "next/link";
import React from "react";

const NoDivesFound: React.FC = () => (
  <Box textAlign="center" color="GrayText">
    <ScubaDivingRounded sx={{ fontSize: 72 }} />
    <Typography level="h4" sx={{ color: "GrayText" }} mt={1}>
      Oops... It's empty here!
    </Typography>
    <NextLink href="/dives/new" passHref>
      <Button component="a" color="neutral" variant="outlined" sx={{ mt: 2 }}>
        Log your first dive
      </Button>
    </NextLink>
  </Box>
);

export default NoDivesFound;
