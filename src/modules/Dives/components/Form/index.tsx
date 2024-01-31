import { getCountryCode, getCountryFlag } from '@franekostrowski/country-utils';
import DoneRounded from '@mui/icons-material/DoneRounded';
import ErrorOutlineRounded from '@mui/icons-material/ErrorOutlineRounded';
import SaveRounded from '@mui/icons-material/SaveRounded';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Grid from '@mui/joy/Grid';
import TextField from '@mui/joy/TextField';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import Gear from './Gear';
import Tabs from './Tabs';
import Temperature from './Temperature';
import type { FormFields } from './types';

interface FormProps {
  onSubmit: () => void;
  submitted: boolean;
}

const Form: React.FC<FormProps> = ({ onSubmit, submitted }) => {
  const {
    setValue,
    watch,
    getValues,
    register,
    formState: { errors },
  } = useFormContext<FormFields>();
  const watchLocationCountryName = watch('location.country.name');

  useEffect(() => {
    // Try to assign country code and flag emoji on every location.country.name change
    const countryCode = getCountryCode(watchLocationCountryName);
    let flagEmoji = '';
    if (countryCode) {
      flagEmoji = getCountryFlag(countryCode);
      setValue('location.country.code', countryCode);
      setValue('location.country.flagEmoji', flagEmoji);
    } else {
      flagEmoji = '';
      setValue('location.country.flagEmoji', flagEmoji);
    }
  }, [getValues, setValue, watchLocationCountryName]);

  return (
    <Box component="form" onSubmit={onSubmit}>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 8 }}
        sx={{ gap: { xs: 8, sm: 0 }, rowGap: { sm: 8 } }}
      >
        <Grid xs={12} sm={6}>
          <Tabs />
        </Grid>

        <Grid xs={12} sm={6}>
          <Temperature />
        </Grid>

        <Grid xs={12} sm={6}>
          <Gear />
        </Grid>

        <Grid xs={12} sm={6}>
          <TextField
            {...register('diveBuddy')}
            type="text"
            label="Dive buddy"
            placeholder="Joe Doe"
          />

          <FormControl sx={{ mt: 4 }}>
            <FormLabel>Notes</FormLabel>
            <Textarea
              {...register('notes')}
              minRows={4}
              variant="soft"
              placeholder="Describe what you saw, share your experience"
              data-cy="notes"
            />
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: { sm: 'right' } }}>
        <Button
          type="submit"
          color="success"
          size="lg"
          startDecorator={submitted ? <DoneRounded /> : <SaveRounded />}
          sx={{
            mt: 6,
            width: { xs: '100%', sm: 'initial' },
          }}
          onSubmit={onSubmit}
        >
          Save
        </Button>
      </Box>

      {/* Show error message when errors object is non-empty */}
      {!(Object.keys(errors).length === 0) && (
        <Box
          sx={{
            mt: 6,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 1.2,
            textAlign: 'center',
          }}
        >
          <Chip
            color="danger"
            variant="outlined"
            startDecorator={<ErrorOutlineRounded />}
          >
            Error
          </Chip>
          <Typography color="danger" component="span">
            Oops! Your form has some errors. Correct invalid fields and try
            again!
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Form;
