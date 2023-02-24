import {
  AlternateEmailRounded,
  PersonRounded,
  TuneRounded
} from "@mui/icons-material";
import DoneRounded from "@mui/icons-material/DoneRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { useColorScheme } from "@mui/joy/styles";
import { useUser } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";

const Account: React.FC = () => {
  const { user } = useUser();

  const [newFirstName, setNewFirstName] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");

  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
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

  return (
    <>
      <Box mb={6} width="100%">
        <Typography
          startDecorator={<PersonRounded />}
          level="h4"
          component="div"
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

      <Typography level="h4" startDecorator={<TuneRounded />}>
        Preferences
      </Typography>

      {mounted && (
        <>
          <Typography level="h5" my={2}>
            Mode
          </Typography>
          <RadioGroup row value={mode} onChange={onRadioChange}>
            <Radio value="system" label="System" />
            <Radio value="light" label="Light" />
            <Radio value="dark" label="Dark" />
          </RadioGroup>
        </>
      )}
    </>
  );
};

export default Account;
