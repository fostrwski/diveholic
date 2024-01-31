import type { Dive as DiveType } from 'common/types';
import { supabase } from 'common/utils/supabaseClient';
import { useEffect, useState } from 'react';

export default function useLatestDive() {
  const [data, setData] = useState<DiveType | null>(null);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from<DiveType>('dives')
        .select('*')
        .order('date', { ascending: false })
        .limit(1);

      if (error) return console.error(error);

      setData(data[0]);
    };

    getData();
  }, []);

  return data;
}
