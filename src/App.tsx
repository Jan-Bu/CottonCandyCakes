import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import TermsPage from './pages/TermsPage';
import GdprPage from './pages/GdprPage';
import CookiesBanner from './components/CookiesBanner';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'gallery' | 'terms' | 'gdpr'>('home');

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'gallery' && <GalleryPage onNavigate={setCurrentPage} />}
      {currentPage === 'terms' && <TermsPage onNavigate={setCurrentPage} />}
      {currentPage === 'gdpr' && <GdprPage onNavigate={setCurrentPage} />}
      <CookiesBanner />
    </div>
  );
}

export default App;
