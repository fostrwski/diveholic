import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import DiveCard from "common/components/DiveCard";
import type { Dive } from "common/types";
import NextLink from "next/link";
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

    <NextLink href="/dives">
      <Button variant="plain" color="neutral" fullWidth size="lg">
        See all
      </Button>
    </NextLink>
  </>
);

export default DiveCards;
