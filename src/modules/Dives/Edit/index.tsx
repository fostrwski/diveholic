import type { User } from "@supabase/auth-helpers-nextjs";
import React from "react";

import Form from "../components/Form";
import Header from "./Header";

interface EditProps {
  user: User;
}

const Edit: React.FC<EditProps> = ({ user }) => {
  return (
    <>
      <Header />

      <Form onSubmit={() => {}} />
    </>
  );
};

export default Edit;
