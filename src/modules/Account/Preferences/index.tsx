import TuneRounded from "@mui/icons-material/TuneRounded";
import Box from "@mui/joy/Box";
import Switch from "@mui/joy/Switch";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import Typography from "@mui/joy/Typography";
import { useColorScheme } from "@mui/joy/styles";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Radio from "@mui/joy/Radio";
import FormLabel from "@mui/joy/FormLabel";
import RadioGroup from "@mui/joy/RadioGroup";

const Preferences: React.FC = () => {
  const { mode, setMode } = useColorScheme();
  const [analyticsChecked, setAnalyticsChecked] = useState<boolean>(false);

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setMode(e.target.value);
  };

  useEffect(() => {
    setAnalyticsChecked(Cookies.get("Analytics") === "accepted");
  }, []);

  const onSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnalyticsChecked(e.target.checked);

    if (e.target.checked) return Cookies.set("Analytics", "accepted");
    Cookies.set("Analytics", "declined");
  };

  return (
    <>
      <Typography level="h5" startDecorator={<TuneRounded />}>
        Preferences
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 2 }}>
        <div>
          <Typography level="subtitle1" mb={1}>
            Color mode
          </Typography>
          <RadioGroup row value={mode} onChange={onRadioChange}>
            <Radio value="system" label="System" />
            <Radio value="light" label="Light" />
            <Radio value="dark" label="Dark" />
          </RadioGroup>
        </div>

        <FormControl
          orientation="horizontal"
          sx={{ width: 300, justifyContent: "space-between", gap: 2 }}
        >
          <div>
            <FormLabel>Analytics</FormLabel>
            <FormHelperText sx={{ mt: 0 }}>
              We use Google Analytics to track app usage
            </FormHelperText>
          </div>
          {/* @ts-ignore */}
          <Switch
            checked={analyticsChecked}
            onChange={onSwitchChange}
            color={analyticsChecked ? "success" : "neutral"}
            variant="soft"
            endDecorator={analyticsChecked ? "On" : "Off"}
            slotProps={{
              endDecorator: {
                sx: {
                  minWidth: 24
                }
              }
            }}
          />
        </FormControl>
      </Box>
    </>
  );
};

export default Preferences;
