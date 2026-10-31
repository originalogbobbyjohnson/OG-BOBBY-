/* Roxanne Shanté: Queensbridge, Queens. The Queen of Rox, the Juice Crew's teenage battle legend, "Roxanne's Revenge" (1984), cut in Marley Marl's Queensbridge apartment. */
window.CFG = {
  name: "Roxanne Shanté", nameUpper: "ROXANNE SHANTÉ", short: "SHANTÉ",
  hood: "Queensbridge", hoodUpper: "QUEENSBRIDGE", boro: "Queens",
  saveKey: "ogfan99roxanneshante1",
  /* everybody starts out wack; rock on up to the Queen of Rox */
  startRank: "Wack MC",
  ranks: ["Def Fresh", "Live On Stage", "Go On Girl", "Juice Crew", "Shanté Rox On"],
  topRank: "Queen of Rox",
  point: "Request", points: "Requests",
  rankRewards: {
    "Def Fresh": { bongs: 5, line: "Def Fresh. Now they're paying attention." },
    "Live On Stage": { bongs: 10, line: "Live On Stage. The crowd is yours." },
    "Go On Girl": { bongs: 15, line: "Go On Girl. Watch the girl go." },
    "Juice Crew": { bongs: 20, line: "Juice Crew. You're down with the Bridge." },
    "Shanté Rox On": { bongs: 25, line: "You run all of Queensbridge." }
  },
  trophyArt: [
    /* Wack MC: a cassette with its tape all tangled out */
    '<rect x="14" y="40" width="52" height="34" rx="3" fill="#6b6b73" stroke="#333" stroke-width="1.5"/><rect x="22" y="46" width="36" height="12" fill="#e8e0cc"/>' +
    '<circle cx="30" cy="64" r="5" fill="#333"/><circle cx="50" cy="64" r="5" fill="#333"/>' +
    '<path d="M30 74q-10 10 2 8q14 -4 0 -12q-8 -4 10 -2q18 2 6 12q-8 6 4 4" stroke="#5a3a20" stroke-width="1.5" fill="none"/>',
    /* Def Fresh: big gold door-knocker earrings */
    '<path d="M28 18v10" stroke="#c9a24a" stroke-width="2"/><path d="M52 18v10" stroke="#c9a24a" stroke-width="2"/>' +
    '<path d="M28 28q-16 10 -12 30q6 18 12 18q6 0 12 -18q4 -20 -12 -30z" fill="none" stroke="#f2c14e" stroke-width="5"/>' +
    '<path d="M52 28q-16 10 -12 30q6 18 12 18q6 0 12 -18q4 -20 -12 -30z" fill="none" stroke="#f2c14e" stroke-width="5"/><circle cx="28" cy="18" r="3" fill="#e84a8a"/><circle cx="52" cy="18" r="3" fill="#e84a8a"/>',
    /* Live On Stage: a mic on a stand under a spotlight */
    '<path d="M24 6L56 6L70 78H10z" fill="#fff3b0" opacity=".25"/><rect x="38" y="40" width="4" height="38" fill="#9aa3ad"/><path d="M26 78h28" stroke="#9aa3ad" stroke-width="3"/>' +
    '<rect x="34" y="18" width="12" height="24" rx="6" fill="#c9ced6" stroke="#333" stroke-width="1.5"/><path d="M35 26h10M35 31h10" stroke="#555"/>',
    /* Go On Girl: a silver boombox */
    '<path d="M24 38q16 -12 32 0" stroke="#c9ced6" stroke-width="3" fill="none"/><rect x="6" y="38" width="68" height="38" rx="5" fill="#2b2b33" stroke="#9aa3ad" stroke-width="1.5"/>' +
    '<circle cx="20" cy="60" r="10" fill="#111" stroke="#9aa3ad"/><circle cx="60" cy="60" r="10" fill="#111" stroke="#9aa3ad"/><rect x="32" y="50" width="16" height="12" fill="#171a20" stroke="#9aa3ad"/><rect x="30" y="42" width="20" height="4" fill="#f2c14e"/><rect x="32" y="68" width="4" height="3" fill="#e84a8a"/><rect x="38" y="68" width="4" height="3" fill="#3fc1c9"/><rect x="44" y="68" width="4" height="3" fill="#f2c14e"/>',
    /* Juice Crew: a black 12-inch with an orange juice label */
    '<circle cx="40" cy="44" r="32" fill="#111"/><circle cx="40" cy="44" r="24" fill="none" stroke="#2c2c2c"/><circle cx="40" cy="44" r="15" fill="#ff9a2e"/>' +
    '<text x="40" y="42" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" fill="#111">JUICE</text><text x="40" y="50" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="6" fill="#111">CREW</text>',
    /* Shanté Rox On: gold rope chain with a nameplate */
    '<path d="M14 8q26 54 52 0" stroke="#e2b13c" stroke-width="4" fill="none" stroke-dasharray="5 2"/>' +
    '<rect x="16" y="48" width="48" height="20" rx="4" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5"/><text x="40" y="63" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="12" fill="#7a2a4a">Shanté</text>',
    /* Queen of Rox: a crown on a pink record */
    '<circle cx="40" cy="60" r="20" fill="#e84a8a" stroke="#7a1f4a" stroke-width="2"/><circle cx="40" cy="60" r="7" fill="#f2c14e"/><circle cx="40" cy="60" r="1.5" fill="#fff"/>' +
    '<path d="M16 40l6 -26 10 14 8 -20 8 20 10 -14 6 26z" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/><circle cx="40" cy="34" r="3" fill="#3fc1c9"/><circle cx="26" cy="36" r="2" fill="#e84a8a"/><circle cx="54" cy="36" r="2" fill="#e84a8a"/>'
  ],
  clubTitle: "The Juice Crew", clubTab: "JUICE",
  tags: ["JUICE CREW", "GO ON GIRL", "QUEEN OF ROX"],
  c1: "#f2c14e", c2: "#e84a8a", c3: "#3fc1c9", bg: "#1a0f24",
  /* Queensbridge: the Queensboro Bridge spans and spired towers over the low Y-shaped Houses */
  headerSvg: (function () {
    let s = '<rect x="0" y="40" width="400" height="3"/><path d="M0 40L50 30L100 40L150 30L200 40L250 30L300 40L350 30L400 40" stroke="#f7f3ea" stroke-width="2" fill="none"/>';
    [100, 300].forEach(x => { s += '<rect x="' + (x - 4) + '" y="10" width="8" height="30"/><path d="M' + (x - 4) + ' 10l4 -9 4 9z"/>'; });
    for (let x = 0; x < 400; x += 56) s += '<rect x="' + (x + 4) + '" y="46" width="22" height="18"/><rect x="' + (x + 26) + '" y="50" width="16" height="14"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 7, N or W to Queensboro Plaza. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "radio", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "jam", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "sculpture", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO QUEENSBRIDGE", x: "12th St and 40th Av inside the Queensbridge Houses. This is Roxanne Shanté's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Wack Itt", id: "-cQ7xKG5Lzc", cuts: [66.8, 107.6, 197.0], qs: [
      [
        ["What does she call this dance?", "The Wack Itt", "The Wop", "The Snake"],
        ["How often does she do it?", "All the time", "Once a week", "On weekends"],
        ["Some people just can't what?", "Hack it", "Stop it", "Take it"],
        ["If it's cold outside, put on a what?", "Jacket", "Hat", "Scarf"],
        ["She's here to tell you, and we know this for a what?", "Fact", "Reason", "Minute"],
        ["Where is she sitting?", "In my room", "On the stoop", "On the train"],
        ["She decided to get what?", "Wacky", "Busy", "Ready"]
      ],
      [
        ["She was really thinking about some what?", "Things", "People", "Records"],
        ["Things that make her what?", "Mad", "Glad", "Tired"],
        ["\"I mean come on, let's be for...\" what?", "Real", "Sure", "Fun"],
        ["She didn't want to what?", "Say it", "Sing it", "Play it"],
        ["\"But not too...\" what?", "Tight", "Fast", "Loud"],
        ["Throw your hands up where?", "In the air", "To the sky", "On the wall"],
        ["\"Like you don't...\" what?", "Care", "Stop", "Know"]
      ],
      [
        ["Some people don't want to what?", "Resist", "Rest", "Leave"],
        ["They listen to the what?", "Beat", "Radio", "Crowd"],
        ["They start to jump up in their what?", "Pants", "Seats", "Shoes"],
        ["She told you how to do the what?", "Dance", "Rhyme", "Show"],
        ["\"Get on the...\" what?", "Floor", "Mic", "Stage"],
        ["This is known as a matter of what?", "Fact", "Time", "Style"],
        ["\"Stop the...\" what?", "Track", "Car", "Show"]
      ]
    ] },
    { title: "Go On Girl", id: "E1YAqCumPn8", cuts: [53.8, 84.9, 103.8], qs: [
      [
        ["Her rhymes get better and what?", "Better", "Bigger", "Faster"],
        ["People try to do what off the queen?", "Copy", "Run", "Hide"],
        ["She can knock you out the what?", "Box", "Ring", "Door"],
        ["She calls herself a what?", "Superhero", "Superstar", "Supermodel"],
        ["She's got a role no other girl can what?", "Portray", "Play", "Take"],
        ["\"If you want to describe me, this is what you...\" what?", "Say", "Do", "Write"],
        ["\"Pay attention, listen, watch the...\" what?", "Girl go", "Show", "Beat drop"]
      ],
      [
        ["\"Well, here's another...\" what?", "Chapter", "Story", "Verse"],
        ["\"You may be older than me but you're...\" what?", "New to this", "Slow at this", "Done with this"],
        ["She's been out there as queen of what?", "MCs", "The block", "The radio"],
        ["What were you over here perpetrating?", "A fraud", "A lie", "A trick"],
        ["Where was she meanwhile?", "Overseas", "Uptown", "At home"],
        ["She was on the chart with who?", "Boy George", "Michael Jackson", "Prince"]
      ],
      [
        ["What does she call you?", "The beginner", "The winner", "The champ"],
        ["\"Shanté is the...\" what?", "Winner", "Singer", "Teacher"],
        ["She's having another competition for what?", "Dinner", "Breakfast", "Lunch"],
        ["\"Step back, cuz I can hold my...\" what?", "Own", "Ground", "Breath"],
        ["Everyone, y'all be what?", "Easy", "Quiet", "Ready"],
        ["Why should y'all be easy?", "This girl is gone", "The show is over", "The beat is done"]
      ]
    ] },
    { title: "Queen of Rox (Shanté Rox On)", id: "o62c8XPcQ8w", cuts: [76.9, 103.4, 286.0], qs: [
      [
        ["\"Let me tell you a...\" what?", "Story", "Secret", "Joke"],
        ["Where was she sitting?", "Upstairs", "On the stoop", "In the park"],
        ["What was she listening to?", "The radio", "A tape", "The TV"],
        ["What did the radio announce?", "A contest", "A concert", "A party"],
        ["Everybody knew she was down, all around what?", "Town", "School", "The block"],
        ["What place did she come in?", "First place", "Second place", "Third place"],
        ["You should've seen the reaction on her what?", "Face", "Crew", "Mom"]
      ],
      [
        ["They asked her to do what?", "Write this", "Sing this", "Sign this"],
        ["It's the most what record on the radio?", "Requested", "Played", "Popular"],
        ["Where is that record playing?", "On the radio", "In the club", "On TV"],
        ["What did she answer?", "Yeah, I'll do it", "No thanks", "Maybe later"],
        ["She got on the what?", "Mic", "Train", "Stage"],
        ["Something that they didn't want to what?", "Understand", "Hear", "Believe"]
      ],
      [
        ["He just ran away cause he's a what?", "Runaway", "Rookie", "Sucker"],
        ["She's the queen of what?", "Rox", "Queens", "Rap"],
        ["Whose name do you hear at the end?", "Roxanne Shanté", "Queen Latifah", "MC Lyte"],
        ["Which record of hers gets named at the end?", "Roxanne's Revenge", "Go On Girl", "Live On Stage"],
        ["Roxanne's Revenge answered which group?", "UTFO", "Run-DMC", "Whodini"],
        ["UTFO's song was called what?", "Roxanne, Roxanne", "Hanging Out", "Fairytale Lover"]
      ]
    ] },
    { title: "Live On Stage", locked: true, cuts: [], qs: [] },
    { title: "Roxanne's Revenge", locked: true, cuts: [], qs: [] }
  ]
};
