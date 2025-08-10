import { cn } from "@/lib/utils"

export function AwardItem({
  gradient,
  text,
}: {
  gradient: string
  text: string
}) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      {" "}
      {/* Added group and cursor-pointer */}
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          gradient,
          "shadow-lg",
          "transition-transform duration-300 group-hover:scale-110", // Scale on hover
        )}
      />
      <span className="text-sm text-white/70 transition-colors duration-300 group-hover:text-white">{text}</span>{" "}
      {/* Text color change on hover */}
    </div>
  )
}
