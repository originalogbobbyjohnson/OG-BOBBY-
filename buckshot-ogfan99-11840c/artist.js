/* OG FAN 99 – Buckshot (Crown Heights, Brooklyn) — artist settings */
window.CFG = {
  name: "Buckshot", nameUpper: "BUCKSHOT", short: "BUCK",
  hood: "Crown Heights", hoodUpper: "CROWN HEIGHTS", boro: "Brooklyn",
  saveKey: "ogfan99buckshot1",
  /* start as a Shorty (Buckshot Shorty), climb through the Black Moon / Buckshot album titles, end as Black Moon itself */
  startRank: "Shorty", ranks: ["Enta Da Stage", "Chemistry", "Survival Skills", "Total Eclipse", "The Formula"], topRank: "Black Moon",
  /* props, straight from "Who Got Da Props?" */
  point: "Prop", points: "Props",
  rankRewards: {
    "Enta Da Stage": { bongs: 5, line: "You stepped on the stage. The crowd is watching." },
    "Chemistry": { bongs: 10, line: "You and the beat got chemistry now." },
    "Survival Skills": { bongs: 15, line: "Boot Camp trained. You know how to make it." },
    "Total Eclipse": { bongs: 20, line: "The moon is up and you're blocking out the rest." },
    "The Formula": { bongs: 25, line: "You run all of Crown Heights." }
  },
  trophyArt: [
    /* Shorty: a little knit skully */
    '<path d="M16 66q0-40 24-40t24 40z" fill="#2a4f7a" stroke="#14273d" stroke-width="2"/><rect x="12" y="62" width="56" height="12" rx="3" fill="#f2c94c" stroke="#7a5512" stroke-width="2"/>' +
    '<path d="M24 62q2-22 16-30M40 32v30M56 62q-2-22-16-30" fill="none" stroke="#1d3a5c" stroke-width="1.5"/><circle cx="40" cy="24" r="6" fill="#f2c94c" stroke="#7a5512" stroke-width="1.5"/>',
    /* Enta Da Stage: a mic on its stand */
    '<rect x="38" y="44" width="4" height="32" fill="#9aa0a8"/><path d="M26 78h28" stroke="#6b7280" stroke-width="4" stroke-linecap="round"/>' +
    '<rect x="30" y="16" width="20" height="32" rx="10" fill="#f2c94c" stroke="#7a5512" stroke-width="2"/><path d="M32 24h16M32 30h16M32 36h16" stroke="#7a5512" stroke-width="1.2"/>',
    /* Chemistry: a beaker bubbling */
    '<path d="M32 18h16v18l14 34q2 8-6 8H24q-8 0-6-8l14-34z" fill="#e8f0ff" stroke="#3a4a6a" stroke-width="2"/>' +
    '<path d="M22 60h36l4 10q2 6-4 6H22q-6 0-4-6z" fill="#7cf29a"/><circle cx="34" cy="52" r="3" fill="#7cf29a"/><circle cx="44" cy="44" r="2" fill="#7cf29a"/><rect x="30" y="14" width="20" height="5" rx="2" fill="#3a4a6a"/>',
    /* Survival Skills: a brass compass */
    '<circle cx="40" cy="48" r="26" fill="#f2c94c" stroke="#7a5512" stroke-width="3"/><circle cx="40" cy="48" r="19" fill="#f4efe6"/>' +
    '<path d="M40 31l6 17-6 17-6-17z" fill="#ee352e"/><path d="M40 48l6 0-6 17-6-17z" fill="#2a4f7a"/><circle cx="40" cy="48" r="3" fill="#333"/><rect x="36" y="16" width="8" height="7" rx="2" fill="#7a5512"/>',
    /* Total Eclipse: a dark disc with a bright corona */
    '<g stroke="#f2c94c" stroke-width="3" stroke-linecap="round">' + [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => '<path d="M40 46 l0 -30" transform="rotate(' + a + ' 40 46)"/>').join("") + '</g>' +
    '<circle cx="40" cy="46" r="20" fill="#fff4cc"/><circle cx="40" cy="46" r="18" fill="#0a0c18"/>',
    /* The Formula: a gold record */
    '<circle cx="40" cy="46" r="28" fill="#f2c94c" stroke="#7a5512" stroke-width="2"/><circle cx="40" cy="46" r="20" fill="none" stroke="#c9a23a" stroke-width="1"/><circle cx="40" cy="46" r="13" fill="none" stroke="#c9a23a" stroke-width="1"/>' +
    '<circle cx="40" cy="46" r="8" fill="#2a4f7a"/><circle cx="40" cy="46" r="2" fill="#0a0c18"/>',
    /* Black Moon: the dark moon with its blue rim and stars */
    '<circle cx="40" cy="44" r="32" fill="#8fb3ff" opacity=".3"/><circle cx="40" cy="44" r="26" fill="#0a0c18" stroke="#8fb3ff" stroke-width="3"/>' +
    '<path d="M24 34a20 20 0 0 1 16-10" fill="none" stroke="#c8d8ff" stroke-width="2"/>' +
    '<path d="M12 14l2 5 5 2-5 2-2 5-2-5-5-2 5-2zM68 64l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill="#f2c94c"/>'
  ],
  clubTitle: "The Boot Camp", clubTab: "CAMP",
  tags: ["BOOT CAMP CLIK", "WHO GOT DA PROPS", "BUCKSHOT SHORTY"],
  c1: "#f2c94c", c2: "#8fb3ff", c3: "#7cf29a", bg: "#0b0d1a",
  /* Crown Heights row houses with the armory towers and the moon above */
  headerSvg: '<g fill="#f7f3ea">' +
    '<circle cx="330" cy="16" r="11" fill="none" stroke="#f7f3ea" stroke-width="3"/>' +
    [[0, 34], [40, 30], [80, 36], [120, 28], [250, 32], [290, 30], [330, 36], [370, 30]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="38" height="' + (64 - y) + '"/>').join("") +
    '<rect x="160" y="30" width="80" height="34"/><rect x="150" y="16" width="20" height="48"/><rect x="230" y="16" width="20" height="48"/>' +
    [150, 157, 164, 230, 237, 244].map(x => '<rect x="' + x + '" y="11" width="5" height="6"/>').join("") +
    '</g>',
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 3 or the 4 to Crown Heights–Utica Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "armory", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "moon", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "stage", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO CROWN HEIGHTS", x: "Utica Avenue and St Johns Place. This is Buckshot's game.", sfx: "spray" }
  ],
  /* Only one clean, captioned upload by Buckshot himself (Good Day, Duck Down). The rest of the captioned "Buckshot" uploads are a different artist. Pitch demo: 1 playable + 4 locked. */
  episodes: [
    { title: "Good Day", id: "I42TYi0RObA", cuts: [56.8, 104.1, 131.9], qs: [
      [
        ["Otherwise known as Buckshot what?", "Shorty", "Junior", "Duck"],
        ["Your crew is a slave to what?", "The sound", "The money", "The block"],
        ["The sound was meant for your what?", "Mind", "Feet", "Heart"],
        ["If you do, then you're what?", "Paid", "Famous", "Free"],
        ["If not, then you're what?", "Broke", "Lost", "Done"],
        ["Same story, same plot, same what?", "Coach", "Script", "Block"],
        ["It's a good day in the what?", "Hood", "Park", "City"]
      ],
      [
        ["What does the singer answer on the hook?", "Oh, yeah", "Uh huh", "Alright"],
        ["Who is with him at the start of verse 2?", "His crew", "His brother", "His DJ"],
        ["You can stay or you can what?", "Dip", "Sleep", "Shine"],
        ["He doesn't play with a what?", "Flip", "Fool", "Trick"],
        ["See the tip for the what?", "Ice", "Gold", "Bill"],
        ["When the price go up, you can get it how many times?", "Twice", "Once", "Three times"],
        ["He's up and he's what?", "Smiling", "Shining", "Rising"]
      ],
      [
        ["He's Coney with what?", "Island", "Avenue", "Beach"],
        ["You hot like a scully in which month?", "June", "July", "August"],
        ["Hot like a what in June?", "A scully", "A hoodie", "A coat"],
        ["It's another tune from the what?", "Moon", "Sun", "Stars"],
        ["Let me ___ to it.", "Step", "Get", "Move"],
        ["What does he shout after the hook?", "Let's go", "Hold up", "Wake up"],
        ["What kind of day is it?", "A good day", "A long day", "A cold day"]
      ]
    ] },
    { title: "Hey", locked: true, cuts: [], qs: [] },
    { title: "I Got Cha Opin", locked: true, cuts: [], qs: [] },
    { title: "How Many MC's...", locked: true, cuts: [], qs: [] },
    { title: "Who Got Da Props?", locked: true, cuts: [], qs: [] }
  ]
};
