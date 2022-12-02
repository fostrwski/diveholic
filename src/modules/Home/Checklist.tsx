import CheckBoxRounded from "@mui/icons-material/CheckBoxRounded";
import ClearRounded from "@mui/icons-material/ClearRounded";
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
      <Typography
        level="h4"
        component="p"
        startDecorator={<CheckBoxRounded />}
        gutterBottom
      >
        Checklist
      </Typography>

      <Typography level="h6" textColor="neutral.400" component="p">
        Make sure you took everything for your next dive!
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {gear.map((item: any) => (
          <Grid xs={6} key={item}>
            <Checkbox label={item} size="lg" />
          </Grid>
        ))}
      </Grid>

      <Box textAlign="right" mt={2}>
        <Button color="danger" startDecorator={<ClearRounded />} disabled>
          Clear
        </Button>
      </Box>
    </>
  );
};

export default Checklist;
