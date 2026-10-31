/* Cormega: Queensbridge, Long Island City, Queens. Legal Hustle, The Realness, The True Meaning, Born and Raised, Mega Philosophy, The Testament. */
window.CFG = {
  name: "Cormega", nameUpper: "CORMEGA", short: "MEGA",
  hood: "Queensbridge", hoodUpper: "QUEENSBRIDGE", boro: "Queens",
  saveKey: "ogfan99cormega1",
  /* everybody starts out fronting: the opposite of the realness */
  startRank: "Fronter",
  ranks: ["Legal Hustler", "Born and Raised", "Mega Philosopher"],
  topRank: "The Realness",
  point: "Mega", points: "Megas",
  rankRewards: {
    "Legal Hustler": { bongs: 5, line: "Rap is a hustle. You keep it legal." },
    "Born and Raised": { bongs: 10, line: "Born and raised in the Bridge. You know the true meaning." },
    "Mega Philosopher": { bongs: 25, line: "You run all of Queensbridge." }
  },
  trophyArt: [
    /* Fronter: a cracked gray mask */
    '<path d="M18 30q22-14 44 0v18q0 22-22 28q-22-6-22-28z" fill="#9aa0a6" stroke="#4a4f55" stroke-width="2"/>' +
    '<ellipse cx="31" cy="42" rx="6" ry="4" fill="#1a1a1a"/><ellipse cx="49" cy="42" rx="6" ry="4" fill="#1a1a1a"/>' +
    '<path d="M32 60q8 4 16 0" stroke="#1a1a1a" stroke-width="2" fill="none" stroke-linecap="round"/>' +
    '<path d="M44 22l-4 12 6 6-5 10 4 8" stroke="#2a2a2a" stroke-width="1.6" fill="none"/>',
    /* Legal Hustler: a briefcase with the LH plate */
    '<path d="M32 30v-6h16v6" fill="none" stroke="#3b2418" stroke-width="4"/>' +
    '<rect x="12" y="30" width="56" height="40" rx="4" fill="#5a3a20" stroke="#2a170f" stroke-width="2"/>' +
    '<rect x="12" y="44" width="56" height="3" fill="#2a170f"/>' +
    '<rect x="30" y="40" width="20" height="12" rx="2" fill="#f2c14e" stroke="#7a5512" stroke-width="1"/>' +
    '<text x="40" y="50" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="9" fill="#2a170f">LH</text>',
    /* Born and Raised: a red-brick Queensbridge building with QB over the door */
    '<path d="M10 76V34l14-6v48z" fill="#7d2f20"/><path d="M70 76V34l-14-6v48z" fill="#8c3626"/>' +
    '<rect x="24" y="22" width="32" height="54" fill="#a8452f" stroke="#5a1f14" stroke-width="1"/><rect x="22" y="19" width="36" height="4" fill="#d9cdb8"/>' +
    '<rect x="28" y="28" width="6" height="7" fill="#ffd98a"/><rect x="37" y="28" width="6" height="7" fill="#3a2420"/><rect x="46" y="28" width="6" height="7" fill="#ffd98a"/>' +
    '<rect x="28" y="40" width="6" height="7" fill="#3a2420"/><rect x="37" y="40" width="6" height="7" fill="#ffd98a"/><rect x="46" y="40" width="6" height="7" fill="#3a2420"/>' +
    '<rect x="34" y="62" width="12" height="14" fill="#2a1410"/>' +
    '<rect x="30" y="52" width="20" height="9" rx="1" fill="#f2c14e"/><text x="40" y="59.5" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="8" fill="#2a1410">QB</text>',
    /* Mega Philosopher: an open book with a gold quill */
    '<path d="M40 40q-14-8-30-4v36q16-4 30 4z" fill="#f4efe6" stroke="#5a4a30" stroke-width="1.5"/>' +
    '<path d="M40 40q14-8 30-4v36q-16-4-30 4z" fill="#eae3d4" stroke="#5a4a30" stroke-width="1.5"/>' +
    '<path d="M16 46h18M16 52h18M16 58h16M46 46h18M46 52h18M46 58h14" stroke="#8a7a5a" stroke-width="1.2"/>' +
    '<path d="M58 14q12 6 4 22l-10 14-2-2 8-16q4-10 0-18z" fill="#f2c14e" stroke="#7a5512" stroke-width="1"/>',
    /* The Realness: a gold mic with a crown */
    '<path d="M24 22l4-12 6 7 6-10 6 10 6-7 4 12z" fill="#ffcc33" stroke="#7a5512" stroke-width="1.2"/>' +
    '<rect x="28" y="24" width="24" height="26" rx="12" fill="#e0a52c" stroke="#7a5512" stroke-width="1.5"/>' +
    '<path d="M32 30h16M32 36h16M32 42h16" stroke="#7a5512" stroke-width="1"/>' +
    '<path d="M24 42q0 14 16 14t16-14" fill="none" stroke="#e0a52c" stroke-width="3"/>' +
    '<rect x="38" y="56" width="4" height="12" fill="#e0a52c"/><rect x="28" y="68" width="24" height="5" rx="2" fill="#e0a52c"/>' +
    '<circle cx="40" cy="14" r="2" fill="#e0533b"/>'
  ],
  clubTitle: "The Legal Hustle Office", clubTab: "OFFICE",
  tags: ["LEGAL HUSTLE", "THE REALNESS", "MEGA"],
  c1: "#f2c14e", c2: "#e0533b", c3: "#8fb8d8", bg: "#2a0f0b",
  /* Queensboro Bridge cantilever towers and trusses, Queensbridge Y-buildings underneath */
  headerSvg: (function () {
    let s = '';
    [120, 280].forEach(x => { s += '<rect x="' + (x - 5) + '" y="4" width="10" height="60"/><path d="M' + (x - 8) + ' 6h16l-3-6h-10z"/>'; });
    [[-20, 120], [120, 280], [280, 420]].forEach(([a, b]) => {
      s += '<path d="M' + a + ' 8Q' + ((a + b) / 2) + ' 60 ' + b + ' 8" fill="none" stroke="#f7f3ea" stroke-width="3"/>';
      for (let i = 1; i < 8; i++) { const x = a + (b - a) * i / 8, t = i / 8, y = (1 - t) * (1 - t) * 8 + 2 * (1 - t) * t * 60 + t * t * 8; s += '<path d="M' + x + ' ' + y + 'V36" stroke="#f7f3ea" stroke-width="1.5"/>'; }
    });
    s += '<rect x="0" y="34" width="400" height="5"/>';
    [[20, 40], [180, 44], [330, 40]].forEach(([x, y]) => { s += '<path d="M' + x + ' 64V' + (y + 4) + 'l14-4v24h22v-24l14 4v24z"/>'; });
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@cormega", url: "https://www.instagram.com/cormega/" },
    { name: "X", handle: "@iamcormega", url: "https://x.com/iamcormega" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the F to 21 St-Queensbridge. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "houses", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "court" },
    { scene: "bridge", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "traffic" },
    { scene: "park", t: "CLIMB THE RANKS", x: "Everybody starts as a Fronter. Clear a row to rank up: Legal Hustler, Born and Raised, Mega Philosopher. Beat the 99 Challenge to become The Realness.", sfx: "bell" },
    { scene: "corner", t: "WELCOME TO QUEENSBRIDGE", x: "21st St and 41st Av. This is Cormega's game.", sfx: "spray" }
  ],
  /* PITCH DEMO: 5 playable songs with clean captions, 4 locked */
  episodes: [
    { title: "Intermission", id: "kvkQQqq4lZg", cuts: [46.6], qs: [[
      ["He gives a brief what from the street?", "Intermission", "Interview", "Introduction"],
      ["When he speaks, people do what?", "Listen", "Laugh", "Leave"],
      ["Real recognize real, he doesn't need what?", "Recognition", "Permission", "Protection"],
      ["When he raps, he asks you to pay what?", "Attention", "Your dues", "The rent"],
      ["He's a king with his what?", "Wisdom", "Crown", "Money"],
      ["Elite what is the thing people measure?", "Lyricism", "Fashion", "Money"]
    ]] },
    { title: "Built for This", id: "cNd4a34lDk4", start: 24, cuts: [52.4], qs: [[
      ["Time to separate the rookies from the what?", "Vets", "Kids", "Fans"],
      ["He's young and what?", "Ruthless", "Restless", "Rich"],
      ["His status is what?", "Unmatched", "Unknown", "Unpaid"],
      ["He says he's built for what?", "This", "Speed", "Fame"],
      ["Count your friends when you're what?", "On", "Broke", "Down"],
      ["He's hungry like his what is showing?", "Ribs", "Teeth", "Bones"]
    ]] },
    { title: "Journey", id: "RDmQqJpr3JY", start: 23, cuts: [58.9], qs: [[
      ["Before he went the what route?", "Rap", "College", "Army"],
      ["He came off the bench like which player?", "Stackhouse", "Jordan", "Iverson"],
      ["His eyes ain't what since he started rhyming?", "Closing", "Watering", "Glowing"],
      ["They stay coming back like which team?", "The Yanks", "The Mets", "The Knicks"],
      ["No one controls his what?", "Fate", "Mic", "Money"]
    ]] },
    { title: "Glorious", id: "omlO60Y1Wbs", cuts: [45.7, 86.1], qs: [[
      ["Sipping wine as they do what?", "Reminisce", "Celebrate", "Dance"],
      ["If his life was a movie, he's the what of music?", "Stanley Kubrick", "Steven Spielberg", "Spike Lee"],
      ["No warning, no what?", "Promo", "Problem", "Payment"],
      ["The sky's not his limit, it's just a what?", "View", "Dream", "Ceiling"],
      ["How does he live forever?", "Through you", "Through money", "Through movies"],
      ["Who is the 'you' he lives through?", "The listeners", "The haters", "The critics"]
    ], [
      ["He says he's still a what?", "Saint", "Sinner", "Student"],
      ["Bruce Lee and who else does he name?", "Chuck Norris", "Jackie Chan", "Jet Li"],
      ["We live a life, a what one?", "Glorious", "Famous", "Quiet"],
      ["Dreams of better living came into what?", "Fruition", "Focus", "Fashion"],
      ["Glory awaits the what?", "Ambitious", "Patient", "Faithful"],
      ["You either apply pressure or what?", "Feel it", "Fold", "Run"]
    ]] },
    { title: "The Saga", id: "SBaeg8Tmnyk", cuts: [44.9, 103], qs: [[
      ["He's out there in the what?", "Street", "Park", "Studio"],
      ["So many struggles, only to do what?", "Persevere", "Give up", "Disappear"],
      ["When the money doubled, they purchased what?", "Gear", "Cars", "Homes"],
      ["Was it worth the trouble? It was his first what?", "Career", "Car", "Love"],
      ["He has no regrets or what?", "Fear", "Friends", "Doubts"]
    ], [
      ["If you're real, hold your what?", "Own", "Tongue", "Head"],
      ["His man said it ain't a what?", "Game", "Joke", "Job"],
      ["So now he plays how much?", "No more", "Every day", "For keeps"],
      ["He's hoping what could cleanse him?", "Holy water", "The rain", "Time"],
      ["The hook keeps saying what?", "In the street, you know", "On the block, you know", "In the Bridge, you know"]
    ]] },
    { title: "Get Out My Way", locked: true, cuts: [], qs: [] },
    { title: "Rise", locked: true, cuts: [], qs: [] },
    { title: "Love in, Love Out", locked: true, cuts: [], qs: [] },
    { title: "American Beauty", locked: true, cuts: [], qs: [] }
  ]
};
