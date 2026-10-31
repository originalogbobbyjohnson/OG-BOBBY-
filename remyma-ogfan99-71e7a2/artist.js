/* Remy Ma: Castle Hill, the Bronx. Reminisce Smith, raised in the Castle Hill Houses; Conceited, All the Way Up, Rem the Pen, the Chrome 23 battle league. */
window.CFG = {
  name: "Remy Ma", nameUpper: "REMY MA", short: "REMY",
  hood: "Castle Hill", hoodUpper: "CASTLE HILL", boro: "the Bronx",
  saveKey: "ogfan99remyma1",
  /* everybody starts as a "Whuteva" (her shrug-off single); climb to The Queen */
  startRank: "Whuteva",
  ranks: ["Castle Hill", "Reminisce", "Conceited", "All The Way Up", "Rem The Pen"],
  topRank: "Queen of the Bronx",
  point: "Bar", points: "Bars",
  rankRewards: {
    "Castle Hill": { bongs: 5, line: "Castle Hill. The Houses know your name now." },
    "Reminisce": { bongs: 10, line: "Reminisce. You go back to the beginning." },
    "Conceited": { bongs: 15, line: "Conceited. And you got a reason." },
    "All The Way Up": { bongs: 20, line: "All the way up. Nobody can bring you down." },
    "Rem The Pen": { bongs: 25, line: "You run all of Castle Hill." }
  },
  trophyArt: [
    /* Whuteva: a crumpled page of bars that didn't make it */
    '<path d="M18 30l14-8 20 6 12-4 2 22-8 14 6 14-22 4-18-6-6-18 6-12z" fill="#efe9dc" stroke="#9a9180" stroke-width="1.5"/>' +
    '<path d="M24 38l30-4M22 48l34 2M26 58l26-2M28 66l22 2" stroke="#9fb6d8" stroke-width="1.2"/><path d="M32 30l6 12-4 10 8 12" stroke="#bdb4a2" stroke-width="1" fill="none"/>',
    /* Castle Hill: the green street sign on its pole */
    '<rect x="38" y="30" width="4" height="50" fill="#5b6168"/><rect x="8" y="24" width="64" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="40" y="36" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="8" textLength="58" lengthAdjust="spacingAndGlyphs" fill="#fff">CASTLE HILL AV</text><rect x="16" y="44" width="48" height="12" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/>' +
    '<text x="40" y="53" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="7" fill="#fff">RANDALL AV</text>',
    /* Reminisce: an old cassette with her first name on the label */
    '<rect x="6" y="30" width="68" height="44" rx="4" fill="#2a2236" stroke="#c9a4ff" stroke-width="2"/><rect x="12" y="36" width="56" height="16" rx="2" fill="#f4efe6"/>' +
    '<text x="40" y="48" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="9" fill="#5a2a8a">REMINISCE</text>' +
    '<circle cx="27" cy="62" r="6" fill="#111" stroke="#c9a4ff" stroke-width="1.5"/><circle cx="53" cy="62" r="6" fill="#111" stroke="#c9a4ff" stroke-width="1.5"/><rect x="33" y="60" width="14" height="4" fill="#5a4a6a"/>',
    /* Conceited: the vanity mirror ringed with bulbs */
    '<rect x="14" y="14" width="52" height="62" rx="6" fill="#ff6fae" stroke="#8a2a5a" stroke-width="2"/><rect x="22" y="22" width="36" height="46" rx="3" fill="#cfe6ff"/>' +
    '<path d="M28 30l10-6M26 40l18-14" stroke="#fff" stroke-width="2.5" opacity=".8"/>' +
    [20, 32, 44, 56, 68].map(y => '<circle cx="14" cy="' + y + '" r="2.6" fill="#fff6c2"/><circle cx="66" cy="' + y + '" r="2.6" fill="#fff6c2"/>').join(""),
    /* All The Way Up: a gold arrow climbing a staircase */
    '<path d="M8 78h16v-14h16v-14h16v-14h16v42z" fill="#2a2236" stroke="#c9a4ff" stroke-width="1.5"/>' +
    '<path d="M14 60l40-40" stroke="#f2c14e" stroke-width="6" stroke-linecap="round"/><path d="M40 16h18v18z" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5"/>',
    /* Rem The Pen: the gold fountain pen over a page */
    '<rect x="12" y="22" width="44" height="56" rx="2" fill="#f4efe6" stroke="#9a9180" stroke-width="1.5"/><path d="M18 34h32M18 42h32M18 50h28M18 58h30" stroke="#9fb6d8" stroke-width="1.2"/>' +
    '<g transform="rotate(35 50 44)"><rect x="45" y="6" width="10" height="44" rx="3" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5"/><rect x="45" y="20" width="10" height="4" fill="#5a2a8a"/>' +
    '<path d="M45 50h10l-5 16z" fill="#dfe4ec" stroke="#555" stroke-width="1"/><path d="M50 54v8" stroke="#555" stroke-width="1"/></g>',
    /* Queen of the Bronx: the purple-and-gold crown */
    '<path d="M12 70l-4-38 16 16 16-28 16 28 16-16-4 38z" fill="#f2c14e" stroke="#7a5512" stroke-width="2"/><rect x="12" y="66" width="56" height="10" rx="2" fill="#d9a72a" stroke="#7a5512" stroke-width="1.5"/>' +
    '<circle cx="40" cy="52" r="5" fill="#8a4cff" stroke="#3a1a6a" stroke-width="1"/><circle cx="24" cy="58" r="3.5" fill="#ff6fae"/><circle cx="56" cy="58" r="3.5" fill="#ff6fae"/>' +
    '<circle cx="8" cy="32" r="3" fill="#f2c14e"/><circle cx="40" cy="20" r="3" fill="#f2c14e"/><circle cx="72" cy="32" r="3" fill="#f2c14e"/>'
  ],
  clubTitle: "The Queen's Vanity", clubTab: "VANITY",
  tags: ["ALL THE WAY UP", "R TO THE EZZY", "REM THE PEN"],
  c1: "#c9a4ff", c2: "#f2c14e", c3: "#ff6fae", bg: "#140a22",
  /* Castle Hill: the 6 el across the front, the Houses towers behind it */
  headerSvg: (function () {
    let s = '<rect x="0" y="40" width="400" height="5"/>';
    for (let x = 6; x < 400; x += 40) s += '<rect x="' + x + '" y="40" width="4" height="24"/>';
    [[20, 14, 34], [70, 4, 30], [120, 18, 40], [250, 2, 30], [300, 12, 36], [350, 20, 44]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (40 - y) + '"/>'; });
    s += '<rect x="180" y="26" width="50" height="10" rx="2"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@remyma", url: "https://www.instagram.com/remyma/" },
    { name: "YouTube", handle: "@RemyMaVEVO", url: "https://www.youtube.com/@RemyMaVEVO" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 6 to Castle Hill Av, up on the el over Westchester Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "houses", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "point", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "chrome", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO CASTLE HILL", x: "Castle Hill Av and Randall Av, by the Houses. This is Remy Ma's game.", sfx: "spray" }
  ],
  episodes: [
  /* PITCH DEMO: 1 clean playable song in the caption data. Timing from the captions on RemyMaVEVO's upload.
     Stop 1 after the first verse + hook, stop 2 after the second verse + hook, stop 3 after the last verse + hook. */
  { title: "Conceited (There's Something About Remy)", id: "C2WjyuC3vPs", cuts: [76.9, 133.7, 183.3], qs: [
    [
      ["\"I'm conceited, I got a...\" what?", "Reason", "Problem", "Secret"],
      ["It's R to the what?", "Ezzy", "Ozzy", "Eddy"],
      ["\"Miraculous...\" what comes next?", "Phenomenal", "Magical", "Fantastic"],
      ["She's sittin' on top of the world like who?", "Brandy", "Monica", "Aaliyah"],
      ["She looks too good for this what?", "Necklace", "Bracelet", "Jacket"],
      ["\"Another me, there never can't be. See, I'm so...\" what?", "Outstandin'", "Understandin'", "Demandin'"],
      ["Where do you look at yourself?", "In the mirror", "In the window", "In the camera"]
    ],
    [
      ["Nobody's peekin' in her window. Why?", "She lives in a penthouse", "She moved away", "The blinds are shut"],
      ["What kind of tee does she wear?", "Tight white tee", "Big black tee", "Old band tee"],
      ["That's probably why she's always gettin' what?", "Hated on", "Called on", "Waited on"],
      ["Number one: she doesn't what?", "Need you", "See you", "Know you"],
      ["Number two: you can never play her because she's such a what?", "Lady", "Baby", "Star"],
      ["Number three is all about who?", "Her", "You", "Her crew"],
      ["If you'd like to hear it, she wrote a what about it?", "A song", "A book", "A letter"]
    ],
    [
      ["She can't stop her body from what?", "Movin'", "Shakin'", "Freezin'"],
      ["She's boppin' and poppin' to the what?", "Music", "Rhythm", "Crowd"],
      ["\"Drop it like it's...\" what?", "Hot", "Cold", "Done"],
      ["She's out of what with it?", "Control", "Breath", "Time"],
      ["\"Dip it low, pick it up...\" what?", "Slow", "Fast", "High"],
      ["\"See I look good and I'm...\" what?", "Knowin' it", "Lovin' it", "Ownin' it"]
    ]
  ] },
  { title: "Put 'Em On", locked: true, cuts: [], qs: [] },
  { title: "Why I Get Married?", locked: true, cuts: [], qs: [] },
  { title: "Whuteva", locked: true, cuts: [], qs: [] },
  { title: "Because I Believe It", locked: true, cuts: [], qs: [] }
  ]
};
