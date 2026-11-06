/* The War on Drugs game (REGIONS tab: Philadelphia; Fishtown, where Adam Granduciel lived and the band was founded). CLEAN set, 5 songs, 99 questions. Sung lines by Adam Granduciel only (the band's own records; Lucius only sing backing on I Don't Live Here Anymore, no questions on backing parts).
   The band name is fine; no question touches drugs. Kurt Vile (founding member, has his own kit) is not featured; Fishtown spots already used by his kit (Johnny Brenda's at Frankford & Girard, the Front & Master mural) are avoided.
   Timings: Living Proof (294 s), Harmonia's Dream (387 s vs lrclib 386), Holding On (351 s) = lrclib synced lyrics matched to The War On Drugs - Topic uploads. Red Eyes = Secretly Canadian official audio (299 s, lrclib 299).
   I Don't Live Here Anymore = the official music video (328 s, same as lrclib 328); its auto captions line up with lrclib within 0.2 s ("I need a chance to be reborn" 50.6 vs 50.5, "I never took our love for granted" 186.1 vs 185.9).
   No curse heard before any last cut. Skipped: Under the Pressure ("comedown", "wasted", "crack" lines), Pain (official video edit is ~3 s off lrclib, no Topic upload found), I Don't Wanna Wait (official audio 3 s off).
   IDLHA: no question touches the "dying in slow motion" line. Red Eyes: no question touches the "abuse my faith" / "beat it down" lines. */
