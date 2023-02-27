import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import Button from "@mui/joy/Button";
import NextLink from "next/link";
import React from "react";

interface BackButtonProps {
  to: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to }) => (
  <NextLink href={to} passHref>
    <Button
      component="a"
      sx={{ mb: {xs: 2, sm: 4} }}
      size="sm"
      variant="plain"
      startDecorator={<ChevronLeftRounded />}
    >
      Go back
    </Button>
  </NextLink>
);

export default BackButton;
