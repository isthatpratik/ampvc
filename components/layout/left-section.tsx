import type React from "react";

export default function LeftSection({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="relative flex-1 bg-[#F7F8F8] pt-14 overflow-y-scroll scrollbar-hide">{children}</div>
}

