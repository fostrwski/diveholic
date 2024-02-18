import { FormControl, FormHelperText, FormLabel, Switch } from '@mui/joy';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

export function Analytics() {
  // TODO: Create hook
  const [analyticsChecked, setAnalyticsChecked] = useState<boolean>(false);

  useEffect(() => {
    setAnalyticsChecked(Cookies.get('Analytics') === 'accepted');
  }, []);

  // TODO: Refactor name
  const onSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnalyticsChecked(e.target.checked);

    if (e.target.checked) {
      Cookies.set('Analytics', 'accepted');
      return;
    }

    Cookies.set('Analytics', 'declined');
  };

  return (
    <FormControl
      orientation="horizontal"
      sx={{ width: 300, justifyContent: 'space-between', gap: 2 }}
    >
      <div>
        <FormLabel>Analytics</FormLabel>
        <FormHelperText sx={{ mt: 0 }}>
          We use Google Analytics to track app usage
        </FormHelperText>
      </div>
      {/* @ts-ignore */}
      <Switch
        checked={analyticsChecked}
        onChange={onSwitchChange}
        color={analyticsChecked ? 'success' : 'neutral'}
        variant="soft"
        endDecorator={analyticsChecked ? 'On' : 'Off'}
        slotProps={{
          endDecorator: {
            sx: {
              minWidth: 24,
            },
          },
        }}
      />
    </FormControl>
  );
}
