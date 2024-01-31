import AlternateEmailRounded from '@mui/icons-material/AlternateEmailRounded';
import DoneRounded from '@mui/icons-material/DoneRounded';
import ErrorOutlineRounded from '@mui/icons-material/ErrorOutlineRounded';
import KeyRounded from '@mui/icons-material/KeyRounded';
import PersonAddRounded from '@mui/icons-material/PersonAddRounded';
import PersonRounded from '@mui/icons-material/PersonRounded';
import SendRounded from '@mui/icons-material/SendRounded';
import VisibilityOffRounded from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRounded from '@mui/icons-material/VisibilityRounded';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import TextField from '@mui/joy/TextField';
import Typography from '@mui/joy/Typography';
import { useUser } from '@supabase/auth-helpers-react';
import Separator from 'common/components/Separator';
import AuthLayout from 'common/layouts/Auth';
import { supabase } from 'common/utils/supabaseClient';
import { NextSeo } from 'next-seo';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const router = useRouter();
  const { user } = useUser();

  if (user) {
    router.push('/');
  }

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const [agreeToPrivacyPolicy, setAgreeToPrivacyPolicy] =
    useState<boolean>(false);

  const handleSignUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      setSuccess(false);
      setError('');
      if (!email || !password || !firstName || !agreeToPrivacyPolicy) {
        setLoading(false);
        return;
      }

      const { error } = await supabase.auth.signUp(
        { email, password },
        {
          data: {
            first_name: firstName,
          },
        },
      );
      if (error) {
        console.error(error);
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
    handleSignUp(email, password);
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onCheckboxChange = () => {
    setAgreeToPrivacyPolicy(!agreeToPrivacyPolicy);
  };

  return (
    <>
      <NextSeo
        title="Sign up"
        description="Start logging your dive experience by creating Diveholic account"
      />

      <AuthLayout title="Create account" icon={<PersonAddRounded />}>
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
                  {showPassword ? (
                    <VisibilityOffRounded />
                  ) : (
                    <VisibilityRounded />
                  )}
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

          <Box
            sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2.8 }}
          >
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
      </AuthLayout>
    </>
  );
};

export default SignUp;
