This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Initial Settings

### [Create Next App:](https://nextjs.org/docs/app/api-reference/cli/create-next-app)

```bash
pnpm dlx create-next-app@latest
```

### [Shadcn UI:](https://ui.shadcn.com/docs/installation/next)

Install and configure shadcn/ui for Next.js.

```bash
pnpm dlx shadcn@latest init
```

Add UI

```bash
pnpm dlx shadcn@latest add button sonner dropdown-menu input label card
```

### Supabase Install:

```bash
pnpm install supabase @supabase/ssr @supabase/supabase-js
```

### [Declare Supabase Environment Variables:](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

```bash
touch .env.local
```

Describe environment variables

```bash
NEXT_PUBLIC_SUPABASE_URL=<SUBSTITUTE_SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<SUBSTITUTE_SUPABASE_ANON_KEY>
```

### [Supabase Local Development:](https://supabase.com/docs/guides/local-development)

In your repo, initialize the Supabase project

```bash
supabase init
```

Start the Supabase stack

```bash
supabase start
```

View your local Supabase instance at [http://localhost:54323](http://localhost:54323).

### [Supabase Migration:](https://supabase.com/docs/guides/deployment/database-migrations)

Create your first migration file

```bash
supabase migration new scheme
```

Chenge scheme file

```bash
supabase/migrations/xxxxx_scheme.sql
```

Reset your database

```bash
supabase db reset
```

### [Supabase Generating Types:](https://supabase.com/docs/guides/api/rest/generating-types)

Create directory

```bash
mkdir types
```

Generate types for your project to local development produce the supabase.ts file

```bash
pnpm dlx supabase gen types typescript --local > types/supabase.ts
```

Create file

```bash
touch types/global.types.ts
```

### [Query Supabase Wrapper:](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

Create directory and file

```bash
mkdir lib/supabase
# Write code after creating the file
touch lib/supabase/client.ts
touch lib/supabase/middleware.ts
touch lib/supabase/server.ts
```

### Install Other Packages:

```bash
pnpm install zod
```

## How It Works:

The app is powered by:

- ▲ [Next.js](https://nextjs.org/) for app and landing page

- 🔋 [Supabase](https://supabase.com/) for DB & Auth

- ⭐️ [Shadcn](https://ui.shadcn.com/) with [Tailwind CSS](https://tailwindcss.com/) for styles

- ▲ [Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fleap-ai%2Fheadshots-starter%2Ftree%2Fmain&env=ASTRIA_API_KEY,APP_WEBHOOK_SECRET&envDescription=Set%20up%20environment%20variables%20for%20Leap%20AI%20and%20redirect%20URL%20in%20Supabase%20Auth%20dashboard.%20See%20.env.local.example%20for%20full%20config%20with%20Resend%20and%20Stripe.&envLink=https%3A%2F%2Fgithub.com%2Fleap-ai%2Fheadshots-starter%2Fblob%2Fmain%2F.env.local.example&project-name=headshots-starter-clone&repository-name=headshots-starter-clone&demo-title=AI%20Headshot%20Generator&demo-description=A%20Professional%20AI%20headshot%20generator%20starter%20kit%20powered%20by%20Next.js%2C%20Leap%20AI%2C%20and%20Vercel&demo-url=https%3A%2F%2Fwww.getheadshots.ai%2F&demo-image=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F1CEDfTwO5vPEiNMgN2Y1t6%2F245d1e0c11c4d8e734fbe345b9ecdc7c%2Fdemo.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fleap-ai%2Fheadshots-starter%2Ftree%2Fmain) for deployments

- 💳 [Stripe](https://stripe.com/) for billing

## Learn More:

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel:

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
