import { TitleRounded } from "@mui/icons-material";
import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import FlagRounded from "@mui/icons-material/FlagRounded";
import LineWeightRounded from "@mui/icons-material/LineWeightRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";
import PublicRounded from "@mui/icons-material/PublicRounded";
import SaveRounded from "@mui/icons-material/SaveRounded";
import ScaleRounded from "@mui/icons-material/ScaleRounded";
import ScheduleRounded from "@mui/icons-material/ScheduleRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import { FormLabel, IconButton } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Tab from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import TabPanel from "@mui/joy/TabPanel";
import Tabs from "@mui/joy/Tabs";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { User } from "@supabase/auth-helpers-nextjs";
import TextSeparator from "common/components/TextSeparator";
import type { Dive, DiveFlattened } from "common/types";
import getCountryCode from "common/utils/getCountryCode";
import getFlagEmoji from "common/utils/getFlagEmoji";
import { supabase } from "common/utils/supabaseClient";
import React, { useEffect, useRef, useState } from "react";

import Header from "./Header";
import diveInitialState from "./diveInitialState";

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
    const newDive: Dive = {
      date: dive.date,
      time: dive.time,
      location: {
        country: {
          name: dive.locationCountryName,
          code: dive.locationCountryCode,
          flagEmoji: dive.locationCountryFlagEmoji,
        },
        city: dive.locationCity,
        diveCenter: dive.locationDiveCenter,
      },
      type: dive.type,
      length: dive.length,
      depth: {
        average: dive.depthAverage,
        max: dive.depthMax,
      },
      weights: {
        taken: dive.weightsTaken,
        nextTime: {
          takeLess: dive.weightsNextTimeTakeLess,
          takeMore: dive.weightsNextTimeTakeMore,
          weightDifference: dive.weightsNextTimeWeightDifference,
        },
      },
      water: dive.water,
      temperature: {
        air: dive.temperatureAir,
        water: {
          surface: dive.temperatureWaterSurface,
          bottom: dive.temperatureWaterBottom,
        },
      },
      gear: {
        exposureProtection: {
          type: dive.gearExposureProtectionType,
          thickness: dive.gearExposureProtectionThickness,
        },
        tanks: {
          count: dive.gearTanksCount,
          type: dive.gearTanksType,
        },
      },
    };

    const dateInputRef = useRef();
    const timeInputRef = useRef();

    const { data, error } = await supabase
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
          <div>
            <IconButton color="warning" size="sm">
              <EditRounded />
            </IconButton>
          </div>
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
          <div>
            <IconButton color="warning" size="sm">
              <EditRounded />
            </IconButton>
          </div>
        </Typography>

        <Tabs
          defaultValue={0}
          sx={{
            backgroundColor: "transparent",
            px: 0,
            mt: 6,
          }}
        >
          <TabList size="lg" sx={{ mb: 4 }}>
            <Tab>Location</Tab>
            <Tab>Details</Tab>
            <Tab>Weighths</Tab>
          </TabList>

          <TabPanel value={0}>
            <Grid container spacing={2}>
              <Grid spacing={2} container>
                <Grid xs={6}>
                  <TextField
                    type="text"
                    name="locationCountry"
                    label="Country"
                    onChange={(e) =>
                      handleTextFieldChange(e, "locationCountryName")
                    }
                    startDecorator={
                      dive.locationCountryFlagEmoji ? (
                        dive.locationCountryFlagEmoji
                      ) : (
                        <PublicRounded />
                      )
                    }
                  />
                </Grid>
                <Grid xs={6}>
                  <TextField
                    type="text"
                    name="locationCity"
                    label="City"
                    onChange={(e) => handleTextFieldChange(e, "locationCity")}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    type="text"
                    name="locationDiveCenter"
                    label="Dive center"
                    startDecorator={<FlagRounded />}
                    onChange={(e) =>
                      handleTextFieldChange(e, "locationDiveCenter")
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={1}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <TextField
                  type="text"
                  name="diveType"
                  label="Dive type"
                  startDecorator={<TitleRounded />}
                  onChange={(e) => handleTextFieldChange(e, "type")}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  type="number"
                  name="length"
                  label="Length"
                  endDecorator="min"
                  startDecorator={<TimelapseRounded />}
                  onChange={(e) => handleTextFieldChange(e, "length")}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  type="number"
                  name="maxDepth"
                  label="Max depth"
                  endDecorator="m"
                  startDecorator={<DownloadRounded />}
                  onChange={(e) => handleTextFieldChange(e, "depthMax")}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  type="number"
                  name="averageDepth"
                  label="Average depth"
                  endDecorator="m"
                  onChange={(e) => handleTextFieldChange(e, "depthAverage")}
                />
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={2}>
            <TextField
              type="text"
              name="water"
              label="Water"
              onChange={(e) => handleTextFieldChange(e, "water")}
            />
            <TextField
              type="number"
              name="weights"
              label="Weights"
              endDecorator="kg"
              startDecorator={<ScaleRounded />}
              onChange={(e) => handleTextFieldChange(e, "weightsTaken")}
              sx={{ mt: 2 }}
            />
            <RadioGroup
              defaultValue="perfect"
              name="radio-buttons-group"
              sx={{ mt: 4 }}
            >
              <Radio value="perfect" label="Perfect" />
              <Radio value="tooLittle" label="Too little" />
              <Radio value="tooMuch" label="Too much" />
            </RadioGroup>
          </TabPanel>
        </Tabs>

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
