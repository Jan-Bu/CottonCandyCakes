import Footer from '../components/Footer';

interface TermsPageProps {
  onNavigate: (page: 'home' | 'gallery' | 'terms' | 'gdpr') => void;
}

export default function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">Obchodní podmínky</span>
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">1. Základní ustanovení</h2>
            <p className="mb-3">
              Tyto obchodní podmínky upravují vztahy mezi provozovatelem Cotton Candy Cakes (dále jen "prodávající")
              a zákazníkem (dále jen "kupující") při objednávání a prodeji dortů a cukrářských výrobků.
            </p>
            <p>
              Odesláním objednávky kupující potvrzuje, že se seznámil s těmito obchodními podmínkami
              a že s nimi souhlasí.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">2. Objednávka a uzavření smlouvy</h2>
            <p className="mb-3">
              Objednávku lze provést telefonicky, emailem nebo prostřednictvím kontaktního formuláře na webových stránkách.
            </p>
            <p className="mb-3">
              Každá objednávka musí obsahovat: typ výrobku, termín vyzvednutí/doručení, kontaktní údaje kupującího.
            </p>
            <p>
              Kupní smlouva vzniká potvrzením objednávky prodávajícím. Prodávající si vyhrazuje právo
              odmítnout objednávku v případě nedostatečné kapacity nebo technické nemožnosti realizace.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">3. Ceny a platební podmínky</h2>
            <p className="mb-3">
              Ceny jsou uvedeny v českých korunách včetně DPH. Cena se řídí aktuálním ceníkem platným v den objednávky.
            </p>
            <p className="mb-3">
              Platba se provádí v hotovosti při převzetí výrobku nebo bankovním převodem na základě faktury/zálohové faktury.
            </p>
            <p>
              U objednávek nad 3 000 Kč si prodávající vyhrazuje právo požadovat zálohu ve výši 50% ceny.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">4. Dodací podmínky</h2>
            <p className="mb-3">
              Standardní doba realizace objednávky je minimálně 3 pracovní dny před termínem vyzvednutí.
            </p>
            <p className="mb-3">
              Vyzvednutí výrobků probíhá osobně na dohodnutém místě. Možnost doručení je po domluvě
              za příplatek podle vzdálenosti.
            </p>
            <p>
              V případě zpoždění kupující při vyzvednutí neručí prodávající za kvalitu výrobku
              po uplynutí dohodnutého termínu vyzvednutí.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">5. Odstoupení od smlouvy</h2>
            <p className="mb-3">
              Kupující má právo odstoupit od smlouvy bez udání důvodu nejpozději 48 hodin před dohodnutým
              termínem vyzvednutí. V tomto případě bude vrácena případná záloha.
            </p>
            <p className="mb-3">
              Při odstoupení od smlouvy později než 48 hodin před termínem vyzvednutí má prodávající
              nárok na úhradu nákladů vynaložených na přípravu objednávky.
            </p>
            <p>
              Právo na odstoupení od smlouvy nelze uplatnit u výrobků vyrobených na zakázku podle
              individuálních požadavků kupujícího (§1837 písm. d) občanského zákoníku).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">6. Reklamace a odpovědnost za vady</h2>
            <p className="mb-3">
              Kupující je povinen prohlédnout výrobek při převzetí. Viditelné vady musí být reklamovány
              okamžitě při převzetí.
            </p>
            <p className="mb-3">
              Reklamace se uplatňuje u prodávajícího bez zbytečného odkladu, nejpozději do 24 hodin
              od převzetí výrobku.
            </p>
            <p>
              Prodávající neodpovídá za vady vzniklé nesprávným skladováním, přepravou nebo manipulací
              po převzetí kupujícím.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">7. Alergeny a složení výrobků</h2>
            <p className="mb-3">
              Výrobky mohou obsahovat alergeny (lepek, vejce, mléko, ořechy atd.).
              Kupující je povinen informovat prodávajícího o případných alergiích při objednávce.
            </p>
            <p>
              Prodávající zajišťuje dodržování hygienických předpisů a zákonných norem pro výrobu potravin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">8. Ochrana osobních údajů</h2>
            <p>
              Ochrana osobních údajů kupujícího je upravena samostatným dokumentem GDPR,
              který je součástí těchto obchodních podmínek.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">9. Závěrečná ustanovení</h2>
            <p className="mb-3">
              Tyto obchodní podmínky platí ve znění uvedeném na webových stránkách v den odeslání objednávky.
            </p>
            <p className="mb-3">
              Prodávající si vyhrazuje právo změnit obchodní podmínky. Změna se nevztahuje
              na již přijaté objednávky.
            </p>
            <p>
              Případné spory mezi prodávajícím a kupujícím řeší obecné soudy České republiky.
              Vztahy neupravené těmito obchodními podmínkami se řídí občanským zákoníkem a souvisejícími právními předpisy ČR.
            </p>
          </section>

          <div className="border-t-2 border-pink-200 pt-6 mt-8">
            <p className="text-sm text-gray-600">
              Tyto obchodní podmínky nabývají účinnosti dnem {new Date().toLocaleDateString('cs-CZ')}.
            </p>
          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
