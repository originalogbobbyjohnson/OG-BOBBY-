window.CFG = {
  name: "Ron Browz", nameUpper: "RON BROWZ", short: "BROWZ",
  hood: "Harlem", hoodUpper: "HARLEM", boro: "Manhattan",
  saveKey: "ogfan99ronbrowz1",
  /* "Shorty come here, I don't know why you stallin'" (Jumping); "Gimme 16 bars and you know I tear it up" (Pop Champagne);
     "V.I.P. and everybody ballin'" and "None of y'all dudes here is no match" (Jumping); Ether Boy = his producer tag, from producing "Ether";
     "Tell 'em Ron Browz here, hottest in America" (Pop Champagne / Jumping); "Ya ain't gotta worry, Harlem World" (Jumping) */
  startRank: "Stallin'", ranks: ["16 Bars", "V.I.P.", "No Match", "Ether Boy", "Hottest in America"], topRank: "Harlem World",
  point: "Beat", points: "Beats",
  rankRewards: {
    "16 Bars": { bongs: 5, line: "Gimme 16 bars, you know you tear it up." },
    "V.I.P.": { bongs: 10, line: "V.I.P. and everybody ballin'." },
    "No Match": { bongs: 15, line: "None of y'all dudes here is no match." },
    "Ether Boy": { bongs: 20, line: "Say it like the producer tag: Ether Boy!" },
    "Hottest in America": { bongs: 25, line: "You run all of Harlem." }
  },
  trophyArt: [
    /* Stallin': a grey hourglass, still waiting */
    '<path d="M22 14h36M22 76h36" stroke="#6e6e72" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M26 16q0 20 14 29q-14 9-14 29h28q0-20-14-29q14-9 14-29z" fill="#b9bcc2" stroke="#4a4a4e" stroke-width="2"/>' +
    '<path d="M32 66q8-8 16 0z" fill="#8a8a8e"/><path d="M40 45v12" stroke="#8a8a8e" stroke-width="2"/>',
    /* 16 Bars: a gold notepad with sixteen-bar lines */
    '<rect x="18" y="14" width="44" height="62" rx="3" fill="#fff6d6" stroke="#8a5a12" stroke-width="2.5"/><rect x="18" y="14" width="44" height="9" fill="#ffd34d"/>' +
    (function () { let s = ""; for (let i = 0; i < 8; i++) s += '<path d="M24 ' + (30 + i * 5.6) + 'h32" stroke="#b47cff" stroke-width="1.4"/>'; return s; })() +
    '<text x="40" y="21.5" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="8" fill="#5a3a0a">16 BARS</text>',
    /* V.I.P.: a purple velvet rope between two gold posts */
    '<rect x="14" y="30" width="7" height="46" rx="2" fill="#ffd34d" stroke="#8a5a12" stroke-width="1.5"/><rect x="59" y="30" width="7" height="46" rx="2" fill="#ffd34d" stroke="#8a5a12" stroke-width="1.5"/>' +
    '<circle cx="17.5" cy="28" r="5" fill="#ffd34d" stroke="#8a5a12" stroke-width="1.5"/><circle cx="62.5" cy="28" r="5" fill="#ffd34d" stroke="#8a5a12" stroke-width="1.5"/>' +
    '<path d="M20 36q20 22 40 0" fill="none" stroke="#7a2fbf" stroke-width="5" stroke-linecap="round"/>' +
    '<rect x="26" y="8" width="28" height="13" rx="3" fill="#b47cff" stroke="#3a1a5a" stroke-width="1.5"/><text x="40" y="18" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="9" fill="#fff">V.I.P.</text>',
    /* No Match: a gold number-one medal on a pink ribbon */
    '<path d="M28 10l12 26 12-26z" fill="#ff6b9a" stroke="#7a1f3f" stroke-width="2"/>' +
    '<circle cx="40" cy="52" r="22" fill="#ffd34d" stroke="#8a5a12" stroke-width="2.5"/><circle cx="40" cy="52" r="16" fill="none" stroke="#e0a82e" stroke-width="2"/>' +
    '<text x="40" y="61" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="#5a3a0a">1</text>',
    /* Ether Boy: a beat pad glowing purple */
    '<rect x="12" y="24" width="56" height="52" rx="5" fill="#1d1a26" stroke="#b47cff" stroke-width="2.5"/>' +
    (function () { let s = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) s += '<rect x="' + (17 + c * 12.5) + '" y="' + (40 + r * 11.5) + '" width="10" height="9" rx="1.5" fill="' + ((r + c) % 3 ? "#3a3f47" : "#b47cff") + '"/>'; return s; })() +
    '<rect x="17" y="29" width="30" height="7" rx="1" fill="#9cf2d8"/><circle cx="56" cy="32" r="4" fill="#ffd34d"/>' +
    '<text x="40" y="18" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" fill="#b47cff">ETHER</text>',
    /* Hottest in America: a gold mic with a flame on top */
    '<path d="M40 6q14 14 6 26q4-10-6-14q-10 6-4 16q-10-14 4-28z" fill="#ff6b3a"/><path d="M40 16q6 8 2 14q-2-6-6-6q-2 4 4 8q-8-6 0-16z" fill="#ffd34d"/>' +
    '<rect x="30" y="30" width="20" height="30" rx="10" fill="#ffd34d" stroke="#8a5a12" stroke-width="2.5"/><path d="M33 40h14M33 46h14M33 52h14" stroke="#8a5a12" stroke-width="1.2"/>' +
    '<path d="M40 60v10M30 74h20" stroke="#8a5a12" stroke-width="4" stroke-linecap="round"/>',
    /* Harlem World: a gold globe wearing a purple crown */
    '<circle cx="40" cy="52" r="22" fill="#3d7fd6" stroke="#8a5a12" stroke-width="2.5"/><path d="M18 52h44M40 30v44M24 38q16 8 32 0M24 66q16-8 32 0" stroke="#ffd34d" stroke-width="1.5" fill="none"/>' +
    '<path d="M24 30l-2-20 9 8 9-14 9 14 9-8-2 20z" fill="#b47cff" stroke="#3a1a5a" stroke-width="2"/><circle cx="40" cy="22" r="2.6" fill="#ff6b9a"/>'
  ],
  clubTitle: "The Booth", clubTab: "BOOTH",
  tags: ["HARLEM WORLD", "JUMPIN", "ETHER BOY"],
  c1: "#ffd34d", c2: "#b47cff", c3: "#ff6b9a", bg: "#160f20",
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    /* Harlem rowhouses */
    [[0, 30, 34], [36, 24, 30], [68, 34, 40], [110, 28, 26]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/>'; });
    /* Shepard Hall on the hill: wings, central tower, pinnacles */
    s += '<rect x="146" y="34" width="108" height="24"/><rect x="186" y="12" width="28" height="46"/>';
    [150, 170, 230, 250].forEach(x => { s += '<path d="M' + (x - 3) + ' 34v-10l3-6 3 6v10z"/>'; });
    [188, 200, 212].forEach(x => { s += '<path d="M' + (x - 2) + ' 12v-6l2-5 2 5v6z"/>'; });
    /* Jackie Robinson Park bandshell arch */
    s += '<path d="M276 58v-16a26 22 0 0 1 52 0v16h-8v-14a18 14 0 0 0-36 0v14z"/>';
    [[338, 30, 30], [370, 22, 30]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/>'; });
    return s;
  })() + '</g>',
  socials: [
    { name: "Instagram", handle: "@RonBrowz", url: "https://www.instagram.com/RonBrowz/" },
    { name: "YouTube", handle: "@RonBrowzTV", url: "https://www.youtube.com/@RonBrowzTV" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the B or C to 135 St on St. Nicholas Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "college", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "mural", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "bandshell", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO HARLEM", x: "St. Nicholas Av and W 135 St, down the hill from City College. This is Ron Browz's game.", sfx: "spray" }
  ],
  episodes: [
  /* Timing from the captions on the official uploads. Pitch demo: 2 of 5 songs playable.
     Pop Champagne: questions only on Ron Browz's own hook, verse and "see you dance" bridge; Jim Jones (71-131 s) and Juelz Santana (153-184 s) verses are skipped.
     No captions yet: Gimmie 20 Dollars, She Don't Like Me, Paper, It Was Rough, Gettin My Bag Up. Not his as lead: Vado Anthem (feature), Handshakes with Snakes (beat only). */
  { title: "Jumping (Out the Window)", id: "pqD9wSPwTP0", cuts: [86.8, 140.6, 191.8], qs: [
    [
      ["\"Ya ain't gotta worry,\" what?", "Harlem World", "Uptown, man", "Bronx World"],
      ["After \"I got this,\" he hits the what?", "Studio", "Stage", "Corner"],
      ["Spittin' nothing but the what?", "Hotness", "Truth", "Classics"],
      ["\"V.I.P. and everybody\" what?", "Ballin'", "Dancin'", "Waitin'"],
      ["\"We gonna party till it's the\" what?", "Mornin'", "Weekend", "Sunset"],
      ["The producer tag at the start: \"Ether\" what?", "Boy", "Man", "King"],
      ["\"Shorty come here, I don't know why you\" what?", "Stallin'", "Leavin'", "Hidin'"]
    ],
    [
      ["\"I don't wanna yell so, mami,\" what?", "Come closer", "Come outside", "Call me"],
      ["\"I'ma take you\" where?", "Home", "Out", "Uptown"],
      ["Outside he got the what?", "Rover", "Benz", "Bike"],
      ["\"See it in your eyes, you mad when I\" what?", "Hold her", "Call her", "Leave her"],
      ["\"She gave me a kiss and said she'd\" what?", "Be back", "Call back", "Stay here"],
      ["\"None of y'all dudes here is\" what?", "No match", "No threat", "Too fly"],
      ["\"Jumpin' out the window with this\" what?", "One", "Song", "Beat"]
    ],
    [
      ["\"Get your\" what, \"ma\"?", "Passport", "Luggage", "Ticket"],
      ["They're about to take a what?", "Trip", "Ride", "Walk"],
      ["\"You can shop when you\" what?", "Land", "Wake up", "Want"],
      ["All the luggage is in the what?", "Whip", "Jet", "Hall"],
      ["\"She know I'm the\" what \"in America\"?", "Hottest", "Coolest", "Freshest"],
      ["She knows he's the hottest where?", "America", "Harlem", "New York"],
      ["What word echoes at the very end?", "Window", "Mornin'", "America"]
    ]
  ] },
  { title: "Pop Champagne", id: "MbgRHAtwPnY", cuts: [71.2, 152.8, 215.5], qs: [
    [
      ["The producer tag at the top: \"Ether\" what?", "Boy", "Man", "King"],
      ["\"Tell 'em Ron Browz here,\" what?", "Hottest in America", "Coolest in Harlem", "Back again"],
      ["\"Gimme\" how many bars?", "16", "8", "32"],
      ["Give him the bars and \"you know I\" what?", "Tear it up", "Mess it up", "Light it up"],
      ["\"Only get one life so you gotta\" what?", "Live it up", "Give it up", "Hold it up"],
      ["\"Shorty, we can be\" what?", "Friends", "Cool", "Fam"],
      ["\"Right now I wanna see you\" what?", "Dance", "Smile", "Sing"]
    ],
    [
      ["\"How we ball in the club? I know you\" what?", "Hate it", "Love it", "Made it"],
      ["Where are they ballin'?", "The club", "The park", "The block"],
      ["\"Mami dancing on the\" what?", "Floor", "Table", "Stage"],
      ["\"When she with you, I know she\" what?", "Fake it", "Rate it", "Leave it"],
      ["\"All the girls give it to me, I ain't gotta\" what?", "Take it", "Ask", "Chase it"],
      ["What does he shout before every \"Pop champagne\"?", "Oh!", "Hey!", "Yeah!"],
      ["\"We pop\" what?", "Champagne", "Collars", "Wheelies"]
    ],
    [
      ["\"I wanna see you dance, see you\" what?", "Dance", "Move", "Smile"],
      ["How many times in a row: \"I wanna see you dance\"?", "Four", "Two", "Six"],
      ["Back to the hook: \"How we\" what \"in the club\"?", "Ball", "Move", "Roll"],
      ["Who's dancing on the floor?", "Mami", "Shorty", "Everybody"],
      ["Who gives it to him?", "All the girls", "The DJ", "The crowd"],
      ["The last words of the song?", "We pop champagne", "See you dance", "Ether Boy"]
    ]
  ] },
  { title: "20 Dollars", locked: true, cuts: [], qs: [] },
  { title: "She Don't Like Me", locked: true, cuts: [], qs: [] },
  { title: "Paper", locked: true, cuts: [], qs: [] }
  ]
};
