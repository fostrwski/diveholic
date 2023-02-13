import Apple from "@mui/icons-material/Apple";
import DesktopMacRounded from "@mui/icons-material/DesktopMacRounded";
import Button from "@mui/joy/Button";
import MuiModal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import React, { type Dispatch, type SetStateAction } from "react";

import Steps from "./Steps";
import desktopSteps from "./desktopSteps";
import iOSSteps from "./iOSSteps";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiModal open={open} onClose={handleClose}>
      <ModalDialog
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column"
        }}
        aria-label="Learn how to install Diveholic"
      >
        <div>
          <Steps title="iOS" icon={<Apple />} steps={iOSSteps} />
          <Steps
            title="Desktop"
            icon={<DesktopMacRounded />}
            steps={desktopSteps}
          />
        </div>

        <Button
          onClick={handleClose}
          color="neutral"
          fullWidth
        >
          Close
        </Button>
      </ModalDialog>
    </MuiModal>
  );
};

export default Modal;