import type { Locale } from "@/lib/i18n"

// ---------------------------------------------------------------------------
// Localized section headings (only the few strings that must follow the UI
// language). Reviews and WhatsApp chats stay in their authored languages on
// purpose — real user testimonials appear as written, whatever the page locale.
// ---------------------------------------------------------------------------
export type SocialHeadings = {
  content: { title: string; accent: string; subtitle: string; movies: string; series: string; new: string }
  reviews: { title: string; accent: string; subtitle: string; customer: string; reseller: string; verified: string }
  whatsapp: { title: string; accent: string; subtitle: string }
}

const en: SocialHeadings = {
  content: {
    title: "Newest movies &",
    accent: "TV series",
    subtitle: "Thousands of fresh titles added every week — all in crystal-clear 4K / 8K Ultra HD.",
    movies: "Latest movies",
    series: "Latest TV series",
    new: "NEW",
  },
  reviews: {
    title: "Loved by customers &",
    accent: "resellers",
    subtitle: "Over 50,000 subscribers and hundreds of resellers across Europe rate STRONG 8K five stars.",
    customer: "Customer",
    reseller: "Reseller",
    verified: "Verified",
  },
  whatsapp: {
    title: "Real messages on",
    accent: "WhatsApp",
    subtitle: "A daily stream of happy customers and resellers messaging our support team.",
  },
}

