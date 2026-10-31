window.CFG = {
  name: "Vado", nameUpper: "VADO", short: "VADO", hood: "Harlem", hoodUpper: "HARLEM", boro: "Manhattan",
  saveKey: "ogfan99vado1",
  /* "the most underrated rapper that they didn't crown" and "a big dog with a different growl" (Pull Up); Slime (Slime Flu tapes);
     U.N. (his duo with Cam'ron); Sinatra (his Sinatra tapes, "Bank Sinatra"); Movado (his full alias); Boss of All Bosses (U.N. tape series) */
  startRank: "Underrated", ranks: ["Big Dog", "Slime", "U.N.", "Sinatra", "Movado"], topRank: "Boss of All Bosses",
  point: "Chain", points: "Chains",
  rankRewards: {
    "Big Dog": { bongs: 5, line: "A big dog with a different growl." },
    "Slime": { bongs: 10, line: "You caught the Slime Flu." },
    "U.N.": { bongs: 15, line: "Us Now. Welcome to the U.N." },
    "Sinatra": { bongs: 20, line: "Smooth like Sinatra, uptown style." },
    "Movado": { bongs: 25, line: "You run all of Harlem." }
  },
  trophyArt: [
    /* Underrated: a grey paper crown nobody put on */
    '<path d="M14 66l-2-30 14 12 14-20 14 20 14-12-2 30z" fill="#8a8a8e" stroke="#4a4a4e" stroke-width="2"/><rect x="14" y="60" width="52" height="8" fill="#6e6e72"/>' +
    '<path d="M22 44l36 24M58 44L22 68" stroke="#4a4a4e" stroke-width="1.5" opacity=".5"/>',
    /* Big Dog: a big green dog tag on a chain */
    '<path d="M24 14q16 18 32 0" fill="none" stroke="#c9ced6" stroke-width="2.5" stroke-dasharray="3 2"/>' +
    '<rect x="20" y="24" width="40" height="54" rx="12" fill="#9cff57" stroke="#2a5a1a" stroke-width="2.5"/><circle cx="40" cy="32" r="3" fill="#2a5a1a"/>' +
    '<text x="40" y="60" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="#1a3a10">BIG</text><text x="40" y="74" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#1a3a10">DOG</text>',
    /* Slime: a lime green slime blob dripping */
    '<path d="M12 70q-2-40 28-44q30 4 28 44z" fill="#9cff57" stroke="#2a5a1a" stroke-width="2.5"/>' +
    '<path d="M22 70v8q0 4 4 0v-8M46 70v10q0 4 4 0v-10" fill="#9cff57" stroke="#2a5a1a" stroke-width="2"/>' +
    '<ellipse cx="30" cy="44" rx="6" ry="4" fill="#e6ffcf" opacity=".8"/>',
    /* U.N.: a blue globe in a laurel ring */
    '<circle cx="40" cy="46" r="22" fill="#3d7fd6" stroke="#1a3a6a" stroke-width="2.5"/><path d="M18 46h44M40 24v44M24 32q16 8 32 0M24 60q16-8 32 0" stroke="#cfe3ff" stroke-width="1.5" fill="none"/>' +
    '<path d="M14 50q0 22 22 26M66 50q0 22-22 26" fill="none" stroke="#f2c14e" stroke-width="4" stroke-dasharray="5 3"/>' +
    '<text x="40" y="20" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#f2c14e">U.N.</text>',
    /* Sinatra: a black fedora over a vintage mic */
    '<rect x="34" y="40" width="12" height="30" rx="6" fill="#c9ced6" stroke="#4a4f55" stroke-width="2"/><path d="M40 70v8M30 78h20" stroke="#4a4f55" stroke-width="3"/>' +
    '<path d="M24 36q0-18 16-18t16 18z" fill="#1c1c22" stroke="#000" stroke-width="2"/><rect x="24" y="30" width="32" height="5" fill="#ff8a5b"/>' +
    '<path d="M10 38q30 8 60 0" fill="none" stroke="#1c1c22" stroke-width="5" stroke-linecap="round"/>',
    /* Movado: a gold wristwatch */
    '<rect x="30" y="8" width="20" height="22" rx="3" fill="#c99a2e"/><rect x="30" y="70" width="20" height="22" rx="3" fill="#c99a2e"/>' +
    '<circle cx="40" cy="50" r="22" fill="#f2c14e" stroke="#8a5a12" stroke-width="2.5"/><circle cx="40" cy="50" r="17" fill="#141414"/>' +
    '<circle cx="40" cy="37" r="2.5" fill="#f2c14e"/><path d="M40 50V40M40 50l8 4" stroke="#f2c14e" stroke-width="2" stroke-linecap="round"/>',
    /* Boss of All Bosses: a gold crown with slime green and orange gems */
    '<path d="M12 70l-2-40 16 16 14-26 14 26 16-16-2 40z" fill="#f2c14e" stroke="#8a5a12" stroke-width="2"/><rect x="12" y="64" width="56" height="10" fill="#e0a82e" stroke="#8a5a12" stroke-width="2"/>' +
    '<circle cx="40" cy="52" r="5" fill="#9cff57"/><circle cx="24" cy="56" r="3.5" fill="#ff8a5b"/><circle cx="56" cy="56" r="3.5" fill="#ff8a5b"/><circle cx="40" cy="20" r="3" fill="#f7f3ea"/>'
  ],
  clubTitle: "The U.N. Summit", clubTab: "SUMMIT",
  tags: ["U.N.", "SLIME FLU", "MOVADO"],
  c1: "#9cff57", c2: "#ff8a5b", c3: "#f2c14e", bg: "#0f1a10",
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    /* Harlem tenements on the left */
    [[0, 26, 34], [36, 32, 30], [68, 22, 38], [108, 34, 26]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/>'; });
    /* the 145th St swing bridge truss */
    s += '<rect x="140" y="44" width="200" height="4"/><rect x="140" y="30" width="200" height="3"/><rect x="232" y="20" width="16" height="10"/>';
    for (let x = 140; x < 340; x += 16) s += '<path d="M' + x + ' 48L' + (x + 8) + ' 31L' + (x + 16) + ' 48" stroke="#f7f3ea" stroke-width="2" fill="none"/>';
    /* Bronx buildings across the river */
    [[346, 28, 24], [372, 36, 28]].forEach(([x, y, w]) => { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (64 - y) + '"/>'; });
    return s;
  })() + '</g>',
  socials: [
    { name: "X", handle: "@VADO_MH", url: "https://x.com/VADO_MH" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 3 to 145 St on Lenox Av. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "schomburg", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "traffic" },
    { scene: "graham", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "bridge", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO HARLEM", x: "Malcolm X Blvd and W 144 St, where he came up. This is Vado's game.", sfx: "spray" }
  ],
  episodes: [
  /* Timing comes from the auto captions on Vado's own channel uploads. Questions skip the cursing, the gun lines and the guest hook.
     Pitch demo: 2 of 5 songs playable. Rejected: Enemies (a robbery story), Da Hated (captions garbled), Started From Nothing (posse cut). */
  { title: "VADO Anthem", id: "LUE0e_Ho6TI", cuts: [87.7, 131.4, 184.6], qs: [
    [
      ["The game changes like the what?", "Weather", "Wind", "Seasons"],
      ["\"Here's the\" what?", "Forecast", "Headline", "Playlist"],
      ["They switched from broadcast to what?", "Podcast", "Livestream", "Radio"],
      ["He'll put you in the friendly what?", "Skies", "Streets", "Seats"],
      ["He doesn't want your friendly what?", "Fives", "Smiles", "Hugs"],
      ["\"We the breakfast\" what?", "Clubs", "Kings", "Crew"],
      ["Dress well, really what?", "Fly", "Sharp", "Clean"]
    ],
    [
      ["He's been in this too long to do what?", "Stop now", "Slow down", "Look back"],
      ["Does he look like he's quitting?", "No, he's still spitting", "Yes, he's done", "Only on weekends"],
      ["He's too what for that?", "Cocky", "Tired", "Busy"],
      ["He spits the what and lets loose?", "Truth", "Bars", "Heat"],
      ["He lets loose without a what?", "Care", "Doubt", "Break"],
      ["Even the blind got a what?", "Stare", "Clue", "Ticket"],
      ["What kind of bear does he name?", "Koala", "Polar", "Grizzly"]
    ],
    [
      ["He swears he doesn't rap no more, but he's what?", "Rapping more", "Singing now", "Retired"],
      ["He's still rapping how?", "Raw", "Slow", "Soft"],
      ["Cats are waiting in what?", "Line", "Traffic", "The lobby"],
      ["The backseat does what?", "Reclines", "Spins", "Folds up"],
      ["These streets is what?", "Mine", "Ours", "Quiet"],
      ["Time is what?", "Money", "Running", "Precious"],
      ["Diamonds African like who?", "Mandela", "Kenyatta", "Garvey"]
    ]
  ] },
  { title: "Pull Up", id: "TSgY5b1K4aI", cuts: [85.1, 127.6, 180.9], qs: [
    [
      ["He promises he's what than all these rappers?", "Nicer", "Colder", "Faster"],
      ["He's on a different what?", "Prowl", "Level", "Wave"],
      ["The most what rapper that they didn't crown?", "Underrated", "Famous", "Popular"],
      ["A big dog with a different what?", "Growl", "Bark", "Bite"],
      ["Which basketball star is he to these rappers?", "LeBron", "Jordan", "Kobe"],
      ["When he writes, he puts his what in it?", "Life", "Heart", "Soul"],
      ["He's got a glow like when the what hit it?", "Lights", "Sun", "Flash"]
    ],
    [
      ["\"Beyonce, I'm a\" what?", "Destiny's Child", "Survivor", "Single lady"],
      ["What kind of foul does he call?", "Technical", "Flagrant", "Personal"],
      ["Black and white striped what?", "Rugby", "Jersey", "Hoodie"],
      ["Throw a flag on the what?", "Fit", "Play", "Field"],
      ["He'll make his who proud?", "Oldest", "Teacher", "Coach"],
      ["A soldier like who?", "Colin Powell", "Patton", "MacArthur"],
      ["No bookers, no what?", "Rolling Loud", "Summer Jam", "Grammys"]
    ],
    [
      ["How does he walk through the hoods?", "Color blind", "Blindfolded", "Barefoot"],
      ["He says he's not a what?", "Millionaire", "Rookie", "Rapper"],
      ["He had over 100k over how many times?", "100", "10", "1,000"],
      ["He sits with it for how many minutes?", "6", "16", "60"],
      ["Which leader does he name?", "Malcolm X", "Marcus Garvey", "Adam Clayton Powell"],
      ["\"I'm a\" what, \"get my director on\"?", "Movie", "Star", "Scene"],
      ["Turn that what on?", "Projector", "Spotlight", "Radio"]
    ]
  ] },
  { title: "NEW NEW", locked: true, cuts: [], qs: [] },
  { title: "My Bae", locked: true, cuts: [], qs: [] },
  { title: "Speaking in Tungs", locked: true, cuts: [], qs: [] }
  ]
};
