import React, { useState } from 'react';
import { FaUser, FaGraduationCap, FaBriefcase, FaCode, FaCertificate, FaProjectDiagram, FaBook, FaStar, FaLanguage, FaUsers, FaPlus, FaTrash, FaUpload } from 'react-icons/fa';

const ProfileUpdatePage = () => {
  // Sample initial data - replace with actual user data
  const [profileData, setProfileData] = useState({
    profilePicture: '',
    bio: 'Experienced software engineer with 5+ years in web development',
    education: [
      {
        id: 1,
        institution: 'Stanford University',
        degree: 'Master of Computer Science',
        fieldOfStudy: 'Artificial Intelligence',
        startYear: '2015',
        endYear: '2017',
        description: 'Specialized in machine learning and NLP'
      }
    ],
    workExperience: [
      {
        id: 1,
        company: 'Tech Solutions Inc.',
        position: 'Senior Software Engineer',
        startDate: '2018',
        endDate: 'Present',
        description: 'Leading frontend development team'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    licenses: [
      {
        id: 1,
        name: 'AWS Certified Solutions Architect',
        issuingOrganization: 'Amazon Web Services',
        issueDate: '2020',
        expirationDate: '2023'
      }
    ],
    projects: [
      {
        id: 1,
        name: 'Resume Builder App',
        description: 'Built a React-based resume builder with ATS optimization',
        startDate: '2021',
        endDate: '2022'
      }
    ],
    courses: [
      {
        id: 1,
        name: 'Advanced React Patterns',
        provider: 'Frontend Masters',
        completionDate: '2021'
      }
    ],
    publications: [
      {
        id: 1,
        title: 'Modern Web Development Practices',
        publisher: 'Tech Journal',
        publicationDate: '2020',
        url: 'https://example.com/publication'
      }
    ],
    patents: [
      {
        id: 1,
        title: 'System for Automated Resume Optimization',
        patentNumber: 'US1234567',
        issueDate: '2021'
      }
    ],
    honors: [
      {
        id: 1,
        title: 'Employee of the Year',
        issuer: 'Tech Solutions Inc.',
        date: '2020'
      }
    ],
    languages: [
      {
        id: 1,
        language: 'English',
        proficiency: 'Native'
      },
      {
        id: 2,
        language: 'Spanish',
        proficiency: 'Intermediate'
      }
    ],
    organizations: [
      {
        id: 1,
        name: 'ACM - Association for Computing Machinery',
        position: 'Member',
        startDate: '2018',
        endDate: 'Present'
      }
    ]
  });

  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    startYear: '',
    endYear: '',
    description: ''
  });

  const [newWorkExperience, setNewWorkExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const [newSkill, setNewSkill] = useState('');
  const [newLicense, setNewLicense] = useState({
    name: '',
    issuingOrganization: '',
    issueDate: '',
    expirationDate: ''
  });

  const [activeSection, setActiveSection] = useState('basic');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({
          ...profileData,
          profilePicture: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      education: profileData.education.map(edu => 
        edu.id === id ? { ...edu, [name]: value } : edu
      )
    });
  };

  const addEducation = () => {
    if (newEducation.institution && newEducation.degree) {
      setProfileData({
        ...profileData,
        education: [...profileData.education, { ...newEducation, id: Date.now() }]
      });
      setNewEducation({
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startYear: '',
        endYear: '',
        description: ''
      });
    }
  };

  const removeEducation = (id) => {
    setProfileData({
      ...profileData,
      education: profileData.education.filter(edu => edu.id !== id)
    });
  };

  // Similar handlers for work experience, skills, licenses, etc.
  // Would follow the same pattern as education handlers

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the updated profile data to your backend
    console.log('Profile updated:', profileData);
    alert('Profile updated successfully!');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'basic':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
              <div className="flex items-center">
                <div className="mr-4">
                  {profileData.profilePicture ? (
                    <img 
                      src={profileData.profilePicture} 
                      alt="Profile" 
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                      <FaUser className="h-10 w-10 text-gray-400" />
                    </div>
                  )}
                </div>
                <label className="cursor-pointer">
                  <span className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <FaUpload className="mr-2" />
                    Upload Photo
                  </span>
                  <input 
                    type="file" 
                    className="sr-only" 
                    onChange={handleFileUpload}
                    accept="image/*"
                  />
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                value={profileData.bio}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            {profileData.education.map(edu => (
              <div key={edu.id} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Institution</label>
                    <input
                      type="text"
                      name="institution"
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(e, edu.id)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Degree</label>
                    <input
                      type="text"
                      name="degree"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(e, edu.id)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Field of Study</label>
                    <input
                      type="text"
                      name="fieldOfStudy"
                      value={edu.fieldOfStudy}
                      onChange={(e) => handleEducationChange(e, edu.id)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Start Year</label>
                      <input
                        type="text"
                        name="startYear"
                        value={edu.startYear}
                        onChange={(e) => handleEducationChange(e, edu.id)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">End Year</label>
                      <input
                        type="text"
                        name="endYear"
                        value={edu.endYear}
                        onChange={(e) => handleEducationChange(e, edu.id)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    name="description"
                    rows={2}
                    value={edu.description}
                    onChange={(e) => handleEducationChange(e, edu.id)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => removeEducation(edu.id)}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <FaTrash className="mr-1" /> Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Add New Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Institution</label>
                  <input
                    type="text"
                    name="institution"
                    value={newEducation.institution}
                    onChange={(e) => setNewEducation({...newEducation, institution: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Degree</label>
                  <input
                    type="text"
                    name="degree"
                    value={newEducation.degree}
                    onChange={(e) => setNewEducation({...newEducation, degree: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Field of Study</label>
                  <input
                    type="text"
                    name="fieldOfStudy"
                    value={newEducation.fieldOfStudy}
                    onChange={(e) => setNewEducation({...newEducation, fieldOfStudy: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Start Year</label>
                    <input
                      type="text"
                      name="startYear"
                      value={newEducation.startYear}
                      onChange={(e) => setNewEducation({...newEducation, startYear: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">End Year</label>
                    <input
                      type="text"
                      name="endYear"
                      value={newEducation.endYear}
                      onChange={(e) => setNewEducation({...newEducation, endYear: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  rows={2}
                  value={newEducation.description}
                  onChange={(e) => setNewEducation({...newEducation, description: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={addEducation}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FaPlus className="mr-2" /> Add Education
                </button>
              </div>
            </div>
          </div>
        );

      // Similar sections for work experience, skills, licenses, etc.
      // Each would follow the same pattern as the education section

      default:
        return <div>Select a section to edit</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Update Your Profile</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Sidebar Navigation */}
            <div className="md:w-1/4 bg-gray-50 p-4 border-r border-gray-200">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveSection('basic')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'basic' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaUser className="mr-3" />
                  Basic Information
                </button>
                <button
                  onClick={() => setActiveSection('education')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'education' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaGraduationCap className="mr-3" />
                  Education
                </button>
                <button
                  onClick={() => setActiveSection('work')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'work' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaBriefcase className="mr-3" />
                  Work Experience
                </button>
                <button
                  onClick={() => setActiveSection('skills')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'skills' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaCode className="mr-3" />
                  Skills
                </button>
                <button
                  onClick={() => setActiveSection('licenses')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'licenses' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaCertificate className="mr-3" />
                  Licenses & Certifications
                </button>
                <button
                  onClick={() => setActiveSection('projects')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'projects' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaProjectDiagram className="mr-3" />
                  Projects
                </button>
                <button
                  onClick={() => setActiveSection('courses')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'courses' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaBook className="mr-3" />
                  Courses
                </button>
                <button
                  onClick={() => setActiveSection('publications')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'publications' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaBook className="mr-3" />
                  Publications
                </button>
                <button
                  onClick={() => setActiveSection('patents')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'patents' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaCertificate className="mr-3" />
                  Patents
                </button>
                <button
                  onClick={() => setActiveSection('honors')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'honors' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaStar className="mr-3" />
                  Honors & Awards
                </button>
                <button
                  onClick={() => setActiveSection('languages')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'languages' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaLanguage className="mr-3" />
                  Languages
                </button>
                <button
                  onClick={() => setActiveSection('organizations')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'organizations' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <FaUsers className="mr-3" />
                  Organizations
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6 capitalize">
                {activeSection.replace('-', ' ')} Information
              </h2>
              
              {renderSection()}

              <div className="mt-8 pt-5 border-t border-gray-200">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileUpdatePage;