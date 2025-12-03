import { Code2, Trophy, Users, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-400 text-black py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Metea Valley Computer Science Club
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-800">
            Building the Future, One Line of Code at a Time
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-black text-yellow-400 px-6 py-3 rounded-lg font-semibold">
              Aurora, Illinois
            </div>
            <div className="bg-white text-black px-6 py-3 rounded-lg font-semibold border-2 border-black">
              Indian Prairie School District 204
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Learn to Code</h3>
            <p className="text-gray-700">
              Master programming languages and build amazing projects
            </p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Compete</h3>
            <p className="text-gray-700">
              Participate in hackathons and programming competitions
            </p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <p className="text-gray-700">
              Network with peers who share your passion for technology
            </p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Events</h3>
            <p className="text-gray-700">
              Join workshops, guest speakers, and tech field trips
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border-2 border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-center">About Our Club</h2>
          <div className="space-y-4 text-lg text-gray-700 max-w-4xl mx-auto">
            <p>
              Welcome to the Metea Valley Computer Science Club! We are a community of students
              passionate about technology, programming, and innovation. Whether you're a beginner
              just starting your coding journey or an experienced programmer, there's a place for
              you here.
            </p>
            <p>
              Our club focuses on collaborative learning, competitive programming, and real-world
              project development. We participate in competitions like ACSL (American Computer
              Science League), organize hackathons, and host workshops on various programming
              topics.
            </p>
            <p>
              Join us to expand your skills, work on exciting projects, prepare for computer
              science courses and careers, and be part of Metea Valley's thriving STEM community!
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-600">Weekly Meetings</h3>
              <p className="text-gray-700">
                Join us every week for coding challenges, project work sessions, and tech
                discussions
              </p>
            </div>
            <div className="bg-white border-2 border-black rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-600">Competitions</h3>
              <p className="text-gray-700">
                Compete in ACSL, hackathons, and other programming competitions as a team
              </p>
            </div>
            <div className="bg-white border-2 border-black rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-600">Projects</h3>
              <p className="text-gray-700">
                Build real applications, contribute to open source, and showcase your work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
