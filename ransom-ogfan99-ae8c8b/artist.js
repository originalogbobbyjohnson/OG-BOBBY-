/* Ransom: Jersey City, NJ (born in Brooklyn, raised in Jersey City). A-Team with Hitchcock, Hardhood Classics, Street Cinema,
   Director's Cut / Deleted Scenes / Crime Scenes film-themed series, Greatest Rapper Alive, "take over". */
window.CFG = {
  name: "Ransom", nameUpper: "RANSOM", short: "RANSOM",
  hood: "Jersey City", hoodUpper: "JERSEY CITY", boro: "New Jersey",
  saveKey: "ogfan99ransom1",
  /* the movie set: everybody starts as an extra and works up to the director's chair (Street Cinema / Director's Cut) */
  startRank: "Extra",
  ranks: ["Stand-In", "Leading Role", "Hardhood", "Director's Cut", "Takeover"],
  topRank: "Greatest Alive",
  point: "Scene", points: "Scenes",
  rankRewards: {
    "Stand-In": { bongs: 5, line: "You made it on set. Now stand on your mark." },
    "Leading Role": { bongs: 10, line: "Your name is on the poster now." },
    "Hardhood": { bongs: 15, line: "Hardhood classic. The A-Team salutes you." },
    "Director's Cut": { bongs: 20, line: "Final cut is yours. Roll the film." },
    "Takeover": { bongs: 25, line: "You run all of Jersey City." }
  },
  trophyArt: [
    /* Extra: a clapperboard */
    '<rect x="14" y="40" width="52" height="36" rx="2" fill="#222" stroke="#e9c46a" stroke-width="1.5"/>' +
    '<path d="M14 40l50-14 3 9-50 14z" fill="#f4f1e8"/><path d="M22 38l6-10M34 35l6-10M46 31l6-10M58 28l5-8" stroke="#222" stroke-width="4"/>' +
    '<text x="40" y="66" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="11" fill="#f4f1e8">TAKE 1</text>',
    /* Stand-In: a director's chair */
    '<path d="M20 30h40v18H20z" fill="#d93a30"/><path d="M20 30v48M60 30v48" stroke="#7a4a22" stroke-width="4"/>' +
    '<rect x="18" y="52" width="44" height="6" fill="#d93a30"/><path d="M22 60l36 18M58 60L22 78" stroke="#7a4a22" stroke-width="3"/>' +
    '<text x="40" y="43" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="9" fill="#fff">RAN</text>',
    /* Leading Role: a gold walk-of-fame style star */
    '<path d="M40 14l8 18 20 2-15 13 5 20-18-10-18 10 5-20-15-13 20-2z" fill="#e9c46a" stroke="#8a6a1a" stroke-width="2"/>' +
    '<circle cx="40" cy="44" r="6" fill="#8a6a1a"/>',
    /* Hardhood: a gold chain with an A medallion */
    '<path d="M18 22q22 40 44 0" stroke="#e9c46a" stroke-width="4" stroke-dasharray="5 2" fill="none"/>' +
    '<circle cx="40" cy="56" r="17" fill="#e9c46a" stroke="#8a6a1a" stroke-width="2"/>' +
    '<text x="40" y="64" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="22" fill="#5a3a0a">A</text>',
    /* Director's Cut: a film reel with a strip of film */
    '<circle cx="40" cy="44" r="24" fill="#3a3d45" stroke="#c8ccd4" stroke-width="2"/><circle cx="40" cy="44" r="5" fill="#c8ccd4"/>' +
    '<circle cx="40" cy="30" r="6" fill="#1b1d22"/><circle cx="52" cy="50" r="6" fill="#1b1d22"/><circle cx="28" cy="50" r="6" fill="#1b1d22"/>' +
    '<path d="M58 60q10 8 16 18" stroke="#222" stroke-width="9" fill="none"/><path d="M58 60q10 8 16 18" stroke="#e9c46a" stroke-width="2" stroke-dasharray="2 3" fill="none"/>',
    /* Takeover: a red megaphone */
    '<path d="M16 38h12l30-16v44L28 50H16z" fill="#d93a30" stroke="#6a1a12" stroke-width="2"/><rect x="22" y="50" width="8" height="18" rx="2" fill="#333"/>' +
    '<path d="M64 34q6 10 0 20M70 28q10 16 0 32" stroke="#e9c46a" stroke-width="2.5" fill="none" stroke-linecap="round"/>',
    /* Greatest Alive: gold mic under a crown */
    '<path d="M24 26l4-14 7 7 5-10 5 10 7-7 4 14z" fill="#ffd34d" stroke="#7a5512" stroke-width="1.2"/>' +
    '<rect x="32" y="30" width="16" height="26" rx="8" fill="#e9c46a" stroke="#7a5512" stroke-width="1.5"/><path d="M34 38h12M34 44h12" stroke="#7a5512" stroke-width="1"/>' +
    '<path d="M26 46q0 18 14 18t14-18" stroke="#c8ccd4" stroke-width="2.5" fill="none"/><rect x="38" y="64" width="4" height="12" fill="#c8ccd4"/><rect x="30" y="74" width="20" height="4" rx="2" fill="#c8ccd4"/>'
  ],
  clubTitle: "The Film Vault", clubTab: "VAULT",
  tags: ["A-TEAM", "TAKE OVER", "RAN"],
  c1: "#e9c46a", c2: "#d93a30", c3: "#9fd3e6", bg: "#16181f",
  /* Jersey City waterfront: the Colgate Clock octagon, waterfront towers, Lower Manhattan's tallest spire across the river */
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    [[0, 30], [26, 22], [50, 36], [76, 18], [100, 28]].forEach(([x, h]) => { s += '<rect x="' + x + '" y="' + (56 - h) + '" width="22" height="' + h + '"/>'; });
    s += '<path d="M170 20l8-8h12l8 8v12l-8 8h-12l-8-8z"/><rect x="176" y="40" width="3" height="16"/><rect x="190" y="40" width="3" height="16"/>';
    [[240, 34], [262, 20], [284, 40], [338, 26], [362, 44], [384, 22]].forEach(([x, h]) => { s += '<rect x="' + x + '" y="' + (56 - h) + '" width="20" height="' + h + '"/>'; });
    s += '<path d="M308 56l4-46h8l4 46z"/><rect x="315" y="0" width="2" height="10"/>';
    return s;
  })() + '</g>',
  socials: [
    { name: "Instagram", handle: "@therealransom", url: "https://www.instagram.com/therealransom/" },
    { name: "YouTube", handle: "@RansomDufflebag", url: "https://www.youtube.com/@RansomDufflebag" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the PATH to Journal Square. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "clock", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "loews", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "terminal", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO JERSEY CITY", x: "JFK Blvd and Sip Av, right on Journal Square. This is Ransom's game.", sfx: "spray" }
  ],
  songs: [
 {
  "title": "Overnight Success",
  "id": "OBDnZJKOtug",
  "start": 10.4,
  "cuts": [
   51.8,
   77.8,
   122.6
  ],
  "qs": [
   [
    [
     "What kind of sample is he spitting over?",
     "Soul sample",
     "Jazz sample",
     "Funk sample"
    ],
    [
     "How many bars with no hooks?",
     "60",
     "16",
     "100"
    ],
    [
     "He was breaking the what?",
     "Chains",
     "Rules",
     "Records"
    ],
    [
     "When they laughed at him, what did he do?",
     "Stood firm",
     "Walked away",
     "Laughed back"
    ],
    [
     "He was staking his what?",
     "Claim",
     "Name",
     "Spot"
    ],
    [
     "What do you put in before you can make a name?",
     "Groundwork",
     "Overtime",
     "Paperwork"
    ],
    [
     "The dark knights only woke up who?",
     "The Bane",
     "The Joker",
     "The Beast"
    ],
    [
     "He wonders how they made it through the what?",
     "Summer",
     "Winter",
     "Storm"
    ],
    [
     "They won the lottery with someone else's what?",
     "Number",
     "Ticket",
     "Money"
    ],
    [
     "He has awoken right out the what?",
     "Tundra",
     "Desert",
     "Jungle"
    ],
    [
     "He calls himself a true what?",
     "Pessimist",
     "Optimist",
     "Believer"
    ]
   ],
   [
    [
     "He blew what into a game that was dead and gone?",
     "Breath",
     "Fire",
     "Smoke"
    ],
    [
     "There's no success what?",
     "Overnight",
     "For free",
     "Without pain"
    ],
    [
     "If you're feeling blessed, roll the what?",
     "Dice",
     "Window",
     "Credits"
    ],
    [
     "You best know the what?",
     "Price",
     "Rules",
     "Time"
    ],
    [
     "He's trying to prep for the what?",
     "Lights",
     "Fight",
     "Night"
    ],
    [
     "How long did it take him to get success overnight?",
     "Years",
     "Months",
     "Weeks"
    ],
    [
     "Respect, no what?",
     "Advice",
     "Excuses",
     "Doubt"
    ],
    [
     "It's hard in his chest, cold as what?",
     "Ice",
     "Stone",
     "Steel"
    ],
    [
     "Second place goes to the next what?",
     "Hype",
     "Wave",
     "Star"
    ],
    [
     "Connect your what?",
     "Device",
     "Headphones",
     "Speakers"
    ],
    [
     "Listen to the best flow, how?",
     "Precise",
     "Alive",
     "Tonight"
    ]
   ],
   [
    [
     "He could be wrong, but what's right?",
     "The flow",
     "The beat",
     "The vibe"
    ],
    [
     "Look in his eyes as if they were what?",
     "Strobe lights",
     "Headlights",
     "Spotlights"
    ],
    [
     "He says he's the real what?",
     "Thing",
     "Deal",
     "One"
    ],
    [
     "You're buying things you don't what?",
     "Need",
     "Want",
     "Use"
    ],
    [
     "To impress the people you don't what?",
     "Like",
     "Know",
     "Trust"
    ],
    [
     "He's spitting with the best what?",
     "Bravado",
     "Vibrato",
     "Swagger"
    ],
    [
     "Test the heart that's in the chest of who?",
     "Drago",
     "Rocky",
     "Apollo"
    ],
    [
     "Who even left Chicago?",
     "Obama",
     "Kanye",
     "Michael Jordan"
    ],
    [
     "Just say what when you speak of Ransom?",
     "Legend",
     "Classic",
     "Greatest"
    ],
    [
     "His heavy words got your speakers doing what?",
     "Dancing",
     "Shaking",
     "Blowing"
    ],
    [
     "You'll never find your greatness on the beaches doing what?",
     "Tanning",
     "Sleeping",
     "Chilling"
    ]
   ]
  ]
 },
 {
  "title": "His Shoes",
  "id": "XgY38pXgJ9c",
  "start": 74.2,
  "cuts": [
   111.8,
   156.7,
   209.8
  ],
  "qs": [
   [
    [
     "What was he known as?",
     "An honest man",
     "A hard worker",
     "A good father"
    ],
    [
     "How old was he with a college plan?",
     "18",
     "21",
     "16"
    ],
    [
     "At 18 he had a what?",
     "College plan",
     "Record deal",
     "Full-time job"
    ],
    [
     "He's searching for food in this what?",
     "Garbage can",
     "Corner store",
     "Food bank"
    ],
    [
     "They see that he's what?",
     "Starving",
     "Sleeping",
     "Freezing"
    ],
    [
     "There's no one he can call what?",
     "Daddy",
     "Brother",
     "Friend"
    ],
    [
     "He never thought it would equal out to this what?",
     "Dark alley",
     "Cold corner",
     "Empty room"
    ],
    [
     "People think it's his what?",
     "Fault",
     "Choice",
     "Plan"
    ],
    [
     "He has flashbacks of his what?",
     "Wife",
     "Mother",
     "Kids"
    ],
    [
     "She would hold him how?",
     "Close",
     "Tight",
     "Down"
    ],
    [
     "That woman was what to him?",
     "Good",
     "Cold",
     "Hard"
    ]
   ],
   [
    [
     "What kind of jacket does he show?",
     "Ripped up",
     "Leather",
     "Borrowed"
    ],
    [
     "He can't see the what?",
     "Finish line",
     "Light",
     "Way out"
    ],
    [
     "He digs in the garbage when it's what time?",
     "Dinner time",
     "Night time",
     "Lunch time"
    ],
    [
     "He names the President, the what, and the Pentagon?",
     "White House",
     "Capitol",
     "City Hall"
    ],
    [
     "He names the President, the White House and the what?",
     "Pentagon",
     "Senate",
     "Supreme Court"
    ],
    [
     "What's the first thing he says he lost?",
     "His job",
     "His mind",
     "His friends"
    ],
    [
     "After his car, what did he lose?",
     "His crib",
     "His watch",
     "His phone"
    ],
    [
     "He needs to put some food in his what?",
     "Ribs",
     "Belly",
     "Plate"
    ],
    [
     "What's in his heart?",
     "Malice",
     "Love",
     "Music"
    ],
    [
     "What's his little palace?",
     "A cardboard box",
     "A park bench",
     "A subway car"
    ],
    [
     "He's living on the what?",
     "Streets",
     "Couch",
     "Train"
    ]
   ],
   [
    [
     "He came from the coolest what?",
     "Home",
     "School",
     "Block"
    ],
    [
     "He had an allowance and student what?",
     "Loans",
     "Housing",
     "Friends"
    ],
    [
     "The last time he looked for a job, it was through the what?",
     "Phone",
     "Paper",
     "Window"
    ],
    [
     "Your story cut through the what?",
     "Bone",
     "Noise",
     "Fog"
    ],
    [
     "He's snug in designer what?",
     "Coats",
     "Shoes",
     "Jeans"
    ],
    [
     "He questions the innocence in his girl's what?",
     "Heart",
     "Eyes",
     "Smile"
    ],
    [
     "The other man grew up in a what?",
     "Orphanage",
     "Shelter",
     "Group home"
    ],
    [
     "Should he take the what route?",
     "Safest",
     "Fastest",
     "Longest"
    ],
    [
     "Phonies talk about his dad's what?",
     "Money",
     "Business",
     "House"
    ],
    [
     "He calls himself a crash what?",
     "Dummy",
     "Course",
     "Test"
    ],
    [
     "Life is like a bad what?",
     "Collision",
     "Dream",
     "Movie"
    ]
   ]
  ]
 },
 {
  "title": "Man Alone",
  "id": "1AAtd54Is2w",
  "start": 29.5,
  "cuts": [
   70.4,
   129.8,
   196.4
  ],
  "qs": [
   [
    [
     "The vivid tales of a what?",
     "Visionary",
     "Veteran",
     "Villain"
    ],
    [
     "The visionary is headed for a what?",
     "Cemetery",
     "Stadium",
     "Mansion"
    ],
    [
     "He had visions of being what?",
     "Legendary",
     "Famous",
     "Rich"
    ],
    [
     "What kind of visions?",
     "Grand delusional",
     "Small and simple",
     "Dark and twisted"
    ],
    [
     "How many years does he count?",
     "34",
     "24",
     "43"
    ],
    [
     "He says he's kinda what?",
     "Lost",
     "Done",
     "Tired"
    ],
    [
     "The more fame, the more what?",
     "Fear",
     "Love",
     "Money"
    ],
    [
     "He's talking like you all what?",
     "Care",
     "Listen",
     "Know"
    ],
    [
     "Let's make this all what?",
     "Clear",
     "Real",
     "Right"
    ],
    [
     "It ain't all what?",
     "Musical",
     "Business",
     "Personal"
    ],
    [
     "He's talking about his what?",
     "Future",
     "Past",
     "Money"
    ]
   ],
   [
    [
     "There's no what to him?",
     "Gimmicks",
     "Secrets",
     "Limits"
    ],
    [
     "You gotta be in some sort of what just to listen?",
     "Pain",
     "Mood",
     "Trouble"
    ],
    [
     "They say the game chewed him and did what?",
     "Spit him out",
     "Swallowed him",
     "Let him go"
    ],
    [
     "Some people are still in what?",
     "Doubt",
     "Shock",
     "Denial"
    ],
    [
     "They want to hear his songs and then do what?",
     "Feel 'em out",
     "Turn 'em off",
     "Copy 'em"
    ],
    [
     "He'll be in what soon?",
     "Power",
     "Movies",
     "Charge"
    ],
    [
     "A rose in the what?",
     "Concrete",
     "Garden",
     "Desert"
    ],
    [
     "Visions of a black what?",
     "Ghost",
     "Cloud",
     "Horse"
    ],
    [
     "He stands alone in the midst of a crowded what?",
     "Room",
     "Street",
     "Club"
    ],
    [
     "He's so discreet when it comes to his what?",
     "Movements",
     "Money",
     "Music"
    ],
    [
     "If you wake up with no money, why would you go to what?",
     "Sleep",
     "Work",
     "School"
    ]
   ],
   [
    [
     "Doing the same old thing with the same what?",
     "Results",
     "People",
     "Problems"
    ],
    [
     "He stays on point like which NBA player?",
     "Raymond Felton",
     "Jason Kidd",
     "Stephon Marbury"
    ],
    [
     "How does it feel to see all his peers do what?",
     "Surpass him",
     "Copy him",
     "Fall off"
    ],
    [
     "But they can never do what to him?",
     "Outclass him",
     "Outlast him",
     "Outwork him"
    ],
    [
     "Before Nicki was wearing those crazy what?",
     "Wigs",
     "Outfits",
     "Shoes"
    ],
    [
     "Who did he tell he got 'em whenever needed?",
     "French",
     "Fab",
     "Jadakiss"
    ],
    [
     "He sent a couple freestyles to which DJ?",
     "Clue",
     "Kay Slay",
     "Funkmaster Flex"
    ],
    [
     "He got a verse from who before he was sounding off?",
     "Wayne",
     "Drake",
     "Jay-Z"
    ],
    [
     "He did a song with Ross before he was crowned the what?",
     "Boss",
     "King",
     "Champ"
    ],
    [
     "They say he's not what?",
     "New York",
     "Brooklyn",
     "Jersey"
    ],
    [
     "He just wanted people to do what?",
     "Listen to it",
     "Pay for it",
     "Dance to it"
    ]
   ]
  ]
 }
],
  explicitSongs: [
 {
  "title": "Overnight Success",
  "id": "OBDnZJKOtug",
  "start": 10.4,
  "cuts": [
   51.8,
   77.8,
   122.6
  ],
  "qs": [
   [
    [
     "What kind of sample is he spitting over?",
     "Soul sample",
     "Jazz sample",
     "Funk sample"
    ],
    [
     "How many bars with no hooks?",
     "60",
     "16",
     "100"
    ],
    [
     "He was breaking the what?",
     "Chains",
     "Rules",
     "Records"
    ],
    [
     "When they laughed at him, what did he do?",
     "Stood firm",
     "Walked away",
     "Laughed back"
    ],
    [
     "He was staking his what?",
     "Claim",
     "Name",
     "Spot"
    ],
    [
     "What do you put in before you can make a name?",
     "Groundwork",
     "Overtime",
     "Paperwork"
    ],
    [
     "The dark knights only woke up who?",
     "The Bane",
     "The Joker",
     "The Beast"
    ],
    [
     "He wonders how they made it through the what?",
     "Summer",
     "Winter",
     "Storm"
    ],
    [
     "They won the lottery with someone else's what?",
     "Number",
     "Ticket",
     "Money"
    ],
    [
     "He has awoken right out the what?",
     "Tundra",
     "Desert",
     "Jungle"
    ],
    [
     "He calls himself a true what?",
     "Pessimist",
     "Optimist",
     "Believer"
    ]
   ],
   [
    [
     "He blew what into a game that was dead and gone?",
     "Breath",
     "Fire",
     "Smoke"
    ],
    [
     "There's no success what?",
     "Overnight",
     "For free",
     "Without pain"
    ],
    [
     "If you're feeling blessed, roll the what?",
     "Dice",
     "Window",
     "Credits"
    ],
    [
     "You best know the what?",
     "Price",
     "Rules",
     "Time"
    ],
    [
     "He's trying to prep for the what?",
     "Lights",
     "Fight",
     "Night"
    ],
    [
     "How long did it take him to get success overnight?",
     "Years",
     "Months",
     "Weeks"
    ],
    [
     "Respect, no what?",
     "Advice",
     "Excuses",
     "Doubt"
    ],
    [
     "It's hard in his chest, cold as what?",
     "Ice",
     "Stone",
     "Steel"
    ],
    [
     "Second place goes to the next what?",
     "Hype",
     "Wave",
     "Star"
    ],
    [
     "Connect your what?",
     "Device",
     "Headphones",
     "Speakers"
    ],
    [
     "Listen to the best flow, how?",
     "Precise",
     "Alive",
     "Tonight"
    ]
   ],
   [
    [
     "He could be wrong, but what's right?",
     "The flow",
     "The beat",
     "The vibe"
    ],
    [
     "Look in his eyes as if they were what?",
     "Strobe lights",
     "Headlights",
     "Spotlights"
    ],
    [
     "He says he's the real what?",
     "Thing",
     "Deal",
     "One"
    ],
    [
     "You're buying things you don't what?",
     "Need",
     "Want",
     "Use"
    ],
    [
     "To impress the people you don't what?",
     "Like",
     "Know",
     "Trust"
    ],
    [
     "He's spitting with the best what?",
     "Bravado",
     "Vibrato",
     "Swagger"
    ],
    [
     "Test the heart that's in the chest of who?",
     "Drago",
     "Rocky",
     "Apollo"
    ],
    [
     "Who even left Chicago?",
     "Obama",
     "Kanye",
     "Michael Jordan"
    ],
    [
     "Just say what when you speak of Ransom?",
     "Legend",
     "Classic",
     "Greatest"
    ],
    [
     "His heavy words got your speakers doing what?",
     "Dancing",
     "Shaking",
     "Blowing"
    ],
    [
     "You'll never find your greatness on the beaches doing what?",
     "Tanning",
     "Sleeping",
     "Chilling"
    ]
   ]
  ]
 },
 {
  "title": "His Shoes",
  "id": "XgY38pXgJ9c",
  "start": 74.2,
  "cuts": [
   111.8,
   156.7,
   209.8
  ],
  "qs": [
   [
    [
     "What was he known as?",
     "An honest man",
     "A hard worker",
     "A good father"
    ],
    [
     "How old was he with a college plan?",
     "18",
     "21",
     "16"
    ],
    [
     "At 18 he had a what?",
     "College plan",
     "Record deal",
     "Full-time job"
    ],
    [
     "He's searching for food in this what?",
     "Garbage can",
     "Corner store",
     "Food bank"
    ],
    [
     "They see that he's what?",
     "Starving",
     "Sleeping",
     "Freezing"
    ],
    [
     "There's no one he can call what?",
     "Daddy",
     "Brother",
     "Friend"
    ],
    [
     "He never thought it would equal out to this what?",
     "Dark alley",
     "Cold corner",
     "Empty room"
    ],
    [
     "People think it's his what?",
     "Fault",
     "Choice",
     "Plan"
    ],
    [
     "He has flashbacks of his what?",
     "Wife",
     "Mother",
     "Kids"
    ],
    [
     "She would hold him how?",
     "Close",
     "Tight",
     "Down"
    ],
    [
     "That woman was what to him?",
     "Good",
     "Cold",
     "Hard"
    ]
   ],
   [
    [
     "What kind of jacket does he show?",
     "Ripped up",
     "Leather",
     "Borrowed"
    ],
    [
     "He can't see the what?",
     "Finish line",
     "Light",
     "Way out"
    ],
    [
     "He digs in the garbage when it's what time?",
     "Dinner time",
     "Night time",
     "Lunch time"
    ],
    [
     "He names the President, the what, and the Pentagon?",
     "White House",
     "Capitol",
     "City Hall"
    ],
    [
     "He names the President, the White House and the what?",
     "Pentagon",
     "Senate",
     "Supreme Court"
    ],
    [
     "What's the first thing he says he lost?",
     "His job",
     "His mind",
     "His friends"
    ],
    [
     "After his car, what did he lose?",
     "His crib",
     "His watch",
     "His phone"
    ],
    [
     "He needs to put some food in his what?",
     "Ribs",
     "Belly",
     "Plate"
    ],
    [
     "What's in his heart?",
     "Malice",
     "Love",
     "Music"
    ],
    [
     "What's his little palace?",
     "A cardboard box",
     "A park bench",
     "A subway car"
    ],
    [
     "He's living on the what?",
     "Streets",
     "Couch",
     "Train"
    ]
   ],
   [
    [
     "He came from the coolest what?",
     "Home",
     "School",
     "Block"
    ],
    [
     "He had an allowance and student what?",
     "Loans",
     "Housing",
     "Friends"
    ],
    [
     "The last time he looked for a job, it was through the what?",
     "Phone",
     "Paper",
     "Window"
    ],
    [
     "Your story cut through the what?",
     "Bone",
     "Noise",
     "Fog"
    ],
    [
     "He's snug in designer what?",
     "Coats",
     "Shoes",
     "Jeans"
    ],
    [
     "He questions the innocence in his girl's what?",
     "Heart",
     "Eyes",
     "Smile"
    ],
    [
     "The other man grew up in a what?",
     "Orphanage",
     "Shelter",
     "Group home"
    ],
    [
     "Should he take the what route?",
     "Safest",
     "Fastest",
     "Longest"
    ],
    [
     "Phonies talk about his dad's what?",
     "Money",
     "Business",
     "House"
    ],
    [
     "He calls himself a crash what?",
     "Dummy",
     "Course",
     "Test"
    ],
    [
     "Life is like a bad what?",
     "Collision",
     "Dream",
     "Movie"
    ]
   ]
  ]
 },
 {
  "title": "Man Alone",
  "id": "1AAtd54Is2w",
  "start": 29.5,
  "cuts": [
   70.4,
   129.8,
   196.4
  ],
  "qs": [
   [
    [
     "The vivid tales of a what?",
     "Visionary",
     "Veteran",
     "Villain"
    ],
    [
     "The visionary is headed for a what?",
     "Cemetery",
     "Stadium",
     "Mansion"
    ],
    [
     "He had visions of being what?",
     "Legendary",
     "Famous",
     "Rich"
    ],
    [
     "What kind of visions?",
     "Grand delusional",
     "Small and simple",
     "Dark and twisted"
    ],
    [
     "How many years does he count?",
     "34",
     "24",
     "43"
    ],
    [
     "He says he's kinda what?",
     "Lost",
     "Done",
     "Tired"
    ],
    [
     "The more fame, the more what?",
     "Fear",
     "Love",
     "Money"
    ],
    [
     "He's talking like you all what?",
     "Care",
     "Listen",
     "Know"
    ],
    [
     "Let's make this all what?",
     "Clear",
     "Real",
     "Right"
    ],
    [
     "It ain't all what?",
     "Musical",
     "Business",
     "Personal"
    ],
    [
     "He's talking about his what?",
     "Future",
     "Past",
     "Money"
    ]
   ],
   [
    [
     "There's no what to him?",
     "Gimmicks",
     "Secrets",
     "Limits"
    ],
    [
     "You gotta be in some sort of what just to listen?",
     "Pain",
     "Mood",
     "Trouble"
    ],
    [
     "They say the game chewed him and did what?",
     "Spit him out",
     "Swallowed him",
     "Let him go"
    ],
    [
     "Some people are still in what?",
     "Doubt",
     "Shock",
     "Denial"
    ],
    [
     "They want to hear his songs and then do what?",
     "Feel 'em out",
     "Turn 'em off",
     "Copy 'em"
    ],
    [
     "He'll be in what soon?",
     "Power",
     "Movies",
     "Charge"
    ],
    [
     "A rose in the what?",
     "Concrete",
     "Garden",
     "Desert"
    ],
    [
     "Visions of a black what?",
     "Ghost",
     "Cloud",
     "Horse"
    ],
    [
     "He stands alone in the midst of a crowded what?",
     "Room",
     "Street",
     "Club"
    ],
    [
     "He's so discreet when it comes to his what?",
     "Movements",
     "Money",
     "Music"
    ],
    [
     "If you wake up with no money, why would you go to what?",
     "Sleep",
     "Work",
     "School"
    ]
   ],
   [
    [
     "Doing the same old thing with the same what?",
     "Results",
     "People",
     "Problems"
    ],
    [
     "He stays on point like which NBA player?",
     "Raymond Felton",
     "Jason Kidd",
     "Stephon Marbury"
    ],
    [
     "How does it feel to see all his peers do what?",
     "Surpass him",
     "Copy him",
     "Fall off"
    ],
    [
     "But they can never do what to him?",
     "Outclass him",
     "Outlast him",
     "Outwork him"
    ],
    [
     "Before Nicki was wearing those crazy what?",
     "Wigs",
     "Outfits",
     "Shoes"
    ],
    [
     "Who did he tell he got 'em whenever needed?",
     "French",
     "Fab",
     "Jadakiss"
    ],
    [
     "He sent a couple freestyles to which DJ?",
     "Clue",
     "Kay Slay",
     "Funkmaster Flex"
    ],
    [
     "He got a verse from who before he was sounding off?",
     "Wayne",
     "Drake",
     "Jay-Z"
    ],
    [
     "He did a song with Ross before he was crowned the what?",
     "Boss",
     "King",
     "Champ"
    ],
    [
     "They say he's not what?",
     "New York",
     "Brooklyn",
     "Jersey"
    ],
    [
     "He just wanted people to do what?",
     "Listen to it",
     "Pay for it",
     "Dance to it"
    ]
   ]
  ]
 }
]
};
(function(){try{if(window.CFG.explicitSongs&&localStorage.getItem("ogfan99explicit")==="1"){window.CFG.songs=window.CFG.explicitSongs;window.CFG.saveKey+="x";}}catch(e){}})();
