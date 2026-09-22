// Full UI translations for STRONG 8K, one entry per supported locale.
// The English entry defines the canonical shape via the Dictionary type.

export type Dictionary = {
  meta: { title: string; description: string }
  nav: {
    features: string
    content: string
    pricing: string
    faq: string
    subscribe: string
    openMenu: string
    closeMenu: string
    home: string
    selectLanguage: string
  }
  hero: {
    badge: string
    titleLine1: string
    titleLine2: string
    paragraph: string
    trial: string
    viewPlans: string
    bullets: [string, string, string]
    imageAlt: string
  }
  stats: { channels: string; movies: string; uptime: string; support: string }
  features: {
    heading: string
    subtitle: string
    items: { title: string; desc: string }[]
  }
  showcase: {
    titleLead: string
    titleAccent: string
    paragraph: string
    points: string[]
    imageAlt: string
  }
  pricing: {
    heading: string
    subtitle: string
    mostPopular: string
    choose: string
    perMonth: string
    perYear: string
    plans: { name: string; desc: string; features: string[] }[]
  }
  faq: {
    heading: string
    subtitle: string
    items: { q: string; a: string }[]
  }
  cta: { heading: string; paragraph: string; startTrial: string; contact: string }
  footer: { features: string; pricing: string; faq: string; privacy: string; rights: string }
}

const en: Dictionary = {
  meta: {
    title: "STRONG 8K | Premium IPTV Subscription & Reseller Panel in Europe",
    description:
      "STRONG 8K is a premium European IPTV service with 60,000+ live channels and 200,000+ movies & series in stable 4K/8K Ultra HD. Buy an IPTV subscription or start reselling with our dedicated IPTV reseller panel.",
  },
  nav: {
    features: "Features",
    content: "Content",
    pricing: "Pricing",
    faq: "FAQ",
    subscribe: "Subscribe Now",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "STRONG 8K home",
    selectLanguage: "Select language",
  },
  hero: {
    badge: "The all-new 8K Ultra HD live experience",
    titleLine1: "Premium IPTV subscription",
    titleLine2: "in STRONG 8K clarity",
    paragraph:
      "The premium European IPTV service: over 60,000 live channels and 200,000 movies & series on demand in 4K/8K Ultra HD — sports, cinema and shows from across Europe and the world. Anti-freeze servers, every device supported, plus a dedicated IPTV reseller panel. Start watching in minutes.",
    trial: "Free 24-hour trial",
    viewPlans: "View plans",
    bullets: ["Instant activation", "99.9% uptime", "No contract"],
    imageAlt: "STRONG 8K streaming interface on an ultra-thin smart TV",
  },
  stats: { channels: "Live channels", movies: "Movies & series", uptime: "Server uptime", support: "Customer support" },
  features: {
    heading: "Why choose STRONG 8K IPTV",
    subtitle:
      "A top-tier IPTV subscription built for reliability — so you enjoy every single frame, on any device, anywhere in Europe.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "High-bitrate encoding with adaptive streaming delivers cinema-grade sharpness and color." },
      { title: "Anti-freeze servers", desc: "A high-performance node cluster spread across Europe with anti-buffering tech for smooth, lag-free playback." },
      { title: "Global channel coverage", desc: "Sports, movies, news and kids channels from across Europe, the Americas, Asia and the Middle East." },
      { title: "Every device", desc: "Works on Smart TV, Android, iOS, MAG, Firestick, computers and every major platform." },
      { title: "Stable & secure", desc: "Encrypted delivery and stable routes keep every viewing session safe and reliable." },
      { title: "Round-the-clock support", desc: "A professional technical team is online 24/7 to solve any issue you run into, fast." },
    ],
  },
  showcase: {
    titleLead: "Anywhere,",
    titleAccent: "anytime",
    paragraph:
      "Whether on the big screen in your living room or on your phone during the commute, STRONG 8K delivers the same crisp, smooth experience. With a massive content library, there is always something you will love.",
    points: [
      "One account, one device — always sharp and stable",
      "Live sports · movies · series · kids channels",
      "Latest movies & shows updated daily",
      "EPG program guide and catch-up recording",
    ],
    imageAlt: "STRONG 8K playing in sync across TV, laptop, tablet and phone",
  },
  pricing: {
    heading: "Simple, transparent pricing",
    subtitle: "No hidden fees, no long-term contract. Upgrade or cancel anytime.",
    mostPopular: "Most popular",
    choose: "Choose",
    perMonth: "/ month",
    perYear: "/ year",
    plans: [
      {
        name: "Monthly",
        desc: "Great for trying it out first",
        features: ["60,000+ live channels", "8K / 4K Ultra HD", "1 device per account (no multi-device login)", "Global channel coverage", "Email support"],
      },
      {
        name: "Yearly",
        desc: "Most popular, best value",
        features: ["60,000+ live channels", "200,000+ movies & series", "1 device per account (no multi-device login)", "Anti-freeze high-speed servers", "EPG program guide", "24/7 priority support"],
      },
      {
        name: "Reseller",
        desc: "For distributors and teams",
        features: ["All channels & VOD included", "1 device per sub-account (no multi-device login)", "Dedicated admin panel", "Bulk sub-account creation", "Dedicated account manager"],
      },
    ],
  },
  faq: {
    heading: "Frequently asked questions",
    subtitle: "Still have questions? Here are the ones users ask most.",
    items: [
      { q: "Which devices does STRONG 8K support?", a: "It works on Smart TV, Android, iOS, MAG, Amazon Firestick, Enigma2 and Windows/Mac computers — all major devices." },
      { q: "How soon can I watch after subscribing?", a: "Your subscription is activated instantly after payment. You will receive your login details right away and can start watching within minutes." },
      { q: "Will there be freezing or buffering?", a: "We use globally distributed high-speed servers with anti-buffering technology, delivering smooth, freeze-free playback on a stable connection." },
      { q: "Can I use it on multiple devices at once?", a: "No. Each account works on a single device — logging in on another device signs out the first. This applies to reseller sub-accounts too, so each end user gets one device." },
      { q: "How do I contact support?", a: "We offer 24/7 support. Reach us anytime via live chat on the site, email or our social media channels." },
    ],
  },
  cta: {
    heading: "Ready to start your 8K journey?",
    paragraph: "Start your free 24-hour trial now and experience the sharpness and smoothness of STRONG 8K for yourself.",
    startTrial: "Start free trial",
    contact: "Contact support",
  },
  footer: { features: "Features", pricing: "Pricing", faq: "FAQ", privacy: "Privacy Policy", rights: "All rights reserved." },
}

const de: Dictionary = {
  meta: {
    title: "STRONG 8K | Premium IPTV-Abo & Reseller-Panel in Europa",
    description:
      "STRONG 8K ist ein Premium-IPTV-Dienst für Europa mit über 60.000 Live-Sendern und 200.000+ Filmen & Serien in stabilem 4K/8K Ultra HD. Kaufe ein IPTV-Abo oder starte den Wiederverkauf mit unserem eigenen IPTV-Reseller-Panel.",
  },
  nav: {
    features: "Funktionen",
    content: "Inhalte",
    pricing: "Preise",
    faq: "FAQ",
    subscribe: "Jetzt abonnieren",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    home: "STRONG 8K Startseite",
    selectLanguage: "Sprache auswählen",
  },
  hero: {
    badge: "Das brandneue 8K Ultra HD Live-Erlebnis",
    titleLine1: "Premium IPTV-Abo",
    titleLine2: "in STRONG 8K Schärfe",
    paragraph:
      "Der Premium-IPTV-Dienst für Europa: über 60.000 Live-Sender und 200.000 Filme & Serien auf Abruf in 4K/8K Ultra HD — Sport, Kino und Shows aus ganz Europa und der Welt. Anti-Freeze-Server, jedes Gerät unterstützt, plus ein eigenes IPTV-Reseller-Panel. In wenigen Minuten startklar.",
    trial: "24-Stunden-Gratistest",
    viewPlans: "Pakete ansehen",
    bullets: ["Sofortige Aktivierung", "99,9 % Verfügbarkeit", "Keine Vertragsbindung"],
    imageAlt: "STRONG 8K Streaming-Oberfläche auf einem ultradünnen Smart-TV",
  },
  stats: { channels: "Live-Sender", movies: "Filme & Serien", uptime: "Server-Verfügbarkeit", support: "Kundensupport" },
  features: {
    heading: "Warum STRONG 8K IPTV",
    subtitle:
      "Ein erstklassiges IPTV-Abo für maximale Zuverlässigkeit — damit du jedes Bild genießt, auf jedem Gerät, überall in Europa.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "Kodierung mit hoher Bitrate und adaptivem Streaming liefert Schärfe und Farben in Kinoqualität." },
      { title: "Anti-Freeze-Server", desc: "Ein leistungsstarker Server-Cluster in ganz Europa mit Anti-Buffering-Technik für flüssige, ruckelfreie Wiedergabe." },
      { title: "Globale Senderabdeckung", desc: "Sport-, Film-, Nachrichten- und Kindersender aus Europa, Amerika, Asien und dem Nahen Osten." },
      { title: "Jedes Gerät", desc: "Läuft auf Smart-TV, Android, iOS, MAG, Firestick, Computern und allen gängigen Plattformen." },
      { title: "Stabil & sicher", desc: "Verschlüsselte Übertragung und stabile Routen halten jede Sitzung sicher und zuverlässig." },
      { title: "Support rund um die Uhr", desc: "Ein professionelles Technik-Team ist 24/7 online und löst jedes Problem schnell." },
    ],
  },
  showcase: {
    titleLead: "Überall,",
    titleAccent: "jederzeit",
    paragraph:
      "Ob auf dem großen Bildschirm im Wohnzimmer oder auf dem Handy unterwegs — STRONG 8K bietet dasselbe gestochen scharfe, flüssige Erlebnis. Bei dieser riesigen Mediathek ist immer etwas dabei, das dir gefällt.",
    points: [
      "Ein Konto, ein Gerät — immer scharf und stabil",
      "Live-Sport · Filme · Serien · Kindersender",
      "Neueste Filme & Shows täglich aktualisiert",
      "EPG-Programmführer und Catch-up-Aufnahme",
    ],
    imageAlt: "STRONG 8K synchron auf TV, Laptop, Tablet und Smartphone",
  },
  pricing: {
    heading: "Einfache, transparente Preise",
    subtitle: "Keine versteckten Gebühren, keine langfristige Bindung. Jederzeit upgraden oder kündigen.",
    mostPopular: "Am beliebtesten",
    choose: "Wählen",
    perMonth: "/ Monat",
    perYear: "/ Jahr",
    plans: [
      {
        name: "Monatlich",
        desc: "Ideal zum ersten Ausprobieren",
        features: ["60.000+ Live-Sender", "8K / 4K Ultra HD", "1 Gerät pro Konto (kein Multi-Geräte-Login)", "Globale Senderabdeckung", "E-Mail-Support"],
      },
      {
        name: "Jährlich",
        desc: "Am beliebtesten, bester Preis",
        features: ["60.000+ Live-Sender", "200.000+ Filme & Serien", "1 Gerät pro Konto (kein Multi-Geräte-Login)", "Anti-Freeze-Highspeed-Server", "EPG-Programmführer", "24/7 Priority-Support"],
      },
      {
        name: "Reseller",
        desc: "Für Händler und Teams",
        features: ["Alle Sender & VOD inklusive", "1 Gerät pro Unterkonto (kein Multi-Geräte-Login)", "Eigenes Admin-Panel", "Massen-Erstellung von Unterkonten", "Persönlicher Account-Manager"],
      },
    ],
  },
  faq: {
    heading: "Häufig gestellte Fragen",
    subtitle: "Noch Fragen? Hier sind die häufigsten.",
    items: [
      { q: "Welche Geräte unterstützt STRONG 8K?", a: "Es läuft auf Smart-TV, Android, iOS, MAG, Amazon Firestick, Enigma2 und Windows/Mac-Computern — allen gängigen Geräten." },
      { q: "Wie schnell kann ich nach dem Abo schauen?", a: "Dein Abo wird sofort nach der Zahlung aktiviert. Du erhältst deine Zugangsdaten umgehend und kannst innerhalb weniger Minuten starten." },
      { q: "Gibt es Einfrieren oder Buffering?", a: "Wir nutzen weltweit verteilte Highspeed-Server mit Anti-Buffering-Technik für flüssige, ruckelfreie Wiedergabe bei stabiler Verbindung." },
      { q: "Kann ich mehrere Geräte gleichzeitig nutzen?", a: "Nein. Jedes Konto funktioniert auf nur einem Gerät gleichzeitig — meldest du dich auf einem anderen Gerät an, wird das erste abgemeldet. Das gilt auch für Reseller-Unterkonten." },
      { q: "Wie erreiche ich den Support?", a: "Wir bieten 24/7-Support. Erreiche uns jederzeit per Live-Chat auf der Seite, per E-Mail oder über unsere Social-Media-Kanäle." },
    ],
  },
  cta: {
    heading: "Bereit für deine 8K-Reise?",
    paragraph: "Starte jetzt deinen 24-Stunden-Gratistest und erlebe die Schärfe und Geschwindigkeit von STRONG 8K selbst.",
    startTrial: "Gratistest starten",
    contact: "Support kontaktieren",
  },
  footer: { features: "Funktionen", pricing: "Preise", faq: "FAQ", privacy: "Datenschutz", rights: "Alle Rechte vorbehalten." },
}