window.CFG = {
  name: "The War on Drugs", nameUpper: "THE WAR ON DRUGS", short: "TWOD",
  hood: "Fishtown", hoodUpper: "FISHTOWN", boro: "Philadelphia",
  saveKey: "ogfan99thewarondrugs1",
  startRank: "Runaway",
  ranks: ["Living Proof", "Rolling Wave", "Holding On", "Reborn", "Red Eyes"],
  topRank: "Deeper Understanding",
  point: "Wave", points: "Waves",
  rankRewards: {
    "Living Proof": { bongs: 5, line: "Maybe you're the living proof." },
    "Rolling Wave": { bongs: 10, line: "You're in a rolling wave now." },
    "Holding On": { bongs: 15, line: "Keep keeping on. You're holding on." },
    "Reborn": { bongs: 20, line: "A chance to be reborn. You took it." },
    "Red Eyes": { bongs: 25, line: "Red eyes, all night. You run all of Fishtown." }
  },
  trophyArt: [
    /* running shoe */
    '<path d="M14 64q2 -16 14 -18l14 -2q8 8 20 10q8 2 8 10v6h-56z" fill="#6fa8dc" stroke="#000" stroke-width="2"/><path d="M14 70h56" stroke="#f4f1e8" stroke-width="4"/><path d="M30 50l4 6M38 48l4 6" stroke="#f4f1e8" stroke-width="2"/>',
    /* bass drum */
    '<ellipse cx="40" cy="46" rx="26" ry="26" fill="#f4f1e8" stroke="#000" stroke-width="3"/><ellipse cx="40" cy="46" rx="18" ry="18" fill="#fff" stroke="#bbb"/><path d="M14 46h-6M66 46h6" stroke="#888" stroke-width="3"/><path d="M28 20l-8 -10M52 20l8 -10" stroke="#d9b98a" stroke-width="3" stroke-linecap="round"/>',
    /* wave */
    '<path d="M8 66q10 -40 34 -40q22 0 22 20q0 12 -12 12q-10 0 -10 -8q0 -6 6 -6" fill="none" stroke="#6fa8dc" stroke-width="6" stroke-linecap="round"/><path d="M8 72h64" stroke="#3f6f8f" stroke-width="5"/>',
    /* guitar */
    '<path d="M50 12l-16 40" stroke="#5a3a20" stroke-width="5"/><rect x="47" y="6" width="9" height="12" rx="2" fill="#2a2a2a"/><path d="M34 46q-20 0 -20 16q0 14 16 14q10 0 14 -8q8 -2 8 -10q0 -12 -18 -12z" fill="#d65a4a" stroke="#000" stroke-width="2"/><circle cx="32" cy="60" r="4" fill="#111"/>',
    /* sunrise */
    '<path d="M10 70a30 30 0 0 1 60 0z" fill="#e8b04a" stroke="#000" stroke-width="2"/><path d="M40 30v-12M18 40l-8 -8M62 40l8 -8M4 58h-2M78 58h-2" stroke="#e8b04a" stroke-width="3"/><path d="M6 74h68" stroke="#000" stroke-width="3"/>',
    /* tape reel */
    '<circle cx="40" cy="44" r="26" fill="#2a2a2a" stroke="#000" stroke-width="2"/><circle cx="40" cy="44" r="18" fill="#6a4a2a"/><circle cx="40" cy="44" r="6" fill="#ddd" stroke="#000"/><path d="M40 30v8M52 50l-7 -4M28 50l7 -4" stroke="#ddd" stroke-width="3"/>',
    /* gold record, red ring */
    '<circle cx="40" cy="44" r="30" fill="#1a1a1a" stroke="#e8b04a" stroke-width="3"/><circle cx="40" cy="44" r="22" fill="none" stroke="#333"/><circle cx="40" cy="44" r="11" fill="#d65a4a"/><circle cx="40" cy="44" r="2" fill="#000"/>'
  ],
  clubTitle: "The Rehearsal Basement", clubTab: "BSMT",
  tags: ["FISHTOWN", "LIVING PROOF", "LOST IN THE DREAM"],
  c1: "#e8b04a", c2: "#6fa8dc", c3: "#d65a4a", bg: "#0f1218",
  headerSvg: '<g fill="#f7f3ea"><rect x="0" y="52" width="400" height="12"/><rect x="0" y="36" width="40" height="18"/><rect x="44" y="40" width="40" height="14"/><path d="M100 54v-30l8 -20l8 20v30z"/><rect x="124" y="38" width="44" height="16"/><rect x="180" y="34" width="120" height="6"/><rect x="186" y="40" width="4" height="14"/><rect x="226" y="40" width="4" height="14"/><rect x="266" y="40" width="4" height="14"/><rect x="314" y="36" width="40" height="18"/><path d="M366 54l3 -36h6l3 36z"/></g>',
  socials: [
    { name: "Instagram", handle: "@thewarondrugs", url: "https://www.instagram.com/thewarondrugs/" },
    { name: "YouTube", handle: "@thewarondrugs", url: "https://www.youtube.com/@thewarondrugs" }
  ],
  rooms: [
    { scene: "wdstation", t: "PRESS PLAY", x: "Take SEPTA's Market-Frankford Line to Berks, up on the El over Front St. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "wdtroc", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "wddick", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "wdbasement", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "court" },
    { scene: "wdcorner", t: "WELCOME TO FISHTOWN", x: "E Columbia Ave and N Delaware Ave at Penn Treaty Park, the white treaty obelisk and the Delaware River behind. This is The War on Drugs' game.", sfx: "spray" }
  ],
  songs: [
    { title: "Living Proof", id: "_958ZQKrdhM", start: 70.1, cuts: [103.7, 155.7, 193.1], qs: [
      [
        ["He's banging on a what?", "Drum", "Door", "Wall"],
        ["You turned him what?", "Loose", "Around", "Away"],
        ["Maybe he's the living what?", "Proof", "Legend", "Dream"],
        ["What kind of proof is he?", "Living", "Final", "Only"],
        ["\"What have I been\" what \"from?\"", "Running", "Hiding", "Turning"],
        ["Who turned him loose?", "You", "The band", "His father"]
      ],
      [
        ["He went down to the what?", "Corner", "River", "Station"],
        ["They're building up his what?", "Block", "Hopes", "Walls"],
        ["Maybe he's been gone too what?", "Long", "Far", "Fast"],
        ["He can't go what?", "Back", "Home", "On"],
        ["He'll keep what?", "Improving", "Dreaming", "Walking"],
        ["What city is he in?", "Chicago", "Detroit", "Memphis"],
        ["He's always what?", "Changing", "Waiting", "Leaving"]
      ],
      [
        ["\"Come to me\" when?", "Now", "Tonight", "Soon"],
        ["He knows the what?", "Path", "Plan", "Name"],
        ["He's been to the what you've tried escaping?", "Place", "Party", "House"],
        ["You've tried what?", "Escaping", "Forgetting", "Ignoring"],
        ["He can't what?", "Recall", "Sleep", "Stay"],
        ["He can't recall what he what?", "Believes in", "Came for", "Paid for"]
      ]
    ] },
    { title: "Harmonia's Dream", id: "1iDyfu4Xy_Q", start: 14.2, cuts: [52.3, 116.0, 176.0], qs: [
      [
        ["He can't escape this what?", "Memory", "Feeling", "City"],
        ["It's got him up all what again?", "Night", "Day", "Week"],
        ["You're all that he can what?", "See", "Hear", "Feel"],
        ["He's crossed so many what?", "Roads", "Rivers", "Bridges"],
        ["He never needed more than he could what?", "Hold", "Carry", "Give"],
        ["In a vision you're a ghost in what colors?", "Black and white", "Red and gold", "Gray and blue"],
        ["A silhouette in blue and what?", "Green", "Gold", "Gray"]
      ],
      [
        ["He lays awake and waits for you to what?", "Call", "Come", "Sing"],
        ["He's in a rolling what?", "Wave", "Dream", "Storm"],
        ["Is he losing his what?", "Faith", "Mind", "Way"],
        ["Leaves are falling down like what?", "Rain", "Snow", "Tears"],
        ["When does he stand alone outside?", "In the morning", "At midnight", "In the evening"],
        ["He watches them blow what?", "Away", "Around", "By"],
        ["It's so hard to find a what these days?", "Friend", "Job", "Home"]
      ],
      [
        ["Summer comes and what gets in?", "Rain", "Light", "Cold"],
        ["He's looking through the what?", "Glass", "Gate", "Fog"],
        ["He's not trying to make you what?", "Wait", "Cry", "Leave"],
        ["He doesn't need it what?", "Anymore", "Tonight", "Again"],
        ["Sometimes forward is the only way what?", "Back", "Home", "Out"],
        ["To reach you in what?", "Time", "Dreams", "Person"]
      ]
    ] },
    { title: "Holding On", id: "C08__yI_48U", start: 33.1, cuts: [72.3, 136.5, 185.0], qs: [
      [
        ["Once he was alive and he could what?", "Feel", "See", "Fly"],
        ["He was holding on to whom?", "You", "Her", "Him"],
        ["He redefined the way he looked at what?", "Dawn", "Love", "Home"],
        ["He went down a crooked what?", "Highway", "Alley", "River"],
        ["He went all outside the what?", "Line", "Lane", "Law"],
        ["What kind of highway?", "Crooked", "Lonely", "Open"]
      ],
      [
        ["He's been what?", "Rejected", "Forgotten", "Promoted"],
        ["The light has turned and he's out of what?", "Time", "Luck", "Breath"],
        ["He's hiding in the what?", "Seams", "Shadows", "Stars"],
        ["He feels like he's about to what?", "Crash", "Fly", "Fall"],
        ["Once they were apart, he could see what color?", "Red", "Blue", "Gold"],
        ["He's never trying to turn back what?", "Time", "Home", "Around"],
        ["\"Ain't no way I'm gonna\" what?", "Last", "Stop", "Lose"]
      ],
      [
        ["Now he's headed down a different what?", "Road", "River", "Street"],
        ["Can they walk it how?", "Side by side", "Hand in hand", "One by one"],
        ["An old memory is just another way of saying what?", "Goodbye", "Hello", "I'm sorry"],
        ["He keeps moving what?", "Past", "Up", "Out"],
        ["\"Riding the same\" what?", "Line", "Train", "Wave"],
        ["\"I keep keeping\" what?", "On", "Up", "Out"]
      ]
    ] },
    { title: "I Don't Live Here Anymore", id: "MVh6XTwWhMY", start: 36.9, cuts: [73.0, 152.0, 205.1], qs: [
      [
        ["He was lying in his what?", "Bed", "Car", "Room"],
        ["A creature void of what?", "Form", "Light", "Fear"],
        ["He's been so afraid of what?", "Everything", "The dark", "The future"],
        ["He needs a chance to be what?", "Reborn", "Forgiven", "Free"],
        ["He doesn't live here what?", "Anymore", "Again", "Tonight"],
        ["He went along the what?", "Wind", "River", "Road"]
      ],
      [
        ["Who did they go to see?", "Bob Dylan", "Bruce Springsteen", "Tom Petty"],
        ["What song did they dance to?", "Desolation Row", "Thunder Road", "Born to Run"],
        ["His memories run what?", "Wild", "Dry", "Deep"],
        ["He's got no what to go?", "Place", "Car", "Reason"],
        ["Beating like a what?", "Heart", "Drum", "Clock"],
        ["He'll walk through every what?", "Doorway", "Hallway", "Window"],
        ["We're all walking through this what on our own?", "Darkness", "City", "Desert"]
      ],
      [
        ["Time surrounds him like an what?", "Ocean", "Island", "Echo"],
        ["His memories are like what?", "Waves", "Stars", "Ghosts"],
        ["Or getting what every day?", "Stronger", "Older", "Closer"],
        ["He never took their love for what?", "Granted", "Nothing", "Free"],
        ["You never left him wanting what?", "More", "Less", "Home"],
        ["You'd never what him?", "Recognize", "Remember", "Forgive"],
        ["What does he call you?", "Babe", "Darling", "Honey"]
      ]
    ] },
    { title: "Red Eyes", id: "bsoqmFL1vlU", start: 21.6, cuts: [58.0, 125.6, 197.2], qs: [
      [
        ["\"Come and\" what?", "See", "Stay", "Dance"],
        ["He witnesses what?", "Everything", "Nothing", "The sunrise"],
        ["He's on his what?", "Knees", "Way", "Own"],
        ["Against his what?", "Will", "Word", "Wishes"],
        ["Anyone can tell it's you what?", "Coming", "Calling", "Leaving"],
        ["\"Baby, don't\" what?", "Mind", "Cry", "Wait"],
        ["Leave it hanging on the what?", "Rail", "Wall", "Wire"]
      ],
      [
        ["\"Come and\" what \"away\"?", "Ride", "Run", "Drive"],
        ["It's easier to stick to the what?", "Old", "Plan", "Road"],
        ["He's surrounded by the what?", "Night", "Crowd", "Sea"],
        ["And you don't what?", "Give in", "Look back", "Let go"],
        ["You're on his what again?", "Side", "Mind", "Case"],
        ["Ride the what wherever it goes?", "Heat", "Wave", "Wind"],
        ["He'll be the one to what?", "Care", "Stay", "Call"]
      ],
      [
        ["You're all he's what?", "Got", "Known", "Found"],
        ["He won't let the dark night cover his what?", "Soul", "Eyes", "Town"],
        ["They won't get what inside it all again?", "Lost", "Stuck", "Caught"],
        ["\"Oh, my\" what?", "Mind", "Love", "Heart"],
        ["No one sees him, he's out here what?", "Waiting", "Walking", "Working"],
        ["Throw the what away?", "Bad", "Past", "Key"],
        ["He would keep you here, but he what?", "Can't", "Won't", "Tries"]
      ]
    ] }
  ]
};
