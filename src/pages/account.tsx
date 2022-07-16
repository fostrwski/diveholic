import DefaultLayout from "common/layouts/Default";
import React from "react";
import { User, withAuthRequired } from "@supabase/supabase-auth-helpers/nextjs";
import Avatar from "@mui/joy/Avatar";
import generateInitials from "common/utils/generateInitials";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import ListItem from "@mui/joy/ListItem";
import List from "@mui/joy/List";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import EditRounded from "@mui/icons-material/EditRounded";

export const getServerSideProps = withAuthRequired({ redirectTo: "/signin" });

export default function AccountPage({ user }: { user: User }) {
  const { first_name: firstName, last_name: lastName } = user.user_metadata;

  return (
    <DefaultLayout>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Avatar sx={{ width: 140, height: 140, mb: 4 }} size="lg">
          <Typography level="display2">
            {generateInitials(firstName, lastName)}
          </Typography>
        </Avatar>

        <List sx={{ width: "100%" }} size="lg">
          <ListItem>
            <ListItemDecorator><EditRounded /></ListItemDecorator>
            <ListItemContent sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
              <Typography>
                First name
              </Typography>
              <Typography fontWeight="md" textColor="neutral.400">
                {" " + firstName}
              </Typography>
            </ListItemContent>
          </ListItem>

          <ListItem>
            <ListItemDecorator><EditRounded /></ListItemDecorator>
            <ListItemContent sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
              <Typography>
                Last name
              </Typography>
              <Typography fontWeight="md" textColor="neutral.400">
                {" " + lastName}
              </Typography>
            </ListItemContent>
          </ListItem>
        </List>
      </Box>
    </DefaultLayout >
  );
}
