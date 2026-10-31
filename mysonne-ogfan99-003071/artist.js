/* Mysonne: Highbridge, the Bronx. "The General" / "The NY General", activist rapper, co-founder of Until Freedom.
   "The music should reflect the movement." */
window.CFG = {
  name: "Mysonne", nameUpper: "MYSONNE", short: "SONNE",
  hood: "Highbridge", hoodUpper: "HIGHBRIDGE", boro: "the Bronx",
  saveKey: "ogfan99mysonne1",
  /* everybody signs up as a recruit and works up the ranks to General */
  startRank: "Recruit",
  ranks: ["Organizer", "Front Line", "Lieutenant"],
  topRank: "NY General",
  point: "Star", points: "Stars",
  rankRewards: {
    "Organizer": { bongs: 5, line: "You showed up. The music should reflect the movement." },
    "Front Line": { bongs: 10, line: "Standing on the front line. When the music is strong, the movement is strong." },
    "Lieutenant": { bongs: 25, line: "You run all of Highbridge." }
  },
  trophyArt: [
    /* Recruit: a plain olive cap */
    '<path d="M18 62q0-28 22-28t22 28z" fill="#5f7a3a" stroke="#2a3a18" stroke-width="1.5"/>' +
    '<path d="M14 62h52q-4 8-18 8H14z" fill="#4a6230" stroke="#2a3a18" stroke-width="1.5"/>' +
    '<path d="M40 34v28" stroke="#2a3a18" stroke-width="1"/>',
    /* Organizer: a megaphone */
    '<path d="M18 38h10l30-16v44L28 50H18z" fill="#f2c230" stroke="#6a4e08" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<rect x="24" y="50" width="8" height="18" rx="2" fill="#333" stroke="#111" stroke-width="1"/>' +
    '<path d="M62 34q6 10 0 20M68 28q10 16 0 32" stroke="#fff" stroke-width="2" fill="none"/>',
    /* Front Line: a raised rally sign */
    '<rect x="38" y="44" width="4" height="36" fill="#8a6a3a"/>' +
    '<rect x="12" y="14" width="56" height="34" rx="2" fill="#f7f3ea" stroke="#1a1a1a" stroke-width="1.5"/>' +
    '<text x="40" y="29" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="10" fill="#e63946">UNTIL</text>' +
    '<text x="40" y="42" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="10" fill="#1a1a1a">FREEDOM</text>',
    /* Lieutenant: a medal on a ribbon */
    '<path d="M28 12h10l6 28h-10zM52 12h-10l-6 28h10z" fill="#e63946" stroke="#7a1a22" stroke-width="1"/>' +
    '<circle cx="40" cy="56" r="17" fill="#f2c230" stroke="#6a4e08" stroke-width="2"/>' +
    '<circle cx="40" cy="56" r="12" fill="none" stroke="#6a4e08" stroke-width="1"/>' +
    '<path d="M40 47l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z" fill="#fff6c2"/>',
    /* NY General: a gold-braided general's cap with a row of stars */
    '<path d="M14 50q0-24 26-28q26 4 26 28z" fill="#2f3d22" stroke="#141c0e" stroke-width="1.5"/>' +
    '<rect x="14" y="48" width="52" height="10" fill="#1a1a1a" stroke="#f2c230" stroke-width="1.5"/>' +
    '<path d="M12 58h56q-6 10-28 10t-28-10z" fill="#111" stroke="#f2c230" stroke-width="1.5"/>' +
    '<path d="M30 30l2 4 4.4.6-3.2 3 .8 4.4-4-2.1-4 2.1.8-4.4-3.2-3 4.4-.6zM40 26l2 4 4.4.6-3.2 3 .8 4.4-4-2.1-4 2.1.8-4.4-3.2-3 4.4-.6zM50 30l2 4 4.4.6-3.2 3 .8 4.4-4-2.1-4 2.1.8-4.4-3.2-3 4.4-.6z" fill="#f2c230"/>' +
    '<text x="40" y="76" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" textLength="30" lengthAdjust="spacingAndGlyphs" fill="#f2c230">GENERAL</text>'
  ],
  clubTitle: "The Medal Case", clubTab: "MEDALS",
  tags: ["UNTIL FREEDOM", "THE MOVEMENT", "NY GENERAL"],
  c1: "#f2c230", c2: "#e63946", c3: "#8fbf5a", bg: "#0f1a14",
  /* the High Bridge arches + water tower, and the Kingsbridge Armory towers */
  headerSvg: (function () {
    let s = '<rect x="0" y="22" width="250" height="5"/>';
    for (let x = 0; x < 250; x += 30) s += '<path d="M' + x + ' 27h30v37h-3v-18a12 12 0 0 0-24 0v18h-3z"/>';
    s += '<rect x="214" y="4" width="10" height="18"/><path d="M212 4l7-4 7 4z"/>';
    /* the armory: towers, crenellated wall, barrel roof */
    s += '<path d="M276 34Q330 10 384 34z"/><rect x="270" y="34" width="120" height="30"/>';
    [[262, 18, 16], [322, 24, 16], [382, 18, 16]].forEach(t => { s += '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (64 - t[1]) + '"/>'; for (let i = 0; i < t[2]; i += 6) s += '<rect x="' + (t[0] + i) + '" y="' + (t[1] - 4) + '" width="4" height="4"/>'; });
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@mysonnenygeneral", url: "https://www.instagram.com/mysonnenygeneral/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 4 to 167 St. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "highbridge", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "armory", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "crowd" },
    { scene: "conservatory", t: "CLIMB THE RANKS", x: "Everybody starts as a Recruit. Clear a row to rank up: Organizer, Front Line, Lieutenant. Beat the 99 Challenge to become NY General.", sfx: "bell" },
    { scene: "corner", t: "WELCOME TO HIGHBRIDGE", x: "W 167 St and Ogden Av. This is Mysonne's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "That's How We On It", id: "IwreOeCvK1M", cuts: [60.1], qs: [[
      ["\"Welcome to New ___ City\"?", "Bronx", "York", "Jersey"],
      ["He's from the city of the bright what?", "Lights", "Stars", "Signs"],
      ["You can sell anything for the right what?", "Price", "Crowd", "Time"],
      ["What boots does everybody have a pair of?", "Tims", "Jordans", "Uggs"],
      ["What year does he say this record sounds like?", "2017", "1999", "2020"]
    ]] },
    { title: "Don't Play With Me", id: "K8d1Ufmq9Eg", cuts: [38.5], qs: [[
      ["What does he keep telling people not to do?", "Play with me", "Lie to me", "Call me"],
      ["What is he not with?", "The disrespect", "The parties", "The fame"],
      ["Watch what you ___ to him?", "Say", "Send", "Post"],
      ["If you know you're fake, maybe you should what?", "Stay away", "Come around", "Call him"],
      ["He ain't with the games and all the what?", "Fake", "Noise", "Hype"]
    ]] },
    { title: "Recognize", id: "koxwoYfwiYg", start: 17, cuts: [55.1], qs: [[
      ["What kind of times does he say we're in?", "Serious times", "Good times", "Easy times"],
      ["Who does he hope hears this?", "His young boys", "His old teachers", "The radio"],
      ["If you're listening, what should you make sure you do?", "Share this", "Save this", "Skip this"],
      ["\"We ain't ops, we're...\" what?", "Brothers", "Strangers", "Rivals"],
      ["Brothers who came from different what?", "Mothers", "Cities", "Blocks"],
      ["Until we discovered we were what?", "Kings and queens", "Rich and famous", "Lost and found"]
    ]] },
    { title: "High Bridge", locked: true, cuts: [], qs: [] },
    { title: "Victory", locked: true, cuts: [], qs: [] },
    { title: "Irregular", locked: true, cuts: [], qs: [] },
    { title: "Pound Cake", locked: true, cuts: [], qs: [] },
    { title: "Dreams and Nightmares", locked: true, cuts: [], qs: [] },
    { title: "Welcome to New Bronx City", locked: true, cuts: [], qs: [] }
  ]
};
