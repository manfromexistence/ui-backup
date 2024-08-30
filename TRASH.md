                // drag={true}
                // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                // dragElastic={0.2}
                // onHoverStart={(e: any) => {
                //   alert("hover start")
                // }}
                // onHoverEnd={(e: any) => {}}
                // whileDrag={{ scale: 0.5 }}
      {/* <ButtonContainer />
      <AnimatedTabs />
      <Slider /> */}

const ButtonContainer = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [isNextClicked, setIsNextClicked] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    initial: { height: 100 }, // Set initial height to 0
    clicked: {
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 200, // Adjust stiffness for bounce effect
        damping: 10,
      },
    },
  }

  const backButtonVariants = {
    initial: { display: "none" },
    visible: { display: "block" },
  }

  const nextButtonVariants = {
    initial: { marginLeft: 0, display: "block" },
    visible: { marginLeft: "-200px", display: "none" },
  }

  return (
    <motion.div
      layout
      className="my-10 flex h-auto w-[100px] items-center justify-center overflow-hidden rounded-md border p-3"
      // ref={containerRef}
      // variants={containerVariants}
      // initial="initial"
      // animate={isClicked ? "clicked" : "initial"}
    >
      <motion.button
        layout
        variants={nextButtonVariants}
        className="w-full rounded-md bg-green-500 px-4 py-2 text-white"
        initial="initial"
        animate={isNextClicked ? "visible" : "initial"}
        onClick={() => {
          setIsNextClicked(!isNextClicked)
          setIsClicked(!isClicked)
        }}
      >
        Next
      </motion.button>
      <motion.button
        layout
        className="h-32 rounded-md bg-red-500 px-4 py-2 text-white "
        variants={backButtonVariants}
        initial="initial"
        animate={isClicked ? "visible" : "initial"}
        onClick={() => {
          setIsClicked(!isClicked)
          setIsNextClicked(!isNextClicked)
        }}
      >
        Back
      </motion.button>
    </motion.div>
  )
}

      {/* <motion.div
        drag={true}
        dragConstraints={{ left: 0, right: 0, top:0, bottom:0 }}
        dragElastic={0.2}
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e: any) => {
          alert("hover start")
        }}
        onHoverEnd={(e: any) => {}}
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 0.1 }}
        whileDrag={{ scale: 0.5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="flex h-10 items-center justify-center rounded-md border p-4"
      >
        Hello World!
      </motion.div> */}
 
       
       
        {/* <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components") &&
              !pathname?.startsWith("/docs/component/chart")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link> */}
        {/* <Link
          href="/blocks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blocks
        </Link> */}
        {/* <Link
          href="/charts"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/component/chart") ||
              pathname?.startsWith("/charts")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Charts
        </Link>
        <Link
          href="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Themes
        </Link>
        <Link
          href="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </Link>
        <Link
          href="/colors"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/colors")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Colors
        </Link> */}
        {/* <Link
          href="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </Link> */}
        {/* <Link
          href="/designs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/designs")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Designs
        </Link>
        <Link
          href="/designs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/designs")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Designs
        </Link> */}

