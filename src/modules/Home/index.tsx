import AddRounded from "@mui/icons-material/AddRounded";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import type { Dive } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import NextLink from "next/link";
import React, { useEffect, useMemo, useState } from "react";

import LatestDives from "./LatestDives";
import Statistics from "./Statistics";

const Home: React.FC = () => {
  const { user, isLoading: userLoading } = useUser();
  const [dives, setDives] = useState<Array<Dive>>([]);
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);

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

  const divesCount = useMemo(() => dives.length, [dives.length]);

  return (
    <>
      <Typography level="h4" component="h1">
        Hey {userLoading ? "there" : user?.user_metadata.first_name} 🤿
      </Typography>

      <Typography level="h6" textColor="GrayText" component="h2">
        {dives?.length ? (
          <>
            You've logged{" "}
            <Typography component="span" color="primary">
              {divesCount} {divesCount === 1 ? "dive" : "dives"}
            </Typography>{" "}
            so far
          </>
        ) : (
          <>
            You{" "}
            <Typography component="span" color="primary">
              haven't logged any dives
            </Typography>{" "}
            yet 😱
          </>
        )}
      </Typography>

      <NextLink href="/dives/new" passHref>
        <Button
          sx={{ mt: 2 }}
          startDecorator={<AddRounded />}
          component="a"
          size="lg"
        >
          Log dive
        </Button>
      </NextLink>

      <Grid container gap={6} mt={6}>
        <Grid xs={12}>
          <LatestDives dives={dives} loading={loading} />
        </Grid>

        {!loading && (
          <Grid xs={12}>
            <Statistics dives={dives} />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Home;
