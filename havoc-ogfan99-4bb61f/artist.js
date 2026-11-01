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
  ],
  explicitSongs: [{"title":"Same Stuff Different Day","id":"buygQ1C2GFs","cuts":[39.5,85.9,135],"qs":[[["Same stuff, just a different what?","Day","Year","City"],["What does he tell you to listen to?","The bars","The beat","The hook"],["Listen to the bars and stay what?","Focused","Quiet","Humble"],["He's spitting for the average what?","Citizen","Rapper","Fan"],["The average citizen is going through the what?","Motions","Changes","Seasons"],["What kind of living?","Savage","Easy","Lavish"],["His fingertips are what?","Filthy","Frozen","Clean"],["When he's stressed out, there's nobody he could what?","Call","Trust","See"],["Where is he waiting?","In the crib","In the car","In the club"],["He's waiting for the what to line up?","Stars","Cars","Planets"],["\"Same stuff, just a different day...\" how often does that happen?","Every day","Once a year","Never"]],[["Be careful what you what?","Wish for","Say","Spend"],["His people told him it was a perfect what?","Line up","Plan","Night"],["The other man is just as what as him?","Hungry","Tired","Rich"],["So you know his judgment is what?","Biased","Fair","Final"],["It's a joke, he applied real what?","Rap","Pressure","Talk"],["He doesn't have time for what?","Lying","Games","Sleep"],["He hates a what?","Liar","Clown","Thief"],["He's a what?","Rider","Writer","Driver"],["They're out here singing like a what?","Choir","Bird","Siren"],["What word ends each hook line?","Yeah","Hey","Uh"],["How many times in a row does the hook say it?","Four","Two","Six"]],[["People are out here writing what?","Books","Rhymes","Checks"],["They lie to sell a what?","Book","Record","Car"],["Their identity is in what?","Crisis","Question","Hiding"],["Put that on a what?","Diet","Plate","Shelf"],["What year does he mention?","2012","1999","2020"],["As if he was a what?","Mayan","Martian","Prophet"],["Who does he compare himself to on real stuff?","Nostradamus","Einstein","Picasso"],["He has a what?","Vision","Dream","Plan"],["She's allergic to the what?","Jungle","City","Beach"],["What's in the building on a prowl?","The wolves","The lions","The cats"],["Don't even speak a what of his name?","Vowel","Word","Letter"]]]},{"title":"Always Have a Choice","id":"otrNuTbzN8s","start":19.9,"cuts":[54.1,106.7,170.3],"qs":[[["\"Ashes to the...\" what?","Ashes","Dust","Fire"],["What is he in love with?","Ashes","Money","Music"],["You don't see that what passing past you?","Money","Time","Train"],["Where do you see yourself in how many years?","5","10","2"],["Time does what?","Fly","Stop","Heal"],["You're not dealing with what years?","Light","Dog","Leap"],["He needs a bright what?","Idea","Light","Future"],["Misery brought its what?","Company","Friends","Bags"],["What does misery want from him?","His focus","His money","His name"],["It'll eat up any ambition like what?","Locust","Termites","Wolves"],["Pride is weighed down thinking how to ever what?","Blow","Leave","Rest"]],[["Who knows this?","Them OGs","The kids","The DJs"],["They laugh when the OGs what?","Approach us","Leave","Talk"],["Experiences are the best what?","Coaches","Teachers","Friends"],["He'll keep his mouth shut and his what open?","Ears","Eyes","Door"],["What era is it?","YouTube era","Golden era","Jazz era"],["He's been on camera catching all of his what?","Errors","Wins","Moves"],["He was saying things he wouldn't say how?","Normally","Twice","Out loud"],["He was disrespecting rappers that he what?","Adored","Hated","Signed"],["\"It was me, but then it...\" what?","Wasn't me","Was you","Was them"],["Where was the truth?","Right in front of me","Behind me","Above me"],["He wanted love but he wasn't even what?","Loving me","Looking","Trying"]],[["He was living like his head was on what?","Backwards","Fire","Straight"],["Now you're on back what?","Taxes","Streets","Burners"],["No role models, no what?","Practice","Money","Coach"],["What list is his boy on?","Blacklist","Guest list","A-list"],["Consider this verse like a what to his life?","Soundtrack","Movie","Book"],["Down 3-1, can he what?","Bounce back","Give up","Call it"],["What will lead you?","Faith","Money","Fame"],["People make mistakes, but mistakes make what?","People","Money","Music"],["Why does he love hip-hop?","It gave him an outlet","It made him rich","It's loud"],["Who does he have an unbreakable bond with?","Nick","Rick","Mike"],["He's not just the president of the struggle, he's a what?","Member","Fan","Founder"]]]},{"title":"Hey Luv (Anything)","id":"yFTpUWyV_qk","cuts":[41.7,78.8,120.3],"qs":[[["\"Shorty, come...\" what?","Here","Home","Through"],["Which group sings on this?","112","Jodeci","Dru Hill"],["What does 112 sing at the start?","Love you, need you","Miss you, want you","Call you, text you"],["He wants to hold you and do what?","Talk to you","Dance with you","Sing to you"],["He'd put his arm around your what?","Shoulder","Waist","Neck"],["Then he'd do what with you?","Walk","Dance","Ride"],["\"Be the one that'll serve, my...\" what to you?","Word","Heart","Love"],["He's got much more to give than who?","Homie","Your boss","His brother"],["You're so fine, he just wants to what with you?","Roll","Dine","Chill"],["You need a what close to you?","King","Friend","Guard"],["He'd like to just what with you?","Flow","Fight","Fly"]],[["He's gotta try, because anything is what?","Possible","Easy","Forever"],["You just might see things the way he what?","Does","Says","Feels"],["He wants to get next to you and be what with you?","Friends","Famous","Rich"],["He'll burn what?","Hundreds","Candles","Bridges"],["\"Pardon my mouth, I'm just being...\" what?","Honest","Nervous","Funny"],["He'll pay for what time just to vibe with you?","Air time","Over time","Down time"],["Kisses and hugs until the next time you what?","Swing thru","Call back","Come home"],["There are so many what he wants to do?","Things","Places","Songs"],["He only wants to be with who?","You","Them","Himself"],["What kind of shopping spree?","Million dollar","Hundred dollar","Holiday"],["Anything that you need, he what?","Got it","Wants it","Lost it"]],[["He wants you in the what way?","Worst","Best","Same"],["He says he ain't what?","Thirsty","Hungry","Tired"],["He'll take you out to what?","Eat","Dance","Shop"],["What does he want to clear up that you got about Mobb Deep?","Misconceptions","Rumors","Songs"],["He'll throw that what in your ear?","Bug","Word","Song"],["How long has he been wanting you?","For years","For weeks","Since today"],["They bump what here and there?","Heads","Shoulders","Cars"],["Good things come to those who what?","Wait","Work","Pray"],["If you're supposed to be with him, better change those what?","Plans","Clothes","Numbers"],["He treats 'em how?","Right","Rough","Cold"],["Wherever you're at, he's on the next what?","Flight","Train","Bus"]]]}]
};
(function(){try{if(window.CFG.explicitSongs&&localStorage.getItem("ogfan99explicit")==="1"){window.CFG.songs=window.CFG.explicitSongs;window.CFG.saveKey+="x";}}catch(e){}})();
