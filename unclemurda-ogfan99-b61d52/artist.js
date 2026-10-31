/* OG FAN 99 – Uncle Murda (East New York, Brooklyn) — artist settings */
window.CFG = {
  name: "Uncle Murda", nameUpper: "UNCLE MURDA", short: "UNCLE",
  hood: "East New York", hoodUpper: "EAST NEW YORK", boro: "Brooklyn",
  saveKey: "ogfan99unclemurda1",
  /* the family ladder: you come in as the Nephew, earn your stripes as a bro, and only one man is Uncle */
  startRank: "Nephew", ranks: ["Lil Bro", "Big Bro", "Rap Up King"], topRank: "Uncle",
  /* the Rap Up keeps receipts on the whole year */
  point: "Receipt", points: "Receipts",
  rankRewards: {
    "Lil Bro": { bongs: 5, line: "That's bro stuff. You're not the Nephew no more." },
    "Big Bro": { bongs: 10, line: "Big Bro now. The block looks out for you." },
    "Rap Up King": { bongs: 25, line: "You run all of East New York." }
  },
  trophyArt: [
    /* Nephew: a kid's red snapback, brim forward */
    '<path d="M20 60q0-28 22-28t22 28z" fill="#d7263d" stroke="#6b0f1a" stroke-width="2"/><path d="M42 32v28" stroke="#6b0f1a" stroke-width="1.5"/>' +
    '<circle cx="42" cy="32" r="3" fill="#6b0f1a"/><path d="M16 60h52q2 8-8 10H22q-8-2-6-10z" fill="#a51d2d" stroke="#6b0f1a" stroke-width="2"/>' +
    '<text x="42" y="54" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="11" fill="#f2c14e">ENY</text>',
    /* Lil Bro: the Pennsylvania Av / Linden Blvd street sign */
    '<rect x="38" y="30" width="4" height="50" fill="#5b6168"/><rect x="8" y="24" width="64" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="40" y="35.5" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="6.4" fill="#fff">PENNSYLVANIA AV</text><rect x="14" y="44" width="52" height="12" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/>' +
    '<text x="40" y="53" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="7" fill="#fff">LINDEN BLVD</text>',
    /* Big Bro: a gold chain with a BRO plate */
    '<path d="M16 20q24 44 48 0" fill="none" stroke="#f2c14e" stroke-width="5" stroke-dasharray="5 3" stroke-linecap="round"/>' +
    '<rect x="22" y="48" width="36" height="22" rx="4" fill="#f2c14e" stroke="#7a5512" stroke-width="2"/><text x="40" y="65" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="15" fill="#6b0f1a">BRO</text>' +
    '<circle cx="27" cy="44" r="2" fill="#fff6d8"/><circle cx="55" cy="45" r="2" fill="#fff6d8"/>',
    /* Rap Up King: the Dec 31 calendar page with a mic */
    '<rect x="14" y="22" width="40" height="46" rx="3" fill="#f4efe6" stroke="#6b7280" stroke-width="2"/><rect x="14" y="22" width="40" height="13" rx="3" fill="#d7263d"/>' +
    '<text x="34" y="32" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="9" fill="#fff">DEC</text><text x="34" y="60" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="22" fill="#111">31</text>' +
    '<rect x="56" y="40" width="10" height="16" rx="5" fill="#2a2a2e" stroke="#f2c14e" stroke-width="1.5"/><path d="M53 52q8 10 16 0M61 62v12M55 74h12" stroke="#f2c14e" stroke-width="2" fill="none" stroke-linecap="round"/>',
    /* Uncle: the gold crown, red stones */
    '<path d="M14 66l-2-34 14 14 14-22 14 22 14-14-2 34z" fill="#f2c14e" stroke="#7a5512" stroke-width="2" stroke-linejoin="round"/>' +
    '<rect x="14" y="62" width="52" height="10" rx="2" fill="#e0a52c" stroke="#7a5512" stroke-width="1.5"/>' +
    '<circle cx="26" cy="67" r="2.6" fill="#d7263d"/><circle cx="40" cy="67" r="2.6" fill="#d7263d"/><circle cx="54" cy="67" r="2.6" fill="#d7263d"/>' +
    '<circle cx="12" cy="32" r="3" fill="#fff6d8"/><circle cx="40" cy="24" r="3" fill="#fff6d8"/><circle cx="68" cy="32" r="3" fill="#fff6d8"/>' +
    '<text x="40" y="57" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="#6b0f1a">U.M.</text>'
  ],
  clubTitle: "The Real Report", clubTab: "REPORT",
  tags: ["ENY", "RAP UP", "LENNY"],
  c1: "#ff4d3d", c2: "#f2c14e", c3: "#e8e2d4", bg: "#2a0c08",
  /* Broadway Junction's stacked els crossing, with the Spring Creek towers behind */
  headerSvg: '<g fill="#f7f3ea">' +
    '<rect x="250" y="8" width="20" height="56"/><rect x="276" y="18" width="18" height="46"/><rect x="300" y="4" width="22" height="60"/><rect x="328" y="14" width="18" height="50"/><rect x="352" y="10" width="20" height="54"/>' +
    '<path d="M0 30 L400 14 L400 19 L0 35z"/>' +
    [8, 52, 96, 140, 184, 228].map(x => '<rect x="' + x + '" y="' + (33 - x * 0.04) + '" width="3" height="31"/>').join("") +
    '<rect x="0" y="40" width="400" height="5"/>' +
    [4, 40, 76, 112, 148, 184, 220].map(x => '<rect x="' + x + '" y="40" width="4" height="24"/><path d="M' + (x + 4) + ' 45 L' + (x + 32) + ' 62 M' + (x + 32) + ' 45 L' + (x + 4) + ' 62" stroke="#f7f3ea" stroke-width="1" fill="none"/>').join("") +
    '<rect x="60" y="24" width="130" height="14" rx="3"/></g>',
  socials: [
    { name: "Instagram", handle: "@unclemurda", url: "https://www.instagram.com/unclemurda/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the L to Broadway Junction. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "reservoir", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "towers", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "traffic" },
    { scene: "rapup", t: "CLIMB THE RANKS", x: "Everybody starts as a Nephew. Clear a row to rank up: Lil Bro, Big Bro, Rap Up King. Beat the 99 Challenge to become Uncle.", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO EAST NEW YORK", x: "Pennsylvania Avenue and Linden Boulevard. This is Uncle Murda's game.", sfx: "spray" }
  ],
  episodes: [
    {"title":"Lean On Me","id":"RRng_-UsWzo","cuts":[31.4],"qs":[[["I see you out here getting a lot of what?","Money","Fame","Attention"],["He'll make sure nobody does what to you?","Hurt you","Rob you","Find you"],["You don't want no what with me?","Beef","Problems","Business"],["Find a way to do what with me?","Eat","Work","Ride"],["Because I do what on you?","Lean","Count","Call"],["It's better to have me on your what?","Side","Team","Block"]]]},
    {"title":"Bro Sh*t","id":"JHL3_7P4tZ8","start":34,"cuts":[67.2],"qs":[[["Don't come around me if you don't really do what with me?","Rock","Roll","Ride"],["You ain't my what?","Bro","Man","Friend"],["He's too real to be around what?","Fake","Haters","Phones"],["Who could see that?","Stevie Wonder","Ray Charles","Everybody"],["You burned the bridge and can't do what?","Swim","Fly","Run"],["With twenty dollars to his name, he would've given you how much?","Ten","Five","Twenty"]]]},
    {"title":"Rap Up","locked":true,"cuts":[],"qs":[]},
    {"title":"Use To Be","locked":true,"cuts":[],"qs":[]},
    {"title":"Money","locked":true,"cuts":[],"qs":[]},
    {"title":"Don't Talk About It","locked":true,"cuts":[],"qs":[]},
    {"title":"Brother & Sister","locked":true,"cuts":[],"qs":[]},
    {"title":"Change Gone Come","locked":true,"cuts":[],"qs":[]},
    {"title":"Freedom","locked":true,"cuts":[],"qs":[]}
  ]
};
