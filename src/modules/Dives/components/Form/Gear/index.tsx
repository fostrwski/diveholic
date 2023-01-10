import LineWeightRounded from "@mui/icons-material/LineWeightRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import TextSeparator from "common/components/TextSeparator";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

import setNullOrValue from "../utils/setNullOrValue";

const Gear: React.FC = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <TextSeparator sx={{ mt: 8 }}>Gear</TextSeparator>

      <Typography
        mb={2}
        mt={4}
        component="p"
        textColor="GrayText"
        fontWeight="md"
      >
        Tanks
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid xs={6}>
          <TextField
            {...register("gearTanksCount", { setValueAs: setNullOrValue })}
            error={!!errors.gearTanksCount}
            helperText={errors.gearTanksCount?.message?.toString()}
            type="number"
            label="Count"
            startDecorator={<NumbersRounded />}
          />
        </Grid>
        <Grid xs={6}>
          <TextField {...register("gearTanksType")} type="text" label="Type" />
        </Grid>
      </Grid>

      <Typography
        mb={2}
        component="p"
        textColor="GrayText"
        fontWeight="md"
        mt={4}
      >
        Exposure protection
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid xs={6}>
          <TextField
            {...register("gearExposureProtectionType")}
            type="text"
            label="Type"
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            {...register("gearExposureProtectionThickness", {
              setValueAs: setNullOrValue
            })}
            error={!!errors.gearExposureProtectionThickness}
            helperText={errors.gearExposureProtectionThickness?.message?.toString()}
            type="number"
            label="Thickness"
            startDecorator={<LineWeightRounded />}
          />
        </Grid>
      </Grid>

      {showMore && (
        <>
          <Typography
            mb={2}
            mt={4}
            component="p"
            textColor="GrayText"
            fontWeight="md"
          >
            Other gear
          </Typography>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid xs={6}>
              <TextField {...register("gearBcd")} type="text" label="BCD" />
            </Grid>
            <Grid xs={6}>
              <TextField {...register("gearFins")} type="text" label="Fins" />
            </Grid>
            <Grid xs={6}>
              <TextField
                {...register("gearRegulator")}
                type="text"
                label="Regulator"
              />
            </Grid>
          </Grid>
        </>
      )}

      <Button
        sx={{ mt: 6 }}
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
