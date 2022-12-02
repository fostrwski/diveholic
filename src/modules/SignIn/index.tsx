import AlternateEmailRounded from "@mui/icons-material/AlternateEmailRounded";
import DoneRounded from "@mui/icons-material/DoneRounded";
import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import KeyRounded from "@mui/icons-material/KeyRounded";
import LockResetRounded from "@mui/icons-material/LockResetRounded";
import LoginRounded from "@mui/icons-material/LoginRounded";
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
import { useEffect, useState } from "react";

const SignIn: React.FC = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignIn(email, password);
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
        <Box display="flex" alignItems="center" gap={1.2}>
          <Image
            src="/logo.svg"
            width={48}
            height={34}
            layout="fixed"
            alt="Diver down flag"
          />
          <Typography level="h3" component="p">
            Diveholic
          </Typography>
        </Box>

        <Typography textColor="GrayText" level="h6" component="h1" mt={1}>
          Dive log built for the modern age
        </Typography>

        <Box
          component="form"
          display="flex"
          flexDirection="column"
          mt={4}
          gap={2}
          onSubmit={handleSubmit}
        >
          <TextField
            placeholder="Email"
            startDecorator={<AlternateEmailRounded />}
            type="email"
            onChange={handleEmailChange}
            value={email}
            size="lg"
            label="Email"
            required
            data-cy="email"
          />
          <TextField
            placeholder="Password"
            startDecorator={<KeyRounded />}
            type={showPassword ? "text" : "password"}
            onChange={handlePasswordChange}
            value={password}
            size="lg"
            required
            label="Password"
            data-cy="password"
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

          {error && (
            <Typography
              color="danger"
              textAlign="left"
              startDecorator={<ErrorOutlineRounded />}
            >
              {error}
            </Typography>
          )}

          <div>
            <JoyLink
              sx={{ float: "right" }}
              endDecorator={<LockResetRounded />}
            >
              Restore password
            </JoyLink>
          </div>

          <Button
            type="submit"
            color={success ? "success" : "primary"}
            size="lg"
            sx={{ mt: 2 }}
            startDecorator={success ? <DoneRounded /> : <LoginRounded />}
            disabled={loading}
            data-cy="submit"
          >
            Sign in
          </Button>
        </Box>
      </div>

      <Box
        mt={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Typography component="p">Don't have an account?</Typography>

        <NextLink href="/signup" passHref>
          <JoyLink>Sign up</JoyLink>
        </NextLink>
      </Box>
    </Container>
  );
};

export default SignIn;
