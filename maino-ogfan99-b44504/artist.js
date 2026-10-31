/* Maino: Bed-Stuy, Brooklyn. Hi Hater, Hustle Hard, the Lobby Boyz with Jim Jones, All the Above, Million Bucks, King of Brooklyn. */
window.CFG = {
  name: "Maino", nameUpper: "MAINO", short: "MAINO",
  hood: "Bed-Stuy", hoodUpper: "BED-STUY", boro: "Brooklyn",
  saveKey: "ogfan99maino1",
  /* everybody starts as a Hater ("Hi Hater") */
  startRank: "Hater",
  ranks: ["Lobby Boy", "Hard Hustler", "Black Flag Boss"],
  topRank: "King of Brooklyn",
  point: "Buck", points: "Bucks",
  rankRewards: {
    "Lobby Boy": { bongs: 5, line: "You made it into the lobby. Hi hater, bye hater." },
    "Hard Hustler": { bongs: 10, line: "Hustle hard. All the above." },
    "Black Flag Boss": { bongs: 25, line: "You run all of Bed-Stuy." }
  },
  trophyArt: [
    /* Hater: a waving hand over a HI HATER card */
    '<rect x="12" y="58" width="56" height="20" rx="3" fill="#111" stroke="#ff3b30" stroke-width="2"/>' +
    '<text x="40" y="73" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" textLength="44" lengthAdjust="spacingAndGlyphs" fill="#ff3b30">HI HATER</text>' +
    '<path d="M30 54V34q0-4 4-4t4 4v-8q0-4 4-4t4 4v4q0-4 4-4t4 4v14l4-6q3-3 6 0t0 6l-10 14z" fill="#f2c9a0" stroke="#5a3a20" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M22 30q-4 4 0 8M18 26q-8 8 0 16" stroke="#7fd3ff" stroke-width="2" fill="none" stroke-linecap="round"/>',
    /* Lobby Boy: the building keys on a ring with a lobby fob */
    '<circle cx="34" cy="34" r="12" fill="none" stroke="#c9ced6" stroke-width="4"/>' +
    '<path d="M40 44l14 24m-6-10l5-3m-1 8l5-3" stroke="#d9a020" stroke-width="5" stroke-linecap="round"/><circle cx="40" cy="44" r="5" fill="#d9a020"/>' +
    '<path d="M26 44l-6 26m2-8h-5m3 6h-5" stroke="#c9ced6" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M44 26h16a4 4 0 0 1 4 4v6a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8z" fill="#ff3b30" stroke="#5a0f17" stroke-width="1.5"/>',
    /* Hard Hustler: a gold HH medallion on a chain */
    '<path d="M16 18q24 44 48 0" fill="none" stroke="#e0a52c" stroke-width="4" stroke-dasharray="5 3" stroke-linecap="round"/>' +
    '<circle cx="40" cy="58" r="17" fill="#e0a52c" stroke="#7a5512" stroke-width="2"/><circle cx="40" cy="58" r="12" fill="none" stroke="#7a5512" stroke-width="1"/>' +
    '<text x="40" y="64" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="15" fill="#3a0b0b">HH</text>',
    /* Black Flag Boss: a black flag on a pole */
    '<rect x="22" y="16" width="4" height="64" fill="#c9ced6"/><circle cx="24" cy="15" r="3" fill="#e0a52c"/>' +
    '<path d="M26 20q12-6 22 0t22 0v28q-12 6-22 0t-22 0z" fill="#111" stroke="#ff3b30" stroke-width="1.5"/>' +
    '<path d="M36 30l4 6 6-10 4 10 4-6v10H36z" fill="#ff3b30"/>',
    /* King of Brooklyn: a gold crown with BK on the band */
    '<path d="M14 70l4-34 12 14 10-22 10 22 12-14 4 34z" fill="#ffcc33" stroke="#7a5512" stroke-width="1.5"/>' +
    '<rect x="14" y="62" width="52" height="12" fill="#e0a52c" stroke="#7a5512" stroke-width="1.5"/>' +
    '<text x="40" y="72" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="10" fill="#3a0b0b">BK</text>' +
    '<circle cx="40" cy="27" r="3" fill="#ff3b30"/><circle cx="18" cy="35" r="2.4" fill="#36d97f"/><circle cx="62" cy="35" r="2.4" fill="#36d97f"/>'
  ],
  clubTitle: "The Hustle Hard Vault", clubTab: "VAULT",
  tags: ["LOBBY BOYZ", "HI HATER", "KING OF BK"],
  c1: "#ff3b30", c2: "#36d97f", c3: "#7fd3ff", bg: "#3a0b0b",
  /* Boys and Girls High's stepped blocks along Fulton St, tower buildings and water tanks behind */
  headerSvg: (function () {
    let s = '<rect x="0" y="40" width="400" height="24"/>';
    s += '<rect x="20" y="10" width="44" height="54"/><rect x="74" y="18" width="40" height="46"/><rect x="290" y="6" width="46" height="58"/><rect x="346" y="16" width="40" height="48"/>';
    [[30, 10], [84, 18], [300, 6], [356, 16]].forEach(p => { for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) s += '<rect x="' + (p[0] + c * 11) + '" y="' + (p[1] + 5 + r * 9) + '" width="5" height="4" fill="#3a0b0b"/>'; });
    s += '<rect x="128" y="26" width="150" height="10"/><rect x="122" y="34" width="162" height="8"/>';
    s += '<rect x="96" y="2" width="12" height="10" rx="2"/><path d="M98 12l-2 6M106 12l2 6" stroke="#f7f3ea" stroke-width="1.5"/>';
    s += '<rect x="312" y="-4" width="12" height="10" rx="2"/>';
    for (let x = 6; x < 400; x += 18) s += '<rect x="' + x + '" y="46" width="10" height="5" fill="#3a0b0b"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@mainohustlehard", url: "https://www.instagram.com/mainohustlehard/" },
    { name: "YouTube", handle: "MainoTV", url: "https://www.youtube.com/c/MainoTV" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the A or C to Utica Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "school", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "court" },
    { scene: "weeksville", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "organ" },
    { scene: "lobby", t: "CLIMB THE RANKS", x: "Everybody starts as a Hater. Clear a row to rank up: Lobby Boy, Hard Hustler, Black Flag Boss. Beat the 99 Challenge to become King of Brooklyn.", sfx: "bell" },
    { scene: "corner", t: "WELCOME TO BED-STUY", x: "Fulton St and Utica Av. This is Maino's game.", sfx: "spray" }
  ],
  episodes: [
    {"title":"Hi Hater (In The Studio)","id":"kLL8O0LydTg","cuts":[69.4],"qs":[[["You see me what hard?","Hustle","Grind","Work"],["Hustle hard, stack what?","Paper","Chips","Bricks"],["Y'all haters, it's nothing, we what?","Major","Famous","Winning"],["Hi what?","Hater","Lover","Brooklyn"],["He lets a hater do what?","Hate","Talk","Leave"],["What watch do they see?","Oyster Perpetual","Cartier Tank","Casio"]]]},
    {"title":"Lit Summer","id":"t22N8m1Dek8","cuts":[49.7],"qs":[[["It's about to be a lit what?","Summer","Party","Weekend"],["He wakes up just to go chase what?","Checks","Girls","Trains"],["All summer, he's going to what?","Flex","Rest","Travel"],["Way too blessed to be what?","Stressed","Broke","Quiet"],["Way too fresh for the what?","Internet","Streets","Club"],["The whole summer is what?","Lit","Hot","Long"]]]},
    {"title":"ShadeRoom","id":"IwAd8-DJghM","start":17,"cuts":[90.8],"qs":[[["Where does he say he's from?","Brooklyn","Harlem","Queens"],["Tell me you love me so we can go what?","Viral","Home","Out"],["He pulls up and pops out inside of your what?","City","House","Club"],["He's there just for how long?","Tonight","A week","The summer"],["Turn the what off?","Camera","Lights","Music"],["He woke up inside of the what?","Shade Room","Back room","Lobby"]]]},
    {"title":"My Hood","id":"pc1nkY3y8kk","start":24,"cuts":[93.7,158.9],"qs":[[["Where he's from, you might not make it to see what age?","25","18","40"],["It's hard to sleep through the what?","Nights","Noise","Summer"],["Kids can't learn because the schools are what?","Overcrowded","Closed","Too far"],["Everything ain't what in my hood?","Peaches and cream","Sunshine","Fun and games"],["He could live where?","Anywhere","Manhattan","Down south"],["He's never going to give up on his what?","Hood","Dream","Crew"]],[["Gunshots touch more people than songs from who?","Usher","Prince","Drake"],["Hustlers in car coats and what?","North Faces","Timberlands","Hoodies"],["Deep down he knows there's a better what?","Place to be","Way to live","Job"],["He ain't going to turn his what on his hood?","Back","Head","Eyes"],["When he comes through, he gets what?","Love","Hate","Money"],["He's always going to come what?","Back","Up","Home late"]]]},
    {"title":"All the Above","locked":true,"cuts":[],"qs":[]},
    {"title":"Million Bucks","locked":true,"cuts":[],"qs":[]},
    {"title":"Lobby Boyz Anthem","locked":true,"cuts":[],"qs":[]},
    {"title":"Let It Fly","locked":true,"cuts":[],"qs":[]},
    {"title":"Mama Loves Me","locked":true,"cuts":[],"qs":[]}
  ]
};
