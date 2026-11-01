/* Fat Joe: Morrisania, the Bronx (raised in the Forest Houses, Trinity Av side). Joseph Cartagena, Puerto Rican and Cuban. The Don, Terror Squad. */
window.CFG = {
  name: "Fat Joe", nameUpper: "FAT JOE", short: "JOE",
  hood: "Morrisania", hoodUpper: "MORRISANIA", boro: "the Bronx",
  saveKey: "ogfan99fatjoe1",
  /* everybody starts as a hater ("haters get tight..."), climbs the catalog up to All The Way Up */
  startRank: "Hater",
  ranks: ["Represent", "Flow Joe", "Terror Squad", "Lean Back", "Don Cartagena"],
  topRank: "All The Way Up",
  point: "Ring", points: "Rings",
  rankRewards: {
    "Represent": { bongs: 5, line: "Represent. You're putting the Bronx on now." },
    "Flow Joe": { bongs: 10, line: "Flow Joe. You came out the gate smooth." },
    "Terror Squad": { bongs: 15, line: "Terror Squad. You're down with the crew." },
    "Lean Back": { bongs: 20, line: "Lean Back. Pull up your pants and do the rockaway." },
    "Don Cartagena": { bongs: 25, line: "You run all of Morrisania." }
  },
  trophyArt: [
    /* Hater: a small grey rain cloud with a frown */
    '<path d="M18 52q-10 0 -10 -10q0 -10 12 -10q2 -14 18 -14q14 0 18 12q14 0 14 12q0 10 -12 10z" fill="#8a9099" stroke="#4a4f57" stroke-width="2"/>' +
    '<circle cx="32" cy="40" r="2" fill="#2a2d33"/><circle cx="48" cy="40" r="2" fill="#2a2d33"/><path d="M33 48q7 -5 14 0" stroke="#2a2d33" stroke-width="2" fill="none"/>' +
    '<path d="M24 58l-3 8M40 58l-3 8M56 58l-3 8" stroke="#6fa8dc" stroke-width="2.5" stroke-linecap="round"/>',
    /* Represent: a cassette tape with a gold label reading BX */
    '<rect x="8" y="30" width="64" height="42" rx="4" fill="#2a2a2e" stroke="#111" stroke-width="2"/><rect x="14" y="35" width="52" height="18" rx="2" fill="#ffd34d"/>' +
    '<text x="40" y="49" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="#111">BX</text>' +
    '<circle cx="28" cy="62" r="5" fill="#ddd"/><circle cx="52" cy="62" r="5" fill="#ddd"/><rect x="30" y="60" width="20" height="4" fill="#5a4a3a"/>',
    /* Flow Joe: a black record with a red label */
    '<circle cx="40" cy="46" r="32" fill="#111"/><circle cx="40" cy="46" r="24" fill="none" stroke="#2c2c2c"/><circle cx="40" cy="46" r="15" fill="#e63946"/>' +
    '<text x="40" y="44" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" fill="#fff">FLOW JOE</text><circle cx="40" cy="51" r="2" fill="#f7f3ea"/>',
    /* Terror Squad: a crest shield, red and blue with a gold TS */
    '<path d="M40 14l26 8v22q0 22 -26 34q-26 -12 -26 -34v-22z" fill="#1d3f8f" stroke="#ffd34d" stroke-width="3"/>' +
    '<path d="M40 18l22 7v19q0 18 -22 29z" fill="#e63946"/>' +
    '<text x="40" y="54" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="20" fill="#ffd34d" stroke="#111" stroke-width="1" paint-order="stroke">TS</text>',
    /* Lean Back: a silver boombox */
    '<rect x="6" y="34" width="68" height="40" rx="5" fill="#b9c0c8" stroke="#4a4f57" stroke-width="2"/><path d="M20 34q0 -12 20 -12t20 12" stroke="#4a4f57" stroke-width="3" fill="none"/>' +
    '<circle cx="22" cy="56" r="11" fill="#2a2d33"/><circle cx="22" cy="56" r="5" fill="#ffd34d"/><circle cx="58" cy="56" r="11" fill="#2a2d33"/><circle cx="58" cy="56" r="5" fill="#ffd34d"/>' +
    '<rect x="34" y="40" width="12" height="8" fill="#e63946"/>',
    /* Don Cartagena: a black fedora with a gold band */
    '<ellipse cx="40" cy="66" rx="34" ry="8" fill="#16161a" stroke="#000" stroke-width="1.5"/><path d="M18 64q2 -36 22 -36t22 36z" fill="#1f1f24" stroke="#000" stroke-width="1.5"/>' +
    '<path d="M32 30q8 6 16 0" stroke="#000" stroke-width="2" fill="none"/><rect x="19" y="54" width="42" height="7" fill="#ffd34d"/>',
    /* All The Way Up: a gold crown riding on a gold arrow pointing up */
    '<path d="M36 78v-38h-10l14 -16 14 16h-10v38z" fill="#ffd34d" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M22 22l4 -16 7 8 7 -12 7 12 7 -8 4 16z" fill="#ffd34d" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<circle cx="40" cy="16" r="2.5" fill="#e63946"/><circle cx="30" cy="18" r="2" fill="#2f6fdb"/><circle cx="50" cy="18" r="2" fill="#2f6fdb"/>'
  ],
  clubTitle: "The Squad", clubTab: "SQUAD",
  tags: ["TERROR SQUAD", "LEAN BACK", "THE DON"],
  c1: "#ffd34d", c2: "#e63946", c3: "#2f6fdb", bg: "#120c06",
  /* Morrisania: tall project towers, the el running across, rowhouse roofs, a water tower */
  headerSvg: (function () {
    let s = '<rect x="0" y="50" width="400" height="5"/>';
    for (let x = 0; x < 400; x += 36) s += '<rect x="' + (x + 14) + '" y="54" width="5" height="10"/>';
    s += '<rect x="8" y="6" width="38" height="44"/><rect x="54" y="14" width="38" height="36"/><rect x="100" y="4" width="38" height="46"/>';
    for (let x = 150; x < 250; x += 20) s += '<rect x="' + x + '" y="30" width="18" height="20"/>';
    s += '<rect x="262" y="22" width="16" height="12"/><path d="M260 22l10 -8 10 8z"/><rect x="264" y="34" width="2" height="16"/><rect x="274" y="34" width="2" height="16"/>';
    s += '<rect x="292" y="12" width="44" height="38"/><rect x="346" y="2" width="46" height="48"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@fatjoe", url: "https://www.instagram.com/fatjoe/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 2 or the 5 to Prospect Av, up on the el over Westchester Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "rooftop", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "kicks", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "flags", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO MORRISANIA", x: "Trinity Av and E 163 St by the Forest Houses. This is Fat Joe's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Lean Back", id: "ajmI1P3r1w4", cuts: [80.6, 106.1, 246.1], qs: [
      [
        ["\"Throw your hands in the...\" what?", "Air", "Sky", "Back"],
        ["Which producer does he shout out at the start?", "Scott Storch", "Swizz Beatz", "Just Blaze"],
        ["\"Yeah, Khaled, I...\" what?", "See you", "Hear you", "Got you"],
        ["\"We from the Bronx, New York...\" what?", "Things happen", "Hands up", "Stand up"],
        ["\"It's a cold world and this is...\" what?", "Ice", "Life", "Gold"],
        ["The Phantom is in front of the building on which avenue?", "Trinity Ave", "Prospect Ave", "Tinton Ave"],
        ["How many years has he been legit?", "Ten", "Five", "Twenty"]
      ],
      [
        ["He came out the gate on some what?", "Flo-Jo", "Rocky", "Jordan"],
        ["\"Fat brother with the...\" what?", "Logo", "Chain", "Hat"],
        ["What don't they do?", "Dance", "Sing", "Sleep"],
        ["\"We just pull up our...\" what?", "Pants", "Sleeves", "Socks"],
        ["\"And do the...\" what?", "Rockaway", "Running man", "Wop"],
        ["\"Now...\" what?", "Lean back", "Step back", "Lay back"],
        ["How many times does he say \"lean back\" in the line after?", "Three", "Two", "Five"]
      ],
      [
        ["Which piece of clothing rhymes with \"better now\"?", "Sweater", "Jacket", "Hoodie"],
        ["That G4 can fly through any what?", "Weather", "Storm", "Night"],
        ["Who gets tight when you're worth some millions?", "Haters", "Fans", "Neighbors"],
        ["What does he sport to hurt their feelings?", "Chinchilla", "Mink", "Leather"],
        ["He's front row in which city?", "Vegas", "Miami", "Atlanta"],
        ["Which court does he not wanna speak about?", "The Rucker", "The Garden", "Dyckman"],
        ["His team didn't have to play to win the what?", "Championship", "Trophy", "Series"]
      ]
    ] },
    { title: "Flow Joe", locked: true, cuts: [], qs: [] },
    { title: "Success", locked: true, cuts: [], qs: [] },
    { title: "Take A Look At My Life", locked: true, cuts: [], qs: [] },
    { title: "Envy", locked: true, cuts: [], qs: [] }
  ],
  explicitSongs: [
   {
    "title": "All The Way Up",
    "id": "y2ak_oBeC-I",
    "cuts": [
     40.8,
     98.1,
     208.5
    ],
    "qs": [
     [
      [
       "What word kicks off the song, said twice?",
       "Go",
       "Up",
       "Yo"
      ],
      [
       "\"Nothing can ___ me\"",
       "Stop",
       "Hold",
       "Touch"
      ],
      [
       "\"I'm all the way...\"",
       "Up",
       "Out",
       "In"
      ],
      [
       "\"Shorty what you want? Shorty what you...\"",
       "Need",
       "Got",
       "Like"
      ],
      [
       "\"We ain't ever...\"",
       "Leavin'",
       "Losin'",
       "Stoppin'"
      ],
      [
       "\"Counting up this...\"",
       "Money",
       "Paper",
       "Change"
      ],
      [
       "\"We ain't never...\"",
       "Sleepin'",
       "Stoppin'",
       "Restin'"
      ],
      [
       "\"You got V12, I got...\"",
       "12V",
       "V8",
       "12 cars"
      ]
     ],
     [
      [
       "\"With ___ coupes and Rolexes\"",
       "Bentley",
       "Benz",
       "Porsche"
      ],
      [
       "Bentley coupes and what watches?",
       "Rolexes",
       "Cartiers",
       "APs"
      ],
      [
       "\"Had to stash the...\"",
       "Jewels",
       "Cash",
       "Keys"
      ],
      [
       "\"Shorty ___ showin' off her new things\"",
       "Uptown",
       "Downtown",
       "Crosstown"
      ],
      [
       "\"Showin' off her new...\"",
       "Things",
       "Shoes",
       "Clothes"
      ],
      [
       "\"Couldn't take it off so I gave her...\"",
       "The chain",
       "The ring",
       "The watch"
      ],
      [
       "\"Champion sound, yeah I got a few...\"",
       "Rings",
       "Belts",
       "Cars"
      ],
      [
       "\"And you can ___ up\"",
       "Stay",
       "Stand",
       "Go"
      ],
      [
       "\"If you ask anybody where I...\"",
       "Live",
       "Stay",
       "Go"
      ],
      [
       "\"They'll point to the...\"",
       "Hills",
       "Sky",
       "Top"
      ]
     ],
     [
      [
       "\"Just left the big house to a ___ house\"",
       "Bigger",
       "Brand new",
       "Beach"
      ],
      [
       "\"Chanel ___ bag\"",
       "Croc",
       "Quilted",
       "Leather"
      ],
      [
       "\"With the gold...\"",
       "Chains",
       "Teeth",
       "Rings"
      ],
      [
       "\"I'm talkin' color money, purple...\"",
       "Yen",
       "Euros",
       "Pesos"
      ],
      [
       "\"...and blue...\"",
       "Dirham",
       "Dollars",
       "Pounds"
      ],
      [
       "\"I got brown...\"",
       "Lira",
       "Pesos",
       "Rupees"
      ],
      [
       "\"Hopped in the helicopter...\"",
       "Uber",
       "Taxi",
       "Jet"
      ],
      [
       "What gets said twice before the beat cuts out?",
       "Stop the music",
       "Turn it up",
       "Hold it down"
      ],
      [
       "\"They want us...\"",
       "Broke",
       "Gone",
       "Quiet"
      ],
      [
       "\"They don't want us to be ___ up\"",
       "Blessed",
       "Lifted",
       "Locked"
      ],
      [
       "\"___, what you want?\"",
       "Shorty",
       "Mami",
       "Baby"
      ]
     ]
    ]
   },
   {
    "title": "What's Luv?",
    "id": "VpvyG2NrS1Y",
    "cuts": [
     40.2,
     101.1,
     216.4
    ],
    "qs": [
     [
      [
       "\"Joe Crack the...\"",
       "Don",
       "Boss",
       "King"
      ],
      [
       "Which producer gets shouted out at the start?",
       "Irv Gotti",
       "Scott Storch",
       "Just Blaze"
      ],
      [
       "Which singer gets named at the start?",
       "Ashanti",
       "Beyoncé",
       "Mya"
      ],
      [
       "\"Ashanti, Terror, Terror...\"",
       "Squad",
       "Dome",
       "Team"
      ],
      [
       "\"It should be about us, be about...\"",
       "Trust",
       "Love",
       "Time"
      ],
      [
       "\"Got to do, got to do with it,...\"",
       "Babe",
       "Girl",
       "Boy"
      ],
      [
       "\"What's ___\" (the hook)",
       "Love",
       "Up",
       "Good"
      ],
      [
       "\"It's about ___, it's about trust\"",
       "Us",
       "You",
       "Me"
      ]
     ],
     [
      [
       "\"Woo, yeah, slow ___, baby\"",
       "Down",
       "It",
       "Up"
      ],
      [
       "\"Let you know from the...\"",
       "Gate",
       "Start",
       "Door"
      ],
      [
       "\"She can be the ___ type\"",
       "Office",
       "Quiet",
       "Party"
      ],
      [
       "\"I'm a ___, whether in a hoodie or a linen\"",
       "Rider",
       "Baller",
       "Driver"
      ],
      [
       "\"Whether in a hoodie or a...\"",
       "Linen",
       "Leather",
       "Suit"
      ],
      [
       "\"A provider, you should see the ___ on my women\"",
       "Jewelry",
       "Diamonds",
       "Furs"
      ],
      [
       "\"And I'm livin' it...\"",
       "Up",
       "Large",
       "Right"
      ],
      [
       "\"The Squad stay fillin' the...\"",
       "Truck",
       "Club",
       "Car"
      ],
      [
       "\"You say you gotta man and you're in...\"",
       "Love",
       "Trouble",
       "Deep"
      ],
      [
       "\"After the ___, me and you\"",
       "Party",
       "Show",
       "Club"
      ],
      [
       "\"Could just slide for a...\"",
       "Few",
       "While",
       "Night"
      ],
      [
       "Right before the hook: \"That's...\"",
       "Love",
       "Life",
       "Right"
      ]
     ],
     [
      [
       "\"Mami I know you got...\"",
       "Issues",
       "Problems",
       "Feelings"
      ],
      [
       "\"Tattoo on your chest with his ___ in the middle\"",
       "Name",
       "Face",
       "Number"
      ],
      [
       "\"I'm not a ___, I just crush a lot\"",
       "Hater",
       "Player",
       "Stalker"
      ],
      [
       "\"You need to come a little...\"",
       "Closer",
       "Faster",
       "Later"
      ],
      [
       "\"Under my arms like a ___ is supposed to\"",
       "Don",
       "Man",
       "King"
      ],
      [
       "\"Please believe, you ___ with me\"",
       "Leave",
       "Roll",
       "Ride"
      ],
      [
       "\"You need to trust the God and jump in the...\"",
       "Car",
       "Cab",
       "Jet"
      ],
      [
       "\"For a little hard eight at the...\"",
       "Taj Mahal",
       "Bellagio",
       "Borgata"
      ],
      [
       "\"I stroll in the club with my ___ down\"",
       "Hat",
       "Head",
       "Hood"
      ],
      [
       "\"___ style, hot steppin'\"",
       "Michael Jack",
       "Elvis",
       "Prince"
      ],
      [
       "\"Might be the chain or the...\"",
       "Whip",
       "Watch",
       "Ring"
      ],
      [
       "\"Put your body in...\"",
       "Motion",
       "Action",
       "The air"
      ]
     ]
    ]
   },
   {
    "title": "Lean Back",
    "id": "ajmI1P3r1w4",
    "start": 28.8,
    "cuts": [
     70.6,
     155.6,
     246.1
    ],
    "qs": [
     [
      [
       "\"Throw your hands in the...\"",
       "Air",
       "Sky",
       "Back"
      ],
      [
       "\"Feel this right...\"",
       "Here",
       "Now",
       "There"
      ],
      [
       "Which producer does he shout out at the start?",
       "Scott Storch",
       "Swizz Beatz",
       "Just Blaze"
      ],
      [
       "\"Yeah, Khaled, I...\"",
       "See you",
       "Hear you",
       "Got you"
      ],
      [
       "\"We from the ___, New York\"",
       "Bronx",
       "Harlem",
       "Brooklyn"
      ],
      [
       "\"We from the Bronx, New York...\"",
       "Things happen",
       "Hands up",
       "Stand up"
      ],
      [
       "\"It's a cold world and this is...\"",
       "Ice",
       "Life",
       "Gold"
      ],
      [
       "\"Got the ___ in front of the building\"",
       "Phantom",
       "Bentley",
       "Hummer"
      ],
      [
       "The building is on which avenue?",
       "Trinity Ave",
       "Prospect Ave",
       "Tinton Ave"
      ],
      [
       "How many years has he been legit?",
       "Ten",
       "Five",
       "Twenty"
      ],
      [
       "\"As a young'n, was too much to ___ with\"",
       "Cope",
       "Deal",
       "Live"
      ]
     ],
     [
      [
       "\"I put the pieces to the...\"",
       "Puzzle",
       "Game",
       "Plan"
      ],
      [
       "\"Me and my peoples was gon'...\"",
       "Bubble",
       "Shine",
       "Blow"
      ],
      [
       "He came out the gate on some what?",
       "Flo-Jo",
       "Rocky",
       "Jordan"
      ],
      [
       "\"Fat brother with the...\"",
       "Logo",
       "Chain",
       "Hat"
      ],
      [
       "\"We just pull up our...\"",
       "Pants",
       "Sleeves",
       "Socks"
      ],
      [
       "\"And do the...\"",
       "Rockaway",
       "Running man",
       "Wop"
      ],
      [
       "\"R to the Ezzy, M to the...\"",
       "Yzzy",
       "Izzy",
       "Ozzy"
      ],
      [
       "\"Got a date at...\"",
       "Eight",
       "Nine",
       "Ten"
      ],
      [
       "\"I just bought a ___ so I can ride\"",
       "Bike",
       "Car",
       "Boat"
      ],
      [
       "\"With a matchin'...\"",
       "Jacket",
       "Helmet",
       "Hat"
      ],
      [
       "\"'Bout to cop me a...\"",
       "Mansion",
       "Benz",
       "Yacht"
      ],
      [
       "\"Listen, we don't pay...\"",
       "Admission",
       "Attention",
       "Taxes"
      ],
      [
       "\"And the ___ don't check us\"",
       "Bouncers",
       "Cops",
       "Doormen"
      ],
      [
       "\"Said he liked my ___, started relaxin'\"",
       "Necklace",
       "Sneakers",
       "Jacket"
      ]
     ],
     [
      [
       "\"I just got orders from ___ himself\"",
       "Fat Joe",
       "Remy",
       "The DJ"
      ],
      [
       "\"We at...\"",
       "Capacity",
       "The door",
       "The max"
      ],
      [
       "\"That mean we...\"",
       "Full",
       "Done",
       "Closed"
      ],
      [
       "\"Now we living better now, ___ sweater now\"",
       "Gucci",
       "Prada",
       "Polo"
      ],
      [
       "That G4 can fly through any what?",
       "Weather",
       "Storm",
       "Night"
      ],
      [
       "Who gets tight when you're worth some millions?",
       "Haters",
       "Fans",
       "Neighbors"
      ],
      [
       "What does he sport to hurt their feelings?",
       "Chinchilla",
       "Mink",
       "Leather"
      ],
      [
       "\"You can find Joe Crack at all type of...\"",
       "Events",
       "Parties",
       "Clubs"
      ],
      [
       "He's front row in which city?",
       "Vegas",
       "Miami",
       "Atlanta"
      ],
      [
       "\"Front row to all the...\"",
       "Fights",
       "Games",
       "Shows"
      ],
      [
       "Which court does he not wanna speak about?",
       "The Rucker",
       "The Garden",
       "Dyckman"
      ],
      [
       "\"Not even ___ Kirkland could imagine this\"",
       "Pee Wee",
       "Pete",
       "Pat"
      ],
      [
       "His team didn't have to play to win the what?",
       "Championship",
       "Trophy",
       "Series"
      ]
     ]
    ]
   }
  ]
};
(function(){try{if(window.CFG.explicitSongs&&localStorage.getItem("ogfan99explicit")==="1"){window.CFG.songs=window.CFG.explicitSongs;window.CFG.saveKey+="x";}}catch(e){}})();
