import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import InfoCard, { type InfoCardProps } from "modules/Dives/components/InfoCard";
import React from "react";

interface SectionProps {
  title?: string;
  content: Array<InfoCardProps>;
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <Box mt={4}>
    {title && (
      <Typography mb={2} component="p" level="subtitle1">
        {title}
      </Typography>
    )}
    <Grid container spacing={1.2}>
      {content.map((detail) => (
        <Grid xs={6} key={detail.title}>
          <InfoCard
            title={detail.title}
            content={detail.content ? detail.content : "Not specified"}
            icon={detail?.icon}
            unit={detail?.unit}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Section;
