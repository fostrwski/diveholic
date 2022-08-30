import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Separator from "common/components/Separator";
import React from "react";

interface ErrorProps {
  error: any;
  customMessage?: string;
  tip?: string;
}

const Error: React.FC<ErrorProps> = ({ error, customMessage, tip }) => {
  return (
    <Box>
      {/* @ts-ignore  */}
      <ErrorOutlineRounded sx={{ fontSize: 64 }} color="danger" />
      <Typography component="p" level="h4" color="danger" gutterBottom>
        Something went wrong
      </Typography>
      <Typography component="p" fontWeight="lg">
        {customMessage ? customMessage : error?.message}
      </Typography>

      {tip && (
        <Typography component="p" mt={4}>
          {tip}
        </Typography>
      )}

      <Typography component="p" level="body2" mt={6}>
        Need more help?
      </Typography>
    </Box>
  );
};

export default Error;
