import type React from "react"

export default function SplitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex min-h-screen justify-center bg-transparent">{children}</div>
}

