window.CFG = {
  name: "Marlon Craft", nameUpper: "MARLON CRAFT", short: "CRAFT", hood: "Hell's Kitchen", hoodUpper: "HELL'S KITCHEN", boro: "Manhattan",
  saveKey: "ogfan99marloncraft1",
  /* "he looked like nothing" and the three "A Dollar in Quarters" EPs, Homecourt Advantage, The Tunnel's End */
  startRank: "Looked Like Nothing", ranks: ["25 Cents", "50 Cents", "75 Cents", "A Dollar in Quarters", "Homecourt Advantage"], topRank: "The Tunnel's End",
  point: "Quarter", points: "Quarters",
  rankRewards: {
    "25 Cents": { bongs: 5, line: "One quarter in. Keep workin'." },
    "50 Cents": { bongs: 10, line: "Halfway to a dollar." },
    "75 Cents": { bongs: 15, line: "Three quarters there. Do the work." },
    "A Dollar in Quarters": { bongs: 20, line: "A dollar in quarters, every one earned." },
    "Homecourt Advantage": { bongs: 25, line: "You run all of Hell's Kitchen." }
  },
  trophyArt: [
    /* Looked Like Nothing: a blank spiral notebook and a pencil */
    '<rect x="20" y="24" width="40" height="52" rx="3" fill="#f3ead8" stroke="#8a7f6a" stroke-width="2"/>' +
    '<path d="M26 36h28M26 44h28M26 52h28M26 60h28" stroke="#b9c9e0" stroke-width="1"/>' +
    '<path d="M24 22v6M30 22v6M36 22v6M42 22v6M48 22v6M54 22v6" stroke="#5b5b60" stroke-width="2"/>' +
    '<path d="M50 72l14-30 4 2-14 30z" fill="#ffb347" stroke="#8a5a12" stroke-width="1"/><path d="M50 72l2-5 2 1z" fill="#2a2a2e"/>',
    /* 25 Cents: one silver quarter */
    '<circle cx="40" cy="48" r="24" fill="#c9ced6" stroke="#6b7078" stroke-width="3"/><circle cx="40" cy="48" r="18" fill="none" stroke="#9aa0a8" stroke-width="1.5" stroke-dasharray="2 2"/>' +
    '<text x="40" y="55" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="18" fill="#4a4f55">25&#162;</text>',
    /* 50 Cents: two quarters stacked */
    '<ellipse cx="40" cy="66" rx="24" ry="8" fill="#9aa0a8" stroke="#6b7078" stroke-width="2"/><rect x="16" y="58" width="48" height="8" fill="#b4bac2"/>' +
    '<ellipse cx="40" cy="58" rx="24" ry="8" fill="#c9ced6" stroke="#6b7078" stroke-width="2"/><rect x="16" y="50" width="48" height="8" fill="#b4bac2"/>' +
    '<ellipse cx="40" cy="50" rx="24" ry="8" fill="#dfe3e8" stroke="#6b7078" stroke-width="2"/><text x="40" y="54" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="9" fill="#4a4f55">50&#162;</text>',
    /* 75 Cents: three quarters stacked tall */
    '<rect x="16" y="40" width="48" height="30" fill="#b4bac2" stroke="#6b7078" stroke-width="2"/><path d="M16 50h48M16 60h48" stroke="#6b7078" stroke-width="1.5"/>' +
    '<ellipse cx="40" cy="70" rx="24" ry="8" fill="#9aa0a8" stroke="#6b7078" stroke-width="2"/><ellipse cx="40" cy="40" rx="24" ry="8" fill="#dfe3e8" stroke="#6b7078" stroke-width="2"/>' +
    '<text x="40" y="44" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="9" fill="#4a4f55">75&#162;</text>',
    /* A Dollar in Quarters: a green dollar bill wrapped round a roll of quarters */
    '<rect x="10" y="30" width="60" height="30" rx="2" fill="#8fbf7a" stroke="#3d6b33" stroke-width="2"/><rect x="14" y="34" width="52" height="22" fill="none" stroke="#3d6b33" stroke-width="1"/>' +
    '<circle cx="40" cy="45" r="8" fill="#b9d8a8" stroke="#3d6b33" stroke-width="1"/><text x="40" y="49" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="11" fill="#3d6b33">1</text>' +
    '<rect x="18" y="62" width="44" height="14" rx="7" fill="#ffb347" stroke="#8a5a12" stroke-width="2"/><text x="40" y="73" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" letter-spacing=".3" fill="#5a3a08">QUARTERS</text>',
    /* Homecourt Advantage: a basketball on the hardwood */
    '<rect x="8" y="64" width="64" height="12" fill="#c98a4a"/><path d="M8 70h64M24 64v12M44 64v12M60 64v12" stroke="#9a6430" stroke-width="1"/>' +
    '<circle cx="40" cy="40" r="22" fill="#e8742a" stroke="#5a2a0a" stroke-width="2"/><path d="M18 40h44M40 18v44M24 24q12 16 0 32M56 24q-12 16 0 32" fill="none" stroke="#5a2a0a" stroke-width="2"/>',
    /* The Tunnel's End: a gold mic in the light at the mouth of the tunnel */
    '<path d="M6 78v-34q34-44 68 0v34z" fill="#2a2d33" stroke="#14161a" stroke-width="2"/><path d="M18 78v-28q22-30 44 0v28z" fill="#ffe7a8"/>' +
    '<circle cx="40" cy="44" r="9" fill="#ffd23f" stroke="#8a6a12" stroke-width="2"/><path d="M36 53h8l-2 22h-4z" fill="#c9a22a" stroke="#8a6a12" stroke-width="1.5"/>'
  ],
  clubTitle: "The Center", clubTab: "CENTER",
  tags: ["OUR.S", "DO THE WORK", "CRAFT"],
  c1: "#ffb347", c2: "#4fd1c5", c3: "#f3ead8", bg: "#1d130c",
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="52" width="400" height="12"/>';
    [[0, 34, 30], [36, 26, 22], [64, 38, 30], [250, 30, 26], [282, 20, 18], [306, 36, 34], [346, 26, 24], [376, 40, 24]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/>'; });
    /* the two Manhattan Plaza towers */
    s += '<rect x="110" y="4" width="34" height="60"/><rect x="156" y="4" width="34" height="60"/>';
    /* the carrier on the river */
    return s + '<path d="M196 50h52l-4 8h-44z"/><rect x="226" y="40" width="6" height="10"/>';
  })() + '</g>',
  socials: [
    { name: "Instagram", handle: "@marloncraft", url: "https://www.instagram.com/marloncraft/" },
    { name: "YouTube", handle: "Marlon Craft", url: "https://www.youtube.com/channel/UCOdlphdPDxYyFw6to-vbuEA" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the A to 42 St-Port Authority. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "plaza", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "court" },
    { scene: "intrepid", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "theatre", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO HELL'S KITCHEN", x: "W 43 St and 9 Av. This is Marlon Craft's game.", sfx: "spray" }
  ],
  episodes: [
  /* Timing comes from the captions on Marlon Craft's own YouTube uploads. Each pool only asks about lines heard since the last stop. Pitch demo: 3 of 5 songs playable. */
  { title: "Back To Jame-o", id: "_i5UUwbqMaQ", cuts: [48.5, 76.5, 102.5], qs: [
    [
      ["What becomes a way of life?", "A phase", "A habit", "A job"],
      ["He's evading what?", "Hype", "Fame", "Drama"],
      ["Which urges always make you pay a price?", "The cheapest", "The biggest", "The oldest"],
      ["Only one love and what?", "Respect", "Peace", "Loyalty"],
      ["If she knew him in his what?", "20s", "Teens", "30s"],
      ["When they see you in the light, they might what?", "Pose", "Run", "Wave"]
    ],
    [
      ["He still got who nowadays?", "Bros", "Fans", "Cousins"],
      ["It ain't a what, though?", "Cult", "Game", "Club"],
      ["Words are worth more than what?", "Pictures", "Money", "Gold"],
      ["When everything digital turns off, then who is what?", "You", "Me", "Them"],
      ["No imagination, just a thin what?", "Vision", "Line", "Wallet"],
      ["If he can tell you who he is at the end, he what?", "Won", "Lost", "Left"],
      ["How are you so sure, when we've just what?", "Begun", "Arrived", "Finished"]
    ],
    [
      ["He asks you to dig a little what?", "Deeper", "Faster", "Longer"],
      ["You ain't set in what?", "Stone", "Time", "Place"],
      ["He doesn't live up in the house, but he's at the what?", "Table", "Door", "Window"],
      ["He's glad he gets to do what sometimes?", "Leave", "Sing", "Rest"],
      ["Because it's mad what?", "Unstable", "Loud", "Crowded"],
      ["That's just him being what?", "Real", "Funny", "Humble"],
      ["It ain't about how far you what?", "Get", "Run", "Drive"]
    ]
  ] },
  { title: "Lonely", id: "GceApY_-qww", cuts: [63.3, 105.5, 179.6], qs: [
    [
      ["He's been trying to fill a what?", "Void", "Cup", "Room"],
      ["His eyes are what, trying to fill the empty space?", "Closed", "Open", "Tired"],
      ["He's making a map of places he's never what?", "Gone", "Seen", "Lived"],
      ["He washes his head with this human what?", "Condition", "Nature", "Race"],
      ["But he doesn't feel what?", "Cleansed", "Tired", "Free"],
      ["He's been avoiding time with who?", "Himself", "His friends", "His family"],
      ["Truth is that he needs a what?", "Home", "Break", "Job"]
    ],
    [
      ["He's scared of what he wants to what?", "Be", "Say", "Buy"],
      ["If he can't tell himself the whole truth, then who must?", "The lyrics", "His mom", "The fans"],
      ["Most people would rather use him than do what?", "Know him", "Pay him", "Hear him"],
      ["He's got it good but be feeling what?", "Bad", "Rich", "Cold"],
      ["He says he ain't what a lot, but he does?", "Judging", "Talking", "Lying"],
      ["He wishes he was more what?", "Easygoing", "Famous", "Patient"],
      ["Without this critical what?", "Lens", "Eye", "Voice"]
    ],
    [
      ["He knows they're out there for who?", "Him", "Us", "Them"],
      ["He remembers when it wasn't what to feel lonely?", "Cool", "Sad", "Easy"],
      ["Now feeling lonely is a what?", "Style", "Crime", "Secret"],
      ["This ain't a sad song, and it ain't a what song?", "Mad", "Love", "Party"],
      ["What level is the stuff he's been writing lately?", "Next-level", "Entry-level", "Sea level"],
      ["Does he need his loneliness to do what?", "Shine", "Sleep", "Write"],
      ["For now he's gotta go. He's late to meet who?", "The homies", "His mom", "The label"]
    ]
  ] },
  { title: "The Neighborhood", id: "Ctuw5-sCFNU", cuts: [73.9, 116.6, 182], qs: [
    [
      ["What killed the neighborhood?", "The internet", "The rent", "The city"],
      ["He feels the weight of all the ashes on his what?", "Shoulder", "Chest", "Back"],
      ["The night is what?", "Chilly", "Quiet", "Long"],
      ["The truth is in the back; he's the what?", "Chauffeur", "Passenger", "Mechanic"],
      ["He never learned to drive a what?", "New Yorker", "Cadillac", "Taxi"],
      ["The rent is what?", "Unbearable", "Due", "Cheap"],
      ["Everything is accessible, but truth is what?", "Unavailable", "Expensive", "Hidden"]
    ],
    [
      ["He's in the eye of the what?", "Tornado", "Storm", "Hurricane"],
      ["His life is lucky and he wonders what the what is?", "Price", "Plan", "Point"],
      ["He spends his days in fight or what?", "Flight", "Rest", "Freeze"],
      ["His nervous system is in what?", "Crisis", "Order", "Motion"],
      ["He's feeling dizzy as he does what?", "Types this", "Drives", "Runs"],
      ["The fire inside his chest is less as he gets what?", "Older", "Richer", "Famous"],
      ["Who can teach him when the neighborhood is what?", "Over", "Gone", "Sold"]
    ],
    [
      ["It was about the money back when the world wrote what?", "Green", "Checks", "Letters"],
      ["Now wealth is just a what?", "Smoke screen", "Big dream", "Bank loan"],
      ["The gentrified look just like who?", "Him", "Them", "Tourists"],
      ["So what's his what in the neighborhood?", "Role", "Home", "Spot"],
      ["He holds up his what?", "Phone", "Fist", "Sign"],
      ["And asks: is the what good?", "Angle", "Light", "Sound"],
      ["The internet took the what from the neighborhood?", "Home", "Heart", "Kids"]
    ]
  ] },
  { title: "Family", locked: true, cuts: [], qs: [] },
  { title: "Analog Man", locked: true, cuts: [], qs: [] }
  ]
};
