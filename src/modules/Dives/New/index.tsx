import type { User } from '@supabase/auth-helpers-nextjs';
import type { Dive } from 'common/types';
import { supabase } from 'common/utils/supabaseClient';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import Form from '../components/Form';
import type { FormFields } from '../components/Form/types';
import Header from './Header';

const FormSubmittedModal = dynamic(() => import('./FormSubmittedModal'));

interface NewProps {
  user: User;
}

const New: React.FC<NewProps> = ({ user }) => {
  const { handleSubmit } = useFormContext<FormFields>();

  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = async (data: Dive) => {
    const { date, ...rest } = data;
    const timestamp = new Date(date).toISOString();

    const { error } = await supabase
      .from('dives')
      .insert({ userId: user.id, date: timestamp, ...rest });

    if (error) return console.error(error);

    setSubmitted(true);
  };

  return (
    <>
      <NextSeo
        title="Log new dive"
        description="Log your dive experience!"
        noindex
      />

      <Header />

      <Form onSubmit={handleSubmit(onSubmit)} submitted={submitted} />

      <FormSubmittedModal open={submitted} setOpen={setSubmitted} />
    </>
  );
};

export default New;
