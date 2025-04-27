import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Plus, Briefcase, Mail, BarChart4, Clock, Eye } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your job search progress.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Create Resume</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Create a new ATS-optimized resume</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/dashboard/create">
                <Plus className="mr-2 h-4 w-4" />
                New Resume
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Create Cover Letter</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Generate a tailored cover letter</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/dashboard/cover-letters/create">
                <Plus className="mr-2 h-4 w-4" />
                New Cover Letter
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Track Application</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Add a new job application to track</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/dashboard/applications/create">
                <Plus className="mr-2 h-4 w-4" />
                Add Application
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Resumes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+4 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews</CardTitle>
            <BarChart4 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">+1 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25%</div>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Software Engineer Resume Created</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />2 days ago
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>You created a new resume tailored for Software Engineer positions.</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/resumes/1">View Resume</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/dashboard/resumes/1/edit">Edit</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Applied to Frontend Developer at TechCorp</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />3 days ago
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                You submitted an application for Frontend Developer position at TechCorp.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/applications/1">View Application</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/dashboard/applications/1/edit">Update Status</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Cover Letter Generated</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />4 days ago
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                You generated a cover letter for the Product Manager position at InnovateTech.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/cover-letters/1">View Cover Letter</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/dashboard/cover-letters/1/edit">Edit</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Upcoming Interviews */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Upcoming Interviews</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-24 text-muted-foreground">
              No upcoming interviews scheduled
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
