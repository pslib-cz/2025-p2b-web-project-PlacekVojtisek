🍜 Noodle Hub
Prémiový český e-shop specializovaný na asijské instantní nudle — především korejské Samyang Buldak a další asijské speciality.

O projektu
Noodle Hub je statický e-shop bez backendu nebo databáze. Veškerá data (produkty, košík) jsou řešena přes JavaScript a localStorage v prohlížeči. Web je psán v čistém HTML, CSS a vanilla JS — bez jakýchkoliv frameworků nebo knihoven.

Struktura projektu
noodlehub-web/
├── index.html              # Hlavní stránka (hero, kategorie, featured produkty)
├── products.html           # Seznam všech produktů s filtry a řazením
├── product-detail.html     # Detail produktu (dynamicky renderován přes ?id=)
├── cart.html               # Košík
├── about.html              # O nás (⚠️ neprolinkovaná stránka)
└── assets/
    ├── css/
    │   └── style.css       # Veškeré styly
    ├── js/
    │   └── main.js         # Veškerá logika (produkty, košík, rendering)
    └── img/
        └── hero.png        # Hero obrázek

Stránky

index.html — Domů

Úvodní stránka s hero sekcí, navigačními category badges (Extra pálivé, Polévkové, Smažené, Jemné/Krémové) a sekcí 3 featured produktů dynamicky renderovaných JavaScriptem.

products.html — Produkty

Kompletní katalog všech 10 produktů v mřížce 4 sloupce. Obsahuje filtrování podle kategorie a řazení (cena, pálivost). Filtr se promítá i do URL parametru ?category=.

product-detail.html — Detail produktu

Dynamicky renderovaný detail na základě URL parametru ?id=. Zobrazuje obrázek, název, pálivost, původ, dobu přípravy, popis a tlačítko přidat do košíku s výběrem množství. Obsahuje také sekci recenzí (statická ukázková recenze).

cart.html — Košík

Stránka košíku s 2-sloupcovým layoutem — seznam položek vlevo, shrnutí objednávky vpravo. Umožňuje úpravu množství a odebrání položek. Checkout tlačítko zobrazí alert (ukázkový e-shop, bez skutečného platebního systému).

about.html — O nás ⚠️

Stránka s příběhem Noodle Hubu a 3 statistikami (150+ druhů nudlí, 5k+ zákazníků, 24h doručení). Pozor: tato stránka není dostupná přes navigaci — chybí odkaz v navbaru.

Produktová databáze
10 produktů hardcoded v main.js:
#NázevZnačkaCenaPálivostPůvod1Buldak 
OriginalSamyang149 Kč4/10Jižní Korea2Buldak
CarbonaraSamyang155 Kč3/10Jižní Korea3Buldak
2x SpicySamyang159 Kč9/10Jižní Korea4Buldak
Quattro CheeseSamyang155 Kč3/10Jižní Korea5Jjajang
Black BeanSamyang149 Kč2/10Jižní Korea6Buldak
Stew TypeSamyang159 Kč5/10Jižní Korea7Shin
Ramyun GourmetNongshim139 Kč4/10Jižní Korea8Raoh
Tonkotsu PremiumNissin165 Kč0/10Japonsko9Tom
Yum Shrimp ExtremeMama135 Kč6/10Thajsko10Miso
RamenSapporo Ichiban145 Kč1/10Japonsko

