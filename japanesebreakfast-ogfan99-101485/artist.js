/* Japanese Breakfast game (REGIONS tab: Philadelphia; Bryn Mawr, Main Line - Michelle Zauner's college town before the Philly DIY scene). CLEAN set, 5 songs, 99 questions. Sung lines by Michelle Zauner only (her own records, no features).
   Timings: Slide Tackle (220 s), Paprika (220 s), Machinist (217 s), Kokomo, IN (219 s) = lrclib synced lyrics matched to the Japanese Breakfast - Topic uploads of the same length.
   Be Sweet = the official video on jbrekkieVEVO (207 s, longer than the 195 s album cut): cuts set from the video's own uploaded English captions (about +0.6 s vs lrclib), lyric text from lrclib.
   No curse heard before any last cut. Skipped: Everybody Wants to Love You (sexual line in verse 1), Boyish (innuendo/violent line), Road Head, Posing in Bondage (titles), In Heaven and other Psychopomp songs about her mother's death, Little Girl (curse), Mega Circuit (sexual/curse lines), Picture Window ("my death" lines).
   Paprika: no question touches the "feels like dying" line. Machinist: no question touches the "pleasure" lines. */
window.CFG = {
  name: "Japanese Breakfast", nameUpper: "JAPANESE BREAKFAST", short: "JBREK",
  hood: "Bryn Mawr", hoodUpper: "BRYN MAWR", boro: "Philadelphia",
  saveKey: "ogfan99japanesebreakfast1",
  startRank: "Coat Check",
  ranks: ["Slide Tackler", "Center of Magic", "Machinist", "Flyover Star", "Be Sweet"],
  topRank: "Jubilee",
  point: "Soft Sound", points: "Soft Sounds",
  rankRewards: {
    "Slide Tackler": { bongs: 5, line: "Slide tackle the void. You want to be good, and you are." },
    "Center of Magic": { bongs: 10, line: "How's it feel to be at the center of magic?" },
    "Machinist": { bongs: 15, line: "Total control. You can't let go now." },
    "Flyover Star": { bongs: 20, line: "Popping wheelies all the way from Kokomo." },
    "Be Sweet": { bongs: 25, line: "Be sweet. You run all of Bryn Mawr." }
  },
  trophyArt: [
    /* coat check ticket */
    '<rect x="18" y="30" width="44" height="48" rx="3" fill="#f4e6c8" stroke="#000" stroke-width="2"/><circle cx="40" cy="38" r="3" fill="#222"/><path d="M24 50h32M24 58h32M24 66h20" stroke="#b05a3a" stroke-width="2"/><text x="40" y="76" text-anchor="middle" font-family="Arial" font-weight="700" font-size="8" fill="#222">COAT</text>',
    /* soccer ball, slide tackle */
    '<circle cx="40" cy="44" r="24" fill="#f7f3ea" stroke="#000" stroke-width="2"/><path d="M40 34l9 7l-3 11h-12l-3 -11z" fill="#222"/><path d="M40 34v-10M49 41l10 -4M46 52l6 9M34 52l-6 9M31 41l-10 -4" stroke="#222" stroke-width="2"/><path d="M10 76q30 -10 60 0" stroke="#7fd1c7" stroke-width="4" fill="none"/>',
    /* paprika pepper */
    '<path d="M30 22q-4 -8 6 -10" stroke="#3a7a2a" stroke-width="4" fill="none"/><path d="M28 24q-14 8 -8 30q6 22 24 26q14 2 12 -14q-2 -20 -8 -34q-8 -14 -20 -8z" fill="#d8352a" stroke="#000" stroke-width="2"/><path d="M30 34q-4 12 2 26" stroke="#ff8a7a" stroke-width="3" fill="none"/>',
    /* robot arm */
    '<rect x="16" y="66" width="30" height="12" rx="2" fill="#8a96a2" stroke="#000" stroke-width="2"/><rect x="26" y="40" width="10" height="28" fill="#aab4be" stroke="#000" stroke-width="2"/><circle cx="31" cy="40" r="6" fill="#f4a6c0" stroke="#000" stroke-width="2"/><path d="M31 40l24 -14" stroke="#aab4be" stroke-width="8" stroke-linecap="round"/><path d="M55 26l8 -6M55 26l9 2" stroke="#000" stroke-width="3"/><circle cx="31" cy="40" r="2" fill="#000"/>',
    /* bmx wheelie */
    '<circle cx="24" cy="60" r="14" fill="none" stroke="#000" stroke-width="3"/><circle cx="56" cy="46" r="14" fill="none" stroke="#000" stroke-width="3"/><path d="M24 60l14 -10l18 -4M38 50l-4 -14h10M56 46l-6 -18h8" stroke="#f4a6c0" stroke-width="4" fill="none" stroke-linecap="round"/>',
    /* heart candy */
    '<path d="M40 74q-30 -18 -30 -38a14 14 0 0 1 30 -6a14 14 0 0 1 30 6q0 20 -30 38z" fill="#f4a6c0" stroke="#000" stroke-width="2"/><text x="40" y="48" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#7a1f3d">BE</text><text x="40" y="60" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#7a1f3d">SWEET</text>',
    /* gold record with a sun */
    '<circle cx="40" cy="44" r="30" fill="#1a1a1a" stroke="#ffd36e" stroke-width="3"/><circle cx="40" cy="44" r="22" fill="none" stroke="#333"/><circle cx="40" cy="44" r="11" fill="#ffd36e"/><circle cx="40" cy="44" r="2" fill="#000"/><path d="M40 6v6M40 76v6M2 44h6M72 44h6" stroke="#ffd36e" stroke-width="3"/>'
  ],
  clubTitle: "The Soft Sounds Shelf", clubTab: "SHELF",
  tags: ["JBREKKIE", "SOFT SOUNDS", "BE SWEET"],
  c1: "#f4a6c0", c2: "#ffd36e", c3: "#7fd1c7", bg: "#140f1a",
  headerSvg: '<g fill="#f7f3ea"><rect x="0" y="52" width="400" height="12"/><rect x="20" y="30" width="60" height="24"/><rect x="100" y="16" width="26" height="38"/><rect x="100" y="10" width="5" height="8"/><rect x="110" y="10" width="5" height="8"/><rect x="120" y="10" width="5" height="8"/><rect x="126" y="26" width="38" height="28"/><rect x="164" y="16" width="26" height="38"/><rect x="164" y="10" width="5" height="8"/><rect x="174" y="10" width="5" height="8"/><rect x="184" y="10" width="5" height="8"/><rect x="214" y="34" width="70" height="20"/><rect x="300" y="24" width="12" height="30"/><rect x="320" y="36" width="70" height="18"/></g>',
  socials: [
    { name: "Instagram", handle: "@jbrekkie", url: "https://www.instagram.com/jbrekkie/" },
    { name: "YouTube", handle: "@JapaneseBreakfast", url: "https://www.youtube.com/@JapaneseBreakfast" }
  ],
  rooms: [
    { scene: "jbstation", t: "PRESS PLAY", x: "Take SEPTA Regional Rail's Paoli/Thorndale Line to Bryn Mawr. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "jbcollege", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "jbut", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "jb12", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "jbcorner", t: "WELCOME TO BRYN MAWR", x: "W Lancaster Ave and N Bryn Mawr Ave, a block from the station, the Bryn Mawr Film Institute's marquee glowing behind. This is Japanese Breakfast's game.", sfx: "spray" }
  ],
  songs: [
    { title: "Slide Tackle", id: "0-EMiEpXLJg", start: 18.4, cuts: [49.3, 139.2, 181.2], qs: [
      [
        ["She sings, \"I want to be\" what?", "Good", "Free", "Brave"],
        ["She wants to navigate the hate in her what?", "Heart", "Head", "Home"],
        ["She wants to steer it somewhere what?", "Better", "Brighter", "Further"],
        ["\"I want to\" what \"it\"?", "Feel", "Fight", "Find"],
        ["With the feel there is an what she meets?", "Ache", "Answer", "Edge"],
        ["To desire what?", "Living", "Leaving", "Loving"]
      ],
      [
        ["\"Don't mind me while I'm tackling this\" what?", "Void", "Wall", "World"],
        ["What is she slide tackling?", "My mind", "The ball", "The past"],
        ["What feels like she's wrestling with her head?", "This weight", "This song", "This town"],
        ["\"So be\" what \"to me\"?", "Good", "Kind", "Close"],
        ["You and me have always had a what?", "Good time", "Long road", "Hard time"],
        ["\"And what else is\" what, babe?", "Left", "Lost", "Real"],
        ["The day's not a wash until you what?", "Say", "Stay", "Call"]
      ],
      [
        ["She's wrestling with her what?", "Head", "Heart", "Past"],
        ["She's obsessing in the what?", "Dark", "Night", "Rain"],
        ["\"Long as we\" what?", "Are", "Can", "Stay"],
        ["What kind of tackle?", "Slide", "Hard", "Late"],
        ["\"Don't mind me while I'm\" what this void?", "Tackling", "Talking", "Falling"],
        ["\"Don't\" what \"me\"?", "Mind", "Wake", "Rush"]
      ]
    ] },
    { title: "Paprika", id: "aA5l2qsX_O8", start: 7.7, cuts: [48.7, 104.6, 136.7], qs: [
      [
        ["What came slowly?", "Lucidity", "Morning", "Silence"],
        ["She dreamed of untying a great what?", "Knot", "Rope", "Gate"],
        ["It unraveled like a what?", "Braid", "Ribbon", "Sweater"],
        ["Thousands of separate strands of what?", "Fishing line", "Silver thread", "Telephone wire"],
        ["How's it feel to be at the center of what?", "Magic", "Music", "Mystery"],
        ["To linger in tones and what?", "Words", "Waves", "Colors"],
        ["She opened the what?", "Floodgates", "Window", "Curtains"]
      ],
      [
        ["How's it feel to stand at the height of your what?", "Powers", "Fame", "Youth"],
        ["To captivate every what?", "Heart", "Crowd", "Room"],
        ["Projecting your what to strangers?", "Visions", "Pictures", "Secrets"],
        ["You project your visions to whom?", "Strangers", "Friends", "Lovers"],
        ["They linger on every what?", "Word", "Note", "Line"],
        ["\"Who listen, who\" what?", "Linger", "Wander", "Wonder"],
        ["\"Oh, it's a\" what?", "Rush", "Dream", "Thrill"]
      ],
      [
        ["All alone she feels so what?", "Much", "Small", "Cold"],
        ["Her offering should woo, calm, clear and what?", "Solve", "Shine", "Soothe"],
        ["What's the first thing she wants her offering to do?", "Woo", "Win", "Wake"],
        ["\"But the only\" what \"that comes\"?", "Offering", "Answer", "Feeling"],
        ["\"It calls, it\" what?", "Screams", "Sings", "Fades"],
        ["\"There's\" what \"here\"?", "Nothing", "No one", "Magic"]
      ]
    ] },
    { title: "Machinist", id: "Wt5XeDz4zQs", start: 16, cuts: [53.3, 122.8, 154.4], qs: [
      [
        ["She doesn't know how it what?", "Happened", "Ended", "Started"],
        ["Her heart's burning hot enough for the both of whom?", "Us", "Them", "You"],
        ["She never realized how much you were holding what?", "Back", "On", "In"],
        ["All the times she felt so what?", "Plugged in", "Alone", "Alive"],
        ["You were tuning what?", "Out", "Up", "In"],
        ["A muted channel, a cold what?", "Shell", "Stone", "Screen"],
        ["A hologram, an what?", "Abyss", "Echo", "Island"]
      ],
      [
        ["A mist, so what?", "Palpable", "Peaceful", "Purple"],
        ["She asks, \"Do you\" what \"me?\"", "Trust", "Love", "Need"],
        ["Total control, can't what?", "Let go", "Hold on", "Look back"],
        ["It could be what?", "Bliss", "Fate", "Love"],
        ["Who is she singing to, by name?", "Machinist", "Mechanic", "Magician"],
        ["Let go a piece of your what?", "Heart", "Mind", "Soul"],
        ["Shadows go in and go what?", "By", "Out", "Home"]
      ],
      [
        ["\"Here's to the\" what?", "Night", "Moon", "Band"],
        ["What is a-creeping?", "A lullaby", "A shadow", "A spider"],
        ["\"A lullaby a\" what?", "Creeping", "Calling", "Crying"],
        ["\"A\" what \"to win your love\"?", "Song", "Dance", "Ring"],
        ["A song to win your what?", "Love", "Heart", "Trust"],
        ["\"Oh, the true\" what?", "One", "Love", "Light"]
      ]
    ] },
    { title: "Kokomo, IN", id: "BNV1rm16zhE", cuts: [31.1, 97.7, 134.4], qs: [
      [
        ["If she could throw her what around you?", "Arms", "Coat", "Heart"],
        ["For just another what?", "Day", "Night", "Song"],
        ["Maybe it'd feel like the first what?", "Time", "Kiss", "Dance"],
        ["\"Now that you're\" what?", "Away", "Gone", "Grown"],
        ["She'll spend her life not what?", "Knowing", "Sleeping", "Talking"],
        ["She'll spend her what not knowing?", "Life", "Summer", "Nights"]
      ],
      [
        ["These days she can't shake the awful what?", "Feeling", "Memory", "Habit"],
        ["She's missing something she can't what?", "Place", "Name", "Find"],
        ["Like the fear of an oven left what?", "On", "Open", "Burning"],
        ["She was soft as a what?", "Dune", "Cloud", "Pillow"],
        ["\"If ever you come\" what?", "Back", "Home", "Around"],
        ["Wherever you find your what to?", "Way", "Road", "Home"],
        ["She'll be here what?", "Longing", "Waiting", "Singing"]
      ],
      [
        ["Passing time just popping what?", "Wheelies", "Bubbles", "Balloons"],
        ["Kicking round this what kind of state?", "Flyover", "Golden", "Empire"],
        ["Watching you show off to the what?", "World", "Crowd", "Town"],
        ["The parts she fell so what for?", "Hard", "Fast", "Deep"],
        ["She wishes they could go back where?", "There", "Home", "Inside"],
        ["Left alone in her what?", "Room", "Car", "Head"],
        ["Maybe she's not that what?", "Worthy", "Lucky", "Pretty"]
      ]
    ] },
    { title: "Be Sweet", id: "2ZfcZEIo6Bw", start: 16.2, cuts: [53.7, 95.1, 132.3], qs: [
      [
        ["Who should be told she's coming?", "The men", "The band", "Her mother"],
        ["Tell them count the what?", "Days", "Hours", "Stars"],
        ["She can feel what passing by?", "The night", "The train", "The year"],
        ["Passing by like a what waiting for her?", "Mistake", "Stranger", "Promise"],
        ["She's caught up in her what?", "Feelings", "Dreams", "Worries"],
        ["She overthinks the what?", "Truth", "Past", "Plan"],
        ["She fantasizes you've left her what?", "Behind", "Alone", "Waiting"]
      ],
      [
        ["\"Make it up to me, you know it's\" what?", "Better", "Over", "Easy"],
        ["\"Be\" what \"to me, baby\"?", "Sweet", "Kind", "True"],
        ["She wants to believe in whom?", "You", "Me", "Us"],
        ["\"I wanna believe in\" what?", "Something", "Magic", "Forever"],
        ["What does she call him?", "Baby", "Darling", "Honey"],
        ["\"Make it up to\" whom?", "Me", "Her", "Them"]
      ],
      [
        ["\"So come and get your\" what?", "Woman", "Money", "Ticket"],
        ["Take the time to undo your what?", "Lies", "Knots", "Plans"],
        ["Make it up once more with what?", "Feeling", "Flowers", "Style"],
        ["Recognize your what?", "Mistakes", "Friends", "Name"],
        ["Then she'll let you back where?", "In", "Home", "Out"],
        ["Realize it's not too what?", "Late", "Soon", "Far"],
        ["She'll love you how long?", "Always", "Tonight", "Until June"]
      ]
    ] }
  ]
};
