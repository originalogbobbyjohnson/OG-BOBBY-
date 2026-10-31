/* Chuck D: Roosevelt, Long Island. The Hard Rhymer, Mistachuck, the voice of Public Enemy, formed out of Adelphi and WBAU. */
window.CFG = {
  name: "Chuck D", nameUpper: "CHUCK D", short: "CHUCK",
  hood: "Roosevelt", hoodUpper: "ROOSEVELT", boro: "Long Island",
  saveKey: "ogfan99chuckd1",
  /* everybody starts out believing the hype; climb his nicknames and titles up to Public Enemy #1 */
  startRank: "Hype Believer",
  ranks: ["Rhyme Animal", "Bum Rush", "Hard Rhymer", "Mistachuck", "Rebel Without a Pause"],
  topRank: "Public Enemy #1",
  point: "Flyer", points: "Flyers",
  rankRewards: {
    "Rhyme Animal": { bongs: 5, line: "Rhyme Animal. The beast is loose on the mic." },
    "Bum Rush": { bongs: 10, line: "Bum Rush. Yo! You crashed the show." },
    "Hard Rhymer": { bongs: 15, line: "Hard Rhymer. That voice fills the whole room." },
    "Mistachuck": { bongs: 20, line: "Mistachuck. You read the autobiography." },
    "Rebel Without a Pause": { bongs: 25, line: "You run all of Roosevelt." }
  },
  trophyArt: [
    /* Hype Believer: a newspaper with a big HYPE headline */
    '<rect x="12" y="20" width="56" height="56" rx="2" fill="#f4efe2" stroke="#555" stroke-width="1.5" transform="rotate(-6 40 48)"/>' +
    '<text x="40" y="44" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="18" fill="#e0262b" transform="rotate(-6 40 48)">HYPE!</text>' +
    '<path d="M20 52h40M20 58h40M20 64h28" stroke="#888" stroke-width="2" transform="rotate(-6 40 48)"/>',
    /* Rhyme Animal: a notebook with a paw print */
    '<rect x="16" y="16" width="48" height="60" rx="3" fill="#2a2d33" stroke="#111" stroke-width="2"/><path d="M22 16v60" stroke="#ffb347" stroke-width="2"/>' +
    '<ellipse cx="44" cy="54" rx="9" ry="7" fill="#ffb347"/><circle cx="34" cy="40" r="3.5" fill="#ffb347"/><circle cx="41" cy="35" r="3.5" fill="#ffb347"/><circle cx="49" cy="35" r="3.5" fill="#ffb347"/><circle cx="56" cy="40" r="3.5" fill="#ffb347"/>',
    /* Bum Rush: a door kicked open with light pouring out */
    '<rect x="14" y="10" width="44" height="68" fill="#111" stroke="#444" stroke-width="2"/><path d="M14 10l-0 68" stroke="#444"/>' +
    '<path d="M14 10l50 8v52l-50 8z" fill="#ffd98a" opacity=".55"/><path d="M58 10l12 6v64l-12-2z" fill="#7a4b2a" stroke="#3a2418" stroke-width="1.5"/><circle cx="62" cy="48" r="2" fill="#e8b84a"/>',
    /* Hard Rhymer: a chrome mic with a red lightning bolt */
    '<rect x="34" y="42" width="12" height="34" rx="3" fill="#c9ced6" stroke="#4a4f56" stroke-width="1.5"/><circle cx="40" cy="30" r="14" fill="#d9dde3" stroke="#4a4f56" stroke-width="1.5"/>' +
    '<path d="M28 26h24M27 31h26M28 36h24" stroke="#7a8089"/><path d="M58 8l-10 18h8l-8 18 18-24h-8l8-12z" fill="#e0262b" stroke="#7a1010" stroke-width="1"/>',
    /* Mistachuck: a plain black ball cap */
    '<path d="M16 58q0-34 24-34t24 34z" fill="#1a1a1a" stroke="#555" stroke-width="1.5"/><path d="M40 24v34M28 28q6 14 4 30M52 28q-6 14-4 30" stroke="#333" stroke-width="1.2" fill="none"/>' +
    '<path d="M10 58h56q8 0 8 6t-8 4H10z" fill="#111" stroke="#555" stroke-width="1.5"/><circle cx="40" cy="24" r="3" fill="#333"/>',
    /* Rebel Without a Pause: a play button that never stops */
    '<circle cx="40" cy="38" r="28" fill="#111" stroke="#e0262b" stroke-width="3"/><path d="M33 25l20 13-20 13z" fill="#ffffff"/>' +
    '<rect x="14" y="68" width="52" height="11" rx="2" fill="#e0262b"/><text x="40" y="77" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="8" fill="#fff">NO PAUSE</text>',
    /* Public Enemy #1: a gold record with #1 */
    '<circle cx="40" cy="42" r="32" fill="#e8b84a" stroke="#7a5512" stroke-width="2"/><circle cx="40" cy="42" r="24" fill="none" stroke="#c9952f" stroke-width="1"/><circle cx="40" cy="42" r="16" fill="none" stroke="#c9952f" stroke-width="1"/>' +
    '<circle cx="40" cy="42" r="10" fill="#111"/><text x="40" y="47" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="#e8b84a">#1</text>'
  ],
  clubTitle: "The Nation of Millions", clubTab: "NATION",
  tags: ["PUBLIC ENEMY", "FIGHT THE POWER", "MISTACHUCK"],
  c1: "#ffffff", c2: "#e0262b", c3: "#ffb347", bg: "#140b0b",
  /* Long Island: low houses, the Adelphi cupola, boat masts on the Nautical Mile, a plane over the old airfield */
  headerSvg: (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    for (let x = 0; x < 140; x += 32) s += '<path d="M' + x + ' 56v-12l13-9 13 9v12z"/>';
    s += '<rect x="150" y="34" width="70" height="22"/><path d="M146 34l39-10 39 10z"/><rect x="179" y="12" width="12" height="14"/><path d="M178 12l7-8 7 8z"/>';
    for (let x = 250; x < 400; x += 30) s += '<rect x="' + x + '" y="20" width="2" height="36"/><path d="M' + (x - 8) + ' 50h22l-4 6h-14z"/>';
    s += '<path d="M60 14h22l4-3h4l-2 5h-26z"/><rect x="66" y="10" width="2" height="12"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "X", handle: "@MrChuckD", url: "https://x.com/MrChuckD" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the LIRR Babylon Branch to Freeport. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "adelphi", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "field", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "parachute" },
    { scene: "mile", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO ROOSEVELT", x: "Nassau Rd and Babylon Tpke, the heart of Roosevelt. This is Chuck D's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Every Tick Tick Tick", id: "IdM2t4ejZL4", cuts: [44.9, 93.4, 114.8], qs: [
      [
        ["\"Past be memory, future...\"", "Imagination", "History", "Tomorrow"],
        ["\"Imagine a natural tick-tock...\"", "Vacation", "Situation", "Celebration"],
        ["The clock stops for...", "Nobody", "Everybody", "The DJ"],
        ["Time keeps on ticking, so keep...", "Rocking", "Running", "Walking"],
        ["\"It is what it...\"", "Is", "Was", "Be"],
        ["\"It all fades to...\"", "Gray", "Black", "Blue"],
        ["\"Man plans, the Lord...\"", "Laughs", "Listens", "Waits"]
      ],
      [
        ["\"Minutes, seconds...\"", "Drip dropping", "Slipping away", "Running out"],
        ["Who ain't no stopping?", "Father Time", "Mother Nature", "Old Man River"],
        ["\"Don't take it for...\"", "Granted", "Free", "Nothing"],
        ["Mother Nature on a hip hop...", "Planet", "Station", "Record"],
        ["\"Gone in a...\"", "Flash", "Second", "Minute"],
        ["It could be over at the blink of an...", "Eyelash", "Eye", "Hour"],
        ["When the universe calls in...", "Sick", "Late", "Early"]
      ],
      [
        ["What does he go back through?", "Generation gap", "Time machine", "History book"],
        ["Signed by Rick while driving a...", "Buick", "Cadillac", "Lincoln"],
        ["\"Before long, these songs got...\"", "Stronger", "Shorter", "Louder"],
        ["His career started there and got...", "Longer", "Smaller", "Quieter"],
        ["Real leaders lead the...", "People", "Nation", "Band"],
        ["Trying to live every second of...", "Day", "Life", "Time"]
      ]
    ] },
    { title: "No Country for Old Men", id: "d-Av_CtaR1k", cuts: [75.2, 126.3, 201.5], qs: [
      [
        ["\"I've been your age, y'all ain't never been...\"", "Mine", "Young", "There"],
        ["\"Traveling the sands of...\"", "Time", "Life", "Gold"],
        ["\"Everybody gets...\"", "Older", "Richer", "Taller"],
        ["\"Turn the page, can't run and...\"", "Hide", "Fly", "Stop"],
        ["\"Your ___ is staying alive\"", "GPS", "Phone", "Radio"],
        ["\"Only the ___ survive\"", "Strong", "Young", "Fast"],
        ["Elder is the roof that shelters the...", "Youth", "Family", "City"]
      ],
      [
        ["\"The youth want to...\"", "Peek", "Sleep", "Leave"],
        ["\"Come of age, age of...\"", "Arrival", "Reason", "Wisdom"],
        ["Seen through the elder, they'll know what to...", "Seek", "Say", "Keep"],
        ["What has Chuck D been doing his whole life?", "Setting people free", "Telling jokes", "Driving trains"],
        ["Which film director gets named?", "Spike Lee", "Martin Scorsese", "John Singleton"],
        ["Which singer is named after Spike Lee?", "Harry Belafonte", "Ray Charles", "Sam Cooke"],
        ["\"This is never the...\"", "End", "Same", "Time"]
      ],
      [
        ["Little Stevie brought the...", "Thunder", "Lightning", "Rain"],
        ["\"Let no man put us...\"", "Under", "Down", "Out"],
        ["Which Bob gets named?", "Marley", "Dylan", "Ross"],
        ["They're all singing the same...", "Song", "Hymn", "Note"],
        ["What's doing the job?", "Redemption", "Freedom", "Patience"],
        ["\"The long road has a bigger...\"", "View", "Hill", "Price"],
        ["\"Look for the...\"", "Tracks", "Signs", "Light"]
      ]
    ] },
    { title: "Give We The Pride", id: "gNPPF8W1zPU", cuts: [119.4, 229.3, 299.7], qs: [
      [
        ["\"Souls, we got to love...\"", "Ourselves", "Each other", "The music"],
        ["\"Make me feel proud of...\"", "Myself", "My city", "My crew"],
        ["What don't do nothing for him?", "Clothes and jewelry", "Cars and money", "Fame and fortune"],
        ["We need pride to...", "Survive", "Succeed", "Sing"],
        ["When he sees wrong, he's got to say it...", "Loud", "Twice", "Softly"],
        ["Who does he see confused?", "Young people", "Teachers", "Old friends"],
        ["Give them hope, give them love, get them...", "Pride", "Money", "Jobs"]
      ],
      [
        ["Grown folks acting like kids on...", "TV", "Stage", "Radio"],
        ["Who keeps asking him about policy?", "Social media", "Reporters", "His mother"],
        ["Want to do something for the people? Make us...", "Equal", "Rich", "Famous"],
        ["\"Creatures with human...\"", "Features", "Voices", "Faces"],
        ["\"You fail the plan, you plan to...\"", "Fail", "Win", "Wait"],
        ["Folks are blinded by the...", "Fame", "Light", "Money"],
        ["\"You're our...\"", "Queen", "Star", "Sister"]
      ],
      [
        ["\"Y'all, we got to love...\"", "Ourselves", "The block", "The game"],
        ["\"Throw your ___ in the air\"", "Fist", "Hat", "Flag"],
        ["\"It's going to be hard to...\"", "Survive", "Sleep", "Stop"],
        ["\"Let me walk with my head...\"", "Up", "Down", "Low"],
        ["\"Brown, chocolate, cocoa butter...\"", "Skin", "Smile", "Soul"],
        ["\"I need a little...\"", "Pride", "Time", "Love"]
      ]
    ] },
    { title: "Don't Believe the Hype", locked: true, cuts: [], qs: [] },
    { title: "Fight the Power", locked: true, cuts: [], qs: [] }
  ]
};
