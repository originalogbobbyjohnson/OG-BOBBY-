/* Sheek Louch: Yonkers, Westchester. D-Block / The LOX, the Silverback Gorilla, Donnie G, Gorillaween. */
window.CFG = {
  name: "Sheek Louch", nameUpper: "SHEEK LOUCH", short: "SHEEK",
  hood: "Yonkers", hoodUpper: "YONKERS", boro: "Westchester",
  saveKey: "ogfan99sheeklouch1",
  /* everybody starts as a pup; run with the wolves up to Donnie G */
  startRank: "Pup",
  ranks: ["Year of the Wolf", "Still a Wolf", "D-Block", "Beast Mode", "Silverback Gorilla"],
  topRank: "Donnie G",
  point: "Banana", points: "Bananas",
  rankRewards: {
    "Year of the Wolf": { bongs: 5, line: "Year of the Wolf. You found the pack." },
    "Still a Wolf": { bongs: 10, line: "Still a Wolf. Running with the pack." },
    "D-Block": { bongs: 15, line: "D-Block. You're down with the crew now." },
    "Beast Mode": { bongs: 20, line: "Beast Mode. Let's go!" },
    "Silverback Gorilla": { bongs: 25, line: "You run all of Yonkers." }
  },
  trophyArt: [
    /* Pup: a small paw print */
    '<ellipse cx="40" cy="58" rx="14" ry="12" fill="#8a8a8a" stroke="#444" stroke-width="1.5"/><circle cx="24" cy="40" r="5" fill="#8a8a8a" stroke="#444"/><circle cx="34" cy="32" r="5" fill="#8a8a8a" stroke="#444"/><circle cx="46" cy="32" r="5" fill="#8a8a8a" stroke="#444"/><circle cx="56" cy="40" r="5" fill="#8a8a8a" stroke="#444"/>',
    /* Year of the Wolf: a full moon with a wolf head silhouette */
    '<circle cx="40" cy="44" r="32" fill="#f3ead2" stroke="#b9a978" stroke-width="2"/><circle cx="30" cy="34" r="4" fill="#e2d6b2"/><circle cx="52" cy="56" r="6" fill="#e2d6b2"/>' +
    '<path d="M24 70l6-22-4-14 10 8h8l10-8-4 14 6 22z" fill="#1d2329"/>',
    /* Still a Wolf: a wolf howling on a rock */
    '<path d="M10 78l12-14h36l12 14z" fill="#5e564d"/><path d="M26 64l4-20 6-8 4-14 4 8 6 2-6 6 4 10 6 16z" fill="#c9d1d9" stroke="#444" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M44 16q4-4 8 0M50 10q6-6 12 0" stroke="#ff8a5b" stroke-width="2" fill="none"/>',
    /* D-Block: a silver chain with a big D pendant */
    '<path d="M16 10q24 40 48 0" stroke="#c9d1d9" stroke-width="4" fill="none" stroke-dasharray="5 2"/>' +
    '<path d="M28 36h12q16 0 16 20t-16 20H28z" fill="#ff8a5b" stroke="#111" stroke-width="2"/><path d="M36 46h4q7 0 7 10t-7 10h-4z" fill="#111"/>',
    /* Beast Mode: a big gorilla fist */
    '<rect x="20" y="30" width="40" height="34" rx="10" fill="#3a3a40" stroke="#111" stroke-width="2"/><path d="M30 30v14M40 30v14M50 30v14" stroke="#111" stroke-width="2"/>' +
    '<rect x="28" y="62" width="24" height="16" fill="#3a3a40" stroke="#111" stroke-width="2"/><path d="M14 22l6 6M66 22l-6 6M40 12v8" stroke="#ff8a5b" stroke-width="3"/>',
    /* Silverback Gorilla: a gorilla head with the silver back */
    '<ellipse cx="40" cy="50" rx="30" ry="28" fill="#c9d1d9" stroke="#444" stroke-width="2"/><ellipse cx="40" cy="48" rx="22" ry="22" fill="#2b2b30"/>' +
    '<ellipse cx="40" cy="58" rx="13" ry="9" fill="#55505a"/><circle cx="32" cy="42" r="3" fill="#ff8a5b"/><circle cx="48" cy="42" r="3" fill="#ff8a5b"/><path d="M36 58h3M41 58h3" stroke="#111" stroke-width="2"/><path d="M26 34q14-6 28 0" stroke="#111" stroke-width="3" fill="none"/>',
    /* Donnie G: a gold crown with a G on a jack-o-lantern, for Gorillaween */
    '<ellipse cx="40" cy="62" rx="28" ry="18" fill="#f07b1f" stroke="#8a3f0a" stroke-width="2"/><path d="M28 48v28M52 48v28M40 44v34" stroke="#c9620f" stroke-width="1.5"/>' +
    '<path d="M28 58l5-4 5 4zM42 58l5-4 5 4zM28 68q12 8 24 0" stroke="#ffe27a" stroke-width="2" fill="#ffe27a"/>' +
    '<path d="M18 42l4-24 10 12 8-18 8 18 10-12 4 24z" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/><text x="40" y="38" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="#7a5512">G</text>'
  ],
  clubTitle: "The Jungle", clubTab: "JUNGLE",
  tags: ["D-BLOCK", "LET'S GO", "DONNIE G"],
  c1: "#ff8a5b", c2: "#c9d1d9", c3: "#3fa34d", bg: "#100b10",
  /* Yonkers: the Palisades across the river, the pier pavilion, downtown blocks and the manor hall */
  headerSvg: (function () {
    let s = '<path d="M0 30l40-6 50 4 60-8 50 6 60-6 60 4 80-6v46H0z" opacity=".5"/>';
    s += '<rect x="0" y="54" width="400" height="4"/>';
    s += '<rect x="20" y="40" width="70" height="14"/><path d="M14 42l41-16 41 16z"/>';
    s += '<rect x="120" y="22" width="26" height="32"/><rect x="150" y="14" width="22" height="40"/><rect x="176" y="28" width="30" height="26"/>';
    s += '<rect x="230" y="34" width="64" height="20"/><path d="M226 34l8-8h56l8 8z"/>';
    s += '<rect x="320" y="18" width="24" height="36"/><rect x="350" y="26" width="40" height="28"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take Metro-North's Hudson Line up the river to Ludlow. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "pier", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "temple", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "getty", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO YONKERS", x: "Main St and Warburton Av by Getty Square. This is Sheek Louch's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Good Love", id: "OYdr2ipU-RE", cuts: [59.5, 118.5, 157.9], qs: [
      [
        ["What is Sheek looking for?", "Good love", "A new car", "A big show"],
        ["He met a lot of people out where?", "On tour", "At school", "Down South"],
        ["What kind of flights?", "First class", "Red-eye", "Late night"],
        ["\"Just can't keep...\" what?", "Still", "Quiet", "Calm"],
        ["Fresh off the plane and into the what?", "Bent'", "Cab", "Train"],
        ["He's tired of the road with no what booked?", "Shows", "Rooms", "Flights"],
        ["He needs something what?", "Home cooked", "Brand new", "Ice cold"]
      ],
      [
        ["Short sleeve and no what?", "Cuff", "Tie", "Collar"],
        ["What car is sittin' outside?", "Aston Martin", "Range Rover", "Cadillac"],
        ["Hat low enough, and the sleeve is what?", "Short", "Long", "Rolled"],
        ["Built big like he was down with who?", "Puff", "Russell", "Jay"],
        ["In the club, he skips the what?", "V.I.P.", "Dance floor", "DJ booth"],
        ["Down low where every last what be?", "Hoodlum", "Rapper", "Baller"],
        ["He says sorry, but he's gotta what?", "Disappear", "Dance", "Sing"]
      ],
      [
        ["Whose record is knocking?", "Betty Wright", "Aretha Franklin", "Patti LaBelle"],
        ["What dance on the block?", "Electric slide", "Running man", "The cha-cha"],
        ["Got 'em going crazy from 8 to what?", "80", "18", "28"],
        ["It feels so good you can't do what?", "Sit down", "Stand up", "Sleep"],
        ["You don't care who's what?", "Watchin'", "Talkin'", "Callin'"],
        ["What does Sheek shout to start the verse?", "Let's go", "Here we go", "Come on"],
        ["\"We gon' fight but I think that's just...\" what?", "Good love", "Real talk", "The game"]
      ]
    ] },
    { title: "OK", locked: true, cuts: [], qs: [] },
    { title: "One Name", locked: true, cuts: [], qs: [] },
    { title: "Keep Pushin'", locked: true, cuts: [], qs: [] },
    { title: "Time 2 Get Paid", locked: true, cuts: [], qs: [] }
  ]
};
