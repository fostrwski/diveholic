import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import Dive from "modules/Dives/Dive";

export const getServerSideProps = withPageAuth({
  redirectTo: "/signin"
});

export default function DivePage() {
  return (
    <DefaultLayout>
      <Dive />
    </DefaultLayout>
  );
}
