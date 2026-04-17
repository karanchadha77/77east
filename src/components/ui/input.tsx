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
      "flex h-11 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/15 transition-all",
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
      "flex min-h-[110px] w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/15 transition-all resize-none",
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
      "flex h-11 w-full rounded-lg border border-border bg-white px-4 text-sm text-foreground focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/15 transition-all",
      className
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";
