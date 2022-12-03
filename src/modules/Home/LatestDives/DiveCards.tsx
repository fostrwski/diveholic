import Grid from "@mui/joy/Grid";
import DiveCard from "common/components/DiveCard";
import { Dive } from "common/types";
import React from "react";

interface DiveCardsProps {
  dives: Array<Dive>;
}

const DiveCards: React.FC<DiveCardsProps> = ({ dives }) => (
    <>
      {dives.map((dive: Dive) => (
        <Grid xs={12} lg={4} key={dive.id}>
          <DiveCard dive={dive} />
        </Grid>
      ))}
    </>
);

export default DiveCards;
