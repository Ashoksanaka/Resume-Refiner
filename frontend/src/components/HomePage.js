import React from 'react';
import { FaUserPlus, FaFileAlt, FaMagic, FaChartLine, FaLinkedin, FaMobileAlt, FaGlobe, FaComments } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">ResumePro</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Features</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Resources</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</a>
              <div className="flex space-x-2">
                <a href="/login" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">Log In</a>
                <a href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Build a Resume That Gets You Hired
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create an ATS-friendly resume in minutes with our expert-approved templates and get hired faster.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="/signup" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center font-medium">
                Get Started - It's Free
              </a>
              <a href="#" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-center font-medium">
                See Examples
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional resume" 
              className="rounded-lg shadow-xl border border-gray-200"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-2">
                  <FaFileAlt className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">ATS Score</p>
                  <p className="text-xs text-gray-500">98% Match</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need for Job Search Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From resume building to interview prep, we've got you covered at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaFileAlt className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">ATS-Optimized Resumes</h3>
              <p className="text-gray-600">
                Beat applicant tracking systems with resumes designed to get noticed.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaMagic className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Smart Customization</h3>
              <p className="text-gray-600">
                Tailor your resume for each job with our guided customization.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-green-600 text-xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Application Tracking</h3>
              <p className="text-gray-600">
                Track your job applications and follow-ups in one place.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaLinkedin className="text-yellow-600 text-xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">LinkedIn Import</h3>
              <p className="text-gray-600">
                Import your profile to quickly build your resume.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create your perfect resume in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Create Your Profile</h3>
              <p className="text-gray-600">
                Fill in your work history, education, skills, and achievements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Choose a Template</h3>
              <p className="text-gray-600">
                Select from our professional, ATS-friendly resume designs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Download & Apply</h3>
              <p className="text-gray-600">
                Download in multiple formats and start applying for jobs!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our users
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600">Software Engineer at Google</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "ResumePro helped me create a resume that actually got me interviews. I went from no responses to multiple offers in just a few weeks!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/45.jpg" 
                  alt="Michael Chen" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900">Michael Chen</h4>
                  <p className="text-gray-600">Marketing Manager at Airbnb</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The ATS optimization feature is a game-changer. I was able to tailor my resume for each application and saw my response rate triple."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">More Than Just a Resume Builder</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our comprehensive toolkit gives you everything you need for your job search
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start">
              <FaMobileAlt className="mt-1 mr-3 text-blue-200" />
              <div>
                <h3 className="font-medium mb-1">Mobile Friendly</h3>
                <p className="text-sm opacity-80">Build and edit on any device</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaGlobe className="mt-1 mr-3 text-blue-200" />
              <div>
                <h3 className="font-medium mb-1">Multilingual</h3>
                <p className="text-sm opacity-80">Support for multiple languages</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaComments className="mt-1 mr-3 text-blue-200" />
              <div>
                <h3 className="font-medium mb-1">Expert Feedback</h3>
                <p className="text-sm opacity-80">Get professional reviews</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaFileAlt className="mt-1 mr-3 text-blue-200" />
              <div>
                <h3 className="font-medium mb-1">Cover Letters</h3>
                <p className="text-sm opacity-80">Matching cover letter generator</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Perfect Resume?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of professionals who've accelerated their job search with ResumePro
          </p>
          <a 
            href="/signup" 
            className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-block font-medium text-lg"
          >
            Get Started for Free
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">ResumePro</h3>
              <p className="text-gray-400">
                The smart way to build resumes that get you hired.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Advice</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Interview Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 ResumePro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;