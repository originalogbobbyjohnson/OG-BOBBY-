/* French Montana: South Bronx (came over from Morocco as a kid). Haan!, Young French, Jungle Rules, Excuse My French, They Got Amnesia, Unforgettable, Shot Caller. */
window.CFG = {
  name: "French Montana", nameUpper: "FRENCH MONTANA", short: "FRENCH",
  hood: "South Bronx", hoodUpper: "SOUTH BRONX", boro: "Bronx",
  saveKey: "ogfan99frenchmontana1",
  /* everybody starts out with Amnesia (They Got Amnesia) and climbs to Unforgettable */
  startRank: "Amnesia",
  ranks: ["Wavy", "Shot Caller", "Jungle Ruler"],
  topRank: "Unforgettable",
  point: "Haan", points: "Haans",
  rankRewards: {
    "Wavy": { bongs: 5, line: "Ain't worried about nothin'. Haan!" },
    "Shot Caller": { bongs: 10, line: "You calling the shots now. Excuse my French." },
    "Jungle Ruler": { bongs: 25, line: "You run all of the South Bronx." }
  },
  trophyArt: [
    /* Amnesia: a head with a question mark cloud */
    '<path d="M22 80V62q-8-6-8-20q0-22 24-22q22 0 24 20l6 12-6 2v10q0 6-8 6h-6v10z" fill="#3a3038" stroke="#ffc83d" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<text x="38" y="52" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="24" fill="#ffc83d">?</text>' +
    '<circle cx="62" cy="16" r="3" fill="#ffc83d" opacity=".6"/><circle cx="70" cy="8" r="2" fill="#ffc83d" opacity=".4"/>',
    /* Wavy: a curling wave */
    '<path d="M10 74q8-30 30-34q20-4 24 12q2 10-8 12q-10 2-8-8q-12 0-14 18q-2 12 30 0v6H10z" fill="#3aa3e0" stroke="#0b3a5e" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M20 68q6-14 18-18" stroke="#dff4ff" stroke-width="2" fill="none" stroke-linecap="round"/>' +
    '<circle cx="62" cy="40" r="2" fill="#dff4ff"/><circle cx="68" cy="34" r="1.5" fill="#dff4ff"/>',
    /* Shot Caller: a gold old-school phone */
    '<path d="M14 40q0-14 26-14t26 14l-2 8h-12l-2-8h-20l-2 8H16z" fill="#ffc83d" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<path d="M24 50h32l6 26H18z" fill="#e0a52c" stroke="#7a5512" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<circle cx="40" cy="63" r="8" fill="#2a1a0a"/><circle cx="40" cy="63" r="3" fill="#ffc83d"/>',
    /* Jungle Ruler: a lion head with a gold mane */
    '<circle cx="40" cy="46" r="26" fill="#c98a2a" stroke="#6a3e0a" stroke-width="1.5"/>' +
    '<path d="M14 46l-4-8 6 2-2-10 8 4 0-10 8 6 4-10 6 8 6-8 4 10 8-6 0 10 8-4-2 10 6-2-4 8" fill="#c98a2a" stroke="#6a3e0a" stroke-width="1.2"/>' +
    '<circle cx="40" cy="48" r="16" fill="#f0c36a"/><circle cx="34" cy="44" r="2" fill="#2a1a0a"/><circle cx="46" cy="44" r="2" fill="#2a1a0a"/>' +
    '<path d="M36 52h8l-4 4z" fill="#2a1a0a"/><path d="M40 56v3M36 60q4 3 8 0" stroke="#2a1a0a" stroke-width="1.2" fill="none"/>',
    /* Unforgettable: a gold record with a red-and-green star label */
    '<circle cx="40" cy="44" r="30" fill="#ffcc33" stroke="#7a5512" stroke-width="1.5"/>' +
    '<circle cx="40" cy="44" r="24" fill="none" stroke="#c9962f" stroke-width="1"/><circle cx="40" cy="44" r="18" fill="none" stroke="#c9962f" stroke-width="1"/>' +
    '<circle cx="40" cy="44" r="11" fill="#e8343b"/>' +
    '<path d="M40 36l2.4 5.6 6 .4-4.6 3.8 1.5 5.8L40 48.4l-5.3 3.2 1.5-5.8-4.6-3.8 6-.4z" fill="none" stroke="#21b35b" stroke-width="1.6" stroke-linejoin="round"/>' +
    '<circle cx="40" cy="44" r="1.5" fill="#2a1a0a"/>'
  ],
  clubTitle: "The Jungle", clubTab: "JUNGLE",
  tags: ["CB", "HAAN!", "YOUNG FRENCH"],
  c1: "#ffc83d", c2: "#e8343b", c3: "#21b35b", bg: "#240c0c",
  /* the Macombs Dam swing span, The Hub's storefront blocks and the zoo gate */
  headerSvg: (function () {
    let s = '<rect x="0" y="48" width="400" height="16"/>';
    /* Hub blocks */
    [[0, 18, 46], [50, 26, 40], [94, 12, 36]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/>'; for (let r = y + 6; r < 44; r += 10) for (let c = x + 5; c < x + w - 5; c += 10) s += '<rect x="' + c + '" y="' + r + '" width="5" height="5" fill="#240c0c"/>'; });
    /* the swing bridge truss */
    s += '<rect x="140" y="34" width="150" height="4"/><rect x="140" y="46" width="150" height="3"/><rect x="208" y="49" width="14" height="15"/>';
    for (let x = 140; x < 290; x += 10) s += '<path d="M' + x + ' 38l10 8M' + (x + 10) + ' 38l-10 8" stroke="#f7f3ea" stroke-width="1.5"/>';
    /* the zoo gate */
    s += '<rect x="310" y="40" width="26" height="24"/><rect x="382" y="40" width="18" height="24"/><path d="M308 40l15-8 15 8zM380 40l10-8 10 8z"/>';
    s += '<path d="M344 64V26l6-6h18l6 6v38h-4V28l-4-4h-14l-4 4v36z"/><rect x="357" y="14" width="4" height="50"/><circle cx="359" cy="12" r="4"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@frenchmontana", url: "https://www.instagram.com/frenchmontana/" },
    { name: "TikTok", handle: "@frenchmontana", url: "https://www.tiktok.com/@frenchmontana" },
    { name: "YouTube", handle: "French Montana", url: "https://www.youtube.com/channel/UC-4mIX9ls8ROVk9ApfeYf5w" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 2 or 5 to 3 Av–149 St. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "hub", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "bridge", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "bell" },
    { scene: "zoo", t: "CLIMB THE RANKS", x: "Everybody starts out with Amnesia. Clear a row to rank up: Wavy, Shot Caller, Jungle Ruler. Beat the 99 Challenge to become Unforgettable.", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO THE SOUTH BRONX", x: "E 149 St and Willis Av. This is French Montana's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "I Told Em", id: "2A58PP6naP8", start: 25, cuts: [55.3], qs: [[
      ["In the hook, all they do is what?", "Flex", "Ball", "Shine"],
      ["Watch that money do what?", "Stretch", "Grow", "Fly"],
      ["Never knew nothing, now he's doing what?", "Stuntin'", "Ballin'", "Flossin'"],
      ["He got asked where he's what?", "Going", "From", "Living"],
      ["What's French's answer, the song title?", "I told 'em", "I'm gone", "Who's asking"]
    ]] },
    { title: "Unforgettable", id: "CTFtOOh47oo", start: 79, cuts: [110.7], qs: [[
      ["He got a little drink, but it's not what?", "Bacardi", "Hennessy", "Patron"],
      ["If you loved the girl, then he's so, so what?", "Sorry", "Lucky", "Gone"],
      ["\"Oh, like we in a...\" what?", "Hurry", "Party", "Phantom"],
      ["Feelin' like he's fresh out who?", "Boosie", "Gucci", "Wayne"],
      ["He ships the whole crew to the what?", "Cruise ship", "Island", "Yacht club"],
      ["Doin' things you don't even see in what?", "Movies", "Magazines", "Dreams"]
    ]] },
    { title: "Famous", locked: true, cuts: [], qs: [] },
    { title: "Ever Since U Left Me", locked: true, cuts: [], qs: [] },
    { title: "No Stylist", locked: true, cuts: [], qs: [] },
    { title: "Writing on the Wall", locked: true, cuts: [], qs: [] },
    { title: "Shot Caller", locked: true, cuts: [], qs: [] },
    { title: "Ain't Worried About Nothin", locked: true, cuts: [], qs: [] },
    { title: "Pop That", locked: true, cuts: [], qs: [] }
  ]
};
