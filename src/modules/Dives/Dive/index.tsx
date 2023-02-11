import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
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

import InfoCard from "../components/InfoCard";
import Basics from "./Basics";
import DeleteButton from "./DeleteButton";
import Error from "./Error";
import Gear from "./Gear";
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

  const DetermineView: React.FC = () => {
    if (error) {
      return (
        <Error
          error={error}
          tip="Make sure you're connected to the internet and try refreshing the page"
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
            <Typography
              level="h5"
              fontWeight="lg"
              component="div"
              sx={{ alignItems: "start", wordBreak: "break-all" }}
              startDecorator={
                dive.location.country.flagEmoji ? (
                  dive.location.country.flagEmoji
                ) : (
                  <PublicRounded />
                )
              }
            >
              {dive.location.city}, {dive.location.country.name}
            </Typography>

            <Typography
              fontWeight="md"
              component="div"
              startDecorator={
                <Chip
                  size="sm"
                  variant="outlined"
                  color="primary"
                  startDecorator={<FlagRounded />}
                >
                  Dive center
                </Chip>
              }
              sx={{ alignItems: "self-start", wordBreak: "break-all" }}
            >
              {dive.location.diveCenter}
            </Typography>

            <Typography
              level="subtitle1"
              component="div"
              startDecorator={<CalendarTodayRounded />}
            >
              {formatDate(dive.date)} at {formatTime(dive.date)}
            </Typography>
          </Box>

          <Box mt={6}>
            <Basics dive={dive} />
          </Box>

          <Weather dive={dive} />

          <Gear dive={dive} />

          {(dive.diveBuddy || dive.notes) && (
            <Box
              sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 1.2 }}
            >
              {dive.diveBuddy && (
                <InfoCard title="Dive buddy" content={dive.diveBuddy} />
              )}
              {dive.notes && <InfoCard title="Notes" content={dive.notes} />}
            </Box>
          )}

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

          <DeleteButton handleDiveDelete={handleDiveDelete} />

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

  return <DetermineView />;
};

export default Dive;
