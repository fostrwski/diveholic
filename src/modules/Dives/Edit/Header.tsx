import CloseRounded from "@mui/icons-material/CloseRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import { useRouter } from "next/router";
import React from "react";

const Header: React.FC = () => {
  const router = useRouter();
  const { id: diveId } = router.query;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
    >
      <Chip
        startDecorator={<EditRounded />}
        variant="soft"
        size="lg"
        color="warning"
      >
        Edit dive #{diveId}
      </Chip>

      <Button
        color="danger"
        size="sm"
        variant="plain"
        aria-label="Cancel dive editing"
        onClick={() => router.push("/")}
        endIcon={<CloseRounded />}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default Header;
