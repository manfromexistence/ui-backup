import { MainNavItem, SidebarNavItem } from "types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  chartsNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Apprearences",
      href: "/apprearence",
    },
    {
      title: "Renderers",
      href: "/renderers",
    },
    {
      title: "Templates",
      href: "/templates",
    },
    {
      title: "Tools",
      href: "/tools",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "ui.json",
          href: "/docs/ui-json",
          items: [],
        },
        {
          title: "Mode",
          href: "/docs/mode",
          items: [],
        },
        {
          title: "Package",
          href: "/docs/package",
          items: [],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Two-Step Popover",
          href: "/docs/two-step-popover",
          items: [],
        },
        {
          title: "Action Toolbar",
          href: "/docs/action-toolbar",
          items: [],
        },
        {
          title: "Dynamic Settings",
          href: "/docs/dynamic-settings",
          items: [],
        },
        {
          title: "Contextual Toolbar",
          href: "/docs/contextual-toolbar",
          items: [],
        },
        {
          title: "Beta Feedback",
          href: "/docs/beta-feedback",
          items: [],
        },
        {
          title: "Calendar Widget",
          href: "/docs/calendar-widget",
          items: [],
        },
        {
          title: "Flexbile Tags Container",
          href: "/docs/flexbile-tags-container",
          items: [],
        },
        {
          title: "Elastic Card",
          href: "/docs/elastic-card",
          items: [],
        },
        {
          title: "Parameters iOS Slider",
          href: "/docs/parameters-ios-slider",
          items: [],
        },
        {
          title: "Dynamic Header Dropdown",
          href: "/docs/dynamic-header-dropdown",
          items: [],
        },
        {
          title: "Dynamic Footer Widget",
          href: "/docs/dynamic-footer-widget",
          items: [],
        },
        {
          title: "Friday",
          href: "/docs/friday",
          items: [],
        },
      ],
    },
    {
      title: "Texts",
      items: [
        {
          title: "One",
          href: "/docs/text/one",
          items: [],
        },
        {
          title: "Two",
          href: "/docs/text/two",
          items: [],
        },
        {
          title: "Three",
          href: "/docs/text/three",
          items: [],
        },
      ],
    },
    {
      title: "Inputs",
      items: [
        {
          title: "One",
          href: "/docs/input/one",
          items: [],
        },
        {
          title: "Two",
          href: "/docs/input/two",
          items: [],
        },
        {
          title: "Three",
          href: "/docs/input/three",
          items: [],
        },
      ],
    },
    {
      title: "Medias",
      items: [
        {
          title: "One",
          href: "/docs/media/one",
          items: [],
        },
        {
          title: "Two",
          href: "/docs/media/two",
          items: [],
        },
        {
          title: "Three",
          href: "/docs/media/three",
          items: [],
        },
      ],
    },
    {
      title: "Landings",
      items: [
        {
          title: "One",
          href: "/docs/landing/one",
          items: [],
        },
        {
          title: "Two",
          href: "/docs/landing/two",
          items: [],
        },
        {
          title: "Three",
          href: "/docs/landing/three",
          items: [],
        },
      ],
    },
    {
      title: "Admins",
      items: [
        {
          title: "One",
          href: "/docs/admin/one",
          items: [],
        },
        {
          title: "Two",
          href: "/docs/admin/two",
          items: [],
        },
        {
          title: "Three",
          href: "/docs/admin/three",
          items: [],
        },
      ],
    },
    {
      title: "Visulizations",
      items: [
        {
          title: "One",
          href: "/docs/visulization/one",
          items: [],
        },
        {
          title: "Two",
          href: "/docs/visulization/two",
          items: [],
        },
        {
          title: "Three",
          href: "/docs/visulization/three",
          items: [],
        },
      ],
    },
  ],
  chartsNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/charts",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/charts/installation",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/charts/theming",
          items: [],
        },
      ],
    },
    {
      title: "Charts",
      items: [
        {
          title: "Area Chart",
          href: "/docs/charts/area",
          items: [],
        },
        {
          title: "Bar Chart",
          href: "/docs/charts/bar",
          items: [],
        },
        {
          title: "Line Chart",
          href: "/docs/charts/line",
          items: [],
        },
        {
          title: "Pie Chart",
          href: "/docs/charts/pie",
          items: [],
        },
        {
          title: "Radar Chart",
          href: "/docs/charts/radar",
          items: [],
        },
        {
          title: "Radial Chart",
          href: "/docs/charts/radial",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Tooltip",
          href: "/docs/charts/tooltip",
          items: [],
        },
        {
          title: "Legend",
          href: "/docs/charts/legend",
          items: [],
        },
      ],
    },
  ],
}
