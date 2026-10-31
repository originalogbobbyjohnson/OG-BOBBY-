/* Lord Finesse: Morrisania, the Bronx (raised in the Forest Houses). The Funky Technician, the Rap Lord, founder of D.I.T.C. (Diggin' in the Crates). */
window.CFG = {
  name: "Lord Finesse", nameUpper: "LORD FINESSE", short: "FINESS",
  hood: "Morrisania", hoodUpper: "MORRISANIA", boro: "the Bronx",
  saveKey: "ogfan99lordfinesse1",
  /* everybody starts as a sucker MC; dig the crates up to Rap Lord */
  startRank: "Sucker MC",
  ranks: ["Crate Digger", "D.I.T.C.", "Funky Technician", "Hip 2 Da Game", "Funky Man"],
  topRank: "Rap Lord",
  point: "Break", points: "Breaks",
  rankRewards: {
    "Crate Digger": { bongs: 5, line: "Crate Digger. Dust on your fingers now." },
    "D.I.T.C.": { bongs: 10, line: "D.I.T.C. You're down with the crew." },
    "Funky Technician": { bongs: 15, line: "Funky Technician. Smooth on the mic." },
    "Hip 2 Da Game": { bongs: 20, line: "Hip 2 Da Game. Ain't a thing changed." },
    "Funky Man": { bongs: 25, line: "You run all of Morrisania." }
  },
  trophyArt: [
    /* Sucker MC: a cheap mic with a bent, sad cord */
    '<rect x="34" y="40" width="12" height="30" rx="3" fill="#8a8a8a" stroke="#444" stroke-width="1.5"/><circle cx="40" cy="34" r="9" fill="#9a9a9a" stroke="#444" stroke-width="1.5"/>' +
    '<path d="M40 70q0 10 -12 8q-10 -2 -6 -10" stroke="#444" stroke-width="2" fill="none"/>',
    /* Crate Digger: a wooden milk crate full of records */
    '<rect x="12" y="44" width="56" height="34" fill="#a8743e" stroke="#5a3a1a" stroke-width="2"/><path d="M12 56h56M12 68h56" stroke="#7a5228" stroke-width="2"/>' +
    '<rect x="18" y="22" width="10" height="26" fill="#d24a2a" stroke="#111"/><rect x="30" y="18" width="10" height="30" fill="#f2c14e" stroke="#111"/><rect x="42" y="24" width="10" height="24" fill="#2d4a6a" stroke="#111"/><rect x="54" y="20" width="10" height="28" fill="#e8e0cc" stroke="#111"/>',
    /* D.I.T.C.: a black record with an orange crew label */
    '<circle cx="40" cy="44" r="32" fill="#111"/><circle cx="40" cy="44" r="24" fill="none" stroke="#2c2c2c"/><circle cx="40" cy="44" r="16" fill="#ff8a5b"/>' +
    '<text x="40" y="42" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="8" fill="#111">D.I.T.C.</text><circle cx="40" cy="50" r="2" fill="#e8e0cc"/>',
    /* Funky Technician: a turntable with the arm on the record */
    '<rect x="6" y="40" width="68" height="38" rx="4" fill="#3a3a3e" stroke="#111" stroke-width="1.5"/><circle cx="34" cy="58" r="16" fill="#111"/><circle cx="34" cy="58" r="6" fill="#f2c14e"/>' +
    '<path d="M64 46v14l-18 6" stroke="#c9d3dc" stroke-width="2.5" fill="none"/><circle cx="64" cy="46" r="3" fill="#c9d3dc"/><rect x="58" y="70" width="10" height="3" fill="#ff8a5b"/>',
    /* Hip 2 Da Game: gold rope chain with a microphone pendant */
    '<path d="M16 10q24 46 48 0" stroke="#e2b13c" stroke-width="4" fill="none" stroke-dasharray="5 2"/>' +
    '<rect x="34" y="40" width="12" height="28" rx="3" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5"/><circle cx="40" cy="38" r="9" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5"/><path d="M33 36h14M33 40h14" stroke="#7a5512"/>',
    /* Funky Man: a gold record */
    '<circle cx="40" cy="44" r="32" fill="#f2c14e" stroke="#7a5512" stroke-width="2"/><circle cx="40" cy="44" r="24" fill="none" stroke="#c9952a"/><circle cx="40" cy="44" r="12" fill="#ff8a5b"/><circle cx="40" cy="44" r="2" fill="#fff"/>' +
    '<path d="M22 26q8 -6 16 -6" stroke="#fff" stroke-width="2" opacity=".7" fill="none"/>',
    /* Rap Lord: a crown resting on a stack of gold records */
    '<rect x="12" y="62" width="56" height="6" rx="2" fill="#f2c14e" stroke="#7a5512"/><rect x="10" y="68" width="60" height="6" rx="2" fill="#e2b13c" stroke="#7a5512"/><rect x="14" y="74" width="52" height="6" rx="2" fill="#f2c14e" stroke="#7a5512"/>' +
    '<path d="M16 58l6 -28 10 14 8 -22 8 22 10 -14 6 28z" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/><circle cx="40" cy="50" r="3" fill="#ff8a5b"/><circle cx="26" cy="52" r="2" fill="#4fb3a9"/><circle cx="54" cy="52" r="2" fill="#4fb3a9"/>'
  ],
  clubTitle: "The Crates", clubTab: "CRATES",
  tags: ["D.I.T.C.", "HIP 2 DA GAME", "FUNKY MAN"],
  c1: "#ff8a5b", c2: "#f2c14e", c3: "#4fb3a9", bg: "#160c08",
  /* Morrisania: the Forest Houses towers, Clay Av gables, records stacked, the el running across */
  headerSvg: (function () {
    let s = '<rect x="0" y="54" width="400" height="4"/>';
    for (let x = 0; x < 400; x += 40) s += '<rect x="' + (x + 16) + '" y="56" width="5" height="8"/>';
    s += '<rect x="10" y="8" width="44" height="46"/><rect x="64" y="16" width="44" height="38"/>';
    for (let x = 124; x < 220; x += 24) s += '<rect x="' + x + '" y="32" width="22" height="22"/><path d="M' + (x - 1) + ' 33l12 -12 12 12z"/>';
    s += '<circle cx="262" cy="30" r="22"/><rect x="300" y="12" width="40" height="42"/><rect x="350" y="20" width="44" height="34"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 2 or the 5 to Intervale Av, up on the el. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "forest", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "crates", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "court" },
    { scene: "clay", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO MORRISANIA", x: "Tinton Av and E 163 St by the Forest Houses. This is Lord Finesse's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Return of the Funky Man", id: "mCjUvvXHXVw", cuts: [69.5, 148.5, 235.5], qs: [
      [
        ["\"I'm the type to interrupt a...\" what?", "Party", "Meeting", "Movie"],
        ["\"Swinging like my name was...\" who?", "Tarzan", "Batman", "Superman"],
        ["\"Come on up and give me...\" what?", "Feedback", "A dollar", "Your number"],
        ["He's got some for your what?", "Eardrum", "Pocket", "Radio"],
        ["\"Give me your...\" what?", "Mic", "Hand", "Coat"],
        ["Ingenious going over the what?", "Microphone", "Bridge", "Fence"],
        ["\"It's the return of the funky...\" what?", "Man", "Beat", "Band"]
      ],
      [
        ["Which decade does he name?", "The nineties", "The seventies", "The eighties"],
        ["His brain is like a what?", "Computer", "Calculator", "Library"],
        ["Rivals had better play the what?", "Background", "Bench", "Radio"],
        ["MCs slept on Lord Finesse how?", "Lately", "Never", "Twice"],
        ["Some of them think they could what?", "Take me", "Beat the beat", "Sing"],
        ["Brothers couldn't do what?", "Hang", "Dance", "Write"],
        ["In command with the mic in his what?", "Hand", "Pocket", "Bag"]
      ],
      [
        ["\"Who's the man? Come on, take a...\" what?", "Guess", "Seat", "Break"],
        ["\"It's time to...\" what?", "Celebrate", "Go home", "Wake up"],
        ["\"So pay attention and...\" what?", "Listen up", "Sit down", "Write it down"],
        ["Next year he'll be back to keep his name on the what?", "Map", "Wall", "Radio"],
        ["When he raps it keeps him on the right what?", "Track", "Road", "Side"],
        ["When it's time, he'll go all what?", "Out", "In", "Night"],
        ["He's here to take his what?", "Stand", "Seat", "Money"]
      ]
    ] },
    { title: "Hip 2 Da Game", id: "ihZXuUDUYho", cuts: [90.5, 154.0, 208.5], qs: [
      [
        ["\"I'll always be the...\" what?", "Same", "Best", "Man"],
        ["\"Whether I'm broke or got...\" what?", "Things", "Money", "Gold"],
        ["Sunshine or what?", "Rain", "Snow", "Shade"],
        ["\"Finesse fell off\" - that's what some do what?", "Figure", "Say", "Think"],
        ["\"I'm like Stevie Wonder, I can't see...\" what?", "A brother beating me", "The stage", "The crowd"],
        ["He's seeing more cash than a what?", "Bank teller", "Cashier", "Mailman"],
        ["He's rolling like what?", "TNT", "A truck", "Thunder"]
      ],
      [
        ["Brothers better lounge when he passes through what?", "Town", "The block", "The door"],
        ["Good things come to those who what?", "Wait", "Work", "Pray"],
        ["\"Give me a cape and a...\" what?", "Costume", "Crown", "Mask"],
        ["\"But no, it's not...\" who?", "Batman", "Superman", "Spider-Man"],
        ["He goes back like which band?", "The Gap Band", "The Commodores", "The Jackson 5"],
        ["Rap without Finesse is like life without what?", "Oxygen", "Water", "Music"],
        ["Rap ain't nothing if it ain't what?", "Real", "Loud", "Funky"]
      ],
      [
        ["\"I don't stutter, I'm so...\" what?", "Butter", "Better", "Smooth"],
        ["He's that funky type of soul what?", "Brother", "Singer", "Man"],
        ["He can rock a party from night until what?", "Sunrise", "Midnight", "Noon"],
        ["\"You can't mess with the rap...\" what?", "Lord", "King", "Boss"],
        ["Like saying you can dunk when you can't touch the what?", "Backboard", "Rim", "Ceiling"],
        ["He's been rocking since folks sported stocking what?", "Caps", "Shoes", "Coats"],
        ["What kind of rap does he say he's got?", "The smooth rap", "The loud rap", "The fast rap"]
      ]
    ] },
    { title: "Funky Technician", locked: true, cuts: [], qs: [] },
    { title: "Actual Facts", locked: true, cuts: [], qs: [] },
    { title: "No Gimmicks", locked: true, cuts: [], qs: [] }
  ]
};
