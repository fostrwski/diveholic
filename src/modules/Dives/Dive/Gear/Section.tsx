import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import InfoCard, {
  type InfoCardProps
} from "modules/Dives/components/InfoCard";
import React from "react";

interface SectionProps {
  title?: string;
  infoCards: Array<InfoCardProps>;
}

const Section: React.FC<SectionProps> = ({ title, infoCards }) => {
  if (infoCards.length === 0) return <></>;

  return (
    <Box mt={4}>
      {title && (
        <Typography mb={2} component="p" level="subtitle1">
          {title}
        </Typography>
      )}
      <Grid container spacing={1.2}>
        {infoCards.map((infoCard) => (
          <Grid xs={6} key={infoCard.title}>
            <InfoCard
              title={infoCard.title}
              content={infoCard.content || "Not specified"}
              icon={infoCard?.icon}
              unit={infoCard?.unit}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;
