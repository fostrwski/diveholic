import DefaultLayout from "common/layouts/Default";
import React from "react";
import { User, withAuthRequired } from "@supabase/supabase-auth-helpers/nextjs";
import Avatar from "@mui/joy/Avatar";
import generateInitials from "common/utils/generateInitials";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input"
import EditRounded from "@mui/icons-material/EditRounded";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { PersonRounded, SettingsRounded } from "@mui/icons-material";

export const getServerSideProps = withAuthRequired({ redirectTo: "/signin" });

export default function AccountPage({ user }: { user: User }) {
  const { first_name: firstName, last_name: lastName } = user.user_metadata;

  return (
    <DefaultLayout>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Avatar sx={{ width: 140, height: 140 }} size="lg">
          <Typography level="display2">
            {generateInitials(firstName, lastName)}
          </Typography>
        </Avatar>
      </Box>

      <Typography startDecorator={<PersonRounded />} level="h4" mt={4} mb={2}>Account</Typography>

      <Typography gutterBottom>First name</Typography>
      <Input startDecorator={<EditRounded />} variant="soft" value={firstName}></Input>

      <Typography gutterBottom mt={2}>Last name</Typography>
      <Input startDecorator={<EditRounded />} variant="soft" value={lastName}></Input>

      <Typography mt={4} mb={2} level="h4" startDecorator={<SettingsRounded />}>Preferences</Typography>

      <Typography level="h5" mb={2}>Mode</Typography>
      <RadioGroup row color="neutral" size="lg">
        <Radio value="System" label="System" />
        <Radio value="Light" label="Light" />
        <Radio value="Dark" label="Dark" />
      </RadioGroup>

      <Typography level="h5" mt={4} mb={2}>Units</Typography>
      <RadioGroup row color="neutral" size="lg">
        <Radio value="Imperial" label="Imperial" />
        <Radio value="Metric" label="Metric" />
      </RadioGroup>

    </DefaultLayout>
  );
}
