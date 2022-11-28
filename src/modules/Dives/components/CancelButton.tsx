import CloseRounded from "@mui/icons-material/CloseRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import { useRouter } from "next/router";
import React, { useState } from "react";

const CancelButton: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const handleModalToggle = () => {
    setOpen(!open);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    handleModalClose();
    router.push("/");
  };

  return (
    <>
      <Button
        color="danger"
        size="sm"
        variant="plain"
        aria-label="Cancel adding new dive"
        onClick={handleModalToggle}
        endIcon={<CloseRounded />}
      >
        Cancel
      </Button>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={handleModalClose}
      >
        <ModalDialog>
          <Typography level="h4" component="p" id="modal-title" gutterBottom>
            Cancel
          </Typography>
          <Typography level="subtitle1" component="p" id="modal-description">
            Are you sure? You won't be able to restore the progress
          </Typography>

          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button color="danger" fullWidth onClick={handleCancel}>
              Yes
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              fullWidth
              onClick={handleModalClose}
            >
              No
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default CancelButton;
