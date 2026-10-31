/* Nas: Queensbridge, Long Island City, Queens. Mass Appeal. Illmatic, It Was Written, God's Son, King's Disease. Nasty Nas, Nas Escobar, Esco, God's Son. */
window.CFG = {
  name: "Nas", nameUpper: "NAS", short: "NASIR",
  hood: "Queensbridge", hoodUpper: "QUEENSBRIDGE", boro: "Queens",
  saveKey: "ogfan99nas1",
  /* everybody starts out in their "Second Childhood" (his song about grown folks still acting like kids) */
  startRank: "Second Childhood",
  ranks: ["Nasty Nas", "Esco", "God's Son"],
  topRank: "Illmatic",
  point: "Crown", points: "Crowns",
  rankRewards: {
    "Nasty Nas": { bongs: 5, line: "Kid Wave grew up. Now they call you Nasty." },
    "Esco": { bongs: 10, line: "It was written. You earned the name." },
    "God's Son": { bongs: 25, line: "You run all of Queensbridge." }
  },
  trophyArt: [
    /* Second Childhood: a toy ABC block with a rattle */
    '<rect x="18" y="38" width="32" height="32" rx="3" fill="#9aa0a6" stroke="#4a4f55" stroke-width="2"/>' +
    '<text x="34" y="62" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="20" fill="#4a4f55">A</text>' +
    '<circle cx="58" cy="30" r="9" fill="#b9bec6" stroke="#4a4f55" stroke-width="2"/><path d="M54 37l-6 30" stroke="#4a4f55" stroke-width="4" stroke-linecap="round"/>' +
    '<circle cx="55" cy="28" r="1.5" fill="#4a4f55"/><circle cx="61" cy="32" r="1.5" fill="#4a4f55"/>',
    /* Nasty Nas: a 90s silver ball mic */
    '<circle cx="40" cy="28" r="14" fill="#c9ced6" stroke="#4a4f55" stroke-width="2"/>' +
    '<path d="M28 24h24M27 30h26M29 36h22M34 15v26M40 14v28M46 15v26" stroke="#7b8088" stroke-width="1"/>' +
    '<path d="M33 42h14l-3 30h-8z" fill="#2a2d33" stroke="#14161a" stroke-width="1.5"/>' +
    '<rect x="34" y="50" width="12" height="4" fill="#f0c75e"/>',
    /* Esco: a gold rope chain with an E medallion */
    '<path d="M16 16q24 60 48 0" fill="none" stroke="#c99a2e" stroke-width="5" stroke-dasharray="3 2"/>' +
    '<circle cx="40" cy="54" r="16" fill="#f0c75e" stroke="#7a5512" stroke-width="2"/><circle cx="40" cy="54" r="12" fill="none" stroke="#c99a2e" stroke-width="1.2"/>' +
    '<text x="40" y="61" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="18" fill="#7a5512">E</text>',
    /* God's Son: a gold sunburst halo */
    '<g stroke="#f0c75e" stroke-width="3" stroke-linecap="round"><path d="M40 8v10M40 70v8M8 42h10M62 42h10M17 19l7 7M56 58l7 7M63 19l-7 7M24 58l-7 7"/></g>' +
    '<circle cx="40" cy="42" r="18" fill="#ffcc33" stroke="#7a5512" stroke-width="2"/>' +
    '<ellipse cx="40" cy="24" rx="14" ry="4" fill="none" stroke="#fff4c2" stroke-width="2.5"/>' +
    '<text x="40" y="49" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="16" fill="#7a5512">GS</text>',
    /* Illmatic: a gold 1994 boom box wearing a crown */
    '<path d="M28 16l4-12 6 7 2-9 2 9 6-7 4 12z" fill="#ffcc33" stroke="#7a5512" stroke-width="1.2"/>' +
    '<path d="M26 28v-8h28v8" fill="none" stroke="#c99a2e" stroke-width="3"/>' +
    '<rect x="6" y="28" width="68" height="40" rx="5" fill="#e0a52c" stroke="#7a5512" stroke-width="2"/>' +
    '<circle cx="20" cy="50" r="10" fill="#7a5512"/><circle cx="20" cy="50" r="4" fill="#3a2a10"/>' +
    '<circle cx="60" cy="50" r="10" fill="#7a5512"/><circle cx="60" cy="50" r="4" fill="#3a2a10"/>' +
    '<rect x="32" y="40" width="16" height="12" rx="1.5" fill="#fff4c2" stroke="#7a5512" stroke-width="1"/>' +
    '<circle cx="36.5" cy="47" r="2" fill="#7a5512"/><circle cx="43.5" cy="47" r="2" fill="#7a5512"/>' +
    '<rect x="32" y="32" width="16" height="5" rx="1" fill="#7a5512"/>'
  ],
  clubTitle: "The King's Throne Room", clubTab: "THRONE",
  tags: ["QB'S FINEST", "THE WORLD IS YOURS", "ESCO"],
  c1: "#f0c75e", c2: "#e8322b", c3: "#6fb3d9", bg: "#1c0d08",
  /* Long Island City waterfront: the two Gantry Plaza gantries, the neon sign frame, the Ravenswood stacks, Court Square tower */
  headerSvg: (function () {
    let s = '';
    [[20, 22], [70, 22]].forEach(([x, y]) => { s += '<rect x="' + x + '" y="' + (y + 6) + '" width="4" height="36"/><rect x="' + (x + 26) + '" y="' + (y + 6) + '" width="4" height="36"/><rect x="' + (x - 6) + '" y="' + y + '" width="42" height="7"/><path d="M' + x + ' 64L' + (x + 30) + ' 40M' + (x + 30) + ' 64L' + x + ' 40" stroke="#f7f3ea" stroke-width="2"/>'; });
    s += '<rect x="130" y="18" width="110" height="3"/><rect x="130" y="40" width="110" height="3"/>';
    for (let x = 130; x <= 240; x += 11) s += '<rect x="' + x + '" y="18" width="1.5" height="25"/>';
    s += '<path d="M140 36q12-16 22-6t20-4t22 0t26-6" fill="none" stroke="#f7f3ea" stroke-width="3"/>';
    s += '<rect x="140" y="43" width="3" height="21"/><rect x="226" y="43" width="3" height="21"/>';
    [[262, 10], [282, 6], [302, 12], [324, 2]].forEach(([x, y]) => { s += '<path d="M' + x + ' 64L' + (x + 2) + ' ' + y + 'h8L' + (x + 12) + ' 64z"/>'; });
    s += '<rect x="350" y="0" width="22" height="64"/><rect x="376" y="20" width="16" height="44"/><rect x="104" y="30" width="18" height="34"/>';
    s += '<rect x="0" y="60" width="400" height="4"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@nas", url: "https://www.instagram.com/nas/" },
    { name: "X", handle: "@Nas", url: "https://x.com/Nas" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 7 to Queensboro Plaza. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "gantry", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "allis", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "traffic" },
    { scene: "throne", t: "CLIMB THE RANKS", x: "Everybody starts in their Second Childhood. Clear a row to rank up: Nasty Nas, Esco, God's Son. Beat the 99 Challenge to become Illmatic.", sfx: "organ" },
    { scene: "corner", t: "WELCOME TO QUEENSBRIDGE", x: "Vernon Blvd and 40th Av. This is Nas's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Made You Look", id: "DhPtRA7zieE", start: 28.5, cuts: [60.6], qs: [[
      ["Y'all appointed Nas to bring rap what?", "justice", "peace", "money"],
      ["Nas says he ain't who?", "5-0", "a DJ", "the mayor"],
      ["They only describe us as soldier what?", "survivors", "rookies", "heroes"],
      ["Stay laced in the best, well dressed with what?", "finesse", "gold", "fur"],
      ["In a white tee, he's looking for who?", "wifey", "trouble", "his crew"],
      ["He puts her in the coupe to feel the nice what?", "breeze", "beat", "ride"]
    ]] },
    { title: "One Mic", id: "JCOURZ-yx4E", start: 12, cuts: [43.6], qs: [[
      ["All Nas needs is one what?", "mic", "chain", "car"],
      ["One beat, one stage, one what?", "person", "crowd", "song"],
      ["Front of my face on the front what?", "page", "door", "row"],
      ["He sees his name in the what?", "hieroglyphs", "headlines", "lights"],
      ["Like Osiris and who?", "Isis", "Horus", "Ra"],
      ["Parables written inside what?", "papyruses", "notebooks", "bibles"]
    ]] },
    { title: "Just a Moment", id: "_49iKyoQcfs", start: 18.5, cuts: [48.2], qs: [[
      ["What does Nas ask for first?", "a moment of silence", "a toast", "a dance"],
      ["That's for those doing years in what?", "confinement", "college", "the army"],
      ["His soldiers that passed over are no longer what?", "living", "around", "talking"],
      ["Who came to get them?", "the reaper", "the cops", "the bus"],
      ["Though our thugs ain't here, what is here?", "the love", "the music", "the money"]
    ]] },
    { title: "It Ain't Hard to Tell", id: "3hOZaTGnHU4", start: 23, cuts: [58.3, 110.5], qs: [[
      ["Nas says he excels, then what?", "prevails", "retires", "fails"],
      ["His mic check is life or what?", "death", "fame", "money"],
      ["Deep like which movie?", "The Shining", "Jaws", "Scarface"],
      ["He sparkles like a what?", "diamond", "star", "chain"],
      ["He hits the earth like a what invasion?", "comet", "alien", "army"],
      ["Nas is half man, half what?", "amazing", "machine", "legend"]
    ], [
      ["Not stories by who?", "Aesop", "Dr. Seuss", "Grimm"],
      ["You feel it like what?", "Braille", "thunder", "bass"],
      ["He kicks a skill like which NBA star?", "Shaquille", "Jordan", "Magic"],
      ["He slams beats like which wrestler?", "Iron Sheik", "Hulk Hogan", "Andre the Giant"],
      ["You're scannin' and plannin' ways to do what to him?", "sabotage him", "copy him", "sign him"]
    ]] },
    { title: "Bridging the Gap", id: "hq7z3JBKCTE", start: 45.5, cuts: [78.8, 156.0], qs: [[
      ["Nas is the Chuck Berry of these what?", "rap skits", "jazz clubs", "block parties"],
      ["His Pop told him be your own what?", "boss", "man", "king"],
      ["Keep integrity at every what?", "cost", "turn", "step"],
      ["His father's home was Natchez, in which state?", "Mississippi", "Alabama", "Louisiana"],
      ["Did it like Miles and who?", "Dizzy", "Duke", "Coltrane"],
      ["Bridging the gap from the blues, to jazz, to what?", "rap", "rock", "soul"]
    ], [
      ["His Minneapolis was The what?", "Bridge", "Block", "Basement"],
      ["The blues came from what?", "gospel", "jazz", "rock"],
      ["Hip-hop guided his what?", "heart", "hands", "feet"],
      ["In art class he was a compulsive what?", "sketcher", "talker", "dancer"],
      ["He read more books than the what?", "curriculum", "teacher", "library"]
    ]] },
    { title: "If I Ruled the World (Imagine That)", id: "mlp-IIG9ApU", start: 52.5, cuts: [84.5, 166.3], qs: [[
      ["Imagine going to court with no what?", "trial", "judge", "lawyer"],
      ["No welfare what?", "supporters", "offices", "lines"],
      ["More conscious of the way we raise our what?", "daughters", "money", "voices"],
      ["Days are shorter, nights are what?", "colder", "louder", "brighter"],
      ["These snakes strike like a what?", "cobra", "viper", "rattler"],
      ["They want us all gone when?", "eventually", "tomorrow", "tonight"]
    ], [
      ["Watch the blimp read: the world is what?", "mine", "ours", "over"],
      ["Black, Latino, and what?", "Anglo-Saxon", "Asian", "Irish"],
      ["He's as wise as the old what?", "owl", "man", "king"],
      ["Give him one shot, he turns trife life to what?", "lavish", "gold", "famous"],
      ["Who would he make mayor of the cities?", "Coretta Scott King", "Oprah Winfrey", "Rosa Parks"]
    ]] },
    { title: "I Can", id: "RvVfgvHucRY", start: 36, cuts: [67.7, 138.4, 219.0], qs: [[
      ["You can be anything in the world, in who we trust?", "God", "money", "family"],
      ["An architect, doctor, maybe an what?", "actress", "astronaut", "athlete"],
      ["Nothing comes easy, it takes much what?", "practice", "money", "luck"],
      ["He met a woman who was becoming a what?", "star", "doctor", "teacher"],
      ["She sang songs like which singer, the younger version?", "Lena Horne", "Diana Ross", "Aretha Franklin"],
      ["She hung with the wrong what?", "person", "crew", "family"]
    ], [
      ["Watch the company you what?", "keep", "hire", "call"],
      ["Put your hands in the air and take the what?", "vow", "stage", "lead"],
      ["This is for grown-looking girls who are only how old?", "10", "16", "21"],
      ["You can host the TV like who?", "Oprah Winfrey", "Ellen", "Arsenio Hall"],
      ["Give yourself time to what?", "grow", "shine", "rest"],
      ["You don't want to be his age and can't what?", "read and write", "ride a bike", "tell time"]
    ], [
      ["Before we came to this country, we were kings and what?", "queens", "slaves", "soldiers"],
      ["There were empires in Africa called what?", "Kush", "Rome", "Persia"],
      ["Every race came to which city to get books?", "Timbuktu", "Cairo", "Athens"],
      ["Who went to Egypt and was shocked by the mountains?", "Alexander the Great", "Julius Caesar", "Napoleon"],
      ["Hold your head up little man, you're a what?", "king", "star", "prince"]
    ]] },
    { title: "Nas Is Like", id: "VC4ORS5n9Hg", start: 19, cuts: [50.4, 147.6, 208.9], qs: [[
      ["First it was what, but times have changed?", "Nasty", "Escobar", "Kid Wave"],
      ["Ask me now, I'm the what?", "artist", "king", "prophet"],
      ["He kept his mind on what?", "fame", "money", "family"],
      ["It's only natural he explains his what?", "plateau", "story", "past"],
      ["The beginning and the what, as far as rap go?", "end", "crown", "rise"]
    ], [
      ["Street scriptures for lost souls in the what?", "crossroads", "city", "churches"],
      ["Heaven and hell, rap legend, presence is what?", "felt", "known", "gone"],
      ["Earth, Wind & Fire, rims and what?", "tires", "chrome", "wheels"],
      ["With tarot cards you can see the what?", "pharaoh Nas", "future king", "prophet Nas"],
      ["He went from Seiko to what?", "Rolex", "Cartier", "Timex"],
      ["He'd rather be alive and what?", "paid", "famous", "free"]
    ], [
      ["Like Greeks in which country, learning from their teachers?", "Egypt", "Rome", "Spain"],
      ["He's like Pac, dude you would what for?", "cry", "pay", "wait"],
      ["Corporate accounts from a rich what?", "company", "family", "banker"],
      ["He's like the '99 what?", "Summer Jam", "World Series", "Super Bowl"],
      ["He's a poor man's dream, a thug what?", "poet", "king", "prince"]
    ]] },
    { title: "The World Is Yours", id: "e5PnuIRnJW8", start: 20, cuts: [54.5, 133.9, 221.8], qs: [[
      ["He sips the Dom P. watching who?", "Gandhi", "Scarface", "Malcolm X"],
      ["His rhyme book words go past the what?", "margin", "page", "lines"],
      ["Suede what on his feet?", "Timbs", "Pumas", "Clarks"],
      ["Cruising in a Sikh's cab or a Montero what?", "Jeep", "Benz", "Lexus"],
      ["The beats make him fall what?", "asleep", "in love", "behind"]
    ], [
      ["He's out for presidents to do what?", "represent me", "pay me", "vote for me"],
      ["To his man who, God bless your life?", "Ill Will", "Big Will", "Lil Will"],
      ["He blesses his peoples throughout which borough?", "Queens", "Brooklyn", "the Bronx"],
      ["Dwelling in the Rotten what?", "Apple", "Borough", "City"],
      ["Or caught by the devil's what?", "lasso", "pitchfork", "hand"],
      ["He looks for a word describing his life to name his what?", "daughter", "son", "album"]
    ], [
      ["He's the young city what?", "bandit", "king", "hustler"],
      ["No crew to keep his crown or what?", "throne", "chain", "name"],
      ["The black cloud makes it too dark to see what?", "tomorrow", "the sun", "the block"],
      ["They locked the champ up, even his brain's in what?", "handcuffs", "chains", "a cell"],
      ["He's burning dollars to light his what?", "stove", "way", "candle"]
    ]] }
  ]
};