const fr: Dictionary = {
  meta: {
    title: "STRONG 8K | Abonnement IPTV Premium & Panel Revendeur en Europe",
    description:
      "STRONG 8K est un service IPTV premium européen avec plus de 60 000 chaînes en direct et 200 000+ films et séries en 4K/8K Ultra HD stable. Achetez un abonnement IPTV ou lancez-vous dans la revente avec notre panel revendeur dédié.",
  },
  nav: {
    features: "Fonctionnalités",
    content: "Contenu",
    pricing: "Tarifs",
    faq: "FAQ",
    subscribe: "S'abonner",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    home: "Accueil STRONG 8K",
    selectLanguage: "Choisir la langue",
  },
  hero: {
    badge: "La toute nouvelle expérience live 8K Ultra HD",
    titleLine1: "Abonnement IPTV premium",
    titleLine2: "avec la netteté STRONG 8K",
    paragraph:
      "Le service IPTV premium européen : plus de 60 000 chaînes en direct et 200 000 films et séries à la demande en 4K/8K Ultra HD — sport, cinéma et émissions d'Europe et du monde entier. Serveurs anti-freeze, tous les appareils pris en charge, et un panel revendeur IPTV dédié. Regardez en quelques minutes.",
    trial: "Essai gratuit 24 h",
    viewPlans: "Voir les offres",
    bullets: ["Activation instantanée", "99,9 % de disponibilité", "Sans engagement"],
    imageAlt: "Interface de streaming STRONG 8K sur un téléviseur intelligent ultra-fin",
  },
  stats: { channels: "Chaînes en direct", movies: "Films & séries", uptime: "Disponibilité serveur", support: "Assistance client" },
  features: {
    heading: "Pourquoi choisir STRONG 8K IPTV",
    subtitle:
      "Un abonnement IPTV haut de gamme conçu pour la fiabilité — pour profiter de chaque image, sur n'importe quel appareil, partout en Europe.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "Un encodage à haut débit avec streaming adaptatif offre une netteté et des couleurs dignes du cinéma." },
      { title: "Serveurs anti-freeze", desc: "Un cluster de serveurs haute performance réparti en Europe avec technologie anti-buffering pour une lecture fluide et sans coupure." },
      { title: "Couverture mondiale", desc: "Chaînes de sport, films, actualités et enfants d'Europe, d'Amérique, d'Asie et du Moyen-Orient." },
      { title: "Tous les appareils", desc: "Fonctionne sur Smart TV, Android, iOS, MAG, Firestick, ordinateurs et toutes les grandes plateformes." },
      { title: "Stable & sécurisé", desc: "Une diffusion chiffrée et des routes stables gardent chaque session sûre et fiable." },
      { title: "Assistance 24 h/24", desc: "Une équipe technique professionnelle est en ligne 24/7 pour résoudre rapidement tout problème." },
    ],
  },
  showcase: {
    titleLead: "Partout,",
    titleAccent: "à tout moment",
    paragraph:
      "Que ce soit sur le grand écran du salon ou sur votre téléphone dans les transports, STRONG 8K offre la même expérience nette et fluide. Avec une immense bibliothèque de contenus, il y a toujours quelque chose que vous adorerez.",
    points: [
      "Un compte, un appareil — toujours net et stable",
      "Sport en direct · films · séries · chaînes enfants",
      "Derniers films et émissions mis à jour chaque jour",
      "Guide des programmes EPG et enregistrement en différé",
    ],
    imageAlt: "STRONG 8K en lecture synchronisée sur TV, ordinateur portable, tablette et téléphone",
  },
  pricing: {
    heading: "Des tarifs simples et transparents",
    subtitle: "Pas de frais cachés, pas d'engagement. Changez d'offre ou annulez à tout moment.",
    mostPopular: "Le plus populaire",
    choose: "Choisir",
    perMonth: "/ mois",
    perYear: "/ an",
    plans: [
      {
        name: "Mensuel",
        desc: "Parfait pour essayer d'abord",
        features: ["60 000+ chaînes en direct", "8K / 4K Ultra HD", "1 appareil par compte (pas de connexion multi-appareils)", "Couverture mondiale", "Support par e-mail"],
      },
      {
        name: "Annuel",
        desc: "Le plus populaire, meilleur rapport",
        features: ["60 000+ chaînes en direct", "200 000+ films & séries", "1 appareil par compte (pas de connexion multi-appareils)", "Serveurs haut débit anti-freeze", "Guide des programmes EPG", "Support prioritaire 24/7"],
      },
      {
        name: "Revendeur",
        desc: "Pour distributeurs et équipes",
        features: ["Toutes les chaînes & VOD incluses", "1 appareil par sous-compte (pas de connexion multi-appareils)", "Panel d'administration dédié", "Création de sous-comptes en masse", "Gestionnaire de compte dédié"],
      },
    ],
  },
  faq: {
    heading: "Questions fréquentes",
    subtitle: "Encore des questions ? Voici celles que les utilisateurs posent le plus.",
    items: [
      { q: "Quels appareils STRONG 8K prend-il en charge ?", a: "Il fonctionne sur Smart TV, Android, iOS, MAG, Amazon Firestick, Enigma2 et ordinateurs Windows/Mac — tous les appareils majeurs." },
      { q: "Combien de temps avant de regarder après l'abonnement ?", a: "Votre abonnement est activé instantanément après le paiement. Vous recevez vos identifiants immédiatement et pouvez regarder en quelques minutes." },
      { q: "Y aura-t-il des gels ou du buffering ?", a: "Nous utilisons des serveurs haut débit répartis dans le monde avec une technologie anti-buffering, pour une lecture fluide et sans coupure sur une connexion stable." },
      { q: "Puis-je l'utiliser sur plusieurs appareils à la fois ?", a: "Non. Chaque compte fonctionne sur un seul appareil à la fois — se connecter sur un autre appareil déconnecte le premier. Cela vaut aussi pour les sous-comptes revendeur." },
      { q: "Comment contacter l'assistance ?", a: "Nous offrons une assistance 24/7. Contactez-nous à tout moment via le chat en direct du site, par e-mail ou sur nos réseaux sociaux." },
    ],
  },
  cta: {
    heading: "Prêt à commencer votre aventure 8K ?",
    paragraph: "Lancez dès maintenant votre essai gratuit de 24 h et découvrez par vous-même la netteté et la fluidité de STRONG 8K.",
    startTrial: "Commencer l'essai gratuit",
    contact: "Contacter l'assistance",
  },
  footer: { features: "Fonctionnalités", pricing: "Tarifs", faq: "FAQ", privacy: "Confidentialité", rights: "Tous droits réservés." },
}

