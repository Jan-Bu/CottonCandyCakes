import { Heart, Star, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gradient">
          O Nás
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="candy-card p-8 rounded-3xl">
            <Heart className="w-16 h-16 text-pink-500 mb-4 animate-pulse-slow" />
            <h3 className="text-2xl font-bold text-pink-600 mb-4">
              S Láskou Pečené
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Každý dort je připravován s láskou a péčí. Používáme pouze
              kvalitní suroviny a tradiční recepty, které dodávají našim
              dortům nezaměnitelnou chuť.
            </p>
          </div>

          <div className="candy-card p-8 rounded-3xl">
            <Star className="w-16 h-16 text-yellow-500 mb-4 animate-spin-slow" />
            <h3 className="text-2xl font-bold text-purple-600 mb-4">
              Naše Specialita
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Proslavili jsme se dorty a kuličkami plněnými cukrovou vatou.
              Tato jedinečná kombinace chutí a textur udělá radost každému
              milovníkovi sladkostí.
            </p>
          </div>
        </div>

        <div className="mt-12 candy-card p-8 rounded-3xl text-center">
          <Sparkles className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-bounce-slow" />
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Dorty Na Míru
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Každá oslava je jedinečná, a proto nabízíme dorty přesně podle
            vašich přání. Ať už slavíte narozeniny, svatbu, nebo jen chcete
            udělat radost, vytvoříme pro vás dort, který bude chutnat i vypadat
            dokonale.
          </p>
        </div>
      </div>
    </section>
  );
}
