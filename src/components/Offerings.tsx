export default function Offerings() {
  const offerings = [
    {
      emoji: '🎂',
      title: 'Dorty s Cukrovou Vatou',
      description: 'Naše specialita! Nadýchaný dort plněný jemnou cukrovou vatou.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      emoji: '🍬',
      title: 'Čokoládové Kuličky',
      description: 'Malé čokoládové kuličky s překvapením z cukrové vaty uvnitř.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      emoji: '🧁',
      title: 'Narozeninové Dorty',
      description: 'Slavnostní dorty pro vaše nejdůležitější chvíle.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      emoji: '🍰',
      title: 'Svatební Dorty',
      description: 'Elegantní a chutné dorty pro váš velký den.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      emoji: '🎉',
      title: 'Dětské Dorty',
      description: 'Veselé a barevné dorty pro malé sladkouny.',
      color: 'from-green-400 to-teal-500'
    },
    {
      emoji: '✨',
      title: 'Dort Na Míru',
      description: 'Máte speciální přání? Vytvoříme dort přesně podle vás!',
      color: 'from-red-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gradient">
          Naše Nabídka
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Vytvářím sladké dobroty, které vám udělají radost
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="candy-card p-8 rounded-3xl text-center hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 animate-bounce-slow">
                {item.emoji}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
              <div className={`mt-4 h-2 rounded-full bg-gradient-to-r ${item.color}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
