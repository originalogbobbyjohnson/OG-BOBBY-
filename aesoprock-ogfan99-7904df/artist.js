/* Aesop Rock (Ian Bavitz): raised in Northport, Long Island. Rhymesayers (earlier Definitive Jux), the Weathermen crew,
   albums Float, Labor Days, Bazooka Tooth, None Shall Pass, Skelethon, The Impossible Kid, Spirit World Field Guide,
   Integrated Tech Solutions; known for the biggest vocabulary in rap, skateboarding and his own painting. */
window.CFG = {
  name: "Aesop Rock", nameUpper: "AESOP ROCK", short: "AESOP",
  hood: "Northport", hoodUpper: "NORTHPORT", boro: "Long Island",
  saveKey: "ogfan99aesoprock1",
  /* everybody starts as a dork, climbs the album shelf, and ends up the one none shall pass */
  startRank: "Dork",
  ranks: ["Float", "Labor Days", "Bazooka Tooth", "Skelethon", "Impossible Kid"],
  topRank: "None Shall Pass",
  point: "Big Word", points: "Big Words",
  rankRewards: {
    "Float": { bongs: 5, line: "You're floating now. Keep your head above water." },
    "Labor Days": { bongs: 10, line: "Clocked in. Every day is a labor day." },
    "Bazooka Tooth": { bongs: 15, line: "Bazooka Tooth. Your bite got bigger." },
    "Skelethon": { bongs: 20, line: "Down to the bone. Nothing gets past you." },
    "Impossible Kid": { bongs: 25, line: "You run all of Northport." }
  },
  trophyArt: [
    /* Dork: taped-up glasses */
    '<circle cx="26" cy="46" r="12" fill="#cfe6ff" opacity=".5" stroke="#222" stroke-width="4"/><circle cx="54" cy="46" r="12" fill="#cfe6ff" opacity=".5" stroke="#222" stroke-width="4"/>' +
    '<rect x="36" y="42" width="8" height="8" fill="#f4f1e8" stroke="#999" stroke-width="1"/><path d="M14 44l-8-4M66 44l8-4" stroke="#222" stroke-width="3"/>' +
    '<text x="40" y="74" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="11" fill="#ff6b35">DORK</text>',
    /* Float: a life ring on the water */
    '<path d="M6 64q8-4 17 0t17 0t17 0t17 0v10H6z" fill="#1f5170"/><circle cx="40" cy="44" r="20" fill="none" stroke="#f4f1e8" stroke-width="10"/>' +
    '<path d="M40 24v8M40 56v8M20 44h8M52 44h8" stroke="#ff6b35" stroke-width="10"/><circle cx="40" cy="44" r="25" fill="none" stroke="#bdb6a6" stroke-width="1"/>',
    /* Labor Days: a lunch pail and a time card */
    '<path d="M28 34q0-12 12-12t12 12" stroke="#555" stroke-width="3" fill="none"/><rect x="14" y="34" width="52" height="38" rx="4" fill="#7fd1b9" stroke="#2f5a4a" stroke-width="2"/>' +
    '<rect x="14" y="44" width="52" height="4" fill="#2f5a4a"/><rect x="50" y="16" width="20" height="26" fill="#f4f1e8" stroke="#888" stroke-width="1" transform="rotate(12 60 29)"/>' +
    '<path d="M54 24h12M54 30h12M54 36h8" stroke="#888" stroke-width="1" transform="rotate(12 60 29)"/>',
    /* Bazooka Tooth: one big gold tooth */
    '<path d="M18 26q22-12 44 0q4 18-4 28q-4 18-8 22q-4 2-6-10q-4-10-8 0q-2 12-6 10q-4-4-8-22q-8-10-4-28z" fill="#f2d16b" stroke="#7a5512" stroke-width="2"/>' +
    '<path d="M26 32q8-6 14-4" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/>',
    /* Skelethon: a skull with crossed brushes */
    '<path d="M14 70L66 24M66 70L14 24" stroke="#7a4a22" stroke-width="4"/><path d="M62 22l8-6M18 22l-8-6" stroke="#ff6b35" stroke-width="5"/>' +
    '<path d="M24 46q0-22 16-22t16 22q0 8-6 10v8H30v-8q-6-2-6-10z" fill="#f4f1e8" stroke="#555" stroke-width="2"/>' +
    '<circle cx="33" cy="45" r="5" fill="#1d1d24"/><circle cx="47" cy="45" r="5" fill="#1d1d24"/><path d="M38 54h4l-2-4z" fill="#1d1d24"/><path d="M34 60v4M40 60v4M46 60v4" stroke="#555" stroke-width="1.5"/>',
    /* Impossible Kid: a skateboard standing on its tail */
    '<rect x="32" y="12" width="16" height="64" rx="8" fill="#ff6b35" stroke="#7a2a12" stroke-width="2"/><rect x="36" y="16" width="8" height="56" rx="4" fill="#7fd1b9" opacity=".6"/>' +
    '<rect x="26" y="22" width="28" height="4" fill="#9aa"/><rect x="26" y="62" width="28" height="4" fill="#9aa"/><circle cx="26" cy="24" r="4" fill="#f2d16b"/><circle cx="54" cy="24" r="4" fill="#f2d16b"/><circle cx="26" cy="64" r="4" fill="#f2d16b"/><circle cx="54" cy="64" r="4" fill="#f2d16b"/>',
    /* None Shall Pass: a cane raised to the sky over a gold plaque */
    '<path d="M40 74V22q0-10 10-10t10 10" stroke="#5a3a1a" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="40" cy="22" r="2" fill="#f2d16b"/>' +
    '<rect x="8" y="58" width="64" height="16" rx="3" fill="#f2d16b" stroke="#7a5512" stroke-width="2"/>' +
    '<text x="40" y="70" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" textLength="58" lengthAdjust="spacingAndGlyphs" fill="#7a2a12">NONE SHALL PASS</text>'
  ],
  clubTitle: "The Spirit World", clubTab: "SPIRIT",
  tags: ["WEATHERMEN", "NONE SHALL PASS", "AES"],
  c1: "#7fd1b9", c2: "#ff6b35", c3: "#f2d16b", bg: "#0f1a20",
  /* Northport skyline: the four power station stacks, the harbor gazebo, masts and Main Street rooftops */
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    for (let i = 0; i < 4; i++) s += '<rect x="' + (250 + i * 30) + '" y="4" width="12" height="52"/>';
    s += '<rect x="234" y="44" width="140" height="12"/>';
    s += '<path d="M120 30l26-14 26 14z"/><rect x="124" y="30" width="3" height="26"/><rect x="144" y="30" width="3" height="26"/><rect x="165" y="30" width="3" height="26"/>';
    for (let x = 190; x < 230; x += 14) s += '<rect x="' + x + '" y="18" width="1.5" height="38"/>';
    for (let i = 0; i < 5; i++) s += '<rect x="' + (i * 22) + '" y="' + (32 + (i % 2) * 6) + '" width="20" height="' + (24 - (i % 2) * 6) + '"/>';
    return s;
  })() + '</g>',
  socials: [
    { name: "Instagram", handle: "@aesoprockwins", url: "https://www.instagram.com/aesoprockwins/" },
    { name: "X", handle: "@AesopRockWins", url: "https://twitter.com/AesopRockWins" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the LIRR Port Jefferson Branch to Northport. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "harbor", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "mainst", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "stacks", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "parachute" },
    { scene: "corner", t: "WELCOME TO NORTHPORT", x: "Main St and Woodbine Av in Northport Village. This is Aesop Rock's game.", sfx: "spray" }
  ]
};

