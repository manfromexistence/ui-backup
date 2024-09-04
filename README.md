### Better Commands that is better remember
```
bunx create-next-app@rc --turbo
ls -l | grep -v "^\." | grep "^d" | wc -l
rm -rf .contentlayer .next node_modules
git add . && git commit -m "feat: automated commit by manfromexistence" && git push
```

# Shadcn WWW
A slight change needed to make shadcn/ui website for more flexibility

## package.json
```
{
  "name": "www",
  "version": "0.0.1",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "contentlayer2 build && bun build:registry && next build",
    "build:registry": "tsx --tsconfig ./tsconfig.scripts.json ./scripts/build-registry.mts && prettier --loglevel silent --write \"registry/**/*.{ts,tsx,mdx}\" --cache",
    "build:docs": "contentlayer2 build",
    "seed:tasks": "tsx --tsconfig ./tsconfig.scripts.json ./app/(app)/examples/tasks/data/seed.ts",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "preview": "next build && next start",
    "typecheck": "contentlayer2 build && tsc --noEmit",
    "format:write": "prettier --write \"**/*.{ts,tsx,mdx}\" --cache",
    "format:check": "prettier --check \"**/*.{ts,tsx,mdx}\" --cache"
  },
  "dependencies": {
    "@babel/core": "^7.22.1",
    "@changesets/changelog-github": "^0.4.8",
    "@changesets/cli": "^2.26.1",
    "@commitlint/cli": "^17.6.3",
    "@commitlint/config-conventional": "^17.6.3",
    "@ianvs/prettier-plugin-sort-imports": "^3.7.2",
    "@manypkg/cli": "^0.20.0",
    "@typescript-eslint/parser": "^5.59.7",
    "autoprefixer": "^10.4.14",
    "concurrently": "^8.0.1",
    "cross-env": "^7.0.3",
    "eslint-config-prettier": "^8.8.0",
    "eslint-config-turbo": "^1.9.9",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-tailwindcss": "3.13.1",
    "prettier": "^2.8.8",
    "pretty-quick": "^3.1.3",
    "tailwindcss-animate": "^1.0.5",
    "tsx": "^4.1.4",
    "turbo": "^1.9.9",
    "vite": "^5.4.1",
    "vite-tsconfig-paths": "^4.2.0",
    "vitest": "^2.0.5",
    "next": "15.0.0-rc.0",
    "react": "19.0.0-rc-f994737d14-20240522",
    "react-dom": "19.0.0-rc-f994737d14-20240522",
    "@faker-js/faker": "^8.2.0",
    "@hookform/resolvers": "^3.1.0",
    "@radix-ui/react-accessible-icon": "^1.0.3",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.4",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.3",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^2.1.4",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.0.5",
    "@radix-ui/react-hover-card": "^1.0.6",
    "@radix-ui/react-icons": "^1.3.0",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-menubar": "^1.0.3",
    "@radix-ui/react-navigation-menu": "^1.1.3",
    "@radix-ui/react-popover": "^1.0.6",
    "@radix-ui/react-portal": "^1.0.4",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-scroll-area": "^1.0.4",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.4",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.6",
    "@tanstack/react-table": "^8.9.1",
    "@vercel/analytics": "^1.2.2",
    "@vercel/og": "^0.0.21",
    "change-case": "^5.4.4",
    "class-variance-authority": "^0.7.0",
    "clsx": "^1.2.1",
    "cmdk": "^1.0.0",
    "contentlayer2": "^0.4.6",
    "date-fns": "^2.30.0",
    "embla-carousel-autoplay": "8.0.0-rc15",
    "embla-carousel-react": "8.0.0-rc15",
    "framer-motion": "^11.0.24",
    "geist": "^1.2.2",
    "input-otp": "^1.2.2",
    "jotai": "^2.1.0",
    "lodash.template": "^4.5.0",
    "lucide-react": "0.359.0",
    "markdown-wasm": "^1.2.0",
    "next-contentlayer2": "^0.4.6",
    "next-themes": "^0.2.1",
    "react-day-picker": "^8.7.1",
    "react-hook-form": "^7.44.2",
    "react-resizable-panels": "^2.0.22",
    "react-wrap-balancer": "^0.4.1",
    "recharts": "2.12.7",
    "sharp": "^0.31.3",
    "sonner": "^1.2.3",
    "swr": "2.2.6-beta.3",
    "tailwind-merge": "^1.12.0",
    "ts-morph": "^22.0.0",
    "vaul": "0.9.0",
    "zod": "^3.21.4"
  },
  "devDependencies": {
    "@types/node": "^20.11.27",
    "@types/react": "^18.2.65",
    "@types/react-dom": "^18.2.22",
    "typescript": "^5.5.3",
    "eslint-config-next": "15.0.0-rc.0",
    "@shikijs/compat": "^1.1.7",
    "@types/lodash.template": "^4.5.1",
    "@types/react-color": "^3.0.6",
    "esbuild": "^0.17.19",
    "eslint": "^8.41.0",
    "mdast-util-toc": "^6.1.1",
    "postcss": "^8.4.24",
    "rehype": "^12.0.1",
    "rehype-autolink-headings": "^6.1.1",
    "rehype-pretty-code": "^0.6.0",
    "rehype-slug": "^5.1.0",
    "remark": "^14.0.3",
    "remark-code-import": "^1.2.0",
    "remark-gfm": "^4.0.0",
    "rimraf": "^4.1.3",
    "shiki": "^1.10.1",
    "tailwindcss": "3.3.7",
    "unist-builder": "3.0.0",
    "unist-util-visit": "^4.1.2"
  },
  "peerDependencies": {
    "esbuild": "^0.17.3"
  }
}
```

