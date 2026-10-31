/* Hoodie Allen (Steven Markowitz): raised in Plainview, Long Island, Huntington-area shows; went from a Google job to charting
   independent. Mixtapes and albums: Pep Rally, Leap Year, All American, Crew Cuts, People Keep Talking, Happy Camper, The Hype.
   Fans call themselves the Hoodie Mob. */
window.CFG = {
  name: "Hoodie Allen", nameUpper: "HOODIE ALLEN", short: "HOODIE",
  hood: "Plainview", hoodUpper: "PLAINVIEW", boro: "Long Island",
  saveKey: "ogfan99hoodieallen1",
  /* everybody starts at the Pep Rally and climbs his mixtape and album titles to The Hype */
  startRank: "Pep Rally",
  ranks: ["Leap Year", "Crew Cuts", "All American", "Happy Camper", "People Keep Talking"],
  topRank: "The Hype",
  point: "Hoodie", points: "Hoodies",
  rankRewards: {
    "Leap Year": { bongs: 5, line: "You just took the leap." },
    "Crew Cuts": { bongs: 10, line: "You made the crew cut." },
    "All American": { bongs: 15, line: "First team, All American." },
    "Happy Camper": { bongs: 20, line: "One happy camper." },
    "People Keep Talking": { bongs: 25, line: "You run all of Plainview." }
  },
  trophyArt: [
    /* Pep Rally: a megaphone */
    '<path d="M16 38l40-16v40l-40-16z" fill="#ffb238" stroke="#7a4a10" stroke-width="2" stroke-linejoin="round"/><rect x="8" y="36" width="10" height="12" rx="2" fill="#3fa9f5"/>' +
    '<path d="M26 46l4 18h8l-4-16" fill="#3fa9f5"/><path d="M62 30q8 12 0 24M68 24q12 18 0 36" stroke="#ffe08a" stroke-width="2.5" fill="none"/>',
    /* Leap Year: a frog mid-leap over a calendar page reading LEAP */
    '<rect x="24" y="40" width="34" height="34" rx="3" fill="#f2f2f2" stroke="#333" stroke-width="2"/><rect x="24" y="40" width="34" height="9" fill="#ff5d73"/>' +
    '<text x="41" y="69" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="11" fill="#222">LEAP</text>' +
    '<ellipse cx="46" cy="24" rx="14" ry="8" fill="#5cc26a" stroke="#1f6a2a" stroke-width="2"/><circle cx="40" cy="17" r="3" fill="#fff"/><circle cx="52" cy="17" r="3" fill="#fff"/><circle cx="40" cy="17" r="1.4" fill="#111"/><circle cx="52" cy="17" r="1.4" fill="#111"/>',
    /* Crew Cuts: a pair of scissors */
    '<circle cx="26" cy="64" r="9" fill="none" stroke="#ff5d73" stroke-width="4"/><circle cx="54" cy="64" r="9" fill="none" stroke="#ff5d73" stroke-width="4"/>' +
    '<path d="M30 56L56 14M50 56L24 14" stroke="#c8ccd4" stroke-width="5" stroke-linecap="round"/><circle cx="40" cy="38" r="3" fill="#555"/>',
    /* All American: a varsity letter jacket */
    '<path d="M18 30l14-8h16l14 8 8 44H10z" fill="#1f4fa0" stroke="#0d2550" stroke-width="2"/><path d="M10 74l8-44-6 44zM70 74l-8-44 6 44z" fill="#f2f2f2"/>' +
    '<path d="M32 22l8 14 8-14" fill="none" stroke="#f2f2f2" stroke-width="3"/><text x="28" y="60" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="16" fill="#ffb238">A</text>',
    /* Happy Camper: a tent under a smiling sun */
    '<circle cx="62" cy="18" r="9" fill="#ffb238"/><path d="M58 19q4 4 8 0" stroke="#7a4a10" stroke-width="1.5" fill="none"/>' +
    '<path d="M8 74L36 28l28 46z" fill="#2f9e5a" stroke="#14522c" stroke-width="2"/><path d="M36 28l-8 46h16z" fill="#14522c"/><path d="M36 28v-6" stroke="#7a4a10" stroke-width="2"/>',
    /* People Keep Talking: two speech bubbles */
    '<path d="M8 20h40a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H24l-10 10v-10H8a6 6 0 0 1-6-6V26a6 6 0 0 1 6-6z" fill="#3fa9f5"/>' +
    '<path d="M32 46h38a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6h-4v8l-10-8H32a6 6 0 0 1-6-6V52a6 6 0 0 1 6-6z" fill="#ff5d73"/>' +
    '<circle cx="18" cy="35" r="2.5" fill="#fff"/><circle cx="28" cy="35" r="2.5" fill="#fff"/><circle cx="38" cy="35" r="2.5" fill="#fff"/><circle cx="44" cy="59" r="2.5" fill="#fff"/><circle cx="54" cy="59" r="2.5" fill="#fff"/><circle cx="64" cy="59" r="2.5" fill="#fff"/>',
    /* The Hype: a gold hoodie with a lightning bolt */
    '<path d="M24 26q16-24 32 0l14 8-6 14-6-4v30H22V44l-6 4-6-14z" fill="#ffb238" stroke="#7a4a10" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M30 28q10 10 20 0" fill="#c98a1e"/><path d="M42 40l-8 14h7l-4 14 11-18h-7l4-10z" fill="#ff5d73" stroke="#7a1a2a" stroke-width="1"/>'
  ],
  clubTitle: "The Merch Table", clubTab: "MERCH",
  tags: ["HOODIE MOB", "HAPPY CAMPER", "HOODIE"],
  c1: "#ffb238", c2: "#3fa9f5", c3: "#ff5d73", bg: "#10182b",
  /* Long Island skyline: the harbor lighthouse, low houses, the Jones Beach water tower */
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    s += '<rect x="30" y="40" width="44" height="16"/><rect x="42" y="18" width="20" height="22"/><rect x="46" y="8" width="12" height="10"/><path d="M44 8l8-7 8 7z"/>';
    for (let x = 100; x < 300; x += 34) s += '<rect x="' + x + '" y="40" width="26" height="16"/><path d="M' + (x - 3) + ' 40l16-12 16 12z"/>';
    s += '<rect x="330" y="10" width="18" height="46"/><path d="M328 10l11-10 11 10z"/>';
    return s;
  })() + '</g>',
  socials: [
    { name: "Instagram", handle: "@hoodieallen", url: "https://www.instagram.com/hoodieallen/" },
    { name: "YouTube", handle: "@HoodieAllen", url: "https://www.youtube.com/@HoodieAllen" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the LIRR out to Hicksville. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "lighthouse", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "marquee", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "beach", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "parachute" },
    { scene: "corner", t: "WELCOME TO PLAINVIEW", x: "Old Country Rd and Manetto Hill Rd. This is Hoodie Allen's game.", sfx: "spray" }
  ],
  episodes: []
};

