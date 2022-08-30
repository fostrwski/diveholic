import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Separator from "common/components/Separator";
import React from "react";

interface ErrorProps {
  error: any;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <Box>
      {/* @ts-ignore  */}
      <ErrorOutlineRounded sx={{ fontSize: 64 }} color="danger" />
      <Typography component="p" level="h4" color="danger" gutterBottom>
        Something went wrong
      </Typography>
      <Typography component="p" fontWeight="md">
        {error?.message}
      </Typography>

      <Typography component="p" mt={4}>
        Check your internet connection and try reloading the page.
      </Typography>

      <Typography component="p" level="body2" mt={6}>
        Need more help?
      </Typography>
    </Box>
  );
};

export default Error;