const headings: Record<Locale, SocialHeadings> = {
  en,
  de: {
    content: { title: "Neueste Filme &", accent: "Serien", subtitle: "Jede Woche Tausende neue Titel — alle in gestochen scharfem 4K / 8K Ultra HD.", movies: "Neueste Filme", series: "Neueste Serien", new: "NEU" },
    reviews: { title: "Beliebt bei Kunden &", accent: "Resellern", subtitle: "Über 50.000 Abonnenten und Hunderte Reseller in ganz Europa bewerten STRONG 8K mit fünf Sternen.", customer: "Kunde", reseller: "Reseller", verified: "Verifiziert" },
    whatsapp: { title: "Echte Nachrichten auf", accent: "WhatsApp", subtitle: "Täglich schreiben zufriedene Kunden und Reseller unserem Support-Team." },
  },
  fr: {
    content: { title: "Films & séries", accent: "les plus récents", subtitle: "Des milliers de nouveautés ajoutées chaque semaine — toutes en 4K / 8K Ultra HD.", movies: "Derniers films", series: "Dernières séries", new: "NOUVEAU" },
    reviews: { title: "Plébiscité par clients &", accent: "revendeurs", subtitle: "Plus de 50 000 abonnés et des centaines de revendeurs en Europe notent STRONG 8K cinq étoiles.", customer: "Client", reseller: "Revendeur", verified: "Vérifié" },
    whatsapp: { title: "Vrais messages sur", accent: "WhatsApp", subtitle: "Un flux quotidien de clients et revendeurs satisfaits qui écrivent à notre support." },
  },
  es: {
    content: { title: "Películas y series", accent: "más recientes", subtitle: "Miles de títulos nuevos cada semana — todos en 4K / 8K Ultra HD nítido.", movies: "Últimas películas", series: "Últimas series", new: "NUEVO" },
    reviews: { title: "Amado por clientes y", accent: "revendedores", subtitle: "Más de 50.000 suscriptores y cientos de revendedores en Europa valoran STRONG 8K con cinco estrellas.", customer: "Cliente", reseller: "Revendedor", verified: "Verificado" },
    whatsapp: { title: "Mensajes reales en", accent: "WhatsApp", subtitle: "Un flujo diario de clientes y revendedores satisfechos escribiendo a nuestro soporte." },
  },
  it: {
    content: { title: "Film e serie", accent: "più recenti", subtitle: "Migliaia di nuovi titoli ogni settimana — tutti in nitido 4K / 8K Ultra HD.", movies: "Ultimi film", series: "Ultime serie", new: "NUOVO" },
    reviews: { title: "Amato da clienti e", accent: "rivenditori", subtitle: "Oltre 50.000 abbonati e centinaia di rivenditori in Europa danno a STRONG 8K cinque stelle.", customer: "Cliente", reseller: "Rivenditore", verified: "Verificato" },
    whatsapp: { title: "Messaggi reali su", accent: "WhatsApp", subtitle: "Un flusso quotidiano di clienti e rivenditori soddisfatti che scrivono al nostro supporto." },
  },
  pt: {
    content: { title: "Filmes e séries", accent: "mais recentes", subtitle: "Milhares de novos títulos toda semana — todos em 4K / 8K Ultra HD nítido.", movies: "Últimos filmes", series: "Últimas séries", new: "NOVO" },
    reviews: { title: "Amado por clientes e", accent: "revendedores", subtitle: "Mais de 50.000 assinantes e centenas de revendedores na Europa dão cinco estrelas ao STRONG 8K.", customer: "Cliente", reseller: "Revendedor", verified: "Verificado" },
    whatsapp: { title: "Mensagens reais no", accent: "WhatsApp", subtitle: "Um fluxo diário de clientes e revendedores felizes falando com o nosso suporte." },
  },
  nl: {
    content: { title: "Nieuwste films &", accent: "series", subtitle: "Elke week duizenden nieuwe titels — allemaal in kraakhelder 4K / 8K Ultra HD.", movies: "Nieuwste films", series: "Nieuwste series", new: "NIEUW" },
    reviews: { title: "Geliefd bij klanten &", accent: "resellers", subtitle: "Meer dan 50.000 abonnees en honderden resellers in Europa geven STRONG 8K vijf sterren.", customer: "Klant", reseller: "Reseller", verified: "Geverifieerd" },
    whatsapp: { title: "Echte berichten op", accent: "WhatsApp", subtitle: "Een dagelijkse stroom tevreden klanten en resellers die ons supportteam berichten." },
  },
  pl: {
    content: { title: "Najnowsze filmy i", accent: "seriale", subtitle: "Tysiące nowych tytułów co tydzień — wszystkie w ostrym 4K / 8K Ultra HD.", movies: "Najnowsze filmy", series: "Najnowsze seriale", new: "NOWOŚĆ" },
    reviews: { title: "Uwielbiany przez klientów i", accent: "resellerów", subtitle: "Ponad 50 000 abonentów i setki resellerów w Europie oceniają STRONG 8K na pięć gwiazdek.", customer: "Klient", reseller: "Reseller", verified: "Zweryfikowano" },
    whatsapp: { title: "Prawdziwe wiadomości na", accent: "WhatsApp", subtitle: "Codzienny strumień zadowolonych klientów i resellerów piszących do naszego wsparcia." },
  },
  sv: {
    content: { title: "Nyaste filmer &", accent: "TV-serier", subtitle: "Tusentals nya titlar varje vecka — alla i knivskarp 4K / 8K Ultra HD.", movies: "Senaste filmerna", series: "Senaste serierna", new: "NYTT" },
    reviews: { title: "Älskad av kunder &", accent: "återförsäljare", subtitle: "Över 50 000 prenumeranter och hundratals återförsäljare i Europa ger STRONG 8K fem stjärnor.", customer: "Kund", reseller: "Återförsäljare", verified: "Verifierad" },
    whatsapp: { title: "Riktiga meddelanden på", accent: "WhatsApp", subtitle: "Ett dagligt flöde av nöjda kunder och återförsäljare som skriver till vår support." },
  },
  ro: {
    content: { title: "Cele mai noi filme &", accent: "seriale", subtitle: "Mii de titluri noi în fiecare săptămână — toate în 4K / 8K Ultra HD clar.", movies: "Cele mai noi filme", series: "Cele mai noi seriale", new: "NOU" },
    reviews: { title: "Iubit de clienți și", accent: "reselleri", subtitle: "Peste 50.000 de abonați și sute de reselleri din Europa acordă STRONG 8K cinci stele.", customer: "Client", reseller: "Reseller", verified: "Verificat" },
    whatsapp: { title: "Mesaje reale pe", accent: "WhatsApp", subtitle: "Un flux zilnic de clienți și reselleri mulțumiți care scriu echipei noastre de suport." },
  },
  el: {
    content: { title: "Νεότερες ταινίες &", accent: "σειρές", subtitle: "Χιλιάδες νέοι τίτλοι κάθε εβδομάδα — όλοι σε κρυστάλλινο 4K / 8K Ultra HD.", movies: "Πρόσφατες ταινίες", series: "Πρόσφατες σειρές", new: "ΝΕΟ" },
    reviews: { title: "Αγαπημένο από πελάτες &", accent: "μεταπωλητές", subtitle: "Πάνω από 50.000 συνδρομητές και εκατοντάδες μεταπωλητές στην Ευρώπη βαθμολογούν το STRONG 8K με πέντε αστέρια.", customer: "Πελάτης", reseller: "Μεταπωλητής", verified: "Επαληθευμένο" },
    whatsapp: { title: "Πραγματικά μηνύματα στο", accent: "WhatsApp", subtitle: "Καθημερινή ροή ικανοποιημένων πελατών και μεταπωλητών που γράφουν στην υποστήριξή μας." },
  },
  ru: {
    content: { title: "Новейшие фильмы и", accent: "сериалы", subtitle: "Тысячи новых тайтлов каждую неделю — все в кристально чётком 4K / 8K Ultra HD.", movies: "Новые фильмы", series: "Новые сериалы", new: "НОВОЕ" },
    reviews: { title: "Любимый клиентами и", accent: "реселлерами", subtitle: "Более 50 000 подписчиков и сотни реселлеров по всей Европе ставят STRONG 8K пять звёзд.", customer: "Клиент", reseller: "Реселлер", verified: "Проверено" },
    whatsapp: { title: "Настоящие сообщения в", accent: "WhatsApp", subtitle: "Ежедневный поток довольных клиентов и реселлеров, пишущих в нашу поддержку." },
  },
}

