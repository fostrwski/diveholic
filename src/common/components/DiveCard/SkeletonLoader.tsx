import ScubaDivingRounded from "@mui/icons-material/ScubaDivingRounded";
import { ListDivider } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import React from "react";

const DiveCardSkeletonLoader: React.FC = () => {
  return (
    <Card
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "row",
      }}
    >
      <Avatar color="neutral" size="lg">
        <ScubaDivingRounded />
      </Avatar>
      <CardContent>
        <Chip size="sm" sx={{ width: "50%" }} />

        <Box my={1}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Chip size="sm" sx={{ width: "64px" }} />
              <Chip size="sm" sx={{ width: "64px", mt: 0.6 }} />
            </Grid>
            <Grid xs={6}>
              <Chip size="sm" sx={{ width: "64px" }} />
              <Chip size="sm" sx={{ width: "64px", mt: 0.6 }} />
            </Grid>
          </Grid>
        </Box>

        <Box
          mt={2}
          display="flex"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <ListDivider sx={{ width: "100%", height: "2px" }} />

          <Chip size="sm" sx={{ width: "100%" }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DiveCardSkeletonLoader;
