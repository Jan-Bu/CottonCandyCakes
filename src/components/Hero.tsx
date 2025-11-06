import { Cloud } from 'lucide-react';

const polaroidImages = [
  { src: '/assets/img/svatebni.webp', alt: 'Svatební dort s elegantní dekorací' },
  { src: '/assets/img/frozen.webp', alt: 'Frozen dort pro děti' },
  { src: '/assets/img/harry.webp', alt: 'Harry Potter tematický dort' },
  { src: '/assets/img/arthur.webp', alt: 'Arthur dort s originální dekorací' },
  { src: '/assets/img/masa.webp', alt: 'Máša dort pro nejmenší' },
  { src: '/assets/img/panenka.webp', alt: 'Dort ve tvaru panenky' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {polaroidImages.map((img, index) => (
        <div key={index} className={`polaroid polaroid-${index + 1}`}>
          <div className="polaroid-frame">
            <img src={img.src} alt={img.alt} className="polaroid-image" />
          </div>
        </div>
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="bounce-in-top mb-8">
          <Cloud className="w-20 h-20 sm:w-32 sm:h-32 mx-auto text-pink-500 drop-shadow-xl" />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-gradient">Cotton Candy Cakes</span>
        </h1>

        <p className="text-xl sm:text-3xl mb-8 text-pink-600 font-semibold animate-slide-up-delay">
          Domácí dorty na objednávku
        </p>

        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-slow"
        >
          Objednat Dort
        </a>
      </div>
    </section>
  );
}
