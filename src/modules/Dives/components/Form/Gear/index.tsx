import AutoAwesomeRounded from "@mui/icons-material/AutoAwesomeRounded";
import LineWeightRounded from "@mui/icons-material/LineWeightRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import MuiLink from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import TextSeparator from "common/components/TextSeparator";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

import type { FormFields } from "../types";
import setNullOrNumber from "../utils/setNullOrNumber";

const Gear: React.FC = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<FormFields>();
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <TextSeparator sx={{ mt: 10 }}>Gear</TextSeparator>

      <Typography mb={2} component="p" level="subtitle1" mt={4}>
        Exposure protection
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid xs={6}>
          <TextField
            {...register("gear.exposureProtection.type")}
            type="text"
            label="Type"
            aria-label="Exposure protection type"
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            {...register("gear.exposureProtection.thickness", {
              setValueAs: setNullOrNumber
            })}
            error={!!errors.gear?.exposureProtection?.thickness}
            helperText={errors.gear?.exposureProtection?.thickness?.message?.toString()}
            type="number"
            label="Thickness"
            startDecorator={<LineWeightRounded />}
            aria-label="Exposure protection thickness"
          />
        </Grid>
      </Grid>

      <Typography mb={2} mt={4} level="subtitle1">
        Tanks
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid xs={6}>
          <TextField
            {...register("gear.tanks.count", { setValueAs: setNullOrNumber })}
            error={!!errors.gear?.tanks?.count}
            helperText={errors.gear?.tanks?.count?.message?.toString()}
            type="number"
            label="Count"
            startDecorator={<NumbersRounded />}
            aria-label="Tanks count"
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            {...register("gear.tanks.type")}
            type="text"
            label="Type"
            aria-label="Tanks type"
          />
        </Grid>
      </Grid>

      {showMore && (
        <>
          <Typography mb={2} mt={4} component="p" level="subtitle1">
            Other gear
          </Typography>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid xs={6}>
              <TextField {...register("gear.bcd")} type="text" label="BCD" />
            </Grid>
            <Grid xs={6}>
              <TextField {...register("gear.fins")} type="text" label="Fins" />
            </Grid>
            <Grid xs={6}>
              <TextField
                {...register("gear.regulator")}
                type="text"
                label="Regulator"
              />
            </Grid>
          </Grid>
        </>
      )}

      <Button
        sx={{ mt: 4 }}
        variant="outlined"
        color="neutral"
        fullWidth
        onClick={handleClick}
      >
        {showMore ? "Show less" : "Show more"}
      </Button>

      {/* <Box sx={{ textAlign: "right", mt: 4 }}> */}
      {/*   <MuiLink color="info" startDecorator={<AutoAwesomeRounded />} disabled> */}
      {/*     Use preset */}
      {/*   </MuiLink> */}
      {/* </Box> */}
    </>
  );
};

export default Gear;
