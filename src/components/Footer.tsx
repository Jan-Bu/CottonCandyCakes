interface FooterProps {
  onNavigate: (page: 'home' | 'gallery' | 'terms' | 'gdpr') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-pink-400 via-purple-300 to-blue-300 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-3xl mb-4 animate-bounce-slow">
          ☁️
        </div>
        <p className="text-lg font-semibold mb-2">
          Cotton Candy Cakes
        </p>
        <p className="text-white/90 mb-4">
          Domácí dorty na objednávku s láskou
        </p>

        <div className="flex justify-center gap-6 mb-4">
          <button
            onClick={() => onNavigate('terms')}
            className="text-sm text-white/90 hover:text-white hover:underline transition-all"
          >
            Obchodní podmínky
          </button>
          <button
            onClick={() => onNavigate('gdpr')}
            className="text-sm text-white/90 hover:text-white hover:underline transition-all"
          >
            GDPR
          </button>
        </div>

        <div className="border-t border-white/30 pt-4 mt-4">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Cotton Candy Cakes. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
