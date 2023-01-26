import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import NextLink from "next/link";
import React from "react";

const NotFound: React.FC = () => (
  <>
    <Typography component="p" level="subtitle1" textAlign="center">
      It's empty here 😱 You probably haven't logged any dives yet
    </Typography>

    <NextLink href="/dives/new">
      <Button component="a" variant="plain" size="sm" sx={{ mx: "auto" }}>
        Add your first dive
      </Button>
    </NextLink>
  </>
);

export default NotFound;
