import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import NextLink from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <Box textAlign="center">
      <Typography component="p" textColor="neutral.400">
        It looks like you haven't logged any dives yet 🤭
      </Typography>

      <NextLink href="/dives/new">
        <Button component="a" size="sm" variant="plain" sx={{ mt: 2 }}>
          Add your first dive
        </Button>
      </NextLink>
    </Box>
  );
};

export default NotFound;
