import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import FlagRounded from "@mui/icons-material/FlagRounded";
import PublicRounded from "@mui/icons-material/PublicRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import type { Dive as DiveType } from "common/types";
import { formatDate, formatTime } from "common/utils/datetime/format";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import BasicInformation from "./BasicInformation";
import Details from "./Details";
import Error from "./Error";
import Loading from "./Loading";
import Weather from "./Weather";

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
      .eq("id", diveId as string);

    if (error) console.error(error);

    router.push("/");
  };

  useEffect(() => {
    const getDive = async () => {
      setError(null);
      setLoading(true);
      const { data, error } = await supabase
        .from<DiveType>("dives")
        .select("*")
        .match({ id: diveId });

      if (error) {
        setError(error);
        console.error(error);
        return setLoading(false);
      }

      if (data && data.length > 0) {
        setDive(data[0]);
        return setLoading(false);
      }

      setDiveNotFound(true);
      setLoading(false);
    };

    if (user) getDive();
  }, [user, diveId]);

  const determineView = (): React.ReactElement => {
    if (error) {
      return (
        <Error
          error={error}
          tip="Make sure you're connected to the internet and try reloading the page."
        />
      );
    }

    if (user && loading) return <Loading />;

    if (user && diveNotFound) {
      return <Error error={error} customMessage="This dive does not exist" />;
    }

    if (dive) {
      return (
        <>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
                size="lg"
                startDecorator={<CalendarTodayRounded />}
                component="span"
                variant="outlined"
              >
                {formatDate(dive.date)} at {formatTime(dive.date)}
              </Chip>
            </div>
          </Box>

          <Box mt={6}>
            <BasicInformation dive={dive} />
          </Box>

          <Box mt={6}>
            <Weather dive={dive}/>
          </Box>

          <Box mt={4}>
            <Details dive={dive} />
          </Box>

          <Button
            sx={{ mt: 6 }}
            color="warning"
            fullWidth
            startDecorator={<EditRounded />}
            onClick={() => router.push(`/dives/edit/${diveId}`)}
            variant="outlined"
          >
            Edit
          </Button>
          <Button
            sx={{ mt: 2 }}
            color="danger"
            fullWidth
            startDecorator={<DeleteRounded />}
            onClick={handleDiveDelete}
            variant="plain"
          >
            Delete
          </Button>

          <Typography
            mt={8}
            textColor="GrayText"
            fontSize="xs"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 1.2
            }}
          >
            <Chip size="sm" variant="outlined">
              Dive ID
            </Chip>
            {dive.id}
          </Typography>
        </>
      );
    }

    return <></>;
  };

  return determineView();
};

export default Dive;
