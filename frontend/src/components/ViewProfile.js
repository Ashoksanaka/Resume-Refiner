import React from 'react';
import { 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaCertificate, 
  FaProjectDiagram, 
  FaBook, 
  FaStar, 
  FaLanguage, 
  FaUsers,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGlobe
} from 'react-icons/fa';

const UserProfilePage = () => {
  // Sample user data - replace with API data
  const userData = {
    profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'John Doe',
    title: 'Senior Software Engineer',
    bio: 'Experienced full-stack developer with 5+ years of experience building web applications using React, Node.js, and Python. Passionate about creating efficient, scalable solutions with clean code.',
    contact: {
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      website: 'johndoe.dev',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
      twitter: '@johndoe'
    },
    education: [
      {
        id: 1,
        institution: 'Stanford University',
        degree: 'Master of Computer Science',
        fieldOfStudy: 'Artificial Intelligence',
        startYear: '2015',
        endYear: '2017',
        description: 'Specialized in machine learning and NLP. Thesis on "Neural Networks for Text Classification".'
      },
      {
        id: 2,
        institution: 'University of California',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        startYear: '2011',
        endYear: '2015',
        description: 'Minor in Mathematics. Graduated with honors.'
      }
    ],
    workExperience: [
      {
        id: 1,
        company: 'Tech Solutions Inc.',
        position: 'Senior Software Engineer',
        startDate: '2018',
        endDate: 'Present',
        description: 'Lead frontend development team. Architected and implemented new React-based UI framework that improved performance by 40%. Mentored junior developers.'
      },
      {
        id: 2,
        company: 'Innovate Labs',
        position: 'Software Engineer',
        startDate: '2016',
        endDate: '2018',
        description: 'Developed REST APIs using Node.js and Express. Implemented CI/CD pipelines reducing deployment time by 60%.'
      }
    ],
    skills: [
      { name: 'JavaScript', level: 'Expert' },
      { name: 'React', level: 'Expert' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'AWS', level: 'Intermediate' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' }
    ],
    licenses: [
      {
        id: 1,
        name: 'AWS Certified Solutions Architect',
        issuingOrganization: 'Amazon Web Services',
        issueDate: '2020',
        expirationDate: '2023'
      },
      {
        id: 2,
        name: 'Google Cloud Professional Data Engineer',
        issuingOrganization: 'Google',
        issueDate: '2019',
        expirationDate: '2022'
      }
    ],
    projects: [
      {
        id: 1,
        name: 'Resume Builder App',
        description: 'Built a React-based resume builder with ATS optimization features. Integrated with multiple templates and PDF generation.',
        startDate: '2021',
        endDate: '2022',
        url: 'resumebuilder.example.com'
      },
      {
        id: 2,
        name: 'E-commerce Platform',
        description: 'Developed a full-stack e-commerce solution with React frontend and Node.js backend. Implemented payment processing and inventory management.',
        startDate: '2020',
        endDate: '2021'
      }
    ],
    courses: [
      {
        id: 1,
        name: 'Advanced React Patterns',
        provider: 'Frontend Masters',
        completionDate: '2021'
      },
      {
        id: 2,
        name: 'Machine Learning Fundamentals',
        provider: 'Coursera',
        completionDate: '2019'
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
      },
      {
        id: 2,
        title: 'Hackathon Winner',
        issuer: 'DevCon 2019',
        date: '2019'
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
        proficiency: 'Professional'
      },
      {
        id: 3,
        language: 'French',
        proficiency: 'Basic'
      }
    ],
    organizations: [
      {
        id: 1,
        name: 'ACM - Association for Computing Machinery',
        position: 'Member',
        startDate: '2018',
        endDate: 'Present'
      },
      {
        id: 2,
        name: 'IEEE Computer Society',
        position: 'Member',
        startDate: '2017',
        endDate: 'Present'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Edit Profile
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <img 
                  className="h-32 w-32 rounded-full object-cover border-4 border-white shadow" 
                  src={userData.profilePicture} 
                  alt={userData.name} 
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
                <p className="text-lg text-blue-600">{userData.title}</p>
                <p className="mt-2 text-gray-600">{userData.bio}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {userData.contact.linkedin && (
                    <a href={`https://${userData.contact.linkedin}`} className="inline-flex items-center text-gray-500 hover:text-blue-700">
                      <FaLinkedin className="mr-1" /> LinkedIn
                    </a>
                  )}
                  {userData.contact.github && (
                    <a href={`https://${userData.contact.github}`} className="inline-flex items-center text-gray-500 hover:text-gray-700 ml-3">
                      <FaGithub className="mr-1" /> GitHub
                    </a>
                  )}
                  {userData.contact.twitter && (
                    <a href={`https://twitter.com/${userData.contact.twitter.replace('@', '')}`} className="inline-flex items-center text-gray-500 hover:text-blue-400 ml-3">
                      <FaTwitter className="mr-1" /> Twitter
                    </a>
                  )}
                  {userData.contact.website && (
                    <a href={`https://${userData.contact.website}`} className="inline-flex items-center text-gray-500 hover:text-blue-600 ml-3">
                      <FaGlobe className="mr-1" /> Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {userData.contact.email && (
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-sm text-gray-900">{userData.contact.email}</p>
                </div>
              )}
              {userData.contact.phone && (
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-sm text-gray-900">{userData.contact.phone}</p>
                </div>
              )}
              {userData.contact.location && (
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-sm text-gray-900">{userData.contact.location}</p>
                </div>
              )}
              {userData.contact.website && (
                <div>
                  <p className="text-sm font-medium text-gray-500">Website</p>
                  <a href={`https://${userData.contact.website}`} className="text-sm text-blue-600 hover:underline">
                    {userData.contact.website}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Education */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <FaGraduationCap className="mr-2 text-blue-500" /> Education
              </h3>
            </div>
            <div className="space-y-6">
              {userData.education.map(edu => (
                <div key={edu.id} className="pl-6 border-l-2 border-blue-200">
                  <div className="flex justify-between">
                    <h4 className="text-md font-medium text-gray-900">{edu.institution}</h4>
                    <p className="text-sm text-gray-500">
                      {edu.startYear} - {edu.endYear}
                    </p>
                  </div>
                  <p className="text-md text-blue-600">{edu.degree} in {edu.fieldOfStudy}</p>
                  {edu.description && (
                    <p className="mt-1 text-sm text-gray-600">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <FaBriefcase className="mr-2 text-blue-500" /> Work Experience
              </h3>
            </div>
            <div className="space-y-6">
              {userData.workExperience.map(exp => (
                <div key={exp.id} className="pl-6 border-l-2 border-blue-200">
                  <div className="flex justify-between">
                    <h4 className="text-md font-medium text-gray-900">{exp.company}</h4>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  <p className="text-md text-blue-600">{exp.position}</p>
                  {exp.description && (
                    <p className="mt-1 text-sm text-gray-600">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <FaCode className="mr-2 text-blue-500" /> Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {userData.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {skill.name}
                  {skill.level && (
                    <span className="ml-1 text-xs opacity-75">({skill.level})</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Two Column Layout for Remaining Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Licenses & Certifications */}
            <div className="px-6 py-4 border-b border-gray-200 md:border-r">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FaCertificate className="mr-2 text-blue-500" /> Licenses & Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {userData.licenses.map(license => (
                  <div key={license.id}>
                    <h4 className="text-md font-medium text-gray-900">{license.name}</h4>
                    <p className="text-sm text-gray-600">{license.issuingOrganization}</p>
                    <p className="text-xs text-gray-500">
                      Issued: {license.issueDate} • {license.expirationDate && `Expires: ${license.expirationDate}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FaProjectDiagram className="mr-2 text-blue-500" /> Projects
                </h3>
              </div>
              <div className="space-y-4">
                {userData.projects.map(project => (
                  <div key={project.id}>
                    <h4 className="text-md font-medium text-gray-900">{project.name}</h4>
                    <p className="text-sm text-gray-600">{project.description}</p>
                    {project.url && (
                      <a href={project.url} className="text-xs text-blue-600 hover:underline">
                        View Project
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div className="px-6 py-4 border-b border-gray-200 md:border-r">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FaBook className="mr-2 text-blue-500" /> Courses
                </h3>
              </div>
              <div className="space-y-2">
                {userData.courses.map(course => (
                  <div key={course.id}>
                    <h4 className="text-md font-medium text-gray-900">{course.name}</h4>
                    <p className="text-sm text-gray-600">{course.provider} • {course.completionDate}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FaBook className="mr-2 text-blue-500" /> Publications
                </h3>
              </div>
              <div className="space-y-2">
                {userData.publications.map(pub => (
                  <div key={pub.id}>
                    <h4 className="text-md font-medium text-gray-900">{pub.title}</h4>
                    <p className="text-sm text-gray-600">{pub.publisher} • {pub.publicationDate}</p>
                    {pub.url && (
                      <a href={pub.url} className="text-xs text-blue-600 hover:underline">
                        Read Publication
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Patents */}
            <div className="px-6 py-4 border-b border-gray-200 md:border-r">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FaCertificate className="mr-2 text-blue-500" /> Patents
                </h3>
              </div>
              <div className="space-y-2">
                {userData.patents.map(patent => (
                  <div key={patent.id}>
                    <h4 className="text-md font-medium text-gray-900">{patent.title}</h4>
                    <p className="text-sm text-gray-600">{patent.patentNumber} • Issued: {patent.issueDate}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Awards */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FaStar className="mr-2 text-blue-500" /> Honors & Awards
                </h3>
              </div>
              <div className="space-y-2">
                {userData.honors.map(honor => (
                  <div key={honor.id}>
                    <h4 className="text-md font-medium text-gray-900">{honor.title}</h4>
                    <p className="text-sm text-gray-600">{honor.issuer} • {honor.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="px-6 py-4 border-b border-gray-200 md:border-r">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FaLanguage className="mr-2 text-blue-500" /> Languages
                </h3>
              </div>
              <div className="space-y-1">
                {userData.languages.map(lang => (
                  <div key={lang.id} className="flex justify-between">
                    <span className="text-md text-gray-900">{lang.language}</span>
                    <span className="text-sm text-gray-600">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizations */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <FaUsers className="mr-2 text-blue-500" /> Organizations
                </h3>
              </div>
              <div className="space-y-2">
                {userData.organizations.map(org => (
                  <div key={org.id}>
                    <h4 className="text-md font-medium text-gray-900">{org.name}</h4>
                    <p className="text-sm text-gray-600">{org.position} • {org.startDate} - {org.endDate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfilePage;