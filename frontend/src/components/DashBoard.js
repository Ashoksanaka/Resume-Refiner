import React from 'react';
import { FaFileAlt, FaPlus, FaHistory, FaUserCircle, FaSearch, FaBell, FaQuestionCircle } from 'react-icons/fa';

const UserDashboard = () => {
  // Sample data - replace with actual user data from your backend
  const recentTemplates = [
    {
      id: 1,
      name: 'Professional Blue',
      type: 'resume',
      lastUsed: '2 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Modern Red',
      type: 'resume',
      lastUsed: '1 week ago',
      thumbnail: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Executive',
      type: 'cover letter',
      lastUsed: '3 weeks ago',
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
  ];

  const stats = {
    resumesCreated: 12,
    coverLettersCreated: 5,
    applicationsSubmitted: 8,
    atsScore: 92
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">ResumePro</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaSearch className="h-5 w-5" />
              </button>
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaBell className="h-5 w-5" />
              </button>
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaQuestionCircle className="h-5 w-5" />
              </button>
              <div className="ml-3 relative">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">John Doe</span>
                  <FaUserCircle className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-blue-600 rounded-lg shadow-md p-6 mb-8 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
          <p className="opacity-90">Ready to create your next job-winning resume or cover letter?</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Create Resume */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-2">Create a New Resume</h2>
                <p className="text-gray-600 mb-4">Build an ATS-optimized resume tailored for your dream job</p>
                <a
                  href="/resume/new"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FaPlus className="mr-2" /> Create Resume
                </a>
              </div>
              <FaFileAlt className="h-12 w-12 text-blue-400 opacity-30" />
            </div>
          </div>

          {/* Create Cover Letter */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-2">Create a Cover Letter</h2>
                <p className="text-gray-600 mb-4">Craft a compelling cover letter that complements your resume</p>
                <a
                  href="/cover-letter/new"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <FaPlus className="mr-2" /> Create Cover Letter
                </a>
              </div>
              <FaFileAlt className="h-12 w-12 text-purple-400 opacity-30" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-sm font-medium text-gray-500">Resumes Created</h3>
            <p className="text-2xl font-bold text-gray-900">{stats.resumesCreated}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-sm font-medium text-gray-500">Cover Letters</h3>
            <p className="text-2xl font-bold text-gray-900">{stats.coverLettersCreated}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-sm font-medium text-gray-500">Applications</h3>
            <p className="text-2xl font-bold text-gray-900">{stats.applicationsSubmitted}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-sm font-medium text-gray-500">Avg ATS Score</h3>
            <p className="text-2xl font-bold text-blue-600">{stats.atsScore}%</p>
          </div>
        </div>

        {/* Recent Templates */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Recently Used Templates</h2>
            <a href="/templates" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentTemplates.map((template) => (
              <div key={template.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="h-40 bg-gray-100 overflow-hidden">
                  <img 
                    src={template.thumbnail} 
                    alt={template.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-500 capitalize">{template.type}</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {template.lastUsed}
                    </span>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <a
                      href={`/${template.type}/edit/${template.id}`}
                      className="flex-1 inline-flex justify-center items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Use Again
                    </a>
                    <a
                      href={`/${template.type}/view/${template.id}`}
                      className="flex-1 inline-flex justify-center items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                <FaFileAlt className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">You created a new resume</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-purple-100 rounded-full p-2">
                <FaFileAlt className="h-5 w-5 text-purple-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">You downloaded a cover letter</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
                <FaHistory className="h-5 w-5 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">You updated your profile information</p>
                <p className="text-sm text-gray-500">3 days ago</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a href="/activity" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all activity
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;