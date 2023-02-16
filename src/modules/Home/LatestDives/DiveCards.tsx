import { Grid } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import DiveCard from "common/components/DiveCard";
import type { Dive } from "common/types";
import NextLink from "next/link";
import React from "react";

interface DiveCardsProps {
  dives: Array<Dive>;
}

const DiveCards: React.FC<DiveCardsProps> = ({ dives }) => (
  <>
    <Grid container rowSpacing={{ xs: 0, md: 2 }}>
      {dives.map((dive: Dive) => (
        <Grid key={dive.id} xs={12} md={6}>
          <DiveCard dive={dive} />
        </Grid>
      ))}
    </Grid>

    <Box textAlign="center" mt={2}>
      <NextLink href="/dives">
        <Button variant="outlined" color="neutral" sx={{ borderRadius: 24 }}>
          See more
        </Button>
      </NextLink>
    </Box>
  </>
);

export default DiveCards;
