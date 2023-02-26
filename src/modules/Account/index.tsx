import AlternateEmailRounded from "@mui/icons-material/AlternateEmailRounded";
import DoneRounded from "@mui/icons-material/DoneRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import PersonRounded from "@mui/icons-material/PersonRounded";
import SecurityRounded from "@mui/icons-material/SecurityRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

import Preferences from "./Preferences";

const Account: React.FC = () => {
  const { user } = useUser();

  const [newFirstName, setNewFirstName] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!user) return;

    setNewEmail(user.email as string);
    setNewFirstName(user.user_metadata.first_name as string);
  }, [user]);

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

      {mounted && <Preferences />}

      <Box sx={{ mt: 6 }}>
        <NextLink href="/privacy-policy" passHref>
          <Link
            color="info"
            sx={{ fontSize: "sm" }}
            startDecorator={<SecurityRounded />}
          >
            Privacy policy
          </Link>
        </NextLink>
      </Box>
    </>
  );
};

export default Account;
