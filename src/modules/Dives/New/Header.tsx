import AddRounded from "@mui/icons-material/AddRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import { useRouter } from "next/router";
import React from "react";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
    >
      <Chip
        startDecorator={<AddRounded />}
        variant="soft"
        size="lg"
        color="primary"
      >
        New dive
      </Chip>

      <Button
        color="danger"
        size="sm"
        variant="plain"
        onClick={() => router.push("/")}
        endIcon={<CloseRounded />}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default Header;
