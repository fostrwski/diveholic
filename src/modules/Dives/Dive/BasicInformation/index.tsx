import DownloadDoneRounded from "@mui/icons-material/DownloadDoneRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import ScaleRounded from "@mui/icons-material/ScaleRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import TipsAndUpdatesRounded from "@mui/icons-material/TipsAndUpdatesRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import WavesRounded from "@mui/icons-material/WavesRounded";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import type { Dive } from "common/types";
import React from "react";

import Info from "./Info";

interface AmmountTextProps {
  ammount: Dive["weights"]["ammount"];
}

const AmmountText: React.FC<AmmountTextProps> = ({ ammount }) => {
  const getAmmountText = () => {
    switch (ammount) {
      case "tooLittle":
        return "too little";
      case "tooMuch":
        return "too much";
      default:
        return "perfect";
    }
  };

  const getAmmountTip = () => {
    switch (ammount) {
      case "tooLittle":
        return "Take more weight next time.";
      case "tooMuch":
        return "Take less weight next time.";
      default:
    }
  };

  return (
    <>
      Based on your feedback this weight ammount is {getAmmountText()}. {getAmmountTip()}
    </>
  );
};

interface BasicInformationProps {
  dive: Dive;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ dive }) => {
  const basicInformation = [
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

      <Grid container spacing={1}>
        {basicInformation.map((basicInfo) => {
          if (!basicInfo) return;
          return (
            <Grid xs={6} key={basicInfo.title}>
              <Info
                title={basicInfo.title}
                content={basicInfo.value}
                unit={basicInfo.unit}
                icon={basicInfo.icon}
              />
            </Grid>
          );
        })}

        <Grid xs={12} sx={{ mt: 1, mb: 2 }}>
          <Typography startDecorator={<TipsAndUpdatesRounded />} color="info" sx={{alignItems: "flex-start"}}>
            <AmmountText ammount={dive.weights.ammount} />
          </Typography>
        </Grid>

        {dive.depth.average && (
        <Grid xs={6}>
          <Info
            title="Depth avg."
            content={dive.depth.average}
            unit={dive.units === "metric" ? "m" : "ft"}
            icon={<DownloadDoneRounded />}
          />
        </Grid>
        )}

        {dive.depth.max && (
        <Grid xs={6}>
          <Info
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

export default BasicInformation;
