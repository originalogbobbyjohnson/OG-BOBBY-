/* Salt-N-Pepa: Cheryl "Salt" James and Sandra "Pepa" Denton out of Queens (met at Queensborough Community College), with
   DJ Spinderella on the decks, produced by Hurby "Luv Bug" Azor. First recorded as Super Nature ("The Show Stoppa", 1985).
   Albums Hot, Cool & Vicious, A Salt with a Deadly Pepa, Blacks' Magic, Very Necessary, Brand New. First female rap act to win a Grammy. */
window.CFG = {
  name: "Salt-N-Pepa", nameUpper: "SALT-N-PEPA", short: "SALT",
  hood: "Queens", hoodUpper: "QUEENS", boro: "Queens",
  saveKey: "ogfan99saltnpepa1",
  /* everybody starts as Super Nature (their first name, before anybody knew them) and climbs their titles */
  startRank: "Super Nature",
  ranks: ["Showstopper", "Expression", "Blacks' Magic", "Hot, Cool & Vicious", "Salt with a Deadly Pepa"],
  topRank: "Very Necessary",
  point: "Spin", points: "Spins",
  rankRewards: {
    "Showstopper": { bongs: 5, line: "You stopped the show." },
    "Expression": { bongs: 10, line: "Express yourself." },
    "Blacks' Magic": { bongs: 15, line: "That's magic." },
    "Hot, Cool & Vicious": { bongs: 20, line: "Hot, cool and vicious." },
    "Salt with a Deadly Pepa": { bongs: 25, line: "You run all of Queens." }
  },
  trophyArt: [
    /* Super Nature: a demo cassette */
    '<rect x="10" y="34" width="60" height="38" rx="4" fill="#2a2a34" stroke="#888" stroke-width="2"/><rect x="18" y="40" width="44" height="12" rx="2" fill="#f4efe2"/>' +
    '<text x="40" y="50" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="8" textLength="40" lengthAdjust="spacingAndGlyphs" fill="#ff4fa3">SUPER NATURE</text>' +
    '<circle cx="28" cy="62" r="5" fill="#111" stroke="#bbb" stroke-width="1.5"/><circle cx="52" cy="62" r="5" fill="#111" stroke="#bbb" stroke-width="1.5"/><rect x="33" y="60" width="14" height="4" fill="#5a3a2a"/>',
    /* Showstopper: a red stop sign with a star */
    '<polygon points="30,12 50,12 64,26 64,46 50,60 30,60 16,46 16,26" fill="#d7263d" stroke="#fff" stroke-width="2.5"/>' +
    '<text x="40" y="41" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="11" fill="#fff">SHOW</text><rect x="38" y="60" width="4" height="18" fill="#9aa"/>' +
    '<path d="M64 10l2 5 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1z" fill="#ffd23f"/>',
    /* Expression: a pink spray can with a mist cloud */
    '<rect x="28" y="30" width="24" height="46" rx="4" fill="#ff4fa3" stroke="#7a1a50" stroke-width="2"/><rect x="32" y="22" width="16" height="9" rx="2" fill="#ccc"/><rect x="37" y="16" width="6" height="6" fill="#333"/>' +
    '<circle cx="56" cy="16" r="4" fill="#2ad1c9" opacity=".8"/><circle cx="64" cy="12" r="3" fill="#2ad1c9" opacity=".6"/><circle cx="62" cy="22" r="3" fill="#ffd23f" opacity=".7"/>' +
    '<path d="M32 44h16M32 50h16" stroke="#fff" stroke-width="2" opacity=".7"/>',
    /* Blacks' Magic: a top hat with sparkles */
    '<rect x="24" y="22" width="32" height="40" rx="2" fill="#15131c" stroke="#555" stroke-width="2"/><rect x="24" y="52" width="32" height="7" fill="#ff4fa3"/>' +
    '<ellipse cx="40" cy="64" rx="28" ry="7" fill="#15131c" stroke="#555" stroke-width="2"/>' +
    '<path d="M14 18l2 5 5 2-5 2-2 5-2-5-5-2 5-2zM66 12l2 4 4 2-4 2-2 4-2-4-4-2 4-2zM62 36l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z" fill="#ffd23f"/>',
    /* Hot, Cool & Vicious: a flame next to an ice cube */
    '<path d="M24 74q-14-14-4-32q2 10 8 10q-4-18 10-30q-2 16 8 24q6 8 0 20q-4 8-22 8z" fill="#ff7a1a" stroke="#a83a00" stroke-width="2"/><path d="M28 70q-6-8 0-16q2 6 6 6q0 8-6 10z" fill="#ffd23f"/>' +
    '<rect x="46" y="44" width="26" height="26" rx="4" fill="#bfefff" stroke="#2ad1c9" stroke-width="2" opacity=".95"/><path d="M52 50l8 0M52 56l5 0" stroke="#fff" stroke-width="2"/>',
    /* Salt with a Deadly Pepa: a salt shaker and a pepper shaker */
    '<path d="M14 74l4-40h20l4 40z" fill="#f4f4f4" stroke="#888" stroke-width="2"/><rect x="18" y="26" width="20" height="9" rx="3" fill="#c8ccd4"/>' +
    '<path d="M38 74l4-40h20l4 40z" fill="#2a2a2a" stroke="#888" stroke-width="2"/><rect x="42" y="26" width="20" height="9" rx="3" fill="#c8ccd4"/>' +
    '<text x="28" y="60" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="#ff4fa3">S</text><text x="52" y="60" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="#2ad1c9">P</text>',
    /* Very Necessary: the gold gramophone */
    '<rect x="18" y="58" width="44" height="16" rx="2" fill="#ffd23f" stroke="#8a6a12" stroke-width="2"/><ellipse cx="40" cy="57" rx="18" ry="4" fill="#111"/><ellipse cx="40" cy="57" rx="4" ry="1.5" fill="#ff4fa3"/>' +
    '<path d="M50 56v-10l-6-6" stroke="#c9a22a" stroke-width="3" fill="none"/>' +
    '<path d="M44 42l-30-28q18-10 40 2z" fill="#ffd23f" stroke="#8a6a12" stroke-width="2"/><path d="M22 14q12-6 26 0" stroke="#fff3b0" stroke-width="2" fill="none"/>'
  ],
  clubTitle: "The Showcase", clubTab: "SHOW",
  tags: ["SPINDERELLA", "SHOWSTOPPER", "SALT & PEP"],
  c1: "#ff4fa3", c2: "#2ad1c9", c3: "#ffd23f", bg: "#1a0f2a",
  /* Queens: the Unisphere, the Valencia's roofline on Jamaica Ave, the towers over Jamaica Center */
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    s += '<circle cx="70" cy="28" r="20" fill="none" stroke="#f7f3ea" stroke-width="4"/><path d="M50 28h40M70 8v40" stroke="#f7f3ea" stroke-width="2"/><rect x="66" y="46" width="8" height="10"/><path d="M58 56l8-10h8l8 10z"/>';
    s += '<rect x="150" y="30" width="100" height="26"/><path d="M150 30q50-20 100 0z"/><rect x="190" y="12" width="20" height="18"/>';
    s += '<rect x="280" y="14" width="22" height="42"/><rect x="308" y="26" width="26" height="30"/><rect x="340" y="6" width="18" height="50"/><rect x="362" y="32" width="30" height="24"/>';
    return s;
  })() + '</g>',
  socials: [
    { name: "YouTube", handle: "SaltNPepaVEVO", url: "https://www.youtube.com/@SaltNPepaVEVO" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the E train to the end of the line, Jamaica Center. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "unisphere", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "parachute" },
    { scene: "valencia", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "organ" },
    { scene: "stage", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO QUEENS", x: "Jamaica Av and Parsons Blvd. This is Salt-N-Pepa's game.", sfx: "spray" }
  ],
  songs: [
   {
    "title": "Twist and Shout",
    "id": "InZt0D6glHk",
    "cuts": [
     41.7,
     91.3,
     117.7
    ],
    "qs": [
     [
      [
       "'Yo Salt, your ___'",
       "Mic",
       "Turn",
       "Beat"
      ],
      [
       "'We're def, you're ___'",
       "Right",
       "Tight",
       "Nice"
      ],
      [
       "The bass is shakin', dancin' all what?",
       "Night",
       "Day",
       "Week"
      ],
      [
       "'Shake it up, ___, now'",
       "Baby",
       "Honey",
       "Girl"
      ],
      [
       "'You gotta twist and ___'",
       "Shout",
       "Turn",
       "Spin"
      ],
      [
       "'Go ahead, and work it on ___'",
       "Out",
       "Up",
       "Down"
      ],
      [
       "'You know you look so ___'",
       "Good",
       "Fly",
       "Fine"
      ]
     ],
     [
      [
       "She thinks they're playin' their what?",
       "Song",
       "Record",
       "Jam"
      ],
      [
       "'What up? You gonna ___ up?'",
       "Get",
       "Stand",
       "Hurry"
      ],
      [
       "'Hey, don't get carried ___'",
       "Away",
       "Off",
       "Over"
      ],
      [
       "Do what the what say?",
       "Record",
       "DJ",
       "Crowd"
      ],
      [
       "'You really got me ___ now'",
       "Going",
       "Moving",
       "Dancing"
      ],
      [
       "'Just like I knew you ___'",
       "Would",
       "Could",
       "Should"
      ],
      [
       "'C'mon, c'mon, c'mon, c'mon, ___, now'",
       "Baby",
       "Honey",
       "Boy"
      ]
     ],
     [
      [
       "Who asks her to dance?",
       "Boys in the jam",
       "The DJ",
       "Her man"
      ],
      [
       "What does she tell them?",
       "No chance",
       "Maybe",
       "Later"
      ],
      [
       "She wants a man advanced in the art of what?",
       "Dance",
       "Love",
       "Rap"
      ],
      [
       "On the floor, he can take her on a what?",
       "Tour",
       "Trip",
       "Spin"
      ],
      [
       "Down like the rain and the what?",
       "Thunderstorm",
       "Lightning",
       "Hurricane"
      ],
      [
       "'Boy, come on, don't wait too ___'",
       "Long",
       "Late",
       "Slow"
      ]
     ]
    ]
   },
   {
    "title": "Get Up Everybody (Get Up)",
    "id": "SvZadDgMAqc",
    "start": 8.6,
    "cuts": [
     47.5,
     128.4,
     188.9
    ],
    "qs": [
     [
      [
       "The mic will do what as soon as she touches it?",
       "Sing",
       "Shine",
       "Talk"
      ],
      [
       "'Do this smooth and ___ like'",
       "Easy",
       "Slow",
       "Steady"
      ],
      [
       "They might get what in here tonight?",
       "Hyped",
       "Loud",
       "Wild"
      ],
      [
       "'Be nice, relax, MC's further ___'",
       "Back",
       "Down",
       "Away"
      ],
      [
       "Givin' a little bit of heart and what?",
       "Soul",
       "Mind",
       "Pride"
      ],
      [
       "She ain't going out like a what?",
       "Sucker",
       "Loser",
       "Rookie"
      ],
      [
       "Blow on the mic and make a what?",
       "Wish",
       "Sound",
       "Speech"
      ]
     ],
     [
      [
       "This groove is set to soothe and what you?",
       "Move",
       "Prove",
       "Lose"
      ],
      [
       "Spinderella, her DJ, is a turntable what?",
       "Trooper",
       "Master",
       "Wizard"
      ],
      [
       "Her partner Pepa is a power what?",
       "Booster",
       "Player",
       "Station"
      ],
      [
       "She grabs a microphone and then starts what?",
       "Dustin'",
       "Bustin'",
       "Rhymin'"
      ],
      [
       "'Spinderella, please drop some ___ on'",
       "Beats",
       "Records",
       "Bombs"
      ],
      [
       "She kicks lyrics on the beats who made?",
       "Hurb",
       "Spin",
       "Pep"
      ],
      [
       "What's the record called?",
       "Get Up",
       "Push It",
       "Stand Up"
      ]
     ],
     [
      [
       "'Salty, that's me flippin' on ___'",
       "MCs",
       "DJs",
       "Beats"
      ],
      [
       "Def, dumb, dope, completely what?",
       "Phenomenal",
       "Original",
       "Incredible"
      ],
      [
       "She grips the microphone like a what?",
       "Pitbull terrier",
       "Bulldog",
       "Lion"
      ],
      [
       "Lovers are her brothers and what?",
       "Sisters",
       "Cousins",
       "Friends"
      ],
      [
       "All in all, over ten billion what?",
       "Listeners",
       "Dancers",
       "Records"
      ],
      [
       "The hypest and ripest sound of the what?",
       "Year",
       "Block",
       "Night"
      ]
     ]
    ]
   },
   {
    "title": "Champagne",
    "id": "i1yZxvaNPeg",
    "start": 8.8,
    "cuts": [
     49.4,
     107.9,
     176.6
    ],
    "qs": [
     [
      [
       "Get down with the what?",
       "Party",
       "Music",
       "Crowd"
      ],
      [
       "'I'm the Big ___'",
       "Kahuna",
       "Cheese",
       "Boss"
      ],
      [
       "'I got the whole ___'",
       "Shebang",
       "Package",
       "Crew"
      ],
      [
       "Tight what, everywhere she goes?",
       "Security",
       "Crew",
       "Rhymes"
      ],
      [
       "Party over here, me and my what?",
       "Peeps",
       "Girls",
       "Fam"
      ],
      [
       "Groovin' to what kind of beats?",
       "Roughneck",
       "Funky",
       "Boom-bap"
      ],
      [
       "She's as hot as daylight where?",
       "Jamaica",
       "Miami",
       "Brooklyn"
      ]
     ],
     [
      [
       "With the La-Di-Da-Di, we like to what?",
       "Party",
       "Dance",
       "Rhyme"
      ],
      [
       "'We don't cause ___'",
       "Trouble",
       "Drama",
       "Problems"
      ],
      [
       "'Yeah, back up little ___'",
       "One",
       "Girl",
       "Man"
      ],
      [
       "When it comes to scandalous, she's what?",
       "Numero uno",
       "Number two",
       "The queen"
      ],
      [
       "'Shakin', the record ___'",
       "Breakin'",
       "Makin'",
       "Takin'"
      ],
      [
       "'Big Willie, illy-silly ___'",
       "Rabbit",
       "Rapper",
       "Rascal"
      ],
      [
       "'Trust me, we be the life of the ___'",
       "Jam",
       "Night",
       "Block"
      ]
     ],
     [
      [
       "'Put 'em up, ___'",
       "Reach",
       "High",
       "Now"
      ],
      [
       "After the ladies, she calls for all her what?",
       "Fellas",
       "Homies",
       "DJs"
      ],
      [
       "'North, south, to the east, to the ___'",
       "West",
       "Top",
       "Sky"
      ],
      [
       "She's rollin' in the big what?",
       "Bucks",
       "Benz",
       "Leagues"
      ],
      [
       "'You wanna be a Pepa, too? Well, it's ___ time'",
       "Party",
       "Show",
       "Your"
      ],
      [
       "No line, she's what?",
       "V.I.P.",
       "Guest list",
       "Backstage"
      ]
     ]
    ]
   },
   {
    "title": "Whatta Man",
    "id": "5vgV_dVkXN4",
    "start": 35.4,
    "cuts": [
     70.2,
     158.9,
     225.6
    ],
    "qs": [
     [
      [
       "She wants to take a minute or two and give much what?",
       "Respect",
       "Love",
       "Praise"
      ],
      [
       "He's the man that made a difference in her what?",
       "World",
       "Life",
       "Heart"
      ],
      [
       "'That he said, ___ said crowd'",
       "She",
       "They",
       "We"
      ],
      [
       "She knows that ain't nobody what?",
       "Perfect",
       "Honest",
       "Faithful"
      ],
      [
       "She gives props to those who what?",
       "Deserve it",
       "Earn it",
       "Need it"
      ],
      [
       "Here's to the future, 'cause we got through the what?",
       "Past",
       "Storm",
       "Night"
      ],
      [
       "She finally found somebody that can make her what?",
       "Laugh",
       "Smile",
       "Dance"
      ]
     ],
     [
      [
       "Her man is smooth like who?",
       "Barry",
       "Marvin",
       "Teddy"
      ],
      [
       "A body like Arnold with a what face?",
       "Denzel",
       "Wesley",
       "Eddie"
      ],
      [
       "He's smart like a what?",
       "Doctor",
       "Lawyer",
       "Teacher"
      ],
      [
       "He always got a what for her every time she sees him?",
       "Gift",
       "Smile",
       "Song"
      ],
      [
       "He keeps her on Cloud Nine just like the who?",
       "Temps",
       "Four Tops",
       "Jacksons"
      ],
      [
       "She knows her name is not what?",
       "Susan",
       "Sharon",
       "Linda"
      ],
      [
       "Good men are hard to what?",
       "Find",
       "Keep",
       "Trust"
      ]
     ],
     [
      [
       "He's a real smooth brother, never in a what?",
       "Rush",
       "Fight",
       "Mood"
      ],
      [
       "He spends quality time with who?",
       "His kids",
       "His mom",
       "His crew"
      ],
      [
       "He's secure in his manhood 'cause he's a what?",
       "Real man",
       "Rich man",
       "Family man"
      ],
      [
       "Don't take him for a what?",
       "Sucker",
       "Fool",
       "Joke"
      ],
      [
       "Every time she needs him, he always got her what?",
       "Back",
       "Hand",
       "Heart"
      ],
      [
       "Who taught him never to be disrespectful?",
       "His mama",
       "His papa",
       "His coach"
      ]
     ]
    ]
   },
   {
    "title": "Push It",
    "id": "vCadcBR95oU",
    "start": 11,
    "cuts": [
     51.3,
     82.2,
     184.4
    ],
    "qs": [
     [
      [
       "'Ooh, baby, baby, ___, baby'",
       "Baby",
       "Honey",
       "Sugar"
      ],
      [
       "'Get up on ___'",
       "This",
       "That",
       "It"
      ],
      [
       "'Ah, ___ it'",
       "Push",
       "Shake",
       "Work"
      ],
      [
       "'Ow! ___!'",
       "Baby",
       "Yeah",
       "Hey"
      ],
      [
       "Who's here?",
       "Salt-N-Pepa",
       "Spinderella",
       "The DJ"
      ],
      [
       "How does the hook start? '___, push it'",
       "Ah",
       "Oh",
       "Yo"
      ]
     ],
     [
      [
       "'Now, now, now, wait a minute ___'",
       "Y'all",
       "Baby",
       "Fellas"
      ],
      [
       "This dance ain't for who?",
       "Everybody",
       "Nobody",
       "The guys"
      ],
      [
       "Get on out there and do what?",
       "Dance",
       "Party",
       "Jump"
      ],
      [
       "'Salt-N-Pepa's here, and we're in ___'",
       "Effect",
       "Control",
       "Charge"
      ],
      [
       "'Want you to push it ___'",
       "Back",
       "Hard",
       "Up"
      ],
      [
       "Cooling by day, then at night, working up a what?",
       "Sweat",
       "Storm",
       "Plan"
      ],
      [
       "Number one in a hot what?",
       "Party show",
       "Dance floor",
       "Radio show"
      ]
     ],
     [
      [
       "'Push it real ___'",
       "Good",
       "Hard",
       "Slow"
      ],
      [
       "'Yo, yo, yo, yo, baby-___'",
       "Pop",
       "Doll",
       "Boy"
      ],
      [
       "'Yeah, you! Come here, gimme a ___'",
       "Kiss",
       "Hug",
       "Call"
      ],
      [
       "Can't you hear the music doing what hard?",
       "Pumping",
       "Bumping",
       "Thumping"
      ],
      [
       "'Boy, you really got me ___'",
       "Going",
       "Crazy",
       "Spinning"
      ],
      [
       "'I don't know what I'm ___'",
       "Doing",
       "Saying",
       "Thinking"
      ]
     ]
    ]
   }
  ],
  explicitSongs: [
   {
    "title": "Twist and Shout",
    "id": "InZt0D6glHk",
    "cuts": [
     41.7,
     91.3,
     117.7
    ],
    "qs": [
     [
      [
       "'Yo Salt, your ___'",
       "Mic",
       "Turn",
       "Beat"
      ],
      [
       "'We're def, you're ___'",
       "Right",
       "Tight",
       "Nice"
      ],
      [
       "The bass is shakin', dancin' all what?",
       "Night",
       "Day",
       "Week"
      ],
      [
       "'Shake it up, ___, now'",
       "Baby",
       "Honey",
       "Girl"
      ],
      [
       "'You gotta twist and ___'",
       "Shout",
       "Turn",
       "Spin"
      ],
      [
       "'Go ahead, and work it on ___'",
       "Out",
       "Up",
       "Down"
      ],
      [
       "'You know you look so ___'",
       "Good",
       "Fly",
       "Fine"
      ]
     ],
     [
      [
       "She thinks they're playin' their what?",
       "Song",
       "Record",
       "Jam"
      ],
      [
       "'What up? You gonna ___ up?'",
       "Get",
       "Stand",
       "Hurry"
      ],
      [
       "'Hey, don't get carried ___'",
       "Away",
       "Off",
       "Over"
      ],
      [
       "Do what the what say?",
       "Record",
       "DJ",
       "Crowd"
      ],
      [
       "'You really got me ___ now'",
       "Going",
       "Moving",
       "Dancing"
      ],
      [
       "'Just like I knew you ___'",
       "Would",
       "Could",
       "Should"
      ],
      [
       "'C'mon, c'mon, c'mon, c'mon, ___, now'",
       "Baby",
       "Honey",
       "Boy"
      ]
     ],
     [
      [
       "Who asks her to dance?",
       "Boys in the jam",
       "The DJ",
       "Her man"
      ],
      [
       "What does she tell them?",
       "No chance",
       "Maybe",
       "Later"
      ],
      [
       "She wants a man advanced in the art of what?",
       "Dance",
       "Love",
       "Rap"
      ],
      [
       "On the floor, he can take her on a what?",
       "Tour",
       "Trip",
       "Spin"
      ],
      [
       "Down like the rain and the what?",
       "Thunderstorm",
       "Lightning",
       "Hurricane"
      ],
      [
       "'Boy, come on, don't wait too ___'",
       "Long",
       "Late",
       "Slow"
      ]
     ]
    ]
   },
   {
    "title": "Get Up Everybody (Get Up)",
    "id": "SvZadDgMAqc",
    "start": 8.6,
    "cuts": [
     47.5,
     128.4,
     188.9
    ],
    "qs": [
     [
      [
       "The mic will do what as soon as she touches it?",
       "Sing",
       "Shine",
       "Talk"
      ],
      [
       "'Do this smooth and ___ like'",
       "Easy",
       "Slow",
       "Steady"
      ],
      [
       "They might get what in here tonight?",
       "Hyped",
       "Loud",
       "Wild"
      ],
      [
       "'Be nice, relax, MC's further ___'",
       "Back",
       "Down",
       "Away"
      ],
      [
       "Givin' a little bit of heart and what?",
       "Soul",
       "Mind",
       "Pride"
      ],
      [
       "She ain't going out like a what?",
       "Sucker",
       "Loser",
       "Rookie"
      ],
      [
       "Blow on the mic and make a what?",
       "Wish",
       "Sound",
       "Speech"
      ]
     ],
     [
      [
       "This groove is set to soothe and what you?",
       "Move",
       "Prove",
       "Lose"
      ],
      [
       "Spinderella, her DJ, is a turntable what?",
       "Trooper",
       "Master",
       "Wizard"
      ],
      [
       "Her partner Pepa is a power what?",
       "Booster",
       "Player",
       "Station"
      ],
      [
       "She grabs a microphone and then starts what?",
       "Dustin'",
       "Bustin'",
       "Rhymin'"
      ],
      [
       "'Spinderella, please drop some ___ on'",
       "Beats",
       "Records",
       "Bombs"
      ],
      [
       "She kicks lyrics on the beats who made?",
       "Hurb",
       "Spin",
       "Pep"
      ],
      [
       "What's the record called?",
       "Get Up",
       "Push It",
       "Stand Up"
      ]
     ],
     [
      [
       "'Salty, that's me flippin' on ___'",
       "MCs",
       "DJs",
       "Beats"
      ],
      [
       "Def, dumb, dope, completely what?",
       "Phenomenal",
       "Original",
       "Incredible"
      ],
      [
       "She grips the microphone like a what?",
       "Pitbull terrier",
       "Bulldog",
       "Lion"
      ],
      [
       "Lovers are her brothers and what?",
       "Sisters",
       "Cousins",
       "Friends"
      ],
      [
       "All in all, over ten billion what?",
       "Listeners",
       "Dancers",
       "Records"
      ],
      [
       "The hypest and ripest sound of the what?",
       "Year",
       "Block",
       "Night"
      ]
     ]
    ]
   },
   {
    "title": "Champagne",
    "id": "i1yZxvaNPeg",
    "start": 8.8,
    "cuts": [
     49.4,
     107.9,
     176.6
    ],
    "qs": [
     [
      [
       "Get down with the what?",
       "Party",
       "Music",
       "Crowd"
      ],
      [
       "'I'm the Big ___'",
       "Kahuna",
       "Cheese",
       "Boss"
      ],
      [
       "'I got the whole ___'",
       "Shebang",
       "Package",
       "Crew"
      ],
      [
       "Tight what, everywhere she goes?",
       "Security",
       "Crew",
       "Rhymes"
      ],
      [
       "Party over here, me and my what?",
       "Peeps",
       "Girls",
       "Fam"
      ],
      [
       "Groovin' to what kind of beats?",
       "Roughneck",
       "Funky",
       "Boom-bap"
      ],
      [
       "She's as hot as daylight where?",
       "Jamaica",
       "Miami",
       "Brooklyn"
      ]
     ],
     [
      [
       "With the La-Di-Da-Di, we like to what?",
       "Party",
       "Dance",
       "Rhyme"
      ],
      [
       "'We don't cause ___'",
       "Trouble",
       "Drama",
       "Problems"
      ],
      [
       "'Yeah, back up little ___'",
       "One",
       "Girl",
       "Man"
      ],
      [
       "When it comes to scandalous, she's what?",
       "Numero uno",
       "Number two",
       "The queen"
      ],
      [
       "'Shakin', the record ___'",
       "Breakin'",
       "Makin'",
       "Takin'"
      ],
      [
       "'Big Willie, illy-silly ___'",
       "Rabbit",
       "Rapper",
       "Rascal"
      ],
      [
       "'Trust me, we be the life of the ___'",
       "Jam",
       "Night",
       "Block"
      ]
     ],
     [
      [
       "'Put 'em up, ___'",
       "Reach",
       "High",
       "Now"
      ],
      [
       "After the ladies, she calls for all her what?",
       "Fellas",
       "Homies",
       "DJs"
      ],
      [
       "'North, south, to the east, to the ___'",
       "West",
       "Top",
       "Sky"
      ],
      [
       "She's rollin' in the big what?",
       "Bucks",
       "Benz",
       "Leagues"
      ],
      [
       "'You wanna be a Pepa, too? Well, it's ___ time'",
       "Party",
       "Show",
       "Your"
      ],
      [
       "No line, she's what?",
       "V.I.P.",
       "Guest list",
       "Backstage"
      ]
     ]
    ]
   },
   {
    "title": "Whatta Man",
    "id": "5vgV_dVkXN4",
    "start": 35.4,
    "cuts": [
     70.2,
     158.9,
     225.6
    ],
    "qs": [
     [
      [
       "She wants to take a minute or two and give much what?",
       "Respect",
       "Love",
       "Praise"
      ],
      [
       "He's the man that made a difference in her what?",
       "World",
       "Life",
       "Heart"
      ],
      [
       "'That he said, ___ said crowd'",
       "She",
       "They",
       "We"
      ],
      [
       "She knows that ain't nobody what?",
       "Perfect",
       "Honest",
       "Faithful"
      ],
      [
       "She gives props to those who what?",
       "Deserve it",
       "Earn it",
       "Need it"
      ],
      [
       "Here's to the future, 'cause we got through the what?",
       "Past",
       "Storm",
       "Night"
      ],
      [
       "She finally found somebody that can make her what?",
       "Laugh",
       "Smile",
       "Dance"
      ]
     ],
     [
      [
       "Her man is smooth like who?",
       "Barry",
       "Marvin",
       "Teddy"
      ],
      [
       "A body like Arnold with a what face?",
       "Denzel",
       "Wesley",
       "Eddie"
      ],
      [
       "He's smart like a what?",
       "Doctor",
       "Lawyer",
       "Teacher"
      ],
      [
       "He always got a what for her every time she sees him?",
       "Gift",
       "Smile",
       "Song"
      ],
      [
       "He keeps her on Cloud Nine just like the who?",
       "Temps",
       "Four Tops",
       "Jacksons"
      ],
      [
       "She knows her name is not what?",
       "Susan",
       "Sharon",
       "Linda"
      ],
      [
       "Good men are hard to what?",
       "Find",
       "Keep",
       "Trust"
      ]
     ],
     [
      [
       "He's a real smooth brother, never in a what?",
       "Rush",
       "Fight",
       "Mood"
      ],
      [
       "He spends quality time with who?",
       "His kids",
       "His mom",
       "His crew"
      ],
      [
       "He's secure in his manhood 'cause he's a what?",
       "Real man",
       "Rich man",
       "Family man"
      ],
      [
       "Don't take him for a what?",
       "Sucker",
       "Fool",
       "Joke"
      ],
      [
       "Every time she needs him, he always got her what?",
       "Back",
       "Hand",
       "Heart"
      ],
      [
       "Who taught him never to be disrespectful?",
       "His mama",
       "His papa",
       "His coach"
      ]
     ]
    ]
   },
   {
    "title": "Push It",
    "id": "vCadcBR95oU",
    "start": 11,
    "cuts": [
     51.3,
     82.2,
     184.4
    ],
    "qs": [
     [
      [
       "'Ooh, baby, baby, ___, baby'",
       "Baby",
       "Honey",
       "Sugar"
      ],
      [
       "'Get up on ___'",
       "This",
       "That",
       "It"
      ],
      [
       "'Ah, ___ it'",
       "Push",
       "Shake",
       "Work"
      ],
      [
       "'Ow! ___!'",
       "Baby",
       "Yeah",
       "Hey"
      ],
      [
       "Who's here?",
       "Salt-N-Pepa",
       "Spinderella",
       "The DJ"
      ],
      [
       "How does the hook start? '___, push it'",
       "Ah",
       "Oh",
       "Yo"
      ]
     ],
     [
      [
       "'Now, now, now, wait a minute ___'",
       "Y'all",
       "Baby",
       "Fellas"
      ],
      [
       "This dance ain't for who?",
       "Everybody",
       "Nobody",
       "The guys"
      ],
      [
       "Get on out there and do what?",
       "Dance",
       "Party",
       "Jump"
      ],
      [
       "'Salt-N-Pepa's here, and we're in ___'",
       "Effect",
       "Control",
       "Charge"
      ],
      [
       "'Want you to push it ___'",
       "Back",
       "Hard",
       "Up"
      ],
      [
       "Cooling by day, then at night, working up a what?",
       "Sweat",
       "Storm",
       "Plan"
      ],
      [
       "Number one in a hot what?",
       "Party show",
       "Dance floor",
       "Radio show"
      ]
     ],
     [
      [
       "'Push it real ___'",
       "Good",
       "Hard",
       "Slow"
      ],
      [
       "'Yo, yo, yo, yo, baby-___'",
       "Pop",
       "Doll",
       "Boy"
      ],
      [
       "'Yeah, you! Come here, gimme a ___'",
       "Kiss",
       "Hug",
       "Call"
      ],
      [
       "Can't you hear the music doing what hard?",
       "Pumping",
       "Bumping",
       "Thumping"
      ],
      [
       "'Boy, you really got me ___'",
       "Going",
       "Crazy",
       "Spinning"
      ],
      [
       "'I don't know what I'm ___'",
       "Doing",
       "Saying",
       "Thinking"
      ]
     ]
    ]
   }
  ]
};
(function(){try{if(window.CFG.explicitSongs&&localStorage.getItem("ogfan99explicit")==="1"){window.CFG.songs=window.CFG.explicitSongs;window.CFG.saveKey+="x";}}catch(e){}})();
