import EditRounded from "@mui/icons-material/EditRounded";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import React from "react";

import CancelButton from "../components/CancelButton";

interface HeaderProps {
  diveId: string;
}

const Header: React.FC<HeaderProps> = ({ diveId }) => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Chip
      startDecorator={<EditRounded />}
      variant="outlined"
      size="lg"
      color="warning"
    >
      Edit dive
    </Chip>

    <CancelButton redirectTo={`/dives/${diveId}`} />
  </Box>
);

export default Header;
