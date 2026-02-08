"use client"

import { Loader2 } from "lucide-react"

export function RedirectContent() {
  return (
    <div className="flex flex-col items-center gap-6 animate-fade-in">
      <Loader2
        className="h-10 w-10 animate-spin text-muted-foreground"
        style={{ animationDuration: "2s" }}
      />

      <p className="text-lg font-medium tracking-tight text-foreground">
        Connecting to Regicore...
      </p>

      <a
        href="https://regicore.com"
        rel="noopener noreferrer"
        className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:shadow-md"
      >
        Click here if not redirected
      </a>
    </div>
  )
}
