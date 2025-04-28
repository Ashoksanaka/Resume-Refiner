import React, { useState } from 'react';
import { FaBuilding, FaUserTie, FaFileAlt, FaCopy, FaCheck, FaArrowLeft } from 'react-icons/fa';

const CoverLetterGenerationPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobRole: '',
    jobDescription: '',
    additionalInfo: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [step, setStep] = useState(1); // 1: Form, 2: Result

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.jobRole || !formData.jobDescription) {
      alert('Please fill in all required fields');
      return;
    }

    setIsGenerating(true);

    // Simulate API call to generate cover letter
    setTimeout(() => {
      const coverLetter = generateCoverLetter(formData);
      setGeneratedCoverLetter(coverLetter);
      setIsGenerating(false);
      setStep(2);
    }, 2000);
  };

  const generateCoverLetter = (data) => {
    return `Dear Hiring Manager,

I am excited to apply for the ${data.jobRole} position at ${data.companyName}. ${data.jobDescription}

${data.additionalInfo ? data.additionalInfo + '\n\n' : ''}With my skills and experience, I am confident I would be a valuable asset to your team. I welcome the opportunity to discuss how my qualifications align with your needs.

Sincerely,
[Your Name]
[Your Contact Information]`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCoverLetter);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleNewLetter = () => {
    setFormData({
      companyName: '',
      jobRole: '',
      jobDescription: '',
      additionalInfo: ''
    });
    setGeneratedCoverLetter('');
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            {step === 2 && (
              <button 
                onClick={handleBack}
                className="mr-4 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaArrowLeft className="h-5 w-5" />
              </button>
            )}
            <h1 className="text-xl font-bold text-gray-900">
              {step === 1 ? 'Generate Cover Letter' : 'Your Cover Letter'}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {step === 1 ? (
          <div className="bg-white shadow rounded-lg p-6">
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  <FaBuilding className="inline mr-2" />
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter the company name"
                  required
                />
              </div>

              <div>
                <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700 mb-1">
                  <FaUserTie className="inline mr-2" />
                  Job Role/Title *
                </label>
                <input
                  type="text"
                  id="jobRole"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter the job role you're applying for"
                  required
                />
              </div>

              <div>
                <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  <FaFileAlt className="inline mr-2" />
                  Job Description *
                </label>
                <textarea
                  id="jobDescription"
                  name="jobDescription"
                  rows={6}
                  value={formData.jobDescription}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Paste the job description or describe the role"
                  required
                />
                <p className="mt-1 text-sm text-gray-500">
                  The more details you provide, the better we can tailor your cover letter.
                </p>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Any specific points you want to include in your cover letter"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Example: "I particularly admire your company's work on [specific project]."
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
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
                    'Generate Cover Letter'
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">Your Custom Cover Letter</h2>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isCopied ? (
                    <>
                      <FaCheck className="mr-2" /> Copied!
                    </>
                  ) : (
                    <>
                      <FaCopy className="mr-2" /> Copy Text
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="p-6 bg-gray-50">
              <div className="bg-white p-6 border border-gray-200 rounded-md">
                <pre className="whitespace-pre-wrap font-sans text-gray-800">{generatedCoverLetter}</pre>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between">
              <button
                onClick={handleBack}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Edit Details
              </button>
              <button
                onClick={handleNewLetter}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Generate New Letter
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CoverLetterGenerationPage;