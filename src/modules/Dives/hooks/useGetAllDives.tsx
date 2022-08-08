import { supabase } from "common/utils/supabaseClient";
import { useEffect, useState } from "react";

export default function useGetAllDives() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    (async () => {
      await supabase.from("dives").select("*").then(setData);
    })();
  }, []);

  return data;
}
