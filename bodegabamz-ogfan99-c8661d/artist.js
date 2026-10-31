window.CFG = {
  name: "Bodega Bamz", nameUpper: "BODEGA BAMZ", short: "BAMZ", hood: "East Harlem", hoodUpper: "EAST HARLEM", boro: "Manhattan",
  saveKey: "ogfan99bodegabamz1",
  /* The Rest Is Noise (first tape); Tanboys (his crew); 100 Keep It (his label); Sidewalk Exec (debut album); P.A.P.I. (his alias, Strictly 4 My P.A.P.I.Z.);
     Glorious (single); El Rey (single, "the king") */
  startRank: "Noise", ranks: ["Tanboy", "100 Keep It", "Sidewalk Exec", "P.A.P.I.", "Glorious"], topRank: "El Rey",
  point: "Chopped Cheese", points: "Chopped Cheeses",
  rankRewards: {
    "Tanboy": { bongs: 5, line: "Welcome to the Tanboys." },
    "100 Keep It": { bongs: 10, line: "Keep it 100, always." },
    "Sidewalk Exec": { bongs: 15, line: "Business on the block, suit on the sidewalk." },
    "P.A.P.I.": { bongs: 20, line: "Strictly for my P.A.P.I.Z." },
    "Glorious": { bongs: 25, line: "You run all of East Harlem." }
  },
  trophyArt: [
    /* Noise: an old TV full of static */
    '<rect x="12" y="30" width="56" height="44" rx="6" fill="#6e6e72" stroke="#3a3a3e" stroke-width="2.5"/><rect x="18" y="36" width="44" height="32" rx="3" fill="#c9ced6"/>' +
    '<path d="M20 42h10M34 42h6M44 42h14M22 50h16M42 50h8M20 58h6M30 58h18M52 58h6M24 64h12M40 64h16" stroke="#6e6e72" stroke-width="2"/>' +
    '<path d="M30 30l-8-12M50 30l8-12" stroke="#3a3a3e" stroke-width="2"/>',
    /* Tanboy: a tan work boot */
    '<path d="M22 22h22v34q16 2 22 10v12H14V60q0-8 8-10z" fill="#d6a24a" stroke="#6a4a1a" stroke-width="2.5"/><rect x="14" y="72" width="52" height="6" fill="#3a2a1a"/>' +
    '<path d="M26 30h14M26 38h14M26 46h14" stroke="#6a4a1a" stroke-width="2"/><rect x="20" y="18" width="26" height="6" rx="2" fill="#b8843a"/>',
    /* 100 Keep It: a gold 100 medallion on a chain */
    '<path d="M18 10q22 34 44 0" fill="none" stroke="#f2c14e" stroke-width="3" stroke-dasharray="4 2"/>' +
    '<circle cx="40" cy="52" r="24" fill="#f2c14e" stroke="#8a5a12" stroke-width="2.5"/><circle cx="40" cy="52" r="19" fill="none" stroke="#c99a2e" stroke-width="1.5"/>' +
    '<text x="40" y="60" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#5a3a0a">100</text>',
    /* Sidewalk Exec: a briefcase on the curb */
    '<rect x="10" y="70" width="60" height="8" fill="#9a9a9a"/><rect x="16" y="38" width="48" height="32" rx="4" fill="#3a2418" stroke="#1a0e08" stroke-width="2"/>' +
    '<path d="M32 38v-8h16v8" fill="none" stroke="#1a0e08" stroke-width="3"/><rect x="16" y="50" width="48" height="3" fill="#1a0e08"/><rect x="36" y="48" width="8" height="7" fill="#f2c14e"/>',
    /* P.A.P.I.: a gold rope chain with a Puerto Rican flag pendant */
    '<path d="M14 10q26 50 52 0" fill="none" stroke="#f2c14e" stroke-width="4" stroke-dasharray="3 2"/>' +
    '<rect x="22" y="44" width="36" height="24" fill="#fff" stroke="#f2c14e" stroke-width="3"/>' +
    '<rect x="22" y="44" width="36" height="5" fill="#ed0000"/><rect x="22" y="54" width="36" height="5" fill="#ed0000"/><rect x="22" y="63" width="36" height="5" fill="#ed0000"/>' +
    '<path d="M22 44l16 12-16 12z" fill="#0050f0"/><circle cx="27" cy="56" r="2.2" fill="#fff"/>',
    /* Glorious: a golden five-point star with rays */
    '<g stroke="#f2c14e" stroke-width="3">' + [0, 30, 60, 90, 120, 150].map(a => '<path d="M40 26v54" transform="rotate(' + a + ' 40 53)" opacity=".5"/>').join("") + '</g>' +
    '<path d="M40 22l9 20 22 2-17 14 5 22-19-12-19 12 5-22-17-14 22-2z" fill="#f2c14e" stroke="#8a5a12" stroke-width="2"/>',
    /* El Rey: a crown in red, white and blue */
    '<path d="M12 70l-2-40 16 16 14-26 14 26 16-16-2 40z" fill="#f2c14e" stroke="#8a5a12" stroke-width="2"/><rect x="12" y="64" width="56" height="10" fill="#e0a82e" stroke="#8a5a12" stroke-width="2"/>' +
    '<circle cx="40" cy="52" r="5" fill="#ed2939"/><circle cx="24" cy="56" r="3.5" fill="#3a6bff"/><circle cx="56" cy="56" r="3.5" fill="#3a6bff"/><circle cx="40" cy="20" r="3" fill="#f7f3ea"/><circle cx="40" cy="68" r="2.5" fill="#7cf29a"/>'
  ],
  clubTitle: "The Bodega", clubTab: "BODEGA",
  tags: ["TANBOYS", "100 KEEP IT", "PAPI"],
  c1: "#7cf29a", c2: "#ed2939", c3: "#3a6bff", bg: "#0d1424",
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    /* tenements with rooftop water towers */
    [[0, 24, 44], [48, 32, 36], [88, 20, 40], [250, 26, 42], [296, 34, 34], [334, 22, 66]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/>'; });
    [[100, 20], [262, 26], [350, 22]].forEach(([x, y]) => { s += '<rect x="' + x + '" y="' + (y - 12) + '" width="12" height="10"/><path d="M' + (x - 1) + ' ' + (y - 12) + 'l7-6 7 6z"/>'; });
    /* the casita with a flag on a pole */
    s += '<rect x="160" y="40" width="60" height="16"/><path d="M154 41l36-16 36 16z"/><rect x="224" y="12" width="2" height="44"/><rect x="226" y="12" width="20" height="13"/>';
    return s;
  })() + '</g>',
  socials: [
    { name: "Instagram", handle: "@bodegabamz", url: "https://www.instagram.com/bodegabamz/" },
    { name: "X", handle: "@BodegaBAMZ", url: "https://x.com/BodegaBAMZ" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 6 to 110 St on Lexington Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "spirit", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "pool", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "casita", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "corner", t: "WELCOME TO EAST HARLEM", x: "Lexington Av and E 110 St, Tito Puente Way. This is Bodega Bamz's game.", sfx: "spray" }
  ],
  episodes: [
  /* Timing comes from the auto captions on the WSHH upload. Questions use the hook and the clean lines only; the drug and gun lines are skipped.
     Pitch demo: 1 of 5 songs playable. Rejected: Bring Em Out (one Bamz verse, profane hook, guest verses), Hola (No Panty posse cut, mostly guest verses),
     Thrilla and My Name Is (violent lines), the rest have no captions. */
  { title: "Money Changed Me", id: "QiA7eAu5EM8", cuts: [113.8, 161.5, 212.0], qs: [
    [
      ["A Ferrari and a what, switching through lanes?", "Lambo", "Bentley", "Porsche"],
      ["The cars are switching through what?", "Lanes", "Gears", "Tunnels"],
      ["Top down, screaming out money just what?", "Changed", "Came in", "Ran out"],
      ["With faith, you can move a what?", "Mountain", "Building", "Crowd"],
      ["Which late-night host does he name?", "David Letterman", "Jay Leno", "Conan"],
      ["He's grinding out when?", "Night and day", "Every weekend", "All summer"],
      ["A little bit of Puff, a tad bit of who?", "Pun", "Big L", "Nas"]
    ],
    [
      ["What's switching through lanes in the hook?", "Your Lambo", "A taxi", "The bus"],
      ["What's down while they're screaming?", "The top", "The windows", "The volume"],
      ["What do they scream out?", "Money just changed", "Keep it 100", "Tanboys"],
      ["Which other car rides with the Lambo?", "Ferrari", "Bentley", "Rolls"],
      ["He'll make you what, again and again?", "Come again", "Look again", "Try again"],
      ["Trusting him will make you what?", "Famous", "Rich", "Wise"]
    ],
    [
      ["Pop said walk, then what?", "Run", "Jump", "Ride"],
      ["Walk, then run, then what?", "Grow", "Fly", "Stop"],
      ["Don't front, don't talk, just what?", "Show", "Go", "Wait"],
      ["A blind man sees through his what?", "Ears and nose", "Hands", "Heart"],
      ["The game is for what?", "Keeps", "Kids", "Fun"],
      ["Top down, screaming out what?", "Money just changed", "Time just stopped", "Game just started"]
    ]
  ] },
  { title: "P.A.P.I.", locked: true, cuts: [], qs: [] },
  { title: "El-Rey", locked: true, cuts: [], qs: [] },
  { title: "Glorious", locked: true, cuts: [], qs: [] },
  { title: "Say Amen", locked: true, cuts: [], qs: [] }
  ]
};
