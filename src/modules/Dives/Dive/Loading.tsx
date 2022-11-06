import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import React from "react";

const Loading: React.FC = () => {
  return (
    <Box sx={{ height: "100%", display: "flex" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <CircularProgress color="neutral" variant="soft" />
        <Typography level="h5">Loading</Typography>
      </Box>
    </Box>
  );
};

export default Loading;
