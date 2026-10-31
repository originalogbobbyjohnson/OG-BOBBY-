/* MC Shan: Queensbridge, Queens. Juice Crew, Marley Marl's cousin, "The Bridge" (1986), albums "Down by Law" (1987), "Born to Be Wild" (1988), "Play It Again, Shan" (1990). */
window.CFG = {
  name: "MC Shan", nameUpper: "MC SHAN", short: "SHAN",
  hood: "Queensbridge", hoodUpper: "QUEENSBRIDGE", boro: "Queens",
  saveKey: "ogfan99mcshan1",
  /* everybody starts as a sucker DJ; climb up to the Bridge itself */
  startRank: "Sucker DJ",
  ranks: ["Cool Brother", "Down by Law", "Born to Be Wild", "Juice Crew", "The Bridge"],
  topRank: "Hip-Hop Pioneer",
  point: "Jam", points: "Jams",
  rankRewards: {
    "Cool Brother": { bongs: 5, line: "A cool brother. They know your name now." },
    "Down by Law": { bongs: 10, line: "Down by Law. Straight from the album." },
    "Born to Be Wild": { bongs: 15, line: "Born to Be Wild. Can't hold you down." },
    "Juice Crew": { bongs: 20, line: "Juice Crew. You got the juice." },
    "The Bridge": { bongs: 25, line: "You run all of Queensbridge." }
  },
  trophyArt: [
    /* Sucker DJ: a cracked record */
    '<circle cx="40" cy="46" r="30" fill="#111"/><circle cx="40" cy="46" r="10" fill="#9a958c"/><path d="M40 16l6 14 -8 8 10 10 -6 24" stroke="#2a1e2e" stroke-width="3" fill="none"/>',
    /* Cool Brother: a pair of shades */
    '<path d="M8 36h64" stroke="#2b2b33" stroke-width="3"/><path d="M10 36h26q0 20 -13 20q-13 0 -13 -20z" fill="#1d1d22" stroke="#9aa3ad" stroke-width="1.5"/>' +
    '<path d="M44 36h26q0 20 -13 20q-13 0 -13 -20z" fill="#1d1d22" stroke="#9aa3ad" stroke-width="1.5"/><path d="M16 40l6 6M50 40l6 6" stroke="#9fe3ff" stroke-width="2"/>',
    /* Down by Law: a bucket hat */
    '<path d="M20 50q2 -30 20 -32q18 2 20 32z" fill="#e8e0cc" stroke="#6b6458" stroke-width="1.5"/><path d="M8 54q32 -12 64 0q-32 14 -64 0z" fill="#d8cfb8" stroke="#6b6458" stroke-width="1.5"/>' +
    '<path d="M22 44q18 -6 36 0" stroke="#ff9a2e" stroke-width="3" fill="none"/>',
    /* Born to Be Wild: a boombox */
    '<path d="M24 36q16 -12 32 0" stroke="#c9ced6" stroke-width="3" fill="none"/><rect x="6" y="36" width="68" height="38" rx="5" fill="#2b2b33" stroke="#9aa3ad" stroke-width="1.5"/>' +
    '<circle cx="20" cy="58" r="10" fill="#111" stroke="#9aa3ad"/><circle cx="60" cy="58" r="10" fill="#111" stroke="#9aa3ad"/><rect x="32" y="48" width="16" height="12" fill="#171a20" stroke="#9aa3ad"/><rect x="30" y="40" width="20" height="4" fill="#9fe3ff"/>',
    /* Juice Crew: an orange-label 12-inch */
    '<circle cx="40" cy="44" r="32" fill="#111"/><circle cx="40" cy="44" r="24" fill="none" stroke="#2c2c2c"/><circle cx="40" cy="44" r="15" fill="#ff9a2e"/>' +
    '<text x="40" y="42" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" fill="#111">JUICE</text><text x="40" y="50" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="6" fill="#111">CREW</text>',
    /* The Bridge: a spired bridge tower with its truss */
    '<rect x="34" y="18" width="12" height="62" fill="#9fe3ff"/><path d="M34 18l6 -14 6 14z" fill="#9fe3ff"/><path d="M2 60L40 30L78 60" stroke="#9fe3ff" stroke-width="3" fill="none"/>' +
    '<path d="M2 66H78" stroke="#9fe3ff" stroke-width="3"/><path d="M8 66l8 -10 8 10 8 -10M48 66l8 -10 8 10 8 -10" stroke="#9fe3ff" stroke-width="1.5" fill="none"/>',
    /* Hip-Hop Pioneer: a gold mic inside a laurel wreath */
    '<path d="M16 70q-14 -30 8 -56" stroke="#4f8a3a" stroke-width="3" fill="none"/><path d="M64 70q14 -30 -8 -56" stroke="#4f8a3a" stroke-width="3" fill="none"/>' +
    (function () { let l = ""; for (let i = 0; i < 5; i++) { const y = 22 + i * 10; l += '<ellipse cx="' + (14 - i % 2) + '" cy="' + y + '" rx="5" ry="2.4" fill="#5a9a3a"/><ellipse cx="' + (66 + i % 2) + '" cy="' + y + '" rx="5" ry="2.4" fill="#5a9a3a"/>'; } return l; })() +
    '<rect x="32" y="16" width="16" height="32" rx="8" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5"/><path d="M33 26h14M33 32h14M33 38h14" stroke="#7a5512"/><rect x="38" y="48" width="4" height="26" fill="#7a5512"/>'
  ],
  clubTitle: "The House of Hits", clubTab: "HITS",
  tags: ["JUICE CREW", "SHAN", "THE BRIDGE"],
  c1: "#9fe3ff", c2: "#ff9a2e", c3: "#f2c14e", bg: "#0d1424",
  /* Queensbridge: the lighthouse on the island tip, the bridge tower and span, the low Houses */
  headerSvg: (function () {
    let s = '<rect x="0" y="58" width="400" height="6"/><path d="M28 58L32 30h8l4 28z"/><rect x="30" y="24" width="12" height="7"/><path d="M30 24q6 -8 12 0z"/>';
    s += '<rect x="226" y="6" width="10" height="52"/><path d="M226 6l5 -6 5 6z"/><path d="M120 44L231 14L340 44" stroke="#f7f3ea" stroke-width="2" fill="none"/><rect x="120" y="44" width="220" height="3"/>';
    for (let x = 60; x < 400; x += 48) s += '<rect x="' + x + '" y="48" width="20" height="10"/><rect x="' + (x + 20) + '" y="51" width="14" height="7"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the F to 21 St–Queensbridge. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "lighthouse", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "noguchi", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "studio", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO QUEENSBRIDGE", x: "21st St and 40th Av, by the Houses. This is MC Shan's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "The Bridge", id: "dS4RpBR0Zn0", cuts: [119.7, 235.5, 331.5], qs: [
      [
        ["The monument is right in your what?", "Face", "Hood", "Town"],
        ["\"Sit and listen for a while to the name of the...\" what?", "Place", "Song", "Crew"],
        ["Hip-hop was set out in the what?", "Dark", "Street", "Rain"],
        ["They used to do it out in the what?", "Park", "Hall", "Yard"],
        ["They used to jam in the what?", "Center", "Basement", "Lobby"],
        ["You had to what so you could enter?", "Pay", "Dance", "Sign in"],
        ["Every time they had a jam, they couldn't get no what?", "Peace", "Sleep", "Help"]
      ],
      [
        ["Who cut a plate?", "Marley Marl", "Mr. Magic", "Biz Markie"],
        ["What was the title of that record?", "Sucker DJs", "Sucker MCs", "Def Jam"],
        ["He walked into a girl named who?", "Shanté", "Lyte", "Salt"],
        ["MC Shan is in the place to what?", "Be", "Go", "Stay"],
        ["The newest member is down with us and he got the what?", "Juice", "Crown", "Keys"],
        ["This is a place where what are born?", "Stars", "Kings", "Legends"],
        ["While he's out on tour, keep your hand off his what?", "Girl", "Mic", "Car"]
      ],
      [
        ["Don't never listen to what who say?", "Nobody", "Your crew", "The radio"],
        ["You got to go by what your what feel?", "Heart", "Head", "Gut"],
        ["Rich people are always trying to what?", "Restrain", "Explain", "Complain"],
        ["They always pull you back when you want to get what?", "Ahead", "Paid", "Out"],
        ["You talk about school, they're talking about what?", "Quitting", "Partying", "Sleeping"],
        ["The story was made to inspire you to reach your what?", "Goals", "Dreams", "Peak"],
        ["Stop walking through life as if you are what?", "Blind", "Lost", "Asleep"]
      ]
    ] },
    { title: "Left Me Lonely", locked: true, cuts: [], qs: [] },
    { title: "Marley Marl Scratch", locked: true, cuts: [], qs: [] },
    { title: "Down by Law", locked: true, cuts: [], qs: [] },
    { title: "It Don't Mean a Thing", locked: true, cuts: [], qs: [] }
  ]
};
