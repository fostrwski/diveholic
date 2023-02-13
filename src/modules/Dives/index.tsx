import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import DiveCard from "common/components/DiveCard";
import type { Dive } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import React, { useEffect, useMemo, useState } from "react";

import Filters from "./Filters";
import filterDives from "./filterDives";

export type FiltersState = {
  countryCodes: Array<string>;
};

const Dives: React.FC = () => {
  const { user } = useUser();
  const [dives, setDives] = useState<Array<Dive>>([]);
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);

  const [filters, setFilters] = useState<FiltersState>({
    countryCodes: []
  });

  useEffect(() => {
    const getDives = async () => {
      setError(false);
      setLoading(true);
      const { data, error } = await supabase
        .from<Dive>("dives")
        .select("*")
        .order("date", { ascending: false });

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

  const filteredDives = useMemo(
    () => filterDives(dives, filters),
    [dives, filters]
  );

  return (
    <>
      <Filters dives={dives} filters={filters} setFilters={setFilters} />

      <Typography mt={2} level="subtitle1">
        Found {filteredDives.length} dives
      </Typography>

      <Grid container sx={{ mt: 2 }}>
        {filteredDives.map((dive: Dive) => (
          <Grid xs={12} key={dive.id}>
            <DiveCard dive={dive} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dives;
