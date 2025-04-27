"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  FileText,
  User,
  Settings,
  LogOut,
  Menu,
  Home,
  FileEdit,
  Briefcase,
  Mail,
  BarChart,
  BookOpen,
  Bell,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "My Resumes", href: "/dashboard/resumes", icon: FileText },
    { name: "Cover Letters", href: "/dashboard/cover-letters", icon: Mail },
    { name: "Job Applications", href: "/dashboard/applications", icon: Briefcase },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Interview Prep", href: "/dashboard/interview-prep", icon: BookOpen },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="flex h-16 items-center border-b px-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileNavOpen(false)}>
                    <FileText className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">ResumeAI</span>
                  </Link>
                </div>
                <nav className="grid gap-1 p-4">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileNavOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                          isActive ? "bg-accent text-accent-foreground" : "transparent",
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold hidden md:inline-block">ResumeAI</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/create">
                <FileEdit className="h-5 w-5" />
                <span className="sr-only">Create Resume</span>
              </Link>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar Navigation (desktop) */}
        <div className="hidden border-r bg-muted/40 lg:block lg:w-64">
          <nav className="grid gap-1 p-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    isActive ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
            <div className="mt-4 pt-4 border-t">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
                <Link href="/">
                  <LogOut className="mr-3 h-4 w-4" />
                  Sign out
                </Link>
              </Button>
            </div>
          </nav>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
