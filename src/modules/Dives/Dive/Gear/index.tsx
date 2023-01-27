import LineWeightRounded from "@mui/icons-material/LineWeightRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";
import ScubaDivingRounded from "@mui/icons-material/ScubaDivingRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import TextSeparator from "common/components/TextSeparator";
import type { Dive } from "common/types";
import React from "react";

import Section from "./Section";
import getValidInfoCards from "./getValidInfoCards";

interface DetailsProps {
  dive: Dive;
}

const Gear: React.FC<DetailsProps> = ({ dive }) => {
  const exposureProtectionInfoCards = getValidInfoCards([
    {
      title: "Type",
      icon: <TitleRounded />,
      content: dive.gear.exposureProtection.type
    },
    {
      title: "Thickness",
      content: dive.gear.exposureProtection.thickness || "",
      icon: <LineWeightRounded />
    }
  ]);

  const tanksInfoCards = getValidInfoCards([
    {
      title: "Count",
      content: dive.gear.tanks.count || "",
      icon: <NumbersRounded />
    },

    {
      title: "Type",
      icon: <TitleRounded />,
      content: dive.gear.tanks.type || ""
    }
  ]);

  const otherGearInfoCards = getValidInfoCards([
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
  ]);

  if (
    !exposureProtectionInfoCards.length &&
    !tanksInfoCards.length &&
    !otherGearInfoCards.length
  )
    return <></>;

  return (
    <>
      <TextSeparator>Gear</TextSeparator>

      <Section
        title="Exposure protection"
        infoCards={exposureProtectionInfoCards}
      />

      <Section title="Tanks" infoCards={tanksInfoCards} />

      <Section title="Other gear" infoCards={otherGearInfoCards} />
    </>
  );
};

export default Gear;
