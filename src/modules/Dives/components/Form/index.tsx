import SaveRounded from "@mui/icons-material/SaveRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import TextField from "@mui/joy/TextField";
import Textarea from "@mui/joy/Textarea";
import { useNewDiveContext } from "common/context/NewDive";
import { Form as FormikForm } from "formik";
import React, { useEffect } from "react";

import DatePicker from "./DatePicker";
import Gear from "./Gear";
import Tabs from "./Tabs";
import Temperature from "./Temperature";
import getCountryCode from "./utils/getCountryCode";
import getFlagEmoji from "./utils/getFlagEmoji";

const Form: React.FC = () => {
  const { newDive, updateNewDiveProp } = useNewDiveContext();

  // TODO: Optimize it!

  useEffect(() => {
    const countryCode = getCountryCode(newDive.locationCountryName);
    let flagEmoji = "";
    if (countryCode) {
      flagEmoji = getFlagEmoji(countryCode);
      updateNewDiveProp("locationCountryCode", countryCode);
      updateNewDiveProp("locationCountryFlagEmoji", flagEmoji);
    } else {
      flagEmoji = "";
      updateNewDiveProp("locationCountryFlagEmoji", flagEmoji);
    }
  }, [newDive.locationCountryName]);

  return (
    <>
      <DatePicker />

      <FormikForm>
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
          size="lg"
          startIcon={<SaveRounded />}
          sx={{ mt: 6 }}
          fullWidth
        >
          Save
        </Button>
      </FormikForm>
    </>
  );
};

export default Form;
