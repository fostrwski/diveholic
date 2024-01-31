import DeleteRounded from '@mui/icons-material/DeleteRounded';
import Button from '@mui/joy/Button';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const Modal = dynamic(() => import('./Modal'));

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
        color="danger"
        startDecorator={<DeleteRounded />}
        onClick={handleModalToggle}
        variant="plain"
        aria-label="Delete dive"
        size="lg"
        sx={{ width: { xs: '100%', sm: 'initial' } }}
      >
        Delete
      </Button>

      <Modal
        open={open}
        handleClose={handleModalClose}
        handleDiveDelete={handleDiveDelete}
      />
    </>
  );
};

export default DeleteButton;
