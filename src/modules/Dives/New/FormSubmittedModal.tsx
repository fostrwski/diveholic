import AddRounded from "@mui/icons-material/AddRounded";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { type Dispatch, type SetStateAction } from "react";
import { useFormContext } from "react-hook-form";

import type { FormFields } from "../components/Form/types";

interface FormSubmittedModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const FormSubmittedModal: React.FC<FormSubmittedModalProps> = ({
  open,
  setOpen
}) => {
  const { reset } = useFormContext<FormFields>();

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleContinue = () => {
    handleModalClose();
  };

  const handleAddAnotherDive = () => {
    handleModalClose();
    reset();
  };

  return (
    <Modal
      aria-label="Form successfully submitted"
      aria-describedby="modal-description"
      open={open}
    >
      <ModalDialog>
        <Typography level="h4" component="p" id="modal-title" gutterBottom>
          Success
        </Typography>
        <Typography
          level="subtitle1"
          component="p"
          id="modal-description"
          mb={4}
        >
          Your dive has been saved! What'd you want to do next?
        </Typography>

        <NextLink href="/" passHref>
          <Button
            component="a"
            color="success"
            fullWidth
            size="lg"
            data-cy="New-FormSubmittedModal-continue"
          >
            Continue
          </Button>
        </NextLink>

        <Button
          color="neutral"
          variant="plain"
          fullWidth
          startDecorator={<AddRounded />}
          sx={{ mt: 2 }}
          onClick={handleAddAnotherDive}
        >
          Add another dive
        </Button>
      </ModalDialog>
    </Modal>
  );
};

export default FormSubmittedModal;
