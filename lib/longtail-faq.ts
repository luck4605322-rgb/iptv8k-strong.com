import type { Locale } from "@/lib/i18n"

// Long-tail FAQ content shown *below* the main FAQ block.
//
// Each entry targets high-intent long-tail queries that the short FAQ in
// `lib/dictionaries.ts` does not cover: Firestick / Smart TV setup, the 24-hour
// free trial flow, how the anti-freeze stack actually works, how long activation
// takes after payment and the reseller-credit journey. Every answer is mirrored
// into the FAQPage JSON-LD (see components/structured-data.tsx), so keep the
// copy aligned with what the page actually offers.
//
// Question 1 and question 4 used to overlap with the main FAQ entries; the main
// FAQ now covers payment methods and credential delivery, while this block owns
// the step-by-step setup and the exact activation window.

export type LongtailFaqEntry = {
  heading: string
  subtitle: string
  items: { q: string; a: string }[]
}

export const longtailFaq: Record<Locale, LongtailFaqEntry> = {
  en: {
    heading: "More about Strong 8K IPTV",
    subtitle: "Firestick and Smart TV setup, the 24-hour free trial, anti-freeze stability, activation time and the reseller credit panel — answered in detail.",
    items: [
      {
        q: "How to setup Strong 8K IPTV on Firestick and Smart TV?",
        a: "On Firestick install an IPTV player from the Amazon AppStore; on a Samsung Tizen or LG webOS set install the matching TV player. Then paste the Xtream Codes login (username, password, server URL) or the M3U link you receive with your activation. The 60,000+ channel list and EPG load in about two minutes — no rooting, no extra hardware.",
      },
      {
        q: "Do you offer a 24-hour free trial before purchasing?",
        a: "Yes. Ask for it in live chat or on WhatsApp and we activate a fully featured test line for 24 hours, including all 60,000+ live channels, 200,000+ VOD titles and 4K/8K anti-freeze streaming. No payment details, no card, no automatic renewal.",
      },
      {
        q: "What makes Strong 8K IPTV anti-freeze and stable?",
        a: "Every stream runs on a load-balanced cluster of anti-buffering servers across several European data centres, with adaptive bitrate and automatic failover: if a node degrades, playback moves to a healthy one in milliseconds. That is how we hold 99.9% uptime and stable live channels during peak hours.",
      },
      {
        q: "How long does activation take after payment?",
        a: "Activation is instant — credentials are generated automatically within 1 to 5 minutes of checkout and emailed to the address you used. If nothing arrives within 15 minutes, contact live chat or WhatsApp with your order ID and we push the line through manually.",
      },
      {
        q: "How to become an IPTV reseller with credit panels?",
        a: "Buy a credit pack (120 / 240 / 360 credits from $230) and your reseller panel opens immediately: create sub-accounts, assign credits, set per-line device limits and track usage in real time. Support and trial credits are included.",
      },
    ],
  },

  de: {
    heading: "Weitere Fragen zu Strong 8K IPTV",
    subtitle: "Firestick- und Smart-TV-Einrichtung, 24-Stunden-Gratis-Test, Anti-Freeze-Stabilität, Aktivierungszeit und Reseller-Panel — ausführlich erklärt.",
    items: [
      {
        q: "Wie richte ich Strong 8K IPTV auf Firestick und Smart TV ein?",
        a: "Auf dem Firestick installierst du einen IPTV-Player aus dem Amazon AppStore, auf Samsung Tizen oder LG webOS den passenden TV-Player. Danach gibst du den Xtream-Codes-Zugang (Benutzer, Passwort, Server-URL) oder den M3U-Link aus der Aktivierungsmail ein. Senderliste mit 60.000+ Kanälen und EPG stehen nach rund zwei Minuten — ohne Rooting, ohne Zusatzhardware.",
      },
      {
        q: "Gibt es vor dem Kauf einen 24-Stunden-Gratis-Test?",
        a: "Ja. Frag per Live-Chat oder WhatsApp danach, und wir schalten eine vollwertige Testline für 24 Stunden frei — mit allen 60.000+ Live-Sendern, 200.000+ VOD-Titeln und 4K/8K-Anti-Freeze-Streaming. Keine Zahlungsdaten, keine Karte, keine automatische Verlängerung.",
      },
      {
        q: "Warum ist Strong 8K IPTV anti-freeze und stabil?",
        a: "Jeder Stream läuft auf einem lastverteilten Cluster von Anti-Buffering-Servern in mehreren europäischen Rechenzentren, mit adaptiver Bitrate und automatischem Failover: Verschlechtert sich ein Knoten, wechselt die Wiedergabe in Millisekunden auf einen gesunden. So halten wir 99,9 % Uptime und stabile Live-Sender auch zur Stoßzeit.",
      },
      {
        q: "Wie lange dauert die Aktivierung nach der Zahlung?",
        a: "Die Aktivierung ist sofort: Die Zugangsdaten werden automatisch innerhalb von 1 bis 5 Minuten nach dem Checkout erzeugt und an die angegebene Adresse gemailt. Kommt nach 15 Minuten nichts an, schreib uns mit der Bestellnummer per Live-Chat oder WhatsApp, dann legen wir die Line manuell an.",
      },
      {
        q: "Wie werde ich IPTV-Reseller mit Credit-Panel?",
        a: "Du kaufst ein Credit-Paket (120 / 240 / 360 Credits ab 230 $) und dein Reseller-Panel ist sofort offen: Unterkonten anlegen, Credits zuweisen, Gerätelimits pro Line setzen und den Verbrauch live verfolgen. Support und Testcredits sind inklusive.",
      },
    ],
  },

  fr: {
    heading: "En savoir plus sur Strong 8K IPTV",
    subtitle: "Installation Firestick et Smart TV, essai gratuit de 24 heures, stabilité anti-freeze, délai d'activation et panel revendeur — en détail.",
    items: [
      {
        q: "Comment installer Strong 8K IPTV sur Firestick et Smart TV ?",
        a: "Sur Firestick, installez un lecteur IPTV depuis l'Amazon AppStore ; sur un Samsung Tizen ou LG webOS, le lecteur TV correspondant. Collez ensuite l'accès Xtream Codes (utilisateur, mot de passe, URL du serveur) ou le lien M3U reçu à l'activation. La liste de 60 000+ chaînes et l'EPG apparaissent en deux minutes, sans root ni matériel supplémentaire.",
      },
      {
        q: "Proposez-vous un essai gratuit de 24 heures avant l'achat ?",
        a: "Oui. Demandez-le sur le live chat ou WhatsApp : nous activons une ligne de test complète pendant 24 heures, avec 60 000+ chaînes live, 200 000+ titres VOD et le streaming anti-freeze 4K/8K. Aucune donnée bancaire, aucune carte, aucun renouvellement automatique.",
      },
      {
        q: "Pourquoi Strong 8K IPTV est-il anti-freeze et stable ?",
        a: "Chaque flux tourne sur un cluster de serveurs anti-buffering équilibré en charge dans plusieurs centres de données européens, avec débit adaptatif et basculement automatique : si un nœud se dégrade, la lecture passe à un nœud sain en quelques millisecondes. D'où 99,9 % d'uptime et des chaînes live stables même aux heures de pointe.",
      },
      {
        q: "Combien de temps prend l'activation après le paiement ?",
        a: "L'activation est immédiate : les identifiants sont générés automatiquement en 1 à 5 minutes après le paiement et envoyés à l'adresse indiquée. Sans nouvelles après 15 minutes, écrivez-nous sur le chat ou WhatsApp avec votre numéro de commande et nous activons la ligne manuellement.",
      },
      {
        q: "Comment devenir revendeur IPTV avec un panel de crédits ?",
        a: "Achetez un pack de crédits (120 / 240 / 360 à partir de 230 $) et votre panel revendeur s'ouvre aussitôt : créez des sous-comptes, attribuez des crédits, fixez les limites d'appareils par ligne et suivez la consommation en direct. Support et crédits d'essai inclus.",
      },
    ],
  },

  es: {
    heading: "Más sobre Strong 8K IPTV",
    subtitle: "Configuración en Firestick y Smart TV, prueba gratis de 24 horas, estabilidad anti-freeze, tiempo de activación y panel de revendedor — al detalle.",
    items: [
      {
        q: "¿Cómo configuro Strong 8K IPTV en Firestick y Smart TV?",
        a: "En Firestick instala un reproductor IPTV desde Amazon AppStore; en un Samsung Tizen o LG webOS, el reproductor de TV correspondiente. Después pega el acceso Xtream Codes (usuario, contraseña, URL del servidor) o el enlace M3U que enviamos al activar. La lista de 60.000+ canales y la EPG aparecen en unos dos minutos, sin root ni hardware extra.",
      },
      {
        q: "¿Ofrecéis una prueba gratis de 24 horas antes de comprar?",
        a: "Sí. Pídela en el chat en vivo o por WhatsApp y activamos una línea de prueba completa durante 24 horas con 60.000+ canales en directo, 200.000+ títulos VOD y streaming anti-freeze 4K/8K. Sin datos de pago, sin tarjeta y sin renovación automática.",
      },
      {
        q: "¿Por qué Strong 8K IPTV es anti-freeze y estable?",
        a: "Cada flujo corre en un clúster de servidores anti-buffering con balanceo de carga en varios centros de datos europeos, con bitrate adaptativo y failover automático: si un nodo se degrada, la reproducción pasa a uno sano en milisegundos. Así mantenemos un 99,9 % de uptime y canales estables incluso en horas punta.",
      },
      {
        q: "¿Cuánto tarda la activación tras el pago?",
        a: "La activación es instantánea: las credenciales se generan automáticamente entre 1 y 5 minutos después del pago y se envían al correo indicado. Si en 15 minutos no llega nada, escríbenos por chat o WhatsApp con el número de pedido y activamos la línea manualmente.",
      },
      {
        q: "¿Cómo me convierto en revendedor IPTV con panel de créditos?",
        a: "Compra un pack de créditos (120 / 240 / 360 desde 230 $) y tu panel de revendedor se abre al instante: crea subcuentas, asigna créditos, fija límites de dispositivos por línea y sigue el consumo en tiempo real. Soporte y créditos de prueba incluidos.",
      },
    ],
  },

  it: {
    heading: "Altro su Strong 8K IPTV",
    subtitle: "Configurazione Firestick e Smart TV, prova gratuita di 24 ore, stabilità anti-freeze, tempi di attivazione e pannello rivenditore — in dettaglio.",
    items: [
      {
        q: "Come configuro Strong 8K IPTV su Firestick e Smart TV?",
        a: "Su Firestick installa un player IPTV dall'Amazon AppStore; su un Samsung Tizen o LG webOS il player TV corrispondente. Poi incolla le credenziali Xtream Codes (utente, password, URL server) o il link M3U ricevuto con l'attivazione. La lista da 60.000+ canali e l'EPG compaiono in circa due minuti, senza root e senza hardware aggiuntivo.",
      },
      {
        q: "Offrite una prova gratuita di 24 ore prima dell'acquisto?",
        a: "Sì. Richiedila in live chat o su WhatsApp e attiviamo una linea di test completa per 24 ore, con 60.000+ canali live, 200.000+ titoli VOD e streaming anti-freeze 4K/8K. Nessun dato di pagamento, nessuna carta, nessun rinnovo automatico.",
      },
      {
        q: "Perché Strong 8K IPTV è anti-freeze e stabile?",
        a: "Ogni flusso gira su un cluster di server anti-buffering bilanciato in diversi data center europei, con bitrate adattivo e failover automatico: se un nodo peggiora, la riproduzione passa a uno sano in pochi millisecondi. Così teniamo il 99,9% di uptime e canali stabili anche nelle ore di punta.",
      },
      {
        q: "Quanto tempo richiede l'attivazione dopo il pagamento?",
        a: "L'attivazione è immediata: le credenziali vengono generate automaticamente in 1-5 minuti dal checkout e inviate all'indirizzo indicato. Se dopo 15 minuti non arriva nulla, scrivici in chat o su WhatsApp con l'ID ordine e attiviamo la linea manualmente.",
      },
      {
        q: "Come diventare rivenditore IPTV con pannello a crediti?",
        a: "Acquista un pacchetto crediti (120 / 240 / 360 da 230 $) e il pannello rivenditore si apre subito: crei sottoconti, assegni crediti, imposti limiti di dispositivi per linea e monitori i consumi in tempo reale. Supporto e crediti di prova inclusi.",
      },
    ],
  },

  pt: {
    heading: "Mais sobre a Strong 8K IPTV",
    subtitle: "Configuração em Firestick e Smart TV, teste grátis de 24 horas, estabilidade anti-freeze, tempo de ativação e painel de revenda — em detalhe.",
    items: [
      {
        q: "Como configuro a Strong 8K IPTV no Firestick e na Smart TV?",
        a: "No Firestick instale um player IPTV da Amazon AppStore; num Samsung Tizen ou LG webOS, o player de TV correspondente. Depois cole as credenciais Xtream Codes (utilizador, palavra-passe, URL do servidor) ou o link M3U recebido na ativação. A lista de 60.000+ canais e o EPG aparecem em cerca de dois minutos, sem root e sem hardware extra.",
      },
      {
        q: "Oferecem um teste grátis de 24 horas antes da compra?",
        a: "Sim. Peça no chat ao vivo ou no WhatsApp e ativamos uma linha de teste completa por 24 horas, com 60.000+ canais em direto, 200.000+ títulos VOD e streaming anti-freeze 4K/8K. Sem dados de pagamento, sem cartão e sem renovação automática.",
      },
      {
        q: "Porque é que a Strong 8K IPTV é anti-freeze e estável?",
        a: "Cada stream corre num cluster de servidores anti-buffering com balanceamento de carga em vários data centers europeus, com débito adaptativo e failover automático: se um nó degrada, a reprodução passa para um saudável em milissegundos. É assim que mantemos 99,9% de uptime e canais estáveis mesmo em horas de ponta.",
      },
      {
        q: "Quanto tempo demora a ativação após o pagamento?",
        a: "A ativação é imediata: as credenciais são geradas automaticamente entre 1 e 5 minutos após o checkout e enviadas para o email indicado. Se não chegar nada em 15 minutos, fale connosco no chat ou WhatsApp com o número do pedido e ativamos a linha manualmente.",
      },
      {
        q: "Como me torno revendedor IPTV com painel de créditos?",
        a: "Compre um pacote de créditos (120 / 240 / 360 a partir de 230 $) e o painel de revenda abre de imediato: criar subcontas, atribuir créditos, definir limites de dispositivos por linha e acompanhar o consumo em tempo real. Apoio e créditos de teste incluídos.",
      },
    ],
  },

  nl: {
    heading: "Meer over Strong 8K IPTV",
    subtitle: "Installatie op Firestick en Smart TV, gratis proef van 24 uur, anti-freeze-stabiliteit, activatietijd en het reseller-creditpaneel — in detail.",
    items: [
      {
        q: "Hoe stel ik Strong 8K IPTV in op Firestick en Smart TV?",
        a: "Op de Firestick installeer je een IPTV-speler uit de Amazon AppStore; op een Samsung Tizen of LG webOS de bijbehorende TV-speler. Plak daarna de Xtream Codes-login (gebruikersnaam, wachtwoord, server-URL) of de M3U-link uit je activatiemail. De lijst met 60.000+ kanalen en de EPG staan er in ongeveer twee minuten, zonder root en zonder extra hardware.",
      },
      {
        q: "Bieden jullie een gratis proef van 24 uur voor de aankoop?",
        a: "Ja. Vraag ernaar in de live chat of op WhatsApp en we zetten 24 uur lang een volledige testlijn open, met 60.000+ livekanalen, 200.000+ VOD-titels en 4K/8K anti-freeze-streaming. Geen betaalgegevens, geen kaart, geen automatische verlenging.",
      },
      {
        q: "Waarom is Strong 8K IPTV anti-freeze en stabiel?",
        a: "Elke stream loopt op een load-balanced cluster van anti-buffering-servers in meerdere Europese datacenters, met adaptieve bitrate en automatische failover: verslechtert een node, dan schakelt de weergave binnen milliseconden over naar een gezonde. Zo houden we 99,9% uptime en stabiele livekanalen, ook in de piekuren.",
      },
      {
        q: "Hoe lang duurt de activatie na betaling?",
        a: "De activatie is direct: inloggegevens worden automatisch binnen 1 tot 5 minuten na het afrekenen aangemaakt en naar het opgegeven adres gemaild. Komt er na 15 minuten niets binnen, stuur ons dan je ordernummer via chat of WhatsApp en we zetten de lijn handmatig aan.",
      },
      {
        q: "Hoe word ik IPTV-reseller met een creditpaneel?",
        a: "Koop een creditpakket (120 / 240 / 360 vanaf 230 $) en je resellerpaneel gaat meteen open: subaccounts aanmaken, credits toewijzen, apparaatlimieten per lijn instellen en verbruik live volgen. Support en testcredits inbegrepen.",
      },
    ],
  },

  pl: {
    heading: "Więcej o Strong 8K IPTV",
    subtitle: "Konfiguracja na Firestick i Smart TV, darmowy test 24 h, stabilność anti-freeze, czas aktywacji i panel resellera — szczegółowo.",
    items: [
      {
        q: "Jak skonfigurować Strong 8K IPTV na Firestick i Smart TV?",
        a: "Na Firestick zainstaluj odtwarzacz IPTV z Amazon AppStore; na Samsungu Tizen lub LG webOS odpowiedni odtwarzacz TV. Następnie wklej dane Xtream Codes (użytkownik, hasło, URL serwera) lub link M3U z maila aktywacyjnego. Lista 60 000+ kanałów i EPG pojawiają się w około dwie minuty, bez rootowania i bez dodatkowego sprzętu.",
      },
      {
        q: "Czy przed zakupem jest darmowy 24-godzinny test?",
        a: "Tak. Poproś o niego na czacie lub WhatsApp, a uruchomimy pełną linię testową na 24 godziny: wszystkie 60 000+ kanałów live, 200 000+ tytułów VOD i streaming anti-freeze 4K/8K. Bez danych płatniczych, bez karty i bez automatycznego odnowienia.",
      },
      {
        q: "Dlaczego Strong 8K IPTV jest anti-freeze i stabilny?",
        a: "Każdy strumień działa na zbalansowanym klastrze serwerów anti-buffering w kilku europejskich centrach danych, z adaptacyjnym bitrate i automatycznym failover: gdy węzeł traci jakość, odtwarzanie przechodzi na sprawny w milisekundach. Dzięki temu utrzymujemy 99,9% uptime i stabilne kanały także w godzinach szczytu.",
      },
      {
        q: "Ile trwa aktywacja po płatności?",
        a: "Aktywacja jest natychmiastowa: dane dostępowe generują się automatycznie w 1-5 minut po płatności i trafiają na podany adres. Jeśli po 15 minutach nic nie dotrze, napisz na czacie lub WhatsApp z numerem zamówienia i uruchomimy linię ręcznie.",
      },
      {
        q: "Jak zostać resellerem IPTV z panelem kredytów?",
        a: "Kupujesz pakiet kredytów (120 / 240 / 360 od 230 $) i panel resellera otwiera się od razu: tworzenie podkont, przydzielanie kredytów, limity urządzeń na linię i monitoring zużycia w czasie rzeczywistym. Wsparcie i kredyty testowe w zestawie.",
      },
    ],
  },

  sv: {
    heading: "Mer om Strong 8K IPTV",
    subtitle: "Installation på Firestick och Smart TV, gratis test i 24 timmar, anti-freeze-stabilitet, aktiveringstid och återförsäljarens kreditpanel — i detalj.",
    items: [
      {
        q: "Hur installerar jag Strong 8K IPTV på Firestick och Smart TV?",
        a: "På Firestick installerar du en IPTV-spelare från Amazon AppStore; på Samsung Tizen eller LG webOS motsvarande TV-spelare. Klistra sedan in Xtream Codes-uppgifterna (användare, lösenord, server-URL) eller M3U-länken från aktiveringsmailet. Listan med 60 000+ kanaler och EPG finns på plats inom ungefär två minuter, utan root och utan extra hårdvara.",
      },
      {
        q: "Erbjuder ni en gratis test i 24 timmar före köp?",
        a: "Ja. Be om den i livechatten eller på WhatsApp så öppnar vi en fullständig testlinje i 24 timmar med 60 000+ livekanaler, 200 000+ VOD-titlar och 4K/8K anti-freeze-streaming. Inga betalningsuppgifter, inget kort, ingen automatisk förnyelse.",
      },
      {
        q: "Varför är Strong 8K IPTV anti-freeze och stabilt?",
        a: "Varje ström går via ett lastbalanserat kluster av anti-buffering-servrar i flera europeiska datacenter, med adaptiv bitrate och automatisk failover: försämras en nod flyttas uppspelningen till en frisk inom millisekunder. Därför håller vi 99,9 % uptime och stabila livekanaler även under topplast.",
      },
      {
        q: "Hur lång tid tar aktiveringen efter betalning?",
        a: "Aktiveringen är omedelbar: inloggningsuppgifterna skapas automatiskt inom 1 till 5 minuter efter betalning och mejlas till angiven adress. Om inget kommit efter 15 minuter, skriv till oss i chatten eller på WhatsApp med ordernumret så lägger vi upp linjen manuellt.",
      },
      {
        q: "Hur blir jag IPTV-återförsäljare med kreditpanel?",
        a: "Köp ett kreditpaket (120 / 240 / 360 från 230 $) så öppnas din återförsäljarpanel direkt: skapa underkonton, tilldela krediter, sätta enhetsgränser per linje och följa förbrukningen live. Support och testkrediter ingår.",
      },
    ],
  },

  ro: {
    heading: "Mai multe despre Strong 8K IPTV",
    subtitle: "Configurare pe Firestick și Smart TV, test gratuit de 24 de ore, stabilitate anti-freeze, timp de activare și panoul de reseller — în detaliu.",
    items: [
      {
        q: "Cum configurez Strong 8K IPTV pe Firestick și Smart TV?",
        a: "Pe Firestick instalezi un player IPTV din Amazon AppStore; pe un Samsung Tizen sau LG webOS, playerul TV potrivit. Apoi lipești datele Xtream Codes (utilizator, parolă, URL server) sau linkul M3U primit la activare. Lista de 60.000+ canale și EPG apar în circa două minute, fără root și fără hardware suplimentar.",
      },
      {
        q: "Oferiți un test gratuit de 24 de ore înainte de cumpărare?",
        a: "Da. Cere-l în live chat sau pe WhatsApp și activăm o linie de test completă timp de 24 de ore, cu 60.000+ canale live, 200.000+ titluri VOD și streaming anti-freeze 4K/8K. Fără date de plată, fără card și fără reînnoire automată.",
      },
      {
        q: "De ce Strong 8K IPTV este anti-freeze și stabil?",
        a: "Fiecare stream rulează pe un cluster echilibrat de servere anti-buffering în mai multe centre de date europene, cu bitrate adaptiv și failover automat: dacă un nod se degradează, redarea trece pe unul sănătos în câteva milisecunde. Așa menținem 99,9% uptime și canale stabile și la orele de vârf.",
      },
      {
        q: "Cât durează activarea după plată?",
        a: "Activarea este instantanee: datele de acces sunt generate automat în 1-5 minute după checkout și trimise pe adresa indicată. Dacă nu primești nimic în 15 minute, scrie-ne pe chat sau WhatsApp cu numărul comenzii și activăm linia manual.",
      },
      {
        q: "Cum devin reseller IPTV cu panou de credite?",
        a: "Cumperi un pachet de credite (120 / 240 / 360 de la 230 $) și panoul de reseller se deschide imediat: creezi subconturi, aloci credite, setezi limite de dispozitive pe linie și urmărești consumul în timp real. Suport și credite de test incluse.",
      },
    ],
  },

  el: {
    heading: "Περισσότερα για το Strong 8K IPTV",
    subtitle: "Ρύθμιση σε Firestick και Smart TV, δωρεάν δοκιμή 24 ωρών, σταθερότητα anti-freeze, χρόνος ενεργοποίησης και πάνελ μεταπωλητή — αναλυτικά.",
    items: [
      {
        q: "Πώς ρυθμίζω το Strong 8K IPTV σε Firestick και Smart TV;",
        a: "Στο Firestick εγκαθιστάς έναν IPTV player από το Amazon AppStore· σε Samsung Tizen ή LG webOS τον αντίστοιχο TV player. Μετά επικολλάς τα στοιχεία Xtream Codes (χρήστης, κωδικός, URL server) ή τον σύνδεσμο M3U από το email ενεργοποίησης. Η λίστα 60.000+ καναλιών και το EPG εμφανίζονται σε δύο λεπτά, χωρίς root και χωρίς επιπλέον hardware.",
      },
      {
        q: "Προσφέρετε δωρεάν δοκιμή 24 ωρών πριν την αγορά;",
        a: "Ναι. Ζήτησέ τη στο live chat ή στο WhatsApp και ενεργοποιούμε πλήρη δοκιμαστική γραμμή για 24 ώρες, με 60.000+ ζωντανά κανάλια, 200.000+ τίτλους VOD και anti-freeze streaming 4K/8K. Χωρίς στοιχεία πληρωμής, χωρίς κάρτα, χωρίς αυτόματη ανανέωση.",
      },
      {
        q: "Γιατί το Strong 8K IPTV είναι anti-freeze και σταθερό;",
        a: "Κάθε ροή τρέχει σε cluster anti-buffering servers με εξισορρόπηση φόρτου σε πολλά ευρωπαϊκά data centers, με προσαρμοστικό bitrate και αυτόματο failover: αν ένας κόμβος υποβαθμιστεί, η αναπαραγωγή περνά σε υγιή μέσα σε χιλιοστά του δευτερολέπτου. Έτσι κρατάμε 99,9% uptime και σταθερά κανάλια και στις ώρες αιχμής.",
      },
      {
        q: "Πόσο διαρκεί η ενεργοποίηση μετά την πληρωμή;",
        a: "Η ενεργοποίηση είναι άμεση: τα στοιχεία δημιουργούνται αυτόματα σε 1 έως 5 λεπτά μετά την πληρωμή και αποστέλλονται στη διεύθυνση που δήλωσες. Αν δεν φτάσει τίποτα σε 15 λεπτά, γράψε μας στο chat ή στο WhatsApp με τον αριθμό παραγγελίας και ενεργοποιούμε τη γραμμή χειροκίνητα.",
      },
      {
        q: "Πώς γίνομαι μεταπωλητής IPTV με πάνελ credits;",
        a: "Αγοράζεις πακέτο credits (120 / 240 / 360 από 230 $) και το πάνελ μεταπωλητή ανοίγει αμέσως: δημιουργία υπολογαριασμών, ανάθεση credits, όρια συσκευών ανά γραμμή και παρακολούθηση κατανάλωσης σε πραγματικό χρόνο. Υποστήριξη και credits δοκιμής περιλαμβάνονται.",
      },
    ],
  },

  ru: {
    heading: "Подробнее о Strong 8K IPTV",
    subtitle: "Настройка на Firestick и Smart TV, бесплатный тест на 24 часа, стабильность anti-freeze, время активации и панель реселлера — подробно.",
    items: [
      {
        q: "Как настроить Strong 8K IPTV на Firestick и Smart TV?",
        a: "На Firestick установите IPTV-плеер из Amazon AppStore, на Samsung Tizen или LG webOS — соответствующий TV-плеер. Затем вставьте данные Xtream Codes (логин, пароль, URL сервера) или M3U-ссылку из письма об активации. Список 60 000+ каналов и EPG появляются примерно за две минуты, без root и без дополнительного оборудования.",
      },
      {
        q: "Есть ли бесплатный тест на 24 часа до покупки?",
        a: "Да. Попросите его в live-чате или WhatsApp, и мы включим полноценную тестовую линию на 24 часа: все 60 000+ каналов, 200 000+ фильмов и сериалов VOD и anti-freeze стриминг 4K/8K. Без платёжных данных, без карты и без автосписаний.",
      },
      {
        q: "Почему Strong 8K IPTV не зависает и работает стабильно?",
        a: "Каждый поток идёт через кластер anti-buffering серверов с балансировкой нагрузки в нескольких европейских дата-центрах, с адаптивным битрейтом и автоматическим failover: при деградации узла воспроизведение переходит на рабочий за миллисекунды. Так мы держим uptime 99,9% и стабильные каналы даже в часы пик.",
      },
      {
        q: "Сколько времени занимает активация после оплаты?",
        a: "Активация мгновенная: данные выдаются автоматически в течение 1-5 минут после оплаты и приходят на указанный адрес. Если через 15 минут ничего не пришло, напишите в чат или WhatsApp номер заказа — активируем линию вручную.",
      },
      {
        q: "Как стать IPTV-реселлером с панелью кредитов?",
        a: "Покупаете пакет кредитов (120 / 240 / 360 от 230 $) — панель реселлера открывается сразу: создание субакаунтов, выдача кредитов, лимиты устройств на линию и статистика расхода в реальном времени. Поддержка и тестовые кредиты включены.",
      },
    ],
  },
}

export function getLongtailFaq(locale: Locale): LongtailFaqEntry {
  return longtailFaq[locale] ?? longtailFaq.en
}
