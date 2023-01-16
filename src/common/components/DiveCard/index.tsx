import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
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
  <NextLink href={`/dives/${dive.id}`}>
    <Card
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "row",
        cursor: "pointer"
      }}
    >
      <Avatar color="neutral" size="lg">
        {getDiveEmoji(dive.type)}
      </Avatar>
      <CardContent>
        <Typography component="p" level="subtitle1">
          {formatDate(dive.date)} &bull; {formatTime(dive.date)} &bull;{" "}
          <Box
            component="span"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              verticalAlign: "top",
              gap: 0.4
            }}
          >
            <TimelapseRounded /> {dive.length}min
          </Box>
        </Typography>

        <Box
          mt={2}
          display="flex"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Separator />

          <Chip
            color="neutral"
            variant="soft"
            startDecorator={dive.location.country.flagEmoji}
          >
            {dive.location.city}
          </Chip>
        </Box>
      </CardContent>
    </Card>
  </NextLink>
);

export default DiveCard;
