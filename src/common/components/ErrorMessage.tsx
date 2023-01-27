import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { TypographyTypeMap } from "@mui/joy/Typography/TypographyProps";
import React from "react";

type TypographyProps = TypographyTypeMap["props"];

interface ErrorMessageProps extends TypographyProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, ...props }) => (
  <Typography
    component="div"
    color="danger"
    startDecorator={
      <Chip color="danger" size="sm" variant="outlined">
        Error
      </Chip>
    }
    {...props}
  >
    {children}
  </Typography>
);

export default ErrorMessage;