const es: Dictionary = {
  meta: {
    title: "STRONG 8K | Suscripción IPTV Premium y Panel de Revendedor en Europa",
    description:
      "STRONG 8K es un servicio IPTV premium europeo con más de 60.000 canales en directo y 200.000+ películas y series en 4K/8K Ultra HD estable. Compra una suscripción IPTV o empieza a revender con nuestro panel de revendedor dedicado.",
  },
  nav: {
    features: "Características",
    content: "Contenido",
    pricing: "Precios",
    faq: "Preguntas",
    subscribe: "Suscríbete",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    home: "Inicio STRONG 8K",
    selectLanguage: "Seleccionar idioma",
  },
  hero: {
    badge: "La nueva experiencia en directo 8K Ultra HD",
    titleLine1: "Suscripción IPTV premium",
    titleLine2: "con la nitidez STRONG 8K",
    paragraph:
      "El servicio IPTV premium europeo: más de 60.000 canales en directo y 200.000 películas y series bajo demanda en 4K/8K Ultra HD — deportes, cine y programas de toda Europa y del mundo. Servidores anti-freeze, compatible con todos los dispositivos y un panel de revendedor IPTV dedicado. Empieza a ver en minutos.",
    trial: "Prueba gratis de 24 h",
    viewPlans: "Ver planes",
    bullets: ["Activación instantánea", "99,9 % de disponibilidad", "Sin permanencia"],
    imageAlt: "Interfaz de streaming STRONG 8K en un televisor inteligente ultrafino",
  },
  stats: { channels: "Canales en directo", movies: "Películas y series", uptime: "Disponibilidad del servidor", support: "Atención al cliente" },
  features: {
    heading: "Por qué elegir STRONG 8K IPTV",
    subtitle:
      "Una suscripción IPTV de primer nivel diseñada para la fiabilidad, para que disfrutes de cada fotograma, en cualquier dispositivo, en toda Europa.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "La codificación de alto bitrate con streaming adaptativo ofrece nitidez y color de calidad cinematográfica." },
      { title: "Servidores anti-freeze", desc: "Un clúster de servidores de alto rendimiento repartido por Europa con tecnología anti-buffering para una reproducción fluida y sin cortes." },
      { title: "Cobertura mundial de canales", desc: "Canales de deportes, cine, noticias e infantiles de Europa, América, Asia y Oriente Medio." },
      { title: "Todos los dispositivos", desc: "Funciona en Smart TV, Android, iOS, MAG, Firestick, ordenadores y todas las plataformas principales." },
      { title: "Estable y seguro", desc: "La transmisión cifrada y las rutas estables mantienen cada sesión segura y fiable." },
      { title: "Soporte las 24 horas", desc: "Un equipo técnico profesional está en línea 24/7 para resolver rápidamente cualquier problema." },
    ],
  },
  showcase: {
    titleLead: "En cualquier lugar,",
    titleAccent: "en cualquier momento",
    paragraph:
      "Ya sea en la gran pantalla del salón o en el móvil de camino al trabajo, STRONG 8K ofrece la misma experiencia nítida y fluida. Con una enorme biblioteca de contenidos, siempre hay algo que te encantará.",
    points: [
      "Una cuenta, un dispositivo: siempre nítido y estable",
      "Deporte en directo · películas · series · canales infantiles",
      "Últimas películas y programas actualizados a diario",
      "Guía de programación EPG y grabación en diferido",
    ],
    imageAlt: "STRONG 8K reproduciéndose en sincronía en TV, portátil, tableta y móvil",
  },
  pricing: {
    heading: "Precios sencillos y transparentes",
    subtitle: "Sin cargos ocultos ni permanencia. Cambia de plan o cancela cuando quieras.",
    mostPopular: "Más popular",
    choose: "Elegir",
    perMonth: "/ mes",
    perYear: "/ año",
    plans: [
      {
        name: "Mensual",
        desc: "Ideal para probarlo primero",
        features: ["60.000+ canales en directo", "8K / 4K Ultra HD", "1 dispositivo por cuenta (sin inicio en varios dispositivos)", "Cobertura mundial", "Soporte por correo"],
      },
      {
        name: "Anual",
        desc: "El más popular, mejor precio",
        features: ["60.000+ canales en directo", "200.000+ películas y series", "1 dispositivo por cuenta (sin inicio en varios dispositivos)", "Servidores anti-freeze de alta velocidad", "Guía de programación EPG", "Soporte prioritario 24/7"],
      },
      {
        name: "Revendedor",
        desc: "Para distribuidores y equipos",
        features: ["Todos los canales y VOD incluidos", "1 dispositivo por subcuenta (sin inicio en varios dispositivos)", "Panel de administración dedicado", "Creación masiva de subcuentas", "Gestor de cuenta dedicado"],
      },
    ],
  },
  faq: {
    heading: "Preguntas frecuentes",
    subtitle: "¿Aún tienes dudas? Estas son las que más nos preguntan.",
    items: [
      { q: "¿Qué dispositivos admite STRONG 8K?", a: "Funciona en Smart TV, Android, iOS, MAG, Amazon Firestick, Enigma2 y ordenadores Windows/Mac — todos los dispositivos principales." },
      { q: "¿Cuándo puedo ver tras suscribirme?", a: "Tu suscripción se activa al instante tras el pago. Recibes tus datos de acceso de inmediato y puedes empezar a ver en minutos." },
      { q: "¿Habrá cortes o buffering?", a: "Usamos servidores de alta velocidad distribuidos por todo el mundo con tecnología anti-buffering, para una reproducción fluida y sin cortes con una conexión estable." },
      { q: "¿Puedo usarlo en varios dispositivos a la vez?", a: "No. Cada cuenta funciona en un solo dispositivo a la vez; iniciar sesión en otro dispositivo cierra la sesión del primero. Esto también aplica a las subcuentas de revendedor." },
      { q: "¿Cómo contacto con soporte?", a: "Ofrecemos soporte 24/7. Contáctanos cuando quieras por el chat en directo de la web, correo o nuestras redes sociales." },
    ],
  },
  cta: {
    heading: "¿Listo para empezar tu viaje en 8K?",
    paragraph: "Empieza ahora tu prueba gratis de 24 h y comprueba por ti mismo la nitidez y fluidez de STRONG 8K.",
    startTrial: "Empezar prueba gratis",
    contact: "Contactar con soporte",
  },
  footer: { features: "Características", pricing: "Precios", faq: "Preguntas", privacy: "Privacidad", rights: "Todos los derechos reservados." },
}

const it: Dictionary = {
  meta: {
    title: "STRONG 8K | Abbonamento IPTV Premium e Pannello Rivenditore in Europa",
    description:
      "STRONG 8K è un servizio IPTV premium europeo con oltre 60.000 canali live e 200.000+ film e serie in 4K/8K Ultra HD stabile. Acquista un abbonamento IPTV o inizia a rivendere con il nostro pannello rivenditore dedicato.",
  },
  nav: {
    features: "Funzioni",
    content: "Contenuti",
    pricing: "Prezzi",
    faq: "FAQ",
    subscribe: "Abbonati ora",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    home: "Home STRONG 8K",
    selectLanguage: "Seleziona lingua",
  },
  hero: {
    badge: "La nuovissima esperienza live 8K Ultra HD",
    titleLine1: "Abbonamento IPTV premium",
    titleLine2: "con la nitidezza STRONG 8K",
    paragraph:
      "Il servizio IPTV premium europeo: oltre 60.000 canali live e 200.000 film e serie on demand in 4K/8K Ultra HD — sport, cinema e programmi da tutta Europa e dal mondo. Server anti-freeze, compatibile con ogni dispositivo e un pannello rivenditore IPTV dedicato. Guardi in pochi minuti.",
    trial: "Prova gratuita 24 ore",
    viewPlans: "Vedi i piani",
    bullets: ["Attivazione immediata", "99,9% di uptime", "Nessun vincolo"],
    imageAlt: "Interfaccia di streaming STRONG 8K su una smart TV ultrasottile",
  },
  stats: { channels: "Canali live", movies: "Film e serie", uptime: "Uptime del server", support: "Assistenza clienti" },
  features: {
    heading: "Perché scegliere STRONG 8K IPTV",
    subtitle:
      "Un abbonamento IPTV di alto livello costruito per l'affidabilità — per goderti ogni fotogramma, su qualsiasi dispositivo, ovunque in Europa.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "La codifica ad alto bitrate con streaming adattivo offre nitidezza e colori da cinema." },
      { title: "Server anti-freeze", desc: "Un cluster di server ad alte prestazioni in tutta Europa con tecnologia anti-buffering per una riproduzione fluida e senza scatti." },
      { title: "Copertura globale dei canali", desc: "Canali di sport, film, notizie e per bambini da Europa, Americhe, Asia e Medio Oriente." },
      { title: "Ogni dispositivo", desc: "Funziona su Smart TV, Android, iOS, MAG, Firestick, computer e tutte le principali piattaforme." },
      { title: "Stabile e sicuro", desc: "Trasmissione crittografata e rotte stabili mantengono ogni sessione sicura e affidabile." },
      { title: "Assistenza 24 ore su 24", desc: "Un team tecnico professionale è online 24/7 per risolvere rapidamente ogni problema." },
    ],
  },
  showcase: {
    titleLead: "Ovunque,",
    titleAccent: "in qualsiasi momento",
    paragraph:
      "Che sia sul grande schermo del salotto o sul telefono durante il tragitto, STRONG 8K offre la stessa esperienza nitida e fluida. Con un'enorme libreria di contenuti, c'è sempre qualcosa che amerai.",
    points: [
      "Un account, un dispositivo — sempre nitido e stabile",
      "Sport live · film · serie · canali per bambini",
      "Ultimi film e programmi aggiornati ogni giorno",
      "Guida programmi EPG e registrazione catch-up",
    ],
    imageAlt: "STRONG 8K in riproduzione sincronizzata su TV, laptop, tablet e telefono",
  },
  pricing: {
    heading: "Prezzi semplici e trasparenti",
    subtitle: "Nessun costo nascosto, nessun vincolo. Cambia piano o disdici quando vuoi.",
    mostPopular: "Più popolare",
    choose: "Scegli",
    perMonth: "/ mese",
    perYear: "/ anno",
    plans: [
      {
        name: "Mensile",
        desc: "Perfetto per provarlo prima",
        features: ["60.000+ canali live", "8K / 4K Ultra HD", "1 dispositivo per account (nessun accesso multi-dispositivo)", "Copertura globale dei canali", "Supporto via email"],
      },
      {
        name: "Annuale",
        desc: "Più popolare, miglior valore",
        features: ["60.000+ canali live", "200.000+ film e serie", "1 dispositivo per account (nessun accesso multi-dispositivo)", "Server ad alta velocità anti-freeze", "Guida programmi EPG", "Supporto prioritario 24/7"],
      },
      {
        name: "Rivenditore",
        desc: "Per distributori e team",
        features: ["Tutti i canali e VOD inclusi", "1 dispositivo per sotto-account (nessun accesso multi-dispositivo)", "Pannello di amministrazione dedicato", "Creazione massiva di sotto-account", "Account manager dedicato"],
      },
    ],
  },
  faq: {
    heading: "Domande frequenti",
    subtitle: "Hai ancora domande? Ecco quelle più frequenti.",
    items: [
      { q: "Quali dispositivi supporta STRONG 8K?", a: "Funziona su Smart TV, Android, iOS, MAG, Amazon Firestick, Enigma2 e computer Windows/Mac — tutti i dispositivi principali." },
      { q: "Quanto presto posso guardare dopo l'abbonamento?", a: "L'abbonamento si attiva subito dopo il pagamento. Ricevi le credenziali immediatamente e puoi iniziare a guardare in pochi minuti." },
      { q: "Ci saranno blocchi o buffering?", a: "Usiamo server ad alta velocità distribuiti nel mondo con tecnologia anti-buffering, per una riproduzione fluida e senza blocchi su una connessione stabile." },
      { q: "Posso usarlo su più dispositivi insieme?", a: "No. Ogni account funziona su un solo dispositivo alla volta: accedere da un altro dispositivo disconnette il primo. Vale anche per i sotto-account rivenditore." },
      { q: "Come contatto l'assistenza?", a: "Offriamo assistenza 24/7. Contattaci quando vuoi tramite la live chat del sito, email o i nostri canali social." },
    ],
  },
  cta: {
    heading: "Pronto a iniziare il tuo viaggio in 8K?",
    paragraph: "Inizia ora la tua prova gratuita di 24 ore e scopri di persona la nitidezza e la fluidità di STRONG 8K.",
    startTrial: "Inizia la prova gratuita",
    contact: "Contatta l'assistenza",
  },
  footer: { features: "Funzioni", pricing: "Prezzi", faq: "FAQ", privacy: "Privacy", rights: "Tutti i diritti riservati." },
}

