import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Download, Eye, Pencil, Copy, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ResumesPage() {
  const resumes = [
    {
      id: 1,
      title: "Software Engineer Resume",
      lastUpdated: "2 days ago",
      template: "Professional",
      jobMatches: 3,
    },
    {
      id: 2,
      title: "Product Manager Resume",
      lastUpdated: "1 week ago",
      template: "Executive",
      jobMatches: 1,
    },
    {
      id: 3,
      title: "UX Designer Resume",
      lastUpdated: "2 weeks ago",
      template: "Modern",
      jobMatches: 0,
    },
  ]

  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">My Resumes</h1>
        <p className="text-muted-foreground">Manage and organize all your resumes in one place</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="outline">All</Button>
          <Button variant="outline">Recent</Button>
          <Button variant="outline">Shared</Button>
        </div>
        <Button asChild>
          <Link href="/dashboard/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Resume
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resumes.map((resume) => (
          <Card key={resume.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{resume.title}</CardTitle>
                <Badge variant="outline">{resume.template}</Badge>
              </div>
              <CardDescription>Last updated: {resume.lastUpdated}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[3/4] bg-muted p-4">
                {/* Resume Preview */}
                <div className="h-full w-full bg-white p-2 shadow-sm">
                  <div className="h-3 w-1/2 rounded-sm bg-gray-200 mb-2" />
                  <div className="h-2 w-3/4 rounded-sm bg-gray-100 mb-4" />
                  <div className="space-y-1">
                    <div className="h-1 w-full rounded-sm bg-gray-100" />
                    <div className="h-1 w-5/6 rounded-sm bg-gray-100" />
                    <div className="h-1 w-4/6 rounded-sm bg-gray-100" />
                  </div>
                  <div className="mt-3 space-y-1">
                    <div className="h-1 w-full rounded-sm bg-gray-100" />
                    <div className="h-1 w-5/6 rounded-sm bg-gray-100" />
                    <div className="h-1 w-4/6 rounded-sm bg-gray-100" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <div className="text-sm text-muted-foreground">
                {resume.jobMatches > 0 ? (
                  <span>
                    Matches {resume.jobMatches} job{resume.jobMatches > 1 ? "s" : ""}
                  </span>
                ) : (
                  <span>No job matches</span>
                )}
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/dashboard/resumes/${resume.id}`}>
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/dashboard/resumes/${resume.id}/edit`}>
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Duplicate</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
