import LineWeightRounded from "@mui/icons-material/LineWeightRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";
import ScaleRounded from "@mui/icons-material/ScaleRounded";
import WaterRounded from "@mui/icons-material/WaterRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Separator from "common/components/Separator";
import TextSeparator from "common/components/TextSeparator";
import type { Dive } from "common/types";
import React from "react";

import Section from "./Section";

interface DetailsProps {
  dive: Dive;
}

const Details: React.FC<DetailsProps> = ({ dive }) => {
  return (
    <>
      <Section
        details={[
          { title: "Water", content: dive.water, icon: <WaterRounded /> },
          {
            title: "Weights",
            content: dive.weights.taken,
            unit: "kg",
            icon: <ScaleRounded />,
          },
        ]}
      />

      <TextSeparator sx={{ mt: 8 }}>Gear</TextSeparator>
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

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          mt: 6,
        }}
      >
        <Separator />
        <Button
          variant="plain"
          size="sm"
          color="neutral"
          sx={{ whiteSpace: "nowrap" }}
        >
          See more
        </Button>
      </Box>
    </>
  );
};

export default Details;
