import DownloadDoneRounded from "@mui/icons-material/DownloadDoneRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import ScaleRounded from "@mui/icons-material/ScaleRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import TipsAndUpdatesRounded from "@mui/icons-material/TipsAndUpdatesRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import WavesRounded from "@mui/icons-material/WavesRounded";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import type { Dive } from "common/types";
import React from "react";

import Info from "./Info";

interface AmmountInformationProps {
  ammount: Dive["weights"]["ammount"];
}

const AmmountInformation: React.FC<AmmountInformationProps> = ({ ammount }) => {
  const getAmmountText = () => {
    switch (ammount) {
      case "tooLittle":
        return "Too little weights";
      case "tooMuch":
        return "Too much weights";
      default:
        return "Perfect weights ammount";
    }
  };

  const getAmmountTip = () => {
    switch (ammount) {
      case "tooLittle":
        return "Take more weights next time";
      case "tooMuch":
        return "Take less weights next time";
      default:
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1.2, flexWrap: "wrap" }}>
      <Chip
        startDecorator={<ScaleRounded />}
        color={ammount === "perfect" ? "success" : "info"}
        variant="outlined"
      >
        {getAmmountText()}
      </Chip>

      {getAmmountTip() && (
        <Chip
          color="warning"
          startDecorator={<TipsAndUpdatesRounded />}
          variant="outlined"
        >
          {getAmmountTip()}
        </Chip>
      )}
    </Box>
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

      <Grid container spacing={1.2}>
        {basicInformation.map((basicInfo) => {
          if (!basicInfo) return;
          return (
            <Grid xs={6} key={basicInfo.title}>
              <Info
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
