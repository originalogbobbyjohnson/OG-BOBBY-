/* Jadakiss: Yonkers, Westchester. The LOX, D-Block, the raspy voice and the famous laugh. */
window.CFG = {
  name: "Jadakiss", nameUpper: "JADAKISS", short: "KISS",
  hood: "Yonkers", hoodUpper: "YONKERS", boro: "Westchester",
  saveKey: "ogfan99jadakiss1",
  /* everybody starts a lame ("Do your time, you a lame" from "ME"); climb to Top 5 */
  startRank: "Lame",
  ranks: ["Mr. Raspy", "K.I. Double S", "D-Block", "The LOX", "The Champ Is Here"],
  topRank: "Top 5",
  point: "Laugh", points: "Laughs",
  rankRewards: {
    "Mr. Raspy": { bongs: 5, line: "Mr. Raspy. They already know the voice." },
    "K.I. Double S": { bongs: 10, line: "K.I. Double S. All you do is spit flows." },
    "D-Block": { bongs: 15, line: "D-Block. You're down with the crew now." },
    "The LOX": { bongs: 20, line: "The LOX. Locked in for life." },
    "The Champ Is Here": { bongs: 25, line: "You run all of Yonkers." }
  },
  trophyArt: [
    /* Lame: a sad, flat paper cup */
    '<path d="M28 34h24l-4 40H32z" fill="#9a9a9a" stroke="#555" stroke-width="1.5"/><ellipse cx="40" cy="34" rx="12" ry="3" fill="#bdbdbd" stroke="#555"/>' +
    '<path d="M34 56q6-6 12 0" stroke="#555" stroke-width="1.5" fill="none"/><circle cx="35" cy="46" r="1.5" fill="#555"/><circle cx="45" cy="46" r="1.5" fill="#555"/>',
    /* Mr. Raspy: a gold microphone with rough sound waves */
    '<rect x="33" y="14" width="14" height="26" rx="7" fill="#ffd34d" stroke="#7a5512" stroke-width="1.5"/><path d="M35 20h10M35 25h10M35 30h10" stroke="#7a5512" stroke-width="1"/>' +
    '<path d="M28 34q0 14 12 14t12-14" stroke="#c9d1d9" stroke-width="2.5" fill="none"/><path d="M40 48v20M30 72h20" stroke="#c9d1d9" stroke-width="3"/>' +
    '<path d="M16 22l4 4-4 4 4 4M64 22l-4 4 4 4-4 4" stroke="#6fb3ff" stroke-width="2" fill="none"/>',
    /* K.I. Double S: gold lips with an S on each side */
    '<path d="M14 46q12-16 26-6 14-10 26 6-12 18-26 18T14 46z" fill="#d6342c" stroke="#5e1511" stroke-width="2"/><path d="M16 46q24 6 48 0" stroke="#5e1511" stroke-width="2" fill="none"/>' +
    '<text x="14" y="28" font-family="Anton,Impact,sans-serif" font-size="16" fill="#ffd34d" stroke="#7a5512" stroke-width=".8">S</text><text x="56" y="28" font-family="Anton,Impact,sans-serif" font-size="16" fill="#ffd34d" stroke="#7a5512" stroke-width=".8">S</text>',
    /* D-Block: a silver chain with a big D pendant */
    '<path d="M16 10q24 40 48 0" stroke="#c9d1d9" stroke-width="4" fill="none" stroke-dasharray="5 2"/>' +
    '<path d="M28 36h12q16 0 16 20t-16 20H28z" fill="#ffd34d" stroke="#111" stroke-width="2"/><path d="M36 46h4q7 0 7 10t-7 10h-4z" fill="#111"/>',
    /* The LOX: a heavy gold padlock */
    '<path d="M26 40V28q0-16 14-16t14 16v12" stroke="#c9d1d9" stroke-width="6" fill="none"/>' +
    '<rect x="18" y="38" width="44" height="38" rx="5" fill="#ffd34d" stroke="#7a5512" stroke-width="2"/><circle cx="40" cy="54" r="5" fill="#3a2a10"/><path d="M40 56v10" stroke="#3a2a10" stroke-width="4"/>',
    /* The Champ Is Here: a championship belt */
    '<rect x="4" y="40" width="72" height="20" rx="4" fill="#1d1d24" stroke="#000" stroke-width="1.5"/><ellipse cx="40" cy="50" rx="20" ry="18" fill="#ffd34d" stroke="#7a5512" stroke-width="2"/>' +
    '<ellipse cx="40" cy="50" rx="13" ry="11" fill="#d6342c"/><path d="M33 50l5 5 9-10" stroke="#ffd34d" stroke-width="2.5" fill="none"/>' +
    '<circle cx="12" cy="50" r="4" fill="#c9d1d9"/><circle cx="68" cy="50" r="4" fill="#c9d1d9"/>',
    /* Top 5: a gold crown with a big 5 */
    '<path d="M14 66l4-38 12 14 10-22 10 22 12-14 4 38z" fill="#ffd34d" stroke="#7a5512" stroke-width="2" stroke-linejoin="round"/>' +
    '<rect x="14" y="66" width="52" height="10" fill="#e0b532" stroke="#7a5512" stroke-width="1.5"/><circle cx="18" cy="26" r="3" fill="#d6342c"/><circle cx="40" cy="18" r="3" fill="#6fb3ff"/><circle cx="62" cy="26" r="3" fill="#d6342c"/>' +
    '<text x="40" y="62" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="20" fill="#7a5512">5</text>'
  ],
  clubTitle: "The Block", clubTab: "BLOCK",
  tags: ["D-BLOCK", "AHHH HA!", "KISS"],
  c1: "#ffd34d", c2: "#e4e4e4", c3: "#6fb3ff", bg: "#0f0d08",
  /* Yonkers: the Palisades across the river, the station house, the raceway grandstand, the museum dome, downtown blocks */
  headerSvg: (function () {
    let s = '<path d="M0 32l40-5 50 3 60-7 50 5 60-6 60 4 80-5v43H0z" opacity=".5"/>';
    s += '<rect x="0" y="54" width="400" height="4"/>';
    s += '<rect x="18" y="38" width="80" height="16"/><path d="M12 40l14-12h64l14 12z"/>';
    s += '<rect x="126" y="20" width="24" height="34"/><rect x="154" y="12" width="20" height="42"/><rect x="178" y="26" width="28" height="28"/>';
    s += '<path d="M226 54v-18h78v18z"/><path d="M220 36l12-8h66l12 8z"/>';
    s += '<path d="M328 54a26 26 0 0 1 52 0z"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@therealkiss", url: "https://www.instagram.com/therealkiss/" },
    { name: "YouTube", handle: "JadakissVEVO", url: "https://www.youtube.com/@JadakissVEVO" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take Metro-North's Hudson Line up the river to Yonkers. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "raceway", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "museum", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "sawmill", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO YONKERS", x: "Ashburton Av and Palisade Av on the west side. This is Jadakiss's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "U Make Me Wanna", id: "FEN0KRUYmGs", start: 28, cuts: [98.7, 138.6, 167.8], qs: [
      [
        ["Where do they travel for curtains?", "France", "Italy", "Spain"],
        ["She was there when he was on the what, hurtin'?", "Bench", "Road", "Corner"],
        ["Now that he owns his what?", "Team", "Label", "Building"],
        ["It's only right that he condones his what?", "Queen", "Crew", "Fans"],
        ["Her jewelry box looks like what cereal?", "Lucky Charms", "Froot Loops", "Trix"],
        ["What kind of stones?", "All color", "Only white", "Only blue"],
        ["She knows he's in the hood, but also that he's coming what?", "Home", "Late", "Rich"]
      ],
      [
        ["\"Whatever the road to...\" what \"...is, we on it\"?", "Paradise", "Riches", "Glory"],
        ["She gave him her what check?", "Income tax", "Pay", "Lottery"],
        ["\"Those were the days, these are the...\" what?", "Times", "Nights", "Years"],
        ["She held him down with everything, even his what?", "Rhymes", "Rent", "Car"],
        ["He would play a what for her?", "Song", "Game", "Tape"],
        ["She tells him how who would respond?", "The ladies", "The label", "The DJs"],
        ["From a woman's point of what?", "View", "Order", "Pride"]
      ],
      [
        ["She's the next best thing to a what?", "Soldier", "Superstar", "Angel"],
        ["Her head is full of what?", "Rollers", "Braids", "Dreams"],
        ["Look in her eyes and you can tell she's what?", "Real", "Happy", "Tired"],
        ["They're waiting on a new what?", "Island", "House", "Album"],
        ["They've been to all of them how many times?", "Four or five", "Two or three", "Nine or ten"],
        ["Jada says he's from the what?", "Streets", "Suburbs", "Country"]
      ]
    ] },
    { title: "ME", id: "QWW-Vu-juPk", start: 31, cuts: [99.6, 142.1, 186], qs: [
      [
        ["As soon as they hear the voice and the what?", "Flow", "Laugh", "Beat"],
        ["Stop mentioning his what?", "Name", "Crew", "Songs"],
        ["In the group meeting it's just Looch, P and who?", "Me", "Swizz", "Ruff Ryders"],
        ["If he doesn't feed the family, it falls on who?", "Me", "Them", "You"],
        ["What does he drive off road?", "Wrangler", "Bronco", "Range Rover"],
        ["The roof and the what are gone?", "Doors", "Seats", "Wheels"],
        ["All they talk about is who?", "Me", "Money", "Music"]
      ],
      [
        ["Who can go the what?", "Distance", "Extra mile", "Full round"],
        ["Who's the most what?", "Consistent", "Famous", "Dangerous"],
        ["Good dude, good what?", "Heart", "Name", "Taste"],
        ["He salutes Bad Boy and who?", "Ruff Ryders", "Def Jam", "Roc-A-Fella"],
        ["Who gave him a large bag for a commercial?", "Steve Stoute", "Russell Simmons", "Swizz Beatz"],
        ["The commercial was with who?", "AI", "Jordan", "Kobe"],
        ["One of the last of the OGs to stay what?", "Fly", "Humble", "Hungry"]
      ],
      [
        ["In the hook: who's what about me?", "Talkin'", "Thinkin'", "Worried"],
        ["He never had a what verse?", "Whack", "Short", "Slow"],
        ["\"Now think, don't...\" what \"...first\"?", "React", "Speak", "Blink"],
        ["Does everybody feel like that, or is it just who?", "You", "Them", "Us"],
        ["Sometimes he looks in the what?", "Mirror", "Window", "Sky"],
        ["In the mirror he says he doesn't even what you?", "Trust", "Know", "Like"],
        ["The song ends with \"Just...\" what?", "Me", "Us", "Kiss"]
      ]
    ] },
    { title: "Knock Yourself Out", id: "9899coNG-0o", cuts: [68.8, 120.7, 162.1], qs: [
      [
        ["She said she was a what for a year and a half?", "Model", "Dancer", "Singer"],
        ["Her hair dropped down to her what?", "Calf", "Back", "Knees"],
        ["All he does is get dough and spit what?", "Flows", "Bars", "Verses"],
        ["He tries to stay out of what?", "Trouble", "Sight", "Town"],
        ["Listen to the greatest of who?", "Marvin", "Stevie", "Luther"],
        ["The estate got how many locations?", "Six", "Two", "Ten"],
        ["\"And yeah, here go a blank...\" what?", "Check", "Tape", "Page"]
      ],
      [
        ["Knock yourself out like you were what yourself?", "Boxing", "Chasing", "Fooling"],
        ["His watch got so many what?", "Rocks", "Hands", "Numbers"],
        ["When you look at the time it's like you're watching who?", "Yourself", "The clock", "A movie"],
        ["Cruise in the Porsche with the trunk where?", "In the front", "In the back", "On the roof"],
        ["She couldn't find the door what?", "Handles", "Locks", "Keys"],
        ["Attitude, very high what?", "Maintenance", "Fashion", "Standards"],
        ["He's running out of his what?", "Patience", "Money", "Time"]
      ],
      [
        ["\"Ayo honey, I'm waiting to...\" what?", "Leave", "Dance", "Eat"],
        ["Keep dancing in them what?", "Capris", "Jeans", "Heels"],
        ["He's big with the mommies up in where?", "Belize", "Bermuda", "Brazil"],
        ["Cooking on what kind of grill?", "Foreman", "Gas", "Charcoal"],
        ["You might win some, but you just lost what?", "One", "Two", "It all"],
        ["Kiss miseducates 'em like who?", "Lauryn Hill", "Erykah Badu", "Mary J"],
        ["In the hook: you just wanna be what?", "Seen", "Heard", "Famous"]
      ]
    ] },
    { title: "Why", id: "S46cLQKgtPE", cuts: [62.6, 132.3, 199.5], qs: [
      [
        ["Why is Jadakiss as hard as it what?", "Gets", "Goes", "Comes"],
        ["The industry is designed to keep the artist in what?", "Debt", "Check", "Line"],
        ["Why they selling CDs for under a what?", "Dime", "Dollar", "Quarter"],
        ["Why my homies ain't get that what?", "Cake", "Call", "Ring"],
        ["A brother up north is better than who?", "Jordan", "Magic", "Bird"],
        ["At the bar, straight shots instead of popping what?", "Cris", "Corks", "Balloons"]
      ],
      [
        ["In the hook: they got me in the what?", "System", "Building", "Corner"],
        ["Tried to make it my way but got sent up on the what?", "Highway", "Mountain", "Ladder"],
        ["Why didn't his homie Dee pull out his what?", "Ferrari", "Porsche", "Bentley"],
        ["Why they open your package and read your what?", "Mail", "Texts", "Diary"],
        ["Why they stop letting brothers get what in jail?", "Degrees", "Visits", "Books"],
        ["Rappers lie in what percent of their rhymes?", "85%", "50%", "99%"],
        ["Why they let who win the election?", "The Terminator", "Rocky", "The Hulk"]
      ],
      [
        ["Why didn't they make the CL6 with a what?", "Clutch", "Sunroof", "Spoiler"],
        ["Why rap? 'Cause he needs what?", "Air time", "Money", "Fame"],
        ["The sign on the curb: \"Why lie, I need a...\" what?", "Beer", "Ride", "Job"],
        ["His buzz in L.A. ain't like it is in where?", "New York", "Yonkers", "Chicago"],
        ["Why the whole world love his what?", "Voice", "Laugh", "Style"],
        ["\"I try to tell 'em that it's the...\" what, son?", "Flow", "Beat", "Truth"],
        ["Why they made the new twenties? 'Cause he got all the what?", "Old ones", "Gold ones", "Big ones"]
      ]
    ] },
    { title: "We Gonna Make It", locked: true, cuts: [], qs: [] }
  ]
};
