/* Slick Rick: Baychester, the Bronx. The Ruler, hip-hop's greatest storyteller: the eye patch, the crown, the gold. Came up with Doug E. Fresh's Get Fresh Crew. */
window.CFG = {
  name: "Slick Rick", nameUpper: "SLICK RICK", short: "RICK",
  hood: "Baychester", hoodUpper: "BAYCHESTER", boro: "the Bronx",
  saveKey: "ogfan99slickrick1",
  /* everybody starts as part of the young world (Hey Young World); listen to the stories up to The Ruler */
  startRank: "Young World",
  ranks: ["Get Fresh Crew", "Storyteller", "Uncle Ricky", "La Di Da Di", "Great Adventurer"],
  topRank: "The Ruler",
  point: "Jewel", points: "Jewels",
  rankRewards: {
    "Get Fresh Crew": { bongs: 5, line: "Get Fresh Crew. You came up the right way." },
    "Storyteller": { bongs: 10, line: "Storyteller. Once upon a time, it was you." },
    "Uncle Ricky": { bongs: 15, line: "Uncle Ricky. The kids want a bedtime story." },
    "La Di Da Di": { bongs: 20, line: "La Di Da Di. We like to party." },
    "Great Adventurer": { bongs: 25, line: "You run all of Baychester." }
  },
  trophyArt: [
    /* Young World: a little globe on a stand */
    '<circle cx="40" cy="40" r="24" fill="#3a8fd8" stroke="#1d4f7a" stroke-width="2"/><path d="M26 30q8-6 14 2t12-2M24 46q10 4 16-2t16 4" stroke="#4fae5a" stroke-width="6" fill="none" stroke-linecap="round"/>' +
    '<path d="M40 64v12M30 78h20" stroke="#7a5512" stroke-width="3"/><path d="M14 40a26 26 0 0 0 52 0" stroke="#e8b84a" stroke-width="2" fill="none"/>',
    /* Get Fresh Crew: a bucket hat (no logo) */
    '<path d="M22 50q2-28 18-28t18 28z" fill="#f2efe6" stroke="#555" stroke-width="2"/><path d="M8 54q32-12 64 0q-4 10-32 10t-32-10z" fill="#e2ddd0" stroke="#555" stroke-width="2"/><path d="M24 44h32" stroke="#c8102e" stroke-width="3"/>',
    /* Storyteller: an open book */
    '<path d="M8 66l4-40q14-4 28 4v40q-14-8-32-4z" fill="#f6efdc" stroke="#7a5512" stroke-width="2"/><path d="M40 30q14-8 28-4l4 40q-18-4-32 4z" fill="#f6efdc" stroke="#7a5512" stroke-width="2"/>' +
    '<path d="M16 38h18M16 46h18M16 54h14M46 38h18M46 46h18M46 54h14" stroke="#b9ac8e" stroke-width="2"/>',
    /* Uncle Ricky: a bedtime candle in a gold holder */
    '<ellipse cx="40" cy="74" rx="22" ry="5" fill="#e8b84a" stroke="#7a5512" stroke-width="1.5"/><rect x="33" y="36" width="14" height="38" rx="2" fill="#fff6e0" stroke="#c9b48a"/>' +
    '<path d="M40 18q8 10 0 18q-8-8 0-18z" fill="#ffb347"/><path d="M40 24q4 5 0 10q-4-5 0-10z" fill="#fff2b0"/><path d="M62 74q8-4 6-12" stroke="#7a5512" stroke-width="3" fill="none"/>',
    /* La Di Da Di: a gold microphone */
    '<rect x="34" y="40" width="12" height="32" rx="3" fill="#e8b84a" stroke="#7a5512" stroke-width="1.5"/><circle cx="40" cy="32" r="11" fill="#e8b84a" stroke="#7a5512" stroke-width="1.5"/><path d="M31 30h18M31 35h18" stroke="#7a5512"/>' +
    '<path d="M60 20l3 6 6 2-6 2-3 6-3-6-6-2 6-2z" fill="#fff6c8"/>',
    /* Great Adventurer: gold rope chains with a big medallion */
    '<path d="M14 8q26 50 52 0" stroke="#e8b84a" stroke-width="4" fill="none" stroke-dasharray="5 2"/><path d="M8 8q32 62 64 0" stroke="#d6a432" stroke-width="4" fill="none" stroke-dasharray="5 2"/>' +
    '<circle cx="40" cy="58" r="16" fill="#e8b84a" stroke="#7a5512" stroke-width="2"/><text x="40" y="64" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="16" fill="#7a5512">R</text>',
    /* The Ruler: a jeweled crown, the eye patch hanging from it */
    '<path d="M12 64l6-38 12 16 10-26 10 26 12-16 6 38z" fill="#e8b84a" stroke="#7a5512" stroke-width="2" stroke-linejoin="round"/><rect x="10" y="62" width="60" height="10" rx="2" fill="#d6a432" stroke="#7a5512" stroke-width="1.5"/>' +
    '<circle cx="40" cy="50" r="4" fill="#3a6fe0"/><circle cx="26" cy="54" r="3" fill="#c8102e"/><circle cx="54" cy="54" r="3" fill="#c8102e"/>' +
    '<path d="M12 70q30-8 56-2" stroke="#111" stroke-width="1.5" fill="none"/><ellipse cx="48" cy="69" rx="8" ry="5.5" fill="#111"/>'
  ],
  clubTitle: "The Jewel Box", clubTab: "JEWELS",
  tags: ["GET FRESH CREW", "HERE WE GO", "THE RULER"],
  c1: "#ffffff", c2: "#e8b84a", c3: "#c8102e", bg: "#120a10",
  /* Baychester: the Co-op City towers, the embankment for the 5, Bartow-Pell's low roof */
  headerSvg: (function () {
    let s = '<rect x="0" y="54" width="400" height="10"/>';
    [[10, 6, 26], [44, 2, 28], [80, 10, 24], [112, 4, 28]].forEach(([x, y, w]) => s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (54 - y) + '"/>');
    s += '<rect x="160" y="44" width="110" height="10"/><path d="M180 30h70l6 8h-82z"/><rect x="186" y="38" width="58" height="8"/>';
    s += '<rect x="290" y="12" width="26" height="42"/><rect x="322" y="6" width="28" height="48"/><rect x="356" y="16" width="34" height="38"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@therulernyc", url: "https://www.instagram.com/therulernyc/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 5 to Baychester Av, up on the Dyre Avenue embankment. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "coop", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "bartow", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "story", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "corner", t: "WELCOME TO BAYCHESTER", x: "Baychester Av and Tillotson Av, under the 5. This is Slick Rick's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Children's Story", id: "HjNTu8jdukA", cuts: [60.3, 97.7, 144.5], qs: [
      [
        ["Who do the kids ask for a bedtime story?", "Uncle Ricky", "Uncle Dougie", "Grandpa"],
        ["Rick tells the kids to get to bed while he gets the...", "Storybook", "Blanket", "Milk"],
        ["\"Y'all ___ in?\"", "Tucked", "Locked", "Settled"],
        ["Once upon a time, people wore...", "Pajamas", "Suits", "Sneakers"],
        ["Back then people lived life...", "Slow", "Fast", "Large"],
        ["When laws were stern and justice...", "Stood", "Slept", "Ran"],
        ["There lived a little boy who was...", "Misled", "Lost", "Late"]
      ],
      [
        ["He cold dashed and ran around the...", "Block", "Park", "Corner"],
        ["The cop radios in to another...", "Lady cop", "Detective", "Sergeant"],
        ["He ran by a...", "Tree", "Store", "Bus"],
        ["He decided he'd head for the...", "Subway stations", "Bus stop", "River"],
        ["She was coming, so he made a...", "Left", "Right", "U-turn"],
        ["He was running top speed till he was out of...", "Breath", "Town", "Shoes"],
        ["Then he made his move to an abandoned...", "Building", "Car", "Lot"]
      ],
      [
        ["He ran up the stairs up to the...", "Top floor", "Roof", "Basement"],
        ["He raced up the block doing...", "83", "55", "100"],
        ["He crashed into a tree near...", "University", "The Concourse", "The park"],
        ["He escaped alive, though the car was...", "Battered", "Smoking", "Brand new"],
        ["Deep in his heart, he knew he was...", "Wrong", "Lost", "Caught"],
        ["Sirens sounded, he seemed...", "Astounded", "Excited", "Bored"],
        ["Before long the little boy got...", "Surrounded", "Away", "Home"]
      ]
    ] },
    { title: "The Ruler's Back", locked: true, cuts: [], qs: [] },
    { title: "Hey Young World", locked: true, cuts: [], qs: [] },
    { title: "Mona Lisa", locked: true, cuts: [], qs: [] },
    { title: "Teenage Love", locked: true, cuts: [], qs: [] }
  ]
};
