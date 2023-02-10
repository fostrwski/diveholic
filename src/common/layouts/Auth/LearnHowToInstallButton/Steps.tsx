import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import React from "react";

interface StepsProps {
  title: string;
  icon: React.ReactElement;
  steps: Array<{ content: string; icon: React.ReactElement }>;
}

const Steps: React.FC<StepsProps> = ({ title, icon, steps }) => (
  <Box mb={6}>
    <Typography level="h5" startDecorator={icon} gutterBottom textColor="GrayText">
      {title}
    </Typography>
    <Box component="ul" p={0} m={0}>
      {steps.map((step) => (
        <Typography
          component="li"
          sx={{ alignItems: "flex-start" }}
          startDecorator={step.icon}
          key={step.content}
        >
          {step.content}
        </Typography>
      ))}
    </Box>
  </Box>
);

export default Steps;