const pt: Dictionary = {
  meta: {
    title: "STRONG 8K | Assinatura IPTV Premium e Painel de Revenda na Europa",
    description:
      "STRONG 8K é um serviço IPTV premium europeu com mais de 60.000 canais ao vivo e 200.000+ filmes e séries em 4K/8K Ultra HD estável. Compre uma assinatura IPTV ou comece a revender com o nosso painel de revenda dedicado.",
  },
  nav: {
    features: "Recursos",
    content: "Conteúdo",
    pricing: "Preços",
    faq: "FAQ",
    subscribe: "Assinar agora",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    home: "Início STRONG 8K",
    selectLanguage: "Selecionar idioma",
  },
  hero: {
    badge: "A nova experiência ao vivo 8K Ultra HD",
    titleLine1: "Assinatura IPTV premium",
    titleLine2: "com a nitidez STRONG 8K",
    paragraph:
      "O serviço IPTV premium europeu: mais de 60.000 canais ao vivo e 200.000 filmes e séries a pedido em 4K/8K Ultra HD — desporto, cinema e programas de toda a Europa e do mundo. Servidores anti-freeze, compatível com todos os dispositivos e um painel de revenda IPTV dedicado. Comece a assistir em minutos.",
    trial: "Teste grátis de 24 h",
    viewPlans: "Ver planos",
    bullets: ["Ativação instantânea", "99,9% de disponibilidade", "Sem fidelização"],
    imageAlt: "Interface de streaming STRONG 8K numa smart TV ultrafina",
  },
  stats: { channels: "Canais ao vivo", movies: "Filmes e séries", uptime: "Disponibilidade do servidor", support: "Apoio ao cliente" },
  features: {
    heading: "Porquê escolher STRONG 8K IPTV",
    subtitle:
      "Uma assinatura IPTV de topo feita para a fiabilidade — para aproveitar cada fotograma, em qualquer dispositivo, em toda a Europa.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "Codificação de alto bitrate com streaming adaptativo oferece nitidez e cor de qualidade de cinema." },
      { title: "Servidores anti-freeze", desc: "Um cluster de servidores de alto desempenho por toda a Europa com tecnologia anti-buffering para reprodução fluida e sem interrupções." },
      { title: "Cobertura global de canais", desc: "Canais de desporto, filmes, notícias e infantis da Europa, Américas, Ásia e Médio Oriente." },
      { title: "Todos os dispositivos", desc: "Funciona em Smart TV, Android, iOS, MAG, Firestick, computadores e todas as principais plataformas." },
      { title: "Estável e seguro", desc: "Transmissão encriptada e rotas estáveis mantêm cada sessão segura e fiável." },
      { title: "Apoio 24 horas", desc: "Uma equipa técnica profissional está online 24/7 para resolver qualquer problema rapidamente." },
    ],
  },
  showcase: {
    titleLead: "Em qualquer lugar,",
    titleAccent: "a qualquer hora",
    paragraph:
      "Seja no ecrã grande da sala ou no telemóvel durante o trajeto, o STRONG 8K oferece a mesma experiência nítida e fluida. Com uma enorme biblioteca de conteúdos, há sempre algo de que vai gostar.",
    points: [
      "Uma conta, um dispositivo — sempre nítido e estável",
      "Desporto ao vivo · filmes · séries · canais infantis",
      "Últimos filmes e programas atualizados diariamente",
      "Guia de programação EPG e gravação em diferido",
    ],
    imageAlt: "STRONG 8K a reproduzir em sincronia em TV, portátil, tablet e telemóvel",
  },
  pricing: {
    heading: "Preços simples e transparentes",
    subtitle: "Sem taxas escondidas, sem fidelização. Mude de plano ou cancele quando quiser.",
    mostPopular: "Mais popular",
    choose: "Escolher",
    perMonth: "/ mês",
    perYear: "/ ano",
    plans: [
      {
        name: "Mensal",
        desc: "Ótimo para experimentar primeiro",
        features: ["60.000+ canais ao vivo", "8K / 4K Ultra HD", "1 dispositivo por conta (sem login em vários dispositivos)", "Cobertura global de canais", "Apoio por email"],
      },
      {
        name: "Anual",
        desc: "Mais popular, melhor valor",
        features: ["60.000+ canais ao vivo", "200.000+ filmes e séries", "1 dispositivo por conta (sem login em vários dispositivos)", "Servidores de alta velocidade anti-freeze", "Guia de programação EPG", "Apoio prioritário 24/7"],
      },
      {
        name: "Revenda",
        desc: "Para distribuidores e equipas",
        features: ["Todos os canais e VOD incluídos", "1 dispositivo por subconta (sem login em vários dispositivos)", "Painel de administração dedicado", "Criação de subcontas em massa", "Gestor de conta dedicado"],
      },
    ],
  },
  faq: {
    heading: "Perguntas frequentes",
    subtitle: "Ainda tem dúvidas? Aqui estão as mais frequentes.",
    items: [
      { q: "Que dispositivos o STRONG 8K suporta?", a: "Funciona em Smart TV, Android, iOS, MAG, Amazon Firestick, Enigma2 e computadores Windows/Mac — todos os dispositivos principais." },
      { q: "Quão rápido posso assistir após assinar?", a: "A sua assinatura é ativada instantaneamente após o pagamento. Recebe os dados de acesso de imediato e pode começar a assistir em minutos." },
      { q: "Vai haver travamentos ou buffering?", a: "Usamos servidores de alta velocidade distribuídos pelo mundo com tecnologia anti-buffering, para reprodução fluida e sem travamentos numa ligação estável." },
      { q: "Posso usar em vários dispositivos ao mesmo tempo?", a: "Não. Cada conta funciona num único dispositivo de cada vez — entrar noutro dispositivo termina a sessão do primeiro. Aplica-se também às subcontas de revenda." },
      { q: "Como contacto o apoio?", a: "Oferecemos apoio 24/7. Fale connosco a qualquer hora pelo chat ao vivo do site, email ou as nossas redes sociais." },
    ],
  },
  cta: {
    heading: "Pronto para começar a sua jornada 8K?",
    paragraph: "Comece agora o seu teste grátis de 24 h e experimente por si a nitidez e fluidez do STRONG 8K.",
    startTrial: "Iniciar teste grátis",
    contact: "Contactar apoio",
  },
  footer: { features: "Recursos", pricing: "Preços", faq: "FAQ", privacy: "Privacidade", rights: "Todos os direitos reservados." },
}

