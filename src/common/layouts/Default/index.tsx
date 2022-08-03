import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import { useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import generateInitials from "common/utils/generateInitials";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import LogoutRounded from "@mui/icons-material/LogoutRounded";
import DashboardRounded from "@mui/icons-material/DashboardRounded";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { user } = useUser();
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();

  if (!user && mounted) {
    router.push("/signin");
  }

  const [initials, setInitials] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    if (user) {
      const { first_name: firstName } = user.user_metadata;
      setInitials(generateInitials(firstName));
    }
  }, [user]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenMenu = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <Container>
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
            gap={2}
            sx={{ textDecoration: "none" }}
          >
            <Image
              src="/diver_down_flag.svg"
              style={{ borderRadius: 4 }}
              width={50}
              height={32}
              layout="fixed"
              alt="Diver down flag"
            />
            <Typography level="h3" component="div" fontWeight="lg">
              Diveholic
            </Typography>
          </Box>
        </NextLink>

        <IconButton
          onClick={handleOpenMenu}
          sx={{ borderRadius: "100%" }}
          color="neutral"
        >
          {initials}
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          variant="outlined"
          placement="bottom-end"
        >
          <NextLink href="/">
            <MenuItem>
              <ListItemDecorator>
                <DashboardRounded />
              </ListItemDecorator>
              Dashboard
            </MenuItem>
          </NextLink>

          <NextLink href="/account">
            <MenuItem>
              <ListItemDecorator>
                <SettingsRounded />
              </ListItemDecorator>
              Settings
            </MenuItem>
          </NextLink>

          <MenuItem onClick={handleSignOut}>
            <ListItemDecorator>
              <LogoutRounded />
            </ListItemDecorator>
            Sign out
          </MenuItem>
        </Menu>
      </Box>

      <Box component="main" sx={{ minHeight: "100vh" }}>
        {children}
      </Box>

      <Box
        component="footer"
        mt={6}
        py={4}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Typography textColor="neutral.400">
          &copy; {new Date().getFullYear()} Diveholic
        </Typography>
      </Box>
    </Container>
  );
};

export default DefaultLayout;
