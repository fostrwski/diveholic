import PlaceRounded from "@mui/icons-material/PlaceRounded";
import Link from "@mui/joy/Link";
import React from "react";
import { useFormContext } from "react-hook-form";

import useLatestDive from "../../hooks/useLatestDive";
import type { FormFields } from "../../types";

const PreviousDiveLocationButton: React.FC = () => {
  const data = useLatestDive();

  const { setValue } = useFormContext<FormFields>();

  const handleClick = () => {
    if (!data) return;

    setValue("location", data.location)
  };

  return (
    <Link
      onClick={handleClick}
      component="button"
      type="button"
      mt={4}
      startDecorator={<PlaceRounded />}
      color="info"
      disabled={!data}
      sx={{ float: "right" }}
    >
      Use previous dive location
    </Link>
  );
};

export default PreviousDiveLocationButton;
