import type React from "react"

export default function LeftSection({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="relative flex-1 bg-white">{children}</div>
}

