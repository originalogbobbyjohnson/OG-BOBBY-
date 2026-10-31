/* Drag-On: Soundview, the Bronx (raised in the Bronxdale Houses, now Sotomayor Houses). Ruff Ryders, "Opposite of H2O",
   "Flame on, Drag-On", "Spit These Bars", Hell and Back, YouTube channel Firemandrag. Fire is the whole theme. */
window.CFG = {
  name: "Drag-On", nameUpper: "DRAG-ON", short: "DRAG",
  hood: "Soundview", hoodUpper: "SOUNDVIEW", boro: "the Bronx",
  saveKey: "ogfan99dragon1",
  /* everybody starts a lightweight ("Lightweight but I give off pressure"), catches a spark, flames on, rides Double R,
     goes Hell and Back, becomes the Fireman, and ends up the Opposite of H2O */
  startRank: "Lightweight",
  ranks: ["Spark", "Flame On", "Double R", "Hell & Back", "Fireman"],
  topRank: "Opposite of H2O",
  point: "Flame", points: "Flames",
  rankRewards: {
    "Spark": { bongs: 5, line: "You caught a spark. Now keep it lit." },
    "Flame On": { bongs: 10, line: "Flame on, Drag-On, flame on." },
    "Double R": { bongs: 15, line: "Double R, right now. You ride with the crew." },
    "Hell & Back": { bongs: 20, line: "You been to Hell and back and you still spitting bars." },
    "Fireman": { bongs: 25, line: "You run all of Soundview." }
  },
  trophyArt: [
    /* Lightweight: a single feather */
    '<path d="M40 78q-2-30 14-62q6 20-6 44q-4 10-8 18z" fill="#e9e3d2" stroke="#6b6458" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M40 78q4-30 12-56" stroke="#6b6458" stroke-width="1.2" fill="none"/><path d="M46 50l-8-4M48 40l-7-4M44 60l-8-3" stroke="#6b6458" stroke-width="1"/>',
    /* Spark: a struck match with a little spark */
    '<rect x="37" y="34" width="6" height="46" rx="2" fill="#e8c38a" stroke="#7a5512" stroke-width="1.2"/>' +
    '<ellipse cx="40" cy="32" rx="6" ry="7" fill="#c4161c" stroke="#5a0a0a" stroke-width="1.2"/>' +
    '<path d="M40 22l2-8 2 8 8-2-6 6 6 6-8-2-2 8-2-8-8 2 6-6-6-6z" fill="#ffc23a" stroke="#a5650c" stroke-width="1"/>',
    /* Flame On: a chrome torch with a big flame */
    '<path d="M30 46h20l-6 34h-8z" fill="#c9d3dc" stroke="#4a5560" stroke-width="1.5" stroke-linejoin="round"/><rect x="28" y="42" width="24" height="6" rx="2" fill="#9aa6b2" stroke="#4a5560" stroke-width="1.2"/>' +
    '<path d="M40 42c-12 0-14-10-9-20c2 5 5 6 6 3c-1-8 4-14 9-18c-1 7 5 11 7 17c2 8-2 18-13 18z" fill="#ff5a1f" stroke="#7a1e0a" stroke-width="1.2"/>' +
    '<path d="M40 40c-6 0-7-5-5-10c1 2 3 3 4 2c0-5 3-7 5-9c0 5 4 7 4 11c1 4-2 6-8 6z" fill="#ffc23a"/>',
    /* Double R: two chrome Rs on a red shield */
    '<path d="M14 14h52v30q0 24-26 36q-26-12-26-36z" fill="#c4161c" stroke="#5a0a0a" stroke-width="1.8" stroke-linejoin="round"/>' +
    '<path d="M20 20h40v24q0 18-20 28q-20-10-20-28z" fill="none" stroke="#c9d3dc" stroke-width="1.5"/>' +
    '<text x="40" y="56" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="28" fill="#e9eef2" stroke="#2a2a2a" stroke-width="1">RR</text>',
    /* Hell & Back: a round-trip ticket stub, burnt at the edge */
    '<path d="M10 30h60v14a5 5 0 0 0 0 10v14H10V54a5 5 0 0 0 0-10z" fill="#ffe2a8" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M10 62q6-6 10 0t10 0t10 0" fill="none" stroke="#7a1e0a" stroke-width="2"/>' +
    '<text x="40" y="44" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="10" fill="#7a1e0a">HELL &amp;</text>' +
    '<text x="40" y="56" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="10" fill="#7a1e0a">BACK</text>' +
    '<path d="M24 22c-4-6 0-10 2-14c1 4 4 5 4 8c0 4-3 6-6 6z" fill="#ff5a1f"/><path d="M54 24c-4-6 0-10 2-14c1 4 4 5 4 8c0 4-3 6-6 6z" fill="#ff5a1f"/>',
    /* Fireman: a red fire helmet with a gold shield */
    '<path d="M8 64q32-12 64 0q-4 8-32 8t-32-8z" fill="#9a1212" stroke="#4a0606" stroke-width="1.5"/>' +
    '<path d="M18 62q-2-36 22-38q24 2 22 38z" fill="#c4161c" stroke="#4a0606" stroke-width="1.5"/>' +
    '<path d="M40 24v38M30 28q-4 16-2 34M50 28q4 16 2 34" stroke="#7a0a0a" stroke-width="1.2" fill="none"/>' +
    '<path d="M32 34h16v14q0 6-8 9q-8-3-8-9z" fill="#ffc23a" stroke="#7a5512" stroke-width="1.2"/>' +
    '<text x="40" y="47" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="8" fill="#7a1e0a">DRAG</text>',
    /* Opposite of H2O: a gold flame standing over a water drop that's turning to steam */
    '<path d="M40 80c-20 0-24-16-16-32c4 8 8 10 10 6c-2-14 6-24 14-32c-2 12 8 18 12 28c4 14-4 30-20 30z" fill="#ffc23a" stroke="#7a5512" stroke-width="1.8" stroke-linejoin="round"/>' +
    '<path d="M40 76c-10 0-12-8-8-16c2 4 4 5 5 3c-1-7 3-12 7-16c-1 6 4 9 6 14c2 6-1 15-10 15z" fill="#ff5a1f"/>' +
    '<path d="M64 24q-6 10 0 14q6-4 0-14z" fill="#7fc3ff" stroke="#1d5a9a" stroke-width="1" opacity=".8"/>' +
    '<path d="M60 18q2-4 0-8M66 16q2-4 0-8" stroke="#c9d3dc" stroke-width="1.2" fill="none"/>'
  ],
  clubTitle: "The Firehouse", clubTab: "FIRE",
  tags: ["RUFF RYDERS", "FLAME ON", "DRAG"],
  c1: "#ff5a1f", c2: "#ffc23a", c3: "#c9d3dc", bg: "#1a0906",
  /* Soundview skyline: Bronxdale's 7-story slabs, the el with the 6, the Bruckner deck, and flames licking up on the right */
  headerSvg: (function () {
    let s = '<rect x="0" y="54" width="400" height="10"/>';
    [[0, 70, 30], [78, 64, 22], [150, 72, 34]].forEach(b => { s += '<rect x="' + b[0] + '" y="' + b[2] + '" width="' + b[1] + '" height="' + (64 - b[2]) + '"/>';
      for (let r = 0; r < 4; r++) for (let c = 0; c < Math.floor(b[1] / 12); c++) s += '<rect x="' + (b[0] + 4 + c * 12) + '" y="' + (b[2] + 4 + r * 7) + '" width="5" height="4" fill="#1a0906"/>'; });
    s += '<rect x="226" y="38" width="174" height="5"/>';
    for (let x = 230; x < 400; x += 28) s += '<rect x="' + x + '" y="43" width="3" height="21"/>';
    s += '<rect x="240" y="28" width="90" height="10" rx="2"/>';
    [[350, 1.4], [374, 1], [390, 1.2]].forEach(f => { s += '<path transform="translate(' + f[0] + ' 38) scale(' + f[1] + ')" d="M0 0c-9 0-12-8-8-16c2 4 4 5 5 3c-1-7 3-12 7-16c-1 6 4 9 6 14c2 6-1 15-10 15z"/>'; });
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  /* no Instagram/TikTok handle could be verified; his official videos are on the Firemandrag YouTube channel (handle not confirmed) */
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 6 to Morrison Av–Soundview. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "bronxdale", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "court" },
    { scene: "silos", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "rideout", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO SOUNDVIEW", x: "Soundview Av and Watson Av, by the Bronxdale Houses. This is Drag-On's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Peek a Boo", id: "BtPJ8PQrPpw", cuts: [62.2, 123.3, 154.2], qs: [
      [
        ["At the start, where does he say he doesn't even feel like going?", "In the club", "To the studio", "To the mall"],
        ["He'll come through and show what?", "Face", "Love", "Money"],
        ["What game does he say he's playing?", "Peek-a-boo", "Hide and seek", "Tag"],
        ["\"Matter of fact\", he says he doesn't see who?", "You", "The haters", "The DJ"],
        ["What car does he think looked good in blue?", "The Lambo", "The Benz", "The Jeep"],
        ["What color does he say the Lambo looked good in?", "Blue", "Red", "Black"],
        ["\"I don't know him and I don't wanna...\" what?", "Know", "Go", "Show"]
      ],
      [
        ["Once he puts that word out, what are they gonna do?", "See", "Run", "Talk"],
        ["They say he's moving like a what?", "An animal", "A rocket", "A ghost"],
        ["He's about to show them how who moves?", "The fandom", "The city", "The block"],
        ["What is he gonna let it do?", "Play", "Ride", "Drop"],
        ["How fast does he say these people talk?", "A mile a minute", "A word an hour", "In slow motion"],
        ["They hope he opens up his what, so they can pile in?", "Door", "Wallet", "Studio"],
        ["\"No disrespect, but it's a...\" what?", "Pleasure meeting you", "Long night", "Done deal"]
      ],
      [
        ["He comes through, then leaves like what?", "He never did", "He was late", "He was told"],
        ["What car does he let them see?", "The Wraith", "The Bentley", "The Maybach"],
        ["After the face, he lets them see the back of the what?", "Plates", "Club", "Line"],
        ["Who will he catch later?", "The haters", "The DJ", "The crew"],
        ["Why does he have to go?", "He's late", "He's tired", "He's bored"],
        ["\"Nah, I don't want to talk to...\" who?", "Nobody", "The bouncer", "The press"],
        ["At the end, what color does he still think the Lambo looked good in?", "Blue", "Gold", "White"]
      ]
    ] },
    { title: "Patiently Waiting (Freestyle)", id: "oyQ8zUencSE", cuts: [29.9, 57.4, 90.1], qs: [
      [
        ["Where does he say he's never been?", "To the circus", "To Paris", "To the moon"],
        ["He never dealt with a what?", "Clown", "Snake", "Fake"],
        ["What book does he say he didn't know before, but knows now?", "The Bible", "The dictionary", "The phone book"],
        ["When he had beef, how many of them helped?", "Not one", "All of them", "Just two"],
        ["He says he never lost the what?", "Battle", "Bet", "Race"]
      ],
      [
        ["\"Say we battle, but I...\" what?", "Win", "Quit", "Lose"],
        ["He never switched on his crew, even when they did what?", "Switched on him", "Left town", "Got rich"],
        ["How does he say he never takes it?", "Personal", "Easy", "Back"],
        ["How does he write his bars?", "Vertical", "Backwards", "In pencil"],
        ["His bars could feel like the what, when God sent that miracle?", "Manna", "Rain", "Thunder"],
        ["If that went over your head, what does he say?", "He never meant it to", "Rewind it", "Read it again"],
        ["If you believe in what, he already knows what's next?", "Predestined", "Luck", "Karma"]
      ],
      [
        ["What does he say he never said he is?", "The best", "The king", "The worst"],
        ["He never said he's the best, he just never said who was?", "You", "Them", "Nobody"],
        ["What tribe does he say he's from?", "The tribe of Judah", "The tribe of Levi", "The tribe of Dan"],
        ["What does he say he never does to rappers?", "Imitate them", "Help them", "Battle them"],
        ["Why does he say he can't tell who's who?", "They all sound alike", "They all dress alike", "It's too dark"]
      ]
    ] },
    { title: "Spit These Bars", id: "dqSdeuIYkM0", cuts: [62.2, 98.6, 162.5], qs: [
      [
        ["\"We ain't playin' wit...\" who?", "Y'all", "Nobody", "The DJ"],
        ["He spits these bars to make your head do what?", "Shake", "Spin", "Nod off"],
        ["He says he's the talk of the what?", "Town", "Block", "Radio"],
        ["How fast does he want to see them touch on the dash?", "160", "100", "60"],
        ["What does his Z look like when it's fast?", "Pretty", "Scary", "Brand new"],
        ["How much does he bet that he'll juice the city before he passes?", "50", "20", "100"],
        ["If you wanna catch fire, better step on the what?", "Gas", "Brakes", "Floor"]
      ],
      [
        ["He calls himself the opposite of what?", "H2O", "Ice", "Cold"],
        ["Y'all wanna be a what when the fire's on?", "Hero", "Fireman", "Star"],
        ["In case of a fire, what should you never take?", "The elevator", "The stairs", "The train"],
        ["How many flights does he say to walk?", "Two", "Ten", "Four"],
        ["Hold your breath and take the what?", "Steps", "Exit", "Window"],
        ["Doggies either burn to the bone, or leave that what alone?", "Bone", "Block", "Phone"],
        ["In the hook: ladies, mamis and who else run this?", "Ballers", "Rappers", "Drivers"]
      ],
      [
        ["He's fire, so he speaks with what?", "Heat", "Ice", "Smoke"],
        ["Even if he's bare toed, you see the what?", "Stripe", "Shine", "Check"],
        ["His girl has a face out of a what?", "Magazine", "Movie", "Painting"],
        ["Which magazine does he name?", "Ebony", "Vibe", "The Source"],
        ["He's lightweight but he gives off what?", "Pressure", "Power", "Sparks"],
        ["What does he say he never chases?", "Treasures", "Girls", "Trains"],
        ["Near the end he says he's got better double what?", "R", "D", "O"]
      ]
    ] },
    { title: "Down Bottom", locked: true, cuts: [], qs: [] },
    { title: "Put Your Drinks Down", locked: true, cuts: [], qs: [] }
  ]
};
