/* OG FAN 99 – The Shark (Bronx Italian underground, 1990s; Belmont / Arthur Avenue). Songs and questions go in episodes later. */
window.CFG = {
  name: "The Shark", nameUpper: "THE SHARK", short: "SHARK",
  hood: "Belmont", hoodUpper: "BELMONT", boro: "Bronx",
  saveKey: "ogfan99theshark1",
  /* start as a Chooch (Bronx Italian for a dope), become a Paisan, then climb the food chain: Hammerhead, Great White, and top out as Lo Squalo (Italian for "the shark") */
  startRank: "Chooch", ranks: ["Paisan", "Hammerhead", "Great White"], topRank: "Lo Squalo",
  point: "Tooth", points: "Teeth",                         /* shark teeth */
  rankRewards: {
    "Paisan": { bongs: 5, line: "Arthur Avenue knows your face now." },
    "Hammerhead": { bongs: 10, line: "You hit the Concourse head first." },
    "Great White": { bongs: 25, line: "You run all of Belmont." }
  },
  trophyArt: [
    /* Chooch: a little guppy in a fishbowl */
    '<path d="M22 34h36v4q12 10 12 24q0 18-30 18t-30-18q0-14 12-24z" fill="#9fd8ef" fill-opacity=".35" stroke="#cfe6ff" stroke-width="2"/>' +
    '<path d="M14 58q26 6 52 0v4q0 16-26 16t-26-16z" fill="#2a74b8" opacity=".55"/>' +
    '<path d="M32 60q8-7 16 0q-8 6-16 0z M32 60l-6-5v10z" fill="#ff9f43"/><circle cx="44" cy="59" r="1.2" fill="#111"/><circle cx="50" cy="50" r="1.6" fill="none" stroke="#cfe6ff"/><circle cx="53" cy="44" r="1.1" fill="none" stroke="#cfe6ff"/>',
    /* Paisan: the stovetop espresso pot */
    '<path d="M26 76l4-26h20l4 26z" fill="#b9c0c8" stroke="#5b6168" stroke-width="1.5"/><path d="M28 48l3-22h18l3 22z" fill="#d4d9df" stroke="#5b6168" stroke-width="1.5"/>' +
    '<rect x="24" y="46" width="32" height="5" fill="#8d939b"/><path d="M38 20h8l2 6H36z" fill="#14171c"/><path d="M52 30q14 2 12 16t-12 14" fill="none" stroke="#14171c" stroke-width="4"/><path d="M28 30l-8-4" stroke="#5b6168" stroke-width="2"/>',
    /* Hammerhead: steel-gray hammerhead from above, the wide head out front */
    '<path d="M12 26q0-8 8-8h40q8 0 8 8q0 4-6 4H46q-2 8-2 14l14 10-14-2q0 12-4 20l8 6H32l8-6q-4-8-4-20l-14 2 14-10q0-6-2-14H18q-6 0-6-4z" fill="#9fb3c8" stroke="#2c3a4a" stroke-width="1.8" stroke-linejoin="round"/>' +
    '<circle cx="15" cy="24" r="2" fill="#111"/><circle cx="65" cy="24" r="2" fill="#111"/><path d="M40 34v36" stroke="#7d93a8" stroke-width="1.5"/>',
    /* Great White: a white shark tooth on a gold chain */
    '<path d="M14 18q26 40 52 0" fill="none" stroke="#e0a52c" stroke-width="4" stroke-dasharray="4 3" stroke-linecap="round"/>' +
    '<path d="M28 44h24l-12 30z" fill="#f4f1ea" stroke="#8d939b" stroke-width="2" stroke-linejoin="round"/><path d="M30 46l2 4 2-4 2 4 2-4 2 4 2-4 2 4 2-4 2 4 2-4" stroke="#8d939b" stroke-width=".8" fill="none"/>' +
    '<rect x="34" y="38" width="12" height="7" rx="2" fill="#e0a52c" stroke="#7a5512" stroke-width="1.2"/>',
    /* Lo Squalo: gold crown over the fin, green-white-red ribbon */
    '<path d="M26 32l-3-18 10 8 7-12 7 12 10-8-3 18z" fill="#ffd34d" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M26 74q4-26 30-38q-6 16-2 38z" fill="#9fb3c8" stroke="#2c3a4a" stroke-width="2"/>' +
    '<rect x="14" y="72" width="17" height="6" fill="#2e9e4f"/><rect x="31" y="72" width="18" height="6" fill="#f4f1ea"/><rect x="49" y="72" width="17" height="6" fill="#d62828"/>'
  ],
  clubTitle: "The Fish Market", clubTab: "MARKET",
  tags: ["BELMONT", "FORZA BX", "SHARK BX"],                 /* crew/hood, catchphrase, nickname */
  c1: "#f4f1ea", c2: "#d62828", c3: "#2e9e4f", bg: "#0d2033",
  /* Belmont skyline behind the header: Fordham's Keating Hall tower, Mount Carmel's campanile, a fin cutting the waterline */
  headerSvg: '<g fill="#f7f3ea">' +
    '<path d="M20 64V36h30V18h4v-6h4v6h4v-6h4v6h4v18h30v28z"/><rect x="58" y="24" width="8" height="10" fill="#0d2033"/>' +
    '<path d="M196 64V22h18v42z"/><path d="M193 22l12-12 12 12z"/><rect x="204" y="2" width="2" height="8"/>' +
    '<path d="M150 64V44l35-14v34z"/>' +
    '<rect x="0" y="62" width="400" height="2"/><path d="M300 62q4-22 26-28q-6 12-2 28z"/>' +
    '<path d="M340 64V40h50v24z"/><path d="M344 40l21-12 21 12z"/></g>',
  socials: [
    { name: "X", handle: "@sharkbx", url: "https://x.com/sharkbx",
      icon: '<path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/>' }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the B or the D to Fordham Rd, under the Grand Concourse. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "market", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "espresso" },
    { scene: "church", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "bell" },
    { scene: "stadium", t: "CLIMB THE RANKS", x: "Everybody starts as a Chooch. Clear a row to rank up: Paisan, Hammerhead, Great White. Beat the 99 Challenge to become Lo Squalo.", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO BELMONT", x: "E 187th St and Arthur Ave, the heart of the Bronx's Little Italy. This is The Shark's game.", sfx: "spray" }
  ],
  episodes: [
    {"title":"Put My Foot Down","id":"BVo536qOnG0","start":55,"cuts":[101.1],"qs":[[["Let's make it move, headed where?","Uptown","Downtown","Out of town"],["Don't ever let somebody tell you you can't do what?","Something","Rap","Win"],["You got a dream, you got to what?","Protect it","Sell it","Forget it"],["You want something, go what?","Get it","Ask","Wait"],["It's time for him to put his what down?","Foot","Hand","Phone"]]]},
    {"title":"One Deadly Road","id":"naCJHEVhvKA","cuts":[42.7],"qs":[[["People can't believe he went what?","Legit","Pro","Home"],["He's out like Uncle who?","Fester","Junior","Tony"],["He ain't trying to be the what?","Best","King","Boss"],["When he was broke, he didn't even have a what?","Car","Phone","Job"],["The only choice he had was to what?","Hustle","Leave","Rap"],["DJs pass his record like a hot what?","Potato","Pizza","Coffee"]]]},
    {"title":"Italiano","id":"4yC0B7lgsGo","start":17,"cuts":[85.3],"qs":[[["The mean streets of where?","New York","Chicago","Philly"],["He's been around the block, he ain't no what?","Rookie","Rapper","Stranger"],["Where did he grow up?","Morris Park","Arthur Avenue","Little Italy"],["He'll do it his way like who?","Sinatra","Dean Martin","Elvis"],["Grandma's making what?","Pasta","Pizza","Coffee"],["Love with a kiss on the what?","Cheek","Hand","Ring"]]]},
    {"title":"Wicked Games","id":"1u3jvSNF4Ik","cuts":[70.4,170.2],"qs":[[["You're a breath of fresh what?","Air","Spring","Morning"],["Walking like two lovers in the what?","Sand","Park","Rain"],["They dip their toes in the what?","Water","Pool","Snow"],["Every word he says is like who?","Marvin Gaye","Al Green","Luther Vandross"],["Ain't nothing like the real what?","Thing","Love","Deal"],["She's a diamond in the what?","Rough","Ring","Sky"]],[["I want to fall in what?","Love","Line","Place"],["A kiss by your what?","Dimples","Ear","Hand"],["Her scent is like a bouquet of what?","Roses","Lilies","Daisies"],["What does he give her?","Ankle bracelet","Gold chain","Watch"],["Going out on her what?","Birthday","Day off","Anniversary"],["Let's stay together like Puff and who?","Big","Mase","Jay"]]]},
    {"title":"The Shark","id":"5udyctlT39Y","start":19,"cuts":[70.9,120.9],"qs":[[["Who was he looking up to?","Al Capone","His uncle","Frank Sinatra"],["Two young kids trying to hold their what?","Own","Ground","Breath"],["They started chilling where?","The Bronx","Brooklyn","Jersey"],["He's taking life how?","Day by day","Too fast","One shot"],["You and me versus the what?","World","Block","City"],["Dream of the what in the sky?","Angels","Stars","Birds"]],[["He's living in the what?","Ocean","Projects","Sky"],["Don't take the what?","Bait","Deal","Train"],["From NY to the North Bronx what?","Borders","Streets","Bridges"],["He's seen it what?","All","Twice","Before"],["The past doesn't what?","Last","Matter","Stop"],["Eating bagels and what?","Water","Coffee","Juice"]]]},
    {"title":"Salute","locked":true,"cuts":[],"qs":[]},
    {"title":"Boss of Bosses","locked":true,"cuts":[],"qs":[]},
    {"title":"Andiamo","locked":true,"cuts":[],"qs":[]},
    {"title":"The Havana Conference","locked":true,"cuts":[],"qs":[]}
  ]
};
