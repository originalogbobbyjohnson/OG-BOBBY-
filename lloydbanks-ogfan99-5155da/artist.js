/* Lloyd Banks: South Jamaica, Queens. The Punchline King (PLK), Blue Hefner, Money By Any Means, The Hunger for More, Cold Corner, The Course of the Inevitable. */
window.CFG = {
  name: "Lloyd Banks", nameUpper: "LLOYD BANKS", short: "BANKS",
  hood: "South Jamaica", hoodUpper: "SOUTH JAMAICA", boro: "Queens",
  saveKey: "ogfan99lloydbanks1",
  /* everybody starts as a Lame */
  startRank: "Lame",
  ranks: ["Cold Corner Kid", "Hungry Warrior", "Blue Hefner"],
  topRank: "Punchline King",
  point: "Punchline", points: "Punchlines",
  rankRewards: {
    "Cold Corner Kid": { bongs: 5, line: "You held it down on the Cold Corner." },
    "Hungry Warrior": { bongs: 10, line: "The hunger for more. You never get full." },
    "Blue Hefner": { bongs: 25, line: "You run all of South Jamaica." }
  },
  trophyArt: [
    /* Lame: a crooked cardboard sign with a big L */
    '<path d="M38 24v12" stroke="#5a4a30" stroke-width="2"/><circle cx="38" cy="22" r="2.5" fill="#9aa0a6"/>' +
    '<g transform="rotate(-8 40 54)"><rect x="16" y="36" width="48" height="38" rx="2" fill="#c8a878" stroke="#7a5a30" stroke-width="2"/>' +
    '<text x="40" y="68" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="30" fill="#5a3a20">L</text></g>',
    /* Cold Corner Kid: an icy green street sign on a corner pole */
    '<rect x="38" y="24" width="4" height="56" fill="#9aa0a6"/>' +
    '<rect x="10" y="26" width="60" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/>' +
    '<text x="40" y="38" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="8.5" textLength="52" lengthAdjust="spacingAndGlyphs" fill="#fff">COLD CORNER</text>' +
    '<path d="M16 26l3-6 3 6M30 26l2-5 2 5M50 26l3-7 3 7M62 26l2-5 2 5" fill="#cfefff"/>' +
    '<path d="M22 58l6 0M25 55v6M23 56l4 4M27 56l-4 4" stroke="#cfefff" stroke-width="1.6"/><path d="M54 52h6M57 49v6M55 50l4 4M59 50l-4 4" stroke="#cfefff" stroke-width="1.6"/>',
    /* Hungry Warrior: a blue shield with HFM */
    '<path d="M40 16l26 8v20q0 24-26 34q-26-10-26-34V24z" fill="#2f5d9a" stroke="#f2c14e" stroke-width="2.5"/>' +
    '<path d="M40 22l20 6v16q0 18-20 27q-20-9-20-27V28z" fill="none" stroke="#9ec6e8" stroke-width="1"/>' +
    '<text x="40" y="53" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="15" fill="#f2c14e">HFM</text>',
    /* Blue Hefner: a blue silk robe on a gold hanger */
    '<path d="M40 14q4 0 4 4t-4 4M26 28l14-8 14 8" fill="none" stroke="#f2c14e" stroke-width="2.5" stroke-linecap="round"/>' +
    '<path d="M24 28l16 8 16-8 12 14-8 6v28H20V48l-8-6z" fill="#1f5fd0" stroke="#0e2a66" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M32 30l8 22 8-22" fill="none" stroke="#0e2a66" stroke-width="5"/>' +
    '<path d="M20 58h40" stroke="#0e2a66" stroke-width="3"/><path d="M40 58l-6 10M40 58l6 10" stroke="#0e2a66" stroke-width="2"/>',
    /* Punchline King: a gold boxing glove wearing a crown */
    '<path d="M26 26l4-12 6 7 4-10 4 10 6-7 4 12z" fill="#ffcc33" stroke="#7a5512" stroke-width="1.2"/>' +
    '<path d="M22 44q0-16 18-16h4q16 0 16 18v12q0 8-8 8H30q-8 0-8-8z" fill="#e0a52c" stroke="#7a5512" stroke-width="1.5"/>' +
    '<path d="M22 46q-4 0-4 6t6 6" fill="#e0a52c" stroke="#7a5512" stroke-width="1.5"/>' +
    '<rect x="26" y="66" width="30" height="12" rx="2" fill="#f4efe6" stroke="#7a5512" stroke-width="1.2"/>' +
    '<text x="41" y="75.5" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="8" fill="#2f5d9a">PLK</text>' +
    '<circle cx="40" cy="18" r="2" fill="#4aa8ff"/>'
  ],
  clubTitle: "The Cold Corner", clubTab: "CORNER",
  tags: ["MBAM", "HUNGER FOR MORE", "PLK"],
  c1: "#4aa8ff", c2: "#f2c14e", c3: "#c9d6e8", bg: "#0a1630",
  /* AirTrain guideway on piers with the glass Jamaica Station hall, King Manor's gambrel roof on the right */
  headerSvg: (function () {
    let s = '<rect x="0" y="30" width="400" height="6"/>';
    for (let x = 20; x < 400; x += 60) s += '<path d="M' + (x - 4) + ' 36h8l-2 28h-4z"/>';
    s += '<path d="M140 30V12l60-10 60 10v18z" opacity=".7"/>';
    s += '<rect x="40" y="14" width="56" height="12" rx="4"/>';
    s += '<path d="M300 64V48l6-12h70l6 12v16z"/><path d="M308 36l12-8h44l12 8z"/>';
    s += '<rect x="0" y="54" width="400" height="10"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@lloydbanks", url: "https://www.instagram.com/lloydbanks/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the E, J or Z to Jamaica Center-Parsons/Archer. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "avenue", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "manor", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "bell" },
    { scene: "station", t: "CLIMB THE RANKS", x: "Everybody starts as a Lame. Clear a row to rank up: Cold Corner Kid, Hungry Warrior, Blue Hefner. Beat the 99 Challenge to become Punchline King.", sfx: "train" },
    { scene: "corner", t: "WELCOME TO SOUTH JAMAICA", x: "Parsons Blvd and Archer Av. This is Lloyd Banks's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Beamer, Benz or Bentley", id: "dTR7yvONCV8", cuts: [45.1], qs: [[
      ["What three cars are in the hook?", "Beamer, Benz, Bentley", "Buick, Benz, Bentley", "Beamer, Bugatti, Benz"],
      ["His jeans are never what?", "Empty", "Tight", "Clean"],
      ["How many horses when he rolls by?", "More than 500", "More than 300", "More than 1,000"],
      ["What color is the new Bentley?", "Vanilla and cherry", "Black and gold", "Blue and silver"],
      ["Which hockey name does he throw on?", "Gretzky", "Lemieux", "Messier"],
      ["He's ready like which basketball star?", "Kobe Bryant", "Michael Jordan", "LeBron James"]
    ]] },
    { title: "Hands Up", id: "5lfzarWWy4A", cuts: [54.3], qs: [[
      ["They're going way past what time?", "A quarter to 3:00", "Midnight", "Half past 2:00"],
      ["Where is he good?", "The V.I.P.", "The parking lot", "The front row"],
      ["Everything ain't cool as a what?", "A fan", "A breeze", "Ice"],
      ["What do they pop like it's all free?", "Bottles", "Balloons", "Popcorn"],
      ["Before he leaves, he'll buy out the what?", "The bar", "The club", "The store"],
      ["What did they come to do?", "Party", "Fight", "Work"]
    ]] },
    { title: "On Fire", id: "7waWNvGO2C8", cuts: [60.4], qs: [[
      ["You are now rocking with the what?", "The best", "The rest", "The worst"],
      ["It's burning hot, we on what?", "Fire", "Ice", "Point"],
      ["How big are the chrome spokes?", "26-inch", "22-inch", "20-inch"],
      ["What ride are the spokes on?", "A Hummer", "A Bentley", "A Jeep"],
      ["How long will this heat last?", "The whole summer", "One night", "Till winter"],
      ["When you stop, what's still spinning?", "Your hair", "Your rims", "Your head"]
    ]] },
    { title: "I'm So Fly", id: "H7s3uEQESVc", cuts: [38.8, 138.0], qs: [[
      ["He's so fly and he got what?", "Money", "Time", "Style"],
      ["He can tell you're jealous by what?", "The look in your eye", "Your voice", "Your walk"],
      ["G-Unit's going straight to the what this year?", "The top", "The bank", "The bottom"],
      ["Lloyd Banks is fresh off the what?", "The gutter", "The plane", "The block"],
      ["He's too smooth to do what?", "Stutter", "Stumble", "Slip"],
      ["Who does he tell he loves before he leaves?", "His mother", "His girl", "His brother"]
    ], [
      ["Banks is cooler than the other side of the what?", "The pillow", "The fridge", "The moon"],
      ["You hear more oohs than who at the Rucker?", "Skip to My Lou", "Hot Sauce", "The Professor"],
      ["That bandana just looks like a what?", "A handkerchief", "A scarf", "A flag"],
      ["He ain't scared of nothing but who?", "Jesus", "His mother", "The cops"],
      ["He's eating in Rome, you're eating what?", "Ramen noodles", "Pizza", "Pasta"],
      ["He's got 40 clones, then look down, that's 40 what?", "Stones", "Rings", "Chains"]
    ]] },
    { title: "Help", locked: true, cuts: [], qs: [] },
    { title: "Any Girl", locked: true, cuts: [], qs: [] },
    { title: "Start It Up", locked: true, cuts: [], qs: [] },
    { title: "I Don't Deserve You", locked: true, cuts: [], qs: [] },
    { title: "Karma", locked: true, cuts: [], qs: [] }
  ]
};
