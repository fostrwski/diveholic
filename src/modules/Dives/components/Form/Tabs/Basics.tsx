import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import Slider from "@mui/joy/Slider";
import TextField from "@mui/joy/TextField";
import { useNewDiveContext } from "common/context/NewDive";
import React from "react";

import getDiveEmoji from "../utils/getDiveEmoji";

const Basics: React.FC = () => {
  const { newDive, updateNewDiveProp } = useNewDiveContext();

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <FormControl>
            <FormLabel>Dive type</FormLabel>
            <Select
              startDecorator={getDiveEmoji(newDive.type)}
              value={newDive.type}
              onChange={(value) => updateNewDiveProp("type", value)}
            >
              {["Boat", "Shore"].map((diveType: string) => (
                <Option key={diveType} value={diveType.toLowerCase()}>
                  {diveType}
                </Option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={6}>
          <TextField
            type="number"
            name="length"
            label="Length"
            endDecorator="min"
            startDecorator={<TimelapseRounded />}
            onChange={(e) => updateNewDiveProp("length", e.target.value)}
            value={newDive.length}
          />
        </Grid>
      </Grid>

      <Grid container mt={4} spacing={2}>
        <Grid xs={12}>
          <FormControl sx={{ px: 2 }}>
            <FormLabel>
              Average depth ({newDive.units === "metric" ? "m" : "ft"})
            </FormLabel>
            <Slider
              size="lg"
              color="primary"
              max={120}
              valueLabelDisplay="auto"
              value={newDive.depthAverage}
              onChange={(e) =>
                // @ts-ignore
                updateNewDiveProp("depthAverage", parseInt(e.target.value))
              }
            />
            <FormHelperText sx={{ alignSelf: "flex-end" }}>
              {newDive.depthAverage}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl sx={{ px: 2 }}>
            <FormLabel>
              Max depth ({newDive.units === "metric" ? "m" : "ft"})
            </FormLabel>
            <Slider
              size="lg"
              color="primary"
              max={120}
              valueLabelDisplay="auto"
              value={newDive.depthMax}
              onChange={(e) =>
                // @ts-ignore
                updateNewDiveProp("depthMax", parseInt(e.target.value))
              }
            />
            <FormHelperText sx={{ alignSelf: "flex-end" }}>
              {newDive.depthMax}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Basics;
