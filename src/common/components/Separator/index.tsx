import ListDivider from "@mui/joy/ListDivider";
import { SxProps } from "@mui/system";
import React from "react";

interface SeparatorProps {
  sx?: SxProps;
}

const Separator: React.FC<SeparatorProps> = ({ sx }) => {
  return (
    <ListDivider component="hr" sx={{ width: "100%", height: "2px", ...sx }} />
  );
};

export default Separator;
