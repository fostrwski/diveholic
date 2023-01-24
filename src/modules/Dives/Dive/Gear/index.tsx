import LineWeightRounded from "@mui/icons-material/LineWeightRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";
import ScubaDivingRounded from "@mui/icons-material/ScubaDivingRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import TextSeparator from "common/components/TextSeparator";
import type { Dive } from "common/types";
import React from "react";

import Section from "./Section";

interface DetailsProps {
  dive: Dive;
}

const Gear: React.FC<DetailsProps> = ({ dive }) => (
  <>
    <TextSeparator sx={{ mt: 8 }}>Gear</TextSeparator>
    <Section
      title="Exposure protection"
      content={[
        {
          title: "Type",
          icon: <TitleRounded />,
          content: dive.gear.exposureProtection.type
        },
        {
          title: "Thickness",
          content: dive.gear.exposureProtection.thickness,
          icon: <LineWeightRounded />
        }
      ]}
    />

    <Section
      title="Tanks"
      content={[
        {
          title: "Count",
          content: dive.gear.tanks.count,
          icon: <NumbersRounded />
        },

        {
          title: "Type",
          icon: <TitleRounded />,
          content: dive.gear.tanks.type
        }
      ]}
    />

    <Section
      title="Other gear"
      content={[
        {
          title: "BCD",
          content: dive.gear.bcd,
          icon: <ScubaDivingRounded />
        },
        {
          title: "Regulator",
          content: dive.gear.regulator,
          icon: <ScubaDivingRounded />
        },
        {
          title: "Fins",
          content: dive.gear.fins,
          icon: <ScubaDivingRounded />
        }
      ]}
    />
  </>
);

export default Gear;
