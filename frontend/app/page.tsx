import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Briefcase, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Create ATS-Friendly Resumes That Get You Hired
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Generate tailored resumes that pass Applicant Tracking Systems and highlight your skills for any job
                    description.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register" passHref>
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/login" passHref>
                    <Button size="lg" variant="outline">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-xl border bg-white p-4 shadow-lg dark:bg-gray-950">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-xl" />
                  <div className="relative h-full w-full rounded-md bg-white dark:bg-gray-900 p-4 flex flex-col">
                    <div className="h-6 w-24 rounded bg-gray-200 dark:bg-gray-700 mb-4" />
                    <div className="flex-1 space-y-3">
                      <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Features That Set You Apart
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform provides everything you need to create professional, ATS-friendly resumes
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">ATS-Optimized Templates</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Our templates are designed to pass through Applicant Tracking Systems with ease.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Job Description Analysis</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Tailor your resume to specific job descriptions with our AI-powered analysis.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Skill Assessment</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Identify and highlight your most relevant skills for each job application.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Application Tracking</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Keep track of all your job applications in one place with status updates.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Cover Letter Generator</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Create matching cover letters that complement your resume and highlight your qualifications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Multiple Export Formats</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Download your resume in multiple formats including PDF, Word, and plain text.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how our platform has helped job seekers land their dream jobs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    "I was struggling to get interviews until I used this platform. The ATS optimization made all the
                    difference. I got 3 interviews in the first week!"
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    "The job description analysis feature helped me tailor my resume perfectly. I landed my dream job at
                    a Fortune 500 company!"
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    "As a career changer, I needed to highlight transferable skills. This platform made it easy to
                    showcase my relevant experience."
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Jessica Rodriguez</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Land Your Dream Job?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create your first ATS-optimized resume in minutes
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register" passHref>
                  <Button size="lg" variant="secondary" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
