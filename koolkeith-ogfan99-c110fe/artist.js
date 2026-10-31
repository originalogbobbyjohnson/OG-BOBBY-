/* Kool Keith: the Bronx (Bedford Park / the Concourse). Ultramagnetic MCs, Ego Trippin', and the alter egos: Dr. Octagon, Black Elvis, Poppa Large. */
window.CFG = {
  name: "Kool Keith", nameUpper: "KOOL KEITH", short: "KEITH",
  hood: "Bedford Park", hoodUpper: "BEDFORD PARK", boro: "the Bronx",
  saveKey: "ogfan99koolkeith1",
  /* everybody starts as one of the Earth people; ride the magnet up to the Ultramagnetic */
  startRank: "Earthling",
  ranks: ["Ego Tripper", "Poppa Large", "Black Elvis", "Dr. Octagon", "Ultramagnetic"],
  topRank: "Kool Keith",
  point: "Magnet", points: "Magnets",
  rankRewards: {
    "Ego Tripper": { bongs: 5, line: "Ego Tripper. You think you're nice now." },
    "Poppa Large": { bongs: 10, line: "Poppa Large. Living large on the Concourse." },
    "Black Elvis": { bongs: 15, line: "Black Elvis. Gold suit, guitar, the hair." },
    "Dr. Octagon": { bongs: 20, line: "Dr. Octagon. Back from outer space." },
    "Ultramagnetic": { bongs: 25, line: "You run all of Bedford Park." }
  },
  trophyArt: [
    /* Earthling: a small blue-green globe */
    '<circle cx="40" cy="50" r="26" fill="#2d6fb8" stroke="#123a66" stroke-width="2"/><path d="M24 40q8 -6 14 2q4 8 -4 12q-8 2 -10 -14zM46 56q8 -4 12 4q-2 10 -12 6z" fill="#4fae5a"/>',
    /* Ego Tripper: a mirror with a sparkle */
    '<ellipse cx="40" cy="40" rx="20" ry="28" fill="#c9e8f5" stroke="#f2c14e" stroke-width="4"/><path d="M40 68v12" stroke="#f2c14e" stroke-width="4"/>' +
    '<path d="M30 30l4 -8M28 40l10 -16" stroke="#fff" stroke-width="2.5"/><path d="M54 22l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#fff"/>',
    /* Poppa Large: a big gold wristwatch */
    '<rect x="32" y="8" width="16" height="70" rx="4" fill="#e2b13c" stroke="#7a5512" stroke-width="1.5"/><circle cx="40" cy="44" r="18" fill="#f2c14e" stroke="#7a5512" stroke-width="2"/>' +
    '<circle cx="40" cy="44" r="13" fill="#1a1a1a"/><path d="M40 44v-9M40 44l6 4" stroke="#f2c14e" stroke-width="2"/>',
    /* Black Elvis: a gold guitar */
    '<path d="M38 8h6v36h-6z" fill="#3a2010"/><rect x="36" y="4" width="10" height="8" rx="2" fill="#111"/>' +
    '<path d="M26 44q-10 10 0 22q-6 14 14 14q20 0 14 -14q10 -12 0 -22q-6 -6 -14 0q-8 -6 -14 0z" fill="#f2c14e" stroke="#7a5512" stroke-width="2"/>' +
    '<circle cx="40" cy="58" r="5" fill="#111"/><path d="M40 12v58" stroke="#fff" stroke-width=".8"/>',
    /* Dr. Octagon: a silver flying saucer with a pink glow */
    '<path d="M28 56L16 80h48L52 56z" fill="#3fe0c5" opacity=".4"/><ellipse cx="40" cy="40" rx="14" ry="12" fill="#9fe8ff" stroke="#4a5560"/>' +
    '<ellipse cx="40" cy="48" rx="34" ry="9" fill="#b8c2cc" stroke="#4a5560" stroke-width="2"/><circle cx="20" cy="49" r="2.5" fill="#ff6fb5"/><circle cx="40" cy="52" r="2.5" fill="#ff6fb5"/><circle cx="60" cy="49" r="2.5" fill="#ff6fb5"/>',
    /* Ultramagnetic: a red horseshoe magnet with silver tips and sparks */
    '<path d="M18 74v-34a22 22 0 0 1 44 0v34h-12v-34a10 10 0 0 0 -20 0v34z" fill="#e0263a" stroke="#5a0a14" stroke-width="2"/>' +
    '<rect x="18" y="66" width="12" height="10" fill="#d8dde2"/><rect x="50" y="66" width="12" height="10" fill="#d8dde2"/>' +
    '<path d="M10 20l6 4M70 20l-6 4M40 4v8" stroke="#fff6a8" stroke-width="2.5"/>',
    /* Kool Keith: a gold crown on a spinning pink record */
    '<circle cx="40" cy="58" r="22" fill="#111"/><circle cx="40" cy="58" r="9" fill="#ff6fb5"/><circle cx="40" cy="58" r="1.5" fill="#fff"/>' +
    '<path d="M18 38l6 -26 10 12 6 -18 6 18 10 -12 6 26z" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/><circle cx="40" cy="30" r="3" fill="#9b5cff"/>'
  ],
  clubTitle: "The Mothership", clubTab: "SHIP",
  tags: ["ULTRAMAGNETIC", "EGO TRIPPIN", "DR. OCTAGON"],
  c1: "#ff6fb5", c2: "#9b5cff", c3: "#3fe0c5", bg: "#0d0618",
  /* the Concourse apartment line, the Lehman tower, Poe Cottage, and a saucer overhead */
  headerSvg: (function () {
    let s = '<rect x="0" y="40" width="70" height="24"/><rect x="74" y="30" width="60" height="34"/>';
    s += '<rect x="150" y="12" width="30" height="52"/>';
    for (let x = 150; x < 180; x += 8) s += '<rect x="' + x + '" y="6" width="5" height="6"/>';
    s += '<rect x="186" y="38" width="80" height="26"/><rect x="280" y="44" width="44" height="20"/><path d="M276 46l26 -14 26 14z"/>';
    s += '<rect x="336" y="34" width="64" height="30"/><ellipse cx="330" cy="14" rx="20" ry="4"/><ellipse cx="330" cy="10" rx="7" ry="5"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the B or the D to Bedford Park Blvd, under the Grand Concourse. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "poe", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "lehman", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "parachute" },
    { scene: "reservoir", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "corner", t: "WELCOME TO BEDFORD PARK", x: "Bedford Park Blvd and the Grand Concourse. This is Kool Keith's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "The Wanderer (with L'Orange)", id: "HftQiKw1Zc8", start: 30, cuts: [56.0, 111.0, 176.0], qs: [
      [
        ["\"Everybody be...\" what?", "Careful", "Quiet", "Ready"],
        ["Don't let them reach your what?", "Mind", "House", "Pocket"],
        ["Wander natural what?", "Resources", "Rivers", "Forests"],
        ["\"The clash of the...\" what?", "Titans", "Planets", "Giants"],
        ["Flexible accessories that's in the what?", "Jeans", "Bag", "Car"],
        ["The fortified what?", "Minerals", "Walls", "Vitamins"],
        ["Developing from the what?", "Seed", "Ground", "Root"]
      ],
      [
        ["The structure of combat is like what?", "WrestleMania", "The Olympics", "A chess game"],
        ["The genetics make the eye what?", "Contact", "Color", "Twitch"],
        ["He has nothing to prove in what?", "Slacks", "Sneakers", "A suit"],
        ["Predictions cause a human what to listen?", "Ear", "Brain", "Heart"],
        ["Copying is what?", "Prohibited", "Allowed", "Easy"],
        ["Driving like a Brougham what?", "Lincoln", "Cadillac", "Buick"],
        ["Sitting on that what seat?", "Leather", "Velvet", "Back"]
      ],
      [
        ["Comfort what?", "Zones", "Food", "Shoes"],
        ["The machinery is studied by who?", "Scientists", "Doctors", "Students"],
        ["Studied in what?", "Schools", "Labs", "Libraries"],
        ["Studying what?", "Lasers", "Rockets", "Planets"],
        ["His lyrics seem to do what?", "Amaze us", "Confuse us", "Bore us"],
        ["How many of us does he name?", "Five", "Three", "Ten"],
        ["Feel the what?", "Orchestration", "Vibration", "Celebration"]
      ]
    ] },
    { title: "Livin' Astro", locked: true, cuts: [], qs: [] },
    { title: "Blue Flowers", locked: true, cuts: [], qs: [] },
    { title: "Earth People", locked: true, cuts: [], qs: [] },
    { title: "Ego Trippin'", locked: true, cuts: [], qs: [] }
  ]
};
