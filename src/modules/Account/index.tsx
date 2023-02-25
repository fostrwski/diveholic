import {
  AlternateEmailRounded,
  PersonRounded,
  TuneRounded
} from "@mui/icons-material";
import DoneRounded from "@mui/icons-material/DoneRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Switch from "@mui/joy/Switch";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { useColorScheme } from "@mui/joy/styles";
import { useUser } from "@supabase/auth-helpers-react";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const Account: React.FC = () => {
  const { user } = useUser();

  const [newFirstName, setNewFirstName] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");

  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [analyticsChecked, setAnalyticsChecked] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    setAnalyticsChecked(Cookies.get("Analytics") === "accepted");
  }, []);

  useEffect(() => {
    if (!user) return;

    setNewEmail(user.email as string);
    setNewFirstName(user.user_metadata.first_name as string);
  }, [user]);

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setMode(e.target.value);
  };

  const onSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnalyticsChecked(e.target.checked);

    if (e.target.checked) return Cookies.set("Analytics", "accepted");
    Cookies.set("Analytics", "declined");
  };

  return (
    <>
      <Box mb={6} width="100%">
        <Typography
          startDecorator={<PersonRounded />}
          level="h4"
          component="p"
          mb={2}
        >
          Account
        </Typography>

        <TextField
          label="Email"
          startDecorator={<AlternateEmailRounded />}
          endDecorator={<EditRounded />}
          value={newEmail}
          type="email"
          sx={{ mb: 2 }}
        />

        <TextField
          label="First name"
          startDecorator={<PersonRounded />}
          endDecorator={<EditRounded />}
          value={newFirstName}
        />

        <Box textAlign="right">
          <Button
            startDecorator={<DoneRounded />}
            color="success"
            variant="outlined"
            sx={{ mt: 4 }}
            disabled
            fullWidth
          >
            Save
          </Button>
        </Box>
      </Box>

      <Typography level="h5" startDecorator={<TuneRounded />}>
        Preferences
      </Typography>

      {mounted && (
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
      )}
    </>
  );
};

export default Account;
