import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Slider from "@mui/joy/Slider";
import type { DiveFlattened } from "common/types";
import React from "react";

interface DetailsProps {
  dive: DiveFlattened;
  updateDiveProp: (prop: string, value: any) => void;
}

const Details: React.FC<DetailsProps> = ({ dive, updateDiveProp }) => {
  const waterTypes = [
    { title: "Fresh", examples: "Quarries, lakes, rivers" },
    { title: "Salt", examples: "Seas, oceans" },
  ];

  const handleWaterRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateDiveProp("water", e.target.value.toLowerCase() as typeof dive.water);
  };

  const handleWeightsSliderChange = (e: any) => {
    updateDiveProp("weightsTaken", parseInt(e.target.value));
  };

  const sliderMarks = [
    { value: 0, label: "0" },
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
  ];

  const weightsAmmount = [
    {
      title: "Perfect 👌🏼",
      value: "perfect",
      helperText: "This ammount next time",
    },
    {
      title: "Too little 👇🏼",
      value: "tooLittle",
      helperText: "Take more weights next time",
    },
    {
      title: "Too much 👆🏼",
      value: "tooMuch",
      helperText: "Takke less weights next time",
    },
  ];

  const handleWeightsAmmountRadioChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (e.target.value) {
      case "tooLittle":
        return updateDiveProp("weightsAmmount", "tooLittle");
      case "tooMuch":
        return updateDiveProp("weightsAmmount", "tooMuch");
      default:
        return updateDiveProp("weightsAmmount", "perfect");
    }
  };

  return (
    <>
      <RadioGroup
        row
        sx={{
          gap: 2,
          width: "100%",
        }}
        value={dive.water}
      >
        {waterTypes.map((waterType: { title: string; examples: string }) => (
          <FormControl
            sx={{ width: "100%", flexDirection: "row", gap: 2 }}
            key={waterType.title}
          >
            <Radio
              overlay
              value={waterType.title.toLowerCase()}
              size="lg"
              onChange={(e) => handleWaterRadioChange(e)}
            />
            <div>
              <FormLabel>{waterType.title} water</FormLabel>
              <FormHelperText>{waterType.examples}</FormHelperText>
            </div>
          </FormControl>
        ))}
      </RadioGroup>

      <FormControl sx={{ mt: 4, px: 2 }}>
        <FormLabel>
          Weights ({dive.units === "metric" ? "kg" : "lbs"})
        </FormLabel>
        <Slider
          size="lg"
          aria-label="Weights"
          defaultValue={0}
          max={20}
          valueLabelDisplay="auto"
          marks={sliderMarks}
          value={dive.weightsTaken}
          onChange={(e) => handleWeightsSliderChange(e)}
        />
      </FormControl>

      <RadioGroup
        sx={{ mt: 4, gap: 2 }}
        onChange={(e) => handleWeightsAmmountRadioChange(e)}
        value={dive.weightsAmmount}
      >
        {weightsAmmount.map(
          (ammount: { title: string; value: string; helperText: string }) => (
            <FormControl
              key={ammount.value}
              sx={{ width: "100%", flexDirection: "row", gap: 2 }}
            >
              <Radio overlay size="lg" value={ammount.value} />
              <div>
                <FormLabel>{ammount.title}</FormLabel>
                <FormHelperText>{ammount.helperText}</FormHelperText>
              </div>
            </FormControl>
          )
        )}
      </RadioGroup>
    </>
  );
};

export default Details;
