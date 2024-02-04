import {
  AlternateEmailRounded,
  DoneRounded,
  ErrorOutlineRounded,
  KeyRounded,
  LoginRounded,
  VisibilityOffRounded,
  VisibilityRounded,
} from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Typography } from '@mui/joy';
import Separator from 'common/components/Separator';
import NextLink from 'next/link';
import React, { useState } from 'react';

import useSignIn from '../api/signIn';

export default function SignInForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { loading, success, error, signIn } = useSignIn();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn(email, password);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
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
        type={showPassword ? 'text' : 'password'}
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
          mt={2}
          color="danger"
          textAlign="left"
          startDecorator={<ErrorOutlineRounded />}
          sx={{ alignItems: 'flex-start' }}
        >
          {error}
        </Typography>
      )}

      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          type="submit"
          color={success ? 'success' : 'primary'}
          size="lg"
          sx={{ mt: 2 }}
          startDecorator={success ? <DoneRounded /> : <LoginRounded />}
          disabled={loading}
          data-cy="submit"
          fullWidth
        >
          Sign in
        </Button>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
  );
}
