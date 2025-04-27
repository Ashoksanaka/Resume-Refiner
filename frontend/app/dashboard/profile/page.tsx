"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Loader2, Plus, Trash2, Upload, Briefcase, GraduationCap, Award, Code } from "lucide-react"

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("personal")

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and resume details</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Upload className="h-4 w-4" />
                    Upload photo
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                    <Trash2 className="h-4 w-4" />
                    Remove photo
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="San Francisco, CA" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headline">Professional Headline</Label>
                <Input id="headline" defaultValue="Senior Software Engineer" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea
                  id="summary"
                  rows={4}
                  defaultValue="Experienced software engineer with 5+ years of experience in full-stack development. Proficient in JavaScript, React, Node.js, and cloud technologies."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn URL</Label>
                <Input id="linkedin" defaultValue="https://linkedin.com/in/johndoe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio/Website</Label>
                <Input id="portfolio" defaultValue="https://johndoe.dev" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="github">GitHub URL</Label>
                <Input id="github" defaultValue="https://github.com/johndoe" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Education Tab */}
        <TabsContent value="education" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Add your educational background and qualifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Existing Education Entry */}
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Computer Science, BSc</h3>
                      <p className="text-sm text-muted-foreground">Stanford University</p>
                      <p className="text-sm text-muted-foreground">2015 - 2019</p>
                      <p className="mt-2 text-sm">
                        Graduated with honors. Specialized in artificial intelligence and machine learning.
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full gap-1">
                <Plus className="h-4 w-4" />
                Add Education
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Experience Tab */}
        <TabsContent value="experience" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>Add your professional experience and work history</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Existing Experience Entry */}
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Senior Software Engineer</h3>
                      <p className="text-sm text-muted-foreground">TechCorp Inc.</p>
                      <p className="text-sm text-muted-foreground">Jan 2020 - Present</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                        <li>Led the development of a microservices architecture</li>
                        <li>Improved application performance by 40%</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Software Engineer</h3>
                      <p className="text-sm text-muted-foreground">InnovateTech</p>
                      <p className="text-sm text-muted-foreground">Jun 2017 - Dec 2019</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                        <li>Developed and maintained web applications using React and Node.js</li>
                        <li>Implemented CI/CD pipelines to streamline deployment processes</li>
                        <li>Collaborated with product managers to define feature requirements</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full gap-1">
                <Plus className="h-4 w-4" />
                Add Experience
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Add your technical and professional skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Technical Skills</Label>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm">
                      JavaScript
                      <Button variant="ghost" size="icon" className="h-5 w-5 ml-1 p-0">
                        <Trash2 className="h-3 w-3" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    <div className="flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm">
                      React
                      <Button variant="ghost" size="icon" className="h-5 w-5 ml-1 p-0">
                        <Trash2 className="h-3 w-3" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    <div className="flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm">
                      Node.js
                      <Button variant="ghost" size="icon" className="h-5 w-5 ml-1 p-0">
                        <Trash2 className="h-3 w-3" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    <div className="flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm">
                      TypeScript
                      <Button variant="ghost" size="icon" className="h-5 w-5 ml-1 p-0">
                        <Trash2 className="h-3 w-3" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    <div className="flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm">
                      AWS
                      <Button variant="ghost" size="icon" className="h-5 w-5 ml-1 p-0">
                        <Trash2 className="h-3 w-3" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Plus className="h-3 w-3" />
                      Add Skill
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Soft Skills</Label>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm">
                      Leadership
                      <Button variant="ghost" size="icon" className="h-5 w-5 ml-1 p-0">
                        <Trash2 className="h-3 w-3" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    <div className="flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm">
                      Communication
                      <Button variant="ghost" size="icon" className="h-5 w-5 ml-1 p-0">
                        <Trash2 className="h-3 w-3" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    <div className="flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm">
                      Problem Solving
                      <Button variant="ghost" size="icon" className="h-5 w-5 ml-1 p-0">
                        <Trash2 className="h-3 w-3" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Plus className="h-3 w-3" />
                      Add Skill
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Certifications</Label>
                <div className="space-y-2">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">AWS Certified Solutions Architect</h3>
                          <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                          <p className="text-sm text-muted-foreground">Issued: Jan 2022 • Expires: Jan 2025</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full gap-1">
                    <Plus className="h-4 w-4" />
                    Add Certification
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Add your personal and professional projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">E-commerce Platform</h3>
                      <p className="text-sm text-muted-foreground">2021 - 2022</p>
                      <p className="mt-2 text-sm">
                        Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented
                        features like user authentication, product catalog, shopping cart, and payment processing.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="rounded-md bg-muted px-2 py-1 text-xs">React</span>
                        <span className="rounded-md bg-muted px-2 py-1 text-xs">Node.js</span>
                        <span className="rounded-md bg-muted px-2 py-1 text-xs">MongoDB</span>
                        <span className="rounded-md bg-muted px-2 py-1 text-xs">Stripe</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">AI-powered Task Manager</h3>
                      <p className="text-sm text-muted-foreground">2020</p>
                      <p className="mt-2 text-sm">
                        Created a task management application with AI features to prioritize and categorize tasks
                        automatically. Used machine learning algorithms to analyze task patterns and suggest
                        optimizations.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="rounded-md bg-muted px-2 py-1 text-xs">Python</span>
                        <span className="rounded-md bg-muted px-2 py-1 text-xs">TensorFlow</span>
                        <span className="rounded-md bg-muted px-2 py-1 text-xs">Flask</span>
                        <span className="rounded-md bg-muted px-2 py-1 text-xs">React</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full gap-1">
                <Plus className="h-4 w-4" />
                Add Project
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
