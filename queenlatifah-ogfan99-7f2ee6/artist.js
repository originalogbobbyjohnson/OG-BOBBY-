/* Queen Latifah (Dana Owens): born in Newark, raised in East Orange, Irvington High. Flavor Unit, Tommy Boy, All Hail the Queen,
   Ladies First, Nature of a Sista', Black Reign, U.N.I.T.Y., Order in the Court. Kente crowns of the All Hail the Queen era. */
window.CFG = {
  name: "Queen Latifah", nameUpper: "QUEEN LATIFAH", short: "QUEEN",
  hood: "Newark", hoodUpper: "NEWARK", boro: "New Jersey",
  saveKey: "ogfan99queenlatifah1",
  /* everybody starts as a Princess and climbs her album and song titles to the throne */
  startRank: "Princess",
  ranks: ["Ladies First", "Flavor Unit", "Nature of a Sista", "Black Reign", "Order in the Court"],
  topRank: "All Hail the Queen",
  point: "Jewel", points: "Jewels",
  rankRewards: {
    "Ladies First": { bongs: 5, line: "Step up front. Ladies first." },
    "Flavor Unit": { bongs: 10, line: "Welcome to the Flavor Unit." },
    "Nature of a Sista": { bongs: 15, line: "You know the nature now." },
    "Black Reign": { bongs: 20, line: "Your reign has started." },
    "Order in the Court": { bongs: 25, line: "You run all of Newark." }
  },
  trophyArt: [
    /* Princess: a small silver tiara */
    '<path d="M18 56q22-30 44 0z" fill="none" stroke="#c8ccd4" stroke-width="4"/><path d="M26 46l4-12 4 8 6-14 6 14 4-8 4 12" fill="none" stroke="#c8ccd4" stroke-width="3" stroke-linejoin="round"/>' +
    '<circle cx="40" cy="28" r="3" fill="#f6b6cc"/><text x="40" y="74" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="11" fill="#f6b6cc">PRINCESS</text>',
    /* Ladies First: a gold first-place rosette */
    '<path d="M30 52l-8 26 10-6 6 8 2-26zM50 52l8 26-10-6-6 8-2-26z" fill="#d7263d"/><circle cx="40" cy="40" r="22" fill="#f4c430" stroke="#7a5512" stroke-width="2"/>' +
    '<circle cx="40" cy="40" r="15" fill="#fff3c4"/><text x="40" y="47" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="18" fill="#7a5512">1ST</text>',
    /* Flavor Unit: a boombox */
    '<rect x="8" y="34" width="64" height="38" rx="5" fill="#2a2a34" stroke="#000" stroke-width="2"/><path d="M24 34q16-16 32 0" stroke="#888" stroke-width="3" fill="none"/>' +
    '<circle cx="24" cy="56" r="10" fill="#111" stroke="#f4c430" stroke-width="2"/><circle cx="56" cy="56" r="10" fill="#111" stroke="#f4c430" stroke-width="2"/>' +
    '<rect x="34" y="40" width="12" height="8" fill="#1f9e5a"/><circle cx="24" cy="56" r="3" fill="#555"/><circle cx="56" cy="56" r="3" fill="#555"/>',
    /* Nature of a Sista: a sunflower */
    '<path d="M40 50v28" stroke="#1f9e5a" stroke-width="4"/><path d="M40 66q-12-4-14-12q10 0 14 8" fill="#1f9e5a"/>' +
    (function () { let s = ""; for (let i = 0; i < 10; i++) { const a = i * 36; s += '<ellipse cx="40" cy="22" rx="5" ry="11" fill="#f4c430" transform="rotate(' + a + ' 40 34)"/>'; } return s; })() +
    '<circle cx="40" cy="34" r="9" fill="#6b3a1a"/>',
    /* Black Reign: a black crown with gold gems */
    '<path d="M14 66l4-34 12 14 10-22 10 22 12-14 4 34z" fill="#18151f" stroke="#f4c430" stroke-width="2.5"/><rect x="14" y="62" width="52" height="10" fill="#18151f" stroke="#f4c430" stroke-width="2"/>' +
    '<circle cx="28" cy="67" r="2.5" fill="#f4c430"/><circle cx="40" cy="67" r="2.5" fill="#d7263d"/><circle cx="52" cy="67" r="2.5" fill="#f4c430"/>',
    /* Order in the Court: a gavel on its block */
    '<rect x="16" y="22" width="34" height="18" rx="4" fill="#8a5a2a" stroke="#4a2a10" stroke-width="2" transform="rotate(-30 33 31)"/><path d="M38 40l24 26" stroke="#6b4220" stroke-width="5" stroke-linecap="round"/>' +
    '<rect x="16" y="66" width="40" height="8" rx="2" fill="#6b4220"/><rect x="20" y="62" width="32" height="5" rx="1" fill="#f4c430"/>',
    /* All Hail the Queen: a gold crown with a kente band */
    '<path d="M10 62l6-40 14 18 10-26 10 26 14-18 6 40z" fill="#f4c430" stroke="#7a5512" stroke-width="2"/><circle cx="16" cy="22" r="3" fill="#d7263d"/><circle cx="40" cy="14" r="3" fill="#1f9e5a"/><circle cx="64" cy="22" r="3" fill="#d7263d"/>' +
    '<rect x="10" y="60" width="60" height="14" fill="#1f9e5a"/><rect x="14" y="62" width="8" height="10" fill="#d7263d"/><rect x="26" y="62" width="8" height="10" fill="#f4c430"/><rect x="38" y="62" width="8" height="10" fill="#d7263d"/><rect x="50" y="62" width="8" height="10" fill="#f4c430"/><rect x="62" y="62" width="6" height="10" fill="#d7263d"/>'
  ],
  clubTitle: "The Crown Jewels", clubTab: "JEWELS",
  tags: ["FLAVOR UNIT", "U.N.I.T.Y.", "THE QUEEN"],
  c1: "#f4c430", c2: "#1f9e5a", c3: "#d7263d", bg: "#1a1230",
  /* Newark skyline: the cathedral's twin towers, downtown towers, Penn Station's roofline */
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    s += '<rect x="20" y="14" width="18" height="42"/><rect x="62" y="14" width="18" height="42"/><rect x="38" y="26" width="24" height="30"/><path d="M38 26l12-10 12 10z"/>';
    s += '<rect x="130" y="10" width="26" height="46"/><rect x="162" y="22" width="20" height="34"/><rect x="190" y="4" width="22" height="52"/><rect x="218" y="18" width="28" height="38"/>';
    s += '<rect x="270" y="36" width="110" height="20"/><rect x="290" y="28" width="70" height="8"/>';
    for (let x = 276; x < 378; x += 12) s += '<rect x="' + x + '" y="40" width="4" height="12" fill="#000" opacity=".25"/>';
    return s;
  })() + '</g>',
  socials: [
    { name: "Instagram", handle: "@queenlatifah", url: "https://www.instagram.com/queenlatifah/" },
    { name: "YouTube", handle: "@QueenLatifahVEVO", url: "https://www.youtube.com/@QueenLatifahVEVO" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Ride the PATH to Newark Penn Station. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "blossoms", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "parachute" },
    { scene: "cathedral", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "star", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO NEWARK", x: "Springfield Av and S 17th St, by the Irvington line. This is Queen Latifah's game.", sfx: "spray" }
  ],
};
window.CFG.songs = [
 {
  "title": "Come Into My House",
  "id": "qfZsASWa_MU",
  "cuts": [
   48.2,
   96.9,
   145.2
  ],
  "qs": [
   [
    [
     "She welcomes you into her what?",
     "Queendom",
     "Kingdom",
     "Castle"
    ],
    [
     "\"Come one, come ___\"?",
     "All",
     "In",
     "Home"
    ],
    [
     "In which season does she sing?",
     "Spring",
     "Winter",
     "Summer"
    ],
    [
     "She calls out to the ones who had a hard what?",
     "Day",
     "Week",
     "Night"
    ],
    [
     "Where did she prepare a place for you?",
     "Her dance floor",
     "Her kitchen",
     "Her stage"
    ],
    [
     "\"One nation under a ___\"?",
     "Groove",
     "Flag",
     "Sun"
    ],
    [
     "What kind of music always soothes?",
     "House music",
     "Jazz music",
     "Rock music"
    ],
    [
     "Can you rock to a house groove what?",
     "Tempo",
     "Record",
     "Video"
    ],
    [
     "\"Shall we let the ___ begin?\"",
     "Games",
     "Show",
     "Music"
    ],
    [
     "Her flame is too hot to what?",
     "Douse",
     "Touch",
     "Light"
    ],
    [
     "The time is now for you to what?",
     "Party",
     "Sleep",
     "Work"
    ]
   ],
   [
    [
     "In the hook, don't make her what?",
     "Wait",
     "Cry",
     "Leave"
    ],
    [
     "What flows through the speakers?",
     "Bass and treble",
     "Rain and thunder",
     "Static and noise"
    ],
    [
     "\"Ride the ___, I know it's gonna reach ya\"?",
     "Rhythm",
     "Train",
     "Wave"
    ],
    [
     "\"I'm the queen, ___\"?",
     "Latifah",
     "Lyte",
     "Monie"
    ],
    [
     "Who does she tell to cue it?",
     "45 King",
     "Prince Paul",
     "Red Alert"
    ],
    [
     "\"I told you you could ___\"?",
     "Do it",
     "Win it",
     "Feel it"
    ],
    [
     "Did you enjoy it? \"That was ___\"",
     "Cool",
     "Fun",
     "Wild"
    ],
    [
     "Dance to the beat of the what?",
     "Drum",
     "Bell",
     "Street"
    ],
    [
     "Which crew did she come with?",
     "The Flavor Unit",
     "The Juice Crew",
     "The Hit Squad"
    ],
    [
     "Ride the groove what?",
     "Line",
     "Track",
     "Train"
    ],
    [
     "What kind of party is she hosting?",
     "A house party",
     "A block party",
     "A pool party"
    ]
   ],
   [
    [
     "What new thing is she using?",
     "A fusion",
     "A sample",
     "A remix"
    ],
    [
     "Hip hop house and hip hop what?",
     "Jazz",
     "Soul",
     "Funk"
    ],
    [
     "\"With a little ___\"?",
     "Pizazz",
     "Bass",
     "Flavor"
    ],
    [
     "She's the queen of royal what?",
     "Badness",
     "Madness",
     "Highness"
    ],
    [
     "Which song does she ask you to remember her from?",
     "Wrath of My Madness",
     "Ladies First",
     "Just Another Day"
    ],
    [
     "Whose rap rocks this party?",
     "Hers",
     "The DJ's",
     "Her crew's"
    ],
    [
     "What is hard to keep down?",
     "A good woman",
     "A loud crowd",
     "A true king"
    ],
    [
     "Still I rise in a civilized what?",
     "Wisdom",
     "Manner",
     "Nation"
    ],
    [
     "What kind of beat drumming?",
     "Hardcore",
     "Soft",
     "Slow"
    ],
    [
     "What kind of invitation is it?",
     "An open invitation",
     "A secret invitation",
     "A VIP invitation"
    ],
    [
     "She hopes what kind of display has you around?",
     "Lyrical",
     "Light",
     "Dance"
    ]
   ]
  ]
 },
 {
  "title": "People",
  "id": "uFHyToaG0vw",
  "cuts": [
   70.5,
   123.9,
   167.3
  ],
  "qs": [
   [
    [
     "The hook says people are gonna do what?",
     "Let you down",
     "Lift you up",
     "Call you back"
    ],
    [
     "\"Don't expect for them to be ___\"?",
     "Around",
     "Grateful",
     "On time"
    ],
    [
     "In the hook, \"They're just ___\"?",
     "People",
     "Strangers",
     "Players"
    ],
    [
     "What do people hop on?",
     "The bandwagon",
     "The train",
     "The stage"
    ],
    [
     "When does your crew change?",
     "When you get your swag",
     "When you move away",
     "When you get older"
    ],
    [
     "\"We all ___ and people are just people\"?",
     "Equal",
     "Family",
     "Different"
    ],
    [
     "Whose hands should you leave it in?",
     "God's",
     "Your mother's",
     "Your crew's"
    ],
    [
     "\"You get what you ___\"?",
     "Earn",
     "Give",
     "Want"
    ],
    [
     "What should you expect in return?",
     "Nothing",
     "Everything",
     "Thanks"
    ],
    [
     "Do what you do from the what?",
     "Heart",
     "Head",
     "Start"
    ],
    [
     "When the sunshine leaves, what comes in?",
     "The true storm",
     "The night",
     "The cold"
    ]
   ],
   [
    [
     "What do the good ones do?",
     "Motivate",
     "Discourage",
     "Complain"
    ],
    [
     "What do the bad ones do?",
     "Discourage",
     "Motivate",
     "Inspire"
    ],
    [
     "Once you know what you're dealing with, you can close the what?",
     "Gate",
     "Door",
     "Book"
    ],
    [
     "Don't let them in your world till you know they're what?",
     "Straight",
     "Rich",
     "Famous"
    ],
    [
     "Life is a one stop deal with no what?",
     "Sequel",
     "Refund",
     "Rewind"
    ],
    [
     "Fake ones are so transparent and so what?",
     "See through",
     "Loud",
     "Sweet"
    ],
    [
     "Who can be so humble when they need you?",
     "Loved ones",
     "Fake ones",
     "Strangers"
    ],
    [
     "Some have their hands out even after you what?",
     "Feed them",
     "Pay them",
     "Call them"
    ],
    [
     "When are they never around?",
     "When you need them",
     "On weekends",
     "After dark"
    ],
    [
     "What do the haters show?",
     "They hate",
     "Their love",
     "Their money"
    ],
    [
     "What do your thoughts get, before you realize they're just people?",
     "Evil",
     "Sad",
     "Quiet"
    ]
   ],
   [
    [
     "She has a lot more what to do before she leaves here?",
     "Living",
     "Writing",
     "Touring"
    ],
    [
     "She's blessed, thankful and what?",
     "Happy",
     "Tired",
     "Famous"
    ],
    [
     "She's in good health with good what?",
     "Wealth",
     "Friends",
     "Luck"
    ],
    [
     "\"You could always use ___\"?",
     "Help",
     "Money",
     "Rest"
    ],
    [
     "All you really got is your good what?",
     "Self",
     "Name",
     "Word"
    ],
    [
     "Who hurts when they let you down?",
     "People that know you",
     "Strangers",
     "Critics"
    ],
    [
     "Besides letting you down, what don't they do?",
     "Hold you",
     "Call you",
     "Pay you"
    ],
    [
     "What will teach you?",
     "Your mistakes",
     "Your teachers",
     "The streets"
    ],
    [
     "\"Before I leave ___\"?",
     "Here",
     "Town",
     "Home"
    ],
    [
     "\"Then you realize they ___ people\"?",
     "Just",
     "Good",
     "Real"
    ],
    [
     "How does she feel about being here?",
     "Happy",
     "Bored",
     "Scared"
    ]
   ]
  ]
 },
 {
  "title": "Wrath of My Madness",
  "id": "tIBIfaF9Ef4",
  "cuts": [
   62.2,
   110,
   157
  ],
  "qs": [
   [
    [
     "Who was kicking flavor?",
     "Her mellow Latee",
     "DJ Mark",
     "Lord Ramsey"
    ],
    [
     "Which posse said \"Yo Latifah, we can do this\"?",
     "The R.E. posse",
     "The Native Tongues",
     "The Jungle Brothers"
    ],
    [
     "Why did she agree?",
     "She already knew it",
     "She got paid",
     "The crowd begged"
    ],
    [
     "She's in full what?",
     "Effect",
     "Control",
     "Color"
    ],
    [
     "What should you want to do?",
     "Flex",
     "Rest",
     "Leave"
    ],
    [
     "Who is she teaching?",
     "Those needing schooling",
     "Her children",
     "The DJ"
    ],
    [
     "What is in her hand?",
     "The mic",
     "A crown",
     "A record"
    ],
    [
     "Prepare your mind for her what?",
     "Lifeline",
     "Lecture",
     "Album"
    ],
    [
     "Latifah has the what?",
     "Spirit",
     "Crown",
     "Money"
    ],
    [
     "Head for the what?",
     "Water",
     "Door",
     "Hills"
    ],
    [
     "Dive into the wrath of her what?",
     "Madness",
     "Sadness",
     "Rhymes"
    ]
   ],
   [
    [
     "Their rhymes are not what like hers?",
     "Witty",
     "Pretty",
     "Long"
    ],
    [
     "Her rhyme is so delicious you can what?",
     "Eat it",
     "Sing it",
     "Keep it"
    ],
    [
     "If you like her taste, don't consider what?",
     "Biting",
     "Buying",
     "Leaving"
    ],
    [
     "There are penalties for those who just do what?",
     "Reciting",
     "Dancing",
     "Shouting"
    ],
    [
     "What are your thoughts doing?",
     "Shrinking",
     "Growing",
     "Racing"
    ],
    [
     "What are her thoughts doing?",
     "Growing",
     "Shrinking",
     "Fading"
    ],
    [
     "What does she tell you to release?",
     "Your shyness",
     "Your anger",
     "Your hands"
    ],
    [
     "What should you call her?",
     "Your highness",
     "Your honor",
     "Miss Dana"
    ],
    [
     "Brothers catch her eye with little what?",
     "Hijinks",
     "Gifts",
     "Notes"
    ],
    [
     "Everyone else's words took a lot of what?",
     "Thinking",
     "Money",
     "Practice"
    ],
    [
     "Dare to feel the what of her madness?",
     "Wrath",
     "Power",
     "Heat"
    ]
   ],
   [
    [
     "What is always everlasting?",
     "Word of mouth",
     "Money",
     "Fame"
    ],
    [
     "Who is the ruler of the ring?",
     "Lord Ramsey",
     "DJ Mark",
     "Latee"
    ],
    [
     "Who makes the music?",
     "Mark the 45 King",
     "Lord Ramsey",
     "Prince Paul"
    ],
    [
     "You tremble for her what?",
     "Treble",
     "Crown",
     "Rhymes"
    ],
    [
     "You're begging for the what?",
     "Bass",
     "Hook",
     "Drums"
    ],
    [
     "Her voice is too vicious, the same as the what?",
     "Pace",
     "Beat",
     "Face"
    ],
    [
     "What do the brothers give her?",
     "Only hugs",
     "Flowers",
     "Rings"
    ],
    [
     "Why is she a bug?",
     "Because she's bugging",
     "Because she's tiny",
     "Because she flies"
    ],
    [
     "Which DJ is loving the beats?",
     "DJ Mark",
     "DJ Red",
     "DJ Scratch"
    ],
    [
     "Her energy turns your mind to what?",
     "Gladness",
     "Sadness",
     "Kindness"
    ],
    [
     "Who loves her?",
     "The crowds",
     "The critics",
     "The judges"
    ]
   ]
  ]
 }
];
