Tvorba webových stránek
=======================


Zadání projektu č. 2
--------------------

Předmětem projektu je vytvoření **vlastní profilové webové prezentace**, případně (podle vlastního uvážení) vytvoření **prezentace imaginární osoby**, filmové postavy apod.

Navrhněte vhodné členění webu. Web musí mít nejméně tři hlavní informační sekce (např. základní údaje, vzdělání, projekty), z nichž alespoň jedna musí být dále členěna na podsekce. Web bude disponovat:

*   Úvodní stránkou obsahující obecné informace
*   Další informační sekce odpovídající účelu ([ukázka pro inspiraci](https://startbootstrap.com/previews/resume/)) - pozn. očekává se nicméně větší kreativita
*   Vhodně navrženou globální navigací, která je stále dostupná

### Grafické zpracování

*   Navrhněte grafický styl stránek, který odpovídá zaměření stránky. Návrh zahrnuje minimálně odpovídající barevné schéma (lze použít i různé [pomocné nástroje](http://wellstyled.com/tools/)), a použité fotografie a obrázky. Kvalita grafického návrhu není rozhodujícím kritériem hodnocení projektů, v extrémních případech ale může hodnocení ovlivnit (oběma směry).
*   V rámci školního projektu je možné využít libovolné fotografie dostupné online. Současně mějte ale na paměti praktické aspekty:
    *   Načítání obrázků může trvat déle, případně se nemusí podařit. Dbejte na to, aby text webu byl čitelný, i když se obrázky nezobrazí (např. je-li obrázek použitý jako pozadí pod textem, použijte současně i odpovídající barevné pozadí).
    *   Obrázek na pozadí obecně snižuje čitelnost textu. Věnujte pozornost tomu, aby byl text dostatečně kontrastní.
*   Připravte odpovídající CSS styl stránek.
*   Implementujte dvě varianty stylu: pro mobilní zařízení a pro velký monitor. V obou případech přizpůsobte zejména rozložení obsahu a řešení navigace velikosti zobrazovací plochy (okna prohlížeče).
*   Hodnocena bude rovněž komplexita řešení a kreativita (porovnejte s 1. projektem).

### Praktické zpracování

*   Výchozí dokument se bude jmenovat **index.html**
*   Prezentace může být členěna jedním z následujících způsobů:
    *   Jeden HTML dokument vnitřně členěný na sekce, odkazy v menu vedou na jednotlivé sekce (doporučeno). V takovém případě implementujte plynulé přecházení mezi sekcemi (smooth scrolling) a vhodné řešení nabídky tak, aby byla stále dostupná, současně ale aby zůstalo na stránce co nejvíce volného místa pro hlavní obsah ([jedno z možných řešení pro inspiraci](https://uicookies.com/demo/#conference))
    *   Samostatný dokument pro každou sekci. V takovém případě použijte sdílený stylový předpis a sdílené záhlaví, zápatí a hlavní nabídku pro všechny takové dokumenty.
*   Texty použité na stránkách si vymyslete. V místech, kde lze předpokládat delší souvislý text (profil apod.) je možno použít generátor výplňkového textu ([Lorem Ipsum](http://www.lipsum.com/), [Pseudo-čeština](http://www.wellstyled.com/tools/)). Použijte dostatečné množství textu formátovaného v souladu s předpokládaným obsahem tak, aby bylo patrné, jak bude stránka ve výsledku vypadat. Nepoužívejte souvislý text ze stránek třetích stran.

### Použití technologií

*   Stránky realizujte pomocí **HTML 5** a CSS. Použití experimentálních rozšíření CSS lze použít za podmínky, že se stránka korektně zobrazí v prohlížečích zmíněných níže.
*   Klíčová pravidla nebo skupiny pravidel v CSS opatřete **stručným komentářem** – zejména řešení rozložení obsahu, specifické hodnoty vlastností apod.
*   Kód stránek musí být validní při kontrole [validátorem W3C](http://validator.w3.org/).
*   **Respektujte obecná [pravidla přístupnosti](http://www.pravidla-pristupnosti.cz/) webových stránek**.
*   Používejte sémantické značkování (záhlaví, sekce, nadpisy, seznamy apod.) tak, aby byl web bez problémů srozumitelný i bez podpory CSS.
*   Nepoužívejte značky a atributy označené ve specifikaci jako zavržené nebo zastaralé.
*   Tabulky používejte **pouze** k prezentaci tabulárních dat, nikoliv k realizaci vizuálního rozložení stránky.
*   Datová velikost prezentace je přiměřená (např. neobsahuje zbytečně velké obrázky ve vysokém rozlišení, pokud to není potřeba).
*   Projekt je rozumně strukturovaný, kód čitelný, vhodně okomentovaný, dodržena štábní kultura.
*   **Veškerý kód musí být vlastním dílem studenta.** Při návrhu vzhledu je možno se inspirovat existujícími stránkami, nelze však převzít žádný kód z cizích webů ani z volně dostupných knihoven. Totéž platí i pro JavaScriptový kód. Využití obecných JS knihoven (např. JQuery) je povoleno. Použití preprocesoru SASS je povoleno. CSS frameworky (např. Bootstrap) **nejsou** povoleny. Přestože se frameworky v praxi často využívají, cílem projektu je ukázat vlastní zvládnutí technologií probíraných v rámci ITW.

### Umístění stránek

*   Vytvořené stránky umístěte na libovolný server přístupný z internetu (např. fakultní, některý freehosting, ...).
*   Titulek webu (záhlaví) bude fungovat jako odkaz na zvolené umístění webu (t.j. na hlavní stránku absolutním URL).

### Odevzdání

Projekt se odevzdává jako jeden archiv ZIP, který obsahuje všechny soubory webu. Jméno odevzdávaného souboru musí být **_vaslogin_.zip**. Tento soubor se odevzdá přes IS VUT. Pokud narazíte na limit velikosti odevzdávaného souboru (cca. 2 MB), odevzdejte v archivu pouze kód bez obrázků a dalších dat. Verzi dostupnou na WWW však samozřejmě nechte kompletní.

Projekt musí být funkční minimálně v prohlížečích Firefox a Chrome v aktuálních verzích (běžně dostupných přes automatické aktualizace).

**Datum odevzdání:** 2. 5. 2025 v 23:59  
**Hodnocení:** max. 30 bodů  
Hodnotit se bude splnění všech výše uvedených kritérií, kvalita zpracování a použitelnost pro daný účel. Samotné splnění všech kritérií neznamená automaticky plný počet bodů. Plného počtu bodů mohou dosáhnout pouze stránky evidentně propracované a použitelné pro daný účel.