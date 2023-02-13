import FilterListRounded from "@mui/icons-material/FilterListRounded";
import Badge from "@mui/joy/Badge";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import DiveCard from "common/components/DiveCard";
import type { Dive } from "common/types";
import React, { useState } from "react";

import Filters from "./Filters";

interface DivesProps {
  dives: Array<Dive>;
}

const Dives: React.FC<DivesProps> = ({ dives }) => {
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
        <Badge color="info" variant="outlined" badgeContent={0}>
          <Button
            color="neutral"
            variant="outlined"
            startDecorator={<FilterListRounded />}
            onClick={handleFiltersToggle}
          >
            Filters
          </Button>
        </Badge>

        <Button color="neutral" variant="plain">
          Sort
        </Button>
      </Box>

      {showFilters && <Filters dives={dives} />}

      <Grid container sx={{ mt: 2 }}>
        {dives.map((dive: Dive) => (
          <Grid xs={12} key={dive.id}>
            <DiveCard dive={dive} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dives;