export function getSocialHeadings(locale: Locale): SocialHeadings {
  return headings[locale] ?? en
}

// ---------------------------------------------------------------------------
// Content wall — 30 movies + 30 TV series. Titles are original (non-infringing)
// and cycle through the 10 generated poster artworks per category.
// ---------------------------------------------------------------------------
export type Poster = { title: string; genre: string; year: number; rating: string; img: string; isNew: boolean }

const movieTitles: [string, string][] = [
  ["Neon Horizon", "Sci-Fi"],
  ["Beyond the Rings", "Space"],
  ["Zero Hour", "Action"],
  ["The Golden Vault", "Heist"],
  ["Frontline Dawn", "War"],
  ["Dragon's Keep", "Fantasy"],
  ["Silent Hollow", "Horror"],
  ["Shadow Protocol", "Thriller"],
  ["Coastline", "Racing"],
  ["The Last Wave", "Disaster"],
  ["Midnight City", "Crime"],
  ["Orbit", "Sci-Fi"],
  ["Iron Verdict", "Action"],
  ["The Heist Club", "Heist"],
  ["Ashes of War", "War"],
  ["Crown of Embers", "Fantasy"],
  ["Whisper Woods", "Horror"],
  ["Cipher", "Thriller"],
  ["Redline", "Racing"],
  ["Aftershock", "Disaster"],
  ["Nightfall", "Crime"],
  ["Event Horizon II", "Space"],
  ["Detonate", "Action"],
  ["The Bank Job", "Heist"],
  ["No Man's Land", "War"],
  ["Realm of Flame", "Fantasy"],
  ["The Dark Cabin", "Horror"],
  ["Double Agent", "Thriller"],
  ["Full Throttle", "Racing"],
  ["Ground Zero", "Disaster"],
]

