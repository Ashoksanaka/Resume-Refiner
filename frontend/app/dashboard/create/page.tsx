"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ResumePreview } from "@/components/resume-preview"
import { ResumeTemplates } from "@/components/resume-templates"
import { ArrowLeft, ArrowRight, FileText, Loader2 } from "lucide-react"

export default function CreateResumePage() {
  const [activeTab, setActiveTab] = useState("job-description")
  const [isGenerating, setIsGenerating] = useState(false)
  const [jobDescription, setJobDescription] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("professional")
  const [resumeGenerated, setResumeGenerated] = useState(false)

  const handleGenerate = async () => {
    if (!jobDescription.trim()) return

    setIsGenerating(true)

    // Simulate API call to generate resume
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsGenerating(false)
    setResumeGenerated(true)
    setActiveTab("preview")
  }

  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Create Resume</h1>
        <p className="text-muted-foreground">Generate an ATS-optimized resume tailored to your target job</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="job-description">Job Description</TabsTrigger>
          <TabsTrigger value="template" disabled={!jobDescription.trim()}>
            Template
          </TabsTrigger>
          <TabsTrigger value="preview" disabled={!resumeGenerated}>
            Preview & Download
          </TabsTrigger>
        </TabsList>

        {/* Job Description Tab */}
        <TabsContent value="job-description" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input id="job-title" placeholder="e.g. Software Engineer, Product Manager" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="e.g. Google, Amazon" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-description">Paste the job description</Label>
                  <Textarea
                    id="job-description"
                    placeholder="Paste the full job description here..."
                    rows={10}
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    This helps us tailor your resume to match the job requirements
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button onClick={() => setActiveTab("template")} disabled={!jobDescription.trim()} className="gap-1">
                    Choose Template
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Template Selection Tab */}
        <TabsContent value="template" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Choose a Template</h2>
                  <p className="text-sm text-muted-foreground">
                    Select a template that best suits your professional style
                  </p>
                </div>

                <ResumeTemplates selectedTemplate={selectedTemplate} onSelectTemplate={setSelectedTemplate} />

                <Separator />

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveTab("job-description")} className="gap-1">
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleGenerate} disabled={isGenerating}>
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Generate Resume"
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preview Tab */}
        <TabsContent value="preview" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Preview Your Resume</h2>
                  <p className="text-sm text-muted-foreground">
                    Review your generated resume and make any necessary adjustments
                  </p>
                </div>

                <ResumePreview template={selectedTemplate} />

                <Separator />

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveTab("template")} className="gap-1">
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="gap-1">
                      <FileText className="h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button>Save Resume</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
