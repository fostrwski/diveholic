import CalendarTodayRounded from '@mui/icons-material/CalendarTodayRounded';
import EditRounded from '@mui/icons-material/EditRounded';
import FlagRounded from '@mui/icons-material/FlagRounded';
import NumbersRounded from '@mui/icons-material/NumbersRounded';
import PublicRounded from '@mui/icons-material/PublicRounded';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import BackButton from 'common/components/BackButton';
import InfoCard from 'common/components/InfoCard';
import type { Dive } from 'common/types';
import { formatDate, formatTime } from 'common/utils/datetime/format';
import { supabase } from 'common/utils/supabaseClient';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Basics from './Basics';
import DeleteButton from './DeleteButton';
import Gear from './Gear';
import Weather from './Weather';

interface DiveViewProps {
  dive: Dive;
}

function diveGearEmpty(gear: Dive['gear']) {
  const empty = Object.values(gear).every((item) => {
    if (typeof item === 'string') return item === '';

    if (typeof item === 'object')
      return Object.values(item).every((x) => x === null || x === '');

    return true;
  });

  return empty;
}

const DiveView: React.FC<DiveViewProps> = ({ dive }) => {
  const router = useRouter();

  const handleDiveDelete = async () => {
    const { error } = await supabase
      .from<Dive>('dives')
      .delete()
      .eq('id', dive.id);

    if (error) console.error(error);

    router.push('/');
  };

  return (
    <>
      <BackButton to="/" />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
        {dive.number && (
          <div>
            <Typography
              startDecorator={<NumbersRounded />}
              fontWeight="lg"
              textColor="GrayText"
            >
              Dive number {dive.number}
            </Typography>
          </div>
        )}
        <Typography
          level="h5"
          fontWeight="lg"
          component="div"
          sx={{ alignItems: 'start', wordBreak: 'break-all' }}
          startDecorator={
            dive.location.country.flagEmoji ? (
              dive.location.country.flagEmoji
            ) : (
              <PublicRounded />
            )
          }
        >
          {dive.location.city}, {dive.location.country.name}
        </Typography>

        <Typography
          fontWeight="md"
          component="div"
          startDecorator={
            <Chip
              size="sm"
              variant="outlined"
              color="primary"
              startDecorator={<FlagRounded />}
            >
              Dive spot
            </Chip>
          }
          sx={{ alignItems: 'self-start', wordBreak: 'break-all' }}
        >
          {dive.location.diveSpot}
        </Typography>

        <Typography
          level="subtitle1"
          component="div"
          startDecorator={<CalendarTodayRounded />}
        >
          {formatDate(dive.date)} at {formatTime(dive.date)}
        </Typography>
      </Box>

      <Grid
        container
        sx={{ mt: 6, gap: { xs: 6, sm: 0 } }}
        spacing={{ xs: 0, sm: 4 }}
      >
        <Grid xs={12} sm={6}>
          <Basics dive={dive} />
        </Grid>

        {(dive.temperature.air ||
          dive.temperature.water.bottom ||
          dive.temperature.water.surface) && (
          <Grid xs={12} sm={6}>
            <Weather dive={dive} />
          </Grid>
        )}

        {diveGearEmpty(dive.gear) ? (
          ' '
        ) : (
          <Grid xs={12}>
            <Gear dive={dive} />
          </Grid>
        )}

        {(dive.diveBuddy || dive.notes) && (
          <Grid xs={12}>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexDirection: { xs: 'column', sm: 'row' },
                mb: 6,
              }}
            >
              {dive.diveBuddy && (
                <InfoCard title="Dive buddy" content={dive.diveBuddy} />
              )}
              {dive.notes && <InfoCard title="Notes" content={dive.notes} />}
            </Box>
          </Grid>
        )}
      </Grid>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'flex-end',
          gap: 2,
        }}
      >
        <NextLink href={`/dives/edit/${dive.id}`} passHref>
          <Button
            component="a"
            color="warning"
            startDecorator={<EditRounded />}
            variant="outlined"
            size="lg"
            sx={{ width: { xs: '100%', sm: 'initial' } }}
            aria-label="Edit dive"
          >
            Edit
          </Button>
        </NextLink>

        <DeleteButton handleDiveDelete={handleDiveDelete} />
      </Box>

      <Typography
        mt={8}
        textColor="GrayText"
        fontSize="xs"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 1.2,
        }}
      >
        <Chip size="sm" variant="outlined">
          Dive ID
        </Chip>
        {dive.id}
      </Typography>
    </>
  );
};

export default DiveView;
