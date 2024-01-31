import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import React from 'react';

interface StepsProps {
  title: string;
  icon: React.ReactElement;
  steps: Array<{ content: string; icon?: React.ReactElement }>;
}

const Steps: React.FC<StepsProps> = ({ title, icon, steps }) => (
  <Box mb={6}>
    <Typography
      level="h5"
      startDecorator={icon}
      gutterBottom
      textColor="GrayText"
    >
      {title}
    </Typography>

    <Box component="ul" p={0} m={0} sx={{ listStylePosition: 'inside' }}>
      {steps.map((step) => (
        <Typography
          key={step.content}
          component="li"
          sx={{
            alignItems: 'flex-start',
            display: 'inline-flex',
            width: '100%',
          }}
          endDecorator={step?.icon}
          mb={0.8}
        >
          <span dangerouslySetInnerHTML={{ __html: step.content }} />
        </Typography>
      ))}
    </Box>
  </Box>
);

export default Steps;
