import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const hyperlinkVariants = cva(
  "group/link w-fit relative inline-flex shrink-0 items-center justify-center overflow-hidden border bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Default Black and White Outline Variant
        outline: [
          "border-border bg-background text-foreground/80 rounded-lg shadow-sm transition-colors",
          "hover:text-foreground",
          "dark:border-input dark:bg-input/30",
        ],
        // Amber Pill Variant matching Hugging Face structure with stable background
        pill: [
          "border-amber-500/15 bg-amber-500/5 text-amber-600/80 rounded-lg shadow-sm transition-colors",
          "hover:text-amber-600/80",
          "dark:text-amber-600/80 dark:hover:text-amber-400",
        ],
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 text-xs md:text-sm leading-relaxed [&_svg:not([class*='size-'])]:size-4",
        sm: "h-7 gap-1 px-2 text-xs leading-relaxed [&_svg:not([class*='size-'])]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
)

export interface HyperlinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof hyperlinkVariants> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Hyperlink = React.forwardRef<HTMLAnchorElement, HyperlinkProps>(
  ({ className, variant, size, children, startIcon, endIcon, ...props }, ref) => {
    return (
      <a
        ref={ref}
        data-slot="hyperlink"
        className={cn(hyperlinkVariants({ variant, size, className }))}
        {...props}
      >
        {startIcon && startIcon}
        
        <span className="truncate">
          {children}
        </span>

        {endIcon && endIcon}

        {/* Ambient background glow centered on the right edge to spread to both corners */}
        {variant === "pill" && (
          <div 
            className="absolute right-0 top-1/2 size-24 translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-screen opacity-0 transition-opacity duration-200 group-hover/link:opacity-75 dark:opacity-100"
            style={{
              background: "radial-gradient( at center, rgba(245, 158, 11, 0.25) 35%, transparent 65%)"
            }}
          />
        )}
      </a>
    )
  }
)

Hyperlink.displayName = "Hyperlink"

export { Hyperlink, hyperlinkVariants }