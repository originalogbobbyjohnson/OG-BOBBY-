window.CFG = {
  name: "A Boogie wit da Hoodie", nameUpper: "A BOOGIE", short: "BOOGIE",
  hood: "Highbridge", hoodUpper: "HIGHBRIDGE", boro: "the Bronx",
  saveKey: "ogfan99aboogie1",
  startRank: "Drowning",
  ranks: ["Hoodie", "Artist", "Bigger Artist", "Hoodie SZN", "Artist 2.0"],
  topRank: "King of My City",
  point: "Melody", points: "Melodies",
  rankRewards: {
    "Hoodie": { bongs: 5, line: "Hoodie. Hood up, you made it out the rain." },
    "Artist": { bongs: 10, line: "Artist. That's the name for real." },
    "Bigger Artist": { bongs: 15, line: "Bigger Artist. You leveled up off the first one." },
    "Hoodie SZN": { bongs: 20, line: "Hoodie SZN. It's your season now." },
    "Artist 2.0": { bongs: 25, line: "You run all of Highbridge." }
  },
  trophyArt: [
    /* Drowning: a drop of rain */
    '<path d="M40 16q-20 30-20 44a20 20 0 0 0 40 0q0-14-20-44z" fill="#5ec8ff" stroke="#1d4f73" stroke-width="2"/><path d="M32 56q0 10 8 12" stroke="#fff" stroke-width="3" fill="none" opacity=".7" stroke-linecap="round"/>',
    /* Hoodie */
    '<path d="M18 74l4-34q18-28 36 0l4 34z" fill="#ff4d6d" stroke="#7a1d30" stroke-width="2"/><path d="M28 42q12 18 24 0" fill="#c23a55" stroke="#7a1d30" stroke-width="1.5"/><rect x="30" y="58" width="20" height="10" rx="3" fill="#c23a55"/><path d="M36 46v10M44 46v10" stroke="#fff" stroke-width="1.5"/>',
    /* Artist: a mic */
    '<rect x="34" y="46" width="12" height="30" rx="3" fill="#9aa3ad" stroke="#333" stroke-width="1.5"/><circle cx="40" cy="34" r="13" fill="#c9d0d6" stroke="#333" stroke-width="1.5"/><path d="M29 30h22M29 36h22" stroke="#777"/><text x="56" y="22" font-size="14" fill="#ffd23f">♪</text>',
    /* Bigger Artist: gold record */
    '<circle cx="40" cy="44" r="28" fill="#ffd23f" stroke="#8a6a12" stroke-width="2"/><circle cx="40" cy="44" r="20" fill="none" stroke="#e2b13c" stroke-width="1.5"/><circle cx="40" cy="44" r="8" fill="#ff4d6d"/><circle cx="40" cy="44" r="2" fill="#111"/>',
    /* Hoodie SZN: headphones */
    '<path d="M16 58q0-38 24-38t24 38" stroke="#eee" stroke-width="5" fill="none"/><rect x="10" y="52" width="14" height="22" rx="4" fill="#ff4d6d" stroke="#7a1d30" stroke-width="1.5"/><rect x="56" y="52" width="14" height="22" rx="4" fill="#ff4d6d" stroke="#7a1d30" stroke-width="1.5"/>',
    /* Artist 2.0: platinum plaque */
    '<rect x="12" y="18" width="56" height="60" rx="3" fill="#2a2233" stroke="#c9d0d6" stroke-width="3"/><circle cx="40" cy="44" r="17" fill="#e5e7eb" stroke="#9aa3ad" stroke-width="1.5"/><circle cx="40" cy="44" r="5" fill="#5ec8ff"/><rect x="22" y="66" width="36" height="6" fill="#c9d0d6"/>',
    /* King of My City: crown over the bridge arches */
    '<path d="M14 46l10-22 16 14 16-14 10 22z" fill="#ffd23f" stroke="#8a6a12" stroke-width="2" stroke-linejoin="round"/><rect x="14" y="46" width="52" height="8" fill="#e2b13c" stroke="#8a6a12" stroke-width="1.5"/><circle cx="24" cy="24" r="3" fill="#ff4d6d"/><circle cx="40" cy="36" r="3" fill="#5ec8ff"/><circle cx="56" cy="24" r="3" fill="#ff4d6d"/><path d="M12 76v-14h56v14h-6a8 8 0 0 0-16 0h-4a8 8 0 0 0-16 0z" fill="#d9d0bd" stroke="#9e927a" stroke-width="1.5"/>'
  ],
  clubTitle: "The Booth", clubTab: "BOOTH",
  tags: ["HBTL", "HOODIE SZN", "ARTIST"],
  c1: "#ff4d6d", c2: "#ffd23f", c3: "#5ec8ff", bg: "#0d0a14",
  headerSvg: '<g fill="#f7f3ea"><rect x="0" y="40" width="400" height="5"/><path d="M0 64V45h18v19a8 8 0 0 0-18 0z"/><path d="M24 64V45h30v19h-6a9 9 0 0 0-18 0z"/><path d="M60 64V45h30v19h-6a9 9 0 0 0-18 0z"/><path d="M96 45q60-34 120 0h-6q-54-28-108 0z"/><path d="M222 64V45h30v19h-6a9 9 0 0 0-18 0z"/><path d="M258 64V45h30v19h-6a9 9 0 0 0-18 0z"/><rect x="330" y="10" width="14" height="40"/><path d="M327 12h20l-10-12z"/><rect x="296" y="30" width="26" height="34"/><rect x="352" y="22" width="22" height="42"/><rect x="378" y="34" width="22" height="30"/></g>',
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 4 to 167 St, up on the el over River Ave. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "bridge", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "stadium", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "booth", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "corner", t: "WELCOME TO HIGHBRIDGE", x: "Nelson Ave and W 166 St, Artist \"A Boogie\" Dubose Drive. This is A Boogie's game.", sfx: "spray" }
  ],
  songs: [
   {
    "title": "Still Think About You",
    "id": "ocskDuKK7Ok",
    "cuts": [
     30,
     76.4,
     136.4
    ],
    "qs": [
     [
      [
       "Who does he say he still thinks about?",
       "You",
       "Them",
       "Nobody"
      ],
      [
       "What did he have in his back when he wrote this?",
       "A knife",
       "A bag",
       "A note"
      ],
      [
       "When he looks back and notices it, what does he do?",
       "Laughs",
       "Cries",
       "Leaves"
      ],
      [
       "Which basketball legend does he name-drop?",
       "Kobe",
       "Jordan",
       "LeBron"
      ],
      [
       "They don't know how to do what?",
       "Pass",
       "Shoot",
       "Score"
      ],
      [
       "What was he doing when he had the knife in his back?",
       "Writing this",
       "Sleeping",
       "Driving"
      ],
      [
       "How does he open the song: \"Now I'm ___\"?",
       "Saying",
       "Leaving",
       "Coming"
      ],
      [
       "How many times does he mention Kobe in that part?",
       "Twice",
       "Once",
       "Three times"
      ]
     ],
     [
      [
       "Who always told him this?",
       "His mom",
       "His dad",
       "His coach"
      ],
      [
       "How old was he when she told him?",
       "13",
       "16",
       "10"
      ],
      [
       "What does he say he should have done?",
       "Listened",
       "Left",
       "Called"
      ],
      [
       "And then you start to feel like you're doing what?",
       "Bugging",
       "Winning",
       "Dreaming"
      ],
      [
       "He wishes he never told you to do what?",
       "Pull up",
       "Call him",
       "Leave"
      ],
      [
       "What did he bust a couple of with you?",
       "Jokes",
       "Bottles",
       "Moves"
      ],
      [
       "She said she was always going to be what for him?",
       "There",
       "Loyal",
       "Ready"
      ],
      [
       "Now she's gone and she just did what?",
       "Disappeared",
       "Moved on",
       "Called"
      ]
     ],
     [
      [
       "He hopes he never does what again?",
       "Sees her",
       "Calls her",
       "Texts her"
      ],
      [
       "What will he send her when he's done with it?",
       "A letter",
       "A text",
       "A song"
      ],
      [
       "What does he know she's going to do with it?",
       "Read it",
       "Burn it",
       "Keep it"
      ],
      [
       "Now he feels what?",
       "Stupid",
       "Free",
       "Happy"
      ],
      [
       "It wasn't the right what to do it?",
       "Way",
       "Time",
       "Place"
      ],
      [
       "What is he going to focus on?",
       "Music",
       "Family",
       "Fashion"
      ],
      [
       "He should have been choosing what instead?",
       "Money",
       "Friends",
       "School"
      ],
      [
       "He can't believe he really thought she what for him?",
       "Cared",
       "Waited",
       "Prayed"
      ]
     ]
    ]
   },
   {
    "title": "Part of Me",
    "id": "gy40aPX8d_4",
    "start": 9.3,
    "cuts": [
     50.5,
     80.9,
     121
    ],
    "qs": [
     [
      [
       "What watch does he say she deserves?",
       "A Patek",
       "A Rolex",
       "An AP"
      ],
      [
       "Besides the Patek, what bag does she deserve?",
       "A Birky",
       "A Gucci",
       "A Prada"
      ],
      [
       "He knows he's heavy, but he's what for her?",
       "Ready",
       "Sorry",
       "Waiting"
      ],
      [
       "Which singer does he name when he asks her to rock with him?",
       "Michael Jackson",
       "Prince",
       "Usher"
      ],
      [
       "Her Birkins always complement her what?",
       "Hermes sandals",
       "Gucci shoes",
       "Chanel bag"
      ],
      [
       "He wants his name tatted on her, spelled out in what?",
       "Cursive",
       "Gold",
       "Capitals"
      ],
      [
       "What car do they jump in?",
       "A Maybach",
       "A Bentley",
       "A Lambo"
      ],
      [
       "Where can they hide in the Maybach?",
       "Behind the curtains",
       "In the trunk",
       "Under the seats"
      ]
     ],
     [
      [
       "He really meant it when he said what?",
       "I love you",
       "I'm sorry",
       "Goodbye"
      ],
      [
       "What did he turn into when she left?",
       "A demon",
       "A ghost",
       "A monster"
      ],
      [
       "Where did she leave him?",
       "In the cold",
       "In the rain",
       "At the door"
      ],
      [
       "He was fine by whom?",
       "Himself",
       "His friends",
       "His family"
      ],
      [
       "When she left, she lost a what of him?",
       "A part",
       "A piece",
       "A side"
      ],
      [
       "What does he say is on her sleeve?",
       "Chrome Hearts",
       "Gucci",
       "Prada"
      ],
      [
       "She was supposed to be his what?",
       "Favorite",
       "Wifey",
       "Shorty"
      ],
      [
       "He replaced all her what?",
       "Stuff",
       "Photos",
       "Shoes"
      ]
     ],
     [
      [
       "What do her sweatpants say?",
       "Juicy",
       "Pink",
       "Nike"
      ],
      [
       "What did he get off of after she said come through?",
       "The exit",
       "The train",
       "The bridge"
      ],
      [
       "Which car does he park?",
       "The Bentley",
       "The Benz",
       "The Maybach"
      ],
      [
       "He always put her first but should have put her what?",
       "Second",
       "Last",
       "Third"
      ],
      [
       "What does he still smell in his bed?",
       "Her perfume",
       "Her hair",
       "Flowers"
      ],
      [
       "He guesses he woke up on the what?",
       "Wrong side",
       "Right side",
       "Floor"
      ],
      [
       "Where does he put her at the game?",
       "Courtside",
       "In a box",
       "Up top"
      ],
      [
       "Where is he from?",
       "The Bronx",
       "Brooklyn",
       "Harlem"
      ]
     ]
    ]
   },
   {
    "title": "D.T.B/Interlude",
    "id": "CeMdIw1B6qI",
    "start": 10.3,
    "cuts": [
     51.1,
     125.5,
     268.4
    ],
    "qs": [
     [
      [
       "What kind of issues does he say he has?",
       "Trust issues",
       "Money issues",
       "Family issues"
      ],
      [
       "How did those issues make him feel?",
       "Uncomfortable",
       "Angry",
       "Lonely"
      ],
      [
       "He never should've made her feel like he was what with her?",
       "Stuck",
       "In love",
       "Happy"
      ],
      [
       "Ever had somebody say they were what for you?",
       "Down",
       "Mad",
       "Done"
      ],
      [
       "They made it feel so what?",
       "Real",
       "Good",
       "Easy"
      ],
      [
       "They clown on you every time they do what?",
       "Turn around",
       "Walk in",
       "Call you"
      ],
      [
       "They're not what?",
       "Loyal",
       "Honest",
       "Smart"
      ],
      [
       "They're happy doing what on you?",
       "Looking down",
       "Looking out",
       "Looking up"
      ],
      [
       "He feels like she never kept it a what with him?",
       "Buck",
       "Secret",
       "Promise"
      ]
     ],
     [
      [
       "What does he say he loves?",
       "Money",
       "Music",
       "Cars"
      ],
      [
       "What doesn't he want to do with them?",
       "Fall in love",
       "Go out",
       "Talk"
      ],
      [
       "No kissing and not even what?",
       "Hugging",
       "Texting",
       "Dancing"
      ],
      [
       "He thought she was cool to kick it and probably get what?",
       "Lunch",
       "Dinner",
       "Drinks"
      ],
      [
       "When you mess up, they're not what for you?",
       "Around",
       "Waiting",
       "Praying"
      ],
      [
       "They say they'd ride a hundred what for you?",
       "Thou",
       "Miles",
       "Times"
      ],
      [
       "He says he feels like a what?",
       "Loser",
       "Winner",
       "Fool"
      ],
      [
       "What does he do to the guy who scooped her?",
       "Salutes him",
       "Fights him",
       "Calls him"
      ]
     ],
     [
      [
       "This whole time she was doing what?",
       "Frontin'",
       "Lyin'",
       "Hidin'"
      ],
      [
       "Her toothbrush became his what kind of cleanup?",
       "Jordan",
       "Kitchen",
       "Car"
      ],
      [
       "Which tennis star does he say she's not?",
       "Serena",
       "Venus",
       "Sharapova"
      ],
      [
       "What kind of girl was she supposed to be?",
       "Dream girl",
       "Wifey",
       "Shorty"
      ],
      [
       "How many seats did the dream ride have?",
       "Two",
       "Four",
       "Six"
      ],
      [
       "What car was it for him and her?",
       "A Beemer",
       "A Benz",
       "A Bentley"
      ],
      [
       "Ever since school, they've been doing what?",
       "Pick and choosing",
       "Hatin'",
       "Watchin'"
      ],
      [
       "He says, \"This is ___\"",
       "Stupid",
       "Crazy",
       "Wild"
      ]
     ]
    ]
   },
   {
    "title": "Look Back At It",
    "id": "DmNfT-B7nlA",
    "start": 19.2,
    "cuts": [
     60.5,
     99.8,
     159.6
    ],
    "qs": [
     [
      [
       "What's the first line of the hook?",
       "Look back at it",
       "Back it up",
       "Show me how"
      ],
      [
       "The girls just wanna have what?",
       "Fun",
       "Money",
       "Love"
      ],
      [
       "These girls ain't really no what for him?",
       "Good",
       "Fun",
       "Trouble"
      ],
      [
       "What sound does he make after the hook?",
       "Drrah",
       "Skrrt",
       "Brrr"
      ],
      [
       "What car does he have that he ain't promotin'?",
       "A Benz",
       "A Bentley",
       "A Rolls"
      ],
      [
       "What isn't he doing with that car?",
       "Promotin'",
       "Drivin'",
       "Sellin'"
      ],
      [
       "What do all of his friends love?",
       "Money throwin'",
       "Fast cars",
       "Late nights"
      ],
      [
       "Is the Benz new, used or rented?",
       "New",
       "Used",
       "Rented"
      ],
      [
       "He wants to tell you something about his what?",
       "Life",
       "Girl",
       "City"
      ]
     ],
     [
      [
       "Every single chain and his what?",
       "Diamond rings",
       "Gold watch",
       "New car"
      ],
      [
       "The way you walk and talk is all because of whom?",
       "Him",
       "Your mom",
       "Your friends"
      ],
      [
       "The way he speaks is his what?",
       "Melody",
       "Style",
       "Secret"
      ],
      [
       "Don't you ever think it's another what?",
       "Me",
       "You",
       "Day"
      ],
      [
       "He cannot be takin' what?",
       "Apologies",
       "Pictures",
       "Calls"
      ],
      [
       "Why do they plot on him?",
       "That bag on him",
       "His car",
       "His girl"
      ],
      [
       "Hoodie on what?",
       "Low",
       "High",
       "Tight"
      ],
      [
       "But he stays what?",
       "Focused",
       "Humble",
       "Quiet"
      ],
      [
       "It's hard to stay low when everybody does what?",
       "Notices",
       "Talks",
       "Watches"
      ]
     ],
     [
      [
       "He gets what when he looks at it?",
       "Goosebumps",
       "Chills",
       "Butterflies"
      ],
      [
       "Who do all the girls wanna have fun with?",
       "Him",
       "Them",
       "You"
      ],
      [
       "He asks: Can I come by and what?",
       "Vibe",
       "Chill",
       "Ride"
      ],
      [
       "He gets a different type of what?",
       "Fly",
       "Cool",
       "Fresh"
      ],
      [
       "He's gettin' what?",
       "Rich",
       "Old",
       "Tired"
      ],
      [
       "He's really what?",
       "Lit",
       "Lost",
       "Late"
      ],
      [
       "He admits it, but he does what?",
       "Try",
       "Lie",
       "Leave"
      ],
      [
       "If he's wrong, just tell him that he's what?",
       "Right",
       "Wrong",
       "Done"
      ]
     ]
    ]
   }
  ],
  explicitSongs: [
   {
    "title": "Still Think About You",
    "id": "ocskDuKK7Ok",
    "cuts": [
     30,
     76.4,
     136.4
    ],
    "qs": [
     [
      [
       "Who does he say he still thinks about?",
       "You",
       "Them",
       "Nobody"
      ],
      [
       "What did he have in his back when he wrote this?",
       "A knife",
       "A bag",
       "A note"
      ],
      [
       "When he looks back and notices it, what does he do?",
       "Laughs",
       "Cries",
       "Leaves"
      ],
      [
       "Which basketball legend does he name-drop?",
       "Kobe",
       "Jordan",
       "LeBron"
      ],
      [
       "They don't know how to do what?",
       "Pass",
       "Shoot",
       "Score"
      ],
      [
       "What was he doing when he had the knife in his back?",
       "Writing this",
       "Sleeping",
       "Driving"
      ],
      [
       "How does he open the song: \"Now I'm ___\"?",
       "Saying",
       "Leaving",
       "Coming"
      ],
      [
       "How many times does he mention Kobe in that part?",
       "Twice",
       "Once",
       "Three times"
      ]
     ],
     [
      [
       "Who always told him this?",
       "His mom",
       "His dad",
       "His coach"
      ],
      [
       "How old was he when she told him?",
       "13",
       "16",
       "10"
      ],
      [
       "What does he say he should have done?",
       "Listened",
       "Left",
       "Called"
      ],
      [
       "And then you start to feel like you're doing what?",
       "Bugging",
       "Winning",
       "Dreaming"
      ],
      [
       "He wishes he never told you to do what?",
       "Pull up",
       "Call him",
       "Leave"
      ],
      [
       "What did he bust a couple of with you?",
       "Jokes",
       "Bottles",
       "Moves"
      ],
      [
       "She said she was always going to be what for him?",
       "There",
       "Loyal",
       "Ready"
      ],
      [
       "Now she's gone and she just did what?",
       "Disappeared",
       "Moved on",
       "Called"
      ]
     ],
     [
      [
       "He hopes he never does what again?",
       "Sees her",
       "Calls her",
       "Texts her"
      ],
      [
       "What will he send her when he's done with it?",
       "A letter",
       "A text",
       "A song"
      ],
      [
       "What does he know she's going to do with it?",
       "Read it",
       "Burn it",
       "Keep it"
      ],
      [
       "Now he feels what?",
       "Stupid",
       "Free",
       "Happy"
      ],
      [
       "It wasn't the right what to do it?",
       "Way",
       "Time",
       "Place"
      ],
      [
       "What is he going to focus on?",
       "Music",
       "Family",
       "Fashion"
      ],
      [
       "He should have been choosing what instead?",
       "Money",
       "Friends",
       "School"
      ],
      [
       "He can't believe he really thought she what for him?",
       "Cared",
       "Waited",
       "Prayed"
      ]
     ]
    ]
   },
   {
    "title": "Part of Me",
    "id": "gy40aPX8d_4",
    "start": 9.3,
    "cuts": [
     50.5,
     80.9,
     121
    ],
    "qs": [
     [
      [
       "What watch does he say she deserves?",
       "A Patek",
       "A Rolex",
       "An AP"
      ],
      [
       "Besides the Patek, what bag does she deserve?",
       "A Birky",
       "A Gucci",
       "A Prada"
      ],
      [
       "He knows he's heavy, but he's what for her?",
       "Ready",
       "Sorry",
       "Waiting"
      ],
      [
       "Which singer does he name when he asks her to rock with him?",
       "Michael Jackson",
       "Prince",
       "Usher"
      ],
      [
       "Her Birkins always complement her what?",
       "Hermes sandals",
       "Gucci shoes",
       "Chanel bag"
      ],
      [
       "He wants his name tatted on her, spelled out in what?",
       "Cursive",
       "Gold",
       "Capitals"
      ],
      [
       "What car do they jump in?",
       "A Maybach",
       "A Bentley",
       "A Lambo"
      ],
      [
       "Where can they hide in the Maybach?",
       "Behind the curtains",
       "In the trunk",
       "Under the seats"
      ]
     ],
     [
      [
       "He really meant it when he said what?",
       "I love you",
       "I'm sorry",
       "Goodbye"
      ],
      [
       "What did he turn into when she left?",
       "A demon",
       "A ghost",
       "A monster"
      ],
      [
       "Where did she leave him?",
       "In the cold",
       "In the rain",
       "At the door"
      ],
      [
       "He was fine by whom?",
       "Himself",
       "His friends",
       "His family"
      ],
      [
       "When she left, she lost a what of him?",
       "A part",
       "A piece",
       "A side"
      ],
      [
       "What does he say is on her sleeve?",
       "Chrome Hearts",
       "Gucci",
       "Prada"
      ],
      [
       "She was supposed to be his what?",
       "Favorite",
       "Wifey",
       "Shorty"
      ],
      [
       "He replaced all her what?",
       "Stuff",
       "Photos",
       "Shoes"
      ]
     ],
     [
      [
       "What do her sweatpants say?",
       "Juicy",
       "Pink",
       "Nike"
      ],
      [
       "What did he get off of after she said come through?",
       "The exit",
       "The train",
       "The bridge"
      ],
      [
       "Which car does he park?",
       "The Bentley",
       "The Benz",
       "The Maybach"
      ],
      [
       "He always put her first but should have put her what?",
       "Second",
       "Last",
       "Third"
      ],
      [
       "What does he still smell in his bed?",
       "Her perfume",
       "Her hair",
       "Flowers"
      ],
      [
       "He guesses he woke up on the what?",
       "Wrong side",
       "Right side",
       "Floor"
      ],
      [
       "Where does he put her at the game?",
       "Courtside",
       "In a box",
       "Up top"
      ],
      [
       "Where is he from?",
       "The Bronx",
       "Brooklyn",
       "Harlem"
      ]
     ]
    ]
   },
   {
    "title": "D.T.B/Interlude",
    "id": "CeMdIw1B6qI",
    "start": 10.3,
    "cuts": [
     51.1,
     125.5,
     268.4
    ],
    "qs": [
     [
      [
       "What kind of issues does he say he has?",
       "Trust issues",
       "Money issues",
       "Family issues"
      ],
      [
       "How did those issues make him feel?",
       "Uncomfortable",
       "Angry",
       "Lonely"
      ],
      [
       "He never should've made her feel like he was what with her?",
       "Stuck",
       "In love",
       "Happy"
      ],
      [
       "Ever had somebody say they were what for you?",
       "Down",
       "Mad",
       "Done"
      ],
      [
       "They made it feel so what?",
       "Real",
       "Good",
       "Easy"
      ],
      [
       "They clown on you every time they do what?",
       "Turn around",
       "Walk in",
       "Call you"
      ],
      [
       "They're not what?",
       "Loyal",
       "Honest",
       "Smart"
      ],
      [
       "They're happy doing what on you?",
       "Looking down",
       "Looking out",
       "Looking up"
      ],
      [
       "He feels like she never kept it a what with him?",
       "Buck",
       "Secret",
       "Promise"
      ]
     ],
     [
      [
       "What does he say he loves?",
       "Money",
       "Music",
       "Cars"
      ],
      [
       "What doesn't he want to do with them?",
       "Fall in love",
       "Go out",
       "Talk"
      ],
      [
       "No kissing and not even what?",
       "Hugging",
       "Texting",
       "Dancing"
      ],
      [
       "He thought she was cool to kick it and probably get what?",
       "Lunch",
       "Dinner",
       "Drinks"
      ],
      [
       "When you mess up, they're not what for you?",
       "Around",
       "Waiting",
       "Praying"
      ],
      [
       "They say they'd ride a hundred what for you?",
       "Thou",
       "Miles",
       "Times"
      ],
      [
       "He says he feels like a what?",
       "Loser",
       "Winner",
       "Fool"
      ],
      [
       "What does he do to the guy who scooped her?",
       "Salutes him",
       "Fights him",
       "Calls him"
      ]
     ],
     [
      [
       "This whole time she was doing what?",
       "Frontin'",
       "Lyin'",
       "Hidin'"
      ],
      [
       "Her toothbrush became his what kind of cleanup?",
       "Jordan",
       "Kitchen",
       "Car"
      ],
      [
       "Which tennis star does he say she's not?",
       "Serena",
       "Venus",
       "Sharapova"
      ],
      [
       "What kind of girl was she supposed to be?",
       "Dream girl",
       "Wifey",
       "Shorty"
      ],
      [
       "How many seats did the dream ride have?",
       "Two",
       "Four",
       "Six"
      ],
      [
       "What car was it for him and her?",
       "A Beemer",
       "A Benz",
       "A Bentley"
      ],
      [
       "Ever since school, they've been doing what?",
       "Pick and choosing",
       "Hatin'",
       "Watchin'"
      ],
      [
       "He says, \"This is ___\"",
       "Stupid",
       "Crazy",
       "Wild"
      ]
     ]
    ]
   },
   {
    "title": "Look Back At It",
    "id": "DmNfT-B7nlA",
    "start": 19.2,
    "cuts": [
     60.5,
     99.8,
     159.6
    ],
    "qs": [
     [
      [
       "What's the first line of the hook?",
       "Look back at it",
       "Back it up",
       "Show me how"
      ],
      [
       "The girls just wanna have what?",
       "Fun",
       "Money",
       "Love"
      ],
      [
       "These girls ain't really no what for him?",
       "Good",
       "Fun",
       "Trouble"
      ],
      [
       "What sound does he make after the hook?",
       "Drrah",
       "Skrrt",
       "Brrr"
      ],
      [
       "What car does he have that he ain't promotin'?",
       "A Benz",
       "A Bentley",
       "A Rolls"
      ],
      [
       "What isn't he doing with that car?",
       "Promotin'",
       "Drivin'",
       "Sellin'"
      ],
      [
       "What do all of his friends love?",
       "Money throwin'",
       "Fast cars",
       "Late nights"
      ],
      [
       "Is the Benz new, used or rented?",
       "New",
       "Used",
       "Rented"
      ],
      [
       "He wants to tell you something about his what?",
       "Life",
       "Girl",
       "City"
      ]
     ],
     [
      [
       "Every single chain and his what?",
       "Diamond rings",
       "Gold watch",
       "New car"
      ],
      [
       "The way you walk and talk is all because of whom?",
       "Him",
       "Your mom",
       "Your friends"
      ],
      [
       "The way he speaks is his what?",
       "Melody",
       "Style",
       "Secret"
      ],
      [
       "Don't you ever think it's another what?",
       "Me",
       "You",
       "Day"
      ],
      [
       "He cannot be takin' what?",
       "Apologies",
       "Pictures",
       "Calls"
      ],
      [
       "Why do they plot on him?",
       "That bag on him",
       "His car",
       "His girl"
      ],
      [
       "Hoodie on what?",
       "Low",
       "High",
       "Tight"
      ],
      [
       "But he stays what?",
       "Focused",
       "Humble",
       "Quiet"
      ],
      [
       "It's hard to stay low when everybody does what?",
       "Notices",
       "Talks",
       "Watches"
      ]
     ],
     [
      [
       "He gets what when he looks at it?",
       "Goosebumps",
       "Chills",
       "Butterflies"
      ],
      [
       "Who do all the girls wanna have fun with?",
       "Him",
       "Them",
       "You"
      ],
      [
       "He asks: Can I come by and what?",
       "Vibe",
       "Chill",
       "Ride"
      ],
      [
       "He gets a different type of what?",
       "Fly",
       "Cool",
       "Fresh"
      ],
      [
       "He's gettin' what?",
       "Rich",
       "Old",
       "Tired"
      ],
      [
       "He's really what?",
       "Lit",
       "Lost",
       "Late"
      ],
      [
       "He admits it, but he does what?",
       "Try",
       "Lie",
       "Leave"
      ],
      [
       "If he's wrong, just tell him that he's what?",
       "Right",
       "Wrong",
       "Done"
      ]
     ]
    ]
   }
  ]
};
(function(){try{if(window.CFG.explicitSongs&&localStorage.getItem("ogfan99explicit")==="1"){window.CFG.songs=window.CFG.explicitSongs;window.CFG.saveKey+="x";}}catch(e){}})();
