import SaveRounded from "@mui/icons-material/SaveRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import TextField from "@mui/joy/TextField";
import Textarea from "@mui/joy/Textarea";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import Gear from "./Gear";
import Tabs from "./Tabs";
import Temperature from "./Temperature";
import getCountryCode from "./utils/getCountryCode";
import getFlagEmoji from "./utils/getFlagEmoji";

interface FormProps {
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const { setValue, watch, getValues, register } = useFormContext();
  const watchLocationCountryName = watch("locationCountryName");

  useEffect(() => {
    const countryCode = getCountryCode(watchLocationCountryName);
    let flagEmoji = "";
    if (countryCode) {
      flagEmoji = getFlagEmoji(countryCode);
      setValue("locationCountryCode", countryCode);
      setValue("locationCountryFlagEmoji", flagEmoji);
    } else {
      flagEmoji = "";
      setValue("locationCountryFlagEmoji", flagEmoji);
    }
  }, [getValues, setValue, watchLocationCountryName]);

  return (
    <>
      <Box component="form" onSubmit={onSubmit}>
        <Tabs />

        <Gear />

        <Temperature />

        <TextField
          {...register("diveBuddy")}
          type="text"
          label="Dive buddy"
          placeholder="Joe Doe"
          sx={{ mt: 10 }}
        />

        <FormControl sx={{ mt: 6 }}>
          <FormLabel>Notes</FormLabel>
          <Textarea
            {...register("notes")}
            minRows={4}
            variant="soft"
            id="notes"
            placeholder="Describe what you saw, share your experience"
          />
        </FormControl>

        <Button
          type="submit"
          color="success"
          size="lg"
          startDecorator={<SaveRounded />}
          sx={{ mt: 6 }}
          fullWidth
          onSubmit={onSubmit}
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default Form;
