import CloseRounded from "@mui/icons-material/CloseRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import Alert from "@mui/joy/Alert";
import Container from "@mui/joy/Container";
import IconButton from "@mui/joy/IconButton";
import MuiLink from "@mui/joy/Link";
import Cookies from "js-cookie";
import React, { type Dispatch, type SetStateAction, useState } from "react";

import Modal from "./Modal";

interface LearnedHowToInstallProps {
  setShowLearnHowToInstall: Dispatch<SetStateAction<boolean>>;
}

const LearnHowToInstallButton: React.FC<LearnedHowToInstallProps> = ({
  setShowLearnHowToInstall
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleModalToggle = () => {
    setOpen(!open);
  };

  const handleCloseLearnHowToInstall = () => {
    Cookies.set("LearnedHowToInstall", "true");
    setShowLearnHowToInstall(false);
  };

  return (
    <>
      <Alert
        color="info"
        size="sm"
        sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
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
            fontWeight="xl"
            onClick={handleModalToggle}
          >
            Learn how to install Diveholic
          </MuiLink>
          <IconButton
            variant="plain"
            color="info"
            aria-label="Close learn how to install tip box"
            onClick={handleCloseLearnHowToInstall}
          >
            <CloseRounded />
          </IconButton>
        </Container>
      </Alert>

      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default LearnHowToInstallButton;
