import {
  AlternateEmailRounded,
  DoneRounded,
  ErrorOutlineRounded,
  KeyRounded,
  PersonAddRounded,
  PersonRounded,
  SendRounded,
  VisibilityOffRounded,
  VisibilityRounded,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  IconButton,
  Link,
  TextField,
  Typography,
} from '@mui/joy';
import Separator from 'common/components/Separator';
import NextLink from 'next/link';
import React, { useState } from 'react';

import { useSignUp } from '../api';

export function SignUpForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [agreeToPrivacyPolicy, setAgreeToPrivacyPolicy] =
    useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { loading, success, error, signUp } = useSignUp();

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp(email, password, firstName, agreeToPrivacyPolicy);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onCheckboxChange = () => {
    setAgreeToPrivacyPolicy(!agreeToPrivacyPolicy);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          placeholder="joe@example.com"
          type="email"
          startDecorator={<AlternateEmailRounded />}
          onChange={onEmailChange}
          value={email}
          size="lg"
          required
          label="Email"
        />
        <TextField
          type={showPassword ? 'text' : 'password'}
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
          placeholder="Joe"
          type="text"
          startDecorator={<PersonRounded />}
          onChange={onFirstNameChange}
          value={firstName}
          size="lg"
          required
          label="First name"
        />

        <FormControl size="sm">
          <Checkbox
            label="I have read and agree to the privacy policy"
            onChange={onCheckboxChange}
            checked={agreeToPrivacyPolicy}
            required
          />

          <FormHelperText>
            <Typography level="body2">
              Read our
              <NextLink href="/privacy-policy" passHref>
                <Link color="info">privacy policy</Link>
              </NextLink>
            </Typography>
          </FormHelperText>
        </FormControl>

        {error && (
          <Typography
            color="danger"
            textAlign="left"
            startDecorator={<ErrorOutlineRounded />}
            sx={{ alignItems: 'flex-start' }}
          >
            {error}
          </Typography>
        )}

        {success && (
          <Typography
            color="success"
            textAlign="left"
            startDecorator={<SendRounded />}
            sx={{ alignItems: 'flex-start' }}
          >
            Confirmation link was sent to your email
          </Typography>
        )}
      </Box>

      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2.8 }}>
        <Button
          color={success ? 'success' : 'primary'}
          type="submit"
          size="lg"
          fullWidth
          startDecorator={success ? <DoneRounded /> : <PersonAddRounded />}
          disabled={loading}
        >
          Create account
        </Button>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Separator />
          <Typography
            level="subtitle1"
            fontSize="xs"
            sx={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}
          >
            Already have an account?
          </Typography>
          <Separator />
        </Box>

        <NextLink href="/signin" passHref>
          <Button
            component="a"
            color="neutral"
            variant="plain"
            type="button"
            fullWidth
            size="lg"
          >
            Sign in
          </Button>
        </NextLink>
      </Box>
    </form>
  );
}
