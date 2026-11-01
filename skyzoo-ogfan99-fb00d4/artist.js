/* Skyzoo: Bed-Stuy, Brooklyn. Gregory Skyler Taylor, born in Crown Heights, raised in Bed-Stuy. The storyteller, First Generation Rich. */
window.CFG = {
  name: "Skyzoo", nameUpper: "SKYZOO", short: "SKY",
  hood: "Bed-Stuy", hoodUpper: "BED-STUY", boro: "Brooklyn",
  saveKey: "ogfan99skyzoo1",
  /* everybody starts on the front stoop ("jumping off a stoop"); climb through his albums to All the Brilliant Things */
  startRank: "Front Stoop",
  ranks: ["Tape Deck", "The Salvation", "Barrel Brother", "Retropolitan", "First Generation Rich"],
  topRank: "All the Brilliant Things",
  point: "Fitted", points: "Fitteds",
  rankRewards: {
    "Tape Deck": { bongs: 5, line: "Tape Deck. Live from it." },
    "The Salvation": { bongs: 10, line: "The Salvation. You found the way in." },
    "Barrel Brother": { bongs: 15, line: "Barrel Brother. Pen to pen with the best." },
    "Retropolitan": { bongs: 20, line: "Retropolitan. Old New York lives in you." },
    "First Generation Rich": { bongs: 25, line: "You run all of Bed-Stuy." }
  },
  trophyArt: [
    /* Front Stoop: brownstone steps with the iron rail */
    '<path d="M14 76h52v-8H22v-8h36v-8H30v-8h20v-8" fill="none"/><path d="M14 80V72h8v-8h8v-8h8v-8h8v-8h8v40z" fill="#8a5a3c" stroke="#4a2e1c" stroke-width="1.5"/>' +
    '<path d="M54 40v40" stroke="#4a2e1c" stroke-width="2"/><path d="M12 56l40-20" stroke="#1d1d1d" stroke-width="2.5"/><path d="M16 54v18M26 49v18M36 44v18M46 39v18" stroke="#1d1d1d" stroke-width="1.5"/><circle cx="12" cy="56" r="3" fill="#1d1d1d"/>',
    /* Tape Deck: a cassette */
    '<rect x="8" y="30" width="64" height="42" rx="4" fill="#1f2937" stroke="#6b7280" stroke-width="2"/><rect x="14" y="36" width="52" height="16" rx="2" fill="#f2c14e"/>' +
    '<text x="40" y="47" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="8" fill="#1f2937">SKYZOO</text>' +
    '<circle cx="27" cy="60" r="6" fill="#f7f3ea"/><circle cx="53" cy="60" r="6" fill="#f7f3ea"/><rect x="33" y="57" width="14" height="6" fill="#3a3f4a"/><path d="M20 72l4-6h32l4 6" fill="#3a3f4a"/>',
    /* The Salvation: a white dove rising out of a beam of light */
    '<path d="M30 80l10-70 10 70z" fill="#fff6c2" opacity=".5"/>' +
    '<path d="M14 44q10-16 26-10q8-12 20-10q-4 6-4 10q6 6 4 12q-8 8-22 6q-14-2-24-8z" fill="#fff" stroke="#9aa3ad" stroke-width="1.5"/><path d="M28 36q8-22 22-20q-8 12-12 22" fill="#f4f6f8" stroke="#9aa3ad" stroke-width="1.5"/><circle cx="56" cy="30" r="1.5" fill="#111"/><path d="M60 32l6 2-6 2" fill="#f2c14e"/>',
    /* Barrel Brother: two fountain pens crossed over an ink bottle */
    '<path d="M24 58h32v20H24z" fill="#13306b" stroke="#0a1a3a" stroke-width="2"/><rect x="32" y="50" width="16" height="8" fill="#3a3f4a"/><rect x="28" y="64" width="24" height="8" fill="#f7f3ea"/>' +
    '<path d="M14 14l36 36" stroke="#1d1d1d" stroke-width="6" stroke-linecap="round"/><path d="M50 50l6 6-8-2z" fill="#e8b84a"/>' +
    '<path d="M66 14L30 50" stroke="#a8402d" stroke-width="6" stroke-linecap="round"/><path d="M30 50l-6 6 8-2z" fill="#e8b84a"/><path d="M18 18l6 6M62 18l-6 6" stroke="#e8b84a" stroke-width="2"/>',
    /* Retropolitan: a boombox */
    '<path d="M24 30q16-16 32 0" fill="none" stroke="#6b7280" stroke-width="3"/><rect x="6" y="30" width="68" height="44" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
    '<circle cx="22" cy="56" r="11" fill="#1f2937"/><circle cx="22" cy="56" r="4" fill="#6b7280"/><circle cx="58" cy="56" r="11" fill="#1f2937"/><circle cx="58" cy="56" r="4" fill="#6b7280"/>' +
    '<rect x="32" y="36" width="16" height="10" rx="1" fill="#6fb7ff"/><rect x="34" y="50" width="12" height="14" rx="1" fill="#3a3f4a"/>',
    /* First Generation Rich: a gold house key on a ring */
    '<circle cx="40" cy="24" r="12" fill="none" stroke="#e8b84a" stroke-width="5"/><circle cx="40" cy="24" r="12" fill="none" stroke="#7a5512" stroke-width="1"/>' +
    '<rect x="36" y="34" width="8" height="40" rx="2" fill="#e8b84a" stroke="#7a5512" stroke-width="1.5"/><path d="M44 58h8v5h-4v5h4v6h-8z" fill="#e8b84a" stroke="#7a5512" stroke-width="1.5"/>' +
    '<text x="40" y="28" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="9" fill="#e8b84a">FGR</text>',
    /* All the Brilliant Things: the open notebook with a gold pen, sparkling */
    '<path d="M6 40l34-10 34 10v38l-34-10-34 10z" fill="#f7f3ea" stroke="#9aa3ad" stroke-width="2"/><path d="M40 30v38" stroke="#9aa3ad" stroke-width="2"/>' +
    '<path d="M12 48l22-6M12 56l22-6M12 64l22-6M46 42l22 6M46 50l22 6M46 58l22 6" stroke="#6fb7ff" stroke-width="1.2"/>' +
    '<rect x="44" y="20" width="6" height="40" rx="2" fill="#e8b84a" stroke="#7a5512" stroke-width="1" transform="rotate(30 47 40)"/>' +
    '<path d="M14 8l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5zM66 6l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5z" fill="#fff"/>'
  ],
  clubTitle: "The Sneaker Box", clubTab: "BOX",
  tags: ["FIRST GEN RICH", "NO DISCOUNTS", "SKY"],
  c1: "#ffffff", c2: "#6fb7ff", c3: "#e8b84a", bg: "#0a1020",
  /* Bed-Stuy: brownstone row with cornices, the Girls' High tower, a water tower */
  headerSvg: (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    for (let x = 0; x < 170; x += 28) s += '<rect x="' + x + '" y="28" width="26" height="28"/><rect x="' + (x - 1) + '" y="25" width="28" height="3" opacity=".7"/>';
    s += '<rect x="176" y="30" width="60" height="26"/><path d="M190 30l6-20h20l6 20z"/><rect x="204" y="4" width="4" height="6"/>';
    for (let x = 244; x < 400; x += 28) s += '<rect x="' + x + '" y="32" width="26" height="24"/>';
    s += '<path d="M330 32v-6h6v-12q10-4 20 0v12h6v6z"/>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [
    { name: "Instagram", handle: "@skyzoo", url: "https://www.instagram.com/skyzoo/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the G to Classon Av, Lafayette Av side. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "pool", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "school", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "tapes", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "traffic" },
    { scene: "corner", t: "WELCOME TO BED-STUY", x: "Fulton St and St James Pl, around the way where Sky came up. This is Skyzoo's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Nodding Off", id: "Je3rnyHAWaM", cuts: [55.5, 111.8, 166.2], qs: [
      [
        ["\"Winning be the only thing they know you, and then everything...\"?", "Changes", "Stops", "Shines"],
        ["\"Keeping hold of what they ___ you on\"?", "Hold", "Bet", "Put"],
        ["\"Remind them what they know until they know you...\"?", "Gone", "Home", "Here"],
        ["\"Let your memory lock in like when locking the...\"?", "Door", "Gate", "Safe"],
        ["\"We all about a...\"?", "Profit", "Party", "Promise"],
        ["\"Down for the...\"?", "Count", "Cause", "Crown"]
      ],
      [
        ["\"If the topic that I'm on isn't quote unquote...\"?", "Real", "Right", "Raw"],
        ["\"You can still ___ to it\"?", "Nod", "Dance", "Sing"],
        ["\"I'm on the bridge hitting the...\"?", "Trumpet", "Drums", "Piano"],
        ["Not for comfort, he says \"I sing for...\"?", "Payrolls", "Applause", "Free"],
        ["\"If ever you should share this and it puts out a...\"?", "Discussion", "Question", "Message"],
        ["\"Part of me wants it to be everything that...\"?", "Matters", "Lasts", "Shines"],
        ["\"Like why should we...\"?", "Pretend", "Stop", "Wait"]
      ],
      [
        ["\"If it came back up then how should we...\"?", "Begin", "End", "Win"],
        ["\"The thought of the greatest, what the story is...\"?", "Vital", "Over", "Final"],
        ["\"I'm just aiming at making the *** last...\"?", "Forever", "Longer", "Tonight"],
        ["\"Returning a ___ from a joint\"?", "DM", "Call", "Letter"],
        ["\"Do it how they told us when they had us in the...\"?", "Pocket", "Corner", "Classroom"],
        ["\"The aim will come in handy when they get away from...\"?", "Logic", "Home", "Music"]
      ]
    ] },
    { title: "No Discounts", id: "E7lnEUje4DU", cuts: [95.1, 167.3, 191.4], qs: [
      [
        ["\"One hand wash the other, both wash the...\"?", "Face", "Hands", "Car"],
        ["\"Open the window, let that be what you...\"?", "Taught", "Caught", "Bought"],
        ["\"Halfway out with a window ___ at\"?", "Ledge", "Sill", "Frame"],
        ["\"All the gospel I want I'm giving...\"?", "Out", "Away", "Back"],
        ["\"Concrete sketch a...\"?", "Church", "Mural", "Map"],
        ["\"Dancing with sketches of...\"?", "Spain", "Rome", "France"],
        ["\"They took the prices off of...\"?", "Solidarity", "Society", "Charity"]
      ],
      [
        ["\"They say respect can get you...\"?", "Everywhere", "Paid", "Nowhere"],
        ["\"Sometimes respect can only get you so...\"?", "Far", "Long", "High"],
        ["\"Planting the seeds for the ___ that went up once\"?", "Flowers", "Trees", "Towers"],
        ["\"The same as Brooklyn as in...\"?", "Compton", "Houston", "Queens"],
        ["\"Jumping off a stoop like we was jumping off a...\"?", "Caravel", "Cliff", "Bridge"],
        ["\"Cutting through the...\"?", "Waves", "Wind", "Crowd"],
        ["\"One hand free to open the ___ up\"?", "Blinds", "Door", "Gate"]
      ],
      [
        ["\"Ain't going to be no...\"?", "Discounts", "Refunds", "Sequels"],
        ["\"Price is everything you...\"?", "See", "Want", "Earn"],
        ["\"Everything you ___ now\"?", "Spend", "Save", "Need"],
        ["\"When they was talking culture with a...\"?", "Barcode", "Price tag", "Receipt"],
        ["\"We was giving...\"?", "Carloads", "Credit", "Handouts"],
        ["\"Now we back around for what y'all all...\"?", "Owe", "Want", "Know"],
        ["\"Long as I've been out here for...\"?", "Free", "Years", "Real"]
      ]
    ] },
    { title: "The Necessary", locked: true, cuts: [], qs: [] },
    { title: "Easy to Fly", locked: true, cuts: [], qs: [] },
    { title: "Blue Yankee Fitted", locked: true, cuts: [], qs: [] }
  ],
  explicitSongs: [{"title":"My Interpretation","id":"ykL04zfDHHw","start":12,"cuts":[51.4,140.8,184.4],"qs":[[["\"Riding on the wings of a dollar...\"?","Bill","Sign","Coin"],["\"Or better yet the ___ of how it feels\"?","Anticipation","Imagination","Celebration"],["\"Caught a flight here & I ain't tryna fly...\"?","Back","Home","Coach"],["\"I held hands with the other...\"?","Side","Team","Hand"],["Not afraid to still stand where the others...?","Hide","Ride","Slide"],["\"No plans of tryna kick this...\"?","Itching","Tradition","Wishing"],["\"The feeling is too strong to leave...\"?","'Lone","Home","Soon"],["\"The yearn for it is too far to...\"?","Leap from","Walk from","Run from"],["\"The conversation is too ___ for me\"?","Crafted","Crowded","Quiet"],["\"I follow the...\"?","Aroma","Arrow","Leader"],["\"& The ___ of what it might be is bringing me closer\"?","Aura","Idea","Picture"]],[["\"Never knew a feeling like...\"?","This","That","Love"],["\"Feeling like the feeling's...\"?","Priceless","Endless","Timeless"],["\"I know what I need, I know what I...\"?","Want","Got","Did"],["\"I know where I been, I know where I'm...\"?","Going","Staying","From"],["How many smiles is he from every one time you wanna cry?","Two","Three","Ten"],["\"It's underneath me, I...\"?","Walk on it","Stand on it","Sleep on it"],["\"I control the starts &...\"?","Stops","Ends","Finish"],["\"Hands on the steering wheel, getting me...\"?","Across","Home","There"],["\"First time's a...\"?","Charm","Chance","Dream"],["\"The further I go up the more I wanna...\"?","Fly","Climb","Stay"],["\"The limits don't seem to be...\"?","Around","Real","Close"]],[["\"You get your...\"?","Wings","Wheels","Stripes"],["\"Fly away from everything on your first...\"?","Chase","Day","Flight"],["\"How could you ever think that this would turn...\"?","Grey","Cold","Sour"],["\"See the lines get...\"?","Blurred","Crossed","Longer"],["\"You following a curve the more that you walk...\"?","Straight","Faster","Alone"],["\"Attached at the...\"?","Waist","Hip","Heart"],["Everything you need is at the other ___ of everywhere that you be?","End","Side","Corner"],["\"You sitting on...\"?","E","F","Zero"],["\"Letter H, letter O, letter...\"?","P","E","L"],["\"Let it breathe, it's the feeling you...\"?","Receive","Believe","Achieve"],["\"Roll down your...\"?","Pride","Window","Sleeves"]]]},{"title":"No Discounts","id":"E7lnEUje4DU","cuts":[34.9,94.9,167.2],"qs":[[["\"One hand wash the...\"?","Other","Dishes","Car"],["\"...both wash the...\"?","Face","Hands","Feet"],["Who does he say says this?","The gods","The elders","The OGs"],["\"Do it like...\"?","This","That","Me"],["\"Ain't gon' be no...\"?","Discounts","Refunds","Coupons"],["\"As long as I been here for...\"?","Free","Years","Real"],["\"The price is everything you...\"?","See","Need","Got"],["\"...and everything you ___ now\"?","Spend","Owe","Make"],["\"When they was talking culture with a...\"?","Barcode","Price tag","Logo"],["\"We was giving car...\"?","Loads","Keys","Rides"],["\"Now we back around for what y'all all...\"?","Owe","Know","Show"]],[["\"Open the...\"?","Window","Door","Gate"],["\"Halfway out where the window ___ at\"?","Ledge","Sill","Shade"],["\"I can ___ that\"?","Respect","Accept","Expect"],["\"Free game, pulled up to...\"?","Catch that","Watch that","Snatch that"],["Where you idolize what the ___ show?","Cameras","Papers","Windows"],["\"And y'all brought the ___ home\"?","Banners","Trophies","Flags"],["\"That's how the lessons work,...\"?","Lesson learned","Lesson taught","Lesson passed"],["\"Concrete sketch of...\"?","Church","Home","Heaven"],["\"Dancing with sketches of...\"?","Spain","France","Paris"],["\"Cleaned up everything out of...\"?","Necessity","Habit","Respect"],["\"Took the prices off of...\"?","Solidarity","Charity","Loyalty"]],[["\"They say respect can get you...\"?","Everywhere","Anything","Nowhere"],["\"But sometimes respect'll only get you so...\"?","Far","Long","High"],["\"Leave me where I be and I'll meet y'all back at the...\"?","Front","Block","Top"],["The loser plants the seeds for the flowers the ___ wants?","Winner","Teacher","Lover"],["\"My affinity's for money...\"?","Trees","Bags","Talks"],["They the same in Brooklyn as in...?","Compton","Chicago","Houston"],["Jumping off the stoop like jumping off a...?","Caravel","Cruise ship","Sailboat"],["\"Cutting through the...\"?","Waves","Wind","Crowd"],["\"Muscle on the corner like...\"?","Israelites","Gladiators","Spartans"],["\"Plate full to the brim but still suffer from hunger...\"?","Pains","Games","Days"],["\"One hand free to open the ___ up\"?","Blinds","Doors","Windows"]]]},{"title":"Range Rover Rhythm","id":"WaxdKJuzXuY","start":11.6,"cuts":[41.8,90.9,157.3],"qs":[[["\"All we needed was a...\"?","Reason","Chance","Moment"],["\"They got reasons through the...\"?","Ceiling","Roof","Floor"],["\"All we wanted was a...\"?","Part","Piece","Shot"],["\"All this seeing is...\"?","Believing","Deceiving","Achieving"],["\"From the jump it's from the...\"?","Heart","Start","Block"],["\"All this...\"?","Anticipation","Celebration","Inspiration"],["All these hands in the way when all they reaching is...?","Beneath 'em","Above 'em","Behind 'em"],["\"All these plans we done...\"?","Made","Played","Saved"],["\"Bet whatever on the...\"?","Vision","Mission","Future"],["Close enough to see us and...?","Adore it","Ignore it","Afford it"],["\"Let 'em watch and know we...\"?","Here","Up","Real"]],[["\"Better dreams while we...\"?","Up","Young","Out"],["\"Better watches for your...\"?","Stares","Wrists","Time"],["\"Call it Range Rover...\"?","Rhythm","Music","Motion"],["\"At the will of what we on and may we blow the...\"?","Engines","Speakers","Doors"],["\"May it be just what we want and may it all...\"?","Glitter","Matter","Shimmer"],["\"All the scenery they threw us, easy to...\"?","Influence","Imagine","Ignore"],["\"Nothing 'bout us changed so you can leave us if you...\"?","Knew us","Choose us","Lose us"],["\"Jumping out a ___ had us dreaming\"?","Range","Benz","Jeep"],["\"...had us dreaming to...\"?","Maneuver","Move on","Cruise"],["\"Range Rover rhythm, corner store...\"?","Signature","Literature","Picture"],["\"Tryin' to ___ thou' somethin' 'fore we out\"?","80","50","100"]],[["How the sweetest dream couldn't be anymore...?","Heinous","Famous","Gracious"],["\"Promise if you sleeping you'll see where we all...\"?","Aiming","Going","Staying"],["\"Should've never offered us to get a...\"?","Taste","Chance","Seat"],["\"Good enough to want it on a bigger...\"?","Plate","Stage","Screen"],["\"Climbing through a ___ tryna get a plate\"?","Kitchen","Window","Fence"],["\"Living like 400 a pair, yeah my ___ straight\"?","Penny's","Jordans","Laces"],["\"Another day, another...\"?","Dollar","Story","Chance"],["\"And pull a whole ___ within a day\"?","Decade","Year","Lifetime"],["Straight enough to '95 ___ penetrate?","Hardaway","Iverson","Kidd"],["\"Tryin' to open up the hood and put a name on that...\"?","Engine","Car","Plate"],["\"If it go misunderstood, I'll remain on my...\"?","Pivot","Path","Throne"]]]}]
};
(function(){try{if(window.CFG.explicitSongs&&localStorage.getItem("ogfan99explicit")==="1"){window.CFG.songs=window.CFG.explicitSongs;window.CFG.saveKey+="x";}}catch(e){}})();
