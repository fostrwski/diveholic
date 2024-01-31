import AlternateEmailRounded from "@mui/icons-material/AlternateEmailRounded";
import CheckCircleOutlineRounded from "@mui/icons-material/CheckCircleOutlineRounded";
import EmailRounded from "@mui/icons-material/EmailRounded";
import GitHub from "@mui/icons-material/GitHub";
import PersonRounded from "@mui/icons-material/PersonRounded";
import SaveRounded from "@mui/icons-material/SaveRounded";
import SecurityRounded from "@mui/icons-material/SecurityRounded";
import { IconButton } from "@mui/joy";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import BackButton from "common/components/BackButton";
import { supabase } from "common/utils/supabaseClient";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { string } from "yup";

import Preferences from "./Preferences";

// eslint-disable-next-line no-promise-executor-return
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Account: React.FC = () => {
  const { user } = useUser();

  const [newFirstName, setNewFirstName] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [firstNameSuccess, setFirstNameSuccess] = useState<boolean>(false);

  const [newEmail, setNewEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailToBeConfirmed, setEmailToBeConfirmed] = useState<string | null>(
    null
  );

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!user) return;

    setNewEmail(user.email as string);
    setNewFirstName(user.user_metadata.first_name as string);
  }, [user]);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError(null);
    setNewEmail(e.target.value);
  };

  const handleUpdateEmail = async () => {
    if (user && newEmail === user.email) return;

    setEmailError(null);

    const emailSchema = string().email().required();
    const emailCorrect = await emailSchema.isValid(newEmail);

    if (!emailCorrect) {
      setEmailError("Incorrect email");
      return;
    }

    const { data, error } = await supabase.auth.update({ email: newEmail });

    if (error) {
      console.error(error);
      return;
    }

    // Display alert for 10 seconds
    setEmailToBeConfirmed(data?.new_email as string);
    await delay(10000);
    setEmailToBeConfirmed(null);
  };

  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameError("");
    setNewFirstName(e.target.value);
  };

  const handleUpdateFirstName = async () => {
    if (user && newFirstName === user.user_metadata.first_name) return;

    setFirstNameError("");

    const firstNameSchema = string().required();
    const firstNameCorrect = await firstNameSchema.isValid(newFirstName);

    if (!firstNameCorrect) {
      setFirstNameError("Incorrect first name");
      return;
    }

    const { error } = await supabase.auth.update({
      data: { first_name: newFirstName }
    });

    if (error) {
      console.error(error);
      return;
    }

    setFirstNameSuccess(true);
    await delay(10000);
    setFirstNameSuccess(false);
  };

  if (!user) return <></>;

  return (
    <Box maxWidth="sm">
      <NextSeo title="Account" noindex />

      <BackButton to="/" />

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
          onChange={onEmailChange}
          label="Email"
          startDecorator={<AlternateEmailRounded />}
          value={newEmail}
          type="email"
          sx={{ mb: 2 }}
          error={!!emailError}
          helperText={emailError}
          endDecorator={
            newEmail !== user.email && (
              <IconButton
                aria-label="Save new email"
                color="success"
                variant="soft"
                onClick={handleUpdateEmail}
              >
                <SaveRounded />
              </IconButton>
            )
          }
        />
        {emailToBeConfirmed && (
          <Typography
            mt={2}
            mb={3}
            color="success"
            startDecorator={<CheckCircleOutlineRounded />}
            sx={{ alignItems: "flex-start" }}
          >
            Confirmation link was sent to {emailToBeConfirmed}
          </Typography>
        )}

        <TextField
          onChange={onFirstNameChange}
          label="First name"
          startDecorator={<PersonRounded />}
          value={newFirstName}
          error={!!firstNameError}
          endDecorator={
            newFirstName !== user.user_metadata.first_name && (
              <IconButton
                aria-label="Save new first name"
                color="success"
                variant="soft"
                onClick={handleUpdateFirstName}
              >
                <SaveRounded />
              </IconButton>
            )
          }
          helperText={firstNameError}
        />
        {firstNameSuccess && (
          <Typography
            mt={2}
            mb={3}
            color="success"
            startDecorator={<CheckCircleOutlineRounded />}
            sx={{ alignItems: "flex-start" }}
          >
            First name successfully changed
          </Typography>
        )}
      </Box>

      {mounted && <Preferences />}

      <Box
        sx={{
          mt: 6,
          gap: 1.2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between"
        }}
      >
        <div>
          <Link
            href="https://github.com/franekostrowski/diveholic"
            target="blank"
            startDecorator={<GitHub />}
            color="neutral"
          >
            GitHub repository
          </Link>
        </div>

        <div>
          <NextLink href="/privacy-policy" passHref>
            <Link color="info" startDecorator={<SecurityRounded />}>
              Privacy policy
            </Link>
          </NextLink>
        </div>
      </Box>

      <Typography
        startDecorator={<EmailRounded />}
        sx={{ mt: 4, fontSize: "sm", color: "GrayText" }}
      >
        Contact us at diveholic@franciszek.dev
      </Typography>
    </Box>
  );
};

export default Account;
