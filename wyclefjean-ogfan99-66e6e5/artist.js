/* Wyclef Jean: born in Haiti, a preacher's son, grew up in Brooklyn and then Newark (Vailsburg High School). Founded the Fugees
   with Lauryn Hill and Pras, ran the Refugee Camp. Solo albums: The Carnival, The Ecleftic, Masquerade, The Preacher's Son.
   Fans start as a "Runaway" and climb his album titles to Mr. President ("If I Was President"). Points are Haitian gourdes. */
window.CFG = {
  name: "Wyclef Jean", nameUpper: "WYCLEF JEAN", short: "CLEF",
  hood: "Newark", hoodUpper: "NEWARK", boro: "New Jersey",
  saveKey: "ogfan99wyclefjean1",
  startRank: "Runaway",
  ranks: ["Masquerade", "The Carnival", "Perfect Gentleman", "Preacher's Son", "Ecleftic"],
  topRank: "Mr. President",
  point: "Gourde", points: "Gourdes",
  rankRewards: {
    "Masquerade": { bongs: 5, line: "Mask off. You're in." },
    "The Carnival": { bongs: 10, line: "Welcome to the Carnival." },
    "Perfect Gentleman": { bongs: 15, line: "A perfect gentleman." },
    "Preacher's Son": { bongs: 20, line: "Raised right, like the preacher's son." },
    "Ecleftic": { bongs: 25, line: "You run all of Newark." }
  },
  trophyArt: [
    /* Runaway: a running sneaker */
    '<path d="M10 66q0-14 12-16l14-2 10-14 8 4-4 12q14 2 22 10t-2 10H14q-4 0-4-4z" fill="#f1ede3" stroke="#333" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M10 70h62" stroke="#d21034" stroke-width="5"/><path d="M30 52l6 6M36 50l6 6M42 48l6 6" stroke="#2f6bff" stroke-width="2"/>',
    /* Masquerade: a carnival mask on a stick */
    '<path d="M8 40q16-14 32 0q16-14 32 0q-4 22-20 22q-8 0-12-8q-4 8-12 8q-16 0-20-22z" fill="#2f6bff" stroke="#0d1f60" stroke-width="2"/>' +
    '<ellipse cx="26" cy="44" rx="7" ry="5" fill="#0b1230"/><ellipse cx="54" cy="44" rx="7" ry="5" fill="#0b1230"/>' +
    '<path d="M66 54l8 26" stroke="#ffd23f" stroke-width="3"/><path d="M14 30l-6-12M40 26v-14M66 30l6-12" stroke="#d21034" stroke-width="3" stroke-linecap="round"/>',
    /* The Carnival: a little Ferris wheel */
    '<circle cx="40" cy="38" r="26" fill="none" stroke="#ffd23f" stroke-width="3"/><path d="M40 12v52M14 38h52M22 20l36 36M58 20l-36 36" stroke="#ffd23f" stroke-width="1.5"/>' +
    '<path d="M40 38l-16 40M40 38l16 40" stroke="#9aa3b5" stroke-width="3"/><circle cx="40" cy="38" r="4" fill="#d21034"/>' +
    '<rect x="35" y="8" width="10" height="8" rx="2" fill="#d21034"/><rect x="61" y="34" width="10" height="8" rx="2" fill="#2f6bff"/><rect x="9" y="34" width="10" height="8" rx="2" fill="#3fbf6a"/><rect x="35" y="60" width="10" height="8" rx="2" fill="#ffd23f"/>',
    /* Perfect Gentleman: top hat and bow tie */
    '<rect x="22" y="12" width="36" height="34" rx="2" fill="#1b1b1f"/><rect x="22" y="38" width="36" height="6" fill="#d21034"/><rect x="10" y="44" width="60" height="7" rx="3" fill="#1b1b1f"/>' +
    '<path d="M24 62l14 8-14 8zM56 62l-14 8 14 8z" fill="#2f6bff" stroke="#0d1f60" stroke-width="1.5"/><circle cx="40" cy="70" r="4" fill="#ffd23f"/>',
    /* Preacher's Son: an open book under a church window */
    '<path d="M28 34v-12a12 12 0 0 1 24 0v12z" fill="#2a3a7a" stroke="#ffd23f" stroke-width="2"/><path d="M40 12v22M30 24h20" stroke="#ffd23f" stroke-width="1.5"/>' +
    '<path d="M8 50q16-6 32 2q16-8 32-2v26q-16-6-32 2q-16-8-32-2z" fill="#f1ede3" stroke="#6b3d10" stroke-width="2"/><path d="M40 52v26" stroke="#6b3d10" stroke-width="2"/>' +
    '<path d="M14 58h20M14 64h20M46 58h20M46 64h20" stroke="#999" stroke-width="1.2"/>',
    /* Ecleftic: a gold acoustic guitar */
    '<g transform="rotate(-20 40 50)"><rect x="37" y="4" width="6" height="44" fill="#7a4a1a"/><rect x="35" y="0" width="10" height="8" rx="2" fill="#3a2410"/>' +
    '<ellipse cx="40" cy="48" rx="13" ry="13" fill="#ffd23f" stroke="#7a5a10" stroke-width="2"/><ellipse cx="40" cy="66" rx="17" ry="14" fill="#ffd23f" stroke="#7a5a10" stroke-width="2"/><ellipse cx="40" cy="60" rx="14" ry="12" fill="#ffd23f"/>' +
    '<circle cx="40" cy="56" r="5" fill="#3a2410"/><rect x="33" y="68" width="14" height="3" fill="#3a2410"/><path d="M39 6v62M41 6v62" stroke="#fff" stroke-width=".5"/></g>',
    /* Mr. President: a gold podium with a star and a microphone */
    '<path d="M18 40h44l-6 38H24z" fill="#ffd23f" stroke="#7a5a10" stroke-width="2"/><path d="M40 48l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z" fill="#00209f"/>' +
    '<path d="M40 40V22" stroke="#333" stroke-width="2.5"/><rect x="35" y="12" width="10" height="12" rx="5" fill="#c9ccd2" stroke="#555" stroke-width="1.5"/>' +
    '<rect x="14" y="36" width="52" height="6" rx="2" fill="#d21034"/>'
  ],
  clubTitle: "The Refugee Camp", clubTab: "CAMP",
  tags: ["REFUGEE CAMP", "OUI OUI", "CLEF"],
  c1: "#ffd23f", c2: "#2f6bff", c3: "#e8323c", bg: "#0b1230",
  /* Newark skyline: Penn Station's stepped top, downtown towers, the cathedral's twin towers */
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    s += '<rect x="20" y="34" width="120" height="22"/><rect x="56" y="24" width="48" height="10"/><rect x="70" y="16" width="20" height="8"/>';
    s += '<rect x="160" y="10" width="26" height="46"/><rect x="192" y="22" width="22" height="34"/><rect x="220" y="4" width="18" height="52"/><path d="M220 4l9-4 9 4z"/>';
    s += '<rect x="290" y="34" width="70" height="22"/><path d="M290 34l35-22 35 22z"/><rect x="282" y="10" width="16" height="46"/><rect x="352" y="10" width="16" height="46"/>';
    return s;
  })() + '</g>',
  socials: [
    { name: "Instagram", handle: "@wyclef", url: "https://www.instagram.com/wyclef/" },
    { name: "YouTube", handle: "@wyclef", url: "https://www.youtube.com/@wyclef" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the PATH or NJ Transit to Newark Penn Station. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "cathedral", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "carnival", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "coaster" },
    { scene: "stage", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO NEWARK", x: "South Orange Ave and Sandford Ave in Vailsburg. This is Wyclef Jean's game.", sfx: "spray" }
  ]
};

