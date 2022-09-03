import DashboardRounded from "@mui/icons-material/DashboardRounded";
import LogoutRounded from "@mui/icons-material/LogoutRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import IconButton from "@mui/joy/IconButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import generateInitials from "common/utils/generateInitials";
import { supabase } from "common/utils/supabaseClient";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { user } = useUser();
  const router = useRouter();

  const [initials, setInitials] = useState<string>("");

  useEffect(() => {
    if (user) {
      const { first_name: firstName } = user.user_metadata;
      setInitials(generateInitials(firstName));
    }
  }, [user]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push("/signin");
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
          variant="soft"
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
        <Typography textColor="GrayText" fontWeight="md">
          &copy; {new Date().getFullYear()} Diveholic
        </Typography>
      </Box>
    </Container>
  );
};

export default DefaultLayout;
