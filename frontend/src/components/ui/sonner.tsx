"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CheckCircle, Info, Warning, XCircle, Spinner } from "@phosphor-icons/react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CheckCircle weight="fill" className="size-5 text-emerald-500" />
        ),
        info: (
          <Info weight="fill" className="size-5 text-blue-500" />
        ),
        warning: (
          <Warning weight="fill" className="size-5 text-amber-500" />
        ),
        error: (
          <XCircle weight="fill" className="size-5 text-red-500" />
        ),
        loading: (
          <Spinner weight="bold" className="size-5 animate-spin text-primary" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
