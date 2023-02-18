import ScaleRounded from "@mui/icons-material/ScaleRounded";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import type { Dive } from "common/types";
import React from "react";

import getAmmountText from "./getAmmountText";
import getAmmountTip from "./getAmmountTip";

interface AmmountInformationProps {
  ammount: Dive["weights"]["ammount"];
}

const AmmountInformation: React.FC<AmmountInformationProps> = ({ ammount }) => (
  <Box sx={{ display: "flex", gap: 1.2, flexWrap: "wrap" }}>
    <Chip
      component="div"
      startDecorator={<ScaleRounded />}
      color={ammount === "perfect" ? "success" : "info"}
      variant="outlined"
    >
      {getAmmountText(ammount)}
    </Chip>

    {getAmmountTip(ammount) && (
      <Typography
        component="p"
        sx={{ alignItems: "start" }}
        startDecorator={
          <Chip variant="outlined" color="warning" size="sm" component="span">
            Tip
          </Chip>
        }
      >
        {getAmmountTip(ammount)}
      </Typography>
    )}
  </Box>
);

export default AmmountInformation;
