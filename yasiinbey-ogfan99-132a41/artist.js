/* Yasiin Bey (formerly Mos Def): Bed-Stuy, Brooklyn. Black Star with Talib Kweli, Urban Thermo Dynamics, Black on Both Sides, Black Dante, Most Definitely. */
window.CFG = {
  name: "Yasiin Bey", nameUpper: "YASIIN BEY", short: "YASIIN",
  hood: "Bed-Stuy", hoodUpper: "BED-STUY", boro: "Brooklyn",
  saveKey: "ogfan99yasiinbey1",
  /* everybody starts out faking the slang ("Priority": "full exposure to fake the slang") */
  startRank: "Fake Slang",
  ranks: ["Habitat Kid", "Mathematician", "Black Star", "Black Dante", "Most Definitely"],
  topRank: "Mighty Mos",
  point: "Star", points: "Stars",
  rankRewards: {
    "Habitat Kid": { bongs: 5, line: "Home before any place. Welcome to the habitat." },
    "Mathematician": { bongs: 10, line: "You did the math. The numbers add up." },
    "Black Star": { bongs: 15, line: "You shine like the Black Star now." },
    "Black Dante": { bongs: 20, line: "Black Dante. Style and stay radiate." },
    "Most Definitely": { bongs: 25, line: "You run all of Bed-Stuy." }
  },
  trophyArt: [
    /* Fake Slang: a crossed-out speech bubble */
    '<path d="M14 24h52a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H34l-12 12v-12h-8a6 6 0 0 1-6-6V30a6 6 0 0 1 6-6z" fill="#f4ecd8" stroke="#3a2a1a" stroke-width="2"/>' +
    '<text x="40" y="47" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="#3a2a1a">SLANG?</text>' +
    '<path d="M18 30l44 24" stroke="#ff4a4a" stroke-width="4" stroke-linecap="round"/>',
    /* Habitat Kid: a brownstone with its stoop */
    '<rect x="20" y="22" width="40" height="52" fill="#7b5038" stroke="#2e1d14" stroke-width="1.5"/><rect x="18" y="18" width="44" height="6" fill="#2e1d14"/>' +
    '<rect x="25" y="30" width="10" height="14" fill="#ffd27a"/><rect x="45" y="30" width="10" height="14" fill="#2b1b14"/>' +
    '<rect x="42" y="50" width="12" height="18" fill="#2b1b14"/>' +
    '<path d="M30 80h30v-4H34v-4h-4v-4h-4v-4h-4" fill="none" stroke="#5a3826" stroke-width="3"/>',
    /* Mathematician: a chalkboard with numbers */
    '<rect x="10" y="20" width="60" height="44" rx="2" fill="#1f3d27" stroke="#8a5a2a" stroke-width="4"/>' +
    '<text x="40" y="40" text-anchor="middle" font-family="Barlow,Arial,sans-serif" font-weight="700" font-size="11" fill="#f4ecd8">1+1=2</text>' +
    '<text x="40" y="56" text-anchor="middle" font-family="Barlow,Arial,sans-serif" font-weight="700" font-size="11" fill="#ffcf3f">E=MC²</text>' +
    '<rect x="30" y="64" width="20" height="4" fill="#8a5a2a"/><rect x="36" y="68" width="8" height="12" fill="#5a3a1a"/>',
    /* Black Star: a black star with a gold edge */
    '<path d="M40 14L48.5 33.5 69 35 53.5 49 58 70 40 59 22 70 26.5 49 11 35 31.5 33.5Z" fill="#111" stroke="#ffcf3f" stroke-width="3" stroke-linejoin="round"/>' +
    '<circle cx="40" cy="44" r="4" fill="#ffcf3f"/>',
    /* Black Dante: an open book with a quill */
    '<path d="M8 30q16-6 32 2v42q-16-8-32-2z" fill="#f4ecd8" stroke="#3a2a1a" stroke-width="1.5"/><path d="M72 30q-16-6-32 2v42q16-8 32-2z" fill="#efe3c8" stroke="#3a2a1a" stroke-width="1.5"/>' +
    '<path d="M14 40h20M14 48h20M14 56h18M46 40h20M46 48h18M46 56h20" stroke="#8a7a62" stroke-width="1.5"/>' +
    '<path d="M70 8q4 18-12 34l-6 4q-2-20 18-38z" fill="#ff6fb5" stroke="#8a2a5a" stroke-width="1.2"/><path d="M68 12l-18 40" stroke="#8a2a5a" stroke-width="1.5"/>',
    /* Most Definitely: a gold record with a checkmark label */
    '<circle cx="40" cy="46" r="30" fill="#e8b84a" stroke="#7a5512" stroke-width="2"/><circle cx="40" cy="46" r="22" fill="none" stroke="#b8862a" stroke-width="1"/><circle cx="40" cy="46" r="15" fill="none" stroke="#b8862a" stroke-width="1"/>' +
    '<circle cx="40" cy="46" r="10" fill="#6cbe45"/><path d="M34 46l4 4 8-9" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    /* Mighty Mos: a crown over a microphone */
    '<path d="M18 34l4-22 10 10 8-14 8 14 10-10 4 22z" fill="#ffcf3f" stroke="#7a5512" stroke-width="1.5"/><rect x="18" y="32" width="44" height="6" fill="#e8b84a" stroke="#7a5512" stroke-width="1"/>' +
    '<rect x="32" y="42" width="16" height="22" rx="8" fill="#c9ced6" stroke="#4a4f57" stroke-width="1.5"/><path d="M34 50h12M34 55h12" stroke="#4a4f57" stroke-width="1"/>' +
    '<path d="M28 58q0 12 12 12t12-12" stroke="#c9ced6" stroke-width="2.5" fill="none"/><rect x="38" y="70" width="4" height="10" fill="#c9ced6"/>'
  ],
  clubTitle: "The Black Star Line", clubTab: "STARS",
  tags: ["BLACK STAR", "UMI SAYS", "MOS DEF"],
  c1: "#ffcf3f", c2: "#ff6fb5", c3: "#6cbe45", bg: "#1a0f2a",
  /* a Bed-Stuy brownstone row with cornices and stoops, the magnolia tree and a star overhead */
  headerSvg: (function () {
    let s = '<rect x="0" y="50" width="400" height="14"/>';
    for (let i = 0; i < 8; i++) {
      if (i === 4) continue;
      const x = i * 50;
      s += '<rect x="' + (x + 2) + '" y="16" width="46" height="48"/><rect x="' + x + '" y="12" width="50" height="5"/>';
      for (let c = 0; c < 3; c++) for (let r = 0; r < 2; r++) s += '<rect x="' + (x + 7 + c * 14) + '" y="' + (22 + r * 13) + '" width="7" height="9" fill="#1a0f2a"/>';
    }
    s += '<ellipse cx="225" cy="26" rx="26" ry="20"/><rect x="222" y="40" width="6" height="24"/>';
    s += '<path d="M330 2l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the G to Bedford–Nostrand Avs. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "magnolia", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "pratt", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "block", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO BED-STUY", x: "Bedford Av and Lafayette Av, over the G. This is Yasiin Bey's game.", sfx: "spray" }
  ],
  /* PITCH DEMO: only "Priority" has clean captions of his own rapping in the caption data. */
  episodes: [
    { title: "Priority", id: "XyJ92qtFwP0", cuts: [31.9, 52.9, 77.1], qs: [
      [
        ["What comes first at the top of his list?", "Peace", "Money", "Fame"],
        ["\"Home before any...\" what?", "Place", "Time", "Day"],
        ["What word does he open with: \"Top...\"?", "Priority", "Shelf", "Floor"],
        ["He ain't afraid of major what?", "Streets", "Labels", "Storms"],
        ["His flow is great like the great what?", "Lakes", "Plains", "Walls"],
        ["Quiet water makes major what?", "Waves", "Noise", "Moves"],
        ["\"Love before...\" what?", "Anything", "Money", "Nothing"]
      ],
      [
        ["He comes ashore on a greater what?", "Day", "Wave", "Boat"],
        ["Home grown from the greatest what?", "Grain", "Tree", "Block"],
        ["\"Put that on your brainy...\" what?", "Brain", "Chain", "Train"],
        ["Minimum wage and major what?", "Gains", "Pains", "Games"],
        ["They came to play. What did we come to do?", "Stay", "Win", "Pray"],
        ["\"Get out the...\" what?", "Way", "Car", "Room"],
        ["\"Day to night and day to...\" what?", "Day", "Dusk", "Week"]
      ],
      [
        ["Brooklyn's finest preservation of what?", "Beat box", "Brownstones", "Vinyl"],
        ["Whose finest is he?", "Brooklyn's", "Harlem's", "Queens'"],
        ["Poison or what?", "Detox", "Medicine", "Cure"],
        ["When we rock, the people... what?", "Respond", "Leave", "Sleep"],
        ["\"Style and stay...\" what?", "Radiate", "Ready", "Relaxed"],
        ["\"Real before...\" what?", "Everything", "Money", "Sleep"],
        ["Which word does the hook keep coming back to?", "Priority", "Prosperity", "Patience"]
      ]
    ] },
    { title: "Brooklyn", locked: true, cuts: [], qs: [] },
    { title: "Sunshine", locked: true, cuts: [], qs: [] },
    { title: "Mathematics", locked: true, cuts: [], qs: [] },
    { title: "Umi Says", locked: true, cuts: [], qs: [] }
  ]
};