// import Image from "next/image"
// import Link from "next/link"
// import { siteConfig } from "@/config/site"
// import { Announcement } from "@/components/announcement"
// import { ExamplesNav } from "@/components/examples-nav"
// import {
// PageActions,
// PageHeader,
// PageHeaderDescription,
// PageHeaderHeading,
// } from "@/components/page-header"
// import { Button } from "@/registry/new-york/ui/button"
// import MailPage from "@/app/(app)/examples/mail/page"

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

      {/* <div
              style={{ display: `${TWO_POPOVER_DISPLAY ? "inline" : "none"}` }}
            >

            </div> */}

      {/* <div
              style={{ display: `${TWO_POPOVER_DISPLAY ? "inline" : "none"}` }}
            >

            </div> */}
        // {
        //   title: "Typography",
        //   href: "/docs/components/typography",
        //   items: [],
        // },
        // {
        //   title: "Figma",
        //   href: "/docs/figma",
        //   items: [],
        // },
        // {
        //   title: "Theming",
        //   href: "/docs/theming",
        //   items: [],
        // },
            // {
    //   title: "Documentation",
    //   href: "/docs",
    // },
    // {
    //   title: "Components",
    //   href: "/docs/components/accordion",
    // },
    // {
    //   title: "Blocks",
    //   href: "/blocks",
    // },
    // {
    //   title: "Charts",
    //   href: "/charts",
    // },
    // {
    //   title: "Themes",
    //   href: "/themes",
    // },
    // {
    //   title: "Examples",
    //   href: "/examples",
    // },
    // {
    //   title: "Colors",
    //   href: "/colors",
    // },
        // {
    //   title: "Playgrounds",
    //   href: "/playgrounds",
    // },
    // {
    //   title: "Shadcnui",
    //   items: [
    //     {
    //       title: "Accordion",
    //       href: "/docs/components/accordion",
    //       items: [],
    //     },
    //     {
    //       title: "Alert",
    //       href: "/docs/components/alert",
    //       items: [],
    //     },
    //     {
    //       title: "Alert Dialog",
    //       href: "/docs/components/alert-dialog",
    //       items: [],
    //     },
    //     {
    //       title: "Aspect Ratio",
    //       href: "/docs/components/aspect-ratio",
    //       items: [],
    //     },
    //     {
    //       title: "Avatar",
    //       href: "/docs/components/avatar",
    //       items: [],
    //     },
    //     {
    //       title: "Badge",
    //       href: "/docs/components/badge",
    //       items: [],
    //     },
    //     {
    //       title: "Breadcrumb",
    //       href: "/docs/components/breadcrumb",
    //       items: [],
    //     },
    //     {
    //       title: "Button",
    //       href: "/docs/components/button",
    //       items: [],
    //     },
    //     {
    //       title: "Calendar",
    //       href: "/docs/components/calendar",
    //       items: [],
    //     },
    //     {
    //       title: "Card",
    //       href: "/docs/components/card",
    //       items: [],
    //     },
    //     {
    //       title: "Carousel",
    //       href: "/docs/components/carousel",
    //       items: [],
    //     },
    //     {
    //       title: "Chart",
    //       href: "/docs/components/chart",
    //       label: "New",
    //       items: [],
    //     },
    //     {
    //       title: "Checkbox",
    //       href: "/docs/components/checkbox",
    //       items: [],
    //     },
    //     {
    //       title: "Collapsible",
    //       href: "/docs/components/collapsible",
    //       items: [],
    //     },
    //     {
    //       title: "Combobox",
    //       href: "/docs/components/combobox",
    //       items: [],
    //     },
    //     {
    //       title: "Command",
    //       href: "/docs/components/command",
    //       items: [],
    //     },
    //     {
    //       title: "Context Menu",
    //       href: "/docs/components/context-menu",
    //       items: [],
    //     },
    //     {
    //       title: "Data Table",
    //       href: "/docs/components/data-table",
    //       items: [],
    //     },
    //     {
    //       title: "Date Picker",
    //       href: "/docs/components/date-picker",
    //       items: [],
    //     },
    //     {
    //       title: "Dialog",
    //       href: "/docs/components/dialog",
    //       items: [],
    //     },
    //     {
    //       title: "Drawer",
    //       href: "/docs/components/drawer",
    //       items: [],
    //     },
    //     {
    //       title: "Dropdown Menu",
    //       href: "/docs/components/dropdown-menu",
    //       items: [],
    //     },
    //     {
    //       title: "Form",
    //       href: "/docs/components/form",
    //       items: [],
    //     },
    //     {
    //       title: "Hover Card",
    //       href: "/docs/components/hover-card",
    //       items: [],
    //     },
    //     {
    //       title: "Input",
    //       href: "/docs/components/input",
    //       items: [],
    //     },
    //     {
    //       title: "Input OTP",
    //       href: "/docs/components/input-otp",
    //       items: [],
    //     },
    //     {
    //       title: "Label",
    //       href: "/docs/components/label",
    //       items: [],
    //     },
    //     {
    //       title: "Menubar",
    //       href: "/docs/components/menubar",
    //       items: [],
    //     },
    //     {
    //       title: "Navigation Menu",
    //       href: "/docs/components/navigation-menu",
    //       items: [],
    //     },
    //     {
    //       title: "Pagination",
    //       href: "/docs/components/pagination",
    //       items: [],
    //     },
    //     {
    //       title: "Popover",
    //       href: "/docs/components/popover",
    //       items: [],
    //     },
    //     {
    //       title: "Progress",
    //       href: "/docs/components/progress",
    //       items: [],
    //     },
    //     {
    //       title: "Radio Group",
    //       href: "/docs/components/radio-group",
    //       items: [],
    //     },
    //     {
    //       title: "Resizable",
    //       href: "/docs/components/resizable",
    //       items: [],
    //     },
    //     {
    //       title: "Scroll Area",
    //       href: "/docs/components/scroll-area",
    //       items: [],
    //     },
    //     {
    //       title: "Select",
    //       href: "/docs/components/select",
    //       items: [],
    //     },
    //     {
    //       title: "Separator",
    //       href: "/docs/components/separator",
    //       items: [],
    //     },
    //     {
    //       title: "Sheet",
    //       href: "/docs/components/sheet",
    //       items: [],
    //     },
    //     {
    //       title: "Skeleton",
    //       href: "/docs/components/skeleton",
    //       items: [],
    //     },
    //     {
    //       title: "Slider",
    //       href: "/docs/components/slider",
    //       items: [],
    //     },
    //     {
    //       title: "Sonner",
    //       href: "/docs/components/sonner",
    //       items: [],
    //     },
    //     {
    //       title: "Switch",
    //       href: "/docs/components/switch",
    //       items: [],
    //     },
    //     {
    //       title: "Table",
    //       href: "/docs/components/table",
    //       items: [],
    //     },
    //     {
    //       title: "Tabs",
    //       href: "/docs/components/tabs",
    //       items: [],
    //     },
    //     {
    //       title: "Textarea",
    //       href: "/docs/components/textarea",
    //       items: [],
    //     },
    //     {
    //       title: "Toast",
    //       href: "/docs/components/toast",
    //       items: [],
    //     },
    //     {
    //       title: "Toggle",
    //       href: "/docs/components/toggle",
    //       items: [],
    //     },
    //     {
    //       title: "Toggle Group",
    //       href: "/docs/components/toggle-group",
    //       items: [],
    //     },
    //     {
    //       title: "Tooltip",
    //       href: "/docs/components/tooltip",
    //       items: [],
    //     },
    //   ],
    // },
