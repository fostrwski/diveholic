import { PersonAddRounded } from '@mui/icons-material';
import { useUser } from '@supabase/auth-helpers-react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

import { Layout, SignUpForm } from '../components';

export function SignUp() {
  const router = useRouter();
  const { user } = useUser();

  if (user) {
    router.push('/');
  }

  return (
    <>
      <NextSeo
        title="Sign up"
        description="Start logging your dive experience by creating Diveholic account"
      />

      <Layout title="Create account" icon={<PersonAddRounded />}>
        <SignUpForm />
      </Layout>
    </>
  );
}
