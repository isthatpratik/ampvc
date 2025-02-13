import type React from "react"

export default function SplitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex min-h-screen flex-col lg:flex-row">{children}</div>
}

