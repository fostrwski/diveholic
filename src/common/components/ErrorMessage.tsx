import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import type { SxProps } from "@mui/system";
import React from "react";

interface ErrorMessageProps {
  children: React.ReactNode;
  sx?: SxProps;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, sx }) => (
  <Typography
    component="div"
    color="danger"
    startDecorator={
      <Chip color="danger" size="sm" variant="outlined">
        Error
      </Chip>
    }
    sx={{
      alignItems: "flex-start",
      ...sx
    }}
  >
    {children}
  </Typography>
);

export default ErrorMessage;
