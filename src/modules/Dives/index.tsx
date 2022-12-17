import SearchRounded from "@mui/icons-material/SearchRounded";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/joy/TextField";
import DiveCard from "common/components/DiveCard";
import type { Dive } from "common/types";
import React from "react";

interface DivesProps {
  data: Array<Dive>;
}

const Dives: React.FC<DivesProps> = ({ data }) => (
  <>
    <TextField
      type="text"
      placeholder="Search by location"
      startDecorator={<SearchRounded />}
      sx={{ mb: 4 }}
    />

    <Grid container gap={2}>
      {data.map((dive: Dive) => (
        <Grid xs={12} key={dive.id}>
          <DiveCard dive={dive} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default Dives;
