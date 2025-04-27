import Link from "next/link"
import { FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-10">
      <div className="container flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-2 md:gap-4">
          <Link href="/" className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ResumeAI</span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
            Create ATS-friendly resumes that get you noticed by recruiters and hiring managers.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t pt-6">
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} ResumeAI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
