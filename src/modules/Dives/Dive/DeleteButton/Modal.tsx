import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import MuiModal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import React from "react";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  handleDiveDelete: () => void;
}

const Modal: React.FC<ModalProps> = ({
  open,
  handleClose,
  handleDiveDelete
}) => (
  <MuiModal
    aria-labelledby="modalTitle"
    aria-describedby="modalDescription"
    open={open}
    onClose={handleClose}
  >
    <ModalDialog>
      <Typography level="h4" component="p" id="modalTitle" gutterBottom>
        Delete dive
      </Typography>
      <Typography level="subtitle1" component="p" id="modalDescription">
        Are you sure? You won't be able to revert this action
      </Typography>

      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        <Button color="danger" fullWidth onClick={handleDiveDelete}>
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
