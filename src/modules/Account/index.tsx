import React, { useEffect, useState } from "react";
import { User } from "@supabase/supabase-auth-helpers/nextjs";
import Avatar from "@mui/joy/Avatar";
import generateInitials from "common/utils/generateInitials";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import EditRounded from "@mui/icons-material/EditRounded";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { PersonRounded, TuneRounded } from "@mui/icons-material";
import { useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";

interface AccountProps {
  user: User;
}

const Account: React.FC<AccountProps> = ({ user }) => {
  const { email } = user
  const { first_name: firstName } = user.user_metadata;
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
      <Box display="flex" alignItems="center" flexDirection="column">
        <Avatar sx={{ width: 140, height: 140 }} size="lg">
          <Typography level="display2">
            {generateInitials(firstName, firstName)}
          </Typography>
        </Avatar>
      </Box>

      <Box mb={4} width="100%">
        <Typography startDecorator={<PersonRounded />} level="h4" mt={4} mb={2}>
          Account
        </Typography>

        <Typography gutterBottom mt={2}>Email</Typography>
        <Input
          startDecorator={<EditRounded />}
          variant="soft"
          value={email}
          type="email"
        />

        <Typography gutterBottom mt={2}>First name</Typography>
        <Input
          startDecorator={<EditRounded />}
          variant="soft"
          value={firstName}
        />

        <Box textAlign="right">
          <Button color="success" sx={{ mt: 4 }}>
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
