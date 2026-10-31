/* Homeboy Sandman (Angel Del Villar II): raised in Elmhurst, Queens. Stones Throw, Mello Music Group, his own Dirty Looks label.
   Lice with Aesop Rock. Albums: Actual Factual Pterodactyl (2008), The Good Sun (2010), First of a Living Breed (2012), Hallways,
   Kindness for Weakness, Veins, Dusty, Don't Feed the Monster, Still Champion (2022), Rich; EP Homeboy Sandman Is the Sandman (w/ Blu). */
window.CFG = {
  name: "Homeboy Sandman", nameUpper: "HOMEBOY SANDMAN", short: "SANDMN",
  hood: "Elmhurst", hoodUpper: "ELMHURST", boro: "Queens",
  saveKey: "ogfan99homeboysandman1",
  /* everybody starts a rookie ("the rookies and veterans" in Go Hard), then climbs his album titles:
     The Good Sun, First of a Living Breed, Actual Factual (Pterodactyl), Go Hard, Still Champion, and ends up The Sandman */
  startRank: "Rookie",
  ranks: ["Good Sun", "Living Breed", "Actual Factual", "Go Hard", "Still Champion"],
  topRank: "The Sandman",
  point: "Grain", points: "Grains",
  rankRewards: {
    "Good Sun": { bongs: 5, line: "The good sun came up on you. Keep it shining." },
    "Living Breed": { bongs: 10, line: "First of a living breed. You're one of one." },
    "Actual Factual": { bongs: 15, line: "Actual factual. You know your facts." },
    "Go Hard": { bongs: 20, line: "You go hard. Harder still." },
    "Still Champion": { bongs: 25, line: "You run all of Elmhurst." }
  },
  trophyArt: [
    /* Rookie: a little pile of sand with a toy shovel */
    '<path d="M14 78q26-30 52 0z" fill="#e6c98a" stroke="#a8874a" stroke-width="1.2"/>' +
    '<circle cx="30" cy="66" r="1.2" fill="#a8874a"/><circle cx="44" cy="70" r="1.2" fill="#a8874a"/><circle cx="38" cy="60" r="1.2" fill="#a8874a"/>' +
    '<path d="M50 30l4 2-8 28-4-1z" fill="#d23b2a"/><path d="M40 56l8 2-2 12q-6 1-9-4z" fill="#ffd34d" stroke="#7a5512" stroke-width="1"/>',
    /* Good Sun: a golden sun with turning rays */
    (function () { let s = ""; for (let a = 0; a < 360; a += 30) { const r = a * Math.PI / 180; s += '<path d="M' + (40 + 19 * Math.cos(r)).toFixed(1) + ' ' + (42 + 19 * Math.sin(r)).toFixed(1) + 'L' + (40 + 30 * Math.cos(r)).toFixed(1) + ' ' + (42 + 30 * Math.sin(r)).toFixed(1) + '" stroke="#ffb02e" stroke-width="4" stroke-linecap="round"/>'; } return s; })() +
    '<circle cx="40" cy="42" r="16" fill="#ffd34d" stroke="#e08a1a" stroke-width="2"/><path d="M33 46q7 6 14 0" stroke="#7a4a12" stroke-width="2" fill="none" stroke-linecap="round"/>' +
    '<circle cx="34" cy="38" r="2" fill="#7a4a12"/><circle cx="46" cy="38" r="2" fill="#7a4a12"/>',
    /* Living Breed: a fresh green sprout in a clay pot */
    '<path d="M26 56h28l-4 22H30z" fill="#c4562a" stroke="#7d3122" stroke-width="1.2"/><rect x="24" y="52" width="32" height="6" rx="1" fill="#d9822b"/>' +
    '<path d="M40 52V26" stroke="#3f9a4a" stroke-width="3"/>' +
    '<path d="M40 36q-16-2-18-16q14 0 18 16z" fill="#7cf29a" stroke="#2f7d4f" stroke-width="1.2"/>' +
    '<path d="M40 30q14-4 18-18q-14 0-18 18z" fill="#7cf29a" stroke="#2f7d4f" stroke-width="1.2"/>',
    /* Actual Factual: a little pterodactyl gliding */
    '<path d="M6 44q18-14 30-2l4-6 4 6q12-12 30 2q-16-2-26 8l-2 10h-12l-2-10q-10-10-26-8z" fill="#7fb7a0" stroke="#2f5f45" stroke-width="1.5"/>' +
    '<path d="M38 36l-10-12 14 8z" fill="#7fb7a0" stroke="#2f5f45" stroke-width="1.2"/><path d="M42 36l18-6-16 8z" fill="#e8c43a" stroke="#7a5512" stroke-width="1"/>' +
    '<circle cx="42" cy="34" r="1.6" fill="#111"/><path d="M36 62l-4 12M44 62l4 12" stroke="#2f5f45" stroke-width="2"/>',
    /* Go Hard: a red boxing glove (his pops taught him how to jab) */
    '<path d="M24 50q-2-26 18-28q20 0 18 20q0 16-10 20H30q-6-2-6-12z" fill="#d23b2a" stroke="#7a1d14" stroke-width="1.5"/>' +
    '<path d="M24 50q-8-4-6-12q4-6 10-2" fill="#d23b2a" stroke="#7a1d14" stroke-width="1.5"/>' +
    '<rect x="28" y="62" width="24" height="14" rx="2" fill="#f4f1e8" stroke="#7a1d14" stroke-width="1.2"/><path d="M32 66h16" stroke="#d23b2a" stroke-width="2"/>' +
    '<path d="M34 30q8-4 16 2" stroke="#ff8a7a" stroke-width="2" fill="none"/>',
    /* Still Champion: a championship belt with a gold plate */
    '<rect x="4" y="40" width="72" height="18" rx="4" fill="#2b2b2b" stroke="#111" stroke-width="1"/>' +
    '<path d="M24 34h32l6 15-6 15H24l-6-15z" fill="#ffd34d" stroke="#8a6b2a" stroke-width="1.5"/>' +
    '<circle cx="40" cy="49" r="9" fill="#e8b93a" stroke="#8a6b2a" stroke-width="1.2"/><path d="M40 43l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" fill="#7cf29a"/>' +
    '<circle cx="12" cy="49" r="3" fill="#c9a24a"/><circle cx="68" cy="49" r="3" fill="#c9a24a"/>',
    /* The Sandman: a gold hourglass with sand pouring, a crescent moon behind it */
    '<path d="M54 14a16 16 0 1 0 12 26a13 13 0 1 1-12-26z" fill="#fff3b8" opacity=".9"/>' +
    '<rect x="22" y="14" width="36" height="6" rx="2" fill="#c9a24a" stroke="#8a6b2a" stroke-width="1"/><rect x="22" y="72" width="36" height="6" rx="2" fill="#c9a24a" stroke="#8a6b2a" stroke-width="1"/>' +
    '<path d="M26 20q0 18 14 26q-14 8-14 26h28q0-18-14-26q14-8 14-26z" fill="#e8f4ff" fill-opacity=".5" stroke="#8fb3c8" stroke-width="1.5"/>' +
    '<path d="M30 26q10 12 20 0z" fill="#e6c98a"/><path d="M40 44v20" stroke="#e6c98a" stroke-width="1.5"/><path d="M30 72q10-12 20 0z" fill="#e6c98a"/>' +
    '<path d="M22 20v52M58 20v52" stroke="#c9a24a" stroke-width="2.5"/>'
  ],
  clubTitle: "The Sandbox", clubTab: "SAND",
  tags: ["LICE", "GO HARD", "SANDMAN"],
  c1: "#7cf29a", c2: "#ffd34d", c3: "#ff8a5b", bg: "#0f1a14",
  /* Elmhurst skyline: the gas tanks by the LIE, Newtown High School's tower and cupola, the St. James steeple */
  headerSvg: (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    s += '<rect x="20" y="22" width="70" height="34"/><rect x="100" y="30" width="58" height="26"/>';
    s += '<path d="M20 22h70M100 30h58" stroke="#f7f3ea" stroke-width="3"/>';
    for (let x = 20; x <= 90; x += 14) s += '<rect x="' + x + '" y="16" width="2" height="40"/>';
    for (let x = 100; x <= 158; x += 14) s += '<rect x="' + x + '" y="24" width="2" height="32"/>';
    s += '<rect x="180" y="38" width="120" height="18"/><rect x="226" y="14" width="26" height="42"/><path d="M224 14q15-16 30 0z"/><rect x="238" y="0" width="2" height="6"/>';
    s += '<path d="M180 38v-6h6v-4h8v4h6v6zM280 38v-6h6v-4h8v4h6v6z"/>';
    s += '<rect x="330" y="38" width="50" height="18"/><path d="M326 38l29-12 29 12z"/><rect x="348" y="16" width="14" height="14"/><path d="M346 16l9-14 9 14z"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Website", handle: "homeboysandman.com", url: "https://homeboysandman.com/" },
    { name: "Bandcamp", handle: "homeboysandman", url: "https://homeboysandman.bandcamp.com/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the M or R to Elmhurst Av, under Broadway. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "newtown", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "stjames", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "tanks", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO ELMHURST", x: "Broadway and Elmhurst Av, right by the subway stairs. This is Homeboy Sandman's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Live & Breathe", id: "3FKdalwC4NQ", start: 18, cuts: [48.5, 91.4, 135], qs: [
      [
        ["Who gets a big up?", "The misfits", "The rookies", "The champs"],
        ["Fake rappers all sound the what to him?", "Same", "Loud", "Cold"],
        ["It ain't a statement or a what y'all can say to him?", "Phrase", "Word", "Song"],
        ["Short as the distance between what?", "A and B", "X and Y", "Here and there"],
        ["He keeps his math shaped like a what?", "A T", "A square", "A circle"],
        ["Make me laugh and make like a what?", "Tree", "Bird", "Breeze"]
      ],
      [
        ["If you're sucking teeth, take a second to what?", "Reconsider", "Apologize", "Breathe"],
        ["You're sinking like a what?", "Submarine", "Rock", "Anchor"],
        ["There are no losers in his what?", "Lucid dream", "Crew", "Classroom"],
        ["What does he thank God for?", "PBS", "Pizza", "Payday"],
        ["The tool was more amusing than what?", "The human beings", "The cartoons", "The news"],
        ["Which gear is he stuck in?", "Fifth", "First", "Reverse"],
        ["Front seat, yummy what?", "Treat", "Cake", "Snack"]
      ],
      [
        ["He might have to hit you with the what?", "High beams", "Horn", "Brakes"],
        ["Hawaiian leis and what kind of trees?", "Papaya", "Palm", "Mango"],
        ["Him and science are like what?", "Siamese", "Brothers", "Magnets"],
        ["He takes a second to change the what?", "Frying grease", "Channel", "Tires"],
        ["Without your love, what could he do?", "Achieve", "Believe", "Receive"],
        ["The reminder puts his mind at what?", "Ease", "Rest", "War"],
        ["That's how he sleeps and what?", "Eats", "Dreams", "Rests"]
      ]
    ] },
    { title: "The Carpenter", id: "pP7VeA_r2Jg", cuts: [51.3, 93.8, 148], qs: [
      [
        ["The sun's going to rise, so open your what?", "Eyes", "Door", "Mind"],
        ["What does he say he should get?", "A tattoo", "A trophy", "A medal"],
        ["Where will he be?", "In the lab", "On the block", "At the park"],
        ["He's got a beard like who?", "Moses", "Santa", "Lincoln"],
        ["Wake up and smell the what?", "Vultures", "Coffee", "Roses"],
        ["Make a chess move, don't be getting what?", "Fretful", "Careless", "Tired"],
        ["He feels younger because he's what?", "Sober", "Rested", "Rich"]
      ],
      [
        ["He calls shotgun for the what?", "Legroom", "Radio", "Window"],
        ["As soon as he checks one, he checks what?", "Two", "Ten", "Three"],
        ["When he enters, they recognize the what?", "Empire", "Champion", "Legend"],
        ["People see the Homeboy and say what?", "Oh snap", "Oh wow", "Oh yeah"],
        ["What movie are they chilling watching?", "Old Boy", "Rocky", "Big"],
        ["Reading Dostoyevsky don't mean he read who?", "Tolstoy", "Shakespeare", "Twain"],
        ["Now he'mma be like yo what?", "Soy", "Hola", "Amigo"]
      ],
      [
        ["Never going to slow, never going to what?", "Stall", "Fall", "Stop"],
        ["His level is what?", "Elite", "Average", "Rookie"],
        ["He's in another what?", "League", "Lane", "World"],
        ["He's done with wearing what?", "Ties", "Suits", "Hats"],
        ["Running out of time, but not out of what?", "Breath", "Rhymes", "Money"],
        ["Make sure to stay what?", "Abreast", "Awake", "Humble"]
      ]
    ] },
    { title: "Conjugal Visit to the Prison of the Mind", id: "RYcaen6QwnE", cuts: [46.9, 93.3, 141.9], qs: [
      [
        ["Sipping wild water, summer what?", "Breeze", "Rain", "Night"],
        ["It couldn't be what season?", "Autumn", "Winter", "Spring"],
        ["He didn't mean to spend so much time writing and what?", "Recording", "Reading", "Resting"],
        ["These are all people he what?", "Knows", "Loves", "Met"],
        ["Two days of the week, basically playing in the what?", "Street", "Park", "Rain"],
        ["His time is what-proof?", "Waste-proof", "Water-proof", "Fool-proof"]
      ],
      [
        ["He's at the right place at the right what?", "Time", "Spot", "Day"],
        ["Night ride like he's who?", "Mike Knight", "Mike Tyson", "Mike Jones"],
        ["He's warmed up like a what with a wand?", "Wizard", "Boxer", "Conductor"],
        ["Reeling in the fish called what?", "Wanda", "Nemo", "Dory"],
        ["Home girl keeps calling. He asks if she's got a what?", "Charger", "Car", "Minute"],
        ["A little bit of lemon what?", "Lime", "Pie", "Drop"],
        ["Conjugal visit to the prison of the what?", "Mind", "Heart", "Soul"]
      ],
      [
        ["Fresh shave, fresh what?", "Face", "Fade", "Shoes"],
        ["He's ready for a front what?", "Page", "Row", "Seat"],
        ["Everybody been what?", "Paid", "Fed", "Called"],
        ["What does he not take?", "Checks", "Cash", "Calls"],
        ["He doesn't really struggle with what?", "Patience", "Rhymes", "Mornings"],
        ["Who taught him how to jab?", "His father", "His uncle", "His coach"],
        ["He ain't trying to brag. Then he says what?", "Actually I am", "Never mind", "Just kidding"]
      ]
    ] },
    { title: "Go Hard (prod. Aesop Rock)", id: "jCY2w8tiFJM", cuts: [59.8, 124.5, 190], qs: [
      [
        ["Oh snap, this beat is too what?", "Hard", "Hot", "Loud"],
        ["He takes shots and what?", "Misses", "Scores", "Waits"],
        ["He's bound to fall, but he's bound to what?", "Rise", "Win", "Fly"],
        ["He's like Samson in what?", "Reverse", "Rome", "Real life"],
        ["Looking for a fad? You got the wrong what?", "Lad", "Block", "Song"],
        ["Looking for the same? You caught the wrong what?", "Train", "Bus", "Cab"],
        ["He'd rather live a dream than do what?", "Wake up", "Sleep in", "Give up"]
      ],
      [
        ["He'd much prefer to be where?", "Outside", "In the building", "At home"],
        ["His inquiry is for the rookies and the what?", "Veterans", "Legends", "Coaches"],
        ["He's not scared to cry, and not scared of what?", "Heights", "Spiders", "Crowds"],
        ["He couldn't bear living with a what in mind?", "Bear", "Plan", "Doubt"],
        ["His brain is on, rain or what?", "Shine", "Snow", "Sleet"],
        ["He will not be what?", "Undermined", "Unkind", "Outlined"],
        ["Write this down, then what?", "Underline", "Erase it", "Sign it"]
      ],
      [
        ["One more thing: some more what theory?", "String", "Big bang", "Game"],
        ["Freshly matured, fresh what?", "Chimichurri", "Salsa", "Guacamole"],
        ["Nothing is drearier than the universe of which century?", "The 21st", "The 20th", "The 19th"],
        ["He does not worry. It's not at all what?", "Necessary", "Possible", "Easy"],
        ["Stop and smell the what?", "Daffodils", "Roses", "Tulips"],
        ["Three's too much. On the count of what?", "One", "Two", "Ten"]
      ]
    ] },
    { title: "Not Really", id: "yhe-eYHQgXA", start: 13, cuts: [88.4, 181.8, 258.8], qs: [
      [
        ["What do people ask him?", "If his life changed", "Where he's from", "What he eats"],
        ["What does he say back?", "Not really", "Of course", "A little"],
        ["He ran alongside a river where?", "Eastern Europe", "South America", "Upstate"],
        ["He used to run around the lake at which park?", "Flushing", "Central", "Prospect"],
        ["Same scenario, same what?", "Cardio", "Studio", "Radio"],
        ["Before first class, he was chilling in what?", "Economy", "The back seat", "A tour van"],
        ["It was hard to keep a low profile in what?", "Homeroom", "Gym class", "The lunchroom"]
      ],
      [
        ["What does he never worry about?", "Money", "Fame", "Time"],
        ["He still don't let nothing go to what?", "Waste", "Sleep", "His head"],
        ["There's a lot more left over to what?", "Give away", "Save up", "Eat later"],
        ["On stage, where he used to be in the what?", "Front row", "Back row", "Balcony"],
        ["How big a distance is that?", "10 feet", "50 feet", "100 feet"],
        ["Who is he still the biggest fan of?", "Black Thought", "Aesop Rock", "Nas"]
      ],
      [
        ["Folks make a lot of what?", "Fuss", "Noise", "Money"],
        ["He's got a lot of what?", "Buzz", "Fans", "Bars"],
        ["He's always kept it what?", "Real", "Quiet", "Simple"],
        ["Same pants, different what?", "Crease", "Belt", "Color"],
        ["Same pan, different what?", "Grease", "Stove", "Meal"],
        ["Same sand, different what?", "Beach", "Shore", "Desert"]
      ]
    ] }
  ]
};
