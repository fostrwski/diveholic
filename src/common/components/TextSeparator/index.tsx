import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import type { SxProps } from "@mui/system";
import React from "react";

import Separator from "../Separator";

interface TextSeparatorProps {
  children: React.ReactNode;
  sx?: SxProps;
}

const TextSeparator: React.FC<TextSeparatorProps> = ({ children, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        ...sx,
      }}
    >
      <Typography component="p" level="h4">
        {children}
      </Typography>
      <Separator />
    </Box>
  );
};

export default TextSeparator;
