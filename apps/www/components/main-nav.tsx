"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          href="/apprearences"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/apprearences")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Apprearences
        </Link>
        <Link
          href="/renderers"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/renderers")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Renderers
        </Link>
        <Link
          href="/templates"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/templates")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Templates
        </Link>
        <Link
          href="/tools"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/tools")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Tools
        </Link>
      </nav>
    </div>
  )
}
