import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import TextField from "@mui/joy/TextField";
import type { Dive } from "common/types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import DateTimePicker from "../DateTimePicker";
import type { FormFields } from "../types";
import getDiveEmoji from "../utils/getDiveEmoji";
import setNullOrNumber from "../utils/setNullOrNumber";

const diveTypes: Array<{
  title: string;
  explanation: string;
}> = [
  { title: "Boat", explanation: "Dive from the boat" },
  { title: "Shore", explanation: "Dive from the beach" }
];

const Basics: React.FC = () => {
  const {
    register,
    getValues,
    control,
    formState: { errors }
  } = useFormContext<FormFields>();

  return (
    <>
      <DateTimePicker />

      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <RadioGroup
            {...field}
            row
            sx={{
              mt: 4,
              gap: 2,
              width: "100%"
            }}
          >
            {diveTypes.map((diveType) => (
              <FormControl
                sx={{ width: "100%", flexDirection: "row", gap: 2 }}
                key={diveType.title}
              >
                <Radio value={diveType.title} overlay size="lg" />

                <div>
                  <FormLabel>
                    {diveType.title} {getDiveEmoji(diveType.title)}
                  </FormLabel>
                  <FormHelperText>{diveType.explanation}</FormHelperText>
                </div>
              </FormControl>
            ))}
          </RadioGroup>
        )}
      />

      <Grid container spacing={2} sx={{ mt: 4 }}>
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
            {...register("depth.average", { setValueAs: setNullOrNumber })}
            error={!!errors.depth?.average}
            helperText={errors.depth?.average?.message?.toString()}
            label="Average depth"
            type="number"
            endDecorator={getValues("units") === "metric" ? "m" : "ft"}
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            {...register("depth.max", { setValueAs: setNullOrNumber })}
            error={!!errors.depth?.max}
            helperText={errors.depth?.max?.message?.toString()}
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
