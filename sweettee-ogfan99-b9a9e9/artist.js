/* Sweet Tee game (NYC map, Queens: Bayside — Queens Eagle on the 2019 Queens Library hip hop panel: she "hails from Bayside"; a Queens Chronicle piece says Hollis).
   CLEAN set, 5 songs. Timings: It's My Beat (7") = lrclib synced lyrics matched to the Sweet Tee - Topic upload (278 s, same length).
   The other four Topic uploads carry no captions, so those songs use same-length fan/video uploads whose YouTube auto-captions were read
   in the player (CC on), with the words checked against lrclib plain lyrics. Stops end before any curse: It's My Beat stops before
   "cold kickin' a__" (87.5 s); On the Smooth Tip stops before "too d___ clever" (~185 s); It's Like That Y'all stops before verse 4. */
window.CFG = {
  name: "Sweet Tee", nameUpper: "SWEET TEE", short: "SWEET",
  hood: "Bayside", hoodUpper: "BAYSIDE", boro: "Queens",
  saveKey: "ogfan99sweettee1",
  startRank: "Weak One",
  ranks: ["Fanatic", "Rap Soloist", "Lyrical Mastermind", "People's Choice", "Ace Lady Rapper"],
  topRank: "Cold Queen of Hip-Hop",
  point: "Bass Bottom", points: "Bass Bottoms",
  rankRewards: {
    "Fanatic": { bongs: 5, line: "Turn up the music. Basement to attic, you're hooked." },
    "Rap Soloist": { bongs: 10, line: "All by yourself and nobody can resist it." },
    "Lyrical Mastermind": { bongs: 15, line: "Pick up a pen and you already know what to write." },
    "People's Choice": { bongs: 20, line: "All the people choose you. Five foot eight, standing ten feet tall." },
    "Ace Lady Rapper": { bongs: 25, line: "You run all of Bayside." }
  },
  trophyArt: [
    '<rect x="34" y="40" width="12" height="26" rx="6" fill="#8a8f99"/><path d="M36 50l4 6l4-8" stroke="#2a2a2a" stroke-width="1.5" fill="none"/><rect x="38" y="66" width="4" height="12" fill="#6b6f78"/><path d="M28 78h24" stroke="#6b6f78" stroke-width="3"/>',
    '<path d="M18 50a22 22 0 0 1 44 0" stroke="#ff8fc7" stroke-width="5" fill="none"/><rect x="12" y="46" width="12" height="22" rx="5" fill="#ff8fc7"/><rect x="56" y="46" width="12" height="22" rx="5" fill="#ff8fc7"/><circle cx="18" cy="57" r="3" fill="#ffd166"/><circle cx="62" cy="57" r="3" fill="#ffd166"/>',
    '<path d="M24 10l32 0l10 66h-52z" fill="#fff6c2" opacity=".35"/><rect x="34" y="34" width="12" height="22" rx="6" fill="#ffd166" stroke="#8a6a00" stroke-width="1.5"/><rect x="38" y="56" width="4" height="20" fill="#c9ced6"/><path d="M30 77h20" stroke="#c9ced6" stroke-width="3"/>',
    '<rect x="16" y="28" width="40" height="50" rx="3" fill="#f6eedd" stroke="#b9ab8e" stroke-width="2"/><path d="M22 38h28M22 46h28M22 54h20M22 62h24" stroke="#7a6a5a" stroke-width="1.5"/><path d="M62 18l6 6l-24 34l-8 3l2-8z" fill="#ff8fc7" stroke="#8a2a5a" stroke-width="1.5"/>',
    '<path d="M40 14l7 15l16 2l-12 11l3 16l-14-8l-14 8l3-16l-12-11l16-2z" fill="#ffd166" stroke="#8a6a00" stroke-width="2"/><rect x="22" y="62" width="36" height="16" rx="3" fill="#7ae7d9" stroke="#2a7a70" stroke-width="2"/><path d="M30 70h20" stroke="#2a7a70" stroke-width="2"/>',
    '<circle cx="40" cy="48" r="28" fill="#ffd166" stroke="#8a6a00" stroke-width="2"/><circle cx="40" cy="48" r="20" fill="none" stroke="#c99a2e" stroke-width="1"/><circle cx="40" cy="48" r="13" fill="none" stroke="#c99a2e" stroke-width="1"/><circle cx="40" cy="48" r="7" fill="#ff8fc7"/><circle cx="40" cy="48" r="2" fill="#1b1410"/>',
    '<path d="M16 40l6-24l10 12l8-16l8 16l10-12l6 24z" fill="#ffd166" stroke="#8a6a00" stroke-width="1.5"/><circle cx="40" cy="12" r="3" fill="#ff8fc7"/><circle cx="22" cy="16" r="2.5" fill="#7ae7d9"/><circle cx="58" cy="16" r="2.5" fill="#7ae7d9"/><rect x="34" y="44" width="12" height="20" rx="6" fill="#c9ced6" stroke="#6b6f78" stroke-width="1.5"/><rect x="38" y="64" width="4" height="12" fill="#c9ced6"/>'
  ],
  clubTitle: "The Jewelry Box", clubTab: "TEEBOX",
  tags: ["TEE TIME", "SMOOTH TIP", "SUGA"],
  c1: "#ff8fc7", c2: "#ffd166", c3: "#7ae7d9", bg: "#160a14",
  headerSvg: '<g fill="#f7f3ea"><rect x="18" y="26" width="22" height="38"/><path d="M18 26v-5h4v5h4v-5h5v5h4v-5h5v5"/><rect x="40" y="38" width="56" height="26"/><path d="M40 38v-4h5v4h6v-4h6v4h6v-4h6v4h6v-4h6v4h5v-4"/><rect x="96" y="30" width="18" height="34"/><rect x="150" y="50" width="200" height="10" rx="3"/><rect x="146" y="60" width="208" height="4"/><rect x="360" y="40" width="30" height="24"/><path d="M356 40l19-12l19 12z"/></g>',
  socials: [ { name: "Instagram", handle: "@sweetteethemc", url: "https://www.instagram.com/sweetteethemc/" } ],
  rooms: [
    { scene: "stbayside", t: "PRESS PLAY", x: "Take the LIRR Port Washington Branch to Bayside. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "sttotten", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "stmuseum", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "stalley", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "stcorner", t: "WELCOME TO BAYSIDE", x: "Bell Blvd and 35 Av, Fort Totten's tower off by the bay. This is Sweet Tee's game.", sfx: "spray" }
  ],
  songs: [
    { title: "Why Did It Have to Be Me", id: "Wn9gyR5MQDM", start: 26, cuts: [53.4, 107.5, 199], qs: [
      [
        ["\"The first day that we met, it was love at\" what?", "First sight", "First dance", "First call"],
        ["\"You were my thoughts every day and my\" what \"every night\"?", "Dreams", "Prayers", "Songs"],
        ["She felt it so strong in her heart and in her what?", "Soul", "Bones", "Head"],
        ["She thought this love would be what?", "Lifelong", "A secret", "A summer fling"],
        ["\"You were too fine and I was too\" what?", "Blind", "Shy", "Young"],
        ["What did he play games with?", "My mind", "My money", "My friends"]
      ],
      [
        ["\"I asked you time and time if there was\" what?", "Someone else", "Something wrong", "Somewhere to go"],
        ["When she asked, what did he always say?", "No", "Yes", "Maybe"],
        ["\"Didn't make a difference if you broke my heart in\" what?", "Two", "Three", "Half"],
        ["\"I could go on and on and on like a\" what?", "Chant", "Song", "Train"],
        ["Who did she call so she wouldn't be by herself?", "A friend", "Her mother", "Her sister"],
        ["\"Couldn't eat, couldn't sleep, so I\" what?", "Walked the streets", "Watched TV", "Called you"],
        ["He was a man that she wanted to what?", "Marry", "Forget", "Leave"]
      ],
      [
        ["\"You'd take my hand and we'd walk down by the\" what?", "Sea", "Park", "Store"],
        ["\"Without a doubt, I knew I had the\" what?", "Best", "Truth", "Keys"],
        ["He bought her gold and what?", "Diamonds", "Roses", "Sneakers"],
        ["What was marked \"his and hers\"?", "Towels", "Mugs", "Pillows"],
        ["He'd leave in the evening and come back when?", "In the morning", "At midnight", "Next week"],
        ["He said he was tired, but he wasn't even what?", "Yawning", "Sleepy", "Home"],
        ["The scent was a perfume that she doesn't what?", "Own", "Like", "Wear"]
      ]
    ] },
    { title: "It's Like That Y'all", id: "Jau-DPP_WMY", start: 10.6, cuts: [40.4, 126.3, 183.4], qs: [
      [
        ["\"Sweet Tee's in the\" what, \"yes, I'm back on the move\"?", "Groove", "House", "Zone"],
        ["\"It's the thriller to kill, cause I got\" what?", "Nothing to lose", "Something to prove", "Time to burn"],
        ["\"I'm at the top of the\" what?", "Heap", "Stairs", "Block"],
        ["\"Just wanted nothing but fun, cause I'm second to\" what?", "None", "One", "Last"],
        ["Turn your speakers way up until what happens?", "Your ears pop", "The lights flicker", "The walls shake"],
        ["If your mom starts beefin', what dance do you tell her to do?", "The Whop", "The Wobble", "The Bump"],
        ["\"Toe-slam to my jam, you\" what?", "Can do it", "Better move", "Know the rules"]
      ],
      [
        ["She steps in the place in leather or what?", "Lace", "Silk", "Suede"],
        ["Why do people come to say hi?", "They know my face", "They want a picture", "I'm their cousin"],
        ["Who's stepping fresh out of Queens with her?", "The girls", "The fellas", "Her cousins"],
        ["Some think she plays games because her name is what?", "Toi", "Tee", "Joy"],
        ["\"Aretha Franklin, bow down to the new\" what?", "Queen of soul", "Queen of rap", "Queen of Queens"],
        ["What does she do every day for physical fitness?", "Jog", "Swim", "Lift weights"],
        ["How tall is Sweet Tee?", "Five foot eight", "Five foot two", "Six feet"]
      ],
      [
        ["\"While I rock the mic with my\" what?", "All-girl band", "DJ crew", "Best friend"],
        ["\"My voice is on\" what?", "Wax", "The air", "Tape"],
        ["\"The better the rhyme, the more\" what \"I get\"?", "Money", "Fans", "Love"],
        ["When her record's old, she hopes her jam went what?", "Gold", "Platinum", "Number one"],
        ["She keeps her beeper beeping so who doesn't lose her?", "The fellas", "Her fans", "Her mom"],
        ["\"When I'm good I'm good, and when I'm bad I'm\" what?", "Better", "Worse", "Gone"],
        ["\"I'm the people's\" what?", "Choice", "Champ", "Star"]
      ]
    ] },
    { title: "On the Smooth Tip", id: "7oMRE0YkMuc", start: 15.7, cuts: [42.2, 135.5, 182], qs: [
      [
        ["What is she testing at the start?", "My mic", "My sound", "My speakers"],
        ["\"I'm here to entertain, yes, this means\" who?", "You", "Me", "Them"],
        ["\"Don't need no help, all by\" what?", "Myself", "Midnight", "My crew"],
        ["She's sweeter than the cream in a what?", "French eclair", "Cream puff", "Donut"],
        ["She's smoother than the ice in a what?", "Skating rink", "Freezer", "Glass"],
        ["\"You'll find that I'm a lyrical\" what?", "Mastermind", "Genius", "Wonder"]
      ],
      [
        ["\"So get live and put your body in\" what?", "Overdrive", "Reverse", "Motion"],
        ["\"Lace them shoes, tighten up that\" what?", "Belt", "Hat", "Chain"],
        ["\"Toes are tapping, hands are\" what?", "Clapping", "Waving", "Snapping"],
        ["\"I'm not a doctor, but I'm on\" what?", "Call", "Time", "Duty"],
        ["\"I'm not the police, so get off the\" what?", "Wall", "Phone", "Stage"],
        ["\"Straight to the dance floor, run, don't\" what?", "Walk", "Stop", "Fall"],
        ["\"Move to the groove, let your body\" what?", "Talk", "Sway", "Rest"]
      ],
      [
        ["\"Move that stuff, put your body in\" what?", "Cruise", "Gear", "Line"],
        ["\"Take it easy and slow, but make it\" what?", "Smooth", "Quick", "Loud"],
        ["\"Ain't nothing like hanging when you got some\" what?", "Sounds", "Friends", "Money"],
        ["She does things that who can't explain?", "An anthropologist", "An astronaut", "An accountant"],
        ["She solves any crime like who?", "Dick Tracy", "Columbo", "Batman"],
        ["She makes more jazz than who?", "Count Basie", "Duke Ellington", "Miles Davis"],
        ["Her rhythmic sounds flow like what?", "Lake Erie", "The Hudson", "Niagara Falls"]
      ]
    ] },
    { title: "I Got Da Feelin'", id: "_ZnKjtCPxrk", start: 7.1, cuts: [39.8, 98.3, 139.2], qs: [
      [
        ["The feeling makes her break into what?", "A cold sweat", "A big smile", "A dance"],
        ["\"It doesn't matter how\" what?", "Long", "Loud", "Far"],
        ["\"This feeling, put you down with the\" what?", "Program", "Party", "Crew"],
        ["Who is cold rocking the crowd?", "Sweet Tee", "Jazzy Joyce", "The DJ"],
        ["\"Turn up the music, I'm a\" what?", "Fanatic", "Maniac", "Musician"],
        ["Make it heard from the basement to the what?", "Attic", "Roof", "Street"],
        ["\"Sweet Tee is fact, not\" what?", "Fiction", "Fantasy", "Fake"]
      ],
      [
        ["Where do you hear her rhyming?", "On the records", "On the radio", "On TV"],
        ["Where do you see her climbing?", "On the charts", "Up the stairs", "On the stage"],
        ["\"Get on the dance floor, go\" what?", "Berserk", "Crazy", "Home"],
        ["\"I'm stepping hard, stepping\" what?", "Strong", "Fast", "Light"],
        ["\"Step out my way or get\" what?", "Stepped on", "Knocked down", "Left out"],
        ["\"I entertain, make you go\" what?", "Insane", "Wild", "Away"],
        ["\"Get down like a sailboat\" what?", "Anchor", "Captain", "Mast"]
      ],
      [
        ["Listen to the rhythm of Sweet Tee, then fall in what?", "Love", "Line", "Step"],
        ["\"When I do it, I do it\" what?", "Right", "Twice", "Loud"],
        ["\"She gets busy, she ain't no\" what?", "Joke", "Fool", "Fake"],
        ["\"So here and now, I'll take my\" what?", "Stand", "Bow", "Seat"],
        ["\"This ain't no game, I ain't\" what?", "Playing", "Lying", "Joking"],
        ["\"Listen to the words I'm\" what?", "Saying", "Writing", "Singing"]
      ]
    ] },
    { title: "It's My Beat", id: "GhGZlhcg51Y", start: 16.4, cuts: [38.75, 71.2, 87.3], qs: [
      [
        ["\"The bass is thumping, the party is\" what?", "Jumping", "Packed", "Over"],
        ["\"I got the rhymes to keep your body\" what?", "Pumping", "Moving", "Warm"],
        ["\"I'm gonna break it down so you can\" what?", "See", "Dance", "Learn"],
        ["\"The skillful way I recite my\" what?", "Poetry", "Lines", "ABCs"],
        ["\"Quick as a\" what, \"I'll pop upon the scene\"?", "Flash", "Fox", "Wink"],
        ["\"Break out the Casio and the\" what?", "Drum machine", "Turntables", "Keyboard"]
      ],
      [
        ["\"Got to get busy, cause I know I'm\" what?", "Down", "Hot", "Next"],
        ["Her funky sound makes your body start to what?", "Perspire", "Shake", "Glow"],
        ["She turns the volume up how?", "Higher and higher", "Louder and louder", "Bit by bit"],
        ["What does she pop into her JVC?", "A cassette", "A record", "A CD"],
        ["She plays it for her friends because it sounds so what?", "Neat", "Sweet", "Loud"],
        ["When they ask what she calls it, what does she say?", "It's My Beat", "Tee Time", "The Feeling"]
      ],
      [
        ["\"So take a minute and wipe your\" what?", "Sweat", "Eyes", "Shoes"],
        ["\"But don't lose your\" what?", "Tissue", "Ticket", "Cool"],
        ["Why keep it? \"Cause I'm not\" what?", "Done yet", "Tired", "Leaving"],
        ["\"I'll jump on the stage, the crowd will come\" what?", "Swarming in", "Running out", "Clapping"],
        ["Her beat comes storming in through the what?", "Bass bottoms", "Back door", "Window"],
        ["\"Like a\" what \"breaking out of his cage\"?", "Beast", "Bird", "Robot"]
      ]
    ] }
  ]
};
