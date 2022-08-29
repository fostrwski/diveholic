import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import FlagRounded from "@mui/icons-material/FlagRounded";
import PublicRounded from "@mui/icons-material/PublicRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import { useUser } from "@supabase/auth-helpers-react";
import type { Dive as DiveType } from "common/types";
import formatDate from "common/utils/formatDate";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";

import BasicInformation from "./BasicInformation";
import Details from "./Details";

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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div>
            <Chip
              component="span"
              size="lg"
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
          </div>

          <div>
            <Chip size="lg" component="span" startDecorator={<FlagRounded />}>
              {dive.location.diveCenter}
            </Chip>
          </div>

          <div>
            <Chip
              startDecorator={<CalendarTodayRounded />}
              component="span"
              variant="outlined"
            >
              {formatDate(dive.date)} at {dive.time}
            </Chip>
          </div>
        </Box>

        <BasicInformation dive={dive} />

        <Details dive={dive} />
      </>
    );
  }

  return <></>;
};

export default Dive;
