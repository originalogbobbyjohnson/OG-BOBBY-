/* OG FAN 99 – AZ (East New York, Brooklyn) — artist settings */
window.CFG = {
  name: "AZ", nameUpper: "AZ", short: "AZ",
  hood: "East New York", hoodUpper: "EAST NEW YORK", boro: "Brooklyn",
  saveKey: "ogfan99az1",
  /* the climb runs through his own album titles: start as Pieces of a Man, end as the Visualiza */
  startRank: "Pieces of a Man", ranks: ["Rather Unique", "The Format", "Aziatic", "Undeniable", "Legendary"], topRank: "The Visualiza",
  /* doe = money, straight from Doe or Die */
  point: "Doe", points: "Doe",
  rankRewards: {
    "Rather Unique": { bongs: 5, line: "One of one, straight out of East New York." },
    "The Format": { bongs: 10, line: "You know the format now. Smooth and steady." },
    "Aziatic": { bongs: 15, line: "Aziatic flow. Every word in its place." },
    "Undeniable": { bongs: 20, line: "Nobody can deny it. You're the real thing." },
    "Legendary": { bongs: 25, line: "You run all of East New York." }
  },
  trophyArt: [
    /* Pieces of a Man: three loose puzzle pieces */
    '<path d="M14 40h14a5 5 0 1 1 10 0h10v14a5 5 0 1 0 0 10v12H14z" fill="#b98cff" stroke="#4b2d80" stroke-width="2" transform="rotate(-8 30 58)"/>' +
    '<path d="M46 24h20v12a4 4 0 1 1 0 8v12H46V44a4 4 0 1 0 0-8z" fill="#ffd34d" stroke="#7a5512" stroke-width="2" transform="rotate(10 56 40)"/>' +
    '<path d="M50 62h18v16H50z" fill="#5ee0c8" stroke="#1b6b5d" stroke-width="2" transform="rotate(-14 59 70)"/>',
    /* Rather Unique: one cut diamond */
    '<path d="M18 36l10-14h24l10 14-22 40z" fill="#bfeaff" stroke="#2b6f9e" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M18 36h44M28 22l12 14 12-14M40 36v40M28 36l12 40 12-40" fill="none" stroke="#2b6f9e" stroke-width="1.2"/>' +
    '<path d="M30 26l6 6" stroke="#fff" stroke-width="2" stroke-linecap="round"/>',
    /* The Format: a cassette tape */
    '<rect x="10" y="34" width="60" height="38" rx="4" fill="#2a2333" stroke="#b98cff" stroke-width="2"/><rect x="18" y="40" width="44" height="12" rx="2" fill="#ffd34d"/>' +
    '<text x="40" y="49.5" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="6.5" fill="#2a2333">THE FORMAT</text>' +
    '<circle cx="28" cy="61" r="5" fill="#f4efe6"/><circle cx="52" cy="61" r="5" fill="#f4efe6"/><rect x="33" y="58" width="14" height="6" fill="#5a4a33"/><path d="M22 72l4-6h28l4 6" fill="#3a3145"/>',
    /* Aziatic: a gold sun medallion with AZ in the middle */
    '<g stroke="#ffd34d" stroke-width="3" stroke-linecap="round">' + [0, 45, 90, 135, 180, 225, 270, 315].map(a => '<path d="M40 50 l0 -30" transform="rotate(' + a + ' 40 50)"/>').join("") + '</g>' +
    '<circle cx="40" cy="50" r="18" fill="#e8b84a" stroke="#7a5512" stroke-width="2"/><text x="40" y="57" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="18" fill="#3a1f5c">AZ</text>',
    /* Undeniable: a gold studio mic */
    '<rect x="37" y="48" width="6" height="26" fill="#8d939b"/><rect x="26" y="72" width="28" height="5" rx="2" fill="#5b6168"/>' +
    '<rect x="28" y="14" width="24" height="38" rx="12" fill="#ffd34d" stroke="#7a5512" stroke-width="2"/><path d="M30 24h20M30 31h20M30 38h20" stroke="#7a5512" stroke-width="1.2"/>' +
    '<path d="M22 34v4a18 18 0 0 0 36 0v-4" fill="none" stroke="#c9ced6" stroke-width="3"/>',
    /* Legendary: a platinum record in a frame */
    '<rect x="10" y="18" width="60" height="60" rx="3" fill="#2a1c0c" stroke="#ffd34d" stroke-width="3"/>' +
    '<circle cx="40" cy="44" r="20" fill="#e4e8ee" stroke="#9aa3ad" stroke-width="1.5"/><circle cx="40" cy="44" r="14" fill="none" stroke="#c4cad2" stroke-width="1"/><circle cx="40" cy="44" r="6" fill="#b98cff"/>' +
    '<rect x="20" y="68" width="40" height="6" fill="#ffd34d"/>',
    /* The Visualiza: a gold eye with rays, the one who sees it all */
    '<g stroke="#5ee0c8" stroke-width="2.5" stroke-linecap="round"><path d="M40 12v10M18 20l6 8M62 20l-6 8M8 40h8M64 40h8"/></g>' +
    '<path d="M8 50q32-36 64 0q-32 36-64 0z" fill="#f4efe6" stroke="#7a5512" stroke-width="2.5"/>' +
    '<circle cx="40" cy="50" r="13" fill="#b98cff" stroke="#3a1f5c" stroke-width="2"/><circle cx="40" cy="50" r="6" fill="#120a1f"/><circle cx="44" cy="46" r="2.5" fill="#fff"/>'
  ],
  clubTitle: "The Firm", clubTab: "FIRM",
  tags: ["THE FIRM", "QUIET MONEY", "SOSA"],
  c1: "#ffd34d", c2: "#b98cff", c3: "#5ee0c8", bg: "#120a1f",
  /* the J/Z el over Fulton St: the train up top, columns down to the shops */
  headerSvg: '<g fill="#f7f3ea">' +
    '<rect x="0" y="22" width="400" height="6"/>' +
    [10, 80, 150, 220, 290, 360].map(x => '<rect x="' + x + '" y="28" width="5" height="36"/>').join("") +
    '<rect x="60" y="6" width="270" height="15" rx="3"/>' +
    [70, 112, 154, 196, 238, 280].map(x => '<rect x="' + x + '" y="9" width="22" height="6" fill="#120a1f"/>').join("") +
    [[20, 44], [96, 40], [170, 46], [236, 38], [306, 44]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="50" height="' + (64 - y) + '"/>').join("") +
    '</g>',
  socials: [
    { name: "YouTube", handle: "@azquietmoney599", url: "https://www.youtube.com/@azquietmoney599" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the C to Van Siclen Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "el", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "park", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "studio", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO EAST NEW YORK", x: "Pitkin Avenue and Van Siclen Avenue, right over the C train. This is AZ's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "The Wheel", id: "68Ixf3xnrvU", cuts: [77.6, 123.5, 190], qs: [
      [["\"We're all just folks in a big old...\"", "Wheel", "City", "World"],
       ["Trust is what?", "Costly", "Rare", "Free"],
       ["How does AZ describe his timepiece?", "Frosty", "Golden", "Borrowed"],
       ["How many chances do you get?", "One", "Two", "Three"],
       ["What is AZ processing?", "The accolades", "The numbers", "The news"],
       ["What is he calculating?", "The hate", "The miles", "The odds"],
       ["His features are as fresh as his what?", "Sneakers", "Haircut", "Car"]],
      [["\"Been influenced, been a...\"", "Student", "Teacher", "Fan"],
       ["What did AZ refrain from?", "The gossip", "The parties", "The spotlight"],
       ["\"My kind is...\"", "Exquisite", "Royal", "Different"],
       ["Respect first, then we focus on what?", "Net worth", "The music", "The fans"],
       ["That's how he works, from the what?", "Dirt", "Top", "Heart"],
       ["What can't be stopped?", "The movement", "The clock", "The crowd"],
       ["Frames over the what?", "Optics", "Window", "Picture"]],
      [["AZ says he has clear what?", "Vision", "Skies", "Water"],
       ["He moves like which NBA star on the court?", "Durant", "LeBron", "Curry"],
       ["Then he calls himself a young who?", "Kobe", "Shaq", "Magic"],
       ["\"Gotta ___ them\"", "School", "Beat", "Call"],
       ["Too many of what to fool?", "Fraudulents", "Fans", "Critics"],
       ["Which cars can you hop in?", "Ferraris and Audis", "Jeeps and Jags", "Bentleys and Benzes"],
       ["What line closes the song out?", "The saga continues", "The end", "Peace out"]]
    ] },
    { title: "Just 4 U", id: "1ZRHYdnhdxs", cuts: [57.6, 114.1, 162.5], qs: [
      [["AZ went from crabs to an ocean of what?", "Sharks", "Fish", "Boats"],
       ["His flow could glow in the what?", "Dark", "Sun", "Club"],
       ["What kind of weather does he mention?", "Goose weather", "Rainy weather", "Summer weather"],
       ["AZ calls himself the truth what?", "Bearer", "Teller", "Seeker"],
       ["His catalog is as hard as which Shakespeare play?", "Hamlet", "Macbeth", "Othello"],
       ["AZ says he was too smart to what?", "Joke", "Lose", "Quit"],
       ["\"I'm a...\"", "Pro", "Rookie", "Fan"]],
      [["\"Still a ___ for you haters\"", "Don", "King", "Star"],
       ["For the haters he's just what?", "Reconfirming", "Retiring", "Complaining"],
       ["What kind of voltage?", "High voltage", "Low voltage", "No voltage"],
       ["He got embraced by all the what?", "Coaches", "Fans", "Teachers"],
       ["\"Mountain...\"", "Views", "Tops", "Roads"],
       ["Only a few can lounge in his what?", "Shoes", "House", "Car"],
       ["The hook asks: who's what?", "Official", "Next", "The king"]],
      [["AZ says he doesn't ask for what?", "Permission", "Help", "Directions"],
       ["Either you eating good or you lack what?", "Nutrition", "Money", "Friends"],
       ["From the hood, but he had what?", "Ambition", "A car", "A crew"],
       ["How are his bills?", "Crispy", "Late", "Folded"],
       ["AZ calls himself an over-what?", "Achiever", "Thinker", "Sleeper"],
       ["The home of the what?", "Believers", "Dreamers", "Brave"],
       ["He shows the new school it's not a what?", "Race", "Game", "Joke"]]
    ] },
    { title: "GOAT", id: "mm5CEzYt2UQ", cuts: [50.9, 66, 82.9], qs: [
      [["The intro says it's getting what out here?", "Spooky", "Cold", "Quiet"],
       ["\"Fortune and...\"", "Fame", "Glory", "Gold"],
       ["What bike does he mention in the rain?", "Ducati", "Harley", "Vespa"],
       ["Which reggae legend gets a mention?", "Bob Marley", "Peter Tosh", "Jimmy Cliff"],
       ["Muscles with the what?", "Brains", "Heart", "Money"],
       ["You hustle through the what?", "Pain", "Night", "Crowd"]],
      [["In the 80s AZ was crazy with the what?", "Bars", "Cars", "Jokes"],
       ["The bars and the what?", "Stars", "Guitars", "Cars"],
       ["With open what?", "Arms", "Doors", "Eyes"],
       ["Big houses, all the money and the what?", "Cars", "Jewels", "Boats"],
       ["It is what it is, who what?", "We are", "They are", "You are"],
       ["Tell the kids what?", "Praise the Lord", "Stay in school", "Go home"]],
      [["Built from the hood, out the what?", "Mud", "Dirt", "Rain"],
       ["Built from where, out the mud?", "The hood", "The top", "The park"],
       ["Which word comes before \"I'm on it\"?", "Beloved", "Brooklyn", "Brother"],
       ["AZ says he can't be what?", "Cornered", "Copied", "Touched"],
       ["What kind of dog does he mention?", "Sheep dog", "Bulldog", "Poodle"],
       ["\"Everything else...\"", "Above", "Below", "Behind"]]
    ] },
    { title: "Check Me Out", id: "pjdVvc9kIkY", cuts: [71.1, 110.7, 161.5], qs: [
      [["Who does the song call out to?", "Ladies and gentlemen", "Boys and girls", "The DJ"],
       ["What kind of taste does AZ have?", "Phenomenal", "Expensive", "Simple"],
       ["The Honorable great young what?", "Jedi", "King", "Legend"],
       ["\"Show and ___ how I move\"", "Prove", "Tell", "Learn"],
       ["You either get it or you're what?", "Disconnected", "Forgotten", "Confused"],
       ["This is bigger than the what?", "Record", "City", "Money"],
       ["He's trying to make the message what?", "Electric", "Simple", "Louder"]],
      [["\"It's logic, the...\"", "Math", "Proof", "Rule"],
       ["AZ is a class of a what?", "Scientist", "Teacher", "Pilot"],
       ["His prior past is a what?", "Jinx", "Gift", "Dream"],
       ["\"Let the ___ sink\"", "Factual", "Feeling", "Music"],
       ["How is the story told?", "Biographical", "Backwards", "In a dream"],
       ["The hook: ladies and what?", "Gentlemen", "Kids", "Fellas"]],
      [["Who does AZ say he talks to?", "The children", "The press", "His lawyer"],
       ["He's chilling, can never get what?", "Caught", "Tired", "Old"],
       ["How does AZ move?", "Strategic", "Reckless", "Lazy"],
       ["Live from the top of where?", "New York", "The charts", "The world"],
       ["Locking in, he's alone only in his what?", "Zone", "Room", "Car"],
       ["Which hook line comes back after the verse?", "Ladies and gentlemen", "Boys and girls", "Here we go"]]
    ] },
    { title: "Sugar Hill", locked: true, cuts: [], qs: [] }
  ]
};
