import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Building, Calendar, Clock, FileText, Mail } from "lucide-react"

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      company: "TechCorp",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      status: "Interview",
      appliedDate: "May 15, 2023",
      lastActivity: "2 days ago",
      resumeUsed: "Software Engineer Resume",
      coverLetterUsed: true,
    },
    {
      id: 2,
      company: "InnovateTech",
      position: "Full Stack Engineer",
      location: "Remote",
      status: "Applied",
      appliedDate: "May 10, 2023",
      lastActivity: "1 week ago",
      resumeUsed: "Software Engineer Resume",
      coverLetterUsed: true,
    },
    {
      id: 3,
      company: "StartupXYZ",
      position: "React Developer",
      location: "New York, NY",
      status: "Rejected",
      appliedDate: "April 28, 2023",
      lastActivity: "2 weeks ago",
      resumeUsed: "Software Engineer Resume",
      coverLetterUsed: false,
    },
    {
      id: 4,
      company: "Enterprise Solutions",
      position: "Software Engineer II",
      location: "Austin, TX",
      status: "Offer",
      appliedDate: "April 15, 2023",
      lastActivity: "3 days ago",
      resumeUsed: "Software Engineer Resume",
      coverLetterUsed: true,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Interview":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Offer":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Job Applications</h1>
        <p className="text-muted-foreground">Track and manage your job applications in one place</p>
      </div>

      <div className="flex justify-between items-center">
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="applied">Applied</TabsTrigger>
            <TabsTrigger value="interview">Interview</TabsTrigger>
            <TabsTrigger value="offer">Offer</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">Showing {applications.length} applications</div>
            <Button asChild>
              <Link href="/dashboard/applications/create">
                <Plus className="mr-2 h-4 w-4" />
                Add Application
              </Link>
            </Button>
          </div>

          <TabsContent value="all" className="mt-4">
            <div className="space-y-4">
              {applications.map((application) => (
                <Card key={application.id}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <CardTitle className="text-lg">{application.position}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          {application.company} • {application.location}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Applied: {application.appliedDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Last activity: {application.lastActivity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Resume: {application.resumeUsed}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-2">
                      {application.coverLetterUsed ? (
                        <Badge variant="outline" className="gap-1">
                          <Mail className="h-3 w-3" />
                          Cover Letter
                        </Badge>
                      ) : null}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/applications/${application.id}`}>View Details</Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={`/dashboard/applications/${application.id}/edit`}>Update Status</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applied" className="mt-4">
            <div className="space-y-4">
              {applications
                .filter((app) => app.status === "Applied")
                .map((application) => (
                  <Card key={application.id}>
                    <CardHeader className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <CardTitle className="text-lg">{application.position}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <Building className="h-3 w-3" />
                            {application.company} • {application.location}
                          </CardDescription>
                        </div>
                        <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Applied: {application.appliedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Last activity: {application.lastActivity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Resume: {application.resumeUsed}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex items-center gap-2">
                        {application.coverLetterUsed ? (
                          <Badge variant="outline" className="gap-1">
                            <Mail className="h-3 w-3" />
                            Cover Letter
                          </Badge>
                        ) : null}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/dashboard/applications/${application.id}`}>View Details</Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={`/dashboard/applications/${application.id}/edit`}>Update Status</Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Similar content for other tabs (interview, offer, rejected) */}
          <TabsContent value="interview" className="mt-4">
            <div className="space-y-4">
              {applications
                .filter((app) => app.status === "Interview")
                .map((application) => (
                  <Card key={application.id}>
                    {/* Same card content structure as above */}
                    <CardHeader className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <CardTitle className="text-lg">{application.position}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <Building className="h-3 w-3" />
                            {application.company} • {application.location}
                          </CardDescription>
                        </div>
                        <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Applied: {application.appliedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Last activity: {application.lastActivity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Resume: {application.resumeUsed}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex items-center gap-2">
                        {application.coverLetterUsed ? (
                          <Badge variant="outline" className="gap-1">
                            <Mail className="h-3 w-3" />
                            Cover Letter
                          </Badge>
                        ) : null}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/dashboard/applications/${application.id}`}>View Details</Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={`/dashboard/applications/${application.id}/edit`}>Update Status</Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
