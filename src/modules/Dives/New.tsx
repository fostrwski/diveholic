import { FlagRounded, PublicRounded } from "@mui/icons-material";
import AddRounded from "@mui/icons-material/AddRounded";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import React from "react";

const New: React.FC = () => {
  return (
    <>
      <Chip startDecorator={<AddRounded />} variant="soft" size="lg">
        Log dive
      </Chip>

      <Typography level="h6" component="p" textColor="neutral.600" mt={2}>
        Fill in information about your dive 🤿
      </Typography>

      <Box
        component="form"
        mt={4}
        sx={{ display: "flex", gap: 2, flexDirection: "column" }}
      >
        <Typography level="h4" component="p">
          Basic information
        </Typography>

        <Box display="flex" justifyContent="space-between" gap={2}>
          <TextField type="Date" label="Date" fullWidth />
          <TextField type="time" label="Time" fullWidth />
        </Box>

        <Grid mt={2} spacing={2} container>
          <Grid xs={6}>
            <TextField
              type="text"
              label="Country"
              startDecorator={<PublicRounded />}
            />
          </Grid>
          <Grid xs={6}>
            <TextField type="text" label="City" />
          </Grid>
          <Grid xs={12}>
            <TextField
              type="text"
              label="Dive center"
              startDecorator={<FlagRounded />}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default New;
