import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Download, Eye, Pencil, Copy, Trash2, Calendar } from "lucide-react"

export default function CoverLettersPage() {
  const coverLetters = [
    {
      id: 1,
      title: "Frontend Developer - TechCorp",
      lastUpdated: "2 days ago",
      createdAt: "May 15, 2023",
    },
    {
      id: 2,
      title: "Product Manager - InnovateTech",
      lastUpdated: "1 week ago",
      createdAt: "May 5, 2023",
    },
    {
      id: 3,
      title: "UX Designer - DesignStudio",
      lastUpdated: "2 weeks ago",
      createdAt: "April 28, 2023",
    },
  ]

  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Cover Letters</h1>
        <p className="text-muted-foreground">Create and manage personalized cover letters for your job applications</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="outline">All</Button>
          <Button variant="outline">Recent</Button>
        </div>
        <Button asChild>
          <Link href="/dashboard/cover-letters/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Cover Letter
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coverLetters.map((letter) => (
          <Card key={letter.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{letter.title}</CardTitle>
              <CardDescription>Last updated: {letter.lastUpdated}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[1/1.3] bg-muted p-4">
                {/* Cover Letter Preview */}
                <div className="h-full w-full bg-white p-4 shadow-sm">
                  <div className="h-2 w-1/2 rounded-sm bg-gray-200 mb-4" />
                  <div className="h-2 w-3/4 rounded-sm bg-gray-100 mb-6" />
                  <div className="space-y-2">
                    <div className="h-1 w-full rounded-sm bg-gray-100" />
                    <div className="h-1 w-full rounded-sm bg-gray-100" />
                    <div className="h-1 w-5/6 rounded-sm bg-gray-100" />
                    <div className="h-1 w-full rounded-sm bg-gray-100" />
                    <div className="h-1 w-4/6 rounded-sm bg-gray-100" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-1 w-full rounded-sm bg-gray-100" />
                    <div className="h-1 w-full rounded-sm bg-gray-100" />
                    <div className="h-1 w-5/6 rounded-sm bg-gray-100" />
                    <div className="h-1 w-full rounded-sm bg-gray-100" />
                    <div className="h-1 w-4/6 rounded-sm bg-gray-100" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-1 w-full rounded-sm bg-gray-100" />
                    <div className="h-1 w-5/6 rounded-sm bg-gray-100" />
                    <div className="h-1 w-4/6 rounded-sm bg-gray-100" />
                  </div>
                  <div className="mt-6">
                    <div className="h-2 w-1/4 rounded-sm bg-gray-200 mb-1" />
                    <div className="h-1 w-1/3 rounded-sm bg-gray-100" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <div className="flex items-center text-sm text-muted-foreground gap-1">
                <Calendar className="h-3 w-3" />
                Created: {letter.createdAt}
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/dashboard/cover-letters/${letter.id}`}>
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/dashboard/cover-letters/${letter.id}/edit`}>
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
