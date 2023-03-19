import Box from "@mui/joy/Box";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Slider from "@mui/joy/Slider";
import Typography from "@mui/joy/Typography";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import type { FormFields } from "../../types";
import getSliderAriaValueText from "./getSliderAriaValueText";
import sliderMarks from "./sliderMarks";
import waterTypes from "./waterTypes";
import weightsAmmount from "./weightsAmmount";

const Details: React.FC = () => {
  const { setValue, getValues, watch, control } = useFormContext<FormFields>();

  const watchWeightsTaken = watch("weights.taken");

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case "tooLittle":
        return setValue("weights.ammount", "tooLittle");
      case "tooMuch":
        return setValue("weights.ammount", "tooMuch");
      default:
        return setValue("weights.ammount", "perfect");
    }
  };

  return (
    <>
      <Controller
        name="water"
        control={control}
        render={({ field }) => (
          <RadioGroup
            {...field}
            row
            sx={{
              gap: 2,
              width: "100%"
            }}
            aria-label="Water type"
          >
            {waterTypes.map((waterType) => (
              <FormControl
                sx={{ width: "100%", flexDirection: "row", gap: 2 }}
                key={waterType.title}
              >
                <Radio
                  value={waterType.title}
                  componentsProps={{
                    input: { "aria-label": `${waterType.title} water` }
                  }}
                  overlay
                  size="lg"
                />

                <div>
                  <FormLabel>
                    {waterType.title} water {waterType.icon}
                  </FormLabel>
                  <FormHelperText
                    aria-label={`Select if you dove in ${waterType.title.toLowerCase()} water`}
                  >
                    {waterType.examples}
                  </FormHelperText>
                </div>
              </FormControl>
            ))}
          </RadioGroup>
        )}
      />

      <div role="group" aria-labelledby="weightsLabel">
        <FormControl sx={{ mt: 4, px: 2 }}>
          <FormLabel id="weightsLabel">Weights</FormLabel>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Controller
              name="weights.taken"
              control={control}
              render={({ field }) => (
                <Slider
                  {...field}
                  size="lg"
                  max={20}
                  valueLabelDisplay="auto"
                  marks={sliderMarks}
                  getAriaLabel={() => "Weights ammount during the dive"}
                  getAriaValueText={(value) =>
                    getSliderAriaValueText(value, getValues("units"))
                  }
                />
              )}
            />
            <Typography sx={{ whiteSpace: "nowrap" }}>
              {watchWeightsTaken}{" "}
              {getValues("units") === "metric" ? "kg" : "lbs"}
            </Typography>
          </Box>
        </FormControl>

        <Controller
          name="weights.ammount"
          control={control}
          render={({ field }) => (
            <RadioGroup
              {...field}
              sx={{ mt: 4, gap: 2 }}
              onChange={(e) => onRadioChange(e)}
              aria-label="Rate weights ammount"
            >
              {weightsAmmount.map(
                (ammount: {
                  title: string;
                  icon: string;
                  value: string;
                  helperText: string;
                }) => (
                  <FormControl
                    key={ammount.value}
                    sx={{ width: "100%", flexDirection: "row", gap: 2 }}
                  >
                    <Radio
                      overlay
                      size="lg"
                      value={ammount.value}
                      componentsProps={{
                        input: { "aria-label": `${ammount.title}` }
                      }}
                    />
                    <div>
                      <FormLabel>
                        {ammount.title} {ammount.icon}
                      </FormLabel>
                      <FormHelperText
                        aria-label={`Select if ${ammount.helperText.toLowerCase()}`}
                      >
                        {ammount.helperText}
                      </FormHelperText>
                    </div>
                  </FormControl>
                )
              )}
            </RadioGroup>
          )}
        />
      </div>
    </>
  );
};

export default Details;
