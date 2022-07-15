import DefaultLayout from "common/layouts/Default";
import React from "react";
import { User, withAuthRequired } from "@supabase/supabase-auth-helpers/nextjs"
import Avatar from "@mui/joy/Avatar";
import generateInitials from "common/utils/generateInitials";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

export const getServerSideProps = withAuthRequired({ redirectTo: "/signin" })

export default function AccountPage({ user }: { user: User }) {
  const { first_name: firstName, last_name: lastName } = user.user_metadata

  return (
    <DefaultLayout>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Avatar sx={{ width: 140, height: 140, mb: 4 }} size="lg">
          <Typography level="display2">
            {generateInitials(firstName, lastName)}
          </Typography>
        </Avatar>

        <Typography level="h4" component="div" fontWeight="md">First name
          <Typography component="span" fontWeight="lg" textColor="neutral.400">
            {" " + firstName}
          </Typography>
        </Typography>

        <Typography level="h4" component="div" fontWeight="md">
          Last name
          <Typography component="span" fontWeight="lg" textColor="neutral.400">
            {" " + lastName}
          </Typography>
        </Typography>
      </Box>
    </DefaultLayout>
  );
};

