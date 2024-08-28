// refresh-on-focus.tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function RefreshOnFocus() {
  const { refresh } = useRouter()

  useEffect(() => {
    const onFocus = () => {
      refresh()
    }

    window.addEventListener("focus", onFocus)

    return () => {
      window.removeEventListener("focus", onFocus)
    }
  }, [refresh])

  return null
}

// src/app/page.tsx
// import { RefreshOnFocus } from "./refresh-on-focus";

export default function Home() {
  let date = new Date()

  return (
    <div>
      <p>This component was rendered at {date.toString()}</p>
      <RefreshOnFocus />
    </div>
  )
}
