import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-primary">
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <p className="text-lg font-medium tracking-tight text-foreground">
          Welcome to Regicore
        </p>

        <a
          href="https://regicore.com"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:shadow-md"
        >
          Go to Regicore
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </main>
  )
}
