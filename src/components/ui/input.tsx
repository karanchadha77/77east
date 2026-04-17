import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "flex h-10 w-full rounded-lg border border-border bg-bg-card px-3.5 text-sm text-fg placeholder:text-fg-muted/60 focus:outline-none focus:border-fg/40 focus:ring-2 focus:ring-fg/8 transition-all",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[100px] w-full rounded-lg border border-border bg-bg-card px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-muted/60 focus:outline-none focus:border-fg/40 focus:ring-2 focus:ring-fg/8 transition-all resize-none",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-lg border border-border bg-bg-card px-3.5 text-sm text-fg focus:outline-none focus:border-fg/40 focus:ring-2 focus:ring-fg/8 transition-all",
      className
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";
