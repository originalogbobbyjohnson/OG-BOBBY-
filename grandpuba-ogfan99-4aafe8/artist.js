/* Grand Puba: New Rochelle, Westchester. Grand Puba Maxwell, the Grand P: Masters of Ceremony, then the lead voice of Brand Nubian, then Reel to Reel. You know the flavor. */
window.CFG = {
  name: "Grand Puba", nameUpper: "GRAND PUBA", short: "PUBA",
  hood: "New Rochelle", hoodUpper: "NEW ROCHELLE", boro: "Westchester",
  saveKey: "ogfan99grandpuba1",
  /* everybody starts as a sucker ("suckers sing or hum"); learn the flavor up to the Grand P */
  startRank: "Sucker",
  ranks: ["Reel to Reel", "Flavor", "One for All", "Brand Nubian", "Puba Maxwell"],
  topRank: "The Grand P",
  point: "Big Up", points: "Big Ups",
  rankRewards: {
    "Reel to Reel": { bongs: 5, line: "Reel to Reel. Press record." },
    "Flavor": { bongs: 10, line: "Flavor. Now you know the flavor." },
    "One for All": { bongs: 15, line: "One for All. The whole crew's with you." },
    "Brand Nubian": { bongs: 20, line: "Brand Nubian. Straight out of New Ro." },
    "Puba Maxwell": { bongs: 25, line: "You run all of New Rochelle." }
  },
  trophyArt: [
    /* Sucker: a swirl lollipop */
    '<path d="M40 44v34" stroke="#f4efe2" stroke-width="4" stroke-linecap="round"/><circle cx="40" cy="30" r="20" fill="#f2c14e" stroke="#7a5512" stroke-width="2"/>' +
    '<path d="M40 30m-14 0a14 14 0 1 1 14 14a9 9 0 1 1 -9-9a4 4 0 1 1 4 4" stroke="#d7263d" stroke-width="3" fill="none"/>',
    /* Reel to Reel: a tape deck with two reels */
    '<rect x="8" y="22" width="64" height="54" rx="4" fill="#2a2d33" stroke="#111" stroke-width="2"/><circle cx="26" cy="42" r="12" fill="#c9ced6" stroke="#555" stroke-width="2"/><circle cx="54" cy="42" r="12" fill="#c9ced6" stroke="#555" stroke-width="2"/>' +
    '<circle cx="26" cy="42" r="3" fill="#333"/><circle cx="54" cy="42" r="3" fill="#333"/><path d="M26 54h28" stroke="#5a3a1a" stroke-width="2"/>' +
    '<rect x="16" y="62" width="10" height="6" fill="#d7263d"/><rect x="30" y="62" width="10" height="6" fill="#888"/><rect x="44" y="62" width="10" height="6" fill="#888"/><rect x="58" y="62" width="6" height="6" fill="#2e9e5b"/>',
    /* Flavor: a jar of flava */
    '<rect x="20" y="30" width="40" height="46" rx="6" fill="#f6e7c4" stroke="#7a5512" stroke-width="2"/><rect x="18" y="20" width="44" height="12" rx="3" fill="#d7263d" stroke="#7a1a24" stroke-width="2"/>' +
    '<rect x="24" y="44" width="32" height="16" fill="#2e9e5b"/><text x="40" y="56" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="10" fill="#fff">FLAVA</text>' +
    '<path d="M30 16q-4-6 0-10M40 16q-4-6 0-10M50 16q-4-6 0-10" stroke="#f2c14e" stroke-width="2" fill="none"/>',
    /* One for All: four stars in a ring */
    '<circle cx="40" cy="44" r="28" fill="none" stroke="#f2c14e" stroke-width="4"/>' +
    '<path d="M40 14l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6-4.5-4 6-1z" fill="#d7263d"/><path d="M40 62l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6-4.5-4 6-1z" fill="#2e9e5b"/>' +
    '<path d="M16 38l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6-4.5-4 6-1z" fill="#f2c14e"/><path d="M64 38l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6-4.5-4 6-1z" fill="#ffffff"/>',
    /* Brand Nubian: a red, black and green leather medallion on a cord */
    '<path d="M18 6q22 40 44 0" stroke="#3b2418" stroke-width="3" fill="none"/>' +
    '<circle cx="40" cy="52" r="22" fill="#1a1a1a" stroke="#7a5512" stroke-width="2"/><circle cx="40" cy="52" r="17" fill="#d7263d"/><circle cx="40" cy="52" r="12" fill="#1a1a1a"/><circle cx="40" cy="52" r="7" fill="#2e9e5b"/>',
    /* Puba Maxwell: a gold mic */
    '<rect x="34" y="40" width="12" height="34" rx="3" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5"/><circle cx="40" cy="30" r="12" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5"/><path d="M30 27h20M30 32h20" stroke="#7a5512"/>' +
    '<path d="M60 18l3 6 6 2-6 2-3 6-3-6-6-2 6-2z" fill="#fff6c8"/>',
    /* The Grand P: a crown with a big P */
    '<path d="M12 66l6-40 12 16 10-26 10 26 12-16 6 40z" fill="#f2c14e" stroke="#7a5512" stroke-width="2" stroke-linejoin="round"/><rect x="10" y="64" width="60" height="12" rx="2" fill="#d6a432" stroke="#7a5512" stroke-width="1.5"/>' +
    '<text x="40" y="60" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="20" fill="#7a5512">P</text><circle cx="22" cy="70" r="3" fill="#d7263d"/><circle cx="58" cy="70" r="3" fill="#2e9e5b"/>'
  ],
  clubTitle: "The Tape Deck", clubTab: "DECK",
  tags: ["BRAND NUBIAN", "BIG UP", "GRAND P"],
  c1: "#f2c14e", c2: "#d7263d", c3: "#2e9e5b", bg: "#120d08",
  /* New Rochelle: the Glen Island castle towers, the harbor masts, downtown towers */
  headerSvg: (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    s += '<rect x="20" y="22" width="20" height="34"/><rect x="40" y="34" width="70" height="22"/><rect x="70" y="28" width="22" height="28"/>';
    for (let x = 20; x < 110; x += 8) s += '<rect x="' + x + '" y="' + (x < 40 ? 16 : x >= 70 && x < 92 ? 22 : 28) + '" width="5" height="6"/>';
    for (let x = 140; x < 240; x += 26) s += '<path d="M' + x + ' 56h20l-3 4h-14z"/><rect x="' + (x + 9) + '" y="26" width="2" height="30"/><path d="M' + (x + 11) + ' 28l10 24h-10z"/>';
    [[270, 18, 22], [298, 6, 24], [328, 22, 26], [360, 12, 30]].forEach(([x, y, w]) => s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (56 - y) + '"/>');
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take Metro-North's New Haven Line up to New Rochelle. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "glen", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "hudson", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "paine", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "corner", t: "WELCOME TO NEW ROCHELLE", x: "Main St and North Av, downtown New Ro. This is Grand Puba's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "360 (What Goes Around)", id: "cl2DFBlBmGM", start: 56.2, cuts: [98.2, 149.8, 191.9], qs: [
      [
        ["\"Some try to copy but they just can't...\"", "Sketch it", "Make it", "Fake it"],
        ["\"Some try to follow but they just can't...\"", "Catch it", "Match it", "Stop it"],
        ["\"With the boom boom ___, yeah, all of that\"", "Tap", "Bap", "Clap"],
        ["\"Huh, I'm livin'...\"", "Fat", "Large", "Right"],
        ["As dope as they come, suckers sing or...", "Hum", "Hide", "Run"],
        ["\"First, batter up, well here's the pitch, it's a...\"", "Curve", "Fastball", "Strike"],
        ["\"Here's the ___, hon, the one who gets the job done\"", "411", "911", "360"]
      ],
      [
        ["\"What goes around comes back around...\"", "Again", "Today", "Tonight"],
        ["Who's in the house, according to the break?", "Big Jeff", "Big Pun", "Big Daddy"],
        ["\"Alamo, get the boom and...\"", "Parlay", "Play", "Sway"],
        ["\"I'm far from the average, civilize the...\"", "Savage", "Classroom", "Party"],
        ["When he's low on protein, it's bean soup and...", "Cabbage", "Rice", "Bread"],
        ["\"Knapsack on the back, that's just my...\"", "Flavor", "Style", "Swagger"],
        ["\"If you wanna see some wreck, send cash, not a...\"", "Check", "Card", "Note"]
      ],
      [
        ["\"Grand Puba, more than a public...\"", "Figure", "Speaker", "Servant"],
        ["\"Now Tic-Tac-Toe means I hit three in a...\"", "Row", "Day", "Week"],
        ["\"If I do a show, then you better have my...\"", "Dough", "Mic", "Records"],
        ["\"Call on Grand Puba if you really need a...\"", "Pro", "Hit", "Friend"],
        ["\"Big up to my Brooklyn mob, big up to my ___ mob\"", "Uptown", "Queens", "Bronx"],
        ["\"My best advice for the brothers is to sit back and...\"", "Learn", "Relax", "Listen"],
        ["\"I don't diss nobody to be...\"", "Somebody", "Famous", "Number one"]
      ]
    ] },
    { title: "Check It Out", locked: true, cuts: [], qs: [] },
    { title: "I Like It", locked: true, cuts: [], qs: [] },
    { title: "All for One", locked: true, cuts: [], qs: [] },
    { title: "Slow Down", locked: true, cuts: [], qs: [] }
  ]
};
