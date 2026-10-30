/* Papoose: Bed-Stuy, Brooklyn. The Mixtape King, Streetsweepers, Hoodie Season, The Nacirema Dream. */
window.CFG = {
  name: "Papoose", nameUpper: "PAPOOSE", short: "PAPOOSE",
  hood: "Bed-Stuy", hoodUpper: "BED-STUY", boro: "Brooklyn",
  saveKey: "ogfan99papoose1",
  /* Pap is famously against rappers who don't write their own bars: Ghostwriter is where everybody starts */
  startRank: "Ghostwriter",
  ranks: ["Sweeper", "Hoodie Vet", "Nacirema"],
  topRank: "Mixtape King",
  point: "Bar", points: "Bars",
  rankRewards: {
    "Sweeper": { bongs: 5, line: "You made the Streetsweepers cut. Now write your own bars." },
    "Hoodie Vet": { bongs: 10, line: "Hood up. You've been here every season." },
    "Nacirema": { bongs: 25, line: "You run all of Bed-Stuy." }
  },
  trophyArt: [
    /* Ghostwriter: a little sheet ghost holding a pen over a blank page */
    '<rect x="14" y="56" width="34" height="22" rx="1" fill="#f4efe6" stroke="#8d939b" stroke-width="1.5" transform="rotate(-8 31 67)"/>' +
    '<path d="M38 70V36a14 14 0 0 1 28 0v34l-5-5-4.5 5-4.5-5-4.5 5-4.5-5z" fill="#eef2f7" stroke="#9aa3ad" stroke-width="1.5" opacity=".92"/>' +
    '<circle cx="47" cy="36" r="2.4" fill="#111"/><circle cx="57" cy="36" r="2.4" fill="#111"/><ellipse cx="52" cy="44" rx="3" ry="2" fill="#111"/>' +
    '<path d="M40 56l-14 12" stroke="#a66cff" stroke-width="3.5" stroke-linecap="round"/><path d="M26 68l-3 3" stroke="#111" stroke-width="2"/>',
    /* Streetsweeper: a push broom crossed with a mic */
    '<path d="M18 76L58 22" stroke="#8a5a2b" stroke-width="5" stroke-linecap="round"/><rect x="6" y="66" width="30" height="10" rx="2" fill="#2b2b2b" transform="rotate(-53 21 71)"/>' +
    '<path d="M62 76L28 30" stroke="#c9ced6" stroke-width="5" stroke-linecap="round"/><circle cx="26" cy="26" r="9" fill="#ffcc33" stroke="#7a5512" stroke-width="2"/>' +
    '<path d="M20 22h12M19 26h14M20 30h12" stroke="#7a5512" stroke-width="1"/>',
    /* Hoodie Season Vet: a purple hoodie with the hood up */
    '<path d="M22 78V46q0-8 8-12l4-2q-6-10 6-16q12 6 6 16l4 2q8 4 8 12v32z" fill="#7b3fe4" stroke="#2b1240" stroke-width="2"/>' +
    '<path d="M34 32q6 6 12 0" fill="none" stroke="#2b1240" stroke-width="2"/><path d="M38 34v14M42 34v14" stroke="#f4efe6" stroke-width="1.5"/>' +
    '<rect x="30" y="58" width="20" height="12" rx="2" fill="#6a33cc" stroke="#2b1240" stroke-width="1.5"/>' +
    '<path d="M22 50l-8 26h8M58 50l8 26h-8" fill="#7b3fe4" stroke="#2b1240" stroke-width="2"/>',
    /* Nacirema Dreamer: the gold rhyme book, NACIREMA on the cover */
    '<rect x="18" y="26" width="44" height="52" rx="3" fill="#ffcc33" stroke="#7a5512" stroke-width="2"/><rect x="18" y="26" width="7" height="52" fill="#d9a020"/>' +
    '<path d="M30 40h26M30 66h26" stroke="#7a5512" stroke-width="1.2"/>' +
    '<text x="43" y="57" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="8.5" textLength="30" lengthAdjust="spacingAndGlyphs" fill="#2b1240">NACIREMA</text>' +
    '<path d="M60 20l-14 30" stroke="#2b1240" stroke-width="3" stroke-linecap="round"/>',
    /* Mixtape King: a gold crown on a cassette */
    '<rect x="14" y="50" width="52" height="30" rx="3" fill="#2b2b2b" stroke="#ffcc33" stroke-width="2"/><rect x="20" y="55" width="40" height="10" rx="1" fill="#a66cff"/>' +
    '<circle cx="29" cy="70" r="4" fill="#ddd"/><circle cx="51" cy="70" r="4" fill="#ddd"/><rect x="33" y="68" width="14" height="4" fill="#555"/>' +
    '<path d="M18 46l4-22 10 12 8-16 8 16 10-12 4 22z" fill="#ffcc33" stroke="#7a5512" stroke-width="1.5"/>' +
    '<circle cx="40" cy="22" r="2.5" fill="#e0453a"/><circle cx="22" cy="26" r="2" fill="#a66cff"/><circle cx="58" cy="26" r="2" fill="#a66cff"/>'
  ],
  clubTitle: "The Cigar Society", clubTab: "CIGAR",
  tags: ["SWEEPERS", "HOODIES", "MIXTAPE KING"],
  c1: "#ffcc33", c2: "#a66cff", c3: "#e07a3f", bg: "#2b1240",
  /* a row of Stuyvesant Heights brownstones: cornices, tall windows, high stoops */
  headerSvg: (function () {
    let s = "";
    for (let i = 0; i < 9; i++) {
      const x = i * 46;
      s += '<rect x="' + x + '" y="10" width="44" height="54"/><rect x="' + (x - 1) + '" y="6" width="46" height="5"/>';
      s += '<rect x="' + (x + 6) + '" y="16" width="8" height="12" fill="#2b1240"/><rect x="' + (x + 18) + '" y="16" width="8" height="12" fill="#2b1240"/><rect x="' + (x + 30) + '" y="16" width="8" height="12" fill="#2b1240"/>';
      s += '<rect x="' + (x + 6) + '" y="34" width="8" height="12" fill="#2b1240"/><rect x="' + (x + 18) + '" y="34" width="8" height="12" fill="#2b1240"/><rect x="' + (x + 30) + '" y="40" width="8" height="12" fill="#2b1240"/>';
      s += '<path d="M' + (x + 24) + ' 64l10-12h4" stroke="#2b1240" stroke-width="1.5" fill="none"/>';
    }
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@papoose", url: "https://www.instagram.com/papoose/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the A or C to Nostrand Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "brownstones", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "restoration", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "traffic" },
    { scene: "park", t: "CLIMB THE RANKS", x: "Everybody starts as a Ghostwriter. Clear a row to rank up: Sweeper, Hoodie Vet, Nacirema. Beat the 99 Challenge to become Mixtape King.", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO BED-STUY", x: "Fulton St and Nostrand Av. This is Papoose's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Discipline", id: "gGuj3JBUMT0", start: 25, cuts: [59.3], qs: [[
      ["What do you wash before supper?", "Your hands", "Your face", "The dishes"],
      ["See an old lady with bags, you better what?", "Help her", "Pass her", "Call her"],
      ["What word were kids not allowed to say?", "Liar", "Hater", "Snitch"],
      ["Play with fire and you get what?", "Burnt", "Grounded", "Caught"],
      ["What do you say before you eat?", "Your grace", "Thank you", "Good night"],
      ["Which house rule did he hate?", "Hat off in the house", "No running inside", "Bedtime at nine"]
    ]] },
    { title: "Ultimate Rush", id: "mcYX8JGK1e8", cuts: [59.9], qs: [[
      ["He's the professor of the what?", "Ghetto", "Streets", "Game"],
      ["Who needs an eye doctor?", "These rappers", "The cops", "His crew"],
      ["The only thing he turned down is his what?", "Collar", "Music", "Offer"],
      ["He made the transition like magma into what?", "Hot lava", "Cold stone", "Steam"],
      ["His homie is in Valhalla, in which county?", "Westchester", "Suffolk", "Bergen"],
      ["Which playwright does he name?", "Shakespeare", "Arthur Miller", "Tennessee Williams"]
    ]] },
    { title: "Cough Up A Lung", id: "kspXr3P2L0k", start: 35, cuts: [71.9], qs: [[
      ["Kilo chains, bracelets and diamond what?", "Rings", "Watches", "Teeth"],
      ["What cars come after Lamborghinis?", "Ranges", "Bentleys", "Jeeps"],
      ["Which movie title does he say?", "Menace to Society", "Boyz n the Hood", "Juice"],
      ["Which boxer does he name first?", "Mayweather", "Pacquiao", "De La Hoya"],
      ["Whose punch knocked Trevor out the ring?", "Mike Tyson", "Ali", "Holyfield"],
      ["The legends he names are from where?", "Hollis, Queens", "Harlem", "The Bronx"],
      ["What greens does he mention?", "Collard greens", "Mustard greens", "Spinach"]
    ]] },
    { title: "Heat 7", id: "Hu_npw-h-_s", start: 11, cuts: [39.8, 127.6], qs: [[
      ["This is all business, no card what?", "Limit", "Fees", "Swipe"],
      ["What color card does he have?", "Black card", "Gold card", "Green card"],
      ["Their cars are what?", "Rented", "Stolen", "Leased"],
      ["Bars twice as hard as what?", "Park benches", "Concrete", "Steel"],
      ["Which Bulls player does he call himself?", "Scottie Pippen", "Michael Jordan", "Dennis Rodman"]
    ], [
      ["He puts the comp in the what?", "Composition", "Company", "Compass"],
      ["Downtown Brooklyn, shopping at what store?", "A&S", "Macy's", "Gimbels"],
      ["Which New Balance number?", "574", "990", "550"],
      ["New York vs New York is like which teams playing?", "Yankees and Mets", "Knicks and Nets", "Jets and Giants"],
      ["Which album cover does he mention?", "Criminal Minded", "Illmatic", "Ready to Die"]
    ]] },
    { title: "Handshakes With Snakes", id: "7wMei3zJWDM", start: 39, cuts: [63.5, 127], qs: [[
      ["Where did he walk in at the start?", "The club", "The studio", "The barbershop"],
      ["The lame got knocked off his what?", "Feet", "Chair", "Stage"],
      ["Who paid for all his battles?", "Remy", "His label", "His manager"],
      ["He leaves the bank with what?", "An envelope", "A loan", "A receipt"],
      ["What's the best approach in a marriage?", "Stay faithful", "Stay quiet", "Stay rich"]
    ], [
      ["Cheating is like tug of war; you are just the what?", "Rope", "Flag", "Team"],
      ["Seeing stars, it's like a what?", "Telescope", "Planetarium", "Night sky"],
      ["New York shares similar weather with which city?", "Philly", "Boston", "Chicago"],
      ["Which era did they grow up in?", "DVD era", "VHS era", "Mixtape era"],
      ["He says the guy is really from the what?", "Outskirts", "Suburbs", "Jersey"]
    ]] },
    { title: "Dreams And Nightmares", id: "J-A_30uWhII", start: 26, cuts: [64.2, 112.6], qs: [[
      ["What did he used to pray for?", "Times like this", "A record deal", "A new car"],
      ["Where does he say he did life?", "In the street", "Upstate", "In the booth"],
      ["He's seen the summers get what?", "Cold", "Short", "Long"],
      ["Snakes squirming like a what?", "Centipede", "Worm", "Lizard"],
      ["If you ain't feeding the wolves, the wolves what?", "Eat you", "Leave you", "Follow you"]
    ], [
      ["These lames are making him feel what?", "Nauseous", "Tired", "Bored"],
      ["They think beef is a what?", "Sausage", "Burger", "Steak"],
      ["He did it with a what?", "Mixtape", "Movie", "Freestyle"],
      ["Which Teflon Don does he name?", "John Gotti", "Al Capone", "Tony Soprano"],
      ["Right now he is what?", "Focused", "Finished", "Faded"]
    ]] },
    { title: "Jezebel", id: "cRp93RxVCjI", start: 24, cuts: [56.1, 115, 198.9], qs: [[
      ["She said it well, but that doesn't make it the what?", "Truth", "Story", "Song"],
      ["She acts like an angel, but she's a what?", "Demon", "Snake", "Liar"],
      ["We know the difference: heaven and what?", "Hell", "Earth", "Home"],
      ["When she was locked up, what did he bring her?", "Food", "Letters", "Flowers"],
      ["What did he never do?", "Speak to the public", "Post online", "Call her back"],
      ["He kept raising who like a father should?", "His daughter", "His son", "His nephew"]
    ], [
      ["What year did he finally get tired?", "Year number two", "Year number five", "Year one"],
      ["Nothing is worse than a what?", "Narcissist", "Liar", "Hater"],
      ["Deep down, who was writing her raps?", "He was", "Her DJ", "Nobody"],
      ["What sleep problem did he catch?", "Insomnia", "Sleepwalking", "Snoring"],
      ["Which singer's meme does he bring up?", "Jaheim", "Ginuwine", "Tyrese"],
      ["The truth does what?", "Hurts", "Heals", "Wins"]
    ], [
      ["People called them relationship what?", "Goals", "Twins", "Kings"],
      ["Like a UFO sighting, she kept feeling what?", "Alienated", "Lonely", "Scared"],
      ["Like Omari Hardwick in Power, he's the what?", "Ghost", "Boss", "Plug"],
      ["No animal runs faster than a what?", "Cheater", "Rabbit", "Horse"],
      ["You're Oprah and she's who?", "Gayle", "Stedman", "Tyra"]
    ]] },
    { title: "Bars On Wheels", id: "yrfwhYPmtx0", start: 20, cuts: [50.2, 117, 269.8], qs: [[
      ["His role is more presidential than the what?", "Candidates", "Senators", "Governors"],
      ["He's about to make a what?", "Movie", "Mixtape", "Mistake"],
      ["Go get your what?", "Popcorn", "Tickets", "Seats"],
      ["Twist pinkies and touch thumbs, let's make a what?", "Bet", "Deal", "Song"],
      ["They say he's going to hell; he asks, is that a what?", "Promise", "Prayer", "Question"],
      ["He says we're already where?", "In hell", "In heaven", "In jail"]
    ], [
      ["Moving like a bishop in a game of what?", "Chess", "Checkers", "Cards"],
      ["What didn't he have to teach his daughter?", "To walk", "To talk", "To read"],
      ["She taught herself how to take a what?", "Step", "Breath", "Bow"],
      ["Which book of records did he break?", "Guinness", "Billboard", "Fortune"],
      ["How many hungry artists on one record?", "200", "100", "50"],
      ["Slow down, son. Nah, he got the need for what?", "Speed", "Greed", "Sleep"]
    ], [
      ["What does the cop ask for?", "License and registration", "ID card", "Car keys"],
      ["Where has he been lately?", "The West Coast", "Down South", "Overseas"],
      ["What kind of literacy is he teaching?", "Financial", "Street", "Computer"],
      ["It's not your enemies, it's your who that get close?", "Friends", "Family", "Fans"],
      ["Once you burn the what with him, you can't return?", "Bridge", "Bag", "Bread"]
    ]] },
    { title: "Thought I Was Gonna Stop", id: "uzlaKTdDCRc", start: 15, cuts: [34.9, 66, 112], qs: [[
      ["You follow the GPS; he takes which route?", "The thug route", "The long route", "The back route"],
      ["How many years till they let his cuz out?", "18", "10", "25"],
      ["Who can't he wait to see let out?", "His cuz", "His brother", "His dog"],
      ["Whose mouth did the words come out of?", "The judge's", "The DA's", "The cop's"],
      ["What did they have to use for light?", "Candles", "Flashlights", "Lighters"]
    ], [
      ["Where was he sleeping?", "On the bum couch", "On the floor", "In the car"],
      ["What did mama say?", "Pull your pants up", "Come home early", "Do your homework"],
      ["He's the talk of where?", "New York", "The town", "The block"],
      ["He walks with the what?", "Hulk", "Hawk", "Hood"],
      ["Like Optimus and his what?", "Prime", "Truck", "Team"],
      ["He's strong as an what?", "Autobot", "Ox", "Army"]
    ], [
      ["Diamonds on stones like a what?", "Octagon", "Hexagon", "Circle"],
      ["Until the wheels fall off, no what?", "Hubcap", "Spare", "Brakes"],
      ["He doesn't need no what?", "Rugrats", "Babysitters", "Bodyguards"],
      ["Which quarterback is he like, still ballin?", "Tom Brady", "Eli Manning", "Peyton Manning"],
      ["Which label gets the shout at the end?", "Young Money", "Cash Money", "Roc-A-Fella"]
    ]] }
  ]
};
