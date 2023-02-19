import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import DiveCard from "common/components/DiveCard";
import NoDivesFound from "common/components/NoDivesFound";
import type { Dive } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import React, { useEffect, useMemo, useState } from "react";

import Filters from "./Filters";
import Loading from "./components/Loading";
import filterDives from "./filterDives";

export type FiltersState = {
  countryCodes: Array<string>;
};

const Dives: React.FC = () => {
  const { user } = useUser();
  const [dives, setDives] = useState<Array<Dive>>([]);
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);

  const [sortBy, setSortBy] = useState<string>("dateDescending");

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
        .order("date", { ascending: sortBy === "dateAscending" });

      if (error) {
        setError(true);
        console.error(error);
        return setLoading(false);
      }

      if (data) setDives(data);

      setLoading(false);
    };

    if (user) getDives();
  }, [user, sortBy]);

  const filteredDives = useMemo(
    () => filterDives(dives, filters),
    [dives, filters]
  );

  const DetermineView: React.FC = () => {
    if (user && !dives.length) return <NoDivesFound />;

    if (dives.length && !loading)
      return (
        <>
          <Filters
            dives={dives}
            filters={filters}
            setFilters={setFilters}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <Typography mt={2} level="subtitle1">
            Found {filteredDives.length} dives
          </Typography>

          <Grid container sx={{ mt: 2 }}>
            {filteredDives.map((dive: Dive) => (
              <Grid xs={12} md={4} key={dive.id}>
                <DiveCard dive={dive} />
              </Grid>
            ))}
          </Grid>
        </>
      );

    return <Loading />;
  };

  return <DetermineView />;
};

export default Dives;
