import AddRounded from '@mui/icons-material/AddRounded';
import { CircularProgress } from '@mui/joy';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import { useUser } from '@supabase/auth-helpers-react';
import NoDivesFound from 'common/components/NoDivesFound';
import type { Dive } from 'common/types';
import { supabase } from 'common/utils/supabaseClient';
import { NextSeo } from 'next-seo';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';

import LatestDives from './LatestDives';
import Statistics from './Statistics';

const Home: React.FC = () => {
  const { user } = useUser();
  const [dives, setDives] = useState<Array<Dive>>([]);
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getDives = async () => {
      setError(false);
      setLoading(true);
      const { data, error } = await supabase
        .from<Dive>('dives')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        setError(true);
        console.error(error);
        return setLoading(false);
      }

      if (data) setDives(data);

      setLoading(false);
    };

    if (user) getDives();
  }, [user]);

  const DetermineView: React.FC = () => {
    if (user && error) return <Box mt={2}>Error</Box>;

    if (dives.length && !loading)
      return (
        <Grid
          container
          columnSpacing={{ xs: 0, sm: 2 }}
          gap={{ xs: 6, sm: 0 }}
          mt={6}
        >
          <Grid xs={12} sm={6} md={8}>
            <LatestDives dives={dives} />
          </Grid>

          <Grid xs={12} sm={6} md={4}>
            <Statistics dives={dives} />
          </Grid>
        </Grid>
      );

    if (user && !dives.length)
      return (
        <Box mt={6}>
          <NoDivesFound />
        </Box>
      );

    return <></>;
  };

  return (
    <>
      <NextSeo
        title="Diveholic - dive log built for the modern age"
        titleTemplate=""
        description="Online dive log built for the modern age. Beautiful, accessible, open source"
      />

      <Typography
        level="h4"
        component="h1"
        endDecorator={loading ? <CircularProgress size="sm" /> : ''}
      >
        Hi {user?.user_metadata.first_name || 'there'} 🤿
      </Typography>

      <Typography level="h6" textColor="GrayText" component="h2">
        {dives.length ? (
          <>
            You've logged{' '}
            <Typography component="span" color="primary">
              {dives.length} {dives.length === 1 ? 'dive' : 'dives'}
            </Typography>{' '}
            so far
          </>
        ) : (
          <>
            You{' '}
            <Typography component="span" color="primary">
              haven't logged any dives
            </Typography>{' '}
            yet 😱
          </>
        )}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          mt: 2,
        }}
      >
        <NextLink href="/dives/new" passHref>
          <Button startDecorator={<AddRounded />} component="a" size="lg">
            Log dive
          </Button>
        </NextLink>
      </Box>

      <DetermineView />
    </>
  );
};

export default Home;
