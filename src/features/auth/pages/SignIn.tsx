import { useUser } from '@supabase/auth-helpers-react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Layout from '../components/Layout';
import SignInForm from '../components/SignInForm';

export default function SignIn() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

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
