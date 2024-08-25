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

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"

export default function IndexPage() {
  return (
    <div className="container relative">
      <h1>Two-Step Popover</h1>
      <span>
        Experimenting how a two-step popover can be implemented and getting a
        feeling of the transition. Not quite there yet but hey, all of this is
        experimental.
      </span>
      <div className="mt-4 flex h-[500px] w-full items-center justify-center rounded-md border">
        <Popover>
          <PopoverTrigger asChild>
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground">
              <HardDrive className="h-4 w-4 text-muted-foreground hover:text-primary" />
              {/* <MessageCircleCode />
          <CircleCheck /> */}
            </span>
          </PopoverTrigger>
          <PopoverContent className="flex w-auto space-x-2 border-none p-2">

            <div className="w-72 rounded-md border p-2">
              <div className="flex items-center rounded-md p-2 text-muted-foreground  hover:bg-secondary hover:text-primary">
                <div className="flex flex-1 items-center space-x-2">
                  <MessageCircleCode className="h-4 w-4" />
                  <span className="text-sm text-primary ">Add Comment</span>
                </div>
                <span className="flex items-center text-xs text-muted-foreground">
                  Reply Thread
                </span>
              </div>

              <div className="flex items-center rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-primary">
                <div className="flex flex-1 items-center space-x-2">
                  <CircleCheck className="h-4 w-4" />
                  <span className="text-sm text-primary">Approve Changes</span>
                </div>
                <span className="flex items-center text-xs text-muted-foreground">
                  Send Review
                </span>
              </div>
            </div>
            <div className="w-72 rounded-md border p-2">
              <div className="flex items-center rounded-md p-2 text-muted-foreground  hover:bg-secondary hover:text-primary">
                <div className="flex flex-1 items-center space-x-2">
                  <MessageCircleCode className="h-4 w-4" />
                  <span className="text-sm text-primary ">Add Comment</span>
                </div>
                <span className="flex items-center text-xs text-muted-foreground">
                  Reply Thread
                </span>
              </div>
              <div className="flex items-center rounded-md p-2 text-muted-foreground  hover:bg-secondary hover:text-primary">
                <div className="flex flex-1 items-center space-x-2">
                  <MessageCircleCode className="h-4 w-4" />
                  <span className="text-sm text-primary ">Add Comment</span>
                </div>
                <span className="flex items-center text-xs text-muted-foreground">
                  Reply Thread
                </span>
              </div>
              <div className="flex items-center rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-primary">
                <div className="flex flex-1 items-center space-x-2">
                  <CircleCheck className="h-4 w-4" />
                  <span className="text-sm text-primary">Approve Changes</span>
                </div>
                <span className="flex items-center text-xs text-muted-foreground">
                  Send Review
                </span>
              </div>
            </div>

          </PopoverContent>
        </Popover>
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
