"use client"

import { useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://regicore.com"
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-primary">
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" style={{ animationDuration: "2s" }} />

        <p className="text-lg font-medium tracking-tight text-foreground">
          Connecting to Regicore...
        </p>

        <a
          href="https://regicore.com"
          className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:shadow-md"
        >
          Click here if not redirected
        </a>
      </div>
    </main>
  )
}
