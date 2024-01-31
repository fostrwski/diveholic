import BarChartRounded from '@mui/icons-material/BarChartRounded';
import TimelapseRounded from '@mui/icons-material/TimelapseRounded';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import InfoCard from 'common/components/InfoCard';
import type { Dive } from 'common/types';
import getDiveEmoji from 'modules/Dives/components/Form/utils/getDiveEmoji';
import React from 'react';

import getNumberOfBoatDives from './getNumberOfBoatDives';
import getNumberOfPoolDives from './getNumberOfPoolDives';
import getNumberOfShoreDives from './getNumberOfShoreDives';
import getTotalDivesLength from './getTotalDivesLength';

interface StatisticsProps {
  dives: Array<Dive>;
}

const Statistics: React.FC<StatisticsProps> = ({ dives }) => (
  <>
    <Typography startDecorator={<BarChartRounded />} level="h5" component="p">
      Statistics
    </Typography>

    <Grid container spacing={1} sx={{ mt: 1 }}>
      <Grid xs={12}>
        <InfoCard
          title="Total dives length"
          unit="min"
          icon={<TimelapseRounded />}
          content={getTotalDivesLength(dives)}
        />
      </Grid>

      <Grid xs={6}>
        <InfoCard
          title="Boat dives"
          icon={getDiveEmoji('Boat')}
          content={getNumberOfBoatDives(dives)}
        />
      </Grid>

      <Grid xs={6}>
        <InfoCard
          title="Shore dives"
          icon={getDiveEmoji('Shore')}
          content={getNumberOfShoreDives(dives)}
        />
      </Grid>

      <Grid xs={6}>
        <InfoCard
          title="Pool dives"
          icon={getDiveEmoji('Pool')}
          content={getNumberOfPoolDives(dives)}
        />
      </Grid>
    </Grid>
  </>
);

export default Statistics;
