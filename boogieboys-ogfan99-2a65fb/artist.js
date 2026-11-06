/* Boogie Boys game (NYC map, Manhattan: Harlem — "We're from Harlem" on This Is Us). CLEAN set, 4 songs.
   Timings: A Fly Girl = lrclib synced lyrics matched to the official Boogie Boys upload (354 s, same length).
   The official uploads of the other songs have no captions, so those use the same songs' video/fan uploads whose YouTube
   auto-captions were read in the player (CC on); You Ain't Fresh and This Is Us words checked against lrclib plain lyrics,
   Share My World has no lyric text anywhere, so only clearly captioned phrases are asked. No curses in any song up to its last cut.
   Group verses (Boogie Knight, Romeo J.D., Lil' Rahiem) all count; no guests. */
window.CFG = {
  name: "Boogie Boys", nameUpper: "BOOGIE BOYS", short: "BOOGIE",
  hood: "Harlem", hoodUpper: "HARLEM", boro: "Manhattan",
  saveKey: "ogfan99boogieboys1",
  startRank: "Big Bonehead",
  ranks: ["Gentleman", "Fly Dancer", "High Post", "Rich and Famous", "Romeo Knight"],
  topRank: "Boogie Knight",
  point: "Kangol", points: "Kangols",
  rankRewards: {
    "Gentleman": { bongs: 5, line: "Good clean fun. You're down with the program." },
    "Fly Dancer": { bongs: 10, line: "Fly enough to mingle. Now hit the floor." },
    "High Post": { bongs: 15, line: "Gold fingernails, high post. Look at you now." },
    "Rich and Famous": { bongs: 20, line: "Living the lifestyle. Somebody pull up the Rolls." },
    "Romeo Knight": { bongs: 25, line: "You run all of Harlem." }
  },
  trophyArt: [
    '<ellipse cx="40" cy="50" rx="20" ry="24" fill="#e2dccd" stroke="#8a8478" stroke-width="2"/><circle cx="40" cy="22" r="10" fill="#e2dccd" stroke="#8a8478" stroke-width="2"/><path d="M30 46q10 6 20 0" stroke="#8a8478" stroke-width="2" fill="none"/><rect x="34" y="72" width="12" height="6" fill="#8a8478"/>',
    '<path d="M20 30h40v6h-40z" fill="#1b1b1b"/><path d="M28 14h24l4 16h-32z" fill="#1b1b1b"/><path d="M40 36l-12 40h24z" fill="#ffd23f" stroke="#8a6a00" stroke-width="1.5"/><circle cx="40" cy="48" r="3" fill="#fff"/>',
    '<ellipse cx="40" cy="70" rx="24" ry="6" fill="#ff3fa4" opacity=".4"/><path d="M40 16q-14 10-8 30q4 14 8 26q4-12 8-26q6-20-8-30z" fill="#ff3fa4" stroke="#8a1f5a" stroke-width="2"/><circle cx="58" cy="26" r="2" fill="#7df9ff"/><circle cx="20" cy="34" r="2" fill="#7df9ff"/>',
    '<path d="M22 70v-30q0-8 6-8h4v38zM36 70v-42q0-6 4-6t4 6v42zM48 70v-34h6q4 0 4 8v26z" fill="#ffd23f" stroke="#8a6a00" stroke-width="1.5"/><rect x="18" y="70" width="44" height="8" rx="3" fill="#c9ced6"/>',
    '<rect x="14" y="44" width="52" height="18" rx="8" fill="#e9e6df" stroke="#8b93a1" stroke-width="2"/><path d="M22 44l8-14h20l8 14z" fill="#e9e6df" stroke="#8b93a1" stroke-width="2"/><circle cx="24" cy="64" r="6" fill="#1b1b1b"/><circle cx="56" cy="64" r="6" fill="#1b1b1b"/><rect x="36" y="20" width="8" height="10" fill="#ffd23f"/>',
    '<path d="M40 14l18 10v20q0 20-18 30q-18-10-18-30v-20z" fill="#7df9ff" stroke="#1a6a7a" stroke-width="2"/><path d="M40 26v36M28 40h24" stroke="#0b0a18" stroke-width="3"/><circle cx="40" cy="40" r="4" fill="#ff3fa4"/>',
    '<path d="M16 40l6-24l10 12l8-16l8 16l10-12l6 24z" fill="#ffd23f" stroke="#8a6a00" stroke-width="1.5"/><circle cx="40" cy="12" r="3" fill="#ff3fa4"/><circle cx="40" cy="60" r="16" fill="#111" stroke="#555" stroke-width="2"/><circle cx="40" cy="60" r="5" fill="#7df9ff"/>'
  ],
  clubTitle: "The Gold Watch Room", clubTab: "WATCH",
  tags: ["ROMEO KNIGHT", "YOU AIN'T FRESH", "BOOGIE KNIGHT"],
  c1: "#7df9ff", c2: "#ff3fa4", c3: "#ffd23f", bg: "#0b0a18",
  headerSvg: '<g fill="#f7f3ea"><rect x="6" y="24" width="60" height="40"/><rect x="72" y="34" width="52" height="30"/><rect x="128" y="20" width="64" height="44"/><path d="M200 64v-28h70v28z"/><path d="M220 36q15-14 30 0z"/><rect x="280" y="28" width="56" height="36"/><rect x="342" y="38" width="52" height="26"/></g>',
  socials: [],
  rooms: [
    { scene: "bbstop", t: "PRESS PLAY", x: "Take the M10 up Frederick Douglass Blvd to W 149 St. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "bbriver", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "bbrenny", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "bbsmalls", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "bbcorner", t: "WELCOME TO HARLEM", x: "Frederick Douglass Blvd and W 150 St, the Dunbar behind. This is the Boogie Boys' game.", sfx: "spray" }
  ],
  songs: [
    { title: "This Is Us", id: "6W7vv6pDmBk", cuts: [29.5, 79.3, 104.5], qs: [
      [
        ["\"Let me talk about a little reverse\" what?", "Psychology", "Philosophy", "Physics"],
        ["People try to make you think you've got to be what to enjoy rap?", "Hard", "Rich", "Loud"],
        ["\"In order to enjoy rap and enjoy\" what?", "Yourself", "The music", "The party"],
        ["\"Well, we're the\" who?", "Boogie Boys", "Fat Boys", "Beastie Boys"],
        ["\"We're the Boogie Boys, mainly\" who?", "Romeo Knight", "Boogie Knight", "Lil' Rahiem"],
        ["\"You don't have to get bugged out or act\" what?", "Ill", "Up", "Tough"],
        ["\"We into having good and\" what \"fun\"?", "Clean", "Loud", "Wild"],
        ["\"If you down with that program, then you down with\" who?", "Us", "Them", "Everybody"]
      ],
      [
        ["Who does he call \"my man\"?", "Romeo J.D.", "Romeo Knight", "Lil' Rahiem"],
        ["If you like that peace, put what in the air?", "That hand", "Your hat", "A lighter"],
        ["\"If you're into peace, say\" what?", "Ho", "Yeah", "Peace"],
        ["\"We're from\" where?", "Harlem", "Brooklyn", "The Bronx"],
        ["\"Life ain't all that, so\" what?", "Chill", "Smile", "Hurry"],
        ["\"We work for ours, even if we look\" what?", "Plain", "Rich", "Tired"],
        ["\"There's a God in the\" what?", "Sky", "Church", "City"],
        ["\"If we do the right thing, we're\" what?", "Good to go", "Gonna win", "On top"]
      ],
      [
        ["\"So that's what I do, my name is\" who?", "Boogie Knight", "Romeo J.D.", "Lil' Rahiem"],
        ["\"With a word and a\" what?", "Rhythm", "Rhyme", "Smile"],
        ["\"For the ladies, I'm a\" what?", "Gentleman", "Player", "Poet"],
        ["\"A gentleman, a lover, a\" what?", "Friend", "Fighter", "Star"],
        ["\"Too bad if you ain't with the\" what?", "Program", "Party", "Crew"],
        ["\"We're taking one\" what \"at a time\"?", "Day", "Step", "Song"],
        ["\"One day at a time as a\" what?", "Must", "Team", "Joke"],
        ["\"We're Romeo Knight and this is\" what?", "Us", "It", "Harlem"]
      ]
    ] },
    { title: "Share My World", id: "96OeBcvhrys", start: 36.4, cuts: [73.2, 119.9, 170], qs: [
      [
        ["\"Looking for a girl, a very\" what \"girl\"?", "Special", "Pretty", "Lucky"],
        ["What does he want that girl to share?", "My world", "My name", "My ride"],
        ["\"Many, many guys try to\" what?", "Perpetrate", "Participate", "Hesitate"],
        ["\"Many, many girls try to play the\" what?", "Game", "Field", "Fool"],
        ["\"When they know that having a\" what \"can be a pain\"?", "Man", "Job", "Car"],
        ["Having a man can be a what?", "Pain", "Gift", "Joke"],
        ["\"People everywhere try to play the\" what?", "Role", "Hero", "Fool"],
        ["Where is the feeling always?", "In the soul", "In the heart", "In the air"]
      ],
      [
        ["\"When you're doing that, I'll be doing\" what?", "This", "Nothing", "Time"],
        ["He gives his girl a sweet and a what?", "Kiss", "Hug", "Ring"],
        ["\"Hold her really\" what?", "Close", "Tight", "Long"],
        ["\"I'm a fly guy and she's a\" what?", "Fly girl", "Sweet girl", "Shy girl"],
        ["Where does he take her first?", "To the park", "To the movies", "To the mall"],
        ["He takes her on a trip way down to where?", "Miami", "Paris", "Jamaica"],
        ["\"Way down to Miami on a\" what?", "Holiday", "Plane", "Weekend"],
        ["Love is like a trip to the what?", "Milky Way", "Moon", "Beach"]
      ],
      [
        ["All his life he's wished for a real what girl?", "Sincere", "Rich", "Famous"],
        ["A sincere girl to make his what?", "Wife", "Day", "Dinner"],
        ["\"Hold me tight and love me\" what?", "Right", "Long", "True"],
        ["What does he want her to fix him in bed?", "Breakfast", "Dinner", "A drink"],
        ["\"Make my nights seem longer and my days real\" what?", "Sunny", "Short", "Funny"],
        ["\"Bring out the little\" what \"in me\"?", "Kid", "Man", "Star"],
        ["\"Make me see how I should really\" what?", "Be", "Live", "Dress"],
        ["\"All the way up from the heavens\" what?", "Above", "Below", "Away"]
      ]
    ] },
    { title: "You Ain't Fresh", id: "QlEuZDyeMtU", start: 49.9, cuts: [71.9, 133.7, 171.2], qs: [
      [
        ["\"You big pimple on your\" what?", "Nose", "Chin", "Forehead"],
        ["\"You need to see the\" who, \"that you can bet\"?", "Barber", "Doctor", "Dentist"],
        ["\"When you get a girl, you boast and you\" what?", "Brag", "Lie", "Shout"],
        ["Every girl you have needs a what?", "Paper bag", "New man", "Makeover"],
        ["\"You big\" what?", "Bonehead", "Meathead", "Knucklehead"],
        ["\"You silly\" what?", "Rabbit", "Goose", "Clown"],
        ["\"You need some advice, please kick the\" what?", "Habit", "Bucket", "Ball"],
        ["\"You better stop thinking you run the\" what?", "Show", "Block", "Crew"]
      ],
      [
        ["\"You ain't fresh, uh-uh, nah\" what?", "Baby", "Way", "Never"],
        ["\"Girl, you look\" what, \"but you ain't that fly\"?", "Fly", "Fine", "Sharp"],
        ["\"You can't say hi when the\" who \"says hi\"?", "Guy", "Teacher", "Crowd"],
        ["\"I don't mean to squeal, but I'm gonna\" what?", "Tell you", "Leave you", "Show you"],
        ["What does she wear that ain't really real?", "That hair", "Those lashes", "That smile"],
        ["\"Your breath is bad, your pants are\" what?", "Dusty", "Ripped", "Baggy"],
        ["Where is the big bunion?", "On your big toe", "On your heel", "On your thumb"],
        ["\"I'mma tell it to your\" what?", "Face", "Friends", "Mama"]
      ],
      [
        ["\"Hey, you stinking\" who?", "Sam", "Pete", "Larry"],
        ["\"You smell just like two rotten\" what?", "Eggs", "Apples", "Fish"],
        ["\"I know times are hard, but it ain't that\" what?", "Hard", "Bad", "Rough"],
        ["What should he go buy himself?", "Right Guard", "Soap", "Cologne"],
        ["\"I saw many things I couldn't\" what?", "Ignore", "Explain", "Forget"],
        ["\"Never saw a face like yours\" when?", "Before", "Again", "Today"],
        ["\"It's like a bulldog in an ugly\" what?", "Show", "Contest", "Sweater"],
        ["\"I'mma tell it to your face so that you\" what?", "Know", "Go", "Learn"]
      ]
    ] },
    { title: "A Fly Girl", id: "8oCct4vy5-s", start: 36.2, cuts: [73.9, 171.8, 260], qs: [
      [
        ["A fly girl wants you to see her name, her game and her what?", "Ability", "Family", "Money"],
        ["How many gold teeth does she have?", "Two", "One", "Four"],
        ["\"The guys are on her strap, she tends to act\" what?", "Funny", "Shy", "Mean"],
        ["She's got Gazelle and a what?", "B-bag", "Kangol", "Fur coat"],
        ["\"You're not the prettiest thing, girl, but that's\" what?", "Okay", "Too bad", "A shame"],
        ["What makes her fresh anyway?", "Painted-on jeans", "Gold sneakers", "Her new hat"],
        ["Her father is a doctor, a lawyer, or a what?", "King", "Judge", "Banker"],
        ["\"Take me in your car, let's go for a\" what?", "Swing", "Ride", "Spin"],
        ["\"One day you're gonna be at the top of the\" what?", "World", "Charts", "Building"]
      ],
      [
        ["\"My name is Boogie Knight and yes, I'm a\" what?", "Capricorn", "Leo", "Taurus"],
        ["\"The girls who please are Geminis, Scorpio and yes\" what?", "Pisces", "Virgos", "Libras"],
        ["He doesn't like the girl who eats the what?", "Puppy Chow", "Candy corn", "Fish sticks"],
        ["What does he hate most?", "Dirty nails", "Bad breath", "Loud music"],
        ["What kind of fingernails are high post?", "Gold", "Pink", "Long"],
        ["Girls look fly in what?", "Kangols", "Sneakers", "Fur coats"],
        ["What can't he stand?", "Fluorescent socks", "Big earrings", "Flat shoes"],
        ["Sandy brown hair and light brown what?", "Eyes", "Skin", "Boots"],
        ["\"Like a breeze on the scene, you're just too\" what?", "Cool", "Fresh", "Sweet"]
      ],
      [
        ["\"Well, I'm\" who, \"and I have learned\"?", "Rome J.D.", "Boogie Knight", "Lil' Rahiem"],
        ["\"Fly girl is a name that you must\" what?", "Earn", "Spell", "Change"],
        ["\"Fly girl's a girl who speaks her\" what?", "Mind", "Truth", "Language"],
        ["\"Gold watch, gold ring, and a neck full of\" what?", "Pearls", "Chains", "Diamonds"],
        ["Where is her perfume from?", "France", "Italy", "Spain"],
        ["She gave you a number. What was it?", "Dial-a-joke", "Disconnected", "Her mom's"],
        ["You're her choice till another man comes in a fly what?", "Rolls-Royce", "Cadillac", "Mercedes"],
        ["\"You live a lifestyle of the rich and\" what?", "Famous", "Fabulous", "Faithful"],
        ["\"Queen of the\" what?", "Nile", "Night", "Ball"]
      ]
    ] }
  ]
};
