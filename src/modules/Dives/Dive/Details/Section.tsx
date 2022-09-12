import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import React from "react";

import type { DetailProps } from "./Detail";
import Detail from "./Detail";

interface SectionProps {
  title?: string;
  details: Array<DetailProps>;
}

const Section: React.FC<SectionProps> = ({ title, details }) => {
  return (
    <Box mt={4}>
      {title && (
        <Typography mb={2} component="p" level="subtitle1">
          {title}
        </Typography>
      )}
      <Grid container spacing={2}>
        {details.map((detail) => (
          <Grid xs={6}>
            <Detail
              title={detail.title}
              content={detail.content}
              icon={detail?.icon}
              unit={detail?.unit}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;
