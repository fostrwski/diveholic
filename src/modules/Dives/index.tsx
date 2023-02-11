import FilterListRounded from "@mui/icons-material/FilterListRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import DiveCard from "common/components/DiveCard";
import type { Dive } from "common/types";
import React, { useState } from "react";

import Filters from "./Filters";

interface DivesProps {
  data: Array<Dive>;
}

const Dives: React.FC<DivesProps> = ({ data }) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleFiltersToggle = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2
        }}
      >
        <Button
          color="neutral"
          variant="outlined"
          startDecorator={<FilterListRounded />}
          onClick={handleFiltersToggle}
        >
          Filters
        </Button>

        <Button color="neutral" variant="plain">
          Sort
        </Button>
      </Box>

      {showFilters && <Filters />}

      <Grid container sx={{ mt: 2 }}>
        {data.map((dive: Dive) => (
          <Grid xs={12} key={dive.id}>
            <DiveCard dive={dive} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dives;
