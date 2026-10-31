window.CFG = {
  name: "MC Lyte", nameUpper: "MC LYTE", short: "LYTE", hood: "East Flatbush", hoodUpper: "EAST FLATBUSH", boro: "Brooklyn",
  saveKey: "ogfan99mclyte1",
  startRank: "Pebble", ranks: ["Follower", "Scholar", "Cha Cha Cha", "Boulder", "Hip Hop Leader"], topRank: "Lyte as a Rock",
  point: "Rock", points: "Rocks",
  rankRewards: {
    "Follower": { bongs: 5, line: "You're following the tone of her voice now." },
    "Scholar": { bongs: 10, line: "You can tell by the tone: a scholar." },
    "Cha Cha Cha": { bongs: 15, line: "K-Rock threw the cuts your way." },
    "Boulder": { bongs: 20, line: "No pebble no more. You're rolling now." },
    "Hip Hop Leader": { bongs: 25, line: "You run all of East Flatbush." }
  },
  trophyArt: [
    /* Pebble: one small smooth stone */
    '<ellipse cx="40" cy="66" rx="16" ry="11" fill="#9a9da2" stroke="#4a4d52" stroke-width="2"/><path d="M30 62q6-4 12-3" stroke="#c9ccd0" stroke-width="2.5" fill="none" stroke-linecap="round"/>',
    /* Follower: a cassette tape */
    '<rect x="12" y="34" width="56" height="36" rx="4" fill="#2b2b30" stroke="#ff8a5b" stroke-width="3"/><rect x="20" y="40" width="40" height="12" rx="2" fill="#f1e6cc"/>' +
    '<circle cx="30" cy="58" r="5" fill="#f1e6cc"/><circle cx="50" cy="58" r="5" fill="#f1e6cc"/><circle cx="30" cy="58" r="2" fill="#2b2b30"/><circle cx="50" cy="58" r="2" fill="#2b2b30"/><path d="M24 70l4-6h24l4 6" fill="#444"/>',
    /* Scholar: graduation cap on a book */
    '<rect x="14" y="58" width="52" height="16" rx="2" fill="#7fd1ff" stroke="#1d4a6a" stroke-width="2"/><path d="M18 62h44" stroke="#f4f1ea" stroke-width="2"/>' +
    '<path d="M40 24l30 12-30 12-30-12z" fill="#22262c" stroke="#000" stroke-width="1"/><path d="M26 42v10q14 8 28 0v-10" fill="#22262c"/><path d="M66 38v14" stroke="#f5c84a" stroke-width="2"/><circle cx="66" cy="54" r="3" fill="#f5c84a"/>',
    /* Cha Cha Cha: two maracas crossed */
    '<path d="M30 74l14-30" stroke="#8a5a32" stroke-width="5" stroke-linecap="round"/><ellipse cx="48" cy="34" rx="11" ry="14" fill="#ff8a5b" stroke="#7a2e1a" stroke-width="2" transform="rotate(25 48 34)"/>' +
    '<path d="M50 74l-14-30" stroke="#8a5a32" stroke-width="5" stroke-linecap="round"/><ellipse cx="32" cy="34" rx="11" ry="14" fill="#f5c84a" stroke="#7a5a12" stroke-width="2" transform="rotate(-25 32 34)"/>' +
    '<circle cx="30" cy="30" r="2" fill="#fff"/><circle cx="50" cy="32" r="2" fill="#fff"/>',
    /* Boulder: a big gray rock */
    '<path d="M12 76q-6-34 18-48q22-12 38 6q14 18 4 42z" fill="#8c8f94" stroke="#4a4d52" stroke-width="2.5"/><path d="M26 42q8-8 20-6M52 50q6 6 4 16" stroke="#b9bcc0" stroke-width="3" fill="none" stroke-linecap="round"/>',
    /* Hip Hop Leader: a gold microphone */
    '<rect x="34" y="40" width="12" height="34" rx="3" fill="#c9a24a" stroke="#6a4a12" stroke-width="2"/><circle cx="40" cy="28" r="15" fill="#f5c84a" stroke="#6a4a12" stroke-width="2"/>' +
    '<path d="M28 22h24M26 28h28M28 34h24" stroke="#b8902a" stroke-width="1.5"/><rect x="30" y="72" width="20" height="5" rx="2" fill="#6a4a12"/>',
    /* Lyte as a Rock: the rock with a gold crown and sparkles */
    '<path d="M12 78q-6-30 18-42q22-10 38 6q12 16 4 36z" fill="#9a9da2" stroke="#4a4d52" stroke-width="2.5"/>' +
    '<path d="M24 34l4-18 8 10 4-14 4 14 8-10 4 18z" fill="#f5c84a" stroke="#6a4a12" stroke-width="2"/><circle cx="40" cy="16" r="2.5" fill="#ff8a5b"/>' +
    '<path d="M66 20l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff4c2"/><path d="M14 44l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z" fill="#fff4c2"/>'
  ],
  clubTitle: "The Rock Pile", clubTab: "ROCKS",
  tags: ["1ST PRIORITY", "LYTE AS A ROCK", "LYTRO"],
  c1: "#ff8a5b", c2: "#f5c84a", c3: "#7fd1ff", bg: "#1a0f14",
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="54" width="400" height="10"/>';
    /* six-story garden blocks */
    [[0, 22, 70], [180, 18, 90], [330, 24, 70]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/><rect x="' + (x - 2) + '" y="' + (y - 3) + '" width="' + (w + 4) + '" height="3"/>'; });
    /* low shops on Utica and Church */
    [[74, 40, 46], [124, 36, 50], [274, 38, 52]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/>'; });
    /* church steeple and a water tower */
    s += '<path d="M258 64V30l6-22 6 22v34z"/><rect x="140" y="20" width="16" height="12" rx="2"/><path d="M138 20l10-8 10 8z"/><rect x="142" y="32" width="2" height="6"/><rect x="152" y="32" width="2" height="6"/>';
    return s;
  })() + '</g>',
  socials: [
    { name: "Website", handle: "mclyte.com", url: "https://mclyte.com" },
    { name: "YouTube", handle: "MC Lyte", url: "https://www.youtube.com/results?search_query=MC+Lyte" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 2 or the 5 to Church Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "gardens", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "gold", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "dollarvan", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO EAST FLATBUSH", x: "Church Av and Utica Av. This is MC Lyte's game.", sfx: "spray" }
  ],
  episodes: [
  /* Timing comes from the captions in the caption data. Two clean, captioned songs; the other three slots are locked pitch-demo songs
     (Cha Cha Cha, Paper Thin and Ruffneck had no captions). Each pool only asks about lines heard since the last stop. */
  { title: "Stop, Look, Listen", id: "GeAxvT62l6o", start: 50, cuts: [99.8, 159.9, 192.8], qs: [
    [
      ["Besides rhyming, what is she doing?", "Designing", "Dancing", "Driving"],
      ["Who wants to be like her?", "A sucker MC", "A DJ", "Her brother"],
      ["He has no trait of what?", "Originality", "Loyalty", "Rhythm"],
      ["She's not one to down who?", "Another", "Her crew", "The DJ"],
      ["She'll drop a tune, or maybe even how many?", "Two", "Three", "Ten"],
      ["New and improved like a freshly cut what?", "Diamond", "Record", "Fade"],
      ["Besides a ruby, what gem does she name?", "A sapphire", "An emerald", "A pearl"]
    ],
    [
      ["You feel like what sign was put on your back?", "Kick me", "For sale", "Stop"],
      ["When she starts, she never gives what?", "Slack", "Up", "In"],
      ["She says the Lyte is too what?", "Fly", "Shy", "Slow"],
      ["How much does she give it?", "100%", "50%", "Half"],
      ["She'll tear it, repair it like your what?", "Hand-me-down", "Old shoes", "Bike"],
      ["Save all your what tears?", "Crocodile", "Fake", "Baby"],
      ["Biting is not part of the what?", "Plan", "Show", "Deal"]
    ],
    [
      ["Rapping is the what?", "Activity", "Hobby", "Job"],
      ["Rap is the what?", "Sport", "Game", "Art"],
      ["In '88 she was great, but '89 is her what?", "Time", "Year off", "Last year"],
      ["Who's the DJ throwing the cuts her way?", "K-Rock", "Red Alert", "Kid Capri"],
      ["Leg one and leg two do the what?", "Jumping", "Singing", "Cooking"],
      ["In the rap category, MC Lyte does what?", "Headlines", "Opens", "Leaves"],
      ["Stop looking and listen to the what?", "Right rhyme", "Radio", "Beat"]
    ]
  ] },
  { title: "Lyte as a Rock", id: "ZGGSLyvn8YU", start: 26, cuts: [77.9, 111.5, 179.3], qs: [
    [
      ["What word repeats at the start?", "Bounce", "Jump", "Rock"],
      ["Move out the way when she's coming through the what?", "Door", "Park", "Block"],
      ["She's heavy, she's light as a what?", "Rock", "Feather", "Cloud"],
      ["Step back, it ain't that type of what?", "Party", "Song", "Show"],
      ["If you hate rejection, don't try to score what?", "First base", "A goal", "Points"],
      ["Your smile, your wink, your big what?", "Fake flake", "Gold chain", "Blue eyes"],
      ["You make her stomach do what?", "Turn", "Growl", "Hurt"]
    ],
    [
      ["Light as a rock, or should she say a what?", "Boulder", "Pebble", "Brick"],
      ["The boulder is rolling down your what?", "Neck", "Street", "Hill"],
      ["It's pounding on your what?", "Shoulders", "Door", "Head"],
      ["Obstacles: she'll chew them up and spit them what?", "Out", "Back", "Away"],
      ["She shows stability, potential and what?", "Strength", "Style", "Speed"],
      ["On the other hand, you are weak and what?", "Unruly", "Lazy", "Late"]
    ],
    [
      ["She's a slave to the what?", "Rhythm", "Money", "Radio"],
      ["She is a rock and you are just a what?", "Pebble", "Stone", "Grain of sand"],
      ["If a rap can paint a thousand words, she can paint a what?", "Million", "Hundred", "Picture"],
      ["Never underestimate, like who?", "DMC", "LL", "Rakim"],
      ["By the tone of her voice you can tell she's a what?", "Scholar", "Singer", "Teacher"],
      ["She's the leader of the hip hop what?", "Followers", "Fans", "Kids"],
      ["She's rocking it like a what?", "Checkerboard", "Hurricane", "Rocket"]
    ]
  ] },
  { title: "Cha Cha Cha", locked: true, cuts: [], qs: [] },
  { title: "Paper Thin", locked: true, cuts: [], qs: [] },
  { title: "Ruffneck", locked: true, cuts: [], qs: [] }
  ]
};
