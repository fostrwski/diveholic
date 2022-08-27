import PublicRounded from "@mui/icons-material/PublicRounded";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import type { Dive as DiveType } from "common/types";
import formatDate from "common/utils/formatDate";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";

const Dive: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const [dive, setDive] = useState<DiveType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [diveNotFound, setDiveNotFound] = useState<boolean>(false);

  useEffect(() => {
    const getDives = async () => {
      setLoading(true);
      const { id: diveId } = router.query;
      const { data, error } = await supabase
        .from<DiveType>("dives")
        .select("*")
        // @ts-ignore
        .eq("id", parseInt(diveId));

      if (error) console.error(error);

      if (data && data.length > 0) {
        setDive(data![0]);
        return setLoading(false);
      }

      setDiveNotFound(true);
      setLoading(false);
    };

    if (user) getDives();
  }, [user]);

  if (user && loading) return <>Loading</>;

  if (user && diveNotFound) {
    return <>Dive not found</>;
  }

  if (dive) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography component="p" textColor="neutral.600">
            {formatDate(dive.date)}
          </Typography>
          <Chip
            variant="outlined"
            color="neutral"
            startDecorator={
              dive.location.country.flagEmoji ? (
                dive.location.country.flagEmoji
              ) : (
                <PublicRounded />
              )
            }
          >
            {dive.location.city}, {dive.location.country.name}
          </Chip>
        </Box>
      </>
    );
  }

  return <></>;
};

export default Dive;
