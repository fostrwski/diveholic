import EditRounded from "@mui/icons-material/EditRounded";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import { useRouter } from "next/router";
import React from "react";

import CancelButton from "../components/CancelButton";

const Header: React.FC = () => {
  const router = useRouter();
  const { id: diveId } = router.query;

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Chip
        startDecorator={<EditRounded />}
        endDecorator={`#${diveId}`}
        variant="soft"
        size="lg"
        color="warning"
      >
        Edit dive
      </Chip>

      <CancelButton />
    </Box>
  );
};

export default Header;
