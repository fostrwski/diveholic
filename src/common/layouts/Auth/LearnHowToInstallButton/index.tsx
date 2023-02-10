import DownloadRounded from "@mui/icons-material/DownloadRounded";
import Alert from "@mui/joy/Alert";
import MuiLink from "@mui/joy/Link";
import React, { useState } from "react";

import Modal from "./Modal";

const LearnHowToInstallButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleModalToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Alert
        color="info"
        size="sm"
        sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <MuiLink
          startDecorator={<DownloadRounded />}
          sx={{
            mx: {
              xs: "auto",
              sm: "initial"
            }
          }}
          color="info"
          component="button"
          fontWeight="lg"
          onClick={handleModalToggle}
        >
          Learn how to install Diveholic
        </MuiLink>
      </Alert>

      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default LearnHowToInstallButton;
