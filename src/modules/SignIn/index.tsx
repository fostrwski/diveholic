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
import IconButton from "@mui/joy/IconButton";
import MuiLink from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import Separator from "common/components/Separator";
import AuthLayout from "common/layouts/Auth";
import { supabase } from "common/utils/supabaseClient";
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
    <AuthLayout>
      <Box mt={4} component="form" onSubmit={handleSubmit}>
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
              {showPassword ? <VisibilityOffRounded /> : <VisibilityRounded />}
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

        {/* <div> */}
        {/*   <MuiLink */}
        {/*     sx={{ float: "right" }} */}
        {/*     endDecorator={<LockResetRounded />} */}
        {/*     component="button" */}
        {/*     type="button" */}
        {/*   > */}
        {/*     Restore password */}
        {/*   </MuiLink> */}
        {/* </div> */}

        <Box sx={{ mt: 6, display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            type="submit"
            variant="solid"
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
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
