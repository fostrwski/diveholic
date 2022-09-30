import SaveRounded from "@mui/icons-material/SaveRounded";
import { FormLabel } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/joy/TextField";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import type { User } from "@supabase/auth-helpers-nextjs";
import TextSeparator from "common/components/TextSeparator";
import type { DiveFlattened } from "common/types";
import getCountryCode from "common/utils/getCountryCode";
import getFlagEmoji from "common/utils/getFlagEmoji";
import { supabase } from "common/utils/supabaseClient";
import React, { useEffect, useState } from "react";

import DatePicker from "./DatePicker";
import Gear from "./Gear";
import Header from "./Header";
import Tabs from "./Tabs";
import diveInitialState from "./diveInitialState";
import generateNewDiveObject from "./generateNewDiveObject";

interface NewProps {
  user: User;
}

const New: React.FC<NewProps> = ({ user }) => {
  const [dive, setDive] = useState<DiveFlattened>(diveInitialState);

  useEffect(() => {
    const countryCode = getCountryCode(dive.locationCountryName);
    let flagEmoji = "";
    if (countryCode) flagEmoji = getFlagEmoji(countryCode);
    setDive((prevState: DiveFlattened) => ({
      ...prevState,
      locationCountryCode: countryCode,
      locationCountryFlagEmoji: flagEmoji,
    }));
  }, [dive.locationCountryName]);

  const updateDiveProp = (prop: string, value: any) => {
    setDive((prevState: DiveFlattened) => ({
      ...prevState,
      [prop]: value,
    }));
  };

  const handleTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    updateDiveProp(prop, e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newDive = generateNewDiveObject(dive);

    const { error } = await supabase
      .from("dives")
      .insert({ user_id: user.id, ...newDive });
    if (error) console.error(error);
  };

  return (
    <>
      <Header />

      <DatePicker dive={dive} updateDiveProp={updateDiveProp} />

      <Box component="form" onSubmit={handleSubmit}>
        <Tabs
          dive={dive}
          handleTextFieldChange={handleTextFieldChange}
          updateDiveProp={updateDiveProp}
        />

        <Gear dive={dive} handleTextFieldChange={handleTextFieldChange} />

        <TextSeparator sx={{ mt: 8 }}>Weather</TextSeparator>
        <Typography
          mb={2}
          mt={4}
          component="p"
          textColor="GrayText"
          fontWeight="md"
        >
          Temperature
        </Typography>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid xs={4}>
            <TextField
              type="number"
              name="temperatureAir"
              label="Air"
              fullWidth
              endDecorator="°C"
              onChange={(e) => handleTextFieldChange(e, "temperatureAir")}
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              type="number"
              name="temperatureWaterSurface"
              label="Water surface"
              fullWidth
              endDecorator="°C"
              onChange={(e) =>
                handleTextFieldChange(e, "temperatureWaterSurface")
              }
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              type="number"
              name="temperatureWaterBottom"
              label="Water bottom"
              fullWidth
              endDecorator="°C"
              onChange={(e) =>
                handleTextFieldChange(e, "temperatureWaterBottom")
              }
            />
          </Grid>
        </Grid>

        <TextField
          type="text"
          name="diveBuddy"
          label="Dive buddy"
          sx={{ mt: 10 }}
        />

        <FormControl sx={{ mt: 2 }}>
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
      </Box>
    </>
  );
};

export default New;
