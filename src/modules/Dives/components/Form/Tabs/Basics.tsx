import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import TextField from "@mui/joy/TextField";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import getDiveEmoji from "../utils/getDiveEmoji";
import setNullOrNumber from "../utils/setNullOrNumber";

const Basics: React.FC = () => {
  const {
    register,
    getValues,
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <FormControl>
            <FormLabel>Dive type</FormLabel>

            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <Select
                  {...field}
                  startDecorator={getDiveEmoji(getValues("type"))}
                >
                  {["Boat", "Shore"].map((diveType: string) => (
                    <Option key={diveType} value={diveType.toLowerCase()}>
                      {diveType}
                    </Option>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>

        <Grid xs={6}>
          <TextField
            {...register("length", { setValueAs: setNullOrNumber })}
            error={!!errors.length}
            helperText={errors.length?.message?.toString()}
            type="number"
            label="Length"
            endDecorator="min"
            startDecorator={<TimelapseRounded />}
          />
        </Grid>

        <Grid xs={6}>
          <TextField
            {...register("depthAverage", { setValueAs: setNullOrNumber })}
            error={!!errors.depthAverage}
            helperText={errors.depthAverage?.message?.toString()}
            label="Average depth"
            type="number"
            endDecorator={getValues("units") === "metric" ? "m" : "ft"}
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            {...register("depthMax", { setValueAs: setNullOrNumber })}
            error={!!errors.depthMax}
            helperText={errors.depthMax?.message?.toString()}
            label="Max depth"
            type="number"
            endDecorator={getValues("units") === "metric" ? "m" : "ft"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Basics;
