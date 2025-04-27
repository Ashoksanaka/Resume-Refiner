import { Button } from "@/components/ui/button"
import { Edit, Download } from "lucide-react"

interface ResumePreviewProps {
  template: string
}

export function ResumePreview({ template }: ResumePreviewProps) {
  return (
    <div className="space-y-4">
      <div className="relative mx-auto max-w-[600px] rounded-md border bg-white p-8 shadow-sm">
        {/* Resume Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-muted-foreground">Senior Software Engineer</p>
          <div className="mt-2 flex justify-center gap-4 text-sm text-muted-foreground">
            <span>San Francisco, CA</span>
            <span>john.doe@example.com</span>
            <span>(555) 123-4567</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold border-b pb-1">Professional Summary</h2>
          <p className="text-sm">
            Experienced software engineer with 5+ years of expertise in full-stack development. Proficient in
            JavaScript, React, Node.js, and cloud technologies. Passionate about creating efficient, scalable, and
            user-friendly applications.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold border-b pb-1">Work Experience</h2>

          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">Senior Software Engineer</h3>
              <span className="text-sm text-muted-foreground">Jan 2020 - Present</span>
            </div>
            <p className="text-sm font-medium">TechCorp Inc.</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              <li>Led the development of a microservices architecture that improved system reliability by 30%</li>
              <li>Optimized application performance resulting in 40% faster load times and improved user experience</li>
              <li>Mentored junior developers and conducted code reviews to maintain high code quality standards</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between">
              <h3 className="font-medium">Software Engineer</h3>
              <span className="text-sm text-muted-foreground">Jun 2017 - Dec 2019</span>
            </div>
            <p className="text-sm font-medium">InnovateTech</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              <li>Developed and maintained web applications using React and Node.js</li>
              <li>Implemented CI/CD pipelines to streamline deployment processes</li>
              <li>Collaborated with product managers to define feature requirements</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold border-b pb-1">Education</h2>
          <div className="flex justify-between">
            <h3 className="font-medium">Computer Science, BSc</h3>
            <span className="text-sm text-muted-foreground">2015 - 2019</span>
          </div>
          <p className="text-sm">Stanford University</p>
          <p className="mt-1 text-sm">
            Graduated with honors. Specialized in artificial intelligence and machine learning.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="mb-2 text-lg font-semibold border-b pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-muted px-2 py-1 text-xs">JavaScript</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">React</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">Node.js</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">TypeScript</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">AWS</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">Docker</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">CI/CD</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">Git</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">REST APIs</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">MongoDB</span>
          </div>
        </div>

        {/* Edit Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100">
          <Button variant="secondary" className="gap-1">
            <Edit className="h-4 w-4" />
            Edit Content
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Button variant="outline" className="gap-1">
          <Download className="h-4 w-4" />
          Download as PDF
        </Button>
        <Button variant="outline" className="gap-1">
          <Download className="h-4 w-4" />
          Download as DOCX
        </Button>
        <Button variant="outline" className="gap-1">
          <Download className="h-4 w-4" />
          Download as TXT
        </Button>
      </div>
    </div>
  )
}
