import ErrorOutlineRounded from '@mui/icons-material/ErrorOutlineRounded';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import React from 'react';

interface ErrorProps {
  error: any;
  customMessage?: string;
  tip?: string;
}

const Error: React.FC<ErrorProps> = ({ error, customMessage, tip }) => (
  <Box>
    <Typography
      component="p"
      level="h4"
      color="danger"
      gutterBottom
      startDecorator={<ErrorOutlineRounded />}
      sx={{ alignItems: 'flex-start' }}
    >
      Something went wrong
    </Typography>

    <Typography component="p" fontWeight="lg" sx={{ wordBreak: 'break-all' }}>
      {customMessage || error?.message}
    </Typography>

    {tip && (
      <Typography component="p" level="subtitle1" mt={4}>
        {tip}
      </Typography>
    )}
  </Box>
);

export default Error;
