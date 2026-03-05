import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Team from './pages/Team';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function renderPage() {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'team':
        return <Team />;
      case 'calendar':
        return <Calendar />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <footer className="bg-black text-yellow-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold mb-2">Metea Valley Computer Science Club</p>
          <p className="text-sm text-yellow-300">
            1801 N Eola Rd, Aurora, IL 60502 | Indian Prairie School District 204
          </p>
          <p className="text-xs text-yellow-300 mt-4">
            © 2026 Metea Valley High School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
