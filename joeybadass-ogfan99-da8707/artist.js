/* Joey Bada$$ — OG FAN 99 artist config. Episodes are added separately. */
window.CFG = {
  name: "Joey Bada$$", nameUpper: "JOEY BADA$$", short: "JOEY",
  hood: "Flatbush", hoodUpper: "FLATBUSH", boro: "Brooklyn",
  saveKey: "ogfan99joeybadass1",
  /* Rejex (2012 tape) -> Summer Knights (2013 tape) -> Jozif Badmon (his alias) -> Beast Coast (his collective) -> Bada$$ */
  startRank: "Reject", ranks: ["Summer Knight", "Badmon", "Beast"], topRank: "Bada$$",
  /* "Dark Aura" (2025 single) */
  point: "Aura", points: "Aura",
  rankRewards: {
    "Summer Knight": { bongs: 5, line: "You held it down all summer. Welcome to the knights." },
    "Badmon": { bongs: 10, line: "Badmon ting. Flatbush knows your name now." },
    "Beast": { bongs: 25, line: "You run all of Flatbush." }
  },
  trophyArt: [
    /* Reject: a cassette stamped REJEX */
    '<rect x="14" y="40" width="52" height="34" rx="4" fill="#2b2b2b" stroke="#8d939b" stroke-width="2"/><rect x="20" y="45" width="40" height="14" rx="2" fill="#f4efe6"/>' +
    '<circle cx="30" cy="66" r="4.5" fill="#f4efe6"/><circle cx="50" cy="66" r="4.5" fill="#f4efe6"/><rect x="34" y="64" width="12" height="4" fill="#5a4a3a"/>' +
    '<g transform="rotate(-12 40 50)"><rect x="17" y="42" width="46" height="15" rx="2" fill="none" stroke="#d62828" stroke-width="2"/><text x="40" y="54" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="#d62828">REJEX</text></g>',
    /* Summer Knight: a steel knight helm under the summer sun */
    '<circle cx="40" cy="30" r="16" fill="#ffb347"/><circle cx="40" cy="30" r="12" fill="#ffd34d"/>' +
    '<path d="M24 76V50q0-20 16-20t16 20v26z" fill="#cfd4dc" stroke="#6b7280" stroke-width="2"/><path d="M40 30v46" stroke="#8d939b" stroke-width="2"/>' +
    '<rect x="27" y="50" width="26" height="4" rx="1" fill="#2b2b2b"/><rect x="27" y="57" width="26" height="3" rx="1" fill="#2b2b2b"/>' +
    '<path d="M40 30q-4-12 6-18" stroke="#1fae5b" stroke-width="3" fill="none" stroke-linecap="round"/>',
    /* Badmon: gold mic wrapped in green, gold and black */
    '<rect x="35" y="44" width="10" height="34" rx="3" fill="#2b2b2b"/><rect x="34" y="52" width="12" height="5" fill="#009b3a"/><rect x="34" y="58" width="12" height="5" fill="#fed100"/><rect x="34" y="64" width="12" height="5" fill="#009b3a"/>' +
    '<circle cx="40" cy="34" r="14" fill="#e0a52c" stroke="#7a5512" stroke-width="2"/>' +
    '<path d="M30 28h20M28 34h24M30 40h20M40 21v26M34 22v24M46 22v24" stroke="#7a5512" stroke-width="1.2"/>',
    /* Beast: gold shield, three claw marks */
    '<path d="M40 18l24 8v20q0 22-24 32-24-10-24-32V26z" fill="#e0a52c" stroke="#7a5512" stroke-width="2"/>' +
    '<path d="M30 30q4 18-2 38M40 28q4 20-2 42M50 30q4 18-2 38" stroke="#3b2418" stroke-width="4" fill="none" stroke-linecap="round"/>' +
    '<path d="M30 30q4 18-2 38M40 28q4 20-2 42M50 30q4 18-2 38" stroke="#1fae5b" stroke-width="1.2" fill="none" stroke-linecap="round"/>',
    /* Bada$$: the gold crown with the double dollar */
    '<path d="M14 72V36l13 14 13-24 13 24 13-14v36z" fill="#ffd34d" stroke="#7a5512" stroke-width="2"/>' +
    '<circle cx="14" cy="34" r="3.5" fill="#1fae5b"/><circle cx="40" cy="24" r="3.5" fill="#d62828"/><circle cx="66" cy="34" r="3.5" fill="#1fae5b"/>' +
    '<rect x="14" y="64" width="52" height="8" fill="#e0a52c" stroke="#7a5512" stroke-width="1.5"/>' +
    '<text x="40" y="62" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="17" fill="#3b2418">$$</text>'
  ],
  clubTitle: "The Pro Era Vault", clubTab: "VAULT",
  tags: ["PRO ERA", "DARK AURA", "BADMON"],
  c1: "#f2c14e", c2: "#1fae5b", c3: "#e2703a", bg: "#3a1d0e",
  /* Flatbush roofline: rowhouses, the KINGS blade sign and arch, the Erasmus Hall tower */
  headerSvg: '<g fill="#f7f3ea">' +
    '<rect x="0" y="40" width="400" height="24"/>' +
    '<rect x="0" y="30" width="44" height="34"/><rect x="48" y="26" width="40" height="38"/><rect x="92" y="32" width="36" height="32"/>' +
    '<path d="M136 64V34h86v30z"/><path d="M160 64V44a19 19 0 0 1 38 0v20z" fill="#3a1d0e" opacity=".55"/><rect x="172" y="6" width="14" height="40" rx="2"/>' +
    '<rect x="230" y="30" width="34" height="34"/><rect x="268" y="36" width="30" height="28"/>' +
    '<rect x="306" y="14" width="36" height="50"/><rect x="304" y="8" width="5" height="10"/><rect x="316" y="8" width="5" height="10"/><rect x="327" y="8" width="5" height="10"/><rect x="339" y="8" width="5" height="10"/>' +
    '<rect x="346" y="32" width="54" height="32"/></g>',
  socials: [
    { name: "Instagram", handle: "@joeybadass", url: "https://www.instagram.com/joeybadass/" },
    { name: "TikTok", handle: "@joeybadass", url: "https://www.tiktok.com/@joeybadass" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 2 or the 5 to Church Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "kings", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "organ" },
    { scene: "erasmus", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "bell" },
    { scene: "caribbean", t: "CLIMB THE RANKS", x: "Everybody starts as a Reject. Clear a row to rank up: Summer Knight, Badmon, Beast. Beat the 99 Challenge to become Bada$$.", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO FLATBUSH", x: "Church Avenue and Nostrand Avenue. This is Joey Bada$$'s game.", sfx: "spray" }
  ],
  episodes: [
  /* Timing comes from the captions on Joey Bada$$'s official YouTube uploads (Brand New 911 and Zipcodes from lrclib synced lyrics matched to the video length).
     Diss records (CRASH DUMMY, THE FINALS) skipped; MY TOWN questions use only non-diss lines. */
    { title: "Fromdatomb$", id: "ZU4tsCk2szU", start: 17, cuts: [74.7], qs: [[
      ["Who's on this song with Joey?", "Chuck Strangers", "Kirk Knight", "CJ Fly"],
      ["They're leaving everybody in what?", "Danger", "The dust", "The dark"],
      ["Resurrecting back from the what?", "The tombs", "The block", "The dead end"],
      ["They're cracking like what?", "Cocoons", "Eggs", "Glass"],
      ["Chill, act what?", "Cool", "Calm", "Right"]
    ]] },
    { title: "Hardknock", id: "Uv658wfVt6I", start: 33, cuts: [61.7], qs: [[
      ["Joey got word from his man on the what?", "The island", "The block", "The train"],
      ["His man said he needed what?", "Guidance", "Money", "A ride"],
      ["Who did he look to?", "God", "His mom", "The streets"],
      ["So he demanded what?", "Silence", "Respect", "Answers"],
      ["Beef like they let go what?", "Lions", "Dogs", "Tigers"]
    ]] },
    { title: "Show Me", id: "_6xNSq4LYqU", start: 60, cuts: [115.1], qs: [[
      ["Show me how you what?", "Care", "Feel", "Dance"],
      ["Who gets shouted out at the start?", "Statik Selektah", "DJ Premier", "Kirk Knight"],
      ["You can't spell \"us\" without what?", "Trust", "Love", "Lust"],
      ["Tell me where you been these last couple what?", "Months", "Weeks", "Years"],
      ["We could talk until the what?", "Sun up", "Lights out", "Morning news"],
      ["Be honest, I ain't what?", "Blind", "Lying", "Leaving"]
    ]] },
    { title: "Temptation", id: "mikkqeCsfIc", start: 38, cuts: [106.1, 187.3], qs: [[
      ["I've been fighting what?", "Temptations", "Battles", "Rumors"],
      ["I'm young and I'm what?", "Restless", "Broke", "Famous"],
      ["I never felt what before?", "Selfish", "Lonely", "Rich"],
      ["I've been living so what?", "Reckless", "Careful", "Quiet"],
      ["His momma was on her last what?", "Dollar", "Nerve", "Day"],
      ["I just wanna see my people what?", "Empowered", "Famous", "Moving"]
    ], [
      ["Now everybody got what?", "Vices", "Money", "Jobs"],
      ["I'll never sell my soul 'cause that's what?", "Priceless", "Mine", "Sacred"],
      ["Lord knows we just tryna live what?", "Righteous", "Forever", "Lavish"],
      ["The media just tryna make a what?", "Villain", "Profit", "Hero"],
      ["I just take the pain and paint a what?", "Picture", "Mural", "Wall"]
    ]] },
    { title: "Brand New 911", id: "mtNpXEVgry0", cuts: [41.4, 109.6], qs: [[
      ["What's brand new off the lot?", "A 911", "A Bentley", "A Benz"],
      ["How much did it cost him?", "Not a lot", "Everything", "A million"],
      ["He took it back to the what?", "The block", "The lot", "The shop"],
      ["He's counting blessings sent from where?", "Heaven", "The bank", "The label"],
      ["Now he's thinking about the what?", "The Bentley", "The Lambo", "The jet"]
    ], [
      ["Do your best not to sweat the what?", "Technique", "Small stuff", "Heat"],
      ["Behind the smoke and what?", "Mirrors", "Fire", "Lights"],
      ["Just tune into my what?", "Frequencies", "Station", "Channel"],
      ["He says rest in peace to who?", "Steez", "Biggie", "Pop"],
      ["Stay connected to what?", "Source", "Wi-Fi", "Family"],
      ["He copped the Porsche just for his what?", "Mental health", "Birthday", "Girl"]
    ]] },
    { title: "My Town", id: "lIxThTF_vzI", cuts: [52.4, 299.6], qs: [[
      ["Who's on the beat?", "Kirk", "Statik", "Premier"],
      ["The days is numbered like days of what?", "Summer", "Winter", "School"],
      ["Is it me, B, you, or what?", "A UV ray", "A laser", "A sunbeam"],
      ["Lights off when I what?", "Black out", "Walk in", "Go home"],
      ["Lightweight, I ain't even what?", "Maxed out", "Warmed up", "Tried"],
      ["The thirst for what is sad?", "Attention", "Money", "Water"]
    ], [
      ["He'll get through it fast like what?", "Ramadan", "Lightning", "A race"],
      ["Tell them real bars is back in what?", "Style", "Town", "Stock"],
      ["Joey says \"I'm a\" what?", "Gladiator", "Rookie", "Pilot"],
      ["He was at Jordan with the what?", "Kickflip", "Jump shot", "New sneakers"],
      ["Welcome to what city?", "New York City", "Atlanta", "LA"]
    ]] },
    { title: "Zipcodes", id: "Fy3070QgHV0", cuts: [40.6, 69.3, 126.8], qs: [[
      ["Who's on the beat?", "Kirk Knight", "Statik Selektah", "DJ Premier"],
      ["The Rollie came with what kind of band?", "Leather", "Gold", "Rubber"],
      ["From pissy hallways to court-side where?", "Barclays", "The Garden", "Coney Island"],
      ["Stuntin' is a what?", "Sport", "Crime", "Job"],
      ["Prices looking like a what?", "Zip code", "Phone number", "Lotto ticket"],
      ["He switches zones when it gets what?", "Cold", "Late", "Hot"]
    ], [
      ["First to arrive and last to what?", "Leave", "Eat", "Speak"],
      ["Dropped out of school, still voted most likely to what?", "Succeed", "Get rich", "Drop out"],
      ["Up late nights and early what?", "Mornings", "Flights", "Meetings"],
      ["I gave 'em fair what?", "Warnings", "Chances", "Deals"],
      ["Neck on freeze like below how many degrees?", "32", "10", "50"],
      ["Check my what?", "Steez", "Phone", "Shoes"]
    ], [
      ["If rap was a stock, a hundred million in what?", "Evaluation", "Debt", "Cash"],
      ["Y'all some pros at what?", "Procrastination", "Basketball", "Lying"],
      ["He never had what?", "Patience", "Money", "Friends"],
      ["The realest cat since who?", "Larry David", "Larry Bird", "David Letterman"],
      ["Masked up like who?", "MF DOOM", "Batman", "Spider-Man"]
    ]] },
    { title: "Paper Trail$", id: "t5Ps8Nw-TWI", start: 20, cuts: [70.4, 152.0, 204.4], qs: [[
      ["Before the money there was what?", "Love", "Nothing", "School"],
      ["Pride is higher than the prices on your what?", "Pradas", "Jordans", "Rent"],
      ["The flow like plenty what?", "Lava", "Water", "Fire"],
      ["With just a penny I could multiply my what?", "Worth", "Money", "Crew"],
      ["Who smacked him at his christening?", "Biggie", "Pac", "Nas"]
    ], [
      ["Who booked the what?", "Clown", "Show", "Band"],
      ["You hear that underground what?", "Sonar", "Music", "Train"],
      ["He's breezing out 'cause what's due?", "His rent", "His car note", "His album"],
      ["Joey Bad and Big Preem came to collect the what?", "Green", "Rent", "Crown"],
      ["I got a dollar and a what?", "Dream", "Plan", "Prayer"],
      ["I gotta get my mama off the what?", "Scene", "Block", "Clock"]
    ], [
      ["Cash ruined what around me?", "Everything", "My family", "My block"],
      ["He won't sign to no what?", "Major", "Indie", "Manager"],
      ["They say money is the root of all what?", "Evil", "Good", "Problems"],
      ["He sees money as the route of all what?", "People", "Evil", "Roads"],
      ["We all follow paper what?", "Trails", "Planes", "Routes"],
      ["Everybody gotta pay their what?", "Bills", "Dues", "Taxes"]
    ]] },
    { title: "Survival Tactics", id: "DDWAk8-leVA", start: 26, cuts: [59.0, 106.3, 175.1], qs: [[
      ["I'm a martian where the army is what?", "Spartan", "Roman", "Marching"],
      ["What borough is the residence?", "Brooklyn", "Queens", "Harlem"],
      ["Got them peanuts like the what?", "Elephants", "Monkeys", "Squirrels"],
      ["We collect what?", "Pesos", "Rings", "Trophies"],
      ["Steez got that presidential, time to what?", "Inaugurate", "Celebrate", "Retire"]
    ], [
      ["No time for what kind of people?", "Fake", "Slow", "Loud"],
      ["I was what that way?", "Raised", "Taught", "Built"],
      ["The only thing I can say to you is what?", "Pray", "Run", "Relax"],
      ["They saying I'm the best, I'm like what?", "You're so right", "Not yet", "Thank you"],
      ["Not enough shine to last the whole what?", "Night", "Year", "Song"]
    ], [
      ["Better play your cards right, no booster what?", "Packs", "Shots", "Seats"],
      ["Marty McFly mode to tell them the future's what?", "Back", "Bright", "Here"],
      ["Riding on what?", "Hoverboards", "Skateboards", "Bikes"],
      ["Who swung his sword?", "King Arthur", "Zorro", "Samurai Jack"],
      ["Don't quit his day what?", "Job", "Dream", "Shift"],
      ["About to take off with protons and what?", "Electrons", "Neutrons", "Rockets"]
    ]] }
  ]
};
