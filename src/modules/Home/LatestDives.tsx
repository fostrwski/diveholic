import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import JoyLink from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import DiveCard from "common/components/DiveCard";
import dives from "common/utils/dives";
import NextLink from "next/link";
import React from "react";

const LatestDives: React.FC = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        mb={2}
      >
        <Typography level="h4" component="div">
          Your dives
        </Typography>
        <NextLink href="/dives" passHref>
          <JoyLink>See all</JoyLink>
        </NextLink>
      </Box>

      <Grid container gap={2}>
        {dives.map((dive) => (
          <Grid xs={12} key={dive.id}>
            <DiveCard dive={dive} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LatestDives;
