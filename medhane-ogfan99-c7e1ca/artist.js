window.CFG = {
  name: "Medhane", nameUpper: "MEDHANE", short: "MEDHANE", hood: "Flatbush", hoodUpper: "FLATBUSH", boro: "Brooklyn",
  saveKey: "ogfan99medhane1",
  startRank: "Baby Steps", ranks: ["Own Pace", "Steady", "Full Circle", "Cold Water", "Do The Math"], topRank: "Amethyst",
  point: "Blessing", points: "Blessings",
  rankRewards: {
    "Own Pace": { bongs: 5, line: "Moving at your own pace now." },
    "Steady": { bongs: 10, line: "Palm steady, eyes open." },
    "Full Circle": { bongs: 15, line: "You came back around, wiser." },
    "Cold Water": { bongs: 20, line: "Deep water, and you're surfing it." },
    "Do The Math": { bongs: 25, line: "You run all of Flatbush." }
  },
  trophyArt: [
    /* Baby Steps: two little footprints */
    '<ellipse cx="30" cy="58" rx="8" ry="13" fill="#9fd8ff" stroke="#2c5a7a" stroke-width="2"/><circle cx="25" cy="41" r="2.6" fill="#9fd8ff"/><circle cx="30" cy="40" r="2.6" fill="#9fd8ff"/><circle cx="35" cy="41" r="2.6" fill="#9fd8ff"/>' +
    '<ellipse cx="50" cy="40" rx="8" ry="13" fill="#9fd8ff" stroke="#2c5a7a" stroke-width="2"/><circle cx="45" cy="23" r="2.6" fill="#9fd8ff"/><circle cx="50" cy="22" r="2.6" fill="#9fd8ff"/><circle cx="55" cy="23" r="2.6" fill="#9fd8ff"/>',
    /* Own Pace: a stopwatch */
    '<rect x="36" y="14" width="8" height="8" rx="2" fill="#c9ced6"/><circle cx="40" cy="48" r="24" fill="#f4f1ea" stroke="#7cf29a" stroke-width="5"/>' +
    '<path d="M40 30v4M40 62v4M22 48h4M54 48h4" stroke="#2a2d33" stroke-width="2"/><path d="M40 48l10-10" stroke="#2a2d33" stroke-width="3" stroke-linecap="round"/><circle cx="40" cy="48" r="3" fill="#b48cff"/>',
    /* Steady: a metronome */
    '<path d="M24 76l10-58h12l10 58z" fill="#6a3a2a" stroke="#2a170f" stroke-width="2"/><rect x="28" y="60" width="24" height="12" fill="#3b2418"/>' +
    '<path d="M40 64l-10-40" stroke="#c9ced6" stroke-width="3" stroke-linecap="round"/><rect x="31" y="34" width="8" height="6" fill="#7cf29a" transform="rotate(-14 35 37)"/>',
    /* Full Circle: a ring with an arrow coming round */
    '<path d="M60 44a20 20 0 1 1-6-14" fill="none" stroke="#b48cff" stroke-width="7" stroke-linecap="round"/><path d="M48 22l10 8-12 4z" fill="#b48cff"/><circle cx="40" cy="44" r="6" fill="#9fd8ff"/>',
    /* Cold Water: a big water drop with ice cube shine */
    '<path d="M40 12q22 30 22 44a22 22 0 0 1-44 0q0-14 22-44z" fill="#9fd8ff" stroke="#2c5a7a" stroke-width="2"/><path d="M30 50q0 10 8 14" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<rect x="40" y="46" width="12" height="12" rx="2" fill="#e8f7ff" opacity=".8" transform="rotate(12 46 52)"/>',
    /* Do The Math: a little chalkboard */
    '<rect x="10" y="22" width="60" height="44" rx="2" fill="#1f4a32" stroke="#8a6a3a" stroke-width="4"/>' +
    '<text x="40" y="42" text-anchor="middle" font-family="Barlow,Arial,sans-serif" font-weight="700" font-size="11" fill="#f4f1ea">1+1=2</text><text x="40" y="58" text-anchor="middle" font-family="Barlow,Arial,sans-serif" font-weight="700" font-size="11" fill="#7cf29a">10:1</text>',
    /* Amethyst: a purple crystal cluster */
    '<path d="M40 10l12 22-4 44h-16l-4-44z" fill="#b48cff" stroke="#4a2a7a" stroke-width="2"/><path d="M40 10v66M28 32h24" stroke="#d9c4ff" stroke-width="1.5"/>' +
    '<path d="M20 40l8 10-2 26h-10l-2-26z" fill="#8a5ad8" stroke="#4a2a7a" stroke-width="2"/><path d="M60 36l8 12-2 28h-10l-2-28z" fill="#9a6ae8" stroke="#4a2a7a" stroke-width="2"/>'
  ],
  clubTitle: "The Long Walk", clubTab: "WALK",
  tags: ["MEDSLAUS", "OWN PACE", "MED"],
  c1: "#9fd8ff", c2: "#b48cff", c3: "#7cf29a", bg: "#0b1626",
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="54" width="400" height="10"/>';
    [[0, 26, 40], [44, 34, 30], [320, 30, 36], [360, 18, 40]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/>'; });
    s += '<path d="M90 64V40q4-2 8-12l8-8h36l8 8q4 10 8 12v24z"/>';
    s += '<rect x="190" y="30" width="110" height="34"/><rect x="186" y="26" width="118" height="4"/><rect x="194" y="8" width="3" height="18"/><rect x="186" y="4" width="18" height="6"/><rect x="292" y="8" width="3" height="18"/><rect x="284" y="4" width="18" height="6"/>';
    return s;
  })() + '</g>',
  socials: [
    { name: "Bandcamp", handle: "medhane", url: "https://medhane.bandcamp.com" },
    { name: "YouTube", handle: "MEDHANE", url: "https://www.youtube.com/results?search_query=MEDHANE" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 2 or the 5 to Winthrop St. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "wingate", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "ebbets", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "lefferts", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "corner", t: "WELCOME TO FLATBUSH", x: "Winthrop St and Nostrand Av. This is Medhane's game.", sfx: "spray" }
  ],
  episodes: [
  /* Timing comes from the captions on Medhane's own YouTube uploads. His songs are short single verses, so each verse is split in three. Each pool only asks about lines heard since the last stop. */
  { title: "New Drip", id: "7_c2M9j_ee4", start: 14, cuts: [50.9, 69.7, 105], qs: [
    [
      ["What did he switch?", "Lanes", "Teams", "Phones"],
      ["He took some what and switched lanes?", "Passion", "Advice", "Time"],
      ["What takes him on the daily?", "The soul", "The train", "The city"],
      ["Who hit his line?", "A collector", "His mama", "The label"],
      ["Did he call back?", "No, he ain't", "Yes, right away", "Twice"],
      ["He's sitting, trying to do what?", "Unpack", "Sleep", "Pray"],
      ["He could've went what?", "Crazy", "Home", "Solo"]
    ],
    [
      ["What's the facts, what's the what?", "Math", "Plan", "Price"],
      ["Who loves him, and he loves her back?", "Mama", "His sister", "Grandma"],
      ["Mama got him everything when what passed?", "The summer", "The winter", "The storm"],
      ["He's on a mission to refund the what?", "Past", "Rent", "Ticket"],
      ["Where does he keep the secrets?", "Under wraps", "In a box", "Under the bed"],
      ["They were young and what?", "Eager", "Reckless", "Lost"]
    ],
    [
      ["They felt his what and fell in love?", "Energy", "Music", "Story"],
      ["He spins like a what?", "Dreidel", "Top", "Wheel"],
      ["He tries to play a cool what?", "Head", "Hand", "Role"],
      ["He's trying to stay what?", "Stable", "Humble", "Hidden"],
      ["Everything he says is what?", "True", "Loud", "Planned"],
      ["Where does he face the truth?", "In the mirror", "In the booth", "In church"]
    ]
  ] },
  { title: "Babysteps", id: "QBTE_eej8Io", start: 12, cuts: [31.4, 54.5, 78.8], qs: [
    [
      ["Where is he at the start?", "By the water", "On the roof", "On the train"],
      ["He's trying to figure where what went?", "The love", "The time", "The crew"],
      ["It's more than what it what?", "Seems", "Costs", "Sounds"],
      ["He says he ain't what yet?", "Done", "Home", "Tired"],
      ["They gotta run back in the what?", "Jungle", "Cage", "House"],
      ["What animal does he call himself?", "A lion", "A wolf", "A shark"],
      ["The way he's styling got them what?", "Upset", "Lost", "Quiet"]
    ],
    [
      ["He made 10 just to what?", "Spend", "Save", "Give"],
      ["How often is he picking up checks?", "Every week", "Every day", "Every year"],
      ["What did he hit to get it off his chest?", "The bench", "The track", "The studio"],
      ["To get where he's headed it takes what?", "Strength", "Luck", "Money"],
      ["All he wants is what?", "Peace of mind", "A new car", "More fans"],
      ["Make mistakes and you live with what?", "Regret", "Pressure", "Fear"],
      ["What do the others skip?", "Steps", "Class", "Meals"]
    ],
    [
      ["Who's the one the mirror reflects?", "You", "The crowd", "The past"],
      ["He knew his worth when they gave him what?", "Less", "More", "Credit"],
      ["Who did he negotiate with?", "The bank", "The label", "The landlord"],
      ["He carried the weight and they gave him what?", "Strength", "A crown", "A break"],
      ["You're complaining, he's saving his what?", "Breath", "Money", "Energy"],
      ["What kind of steps is he taking?", "Baby steps", "Big steps", "Dance steps"]
    ]
  ] },
  { title: "Ten To One", id: "9G4PVZLRp1Q", start: 8, cuts: [35.6, 55.3, 82.9], qs: [
    [
      ["It's sunny, and they're what?", "Shady", "Outside", "Driving"],
      ["What are the odds he names?", "Ten to one", "Two to one", "Fifty-fifty"],
      ["If he says he'll do it, he'll get it what?", "Done", "Back", "Signed"],
      ["They play the middle while he collects the what?", "Funds", "Rings", "Rent"],
      ["He knows the temperature like he's at the what?", "Doctor", "Beach", "Gym"],
      ["He's got to survive this what?", "America", "Winter", "Business"],
      ["He never took it to the what?", "Net", "Top", "Bank"]
    ],
    [
      ["He minimized the methods of what?", "Madness", "Math", "Music"],
      ["What kind of kid is he?", "Good kid", "Wild kid", "Lost kid"],
      ["He's not testing his what?", "Badness", "Patience", "Luck"],
      ["Who lives under the rock in his line?", "Patrick", "Squidward", "Gary"],
      ["He's got the flow on his what?", "Go go gadget", "Walkie talkie", "Keyboard"],
      ["They're the ones that he what?", "Matched with", "Grew up with", "Went to school with"]
    ],
    [
      ["The story spinners be speaking what?", "Inaccurate", "The truth", "Too fast"],
      ["What did they all know?", "Codes", "Names", "Lyrics"],
      ["He cut his what?", "Attachments", "Hair", "Prices"],
      ["That's what you get when you cut your what?", "Classes", "Losses", "Lines"],
      ["It don't make what?", "Sense", "Money", "Noise"],
      ["He says you're not what?", "Listening", "Ready", "Laughing"]
    ]
  ] },
  { title: "Trauma & Grace", id: "ny6oeTPi_38", start: 11, cuts: [34.0, 54.6, 82.5], qs: [
    [
      ["Which day does he mention?", "Wednesday", "Friday", "Sunday"],
      ["It's sunshine but he's in the what?", "Shade", "Rain", "Booth"],
      ["What kind of days?", "Isolated", "Lazy", "Lucky"],
      ["What's the price to what?", "Change", "Win", "Leave"],
      ["He says life is what?", "Strange", "Short", "Sweet"],
      ["Love could turn the night to what?", "Today", "Gold", "Dust"],
      ["Where is he, in the what?", "Maze", "Woods", "Crowd"]
    ],
    [
      ["His face never what?", "Folded", "Smiled", "Moved"],
      ["He's fully a what?", "King", "Kid", "Star"],
      ["He took his foot from his what?", "Mouth", "Shoe", "Door"],
      ["He's got brains in the what?", "Game", "Bank", "Clouds"],
      ["What are they gonna train?", "Brains", "Legs", "Eyes"],
      ["He's thinking things he shouldn't what?", "Say", "Do", "Post"],
      ["He's moving at his own what?", "Pace", "Risk", "Speed"]
    ],
    [
      ["He knows the what?", "Stakes", "Rules", "Way"],
      ["He learns from all of his what?", "Mistakes", "Losses", "Friends"],
      ["Y'all are full of what?", "Snakes", "Jokes", "Noise"],
      ["Both the trauma and the what?", "Grace", "Glory", "Pain"],
      ["The snakes are trying to what?", "Take", "Bless", "Hide"],
      ["That grace, my what?", "King", "Queen", "Friend"]
    ]
  ] },
  { title: "Steady / A Long Walk", id: "oKutOjf6av4", start: 8, cuts: [31.5, 90, 165], qs: [
    [
      ["He says he's beyond what?", "Ready", "Tired", "Late"],
      ["Extra hours got his what heavy?", "Eyes", "Arms", "Feet"],
      ["He hit his knees and said a what?", "Prayer", "Verse", "Promise"],
      ["His palm is what?", "Steady", "Open", "Cold"],
      ["He always knew he'd learn if he what?", "Listened", "Practiced", "Waited"],
      ["He spits with what?", "Conviction", "Anger", "Ease"],
      ["Deep water — you a what?", "Surfer", "Sailor", "Diver"]
    ],
    [
      ["Watching who blow up made him go get it?", "His bro", "His dad", "His cousin"],
      ["Saying sorry never made what?", "No difference", "Any money", "A friend"],
      ["He's got tunnel what?", "Vision", "Ears", "Speed"],
      ["His palms are what?", "Itching", "Sweating", "Cold"],
      ["He says it's God what?", "Given", "Sent", "Made"],
      ["He made the most of his what?", "Lessons", "Money", "Time"],
      ["Progress, not what?", "Perfection", "Pressure", "Profit"]
    ],
    [
      ["He finds time to align with the what?", "Divine", "Crew", "Beat"],
      ["He's feeling like the only what?", "One", "Kid", "Voice"],
      ["Where does he feel the pain?", "His lungs", "His back", "His knees"],
      ["Top floor, he's waking his what up?", "Neighbors", "Mama", "Brother"],
      ["He doesn't want no what?", "Favors", "Fame", "Trophies"],
      ["He's trying to make it across that what?", "Water", "Storm", "Traffic"],
      ["Who has he been talking to more?", "God", "His mom", "Himself"]
    ]
  ] }
  ]
};