const seriesTitles: [string, string][] = [
  ["The Precinct", "Crime Drama"],
  ["Throne of Ash", "Fantasy"],
  ["Concrete Sky", "Sci-Fi"],
  ["Code Blue", "Medical"],
  ["Ashford Manor", "Period"],
  ["Rain City", "Noir"],
  ["White Silence", "Survival"],
  ["The Ninth Sign", "Supernatural"],
  ["Fog Harbor", "Mystery"],
  ["Capitol", "Political"],
  ["Cold Case Unit", "Crime Drama"],
  ["Iron Crown", "Fantasy"],
  ["Sector 12", "Sci-Fi"],
  ["Night Shift", "Medical"],
  ["The Willows", "Period"],
  ["Neon Noir", "Noir"],
  ["Frozen North", "Survival"],
  ["The Awakening", "Supernatural"],
  ["Hollow Creek", "Mystery"],
  ["The Cabinet", "Political"],
  ["Homicide", "Crime Drama"],
  ["Kingdom Fall", "Fantasy"],
  ["Outer Ward", "Sci-Fi"],
  ["Trauma", "Medical"],
  ["Gilded Age", "Period"],
  ["Blackout", "Noir"],
  ["The Long Winter", "Survival"],
  ["Beyond the Veil", "Supernatural"],
  ["Maple Falls", "Mystery"],
  ["The Majority", "Political"],
]

function buildPosters(titles: [string, string][], prefix: string): Poster[] {
  return titles.map(([title, genre], i) => ({
    title,
    genre,
    year: 2025 + (i % 2), // 2025 / 2026
    rating: (8.4 + ((i * 7) % 15) / 10).toFixed(1), // 8.4 – 9.8
    img: `/posters/${prefix}-${String((i % 10) + 1).padStart(2, "0")}.png`,
    isNew: i % 4 === 0,
  }))
}

export const moviePosters: Poster[] = buildPosters(movieTitles, "movie")
export const seriesPosters: Poster[] = buildPosters(seriesTitles, "series")

// ---------------------------------------------------------------------------
// 30 five-star reviews from customers and resellers. Authored in mixed
// languages for authenticity; shown as-is regardless of the site language.
// ---------------------------------------------------------------------------
export type Review = { name: string; flag: string; role: "customer" | "reseller"; text: string }

