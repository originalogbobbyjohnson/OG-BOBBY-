/* Cory Gunz: Soundview, the Bronx. Son of Peter Gunz ("Deja Vu (Uptown Baby)"), rapid-fire flow, The Apprentice / Best Kept Secret /
   Youngest In Charge / Heir to the Throne tapes, Gunz x Bars, the new album 96 Era (Oct 2026). */
window.CFG = {
  name: "Cory Gunz", nameUpper: "CORY GUNZ", short: "GUNZ",
  hood: "Soundview", hoodUpper: "SOUNDVIEW", boro: "the Bronx",
  saveKey: "ogfan99corygunz1",
  /* everybody starts as an Apprentice (his first mixtape series) and climbs the tape catalog to the throne */
  startRank: "Apprentice",
  ranks: ["Best Kept Secret", "Youngest In Charge", "Season Finale"],
  topRank: "Heir to the Throne",
  point: "Bar", points: "Bars",
  rankRewards: {
    "Best Kept Secret": { bongs: 5, line: "Out of the apprentice class. The best kept secret in the Bronx is you now." },
    "Youngest In Charge": { bongs: 10, line: "Youngest in charge. Too quick on the bars for anybody to keep up." },
    "Season Finale": { bongs: 25, line: "You run all of Soundview." }
  },
  trophyArt: [
    /* Apprentice: an open rhyme book and a pen */
    '<path d="M10 70l30-6 30 6V30l-30-6-30 6z" fill="#f4efe2" stroke="#6b5a3a" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M40 24v40" stroke="#6b5a3a" stroke-width="1.5"/>' +
    '<path d="M15 36l20-4M15 43l20-4M15 50l20-4M45 32l20 4M45 39l20 4M45 46l16 3" stroke="#4fc3ff" stroke-width="1.2"/>' +
    '<path d="M58 14l10 10-24 30-8 2 2-8z" fill="#f5c542" stroke="#6b5a3a" stroke-width="1.2" stroke-linejoin="round"/>',
    /* Best Kept Secret: a cassette tape with a padlock */
    '<rect x="10" y="30" width="60" height="38" rx="4" fill="#20262e" stroke="#9aa6b2" stroke-width="1.5"/>' +
    '<rect x="16" y="36" width="48" height="12" rx="2" fill="#f5c542"/>' +
    '<text x="40" y="45.5" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="8" letter-spacing="1" fill="#20262e">SECRET</text>' +
    '<circle cx="28" cy="56" r="5" fill="#d8dde3"/><circle cx="52" cy="56" r="5" fill="#d8dde3"/><rect x="33" y="54" width="14" height="4" fill="#5a6470"/>' +
    '<path d="M34 24v-6a6 6 0 0 1 12 0v6" fill="none" stroke="#c9d1d9" stroke-width="2.5"/><rect x="31" y="22" width="18" height="12" rx="2" fill="#e0a52c" stroke="#7a5512" stroke-width="1"/>',
    /* Youngest In Charge: a gold mic on a stand with a small crown */
    '<path d="M40 54v20M30 76h20" stroke="#9aa6b2" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M28 40q0 14 12 14t12-14" fill="none" stroke="#9aa6b2" stroke-width="2"/>' +
    '<rect x="32" y="20" width="16" height="28" rx="8" fill="#f5c542" stroke="#7a5512" stroke-width="1.5"/>' +
    '<path d="M33 28h14M33 33h14M33 38h14" stroke="#7a5512" stroke-width="1"/>' +
    '<path d="M31 16l3-8 6 5 6-5 3 8z" fill="#ffcc33" stroke="#7a5512" stroke-width="1"/>',
    /* Season Finale: a TV with FINALE on the screen */
    '<path d="M32 18l8 8 8-8" stroke="#9aa6b2" stroke-width="2" fill="none"/>' +
    '<rect x="10" y="26" width="60" height="44" rx="5" fill="#3a3f47" stroke="#11151a" stroke-width="1.5"/>' +
    '<rect x="15" y="31" width="42" height="34" rx="3" fill="#0e3a5a"/>' +
    '<text x="36" y="52" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="10" letter-spacing="1" fill="#f5c542">FINALE</text>' +
    '<circle cx="63" cy="38" r="2.5" fill="#f5c542"/><circle cx="63" cy="47" r="2.5" fill="#9aa6b2"/><path d="M20 70l-4 8M60 70l4 8" stroke="#11151a" stroke-width="2.5"/>',
    /* Heir to the Throne: a gold throne with a crown on the seat */
    '<path d="M20 78V18q20-10 40 0v60" fill="#e0a52c" stroke="#7a5512" stroke-width="1.5"/>' +
    '<path d="M26 22q14-6 28 0v28H26z" fill="#a8243a"/>' +
    '<rect x="14" y="50" width="52" height="10" rx="2" fill="#ffcc33" stroke="#7a5512" stroke-width="1.5"/>' +
    '<rect x="14" y="40" width="7" height="22" rx="2" fill="#ffcc33" stroke="#7a5512" stroke-width="1"/><rect x="59" y="40" width="7" height="22" rx="2" fill="#ffcc33" stroke="#7a5512" stroke-width="1"/>' +
    '<path d="M30 48l2-10 5 5 3-7 3 7 5-5 2 10z" fill="#fff2a8" stroke="#7a5512" stroke-width="1"/>' +
    '<circle cx="40" cy="14" r="2.5" fill="#4fc3ff"/>'
  ],
  clubTitle: "The 96 Era Shelf", clubTab: "96ERA",
  tags: ["UPTOWN BABY", "96 ERA", "GUNZ"],
  c1: "#f5c542", c2: "#4fc3ff", c3: "#ff4d3d", bg: "#0e1620",
  /* the 6 on the el, Parkchester's brick towers, the Whitestone Bridge */
  headerSvg: (function () {
    let s = '<rect x="0" y="52" width="400" height="12"/>';
    /* Parkchester towers */
    [[0, 22, 40], [44, 30, 34], [96, 18, 46], [140, 34, 30]].forEach(b => { s += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (64 - b[1]) + '"/>'; for (let y = b[1] + 5; y < 50; y += 8) for (let x = b[0] + 4; x < b[0] + b[2] - 4; x += 8) s += '<rect x="' + x + '" y="' + y + '" width="3" height="4" fill="#0e1620"/>'; });
    /* the el with a 6 train on it */
    s += '<rect x="176" y="40" width="224" height="4"/>';
    for (let x = 180; x < 400; x += 24) s += '<rect x="' + x + '" y="44" width="3" height="20"/>';
    s += '<rect x="186" y="28" width="96" height="12" rx="3"/>';
    for (let x = 190; x < 278; x += 12) s += '<rect x="' + x + '" y="31" width="7" height="5" fill="#0e1620"/>';
    /* Whitestone Bridge */
    s += '<rect x="318" y="6" width="3" height="34"/><rect x="368" y="6" width="3" height="34"/>' +
      '<path d="M290 36Q305 18 319 6Q344 30 369 6Q384 18 400 36" fill="none" stroke="#f7f3ea" stroke-width="1.5"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@corygunz", url: "https://www.instagram.com/corygunz/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 6 to Morrison Av–Soundview. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "oval", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "river", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "traffic" },
    { scene: "beach", t: "CLIMB THE RANKS", x: "Everybody starts as an Apprentice. Clear a row to rank up: Best Kept Secret, Youngest In Charge, Season Finale. Beat the 99 Challenge to become Heir to the Throne.", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO SOUNDVIEW", x: "Westchester Av and Morrison Av. This is Cory Gunz's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "U.O.E.N.O. (Remix)", id: "eUHLFzKnh1E", start: 47, cuts: [79.0], qs: [[
      ["Which Young Money boss does he shout out?", "Wayne", "Drake", "Meek Mill"],
      ["What is he about to cop?", "A truck", "A boat", "A bike"],
      ["Why can't he drive it?", "No license", "No keys", "No gas"],
      ["Finish the line: \"You don't even ___\"", "Know it", "See it", "Want it"],
      ["Who already know it, he says?", "His big bros", "His teachers", "The whole block"]
    ]] },
    { title: "Bag (ft. Grafh)", id: "QY6TY48-yAk", start: 44.5, cuts: [77.3], qs: [[
      ["His flow is grosser than what?", "Salmonella", "Sour milk", "Old cheese"],
      ["He's been going global, and now he's going what?", "Solar", "Local", "Platinum"],
      ["Besides pounds and dollars, which money does he name?", "Euro", "Yen", "Peso"],
      ["What pole does he mention?", "A totem pole", "A flag pole", "A fishing pole"],
      ["Where does he say his crew is?", "On the road", "In the studio", "On a plane"]
    ]] },
    { title: "99's 9's", id: "pWPhSU2oFIw", start: 23, cuts: [58.1], qs: [[
      ["He turned 12 to 99 but kept his 99 what?", "Vibes", "Dreams", "Friends"],
      ["What number did he start from before 99?", "12", "2", "100"],
      ["What did they say he needed 99 of?", "Rhymes", "Beats", "Shows"],
      ["How many tries did he give it before he fell once?", "99", "3", "50"],
      ["He feels like 99 holes and 99 what?", "Odds", "Goals", "Roads"]
    ]] },
    { title: "NaySay", id: "H5S9Sk0kM_0", start: 17, cuts: [53.9, 131.8], qs: [[
      ["What frozen treat does he mention?", "Ice cream bars", "Popsicles", "Snow cones"],
      ["Finish the line: \"I don't do the ___\"", "Nay say", "Small talk", "Two step"],
      ["\"We do what ___\"", "We say", "They want", "We planned"],
      ["If they're talking beef, it must be a what?", "Steak plate", "Burger", "Meatball"],
      ["What do people get every time he hits the corner?", "Face aches", "Headaches", "Nervous"],
      ["Where did they go from?", "East Bay", "West Side", "Downtown"]
    ], [
      ["What did he used to want, he remembers?", "A juice box", "A bike", "A puppy"],
      ["Then all of a sudden he wanted to be who?", "Tupac", "Biggie", "Jay-Z"],
      ["Which Tupac character would he rather be?", "Bishop", "Lucky", "Raheem"],
      ["What do they really want to see?", "The roof drop", "The sun rise", "The lights"],
      ["Anything suspicious gets spun like a loose what?", "Top", "Tire", "Record"],
      ["Finish the line: \"So play ___\"", "Safe", "Fair", "Ball"]
    ]] },
    { title: "Different", id: "QiHl8mJ-pq8", start: 26, cuts: [55.5, 97.5], qs: [[
      ["What percent of him hates rap?", "20%", "50%", "99%"],
      ["What does another 20% of him eat?", "Fruit", "Candy", "Cereal"],
      ["What does 1% of him eat?", "Veggies", "Cake", "Fish"],
      ["What does he miss?", "His old room", "His old car", "His old crew"],
      ["What did he eat his stuff without?", "A spoon", "A fork", "A plate"],
      ["Whose place does he gaze at?", "Grandma's", "Mom's", "His uncle's"]
    ], [
      ["Finish the hook: \"Something completely ___\"", "Different", "New", "Free"],
      ["\"This ain't no Barney or ___\"", "Milhouse", "Bart", "Arthur"],
      ["He peeled out like a real what?", "Sprout", "Banana", "Sticker"],
      ["Don't think his ex will be his best what?", "Folks", "Fans", "Customers"],
      ["He says he is simply none other than what?", "Something completely different", "The next one up", "A regular rapper"]
    ]] },
    { title: "6 Foot 7 Foot (with Lil Wayne)", locked: true, cuts: [], qs: [] },
    { title: "YMCMB MMG (ft. Meek Mill)", locked: true, cuts: [], qs: [] },
    { title: "Fish Fry", locked: true, cuts: [], qs: [] },
    { title: "Laundry", locked: true, cuts: [], qs: [] }
  ]
};
