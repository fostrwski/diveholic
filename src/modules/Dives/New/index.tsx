import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import LineWeightRounded from "@mui/icons-material/LineWeightRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";
import SaveRounded from "@mui/icons-material/SaveRounded";
import ScheduleRounded from "@mui/icons-material/ScheduleRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import type { User } from "@supabase/auth-helpers-nextjs";
import TextSeparator from "common/components/TextSeparator";
import type { DiveFlattened } from "common/types";
import getCountryCode from "common/utils/getCountryCode";
import getFlagEmoji from "common/utils/getFlagEmoji";
import { supabase } from "common/utils/supabaseClient";
import React, { useEffect, useState } from "react";

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

  const handleDateTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const date = new Date(e.target.value);

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

      <Box component="form" mt={4} onSubmit={handleSubmit}>
        <Typography
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            width: "100%",
          }}
          component="div"
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Avatar sx={{ "--Avatar-size": "52px" }}>
              <CalendarTodayRounded sx={{ fontSize: "24px" }} />
            </Avatar>
            <div>
              <FormLabel sx={{ color: "GrayText" }}>Date</FormLabel>
              <Typography level="h6" component="p">
                08/09/2022
              </Typography>
            </div>
          </Box>
        </Typography>

        <Typography
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            width: "100%",
          }}
          component="div"
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Avatar sx={{ "--Avatar-size": "52px" }}>
              <ScheduleRounded sx={{ fontSize: "24px" }} />
            </Avatar>
            <div>
              <FormLabel sx={{ color: "GrayText" }}>Time</FormLabel>
              <Typography level="h6" component="p">
                16:34
              </Typography>
            </div>
          </Box>
        </Typography>

        <Tabs dive={dive} handleTextFieldChange={handleTextFieldChange} />

        <TextSeparator sx={{ mt: 8 }}>Gear</TextSeparator>
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
              type="text"
              name="exposureProtectionType"
              label="Type"
              onChange={(e) =>
                handleTextFieldChange(e, "gearExposureProtectionType")
              }
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              type="text"
              name="exposureProtectionThickness"
              label="Thickness"
              startDecorator={<LineWeightRounded />}
              onChange={(e) =>
                handleTextFieldChange(e, "gearExposureProtectionThickness")
              }
            />
          </Grid>
        </Grid>

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
              type="number"
              name="count"
              label="Count"
              startDecorator={<NumbersRounded />}
              onChange={(e) => handleTextFieldChange(e, "gearTanksCount")}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              type="text"
              name="tankType"
              label="Type"
              onChange={(e) => handleTextFieldChange(e, "gearTanksType")}
            />
          </Grid>
        </Grid>

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
