/* Dave East: East Harlem / Harlem, Manhattan. From the Dirt, the East Family, the Karma series, Survival, ex-college hooper. */
window.CFG = {
  name: "Dave East", nameUpper: "DAVE EAST", short: "EAST",
  hood: "Harlem", hoodUpper: "HARLEM", boro: "Manhattan",
  saveKey: "ogfan99daveeast1",
  /* everybody starts on the bench (he played college ball before the music) */
  startRank: "Benchwarmer",
  ranks: ["East Family", "Starting Five", "Survivor"],
  topRank: "Harlem Legend",
  point: "Bucket", points: "Buckets",
  rankRewards: {
    "East Family": { bongs: 5, line: "Welcome to the East Family. From the dirt, all the way up." },
    "Starting Five": { bongs: 10, line: "Off the bench and in the starting five. Karma comes back around." },
    "Survivor": { bongs: 25, line: "You run all of Harlem." }
  },
  trophyArt: [
    /* Benchwarmer: a wooden bench with a towel and a ball under it */
    '<rect x="10" y="52" width="60" height="7" rx="2" fill="#a8743a" stroke="#5a3a14" stroke-width="1.5"/>' +
    '<rect x="14" y="59" width="5" height="20" fill="#5a3a14"/><rect x="61" y="59" width="5" height="20" fill="#5a3a14"/>' +
    '<path d="M28 52v-10q6-4 12 0v10z" fill="#f4f7fb" stroke="#9aa4b0" stroke-width="1"/>' +
    '<circle cx="44" cy="70" r="9" fill="#f07a22" stroke="#7a3008" stroke-width="1.5"/><path d="M35 70h18M44 61v18" stroke="#7a3008" stroke-width="1"/>',
    /* East Family: a brownstone door with EAST over it */
    '<rect x="16" y="20" width="48" height="60" fill="#5a3a2a" stroke="#2e1c12" stroke-width="1.5"/>' +
    '<rect x="14" y="16" width="52" height="8" fill="#7a5440"/>' +
    '<text x="40" y="36" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="11" letter-spacing="1" fill="#ffb020">EAST</text>' +
    '<path d="M28 80V50q12-12 24 0v30z" fill="#1c1418" stroke="#ffb020" stroke-width="1.5"/>' +
    '<circle cx="46" cy="66" r="1.8" fill="#ffb020"/><path d="M20 80h40" stroke="#2e1c12" stroke-width="3"/>',
    /* Starting Five: a jersey with a 5 */
    '<path d="M24 22l8-4q8 8 16 0l8 4 0 14-6 0 0 42H30V36h-6z" fill="#4aa3ff" stroke="#0b2a55" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M32 18q8 10 16 0" fill="none" stroke="#ffb020" stroke-width="2"/>' +
    '<text x="40" y="64" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="24" fill="#fff" stroke="#0b2a55" stroke-width="1">5</text>',
    /* Survivor: a rose growing up out of the dirt */
    '<path d="M14 80q26-16 52 0z" fill="#4a2e1a"/><circle cx="24" cy="76" r="1.5" fill="#2e1c10"/><circle cx="52" cy="75" r="1.5" fill="#2e1c10"/>' +
    '<path d="M40 76V38" stroke="#2a7444" stroke-width="3"/><path d="M40 60q-12-2-14-10q10 0 14 8M40 52q12-2 14-10q-10 0-14 8" fill="#36a35a"/>' +
    '<circle cx="40" cy="30" r="11" fill="#e8262b"/><path d="M33 28q7-8 14 0q-7 5-14 0zM36 33q4 3 8 0" stroke="#8a0f14" stroke-width="1.4" fill="none"/>',
    /* Harlem Legend: a gold ball on a gold cup with stars */
    '<path d="M24 46h32l-4 20H28z" fill="#ffcc33" stroke="#7a5512" stroke-width="1.5"/>' +
    '<rect x="36" y="66" width="8" height="8" fill="#e0a52c"/><rect x="28" y="74" width="24" height="6" fill="#e0a52c" stroke="#7a5512" stroke-width="1"/>' +
    '<circle cx="40" cy="32" r="14" fill="#ffcc33" stroke="#7a5512" stroke-width="1.5"/><path d="M26 32h28M40 18v28M30 22q8 10 0 20M50 22q-8 10 0 20" stroke="#7a5512" stroke-width="1.2" fill="none"/>' +
    '<path d="M14 18l2 4 4 .5-3 3 .8 4-3.8-2-3.8 2 .8-4-3-3 4-.5zM66 14l1.6 3.2 3.4.4-2.5 2.4.6 3.4-3.1-1.6-3.1 1.6.6-3.4-2.5-2.4 3.4-.4z" fill="#fff"/>' +
    '<text x="40" y="59" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="8" textLength="22" lengthAdjust="spacingAndGlyphs" fill="#5a3a08">HARLEM</text>'
  ],
  clubTitle: "The Karma Case", clubTab: "KARMA",
  tags: ["FROM THE DIRT", "KARMA", "EAST"],
  c1: "#ff3b3b", c2: "#ffb020", c3: "#4aa3ff", bg: "#1a0f2a",
  /* the Apollo vertical sign, Harlem brownstones, and the Marcus Garvey watchtower */
  headerSvg: (function () {
    let s = '<rect x="0" y="44" width="400" height="20"/>';
    /* brownstone row with stoops */
    for (let x = 0; x < 400; x += 46) if (x < 150 || (x > 250 && x < 300)) { s += '<rect x="' + x + '" y="18" width="42" height="46"/>'; for (let c = 0; c < 3; c++) s += '<rect x="' + (x + 5 + c * 12) + '" y="24" width="6" height="8" fill="#1a0f2a"/>'; }
    /* the Apollo blade sign + marquee */
    s += '<rect x="178" y="0" width="12" height="40"/><rect x="164" y="34" width="72" height="12"/>';
    for (let x = 168; x < 234; x += 6) s += '<circle cx="' + x + '" cy="40" r="1.2" fill="#1a0f2a"/>';
    /* the watchtower: three open iron tiers and the lantern */
    s += '<path d="M326 8l18-8 18 8z"/>';
    [[316, 44, 56, 14], [322, 30, 44, 12], [328, 18, 32, 10]].forEach(t => { s += '<rect x="' + t[0] + '" y="' + (t[1] - t[3]) + '" width="' + t[2] + '" height="' + t[3] + '" fill="none" stroke="#f7f3ea" stroke-width="2"/><path d="M' + (t[0] + t[2] / 2) + ' ' + (t[1] - t[3]) + 'v' + t[3] + '" stroke="#f7f3ea" stroke-width="1.5"/>'; });
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@daveeast", url: "https://www.instagram.com/daveeast/" },
    { name: "YouTube", handle: "Dave East", url: "https://www.youtube.com/channel/UCKYtbLhp5EuENMbW8UVLkYg" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 6 to 116 St. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "apollo", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "rucker", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "court" },
    { scene: "tower", t: "CLIMB THE RANKS", x: "Everybody starts as a Benchwarmer. Clear a row to rank up: East Family, Starting Five, Survivor. Beat the 99 Challenge to become Harlem Legend.", sfx: "bell" },
    { scene: "corner", t: "WELCOME TO HARLEM", x: "E 116 St and Lexington Av. This is Dave East's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "My Dirty Little Secret", id: "MX0q3bR49pw", start: 22, cuts: [53.3], qs: [[
      ["She's hard to read, like it's written in what?", "Chinese", "French", "Code"],
      ["He fell in love with her what?", "Instagram", "Smile", "Voice"],
      ["What does he say he does for a living?", "Rap", "Hoop", "Sell clothes"],
      ["Where is he all the time?", "Out of town", "In the studio", "At the club"],
      ["The ones that was closest don't even give him what?", "Dap", "Calls", "Love"],
      ["The jewels in Gucci uniforms are like what kind of school?", "Private school", "High school", "Old school"]
    ]] },
    { title: "Thru the Mud", id: "N-bZRSEwIIs", start: 21.5, cuts: [51.3], qs: [[
      ["When they see his what, they know he's getting money?", "Chain", "Watch", "Car"],
      ["They say he's lit, so now they look at him how?", "Funny", "Crazy", "Different"],
      ["Where does he say they act real tough?", "Social media", "In the club", "On the block"],
      ["What did he run up in?", "The label", "The bank", "The store"],
      ["What does he say he's not about?", "No games", "No fame", "No talk"]
    ]] },
    { title: "Everything Is Up", id: "x3HZBFuNPaU", cuts: [32.0], qs: [[
      ["Who does he say he feels like?", "Master P", "Birdman", "Jay-Z"],
      ["Sit them at your table and they ain't got no what?", "Manners", "Money", "Plates"],
      ["What kind of baby does he call himself?", "Project baby", "Big baby", "Cry baby"],
      ["What did he put on his busted-up knuckles?", "A cast", "A bandage", "Ice"],
      ["Sick for a minute, he needs his mama's what?", "Soup", "Tea", "Cooking"],
      ["Who does he salute?", "The real", "The fans", "The block"]
    ]] },
    { title: "Paranoia", locked: true, cuts: [], qs: [] },
    { title: "Talk to Me", locked: true, cuts: [], qs: [] },
    { title: "Godfather 4", locked: true, cuts: [], qs: [] },
    { title: "Have Mercy", locked: true, cuts: [], qs: [] },
    { title: "Handsome", locked: true, cuts: [], qs: [] },
    { title: "I Don't Understand It", locked: true, cuts: [], qs: [] }
  ]
};
