import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import TypographyProps from "@mui/joy/Typography/TypographyProps";
import React from "react";

type TypographyPropsType = typeof TypographyProps;

interface ErrorMessageProps extends TypographyPropsType {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, ...props }) => (
  <Typography
    color="danger"
    startDecorator={
      <Chip color="danger" size="sm">
        Error
      </Chip>
    }
    {...props}
  >
    {children}
  </Typography>
);

export default ErrorMessage;
