import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import React from "react";

const Error: React.FC = () => (
  <Typography
    color="danger"
    startDecorator={
      <Chip variant="outlined" color="danger" size="sm">
        Error
      </Chip>
    }
    sx={{alignItems: "flex-start"}}
  >
    Something went wrong. Try to refresh the page or contact support
  </Typography>
);

export default Error;
