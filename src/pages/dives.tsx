import { User, withPageAuth } from "@supabase/auth-helpers-nextjs"
import DefaultLayout from "common/layouts/Default"
import React from "react"

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function Dives({ user }: { user: User }) {
  return (
    <DefaultLayout>
      <>
        {console.log(user)} Dives
      </>
    </DefaultLayout>
  )
}