const nl: Dictionary = {
  meta: {
    title: "STRONG 8K | Premium IPTV-abonnement & Reseller-paneel in Europa",
    description:
      "STRONG 8K is een premium Europese IPTV-dienst met 60.000+ live kanalen en 200.000+ films en series in stabiel 4K/8K Ultra HD. Koop een IPTV-abonnement of begin met doorverkopen via ons eigen IPTV-reseller-paneel.",
  },
  nav: {
    features: "Functies",
    content: "Content",
    pricing: "Prijzen",
    faq: "FAQ",
    subscribe: "Nu abonneren",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    home: "STRONG 8K home",
    selectLanguage: "Taal kiezen",
  },
  hero: {
    badge: "De gloednieuwe 8K Ultra HD live-ervaring",
    titleLine1: "Premium IPTV-abonnement",
    titleLine2: "in STRONG 8K scherpte",
    paragraph:
      "De premium Europese IPTV-dienst: ruim 60.000 live kanalen en 200.000 films en series on demand in 4K/8K Ultra HD — sport, film en shows uit heel Europa en de wereld. Anti-freeze-servers, elk apparaat ondersteund, plus een eigen IPTV-reseller-paneel. Binnen enkele minuten kijken.",
    trial: "Gratis proef van 24 uur",
    viewPlans: "Bekijk pakketten",
    bullets: ["Directe activering", "99,9% uptime", "Geen contract"],
    imageAlt: "STRONG 8K streaming-interface op een ultradunne smart-tv",
  },
  stats: { channels: "Live kanalen", movies: "Films en series", uptime: "Server-uptime", support: "Klantenservice" },
  features: {
    heading: "Waarom STRONG 8K IPTV",
    subtitle:
      "Een IPTV-abonnement van topniveau gebouwd voor betrouwbaarheid — zodat je van elk beeld geniet, op elk apparaat, overal in Europa.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "Codering met hoge bitrate en adaptieve streaming levert scherpte en kleur van bioscoopkwaliteit." },
      { title: "Anti-freeze-servers", desc: "Een krachtig servercluster verspreid over Europa met anti-buffering-technologie voor vloeiend, haperingsvrij afspelen." },
      { title: "Wereldwijde kanaaldekking", desc: "Sport-, film-, nieuws- en kinderkanalen uit Europa, Amerika, Azië en het Midden-Oosten." },
      { title: "Elk apparaat", desc: "Werkt op Smart-tv, Android, iOS, MAG, Firestick, computers en alle grote platforms." },
      { title: "Stabiel en veilig", desc: "Versleutelde levering en stabiele routes houden elke kijksessie veilig en betrouwbaar." },
      { title: "Support dag en nacht", desc: "Een professioneel technisch team staat 24/7 online om elk probleem snel op te lossen." },
    ],
  },
  showcase: {
    titleLead: "Overal,",
    titleAccent: "altijd",
    paragraph:
      "Of het nu op het grote scherm in de woonkamer is of op je telefoon onderweg, STRONG 8K biedt dezelfde scherpe, vloeiende ervaring. Met een enorme contentbibliotheek is er altijd iets wat je leuk vindt.",
    points: [
      "Eén account, één apparaat — altijd scherp en stabiel",
      "Live sport · films · series · kinderkanalen",
      "Nieuwste films en shows dagelijks bijgewerkt",
      "EPG-programmagids en catch-up-opname",
    ],
    imageAlt: "STRONG 8K synchroon afgespeeld op tv, laptop, tablet en telefoon",
  },
  pricing: {
    heading: "Eenvoudige, transparante prijzen",
    subtitle: "Geen verborgen kosten, geen langlopend contract. Upgrade of annuleer wanneer je wilt.",
    mostPopular: "Populairst",
    choose: "Kies",
    perMonth: "/ maand",
    perYear: "/ jaar",
    plans: [
      {
        name: "Maandelijks",
        desc: "Ideaal om eerst te proberen",
        features: ["60.000+ live kanalen", "8K / 4K Ultra HD", "1 apparaat per account (geen multi-apparaat-login)", "Wereldwijde kanaaldekking", "E-mailsupport"],
      },
      {
        name: "Jaarlijks",
        desc: "Populairst, beste prijs",
        features: ["60.000+ live kanalen", "200.000+ films en series", "1 apparaat per account (geen multi-apparaat-login)", "Anti-freeze highspeed-servers", "EPG-programmagids", "24/7 priority-support"],
      },
      {
        name: "Reseller",
        desc: "Voor distributeurs en teams",
        features: ["Alle kanalen en VOD inbegrepen", "1 apparaat per subaccount (geen multi-apparaat-login)", "Eigen beheerpaneel", "Bulk aanmaken van subaccounts", "Toegewijde accountmanager"],
      },
    ],
  },
  faq: {
    heading: "Veelgestelde vragen",
    subtitle: "Nog vragen? Dit zijn de meest gestelde.",
    items: [
      { q: "Welke apparaten ondersteunt STRONG 8K?", a: "Het werkt op Smart-tv, Android, iOS, MAG, Amazon Firestick, Enigma2 en Windows/Mac-computers — alle grote apparaten." },
      { q: "Hoe snel kan ik kijken na het abonneren?", a: "Je abonnement wordt direct na betaling geactiveerd. Je ontvangt meteen je inloggegevens en kunt binnen enkele minuten kijken." },
      { q: "Komt er bevriezing of buffering voor?", a: "We gebruiken wereldwijd verspreide highspeed-servers met anti-buffering-technologie voor vloeiend, haperingsvrij afspelen bij een stabiele verbinding." },
      { q: "Kan ik het op meerdere apparaten tegelijk gebruiken?", a: "Nee. Elk account werkt op één apparaat tegelijk — inloggen op een ander apparaat logt het eerste uit. Dit geldt ook voor reseller-subaccounts." },
      { q: "Hoe neem ik contact op met support?", a: "We bieden 24/7 support. Bereik ons altijd via de live chat op de site, e-mail of onze socialmediakanalen." },
    ],
  },
  cta: {
    heading: "Klaar om je 8K-reis te starten?",
    paragraph: "Start nu je gratis proef van 24 uur en ervaar zelf de scherpte en soepelheid van STRONG 8K.",
    startTrial: "Gratis proef starten",
    contact: "Contact met support",
  },
  footer: { features: "Functies", pricing: "Prijzen", faq: "FAQ", privacy: "Privacy", rights: "Alle rechten voorbehouden." },
}

const pl: Dictionary = {
  meta: {
    title: "STRONG 8K | Premium abonament IPTV i panel resellera w Europie",
    description:
      "STRONG 8K to premium europejska usługa IPTV z ponad 60 000 kanałów na żywo i 200 000+ filmów i seriali w stabilnym 4K/8K Ultra HD. Kup abonament IPTV lub zacznij odsprzedaż dzięki naszemu dedykowanemu panelowi resellera.",
  },
  nav: {
    features: "Funkcje",
    content: "Treści",
    pricing: "Cennik",
    faq: "FAQ",
    subscribe: "Subskrybuj",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    home: "Strona główna STRONG 8K",
    selectLanguage: "Wybierz język",
  },
  hero: {
    badge: "Zupełnie nowe doświadczenie live w 8K Ultra HD",
    titleLine1: "Premium abonament IPTV",
    titleLine2: "w ostrości STRONG 8K",
    paragraph:
      "Premium europejska usługa IPTV: ponad 60 000 kanałów na żywo i 200 000 filmów i seriali na życzenie w 4K/8K Ultra HD — sport, kino i programy z całej Europy i świata. Serwery anti-freeze, obsługa każdego urządzenia oraz dedykowany panel resellera IPTV. Oglądaj w kilka minut.",
    trial: "Darmowy test 24 h",
    viewPlans: "Zobacz plany",
    bullets: ["Natychmiastowa aktywacja", "99,9% dostępności", "Bez umowy"],
    imageAlt: "Interfejs streamingu STRONG 8K na ultracienkim smart TV",
  },
  stats: { channels: "Kanały na żywo", movies: "Filmy i seriale", uptime: "Dostępność serwera", support: "Obsługa klienta" },
  features: {
    heading: "Dlaczego STRONG 8K IPTV",
    subtitle:
      "Najwyższej klasy abonament IPTV stworzony z myślą o niezawodności — abyś cieszył się każdą klatką, na każdym urządzeniu, w całej Europie.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "Kodowanie o wysokim bitrate z adaptacyjnym streamingiem zapewnia ostrość i kolory na poziomie kinowym." },
      { title: "Serwery anti-freeze", desc: "Wydajny klaster serwerów w całej Europie z technologią anti-buffering dla płynnego odtwarzania bez zacięć." },
      { title: "Globalny zasięg kanałów", desc: "Kanały sportowe, filmowe, informacyjne i dla dzieci z Europy, obu Ameryk, Azji i Bliskiego Wschodu." },
      { title: "Każde urządzenie", desc: "Działa na Smart TV, Android, iOS, MAG, Firestick, komputerach i wszystkich głównych platformach." },
      { title: "Stabilnie i bezpiecznie", desc: "Szyfrowana transmisja i stabilne trasy zapewniają bezpieczeństwo i niezawodność każdej sesji." },
      { title: "Wsparcie całą dobę", desc: "Profesjonalny zespół techniczny jest online 24/7, aby szybko rozwiązać każdy problem." },
    ],
  },
  showcase: {
    titleLead: "Wszędzie,",
    titleAccent: "o każdej porze",
    paragraph:
      "Czy to na dużym ekranie w salonie, czy na telefonie w drodze, STRONG 8K zapewnia to samo ostre i płynne doświadczenie. Dzięki ogromnej bibliotece treści zawsze znajdziesz coś dla siebie.",
    points: [
      "Jedno konto, jedno urządzenie — zawsze ostro i stabilnie",
      "Sport na żywo · filmy · seriale · kanały dla dzieci",
      "Najnowsze filmy i programy aktualizowane codziennie",
      "Przewodnik EPG i nagrywanie catch-up",
    ],
    imageAlt: "STRONG 8K odtwarzany synchronicznie na TV, laptopie, tablecie i telefonie",
  },
  pricing: {
    heading: "Proste, przejrzyste ceny",
    subtitle: "Bez ukrytych opłat i długich umów. Zmień plan lub anuluj w dowolnym momencie.",
    mostPopular: "Najpopularniejszy",
    choose: "Wybierz",
    perMonth: "/ miesiąc",
    perYear: "/ rok",
    plans: [
      {
        name: "Miesięczny",
        desc: "Świetny na początek",
        features: ["60 000+ kanałów na żywo", "8K / 4K Ultra HD", "1 urządzenie na konto (bez logowania na wielu urządzeniach)", "Globalny zasięg kanałów", "Wsparcie e-mail"],
      },
      {
        name: "Roczny",
        desc: "Najpopularniejszy, najlepsza wartość",
        features: ["60 000+ kanałów na żywo", "200 000+ filmów i seriali", "1 urządzenie na konto (bez logowania na wielu urządzeniach)", "Szybkie serwery anti-freeze", "Przewodnik EPG", "Priorytetowe wsparcie 24/7"],
      },
      {
        name: "Reseller",
        desc: "Dla dystrybutorów i zespołów",
        features: ["Wszystkie kanały i VOD w zestawie", "1 urządzenie na subkonto (bez logowania na wielu urządzeniach)", "Dedykowany panel administracyjny", "Masowe tworzenie subkont", "Dedykowany opiekun konta"],
      },
    ],
  },
  faq: {
    heading: "Najczęstsze pytania",
    subtitle: "Masz jeszcze pytania? Oto te zadawane najczęściej.",
    items: [
      { q: "Jakie urządzenia obsługuje STRONG 8K?", a: "Działa na Smart TV, Android, iOS, MAG, Amazon Firestick, Enigma2 oraz komputerach Windows/Mac — wszystkich głównych urządzeniach." },
      { q: "Jak szybko mogę oglądać po subskrypcji?", a: "Subskrypcja jest aktywowana natychmiast po płatności. Dane logowania otrzymasz od razu i możesz zacząć oglądać w kilka minut." },
      { q: "Czy będą zacięcia lub buforowanie?", a: "Używamy rozproszonych na całym świecie szybkich serwerów z technologią anti-buffering, co zapewnia płynne odtwarzanie bez zacięć przy stabilnym łączu." },
      { q: "Czy mogę używać na kilku urządzeniach naraz?", a: "Nie. Każde konto działa na jednym urządzeniu naraz — zalogowanie na innym urządzeniu wylogowuje poprzednie. Dotyczy to także subkont resellera." },
      { q: "Jak skontaktować się ze wsparciem?", a: "Oferujemy wsparcie 24/7. Skontaktuj się z nami przez czat na żywo na stronie, e-mail lub nasze kanały społecznościowe." },
    ],
  },
  cta: {
    heading: "Gotowy na podróż w 8K?",
    paragraph: "Rozpocznij teraz darmowy test 24 h i przekonaj się sam o ostrości i płynności STRONG 8K.",
    startTrial: "Rozpocznij darmowy test",
    contact: "Kontakt ze wsparciem",
  },
  footer: { features: "Funkcje", pricing: "Cennik", faq: "FAQ", privacy: "Prywatność", rights: "Wszelkie prawa zastrzeżone." },
}

