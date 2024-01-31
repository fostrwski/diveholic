import AlternateEmailRounded from "@mui/icons-material/AlternateEmailRounded";
import DoneRounded from "@mui/icons-material/DoneRounded";
import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import KeyRounded from "@mui/icons-material/KeyRounded";
import LoginRounded from "@mui/icons-material/LoginRounded";
import VisibilityOffRounded from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRounded from "@mui/icons-material/VisibilityRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import Separator from "common/components/Separator";
import AuthLayout from "common/layouts/Auth";
import { supabase } from "common/utils/supabaseClient";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      if (error) {
        setError(error.message);
        return;
      }
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
    <>
      <NextSeo
        title="Sign in"
        description="Sign in to your Diveholic account"
      />

      <AuthLayout>
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder="joe@example.com"
            startDecorator={<AlternateEmailRounded />}
            type="email"
            onChange={onEmailChange}
            value={email}
            size="lg"
            label="Email"
            required
            data-cy="email"
          />
          <TextField
            sx={{ mt: 2 }}
            startDecorator={<KeyRounded />}
            type={showPassword ? "text" : "password"}
            onChange={onPasswordChange}
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
              mt={2}
              color="danger"
              textAlign="left"
              startDecorator={<ErrorOutlineRounded />}
              sx={{ alignItems: "flex-start" }}
            >
              {error}
            </Typography>
          )}

          <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              type="submit"
              color={success ? "success" : "primary"}
              size="lg"
              sx={{ mt: 2 }}
              startDecorator={success ? <DoneRounded /> : <LoginRounded />}
              disabled={loading}
              data-cy="submit"
              fullWidth
            >
              Sign in
            </Button>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Separator />
              <Typography level="subtitle1" fontSize="xs">
                OR
              </Typography>
              <Separator />
            </Box>

            <NextLink href="/signup" passHref>
              <Button
                color="neutral"
                variant="plain"
                type="button"
                fullWidth
                size="lg"
                component="a"
              >
                Create account
              </Button>
            </NextLink>
          </Box>
        </form>
      </AuthLayout>
    </>
  );
};

export default SignIn;
