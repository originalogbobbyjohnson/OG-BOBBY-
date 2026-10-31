/* Pharoahe Monch: South Jamaica, Queens. Organized Konfusion (with Prince Po), Rawkus, Internal Affairs, Desire, W.A.R. (We Are Renegades). */
window.CFG = {
  name: "Pharoahe Monch", nameUpper: "PHAROAHE MONCH", short: "MONCH",
  hood: "South Jamaica", hoodUpper: "SOUTH JAMAICA", boro: "Queens",
  saveKey: "ogfan99pharoahemonch1",
  /* everybody starts as a Fudge Pudge (the early Organized Konfusion joint) and climbs to the Pharoahe */
  startRank: "Fudge Pudge",
  ranks: ["Konfused", "Organized", "Internal Affairs", "Desire", "Renegade"],
  topRank: "The Pharoahe",
  point: "Syllable", points: "Syllables",
  rankRewards: {
    "Konfused": { bongs: 5, line: "Konfused. You heard the flow, now keep up." },
    "Organized": { bongs: 10, line: "Organized. Prince Po would nod." },
    "Internal Affairs": { bongs: 15, line: "Internal Affairs. You're in the file now." },
    "Desire": { bongs: 20, line: "Desire. You want it bad." },
    "Renegade": { bongs: 25, line: "You run all of South Jamaica." }
  },
  trophyArt: [
    /* Fudge Pudge: a little cup of chocolate pudding with a spoon */
    '<path d="M22 46h36l-5 32H27z" fill="#e8e0cc" stroke="#555" stroke-width="1.5"/><ellipse cx="40" cy="46" rx="18" ry="5" fill="#5a3418" stroke="#3a1e0a"/>' +
    '<path d="M46 44l14 -26" stroke="#c9d3dc" stroke-width="3" stroke-linecap="round"/><ellipse cx="45" cy="45" rx="4" ry="2" fill="#c9d3dc"/>',
    /* Konfused: a big swirling question mark */
    '<path d="M28 30q0 -16 14 -16q14 0 14 14q0 10 -10 14q-6 3 -6 12v6" stroke="#3fa7d6" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="40" cy="72" r="5" fill="#3fa7d6"/>',
    /* Organized: a neat rhyme notebook with a pen */
    '<rect x="16" y="22" width="44" height="56" rx="3" fill="#f3e6c8" stroke="#555" stroke-width="1.5"/><path d="M22 34h32M22 42h32M22 50h32M22 58h32M22 66h24" stroke="#3fa7d6" stroke-width="1.5"/>' +
    '<path d="M16 22v56" stroke="#d6452f" stroke-width="3"/><path d="M58 18l8 4 -14 46 -6 4 -1 -7z" fill="#e8c547" stroke="#7a5512"/>',
    /* Internal Affairs: a case file folder with a red stamp */
    '<path d="M10 30h22l6 6h32v42H10z" fill="#d8b46a" stroke="#7a5512" stroke-width="1.5"/><rect x="16" y="22" width="48" height="10" fill="#f3e6c8" stroke="#888"/>' +
    '<rect x="22" y="48" width="36" height="16" rx="2" fill="none" stroke="#d6452f" stroke-width="2.5" transform="rotate(-8 40 56)"/><text x="40" y="60" text-anchor="middle" transform="rotate(-8 40 56)" font-family="Anton,Impact,sans-serif" font-size="9" fill="#d6452f">FILED</text>',
    /* Desire: a gold microphone wrapped in flame */
    '<path d="M40 8q16 18 10 34q10 -4 8 -16q14 22 -4 40H26q-18 -18 -4 -40q-2 12 8 16q-6 -16 10 -34z" fill="#d6452f"/><path d="M40 22q8 12 4 24h-8q-4 -12 4 -24z" fill="#e8c547"/>' +
    '<rect x="34" y="48" width="12" height="28" rx="3" fill="#e8c547" stroke="#7a5512" stroke-width="1.5"/><circle cx="40" cy="46" r="8" fill="#e8c547" stroke="#7a5512" stroke-width="1.5"/>',
    /* Renegade: the W.A.R. banner on a pole */
    '<rect x="16" y="10" width="4" height="70" fill="#3a3a3e"/><circle cx="18" cy="9" r="3" fill="#e8c547"/>' +
    '<path d="M20 14h48l-8 14 8 14H20z" fill="#d6452f" stroke="#111" stroke-width="1"/><text x="42" y="33" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="11" fill="#f3e6c8">W.A.R.</text>',
    /* The Pharoahe: a gold-and-blue striped pharaoh headdress with the cobra on the brow (no face) */
    '<path d="M40 8q-26 2 -30 34l-2 34h18l2 -30h24l2 30h18l-2 -34q-4 -32 -30 -34z" fill="#e8c547" stroke="#7a5512" stroke-width="1.5"/>' +
    '<path d="M14 40h10M12 50h12M10 60h14M10 70h16M56 40h10M56 50h12M56 60h14M54 70h16M24 20q16 -8 32 0" stroke="#1f5fa8" stroke-width="4"/>' +
    '<rect x="28" y="30" width="24" height="18" rx="3" fill="#c9952a"/><path d="M40 14q-4 6 0 12q4 -6 0 -12z" fill="#d6452f" stroke="#7a5512"/>'
  ],
  clubTitle: "Internal Affairs", clubTab: "FILES",
  tags: ["O.K.", "W.A.R.", "MONCH"],
  c1: "#e8c547", c2: "#d6452f", c3: "#3fa7d6", bg: "#0c0a14",
  /* Jamaica: King Manor's gambrel roof, the AirTrain guideway and glass hall, the towers over Sutphin, a jet overhead */
  headerSvg: (function () {
    let s = '<rect x="0" y="40" width="400" height="5"/>';
    for (let x = 10; x < 400; x += 60) s += '<rect x="' + x + '" y="44" width="6" height="20"/>';
    s += '<path d="M14 64v-20l8 -12 16 -6h28l16 6 8 12v20z"/><rect x="30" y="18" width="6" height="12"/><rect x="74" y="18" width="6" height="12"/>';
    s += '<path d="M130 40q50 -26 100 0z"/><rect x="250" y="6" width="34" height="34"/><rect x="292" y="14" width="30" height="26"/><rect x="330" y="20" width="56" height="20"/>';
    s += '<path d="M150 12h20l6 -3h3l-4 4 4 4h-3l-6 -3h-20z"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the E to Sutphin Blvd-Archer Av-JFK Airport. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "airtrain", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "kingmanor", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "baisley", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO SOUTH JAMAICA", x: "Guy R Brewer Blvd and Linden Blvd. This is Pharoahe Monch's game.", sfx: "spray" }
  ],
  songs: [
   {
    "title": "Desire",
    "id": "lqhJZvjV99c",
    "cuts": [
     41.1,
     68.3,
     134.7
    ],
    "qs": [
     [
      [
       "What does he say it's his?",
       "Desire",
       "Dream",
       "Fire"
      ],
      [
       "'Comprehend the ___'",
       "Guidelines",
       "Headlines",
       "Deadlines"
      ],
      [
       "'My chest out, ___ or relaxed'",
       "Chinchilla'd",
       "Minked out",
       "Iced out"
      ],
      [
       "Relaxed on the what?",
       "Sidelines",
       "Bench",
       "Couch"
      ],
      [
       "'I'm so ___, understand'",
       "Famous",
       "Fly",
       "Fresh"
      ],
      [
       "Which city respects his game?",
       "New York City",
       "Atlanta",
       "LA"
      ],
      [
       "Respect my game like who?",
       "Joe Namath",
       "Phil Simms",
       "Joe Montana"
      ],
      [
       "'Y'all don't ___ me'",
       "Hear",
       "See",
       "Feel"
      ],
      [
       "'Y'all don't ___'",
       "Listen",
       "Learn",
       "Stop"
      ]
     ],
     [
      [
       "'Y'all just wanna shine, y'all just wanna ___'",
       "Glisten",
       "Glow",
       "Sparkle"
      ],
      [
       "Floss, knowin' the what is still missin'?",
       "Soul",
       "Heart",
       "Crown"
      ],
      [
       "Who am I? I'm the poetical what?",
       "Pastor",
       "Prophet",
       "Teacher"
      ],
      [
       "Slave to a label, but I own my what?",
       "Master",
       "Name",
       "Publishing"
      ],
      [
       "Monch is a 'Monarch' minus the what?",
       "A & R",
       "Crown",
       "Royalty"
      ],
      [
       "When my brain excels, your what derails?",
       "Train",
       "Plan",
       "Car"
      ],
      [
       "Make you feel the 'Clipse' like who?",
       "Pharrell",
       "Timbaland",
       "Kanye"
      ],
      [
       "'You will feel me, you will ___'",
       "Admire",
       "Admit",
       "Retire"
      ]
     ],
     [
      [
       "Desire is the fire that ignites the what?",
       "Torch",
       "Candle",
       "Stove"
      ],
      [
       "'This is not ___ science'",
       "Rocket",
       "Brain",
       "Computer"
      ],
      [
       "His mic's a what?",
       "Gavel",
       "Hammer",
       "Sword"
      ],
      [
       "When he talks, what's adjourned?",
       "Court",
       "Class",
       "School"
      ],
      [
       "He embodies what?",
       "Antibiotics",
       "Vitamins",
       "Medicine"
      ],
      [
       "What's fatally ill?",
       "Rap",
       "The game",
       "Radio"
      ],
      [
       "He telecommentates the game like who?",
       "Chick Hearn",
       "Marv Albert",
       "John Madden"
      ],
      [
       "Vocals alone evoke the emotion of black what?",
       "Choirs",
       "Churches",
       "Preachers"
      ]
     ]
    ]
   },
   {
    "title": "Official",
    "id": "NMVxipbk9B4",
    "cuts": [
     37.8,
     58.4,
     117
    ],
    "qs": [
     [
      [
       "Pharoahe's Official like what brand?",
       "Starter",
       "Champion",
       "Russell"
      ],
      [
       "Hits harder than where?",
       "Fort Green",
       "Fort Hamilton",
       "Fort Lee"
      ],
      [
       "'Authentic, Nike, Adidas and ___'",
       "Spalding",
       "Wilson",
       "Reebok"
      ],
      [
       "His intricate ways shake your whole what?",
       "Team",
       "Crew",
       "Block"
      ],
      [
       "Like number 55 on which team?",
       "Chargers",
       "Giants",
       "Raiders"
      ],
      [
       "He dodges like which Dodger?",
       "Raul Mondesi",
       "Gary Sheffield",
       "Eric Karros"
      ],
      [
       "Fighting Means like who?",
       "Natrone",
       "Emmitt",
       "Barry"
      ],
      [
       "Deliver scriptures similar to who?",
       "Jesus",
       "Moses",
       "Noah"
      ],
      [
       "You couldn't catch it if you was who?",
       "Ivan Rodriguez",
       "Jorge Posada",
       "Mike Piazza"
      ]
     ],
     [
      [
       "Where is he on the phone?",
       "Luxury box",
       "Dugout",
       "Press box"
      ],
      [
       "On the phone like who?",
       "George Steinbrenner",
       "Jerry Jones",
       "Mark Cuban"
      ],
      [
       "Making you give your Diamond-back like where?",
       "Arizona",
       "Texas",
       "Florida"
      ],
      [
       "Winning always, Indian like who?",
       "Chief Noc-A-Homa",
       "Chief Wahoo",
       "Chief Joseph"
      ],
      [
       "Pharoahe's the Sporting what?",
       "Authority",
       "Goods",
       "Champ"
      ],
      [
       "You messed up when you stepped up to what?",
       "Bat",
       "The mic",
       "The line"
      ],
      [
       "How many strikes does he count?",
       "Three",
       "Two",
       "Four"
      ],
      [
       "Don't compete within the what?",
       "Zone",
       "Ring",
       "Game"
      ]
     ],
     [
      [
       "'Rebound like ___ Williams'",
       "Buck",
       "Jayson",
       "Serena"
      ],
      [
       "A Triple what threat?",
       "Crown",
       "Double",
       "Play"
      ],
      [
       "More range than who?",
       "Rey Ordonez",
       "Derek Jeter",
       "Omar Vizquel"
      ],
      [
       "Three on one like who?",
       "Phi Slamma Jamma",
       "Fab Five",
       "Showtime"
      ],
      [
       "Every rhyme hid a bitter note: 'Get a ___'",
       "Game",
       "Job",
       "Clue"
      ],
      [
       "Not who? Forget crossing over",
       "Allen Iverson",
       "Tim Hardaway",
       "Kenny Anderson"
      ],
      [
       "Similar to which Troy?",
       "Aikman",
       "Brown",
       "Polamalu"
      ],
      [
       "His rhyme defense is beyond who?",
       "Deion Sanders",
       "Darrell Green",
       "Rod Woodson"
      ]
     ]
    ]
   },
   {
    "title": "What It Is",
    "id": "XehIeWg5ZXQ",
    "cuts": [
     39.7,
     106,
     166
    ],
    "qs": [
     [
      [
       "Moving towards the new what?",
       "Millennium",
       "Century",
       "Decade"
      ],
      [
       "No longer communicate with vocal what?",
       "Inflections",
       "Chords",
       "Signals"
      ],
      [
       "We'll communicate through what?",
       "Telekinesis",
       "Telepathy",
       "Television"
      ],
      [
       "'Open your mind and concentrate ___'",
       "Harder",
       "Deeper",
       "Longer"
      ],
      [
       "What word is repeated four times?",
       "Focus",
       "Listen",
       "Breathe"
      ],
      [
       "'Hey ___, what it is'",
       "Brother",
       "Sister",
       "Homie"
      ],
      [
       "Raps like which movie?",
       "Star Wars",
       "Star Trek",
       "The Matrix"
      ],
      [
       "Only the stars die, there's no what?",
       "Sequels",
       "Endings",
       "Remakes"
      ],
      [
       "B-3 cases and which droids?",
       "C3P0's",
       "R2-D2's",
       "BB-8's"
      ]
     ],
     [
      [
       "Young who, just tryin' to eat good?",
       "Eastwood",
       "Denzel",
       "Pacino"
      ],
      [
       "'Breathe easy, ___'",
       "Relax",
       "Exhale",
       "Slow down"
      ],
      [
       "Mac like what?",
       "Fleetwood",
       "Big Mac",
       "Mac Miller"
      ],
      [
       "'Keep sleeping, I'll keep ___'",
       "Touring",
       "Working",
       "Grinding"
      ],
      [
       "Lay in the cut like what?",
       "Neosporin",
       "A band-aid",
       "Iodine"
      ],
      [
       "This is not what TV show?",
       "American Idol",
       "The Voice",
       "Star Search"
      ],
      [
       "Shine like the new five halogen what?",
       "Fog-lights",
       "Headlights",
       "Lamps"
      ],
      [
       "Remind you of when you were what age?",
       "Nine",
       "Ten",
       "Twelve"
      ]
     ],
     [
      [
       "If he's not home on the what?",
       "Range",
       "Block",
       "Couch"
      ],
      [
       "They thought he was what?",
       "Backpacks",
       "Mixtapes",
       "Hippies"
      ],
      [
       "Rearrange your furniture, fix your what?",
       "Feng shui",
       "Mattress",
       "Curtains"
      ],
      [
       "His flow is so what?",
       "Influential",
       "Incredible",
       "Exceptional"
      ],
      [
       "They get no what now?",
       "Instrumentals",
       "Features",
       "Airplay"
      ],
      [
       "'Bet your bottom ___'",
       "Dollar",
       "Line",
       "Penny"
      ],
      [
       "Next time you'll be spittin' over what?",
       "Rhymes",
       "Beats",
       "Tracks"
      ],
      [
       "What's the song called?",
       "What It Is",
       "Who It Is",
       "Where It Is"
      ]
     ]
    ]
   },
   {
    "title": "Simon Says",
    "id": "RLElKdtA0AU",
    "start": 21,
    "cuts": [
     61.5,
     93,
     149.5
    ],
    "qs": [
     [
      [
       "'Throw your hands in the ___'",
       "Sky",
       "Air",
       "Back"
      ],
      [
       "Which borough is in the back first?",
       "Queens",
       "Harlem",
       "Staten Island"
      ],
      [
       "New York City gritty what?",
       "Committee",
       "City",
       "Kitty"
      ],
      [
       "'Pity the ___'",
       "Fool",
       "Crew",
       "Kid"
      ],
      [
       "You strayed from your original what?",
       "Plan",
       "Path",
       "Crew"
      ],
      [
       "He alleviated the pain with what?",
       "Long-term goals",
       "Big plans",
       "Hard work"
      ],
      [
       "Took his underground loot without the what?",
       "Gold",
       "Chains",
       "Ice"
      ],
      [
       "You sold Platinum, he sold what in the hood?",
       "Wood",
       "Mixtapes",
       "Records"
      ]
     ],
     [
      [
       "Control the game like what?",
       "Tomb Raider",
       "Mortal Kombat",
       "Street Fighter"
      ],
      [
       "He's soon to motivate a what?",
       "Room",
       "Crowd",
       "Team"
      ],
      [
       "'Flip tips like a ___'",
       "Waiter",
       "Dealer",
       "Barber"
      ],
      [
       "'Block shots, style's ___'",
       "Greater",
       "Better",
       "Major"
      ],
      [
       "Let my lyrics what?",
       "Anoint",
       "Annoy",
       "Appoint"
      ],
      [
       "If you're holding up the what?",
       "Wall",
       "Line",
       "Bar"
      ],
      [
       "Then you're missin' the what?",
       "Point",
       "Show",
       "Party"
      ],
      [
       "Who's in the back the second time?",
       "Brooklyn",
       "Harlem",
       "Jersey"
      ]
     ],
     [
      [
       "'Yo, where you at?' Which part of town?",
       "Uptown",
       "Downtown",
       "Crosstown"
      ],
      [
       "Notorious for the six-fives and the what?",
       "BMs",
       "Benzes",
       "Jeeps"
      ],
      [
       "Ignorant minds, he does what?",
       "Frees 'em",
       "Feeds 'em",
       "Leaves 'em"
      ],
      [
       "'Slated to be the ___'",
       "Best",
       "King",
       "Champ"
      ],
      [
       "Riding the train or a what?",
       "Lexus",
       "Benz",
       "Cab"
      ],
      [
       "Rollies or what watch?",
       "Timex",
       "Swatch",
       "Casio"
      ],
      [
       "Wicked like which movie?",
       "Exorcist",
       "Poltergeist",
       "Omen"
      ],
      [
       "Which borough is in the back the third time?",
       "The Bronx",
       "Queens",
       "Harlem"
      ]
     ]
    ]
   }
  ],
  explicitSongs: [
   {
    "title": "Desire",
    "id": "lqhJZvjV99c",
    "cuts": [
     41.1,
     68.3,
     134.7
    ],
    "qs": [
     [
      [
       "What does he say it's his?",
       "Desire",
       "Dream",
       "Fire"
      ],
      [
       "'Comprehend the ___'",
       "Guidelines",
       "Headlines",
       "Deadlines"
      ],
      [
       "'My chest out, ___ or relaxed'",
       "Chinchilla'd",
       "Minked out",
       "Iced out"
      ],
      [
       "Relaxed on the what?",
       "Sidelines",
       "Bench",
       "Couch"
      ],
      [
       "'I'm so ___, understand'",
       "Famous",
       "Fly",
       "Fresh"
      ],
      [
       "Which city respects his game?",
       "New York City",
       "Atlanta",
       "LA"
      ],
      [
       "Respect my game like who?",
       "Joe Namath",
       "Phil Simms",
       "Joe Montana"
      ],
      [
       "'Y'all don't ___ me'",
       "Hear",
       "See",
       "Feel"
      ],
      [
       "'Y'all don't ___'",
       "Listen",
       "Learn",
       "Stop"
      ]
     ],
     [
      [
       "'Y'all just wanna shine, y'all just wanna ___'",
       "Glisten",
       "Glow",
       "Sparkle"
      ],
      [
       "Floss, knowin' the what is still missin'?",
       "Soul",
       "Heart",
       "Crown"
      ],
      [
       "Who am I? I'm the poetical what?",
       "Pastor",
       "Prophet",
       "Teacher"
      ],
      [
       "Slave to a label, but I own my what?",
       "Master",
       "Name",
       "Publishing"
      ],
      [
       "Monch is a 'Monarch' minus the what?",
       "A & R",
       "Crown",
       "Royalty"
      ],
      [
       "When my brain excels, your what derails?",
       "Train",
       "Plan",
       "Car"
      ],
      [
       "Make you feel the 'Clipse' like who?",
       "Pharrell",
       "Timbaland",
       "Kanye"
      ],
      [
       "'You will feel me, you will ___'",
       "Admire",
       "Admit",
       "Retire"
      ]
     ],
     [
      [
       "Desire is the fire that ignites the what?",
       "Torch",
       "Candle",
       "Stove"
      ],
      [
       "'This is not ___ science'",
       "Rocket",
       "Brain",
       "Computer"
      ],
      [
       "His mic's a what?",
       "Gavel",
       "Hammer",
       "Sword"
      ],
      [
       "When he talks, what's adjourned?",
       "Court",
       "Class",
       "School"
      ],
      [
       "He embodies what?",
       "Antibiotics",
       "Vitamins",
       "Medicine"
      ],
      [
       "What's fatally ill?",
       "Rap",
       "The game",
       "Radio"
      ],
      [
       "He telecommentates the game like who?",
       "Chick Hearn",
       "Marv Albert",
       "John Madden"
      ],
      [
       "Vocals alone evoke the emotion of black what?",
       "Choirs",
       "Churches",
       "Preachers"
      ]
     ]
    ]
   },
   {
    "title": "Official",
    "id": "NMVxipbk9B4",
    "cuts": [
     37.8,
     58.4,
     117
    ],
    "qs": [
     [
      [
       "Pharoahe's Official like what brand?",
       "Starter",
       "Champion",
       "Russell"
      ],
      [
       "Hits harder than where?",
       "Fort Green",
       "Fort Hamilton",
       "Fort Lee"
      ],
      [
       "'Authentic, Nike, Adidas and ___'",
       "Spalding",
       "Wilson",
       "Reebok"
      ],
      [
       "His intricate ways shake your whole what?",
       "Team",
       "Crew",
       "Block"
      ],
      [
       "Like number 55 on which team?",
       "Chargers",
       "Giants",
       "Raiders"
      ],
      [
       "He dodges like which Dodger?",
       "Raul Mondesi",
       "Gary Sheffield",
       "Eric Karros"
      ],
      [
       "Fighting Means like who?",
       "Natrone",
       "Emmitt",
       "Barry"
      ],
      [
       "Deliver scriptures similar to who?",
       "Jesus",
       "Moses",
       "Noah"
      ],
      [
       "You couldn't catch it if you was who?",
       "Ivan Rodriguez",
       "Jorge Posada",
       "Mike Piazza"
      ]
     ],
     [
      [
       "Where is he on the phone?",
       "Luxury box",
       "Dugout",
       "Press box"
      ],
      [
       "On the phone like who?",
       "George Steinbrenner",
       "Jerry Jones",
       "Mark Cuban"
      ],
      [
       "Making you give your Diamond-back like where?",
       "Arizona",
       "Texas",
       "Florida"
      ],
      [
       "Winning always, Indian like who?",
       "Chief Noc-A-Homa",
       "Chief Wahoo",
       "Chief Joseph"
      ],
      [
       "Pharoahe's the Sporting what?",
       "Authority",
       "Goods",
       "Champ"
      ],
      [
       "You messed up when you stepped up to what?",
       "Bat",
       "The mic",
       "The line"
      ],
      [
       "How many strikes does he count?",
       "Three",
       "Two",
       "Four"
      ],
      [
       "Don't compete within the what?",
       "Zone",
       "Ring",
       "Game"
      ]
     ],
     [
      [
       "'Rebound like ___ Williams'",
       "Buck",
       "Jayson",
       "Serena"
      ],
      [
       "A Triple what threat?",
       "Crown",
       "Double",
       "Play"
      ],
      [
       "More range than who?",
       "Rey Ordonez",
       "Derek Jeter",
       "Omar Vizquel"
      ],
      [
       "Three on one like who?",
       "Phi Slamma Jamma",
       "Fab Five",
       "Showtime"
      ],
      [
       "Every rhyme hid a bitter note: 'Get a ___'",
       "Game",
       "Job",
       "Clue"
      ],
      [
       "Not who? Forget crossing over",
       "Allen Iverson",
       "Tim Hardaway",
       "Kenny Anderson"
      ],
      [
       "Similar to which Troy?",
       "Aikman",
       "Brown",
       "Polamalu"
      ],
      [
       "His rhyme defense is beyond who?",
       "Deion Sanders",
       "Darrell Green",
       "Rod Woodson"
      ]
     ]
    ]
   },
   {
    "title": "What It Is",
    "id": "XehIeWg5ZXQ",
    "cuts": [
     39.7,
     106,
     166
    ],
    "qs": [
     [
      [
       "Moving towards the new what?",
       "Millennium",
       "Century",
       "Decade"
      ],
      [
       "No longer communicate with vocal what?",
       "Inflections",
       "Chords",
       "Signals"
      ],
      [
       "We'll communicate through what?",
       "Telekinesis",
       "Telepathy",
       "Television"
      ],
      [
       "'Open your mind and concentrate ___'",
       "Harder",
       "Deeper",
       "Longer"
      ],
      [
       "What word is repeated four times?",
       "Focus",
       "Listen",
       "Breathe"
      ],
      [
       "'Hey ___, what it is'",
       "Brother",
       "Sister",
       "Homie"
      ],
      [
       "Raps like which movie?",
       "Star Wars",
       "Star Trek",
       "The Matrix"
      ],
      [
       "Only the stars die, there's no what?",
       "Sequels",
       "Endings",
       "Remakes"
      ],
      [
       "B-3 cases and which droids?",
       "C3P0's",
       "R2-D2's",
       "BB-8's"
      ]
     ],
     [
      [
       "Young who, just tryin' to eat good?",
       "Eastwood",
       "Denzel",
       "Pacino"
      ],
      [
       "'Breathe easy, ___'",
       "Relax",
       "Exhale",
       "Slow down"
      ],
      [
       "Mac like what?",
       "Fleetwood",
       "Big Mac",
       "Mac Miller"
      ],
      [
       "'Keep sleeping, I'll keep ___'",
       "Touring",
       "Working",
       "Grinding"
      ],
      [
       "Lay in the cut like what?",
       "Neosporin",
       "A band-aid",
       "Iodine"
      ],
      [
       "This is not what TV show?",
       "American Idol",
       "The Voice",
       "Star Search"
      ],
      [
       "Shine like the new five halogen what?",
       "Fog-lights",
       "Headlights",
       "Lamps"
      ],
      [
       "Remind you of when you were what age?",
       "Nine",
       "Ten",
       "Twelve"
      ]
     ],
     [
      [
       "If he's not home on the what?",
       "Range",
       "Block",
       "Couch"
      ],
      [
       "They thought he was what?",
       "Backpacks",
       "Mixtapes",
       "Hippies"
      ],
      [
       "Rearrange your furniture, fix your what?",
       "Feng shui",
       "Mattress",
       "Curtains"
      ],
      [
       "His flow is so what?",
       "Influential",
       "Incredible",
       "Exceptional"
      ],
      [
       "They get no what now?",
       "Instrumentals",
       "Features",
       "Airplay"
      ],
      [
       "'Bet your bottom ___'",
       "Dollar",
       "Line",
       "Penny"
      ],
      [
       "Next time you'll be spittin' over what?",
       "Rhymes",
       "Beats",
       "Tracks"
      ],
      [
       "What's the song called?",
       "What It Is",
       "Who It Is",
       "Where It Is"
      ]
     ]
    ]
   },
   {
    "title": "Simon Says",
    "id": "RLElKdtA0AU",
    "start": 21,
    "cuts": [
     61.5,
     93,
     149.5
    ],
    "qs": [
     [
      [
       "'Throw your hands in the ___'",
       "Sky",
       "Air",
       "Back"
      ],
      [
       "Which borough is in the back first?",
       "Queens",
       "Harlem",
       "Staten Island"
      ],
      [
       "New York City gritty what?",
       "Committee",
       "City",
       "Kitty"
      ],
      [
       "'Pity the ___'",
       "Fool",
       "Crew",
       "Kid"
      ],
      [
       "You strayed from your original what?",
       "Plan",
       "Path",
       "Crew"
      ],
      [
       "He alleviated the pain with what?",
       "Long-term goals",
       "Big plans",
       "Hard work"
      ],
      [
       "Took his underground loot without the what?",
       "Gold",
       "Chains",
       "Ice"
      ],
      [
       "You sold Platinum, he sold what in the hood?",
       "Wood",
       "Mixtapes",
       "Records"
      ]
     ],
     [
      [
       "Control the game like what?",
       "Tomb Raider",
       "Mortal Kombat",
       "Street Fighter"
      ],
      [
       "He's soon to motivate a what?",
       "Room",
       "Crowd",
       "Team"
      ],
      [
       "'Flip tips like a ___'",
       "Waiter",
       "Dealer",
       "Barber"
      ],
      [
       "'Block shots, style's ___'",
       "Greater",
       "Better",
       "Major"
      ],
      [
       "Let my lyrics what?",
       "Anoint",
       "Annoy",
       "Appoint"
      ],
      [
       "If you're holding up the what?",
       "Wall",
       "Line",
       "Bar"
      ],
      [
       "Then you're missin' the what?",
       "Point",
       "Show",
       "Party"
      ],
      [
       "Who's in the back the second time?",
       "Brooklyn",
       "Harlem",
       "Jersey"
      ]
     ],
     [
      [
       "'Yo, where you at?' Which part of town?",
       "Uptown",
       "Downtown",
       "Crosstown"
      ],
      [
       "Notorious for the six-fives and the what?",
       "BMs",
       "Benzes",
       "Jeeps"
      ],
      [
       "Ignorant minds, he does what?",
       "Frees 'em",
       "Feeds 'em",
       "Leaves 'em"
      ],
      [
       "'Slated to be the ___'",
       "Best",
       "King",
       "Champ"
      ],
      [
       "Riding the train or a what?",
       "Lexus",
       "Benz",
       "Cab"
      ],
      [
       "Rollies or what watch?",
       "Timex",
       "Swatch",
       "Casio"
      ],
      [
       "Wicked like which movie?",
       "Exorcist",
       "Poltergeist",
       "Omen"
      ],
      [
       "Which borough is in the back the third time?",
       "The Bronx",
       "Queens",
       "Harlem"
      ]
     ]
    ]
   }
  ]
};
(function(){try{if(window.CFG.explicitSongs&&localStorage.getItem("ogfan99explicit")==="1"){window.CFG.songs=window.CFG.explicitSongs;window.CFG.saveKey+="x";}}catch(e){}})();
