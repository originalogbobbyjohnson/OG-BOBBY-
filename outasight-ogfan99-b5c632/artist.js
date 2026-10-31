/* Outasight (Richard Andrew Conte): born and raised in Yonkers, Westchester. Mixtapes Employee of the Year, Radio New York,
   Never Say Never, Get It Together, Stay Gold; albums Nights Like These, Big Trouble, Richie, Future Vintage Soul, Jamz, Banners;
   EPs Figure 8, No Vacancy, Standing Ovation, Roll Call. Hits Tonight Is the Night, Now or Never, The Wild Life, Life of the Party.
   His own imprint 83 Sound with producer Cook Classics. */
window.CFG = {
  name: "Outasight", nameUpper: "OUTASIGHT", short: "OUTA",
  hood: "Yonkers", hoodUpper: "YONKERS", boro: "Westchester",
  saveKey: "ogfan99outasight1",
  /* everybody starts told to Get It Together, then climbs his titles to a Standing Ovation */
  startRank: "Get It Together",
  ranks: ["Figure 8", "Now or Never", "The Wild Life", "Big Trouble", "Life of the Party"],
  topRank: "Standing Ovation",
  point: "Gold Star", points: "Gold Stars",
  rankRewards: {
    "Figure 8": { bongs: 5, line: "You found your groove." },
    "Now or Never": { bongs: 10, line: "No waiting. It's now." },
    "The Wild Life": { bongs: 15, line: "Welcome to the wild life." },
    "Big Trouble": { bongs: 20, line: "You're big trouble now." },
    "Life of the Party": { bongs: 25, line: "You run all of Yonkers." }
  },
  trophyArt: [
    /* Get It Together: a to-do clipboard */
    '<rect x="20" y="16" width="40" height="58" rx="4" fill="#e9e4d8" stroke="#6b5a3a" stroke-width="2"/><rect x="30" y="10" width="20" height="10" rx="2" fill="#9a8a6a"/>' +
    '<path d="M27 32l3 3 6-6M27 46l3 3 6-6" stroke="#1f9e5a" stroke-width="2.5" fill="none"/><path d="M40 33h14M40 47h14M40 61h14" stroke="#555" stroke-width="2"/><rect x="27" y="57" width="8" height="8" fill="none" stroke="#555" stroke-width="2"/>',
    /* Figure 8: a gold figure-eight track */
    '<circle cx="40" cy="28" r="15" fill="none" stroke="#ffcf3f" stroke-width="7"/><circle cx="40" cy="58" r="17" fill="none" stroke="#ffcf3f" stroke-width="7"/>' +
    '<circle cx="40" cy="28" r="15" fill="none" stroke="#7a5512" stroke-width="1.5" stroke-dasharray="3 4"/><circle cx="55" cy="22" r="4" fill="#ff4f8b"/>',
    /* Now or Never: a stopwatch */
    '<rect x="35" y="8" width="10" height="8" rx="2" fill="#c8ccd4"/><path d="M57 18l6-6" stroke="#c8ccd4" stroke-width="4" stroke-linecap="round"/>' +
    '<circle cx="40" cy="46" r="28" fill="#f4f1ea" stroke="#3ec6e0" stroke-width="5"/><path d="M40 46V26" stroke="#d7263d" stroke-width="3" stroke-linecap="round"/><circle cx="40" cy="46" r="3" fill="#222"/>' +
    '<path d="M40 22v4M64 46h-4M40 70v-4M16 46h4" stroke="#222" stroke-width="2"/>',
    /* The Wild Life: a palm tree on a sunset */
    '<circle cx="40" cy="50" r="24" fill="#ff8a4c"/><rect x="16" y="62" width="48" height="12" fill="#3ec6e0"/>' +
    '<path d="M42 72q-4-24 2-44" stroke="#5a3a1a" stroke-width="4" fill="none"/>' +
    '<path d="M44 28q-14-8-26 2q12-2 26 0zM44 28q14-8 26 2q-12-2-26 0zM44 28q-4-14-16-16q8 8 16 16zM44 28q4-14 16-16q-8 8-16 16z" fill="#1f9e5a"/>',
    /* Big Trouble: a spinning red siren light */
    '<rect x="16" y="64" width="48" height="10" rx="2" fill="#333"/><path d="M22 64v-22a18 18 0 0 1 36 0v22z" fill="#d7263d" stroke="#7a1020" stroke-width="2"/>' +
    '<path d="M30 40a10 10 0 0 1 8-8" stroke="#ffb3b3" stroke-width="3" fill="none"/><path d="M10 30l8 6M70 30l-8 6M40 10v10" stroke="#ffcf3f" stroke-width="3" stroke-linecap="round"/>',
    /* Life of the Party: a party hat and balloons */
    '<path d="M24 74l12-44 12 44z" fill="#ff4f8b" stroke="#7a1a40" stroke-width="2"/><path d="M28 60l16-6M31 48l12-5" stroke="#ffcf3f" stroke-width="3"/><circle cx="36" cy="28" r="4" fill="#ffcf3f"/>' +
    '<path d="M58 70q-4-20 0-34" stroke="#ddd" stroke-width="1.5" fill="none"/><ellipse cx="58" cy="26" rx="10" ry="12" fill="#3ec6e0"/>' +
    '<path d="M66 72q2-14-2-26" stroke="#ddd" stroke-width="1.5" fill="none"/><ellipse cx="66" cy="40" rx="8" ry="10" fill="#ffcf3f"/>',
    /* Standing Ovation: a gold mic with a laurel */
    '<path d="M16 66q-10-26 6-48M64 66q10-26-6-48" stroke="#1f9e5a" stroke-width="4" fill="none"/>' +
    (function () { let s = ""; [24, 36, 48, 58].forEach((y, i) => { s += '<ellipse cx="' + (14 - i % 2 * 2) + '" cy="' + y + '" rx="6" ry="3" fill="#1f9e5a" transform="rotate(-40 14 ' + y + ')"/><ellipse cx="' + (66 + i % 2 * 2) + '" cy="' + y + '" rx="6" ry="3" fill="#1f9e5a" transform="rotate(40 66 ' + y + ')"/>'; }); return s; })() +
    '<rect x="30" y="8" width="20" height="30" rx="10" fill="#ffcf3f" stroke="#7a5512" stroke-width="2"/><path d="M32 18h16M32 24h16M32 30h16" stroke="#7a5512" stroke-width="1.2"/>' +
    '<path d="M26 32q0 14 14 14t14-14" stroke="#ffcf3f" stroke-width="3" fill="none"/><rect x="38" y="46" width="4" height="22" fill="#ffcf3f"/><rect x="28" y="68" width="24" height="6" rx="2" fill="#ffcf3f"/>'
  ],
  clubTitle: "The Roll Call", clubTab: "ROLL",
  tags: ["83 SOUND", "STAY GOLD", "RICHIE"],
  c1: "#ffcf3f", c2: "#ff4f8b", c3: "#3ec6e0", bg: "#1b1030",
  /* Yonkers from the river: City Hall's clock tower on the hill, the pier pavilion, downtown towers, the Palisades line */
  headerSvg: '<g fill="#f7f3ea">' + (function () {
    let s = '<rect x="0" y="56" width="400" height="8"/>';
    s += '<rect x="30" y="38" width="80" height="18"/><path d="M24 40l46-14 46 14z"/>';
    s += '<rect x="150" y="34" width="90" height="22"/><rect x="186" y="10" width="18" height="24"/><path d="M182 10l13-8 13 8z"/>';
    s += '<rect x="262" y="16" width="20" height="40"/><rect x="288" y="26" width="24" height="30"/><rect x="318" y="8" width="18" height="48"/><rect x="342" y="30" width="30" height="26"/>';
    return s;
  })() + '</g>',
  socials: [
    { name: "Instagram", handle: "@outasight", url: "https://www.instagram.com/outasight/" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the Metro-North Harlem Line up to Crestwood. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "pier", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "parachute" },
    { scene: "raceway", t: "1, THEN 2, THEN 3", x: "(auto-filled by the game)", sfx: "crowd" },
    { scene: "cityhall", t: "CLIMB THE RANKS", x: "(auto-filled by the game)", sfx: "bell" },
    { scene: "corner", t: "WELCOME TO YONKERS", x: "Getty Square, Main St and N Broadway. This is Outasight's game.", sfx: "spray" }
  ],
  episodes: []
};

