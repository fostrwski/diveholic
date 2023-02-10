import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import NextLink from "next/link";
import React from "react";

const NotFound: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 1.2
    }}
  >
    <Typography component="p" level="subtitle1" textAlign="center">
      It's empty here. You probably haven't logged any dives yet 😱
    </Typography>

    <div>
      <NextLink href="/dives/new" passHref>
        <Button component="a" variant="plain" size="sm" color="info">
          Add your first dive
        </Button>
      </NextLink>
    </div>
  </Box>
);

export default NotFound;
