/* Fat Joe: Morrisania, the Bronx (raised in the Forest Houses, Trinity Av side). Joseph Cartagena, Puerto Rican and Cuban. The Don, Terror Squad. */
window.CFG = {
  name: "Fat Joe", nameUpper: "FAT JOE", short: "JOE",
  hood: "Morrisania", hoodUpper: "MORRISANIA", boro: "the Bronx",
  saveKey: "ogfan99fatjoe1",
  /* everybody starts as a hater ("haters get tight..."), climbs the catalog up to All The Way Up */
  startRank: "Hater",
  ranks: ["Represent", "Flow Joe", "Terror Squad", "Lean Back", "Don Cartagena"],
  topRank: "All The Way Up",
  point: "Ring", points: "Rings",
  rankRewards: {
    "Represent": { bongs: 5, line: "Represent. You're putting the Bronx on now." },
    "Flow Joe": { bongs: 10, line: "Flow Joe. You came out the gate smooth." },
    "Terror Squad": { bongs: 15, line: "Terror Squad. You're down with the crew." },
    "Lean Back": { bongs: 20, line: "Lean Back. Pull up your pants and do the rockaway." },
    "Don Cartagena": { bongs: 25, line: "You run all of Morrisania." }
  },
  trophyArt: [
    /* Hater: a small grey rain cloud with a frown */
    '<path d="M18 52q-10 0 -10 -10q0 -10 12 -10q2 -14 18 -14q14 0 18 12q14 0 14 12q0 10 -12 10z" fill="#8a9099" stroke="#4a4f57" stroke-width="2"/>' +
    '<circle cx="32" cy="40" r="2" fill="#2a2d33"/><circle cx="48" cy="40" r="2" fill="#2a2d33"/><path d="M33 48q7 -5 14 0" stroke="#2a2d33" stroke-width="2" fill="none"/>' +
    '<path d="M24 58l-3 8M40 58l-3 8M56 58l-3 8" stroke="#6fa8dc" stroke-width="2.5" stroke-linecap="round"/>',
    /* Represent: a cassette tape with a gold label reading BX */
    '<rect x="8" y="30" width="64" height="42" rx="4" fill="#2a2a2e" stroke="#111" stroke-width="2"/><rect x="14" y="35" width="52" height="18" rx="2" fill="#ffd34d"/>' +
    '<text x="40" y="49" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="#111">BX</text>' +
    '<circle cx="28" cy="62" r="5" fill="#ddd"/><circle cx="52" cy="62" r="5" fill="#ddd"/><rect x="30" y="60" width="20" height="4" fill="#5a4a3a"/>',
    /* Flow Joe: a black record with a red label */
    '<circle cx="40" cy="46" r="32" fill="#111"/><circle cx="40" cy="46" r="24" fill="none" stroke="#2c2c2c"/><circle cx="40" cy="46" r="15" fill="#e63946"/>' +
    '<text x="40" y="44" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" fill="#fff">FLOW JOE</text><circle cx="40" cy="51" r="2" fill="#f7f3ea"/>',
    /* Terror Squad: a crest shield, red and blue with a gold TS */
    '<path d="M40 14l26 8v22q0 22 -26 34q-26 -12 -26 -34v-22z" fill="#1d3f8f" stroke="#ffd34d" stroke-width="3"/>' +
    '<path d="M40 18l22 7v19q0 18 -22 29z" fill="#e63946"/>' +
    '<text x="40" y="54" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="20" fill="#ffd34d" stroke="#111" stroke-width="1" paint-order="stroke">TS</text>',
    /* Lean Back: a silver boombox */
    '<rect x="6" y="34" width="68" height="40" rx="5" fill="#b9c0c8" stroke="#4a4f57" stroke-width="2"/><path d="M20 34q0 -12 20 -12t20 12" stroke="#4a4f57" stroke-width="3" fill="none"/>' +
    '<circle cx="22" cy="56" r="11" fill="#2a2d33"/><circle cx="22" cy="56" r="5" fill="#ffd34d"/><circle cx="58" cy="56" r="11" fill="#2a2d33"/><circle cx="58" cy="56" r="5" fill="#ffd34d"/>' +
    '<rect x="34" y="40" width="12" height="8" fill="#e63946"/>',
    /* Don Cartagena: a black fedora with a gold band */
    '<ellipse cx="40" cy="66" rx="34" ry="8" fill="#16161a" stroke="#000" stroke-width="1.5"/><path d="M18 64q2 -36 22 -36t22 36z" fill="#1f1f24" stroke="#000" stroke-width="1.5"/>' +
    '<path d="M32 30q8 6 16 0" stroke="#000" stroke-width="2" fill="none"/><rect x="19" y="54" width="42" height="7" fill="#ffd34d"/>',
    /* All The Way Up: a gold crown riding on a gold arrow pointing up */
    '<path d="M36 78v-38h-10l14 -16 14 16h-10v38z" fill="#ffd34d" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M22 22l4 -16 7 8 7 -12 7 12 7 -8 4 16z" fill="#ffd34d" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<circle cx="40" cy="16" r="2.5" fill="#e63946"/><circle cx="30" cy="18" r="2" fill="#2f6fdb"/><circle cx="50" cy="18" r="2" fill="#2f6fdb"/>'
  ],
  clubTitle: "The Squad", clubTab: "SQUAD",
  tags: ["TERROR SQUAD", "LEAN BACK", "THE DON"],
  c1: "#ffd34d", c2: "#e63946", c3: "#2f6fdb", bg: "#120c06",
  /* Morrisania: tall project towers, the el running across, rowhouse roofs, a water tower */
  headerSvg: (function () {
    let s = '<rect x="0" y="50" width="400" height="5"/>';
    for (let x = 0; x < 400; x += 36) s += '<rect x="' + (x + 14) + '" y="54" width="5" height="10"/>';
    s += '<rect x="8" y="6" width="38" height="44"/><rect x="54" y="14" width="38" height="36"/><rect x="100" y="4" width="38" height="46"/>';
    for (let x = 150; x < 250; x += 20) s += '<rect x="' + x + '" y="30" width="18" height="20"/>';
    s += '<rect x="262" y="22" width="16" height="12"/><path d="M260 22l10 -8 10 8z"/><rect x="264" y="34" width="2" height="16"/><rect x="274" y="34" width="2" height="16"/>';
    s += '<rect x="292" y="12" width="44" height="38"/><rect x="346" y="2" width="46" height="48"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@fatjoe", url: "https://www.instagram.com/fatjoe/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 2 or the 5 to Prospect Av, up on the el over Westchester Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "rooftop", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "kicks", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "flags", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO MORRISANIA", x: "Trinity Av and E 163 St by the Forest Houses. This is Fat Joe's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Lean Back", id: "ajmI1P3r1w4", cuts: [80.6, 106.1, 246.1], qs: [
      [
        ["\"Throw your hands in the...\" what?", "Air", "Sky", "Back"],
        ["Which producer does he shout out at the start?", "Scott Storch", "Swizz Beatz", "Just Blaze"],
        ["\"Yeah, Khaled, I...\" what?", "See you", "Hear you", "Got you"],
        ["\"We from the Bronx, New York...\" what?", "Things happen", "Hands up", "Stand up"],
        ["\"It's a cold world and this is...\" what?", "Ice", "Life", "Gold"],
        ["The Phantom is in front of the building on which avenue?", "Trinity Ave", "Prospect Ave", "Tinton Ave"],
        ["How many years has he been legit?", "Ten", "Five", "Twenty"]
      ],
      [
        ["He came out the gate on some what?", "Flo-Jo", "Rocky", "Jordan"],
        ["\"Fat brother with the...\" what?", "Logo", "Chain", "Hat"],
        ["What don't they do?", "Dance", "Sing", "Sleep"],
        ["\"We just pull up our...\" what?", "Pants", "Sleeves", "Socks"],
        ["\"And do the...\" what?", "Rockaway", "Running man", "Wop"],
        ["\"Now...\" what?", "Lean back", "Step back", "Lay back"],
        ["How many times does he say \"lean back\" in the line after?", "Three", "Two", "Five"]
      ],
      [
        ["Which piece of clothing rhymes with \"better now\"?", "Sweater", "Jacket", "Hoodie"],
        ["That G4 can fly through any what?", "Weather", "Storm", "Night"],
        ["Who gets tight when you're worth some millions?", "Haters", "Fans", "Neighbors"],
        ["What does he sport to hurt their feelings?", "Chinchilla", "Mink", "Leather"],
        ["He's front row in which city?", "Vegas", "Miami", "Atlanta"],
        ["Which court does he not wanna speak about?", "The Rucker", "The Garden", "Dyckman"],
        ["His team didn't have to play to win the what?", "Championship", "Trophy", "Series"]
      ]
    ] },
    { title: "Flow Joe", locked: true, cuts: [], qs: [] },
    { title: "Success", locked: true, cuts: [], qs: [] },
    { title: "Take A Look At My Life", locked: true, cuts: [], qs: [] },
    { title: "Envy", locked: true, cuts: [], qs: [] }
  ]
};
