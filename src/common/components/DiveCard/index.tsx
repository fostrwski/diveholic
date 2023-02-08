import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import PublicRounded from "@mui/icons-material/PublicRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Separator from "common/components/Separator";
import type { Dive } from "common/types";
import { formatDate, formatTime } from "common/utils/datetime/format";
import getDiveEmoji from "modules/Dives/components/Form/utils/getDiveEmoji";
import NextLink from "next/link";
import React from "react";

interface DiveCardProps {
  dive: Dive;
}

const DiveCard: React.FC<DiveCardProps> = ({ dive }) => (
  <NextLink href={`/dives/${dive.id}`} passHref>
    <Card
      component="a"
      sx={{
        textDecoration: "none",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        gap: 2
      }}
      aria-label={`${dive.length} minute ${dive.type.toLowerCase()} dive in ${
        dive.location.city
      }, ${dive.location.country.name} on ${formatDate(
        dive.date
      )} at ${formatTime(dive.date)}`}
    >
      <Avatar size="lg">{getDiveEmoji(dive.type)}</Avatar>
      <Box>
        <Typography
          level="h6"
          fontWeight="lg"
          component="div"
          sx={{ alignItems: "flex-start", wordBreak: "break-all" }}
          startDecorator={
            dive.location.country.flagEmoji ? (
              dive.location.country.flagEmoji
            ) : (
              <PublicRounded />
            )
          }
        >
          {dive.location.city}
        </Typography>

        <Typography
          level="subtitle1"
          component="div"
          startDecorator={<CalendarTodayRounded />}
          sx={{ alignItems: "flex-start" }}
        >
          {formatDate(dive.date)} at {formatTime(dive.date)}
        </Typography>

        <Box
          mt={2}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "100%"
          }}
        >
          <Separator />

          <Chip
            variant="outlined"
            startDecorator={<TimelapseRounded />}
            color="info"
          >
            {dive.length}min
          </Chip>
        </Box>
      </Box>
    </Card>
  </NextLink>
);

export default DiveCard;
