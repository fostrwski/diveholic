import { Button } from "@mui/joy";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import JoyLink from "@mui/joy/Link";
import Box from "@mui/joy/Box";
import Image from "next/image";
import PersonAddAltRounded from "@mui/icons-material/PersonAddAltRounded";
import React, { useState } from "react";
import { supabase } from "common/utils/supabaseClient";
import DoneRounded from "@mui/icons-material/DoneRounded";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PersonRounded } from "@mui/icons-material";
import KeyRounded from "@mui/icons-material/KeyRounded";
import MailRounded from "@mui/icons-material/MailRounded";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSignUp = async (email: string, password: string) => {
    setLoading(true);

    if (!email || !password || !firstName || !lastName)
      return setLoading(false);

    try {
      const { error } = await supabase.auth.signUp(
        { email, password },
        {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
        }
      );
      if (error) throw error;
      setLoading(false);
      setSuccess(true);
      router.push("/signin");
    } catch (error: any) {
      console.error(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      component="main"
      sx={{
        py: 12,
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 4,
        height: "100vh",
      }}
      maxWidth="sm"
    >
      <div>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
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

        <Typography textColor="neutral.400" level="h6" component="p" mt={2}>
          Dive log built for the modern age
        </Typography>

        <Typography level="h5" component="p" mt={4}>
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
          <Input
            placeholder="Email"
            type="email"
            startDecorator={<MailRounded />}
            onChange={handleEmailChange}
            value={email}
          />
          <Input
            placeholder="Password"
            type="password"
            startDecorator={<KeyRounded />}
            onChange={handlePasswordChange}
            value={password}
          />
          <Input
            placeholder="First name"
            type="text"
            startDecorator={<PersonRounded />}
            onChange={handleFirstNameChange}
            value={firstName}
          />

          <Button
            color={success ? "success" : "primary"}
            type="submit"
            size="lg"
            sx={{ mt: 2, width: "100%" }}
            startIcon={success ? <DoneRounded /> : <PersonAddAltRounded />}
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
}

export default SignUp