/* Songs format: 4 clean songs, 3 verse stops each, 99 questions (pools 8/8/8, 9/8/8, 9/9/8, 8/8/8). Lighter first, the breakout hit last. */
window.CFG.songs = [
  { title: "You Are Not A Robot", id: "kNkI6IEsssc", start: 20, cuts: [53.1, 70.4, 142.2], qs: [
    [
      ["They keep telling him to take the what route?", "Safe", "Long", "Fast"],
      ["You ain't seen the what like this before?", "Kid", "Crew", "City"],
      ["Late night, shooting for the what?", "Moon", "Stars", "Top"],
      ["He was born in what country?", "America", "Canada", "England"],
      ["Chevy and what?", "Ford", "Dodge", "Jeep"],
      ["They came up by their what?", "Bootstraps", "Shoelaces", "Sneakers"],
      ["Came up so quick you'd think we was a what?", "Newscast", "Movie", "Rumor"],
      ["A newscast or a news what?", "Flash", "Paper", "Reel"]
    ],
    [
      ["I can see through what?", "That", "Walls", "Lies"],
      ["People trying to hide what's on their what?", "Mind", "Phone", "Plate"],
      ["You be in the what, making noise?", "Background", "Spotlight", "Kitchen"],
      ["Making noise like a what?", "Muffler", "Trumpet", "Siren"],
      ["If it doesn't kill me, it makes it what?", "Tougher", "Better", "Easier"],
      ["That's the what that I pass on?", "Message", "Secret", "Lesson"],
      ["Who does he pass it on to?", "His brother", "His father", "His friends"],
      ["You're never really gonna make a what?", "Difference", "Million", "Comeback"]
    ],
    [
      ["You won't make a difference till you what?", "Suffer", "Try", "Win"],
      ["He's got some rocket what?", "Power", "Fuel", "Speed"],
      ["We going hard, y'all just stay what?", "Soft", "Home", "Quiet"],
      ["He's a firm believer that hard work does what?", "Pays off", "Wins", "Shows"],
      ["Freedom and what?", "Equality", "Justice", "Liberty"],
      ["They wanna break us what?", "Down", "Up", "Apart"],
      ["Lights on, he's ready to what?", "Pop out", "Go home", "Sit down"],
      ["Let's let the what drive now?", "Chorus", "Beat", "Bass"]
    ]
  ] },
  { title: "Are U Having Any Fun?", id: "Nffc4Fi4xwU", cuts: [66.7, 107.5, 179.5], qs: [
    [
      ["If you ain't having fun, quit your what?", "Job", "Band", "Team"],
      ["Tell your kids you went on what?", "Tour", "A cruise", "A diet"],
      ["Ice cream and some chocolate what?", "Fudge", "Cake", "Chips"],
      ["You show up at their what?", "Graduation", "Wedding", "Recital"],
      ["The station wagon is borrowed from your older what?", "Neighbors", "Cousins", "Brothers"],
      ["Living life without what?", "Responsibility", "Money", "Worries"],
      ["Change my name to what?", "Cavity", "Candy", "Sugar"],
      ["The way they grill him, he might become a what?", "Chef", "Butcher", "Waiter"],
      ["He's got the first two seasons of what show?", "Felicity", "Friends", "Seinfeld"]
    ],
    [
      ["Girl we can have fun, look to the what?", "Sun", "Stars", "Sky"],
      ["I can be the one you really what?", "Want", "Need", "Miss"],
      ["Could have had it all, but then you what?", "Lost it", "Left", "Quit"],
      ["First of the month comes, he ain't what?", "Excited", "Ready", "Worried"],
      ["Baby diapers, baby what?", "Jordans", "Bottles", "Blankets"],
      ["You know I'm what for it?", "Providing", "Saving", "Ready"],
      ["My life's a movie, I'mma be the one who's what?", "Casting it", "Directing it", "Filming it"],
      ["Fact is, he's really quite what?", "Compassionate", "Patient", "Honest"]
    ],
    [
      ["You the type to call yourself a what?", "Activist", "Poet", "Critic"],
      ["I'm the type to what it all?", "Overthink", "Forget", "Ignore"],
      ["I'm such an what?", "Analyst", "Artist", "Athlete"],
      ["Everyone agrees you're so what?", "Attractive", "Funny", "Smart"],
      ["Everyone agrees, it's what?", "Unanimous", "Obvious", "Official"],
      ["Take a what class?", "Yoga", "Dance", "Cooking"],
      ["And maybe buy you what?", "Brunch", "Dinner", "Flowers"],
      ["The truth is, it don't really what?", "Matter much", "Mean a thing", "Last long"]
    ]
  ] },
  { title: "Movie", id: "SjDfh2Xz9CA", start: 16, cuts: [76.6, 155.6, 229.5], qs: [
    [
      ["Who does he compare her to first?", "Julia Roberts", "Jennifer Lopez", "Meg Ryan"],
      ["This pretty lady is addicted to what?", "Drama", "Shopping", "Coffee"],
      ["He's trying to keep it what?", "Romantic", "Simple", "Quiet"],
      ["You don't need to be a what to figure it out?", "Detective", "Genius", "Lawyer"],
      ["What does she ride around in?", "A Caddy", "A Jeep", "A Benz"],
      ["What music does she love to listen to?", "Oldies", "Country", "Disco"],
      ["She wears her hair like who?", "Madonna", "Cher", "Rihanna"],
      ["She tells her dad he's a what?", "Doctor", "Pilot", "Teacher"],
      ["He plays one on TV like a young who?", "George Clooney", "Brad Pitt", "Tom Cruise"]
    ],
    [
      ["Hey girl, let's make a what?", "Movie", "Song", "Deal"],
      ["These people keep asking him what?", "Questions", "Favors", "Directions"],
      ["Blowing up like a movie by who?", "Michael Bay", "Steven Spielberg", "Spike Lee"],
      ["He's got a beautiful what?", "Mind", "Smile", "Car"],
      ["Win some, lose some, but all he's doing is what?", "Winning", "Working", "Chilling"],
      ["My life like Benjamin who?", "Button", "Franklin", "Moore"],
      ["It all started back in what year?", "2000", "1995", "2010"],
      ["He started with just a mic and a what?", "Computer", "Notebook", "Guitar"],
      ["He went from Home Alone to who?", "Richie Rich", "Rocky", "Scrooge"]
    ],
    [
      ["You can be my leading what?", "Lady", "Star", "Role"],
      ["Grab your camera, don't be what?", "Shy", "Late", "Scared"],
      ["Things ain't always black and what?", "White", "Blue", "Gray"],
      ["Is it your eyes, is it your what?", "Hair", "Smile", "Style"],
      ["Is it your look, is it your what?", "Stare", "Walk", "Voice"],
      ["I swear the camera what?", "Loves you", "Hates you", "Finds you"],
      ["This is the director's what?", "Cut", "Chair", "Call"],
      ["Now let them what play?", "Horns", "Drums", "Strings"]
    ]
  ] },
  { title: "No Interruption", id: "_t431MAUQlQ", start: 9, cuts: [58.9, 109.7, 207.9], qs: [
    [
      ["Never meet a girl on what site?", "Craigslist", "Facebook", "eBay"],
      ["Never spend your money on the what?", "Necklace", "Car", "Sneakers"],
      ["Three square what?", "Meals", "Miles", "Friends"],
      ["You gotta have what?", "Breakfast", "Dinner", "Dessert"],
      ["He's on his Will Smith, which movie?", "Enemy of the State", "Men in Black", "Bad Boys"],
      ["Keep my friends what?", "Close", "Rich", "Happy"],
      ["They so what?", "Jealous", "Quiet", "Lucky"],
      ["Now they looking through my what?", "Window", "Phone", "Mail"]
    ],
    [
      ["Point blank, no what?", "Discussion", "Problem", "Excuses"],
      ["Closed what?", "Mouth", "Door", "Deal"],
      ["I'll give it to you, no what?", "Interruption", "Delay", "Limit"],
      ["Tell me one time that you what?", "Want me", "Need me", "Miss me"],
      ["Married to the game, but he'd rather be the what?", "Best man", "Groom", "Boss"],
      ["While you're shopping at a what?", "Payless", "Target", "Mall"],
      ["Do it on my first what?", "Take", "Try", "Day"],
      ["Skipping all the what?", "Bailouts", "Meetings", "Lines"]
    ],
    [
      ["Which fighter does he name?", "Anderson Silva", "Conor McGregor", "Jon Jones"],
      ["Hidden with the high what?", "Kicks", "Hopes", "Fives"],
      ["Killing the game, who's the what?", "Culprit", "Champion", "Winner"],
      ["Now I got a bunch of new what?", "Friends", "Cars", "Fans"],
      ["And they all what?", "Rich", "Famous", "Fake"],
      ["I know it's hard to give you what?", "Everything", "Attention", "Time"],
      ["It's hard to be the type of what you wanna be?", "Dude", "Star", "Friend"],
      ["Where does the song end up?", "On the couch", "In the car", "On the roof"]
    ]
  ] }
];
