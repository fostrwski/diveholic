import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import Typography from "@mui/joy/Typography";
import React from "react";

const Error: React.FC = () => (
    <Typography
      component="p"
      startDecorator={<ErrorOutlineRounded />}
      color="danger"
      level="h6"
    >
      {/* TODO: add helper text to refresh page */}
      Something went wrong
    </Typography>
);

export default Error;
