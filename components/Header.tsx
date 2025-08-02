import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { createClient } from "@/lib/supabase/server"
import { Database } from "@/types/supabase"
import {
  ChevronDown,
  DollarSign,
  Heart,
  LayoutDashboard,
  LogOut,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export const dynamic = "force-dynamic"

export default async function Header() {
  const supabase = await createClient<Database>()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <header className="flex items-center justify-between border-b w-full mx-auto max-w-7xl px-4 sm:px-12 py-2 sm:py-4">
      <Link
        href="/"
        className="group flex items-center font-bold text-2xl hover:no-underline"
      >
        <div className="transition-transform duration-200 group-hover:scale-110 mr-1">
          <Image src="/logo.svg" alt="Logo" width={35} height={35} />
        </div>

        <span>Next.js Starter</span>
      </Link>

      <div className="flex items-center space-x-1">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="hidden sm:inline-flex"
        >
          <Link href="/ideas">Ideas</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="hidden sm:inline-flex"
        >
          <Link href="/size">Size</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="hidden sm:inline-flex"
        >
          <Link href="/examples">Examples</Link>
        </Button>

        {user ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <span className="hidden md:inline-block">
                    {user.email?.split("@")[0]}
                  </span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <LayoutDashboard size={16} />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/save"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Heart size={16} />
                    <span>Save</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/plan"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <DollarSign size={16} />
                    <span>Plan</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <form
                    className="w-full"
                    action="/api/auth/signout"
                    method="post"
                  >
                    <button
                      type="submit"
                      className="flex items-center gap-2 w-full"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Button asChild size="sm">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </header>
  )
}
