/* Bobby J From Rockaway: Rockaway, Queens. Neo-classic lyricist. Summer Classics, Endless Summer (with Statik Selektah), One Mic & Drum, 7182313, Radio Days, the Breakfast Bars series. */
window.CFG = {
  name: "Bobby J From Rockaway", nameUpper: "BOBBY J FROM ROCKAWAY", short: "BOBBYJ",
  hood: "Rockaway", hoodUpper: "ROCKAWAY", boro: "Queens",
  saveKey: "ogfan99bobbyj1",
  /* "champagne dreams and beer money" is how he describes starting out; then the weekly Breakfast Bars, the Hometown song, Summer Classics, and Endless Summer */
  startRank: "Beer Money",
  ranks: ["Breakfast Bars", "Hometown Hero", "Summer Classic"],
  topRank: "Endless Summer",
  point: "Wave", points: "Waves",
  rankRewards: {
    "Breakfast Bars": { bongs: 5, line: "Every Monday, come hell or high water. You showed up." },
    "Hometown Hero": { bongs: 10, line: "If you build it, they will come. Rockaway came." },
    "Summer Classic": { bongs: 25, line: "You run all of Rockaway." }
  },
  trophyArt: [
    /* Beer Money: a few loose coins and a folded dollar */
    '<rect x="16" y="40" width="44" height="22" rx="2" fill="#8fbf7a" stroke="#3f6b33" stroke-width="1.5" transform="rotate(-8 38 51)"/>' +
    '<circle cx="38" cy="51" r="6" fill="none" stroke="#3f6b33" stroke-width="1.2" transform="rotate(-8 38 51)"/>' +
    '<text x="22" y="50" font-family="Anton,Impact,sans-serif" font-size="7" fill="#3f6b33" transform="rotate(-8 38 51)">1</text>' +
    '<circle cx="28" cy="70" r="7" fill="#c98a4a" stroke="#7a4a1c" stroke-width="1.2"/><circle cx="44" cy="72" r="6" fill="#cfd5dc" stroke="#7d8590" stroke-width="1.2"/><circle cx="56" cy="68" r="5" fill="#c98a4a" stroke="#7a4a1c" stroke-width="1.2"/>',
    /* Breakfast Bars: a diner coffee mug, steaming, with BARS on it */
    '<path d="M22 38h32v26q0 12-16 12t-16-12z" fill="#f4efe6" stroke="#5b6168" stroke-width="2"/>' +
    '<path d="M54 44q12 0 12 9t-13 9" fill="none" stroke="#f4efe6" stroke-width="4"/>' +
    '<ellipse cx="38" cy="38" rx="16" ry="4" fill="#5a3a20"/>' +
    '<text x="38" y="62" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="10" fill="#ff8a5b">BARS</text>' +
    '<path d="M32 32q-4-5 0-10t0-10M42 32q-4-5 0-10t0-10" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/>',
    /* Hometown Hero: a lifeguard chair with a red flag */
    '<path d="M24 78l8-40M56 78l-8-40M28 60h24M30 50h20" stroke="#f4efe6" stroke-width="4" stroke-linecap="round"/>' +
    '<rect x="28" y="30" width="24" height="10" rx="2" fill="#f4efe6" stroke="#5b6168" stroke-width="1"/>' +
    '<rect x="30" y="22" width="20" height="9" rx="1" fill="#ff5a4f"/><text x="40" y="29.5" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" fill="#fff">RKY</text>' +
    '<rect x="54" y="10" width="2" height="22" fill="#5b6168"/><path d="M56 10h14l-4 5 4 5H56z" fill="#ff5a4f"/>',
    /* Summer Classic: a gold surfboard standing up */
    '<path d="M40 8q14 18 12 46t-12 24q-10 4-12-24t12-46z" fill="#ffd34d" stroke="#7a5512" stroke-width="2"/>' +
    '<path d="M40 14v60" stroke="#ff8a5b" stroke-width="2.5"/>' +
    '<path d="M36 70l-6 8h6zM44 70l6 8h-6z" fill="#7a5512"/>',
    /* Endless Summer: a gold sun over a curling wave */
    '<circle cx="40" cy="36" r="14" fill="#ffd34d" stroke="#c08a1c" stroke-width="2"/>' +
    [0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = i * Math.PI / 4; return '<path d="M' + (40 + Math.cos(a) * 18) + ' ' + (36 + Math.sin(a) * 18) + 'L' + (40 + Math.cos(a) * 25) + ' ' + (36 + Math.sin(a) * 25) + '" stroke="#ffd34d" stroke-width="3" stroke-linecap="round"/>'; }).join("") +
    '<path d="M8 76q6-22 26-20q14 2 10 14q-4 6-10 2q10-2 4-8q-12-4-16 12z" fill="#3fd0c9" stroke="#1a6f6a" stroke-width="1.5"/>' +
    '<path d="M36 76q8-10 16-6t20 6z" fill="#3fd0c9" stroke="#1a6f6a" stroke-width="1.5"/>'
  ],
  clubTitle: "The Lifeguard Shack", clubTab: "SHACK",
  tags: ["ROCKAWAY", "NEO CLASSIC", "BOBBY J"],
  c1: "#ff8a5b", c2: "#3fd0c9", c3: "#ffd34d", bg: "#0b2433",
  /* Marine Parkway Bridge lift towers, the boardwalk, the waves */
  headerSvg: (function () {
    let s = '';
    [130, 210].forEach(x => { s += '<rect x="' + (x - 6) + '" y="2" width="12" height="52"/><rect x="' + (x - 9) + '" y="0" width="18" height="5"/>'; });
    s += '<rect x="124" y="24" width="92" height="6"/>';
    s += '<path d="M0 44Q65 30 124 40M216 40Q300 30 400 44" fill="none" stroke="#f7f3ea" stroke-width="3"/>';
    s += '<rect x="0" y="44" width="400" height="4"/>';
    for (let x = 6; x < 400; x += 24) s += '<rect x="' + x + '" y="48" width="3" height="8"/>';
    for (let x = 0; x < 400; x += 40) s += '<path d="M' + x + ' 62q10-6 20 0t20 0" fill="none" stroke="#f7f3ea" stroke-width="2"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@bobbyjfromrockaway", url: "https://www.instagram.com/bobbyjfromrockaway/" },
    { name: "YouTube", handle: "Bobby J From Rockaway", url: "https://www.youtube.com/channel/UCfE5nHJasERfaDxKcGV3L4Q" },
    { name: "X", handle: "@bobbyjrockaway", url: "https://x.com/bobbyjrockaway" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the A to Far Rockaway–Mott Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "bay", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "coaster" },
    { scene: "beach", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "crowd" },
    { scene: "riis", t: "CLIMB THE RANKS", x: "Everybody starts on Beer Money. Clear a row to rank up: Breakfast Bars, Hometown Hero, Summer Classic. Beat the 99 Challenge to become Endless Summer.", sfx: "bell" },
    { scene: "corner", t: "WELCOME TO ROCKAWAY", x: "Mott Av and Beach 20th St. This is Bobby J's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Round Here", id: "WLEGUxgYjbA", start: 124, cuts: [175.8], qs: [[
      ["Who's with Bobby J and Serch on this one?", "Krohme", "Statik", "Premier"],
      ["Rockaway is known for the what?", "Bars", "Bagels", "Boardwalk"],
      ["Which of these spots does he name?", "Connolly's", "Peter Luger's", "Rao's"],
      ["He says he's a good what boy?", "Catholic", "Country", "Mama's"],
      ["Round here we got teachers, nurses, cops and what?", "Firemen", "Lawyers", "Doctors"],
      ["Welcome to his block, it's the Rock, baby what?", "Alcatraz", "Gibraltar", "Brooklyn"]
    ]] },
    { title: "Where I'm From", id: "PX3Tqqpg5iQ", start: 14, cuts: [75.9], qs: [[
      ["Where I'm from, we got that hometown what?", "Pride", "Love", "Spirit"],
      ["Growing up, they never kept their doors what?", "Locked", "Open", "Painted"],
      ["They guard their corners like they're what?", "Fort Knox", "Fort Hamilton", "Fort Apache"],
      ["To raise a child it takes a what?", "Village", "Family", "Miracle"],
      ["From Belle Harbor to the what buildings?", "Dayton", "Empire", "Chrysler"],
      ["He just wants to make his hometown what?", "Proud", "Famous", "Rich"]
    ]] },
    { title: "Hometown", id: "Ps5gUZ6vMHc", start: 8, cuts: [55.9], qs: [[
      ["Rockaway, that's his what?", "Locale", "Kingdom", "Office"],
      ["Every night at last call there's a what?", "Showdown", "Countdown", "Lockdown"],
      ["It's not for the faint what?", "Heart", "Mind", "Soul"],
      ["Save a spot for his boy up in what?", "Heaven", "The stands", "The front row"],
      ["Which flight can't he forget?", "587", "911", "101"],
      ["Ain't no fakers and ain't no what where he comes from?", "Strangers", "Rappers", "Haters"]
    ]] },
    { title: "Walter White", locked: true, cuts: [], qs: [] },
    { title: "Blue Eyed Soul", locked: true, cuts: [], qs: [] },
    { title: "From The Jump", locked: true, cuts: [], qs: [] },
    { title: "Breakfast Bars", locked: true, cuts: [], qs: [] },
    { title: "Hook Drop", locked: true, cuts: [], qs: [] },
    { title: "Let Me Breathe", locked: true, cuts: [], qs: [] }
  ]
};
