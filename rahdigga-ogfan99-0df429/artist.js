/* Rah Digga: Rashia Fisher from Newark, New Jersey. Outsidaz, then the first lady of Busta Rhymes' Flipmode Squad. Dirty Harriet (2000), Classic (2010, prod. Nottz). */
window.CFG = {
  name: "Rah Digga", nameUpper: "RAH DIGGA", short: "DIGGA",
  hood: "Newark", hoodUpper: "NEWARK", boro: "New Jersey",
  saveKey: "ogfan99rahdigga1",
  /* "this ain't no lil kid rap": everybody starts as a lil kid and climbs to Classic */
  startRank: "Lil Kid",
  ranks: ["Outsida", "Flipmode", "Dirty Harriet", "Rapper's Rapper", "Hip Hop Royalty"],
  topRank: "Classic",
  point: "Bar", points: "Bars",
  rankRewards: {
    "Outsida": { bongs: 5, line: "Outsida. You made it in from the outside." },
    "Flipmode": { bongs: 10, line: "Flipmode. Now you're in the Squad." },
    "Dirty Harriet": { bongs: 15, line: "Dirty Harriet. Leading the way." },
    "Rapper's Rapper": { bongs: 20, line: "Rapper's Rapper. Rhymes do matter." },
    "Hip Hop Royalty": { bongs: 25, line: "You run all of Newark." }
  },
  trophyArt: [
    /* Lil Kid: a stack of ABC blocks */
    '<rect x="12" y="52" width="26" height="26" fill="#ff8a5b" stroke="#8a3a1a" stroke-width="1.5"/><rect x="42" y="52" width="26" height="26" fill="#b07cff" stroke="#4a2a8a" stroke-width="1.5"/><rect x="27" y="24" width="26" height="26" fill="#ffd34d" stroke="#8a6a10" stroke-width="1.5"/>' +
    '<text x="25" y="72" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="18" fill="#fff">A</text><text x="55" y="72" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="18" fill="#fff">B</text><text x="40" y="44" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="18" fill="#8a3a1a">C</text>',
    /* Outsida: a spray can with a Z tag */
    '<rect x="28" y="26" width="24" height="52" rx="5" fill="#ff8a5b" stroke="#8a3a1a" stroke-width="1.5"/><rect x="33" y="16" width="14" height="10" rx="2" fill="#c9ced6"/><rect x="37" y="10" width="6" height="6" fill="#333"/>' +
    '<path d="M33 40h14l-14 22h14" stroke="#fff" stroke-width="3" fill="none" stroke-linejoin="round"/><circle cx="56" cy="12" r="2" fill="#ffd34d"/><circle cx="62" cy="8" r="1.5" fill="#ffd34d"/><circle cx="60" cy="16" r="1.5" fill="#ffd34d"/>',
    /* Flipmode: a gold chain with an FM medallion */
    '<path d="M16 12q24 46 48 0" stroke="#ffd34d" stroke-width="3" fill="none" stroke-dasharray="4 2"/>' +
    '<circle cx="40" cy="54" r="20" fill="#ffd34d" stroke="#8a6a10" stroke-width="2"/><circle cx="40" cy="54" r="15" fill="none" stroke="#c8a22a" stroke-width="1"/>' +
    '<text x="40" y="61" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="18" fill="#7a3a12">FM</text>',
    /* Dirty Harriet: a lantern under the North Star */
    '<path d="M40 4l2.5 6h6.5l-5 4 2 6.5L40 16.5 34 20.5l2 -6.5 -5 -4h6.5z" fill="#fff3b0"/>' +
    '<path d="M32 30h16M36 30q4 -8 8 0" stroke="#5a4a3a" stroke-width="2" fill="none"/><rect x="28" y="34" width="24" height="36" rx="3" fill="#ffd98a" stroke="#5a4a3a" stroke-width="2"/>' +
    '<path d="M34 34v36M46 34v36" stroke="#5a4a3a" stroke-width="1.5"/><ellipse cx="40" cy="52" rx="5" ry="8" fill="#ff8a5b"/><rect x="26" y="70" width="28" height="6" fill="#5a4a3a"/>',
    /* Rapper's Rapper: a rhyme book and pen */
    '<rect x="14" y="20" width="44" height="56" rx="2" fill="#f1ede3" stroke="#6b5a4a" stroke-width="1.5"/><rect x="14" y="20" width="6" height="56" fill="#b07cff"/>' +
    '<path d="M26 34h26M26 42h26M26 50h22M26 58h26M26 66h18" stroke="#8aa0c8" stroke-width="1.5"/>' +
    '<rect x="56" y="18" width="6" height="44" rx="2" fill="#ffd34d" transform="rotate(18 59 40)"/><path d="M53 60l4 8 1 -9z" fill="#333" transform="rotate(18 59 40)"/>',
    /* Hip Hop Royalty: a crown */
    '<path d="M12 62l-2 -36 16 16 14 -26 14 26 16 -16 -2 36z" fill="#ffd34d" stroke="#8a6a10" stroke-width="2" stroke-linejoin="round"/>' +
    '<rect x="12" y="62" width="56" height="10" fill="#e8b42a" stroke="#8a6a10" stroke-width="2"/><circle cx="26" cy="54" r="3.5" fill="#ff8a5b"/><circle cx="40" cy="50" r="4" fill="#b07cff"/><circle cx="54" cy="54" r="3.5" fill="#ff8a5b"/>',
    /* Classic: the gold record */
    '<circle cx="40" cy="44" r="30" fill="#e2b13c" stroke="#7a5512" stroke-width="1.5"/><circle cx="40" cy="44" r="22" fill="none" stroke="#c3922a" stroke-width="1"/><circle cx="40" cy="44" r="16" fill="none" stroke="#c3922a" stroke-width="1"/>' +
    '<circle cx="40" cy="44" r="11" fill="#ff8a5b"/><circle cx="40" cy="44" r="2" fill="#111"/>' +
    '<text x="40" y="40" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="5" textLength="16" lengthAdjust="spacingAndGlyphs" fill="#fff">CLASSIC</text>'
  ],
  clubTitle: "The Royalty Room", clubTab: "CROWN",
  tags: ["FLIPMODE", "BREAK FOOL", "DIRTY HARRIET"],
  c1: "#ff8a5b", c2: "#ffd34d", c3: "#b07cff", bg: "#140a12",
  /* Newark skyline: Penn Station's long Deco front, Symphony Hall, downtown towers */
  headerSvg: (function () {
    let s = '<rect x="0" y="50" width="400" height="14"/>';
    s += '<rect x="10" y="34" width="130" height="30"/><rect x="58" y="22" width="34" height="12"/>';
    s += '<rect x="160" y="26" width="80" height="38"/><rect x="156" y="22" width="88" height="6"/>';
    s += '<rect x="258" y="8" width="28" height="56"/><rect x="264" y="2" width="16" height="6"/><rect x="294" y="20" width="34" height="44"/><rect x="336" y="12" width="26" height="52"/><rect x="368" y="30" width="32" height="34"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@therealrahdigga", url: "https://www.instagram.com/therealrahdigga/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Ride the PATH or NJ Transit to Newark Penn Station. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "ferry", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "espresso" },
    { scene: "river", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "hall", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "corner", t: "WELCOME TO NEWARK", x: "Halsey St and New St, downtown. This is Rah Digga's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "This Ain't No Lil' Kid Rap", id: "ZbAKKTL1Vj4", cuts: [76.6, 114.9, 182.0], qs: [
      [
        ["Everybody in here is what?", "Grown", "Young", "Tired"],
        ["M for what?", "Mature", "Music", "Money"],
        ["To bump this you might need a colored what?", "Wristband", "Hat", "Jersey"],
        ["You might even learn a new what?", "Word", "Dance", "Song"],
        ["Which police might come for her?", "Hip Hop Police", "Fashion Police", "Grammar Police"],
        ["Tie your what up?", "Shoelace", "Hair", "Boat"],
        ["You're in the presence of hip hop what?", "Royalty", "History", "Legends"]
      ],
      [
        ["You just got off of what?", "Work", "School", "The train"],
        ["Rhymes do matter, but they ain't what?", "Listening", "Buying", "Writing"],
        ["You could spend a lifetime doing what?", "Fishing", "Searching", "Waiting"],
        ["Which movie does she name?", "Final Destination", "Scream", "Halloween"],
        ["She names Michael, Freddy and who?", "Jason", "Chucky", "Pinhead"],
        ["Her next rhyme might be about who?", "You", "Me", "Them"]
      ],
      [
        ["This ain't no what, like the alphabet?", "ABC", "1-2-3", "Do-re-mi"],
        ["She calls herself a rapper's what?", "Rapper", "Teacher", "Favorite"],
        ["Which cartoon pair does she name?", "Pinky and the Brain", "Tom and Jerry", "Rocky and Bullwinkle"],
        ["They ask what the game's been what?", "Missing", "Making", "Hiding"],
        ["She's a real what?", "Lyricist", "Singer", "Producer"],
        ["Every time her name is what?", "Mentioned", "Called", "Printed"],
        ["\"Are you not...\"", "Entertained", "Impressed", "Ready"]
      ]
    ] },
    { title: "Imperial", locked: true, cuts: [], qs: [] },
    { title: "Tight", locked: true, cuts: [], qs: [] },
    { title: "Break Fool", locked: true, cuts: [], qs: [] },
    { title: "Lessons of Today", locked: true, cuts: [], qs: [] }
  ]
};
