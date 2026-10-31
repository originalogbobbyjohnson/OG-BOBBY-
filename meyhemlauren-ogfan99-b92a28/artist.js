/* Meyhem Lauren: Queens. Smart Crew (with Action Bronson), the Lo-Life Polo heads, F*ck That's Delicious food runs,
   Mandatory Brunch Meetings, Raw Cashmere, Silk Pyramids, Piatto D'oro, Glass with Harry Fraud, the DJ Muggs records. */
window.CFG = {
  name: "Meyhem Lauren", nameUpper: "MEYHEM LAUREN", short: "MEYHEM",
  hood: "Queens", hoodUpper: "QUEENS", boro: "Queens",
  saveKey: "ogfan99meyhemlauren1",
  /* everybody starts as a Mandated Participant (his song title) and dresses up the ladder to the golden plate */
  startRank: "Mandated Participant",
  ranks: ["Smart Crew", "Raw Cashmere", "Silk Pyramids"],
  topRank: "Piatto D’oro",
  point: "Gem", points: "Gems",
  rankRewards: {
    "Smart Crew": { bongs: 5, line: "Welcome to the Smart Crew. Come through fresh every time." },
    "Raw Cashmere": { bongs: 10, line: "Raw cashmere on. Respect the fly." },
    "Silk Pyramids": { bongs: 25, line: "You run all of Queens." }
  },
  trophyArt: [
    /* Mandated Participant: a brunch name tag on a clipboard */
    '<rect x="16" y="18" width="48" height="60" rx="3" fill="#a8743a" stroke="#5a3a14" stroke-width="1.5"/>' +
    '<rect x="30" y="14" width="20" height="8" rx="2" fill="#c9d1d9" stroke="#6b7280" stroke-width="1"/>' +
    '<rect x="21" y="26" width="38" height="46" fill="#f8f4ea"/>' +
    '<rect x="21" y="26" width="38" height="10" fill="#c0394b"/>' +
    '<text x="40" y="34" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" letter-spacing="1" fill="#fff">HELLO</text>' +
    '<path d="M26 48h28M26 56h22M26 64h26" stroke="#9aa4b0" stroke-width="1.5"/>',
    /* Smart Crew: a gold crew chain with an SC plate */
    '<path d="M18 16q22 46 44 0" fill="none" stroke="#e3be6a" stroke-width="4" stroke-dasharray="4 2"/>' +
    '<rect x="24" y="46" width="32" height="26" rx="4" fill="#ffcc33" stroke="#7a5512" stroke-width="1.5"/>' +
    '<text x="40" y="66" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="16" fill="#5a3a08">SC</text>',
    /* Raw Cashmere: a folded cream sweater with a gold tag */
    '<path d="M14 40l12-10h28l12 10v8l-10 0v24H24V48H14z" fill="#f3e6c8" stroke="#8a7a5a" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M32 30q8 8 16 0" fill="none" stroke="#8a7a5a" stroke-width="1.5"/>' +
    '<path d="M24 56h32M24 62h32M24 68h32" stroke="#d9c8a4" stroke-width="1.2"/>' +
    '<rect x="34" y="40" width="12" height="6" rx="1" fill="#e3be6a"/>',
    /* Silk Pyramids: a pyramid draped in blue silk with a gold cap */
    '<path d="M40 14L72 76H8z" fill="#5b8fd8" stroke="#1d3a6a" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M40 14L52 76M40 14L28 76" stroke="#8fb6ee" stroke-width="1.2"/>' +
    '<path d="M12 70q14-8 28 0t28 0" fill="none" stroke="#c0394b" stroke-width="3"/>' +
    '<path d="M40 14l-6 12h12z" fill="#ffcc33" stroke="#7a5512" stroke-width="1"/>',
    /* Piatto D'oro: a golden plate of pasta with a fork */
    '<ellipse cx="40" cy="58" rx="34" ry="14" fill="#ffcc33" stroke="#7a5512" stroke-width="1.5"/>' +
    '<ellipse cx="40" cy="56" rx="24" ry="9" fill="#ffe28a"/>' +
    '<path d="M24 54q8-8 16 0t16 0M26 58q7-6 14 0t14 0" stroke="#f0c050" stroke-width="2.5" fill="none"/>' +
    '<circle cx="34" cy="52" r="3" fill="#c0394b"/><circle cx="46" cy="54" r="3" fill="#c0394b"/><path d="M40 48l3-3" stroke="#2f8a5a" stroke-width="2"/>' +
    '<path d="M62 10v26M58 10v10M66 10v10M58 20q4 4 8 0" stroke="#e8e8e8" stroke-width="2" fill="none" stroke-linecap="round"/>' +
    '<path d="M12 18l2 4 4 .5-3 3 .8 4-3.8-2-3.8 2 .8-4-3-3 4-.5z" fill="#fff"/>'
  ],
  clubTitle: "The Brunch Meeting", clubTab: "BRUNCH",
  tags: ["SMART CREW", "RESPECT THE FLY", "MEYHEM"],
  c1: "#e3be6a", c2: "#5b8fd8", c3: "#c0394b", bg: "#160f1c",
  /* Station Square's clock tower and Tudor gables, the Forest Hills Stadium bowl, the 7 el */
  headerSvg: (function () {
    let s = '<rect x="0" y="52" width="400" height="12"/>';
    /* Tudor gables + clock tower */
    [[0, 30], [36, 26], [100, 30]].forEach(g => { s += '<path d="M' + g[0] + ' ' + (g[1] + 10) + 'l' + 16 + '-' + 14 + 'l16 14v24h-32z"/>'; });
    s += '<path d="M64 12l12-12 12 12z"/><rect x="66" y="12" width="20" height="52"/><circle cx="76" cy="22" r="5" fill="#160f1c"/>';
    /* the stadium bowl */
    s += '<path d="M150 64V36Q220 16 290 36v28z"/>';
    for (let x = 160; x < 284; x += 12) s += '<rect x="' + x + '" y="34" width="5" height="6" fill="#160f1c"/>';
    /* the 7 el with a train */
    s += '<rect x="296" y="40" width="104" height="4"/>';
    for (let x = 300; x < 400; x += 22) s += '<rect x="' + x + '" y="44" width="3" height="20"/>';
    s += '<rect x="304" y="28" width="90" height="12" rx="3"/>';
    for (let x = 308; x < 388; x += 12) s += '<rect x="' + x + '" y="31" width="7" height="5" fill="#160f1c"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "X", handle: "@MeyhemLauren", url: "https://x.com/MeyhemLauren" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the E, F, M or R to Forest Hills–71 Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "square", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "stadium", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "crowd" },
    { scene: "roosevelt", t: "CLIMB THE RANKS", x: "Everybody starts as a Mandated Participant. Clear a row to rank up: Smart Crew, Raw Cashmere, Silk Pyramids. Beat the 99 Challenge to become Piatto D’oro.", sfx: "espresso" },
    { scene: "corner", t: "WELCOME TO QUEENS", x: "Queens Blvd and 71 Av. This is Meyhem Lauren's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Money In My Pocket", id: "aDRW8aO0LRo", cuts: [56.2], qs: [[
      ["Where do other people buy their clothes?", "Off the rack", "Online", "Secondhand"],
      ["Finish: \"You never got suited, never got ___\"", "Fitted", "Paid", "Signed"],
      ["Shirtless with what on?", "Shades", "Chains", "Gloves"],
      ["He keeps his wrist wrapped like he's what?", "Sparring", "Bowling", "Injured"],
      ["What kind of car is he whipping?", "Something foreign", "A minivan", "A taxi"]
    ]] },
    { title: "Ray Lewis", id: "De64aP0QGwY", start: 42.5, cuts: [77.0], qs: [[
      ["What does he tell you to respect?", "The fly", "The game", "The hood"],
      ["What city do his words capture?", "New York City", "Philadelphia", "Atlanta"],
      ["What doesn't he need to flip cakes?", "A spatula", "A whisk", "A pan"],
      ["Your soap opera's in what?", "Syndication", "Rehearsal", "Cancellation"],
      ["You hit the bottom first to reach the what?", "Top", "Bank", "Stage"],
      ["What does he call that?", "Innovation", "Motivation", "Dedication"]
    ]] },
    { title: "Badmon Ting", id: "mBgMVh4ub-E", start: 21.8, cuts: [55.9], qs: [[
      ["What kind of kicks is he wearing?", "Gucci", "Prada", "Nike"],
      ["What fish does he have grilled?", "Swordfish", "Salmon", "Snapper"],
      ["What relish goes with it?", "Pineapple", "Mango", "Pickle"],
      ["He flies like what?", "Propellers", "Pigeons", "Kites"],
      ["What is he only worried about?", "New checks", "Old friends", "The weather"],
      ["Where does he touch down?", "Philly", "Boston", "Miami"]
    ]] },
    { title: "Got the Fever", id: "gg5cJu1Zcws", start: 36.5, cuts: [66.0, 130.0], qs: [[
      ["Which squad of cops does he mention?", "Vandal Squad", "Bomb Squad", "Night Patrol"],
      ["What car were the cops in?", "LeSabre", "Impala", "Taurus"],
      ["Writing their name, what are they looking for?", "Fame", "Money", "Food"],
      ["Sometimes you get locked, it's just part of the what?", "Game", "Job", "Deal"],
      ["\"First bar to the back of the ___\"", "Train", "Class", "Line"],
      ["What does he have on the brain?", "Graffiti", "Basketball", "Money"]
    ], [
      ["What can he still smell in the air?", "The paint", "The pizza", "The rain"],
      ["Which train did he ride way back?", "The 7", "The A", "The L"],
      ["Triple outline, taking his time to look what?", "Crisp", "Messy", "Faded"],
      ["In New York, we make walls do what?", "Talk", "Fall", "Shake"],
      ["What's in his sneaker?", "A fat cap", "A dollar", "A key"],
      ["What does he say he's got?", "The fever", "The flu", "The blues"]
    ]] },
    { title: "Deadstock Pasta", id: "Cr9MpYyuAcQ", cuts: [38.5, 92.6], qs: [[
      ["What does the intro tell you to make?", "Money", "Moves", "Noise"],
      ["\"All hail the illest in the ___\"", "Game", "Land", "Booth"],
      ["If he ever went broke, he could get rich off his what?", "Name", "Jewelry", "Cars"],
      ["He's rolling with the what?", "Punches", "Dice", "Times"],
      ["What is he never going to do?", "Complain", "Celebrate", "Apologize"],
      ["Why aren't you alike, he says?", "You never put in pain", "You never went outside", "You talk too much"]
    ], [
      ["The coach would bench him for excessive what?", "Traveling", "Fouling", "Talking"],
      ["Where does he need to lose a little weight?", "Around the abdomen", "In his arms", "In his legs"],
      ["Other than that minor flaw, he's very what?", "Ravishing", "Humble", "Quiet"],
      ["What does he backflip off of?", "The yacht", "The roof", "The pier"],
      ["Who does he keep a good timepiece like?", "Marky Mark", "Flavor Flav", "Mr. T"],
      ["Where's the half a million at the airport?", "His army jacket lining", "A shoe box", "His sock"]
    ]] },
    { title: "Venetian Loafers (ft. Conway)", locked: true, cuts: [], qs: [] },
    { title: "Blue Chinese (with DJ Muggs)", locked: true, cuts: [], qs: [] },
    { title: "Camel Crush (with DJ Muggs)", locked: true, cuts: [], qs: [] },
    { title: "Trigger Point Therapy (ft. Westside Gunn)", locked: true, cuts: [], qs: [] }
  ]
};
