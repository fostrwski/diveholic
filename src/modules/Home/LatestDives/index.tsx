import HistoryRounded from "@mui/icons-material/HistoryRounded";
import Typography from "@mui/joy/Typography";
import type { Dive } from "common/types";
import React from "react";

import DiveCards from "./DiveCards";

interface LatestDivesProps {
  dives: Array<Dive>;
  loading: boolean;
}

const LatestDives: React.FC<LatestDivesProps> = ({ dives, loading }) => (
  <>
    <Typography
      level="h5"
      component="p"
      startDecorator={<HistoryRounded />}
      mb={2}
    >
      Latest dives
    </Typography>

    <DiveCards dives={dives.slice(0, 2)} loading={loading} />
  </>
);

export default LatestDives;
