import DeleteRounded from "@mui/icons-material/DeleteRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import React, { useState } from "react";

interface DeleteButtonProps {
  handleDiveDelete: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ handleDiveDelete }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleModalToggle = () => {
    setOpen(!open);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        sx={{ mt: 2 }}
        color="danger"
        fullWidth
        startDecorator={<DeleteRounded />}
        onClick={handleModalToggle}
        variant="plain"
        aria-label="Delete dive"
      >
        Delete
      </Button>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={handleModalClose}
      >
        <ModalDialog>
          <Typography level="h4" component="p" id="modal-title" gutterBottom>
            Delete dive
          </Typography>
          <Typography level="subtitle1" component="p" id="modal-description">
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

export default DeleteButton;
