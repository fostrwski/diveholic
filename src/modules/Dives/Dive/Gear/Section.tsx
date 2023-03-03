import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import InfoCard, { type InfoCardProps } from "common/components/InfoCard";
import React from "react";

interface SectionProps {
  title?: string;
  infoCards: Array<InfoCardProps>;
}

const Section: React.FC<SectionProps> = ({ title, infoCards }) => {
  if (infoCards.length === 0) return <></>;

  return (
    <>
      {title && (
        <Typography mb={{ xs: 2, sm: 0 }} component="p" level="subtitle1">
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
    </>
  );
};

export default Section;