## next.config.mjs
```
import { createContentlayerPlugin } from "next-contentlayer2"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      {
        source: "/examples",
        destination: "/examples/mail",
        permanent: false,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/figma",
        destination: "/docs/figma",
        permanent: true,
      },
      {
        source: "/docs/forms",
        destination: "/docs/components/form",
        permanent: false,
      },
      {
        source: "/docs/forms/react-hook-form",
        destination: "/docs/components/form",
        permanent: false,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)
```

## tailwind.config.cjs
```
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "content/**/*.mdx",
    "registry/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        // mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

## postcss.config.cjs
```
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}
```

## tsconfig.json
```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Default",
  "compilerOptions": {
    "composite": false,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "inlineSources": false,
    "isolatedModules": true,
    "moduleResolution": "node",
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "preserveWatchOutput": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "noEmit": true,
    "incremental": true,
    "module": "esnext",
    "resolveJsonModule": true,
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./*"
      ],
      "contentlayer/generated": [
        "./.contentlayer/generated"
      ]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".contentlayer/generated"
  ],
  "exclude": [
    "node_modules",
    "./scripts/build-registry.mts",
    "__registry__"
  ]
}
```

## .eslintrc.json
```
{
  "$schema": "https://json.schemastore.org/eslintrc",
  "root": true,
  "extends": [
    "next/core-web-vitals",
    "turbo",
    "prettier",
    "plugin:tailwindcss/recommended"
  ],
  "plugins": ["tailwindcss"],
  "ignorePatterns": ["**/fixtures/**"],
  "rules": {
    "@next/next/no-html-link-for-pages": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error"
  },
  "settings": {
    "tailwindcss": {
      "callees": ["cn", "cva"],
      "config": "tailwind.config.cjs"
    },
    "next": {
      "rootDir": ["apps/*/"]
    }
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser"
    }
  ]
}
```

---
The End

<!-- 
# Nextjs15 and Tailwind4
```
{
  "name": "nextjs15",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@tailwindcss/postcss": "^4.0.0-alpha.15",
    "next": "15.0.0-rc.0",
    "react": "19.0.0-rc-f994737d14-20240522",
    "react-dom": "19.0.0-rc-f994737d14-20240522",
    "tailwindcss": "4.0.0-alpha.3"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "15.0.0-rc.0"
  }
}
```
```
    "@tailwindcss/postcss": "^4.0.0-alpha.15",
    "tailwindcss": "4.0.0-alpha.3",
```
```
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}",
    "content/**/*.mdx",
    "registry/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        // mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```
```

/* :root {
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(240 10% 3.9%);
  --color-card: hsl(0 0% 100%);
  --color-card-foreground: hsl(240 10% 3.9%);
  --color-popover: hsl(0 0% 100%);
  --color-popover-foreground: hsl(240 10% 3.9%);
  --color-primary: hsl(240 5.9% 10%);
  --color-primary-foreground: hsl(0 0% 98%);
  --color-secondary: hsl(240 4.8% 95.9%);
  --color-secondary-foreground: hsl(240 5.9% 10%);
  --color-muted: hsl(240 4.8% 95.9%);
  --color-muted-foreground: hsl(240 3.8% 46.1%);
  --color-accent: hsl(240 4.8% 95.9%);
  --color-accent-foreground: hsl(240 5.9% 10%);
  --color-destructive: hsl(0 72.22% 50.59%);
  --color-destructive-foreground: hsl(0 0% 98%);
  --color-border: hsl(240 5.9% 90%);
  --color-input: hsl(240 5.9% 90%);
  --color-ring: hsl(240 5% 64.9%);
  --color-radius: hsl(0.5rem);

  --color-chart-1: hsl(12 76% 61%);
  --color-chart-2: hsl(173 58% 39%);
  --color-chart-3: hsl(197 37% 24%);
  --color-chart-4: hsl(43 74% 66%);
  --color-chart-5: hsl(27 87% 67%);
} */

``` -->
