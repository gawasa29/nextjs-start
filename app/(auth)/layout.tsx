import { createClient } from "@/lib/supabase/server"
import { Database } from "@/types/supabase"
import { redirect } from "next/navigation"

type Props = {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  const supabase = await createClient<Database>()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  return <>{children}</>
}
