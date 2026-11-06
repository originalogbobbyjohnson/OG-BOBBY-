/* Fu-Schnickens game (NYC map, Brooklyn: East Flatbush, where Chip Fu, Poc Fu and Moc Fu came up). CLEAN set, 3 songs. Group verses count; Shaq's verse is never reached.
   Timings = lrclib synced lyrics. Ring the Alarm: Fu-Schnickens - Topic audio (231 s = lrclib 231 s).
   True Fuschnick: FuSchnickensVEVO official video (245 s); the video skips the album's spoken opener, so it runs 7.0 s ahead of lrclib (checked against the video's own transcript); every cut = lrclib - 7.0.
   What's Up Doc? (Can We Rock): ShaqVEVO official video (236 s = lrclib 236 s, transcript lines line up with no offset).
   Last cuts stop before the first curse: True Fuschnick ends before Poc Fu's "Damn!", What's Up Doc ends inside Chip Fu's verse (before Moc Fu's verse and Shaq's). */
window.CFG = {
  name: "Fu-Schnickens", nameUpper: "FU-SCHNICKENS", short: "SCHNIK",
  hood: "East Flatbush", hoodUpper: "EAST FLATBUSH", boro: "Brooklyn",
  saveKey: "ogfan99fuschnickens1",
  startRank: "Sum Dum Munkey",
  ranks: ["Rough-Neck Chicken", "Lyrical Ninja", "Lyrical Prophet", "Ninja Master", "True Fuschnick"],
  topRank: "Hartical Don",
  point: "Bubble", points: "Bubbles",
  rankRewards: {
    "Rough-Neck Chicken": { bongs: 5, line: "Rough-neck and ready. You stopped clucking and started rocking." },
    "Lyrical Ninja": { bongs: 10, line: "Quick hands, quick tongue. Nobody sees you coming." },
    "Lyrical Prophet": { bongs: 15, line: "Books and scrolls unfold. The knowledge makes you bold." },
    "Ninja Master": { bongs: 20, line: "Romp and rage upon the scene. The dojo is yours." },
    "True Fuschnick": { bongs: 25, line: "You run all of East Flatbush." }
  },
  trophyArt: [
    '<circle cx="40" cy="44" r="20" fill="#8a5a3a"/><circle cx="24" cy="40" r="7" fill="#8a5a3a"/><circle cx="56" cy="40" r="7" fill="#8a5a3a"/><ellipse cx="40" cy="52" rx="12" ry="9" fill="#d9b48a"/><path d="M34 54q6 4 12 0" stroke="#5a3a1a" stroke-width="2" fill="none"/><rect x="28" y="62" width="24" height="14" rx="6" fill="#8a5a3a"/>',
    '<ellipse cx="38" cy="54" rx="20" ry="16" fill="#f4ead8" stroke="#888" stroke-width="2"/><circle cx="52" cy="34" r="10" fill="#f4ead8" stroke="#888" stroke-width="2"/><path d="M48 24q2-8 6-4q2-6 6 0q4-2 2 6z" fill="#e63946"/><path d="M62 34l8 3l-8 3z" fill="#ffd166"/><path d="M54 42q2 6-2 8" fill="#e63946"/><circle cx="55" cy="32" r="1.6" fill="#1b1b1b"/><path d="M18 50q-8-10 2-16q0 8 6 10" fill="#d9cbb0"/><path d="M34 70v8M44 70v8" stroke="#ffd166" stroke-width="3"/>',
    '<rect x="18" y="26" width="44" height="10" rx="5" fill="#1b1b1b"/><path d="M62 31l12-6M62 31l12 4" stroke="#e63946" stroke-width="3" stroke-linecap="round"/><rect x="26" y="36" width="28" height="40" rx="6" fill="#1b1b1b"/><path d="M26 50h28" stroke="#ff7a00" stroke-width="4"/>',
    '<rect x="16" y="22" width="48" height="56" rx="3" fill="#f2e6c8" stroke="#8a6a3a" stroke-width="2"/><rect x="12" y="18" width="56" height="8" rx="4" fill="#8a6a3a"/><rect x="12" y="74" width="56" height="8" rx="4" fill="#8a6a3a"/><path d="M24 36h32M24 46h26M24 56h30M24 66h20" stroke="#8a6a3a" stroke-width="2"/>',
    '<path d="M14 70l52-52" stroke="#c9ced6" stroke-width="5" stroke-linecap="round"/><path d="M14 18l52 52" stroke="#c9ced6" stroke-width="5" stroke-linecap="round"/><rect x="10" y="62" width="14" height="6" rx="2" fill="#7a3f2e" transform="rotate(-45 17 65)"/><rect x="56" y="62" width="14" height="6" rx="2" fill="#7a3f2e" transform="rotate(45 63 65)"/><circle cx="40" cy="44" r="6" fill="#ff7a00"/>',
    '<path d="M14 78V20M66 78V20" stroke="#7a3f2e" stroke-width="5"/><rect x="10" y="16" width="60" height="7" rx="2" fill="#7a3f2e"/><path d="M40 23v6" stroke="#333" stroke-width="2"/><circle cx="40" cy="50" r="20" fill="#ffd166" stroke="#8a6a00" stroke-width="2"/><circle cx="40" cy="50" r="8" fill="#f2b632"/><path d="M58 64l10 12" stroke="#7a3f2e" stroke-width="3"/><circle cx="68" cy="76" r="4" fill="#ff7a00"/>',
    '<ellipse cx="40" cy="62" rx="26" ry="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><ellipse cx="40" cy="60" rx="20" ry="5" fill="#aeb4bd"/><path d="M18 34l6-20l9 10l7-14l7 14l9-10l6 20z" fill="#ffd166" stroke="#8a6a00" stroke-width="1.5"/><path d="M58 52l10-16M22 52l-10-16" stroke="#7a5a3a" stroke-width="3" stroke-linecap="round"/>'
  ],
  clubTitle: "The Schnicken Coalition", clubTab: "UNITY",
  tags: ["FU-SCHNICK", "CAN WE ROCK", "CHIP FU"],
  c1: "#ff7a00", c2: "#2ec4b6", c3: "#ffd166", bg: "#120a06",
  headerSvg: '<g fill="#f7f3ea"><path d="M10 64V40l40-20l40 20v24z"/><rect x="44" y="12" width="8" height="12"/><rect x="100" y="34" width="60" height="30"/><rect x="170" y="28" width="16" height="36"/><rect x="196" y="36" width="70" height="28"/><rect x="276" y="30" width="50" height="34"/><path d="M332 64V44l30-14l30 14v20z"/></g>',
  socials: [
    { name: "YouTube", handle: "@fuschnickensvevo7441", url: "https://www.youtube.com/@fuschnickensvevo7441" }
  ],
  rooms: [
    { scene: "junius", t: "PRESS PLAY", x: "Take the 3 train to Junius St, up on the el over Livonia Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "palace", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "organ" },
    { scene: "redhouse", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "orena", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "court" },
    { scene: "corner", t: "WELCOME TO EAST FLATBUSH", x: "Clarendon Rd and East Fifty-Ninth St, the old Dutch farmhouse behind. This is the Fu-Schnickens' game.", sfx: "spray" }
  ],
  songs: [
    {
      title: "True Fuschnick", id: "NyuPK2mNNvQ", start: 15.5,
      cuts: [47.3, 89.4, 122.3],
      qs: [
        [
          ["\"I'm a true, what? I am a true\" what?", "Fuschnick", "Brooklynite", "Kung fu kid"],
          ["\"So sit, Buddah, sit, what lyrical styles should we\" what?", "Kick", "Spit", "Flip"],
          ["\"I'm a Rowdy Roddy\" who?", "Piper", "Savage", "Hogan"],
          ["He flashes his dread like who?", "Sherlock Holmes", "Dick Tracy", "Inspector Gadget"],
          ["\"The thicker, the richer, the bigger the\" what?", "Dread", "Beat", "Style"],
          ["\"So I don't need no\" what?", "Honeycomb", "Hair gel", "Hairbrush"],
          ["\"Eeney, meeney, miney\" what?", "Mo", "Go", "Low"],
          ["\"Good goobelly goo, I bumped my\" what?", "Toe", "Head", "Knee"],
          ["What kind of Chip is about to flow?", "Chocolate", "Potato", "Cookie"],
          ["\"I'm wicked and wild and\" what?", "Versatile", "Hostile", "Agile"],
          ["When Chip grips the mic, it's worth your what?", "While", "Time", "Money"]
        ],
        [
          ["\"Abra Fu\" what?", "Alacazam", "Cadabra", "Shazam"],
          ["\"I'm not Huckleberry\" who?", "Finn", "Hound", "Jones"],
          ["\"I'm still speaking, shoo,\" what?", "Fly", "Bird", "Bee"],
          ["\"Tae Kwon\" what?", "Do", "Leap", "Kick"],
          ["His lyrics are bubbling till they're what?", "Boiled", "Burnt", "Cooked"],
          ["\"So don't drink the\" what?", "Milk", "Juice", "Soda"],
          ["Why not? 'Cause it's what?", "Rotten", "Sour", "Warm"],
          ["\"In other words, it's\" what?", "Spoiled", "Old", "Gone"],
          ["\"Don't say drats, drats double or triple or\" what?", "Quadruple", "Ten times", "Single"],
          ["Some MCs' rhymes ain't saying Jack nor who?", "Jill", "Jim", "Jane"],
          ["Who does Chip dub \"a true Fu\"?", "Poc Fu", "Moc Fu", "Phife"]
        ],
        [
          ["\"What's up with hip-hop, reggae, let's kick some\" what?", "Soul", "Funk", "Jazz"],
          ["\"I'll be a brave man like Captain\" who?", "Caveman", "Planet", "Crunch"],
          ["\"Holy Batfu, it's an\" what?", "Apple", "Orange", "Egg"],
          ["\"The capital P.O.C. is on a fliptop, so hip, hip\" what?", "Hooray", "Hop", "Hurrah"],
          ["\"Move out my\" what?", "Way", "Path", "Space"],
          ["\"Check out what I cockadoodle\" what?", "Doo", "Did", "Crow"],
          ["When he was small, what name was on his belt?", "Poc-Fu", "Chip-Fu", "Moc-Fu"],
          ["What kind of belt was it?", "Nameplate belt", "Black belt", "Gold belt"],
          ["\"Then at last, suffering\" what?", "Succotash", "Sardines", "Snakes"],
          ["\"Used my noodle, Yankee\" what?", "Doodle", "Stadium", "Dandy"],
          ["\"...came up with a\" what?", "Rhyme", "Song", "Plan"]
        ]
      ]
    },
    {
      title: "What's Up Doc? (Can We Rock)", id: "1f9IgOjZjn4", start: 9.3,
      cuts: [41.3, 74.0, 109.7],
      qs: [
        [
          ["\"Can we rock?\" and \"What's up,\" who?", "Doc", "Pop", "Jack"],
          ["\"Cha-cha-cha, what's up,\" who?", "Pa", "Ma", "Doc"],
          ["\"Two scoops, a raisin in the\" what?", "Sun", "Bran", "Cake"],
          ["\"Brothers try to rally up, then dilly-dally for some\" what?", "Room", "Time", "Food"],
          ["\"Bird peckin', double deckin', rubber neckin' in my\" what?", "Tomb", "Room", "Car"],
          ["He smiles like who?", "Groucho Marx", "Charlie Chaplin", "Bugs Bunny"],
          ["\"I make a joke, hokey\" what?", "Pokey", "Dokey", "Smokey"],
          ["He slides by like what?", "Egg yolk", "Butter", "Jell-O"],
          ["\"Play me like a punk, like the Penguin and the\" who?", "Joker", "Riddler", "Batman"],
          ["\"Snoopin' in my biz like Tom and\" who?", "Roxie Roker", "Jerry", "Helen"],
          ["Now they're sellin' records where?", "Overseas", "Worldwide", "Down south"]
        ],
        [
          ["\"Holy smokes, oops, your whole plan\" what?", "Goofed up", "Blew up", "Fell through"],
          ["Don't try to take the Schnicks' what?", "Props", "Crown", "Mic"],
          ["\"So tick tock around the\" what?", "Clock", "Block", "Room"],
          ["\"For goodness sake, the stakes are\" what?", "High", "Low", "Up"],
          ["\"I'm out, ABC ya,\" what?", "Bye", "Later", "Soon"],
          ["\"I tawt I saw a\" what?", "Puttycat", "Bunny", "Birdie"],
          ["Which two dwarfs come up with Humpty Dumpty?", "Bashful and Grumpy", "Sleepy and Dopey", "Happy and Doc"],
          ["\"Quaker, Nabisco, Crisco\" what?", "Kid", "Kit", "King"],
          ["His style's Figaro, like whose?", "Pinocchio's", "Geppetto's", "Cinderella's"],
          ["What kind of nose?", "Camel hump", "Button", "Clown"],
          ["\"Suffering succotash, my mistletoe is\" what?", "Gone", "Here", "Green"]
        ],
        [
          ["Who is after his seven dwarfs?", "Snow White", "Cinderella", "Sleeping Beauty"],
          ["\"Pushin' my pedal to the\" what?", "Metal", "Floor", "Max"],
          ["He's rugged and rough for which cereal?", "Cocoa Puffs", "Corn Flakes", "Cheerios"],
          ["\"And I love my\" what?", "Fruity Pebbles", "Frosted Flakes", "Apple Jacks"],
          ["\"Ask Bob for Hope, not Mr. Bob\" who?", "Dobalina", "Barker", "Marley"],
          ["\"Oh, where has my\" what \"gone\"?", "Mic", "Hat", "Crew"],
          ["\"Before my intro I gots to\" what?", "Mic check it", "Warm up", "Clear my throat"],
          ["\"Lyrics are Mary, Mary, quite\" what?", "Contrary", "Merry", "Scary"],
          ["\"Rah, rah, sis boom\" what?", "Bah", "Bam", "Boom"],
          ["His lyrics are smooth like the head on whom?", "Telly Savalas", "Mr. Clean", "Michael Jordan"],
          ["His tongue starts to quicken like whom?", "Speedy Gonzalez", "Road Runner", "The Flash"]
        ]
      ]
    },
    {
      title: "Ring the Alarm", id: "i5jjqd1zcVE",
      cuts: [41.6, 64.8, 142.9],
      qs: [
        [
          ["\"Ring the alarm, another sound is\" what?", "Dying", "Rising", "Playing"],
          ["\"Ring the alarm, I don't wanna stay\" what?", "Calm", "Home", "Quiet"],
          ["\"I'm about to rip this\" what?", "Psalm", "Song", "Mic"],
          ["\"'Cause I'm sweet,\" what?", "Neat", "Fresh", "Smooth"],
          ["He licks his lyrics with his what?", "Tongue", "Lips", "Pen"],
          ["And his rhymes come with his what?", "Teeth", "Hands", "Mind"],
          ["This lyrical prophet is from where?", "The West Indies", "The East Side", "Down South"],
          ["He's a lyrical what?", "Prophet", "Doctor", "Master"],
          ["\"In these books and\" what \"that I unfold\"?", "Scrolls", "Maps", "Pages"],
          ["The knowledge he uses makes him what?", "Bold", "Old", "Gold"],
          ["The intelligence in his system becomes what?", "Wisdom", "Knowledge", "Power"]
        ],
        [
          ["Where was he born?", "Trinidad", "Jamaica", "Barbados"],
          ["Trinidad, not where?", "Tobago", "Toronto", "Haiti"],
          ["\"Land of steel pan and\" what?", "Calypso", "Reggae", "Soca"],
          ["\"That's the real true thing and a natural\" what?", "Fact", "Act", "Track"],
          ["\"This lyrical man, you can't hold me\" what?", "Back", "Down", "Up"],
          ["\"From the red, the white, and also the\" what?", "Black", "Blue", "Gold"],
          ["The island is his land, his place of what?", "Birth", "Rest", "Worth"],
          ["You can tell by the what that's swung?", "Tongue", "Arm", "Bat"],
          ["\"So all MCs, don't cross this\" what?", "Border", "Line", "River"],
          ["He despises all youth that's out of what?", "Order", "Line", "Time"],
          ["\"Don't try to test any of the\" who?", "Schnickens", "Planets", "Tribe"]
        ],
        [
          ["\"You two-facety, you can't\" what?", "Face me", "Touch me", "Beat me"],
          ["You'll acknowledge his substance just like a what?", "Bookworm", "Teacher", "Preacher"],
          ["When he grips the mic, all MCs stop and what?", "Hush", "Run", "Bow"],
          ["\"Any mic I touch, any mic I brush, any mic I\" what?", "Clutch", "Crush", "Rush"],
          ["\"C-H-I-P Fu is my name, it will stay just the\" what?", "Same", "Game", "Way"],
          ["\"Quote for quote, note for note, did you\" what?", "Comprehend", "Understand", "Get it"],
          ["\"Pull it up, operator, wheel and come\" what?", "Again", "Back", "Through"],
          ["MCs try those raps and sound like what?", "Wanna-be's", "Copycats", "Old-timers"],
          ["They're untouchable MCs for what?", "Unity", "Money", "Fame"],
          ["\"I'm not faking\" what?", "Jamaican", "Bajan", "Haitian"],
          ["\"Chat it in a verb and capsize it in a\" what?", "Noun", "Verse", "Pun"]
        ]
      ]
    }
  ]
};
