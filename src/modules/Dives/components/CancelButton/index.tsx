import CloseRounded from '@mui/icons-material/CloseRounded';
import Button from '@mui/joy/Button';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Modal = dynamic(() => import('./Modal'));

interface CancelButtonProps {
  redirectTo?: string;
}

const CancelButton: React.FC<CancelButtonProps> = ({ redirectTo }) => {
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
    router.push(redirectTo || '/');
  };

  return (
    <>
      <Button
        color="danger"
        size="sm"
        variant="plain"
        aria-label="Cancel adding new dive"
        onClick={handleModalToggle}
        endDecorator={<CloseRounded />}
      >
        Cancel
      </Button>

      <Modal
        open={open}
        handleClose={handleModalClose}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default CancelButton;
