/* Havoc: Queensbridge, Long Island City, Queens. Producer and MC, half of Mobb Deep. Juvenile Hell, The Infamous, Hidden Files, 13, The Silent Partner, Infinite (Mass Appeal). */
window.CFG = {
  name: "Havoc", nameUpper: "HAVOC", short: "HAVOC",
  hood: "Queensbridge", hoodUpper: "QUEENSBRIDGE", boro: "Queens",
  saveKey: "ogfan99havoc1",
  /* everybody starts green, like the first Mobb Deep album; then dunn (Mobb Deep's word for son), the producer behind the boards, The Infamous, and Infinite */
  startRank: "Juvenile",
  ranks: ["Dunn", "Silent Partner", "Infamous"],
  topRank: "Infinite",
  point: "Sample", points: "Samples",
  rankRewards: {
    "Dunn": { bongs: 5, line: "Word to mother, you're family now, dunn." },
    "Silent Partner": { bongs: 10, line: "Behind the boards. You make it knock without saying a word." },
    "Infamous": { bongs: 25, line: "You run all of Queensbridge." }
  },
  trophyArt: [
    /* Juvenile: a black-and-white composition notebook (first rhymes, Art & Design High) */
    '<rect x="20" y="20" width="40" height="54" rx="2" fill="#151515" stroke="#000" stroke-width="2"/>' +
    [[26,26],[34,24],[46,27],[54,25],[30,33],[50,34],[25,58],[36,62],[48,60],[56,66],[30,68],[44,70],[53,56],[27,46],[56,45]].map(([x, y]) => '<circle cx="' + x + '" cy="' + y + '" r="1.6" fill="#f4f1ea"/>').join("") +
    '<rect x="20" y="20" width="5" height="54" fill="#000"/>' +
    '<rect x="29" y="37" width="24" height="14" rx="1" fill="#fff" stroke="#000" stroke-width="1"/>' +
    '<path d="M32 42h18M32 46h14" stroke="#5aa9e6" stroke-width="1.2"/>',
    /* Dunn: a navy fitted cap with QB stitched in white */
    '<path d="M16 58q0-30 24-30t24 30z" fill="#1d2b4a" stroke="#0b1222" stroke-width="2"/>' +
    '<path d="M40 28v30M28 32q-6 12-6 26M52 32q6 12 6 26" stroke="#0b1222" stroke-width="1"/>' +
    '<circle cx="40" cy="28" r="2.6" fill="#1d2b4a" stroke="#0b1222" stroke-width="1"/>' +
    '<path d="M12 58h46q16 0 16 6t-16 4H14q-4 0-4-5t2-5z" fill="#16223b" stroke="#0b1222" stroke-width="2"/>' +
    '<text x="40" y="51" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="14" fill="#f2efe6" letter-spacing="1">QB</text>' +
    '<path d="M26 74h28" stroke="#e4a93a" stroke-width="2"/>',
    /* Silent Partner: the drum machine, pads glowing */
    '<rect x="10" y="30" width="60" height="46" rx="4" fill="#9aa1a9" stroke="#3a3f47" stroke-width="2"/>' +
    '<rect x="14" y="34" width="22" height="10" rx="1" fill="#2a3a2a"/><rect x="16" y="36" width="18" height="6" fill="#8fd46b" opacity=".85"/>' +
    '<circle cx="44" cy="39" r="3" fill="#3a3f47"/><circle cx="54" cy="39" r="3" fill="#3a3f47"/><circle cx="63" cy="39" r="3" fill="#3a3f47"/>' +
    [0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => '<rect x="' + (34 + c * 9) + '" y="' + (48 + r * 7) + '" width="7" height="5.5" rx="1" fill="' + ((r + c) % 3 ? "#d8d4cc" : "#e4a93a") + '" stroke="#3a3f47" stroke-width=".6"/>').join("")).join("") +
    '<rect x="14" y="50" width="16" height="22" rx="2" fill="#3a3f47"/><rect x="18" y="54" width="8" height="4" fill="#9aa1a9"/><rect x="18" y="62" width="8" height="4" fill="#9aa1a9"/>',
    /* Infamous: a silver plaque record with QB on the label */
    '<rect x="10" y="18" width="60" height="60" rx="2" fill="#2a1d12" stroke="#e4a93a" stroke-width="2"/>' +
    '<circle cx="40" cy="44" r="21" fill="#cfd5dc" stroke="#7d8590" stroke-width="1.5"/>' +
    '<circle cx="40" cy="44" r="15" fill="none" stroke="#a9b1ba" stroke-width="1"/><circle cx="40" cy="44" r="10" fill="none" stroke="#a9b1ba" stroke-width="1"/>' +
    '<circle cx="40" cy="44" r="7" fill="#5aa9e6"/><text x="40" y="47" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="7" fill="#0b0f1a">QB</text>' +
    '<rect x="24" y="68" width="32" height="6" rx="1" fill="#e4a93a"/>',
    /* Infinite: a gold infinity loop with a small crown */
    '<path d="M40 52c-8-10-24-14-24 0s16 10 24 0c8-10 24-14 24 0s-16 10-24 0z" fill="none" stroke="#e4a93a" stroke-width="7" stroke-linejoin="round"/>' +
    '<path d="M40 52c-8-10-24-14-24 0s16 10 24 0c8-10 24-14 24 0s-16 10-24 0z" fill="none" stroke="#ffe08a" stroke-width="2"/>' +
    '<path d="M28 34l3-12 5 6 4-9 4 9 5-6 3 12z" fill="#ffcc33" stroke="#7a5512" stroke-width="1.2"/>' +
    '<circle cx="40" cy="17" r="2" fill="#5aa9e6"/><rect x="30" y="66" width="20" height="10" rx="1" fill="#e4a93a"/>'
  ],
  clubTitle: "The Beat Lab", clubTab: "BEATS",
  tags: ["MOBB DEEP", "DUNN", "HAV"],
  c1: "#f2efe6", c2: "#e4a93a", c3: "#5aa9e6", bg: "#0b0f1a",
  /* Queens Plaza Clock Tower in the middle, the Long Island City towers, Sunnyside Yard catenary gantries along the bottom */
  headerSvg: (function () {
    let s = '';
    /* LIC towers */
    [[20, 22, 26], [60, 30, 18], [250, 18, 22], [300, 28, 30], [350, 14, 20]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/>'; });
    s += '<rect x="96" y="6" width="30" height="58"/><rect x="104" y="0" width="14" height="6"/>';
    /* clock tower */
    s += '<rect x="178" y="22" width="44" height="42"/><rect x="186" y="10" width="28" height="14"/><path d="M190 10l10-10 10 10z"/>';
    s += '<circle cx="200" cy="17" r="5" fill="#000" opacity=".5"/>';
    /* gantries */
    for (let x = 0; x <= 400; x += 80) s += '<rect x="' + x + '" y="44" width="3" height="20"/><rect x="' + x + '" y="44" width="80" height="2"/>';
    s += '<rect x="0" y="60" width="400" height="4"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@mobbdeephavoc", url: "https://www.instagram.com/mobbdeephavoc/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the E, M or R to Queens Plaza. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "clock", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "bell" },
    { scene: "yard", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "traffic" },
    { scene: "lab", t: "CLIMB THE RANKS", x: "Everybody starts as a Juvenile. Clear a row to rank up: Dunn, Silent Partner, Infamous. Beat the 99 Challenge to become Infinite.", sfx: "organ" },
    { scene: "corner", t: "WELCOME TO QUEENSBRIDGE", x: "Queens Plaza North and 27th St. This is Havoc's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Always Have a Choice", id: "otrNuTbzN8s", start: 18, cuts: [64], qs: [[
      ["How you chasing things but don't see what passing past you?", "Money", "Time", "Love"],
      ["Where do you see yourself in how many years?", "5 years", "10 years", "2 years"],
      ["Time flies, you're not dealing with what?", "Light years", "Leap years", "Dog years"],
      ["He needs a bright what to take him out of here?", "Idea", "Light", "Future"],
      ["What does misery want from him?", "His focus", "His money", "His time"],
      ["Experiences are the best what?", "Coaches", "Teachers", "Friends"]
    ]] },
    { title: "Same Stuff Different Day", id: "buygQ1C2GFs", cuts: [62], qs: [[
      ["Same thing, just a different what?", "Day", "Night", "Week"],
      ["Listen to the bars and stay what?", "Focused", "Humble", "Quiet"],
      ["People out here going through the what?", "Motions", "Changes", "Seasons"],
      ["In the crib waiting for the stars to what?", "Line up", "Fall", "Shine"],
      ["What does he say he hates?", "A liar", "A hater", "A cheater"],
      ["They're out here singing like a what?", "Choir", "Bird", "Diva"]
    ]] },
    { title: "Hey Luv (Anything)", locked: true, cuts: [], qs: [] },
    { title: "Got It Twisted", locked: true, cuts: [], qs: [] },
    { title: "Temperature's Rising", locked: true, cuts: [], qs: [] },
    { title: "Quiet Storm", locked: true, cuts: [], qs: [] },
    { title: "Hell on Earth (Front Lines)", locked: true, cuts: [], qs: [] },
    { title: "Survival of the Fittest", locked: true, cuts: [], qs: [] },
    { title: "Shook Ones, Pt. II", locked: true, cuts: [], qs: [] }
  ]
};
