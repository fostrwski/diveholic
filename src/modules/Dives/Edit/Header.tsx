import EditRounded from "@mui/icons-material/EditRounded";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import React from "react";

import CancelButton from "../components/CancelButton";

const Header: React.FC = () => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Chip
      startDecorator={<EditRounded />}
      variant="outlined"
      size="lg"
      color="warning"
    >
      Edit dive
    </Chip>

    <CancelButton />
  </Box>
);

export default Header;