const sv: Dictionary = {
  meta: {
    title: "STRONG 8K | Premium IPTV-abonnemang & återförsäljarpanel i Europa",
    description:
      "STRONG 8K är en premium europeisk IPTV-tjänst med över 60 000 livekanaler och 200 000+ filmer och serier i stabil 4K/8K Ultra HD. Köp ett IPTV-abonnemang eller börja återförsälja med vår dedikerade IPTV-återförsäljarpanel.",
  },
  nav: {
    features: "Funktioner",
    content: "Innehåll",
    pricing: "Priser",
    faq: "FAQ",
    subscribe: "Prenumerera nu",
    openMenu: "Öppna meny",
    closeMenu: "Stäng meny",
    home: "STRONG 8K hem",
    selectLanguage: "Välj språk",
  },
  hero: {
    badge: "Den helt nya 8K Ultra HD-liveupplevelsen",
    titleLine1: "Premium IPTV-abonnemang",
    titleLine2: "i STRONG 8K-skärpa",
    paragraph:
      "Den premium europeiska IPTV-tjänsten: över 60 000 livekanaler och 200 000 filmer och serier på begäran i 4K/8K Ultra HD — sport, film och program från hela Europa och världen. Anti-freeze-servrar, stöd för alla enheter och en dedikerad IPTV-återförsäljarpanel. Börja titta inom några minuter.",
    trial: "Gratis test i 24 h",
    viewPlans: "Se planer",
    bullets: ["Direkt aktivering", "99,9 % drifttid", "Ingen bindningstid"],
    imageAlt: "STRONG 8K streaminggränssnitt på en ultratunn smart-tv",
  },
  stats: { channels: "Livekanaler", movies: "Filmer och serier", uptime: "Serverdrifttid", support: "Kundtjänst" },
  features: {
    heading: "Varför välja STRONG 8K IPTV",
    subtitle:
      "Ett förstklassigt IPTV-abonnemang byggt för tillförlitlighet — så att du njuter av varje bildruta, på alla enheter, var som helst i Europa.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "Kodning med hög bithastighet och adaptiv streaming ger skärpa och färg i bioklass." },
      { title: "Anti-freeze-servrar", desc: "Ett högpresterande serverkluster över hela Europa med anti-buffring-teknik för smidig, hackfri uppspelning." },
      { title: "Global kanaltäckning", desc: "Sport-, film-, nyhets- och barnkanaler från Europa, Amerika, Asien och Mellanöstern." },
      { title: "Alla enheter", desc: "Fungerar på smart-tv, Android, iOS, MAG, Firestick, datorer och alla stora plattformar." },
      { title: "Stabilt och säkert", desc: "Krypterad leverans och stabila rutter håller varje session säker och tillförlitlig." },
      { title: "Support dygnet runt", desc: "Ett professionellt tekniskt team är online 24/7 för att snabbt lösa alla problem." },
    ],
  },
  showcase: {
    titleLead: "Var som helst,",
    titleAccent: "när som helst",
    paragraph:
      "Oavsett om det är på storbildsskärmen i vardagsrummet eller på telefonen under pendlingen levererar STRONG 8K samma skarpa, smidiga upplevelse. Med ett enormt innehållsbibliotek finns det alltid något du kommer att älska.",
    points: [
      "Ett konto, en enhet — alltid skarpt och stabilt",
      "Livesport · filmer · serier · barnkanaler",
      "Senaste filmer och program uppdateras dagligen",
      "EPG-programguide och catch-up-inspelning",
    ],
    imageAlt: "STRONG 8K spelas synkat på tv, laptop, surfplatta och telefon",
  },
  pricing: {
    heading: "Enkla, transparenta priser",
    subtitle: "Inga dolda avgifter, ingen bindningstid. Uppgradera eller avsluta när du vill.",
    mostPopular: "Populärast",
    choose: "Välj",
    perMonth: "/ månad",
    perYear: "/ år",
    plans: [
      {
        name: "Månadsvis",
        desc: "Bra för att testa först",
        features: ["60 000+ livekanaler", "8K / 4K Ultra HD", "1 enhet per konto (ingen inloggning på flera enheter)", "Global kanaltäckning", "E-postsupport"],
      },
      {
        name: "Årsvis",
        desc: "Populärast, bäst värde",
        features: ["60 000+ livekanaler", "200 000+ filmer och serier", "1 enhet per konto (ingen inloggning på flera enheter)", "Snabba anti-freeze-servrar", "EPG-programguide", "Prioriterad support 24/7"],
      },
      {
        name: "Återförsäljare",
        desc: "För distributörer och team",
        features: ["Alla kanaler och VOD ingår", "1 enhet per underkonto (ingen inloggning på flera enheter)", "Dedikerad adminpanel", "Massregistrering av underkonton", "Dedikerad kontoansvarig"],
      },
    ],
  },
  faq: {
    heading: "Vanliga frågor",
    subtitle: "Har du fortfarande frågor? Här är de vanligaste.",
    items: [
      { q: "Vilka enheter stöder STRONG 8K?", a: "Det fungerar på smart-tv, Android, iOS, MAG, Amazon Firestick, Enigma2 och Windows/Mac-datorer — alla större enheter." },
      { q: "Hur snabbt kan jag titta efter att jag prenumererat?", a: "Ditt abonnemang aktiveras direkt efter betalning. Du får dina inloggningsuppgifter omgående och kan börja titta inom några minuter." },
      { q: "Blir det frysningar eller buffring?", a: "Vi använder globalt utspridda snabba servrar med anti-buffring-teknik, vilket ger smidig och frysfri uppspelning på en stabil anslutning." },
      { q: "Kan jag använda det på flera enheter samtidigt?", a: "Nej. Varje konto fungerar på en enhet åt gången — om du loggar in på en annan enhet loggas den första ut. Detta gäller även återförsäljares underkonton." },
      { q: "Hur kontaktar jag supporten?", a: "Vi erbjuder support 24/7. Nå oss när som helst via livechatten på sajten, e-post eller våra sociala medier." },
    ],
  },
  cta: {
    heading: "Redo att börja din 8K-resa?",
    paragraph: "Starta ditt gratis 24-timmarstest nu och upplev själv skärpan och smidigheten i STRONG 8K.",
    startTrial: "Starta gratis test",
    contact: "Kontakta support",
  },
  footer: { features: "Funktioner", pricing: "Priser", faq: "FAQ", privacy: "Integritet", rights: "Alla rättigheter förbehållna." },
}

