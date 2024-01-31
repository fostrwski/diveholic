import LineWeightRounded from "@mui/icons-material/LineWeightRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
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
      <TextSeparator>Gear</TextSeparator>

      <Typography
        mb={2}
        component="p"
        level="subtitle1"
        mt={4}
        id="exposureProtectionLabel"
      >
        Exposure protection
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        role="group"
        aria-labelledby="exposureProtectionLabel"
      >
        <Grid xs={6}>
          <TextField
            {...register("gear.exposureProtection.type")}
            type="text"
            label="Type"
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
          />
        </Grid>
      </Grid>

      <Typography mb={2} mt={4} level="subtitle1" id="tanksLabel">
        Tanks
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        role="group"
        aria-labelledby="tanksLabel"
      >
        <Grid xs={6}>
          <TextField
            {...register("gear.tanks.count", { setValueAs: setNullOrNumber })}
            error={!!errors.gear?.tanks?.count}
            helperText={errors.gear?.tanks?.count?.message?.toString()}
            type="number"
            label="Count"
            startDecorator={<NumbersRounded />}
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            {...register("gear.tanks.type")}
            type="text"
            label="Type"
          />
        </Grid>
      </Grid>

      {showMore && (
        <>
          <Typography
            mb={2}
            mt={4}
            component="p"
            level="subtitle1"
            id="otherGearLabel"
          >
            Other gear
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            role="group"
            aria-labelledby="otherGearLabel"
          >
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
    </>
  );
};

export default Gear;
