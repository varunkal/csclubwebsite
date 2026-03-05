import { BookOpen, Code, FileText, Zap, Globe, GraduationCap } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      category: 'Learning Platforms',
      items: [
        {
          title: 'LeetCode',
          description: 'Premium coding interview prep and competitive programming practice',
          link: 'https://leetcode.com',
          icon: Code,
        },
        {
          title: 'CodeSignal',
          description: 'Interactive coding challenges and technical skills assessment',
          link: 'https://codesignal.com',
          icon: Zap,
        },
        {
          title: 'HackerRank',
          description: 'Practice coding problems across multiple programming languages',
          link: 'https://hackerrank.com',
          icon: Code,
        },
        {
          title: 'Codecademy',
          description: 'Interactive coding courses for beginners to advanced learners',
          link: 'https://codecademy.com',
          icon: BookOpen,
        },
      ],
    },
    {
      category: 'Documentation & Tutorials',
      items: [
        {
          title: 'MDN Web Docs',
          description: 'Comprehensive documentation for web technologies and JavaScript',
          link: 'https://developer.mozilla.org',
          icon: FileText,
        },
        {
          title: 'Python.org',
          description: 'Official Python documentation and tutorials',
          link: 'https://python.org',
          icon: FileText,
        },
        {
          title: 'freeCodeCamp',
          description: 'Free full-length video courses on web development and programming',
          link: 'https://freecodecamp.org',
          icon: GraduationCap,
        },
        {
          title: 'W3Schools',
          description: 'Easy-to-understand tutorials for web development fundamentals',
          link: 'https://w3schools.com',
          icon: BookOpen,
        },
      ],
    },
    {
      category: 'Community & Competitions',
      items: [
        {
          title: 'ACSL',
          description: 'American Computer Science League - official competition platform',
          link: 'https://www.acsl.org',
          icon: Trophy,
        },
        {
          title: 'GitHub',
          description: 'Version control and open source collaboration platform',
          link: 'https://github.com',
          icon: Globe,
        },
        {
          title: 'Stack Overflow',
          description: 'Q&A community for programming questions and solutions',
          link: 'https://stackoverflow.com',
          icon: Globe,
        },
        {
          title: 'Dev.to',
          description: 'Community of software developers sharing articles and stories',
          link: 'https://dev.to',
          icon: BookOpen,
        },
      ],
    },
  ];

  const languages = [
    { name: 'Python', level: 'Beginner Friendly', color: 'bg-blue-100 border-blue-400' },
    { name: 'JavaScript', level: 'Web Development', color: 'bg-yellow-100 border-yellow-400' },
    { name: 'Java', level: 'Interview Prep', color: 'bg-orange-100 border-orange-400' },
    { name: 'C++', level: 'Competitive Programming', color: 'bg-red-100 border-red-400' },
    { name: 'C#', level: 'Game Development', color: 'bg-purple-100 border-purple-400' },
    { name: 'Rust', level: 'Systems Programming', color: 'bg-amber-100 border-amber-400' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-400 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources</h1>
          <p className="text-xl md:text-2xl text-gray-800">
            Everything you need to succeed in computer science
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {resources.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold mb-8 text-black">{section.category}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={itemIdx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-400 hover:shadow-lg transition-all duration-200 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-yellow-100 border-2 border-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-200 transition-colors">
                          <Icon className="w-7 h-7 text-black" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-black group-hover:text-yellow-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 mt-2">{item.description}</p>
                          <div className="mt-4 inline-block text-black font-semibold text-sm">
                            Visit Resource →
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="border-t-2 border-gray-200 pt-16">
            <h2 className="text-3xl font-bold mb-8 text-black">Programming Languages</h2>
            <p className="text-lg text-gray-700 mb-8">
              Master these languages to advance your computer science skills
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className={`${lang.color} border-2 rounded-xl p-6 text-center hover:shadow-lg transition-shadow`}
                >
                  <h3 className="text-2xl font-bold text-black mb-2">{lang.name}</h3>
                  <p className="text-sm font-semibold text-gray-700">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-yellow-400 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Pro Tips for Success</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start space-x-3">
                <span className="font-bold text-2xl flex-shrink-0">→</span>
                <span>Start with one language and master it before jumping to others</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="font-bold text-2xl flex-shrink-0">→</span>
                <span>Practice daily - consistency is more important than long sessions</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="font-bold text-2xl flex-shrink-0">→</span>
                <span>Build projects to reinforce what you've learned</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="font-bold text-2xl flex-shrink-0">→</span>
                <span>Join our club discussions to learn from peers</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="font-bold text-2xl flex-shrink-0">→</span>
                <span>Don't fear mistakes - they're part of learning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Trophy } from 'lucide-react';