/* Songs format: 3 clean songs from the synced-lyrics store, 3 verse stops each, 11 questions per stop = 99.
   Runaway first, Dance Like This, then the hit Two Wrongs as the boss. No curse words heard up to any last cut. */
window.CFG.songs = [
  { title: "Runaway", id: "rLivTabMK-w", cuts: [87.6, 145.5, 204.8], qs: [
    [
      ["Which band does he introduce?", "Earth, Wind & Fire", "The Jackson 5", "Kool & the Gang"],
      ["He asks if y'all are ready for the what?", "Refugee camp", "Carnival", "Party"],
      ["How much money is in his pocket?", "No money", "A dollar", "Plenty"],
      ["All he ever wanted was a fancy what?", "Car", "House", "Watch"],
      ["A crib for who?", "My mom", "My girl", "My crew"],
      ["New cop flicks with who?", "Clint Eastwood", "Bruce Willis", "Eddie Murphy"],
      ["He went from a teen to a what?", "Young adult", "Grown man", "Big star"],
      ["No excuses, ain't my what?", "Fault", "Time", "Problem"],
      ["We living like what?", "Runaways", "Royalty", "Rock stars"],
      ["Wake up, stretching in the what?", "Morning", "Kitchen", "Mirror"],
      ["Brush my what?", "Teeth", "Hair", "Shoes"]
    ],
    [
      ["'Yo, where you at?' Who is he calling?", "G&B", "Pras", "Lauryn"],
      ["Momma came home from a hard day's what?", "Work", "Shopping", "Trip"],
      ["In the daytime, Momma was a what?", "Maid", "Teacher", "Cook"],
      ["At nighttime, Momma was a what?", "Nurse", "Singer", "Driver"],
      ["She worked so hard to make sure we what?", "Survived", "Moved", "Smiled"],
      ["Living a ghetto what?", "Paradise", "Life", "Dream"],
      ["Sometimes I wake up screaming in the middle of the what?", "Night", "Street", "Day"],
      ["Hoping that darkness brings me what?", "Light", "Peace", "Luck"],
      ["Praying for that better what?", "Day", "Life", "Job"],
      ["After 'brush my teeth', hit the what?", "Streets", "Books", "Road"],
      ["I didn't want to runaway, but I had to get what?", "Away", "Out", "Home"]
    ],
    [
      ["Who does he present to the ladies and gentlemen?", "Earth, Wind & Fire", "The Fugees", "Lauryn Hill"],
      ["What do the voices sing next?", "Ba dow bo", "Na na na", "La di da"],
      ["He asks for more what, y'all?", "Peace", "Noise", "Love"],
      ["What does he do first thing when he wakes up?", "Stretch", "Eat", "Pray"],
      ["We living like what, once again?", "Runaways", "Kings", "Strangers"],
      ["Stretching in the morning, trying to make it through the what?", "Day", "Night", "Rain"],
      ["Brush my teeth, then hit the what?", "Streets", "Gym", "Books"],
      ["Hoping one day we don't have to what?", "Run away", "Go to work", "Stay"],
      ["I didn't want to leave what?", "Astray", "Alone", "Early"],
      ["But sometimes I gotta get what?", "Away", "Paid", "Up"],
      ["I didn't want to go away, but I had to go where?", "Away", "Home", "Back"]
    ]
  ] },
  { title: "Dance Like This", id: "BjHqv3cGJcE", cuts: [78.3, 125.9, 173.6], qs: [
    [
      ["He says he ain't come to do what tonight?", "Fight", "Sing", "Sleep"],
      ["Everybody report to the what, please?", "Dance floor", "Front door", "Stage"],
      ["She makes her man wanna speak what?", "Spanish", "French", "Creole"],
      ["Mi casa, su what?", "Casa", "Vida", "Cosa"],
      ["The way you move, you've got me what?", "Hypnotized", "Surprised", "Excited"],
      ["Especially when I look into his what?", "Eyes", "Face", "Heart"],
      ["I wanna see you do the dance to the what?", "Conga", "Salsa", "Mambo"],
      ["Hey girl, it's driving me what?", "Crazy", "Home", "Wild"],
      ["I did not have the slightest what?", "Idea", "Clue", "Doubt"],
      ["Nobody could what the way you move?", "Ignore", "Copy", "Stop"],
      ["Baila la calle de noche, baila la calle de what?", "Dia", "Luna", "Fiesta"]
    ],
    [
      ["Hey boy, now that I see your new what?", "Rhythm", "Style", "Shoes"],
      ["I'm in a state of what now?", "Shock", "Love", "Mind"],
      ["I don't want you to what now?", "Stop", "Leave", "Wait"],
      ["You got me in a what, boy?", "Daze", "Dream", "Spin"],
      ["You got me in a what and I can't explain it?", "Trance", "Hurry", "Corner"],
      ["I can't ignore the way you're what?", "Dancin'", "Talkin'", "Walkin'"],
      ["Never really knew that you could what like this?", "Dance", "Sing", "Cook"],
      ["Como se llama, what?", "Bonita", "Mamita", "Chica"],
      ["The way you move has got me what, again?", "Hypnotized", "Confused", "Dizzy"],
      ["'Hey' who, I wanna see you do the dance?", "Papi", "Mami", "Baby"],
      ["Baila la calle de what, first?", "Noche", "Dia", "Luna"]
    ],
    [
      ["Señorita, feel the what?", "Conga", "Rhythm", "Music"],
      ["Who is told to feel the conga?", "Señorita", "Papi", "Bonita"],
      ["Move like you come from where?", "Havana", "Haiti", "Miami"],
      ["Oh, I didn't know you did it like what?", "That", "Before", "Them"],
      ["Hey you Papi, don't you what?", "Stop it", "Drop it", "Lose it"],
      ["I wanna see you move your what?", "Body", "Feet", "Hands"],
      ["Who wants to speak Spanish?", "Her man", "Her mom", "The DJ"],
      ["Mi casa, su casa, then 'the way you' what?", "Move", "Talk", "Smile"],
      ["I look into whose eyes?", "His", "Hers", "Theirs"],
      ["What does she say she never really knew?", "You could dance like this", "You could sing", "You were from Havana"],
      ["Hey Papi, do the dance to the what?", "Conga", "Tango", "Twist"]
    ]
  ] },
  { title: "Two Wrongs", id: "1RZu71ahCtI", cuts: [110, 167, 228], qs: [
    [
      ["What is he playing at the start?", "The guitar", "The piano", "The drums"],
      ["Which group is featured?", "City High", "The Fugees", "Destiny's Child"],
      ["Who does he name next to himself?", "Claudette", "Lauryn", "Pras"],
      ["Deep in my mind, I'm only what?", "Dreaming", "Thinking", "Sleeping"],
      ["If you're not by my side, half of me is no longer what?", "Alive", "Here", "Happy"],
      ["Before you walk out that what?", "Door", "Room", "Car"],
      ["Would you listen to my what?", "Song", "Heart", "Story"],
      ["Excuse me, if you see me what?", "Screaming", "Crying", "Running"],
      ["If I wake and you're not by my what?", "Side", "Bed", "Door"],
      ["They say two wrongs don't make it what?", "Right", "Better", "Easy"],
      ["I'm tryin' to have some dinner with some what?", "Candlelight", "Music", "Friends"]
    ],
    [
      ["Now baby I understand that I what you?", "Forgive", "Believe", "Need"],
      ["But I ain't gon' forget that you brought me what?", "Pain", "Flowers", "Home"],
      ["He says he has grown into a what?", "Man", "Star", "King"],
      ["Built my castle with what?", "Bricks", "Gold", "Stone"],
      ["No longer with what?", "Sand", "Wood", "Lies"],
      ["Just before I walk out that door, I might listen to your what?", "Song", "Words", "Heart"],
      ["So if I'm wrong, I ain't tryin' to what?", "Fight", "Lie", "Leave"],
      ["So papi I won't leave, maybe I'll just what?", "Stay", "Wait", "Go"],
      ["But promise me that you'll do the what?", "Same", "Dishes", "Right"],
      ["Girl, I'ma love you like I never what you?", "Loved", "Knew", "Held"],
      ["If you give me the chance girl, I'm gon' what you?", "Show", "Tell", "Call"]
    ],
    [
      ["I'm so used to what?", "Rain", "Snow", "Fame"],
      ["I can't see the what no more?", "Sunshine", "Stars", "Road"],
      ["So used to the pain, the sickness feels like the what?", "Cure", "End", "Truth"],
      ["If only you gave me the keys to your what?", "Soul", "House", "Car"],
      ["Let me in, and then what?", "I'm gonna love you", "I'm gonna leave", "I'm gonna sing"],
      ["How is he gonna love you?", "Over and over", "Just once", "From afar"],
      ["They say two what don't make it right?", "Wrongs", "Hearts", "Lies"],
      ["Dinner with some what, one more time?", "Candlelight", "Roses", "Music"],
      ["I ain't gon' stay on the what no more?", "Block", "Road", "Phone"],
      ["I'ma come home what, girl?", "Early", "Late", "Tonight"],
      ["How does he end it?", "I promise", "Goodbye", "Good night"]
    ]
  ] }
];