const ro: Dictionary = {
  meta: {
    title: "STRONG 8K | Abonament IPTV Premium și Panou de Reseller în Europa",
    description:
      "STRONG 8K este un serviciu IPTV premium european cu peste 60.000 de canale live și 200.000+ filme și seriale în 4K/8K Ultra HD stabil. Cumpără un abonament IPTV sau începe revânzarea cu panoul nostru dedicat de reseller.",
  },
  nav: {
    features: "Funcții",
    content: "Conținut",
    pricing: "Prețuri",
    faq: "Întrebări",
    subscribe: "Abonează-te",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
    home: "Acasă STRONG 8K",
    selectLanguage: "Alege limba",
  },
  hero: {
    badge: "Noua experiență live 8K Ultra HD",
    titleLine1: "Abonament IPTV premium",
    titleLine2: "în claritate STRONG 8K",
    paragraph:
      "Serviciul IPTV premium european: peste 60.000 de canale live și 200.000 de filme și seriale la cerere în 4K/8K Ultra HD — sport, cinema și emisiuni din toată Europa și lumea. Servere anti-freeze, compatibil cu orice dispozitiv și un panou de reseller IPTV dedicat. Începe să vizionezi în câteva minute.",
    trial: "Test gratuit 24 h",
    viewPlans: "Vezi planurile",
    bullets: ["Activare instantanee", "99,9% disponibilitate", "Fără contract"],
    imageAlt: "Interfața de streaming STRONG 8K pe un smart TV ultrasubțire",
  },
  stats: { channels: "Canale live", movies: "Filme și seriale", uptime: "Disponibilitate server", support: "Asistență clienți" },
  features: {
    heading: "De ce STRONG 8K IPTV",
    subtitle:
      "Un abonament IPTV de top construit pentru fiabilitate — ca să te bucuri de fiecare cadru, pe orice dispozitiv, oriunde în Europa.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "Codarea la bitrate ridicat cu streaming adaptiv oferă claritate și culori la nivel de cinema." },
      { title: "Servere anti-freeze", desc: "Un cluster de servere de înaltă performanță în toată Europa, cu tehnologie anti-buffering pentru redare fluidă, fără întreruperi." },
      { title: "Acoperire globală a canalelor", desc: "Canale de sport, filme, știri și pentru copii din Europa, Americi, Asia și Orientul Mijlociu." },
      { title: "Orice dispozitiv", desc: "Funcționează pe Smart TV, Android, iOS, MAG, Firestick, computere și toate platformele majore." },
      { title: "Stabil și sigur", desc: "Transmisia criptată și rutele stabile mențin fiecare sesiune sigură și fiabilă." },
      { title: "Asistență non-stop", desc: "O echipă tehnică profesionistă este online 24/7 pentru a rezolva rapid orice problemă." },
    ],
  },
  showcase: {
    titleLead: "Oriunde,",
    titleAccent: "oricând",
    paragraph:
      "Fie pe ecranul mare din living, fie pe telefon în drum spre serviciu, STRONG 8K oferă aceeași experiență clară și fluidă. Cu o bibliotecă uriașă de conținut, mereu vei găsi ceva ce îți va plăcea.",
    points: [
      "Un cont, un dispozitiv — mereu clar și stabil",
      "Sport live · filme · seriale · canale pentru copii",
      "Cele mai noi filme și emisiuni actualizate zilnic",
      "Ghid de programe EPG și înregistrare catch-up",
    ],
    imageAlt: "STRONG 8K redat sincronizat pe TV, laptop, tabletă și telefon",
  },
  pricing: {
    heading: "Prețuri simple și transparente",
    subtitle: "Fără taxe ascunse, fără contract pe termen lung. Schimbă planul sau anulează oricând.",
    mostPopular: "Cel mai popular",
    choose: "Alege",
    perMonth: "/ lună",
    perYear: "/ an",
    plans: [
      {
        name: "Lunar",
        desc: "Perfect pentru a încerca întâi",
        features: ["60.000+ canale live", "8K / 4K Ultra HD", "1 dispozitiv per cont (fără autentificare pe mai multe dispozitive)", "Acoperire globală a canalelor", "Asistență prin e-mail"],
      },
      {
        name: "Anual",
        desc: "Cel mai popular, cel mai bun preț",
        features: ["60.000+ canale live", "200.000+ filme și seriale", "1 dispozitiv per cont (fără autentificare pe mai multe dispozitive)", "Servere rapide anti-freeze", "Ghid de programe EPG", "Asistență prioritară 24/7"],
      },
      {
        name: "Reseller",
        desc: "Pentru distribuitori și echipe",
        features: ["Toate canalele și VOD incluse", "1 dispozitiv per sub-cont (fără autentificare pe mai multe dispozitive)", "Panou de administrare dedicat", "Creare în masă de sub-conturi", "Manager de cont dedicat"],
      },
    ],
  },
  faq: {
    heading: "Întrebări frecvente",
    subtitle: "Mai ai întrebări? Iată cele mai frecvente.",
    items: [
      { q: "Ce dispozitive acceptă STRONG 8K?", a: "Funcționează pe Smart TV, Android, iOS, MAG, Amazon Firestick, Enigma2 și computere Windows/Mac — toate dispozitivele majore." },
      { q: "Cât de repede pot viziona după abonare?", a: "Abonamentul se activează instantaneu după plată. Primești datele de acces imediat și poți începe vizionarea în câteva minute." },
      { q: "Vor exista blocaje sau buffering?", a: "Folosim servere rapide distribuite global, cu tehnologie anti-buffering, pentru redare fluidă și fără blocaje pe o conexiune stabilă." },
      { q: "Îl pot folosi pe mai multe dispozitive simultan?", a: "Nu. Fiecare cont funcționează pe un singur dispozitiv o dată — autentificarea pe alt dispozitiv îl deconectează pe primul. Se aplică și sub-conturilor de reseller." },
      { q: "Cum contactez asistența?", a: "Oferim asistență 24/7. Contactează-ne oricând prin chatul live de pe site, e-mail sau canalele noastre de socializare." },
    ],
  },
  cta: {
    heading: "Gata să începi călătoria ta în 8K?",
    paragraph: "Începe acum testul gratuit de 24 h și descoperă singur claritatea și fluiditatea STRONG 8K.",
    startTrial: "Începe testul gratuit",
    contact: "Contactează asistența",
  },
  footer: { features: "Funcții", pricing: "Prețuri", faq: "Întrebări", privacy: "Confidențialitate", rights: "Toate drepturile rezervate." },
}

const el: Dictionary = {
  meta: {
    title: "STRONG 8K | Premium Συνδρομή IPTV & Πάνελ Μεταπωλητή στην Ευρώπη",
    description:
      "Το STRONG 8K είναι μια premium ευρωπαϊκή υπηρεσία IPTV με 60.000+ ζωντανά κανάλια και 200.000+ ταινίες και σειρές σε σταθερό 4K/8K Ultra HD. Αγοράστε συνδρομή IPTV ή ξεκινήστε τη μεταπώληση με το ειδικό μας πάνελ μεταπωλητή.",
  },
  nav: {
    features: "Λειτουργίες",
    content: "Περιεχόμενο",
    pricing: "Τιμές",
    faq: "Ερωτήσεις",
    subscribe: "Εγγραφή τώρα",
    openMenu: "Άνοιγμα μενού",
    closeMenu: "Κλείσιμο μενού",
    home: "Αρχική STRONG 8K",
    selectLanguage: "Επιλογή γλώσσας",
  },
  hero: {
    badge: "Η ολοκαίνουργια ζωντανή εμπειρία 8K Ultra HD",
    titleLine1: "Premium συνδρομή IPTV",
    titleLine2: "με καθαρότητα STRONG 8K",
    paragraph:
      "Η premium ευρωπαϊκή υπηρεσία IPTV: πάνω από 60.000 ζωντανά κανάλια και 200.000 ταινίες και σειρές κατ' απαίτηση σε 4K/8K Ultra HD — αθλητικά, σινεμά κα�� εκπομπές από όλη την Ευρώπη και τον κόσμο. Διακομιστές anti-freeze, υποστήριξη κάθε συσκευής και ειδικό πάνελ μεταπωλητή IPTV. Ξεκινήστε την παρακολούθηση σε λεπτά.",
    trial: "Δωρεάν δοκιμή 24 ωρών",
    viewPlans: "Δείτε τα πλάνα",
    bullets: ["Άμεση ενεργοποίηση", "99,9% διαθεσιμότητα", "Χωρίς δέσμευση"],
    imageAlt: "Περιβάλλον streaming STRONG 8K σε μια υπερλεπτή smart TV",
  },
  stats: { channels: "Ζωντανά κανάλια", movies: "Ταινίες & σειρές", uptime: "Διαθεσιμότητα διακομιστή", support: "Εξυπηρέτηση πελατών" },
  features: {
    heading: "Γιατί να επιλέξετε STRONG 8K IPTV",
    subtitle:
      "Μια κορυφαία συνδρομή IPTV φτιαγμένη για αξιοπιστία — για να απολαμβάνετε κάθε καρέ, σε κάθε συσκευή, οπουδήποτε στην Ευρώπη.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "Η κωδικοποίηση υψηλού bitrate με προσαρμοστικό streaming προσφέρει καθαρότητα και χρώ��α κινηματογραφικής ποιότητας." },
      { title: "Διακομιστές anti-freeze", desc: "Ένα σύμπλεγμα διακομιστών υψηλών επιδόσεων σε όλη την Ευρώπη με τεχνολογία anti-buffering για ομαλή αναπαραγωγή ��ωρίς κολλήματα." },
      { title: "Παγκόσμια κάλυψη καναλιών", desc: "Κανάλια αθλητικών, ταινιών, ειδήσεων και παιδικά από Ευρώπη, Αμερική, Ασία και Μέση Ανατολή." },
      { title: "Κάθε συσκευή", desc: "Λειτουργεί σε Smart TV, Android, iOS, MAG, Firestick, υπολογιστές και όλες τις μεγάλες πλατφόρμες." },
      { title: "Σταθερό & ασφαλές", desc: "Η κρυπτογραφημένη μετάδοση και οι σταθερές διαδρομές κρατούν κάθε συνεδρία ασφαλή και αξιόπιστη." },
      { title: "Υποστήριξη όλο το 24ωρο", desc: "Μια επαγγελματική τεχνική ομάδα είναι online 24/7 για να λύνει γρήγορα κάθε πρόβλημα." },
    ],
  },
  showcase: {
    titleLead: "Παντού,",
    titleAccent: "οποτεδήποτε",
    paragraph:
      "Είτε στη μεγάλη οθόνη του σαλονιού είτε στο κινητό σας στη διαδρομή, το STRONG 8K προσφέρει την ίδια καθαρή, ομαλή εμπειρία. Με μια τεράστια βιβλιοθήκη περιεχομένου, υπάρχει πάντα ��άτι που θα λατρέψετε.",
    points: [
      "Ένας λογαριασμός, μία συσκευή — πάντα καθαρά και σταθερά",
      "Ζωντανά αθλητικά · ταινίες · σειρές · παιδικά κανάλια",
      "Πιο πρόσφατες ταινίες και εκπομπές με καθημερινή ενημέρωση",
      "Οδηγός προγράμματος EPG και εγγραφή catch-up",
    ],
    imageAlt: "Το STRONG 8K αναπαράγεται συγχρονισμένα σε TV, laptop, tablet και κινητό",
  },
  pricing: {
    heading: "Απλή, διαφανής τιμολόγηση",
    subtitle: "Χωρίς κρυφές χρεώσεις, χωρίς μακροχρόνια δέσμευση. Αναβαθμίστε ή ακυρώστε οποτεδήποτε.",
    mostPopular: "Πιο δημοφιλές",
    choose: "Επιλογή",
    perMonth: "/ μήνα",
    perYear: "/ έτος",
    plans: [
      {
        name: "Μηνιαίο",
        desc: "Ιδανικό για πρώτη δοκιμή",
        features: ["60.000+ ζωντανά κανάλια", "8K / 4K Ultra HD", "1 συσκευή ανά λογαριασμό (χωρίς σύνδεση σε πολλές συσκευές)", "Παγκόσμια κάλυψη καναλιών", "Υποστήριξη email"],
      },
      {
        name: "Ετήσιο",
        desc: "Πιο δημοφιλές, καλύτερη αξία",
        features: ["60.000+ ζωντανά κανάλια", "200.000+ ταινίες & σειρές", "1 συσκευή ανά λογαριασμό (χωρίς σύνδεση σε πολλές συσκευές)", "Γρήγοροι διακομιστές anti-freeze", "Οδηγός προγράμματος EPG", "Προτεραιότητα υποστήριξης 24/7"],
      },
      {
        name: "Μεταπωλητής",
        desc: "Για διανομείς και ομάδες",
        features: ["Όλα τα κανάλια & VOD περιλαμβάνονται", "1 συσκευή ανά υπολογαριασμό (χωρίς σύνδεση σε πολλές συσκευές)", "Ειδικό πάνελ διαχείρισης", "Μαζική δημιουργία υπολογαριασμών", "Αποκλειστικός διαχειριστής λογαριασμού"],
      },
    ],
  },
  faq: {
    heading: "Συχνές ερωτήσεις",
    subtitle: "Έχετε ακόμη απορίες; Ορίστε οι πιο συχνές.",
    items: [
      { q: "Ποιες συσκευές υποστηρίζει το STRONG 8K;", a: "Λειτουργεί σε Smart TV, Android, iOS, MAG, Amazon Firestick, Enigma2 και υπολογιστές Windows/Mac — όλες τις μεγάλες συσκευές." },
      { q: "Πόσο γρήγορα μπορώ να δω μετά την εγγραφή;", a: "Η συνδρομή σας ενεργοποιείται άμεσα μετά την πληρωμή. Λαμβάνετε αμέσως τα στοιχεία σύνδεσης και μπορείτε να ξεκινήσετε σε λεπτά." },
      { q: "Θα υπάρχουν κολλήματα ή buffering;", a: "Χρησιμοποιούμε γρήγορους διακομιστές σε όλο τον κόσμο με τεχνολογία anti-buffering, για ομαλή αναπαραγωγή χωρίς κολλήματα σε σταθερή σύνδεση." },
      { q: "Μπορώ να το χρησιμοποιώ σε πολλές συσκευές ταυτόχρονα;", a: "Όχι. Κάθε λογαριασμός λειτουργεί σε μία συσκευή τη φορά — η σύνδεση σε άλλη συσκευή αποσυνδέει την πρώτη. Ισχύει και για τους υπολογαριασμούς μεταπωλητή." },
      { q: "Πώς επικοινωνώ με την υποστήριξη;", a: "Προσφέρουμε υποστήριξη 24/7. Επικοινωνήστε μαζί μας οποτεδήποτε μέσω live chat στον ιστότοπο, email ή τα κοινωνικά μας δίκτυα." },
    ],
  },
  cta: {
    heading: "Έτοιμοι να ξεκινήσετε το ταξίδι σας στο 8K;",
    paragraph: "Ξεκινήστε τώρα τη δωρεάν δοκιμή 24 ωρών και ζήστε μόνοι σας την καθαρότητα και την ομαλότητα του STRONG 8K.",
    startTrial: "Έναρξη δωρεάν δοκιμής",
    contact: "Επικοινωνία με υποστήριξη",
  },
  footer: { features: "Λειτουργίες", pricing: "Τιμές", faq: "Ερωτήσεις", privacy: "Απόρρητο", rights: "Με επιφύλαξη κάθε δικαιώματος." },
}

