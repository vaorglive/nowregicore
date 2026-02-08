import { RedirectContent } from "@/components/redirect-content"

export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content="2;url=https://regicore.com" />
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-primary">
        <RedirectContent />
      </main>
    </>
  )
}
