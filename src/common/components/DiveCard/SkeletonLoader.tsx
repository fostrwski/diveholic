import ScubaDivingRounded from "@mui/icons-material/ScubaDivingRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import Separator from "common/components/Separator";
import React from "react";

const DiveCardSkeletonLoader: React.FC = () => (
    <Card
      sx={{
        width: {
          xs: "100%",
          md: "initial",
        },
        display: "flex",
        gap: 2,
        flexDirection: "row",
      }}
    >
      <Avatar color="neutral" size="lg">
        <ScubaDivingRounded />
      </Avatar>
      <CardContent>
        <Chip size="sm" />

        <Box my={2}>
          <Grid container spacing={0.6}>
            <Grid
              xs={6}
              lg={10}
              sx={{
                display: "flex",
                gap: 0.6,
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Chip size="sm" sx={{ width: "64px" }} />
              <Chip size="sm" sx={{ width: "64px" }} />
            </Grid>
            <Grid
              xs={6}
              lg={10}
              sx={{
                display: "flex",
                gap: 0.6,
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Chip size="sm" sx={{ width: "64px" }} />
              <Chip size="sm" sx={{ width: "64px" }} />
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
          <Separator />

          <Chip sx={{ width: "100%" }} />
        </Box>
      </CardContent>
    </Card>
);

export default DiveCardSkeletonLoader;
