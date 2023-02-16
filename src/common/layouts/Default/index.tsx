import DashboardRounded from "@mui/icons-material/DashboardRounded";
import LogoutRounded from "@mui/icons-material/LogoutRounded";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import IconButton from "@mui/joy/IconButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import generateInitials from "common/utils/generateInitials";
import Image from "next/image";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

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

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          variant="soft"
          placement="bottom-end"
        >
          <NextLink href="/">
            <MenuItem>
              <ListItemDecorator>
                <DashboardRounded />
              </ListItemDecorator>
              Home
            </MenuItem>
          </NextLink>

          <NextLink href="/api/auth/logout">
            <MenuItem>
              <ListItemDecorator>
                <LogoutRounded />
              </ListItemDecorator>
              Sign out
            </MenuItem>
          </NextLink>
        </Menu>
      </Box>

      <Box component="main" sx={{ minHeight: "100vh" }}>
        {children}
      </Box>

      <Box component="footer" py={6} />
    </Container>
  );
};

export default DefaultLayout;
