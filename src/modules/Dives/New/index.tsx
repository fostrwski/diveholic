import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import SaveRounded from "@mui/icons-material/SaveRounded";
import ScheduleRounded from "@mui/icons-material/ScheduleRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
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

  const handleTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setDive((prevState: DiveFlattened) => ({
      ...prevState,
      [prop]: e.target.value,
    }));
  };

  const handleSetDate = (date: Date) => {
    setDive((prevState: DiveFlattened) => ({
      ...prevState,
      date: date,
    }));
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

      <DatePicker diveDate={dive.date} setDate={handleSetDate} />

      <Box component="form" onSubmit={handleSubmit}>
        <Tabs
          dive={dive}
          handleTextFieldChange={handleTextFieldChange}
          setDive={setDive}
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
        <TextField type="text" name="notes" label="Notes" sx={{ mt: 2 }} />

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