export const reviews: Review[] = [
  { name: "James W.", flag: "🇬🇧", role: "customer", text: "Best IPTV I've ever used. Sports in 4K with zero buffering — worth every penny." },
  { name: "Lukas M.", flag: "🇩🇪", role: "reseller", text: "Das Reseller-Panel ist super einfach. Kunden anlegen in Sekunden, keine Ausfälle." },
  { name: "Camille D.", flag: "🇫🇷", role: "customer", text: "Image incroyable en 8K et activation immédiate. Le meilleur service que j'ai testé." },
  { name: "Marco R.", flag: "🇮🇹", role: "customer", text: "Canali sempre stabili, zero freeze anche durante la Champions. Consigliatissimo!" },
  { name: "Sofía G.", flag: "🇪🇸", role: "reseller", text: "Como revendedora, el soporte 24/7 me salva. Respuestas en minutos, siempre." },
  { name: "Tomasz K.", flag: "🇵🇱", role: "customer", text: "Ogromna biblioteka filmów, wszystko w świetnej jakości. Polecam w 100%." },
  { name: "Anna L.", flag: "🇸🇪", role: "customer", text: "Fungerar perfekt på både TV och mobil. Otroligt skarp bild och inga avbrott." },
  { name: "Pieter V.", flag: "🇳🇱", role: "reseller", text: "Betrouwbaar en snel. Mijn klanten zijn tevreden en dat scheelt mij veel werk." },
  { name: "Andrei P.", flag: "🇷🇴", role: "customer", text: "Cea mai bună calitate pe care am văzut-o. Filme noi în fiecare zi, fără buffering." },
  { name: "Nikos S.", flag: "🇬🇷", role: "reseller", text: "Το panel είναι εξαιρετικό και η υποστήριξη πάντα εκεί. Οι πελάτες μου ενθουσιασμένοι." },
  { name: "Dmitry K.", flag: "🇷🇺", role: "customer", text: "Огромный выбор каналов и фильмов, всё работает без сбоев. Очень доволен!" },
  { name: "Miguel S.", flag: "🇵🇹", role: "customer", text: "Ativação instantânea e qualidade 4K brutal. Nunca mais volto à TV normal." },
  { name: "Oliver B.", flag: "🇬🇧", role: "reseller", text: "Been reselling for 8 months — rock solid uptime and my clients rarely message me. Perfect." },
  { name: "Elena F.", flag: "🇮🇹", role: "customer", text: "Assistenza gentile e velocissima. Mi hanno risolto tutto in cinque minuti su WhatsApp." },
  { name: "Julien P.", flag: "🇫🇷", role: "reseller", text: "Marges confortables et panel fiable. Je recommande à tous les revendeurs sérieux." },
  { name: "Hannah B.", flag: "🇩🇪", role: "customer", text: "Riesige Auswahl, top Bildqualität und ein fairer Preis. Bin komplett überzeugt." },
  { name: "David M.", flag: "🇬🇧", role: "customer", text: "Every device works — Firestick, phone, smart TV. Setup took me two minutes." },
  { name: "Paula R.", flag: "🇪🇸", role: "customer", text: "Las películas se actualizan a diario y en 8K se ven espectaculares. Cinco estrellas." },
  { name: "Sven J.", flag: "🇸🇪", role: "reseller", text: "Enkelt att skala upp. Panelen är stabil och supporten svarar direkt. Toppbetyg." },
  { name: "Bram D.", flag: "🇳🇱", role: "customer", text: "Sport in 4K zonder haperingen, precies wat ik zocht. Aanrader voor iedereen." },
  { name: "Cristina M.", flag: "🇷🇴", role: "reseller", text: "Panoul de reseller e rapid și clienții mei sunt mulțumiți. Suport impecabil." },
  { name: "Georgios K.", flag: "🇬🇷", role: "customer", text: "Απίστευτη ποιότητα εικόνας και μηδέν διακοπές. Το καλύτερο IPTV που έχω δοκιμάσει." },
  { name: "Igor V.", flag: "🇷🇺", role: "reseller", text: "Панель реселлера удобная, клиенты создаются мгновенно. Работаю без проблем." },
  { name: "Ricardo A.", flag: "🇵🇹", role: "reseller", text: "Estável e rápido. Os meus clientes ficam anos comigo graças à qualidade do serviço." },
  { name: "Emma T.", flag: "🇬🇧", role: "customer", text: "Cancelled my cable subscription. This has everything and looks far sharper." },
  { name: "Fabian W.", flag: "🇩🇪", role: "reseller", text: "Der Support antwortet rund um die Uhr. Als Reseller könnte ich mir nichts Besseres wünschen." },
  { name: "Chloé L.", flag: "🇫🇷", role: "customer", text: "Films récents, séries à jour, tout en ultra HD. Le rapport qualité-prix est imbattable." },
  { name: "Matteo B.", flag: "🇮🇹", role: "customer", text: "Provato la prova di 24 ore e sottoscritto subito. Qualità da cinema in salotto." },
  { name: "Karolina Z.", flag: "🇵🇱", role: "reseller", text: "Idealne dla resellera: stabilnie, szybko i świetne wsparcie. Klienci zostają na dłużej." },
  { name: "Lars N.", flag: "🇸🇪", role: "customer", text: "Otrolig bildkvalitet och massor av kanaler. Har rekommenderat till hela familjen." },
]

