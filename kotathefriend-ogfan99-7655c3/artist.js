/* KOTA the Friend: Clinton Hill / Fort Greene, Brooklyn. Fully independent, FLTBYS ("Flight Boys"), FOTO, EVERYTHING, Lyrics to GO, trumpet player. */
window.CFG = {
  name: "Kota the Friend", nameUpper: "KOTA THE FRIEND", short: "KOTA",
  hood: "Clinton Hill", hoodUpper: "CLINTON HILL", boro: "Brooklyn",
  saveKey: "ogfan99kotathefriend1",
  /* everybody starts as the "Scapegoat" (his song), rises through his titles and lyrics, ends as The Friend */
  startRank: "Scapegoat",
  ranks: ["Day One", "Real One", "Birdie", "Flight Boy", "Colorado"],
  topRank: "The Friend",
  point: "Foto", points: "Fotos",
  rankRewards: {
    "Day One": { bongs: 5, line: "You been here since day one." },
    "Real One": { bongs: 10, line: "All his energy goes to the real ones. That's you now." },
    "Birdie": { bongs: 15, line: "Spread your wings. You're flying now." },
    "Flight Boy": { bongs: 20, line: "Passport ready. Welcome to the Flight Boys." },
    "Colorado": { bongs: 25, line: "You run all of Clinton Hill." }
  },
  trophyArt: [
    /* Scapegoat: a little goat */
    '<ellipse cx="38" cy="56" rx="20" ry="12" fill="#f4ecd8" stroke="#6b5a44" stroke-width="1.5"/><circle cx="60" cy="44" r="8" fill="#f4ecd8" stroke="#6b5a44" stroke-width="1.5"/>' +
    '<path d="M56 37q-2-10 -8-12M63 37q2-10 8-12" stroke="#8a7a62" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M62 52q0 6-3 8" stroke="#6b5a44" stroke-width="1.5" fill="none"/>' +
    '<circle cx="62" cy="43" r="1.3" fill="#2a1d10"/><path d="M26 66v12M34 66v12M44 66v12M52 64v14" stroke="#6b5a44" stroke-width="3"/>',
    /* Day One: a calendar page */
    '<rect x="16" y="20" width="48" height="56" rx="4" fill="#f4ecd8" stroke="#3a2a1a" stroke-width="2"/><rect x="16" y="20" width="48" height="16" rx="4" fill="#e85a4f"/>' +
    '<rect x="24" y="14" width="4" height="12" rx="2" fill="#5b6168"/><rect x="52" y="14" width="4" height="12" rx="2" fill="#5b6168"/>' +
    '<text x="40" y="32" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="10" fill="#fff">DAY</text>' +
    '<text x="40" y="68" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="30" fill="#3a2a1a">1</text>',
    /* Real One: a gold heart */
    '<path d="M40 74C14 56 10 40 18 30s20-6 22 4c2-10 14-14 22-4s4 26-22 44z" fill="#f2c14e" stroke="#8a6a1a" stroke-width="2"/>' +
    '<text x="40" y="52" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="#5a3a0a">REAL</text>',
    /* Birdie: a blue bird on a branch */
    '<path d="M8 66q30-6 64 2" stroke="#6b4532" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M50 64q6-8 14-6" stroke="#5f9a46" stroke-width="3" fill="none"/>' +
    '<ellipse cx="38" cy="50" rx="15" ry="11" fill="#7cc6e8" stroke="#2a5a8a" stroke-width="1.5"/><circle cx="50" cy="40" r="8" fill="#7cc6e8" stroke="#2a5a8a" stroke-width="1.5"/>' +
    '<path d="M57 40l7 2-7 2z" fill="#f2c14e"/><circle cx="52" cy="38" r="1.5" fill="#111"/><path d="M30 46q8 10 18 4" fill="#4a90c0"/><path d="M24 52l-12 6 14 0z" fill="#2a5a8a"/>' +
    '<path d="M36 61v5M42 61v5" stroke="#f2c14e" stroke-width="2"/>',
    /* Flight Boy: a paper airplane with a dotted trail */
    '<path d="M10 54l60-30-22 52-8-18z" fill="#f4ecd8" stroke="#3a4f63" stroke-width="2" stroke-linejoin="round"/><path d="M40 58l30-34" stroke="#3a4f63" stroke-width="1.5"/>' +
    '<path d="M8 72q10-4 14 2t14 0" stroke="#7cc6e8" stroke-width="2" stroke-dasharray="3 3" fill="none"/>',
    /* Colorado: snowy mountains under the sun */
    '<circle cx="56" cy="28" r="10" fill="#f2c14e"/><path d="M6 76l22-38 14 20 10-14 22 32z" fill="#5c6fa8" stroke="#2b2f45" stroke-width="1.5"/>' +
    '<path d="M22 48l6-10 6 9-4 2-3-3z" fill="#fff"/><path d="M48 50l4-6 6 8-5-1z" fill="#fff"/><path d="M6 76h68" stroke="#5f9a46" stroke-width="4"/>',
    /* The Friend: a gold trumpet under a crown */
    '<path d="M26 24l3-12 7 6 4-9 4 9 7-6 3 12z" fill="#ffd34d" stroke="#7a5512" stroke-width="1.2"/>' +
    '<path d="M10 52h40l14-10v28l-14-10H10z" fill="#e8b84a" stroke="#7a5512" stroke-width="1.5"/><ellipse cx="64" cy="56" rx="4" ry="14" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5"/>' +
    '<rect x="20" y="40" width="4" height="12" fill="#c08a1c"/><rect x="28" y="40" width="4" height="12" fill="#c08a1c"/><rect x="36" y="40" width="4" height="12" fill="#c08a1c"/>' +
    '<circle cx="22" cy="38" r="3" fill="#ffd34d"/><circle cx="30" cy="38" r="3" fill="#ffd34d"/><circle cx="38" cy="38" r="3" fill="#ffd34d"/><rect x="6" y="50" width="6" height="6" rx="1" fill="#c08a1c"/>'
  ],
  clubTitle: "The Foto Album", clubTab: "FOTOS",
  tags: ["FLTBYS", "LYRICS TO GO", "KOTA"],
  c1: "#f2c14e", c2: "#7cc6e8", c3: "#8fd17a", bg: "#1d2a3a",
  /* skyline over Fort Greene: the Savings Bank tower with its dome, brownstones, park trees */
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="54" width="400" height="10"/>';
    for (let i = 0; i < 6; i++) s += '<rect x="' + (i * 30) + '" y="34" width="28" height="30"/><rect x="' + (i * 30 - 1) + '" y="31" width="30" height="4"/>';
    s += '<rect x="196" y="22" width="32" height="42"/><rect x="202" y="10" width="20" height="14"/><path d="M204 10q8-14 16 0z"/><rect x="211" y="0" width="2" height="4"/>';
    s += '<circle cx="270" cy="40" r="16"/><circle cx="296" cy="36" r="20"/><circle cx="326" cy="42" r="14"/><rect x="250" y="40" width="100" height="24"/>';
    for (let i = 0; i < 2; i++) s += '<rect x="' + (354 + i * 24) + '" y="30" width="22" height="34"/>';
    return s;
  })() + '</g>',
  socials: [
    { name: "Instagram", handle: "@kotathefriend", url: "https://www.instagram.com/kotathefriend/" },
    { name: "YouTube", handle: "@kotathefriend7029", url: "https://www.youtube.com/@kotathefriend7029" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the G to Clinton–Washington Avs. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "park", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "court" },
    { scene: "tower", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "bam", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "corner", t: "WELCOME TO CLINTON HILL", x: "Lafayette Av and Clinton Av, right over the G. This is Kota the Friend's game.", sfx: "spray" }
  ],
  episodes: [
  /* PITCH DEMO: only 2 of his uploads have captions; "Real Ones" is out (bleeped hook). Timing from the captions on his official "Dear Fear" video. */
  { title: "Dear Fear", id: "xPKDqAxRfM8", cuts: [58.0, 142.5, 179.4], qs: [[
      ["Where has he been with his shaker?", "Abu Dhabi", "Paris", "Tokyo"],
      ["Where was his ex-girl seen chilling?", "The Oscars lobby", "The Grammys stage", "A Brooklyn diner"],
      ["How many trophies was she holding?", "Five", "Two", "Ten"],
      ["Who does he give all his energy to?", "His real ones", "His fans", "His label"],
      ["Life reps are preparation for when what comes?", "Your day", "The rain", "The money"],
      ["When you grow, they quick to call you a what?", "Fraud", "Genius", "Legend"],
      ["They're attempting to steal your what?", "Magic", "Spot", "Style"]
    ], [
      ["What kind of club does he say they should start?", "A book club", "A run club", "A chess club"],
      ["Reading helps him learn to do what healthily?", "Communicate", "Eat", "Sleep"],
      ["What does he say he has so much of?", "Free time", "Money", "Stress"],
      ["On his way back home he's throwing up what?", "Peace signs", "Thumbs up", "High fives"],
      ["He used to be a firefighter. Now what does he do?", "Water his lawn", "Fight fires", "Drive a truck"],
      ["He tosses every snake to the what?", "Birds", "Dogs", "River"],
      ["His actions follow his what?", "Words", "Heart", "Friends"]
    ], [
      ["He says pain is what?", "Unavoidable", "Temporary", "Fake"],
      ["Never let in pain and you never learn how to what?", "Love", "Fight", "Win"],
      ["Without pain you don't experience what?", "Joy", "Peace", "Fear"],
      ["In the back of the whip, fear can sit and what?", "Relax", "Sleep", "Drive"],
      ["If he needs fear, what will he do?", "Call", "Text", "Wait"],
      ["For getting him here, he's hella what?", "Grateful", "Angry", "Tired"],
      ["They made it farther than who?", "Most", "Everyone", "His friends"]
    ]] },
  { title: "Birdie", locked: true, cuts: [], qs: [] },
  { title: "Sedona", locked: true, cuts: [], qs: [] },
  { title: "Hollywood", locked: true, cuts: [], qs: [] },
  { title: "Colorado", locked: true, cuts: [], qs: [] }
  ]
};