const ru: Dictionary = {
  meta: {
    title: "STRONG 8K | Премиум IPTV-подписка и панель реселлера в Европе",
    description:
      "STRONG 8K — премиальный европейский IPTV-сервис с более чем 60 000 прямых каналов и 200 000+ фильмов и сериалов в стабильном 4K/8K Ultra HD. Купите IPTV-подписку или начните перепродажу с нашей выделенной панелью реселлера.",
  },
  nav: {
    features: "Возможности",
    content: "Контент",
    pricing: "Тарифы",
    faq: "Вопросы",
    subscribe: "Подписаться",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    home: "Главная STRONG 8K",
    selectLanguage: "Выбрать язык",
  },
  hero: {
    badge: "Совершенно новый живой опыт 8K Ultra HD",
    titleLine1: "Премиум IPTV-подписка",
    titleLine2: "в чёткости STRONG 8K",
    paragraph:
      "Премиальный европейский IPTV-сервис: более 60 000 прямых каналов и 200 000 фильмов и сериалов по запросу в 4K/8K Ultra HD — спорт, кино и шоу со всей Европы и мира. Серверы anti-freeze, поддержка любого устройства и выделенная панель реселлера IPTV. Начните смотреть за несколько минут.",
    trial: "Бесплатный тест 24 ч",
    viewPlans: "Смотреть тарифы",
    bullets: ["Мгновенная активация", "99,9% аптайм", "Без контракта"],
    imageAlt: "Интерфейс стриминга STRONG 8K на ультратонком смарт-ТВ",
  },
  stats: { channels: "Прямые каналы", movies: "Фильмы и сериалы", uptime: "Аптайм сервера", support: "Поддержка клиентов" },
  features: {
    heading: "Почему STRONG 8K IPTV",
    subtitle:
      "IPTV-подписка высшего класса, созданная для надёжности — чтобы вы наслаждались каждым кадром на любом устройстве в любой точке Европы.",
    items: [
      { title: "8K / 4K Ultra HD", desc: "Кодирование с высоким битрейтом и адаптивный стриминг обеспечивают чёткость и цвет кинематографического уровня." },
      { title: "Серверы anti-freeze", desc: "Высокопроизводительный кластер серверов по всей Европе с технологией anti-buffering для плавного воспроизведения без зависаний." },
      { title: "Глобальный охват каналов", desc: "Спортивные, кино-, новостные и детские каналы из Европы, Америки, Азии и Ближнего Востока." },
      { title: "Любое устройство", desc: "Работает на Smart TV, Android, iOS, MAG, Firestick, компьютерах и всех основных платформах." },
      { title: "Стабильно и безопасно", desc: "Шифрованная доставка и стабильные маршруты делают каждый сеанс безопасным и надёжным." },
      { title: "Круглосуточная поддержка", desc: "Профессиональная техническая команда онлайн 24/7 и быстро решит любую проблему." },
    ],
  },
  showcase: {
    titleLead: "Где угодно,",
    titleAccent: "когда угодно",
    paragraph:
      "Будь то большой экран в гостиной или телефон в дороге, STRONG 8K обеспечивает одинаково чёткий и плавный просмотр. С огромной библиотекой контента всегда найдётся то, что вам понравится.",
    points: [
      "Один аккаунт, одно устройство — всегда чётко и стабильно",
      "Живой спорт · фильмы · сериалы · детские каналы",
      "Новейшие фильмы и шоу обновляются ежедневно",
      "Телегид EPG и запись catch-up",
    ],
    imageAlt: "STRONG 8K синхронно воспроизводится на ТВ, ноутбуке, планшете и телефоне",
  },
  pricing: {
    heading: "Простые и прозрачные тарифы",
    subtitle: "Без скрытых платежей и долгих контрактов. Меняйте тариф или отменяйте в любой момент.",
    mostPopular: "Популярный",
    choose: "Выбрать",
    perMonth: "/ месяц",
    perYear: "/ год",
    plans: [
      {
        name: "Месячный",
        desc: "Отлично, чтобы попробовать",
        features: ["60 000+ прямых каналов", "8K / 4K Ultra HD", "1 устройство на аккаунт (без входа на нескольких устройствах)", "Глобальный охват каналов", "Поддержка по email"],
      },
      {
        name: "Годовой",
        desc: "Популярный, лучшая цена",
        features: ["60 000+ прямых каналов", "200 000+ фильмов и сериалов", "1 устройство на аккаунт (без входа на нескольких устройствах)", "Быстрые серверы anti-freeze", "Телегид EPG", "Приоритетная поддержка 24/7"],
      },
      {
        name: "Реселлер",
        desc: "Для дистрибьюторов и команд",
        features: ["Все каналы и VOD включены", "1 устройство на субаккаунт (без входа на нескольких устройствах)", "Выделенная панель администратора", "Массовое создание субаккаунтов", "Персональный менеджер"],
      },
    ],
  },
  faq: {
    heading: "Частые вопросы",
    subtitle: "Остались вопросы? Вот те, что задают чаще всего.",
    items: [
      { q: "Какие устройства поддерживает STRONG 8K?", a: "Работает на Smart TV, Android, iOS, MAG, Amazon Firestick, Enigma2 и компьютерах Windows/Mac — на всех основных устройствах." },
      { q: "Как быстро я смогу смотреть после подписки?", a: "Подписка активируется сразу после оплаты. Вы немедленно получите данные для входа и сможете начать просмотр за несколько минут." },
      { q: "Будут ли зависания или буферизация?", a: "Мы используем быстрые серверы по всему миру с технологией anti-buffering, что обеспечивает плавное воспроизведение без зависаний при стабильном соединении." },
      { q: "Можно ли использовать на нескольких устройствах сразу?", a: "Нет. Каждый аккаунт работает только н�� одном устройстве одновременно — вход на другом устройстве завершает первый сеанс. Это касается и субаккаунтов реселлера." },
      { q: "Как связаться с поддержкой?", a: "Мы предлагаем поддержку 24/7. Свяжитесь с нами в любое время через онлайн-чат на сайте, по email или в соцсетях." },
    ],
  },
  cta: {
    heading: "Готовы начать своё путешествие в 8K?",
    paragraph: "Запустите бесплатный тест на 24 часа прямо сейчас и оцените чёткость и плавность STRONG 8K сами.",
    startTrial: "Начать бесплатный тест",
    contact: "Связаться с поддержкой",
  },
  footer: { features: "Возможности", pricing: "Тарифы", faq: "Вопросы", privacy: "Конфиденциальность", rights: "Все права защищены." },
}

export const dictionaries = { en, de, fr, es, it, pt, nl, pl, sv, ro, el, ru } as const
