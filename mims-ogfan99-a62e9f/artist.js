window.CFG = {
  name: "Mims", nameUpper: "MIMS", short: "MIMS",
  hood: "Washington Heights", hoodUpper: "WASHINGTON HEIGHTS", boro: "Manhattan",
  saveKey: "ogfan99mims1",
  startRank: "You're Not",
  ranks: ["Fly", "Like This", "Big Spinner", "Cream of the Crop", "Hot"],
  topRank: "Music Is My Savior",
  point: "Degree", points: "Degrees",
  rankRewards: {
    "Fly": { bongs: 5, line: "You're hot 'cause you're fly." },
    "Like This": { bongs: 10, line: "Now you move like this." },
    "Big Spinner": { bongs: 15, line: "Your rims keep spinning." },
    "Cream of the Crop": { bongs: 20, line: "They call you cream of the crop." },
    "Hot": { bongs: 25, line: "You run all of Washington Heights." }
  },
  trophyArt: [
    /* You're Not: a cold snowflake */
    '<g stroke="#9fd8f5" stroke-width="3" stroke-linecap="round"><path d="M40 22v52M18 35l44 26M18 61l44-26"/><path d="M34 26l6 6 6-6M34 70l6-6 6 6M18 42l8-1-3-7M62 54l-8 1 3 7M22 58l3-7-8-1M58 38l-3 7 8 1"/></g>',
    /* Fly: a pair of gold wings */
    '<path d="M40 50q-14-26-34-24q8 6 6 12q-6 0-8 4q10 0 12 6q-6 2-6 6q14-2 30-4z" fill="#ffc93c" stroke="#a87a10" stroke-width="1.5"/><path d="M40 50q14-26 34-24q-8 6-6 12q6 0 8 4q-10 0-12 6q6 2 6 6q-14-2-30-4z" fill="#ffc93c" stroke="#a87a10" stroke-width="1.5"/><circle cx="40" cy="52" r="5" fill="#ff5a1f"/>',
    /* Like This: a spinning record */
    '<circle cx="40" cy="48" r="28" fill="#141414" stroke="#444" stroke-width="2"/><circle cx="40" cy="48" r="20" fill="none" stroke="#2c2c2c" stroke-width="1.5"/><circle cx="40" cy="48" r="10" fill="#ff5a1f"/><circle cx="40" cy="48" r="2" fill="#141414"/><path d="M58 30l8-10" stroke="#ccc" stroke-width="2"/>',
    /* Big Spinner: a chrome rim */
    '<circle cx="40" cy="48" r="28" fill="#1a1a1a"/><circle cx="40" cy="48" r="21" fill="#d7dde3" stroke="#8a939c" stroke-width="2"/><g stroke="#8a939c" stroke-width="4" stroke-linecap="round"><path d="M40 30v36M22 48h36M27 35l26 26M53 35L27 61"/></g><circle cx="40" cy="48" r="6" fill="#ffc93c" stroke="#8a6b2a"/>',
    /* Cream of the Crop: a gold crown on a stack of bills */
    '<rect x="18" y="56" width="44" height="8" fill="#3f8f4a" stroke="#1f5a2a"/><rect x="20" y="64" width="44" height="8" fill="#3f8f4a" stroke="#1f5a2a"/><rect x="16" y="72" width="44" height="8" fill="#3f8f4a" stroke="#1f5a2a"/><path d="M20 54V30l10 10 10-16 10 16 10-10v24z" fill="#ffc93c" stroke="#8a6b2a" stroke-width="2"/><circle cx="40" cy="22" r="3" fill="#ff5a1f"/>',
    /* Hot: a big flame */
    '<path d="M40 78q-24 0-24-22q0-18 14-30q0 14 8 16q-4-18 8-30q4 18 14 24q8 8 4 20q-4 22-24 22z" fill="#ff5a1f" stroke="#a83010" stroke-width="2"/><path d="M40 78q-12 0-12-12q0-10 8-16q2 8 8 8q2-8 0-12q10 8 8 20q-2 12-12 12z" fill="#ffc93c"/>',
    /* Music Is My Savior: gold mic with a flame crown */
    '<path d="M30 20q2-10 6-14q0 6 4 8q2-8 6-10q2 8 4 16z" fill="#ff5a1f"/><rect x="31" y="20" width="18" height="30" rx="9" fill="#ffc93c" stroke="#8a6b2a" stroke-width="2"/><path d="M35 28h10M35 34h10M35 40h10" stroke="#8a6b2a" stroke-width="1.2"/><path d="M26 44q0 16 14 16t14-16" fill="none" stroke="#ffc93c" stroke-width="3"/><path d="M40 60v12M30 76h20" stroke="#ffc93c" stroke-width="3"/>'
  ],
  clubTitle: "The Heat Room", clubTab: "HEAT",
  tags: ["AMERICAN KING", "I'M HOT", "MIMS"],
  c1: "#ff5a1f", c2: "#ffc93c", c3: "#4fc3f7", bg: "#120906",
  headerSvg: '<g fill="#f7f3ea"><rect x="0" y="50" width="400" height="5"/><rect x="60" y="8" width="16" height="56"/><rect x="300" y="8" width="16" height="56"/><path d="M0 40Q68 4 68 8Q188 60 308 8Q340 20 400 40" fill="none" stroke="#f7f3ea" stroke-width="2"/><rect x="150" y="36" width="12" height="14"/><path d="M148 36l8-6 8 6z"/><rect x="340" y="30" width="22" height="34"/><path d="M336 30h30l-15-12z"/></g>',
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the A train to 181 St, deep under Fort Washington Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "gwb", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "palace", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "cloisters", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "corner", t: "WELCOME TO WASHINGTON HEIGHTS", x: "St Nicholas Av and W 181 St, in Washington Heights. This is Mims's game.", sfx: "spray" }
  ],
  songs: [
   {
    "title": "Winters My Summer",
    "id": "WmsexkCTbhg",
    "cuts": [
     38.4,
     99.8,
     173.9
    ],
    "qs": [
     [
      [
       "What does he say he paints?",
       "A perfect picture",
       "A portrait",
       "A mural"
      ],
      [
       "Who does he tell to bring it back?",
       "The DJ",
       "The band",
       "The crowd"
      ],
      [
       "What does he tell the DJ to do?",
       "Bring it back",
       "Turn it up",
       "Cut it off"
      ],
      [
       "He says: I'm going what?",
       "In",
       "Out",
       "Home"
      ],
      [
       "The summer's my summer, and the what is my summer?",
       "Winter",
       "Spring",
       "Fall"
      ],
      [
       "Numbers is what?",
       "Numbers",
       "Money",
       "Facts"
      ],
      [
       "What are \"we\" doing?",
       "Winning",
       "Chilling",
       "Grinding"
      ],
      [
       "So what do you want from whom?",
       "Us",
       "Me",
       "Them"
      ],
      [
       "All they're doing is what?",
       "Talking",
       "Hating",
       "Watching"
      ],
      [
       "How many times in a row does he say \"bring it back\"?",
       "Two",
       "Three",
       "Four"
      ],
      [
       "Which season does he keep claiming as his?",
       "Summer",
       "Autumn",
       "Spring"
      ]
     ],
     [
      [
       "He's so fly the top was obstructing his what?",
       "View",
       "Hair",
       "Hat"
      ],
      [
       "So he got the top what?",
       "Trimmed off",
       "Painted",
       "Raised"
      ],
      [
       "What does he say he dislikes?",
       "Ceilings",
       "Rules",
       "Winter"
      ],
      [
       "Ben Franklin is cool, but he likes what?",
       "Millions",
       "Hundreds",
       "Thousands"
      ],
      [
       "Y'all be club hopping, he'll be what?",
       "Island hopping",
       "Bar hopping",
       "Shop hopping"
      ],
      [
       "Why is you so what?",
       "Defensive",
       "Nervous",
       "Quiet"
      ],
      [
       "He's comfy in that two-what?",
       "Seat",
       "Door",
       "Tone"
      ],
      [
       "He talks that money talk and calls it his what flow?",
       "Trump",
       "Boss",
       "Cash"
      ],
      [
       "You should see the numbers, they go what?",
       "Comma, comma, comma",
       "Up, up, up",
       "Zero, zero, zero"
      ],
      [
       "Feel the heat and let it what?",
       "Simmer",
       "Burn",
       "Cool"
      ],
      [
       "How hot is it in the middle of the winter?",
       "98 degrees",
       "100 degrees",
       "75 degrees"
      ]
     ],
     [
      [
       "What kind of money does he call it?",
       "Global warming money",
       "Old money",
       "Fast money"
      ],
      [
       "His winter is never what?",
       "Cold",
       "Long",
       "Dark"
      ],
      [
       "One bottle of what?",
       "Rose",
       "Henny",
       "Ace"
      ],
      [
       "Tonight is going to be the greatest what never told?",
       "Story",
       "Night",
       "Song"
      ],
      [
       "Most of y'all love it, the rest of y'all are doing what?",
       "Fronting",
       "Hating",
       "Leaving"
      ],
      [
       "Just admit it, your man ain't got what on him?",
       "Nothing",
       "Money",
       "Style"
      ],
      [
       "What do the fans say Mims got?",
       "A new style",
       "A new car",
       "A new chain"
      ],
      [
       "The groupies say he's acting how?",
       "Brand new",
       "Too rich",
       "Too famous"
      ],
      [
       "He wishes he knew it when?",
       "Then",
       "Sooner",
       "Tomorrow"
      ],
      [
       "Every day he's doing what?",
       "Beasting",
       "Resting",
       "Partying"
      ],
      [
       "It ain't tricking if you what?",
       "Got it",
       "Want it",
       "Need it"
      ]
     ]
    ]
   },
   {
    "title": "Move (If You Wanna)",
    "id": "HZMUJORGgjg",
    "start": 16.5,
    "cuts": [
     58.6,
     112.6,
     161.2
    ],
    "qs": [
     [
      [
       "Move if you what?",
       "Wanna",
       "Can",
       "Dare"
      ],
      [
       "He doesn't understand how he can have so many what?",
       "Haters",
       "Fans",
       "Friends"
      ],
      [
       "He's their father like his name is who?",
       "Darth Vader",
       "Luke Skywalker",
       "Batman"
      ],
      [
       "Knowing he's their what?",
       "Father",
       "Brother",
       "Teacher"
      ],
      [
       "He can get you hemmed up while he's being what?",
       "Tailored",
       "Paid",
       "Watched"
      ],
      [
       "He slides off to the side like a what?",
       "Fader",
       "Skater",
       "Shadow"
      ],
      [
       "Which way does he slide off?",
       "To the side",
       "Up top",
       "Out back"
      ],
      [
       "He's the president, governor and who?",
       "Mayor",
       "Senator",
       "Judge"
      ],
      [
       "He controls everything like a what?",
       "Dictator",
       "King",
       "Boss"
      ],
      [
       "What does he control?",
       "Everything",
       "The city",
       "The music"
      ],
      [
       "Which title comes first in his list?",
       "President",
       "Mayor",
       "Governor"
      ]
     ],
     [
      [
       "What's on his arm?",
       "A model",
       "A watch",
       "A tattoo"
      ],
      [
       "Does he have to pay her?",
       "No",
       "Yes",
       "Sometimes"
      ],
      [
       "All he has to do is tell her where he wants to what?",
       "Take her",
       "Meet her",
       "Call her"
      ],
      [
       "Catch them out in which country first?",
       "Italy",
       "France",
       "Spain"
      ],
      [
       "Then they're in where?",
       "Jamaica",
       "Japan",
       "Jersey"
      ],
      [
       "Caught up in the rapture like who?",
       "Anita Baker",
       "Whitney Houston",
       "Mary J. Blige"
      ],
      [
       "Caught up in the what?",
       "Rapture",
       "Moment",
       "Music"
      ],
      [
       "He rolls up like a what?",
       "Skater",
       "Racer",
       "Rider"
      ],
      [
       "Then he keeps it what?",
       "Movin'",
       "Real",
       "Quiet"
      ],
      [
       "What does he say as he leaves?",
       "See you later",
       "Peace out",
       "Good night"
      ],
      [
       "What name does he shout at the end of the verse?",
       "Mims",
       "Diddy",
       "Hov"
      ]
     ],
     [
      [
       "He's trying to keep it what?",
       "Cool",
       "Real",
       "Quiet"
      ],
      [
       "He's trying to have a little what?",
       "Fun",
       "Money",
       "Time"
      ],
      [
       "When you're movin' numbers, who starts to wonder?",
       "The haters",
       "The fans",
       "The ladies"
      ],
      [
       "They talk behind your what?",
       "Back",
       "Name",
       "Door"
      ],
      [
       "He's hot like the what?",
       "Sun",
       "Fire",
       "Oven"
      ],
      [
       "Like the middle of the what?",
       "Summer",
       "Day",
       "Desert"
      ],
      [
       "You can call him what?",
       "Thunder",
       "Lightning",
       "Storm"
      ],
      [
       "What kind of wonder can they call it?",
       "One-hit wonder",
       "Seventh wonder",
       "No wonder"
      ],
      [
       "Play with fire and you're gonna get what?",
       "Burned up",
       "Locked up",
       "Fired up"
      ],
      [
       "They see he's on the what?",
       "Come-up",
       "Way out",
       "Rise"
      ],
      [
       "It's our turn now; if you want it, what?",
       "Take it from us",
       "Come and get it",
       "Go get it"
      ]
     ]
    ]
   },
   {
    "title": "This Is Why I'm Hot",
    "id": "vVRFdO2MBnU",
    "cuts": [
     42.2,
     108.7,
     226.5
    ],
    "qs": [
     [
      [
       "Why is he hot?",
       "'Cause I'm fly",
       "'Cause I'm rich",
       "'Cause I'm famous"
      ],
      [
       "Why ain't you?",
       "'Cause you're not",
       "'Cause you're broke",
       "'Cause you're slow"
      ],
      [
       "What name does he shout in the hook?",
       "Mims",
       "Hov",
       "Diddy"
      ],
      [
       "Now he's gotta do what?",
       "Rap",
       "Sing",
       "Dance"
      ],
      [
       "He says he can sell a what?",
       "Mill",
       "Hit",
       "House"
      ],
      [
       "Say you nothing on the what?",
       "Track",
       "Block",
       "Stage"
      ],
      [
       "Where does he represent?",
       "New York",
       "Chicago",
       "Atlanta"
      ],
      [
       "\"This is why I'm ___\"",
       "Hot",
       "Here",
       "Him"
      ],
      [
       "What sound ends one hook line: \"This is why I'm hot, ___\"?",
       "Ooh",
       "Hey",
       "Whoa"
      ],
      [
       "How does the song start?",
       "This is why I'm hot",
       "Let's get it",
       "Here we go"
      ],
      [
       "In the hook, who \"ain't\"?",
       "You",
       "Me",
       "Them"
      ]
     ],
     [
      [
       "Where does he say he's got it?",
       "On my back",
       "In my bag",
       "On my chest"
      ],
      [
       "Since they say we lost it, what's he gonna do?",
       "Bring it back",
       "Let it go",
       "Start over"
      ],
      [
       "He loves the dirty what?",
       "Dirty",
       "South",
       "Money"
      ],
      [
       "What do the ladies do as soon as he hits the club?",
       "Bounce",
       "Leave",
       "Scream"
      ],
      [
       "Where do they love to take it slow?",
       "The Midwest",
       "The South",
       "The East"
      ],
      [
       "When he hits the H, you get it on the what?",
       "Floor",
       "Wall",
       "Stage"
      ],
      [
       "If you needed hyphy, he takes it where?",
       "The Bay",
       "The beach",
       "The block"
      ],
      [
       "Frisco to what?",
       "Sac town",
       "Motown",
       "Chinatown"
      ],
      [
       "He does it which way?",
       "The Cali way",
       "The New York way",
       "The right way"
      ],
      [
       "They like the way he dresses and his what?",
       "Attire",
       "Ride",
       "Fire"
      ],
      [
       "He moves crowds from where to where?",
       "Side to side",
       "Coast to coast",
       "Front to back"
      ]
     ],
     [
      [
       "How often can you catch him on the block?",
       "Every other day",
       "Every Friday",
       "Every night"
      ],
      [
       "How many bars?",
       "16",
       "12",
       "32"
      ],
      [
       "He pushes cars off the what?",
       "Lot",
       "Block",
       "Road"
      ],
      [
       "He shuts stores down just so he can what?",
       "Shop",
       "Stop",
       "Eat"
      ],
      [
       "Where does he meet his homie?",
       "On the ave",
       "At the park",
       "On the train"
      ],
      [
       "What neighborhood does he hit?",
       "Wash Heights",
       "Harlem",
       "The Bronx"
      ],
      [
       "They're into big what?",
       "Spinners",
       "Chains",
       "Trucks"
      ],
      [
       "He hits the switch that takes away the what?",
       "Top",
       "Doors",
       "Lights"
      ],
      [
       "Chicks call him what?",
       "Cream of the crop",
       "King of the block",
       "Top of the line"
      ],
      [
       "Where do they hit together?",
       "The studio",
       "The club",
       "The mall"
      ],
      [
       "When he hits the room, what do the shorties do?",
       "Stop and stare",
       "Run and hide",
       "Sing along"
      ]
     ]
    ]
   }
  ],
  explicitSongs: [
   {
    "title": "Winters My Summer",
    "id": "WmsexkCTbhg",
    "cuts": [
     38.4,
     99.8,
     173.9
    ],
    "qs": [
     [
      [
       "What does he say he paints?",
       "A perfect picture",
       "A portrait",
       "A mural"
      ],
      [
       "Who does he tell to bring it back?",
       "The DJ",
       "The band",
       "The crowd"
      ],
      [
       "What does he tell the DJ to do?",
       "Bring it back",
       "Turn it up",
       "Cut it off"
      ],
      [
       "He says: I'm going what?",
       "In",
       "Out",
       "Home"
      ],
      [
       "The summer's my summer, and the what is my summer?",
       "Winter",
       "Spring",
       "Fall"
      ],
      [
       "Numbers is what?",
       "Numbers",
       "Money",
       "Facts"
      ],
      [
       "What are \"we\" doing?",
       "Winning",
       "Chilling",
       "Grinding"
      ],
      [
       "So what do you want from whom?",
       "Us",
       "Me",
       "Them"
      ],
      [
       "All they're doing is what?",
       "Talking",
       "Hating",
       "Watching"
      ],
      [
       "How many times in a row does he say \"bring it back\"?",
       "Two",
       "Three",
       "Four"
      ],
      [
       "Which season does he keep claiming as his?",
       "Summer",
       "Autumn",
       "Spring"
      ]
     ],
     [
      [
       "He's so fly the top was obstructing his what?",
       "View",
       "Hair",
       "Hat"
      ],
      [
       "So he got the top what?",
       "Trimmed off",
       "Painted",
       "Raised"
      ],
      [
       "What does he say he dislikes?",
       "Ceilings",
       "Rules",
       "Winter"
      ],
      [
       "Ben Franklin is cool, but he likes what?",
       "Millions",
       "Hundreds",
       "Thousands"
      ],
      [
       "Y'all be club hopping, he'll be what?",
       "Island hopping",
       "Bar hopping",
       "Shop hopping"
      ],
      [
       "Why is you so what?",
       "Defensive",
       "Nervous",
       "Quiet"
      ],
      [
       "He's comfy in that two-what?",
       "Seat",
       "Door",
       "Tone"
      ],
      [
       "He talks that money talk and calls it his what flow?",
       "Trump",
       "Boss",
       "Cash"
      ],
      [
       "You should see the numbers, they go what?",
       "Comma, comma, comma",
       "Up, up, up",
       "Zero, zero, zero"
      ],
      [
       "Feel the heat and let it what?",
       "Simmer",
       "Burn",
       "Cool"
      ],
      [
       "How hot is it in the middle of the winter?",
       "98 degrees",
       "100 degrees",
       "75 degrees"
      ]
     ],
     [
      [
       "What kind of money does he call it?",
       "Global warming money",
       "Old money",
       "Fast money"
      ],
      [
       "His winter is never what?",
       "Cold",
       "Long",
       "Dark"
      ],
      [
       "One bottle of what?",
       "Rose",
       "Henny",
       "Ace"
      ],
      [
       "Tonight is going to be the greatest what never told?",
       "Story",
       "Night",
       "Song"
      ],
      [
       "Most of y'all love it, the rest of y'all are doing what?",
       "Fronting",
       "Hating",
       "Leaving"
      ],
      [
       "Just admit it, your man ain't got what on him?",
       "Nothing",
       "Money",
       "Style"
      ],
      [
       "What do the fans say Mims got?",
       "A new style",
       "A new car",
       "A new chain"
      ],
      [
       "The groupies say he's acting how?",
       "Brand new",
       "Too rich",
       "Too famous"
      ],
      [
       "He wishes he knew it when?",
       "Then",
       "Sooner",
       "Tomorrow"
      ],
      [
       "Every day he's doing what?",
       "Beasting",
       "Resting",
       "Partying"
      ],
      [
       "It ain't tricking if you what?",
       "Got it",
       "Want it",
       "Need it"
      ]
     ]
    ]
   },
   {
    "title": "Move (If You Wanna)",
    "id": "HZMUJORGgjg",
    "start": 16.5,
    "cuts": [
     58.6,
     112.6,
     161.2
    ],
    "qs": [
     [
      [
       "Move if you what?",
       "Wanna",
       "Can",
       "Dare"
      ],
      [
       "He doesn't understand how he can have so many what?",
       "Haters",
       "Fans",
       "Friends"
      ],
      [
       "He's their father like his name is who?",
       "Darth Vader",
       "Luke Skywalker",
       "Batman"
      ],
      [
       "Knowing he's their what?",
       "Father",
       "Brother",
       "Teacher"
      ],
      [
       "He can get you hemmed up while he's being what?",
       "Tailored",
       "Paid",
       "Watched"
      ],
      [
       "He slides off to the side like a what?",
       "Fader",
       "Skater",
       "Shadow"
      ],
      [
       "Which way does he slide off?",
       "To the side",
       "Up top",
       "Out back"
      ],
      [
       "He's the president, governor and who?",
       "Mayor",
       "Senator",
       "Judge"
      ],
      [
       "He controls everything like a what?",
       "Dictator",
       "King",
       "Boss"
      ],
      [
       "What does he control?",
       "Everything",
       "The city",
       "The music"
      ],
      [
       "Which title comes first in his list?",
       "President",
       "Mayor",
       "Governor"
      ]
     ],
     [
      [
       "What's on his arm?",
       "A model",
       "A watch",
       "A tattoo"
      ],
      [
       "Does he have to pay her?",
       "No",
       "Yes",
       "Sometimes"
      ],
      [
       "All he has to do is tell her where he wants to what?",
       "Take her",
       "Meet her",
       "Call her"
      ],
      [
       "Catch them out in which country first?",
       "Italy",
       "France",
       "Spain"
      ],
      [
       "Then they're in where?",
       "Jamaica",
       "Japan",
       "Jersey"
      ],
      [
       "Caught up in the rapture like who?",
       "Anita Baker",
       "Whitney Houston",
       "Mary J. Blige"
      ],
      [
       "Caught up in the what?",
       "Rapture",
       "Moment",
       "Music"
      ],
      [
       "He rolls up like a what?",
       "Skater",
       "Racer",
       "Rider"
      ],
      [
       "Then he keeps it what?",
       "Movin'",
       "Real",
       "Quiet"
      ],
      [
       "What does he say as he leaves?",
       "See you later",
       "Peace out",
       "Good night"
      ],
      [
       "What name does he shout at the end of the verse?",
       "Mims",
       "Diddy",
       "Hov"
      ]
     ],
     [
      [
       "He's trying to keep it what?",
       "Cool",
       "Real",
       "Quiet"
      ],
      [
       "He's trying to have a little what?",
       "Fun",
       "Money",
       "Time"
      ],
      [
       "When you're movin' numbers, who starts to wonder?",
       "The haters",
       "The fans",
       "The ladies"
      ],
      [
       "They talk behind your what?",
       "Back",
       "Name",
       "Door"
      ],
      [
       "He's hot like the what?",
       "Sun",
       "Fire",
       "Oven"
      ],
      [
       "Like the middle of the what?",
       "Summer",
       "Day",
       "Desert"
      ],
      [
       "You can call him what?",
       "Thunder",
       "Lightning",
       "Storm"
      ],
      [
       "What kind of wonder can they call it?",
       "One-hit wonder",
       "Seventh wonder",
       "No wonder"
      ],
      [
       "Play with fire and you're gonna get what?",
       "Burned up",
       "Locked up",
       "Fired up"
      ],
      [
       "They see he's on the what?",
       "Come-up",
       "Way out",
       "Rise"
      ],
      [
       "It's our turn now; if you want it, what?",
       "Take it from us",
       "Come and get it",
       "Go get it"
      ]
     ]
    ]
   },
   {
    "title": "This Is Why I'm Hot",
    "id": "vVRFdO2MBnU",
    "cuts": [
     42.2,
     108.7,
     226.5
    ],
    "qs": [
     [
      [
       "Why is he hot?",
       "'Cause I'm fly",
       "'Cause I'm rich",
       "'Cause I'm famous"
      ],
      [
       "Why ain't you?",
       "'Cause you're not",
       "'Cause you're broke",
       "'Cause you're slow"
      ],
      [
       "What name does he shout in the hook?",
       "Mims",
       "Hov",
       "Diddy"
      ],
      [
       "Now he's gotta do what?",
       "Rap",
       "Sing",
       "Dance"
      ],
      [
       "He says he can sell a what?",
       "Mill",
       "Hit",
       "House"
      ],
      [
       "Say you nothing on the what?",
       "Track",
       "Block",
       "Stage"
      ],
      [
       "Where does he represent?",
       "New York",
       "Chicago",
       "Atlanta"
      ],
      [
       "\"This is why I'm ___\"",
       "Hot",
       "Here",
       "Him"
      ],
      [
       "What sound ends one hook line: \"This is why I'm hot, ___\"?",
       "Ooh",
       "Hey",
       "Whoa"
      ],
      [
       "How does the song start?",
       "This is why I'm hot",
       "Let's get it",
       "Here we go"
      ],
      [
       "In the hook, who \"ain't\"?",
       "You",
       "Me",
       "Them"
      ]
     ],
     [
      [
       "Where does he say he's got it?",
       "On my back",
       "In my bag",
       "On my chest"
      ],
      [
       "Since they say we lost it, what's he gonna do?",
       "Bring it back",
       "Let it go",
       "Start over"
      ],
      [
       "He loves the dirty what?",
       "Dirty",
       "South",
       "Money"
      ],
      [
       "What do the ladies do as soon as he hits the club?",
       "Bounce",
       "Leave",
       "Scream"
      ],
      [
       "Where do they love to take it slow?",
       "The Midwest",
       "The South",
       "The East"
      ],
      [
       "When he hits the H, you get it on the what?",
       "Floor",
       "Wall",
       "Stage"
      ],
      [
       "If you needed hyphy, he takes it where?",
       "The Bay",
       "The beach",
       "The block"
      ],
      [
       "Frisco to what?",
       "Sac town",
       "Motown",
       "Chinatown"
      ],
      [
       "He does it which way?",
       "The Cali way",
       "The New York way",
       "The right way"
      ],
      [
       "They like the way he dresses and his what?",
       "Attire",
       "Ride",
       "Fire"
      ],
      [
       "He moves crowds from where to where?",
       "Side to side",
       "Coast to coast",
       "Front to back"
      ]
     ],
     [
      [
       "How often can you catch him on the block?",
       "Every other day",
       "Every Friday",
       "Every night"
      ],
      [
       "How many bars?",
       "16",
       "12",
       "32"
      ],
      [
       "He pushes cars off the what?",
       "Lot",
       "Block",
       "Road"
      ],
      [
       "He shuts stores down just so he can what?",
       "Shop",
       "Stop",
       "Eat"
      ],
      [
       "Where does he meet his homie?",
       "On the ave",
       "At the park",
       "On the train"
      ],
      [
       "What neighborhood does he hit?",
       "Wash Heights",
       "Harlem",
       "The Bronx"
      ],
      [
       "They're into big what?",
       "Spinners",
       "Chains",
       "Trucks"
      ],
      [
       "He hits the switch that takes away the what?",
       "Top",
       "Doors",
       "Lights"
      ],
      [
       "Chicks call him what?",
       "Cream of the crop",
       "King of the block",
       "Top of the line"
      ],
      [
       "Where do they hit together?",
       "The studio",
       "The club",
       "The mall"
      ],
      [
       "When he hits the room, what do the shorties do?",
       "Stop and stare",
       "Run and hide",
       "Sing along"
      ]
     ]
    ]
   }
  ]
};
(function(){try{if(window.CFG.explicitSongs&&localStorage.getItem("ogfan99explicit")==="1"){window.CFG.songs=window.CFG.explicitSongs;window.CFG.saveKey+="x";}}catch(e){}})();
