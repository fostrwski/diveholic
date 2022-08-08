import { User } from "@supabase/auth-helpers-nextjs";
import React from "react";

import useGetAllDives from "./hooks/useGetAllDives";

const Dives: React.FC = () => {
  const data = useGetAllDives();

  return <>{console.log(data)}</>;
};

export default Dives;
