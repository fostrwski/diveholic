import LineWeightRounded from '@mui/icons-material/LineWeightRounded';
import NumbersRounded from '@mui/icons-material/NumbersRounded';
import ScubaDivingRounded from '@mui/icons-material/ScubaDivingRounded';
import TitleRounded from '@mui/icons-material/TitleRounded';
import Grid from '@mui/joy/Grid';
import TextSeparator from 'common/components/TextSeparator';
import type { Dive } from 'common/types';
import React from 'react';

import Section from './Section';
import getValidInfoCards from './getValidInfoCards';

interface DetailsProps {
  dive: Dive;
}

const Gear: React.FC<DetailsProps> = ({ dive }) => {
  const exposureProtectionInfoCards = getValidInfoCards([
    {
      title: 'Type',
      icon: <TitleRounded />,
      content: dive.gear.exposureProtection.type,
    },
    {
      title: 'Thickness',
      content: dive.gear.exposureProtection.thickness || '',
      icon: <LineWeightRounded />,
    },
  ]);

  const tanksInfoCards = getValidInfoCards([
    {
      title: 'Count',
      content: dive.gear.tanks.count || '',
      icon: <NumbersRounded />,
    },

    {
      title: 'Type',
      icon: <TitleRounded />,
      content: dive.gear.tanks.type || '',
    },
  ]);

  const otherGearInfoCards = getValidInfoCards([
    {
      title: 'BCD',
      content: dive.gear.bcd,
      icon: <ScubaDivingRounded />,
    },
    {
      title: 'Regulator',
      content: dive.gear.regulator,
      icon: <ScubaDivingRounded />,
    },
    {
      title: 'Fins',
      content: dive.gear.fins,
      icon: <ScubaDivingRounded />,
    },
  ]);

  if (
    !exposureProtectionInfoCards.length &&
    !tanksInfoCards.length &&
    !otherGearInfoCards.length
  )
    return <></>;

  return (
    <>
      <TextSeparator>Gear</TextSeparator>

      <Grid
        container
        sx={{ mt: { xs: 4, sm: 2 }, gap: { xs: 2, sm: 0 } }}
        spacing="initial"
      >
        <Grid xs={12} sm={6}>
          <Section
            title="Exposure protection"
            infoCards={exposureProtectionInfoCards}
          />
        </Grid>

        <Grid xs={12} sm={6}>
          <Section title="Tanks" infoCards={tanksInfoCards} />
        </Grid>

        <Grid xs={12} sm={6}>
          <Section title="Other gear" infoCards={otherGearInfoCards} />
        </Grid>
      </Grid>
    </>
  );
};

export default Gear;
