/* Mic Geronimo: Flushing, Queens. The Masta I.C., debut album "The Natural" (1995), later "Vendetta" (1997). */
window.CFG = {
  name: "Mic Geronimo", nameUpper: "MIC GERONIMO", short: "MIC G",
  hood: "Flushing", hoodUpper: "FLUSHING", boro: "Queens",
  saveKey: "ogfan99micgeronimo1",
  /* everybody starts as one of the amateurs he plays; climb to the Masta I.C. */
  startRank: "Amateur",
  ranks: ["New & Improved", "Uncontrollable", "Precision", "The Natural", "Masta I.C."],
  topRank: "Mic G",
  point: "Mic", points: "Mics",
  rankRewards: {
    "New & Improved": { bongs: 5, line: "New and improved. They can't elude you now." },
    "Uncontrollable": { bongs: 10, line: "Uncontrollable. Behold." },
    "Precision": { bongs: 15, line: "Precision. Split the vision, cut it clean." },
    "The Natural": { bongs: 20, line: "The Natural. Born with it." },
    "Masta I.C.": { bongs: 25, line: "You run all of Flushing." }
  },
  trophyArt: [
    /* Amateur: a crumpled rhyme page */
    '<path d="M18 30l20 -6 24 8 -4 22 6 20 -26 6 -22 -8 4 -20z" fill="#efe6d2" stroke="#8a8070" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M24 40l30 4M22 50l32 2M24 60l26 2" stroke="#7aa0c8" stroke-width="1.2"/><path d="M30 44l14 14M44 44l-14 14" stroke="#c23a2e" stroke-width="2"/>',
    /* New & Improved: a fresh mic with a NEW sticker */
    '<rect x="36" y="40" width="8" height="38" rx="2" fill="#2b2b33"/><circle cx="40" cy="30" r="16" fill="#c9ced6" stroke="#555" stroke-width="1.5"/>' +
    '<path d="M28 26h24M27 32h26M29 38h22" stroke="#7a7f88"/><circle cx="60" cy="52" r="12" fill="#ff6fb5"/><text x="60" y="56" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="9" fill="#fff">NEW</text>',
    /* Uncontrollable: a gold lightning bolt */
    '<path d="M46 6L18 48h18l-8 32 34 -46H44z" fill="#ffd23f" stroke="#7a5512" stroke-width="2" stroke-linejoin="round"/>',
    /* Precision: a DJ mixer, crossfader cut right to one side */
    '<rect x="8" y="34" width="64" height="42" rx="4" fill="#2b2b33" stroke="#9aa3ad" stroke-width="1.5"/><rect x="18" y="64" width="44" height="4" rx="2" fill="#111"/>' +
    '<rect x="54" y="60" width="8" height="12" rx="1.5" fill="#2ec4b6"/><circle cx="24" cy="46" r="5" fill="#111" stroke="#9aa3ad"/><circle cx="56" cy="46" r="5" fill="#111" stroke="#9aa3ad"/>' +
    '<path d="M24 46l2 -4M56 46l-3 -3" stroke="#ffd23f" stroke-width="1.5"/><rect x="36" y="40" width="8" height="14" fill="#171a20"/><rect x="37" y="46" width="6" height="7" fill="#ff6fb5"/>',
    /* The Natural: a gold record, 1995 */
    '<circle cx="40" cy="44" r="32" fill="#e2b13c" stroke="#7a5512" stroke-width="2"/><circle cx="40" cy="44" r="24" fill="none" stroke="#c9952c"/><circle cx="40" cy="44" r="13" fill="#140a1f"/>' +
    '<text x="40" y="42" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="5.5" fill="#ffd23f">THE</text><text x="40" y="49" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="5.5" fill="#ffd23f">NATURAL</text>',
    /* Masta I.C.: a gold mic on a chrome stand */
    '<rect x="38" y="44" width="4" height="34" fill="#9aa3ad"/><path d="M26 78h28" stroke="#9aa3ad" stroke-width="3"/>' +
    '<rect x="32" y="12" width="16" height="34" rx="8" fill="#ffd23f" stroke="#7a5512" stroke-width="1.5"/><path d="M33 22h14M33 28h14M33 34h14" stroke="#7a5512"/>' +
    '<text x="40" y="8" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" fill="#ffd23f">I.C.</text>',
    /* Mic G: a crown over a pink nameplate */
    '<path d="M14 42l6 -28 10 14 10 -20 10 20 10 -14 6 28z" fill="#ffd23f" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/><circle cx="40" cy="36" r="3" fill="#2ec4b6"/><circle cx="24" cy="38" r="2" fill="#ff6fb5"/><circle cx="56" cy="38" r="2" fill="#ff6fb5"/>' +
    '<rect x="12" y="50" width="56" height="22" rx="4" fill="#ff6fb5" stroke="#7a1f4a" stroke-width="1.5"/><text x="40" y="66" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="13" fill="#140a1f">Mic G</text>'
  ],
  clubTitle: "The Mic Stand", clubTab: "MICS",
  tags: ["MASTA I.C.", "MIC G", "THE NATURAL"],
  c1: "#ffd23f", c2: "#ff6fb5", c3: "#2ec4b6", bg: "#140a1f",
  /* Flushing: Main St towers, the hipped roof of the Meeting House, the 7 at the end of the line */
  headerSvg: (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    [[20, 30, 26], [60, 18, 38], [96, 24, 32], [250, 22, 40], [290, 30, 28], [330, 16, 46], [370, 26, 34]].forEach(b => { s += '<rect x="' + b[0] + '" y="' + (56 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '"/>'; });
    s += '<path d="M140 56L156 38H204L220 56z"/><rect x="176" y="32" width="6" height="8"/>';
    for (let x = 0; x < 400; x += 8) s += '<circle cx="' + x + '" cy="56" r="5"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 7 to Flushing–Main St, the end of the line. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "meeting", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "garden", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "velodrome", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO FLUSHING", x: "Kissena Blvd and Sanford Av. This is Mic Geronimo's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Masta I.C.", id: "vWVbkiKbaEs", cuts: [61.8, 112.9, 180.2], qs: [
      [
        ["What does he tell you to behold?", "The uncontrollable", "The unbelievable", "The untouchable"],
        ["He keeps the whole world in what?", "Drama", "Order", "Motion"],
        ["What is he gonna reload?", "The vocab", "The tape", "The beat"],
        ["He left the microphone in what?", "Submission", "The booth", "Pieces"],
        ["They found a talent that was what?", "Hidden", "Wasted", "Borrowed"],
        ["It's been too long since your audio produced a real what?", "Rap song", "Hit record", "Love song"],
        ["Who enters now in your game?", "The Masta I.C.", "The Natural", "Royal Flush"]
      ],
      [
        ["\"The new and...\" what?", "Improved", "Approved", "Renewed"],
        ["You can't make a move or elude the what?", "Feud", "Mood", "Crew"],
        ["He journeys through the what?", "Mist", "Dark", "Rain"],
        ["MCs reach for his what?", "Style", "Mic", "Chain"],
        ["\"Split the vision, I cut with...\" what?", "Precision", "Decision", "A mission"],
        ["So many tried before but still couldn't what?", "Get it", "Hit it", "Spit it"],
        ["\"Now it's calm, no need to...\" what?", "Explain", "Complain", "Remain"]
      ],
      [
        ["There's no need to what?", "Lie", "Cry", "Try"],
        ["He's floating on the mic to feel the what?", "Fire", "Flow", "Heat"],
        ["He targets every move, each one what?", "Specific", "Precise", "Exact"],
        ["He overloads the frame but keeps it all the what?", "Same", "Plain", "Tame"],
        ["He kicked it on the wheel and now he keeps it on the what?", "Plane", "Train", "Lane"],
        ["This time the Masta I.C. enters now in your what?", "Brain", "Game", "Lane"]
      ]
    ] },
    { title: "The Natural", locked: true, cuts: [], qs: [] },
    { title: "Wherever You Are", locked: true, cuts: [], qs: [] },
    { title: "Time to Build", locked: true, cuts: [], qs: [] },
    { title: "Nothin' Move But the Money", locked: true, cuts: [], qs: [] }
  ]
};
