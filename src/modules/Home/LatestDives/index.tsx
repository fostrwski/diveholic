import { useTheme } from '@emotion/react';
import HistoryRounded from '@mui/icons-material/HistoryRounded';
import Typography from '@mui/joy/Typography';
// eslint-disable-next-line import/no-extraneous-dependencies
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Dive } from 'common/types';
import React from 'react';

import DiveCards from './DiveCards';

interface LatestDivesProps {
  dives: Array<Dive>;
}

const LatestDives: React.FC<LatestDivesProps> = ({ dives }) => {
  const theme = useTheme();
  // @ts-ignore
  const smallScreenAndUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <Typography
        level="h5"
        component="p"
        startDecorator={<HistoryRounded />}
        mb={2}
      >
        Latest dives
      </Typography>

      <DiveCards
        dives={smallScreenAndUp ? dives.slice(0, 4) : dives.slice(0, 2)}
      />
    </>
  );
};

export default LatestDives;
