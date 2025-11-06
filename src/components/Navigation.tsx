import { Menu, X, Home, ImageIcon } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: 'home' | 'gallery' | 'terms' | 'gdpr';
  onNavigate: (page: 'home' | 'gallery' | 'terms' | 'gdpr') => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-400 via-purple-300 to-blue-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
              ☁️ Cotton Candy Cakes
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                currentPage === 'home'
                  ? 'bg-white text-pink-500 shadow-lg scale-110'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <Home size={20} />
              <span className="font-semibold">Domů</span>
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                currentPage === 'gallery'
                  ? 'bg-white text-pink-500 shadow-lg scale-110'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <ImageIcon size={20} />
              <span className="font-semibold">Galerie</span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-4 py-3 space-y-2">
            <button
              onClick={() => {
                onNavigate('home');
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                currentPage === 'home'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'text-pink-500 hover:bg-pink-50'
              }`}
            >
              <Home size={20} />
              <span className="font-semibold">Domů</span>
            </button>
            <button
              onClick={() => {
                onNavigate('gallery');
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                currentPage === 'gallery'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'text-pink-500 hover:bg-pink-50'
              }`}
            >
              <ImageIcon size={20} />
              <span className="font-semibold">Galerie</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
