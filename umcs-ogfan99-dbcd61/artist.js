/* The U.M.C.'s: Haas G and Kool Kim, Staten Island. Fruits of Nature (1991), "Blue Cheese", "One to Grow On". */
window.CFG = {
  name: "The U.M.C.'s", nameUpper: "THE U.M.C.'S", short: "UMC'S",
  hood: "Staten Island", hoodUpper: "STATEN ISLAND", boro: "Staten Island",
  saveKey: "ogfan99umcs1",
  /* everybody starts as one of the kids ("we are the kids", Never Never Land); grow on up to Universal MC */
  startRank: "Kid",
  ranks: ["Fruits of Nature", "Super Duper", "World Improver", "Blue Cheese", "Unleashed"],
  topRank: "Universal MC",
  point: "Fruit", points: "Fruits",
  rankRewards: {
    "Fruits of Nature": { bongs: 5, line: "Fruits of Nature. Now you're starting to grow." },
    "Super Duper": { bongs: 10, line: "Super Duper. You caught the Kim maneuver." },
    "World Improver": { bongs: 15, line: "World Improver. One to grow on." },
    "Blue Cheese": { bongs: 20, line: "Blue Cheese. Stacking it up." },
    "Unleashed": { bongs: 25, line: "You run all of Staten Island." }
  },
  trophyArt: [
    /* Kid: a little sprout in a pot */
    '<path d="M28 58h24l-4 20H32z" fill="#b8643a" stroke="#6a3418" stroke-width="1.5"/><rect x="26" y="54" width="28" height="6" rx="2" fill="#c9784a" stroke="#6a3418"/>' +
    '<path d="M40 54V38" stroke="#3d8a2c" stroke-width="3"/><path d="M40 42q-14-2-14-14 12 0 14 14zM40 38q12-4 14-16-14 2-14 16z" fill="#7cd36b" stroke="#3d6b2c" stroke-width="1.2"/>',
    /* Fruits of Nature: a basket of fruit */
    '<circle cx="28" cy="46" r="10" fill="#e0402a" stroke="#7a1a10" stroke-width="1.2"/><circle cx="44" cy="40" r="10" fill="#ff9f1c" stroke="#8a4a08" stroke-width="1.2"/><circle cx="56" cy="50" r="9" fill="#7cd36b" stroke="#3d6b2c" stroke-width="1.2"/>' +
    '<path d="M44 30q2-8 8-8" stroke="#3d6b2c" stroke-width="2" fill="none"/>' +
    '<path d="M12 52h56l-8 26H20z" fill="#a8743e" stroke="#5a3a1a" stroke-width="2"/><path d="M16 60h48M18 68h44" stroke="#5a3a1a" stroke-width="1.5"/>',
    /* Super Duper: a gold star with a cape swirl */
    '<path d="M40 12l8 18 20 2-15 13 5 20-18-11-18 11 5-20-15-13 20-2z" fill="#ffd34d" stroke="#7a5512" stroke-width="2" stroke-linejoin="round"/>' +
    '<text x="40" y="50" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="16" fill="#7a5512">S</text><path d="M14 74q26-8 52 0" stroke="#38e8ff" stroke-width="4" fill="none"/>',
    /* World Improver: a globe with a sprout on top */
    '<circle cx="40" cy="50" r="26" fill="#2a6fd6" stroke="#123a7a" stroke-width="2"/><path d="M24 40q8-6 14 2t-4 14q-6 4-12-2zM46 34q10 0 14 8-4 8-10 6-6-4-4-14zM42 62q8-2 12 6-6 6-14 2z" fill="#7cd36b"/>' +
    '<path d="M14 50h52M40 24v52" stroke="#9cc6ff" stroke-width="1" opacity=".6"/><path d="M40 24v-10" stroke="#3d8a2c" stroke-width="2.5"/><path d="M40 16q-8 0-8-8 8 0 8 8z" fill="#7cd36b"/>',
    /* Blue Cheese: a wedge of blue cheese */
    '<path d="M10 66l60-28v28z" fill="#f2e9cc" stroke="#8a7a4a" stroke-width="2" stroke-linejoin="round"/><path d="M10 66l60-28 0-8-60 28z" fill="#e6dab2" stroke="#8a7a4a" stroke-width="2" stroke-linejoin="round"/>' +
    '<circle cx="30" cy="62" r="2.5" fill="#4a6fb0"/><circle cx="48" cy="56" r="3" fill="#4a6fb0"/><circle cx="60" cy="62" r="2" fill="#4a6fb0"/><circle cx="56" cy="48" r="2" fill="#4a6fb0"/><circle cx="40" cy="64" r="1.6" fill="#4a6fb0"/>',
    /* Unleashed: a broken chain link flying apart */
    '<rect x="8" y="40" width="26" height="14" rx="7" fill="none" stroke="#c9d1d9" stroke-width="5" transform="rotate(-20 21 47)"/>' +
    '<rect x="46" y="40" width="26" height="14" rx="7" fill="none" stroke="#c9d1d9" stroke-width="5" transform="rotate(20 59 47)"/>' +
    '<path d="M38 30l-4 10 6-2-4 12M40 60l2 10" stroke="#ffd34d" stroke-width="2.5" fill="none" stroke-linejoin="round"/>',
    /* Universal MC: a gold mic orbited by a planet ring */
    '<ellipse cx="40" cy="38" rx="32" ry="10" fill="none" stroke="#38e8ff" stroke-width="2.5" transform="rotate(-15 40 38)"/>' +
    '<rect x="32" y="14" width="16" height="30" rx="8" fill="#ffd34d" stroke="#7a5512" stroke-width="1.5"/><path d="M34 22h12M34 28h12M34 34h12" stroke="#7a5512" stroke-width="1"/>' +
    '<path d="M36 44l-2 32h12l-2-32z" fill="#2b2b30"/><circle cx="12" cy="46" r="4" fill="#7cd36b"/><circle cx="70" cy="28" r="3" fill="#ff9f1c"/>'
  ],
  clubTitle: "The Fruit Basket", clubTab: "BASKET",
  tags: ["U.M.C.'S", "GROW ON", "THE FRUITS"],
  c1: "#38e8ff", c2: "#7cd36b", c3: "#ff9f1c", bg: "#071018",
  /* Staten Island: the North Shore hills, the Alice Austen gables, the ballpark lights, Manhattan far across the water */
  headerSvg: (function () {
    let s = '<path d="M0 34q60-14 120-4t120-6 160 4v36H0z" opacity=".5"/>';
    s += '<rect x="0" y="54" width="400" height="4"/>';
    s += '<path d="M30 54V38l12-14 12 14 12-14 12 14v16z"/>';
    s += '<rect x="130" y="20" width="3" height="34"/><rect x="122" y="16" width="20" height="6"/><rect x="214" y="20" width="3" height="34"/><rect x="206" y="16" width="20" height="6"/><path d="M130 54q42-16 86 0z"/>';
    s += '<g opacity=".6"><rect x="290" y="38" width="10" height="16"/><rect x="302" y="28" width="8" height="26"/><rect x="312" y="18" width="10" height="36"/><path d="M312 18l5-12 5 12z"/><rect x="324" y="32" width="12" height="22"/><rect x="338" y="40" width="10" height="14"/></g>';
    return '<g fill="#f7f3ea">' + s + '</g>';
  })(),
  socials: [],
  rooms: [
    { scene: "station", t: "PRESS PLAY", x: "Take the Staten Island Railway to Tompkinsville. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "greenbelt", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "parachute" },
    { scene: "austen", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "ballpark", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "corner", t: "WELCOME TO STATEN ISLAND", x: "Bay St and Hannah St in Tompkinsville. This is The U.M.C.'s game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Hey Here We Go", id: "yHgcjyZU-5A", cuts: [58.7, 112.2, 195.3], qs: [
      [
        ["\"Attention all...\" who?", "America", "New York", "Staten Island"],
        ["Here they come without what?", "Fear", "Doubt", "Warning"],
        ["They reply to the man who said they couldn't what?", "Do it", "Rap", "Win"],
        ["His man told him he couldn't get what?", "Shows", "Beats", "Deals"],
        ["\"That's all right, 'cause we're here...\" when?", "Now", "Again", "Tonight"],
        ["From the first to the what?", "Last", "Top", "End"],
        ["What does the hook say?", "Here we go", "Let's go", "There it goes"]
      ],
      [
        ["He had enough tough what?", "Times", "Days", "Breaks"],
        ["\"Little Boy Blue, come blow my...\" what?", "Horn", "Mind", "Whistle"],
        ["You had a chance to be what?", "Down", "First", "Famous"],
        ["You knew him when he wasn't all what?", "That", "Grown", "Known"],
        ["He's gonna flip his what?", "Style", "Coin", "Script"],
        ["What does he throw?", "The facts", "A party", "His hands up"]
      ],
      [
        ["He got an easy what from school?", "Diploma", "Pass", "Ride"],
        ["His lady said he was a what?", "Zero", "Hero", "Star"],
        ["And that broke his what?", "Heart", "Spirit", "Stride"],
        ["Way back, you thought Kim was what?", "Whack", "Wild", "Young"],
        ["Things ain't always what they what?", "Seem", "Say", "Show"],
        ["He thinks back to what year?", "1989", "1979", "1999"],
        ["\"I'm not the one for...\" what?", "That", "Games", "Talk"]
      ]
    ] },
    { title: "You Got My Back", id: "8UY5q5YjQZA", cuts: [72.4, 131.2, 192.2], qs: [
      [
        ["\"It's all got to be...\" what?", "Real", "Right", "Fresh"],
        ["It makes me feel what?", "Good", "Strong", "Safe"],
        ["You got my what?", "Back", "Word", "Vote"],
        ["You watch my what?", "Rear", "Step", "Door"],
        ["When the coast is clear, we what?", "Chill", "Party", "Leave"],
        ["Other friendships are done and gone, but ours is going what?", "Strong", "Steady", "Far"],
        ["You always see some what for brothers?", "Unity", "Money", "Trouble"]
      ],
      [
        ["Take a look through the magic what?", "Window", "Mirror", "Door"],
        ["Back then he was a bit what?", "Immature", "Younger", "Famous"],
        ["He had a mind of his what?", "Own", "Kind", "Making"],
        ["Watch the maturing of the mind of a what kid?", "Mischievous", "Quiet", "Gifted"],
        ["Now he's how old?", "20", "16", "30"],
        ["It's a true what system?", "Buddy", "Sound", "School"],
        ["Through thick or what?", "Thin", "Rich", "Wild"]
      ],
      [
        ["He ran with some brothers, but mainly they was what?", "Hanging", "Rapping", "Working"],
        ["Next on the menu, a new world what?", "Order", "Tour", "Record"],
        ["They continue expanding how?", "Geometrically", "Slowly", "Globally"],
        ["The \"you\" is now a two and the \"me\" is now a what?", "We", "Crew", "Team"],
        ["Friendship is a gift of what?", "Faith", "Gold", "Time"],
        ["\"I'm a...\" what?", "Believer", "Leader", "Dreamer"],
        ["Trouble keeps cropping up, but you won't see him what?", "Running", "Crying", "Hiding"]
      ]
    ] },
    { title: "Never Never Land", id: "6RggEJ1D_ag", cuts: [75.2, 142.6, 216.3], qs: [
      [
        ["Who are we?", "The kids", "The crew", "The men"],
        ["\"Yes I am the...\" what?", "Man", "King", "Best"],
        ["The graces of a good what?", "Style", "Heart", "Song"],
        ["Follow me now on the path to the what?", "Mountain", "River", "City"],
        ["When he reaches the top, what should he do?", "Shout", "Jump", "Sing"],
        ["\"I have no...\" what?", "Idea", "Time", "Money"],
        ["His structural what is what attracts?", "Craft", "Plan", "Rhyme"]
      ],
      [
        ["Thinking about reaching new what?", "Objectives", "Heights", "Levels"],
        ["Every dream you ever had came what?", "True", "Back", "Alive"],
        ["Catch the Kim what?", "Maneuver", "Style", "Flow"],
        ["World what?", "Improver", "Traveler", "Changer"],
        ["Call him super what?", "Duper", "Star", "Hero"],
        ["Schoolyard's open, play time has what?", "Come", "Passed", "Stopped"],
        ["This life is so what?", "Brief", "Long", "Sweet"]
      ],
      [
        ["Your life is a snap of my what?", "Snare", "Fingers", "Camera"],
        ["Come on, come all, I mean the whole what?", "Bunch", "Block", "Crew"],
        ["It's time to be all you can what?", "Be", "See", "Do"],
        ["Freedom on the plains of what land?", "Youth", "Dream", "Never"],
        ["The stars: Venus, Jupiter and what?", "Mars", "Saturn", "Pluto"],
        ["He rides on the crest of the what?", "Wave", "Hill", "Beat"],
        ["He's earthly bound, but making his appearance as when what sent?", "Heaven", "Angel", "Star"]
      ]
    ] },
    { title: "One To Grow On", id: "3hK0lGGuqY4", cuts: [54.5, 121.4, 177.1], qs: [
      [
        ["The approaching of a UMC is purely what?", "Hype", "Luck", "Talent"],
        ["\"I mention it again and...\" what?", "Again", "Louder", "Slower"],
        ["Those who comprehend his message very what?", "Clearly", "Quickly", "Deeply"],
        ["The leaders resembling the what?", "Stars", "Sun", "Moon"],
        ["Who would freeze what?", "Blue cheese", "Ice cold", "Fresh fruit"],
        ["Spin a what on a runway?", "360", "180", "720"],
        ["They gave them all one thought to what?", "Grow on", "Hold on", "Lean on"]
      ],
      [
        ["\"My method is...\" what?", "Apparent", "Different", "Classic"],
        ["He sees clearly this world's what?", "Transparent", "Turning", "Changing"],
        ["Deliver salvation to the hands of the what?", "Weak", "Rich", "Young"],
        ["Then tame the what?", "Wild", "Crowd", "Beast"],
        ["His strength is that of how many?", "Two", "Ten", "Three"],
        ["Not harming, better said what?", "Disarming", "Charming", "Calming"],
        ["With your washing machine you jump so high you touch the what?", "Sky", "Roof", "Moon"]
      ],
      [
        ["Grow on this when you're feeling kind of what?", "Small", "Down", "Lost"],
        ["Grow on this to have what?", "Fun", "Faith", "Peace"],
        ["You and I versus the what?", "Majority", "World", "System"],
        ["At the count of what?", "Three", "Ten", "Five"],
        ["Grow on this to make your life seem what?", "Great", "Long", "Easy"],
        ["He rules on three planes of what?", "Reality", "Rhythm", "Sound"],
        ["Living in the world of his what?", "Design", "Dreams", "Making"]
      ]
    ] },
    { title: "Blue Cheese", locked: true, cuts: [], qs: [] }
  ]
};
