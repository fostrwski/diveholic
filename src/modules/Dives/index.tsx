import Grid from "@mui/joy/Grid";
import DiveCard from "common/components/DiveCard";
import type { Dive } from "common/types";
import React from "react";

interface Dives {
  data: any;
}

const Dives: React.FC<Dives> = ({ data }) => {
  return (
    <Grid container gap={2}>
      {data.map((dive: Dive) => (
        <Grid xs={12}>
          <DiveCard key={dive.id} dive={dive} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Dives;
