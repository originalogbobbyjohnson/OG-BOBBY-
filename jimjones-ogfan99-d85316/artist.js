/* Jim Jones: Harlem, Manhattan (raised in the Taft Houses). Capo, Dipset, ByrdGang, Vampire Life, "Ballin'", "We Fly High". */
window.CFG = {
  name: "Jim Jones", nameUpper: "JIM JONES", short: "CAPO",
  hood: "Harlem", hoodUpper: "HARLEM", boro: "Manhattan",
  saveKey: "ogfan99jimjones1",
  /* everybody starts out a lame; fly up through the Byrd Gang, Dipset, Vamp Life, to Capo */
  startRank: "Lame",
  ranks: ["Byrd Gang", "Diplomat", "Vamp Life"],
  topRank: "El Capo",
  point: "Jumper", points: "Jumpers",
  rankRewards: {
    "Byrd Gang": { bongs: 5, line: "Welcome to the Byrd Gang. Now we fly high." },
    "Diplomat": { bongs: 10, line: "Dipset. You got diplomatic status on 125th now." },
    "Vamp Life": { bongs: 25, line: "You run all of Harlem." }
  },
  trophyArt: [
    /* Lame: a flat, deflated ball on the ground */
    '<ellipse cx="40" cy="74" rx="22" ry="7" fill="#c4581c" stroke="#5a2508" stroke-width="1.5"/><path d="M20 73q20 -6 40 0M40 67v13" stroke="#5a2508" stroke-width="1" fill="none"/>' ,
    /* Byrd Gang: a bird in flight, wings up */
    '<path d="M12 34q14 -18 28 6q14 -24 28 -6q-14 -2 -28 18q-14 -20 -28 -18z" fill="#a46cf0" stroke="#3a1a66" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<ellipse cx="40" cy="48" rx="7" ry="12" fill="#c9a2ff" stroke="#3a1a66" stroke-width="1.5"/><circle cx="40" cy="36" r="5" fill="#c9a2ff" stroke="#3a1a66" stroke-width="1.5"/>' +
    '<path d="M40 38l3 3h-6z" fill="#f2c14e"/><path d="M34 60l6 10 6-10z" fill="#a46cf0" stroke="#3a1a66" stroke-width="1"/><path d="M40 70v10" stroke="#5a4a2a" stroke-width="2"/>',
    /* Diplomat: a purple flag on a gold pole */
    '<rect x="20" y="14" width="3" height="66" fill="#f2c14e"/><circle cx="21.5" cy="13" r="3" fill="#f2c14e"/>' +
    '<path d="M23 18h40l-8 14 8 14H23z" fill="#a46cf0" stroke="#3a1a66" stroke-width="1.5"/>' +
    '<text x="40" y="38" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="14" fill="#fff">DIP</text>',
    /* Vamp Life: a flared black cape with a red lining and a tall pointed collar */
    '<path d="M28 24L12 80h56L52 24z" fill="#14080c" stroke="#e0263a" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M32 30L22 78h36L48 30z" fill="#b01a2c"/>' +
    '<path d="M28 24L18 8l14 10 8-6 8 6 14-10-10 16z" fill="#14080c" stroke="#e0263a" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<circle cx="40" cy="26" r="3" fill="#f2c14e"/>',
    /* El Capo: a gold fedora with a red band */
    '<ellipse cx="40" cy="62" rx="32" ry="9" fill="#f2c14e" stroke="#7a5512" stroke-width="1.5"/>' +
    '<path d="M22 60q-2-30 18-34q20 4 18 34z" fill="#ffd36a" stroke="#7a5512" stroke-width="1.5"/>' +
    '<path d="M33 30q7 6 14 0" stroke="#7a5512" stroke-width="1.5" fill="none"/>' +
    '<path d="M22 52q18 6 36 0v7q-18 6 -36 0z" fill="#e0263a"/>' +
    '<text x="40" y="58.5" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" textLength="20" lengthAdjust="spacingAndGlyphs" fill="#fff">CAPO</text>'
  ],
  clubTitle: "The Capo Suite", clubTab: "SUITE",
  tags: ["DIPSET", "BALLIN", "CAPO"],
  c1: "#e0263a", c2: "#f2c14e", c3: "#a46cf0", bg: "#1a0a16",
  /* Harlem rowhouses, the State Office Building slab, and a rooftop pigeon coop with birds */
  headerSvg: (function () {
    let s = '<rect x="0" y="48" width="400" height="16"/>';
    for (let x = 0; x < 150; x += 36) { s += '<rect x="' + x + '" y="22" width="34" height="42"/><rect x="' + x + '" y="18" width="34" height="4"/>'; for (let c = 0; c < 3; c++) s += '<rect x="' + (x + 4 + c * 10) + '" y="28" width="6" height="8" fill="#1a0a16"/>'; }
    /* the State Office Building tower */
    s += '<rect x="176" y="2" width="48" height="62"/>';
    for (let x = 180; x < 222; x += 6) s += '<rect x="' + x + '" y="6" width="2" height="54" fill="#1a0a16"/>';
    /* rowhouses + coop on the roof */
    s += '<rect x="250" y="30" width="150" height="34"/><path d="M290 30l22-10 22 10z"/><rect x="292" y="20" width="40" height="10"/>';
    [[350, 10], [364, 4], [378, 12], [340, 2]].forEach(p => { s += '<path d="M' + p[0] + ' ' + p[1] + 'q4-4 8 0q4-4 8 0" fill="none" stroke="#f7f3ea" stroke-width="1.6"/>'; });
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@jimjonescapo", url: "https://www.instagram.com/jimjonescapo/" },
    { name: "TikTok", handle: "@jimjonescapo", url: "https://www.tiktok.com/@jimjonescapo" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the A to 125 St. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "strivers", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "stateoffice", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "traffic" },
    { scene: "coop", t: "CLIMB THE RANKS", x: "Everybody starts as a Lame. Clear a row to rank up: Byrd Gang, Diplomat, Vamp Life. Beat the 99 Challenge to become El Capo.", sfx: "parachute" },
    { scene: "corner", t: "WELCOME TO HARLEM", x: "Madison Av and E 115 St. This is Jim Jones's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Pop Champagne", id: "KrG4yKAVQuM", start: 70, cuts: [104.9], qs: [[
      ["When he goes to the dealer, what brand new car does he get?", "A 'Rarri", "A Bentley", "A Range Rover"],
      ["He came through Harlem like the what came back?", "The Rooftop", "The Apollo", "The Rucker"],
      ["In the club, what do they only want?", "Tables", "Booths", "The dance floor"],
      ["How many Rosés does he order?", "Ten", "Two", "Twenty"],
      ["What does he order along with the Rosés?", "A few cold waters", "Some lemonade", "Hot coffee"],
      ["How much money is stuffed in his denims?", "Ten thousand dollars", "A hundred dollars", "Fifty dollars"]
    ]] },
    { title: "We Fly High", id: "0QIy2jqAuXU", cuts: [40.4], qs: [[
      ["\"We fly high, no...\" what?", "Lie", "Limit", "Sleep"],
      ["What does he say is outside?", "Foreign rides", "Yellow cabs", "The paparazzi"],
      ["Foreign rides outside, it's like what?", "Showbiz", "Hollywood", "A car show"],
      ["What does he buy?", "Big cars", "Big houses", "Big boats"],
      ["Why does he get eight fly rides?", "To drive in his garage", "To sell them", "To race them"],
      ["What kind of flights does he take?", "G4 flights", "Red-eye flights", "Coach flights"]
    ]] },
    { title: "New York", locked: true, cuts: [], qs: [] },
    { title: "Jomo", locked: true, cuts: [], qs: [] },
    { title: "Love of the Hustle", locked: true, cuts: [], qs: [] },
    { title: "Summer Wit Miami", locked: true, cuts: [], qs: [] },
    { title: "Ballin'", locked: true, cuts: [], qs: [] },
    { title: "Emotionless", locked: true, cuts: [], qs: [] },
    { title: "Dipset Anthem", locked: true, cuts: [], qs: [] }
  ]
};
