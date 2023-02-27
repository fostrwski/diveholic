import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import generateInitials from "common/utils/generateInitials";
import dynamic from "next/dynamic";
import Image from "next/image";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

const Menu = dynamic(() => import("./Menu"));

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { user } = useUser();

  const [initials, setInitials] = useState<string>("");

  useEffect(() => {
    if (user) {
      const { first_name: firstName } = user.user_metadata;
      setInitials(generateInitials(firstName));
    }
  }, [user]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenMenu = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <Container sx={{ px: 4, py: 2 }}>
      <Box
        component="nav"
        mb={2}
        py={2}
        display="flex"
        justifyContent="space-between"
      >
        <NextLink href="/" passHref>
          <Box
            aria-label="Return to the home page"
            component="a"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1.2}
            sx={{ textDecoration: "none" }}
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
        </NextLink>

        <IconButton
          onClick={handleOpenMenu}
          sx={{ fontWeight: "lg" }}
          color="neutral"
          aria-label="Toggle menu"
        >
          {initials}
        </IconButton>

        <Menu open={open} anchorEl={anchorEl} onClose={handleCloseMenu} />
      </Box>

      <Box component="main" sx={{ minHeight: "100vh" }}>
        {children}
      </Box>

      <Box component="footer" py={6} />
    </Container>
  );
};

export default DefaultLayout;
