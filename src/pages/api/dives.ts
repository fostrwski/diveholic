import { withApiAuth } from "@supabase/auth-helpers-nextjs";

// @ts-ignore
export default withApiAuth(async (req, res, supabase) => {
  console.log(supabase.auth.getSession());
  const { data: dives } = await supabase.from("dives").select("*");
  res.json(dives);
});
