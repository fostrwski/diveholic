import { Button } from "@mui/joy";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import JoyLink from "@mui/joy/Link";
import Box from "@mui/joy/Box";
import Image from "next/image";
import LoginRounded from "@mui/icons-material/LoginRounded";
import { useState } from "react";
import { supabase } from "common/utils/supabaseClient";
import DoneRounded from "@mui/icons-material/DoneRounded";
import router from "next/router";
import NextLink from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      setLoading(false);
      setSuccess(true);
      router.push("/");
    } catch (error: any) {
      console.error(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      component="main"
      sx={{ my: 12, textAlign: "center" }}
      maxWidth="sm"
    >
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Image
          src="/diver_down_flag.svg"
          style={{ borderRadius: 4 }}
          width={54}
          height={36}
          layout="fixed"
          alt="Diver down flag"
        />
        <Typography level="h2" component="div">
          Diveholic
        </Typography>
      </Box>

      <Typography textColor="neutral.400" level="h6" component="p" mt={2}>
        Dive log built for the modern age
      </Typography>

      <Box
        component="form"
        display="flex"
        flexDirection="column"
        mt={4}
        gap={2}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSignIn(email, password);
        }}
      >
        <Input
          required
          variant="soft"
          size="lg"
          placeholder="Email"
          type="email"
          onChange={handleEmailChange}
          value={email}
        />
        <Input
          required
          variant="soft"
          size="lg"
          placeholder="Password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />

        <Button
          type="submit"
          color={success ? "success" : "primary"}
          variant="soft"
          size="lg"
          sx={{ mt: 4, width: "100%" }}
          startIcon={success ? <DoneRounded /> : <LoginRounded />}
          disabled={loading}
        >
          Sign in
        </Button>
      </Box>

      <Typography mt={8}>Don't have an account?</Typography>

      <NextLink href="/signup" passHref>
        <JoyLink variant="plain" sx={{ mt: 2 }}>
          Sign up
        </JoyLink>
      </NextLink>
    </Container>
  );
}