/* SONGS: 3 clean songs x 3 stops x 11 questions = 99. Every last cut stops before the first curse. */
window.CFG.songs = [
  /* synced lyrics (lrclib, audio upload). Cut 3 at 72.0 ends right before the line at 72.2 that has a curse. */
  { title: "Crystal Sword", id: "4WOjWUvlrbk", cuts: [32.8, 53.2, 71.4], qs: [
    [
      ["He carries his own what?", "Water", "Weight", "Sword"],
      ["He reads a what when he parries?", "Palm", "Book", "Map"],
      ["'Man slash' what?", "Island", "Machine", "Legend"],
      ["He casually hammers what?", "Iron", "Gold", "Nails"],
      ["What comes to daddy?", "Falcons", "Pigeons", "Ravens"],
      ["Fabulous cash and what?", "Prizes", "Diamonds", "Riches"],
      ["He's back at the what?", "Theater", "Harbor", "Station"],
      ["Ride the wild what?", "Aurora", "Ocean", "Horses"],
      ["His future is bright as fried what?", "Gomorrah", "Babylon", "Jericho"],
      ["Where is the SOS?", "In tidal water", "In Morse code", "In thick fog"],
      ["'Final offer,' then what?", "Sold", "Done", "Gone"]
    ],
    [
      ["A window-bound what?", "Bat", "Bird", "Moth"],
      ["It comes from a collapsed red what?", "Flannel", "Blanket", "Curtain"],
      ["The flight path draws a heart and a what?", "Dagger", "Arrow", "Star"],
      ["You track it all with tack and what?", "Yarn", "String", "Tape"],
      ["How tall is he? Six foot a what?", "Million", "Mile", "Hundred"],
      ["Nothing off the what fit him?", "Rack", "Shelf", "Hook"],
      ["He dresses like fingers of what?", "Light", "Smoke", "Rain"],
      ["Light through black what?", "Nimbus", "Velvet", "Water"],
      ["He ruined last what?", "Christmas", "Summer", "Weekend"],
      ["Follow it from wing to what?", "Cataclysm", "Cathedral", "Canyon"],
      ["The flight path is managing a what?", "Back and forth", "Loop the loop", "Up and down"]
    ],
    [
      ["What do they burn in the alley?", "Sage", "Candles", "Paper"],
      ["Burning sage with various what?", "Ghostbusters", "Firefighters", "Magicians"],
      ["A sea of disembodied what?", "Bones", "Voices", "Shadows"],
      ["Knocking on your rods and what?", "Cones", "Pipes", "Drums"],
      ["Some resort to what kind of gear?", "Scuba", "Rain", "Climbing"],
      ["Some return to what kind of holes?", "Hobbit", "Rabbit", "Fox"],
      ["How much of it has he done?", "A lot of both", "None of it", "Just one"],
      ["Riding out and running what?", "Scared", "Late", "Wild"],
      ["Some people call him a what?", "Pest", "Pal", "Prophet"],
      ["He's been shredding perfect what?", "Curbs", "Waves", "Ramps"],
      ["Curbs and golden what?", "Light", "Hours", "Sand"]
    ]
  ] },
  /* auto captions on the official video (Aesop Rock x Blockhead). Fully clean. */
  { title: "Trouble Trouble", id: "wFtK8qsGRaA", cuts: [92.6, 161.2, 228.4], qs: [
    [
      ["Down at what mountain?", "Trouble", "Thunder", "Bear"],
      ["He goes up in search of a source of what?", "Power", "Water", "Light"],
      ["It never comes. There's just more what?", "Mountain", "Snow", "Fog"],
      ["What kind of bag?", "Chalk", "Gym", "Sleeping"],
      ["Here comes Trouble with a what?", "Passion", "Pickaxe", "Vengeance"],
      ["The trouble nobody knows but who?", "Jesus", "Mama", "Me"],
      ["The mountain should have been greeted like a what?", "An equal", "An enemy", "An old friend"],
      ["He might tumble down and break his what?", "Bones", "Board", "Heart"],
      ["How many days drinking the cumbersome?", "40", "7", "100"],
      ["He wrote some to yell off of the what?", "Mezzanine", "Rooftop", "Balcony"],
      ["Trouble Mountain, yield to a troubled what?", "Mankind", "Kingdom", "Nation"]
    ],
    [
      ["Back at the mountain with a trillion what?", "Carabiners", "Ropes", "Snacks"],
      ["He's pushing for the what?", "Peak", "Exit", "Shore"],
      ["It's one of his dozen what?", "Labors", "Lives", "Jobs"],
      ["A troublemaker up the down what?", "Escalator", "Staircase", "Elevator"],
      ["He's getting passed by a what?", "Goat", "Snail", "Turtle"],
      ["Black clouds trying to what?", "Cuddle", "Cry", "Crash"],
      ["He has to pound his what?", "Chest", "Fist", "Feet"],
      ["He wishes Bernard would bring him what?", "Cocoa", "Coffee", "Soup"],
      ["Baked brie with what?", "Honey", "Jam", "Bread"],
      ["Roasted mushroom what?", "Risotto", "Ravioli", "Rigatoni"],
      ["Trouble in what?", "Paradise", "The air", "The city"]
    ],
    [
      ["He may not get to make his dumb what?", "Announcement", "Speech", "Climb"],
      ["Maybe trouble isn't meant to be what?", "Surmounted", "Forgotten", "Explained"],
      ["Trouble is not a mountain, it's a bout of what?", "Misfortune", "Madness", "Bad weather"],
      ["Headquarters turns into a house of what?", "Horrors", "Cards", "Mirrors"],
      ["Who discovers power chords?", "Your boring kid", "Your neighbor", "Your old man"],
      ["Power chords and what?", "Distortion", "Drum solos", "Disco"],
      ["Instead of assuming forward is what?", "Up", "Easy", "Fast"],
      ["He built a whole what sickness business?", "Altitude", "Sea", "Love"],
      ["It makes his failure sound what?", "Frivolous", "Famous", "Heroic"],
      ["He kind of misses the falling what?", "Rocks", "Snow", "Leaves"],
      ["Anyway, at sea level he's what?", "Trouble", "Home", "Fine"]
    ]
  ] },
  /* synced lyrics (lrclib, audio upload, from Float). Cut 3 at 165.0 stops before the line at 165.1 that ends in a curse ad-lib. */
  { title: "Big Bang", id: "BM8_rEIiWRo", cuts: [51.5, 115.7, 164.3], qs: [
    [
      ["The dawning of the book of bitter what?", "Aspects", "Endings", "Lessons"],
      ["Where the what sit and watch?", "Jackals", "Vultures", "Wolves"],
      ["Black horse and what?", "Buggy", "Carriage", "Rider"],
      ["The gathering of loose ends in a what?", "Bucket", "Basket", "Barrel"],
      ["With a shoestring what?", "Budget", "Knot", "Bow"],
      ["Every man's got a field to what?", "Plow", "Mow", "Burn"],
      ["He really can't afford the what?", "Oxen", "Tractor", "Seeds"],
      ["'Fee fie etcetera' - who's knocking?", "The bill collector", "The landlord", "The mailman"],
      ["He gets sturdy with a frigid liquid what?", "Backbone", "Heart", "Spirit"],
      ["Swept in the pressure what?", "Cooker", "Cabin", "Chamber"],
      ["Bash these picket what?", "Fences", "Lines", "Signs"]
    ],
    [
      ["What event will he attend?", "A wedding", "A funeral", "A party"],
      ["The groom presents the what?", "Ring", "Cake", "Rose"],
      ["Prototype king what module?", "Berserker", "Rocket", "Robot"],
      ["Loose cannons span the starboard what?", "Bow", "Deck", "Side"],
      ["What kind of ship is dipped in truth famine pressure?", "Clipper ship", "Pirate ship", "Rocket ship"],
      ["The cabin fever meter is pegging what?", "Ludicrous", "Maximum", "Danger"],
      ["A teaspoon full of what?", "Sugar", "Honey", "Salt"],
      ["He lays across the wood perpendicular to the what?", "Grain", "Floor", "Fence"],
      ["In the chorus, he wants to be a what?", "Big bang", "Big star", "Big deal"],
      ["Never bottle him up in a what?", "Probably", "Maybe", "Jar"],
      ["Huddle in a tunnel of big what?", "Dreams", "Schemes", "Waves"]
    ],
    [
      ["He's a survivor of the woolly what population?", "Mammoth", "Rhino", "Bison"],
      ["Bottleneck effect, sorta born what?", "Deaf", "Blind", "Late"],
      ["Alien of shallow what?", "Alchemy", "Water", "Thinking"],
      ["Steal from the rich, bewitch the what?", "Peasants", "Princes", "Poor"],
      ["He's floating the homing what?", "Pigeon", "Rocket", "Balloon"],
      ["Out of whose kitchen window?", "Hell's", "Grandma's", "The neighbor's"],
      ["The SOS is in a what?", "Bottle", "Letter", "Balloon"],
      ["With a prayer circle release what?", "Party", "Song", "Ceremony"],
      ["Fertile circle turns fertile what?", "Crescent", "Valley", "Ground"],
      ["Despised every second, but he learned his what?", "Lesson", "Place", "Name"],
      ["He promises he'll man the what?", "Lighthouse", "Ship", "Wheel"]
    ]
  ] }
];
