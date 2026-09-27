import type { Locale } from "@/lib/i18n"

export type TrialDictionary = {
  navLink: string
  metaTitle: string
  metaDescription: string
  badge: string
  title: string
  subtitle: string
  allChannels: string
  category: string
  search: string
  loading: string
  loadError: string
  retry: string
  noResults: string
  showMore: string
  selectChannel: string
  nowPlaying: string
  playError: string
  notConfigured: string
  channelCount: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

const en: TrialDictionary = {
  navLink: "Free Trial",
  metaTitle: "Free IPTV Trial – Watch Live TV in Your Browser",
  metaDescription:
    "Test STRONG 8K IPTV for free right in your browser. Browse live channels by category and start watching instantly — no app, no sign-up.",
  badge: "Free live test · No sign-up",
  title: "Watch STRONG 8K live, right here",
  subtitle: "Pick a category, choose a channel and it starts playing in your browser. No app and no registration needed.",
  allChannels: "All channels",
  category: "Category",
  search: "Search channels",
  loading: "Loading channels…",
  loadError: "The channel list could not be loaded. Please try again.",
  retry: "Retry",
  noResults: "No channels match your search.",
  showMore: "Show more",
  selectChannel: "Select a channel to start watching",
  nowPlaying: "Now playing",
  playError: "This channel can't play right now. Please try another one.",
  notConfigured: "The free trial is temporarily unavailable. Contact us on WhatsApp for a test line.",
  channelCount: "channels",
  ctaTitle: "Like what you see?",
  ctaText: "Get the full package with 60,000+ channels and 200,000+ movies & series on every device.",
  ctaButton: "Subscribe on WhatsApp",
}

const de: TrialDictionary = {
  navLink: "Gratis testen",
  metaTitle: "Kostenloser IPTV-Test – Live-TV im Browser",
  metaDescription:
    "Teste STRONG 8K IPTV kostenlos direkt im Browser. Sender nach Kategorie durchsuchen und sofort ansehen – ohne App, ohne Anmeldung.",
  badge: "Kostenloser Live-Test · Ohne Anmeldung",
  title: "STRONG 8K live ansehen – direkt hier",
  subtitle: "Kategorie wählen, Sender anklicken und er startet im Browser. Keine App und keine Registrierung nötig.",
  allChannels: "Alle Sender",
  category: "Kategorie",
  search: "Sender suchen",
  loading: "Sender werden geladen…",
  loadError: "Die Senderliste konnte nicht geladen werden. Bitte erneut versuchen.",
  retry: "Erneut versuchen",
  noResults: "Keine Sender gefunden.",
  showMore: "Mehr anzeigen",
  selectChannel: "Wähle einen Sender, um zu starten",
  nowPlaying: "Läuft gerade",
  playError: "Dieser Sender ist gerade nicht verfügbar. Bitte einen anderen wählen.",
  notConfigured: "Der Gratis-Test ist vorübergehend nicht verfügbar. Kontaktiere uns per WhatsApp für eine Testlinie.",
  channelCount: "Sender",
  ctaTitle: "Gefällt es dir?",
  ctaText: "Hol dir das volle Paket mit 60.000+ Sendern und 200.000+ Filmen & Serien auf jedem Gerät.",
  ctaButton: "Per WhatsApp abonnieren",
}

const fr: TrialDictionary = {
  navLink: "Essai gratuit",
  metaTitle: "Essai IPTV gratuit – Regardez la TV en direct dans le navigateur",
  metaDescription:
    "Testez STRONG 8K IPTV gratuitement dans votre navigateur. Parcourez les chaînes par catégorie et regardez immédiatement, sans application ni inscription.",
  badge: "Test en direct gratuit · Sans inscription",
  title: "Regardez STRONG 8K en direct, ici même",
  subtitle: "Choisissez une catégorie puis une chaîne : elle démarre dans votre navigateur. Aucune application ni inscription.",
  allChannels: "Toutes les chaînes",
  category: "Catégorie",
  search: "Rechercher une chaîne",
  loading: "Chargement des chaînes…",
  loadError: "Impossible de charger la liste des chaînes. Veuillez réessayer.",
  retry: "Réessayer",
  noResults: "Aucune chaîne ne correspond.",
  showMore: "Afficher plus",
  selectChannel: "Choisissez une chaîne pour commencer",
  nowPlaying: "En cours",
  playError: "Cette chaîne ne peut pas être lue pour le moment. Essayez-en une autre.",
  notConfigured: "L'essai gratuit est momentanément indisponible. Contactez-nous sur WhatsApp pour une ligne de test.",
  channelCount: "chaînes",
  ctaTitle: "Ça vous plaît ?",
  ctaText: "Profitez du pack complet : 60 000+ chaînes et 200 000+ films et séries sur tous vos appareils.",
  ctaButton: "S'abonner sur WhatsApp",
}

const es: TrialDictionary = {
  navLink: "Prueba gratis",
  metaTitle: "Prueba IPTV gratis – TV en directo en tu navegador",
  metaDescription:
    "Prueba STRONG 8K IPTV gratis en tu navegador. Explora canales por categoría y empieza a ver al instante, sin app ni registro.",
  badge: "Prueba en directo gratis · Sin registro",
  title: "Mira STRONG 8K en directo, aquí mismo",
  subtitle: "Elige una categoría y un canal, y empezará en tu navegador. Sin app y sin registro.",
  allChannels: "Todos los canales",
  category: "Categoría",
  search: "Buscar canales",
  loading: "Cargando canales…",
  loadError: "No se pudo cargar la lista de canales. Inténtalo de nuevo.",
  retry: "Reintentar",
  noResults: "Ningún canal coincide con tu búsqueda.",
  showMore: "Mostrar más",
  selectChannel: "Selecciona un canal para empezar",
  nowPlaying: "Reproduciendo",
  playError: "Este canal no se puede reproducir ahora. Prueba con otro.",
  notConfigured: "La prueba gratis no está disponible temporalmente. Escríbenos por WhatsApp para una línea de prueba.",
  channelCount: "canales",
  ctaTitle: "¿Te gusta?",
  ctaText: "Consigue el paquete completo con más de 60.000 canales y 200.000 películas y series en cualquier dispositivo.",
  ctaButton: "Suscribirse por WhatsApp",
}

const it: TrialDictionary = {
  navLink: "Prova gratis",
  metaTitle: "Prova IPTV gratuita – TV in diretta nel browser",
  metaDescription:
    "Prova STRONG 8K IPTV gratis direttamente nel browser. Sfoglia i canali per categoria e guarda subito, senza app né registrazione.",
  badge: "Test live gratuito · Senza registrazione",
  title: "Guarda STRONG 8K in diretta, qui",
  subtitle: "Scegli una categoria e un canale: parte subito nel browser. Nessuna app e nessuna registrazione.",
  allChannels: "Tutti i canali",
  category: "Categoria",
  search: "Cerca canali",
  loading: "Caricamento canali…",
  loadError: "Impossibile caricare l'elenco dei canali. Riprova.",
  retry: "Riprova",
  noResults: "Nessun canale trovato.",
  showMore: "Mostra altri",
  selectChannel: "Seleziona un canale per iniziare",
  nowPlaying: "In onda",
  playError: "Questo canale non è disponibile ora. Provane un altro.",
  notConfigured: "La prova gratuita non è al momento disponibile. Contattaci su WhatsApp per una linea di test.",
  channelCount: "canali",
  ctaTitle: "Ti piace?",
  ctaText: "Ottieni il pacchetto completo con oltre 60.000 canali e 200.000 film e serie su ogni dispositivo.",
  ctaButton: "Abbonati su WhatsApp",
}

const pt: TrialDictionary = {
  navLink: "Teste grátis",
  metaTitle: "Teste IPTV grátis – TV ao vivo no navegador",
  metaDescription:
    "Teste o STRONG 8K IPTV grátis no seu navegador. Explore canais por categoria e comece a ver de imediato, sem app nem registo.",
  badge: "Teste ao vivo grátis · Sem registo",
  title: "Veja STRONG 8K ao vivo, aqui mesmo",
  subtitle: "Escolha uma categoria e um canal e ele começa no navegador. Sem app e sem registo.",
  allChannels: "Todos os canais",
  category: "Categoria",
  search: "Pesquisar canais",
  loading: "A carregar canais…",
  loadError: "Não foi possível carregar a lista de canais. Tente novamente.",
  retry: "Tentar novamente",
  noResults: "Nenhum canal corresponde à pesquisa.",
  showMore: "Mostrar mais",
  selectChannel: "Selecione um canal para começar",
  nowPlaying: "A reproduzir",
  playError: "Este canal não está disponível agora. Experimente outro.",
  notConfigured: "O teste grátis está temporariamente indisponível. Fale connosco no WhatsApp para uma linha de teste.",
  channelCount: "canais",
  ctaTitle: "Está a gostar?",
  ctaText: "Obtenha o pacote completo com mais de 60.000 canais e 200.000 filmes e séries em qualquer dispositivo.",
  ctaButton: "Subscrever no WhatsApp",
}

const nl: TrialDictionary = {
  navLink: "Gratis proberen",
  metaTitle: "Gratis IPTV-test – Live tv in je browser",
  metaDescription:
    "Test STRONG 8K IPTV gratis in je browser. Blader door zenders per categorie en kijk direct, zonder app of registratie.",
  badge: "Gratis live test · Geen registratie",
  title: "Kijk STRONG 8K live, gewoon hier",
  subtitle: "Kies een categorie en een zender en hij start in je browser. Geen app en geen registratie nodig.",
  allChannels: "Alle zenders",
  category: "Categorie",
  search: "Zenders zoeken",
  loading: "Zenders laden…",
  loadError: "De zenderlijst kon niet worden geladen. Probeer het opnieuw.",
  retry: "Opnieuw proberen",
  noResults: "Geen zenders gevonden.",
  showMore: "Meer tonen",
  selectChannel: "Kies een zender om te beginnen",
  nowPlaying: "Nu bezig",
  playError: "Deze zender kan nu niet worden afgespeeld. Probeer een andere.",
  notConfigured: "De gratis test is tijdelijk niet beschikbaar. Neem contact op via WhatsApp voor een testlijn.",
  channelCount: "zenders",
  ctaTitle: "Bevalt het?",
  ctaText: "Neem het volledige pakket met 60.000+ zenders en 200.000+ films en series op elk apparaat.",
  ctaButton: "Abonneren via WhatsApp",
}

const pl: TrialDictionary = {
  navLink: "Darmowy test",
  metaTitle: "Darmowy test IPTV – telewizja na żywo w przeglądarce",
  metaDescription:
    "Przetestuj STRONG 8K IPTV za darmo w przeglądarce. Przeglądaj kanały według kategorii i oglądaj od razu, bez aplikacji i rejestracji.",
  badge: "Darmowy test na żywo · Bez rejestracji",
  title: "Oglądaj STRONG 8K na żywo, tutaj",
  subtitle: "Wybierz kategorię i kanał, a odtwarzanie zacznie się w przeglądarce. Bez aplikacji i bez rejestracji.",
  allChannels: "Wszystkie kanały",
  category: "Kategoria",
  search: "Szukaj kanałów",
  loading: "Ładowanie kanałów…",
  loadError: "Nie udało się wczytać listy kanałów. Spróbuj ponownie.",
  retry: "Spróbuj ponownie",
  noResults: "Brak pasujących kanałów.",
  showMore: "Pokaż więcej",
  selectChannel: "Wybierz kanał, aby zacząć oglądać",
  nowPlaying: "Teraz odtwarzane",
  playError: "Tego kanału nie można teraz odtworzyć. Wybierz inny.",
  notConfigured: "Darmowy test jest chwilowo niedostępny. Napisz do nas na WhatsApp po linię testową.",
  channelCount: "kanałów",
  ctaTitle: "Podoba ci się?",
  ctaText: "Zamów pełny pakiet z ponad 60 000 kanałów i 200 000 filmów i seriali na każdym urządzeniu.",
  ctaButton: "Subskrybuj przez WhatsApp",
}

const sv: TrialDictionary = {
  navLink: "Gratis test",
  metaTitle: "Gratis IPTV-test – Live-tv i webbläsaren",
  metaDescription:
    "Testa STRONG 8K IPTV gratis direkt i webbläsaren. Bläddra bland kanaler per kategori och titta direkt, utan app och registrering.",
  badge: "Gratis livetest · Ingen registrering",
  title: "Titta på STRONG 8K live, direkt här",
  subtitle: "Välj en kategori och en kanal så startar den i webbläsaren. Ingen app och ingen registrering.",
  allChannels: "Alla kanaler",
  category: "Kategori",
  search: "Sök kanaler",
  loading: "Laddar kanaler…",
  loadError: "Kanallistan kunde inte laddas. Försök igen.",
  retry: "Försök igen",
  noResults: "Inga kanaler matchar sökningen.",
  showMore: "Visa fler",
  selectChannel: "Välj en kanal för att börja titta",
  nowPlaying: "Spelas nu",
  playError: "Den här kanalen kan inte spelas just nu. Prova en annan.",
  notConfigured: "Gratistestet är tillfälligt otillgängligt. Kontakta oss på WhatsApp för en testlinje.",
  channelCount: "kanaler",
  ctaTitle: "Gillar du det?",
  ctaText: "Skaffa hela paketet med 60 000+ kanaler och 200 000+ filmer och serier på alla enheter.",
  ctaButton: "Prenumerera via WhatsApp",
}

const ro: TrialDictionary = {
  navLink: "Test gratuit",
  metaTitle: "Test IPTV gratuit – TV live în browser",
  metaDescription:
    "Testează STRONG 8K IPTV gratuit direct în browser. Răsfoiește canalele pe categorii și urmărește imediat, fără aplicație sau înregistrare.",
  badge: "Test live gratuit · Fără înregistrare",
  title: "Urmărește STRONG 8K live, chiar aici",
  subtitle: "Alege o categorie și un canal, iar redarea începe în browser. Fără aplicație și fără înregistrare.",
  allChannels: "Toate canalele",
  category: "Categorie",
  search: "Caută canale",
  loading: "Se încarcă canalele…",
  loadError: "Lista de canale nu a putut fi încărcată. Încearcă din nou.",
  retry: "Reîncearcă",
  noResults: "Niciun canal nu corespunde căutării.",
  showMore: "Arată mai multe",
  selectChannel: "Alege un canal pentru a începe",
  nowPlaying: "Se redă acum",
  playError: "Acest canal nu poate fi redat acum. Încearcă altul.",
  notConfigured: "Testul gratuit este momentan indisponibil. Scrie-ne pe WhatsApp pentru o linie de test.",
  channelCount: "canale",
  ctaTitle: "Îți place?",
  ctaText: "Ia pachetul complet cu peste 60.000 de canale și 200.000 de filme și seriale pe orice dispozitiv.",
  ctaButton: "Abonează-te pe WhatsApp",
}

const el: TrialDictionary = {
  navLink: "Δωρεάν δοκιμή",
  metaTitle: "Δωρεάν δοκιμή IPTV – Ζωντανή TV στον browser",
  metaDescription:
    "Δοκιμάστε δωρεάν το STRONG 8K IPTV στον browser σας. Περιηγηθείτε στα κανάλια ανά κατηγορία και δείτε αμέσως, χωρίς εφαρμογή ή εγγραφή.",
  badge: "Δωρεάν ζωντανή δοκιμή · Χωρίς εγγραφή",
  title: "Δείτε το STRONG 8K ζωντανά, εδώ",
  subtitle: "Επιλέξτε κατηγορία και κανάλι και ξεκινά στον browser. Χωρίς εφαρμογή και χωρίς εγγραφή.",
  allChannels: "Όλα τα κανάλια",
  category: "Κατηγορία",
  search: "Αναζήτηση καναλιών",
  loading: "Φόρτωση καναλιών…",
  loadError: "Δεν ήταν δυνατή η φόρτωση της λίστας καναλιών. Δοκιμάστε ξανά.",
  retry: "Δοκιμάστε ξανά",
  noResults: "Δεν βρέθηκαν κανάλια.",
  showMore: "Περισσότερα",
  selectChannel: "Επιλέξτε ένα κανάλι για να ξεκινήσετε",
  nowPlaying: "Παίζει τώρα",
  playError: "Αυτό το κανάλι δεν παίζει αυτή τη στιγμή. Δοκιμάστε άλλο.",
  notConfigured: "Η δωρεάν δοκιμή δεν είναι διαθέσιμη προσωρινά. Επικοινωνήστε μαζί μας στο WhatsApp για γραμμή δοκιμής.",
  channelCount: "κανάλια",
  ctaTitle: "Σας αρέσει;",
  ctaText: "Αποκτήστε το πλήρες πακέτο με 60.000+ κανάλια και 200.000+ ταινίες και σειρές σε κάθε συσκευή.",
  ctaButton: "Εγγραφή μέσω WhatsApp",
}

const ru: TrialDictionary = {
  navLink: "Бесплатный тест",
  metaTitle: "Бесплатный тест IPTV – ТВ онлайн в браузере",
  metaDescription:
    "Протестируйте STRONG 8K IPTV бесплатно прямо в браузере. Выбирайте каналы по категориям и смотрите сразу — без приложения и регистрации.",
  badge: "Бесплатный live-тест · Без регистрации",
  title: "Смотрите STRONG 8K онлайн прямо здесь",
  subtitle: "Выберите категорию и канал — воспроизведение начнётся в браузере. Без приложения и регистрации.",
  allChannels: "Все каналы",
  category: "Категория",
  search: "Поиск каналов",
  loading: "Загрузка каналов…",
  loadError: "Не удалось загрузить список каналов. Попробуйте ещё раз.",
  retry: "Повторить",
  noResults: "Каналы не найдены.",
  showMore: "Показать ещё",
  selectChannel: "Выберите канал, чтобы начать просмотр",
  nowPlaying: "Сейчас в эфире",
  playError: "Этот канал сейчас недоступен. Попробуйте другой.",
  notConfigured: "Бесплатный тест временно недоступен. Напишите нам в WhatsApp, чтобы получить тестовую линию.",
  channelCount: "каналов",
  ctaTitle: "Понравилось?",
  ctaText: "Оформите полный пакет: 60 000+ каналов и 200 000+ фильмов и сериалов на любом устройстве.",
  ctaButton: "Подписаться в WhatsApp",
}

const trialDictionaries: Record<Locale, TrialDictionary> = { en, de, fr, es, it, pt, nl, pl, sv, ro, el, ru }

export function getTrialDictionary(locale: Locale): TrialDictionary {
  return trialDictionaries[locale] ?? en
}
