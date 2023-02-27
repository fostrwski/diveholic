import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import MuiModal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import React from "react";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  handleCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, handleClose, handleCancel }) => (
  <MuiModal
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    open={open}
    onClose={handleClose}
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
          onClick={handleClose}
        >
          No
        </Button>
      </Box>
    </ModalDialog>
  </MuiModal>
);

export default Modal;
