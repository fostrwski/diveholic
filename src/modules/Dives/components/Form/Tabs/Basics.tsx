import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
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
            onChange={(e) =>
              updateNewDiveProp("length", parseInt(e.target.value))
            }
            value={newDive.length}
          />
        </Grid>

        <Grid xs={6}>
          <TextField
            name="depthAverage"
            label="Average depth"
            type="number"
            endDecorator={newDive.units === "metric" ? "m" : "ft"}
            value={newDive.depthAverage}
            onChange={(e) =>
              updateNewDiveProp("depthAverage", parseInt(e.target.value))
            }
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            name="depthMax"
            label="Max depth"
            type="number"
            endDecorator={newDive.units === "metric" ? "m" : "ft"}
            value={newDive.depthMax.toString()}
            onChange={(e) => {
              updateNewDiveProp("depthMax", parseInt(e.target.value));
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Basics;
