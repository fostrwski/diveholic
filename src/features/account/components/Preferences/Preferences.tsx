import { TuneRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/joy';
import React from 'react';

import { Analytics } from './Analytics';
import { ColorMode } from './ColorMode';

export function Preferences() {
  return (
    <>
      <Typography level="h5" startDecorator={<TuneRounded />}>
        Preferences
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 2 }}>
        <ColorMode />

        <Analytics />
      </Box>
    </>
  );
}
