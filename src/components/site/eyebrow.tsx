import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mb-4 inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.09em] text-gold",
        className
      )}
    >
      <span className="h-[6px] w-[6px] rounded-full bg-gold shadow-[0_0_8px_rgb(201_169_97_/_0.5)]" />
      {children}
    </span>
  );
}
