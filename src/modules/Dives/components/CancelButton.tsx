import CloseRounded from "@mui/icons-material/CloseRounded";
import Button from "@mui/joy/Button";
import { useRouter } from "next/router";
import React from "react";

const CancelButton: React.FC = () => {
  const router = useRouter();

  return (
    <Button
      color="danger"
      size="sm"
      variant="plain"
      aria-label="Cancel adding new dive"
      onClick={() => router.push("/")}
      endIcon={<CloseRounded />}
    >
      Cancel
    </Button>
  );
};

export default CancelButton;
