"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"
import { cn, getURL } from "@/lib/utils"
import { Database } from "@/types/supabase"
import disposableDomains from "disposable-email-domains"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"

import { WaitingLink } from "./WaitingLink"

type Inputs = {
  email: string
}

interface LoginFormProps extends React.ComponentProps<"div"> {
  host: string | null
}

export function LoginForm({ className, host, ...props }: LoginFormProps) {
  const supabase = createClient<Database>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLinkSent, setIsLinkSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data: { email: string }) => {
    setIsSubmitting(true)
    try {
      await loginWithMagicLink(data.email)

      setIsLinkSent(true)
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred."
      toast.error("Something went wrong", {
        description: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  /*
  通常のメール認証方法では、パスワードの再設定の手間や管理リスクがあります。そのため、簡単で安全な認証を実現するMagicLinkをご利用ください。

  Inspired by:
  https://supabase.com/docs/guides/auth/redirect-urls

  URL Configurationを以下のように設定する
  -- http://localhost:3000/**
  -- https://**--my_org.netlify.app/**

  SupabaseのMagic Link設定を下記のように変更。
  https://supabase.com/dashboard/project/_/auth/templates
  <h2>Magic Link</h2>

  <p>Follow this link to login:</p>
  <p><a href="{{ .RedirectTo }}api/auth/confirm?token_hash={{ .TokenHash }}&type=email">
  Confirm your mail
  </a></p>
  */
  const loginWithMagicLink = async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: getURL(),
      },
    })

    if (error) {
      throw new Error(error.message || "login failed.")
    }
  }

  if (isLinkSent) {
    return <WaitingLink toggleState={() => setIsLinkSent(false)} />
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>
            login or create an account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  {...register("email", {
                    required: true,
                    validate: {
                      emailIsValid: (value: string) =>
                        /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ||
                        "Please enter a valid email",
                      emailDoesntHavePlus: (value: string) =>
                        /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ||
                        "Email addresses with a '+' are not allowed",
                      emailIsntDisposable: (value: string) =>
                        !disposableDomains.includes(value.split("@")[1]) ||
                        "Please use a permanent email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  disabled={isSubmitting}
                  className="w-full"
                  type="submit"
                >
                  Continue with Email
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
