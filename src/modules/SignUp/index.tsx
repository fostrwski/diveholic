import AlternateEmailRounded from "@mui/icons-material/AlternateEmailRounded";
import DoneRounded from "@mui/icons-material/DoneRounded";
import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import KeyRounded from "@mui/icons-material/KeyRounded";
import PersonAddRounded from "@mui/icons-material/PersonAddRounded";
import PersonRounded from "@mui/icons-material/PersonRounded";
import SendRounded from "@mui/icons-material/SendRounded";
import VisibilityOffRounded from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRounded from "@mui/icons-material/VisibilityRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import MuiLink from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import AuthLayout from "common/layouts/Auth";
import { supabase } from "common/utils/supabaseClient";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const router = useRouter();
  const { user } = useUser();

  if (user) {
    router.push("/");
  }

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSignUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      setSuccess(false);
      setError("");
      if (!email || !password || !firstName) return setLoading(false);

      const { error } = await supabase.auth.signUp(
        { email, password },
        {
          data: {
            first_name: firstName
          }
        }
      );
      if (error) return setError(error.message);
      setSuccess(true);
    } catch (error: any) {
      console.error(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignUp(email, password);
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthLayout title="Create account" icon={<PersonAddRounded />}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap={2}
        onSubmit={handleSubmit}
      >
        <TextField
          placeholder="Email"
          type="email"
          startDecorator={<AlternateEmailRounded />}
          onChange={onEmailChange}
          value={email}
          size="lg"
          required
          label="Email"
        />
        <TextField
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          startDecorator={<KeyRounded />}
          onChange={onPasswordChange}
          value={password}
          size="lg"
          required
          label="Password"
          endDecorator={
            <IconButton
              aria-label="Toggle password visibility"
              color="neutral"
              variant="plain"
              onClick={handleShowPassword}
            >
              {showPassword ? <VisibilityOffRounded /> : <VisibilityRounded />}
            </IconButton>
          }
        />
        <TextField
          placeholder="First name"
          type="text"
          startDecorator={<PersonRounded />}
          onChange={onFirstNameChange}
          value={firstName}
          size="lg"
          required
          label="First name"
        />

        {success && (
          <Typography
            color="success"
            textAlign="left"
            startDecorator={<SendRounded />}
          >
            Confirmation link was sent to your email
          </Typography>
        )}

        {error && (
          <Typography
            color="danger"
            textAlign="left"
            startDecorator={<ErrorOutlineRounded />}
          >
            {error}
          </Typography>
        )}

        <Button
          color={success ? "success" : "primary"}
          type="submit"
          size="lg"
          sx={{ mt: 2, width: "100%" }}
          startDecorator={success ? <DoneRounded /> : <PersonAddRounded />}
          disabled={loading}
        >
          Create account
        </Button>
      </Box>

      <Box
        mt={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1
        }}
      >
        <Typography component="p">Already have an account? </Typography>

        <NextLink href="/signin" passHref>
          <MuiLink>Sign in</MuiLink>
        </NextLink>
      </Box>
    </AuthLayout>
  );
};

export default SignUp;
