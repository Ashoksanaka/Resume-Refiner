"use client"

import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

interface ResumeTemplatesProps {
  selectedTemplate: string
  onSelectTemplate: (template: string) => void
}

export function ResumeTemplates({ selectedTemplate, onSelectTemplate }: ResumeTemplatesProps) {
  const templates = [
    {
      id: "professional",
      name: "Professional",
      description: "A clean, professional template suitable for corporate roles",
    },
    {
      id: "modern",
      name: "Modern",
      description: "A contemporary design with a creative touch",
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "A simple, straightforward layout that focuses on content",
    },
    {
      id: "executive",
      name: "Executive",
      description: "An elegant design for senior positions and leadership roles",
    },
  ]

  return (
    <RadioGroup
      value={selectedTemplate}
      onValueChange={onSelectTemplate}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      {templates.map((template) => (
        <div key={template.id} className="relative">
          <RadioGroupItem value={template.id} id={template.id} className="sr-only" />
          <Label htmlFor={template.id} className="cursor-pointer">
            <Card
              className={`overflow-hidden transition-all ${
                selectedTemplate === template.id ? "ring-2 ring-primary" : "hover:border-primary/50"
              }`}
            >
              <CardContent className="p-0">
                <div className="aspect-[3/4] bg-muted">
                  {/* Template Preview Image */}
                  <div className="h-full w-full bg-gradient-to-br from-muted to-muted-foreground/20 p-2">
                    <div className="h-3 w-1/2 rounded-sm bg-muted-foreground/30 mb-2" />
                    <div className="h-2 w-3/4 rounded-sm bg-muted-foreground/20 mb-4" />
                    <div className="space-y-1">
                      <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
                      <div className="h-1 w-5/6 rounded-sm bg-muted-foreground/20" />
                      <div className="h-1 w-4/6 rounded-sm bg-muted-foreground/20" />
                    </div>
                    <div className="mt-3 space-y-1">
                      <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
                      <div className="h-1 w-5/6 rounded-sm bg-muted-foreground/20" />
                      <div className="h-1 w-4/6 rounded-sm bg-muted-foreground/20" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{template.name}</h3>
                  <p className="text-xs text-muted-foreground">{template.description}</p>
                </div>
              </CardContent>
            </Card>
            {selectedTemplate === template.id && (
              <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-4 w-4" />
              </div>
            )}
          </Label>
        </div>
      ))}
    </RadioGroup>
  )
}
