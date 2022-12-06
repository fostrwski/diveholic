import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import JoyLink from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactElement;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, icon, children }) => (
  <Container
    component="main"
    sx={{
      py: 4,
      height: "100vh"
    }}
    maxWidth="sm"
  >
    <Box display="flex" alignItems="center" gap={1.2}>
      <Image
        src="/logo.svg"
        width={48}
        height={34}
        layout="fixed"
        alt="Diver down flag"
      />
      <Typography level="h3" component="p">
        Diveholic
      </Typography>
    </Box>

    <Typography textColor="GrayText" level="h6" component="h1" mt={1}>
      Dive log built for the modern age
    </Typography>

    {title && (
      <Typography level="h5" component="h2" mt={4} mb={2} startDecorator={icon}>
        {title}
      </Typography>
    )}

    {children}
  </Container>
);

export default AuthLayout;