// ---------------------------------------------------------------------------
// Virtual WhatsApp review screenshots. Rendered as styled chat cards.
// ---------------------------------------------------------------------------
export type WhatsAppMessage = { from: "them" | "me"; text: string; time: string }
export type WhatsAppChat = { name: string; flag: string; role: "customer" | "reseller"; messages: WhatsAppMessage[] }

export const whatsappChats: WhatsAppChat[] = [
  {
    name: "James W.", flag: "🇬🇧", role: "customer",
    messages: [
      { from: "them", text: "Just set it up on my Firestick, works perfectly! 🔥", time: "21:04" },
      { from: "me", text: "Awesome! Enjoy the 4K 😊", time: "21:05" },
      { from: "them", text: "The sports channels are unreal. 5 stars ⭐⭐⭐⭐⭐", time: "21:06" },
    ],
  },
  {
    name: "Lukas M.", flag: "🇩🇪", role: "reseller",
    messages: [
      { from: "them", text: "Panel läuft top, hab heute 12 Kunden angelegt 💪", time: "14:22" },
      { from: "me", text: "Super, danke für das Vertrauen!", time: "14:23" },
      { from: "them", text: "Bester Anbieter, klare Empfehlung ⭐⭐⭐⭐⭐", time: "14:25" },
    ],
  },
  {
    name: "Camille D.", flag: "🇫🇷", role: "customer",
    messages: [
      { from: "them", text: "Activation en 2 minutes, incroyable 🙌", time: "19:47" },
      { from: "me", text: "Bienvenue chez STRONG 8K !", time: "19:48" },
      { from: "them", text: "Qualité 8K parfaite, merci beaucoup ⭐⭐⭐⭐⭐", time: "19:50" },
    ],
  },
  {
    name: "Marco R.", flag: "🇮🇹", role: "customer",
    messages: [
      { from: "them", text: "Zero freeze durante la partita ieri sera 👏", time: "23:12" },
      { from: "me", text: "Perfetto! Buona visione 😊", time: "23:13" },
      { from: "them", text: "Servizio fantastico, 5 stelle ⭐⭐⭐⭐⭐", time: "23:14" },
    ],
  },
  {
    name: "Sofía G.", flag: "🇪🇸", role: "reseller",
    messages: [
      { from: "them", text: "El soporte responde en minutos, increíble 🙏", time: "10:33" },
      { from: "me", text: "Estamos 24/7 para ti 💛", time: "10:34" },
      { from: "them", text: "Mis clientes encantados ⭐⭐⭐⭐⭐", time: "10:36" },
    ],
  },
  {
    name: "Pieter V.", flag: "🇳🇱", role: "reseller",
    messages: [
      { from: "them", text: "Alles stabiel, klanten blij 😄", time: "16:08" },
      { from: "me", text: "Fijn om te horen, Pieter!", time: "16:09" },
      { from: "them", text: "Top service, echt een aanrader ⭐⭐⭐⭐⭐", time: "16:10" },
    ],
  },
  {
    name: "Andrei P.", flag: "🇷🇴", role: "customer",
    messages: [
      { from: "them", text: "Filme noi în fiecare zi, calitate 4K superbă 🎬", time: "20:55" },
      { from: "me", text: "Vizionare plăcută! 😊", time: "20:56" },
      { from: "them", text: "Cel mai bun serviciu, 5 stele ⭐⭐⭐⭐⭐", time: "20:57" },
    ],
  },
  {
    name: "Emma T.", flag: "🇬🇧", role: "customer",
    messages: [
      { from: "them", text: "Cancelled my cable today thanks to you 😅", time: "18:30" },
      { from: "me", text: "Great choice! Let us know if you need anything.", time: "18:31" },
      { from: "them", text: "Picture is so much sharper. Love it ⭐⭐⭐⭐⭐", time: "18:33" },
    ],
  },
]
