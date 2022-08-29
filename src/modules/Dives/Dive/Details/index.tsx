import LineWeightRounded from "@mui/icons-material/LineWeightRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";
import ScaleRounded from "@mui/icons-material/ScaleRounded";
import WaterRounded from "@mui/icons-material/WaterRounded";
import Box from "@mui/joy/Box";
import type { Dive } from "common/types";
import React from "react";

import Section from "./Section";

interface DetailsProps {
  dive: Dive;
}

const Details: React.FC<DetailsProps> = ({ dive }) => {
  return (
    <Box mt={4}>
      <Section
        details={[
          { title: "Water", content: dive.water, icon: <WaterRounded /> },
          {
            title: "Weights",
            content: dive.weights,
            unit: "kg",
            icon: <ScaleRounded />,
          },
        ]}
      />

      <Section
        title="Exposure protection"
        details={[
          { title: "Type", content: dive.gear.exposureProtection.type },
          {
            title: "Thickness",
            content: dive.gear.exposureProtection.thickness,
            icon: <LineWeightRounded />,
          },
        ]}
      />

      <Section
        title="Tanks"
        details={[
          {
            title: "Count",
            content: dive.gear.tanks.count,
            icon: <NumbersRounded />,
          },

          { title: "Type", content: dive.gear.tanks.type },
        ]}
      />
    </Box>
  );
};

export default Details;
