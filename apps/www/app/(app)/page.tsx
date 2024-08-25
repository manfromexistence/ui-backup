// import Image from "next/image"
// import Link from "next/link"
// import { siteConfig } from "@/config/site"
// import { Announcement } from "@/components/announcement"
// import { ExamplesNav } from "@/components/examples-nav"
// import {
//   PageActions,
//   PageHeader,
//   PageHeaderDescription,
//   PageHeaderHeading,
// } from "@/components/page-header"
// import { Button } from "@/registry/new-york/ui/button"
// import MailPage from "@/app/(app)/examples/mail/page"
import { CircleCheck, HardDrive, MessageCircleCode } from "lucide-react"

export default function IndexPage() {
  return (
    <div className="container relative">
      <h1>Two-Step Popover</h1>
      <span>
        Experimenting how a two-step popover can be implemented and getting a
        feeling of the transition. Not quite there yet but hey, all of this is
        experimental.
      </span>
      <div className="flex h-[750px] w-full items-center justify-center rounded-md border">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-background">
          <HardDrive className="h-4 w-4 text-muted hover:text-background" />
          <MessageCircleCode />
          <CircleCheck />
        </span>
      </div>
      {/* <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              GitHub
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow">
          <MailPage />
        </div>
      </section> */}
    </div>
  )
}
