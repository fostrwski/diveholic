import DownloadDoneRounded from "@mui/icons-material/DownloadDoneRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import ScaleRounded from "@mui/icons-material/ScaleRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import WavesRounded from "@mui/icons-material/WavesRounded";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import InfoCard from "common/components/InfoCard";
import type { Dive } from "common/types";
import React from "react";

import AmmountInformation from "./AmmountInformation";

interface BasicInformationProps {
  dive: Dive;
}

const Basics: React.FC<BasicInformationProps> = ({ dive }) => {
  const basics = [
    {
      title: "Type",
      value: dive.type,
      icon: <TitleRounded />
    },
    {
      title: "Length",
      value: dive.length,
      icon: <TimelapseRounded />,
      unit: "min"
    },
    {
      title: "Water",
      value: dive.water,
      icon: <WavesRounded />
    },
    {
      title: "Weights",
      value: dive.weights.taken,
      icon: <ScaleRounded />,
      unit: dive.units === "metric" ? "kg" : "lbs"
    }
  ];

  return (
    <>
      <Typography component="p" mb={2} level="subtitle1">
        Basic information
      </Typography>

      <Grid container spacing={1.2}>
        {basics.map((basicInfo) => {
          if (!basicInfo) return;
          return (
            <Grid xs={6} key={basicInfo.title}>
              <InfoCard
                title={basicInfo.title}
                content={basicInfo.value as string | number}
                unit={basicInfo.unit}
                icon={basicInfo.icon}
              />
            </Grid>
          );
        })}

        <Grid xs={12} sx={{ mt: 1, mb: 2 }}>
          <AmmountInformation ammount={dive.weights.ammount} />
        </Grid>

        {dive.depth.average && (
          <Grid xs={6}>
            <InfoCard
              title="Depth avg."
              content={dive.depth.average}
              unit={dive.units === "metric" ? "m" : "ft"}
              icon={<DownloadDoneRounded />}
            />
          </Grid>
        )}

        {dive.depth.max && (
          <Grid xs={6}>
            <InfoCard
              title="Depth max"
              content={dive.depth.max}
              unit={dive.units === "metric" ? "m" : "ft"}
              icon={<DownloadRounded />}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Basics;
