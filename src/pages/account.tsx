import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import DefaultLayout from 'common/layouts/Default';
import Account from 'modules/Account';
import React from 'react';

export const getServerSideProps = withPageAuth({ redirectTo: '/signin' });

export default function AccountPage() {
  return (
    <DefaultLayout>
      <Account />
    </DefaultLayout>
  );
}
