import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import React, { useState } from "react";
import Image from "next/image";
import Avatar from "@mui/joy/Avatar";
import Button from "@mui/joy/Button";
import { useEffect } from "react";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import generateInitials from "common/utils/generateInitials";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";
import NextLink from "next/link";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { user } = useUser();
  const [initials, setInitials] = useState<string>("");

  useEffect(() => {
    if (user) {
      const { first_name: firstName } = user.user_metadata;
      setInitials(generateInitials(firstName, firstName));
    }
  }, [user]);

  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push("/signin");
    } catch (error) {
      alert(error);
    }
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
        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
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

        <NextLink href="/account">
          <Avatar
            sx={{
              fontWeight: "lg",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            {initials}
          </Avatar>
        </NextLink>
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
        <Button
          color="neutral"
          variant="plain"
          size="sm"
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      </Box>
    </Container>
  );
};

export default DefaultLayout;
