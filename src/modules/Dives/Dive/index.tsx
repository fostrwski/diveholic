import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import FlagRounded from "@mui/icons-material/FlagRounded";
import PublicRounded from "@mui/icons-material/PublicRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import { useUser } from "@supabase/auth-helpers-react";
import type { Dive as DiveType } from "common/types";
import formatDate from "common/utils/formatDate";
import formatTime from "common/utils/formatTime";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";

import BasicInformation from "./BasicInformation";
import Details from "./Details";
import Error from "./Error";

const Dive: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const [dive, setDive] = useState<DiveType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [diveNotFound, setDiveNotFound] = useState<boolean>(false);
  const { id: diveId } = router.query;

  const handleDiveDelete = async () => {
    const { error } = await supabase
      .from<DiveType>("dives")
      .delete()
      // @ts-ignore
      .match({ id: parseInt(diveId) });

    if (error) console.error(error);

    router.push("/");
  };

  useEffect(() => {
    const getDives = async () => {
      setError(null);
      setLoading(true);
      const { data, error } = await supabase
        .from<DiveType>("dives")
        .select("*")
        // @ts-ignore
        .match({ id: parseInt(diveId) });

      if (error) {
        setError(error);
        console.error(error);
        return setLoading(false);
      }

      if (data && data.length > 0) {
        setDive(data![0]);
        return setLoading(false);
      }

      setDiveNotFound(true);
      setLoading(false);
    };

    if (user) getDives();
  }, [user]);

  const determineView = (): React.ReactElement => {
    if (error)
      return (
        <Error
          error={error}
          tip="Make sure you're connected to the internet and try reloading the page."
        />
      );

    if (user && loading) return <>Loading</>;

    if (user && diveNotFound) {
      return <Error error={error} customMessage="This dive does not exist" />;
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
              <Chip component="span" startDecorator={<FlagRounded />}>
                {dive.location.diveCenter}
              </Chip>
            </div>

            <div>
              <Chip
                startDecorator={<CalendarTodayRounded />}
                component="span"
                variant="outlined"
              >
                {formatDate(dive.date, true)} at {formatTime(dive.time)}
              </Chip>
            </div>
          </Box>

          <Box mt={6}>
            <BasicInformation dive={dive} />
          </Box>

          <Box mt={4}>
            <Details dive={dive} />
          </Box>

          <Button
            sx={{ mt: 6 }}
            color="warning"
            fullWidth
            startIcon={<EditRounded />}
          >
            Edit
          </Button>
          <Button
            sx={{ mt: 2 }}
            color="danger"
            fullWidth
            startIcon={<DeleteRounded />}
            onClick={handleDiveDelete}
          >
            Delete
          </Button>
        </>
      );
    }

    return <></>;
  };

  return determineView();
};

export default Dive;
