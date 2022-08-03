import { Button } from "@mui/joy";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import JoyLink from "@mui/joy/Link";
import Box from "@mui/joy/Box";
import Image from "next/image";
import LoginRounded from "@mui/icons-material/LoginRounded";
import { useState } from "react";
import { supabase } from "common/utils/supabaseClient";
import DoneRounded from "@mui/icons-material/DoneRounded";
import { useRouter } from "next/router";
import NextLink from "next/link";
import MailRounded from "@mui/icons-material/MailRounded";
import KeyRounded from "@mui/icons-material/KeyRounded";
import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import { useUser } from "@supabase/auth-helpers-react";
import IconButton from "@mui/joy/IconButton";
import VisibilityRounded from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRounded from "@mui/icons-material/VisibilityOffRounded";

const SignIn: React.FC = () => {
  const router = useRouter();
  const { user } = useUser();

  if (user) {
    router.push("/");
  }

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
  const [error, setError] = useState<string>("");

  const handleSignIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      setSuccess(false);
      setError("");
      const { error } = await supabase.auth.signIn({ email, password });
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
    setShowPassword(!showPassword);
  };

  return (
    <Container
      sx={{
        py: 12,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 6,
        height: "100vh",
      }}
      maxWidth="sm"
    >
      <div>
        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
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
          <TextField
            placeholder="Email"
            startDecorator={<MailRounded />}
            type="email"
            onChange={handleEmailChange}
            value={email}
            size="lg"
          />
          <TextField
            placeholder="Password"
            startDecorator={<KeyRounded />}
            type={showPassword ? "text" : "password"}
            onChange={handlePasswordChange}
            value={password}
            size="lg"
            endDecorator={
              <IconButton
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
            type="submit"
            color={success ? "success" : "primary"}
            size="lg"
            sx={{ mt: 2 }}
            startIcon={success ? <DoneRounded /> : <LoginRounded />}
            disabled={loading}
          >
            Sign in
          </Button>
        </Box>
      </div>

      <div>
        <Typography component="p">Don't have an account?</Typography>

        <NextLink href="/signup" passHref>
          <JoyLink mt={2}>Sign up</JoyLink>
        </NextLink>
      </div>
    </Container>
  );
};

export default SignIn;
