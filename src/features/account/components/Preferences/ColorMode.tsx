import { Radio, RadioGroup, Typography } from '@mui/joy';
import { useColorScheme } from '@mui/joy/styles';
import React from 'react';

export function ColorMode() {
  const { mode, setMode } = useColorScheme();

  // TODO: Refactor name
  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.value as 'system' | 'light' | 'dark');
  };

  return (
    <>
      <Typography level="subtitle1" mb={1}>
        Color mode
      </Typography>

      <RadioGroup
        row
        value={mode}
        onChange={onRadioChange}
        aria-label="Color mode"
      >
        <Radio value="system" label="System" />
        <Radio value="light" label="Light" />
        <Radio value="dark" label="Dark" />
      </RadioGroup>
    </>
  );
}
