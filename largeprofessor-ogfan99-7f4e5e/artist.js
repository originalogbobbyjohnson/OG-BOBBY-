/* Large Professor: Flushing, Queens. Extra P, Large Pro, the Mad Scientist, the live guy with glasses; Main Source, Breaking Atoms. */
window.CFG = {
  name: "Large Professor", nameUpper: "LARGE PROFESSOR", short: "EXTRAP",
  hood: "Flushing", hoodUpper: "FLUSHING", boro: "Queens",
  saveKey: "ogfan99largeprofessor1",
  /* everybody starts out fakin' the funk; climb the Main Source titles and his own nicknames up to Extra P */
  startRank: "Funk Faker",
  ranks: ["Just Hangin' Out", "Live at the Barbeque", "Breaking Atoms", "Live Guy with Glasses", "The Mad Scientist"],
  topRank: "Extra P",
  point: "Atom", points: "Atoms",
  rankRewards: {
    "Just Hangin' Out": { bongs: 5, line: "Just hangin' out. You found the record crates." },
    "Live at the Barbeque": { bongs: 10, line: "Live at the Barbeque. You got a plate and a seat by the speakers." },
    "Breaking Atoms": { bongs: 15, line: "Breaking Atoms. You split the beat down to the drum." },
    "Live Guy with Glasses": { bongs: 20, line: "The live guy with glasses. Everybody in Flushing knows the frames." },
    "The Mad Scientist": { bongs: 25, line: "You run all of Flushing." }
  },
  trophyArt: [
    /* Funk Faker: a cracked record */
    '<circle cx="40" cy="44" r="30" fill="#1b1b1f" stroke="#555" stroke-width="1.5"/><circle cx="40" cy="44" r="22" fill="none" stroke="#333"/><circle cx="40" cy="44" r="14" fill="none" stroke="#333"/>' +
    '<circle cx="40" cy="44" r="9" fill="#ffb347"/><circle cx="40" cy="44" r="2" fill="#111"/>' +
    '<path d="M40 14l-4 12 6 6-5 10 7 8-3 10" fill="none" stroke="#e8e2d6" stroke-width="2" stroke-linejoin="round"/>',
    /* Just Hangin' Out: a park bench under a lamp */
    '<rect x="58" y="14" width="3" height="66" fill="#3a4a3a"/><path d="M54 14h11l-2 6h-7z" fill="#ffe7a8"/>' +
    '<rect x="10" y="44" width="44" height="5" rx="1" fill="#7a4b2a"/><rect x="10" y="52" width="44" height="5" rx="1" fill="#7a4b2a"/>' +
    '<rect x="10" y="62" width="44" height="5" rx="1" fill="#8b5a32"/><path d="M14 44v36M50 44v36" stroke="#2c3a2c" stroke-width="3"/>',
    /* Live at the Barbeque: a kettle grill with smoke */
    '<path d="M30 30q4-6 0-12M40 28q4-6 0-12M50 30q4-6 0-12" stroke="#cfd6de" stroke-width="2" fill="none"/>' +
    '<path d="M14 40h52q0 22-26 22T14 40z" fill="#1f2a36" stroke="#6b7a88" stroke-width="1.5"/><path d="M16 40h48" stroke="#c9a24a" stroke-width="2"/>' +
    '<path d="M24 36l4-4M36 36l4-4M48 36l4-4" stroke="#e8452c" stroke-width="2"/>' +
    '<path d="M28 60l-8 20M52 60l8 20M40 62v18" stroke="#6b7a88" stroke-width="2.5"/>',
    /* Breaking Atoms: an atom with orbits and a split nucleus */
    '<ellipse cx="40" cy="44" rx="30" ry="11" fill="none" stroke="#7cf29a" stroke-width="2"/>' +
    '<ellipse cx="40" cy="44" rx="30" ry="11" fill="none" stroke="#9fd0ff" stroke-width="2" transform="rotate(60 40 44)"/>' +
    '<ellipse cx="40" cy="44" rx="30" ry="11" fill="none" stroke="#ffb347" stroke-width="2" transform="rotate(-60 40 44)"/>' +
    '<circle cx="36" cy="44" r="6" fill="#e8452c"/><circle cx="45" cy="42" r="5" fill="#ffd23f"/><circle cx="70" cy="44" r="3" fill="#7cf29a"/>',
    /* Live Guy with Glasses: big round frames */
    '<circle cx="24" cy="44" r="15" fill="#cfe9f4" fill-opacity=".35" stroke="#1a1a1a" stroke-width="5"/>' +
    '<circle cx="56" cy="44" r="15" fill="#cfe9f4" fill-opacity=".35" stroke="#1a1a1a" stroke-width="5"/>' +
    '<path d="M36 40q4-5 8 0" stroke="#1a1a1a" stroke-width="4" fill="none"/><path d="M9 40l-6-4M71 40l6-4" stroke="#1a1a1a" stroke-width="4"/>' +
    '<path d="M18 36l6-4M50 36l6-4" stroke="#fff" stroke-width="2" opacity=".8"/>',
    /* The Mad Scientist: a bubbling flask */
    '<path d="M32 12h16M35 12v20L18 70q-2 8 6 8h32q8 0 6-8L45 32V12" fill="#cfe9f4" fill-opacity=".25" stroke="#e8f4f8" stroke-width="2"/>' +
    '<path d="M24 56h32l6 14q2 8-6 8H24q-8 0-6-8z" fill="#7cf29a"/>' +
    '<circle cx="34" cy="64" r="3" fill="#d6ffe2"/><circle cx="46" cy="60" r="2" fill="#d6ffe2"/><circle cx="40" cy="44" r="2.5" fill="#7cf29a"/><circle cx="44" cy="26" r="2" fill="#7cf29a" opacity=".7"/>',
    /* Extra P: a gold drum machine with pads and the name plate */
    '<rect x="8" y="22" width="64" height="54" rx="4" fill="#e8b84a" stroke="#7a5512" stroke-width="2"/>' +
    '<rect x="14" y="28" width="30" height="10" rx="1" fill="#1b2a20"/><text x="29" y="36" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="7" fill="#7cf29a">EXTRA P</text>' +
    '<circle cx="54" cy="33" r="4" fill="#3a2a10"/><circle cx="64" cy="33" r="4" fill="#3a2a10"/>' +
    '<rect x="14" y="44" width="12" height="12" rx="1.5" fill="#2a2d33"/><rect x="28" y="44" width="12" height="12" rx="1.5" fill="#2a2d33"/><rect x="42" y="44" width="12" height="12" rx="1.5" fill="#2a2d33"/><rect x="56" y="44" width="12" height="12" rx="1.5" fill="#ffb347"/>' +
    '<rect x="14" y="58" width="12" height="12" rx="1.5" fill="#2a2d33"/><rect x="28" y="58" width="12" height="12" rx="1.5" fill="#7cf29a"/><rect x="42" y="58" width="12" height="12" rx="1.5" fill="#2a2d33"/><rect x="56" y="58" width="12" height="12" rx="1.5" fill="#2a2d33"/>'
  ],
  clubTitle: "The Laboratory", clubTab: "LABS",
  tags: ["MAIN SOURCE", "EXTRA P", "MAD SCIENTIST"],
  c1: "#ffb347", c2: "#7cf29a", c3: "#9fd0ff", bg: "#0c1410",
  /* Flushing: Town Hall's pinnacles and gable, low roofs, Bowne House's chimney, Kissena willows */
  headerSvg: (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    s += '<rect x="140" y="30" width="100" height="26"/><path d="M140 30l50-18 50 18z"/>';
    [140, 168, 212, 240].forEach(x => s += '<rect x="' + (x - 3) + '" y="18" width="6" height="38"/><path d="M' + (x - 4) + ' 18l4-10 4 10z"/>');
    for (let x = 0; x < 130; x += 26) s += '<rect x="' + x + '" y="' + (38 + (x % 3) * 4) + '" width="22" height="20"/>';
    s += '<path d="M262 56v-16l30-12h40l30 12v16z"/><rect x="300" y="18" width="10" height="14"/>';
    s += '<ellipse cx="384" cy="36" rx="18" ry="10"/><rect x="382" y="40" width="4" height="16"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "X", handle: "@PLargePro", url: "https://x.com/PLargePro" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 7 to Flushing-Main St, the last stop. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "townhall", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "bowne", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "kissena", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "parachute" },
    { scene: "corner", t: "WELCOME TO FLUSHING", x: "Main St and Northern Blvd, the heart of Flushing. This is Large Professor's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Key to the City", id: "e4D9iFtaCWI", cuts: [40.9, 84.7, 131.9], qs: [
      [
        ["What does he ask the DJ to pick up?", "The pace", "The mic", "The volume"],
        ["The lights go up and down which street?", "Broadway", "Main St", "Northern Blvd"],
        ["The sound comes straight from the...?", "Underground", "Rooftop", "Radio"],
        ["Through the clouds to the...?", "Crowds", "Stars", "Streets"],
        ["He won't fold under...?", "Pressure", "Weather", "Lights"],
        ["From newborn babies to them...?", "Ancestors", "Teachers", "Elders"],
        ["What does he hold?", "The key to the city", "The key to the lab", "The key to the door"]
      ],
      [
        ["Who does he tell to wake up?", "The cavalry", "The block", "The crowd"],
        ["He tells them to call all...?", "Cars", "Crews", "DJs"],
        ["Serving hardcore streets and...?", "Boulevards", "Avenues", "Highways"],
        ["Industry rules don't apply to the...?", "Ministry", "Laboratory", "Library"],
        ["What kind of rap bites the dust?", "Commercial", "Battle", "Underground"],
        ["He kindly asks you to...?", "Move over", "Turn it up", "Sit down"],
        ["He walks around where with the key?", "Town", "The park", "The block"]
      ],
      [
        ["Which two cities come after the hook?", "Paris and Berlin", "London and Tokyo", "Rome and Madrid"],
        ["Where is he standing?", "Top of the roof", "On the train", "In the park"],
        ["What is he staring at?", "The horizon", "The crowd", "The river"],
        ["How do the skies look?", "Bright blue", "Gray", "Orange"],
        ["The wise men keep their heads...?", "High", "Down", "Low"],
        ["He comes straight up from which borough?", "Queens", "Brooklyn", "The Bronx"]
      ]
    ] },
    { title: "In The Scrolls", id: "2_ZC1T48mRw", cuts: [58.5, 87.4, 112.5], qs: [
      [
        ["What year does the story start?", "1994", "1988", "2001"],
        ["The rap world was reborn through which album?", "Illmatic", "Breaking Atoms", "Stillmatic"],
        ["Sun, moon and stars...?", "Align", "Fall", "Shine"],
        ["Where are the stars born?", "Queensbridge", "Flushing", "Jamaica"],
        ["Who put him on?", "Marley Marl", "Eric B.", "Pete Rock"],
        ["He returned the favor for his...?", "Neighbor", "Brother", "Teacher"],
        ["Nobody does it better than...?", "Us", "Queens", "Them"]
      ],
      [
        ["What do they ask at the door?", "What you waiting for?", "Who's there?", "Where you going?"],
        ["Which record company is the meeting with?", "Warner Brothers", "Def Jam", "Motown"],
        ["Which train comes up?", "The 7", "The E", "The A"],
        ["What hero was on the train?", "Turkey and cheese", "Chopped cheese", "Pastrami"],
        ["Who noticed the pain?", "The world", "The block", "The label"],
        ["Phil was the best what he ever heard?", "Rapper", "DJ", "Producer"]
      ],
      [
        ["Where did he lose it before the deal?", "On the train", "In the studio", "At the park"],
        ["He lost it before he got a...?", "Deal", "Car", "Chain"],
        ["He kept y'all on your...?", "Toes", "Feet", "Knees"],
        ["Hooks, styles and flows and killer...?", "Shows", "Beats", "Rhymes"],
        ["Illmatic was written in the...?", "Scroll", "Stars", "Wall"],
        ["Nobody does it better than...?", "Us", "You", "Them"]
      ]
    ] },
    { title: "Forever (Gensu Dean feat. Large Professor)", id: "7WY-L-4stoE", start: 148, cuts: [204.4, 264.7, 310.2], qs: [
      [
        ["First, what dropped?", "The temperature", "The beat", "The mic"],
        ["Then the lights got...?", "Dim", "Bright", "Red"],
        ["What were they polishing in their spare time?", "Portraits", "Sneakers", "Records"],
        ["They built what strong?", "The fortress", "The crew", "The bridge"],
        ["Deep in the eye of the...?", "Storm", "Needle", "Crowd"],
        ["Where did they go down to?", "The cathedral", "The basement", "The park"],
        ["The stained glass showed images of...?", "B-boys", "Kings", "Angels"]
      ],
      [
        ["Professor on the mic, check...?", "One two", "Three four", "The levels"],
        ["One was lying in the bed...?", "Unconscious", "Smiling", "Reading"],
        ["We missed you but glad you're still...?", "Here", "Hot", "Young"],
        ["The man's crib was like a...?", "Banquet", "Museum", "Studio"],
        ["Everybody greeting, eating and giving...?", "Thanks", "Props", "Gifts"],
        ["Hold it down for real...?", "Hip hop", "Queens", "Fans"]
      ],
      [
        ["At the fork in the road he took which route?", "The right route", "The left route", "The long way"],
        ["The new rhyme comes from the...?", "Treasure chest", "Notebook", "Lab"],
        ["His mind's the...?", "Power line", "Time machine", "Gold mine"],
        ["Working on the...?", "Railroad", "Rooftop", "Record"],
        ["From Friday to...?", "Monday", "Sunday", "Tuesday"],
        ["What coins is he stacking?", "Foreign coins", "Gold coins", "Old coins"],
        ["3, 2, 1 countdown, we about to...?", "Win", "Fly", "Leave"]
      ]
    ] },
    { title: "The Mad Scientist", id: "X29NxNPHIes", cuts: [81.4, 144.3, 205.4], qs: [
      [
        ["He calls himself the Mad...?", "Scientist", "Professor", "Doctor"],
        ["Set up shop and drop this next...?", "Degree", "Record", "Album"],
        ["The live guy with...?", "Glasses", "Gold chains", "A hat"],
        ["The live guy from where?", "Flushing", "Hollis", "Corona"],
        ["He's known for programming...?", "Percussion", "Computers", "Radio"],
        ["He puts it through the S950 and...?", "Stretches it", "Erases it", "Burns it"],
        ["He's driven by everything...?", "Real", "Loud", "New"]
      ],
      [
        ["He never had a basement or an...?", "Attic", "Garage", "Backyard"],
        ["He only had an...?", "Apartment", "Studio", "Office"],
        ["A strong black rebel who loves to...?", "Track", "Travel", "Rhyme"],
        ["It's kind of loud, so...?", "Turn it up", "Turn it down", "Shut it off"],
        ["Where can't you stand still?", "His laboratory", "The subway", "The club"],
        ["Rock on the higher...?", "Plateau", "Level", "Mountain"],
        ["He'll supply a fat show...?", "Wherever I go", "Every Friday", "In Queens"]
      ],
      [
        ["Who's about to set up shop?", "Extra P", "Q-Tip", "Nas"],
        ["He'll beat the one that claims he's the...?", "Best", "King", "Boss"],
        ["Zip the...?", "Lip", "Coat", "Bag"],
        ["He's about to set it on...?", "Society", "The city", "The stage"],
        ["He knows how to...?", "Deal", "Dance", "Drive"],
        ["His reputation's full...?", "Fledged", "Grown", "Blown"]
      ]
    ] },
    { title: "I Juswannachill", id: "Kh0LFYa6InM", cuts: [79.1, 142.9, 197.5], qs: [
      [
        ["He doesn't wanna ill, he just wants to...?", "Chill", "Fly", "Build"],
        ["His hand is around a...?", "$100 bill", "Microphone", "Record"],
        ["He gets it like which jazz great?", "Dizzy Gillespie", "Miles Davis", "John Coltrane"],
        ["Not three or two but...?", "One", "Four", "Five"],
        ["He's one from which borough?", "Queens", "Brooklyn", "Manhattan"],
        ["The beat making that makes the...?", "Earthquake", "Thunder", "Fire"],
        ["Large Professor in the house, one...?", "Two", "Time", "Love"]
      ],
      [
        ["He's cool like that, matter of fact even...?", "Cooler", "Hotter", "Bigger"],
        ["Cooler, the opposite of...?", "Sun", "Snow", "Ice"],
        ["Where can you catch him joyriding?", "Kissena", "Broadway", "Main St"],
        ["Between a rock and a...?", "Hard place", "Brick wall", "Big drop"],
        ["Just like a car chase, he's...?", "Action packed", "Out of gas", "Running late"],
        ["He's trying to stack off a...?", "Contract", "Mixtape", "Paycheck"]
      ],
      [
        ["It's the return of the brother that earned...?", "Props", "Gold", "Stripes"],
        ["Who does he ask for a push?", "Record company man", "His DJ", "The radio"],
        ["He wants to swing to higher levels of...?", "Life", "Fame", "Sound"],
        ["He was frustrated from walking with the...?", "Snakes", "Crowds", "Fakes"],
        ["You can feel the beat in your...?", "Chest", "Feet", "Head"],
        ["He's blessed with the mind and...?", "Motivation", "Money", "Music"],
        ["Coming back for the hip hop...?", "Nation", "Station", "Generation"]
      ]
    ] }
  ]
};
