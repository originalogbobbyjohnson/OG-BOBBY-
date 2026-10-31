/* Melle Mel: South Bronx. Lead MC of Grandmaster Flash and the Furious Five, the voice of "The Message" (1982), first rapper in the Rock and Roll Hall of Fame. */
window.CFG = {
  name: "Melle Mel", nameUpper: "MELLE MEL", short: "MELLE",
  hood: "South Bronx", hoodUpper: "SOUTH BRONX", boro: "the Bronx",
  saveKey: "ogfan99mellemel1",
  /* "you used to see me rock the house when you was a kid" - start as a kid, rhyme up to The Message */
  startRank: "Kid",
  ranks: ["Superrappin'", "Freedom", "Furious Five", "King of the Rhyme", "Grandmaster"],
  topRank: "The Message",
  point: "Rhyme", points: "Rhymes",
  rankRewards: {
    "Superrappin'": { bongs: 5, line: "Superrappin'. The mic is warming up." },
    "Freedom": { bongs: 10, line: "Freedom. The whole park is moving." },
    "Furious Five": { bongs: 15, line: "Furious Five. You made the crew." },
    "King of the Rhyme": { bongs: 20, line: "King of the Rhyme. Rap is a game you control." },
    "Grandmaster": { bongs: 25, line: "You run all of the South Bronx." }
  },
  trophyArt: [
    /* Kid: a blank cassette */
    '<rect x="14" y="44" width="52" height="32" rx="3" fill="#8a8a92" stroke="#333" stroke-width="1.5"/><rect x="22" y="50" width="36" height="10" fill="#e8e0cc"/><circle cx="30" cy="66" r="5" fill="#333"/><circle cx="50" cy="66" r="5" fill="#333"/>',
    /* Superrappin': a mic with speed lines */
    '<path d="M6 30h18M2 42h22M8 54h16" stroke="#7cf29a" stroke-width="3" stroke-linecap="round"/>' +
    '<rect x="40" y="40" width="12" height="36" rx="3" fill="#9aa3ad" stroke="#333" stroke-width="1.5"/><circle cx="46" cy="32" r="12" fill="#c9ced6" stroke="#333" stroke-width="1.5"/><path d="M36 28h20M36 34h20" stroke="#666"/>',
    /* Freedom: a 12-inch with a yellow label */
    '<circle cx="40" cy="44" r="32" fill="#111"/><circle cx="40" cy="44" r="24" fill="none" stroke="#2c2c2c"/><circle cx="40" cy="44" r="15" fill="#ffd23f"/>' +
    '<text x="40" y="47" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="5.5" fill="#111">FREEDOM</text>',
    /* Furious Five: five stars over a mic */
    '<g fill="#ffd23f"><path d="M16 16l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z"/><path d="M28 8l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z"/><path d="M40 4l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z"/><path d="M52 8l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z"/><path d="M64 16l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z"/></g>' +
    '<rect x="34" y="46" width="12" height="32" rx="3" fill="#7cf29a" stroke="#1f5a30" stroke-width="1.5"/><circle cx="40" cy="40" r="10" fill="#c9ced6" stroke="#333" stroke-width="1.5"/>',
    /* King of the Rhyme: a crown over a rhyme book */
    '<rect x="14" y="54" width="52" height="24" rx="2" fill="#f3ead2" stroke="#7a6a4a" stroke-width="1.5"/><path d="M40 54v24M20 62h14M20 68h14M46 62h14M46 68h14" stroke="#7a6a4a"/>' +
    '<path d="M18 48l5 -24 9 12 8 -18 8 18 9 -12 5 24z" fill="#ffd23f" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/><circle cx="40" cy="40" r="3" fill="#ff4f5e"/>',
    /* Grandmaster: a turntable with the arm down */
    '<rect x="6" y="40" width="68" height="38" rx="4" fill="#3a3a3e" stroke="#111" stroke-width="1.5"/><circle cx="34" cy="58" r="16" fill="#111"/><circle cx="34" cy="58" r="6" fill="#7cf29a"/>' +
    '<path d="M64 46v14l-18 6" stroke="#c9d3dc" stroke-width="2.5" fill="none"/><circle cx="64" cy="46" r="3" fill="#c9d3dc"/><rect x="58" y="70" width="10" height="3" fill="#ff4f5e"/>',
    /* The Message: a gold boombox under a gold record */
    '<circle cx="40" cy="24" r="20" fill="#ffd23f" stroke="#7a5512" stroke-width="2"/><circle cx="40" cy="24" r="6" fill="#ff4f5e"/><circle cx="40" cy="24" r="1.5" fill="#fff"/>' +
    '<rect x="8" y="46" width="64" height="32" rx="5" fill="#e2b13c" stroke="#7a5512" stroke-width="1.5"/><circle cx="22" cy="64" r="9" fill="#7a5512"/><circle cx="58" cy="64" r="9" fill="#7a5512"/><rect x="33" y="54" width="14" height="10" fill="#7a5512"/>'
  ],
  clubTitle: "The Furious Five", clubTab: "FIVE",
  tags: ["FURIOUS 5", "STEP OFF", "GRANDMASTER"],
  c1: "#7cf29a", c2: "#ffd23f", c3: "#ff4f5e", bg: "#0d1a12",
  /* South Bronx: tenement rooftops with water tanks, the el running across */
  headerSvg: (function () {
    let s = '<rect x="0" y="22" width="400" height="5"/>';
    for (let x = 0; x < 400; x += 50) s += '<rect x="' + (x + 20) + '" y="27" width="5" height="37"/>';
    [[0, 34, 56], [60, 40, 48], [112, 30, 60], [176, 38, 54], [234, 32, 58], [296, 42, 46], [346, 34, 54]].forEach(b => { s += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (64 - b[1]) + '"/>'; });
    [[130, 18], [250, 20], [360, 22]].forEach(t => { s += '<rect x="' + t[0] + '" y="' + t[1] + '" width="12" height="12"/><path d="M' + (t[0] - 1) + ' ' + t[1] + 'l7 -6 7 6z"/>'; });
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 6 to Hunts Point Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "park", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "club", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "stoop", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO THE SOUTH BRONX", x: "Hunts Point Av and Southern Blvd. This is Melle Mel's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Step Off", id: "K_XfwYwRMfY", cuts: [84.4, 155.0, 187.5], qs: [
      [
        ["Where was he sitting?", "On the corner", "On the stoop", "On the train"],
        ["He realized he was the king of the what?", "Rhyme", "Block", "Beat"],
        ["What did he get on?", "The microphone", "The train", "The stage"],
        ["\"The rest was my...\" what?", "Legacy", "Story", "History"],
        ["He says he's like who?", "Shakespeare", "Einstein", "Picasso"],
        ["He calls himself a what?", "Pioneer", "Beginner", "Teacher"],
        ["He made rap something people wanted to what?", "Hear", "Buy", "See"]
      ],
      [
        ["He carries out orders from who?", "No man", "The boss", "The crew"],
        ["Anything you wanna do, he already what?", "Did", "Knew", "Saw"],
        ["You saw him rock the house when you were a what?", "Kid", "Baby", "Fan"],
        ["In his MC school, the class was what?", "Packed", "Empty", "Late"],
        ["Tricks are for who?", "Kids", "Suckers", "Clowns"],
        ["\"There'll never be...\" what?", "Another", "A sequel", "A rematch"],
        ["He'd buy a mansion for who?", "His mother", "His crew", "His girl"]
      ],
      [
        ["How could you think you rank with who?", "Me", "The crowd", "The DJ"],
        ["You need to go to the what?", "Bank", "Store", "Park"],
        ["To get some what?", "Cash", "Food", "Rest"],
        ["Because talking don't what?", "Pay", "Stop", "Work"],
        ["Where does he see you?", "On the stage", "On the street", "On TV"],
        ["What's the difference between him and you?", "I look good", "I'm taller", "I'm older"],
        ["How does he end the verse?", "Take that", "Step off", "Peace out"]
      ]
    ] },
    { title: "Freedom", locked: true, cuts: [], qs: [] },
    { title: "Jesse", locked: true, cuts: [], qs: [] },
    { title: "Pump Me Up", locked: true, cuts: [], qs: [] },
    { title: "The Message", locked: true, cuts: [], qs: [] }
  ]
};
