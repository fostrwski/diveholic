import AddRounded from "@mui/icons-material/AddRounded";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import React from "react";

import CancelButton from "../components/CancelButton";

const Header: React.FC = () => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Chip
      startDecorator={<AddRounded />}
      variant="outlined"
      size="lg"
      color="primary"
    >
      New dive
    </Chip>
    <CancelButton />
  </Box>
);

export default Header;
