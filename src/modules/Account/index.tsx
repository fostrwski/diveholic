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
import { User } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

interface AccountProps {
  user: User;
}

const Account: React.FC<AccountProps> = ({ user }) => {
  const { email } = user;
  const { first_name: firstName } = user.user_metadata;

  const [newFirstName, _setNewFirstName] = useState<string>(firstName);
  const [newEmail, _setNewEmail] = useState<string>(email!);

  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setMode(e.target.value);
  };

  return (
    <>
      <Box mb={4} width="100%">
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
          variant="soft"
          value={newEmail}
          type="email"
          sx={{ mb: 2 }}
        />

        <TextField
          label="First name"
          startDecorator={<PersonRounded />}
          endDecorator={<EditRounded />}
          variant="soft"
          value={newFirstName}
        />

        <Box textAlign="right">
          <Button
            startDecorator={<DoneRounded />}
            color="success"
            sx={{ mt: 4 }}
            disabled
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
          <RadioGroup row value={mode} onChange={handleRadioChange}>
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
