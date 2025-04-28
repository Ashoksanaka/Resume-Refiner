import React, { useState } from 'react';
import { FaFileAlt, FaMagic, FaComment, FaDownload, FaArrowLeft } from 'react-icons/fa';

const ResumeGenerationPage = () => {
  // Sample resume templates data
  const templates = [
    {
      id: 1,
      name: 'Professional Blue',
      description: 'Clean and professional design with blue accents',
      thumbnail: 'https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      category: 'Professional'
    },
    {
      id: 2,
      name: 'Modern Red',
      description: 'Contemporary design with red highlights',
      thumbnail: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      category: 'Modern'
    },
    {
      id: 3,
      name: 'Creative',
      description: 'Unique layout for creative professionals',
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      category: 'Creative'
    },
    {
      id: 4,
      name: 'Executive',
      description: 'Elegant design for senior professionals',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      category: 'Executive'
    },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [comments, setComments] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResume, setGeneratedResume] = useState(null);
  const [step, setStep] = useState(1); // 1: Select template, 2: Enter details, 3: Preview

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setStep(2);
  };

  const handleGenerateResume = () => {
    if (!jobDescription) {
      alert('Please enter a job description');
      return;
    }

    setIsGenerating(true);
    
    // Simulate resume generation
    setTimeout(() => {
      setGeneratedResume({
        url: '#',
        fileName: `Resume-${selectedTemplate.name}-${Date.now()}.pdf`,
        score: 92,
        suggestions: [
          'Optimized keywords for ATS compatibility',
          'Adjusted skills section to match job requirements',
          'Reordered experience to highlight relevant positions'
        ]
      });
      setIsGenerating(false);
      setStep(3);
    }, 2000);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            {step > 1 && (
              <button 
                onClick={handleBack}
                className="mr-4 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaArrowLeft className="h-5 w-5" />
              </button>
            )}
            <h1 className="text-xl font-bold text-gray-900">
              {step === 1 && 'Select Resume Template'}
              {step === 2 && 'Customize Your Resume'}
              {step === 3 && 'Your Generated Resume'}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Template Selection */}
        {step === 1 && (
          <div className="space-y-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Choose a Template</h2>
              <p className="text-gray-600 mb-6">Select a resume template that best fits your style and the job you're applying for.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {templates.map(template => (
                  <div 
                    key={template.id} 
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${selectedTemplate?.id === template.id ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-200 hover:border-blue-300'}`}
                    onClick={() => handleTemplateSelect(template)}
                  >
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img 
                        src={template.thumbnail} 
                        alt={template.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-500">{template.description}</p>
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800">
                        {template.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Job Description Input */}
        {step === 2 && selectedTemplate && (
          <div className="space-y-8">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Selected Template: {selectedTemplate.name}</h2>
                <div className="flex items-center">
                  <img 
                    src={selectedTemplate.thumbnail} 
                    alt={selectedTemplate.name} 
                    className="h-16 w-16 rounded-md object-cover mr-4"
                  />
                  <p className="text-gray-600">{selectedTemplate.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  <FaFileAlt className="inline mr-2" />
                  Job Description
                </label>
                <textarea
                  id="jobDescription"
                  rows={8}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-4"
                  placeholder="Paste the job description here. Our AI will analyze it and optimize your resume accordingly..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
                <p className="mt-2 text-sm text-gray-500">
                  The more details you provide, the better we can tailor your resume.
                </p>
              </div>

              <div className="mb-6">
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                  <FaComment className="inline mr-2" />
                  Additional Comments (Optional)
                </label>
                <textarea
                  id="comments"
                  rows={4}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-4"
                  placeholder="Any specific instructions or areas you want to highlight in your resume..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Example: "Emphasize my leadership experience" or "Focus on my Python skills"
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleGenerateResume}
                  disabled={isGenerating}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <FaMagic className="mr-2" /> Generate Resume
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Generated Resume */}
        {step === 3 && generatedResume && (
          <div className="space-y-8">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-2">Your Resume is Ready!</h2>
                  <p className="text-gray-600">We've optimized your resume for the job description you provided.</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    ATS Score: {generatedResume.score}%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="aspect-w-8 aspect-h-11">
                      <iframe 
                        src={generatedResume.url} 
                        className="w-full h-full" 
                        title="Generated Resume Preview"
                      >
                        <p>Your browser does not support iframes. Please download the resume to view it.</p>
                      </iframe>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h3 className="text-md font-medium text-blue-800 mb-2">Optimization Suggestions</h3>
                    <ul className="space-y-2">
                      {generatedResume.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-2 text-sm text-blue-700">{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <FaDownload className="mr-2" /> Download PDF
                    </button>
                    <button className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Make Edits
                    </button>
                    <button 
                      onClick={() => setStep(1)}
                      className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Create Another Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ResumeGenerationPage;