import { Button } from "@mui/joy";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import JoyLink from "@mui/joy/Link";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Image from "next/image";
import React, { useState } from "react";
import { supabase } from "common/utils/supabaseClient";
import DoneRounded from "@mui/icons-material/DoneRounded";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PersonRounded from "@mui/icons-material/PersonRounded";
import PersonAddRounded from "@mui/icons-material/PersonAddRounded";
import KeyRounded from "@mui/icons-material/KeyRounded";
import MailRounded from "@mui/icons-material/MailRounded";
import { useUser } from "@supabase/auth-helpers-react";
import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import SendRounded from "@mui/icons-material/SendRounded";
import VisibilityRounded from '@mui/icons-material/VisibilityRounded';

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
  const { user } = useUser()

  if (user) {
    router.push("/")
  }

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [error, setError] = useState<string>("");

  const handleSignUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError("")
      if (!email || !password || !firstName)
        return setLoading(false);

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

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Container
      component="main"
      sx={{
        py: 12,
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 6,
        height: "100vh",
      }}
      maxWidth="sm"
    >
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Image
            src="/diver_down_flag.svg"
            style={{ borderRadius: 4 }}
            width={54}
            height={36}
            layout="fixed"
            alt="Diver down flag"
          />
          <Typography level="h2" component="p">
            Diveholic
          </Typography>
        </Box>

        <Typography textColor="neutral.400" level="h6" component="h1" mt={2}>
          Dive log built for the modern age
        </Typography>

        <Typography level="h5" component="h2" mt={4} startDecorator={<PersonAddRounded />}>
          Create account
        </Typography>

        <Box
          component="form"
          display="flex"
          flexDirection="column"
          mt={2}
          gap={2}
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleSignUp(email, password);
          }}
        >
          <TextField
            placeholder="Email"
            type="email"
            startDecorator={<MailRounded />}
            onChange={handleEmailChange}
            value={email}
            size="lg"
          />
          <TextField
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            startDecorator={<KeyRounded />}
            onChange={handlePasswordChange}
            value={password}
            size="lg"
            endDecorator={<IconButton color="neutral" variant="plain" onClick={handleShowPassword}><VisibilityRounded /></IconButton>}
          />
          <TextField
            placeholder="First name"
            type="text"
            startDecorator={<PersonRounded />}
            onChange={handleFirstNameChange}
            value={firstName}
            size="lg"
          />

          {success && (
            <Typography color="success" textAlign="left" startDecorator={<SendRounded />}>Confirmation link was sent to your email</Typography>
          )
          }

          {error && (
            <Typography color="danger" textAlign="left" startDecorator={<ErrorOutlineRounded />}>{error}</Typography>
          )
          }

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

      <div>
        <Typography component="p">Already have an account? </Typography>

        <NextLink href="/signin" passHref>
          <JoyLink mt={2}>Sign in</JoyLink>
        </NextLink>
      </div>
    </Container>
  );
};

export default SignUp;
