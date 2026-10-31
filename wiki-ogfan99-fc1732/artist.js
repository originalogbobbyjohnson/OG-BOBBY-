window.CFG = {
  name: "Wiki", nameUpper: "WIKI", short: "WIKI", hood: "Upper West Side", hoodUpper: "UPPER WEST SIDE", boro: "Manhattan",
  saveKey: "ogfan99wiki1",
  startRank: "Lil Me", ranks: ["Spitter", "Pretty Bull", "Golden Child", "Half God", "14K Figaro"], topRank: "The Mayor",
  point: "Token", points: "Tokens",
  rankRewards: {
    "Spitter": { bongs: 5, line: "You can spit in the cypher now." },
    "Pretty Bull": { bongs: 10, line: "Shirt off, posing on the West Side." },
    "Golden Child": { bongs: 15, line: "Hold him down, '93." },
    "Half God": { bongs: 20, line: "Half god, all New York." },
    "14K Figaro": { bongs: 25, line: "You run all of the Upper West Side." }
  },
  trophyArt: [
    /* Lil Me: a little cassette tape marked 1993 */
    '<rect x="14" y="40" width="52" height="34" rx="4" fill="#2a2a2e" stroke="#8d939b" stroke-width="2"/><rect x="20" y="46" width="40" height="12" rx="2" fill="#ff6fb5"/>' +
    '<text x="40" y="55.5" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="9" fill="#2a2a2e">1993</text><circle cx="30" cy="65" r="4" fill="#d9d9d9"/><circle cx="50" cy="65" r="4" fill="#d9d9d9"/><path d="M34 65h12" stroke="#5b5b60" stroke-width="2"/>',
    /* Spitter: a classic mic */
    '<circle cx="40" cy="30" r="13" fill="#c9ced6" stroke="#4a4f55" stroke-width="2"/><path d="M29 26h22M28 32h24M30 38h20M35 18v24M40 17v26M45 18v24" stroke="#7b8088" stroke-width="1"/>' +
    '<path d="M34 43h12l-3 32h-6z" fill="#2a2d33" stroke="#14161a" stroke-width="1.5"/><rect x="35" y="50" width="10" height="4" fill="#ff6fb5"/>',
    /* Pretty Bull: a pink bull head with gold horns */
    '<path d="M18 30q-6-14 8-16q-2 10 6 14z" fill="#ffd23f" stroke="#8a6a12" stroke-width="1.5"/><path d="M62 30q6-14-8-16q2 10-6 14z" fill="#ffd23f" stroke="#8a6a12" stroke-width="1.5"/>' +
    '<path d="M24 28q16-8 32 0l-4 30q-12 18-24 0z" fill="#ff6fb5" stroke="#7a2a52" stroke-width="2"/><ellipse cx="40" cy="62" rx="12" ry="8" fill="#ffb3d6" stroke="#7a2a52" stroke-width="1.5"/>' +
    '<circle cx="35" cy="62" r="2" fill="#7a2a52"/><circle cx="45" cy="62" r="2" fill="#7a2a52"/><circle cx="33" cy="42" r="2.5" fill="#1a1a1a"/><circle cx="47" cy="42" r="2.5" fill="#1a1a1a"/><circle cx="40" cy="73" r="4" fill="none" stroke="#ffd23f" stroke-width="2"/>',
    /* Golden Child: a gold baseball cap */
    '<path d="M18 58q0-28 22-28t22 28z" fill="#ffd23f" stroke="#8a6a12" stroke-width="2"/><path d="M40 30v28M28 34q4 12 4 24M52 34q-4 12-4 24" stroke="#c9a22a" stroke-width="1.2" fill="none"/>' +
    '<path d="M18 58q22 4 44 0q10 2 12 8q-34 6-56-2z" fill="#e8b82a" stroke="#8a6a12" stroke-width="2"/><circle cx="40" cy="30" r="2.5" fill="#8a6a12"/>',
    /* Half God: a halo, half gold half silver, over a star */
    '<ellipse cx="40" cy="24" rx="20" ry="6" fill="none" stroke="#c9ced6" stroke-width="5"/><path d="M20 24a20 6 0 0 1 40 0" fill="none" stroke="#ffd23f" stroke-width="5"/>' +
    '<path d="M40 36l6 13 14 1-11 9 4 14-13-8-13 8 4-14-11-9 14-1z" fill="#ffd23f" stroke="#8a6a12" stroke-width="1.5"/><path d="M40 36v37" stroke="#8a6a12" stroke-width="1"/><path d="M40 36l6 13 14 1-11 9 4 14-13-8z" fill="#c9ced6" opacity=".85"/>',
    /* 14K Figaro: a gold figaro chain with a pendant */
    '<path d="M14 20q26 54 52 0" fill="none" stroke="#ffd23f" stroke-width="5" stroke-dasharray="3 2 9 2" stroke-linecap="round"/>' +
    '<rect x="28" y="50" width="24" height="24" rx="4" fill="#ffd23f" stroke="#8a6a12" stroke-width="2"/><text x="40" y="67" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="#7a2a52">14K</text>',
    /* The Mayor: the gold key to the city on a pink sash */
    '<path d="M10 20l60 46" stroke="#ff6fb5" stroke-width="12"/><path d="M10 20l60 46" stroke="#ffd23f" stroke-width="2" stroke-dasharray="4 4"/>' +
    '<circle cx="28" cy="50" r="11" fill="none" stroke="#ffd23f" stroke-width="5"/><path d="M36 56l26 18M54 68l-4 6M60 72l-4 6" stroke="#ffd23f" stroke-width="5" stroke-linecap="round"/><circle cx="28" cy="50" r="11" fill="none" stroke="#8a6a12" stroke-width="1"/>'
  ],
  clubTitle: "The Telephone Booth", clubTab: "BOOTH",
  tags: ["RATKING", "WIKSET", "PRETTY BULL"],
  c1: "#ff6fb5", c2: "#ffd23f", c3: "#5ad1ff", bg: "#2a0f22",
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="50" width="400" height="14"/>';
    [[10, 30, 40], [60, 22, 34], [110, 36, 26], [150, 18, 44], [230, 28, 40], [280, 34, 30], [320, 20, 40], [370, 30, 30]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/>'; });
    [[24, 30], [168, 18], [246, 28], [338, 20]].forEach(([x, y]) => { s += '<rect x="' + (x - 6) + '" y="' + (y - 10) + '" width="12" height="10"/><path d="M' + (x - 7) + ' ' + (y - 10) + 'l7-6 7 6z"/><rect x="' + (x - 5) + '" y="' + y + '" width="2" height="2"/><rect x="' + (x + 3) + '" y="' + y + '" width="2" height="2"/>'; });
    return s + '<rect x="190" y="8" width="14" height="56"/><rect x="214" y="8" width="14" height="56"/><path d="M190 30l19-14 19 14z"/>';
  })() + '</g>',
  socials: [
    { name: "YouTube", handle: "@wikset", url: "https://www.youtube.com/@wikset" },
    { name: "Bandcamp", handle: "wiksetnyc", url: "https://wiksetnyc.bandcamp.com" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 1 to 96 St. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "riverside", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "cathedral", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "museum", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO THE UPPER WEST SIDE", x: "W 96 St and Broadway. This is Wiki's game.", sfx: "spray" }
  ],
  episodes: [
  /* Timing comes from the captions on the YouTube uploads (Wiki's channel and XL Recordings). Each pool only asks about lines heard since the last stop. */
  { title: "Golden Child", id: "j6tkNZfr3CQ", cuts: [66.1, 108.7, 167.4], qs: [
    [
      ["He pulls his socks up like he's playing what?", "Soccer", "Tennis", "Basketball"],
      ["How many days off does he take?", "No days off", "Two days off", "Weekends off"],
      ["He's making a mock-up for the next what he's dropping?", "Song", "Shoe", "Video"],
      ["His life is his what?", "Job", "Dream", "Movie"],
      ["Y'all made a what?", "Monster", "Legend", "Mess"],
      ["On what day should you make sure you're calling?", "Father's Day", "Mother's Day", "Christmas"]
    ],
    [
      ["Really just a kid with a baseball what?", "Cap", "Bat", "Card"],
      ["\"Hold him down\"... what year?", "'93", "'99", "'88"],
      ["Then what year do they throw it down?", "2012", "2005", "2020"],
      ["\"Tell me how you doing now\"... who?", "Kid", "Man", "Son"],
      ["He just found a whole new what?", "Route", "Sound", "Team"],
      ["These days he can be what?", "Lonely", "Busy", "Famous"]
    ],
    [
      ["No Helen Keller with the what?", "Pen", "Mic", "Beat"],
      ["He talks educated but still acts like he's from where?", "New York", "LA", "London"],
      ["He tried to do what, but couldn't give up the floor?", "Retire", "Move away", "Quit school"],
      ["He was on fire up in the what?", "Court", "Booth", "Club"],
      ["What's on his chest?", "Medals", "Tattoos", "A cape"],
      ["When he was seven, the playground was what?", "Heaven", "Home", "Empty"],
      ["He stayed out past what?", "11", "9", "Midnight"]
    ]
  ] },
  { title: "Mayor", id: "o-ziihiGyFc", cuts: [84.9, 138.9, 213], qs: [
    [
      ["He was that little rapper at the what?", "Party", "School", "Park"],
      ["No one ever asked, but he was a what?", "Natural", "Nerd", "Rookie"],
      ["That's his first what?", "Chapter", "Album", "Show"],
      ["He was the best rapper since he could what?", "Remember", "Walk", "Talk"],
      ["He never met one with a better what?", "Flow", "Pen", "Voice"],
      ["He had to slow it down, he's way too what?", "Intellectual", "Fast", "Loud"],
      ["He got a hot head, but he's staying what?", "Cold", "Calm", "Home"]
    ],
    [
      ["Anyone could walk through his what?", "Block", "Studio", "Crib"],
      ["You can ask him any what?", "Question", "Favor", "Song"],
      ["When he travels, he'll be what?", "Back", "Gone", "Late"],
      ["He has to apologize in what?", "Advance", "Person", "Writing"],
      ["You're his whole campaign what?", "Team", "Fund", "Trail"],
      ["In the hook, what did he save?", "His soul", "His money", "His voice"]
    ],
    [
      ["Now they're playing in the South of where?", "France", "Spain", "Italy"],
      ["You can count him while he does what?", "Dance", "Rhyme", "Sleep"],
      ["Far away, while he does what?", "Fly away", "Run away", "Drive away"],
      ["\"Tell me what time I'm on\"... what?", "Stage", "Air", "TV"],
      ["He's zoned and laser what?", "Sharp", "Focused", "Quick"],
      ["He's here and he knows he needs what?", "You", "Time", "Sleep"]
    ]
  ] },
  { title: "Pretty Bull", id: "29f1FTjTcZs", cuts: [87.4, 131.1, 175.2], qs: [
    [
      ["Everybody is looking like a what now?", "Movie", "Dream", "Party"],
      ["Everybody is what now?", "Moving", "Dancing", "Sleeping"],
      ["The skaters are out and so are the what?", "Haters", "Painters", "Players"],
      ["\"To be ___, that ain't what I'm all about\"", "Honest", "Famous", "Funny"],
      ["Who should put their hands up?", "The weirdos", "The haters", "The ladies"],
      ["Who's coming, every one of them?", "His whole crew", "His family", "The label"],
      ["It's like every night in the what?", "Tunnel", "Studio", "Lobby"]
    ],
    [
      ["He's posing, looking like a pretty what?", "Bull", "Bird", "Boy"],
      ["His shirt is what?", "Off", "Tucked in", "Inside out"],
      ["\"That type of stuff that\" who do?", "Wiki", "Hak", "Earl"],
      ["He always pities who?", "Fools", "Haters", "Kids"],
      ["He raps all them what back?", "Syllables", "Verses", "Hooks"],
      ["He's back at his what?", "Pinnacle", "Building", "Corner"],
      ["They don't know how to what?", "Act", "Rap", "Dance"]
    ],
    [
      ["Can't handle you, you're in a what?", "Pickle", "Pinch", "Panic"],
      ["When it hits you, you get what?", "Sick", "Rich", "Lost"],
      ["The long lines are for the what?", "Bathroom", "Club", "Show"],
      ["He throws it in the what?", "Track", "Trash", "Air"],
      ["He don't care about y'all, cause he got his whole what coming?", "Crew", "Family", "Block"],
      ["Every night in the what, again?", "Tunnel", "Lobby", "Rain"]
    ]
  ] },
  { title: "IHNY", id: "t1MNHKNY9qI", start: 44, cuts: [122.5, 159.7, 206.3], qs: [
    [
      ["Before Broadway, it was what lane?", "Lenape", "Mohawk", "Hudson"],
      ["There was a real wall on the block before the what?", "Stock exchange", "Subway", "Bridge"],
      ["There's been a lot of what?", "Change", "Rain", "Noise"],
      ["New York in the '70s: punk and what?", "Hip hop", "Jazz", "Country"],
      ["Shorty came right off the bus on what street?", "42nd Street", "34th Street", "125th Street"],
      ["\"I love you, New York. I ___ you, New York\"", "Hate", "Need", "Miss"]
    ],
    [
      ["Felt like next week it's the what?", "'90s", "'80s", "2000s"],
      ["How does New York go?", "Fast", "Slow", "Hard"],
      ["Now we're in what year?", "'93", "'96", "'88"],
      ["He came out rhyming on beat before he could what?", "Speak", "Walk", "Read"],
      ["A West Side family got stuck with a grimy what?", "MC", "Landlord", "Cat"],
      ["He's a New Yorker, so they do what?", "Respect him", "Know him", "Fear him"],
      ["If you don't know, you ain't from his what?", "Block", "School", "Crew"]
    ],
    [
      ["The hate is going to make him take the what?", "City", "Crown", "Train"],
      ["Take the city and make it what?", "Mine", "Shine", "Better"],
      ["That's a goal for anyone from the city at any what?", "Time", "Age", "Cost"],
      ["\"You can make or ___ me, New York\"", "Break", "Shake", "Fake"],
      ["He can't just abort the what?", "Mission", "Plan", "Show"],
      ["Born and what?", "Bred", "Raised", "Paid"],
      ["Catch him on the park what?", "Bench", "Swings", "Corner"]
    ]
  ] },
  { title: "Wikispeaks", id: "j9QdEfruq_0", start: 44, cuts: [145.5, 236.4, 325], qs: [
    [
      ["He got your eyes glued what?", "Open", "Shut", "Tight"],
      ["His friends only got like how many guys left?", "Three", "Five", "Ten"],
      ["It's so cold you can see his what?", "Breath", "Tears", "Shadow"],
      ["What does he take every day?", "The train", "The bus", "A cab"],
      ["Subway cars keep his heart at what?", "Bay", "Home", "Peace"],
      ["He's straight what, while a lot of y'all are pretending?", "New York", "Harlem", "Brooklyn"],
      ["It's about time Wiki does what?", "Speaks", "Sleeps", "Leaves"]
    ],
    [
      ["He feels like Jay-Z in what year?", "'96", "'98", "'03"],
      ["And like ODB in what year?", "'93", "'95", "'99"],
      ["He's walking on what street all day?", "Broadway", "Lenox", "Fifth Avenue"],
      ["Broad City on his broad what?", "Ways", "Days", "Streets"],
      ["The clumsy kid drops what?", "Cymbals", "Plates", "Phones"],
      ["He drops samples every time he got a what?", "Pencil", "Mic", "Beat"],
      ["He sold his soul, but at least he still got the what?", "Mental", "Money", "Music"]
    ],
    [
      ["Clean up the city, need to clean up Wiki's what?", "Act", "Room", "Shoes"],
      ["And clean up Wiki's what?", "Accent", "Kicks", "Crew"],
      ["Which baller is dabbing when he's dunking?", "Carmelo", "Kobe", "LeBron"],
      ["They're packaging his what?", "Dumplings", "Records", "Lunch"],
      ["He's stuck in New York, rapping in this what?", "Dungeon", "Basement", "Booth"],
      ["Pennies are down under his what?", "Cushion", "Pillow", "Mattress"],
      ["\"Five boroughs, my\"... what?", "Boroughs", "Blocks", "Crews"]
    ]
  ] }
  ]
};
