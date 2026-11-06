/* Boot Camp Clik game (NYC map, Brooklyn: Crown Heights at the Brownsville edge, Eastern Pkwy & Buffalo Av).
   18+ ONLY set (songs = explicitSongs): the Clik's records curse throughout, so there are no 3 clean songs. Questions stay clean.
   3 songs, 11 questions per stop, 99 total. Timings = lrclib synced lyrics matched to the Boot Camp Click - Topic audio uploads (same length).
   Group members' verses only (Buckshot, Tek, Steele, Rock, Sean Price, Starang Wondah, Louieville Sluggah, Top Dog). Sean Price (1972-2015) is celebrated. */
(function () {
 const songs = [
  {
   title: "Let's Go", id: "i7R4VErETsw", cuts: [38.0, 117.2, 193.0],
   qs: [
    [
     ["We stomp through so many rap wars and rap what?", "Awards", "Battles", "Shows"],
     ["Boot Camp Clik been on your front what?", "Line", "Page", "Porch"],
     ["And hardly got what for it?", "Props", "Credit", "Thanks"],
     ["We never got big, but we never stopped what?", "Short", "Working", "Rhyming"],
     ["Who saw it, and called us?", "'Pac", "Biggie", "Nas"],
     ["Called us to form what?", "One Nation", "One Love", "One Voice"],
     ["Now we on the grind in the what?", "Tour bus", "Studio", "Mini van"],
     ["With a Ill Mind, and behind me is the what?", "Fortress", "Army", "Family"],
     ["You know, a few bros with what?", "Flows", "Clothes", "Shows"],
     ["Off the meat rack, seven to be what?", "Exact", "Honest", "Precise"],
     ["To show you the difference between a pot and a what?", "Pan", "Kettle", "Lid"]
    ],
    [
     ["Holdin' it down 'til their what?", "Last Stand", "Last Day", "Final Hour"],
     ["When I get on, I'm puttin' on my what?", "Fam", "Crew", "Block"],
     ["Let's Go, Let's Go, here we what?", "Go", "Come", "Are"],
     ["Y'all act tough like who?", "Bokeem Woodbine", "Wesley Snipes", "Ving Rhames"],
     ["Sean Price got too many what?", "Hood rhymes", "Hit records", "Gold chains"],
     ["It looks like a job for who?", "Superman", "Batman", "Spider-Man"],
     ["Up, up and what?", "Away", "Beyond", "Over"],
     ["Conversatin', what?", "Congregatin'", "Celebratin'", "Elevatin'"],
     ["How many disciples does Sean P got?", "Twelve", "Seven", "Ten"],
     ["Steele's a business what?", "Half-owner", "Co-founder", "Shareholder"],
     ["Lamb toaster, Sam who?", "Sosa", "Cassell", "Cooke"]
    ],
    [
     ["BCC, and I'm Strang what?", "One", "Two", "Three"],
     ["Y'all just be what?", "Silent", "Shook", "Jealous"],
     ["Like who, don't worry 'bout what Will got?", "Jill Scott", "Erykah Badu", "Lauryn Hill"],
     ["Don't worry 'bout what who got?", "Will", "Rob", "Tim"],
     ["Tek-N-Steele, the what?", "Generals", "Captains", "Soldiers"],
     ["Duck Down paid the what?", "Cost", "Bills", "Rent"],
     ["Da Incredible Rap Team rolls with the what?", "Force", "Squad", "Crew"],
     ["The greatest entertainer who came across?", "Dru-Ha", "Evil Dee", "Buckshot"],
     ["Toss the keys to who?", "E&J", "Louie", "Sean"],
     ["Stomp through the East Coast, then the what next?", "West", "South", "World"],
     ["Don't blame me for bein' a Foxx like who?", "Jamie", "Redd", "Vivica"]
    ]
   ]
  },
  {
   title: "The Chosen Few (Live for This)", id: "EwHoB-FMWyU", start: 42.4, cuts: [82.5, 141.9, 187.8],
   qs: [
    [
     ["I remember who, a female baller?", "Paula", "Pamela", "Paulette"],
     ["We hit down where, I would call her?", "South", "Town", "The shore"],
     ["The only one who showed me the real from the what?", "Phonies", "Fakes", "Haters"],
     ["She stayed hangin' out with her best friend who?", "Tony", "Ronnie", "Jamie"],
     ["She was always jokin', sayin' she wish she could what?", "Clone me", "Call me", "Keep me"],
     ["She told me and who to come OT?", "Foul", "Rock", "Steele"],
     ["You know me, baby girl, show me the what?", "Money", "Way", "Love"],
     ["Doin' how fast down 95 South?", "90", "80", "100"],
     ["Doin' 90 down which highway?", "95", "85", "75"],
     ["Pushin', pedal to the what?", "Metal", "Floor", "Max"],
     ["Once we get there the what'll get settled?", "Worries", "Bills", "Debts"]
    ],
    [
     ["Chillin', fallin' back for the what?", "Week", "Night", "Summer"],
     ["Toast to the dogs in the what?", "War", "Yard", "Pound"],
     ["The ones who've been there, through rich and the what?", "Poor", "Broke", "Struggle"],
     ["Louieville ain't crackin' no what?", "Jokes", "Smiles", "Codes"],
     ["I rhyme all day, I rhyme all what?", "Night", "Week", "Year"],
     ["I got to sleep, wake up, and do what some more?", "Rhyme", "Write", "Grind"],
     ["Starvin' like who?", "Marvin", "Martin", "Melvin"],
     ["Hit records, bangin' videos, but I'm so what?", "Poor", "Tired", "Bored"],
     ["You can tell by my jeans and my scuffed up what?", "Boots", "Jacket", "Fitted"],
     ["Leave mine alone in the zone, tryin' to what?", "Feed mine", "Find mine", "Free mine"],
     ["Pope John, call him the what?", "Third", "Second", "Great"]
    ],
    [
     ["I told you to what with me?", "Walk", "Ride", "Roll"],
     ["You wanna lose your money, what with me?", "Gamble", "Bet", "Play"],
     ["If you all about your paper, what with me?", "Hustle", "Grind", "Work"],
     ["One million dollar what?", "Score", "Deal", "Check"],
     ["Tell God to look out for one what?", "More", "Time", "Night"],
     ["This a painting of the what I'm givin' to you?", "Barrio", "Block", "Ghetto"],
     ["Readin' a lifestyle who sees in his views?", "Harry-O", "Kenny-O", "Rico"],
     ["Only who can judge me?", "God", "Me", "You"],
     ["I'm tatted, and I know that I'm what?", "Ugly", "Lucky", "Blessed"],
     ["Who's my enemies and who don't what me?", "Love", "Know", "Trust"],
     ["Call the crib, same number, same what?", "Hood", "Block", "Street"]
    ]
   ]
  },
  {
   title: "And So", id: "aDI5jLON5ew", cuts: [35.0, 98.6, 183.5],
   qs: [
    [
     ["It's who, man?", "Tek", "Steele", "Buck"],
     ["I do what I do like I do for the what?", "Hood", "Fans", "Money"],
     ["Renegade, never been what?", "Afraid", "Away", "Ashamed"],
     ["MC's get it what?", "Too", "First", "Last"],
     ["The moral of the what is this?", "Story", "Song", "Lesson"],
     ["I'm from where, home of Big and Aaliyah?", "BK", "Harlem", "Queens"],
     ["BK, home of Big and who?", "Aaliyah", "Lil' Kim", "Foxy Brown"],
     ["I guess I'm back where I what?", "Started", "Belong", "Was"],
     ["Sean P had to open up for who?", "Buckshot", "Rakim", "Busta Rhymes"],
     ["I hate the life that I'm livin', but I what it?", "Need", "Love", "Want"],
     ["Don't believe me, ask my wife and my what?", "Children", "Mother", "Neighbors"]
    ],
    [
     ["I'm aight, I'll be back next what?", "Week", "Year", "Month"],
     ["From day one I had a bad what?", "Start", "Break", "Luck"],
     ["The saga what?", "Continues", "Begins", "Ends"],
     ["Buck brought bomb to your what?", "Interview", "Party", "Show"],
     ["And blew the main what?", "Topic", "Speaker", "Stage"],
     ["What's up with who, son?", "Boot Camp Clik", "Black Moon", "Smif-N-Wessun"],
     ["They ain't droppin' the now what?", "Topics", "Records", "Singles"],
     ["I don't mean what corks when the poet talks?", "Moet", "Cristal", "Dom P"],
     ["Every line leave ya what, when the mind get lost?", "Blind", "Dizzy", "Stunned"],
     ["Rhymes are enforced with what?", "Action", "Passion", "Respect"],
     ["I'm hip hop like the what?", "Backspin", "Headspin", "Windmill"]
    ],
    [
     ["Way before this all began, back when I wasn't what?", "Rappin'", "Workin'", "Ballin'"],
     ["I was scrappin' for what?", "Ends", "Food", "Fame"],
     ["Stop crime, started what?", "Rhymin'", "Dancin'", "Writin'"],
     ["Knapsack and my what?", "Tims", "Jordans", "Fitted"],
     ["So you're thinkin' I'm 'The One' like who?", "Jet Li", "Jackie Chan", "Bruce Lee"],
     ["Blood boiling, pressure what?", "Rising", "Building", "Dropping"],
     ["We narrowed down to how many guys?", "7", "5", "10"],
     ["You know everything that glitters ain't what?", "Gold", "Real", "Diamonds"],
     ["Taught by the best, and gain control of this what?", "Game", "Block", "City"],
     ["I'ma rep for B-O-O-T what?", "C-A-M-P", "D-O-W-N", "M-O-O-N"],
     ["You know, from the what?", "O.G.C.", "B.C.C.", "D.I.T.C."]
    ]
   ]
  }
 ];
 window.CFG = {
  name: "Boot Camp Clik",
  nameUpper: "BOOT CAMP CLIK",
  short: "CLIK",
  hood: "Crown Heights",
  hoodUpper: "CROWN HEIGHTS",
  boro: "Brooklyn",
  saveKey: "ogfan99bootcampclik1",
  startRank: "Toy Soldier",
  ranks: ["Tour Bus Rider", "Backspinner", "Rap War Vet", "Sick Soldier", "Bucktown Champ"],
  topRank: "Live for This",
  point: "Stripe",
  points: "Stripes",
  rankRewards: {
   "Tour Bus Rider": { bongs: 5, line: "On the grind in the tour bus. Seven to be exact, and now you." },
   "Backspinner": { bongs: 10, line: "Hip hop like the backspin. You never change what you did back then." },
   "Rap War Vet": { bongs: 15, line: "You stomped through the rap wars. The Clik sees you." },
   "Sick Soldier": { bongs: 20, line: "Business half-owner of this whole game. Let's go." },
   "Bucktown Champ": { bongs: 25, line: "You run all of Crown Heights." }
  },
  trophyArt: [
   /* start: a little green toy soldier */
   '<circle cx="40" cy="22" r="7" fill="#6b8e23"/><path d="M31 18h18v-4q-9-6-18 0z" fill="#556b2f"/><rect x="33" y="30" width="14" height="22" rx="3" fill="#6b8e23"/><rect x="34" y="52" width="5" height="24" fill="#6b8e23"/><rect x="41" y="52" width="5" height="24" fill="#6b8e23"/><rect x="47" y="32" width="4" height="16" rx="2" fill="#6b8e23"/><rect x="29" y="32" width="4" height="16" rx="2" fill="#6b8e23"/>',
   /* r1: a tour bus */
   '<rect x="8" y="34" width="64" height="32" rx="5" fill="#e8c547" stroke="#7a5a00" stroke-width="2"/><rect x="14" y="40" width="10" height="10" fill="#bfe0f2"/><rect x="28" y="40" width="10" height="10" fill="#bfe0f2"/><rect x="42" y="40" width="10" height="10" fill="#bfe0f2"/><rect x="56" y="40" width="12" height="16" fill="#bfe0f2"/><rect x="8" y="56" width="64" height="4" fill="#6b8e23"/><circle cx="22" cy="68" r="6" fill="#111"/><circle cx="58" cy="68" r="6" fill="#111"/><text x="34" y="31" text-anchor="middle" font-family="Arial" font-weight="700" font-size="8" fill="#e8c547">BCC</text>',
   /* r2: a turntable mid-backspin */
   '<rect x="8" y="40" width="64" height="38" rx="4" fill="#2a2a2a" stroke="#777" stroke-width="2"/><circle cx="36" cy="59" r="16" fill="#111" stroke="#444"/><circle cx="36" cy="59" r="5" fill="#d9481f"/><path d="M60 44l-6 22" stroke="#ddd" stroke-width="3" stroke-linecap="round"/><path d="M22 30q14-14 30 0" stroke="#e8c547" stroke-width="3" fill="none"/><path d="M22 30l-2-8M22 30l8-2" stroke="#e8c547" stroke-width="3" stroke-linecap="round"/>',
   /* r3: a dog tag with stars */
   '<path d="M40 8v16" stroke="#c9ced6" stroke-width="2" stroke-dasharray="2 2"/><rect x="22" y="24" width="36" height="50" rx="12" fill="#c9ced6" stroke="#7a828c" stroke-width="2"/><circle cx="40" cy="31" r="3" fill="#7a828c"/><path d="M40 42l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" fill="#e8c547"/><rect x="30" y="62" width="20" height="3" fill="#7a828c"/>',
   /* r4: a pair of camo boots */
   '<path d="M14 30h18v34h10v12H14z" fill="#6b8e23"/><path d="M44 30h18v34h10v12H44z" fill="#556b2f"/><circle cx="20" cy="42" r="4" fill="#3a4a1a"/><circle cx="26" cy="54" r="3" fill="#8a9a4a"/><circle cx="52" cy="40" r="4" fill="#8a9a4a"/><circle cx="56" cy="56" r="3" fill="#3a4a1a"/><rect x="14" y="72" width="28" height="4" fill="#2a2a2a"/><rect x="44" y="72" width="28" height="4" fill="#2a2a2a"/>',
   /* r5: a champion belt */
   '<rect x="6" y="44" width="68" height="18" rx="4" fill="#2a2a2a"/><ellipse cx="40" cy="53" rx="18" ry="16" fill="#e8c547" stroke="#7a5a00" stroke-width="2"/><ellipse cx="40" cy="53" rx="11" ry="10" fill="#d9481f"/><text x="40" y="57" text-anchor="middle" font-family="Arial" font-weight="700" font-size="9" fill="#fff">BK</text><circle cx="14" cy="53" r="3" fill="#e8c547"/><circle cx="66" cy="53" r="3" fill="#e8c547"/>',
   /* top: five stars over a gold boot (the chosen few) */
   '<path d="M28 34h16v28h12v12H28z" fill="#e8c547" stroke="#7a5a00" stroke-width="2"/><path d="M28 44h16M28 52h16" stroke="#7a5a00" stroke-width="1.5"/>' + [12, 26, 40, 54, 68].map((x, i) => '<path d="M' + x + ' ' + (i % 2 ? 12 : 18) + 'l2.5 5h5.5l-4.5 3.5 1.8 5.5-5.3-3.4-5.3 3.4 1.8-5.5-4.5-3.5h5.5z" fill="#e8c547"/>').join("")
  ],
  clubTitle: "The Bunk Room",
  clubTab: "BUNKS",
  tags: ["BCC", "AND SO", "LET'S GO"],
  c1: "#e8c547",
  c2: "#6b8e23",
  c3: "#d9481f",
  bg: "#0b0d08",
  headerSvg: '<g fill="#f7f3ea"><rect x="6" y="28" width="44" height="36"/><rect x="56" y="18" width="30" height="46"/><rect x="92" y="34" width="50" height="30"/><path d="M160 64V40l20-10 20 10v24z"/><rect x="212" y="22" width="34" height="42"/><rect x="252" y="36" width="56" height="28"/><rect x="316" y="14" width="30" height="50"/><rect x="352" y="30" width="44" height="34"/><rect x="0" y="58" width="400" height="6" opacity=".6"/></g>',
  socials: [
   { name: "YouTube", handle: "@DuckDownMusic", url: "https://www.youtube.com/@DuckDownMusic" }
  ],
  rooms: [
   { scene: "bccStop", t: "PRESS PLAY", x: "Take the B14 to Eastern Pkwy & Buffalo Av, where Crown Heights runs into Brownsville. Tap the record. Every song is an episode.", sfx: "train" },
   { scene: "bccZion", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
   { scene: "bccWest", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "crowd" },
   { scene: "bccBlock", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
   { scene: "bccCorner", t: "WELCOME TO CROWN HEIGHTS", x: "Buffalo Av and St Johns Pl, the Eastern Parkway trees behind. This is Boot Camp Clik's game.", sfx: "spray" }
  ],
  songs: songs,
  explicitSongs: songs
 };
})();
(function(){try{if(window.CFG.explicitSongs&&localStorage.getItem("ogfan99explicit")==="1"){window.CFG.songs=window.CFG.explicitSongs;window.CFG.saveKey+="x";}}catch(e){}})();
