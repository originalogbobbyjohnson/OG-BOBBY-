/* Pete Rock & CL Smooth game (NYC map, Westchester: Mount Vernon; they met at Mount Vernon High School). CLEAN set, 4 songs, 99 questions.
   Timings: Da Two + Lots of Lovin' = lrclib synced lyrics matched to the Pete Rock - Topic audio uploads (same length).
   Return of the Mecca = lrclib synced lyrics on the 344 s upload, checked word-by-word against that upload's own captions.
   Mecca and the Soul Brother = caption fallback (the video's own captions, word timings read from the player), words from lrclib plain lyrics.
   Group verses only (both Pete Rock and CL Smooth rap on Da Two). T.R.O.Y. skipped (tribute song). */
window.CFG = {
 name: "Pete Rock & CL Smooth",
 nameUpper: "PETE ROCK & CL SMOOTH",
 short: "PR&CL",
 hood: "Mount Vernon",
 hoodUpper: "MOUNT VERNON",
 boro: "Westchester",
 saveKey: "ogfan99petecl1",
 startRank: "Wonderama Rookie",
 ranks: ["Lyrical Dynamo", "Ceremonial Expert", "Still Super", "Midnight Wrecker", "Reincarnated Selector"],
 topRank: "One of Da Two",
 point: "Pape",
 points: "Papes",
 rankRewards: {
  "Lyrical Dynamo": { bongs: 5, line: "You set the flow when you do so. The Knights hallway knows your name." },
  "Ceremonial Expert": { bongs: 10, line: "The full swing. You don't sing the blues, you tap it." },
  "Still Super": { bongs: 15, line: "Keep rockin', still super. The Dragon Coaster can't shake you." },
  "Midnight Wrecker": { bongs: 20, line: "Hit the lotto for the beggar. The 2 train waits for you at the last stop." },
  "Reincarnated Selector": { bongs: 25, line: "You run all of Mount Vernon." }
 },
 trophyArt: [
  /* start: a TV with rainbow test bars (Wonderama) */
  '<rect x="14" y="30" width="52" height="40" rx="6" fill="#3a2a1e" stroke="#c9a24a" stroke-width="2"/><rect x="20" y="36" width="40" height="28" rx="2" fill="#111"/><rect x="22" y="38" width="6" height="24" fill="#f2c14e"/><rect x="28" y="38" width="6" height="24" fill="#7fd1b9"/><rect x="34" y="38" width="6" height="24" fill="#e8743b"/><rect x="40" y="38" width="6" height="24" fill="#b5384d"/><rect x="46" y="38" width="6" height="24" fill="#6ea8ff"/><rect x="52" y="38" width="6" height="24" fill="#fff"/><path d="M30 30l-8-12M50 30l8-12" stroke="#c9a24a" stroke-width="2"/><rect x="24" y="70" width="6" height="8" fill="#3a2a1e"/><rect x="50" y="70" width="6" height="8" fill="#3a2a1e"/>',
  /* r1: a gold mic with a lightning bolt (lyrical dynamo) */
  '<rect x="31" y="14" width="18" height="28" rx="9" fill="#ffd27a" stroke="#8a6a00" stroke-width="2"/><path d="M33 22h14M33 28h14M33 34h14" stroke="#8a6a00" stroke-width="1.5"/><path d="M24 36q0 16 16 16q16 0 16-16" stroke="#e9e3d6" stroke-width="3" fill="none"/><rect x="38" y="52" width="4" height="18" fill="#e9e3d6"/><rect x="28" y="70" width="24" height="6" rx="2" fill="#e9e3d6"/><path d="M62 16l-8 12h6l-6 12" stroke="#e8743b" stroke-width="3" fill="none" stroke-linejoin="round"/>',
  /* r2: a top hat and cane (ceremonial expert) */
  '<rect x="24" y="22" width="32" height="30" rx="2" fill="#1a1414" stroke="#c9a24a" stroke-width="2"/><rect x="24" y="44" width="32" height="6" fill="#b5384d"/><ellipse cx="40" cy="54" rx="26" ry="5" fill="#1a1414" stroke="#c9a24a" stroke-width="2"/><path d="M62 78V40q0-8 7-8" stroke="#ffd27a" stroke-width="4" fill="none" stroke-linecap="round"/>',
  /* r3: a record with a gold star (still super) */
  '<circle cx="40" cy="50" r="26" fill="#111" stroke="#444" stroke-width="2"/><circle cx="40" cy="50" r="18" fill="none" stroke="#2a2a2a"/><circle cx="40" cy="50" r="9" fill="#e8743b"/><circle cx="40" cy="50" r="2" fill="#111"/><path d="M62 10l3.5 8 8.5.8-6.5 5.6 2 8.4-7.5-4.5-7.5 4.5 2-8.4-6.5-5.6 8.5-.8z" fill="#ffd27a"/>',
  /* r4: a crescent moon over a clock at midnight (midnight wrecker) */
  '<path d="M30 14a14 14 0 1 0 14 22a11 11 0 1 1 -14 -22z" fill="#ffd27a"/><circle cx="46" cy="56" r="20" fill="#f4ead8" stroke="#b5384d" stroke-width="3"/><path d="M46 56V41M46 56l1 0" stroke="#111" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="56" r="2.5" fill="#111"/><circle cx="64" cy="20" r="1.6" fill="#fff"/><circle cx="16" cy="44" r="1.6" fill="#fff"/>',
  /* r5: a selector's crate of records */
  '<rect x="14" y="44" width="52" height="32" rx="2" fill="#8b5a2b" stroke="#5a3a18" stroke-width="2"/><path d="M14 54h52M14 64h52" stroke="#5a3a18" stroke-width="1.5"/><rect x="20" y="20" width="22" height="30" rx="1" fill="#b5384d" transform="rotate(-8 31 35)"/><rect x="36" y="18" width="22" height="32" rx="1" fill="#7fd1b9" transform="rotate(7 47 34)"/><circle cx="48" cy="32" r="8" fill="#111"/><circle cx="48" cy="32" r="3" fill="#ffd27a"/>',
  /* top: two gold records side by side with a crown (da two) */
  '<circle cx="27" cy="54" r="16" fill="#ffd27a" stroke="#8a6a00" stroke-width="2"/><circle cx="27" cy="54" r="5" fill="#b5384d"/><circle cx="53" cy="54" r="16" fill="#ffd27a" stroke="#8a6a00" stroke-width="2"/><circle cx="53" cy="54" r="5" fill="#b5384d"/><path d="M22 32l5-16 7 9 6-12 6 12 7-9 5 16z" fill="#ffd27a" stroke="#8a6a00" stroke-width="1.5"/><circle cx="40" cy="12" r="2.5" fill="#e8743b"/>'
 ],
 clubTitle: "The Tunnel of Love",
 clubTab: "TUNNEL",
 tags: ["DA TWO", "KNIGHTS", "PR & CL"],
 c1: "#ffd27a",
 c2: "#b5384d",
 c3: "#7fd1b9",
 bg: "#120c08",
 headerSvg: '<g fill="#f7f3ea"><rect x="6" y="30" width="60" height="34"/><rect x="18" y="20" width="36" height="10"/><path d="M90 64V44l26-14 26 14v20z"/><rect x="150" y="38" width="64" height="26"/><rect x="160" y="26" width="10" height="12"/><path d="M232 64q30-50 60 0z" opacity=".8"/><path d="M300 64l10-30h4l10 30z"/><rect x="330" y="34" width="62" height="30"/><rect x="0" y="58" width="400" height="6" opacity=".6"/></g>',
 socials: [
  { name: "Instagram", handle: "@peterock", url: "https://www.instagram.com/peterock/" },
  { name: "YouTube", handle: "Pete Rock Official", url: "https://www.youtube.com/channel/UCruzFcHYNawnTKC5LpEROMw" }
 ],
 rooms: [
  { scene: "pclWakefield", t: "PRESS PLAY", x: "Take the 2 to the last stop, Wakefield–241 St, at the Mount Vernon line. Tap the record. Every song is an episode.", sfx: "train" },
  { scene: "pclKnights", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
  { scene: "pclPlayland", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "coaster" },
  { scene: "pclCenter", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
  { scene: "pclCorner", t: "WELCOME TO MOUNT VERNON", x: "California Rd and Arizona Pl, Mount Vernon High behind. This is Pete Rock & CL Smooth's game.", sfx: "spray" }
 ],
 songs: [
  {
   title: "Da Two", id: "i29S2k1Iioo", start: 20.9, cuts: [54.0, 128.3, 203.0],
   qs: [
    [
     ["He'll remind you of what street when it was sweet?", "Third Street", "Fourth Street", "Main Street"],
     ["Move on and grow to another what?", "Plateau", "Level", "Mountain"],
     ["Me and C-L Smooth havin' that what?", "Dough", "Flow", "Glow"],
     ["He left to deal with whose endeavors?", "His grand daddy's", "His father's", "His uncle's"],
     ["The first shot came in what year?", "'91", "'89", "'93"],
     ["What came out in '91?", "The E.P.", "The LP", "The single"],
     ["The foundation was due in what year?", "'92", "'94", "'90"],
     ["'92 brought a top ten what?", "Review", "Record", "Spot"],
     ["When it really comes down to it, who what?", "Cares", "Knows", "Wins"]
    ],
    [
     ["Like the Tortoise and the what, you know the race I run?", "Hare", "Fox", "Hound"],
     ["How many cool cats reclaim the name?", "Two", "Three", "Five"],
     ["The good news is that there is a what?", "Crew", "Team", "Group"],
     ["As a child, what did he stack in a pile?", "45's", "Comic books", "Tapes"],
     ["He'd put them on before he could what?", "Walk", "Talk", "Read"],
     ["He knew he wasn't average, music in his what?", "Bloodstream", "Heartbeat", "Backbone"],
     ["The next chapter, who said it?", "MC Shan", "Big Daddy Kane", "Kool G Rap"],
     ["Now it's Pete Rock for days in the what?", "Basement", "Studio", "Attic"],
     ["He's got more hot tracks than who?", "Carlos DeJesus", "Frankie Crocker", "Mr. Magic"]
    ],
    [
     ["Ain't nothin' changed but the what?", "Weather", "Money", "Season"],
     ["Still ridin' with C.D.'s and what?", "Leather", "Suede", "Chrome"],
     ["Keep them other cats folded like what?", "Beach chairs", "Lawn chairs", "Napkins"],
     ["Got an eye on that street what?", "Aristocrat", "Diplomat", "Acrobat"],
     ["We on it like this to the what?", "Last stop", "Top floor", "End zone"],
     ["He's the next who, mastering art?", "Humphrey Bogart", "Clint Eastwood", "James Dean"],
     ["Like a jeweler with a what?", "Diamond cutter", "Magnifying glass", "Gold scale"],
     ["Your best team against mine is a light what?", "Scrimmage", "Workout", "Warm-up"],
     ["Play like who and eat spinach?", "Popeye", "Brutus", "Wimpy"]
    ]
   ]
  },
  {
   title: "Lots of Lovin'", id: "4arN4Fw7VIs", start: 40.8, cuts: [78.3, 136.5, 197.2],
   qs: [
    [
     ["A sweet serenade, sip what?", "Lemonade", "Iced tea", "Ginger ale"],
     ["As we laid inside the what?", "Shade", "Sun", "Grass"],
     ["My heart was captured when you what?", "Possessed it", "Protected it", "Accepted it"],
     ["Together, it would just be us how many?", "Two", "Three", "Four"],
     ["He'd protect ya in your moment of what?", "Fear", "Need", "Doubt"],
     ["Let's create this heavenly what?", "Fantasy", "Harmony", "Melody"],
     ["Tender love right down to the what?", "Core", "Bone", "Soul"],
     ["You will find my feelings are what?", "Genuine", "Endless", "Golden"]
    ],
    [
     ["Day after day, you're the one I'm what?", "Thinking of", "Dreaming of", "Speaking of"],
     ["The blacker the berry, the sweeter the what?", "Juice", "Fruit", "Taste"],
     ["I ride through the tunnel of what?", "Love", "Time", "Fun"],
     ["Ride through the tunnel and share a what?", "Milkshake", "Soda", "Sundae"],
     ["Carve our name in a tree by the what?", "Lake", "River", "Road"],
     ["Out of all the girls, you're the first on my what?", "List", "Mind", "Block"],
     ["The only one now, and truly for what?", "Life", "Real", "Good"],
     ["My fiancee and future what?", "Wife", "Bride", "Queen"]
    ],
    [
     ["You want to be treated like a what?", "Queen", "Princess", "Lady"],
     ["There's no doubt about it, lady, I'm what?", "Strung", "Stuck", "Hooked"],
     ["On your love, looks, and what?", "Affection", "Attention", "Perfection"],
     ["You qualify, top choice what?", "Selection", "Connection", "Collection"],
     ["Woman of a darker what?", "Breed", "Shade", "Kind"],
     ["Cutie, you got what I what?", "Need", "Want", "Like"],
     ["Many nights to cuddle by the what?", "Fireplace", "Window", "Ocean"],
     ["You blush when I touch your what?", "Face", "Hand", "Hair"]
    ]
   ]
  },
  {
   title: "Mecca and the Soul Brother", id: "VQS8e17a474", start: 10.2, cuts: [41.5, 73.0, 147.6],
   qs: [
    [
     ["You wanna act trife and flip the what?", "Script", "Switch", "Coin"],
     ["With your Wonderama what?", "Drama", "Comma", "Trauma"],
     ["You kick it like who?", "Pele", "Maradona", "Ali"],
     ["Flows, even who knows?", "Bo", "Mike", "Moe"],
     ["My versatility, what, is simply...?", "Capability", "Agility", "Stability"],
     ["Berry Gordy, gettin' papes, oh what?", "Lordy", "Mercy", "Baby"],
     ["New York to where, say what I play?", "L.A.", "D.C.", "Miami"],
     ["Catch a runaway smooth like who?", "Billie Holiday", "Ella Fitzgerald", "Sarah Vaughan"]
    ],
    [
     ["You couldn't bag me, boy, with a what?", "Hefty", "Lunch bag", "Duffel"],
     ["Train like who but still can't step to me?", "Rocky", "Tyson", "Holyfield"],
     ["So take a hint, money, leave it what?", "Alone", "Behind", "There"],
     ["Play like who and find a home?", "Stephanie Mills", "Diana Ross", "Chaka Khan"],
     ["Mixed with the tricks in the alphabet what?", "Stew", "Soup", "Song"],
     ["The night cap, so prepare for a what?", "Cat scan", "X-ray", "Check-up"],
     ["Finger lickin' the what?", "Papes", "Plates", "Pages"],
     ["Finger lickin' like there is no what?", "Other", "Tomorrow", "Limit"]
    ],
    [
     ["The professional ceremonial what?", "Expert", "Master", "Speaker"],
     ["Save the mystery for who?", "Agatha Christie", "Sherlock Holmes", "Nancy Drew"],
     ["Give me a break, better wake who?", "Chief Kanisky", "Chief Brody", "Chief Ironside"],
     ["I'm not your ordinary modern day what?", "Cliche", "Hero", "Rapper"],
     ["It's a Fantasy Island without a who?", "Tattoo", "Mr. Roarke", "Gilligan"],
     ["Makin' movies like your name is who?", "Faye Dunaway", "Diane Keaton", "Jane Fonda"],
     ["Mr. Whipple can't dribble like who?", "Magic", "Bird", "Isiah"],
     ["The Tony Randall left in what?", "Shambles", "Tatters", "Pieces"]
    ]
   ]
  },
  {
   title: "Return of the Mecca", id: "ZGevoUdRlX0", start: 57.8, cuts: [90.1, 121.3, 203.0],
   qs: [
    [
     ["Export the hardcore that came before who?", "Columbus", "Magellan", "Cortes"],
     ["Serve the soul on a what?", "Dish", "Plate", "Platter"],
     ["Okay means what, kid, not decrepit?", "Official", "Original", "Authentic"],
     ["Entice the price with the mic what?", "Device", "Stand", "Check"],
     ["When you near the frontier, it's a world what?", "Premiere", "Record", "Tour"],
     ["Put the armor on your what?", "Gear", "Chest", "Car"],
     ["Adored and what?", "Restored", "Ignored", "Explored"],
     ["Vocalize a verb, and the return of the what?", "Word", "Third", "World"]
    ],
    [
     ["Mecca, the reincarnated what?", "Selector", "Director", "Collector"],
     ["A richer voice than who?", "Robin Leach", "Barry White", "Don Cornelius"],
     ["No bleach, so you can't what?", "Impeach", "Compete", "Defeat"],
     ["Monumentally what, I'll prove it sincerely?", "Smooth", "Strong", "Large"],
     ["So sweet the repeat, you're bound to catch a what?", "Cavity", "Cold", "Craving"],
     ["C.L.'s potential, smooth and what?", "Sequential", "Essential", "Exceptional"],
     ["Deep in every measure, hit the lotto for the what?", "Beggar", "Brother", "Baker"],
     ["The midnight what, return of the Mecca?", "Wrecker", "Rocker", "Hacker"]
    ],
    [
     ["Understand the Mecca in what?", "Command", "Control", "Charge"],
     ["A scripture ripped out the piece of a what?", "Scroll", "Book", "Page"],
     ["The beautiful and the what?", "Bold", "Brave", "Bright"],
     ["Start 'em in Harlem with the motto, the what?", "Apollo", "Savoy", "Cotton Club"],
     ["Stable like a what, lyrics I cradle?", "Turntable", "Tripod", "Rock"],
     ["The silhouette, a weirder fella, darker than what?", "Vanilla", "Chocolate", "Coffee"],
     ["Unveil a tale in detail, read it in what?", "Braille", "Print", "Bold"],
     ["Tabasco, the late what?", "Show", "Night", "Shift"]
    ]
   ]
  }
 ]
};
