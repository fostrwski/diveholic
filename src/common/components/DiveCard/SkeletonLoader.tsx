import ScubaDivingRounded from "@mui/icons-material/ScubaDivingRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Separator from "common/components/Separator";
import React from "react";

const DiveCardSkeletonLoader: React.FC = () => (
  <Card
    sx={{
      width: "100%",
      textDecoration: "none",
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      py: 0.6
    }}
  >
    <Avatar size="lg">
      <ScubaDivingRounded />
    </Avatar>
    <Box width="100%">
      <Chip size="sm" sx={{ width: "100%", borderRadius: 6 }} />
      <Chip size="sm" sx={{ width: "100%", borderRadius: 6 }} />

      <Box
        mt={2}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "100%"
        }}
      >
        <Separator />

        <Chip sx={{ width: 128 }}></Chip>
      </Box>
    </Box>
  </Card>
);

export default DiveCardSkeletonLoader;
