import SaveRounded from "@mui/icons-material/SaveRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import TextField from "@mui/joy/TextField";
import Textarea from "@mui/joy/Textarea";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import DatePicker from "./DatePicker";
import Gear from "./Gear";
import Tabs from "./Tabs";
import Temperature from "./Temperature";
import getCountryCode from "./utils/getCountryCode";
import getFlagEmoji from "./utils/getFlagEmoji";

interface FormProps {
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    setValue,
    watch,
    getValues,
    formState: { errors }
  } = useFormContext();
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
      <DatePicker />

      <Box component="form" onSubmit={onSubmit}>
        <Tabs />

        <Gear />

        <Temperature />

        <TextField
          type="text"
          name="diveBuddy"
          label="Dive buddy"
          placeholder="Joe Doe"
          sx={{ mt: 10 }}
        />

        <FormControl sx={{ mt: 6 }}>
          <FormLabel>Notes</FormLabel>
          <Textarea
            name="notes"
            minRows={4}
            variant="soft"
            id="notes"
            placeholder="Describe what you saw, share your experience"
          />
        </FormControl>

        <Button
          type="submit"
          color="success"
          disabled={!(Object.keys(errors).length === 0)}
          size="lg"
          startDecorator={<SaveRounded />}
          sx={{ mt: 6 }}
          fullWidth
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default Form;
