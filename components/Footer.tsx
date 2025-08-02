import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mx-auto max-w-7xl px-4 sm:px-12 py-12 sm:py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo.svg" alt="Logo" width={35} height={35} />
            <span>Next.js Starter</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Professional AI-generated movie posters for your online presence.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#how-it-works"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="#examples"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Examples
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://github.com/gawasa29"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/gawasa2929"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
              >
                X
              </Link>
            </li>
            <li>
              <Link
                href="https://www.producthunt.com/@new_user___1412025e7f85bbe5cc059b2"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
              >
                Product Hunt
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="mailto:support@astria.ai"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://choosealicense.com/licenses/mit/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
              >
                License
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
