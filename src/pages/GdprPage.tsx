import Footer from '../components/Footer';

interface GdprPageProps {
  onNavigate: (page: 'home' | 'gallery' | 'terms' | 'gdpr') => void;
}

export default function GdprPage({ onNavigate }: GdprPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">Ochrana osobních údajů (GDPR)</span>
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">1. Správce osobních údajů</h2>
            <p className="mb-3">
              Správcem osobních údajů je provozovatel Cotton Candy Cakes (dále jen "správce").
            </p>
            <p>
              Kontakt na správce: prostřednictvím kontaktního formuláře na webových stránkách nebo emailu
              uvedeného v sekci kontakt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">2. Rozsah zpracovávaných osobních údajů</h2>
            <p className="mb-3">
              Správce zpracovává následující osobní údaje zákazníků:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Jméno a příjmení</li>
              <li>Emailová adresa</li>
              <li>Telefonní číslo</li>
              <li>Adresa doručení (pokud je vyžadována)</li>
              <li>Údaje uvedené v objednávce (typ výrobku, termín,specifikace objednávky)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">3. Účel zpracování osobních údajů</h2>
            <p className="mb-3">
              Osobní údaje jsou zpracovávány za následujícími účely:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Zpracování a realizace objednávky (právní základ: plnění smlouvy)</li>
              <li>Komunikace se zákazníkem ohledně objednávky</li>
              <li>Vystavení daňového dokladu (právní základ: plnění právní povinnosti)</li>
              <li>Vyřízení reklamace (právní základ: plnění smlouvy a právní povinnosti)</li>
              <li>Archivace objednávek pro účetní a daňové účely</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">4. Právní základ zpracování</h2>
            <p className="mb-3">
              Zpracování osobních údajů je prováděno na základě:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Plnění smlouvy</strong> - zpracování objednávky a komunikace se zákazníkem
                (čl. 6 odst. 1 písm. b) GDPR)
              </li>
              <li>
                <strong>Plnění právních povinností</strong> - vedení účetnictví, daňová evidence
                (čl. 6 odst. 1 písm. c) GDPR)
              </li>
              <li>
                <strong>Oprávněný zájem</strong> - ochrana právních nároků, prevence podvodů
                (čl. 6 odst. 1 písm. f) GDPR)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">5. Doba uchování osobních údajů</h2>
            <p className="mb-3">
              Osobní údaje jsou uchovávány po dobu nezbytnou k naplnění účelu zpracování:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Údaje pro realizaci objednávky - po dobu realizace smlouvy a vyřízení případných reklamací</li>
              <li>Účetní a daňové doklady - 10 let od ukončení zdaňovacího období (dle zákona o účetnictví)</li>
              <li>Údaje pro marketing - do odvolání souhlasu nebo podání námitky</li>
            </ul>
            <p className="mt-3">
              Po uplynutí doby uchování jsou osobní údaje bezpečně vymazány nebo anonymizovány.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">6. Předávání osobních údajů třetím stranám</h2>
            <p className="mb-3">
              Osobní údaje mohou být předány následujícím kategoriím příjemců:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dodavatelé zajišťující dopravu objednaných výrobků</li>
              <li>Poskytovatelé platebních služeb (banky)</li>
              <li>Poskytovatelé účetních a daňových služeb</li>
              <li>Státní orgány v případech stanovených zákonem</li>
            </ul>
            <p className="mt-3">
              Správce nepředává osobní údaje do třetích zemí mimo EU.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">7. Práva subjektů údajů</h2>
            <p className="mb-3">
              V souvislosti se zpracováním osobních údajů máte následující práva:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Právo na přístup</strong> - právo získat potvrzení, zda jsou vaše osobní údaje zpracovávány
                a informace o tom, jak jsou zpracovávány
              </li>
              <li>
                <strong>Právo na opravu</strong> - právo opravit nepřesné nebo neúplné osobní údaje
              </li>
              <li>
                <strong>Právo na výmaz</strong> - právo na výmaz osobních údajů (v případech stanovených GDPR)
              </li>
              <li>
                <strong>Právo na omezení zpracování</strong> - právo omezit způsob zpracování vašich údajů
              </li>
              <li>
                <strong>Právo na přenositelnost</strong> - právo získat své osobní údaje ve strukturovaném
                a běžně používaném formátu
              </li>
              <li>
                <strong>Právo vznést námitku</strong> - právo vznést námitku proti zpracování z důvodu oprávněného zájmu
              </li>
              <li>
                <strong>Právo odvolat souhlas</strong> - v případě, že je zpracování založeno na souhlasu
              </li>
              <li>
                <strong>Právo podat stížnost</strong> - právo podat stížnost u Úřadu pro ochranu osobních údajů
              </li>
            </ul>
            <p className="mt-3">
              Pro uplatnění svých práv nás kontaktujte prostřednictvím emailu nebo kontaktního formuláře.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">8. Zabezpečení osobních údajů</h2>
            <p className="mb-3">
              Správce přijal technická a organizační opatření k zabezpečení osobních údajů proti
              náhodnému nebo protiprávnímu zničení, ztrátě, pozměnění, neoprávněnému zveřejnění nebo přístupu.
            </p>
            <p>
              Osobní údaje jsou uchovávány v zabezpečených systémech s omezeným přístupem pouze
              pro oprávněné osoby.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">9. Cookies</h2>
            <p className="mb-3">
              Webové stránky mohou používat cookies pro zajištění základní funkcionality a analýzu návštěvnosti.
            </p>
            <p>
              Používání cookies můžete odmítnout nebo omezit prostřednictvím nastavení vašeho webového prohlížeče.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">10. Kontakt pro záležitosti ochrany osobních údajů</h2>
            <p className="mb-3">
              Pro dotazy, připomínky nebo uplatnění vašich práv týkajících se ochrany osobních údajů nás
              kontaktujte prostřednictvím:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Kontaktního formuláře na webových stránkách</li>
              <li>Emailu uvedeného v sekci kontakt</li>
            </ul>
            <p className="mt-3">
              Vaše žádosti budou vyřízeny bez zbytečného odkladu, nejpozději do 30 dnů od obdržení.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">11. Závěrečná ustanovení</h2>
            <p className="mb-3">
              Správce si vyhrazuje právo tyto zásady ochrany osobních údajů aktualizovat.
              Aktuální verze je vždy dostupná na webových stránkách.
            </p>
            <p>
              Tyto zásady jsou v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR)
              a zákonem č. 110/2019 Sb., o zpracování osobních údajů.
            </p>
          </section>

          <div className="border-t-2 border-pink-200 pt-6 mt-8">
            <p className="text-sm text-gray-600 mb-3">
              V případě dotazů týkajících se zpracování osobních údajů se můžete obrátit na:
            </p>
            <p className="text-sm text-gray-600 font-semibold">
              Úřad pro ochranu osobních údajů<br />
              Pplk. Sochora 27<br />
              170 00 Praha 7<br />
              <a href="https://www.uoou.cz" className="text-pink-600 hover:underline" target="_blank" rel="noopener noreferrer">
                www.uoou.cz
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Tyto zásady ochrany osobních údajů nabývají účinnosti dnem {new Date().toLocaleDateString('cs-CZ')}.
            </p>
          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
