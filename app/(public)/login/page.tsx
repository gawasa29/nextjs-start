import { LoginForm } from "@/components/loginpage/LoginForm"
import { createClient } from "@/lib/supabase/server"
import { Database } from "@/types/supabase"
import { headers } from "next/headers"

import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function LoginPage() {
  const supabase = await createClient<Database>()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/")
  }

  const headersList = await headers()
  const host = headersList.get("host")
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm host={host} />
      </div>
    </div>
  )
}
