import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookiesBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 rounded-3xl shadow-2xl border-4 border-amber-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 flex items-center justify-around">
          <Cookie className="w-5 h-5 text-amber-600" />
          <Cookie className="w-4 h-4 text-amber-500" />
          <Cookie className="w-5 h-5 text-amber-600" />
          <Cookie className="w-4 h-4 text-amber-500" />
          <Cookie className="w-5 h-5 text-amber-600" />
          <Cookie className="w-4 h-4 text-amber-500" />
          <Cookie className="w-5 h-5 text-amber-600" />
        </div>

        <button
          onClick={handleDecline}
          className="absolute top-10 right-4 text-amber-700 hover:text-amber-900 transition-colors p-2 hover:bg-amber-200 rounded-full"
          aria-label="Zavřít"
        >
          <X size={20} />
        </button>

        <div className="pt-12 pb-6 px-6 md:px-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cookie className="w-10 h-10 text-amber-600 animate-bounce-slow" />
            <h3 className="text-2xl md:text-3xl font-bold text-amber-900">
              Milujeme sušenky!
            </h3>
            <Cookie className="w-10 h-10 text-amber-600 animate-bounce-slow" style={{ animationDelay: '0.2s' }} />
          </div>

          <p className="text-center text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
            Stejně jako naše dorty jsou nejlepší s trochou lásky, naše webové stránky fungují
            nejlépe s cookies (sušenkami). Používáme je k tomu, abychom vám mohli nabídnout
            tu nejsladší zkušenost! Pomáhají nám zapamatovat si vaše preference a zlepšovat
            naše služby.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={handleAccept}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              <Cookie size={20} />
              Přijmout sušenky
            </button>
            <button
              onClick={handleDecline}
              className="bg-white text-amber-700 px-8 py-3 rounded-full font-semibold border-2 border-amber-300 hover:bg-amber-50 transition-colors duration-300"
            >
              Ne, děkuji
            </button>
          </div>

          <p className="text-xs text-center text-gray-600 mt-4">
            Více informací najdete v našich{' '}
            <button className="underline hover:text-amber-600">
              zásadách ochrany osobních údajů
            </button>
          </p>
        </div>

        <div className="absolute bottom-2 left-4 right-4 flex justify-around opacity-20">
          <Cookie className="w-6 h-6 text-amber-400 rotate-12" />
          <Cookie className="w-5 h-5 text-amber-400 -rotate-6" />
          <Cookie className="w-7 h-7 text-amber-400 rotate-45" />
          <Cookie className="w-5 h-5 text-amber-400 -rotate-12" />
          <Cookie className="w-6 h-6 text-amber-400 rotate-6" />
        </div>
      </div>
    </div>
  );
}
