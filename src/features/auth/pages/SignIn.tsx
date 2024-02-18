import { useUser } from '@supabase/auth-helpers-react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

import { Layout, SignInForm } from '../components';

export function SignIn() {
  const router = useRouter();
  const { user } = useUser();

  if (user) {
    router.push('/');
  }

  return (
    <>
      <NextSeo
        title="Sign in"
        description="Sign in to your Diveholic account"
      />

      <Layout>
        <SignInForm />
      </Layout>
    </>
  );
}
