import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';

interface GalleryPageProps {
  onNavigate: (page: 'home' | 'gallery' | 'terms' | 'gdpr') => void;
}

export default function GalleryPage({ onNavigate }: GalleryPageProps) {
  const allImages = [
    { src: '/assets/img/svatebni.webp', alt: 'Svatební dort s elegantní dekorací' },
    { src: '/assets/img/frozen.webp', alt: 'Frozen dort pro děti' },
    { src: '/assets/img/harry.webp', alt: 'Harry Potter tematický dort' },
    { src: '/assets/img/arthur.webp', alt: 'Arthur dort s originální dekorací' },
    { src: '/assets/img/masa.webp', alt: 'Máša dort pro nejmenší' },
    { src: '/assets/img/panenka.webp', alt: 'Dort ve tvaru panenky' },
    { src: '/assets/img/pes.webp', alt: 'Dort s motivem pejska' },
    { src: '/assets/img/bus.webp', alt: 'Dort ve tvaru autobusu' },
    { src: '/assets/img/60_narozeniny.jpg', alt: 'Dort k 60. narozeninám' },
    { src: '/assets/img/basketball.jpg', alt: 'Basketbalový dort pro sportovce' },
    { src: '/assets/img/bile_kvetiny.jpg', alt: 'Dort s bílými květinami' },
    { src: '/assets/img/box_makeup.jpg', alt: 'Dort ve tvaru makeup boxu' },
    { src: '/assets/img/dalmatin.jpg', alt: 'Dalmatin dort pro milovníky psů' },
    { src: '/assets/img/dinousaur.jpg', alt: 'Dinosauří dort pro malé cestovatele časem' },
    { src: '/assets/img/dres.jpg', alt: 'Dort ve tvaru fotbalového dresu' },
    { src: '/assets/img/hroch.jpg', alt: 'Dort s motivem hrocha' },
    { src: '/assets/img/jméno.jpg', alt: 'Dort s personalizovaným jménem' },
    { src: '/assets/img/kvetiny.jpg', alt: 'Dort zdobený barevnými květinami' },
    { src: '/assets/img/kytara.jpg', alt: 'Dort ve tvaru kytary pro hudebníky' },
    { src: '/assets/img/lego.jpg', alt: 'LEGO dort pro stavitele' },
    { src: '/assets/img/lego2.jpg', alt: 'LEGO dort s barevnými kostičkami' },
    { src: '/assets/img/minion.jpg', alt: 'Mimoň dort ze slavného filmu' },
    { src: '/assets/img/olaf.jpg', alt: 'Olaf dort z pohádky Ledové království' },
    { src: '/assets/img/papoušek.jpg', alt: 'Dort s motivem papouška' },
    { src: '/assets/img/tráva.jpg', alt: 'Dort s dekorací trávy a přírody' },
  ];

  const IMAGES_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, IMAGES_PER_PAGE));

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (image: { src: string; alt: string }, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(allImages.indexOf(image));
  };

  const handlePrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedImage(allImages[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < allImages.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedImage(allImages[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const newImages = allImages.slice(0, nextPage * IMAGES_PER_PAGE);
    setVisibleImages(newImages);
    setCurrentPage(nextPage);
  };

  const hasMoreImages = visibleImages.length < allImages.length;

  return (
    <>
      <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gradient">
            Galerie
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Podívejte se na naše sladké výtvory
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleImages.map((image, index) => (
              <div
                key={index}
                className="candy-card rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 aspect-square"
                onClick={() => handleImageClick(image, index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          {hasMoreImages && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Načíst více fotek
              </button>
            </div>
          )}

          {!hasMoreImages && visibleImages.length > 0 && (
            <div className="flex justify-center mt-12 text-gray-500">
              <p>Všechny fotky jsou načteny!</p>
            </div>
          )}
        </div>

        {selectedImage && selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 bg-white text-gray-800 p-3 rounded-full hover:scale-110 transition-transform shadow-xl z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              disabled={selectedIndex === 0}
              className="absolute left-4 bg-white text-gray-800 p-3 rounded-full hover:scale-110 transition-transform shadow-xl disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Předchozí foto"
            >
              <ChevronLeft size={24} />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              disabled={selectedIndex === allImages.length - 1}
              className="absolute right-4 bg-white text-gray-800 p-3 rounded-full hover:scale-110 transition-transform shadow-xl disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Další foto"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
              {selectedIndex + 1} / {allImages.length}
            </div>
          </div>
        )}
      </div>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
