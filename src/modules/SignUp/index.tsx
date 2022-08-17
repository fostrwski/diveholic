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
import Container from "@mui/joy/Container";
import IconButton from "@mui/joy/IconButton";
import JoyLink from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import { supabase } from "common/utils/supabaseClient";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            first_name: firstName,
          },
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
    <Container
      component="main"
      sx={{
        py: 4,
        height: "100vh",
      }}
      maxWidth="sm"
    >
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Image
            src="/diver_down_flag.svg"
            style={{ borderRadius: 4 }}
            width={48}
            height={30}
            layout="fixed"
            alt="Diver down flag"
          />
          <Typography level="h3" component="p">
            Diveholic
          </Typography>
        </Box>

        <Typography textColor="neutral.400" level="h6" component="h1" mt={1}>
          Dive log built for the modern age
        </Typography>

        <Typography
          level="h5"
          component="h2"
          mt={4}
          startDecorator={<PersonAddRounded />}
        >
          Create account
        </Typography>

        <Box
          component="form"
          display="flex"
          flexDirection="column"
          mt={2}
          gap={2}
          onSubmit={handleSubmit}
        >
          <TextField
            placeholder="Email"
            type="email"
            startDecorator={<AlternateEmailRounded />}
            onChange={handleEmailChange}
            value={email}
            size="lg"
            required
            label="Email"
          />
          <TextField
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            startDecorator={<KeyRounded />}
            onChange={handlePasswordChange}
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
                {showPassword ? (
                  <VisibilityOffRounded />
                ) : (
                  <VisibilityRounded />
                )}
              </IconButton>
            }
          />
          <TextField
            placeholder="First name"
            type="text"
            startDecorator={<PersonRounded />}
            onChange={handleFirstNameChange}
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
            startIcon={success ? <DoneRounded /> : <PersonAddRounded />}
            disabled={loading}
          >
            Create account
          </Button>
        </Box>
      </div>

      <Box mt={8} sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <Typography component="p">Already have an account? </Typography>

        <NextLink href="/signin" passHref>
          <JoyLink>Sign in</JoyLink>
        </NextLink>
      </Box>
    </Container>
  );
};

export default SignUp;
