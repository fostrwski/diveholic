import Box from "@mui/joy/Box";
import ListDivider from "@mui/joy/ListDivider";
import type { SxProps } from "@mui/system";
import React from "react";

interface SeparatorProps {
  sx?: SxProps;
}

const Separator: React.FC<SeparatorProps> = ({ sx }) => {
  return (
    <Box width="100%">
      <ListDivider
        component="hr"
        sx={{ width: "100%", height: "2px", ...sx }}
      />
    </Box>
  );
};

export default Separator;
