import Grid from "@mui/joy/Grid";
import DiveCard from "common/components/DiveCard";
import type { Dive } from "common/types";
import React from "react";

interface DivesProps {
  data: Array<Dive>;
}

const Dives: React.FC<DivesProps> = ({ data }) => (
  <Grid container gap={2}>
    {data.map((dive: Dive) => (
      <Grid xs={12} key={dive.id}>
        <DiveCard dive={dive} />
      </Grid>
    ))}
  </Grid>
);

export default Dives;
