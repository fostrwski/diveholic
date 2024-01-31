import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded';
import Link from '@mui/joy/Link';
import NextLink from 'next/link';
import React from 'react';

interface BackButtonProps {
  to: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to }) => (
  <NextLink href={to} passHref>
    <Link sx={{ mb: { xs: 2, sm: 4 } }} startDecorator={<ChevronLeftRounded />}>
      Go back
    </Link>
  </NextLink>
);

export default BackButton;
