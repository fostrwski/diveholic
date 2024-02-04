import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import Typography from '@mui/joy/Typography';
import CookieConsent from 'common/components/CookieConsent';
import Image from 'next/image';
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactElement;
}

export default function AuthLayout({ title, icon, children }: AuthLayoutProps) {
  return (
    <Box height="100vh">
      <Container
        component="main"
        sx={{
          py: 10,
          px: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100%',
        }}
        maxWidth="xs"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1.2}
        >
          <Image
            src="/logo.svg"
            width={48}
            height={34}
            layout="fixed"
            alt="Diver down flag"
          />
          <Typography level="h3" component="p" fontWeight="lg">
            Diveholic
          </Typography>
        </Box>

        <Typography
          textColor="GrayText"
          level="h6"
          component="h1"
          mt={1}
          textAlign="center"
        >
          Dive log built for the modern age
        </Typography>

        {title && (
          <Typography level="h5" component="h2" mt={4} startDecorator={icon}>
            {title}
          </Typography>
        )}

        <Box mt={2}>{children}</Box>
      </Container>

      <CookieConsent />
    </Box>
  );
}
