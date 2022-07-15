import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import React from "react";

const Checklist: React.FC = () => {
  const gear = ["BP/w", "Regulators", "Fins", "Mask", "Wetsuit"];

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Typography level="h4" component="div">
          Checklist
        </Typography>
        <Button color="danger" variant="plain">
          Reset
        </Button>
      </Box>

      <Typography level="h6" textColor="neutral.400" component="p">
        Make sure you took everything for your next dive!
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {gear.map((item: any) => (
          <Grid xs={6} key={item}>
            <Checkbox label={item} size="lg" variant="soft" color="neutral" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Checklist;