/* Songs from the synced-lyrics store (ogfan_lrc, src lrclib), checked 2026-10-31. Cuts ~0.2 s before the next line. */
window.CFG.songs = [
 { title: "Golden", id: "HNu7ExQEUOI", cuts: [29.1, 65.7, 92.9], qs: [
  [["How does the song count in?", "Uno, dos, tres", "One, two, three", "Ready, set, go"],
   ["He's been down and out, and on the...?", "Up and up", "Road to riches", "Edge of town"],
   ["He felt all the lows and rode all the...?", "Highs", "Waves", "Trains"],
   ["How did he take it all?", "In stride", "On the chin", "In silence"],
   ["He took it all and came out...?", "Alive", "On top", "Of nowhere"],
   ["What will he take for that?", "His props", "A bow", "A break"],
   ["There's no time to be...?", "Losing", "Waiting", "Sleeping"],
   ["Whatever happens next is...?", "Anybody's guess", "Up to you", "Already written"]],
  [["Everything is...?", "Golden", "Perfect", "Electric"],
   ["It doesn't matter where we're...?", "Going", "From", "Staying"],
   ["He's just taking in the...?", "Moment", "View", "Sunshine"],
   ["It's right where he wants it to...?", "Be", "Go", "Land"],
   ["What does he add after 'taking in the moment'?", "I'm takin it in", "Let it go", "Here we go"],
   ["What ad-lib follows 'where we're going'?", "Oh no no", "Uh-huh", "Let's go"],
   ["What shout comes before the second 'right where I want it to be'?", "Whoo", "Hoh", "Look"],
   ["Is he worried about where they're going?", "No, it doesn't matter", "Yes, very", "Only a little"]],
  [["This feels like it's extra...?", "Gold", "Bright", "Loud"],
   ["Enjoy the view, let it...?", "Unfold", "Go", "Shine"],
   ["Welcome to the greatest...?", "Show", "Night", "City"],
   ["Me, you and the...?", "Open road", "Big stage", "Night sky"],
   ["They ride into the great...?", "Unknown", "Outdoors", "Divide"],
   ["What should you give up?", "All the stress", "Your plans", "The wheel"],
   ["Let's ride into the...?", "Sunset", "City", "Storm"],
   ["Are they done yet?", "No, they've just begun", "Yes, it's over", "Almost"]]
 ] },
 { title: "The Boogie", id: "f7O83RRuBm8", cuts: [49.9, 152.8, 201.0], qs: [
  [["Where should everyone report?", "The dance floor", "The bar", "The stage"],
   ["What does he feel like getting?", "Crazy", "Home", "Paid"],
   ["What should you let go of?", "Your problems", "The rail", "Your phone"],
   ["How long are they staying out?", "All night", "Till ten", "An hour"],
   ["The club is blowing up like a stick of...?", "Dynamite", "Gum", "Firewood"],
   ["After a step to the left, how many steps to the right?", "Two", "Three", "One"],
   ["How do you wave 'em?", "Side to side", "Up and down", "In circles"],
   ["What spin does he call for?", "A 360", "A 180", "A 720"]],
  [["What does he keep telling you to do?", "Jump", "Sit", "Spin"],
   ["What's the ad-lib after 'jump jump'?", "Higher baby", "Lower baby", "Faster baby"],
   ["What one word gets its own moment after the jumps?", "Boogie", "Shout", "Freeze"],
   ["Who should keep playing the music?", "The DJ", "The band", "The crowd"],
   ["Ain't no time to...?", "Chill", "Stop", "Leave"],
   ["What's going crazy?", "The whole building", "The whole block", "The whole city"],
   ["Who is standing still?", "Nobody", "Everybody", "Just the DJ"],
   ["After 'step to the front', how many steps back?", "Two", "One", "Three"]],
  [["What should everyone catch?", "Their breath", "A ride", "The beat"],
   ["How many more times do they do the dance?", "One more time", "Two more times", "All night"],
   ["What does he ask right before 'Let's go!'?", "Y'all ready?", "Who's hungry?", "Where you from?"],
   ["What's shouted on the 360 this time?", "Spin!", "Turn!", "Jump!"],
   ["What do you do with your hands?", "Throw 'em up", "Hide 'em", "Fold 'em"],
   ["What does everybody do over and over?", "Clap", "Stomp", "Snap"],
   ["What does he say during the last jumps?", "Good night ladies and gentlemen", "See you tomorrow", "Thank you Yonkers"],
   ["Which move comes right after 'wave 'em side to side'?", "Step to the front", "Do a 360", "Jump jump"]]
 ] },
 { title: "Let's Go", id: "Ulvxozm5H5s", cuts: [71.4, 99.4, 126.8], qs: [
  [["What are the first two words?", "Whenever, wherever", "Here and there", "Now or never"],
   ["Back then, everybody got a...?", "Plan", "Car", "Crew"],
   ["Bright lights, big...?", "City", "Dreams", "Stage"],
   ["Where should you get up?", "On that screen", "On the stage", "On the roof"],
   ["What should you watch?", "Your company", "Your back", "Your money"],
   ["What do so-called friends start showing at the end?", "Colors", "Up late", "Their teeth"],
   ["Don't be afraid of the...?", "Unknown", "Dark", "Crowd"],
   ["What does he do with anything not nailed down?", "Sell it away", "Take it home", "Leave it"],
   ["He's about to crack with no way to...?", "Glue it back", "Call it back", "Turn it back"]],
  [["What question does the hook ask?", "Does leaving make it better?", "Where did you go?", "Who's coming with me?"],
   ["How many times in a row does he say 'let's go'?", "Four", "Two", "Six"],
   ["Who does he want to go with?", "You", "His crew", "Nobody"],
   ["The hook starts with 'whenever' and...?", "Wherever", "Forever", "However"],
   ["First time through: 'if what you say is...?'", "True", "Real", "Right"],
   ["Second time through: 'if leaving makes it...?'", "Better", "Easier", "Worth it"],
   ["Count me ___ with you.", "In", "Out", "Down"],
   ["What's the title phrase in the hook?", "Let's go", "Let me go", "Let it go"],
   ["Does the hook ask about staying or leaving?", "Leaving", "Staying", "Waiting"]],
  [["When no one cared, people stared and...?", "Doubted me", "Laughed", "Walked away"],
   ["What's the only thing that changed?", "His own sanity", "His address", "His friends"],
   ["What can't he put his finger on?", "What it could have been", "Where it went", "Who to call"],
   ["What is it all now?", "Hearsay", "History", "Over"],
   ["What will he paint?", "His masterpiece", "The town red", "A portrait"],
   ["All that glitters ain't...?", "Gold", "Real", "Free"],
   ["The story is about an...?", "Underdog", "Old friend", "Outlaw"],
   ["What goes in the jukebox?", "A quarter", "A dollar", "A token"],
   ["Say goodbye to the world you thought was...?", "Fine", "Yours", "Real"]]
 ] },
 { title: "Now Or Never", id: "IIKaI_-fRfA", cuts: [31.8, 77.4, 107.5], qs: [
  [["What's the first thing he says he can't do?", "Believe", "Remember", "Explain"],
   ["How long does it seem to live out these dreams?", "Forever", "A minute", "A year"],
   ["What do you start to think about?", "Taking a chance", "Giving up", "Going home"],
   ["What does he call himself?", "A hopeless romantic", "A dreamer", "A rebel"],
   ["For the love with a simple...?", "Idea", "Song", "Smile"],
   ["How much luck does it take?", "A little bit", "A whole lot", "None"],
   ["And how much work?", "A whole lotta", "A little", "None at all"],
   ["What can he make real?", "Every one of these visions", "Half his plans", "Nothing yet"]],
  [["They don't care what the people...?", "Say", "Think", "Wear"],
   ["And they don't care what they wanna...?", "Do", "Hear", "Know"],
   ["We do what we...?", "Want", "Can", "Must"],
   ["He ain't wasting no more...?", "Time", "Money", "Breath"],
   ["It's now or never, I'm 'bout to get...?", "Mine", "Home", "Going"],
   ["What's the cry between the hooks?", "Whoa whoa", "Hey hey", "Oh yeah"],
   ["What's the choice in the title?", "Now or never", "Win or lose", "Stay or go"],
   ["Do they care about it anymore?", "No", "Yes", "Sometimes"]],
  [["It's time to...?", "Decide", "Go home", "Rest"],
   ["Is it worth the fight, or letting it...?", "Slide", "Go", "Burn"],
   ["He drew the line at wasting...?", "Away", "Time", "Money"],
   ["What did he make himself?", "His own luck", "His own rules", "A fortune"],
   ["What did he kick up?", "The dust", "His feet", "The volume"],
   ["What doesn't mean much?", "The money", "The fame", "The crowd"],
   ["He did it for the...?", "Love", "Cash", "Fame"],
   ["Which roads did he miss?", "Every safe route", "The highway", "The back roads"]]
 ] }
];
