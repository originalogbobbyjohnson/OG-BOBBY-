/* Action Bronson — OG FAN 99 artist config. Episodes are added separately. */
window.CFG = {
  name: "Action Bronson", nameUpper: "ACTION BRONSON", short: "ACTION",
  hood: "Flushing", hoodUpper: "FLUSHING", boro: "Queens",
  saveKey: "ogfan99actionbronson1",
  /* Busboy (kitchen rookie — he came up a chef) -> Blue Chip (Blue Chips tapes) -> Mr. Wonderful (2015 album) -> Bronsolino (his nickname) -> Bam Bam (his nickname) */
  startRank: "Busboy", ranks: ["Blue Chip", "Mr. Wonderful", "Bronsolino"], topRank: "Bam Bam",
  /* Baklava: his nickname "Mr. Baklava" and his Baklava brand */
  point: "Baklava", points: "Baklava",
  rankRewards: {
    "Blue Chip": { bongs: 5, line: "Out of the dish pit. You're a Blue Chip now." },
    "Mr. Wonderful": { bongs: 10, line: "Wonderful. The whole kitchen knows your name." },
    "Bronsolino": { bongs: 25, line: "You run all of Flushing." }
  },
  trophyArt: [
    /* Busboy: a bus tub with a stack of plates and a towel */
    '<path d="M16 52h48l-4 26H20z" fill="#5a6470" stroke="#2b3138" stroke-width="2"/>' +
    '<ellipse cx="40" cy="50" rx="20" ry="4" fill="#f4efe6" stroke="#9aa1aa" stroke-width="1.5"/><ellipse cx="40" cy="45" rx="20" ry="4" fill="#f4efe6" stroke="#9aa1aa" stroke-width="1.5"/><ellipse cx="40" cy="40" rx="20" ry="4" fill="#f4efe6" stroke="#9aa1aa" stroke-width="1.5"/>' +
    '<path d="M54 50q8 6 4 22" stroke="#e8452c" stroke-width="5" fill="none" stroke-linecap="round"/>',
    /* Blue Chip: a stack of blue chips */
    '<g stroke="#0d2a5a" stroke-width="1.5"><ellipse cx="40" cy="72" rx="22" ry="6" fill="#2f6bd8"/><rect x="18" y="64" width="44" height="8" fill="#2f6bd8"/><ellipse cx="40" cy="64" rx="22" ry="6" fill="#4b86f0"/>' +
    '<rect x="18" y="54" width="44" height="10" fill="#2f6bd8"/><ellipse cx="40" cy="54" rx="22" ry="6" fill="#4b86f0"/>' +
    '<rect x="18" y="44" width="44" height="10" fill="#2f6bd8"/><ellipse cx="40" cy="44" rx="22" ry="6" fill="#6ea0ff"/></g>' +
    '<ellipse cx="40" cy="44" rx="11" ry="3" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4 3"/>' +
    '<path d="M24 50v4M32 51v4M48 51v4M56 50v4M24 60v4M32 61v4M48 61v4M56 60v4" stroke="#fff" stroke-width="2"/>',
    /* Mr. Wonderful: a silver serving dome, lid lifting, steam */
    '<ellipse cx="40" cy="74" rx="30" ry="5" fill="#cfd6de" stroke="#6b7280" stroke-width="2"/>' +
    '<path d="M14 70q0-30 26-30t26 30z" fill="#e6ebf0" stroke="#6b7280" stroke-width="2"/><path d="M22 62q4-14 16-16" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<circle cx="40" cy="37" r="4" fill="#ffd23f" stroke="#7a5512" stroke-width="1.5"/>' +
    '<path d="M28 30q-4-6 0-12M40 26q-4-6 0-12M52 30q-4-6 0-12" stroke="#ffd23f" stroke-width="2" fill="none" stroke-linecap="round"/>',
    /* Bronsolino: a gold chef's toque */
    '<path d="M22 46q-12-4-8-16q4-10 14-6q2-12 14-12t14 12q10-4 14 6q4 12-8 16z" fill="#ffd23f" stroke="#7a5512" stroke-width="2"/>' +
    '<rect x="22" y="46" width="36" height="28" rx="2" fill="#e8b42c" stroke="#7a5512" stroke-width="2"/>' +
    '<path d="M30 48v24M40 48v24M50 48v24" stroke="#7a5512" stroke-width="1.2"/><rect x="22" y="64" width="36" height="5" fill="#b933ad"/>',
    /* Bam Bam: a gold crown on a tray of diamond-cut baklava */
    '<path d="M16 46V24l12 9 12-15 12 15 12-9v22z" fill="#ffd23f" stroke="#7a5512" stroke-width="2"/>' +
    '<circle cx="40" cy="30" r="3" fill="#e8452c"/><circle cx="24" cy="38" r="2.5" fill="#b933ad"/><circle cx="56" cy="38" r="2.5" fill="#b933ad"/>' +
    '<rect x="10" y="50" width="60" height="26" rx="3" fill="#c98a2a" stroke="#6b3f12" stroke-width="2"/>' +
    '<path d="M10 63l10-10 10 10 10-10 10 10 10-10 10 10M10 63l10 10 10-10 10 10 10-10 10 10 10-10" stroke="#6b3f12" stroke-width="1.5" fill="none"/>' +
    '<circle cx="20" cy="63" r="1.6" fill="#3fa34d"/><circle cx="40" cy="63" r="1.6" fill="#3fa34d"/><circle cx="60" cy="63" r="1.6" fill="#3fa34d"/>'
  ],
  clubTitle: "The Chef's Table", clubTab: "TABLE",
  /* Baklava (his brand), Delicious (from his show), Bam Bam (his nickname) */
  tags: ["BAKLAVA", "DELICIOUS", "BAM BAM"],
  c1: "#ffd23f", c2: "#b933ad", c3: "#e8452c", bg: "#2a1035",
  /* Flushing Meadows skyline: the Unisphere on its tripod, the Pavilion towers, the 7 on the el */
  headerSvg: '<g fill="#f7f3ea">' +
    '<rect x="0" y="52" width="400" height="12"/>' +
    '<rect x="20" y="30" width="3" height="22"/><rect x="26" y="30" width="3" height="22"/><path d="M14 30h20l-3 4H17z"/>' +
    '<rect x="54" y="12" width="3" height="40"/><rect x="60" y="12" width="3" height="40"/><path d="M46 12h26l-4 5H50z"/>' +
    '<path d="M84 52V36q34-6 68 0v16z"/>' +
    '<circle cx="210" cy="28" r="20"/><path d="M178 34q32-22 64-12" fill="none" stroke="#f7f3ea" stroke-width="2"/><path d="M204 46l-10 6h32l-10-6z"/>' +
    '<rect x="260" y="44" width="140" height="4"/>' +
    [270, 300, 330, 360, 390].map(x => '<rect x="' + x + '" y="48" width="3" height="6"/>').join("") +
    '<rect x="284" y="34" width="96" height="10" rx="2"/></g>',
  socials: [
    { name: "Instagram", handle: "@bambambaklava", url: "https://www.instagram.com/bambambaklava/" },
    { name: "YouTube", handle: "MrActionBronson", url: "https://www.youtube.com/user/MrActionBronson" },
    { name: "TikTok", handle: "@actionbronson", url: "https://www.tiktok.com/@actionbronson" }
  ],
  rooms: [
    { scene: "train", t: "PRESS PLAY", x: "Take the 7 to Flushing–Main St. Tap the record. Every song is an episode.", sfx: "train" },
    { scene: "unisphere", t: "EVERY SONG STOPS", x: "At the end of a verse the song stops and asks about what you just heard. Answer right and it keeps going.", sfx: "crowd" },
    { scene: "pavilion", t: "1, THEN 2, THEN 3", x: "Songs 1–3 stop once. Songs 4–6 stop twice. Songs 7–9 stop three times.", sfx: "traffic" },
    { scene: "dumplings", t: "CLIMB THE RANKS", x: "Everybody starts as a Busboy. Clear a row to rank up: Blue Chip, Mr. Wonderful, Bronsolino. Beat the 99 Challenge to become Bam Bam.", sfx: "espresso" },
    { scene: "corner", t: "WELCOME TO FLUSHING", x: "Main Street and Roosevelt Avenue. This is Action Bronson's game.", sfx: "spray" }
  ],
  episodes: [
    { title: "Brunch", id: "fPCQgzA1cnU", start: 15, cuts: [67.0], qs: [[
      ["Before cooking he throws on the...?", "Apron", "Chef's hat", "Oven mitt"],
      ["The steak and salad come with bacon and what cheese?", "Blue cheese", "Swiss cheese", "Goat cheese"],
      ["\"I'm Rick the Model...\" who?", "Martel", "Flair", "Rude"],
      ["\"I'll be sitting in that big...\"", "House", "Chair", "Car"],
      ["You're never in the limelight, you're just the...?", "Undercard", "Main event", "Headliner"]
    ]] },
    { title: "Nourish a Thug", id: "f6MACjyQv-E", start: 25, cuts: [77.9], qs: [[
      ["He exfoliates with what on?", "Mud", "Soap", "Salt"],
      ["\"Life is just a...\"", "Highway", "Rollercoaster", "Movie"],
      ["What color are the eyes with fire in them?", "Blue", "Brown", "Green"],
      ["Which boxer is he watching fight?", "Tyson Fury", "Mike Tyson", "Floyd Mayweather"],
      ["He's the only man alive who knows the breakout of the Cobra...?", "Clutch", "Kick", "Strike"]
    ]] },
    { title: "Shadow Realm", id: "CItgHmHGW48", start: 36, cuts: [104.9], qs: [[
      ["Whose baseball mitt does he mention?", "Satchel Paige", "Babe Ruth", "Jackie Robinson"],
      ["\"This ain't no...\"", "Cakewalk", "Picnic", "Walk in the park"],
      ["You get a one-way ticket to the...?", "Shadow Realm", "Twilight Zone", "Phantom Zone"],
      ["Which dimension is the battle held in?", "The 12th", "The 4th", "The 9th"],
      ["They say he gives off Rocky vibes, the one from...?", "Philadelphia", "Boston", "Pittsburgh"]
    ]] },
    { title: "Peppers", id: "IG6xt2juJ8Y", start: 21, cuts: [100.8, 185.0], qs: [[
      ["\"The wind cries...\" who, on the daily?", "Mary", "Sally", "Lucy"],
      ["Never compare him to these cans of...?", "Beef", "Soup", "Tuna"],
      ["Over the river, through the woods and up the...?", "Mountain", "Hill", "Stairs"],
      ["\"I pop your...\"", "Balloon", "Bubble", "Tire"],
      ["What cologne does he smell like?", "Acqua di Gio", "Old Spice", "Drakkar Noir"],
      ["\"You got to take it...\"", "Easy", "Slow", "Back"]
    ], [
      ["\"Y'all boys reaching, that's a long...\"", "Stretch", "Shot", "Road"],
      ["When shorty DMs him, he leaves her on...?", "Read", "Hold", "Mute"],
      ["The bird is pecking at the nest...?", "Egg", "Box", "Door"],
      ["\"That's what you get for being...\"", "Pigheaded", "Hardheaded", "Big-headed"],
      ["Slick-talking New York, like which Christopher?", "Christopher Walken", "Christopher Lloyd", "Christopher Reeve"]
    ]] },
    { title: "Triceratops", id: "q68v2C-uw-4", start: 27, cuts: [75.9, 103.9], qs: [[
      ["Shout out to Queens, the...?", "Birthplace", "Big leagues", "Promised land"],
      ["He'll turn you to a cheeseburger at a...?", "Children's birthday", "Barbecue", "Ballgame"],
      ["You're the mouse getting stuck in the...?", "Maze", "Trap", "Wall"],
      ["\"All black like...\"", "Blade", "Batman", "Zorro"],
      ["He's sick like the Magician on the...?", "Lakers", "Celtics", "Knicks"],
      ["Half his body is hanging out the...?", "Wrangler", "Range Rover", "Bronco"]
    ], [
      ["What's not included?", "Pastries", "Napkins", "Drinks"],
      ["Renaissance furniture and mansions be...?", "Tasteful", "Spacious", "Golden"],
      ["Eat everything that comes your way, don't be...?", "Wasteful", "Shy", "Greedy"],
      ["What food has he got a taste for?", "Hot wings", "Hot dogs", "Tacos"],
      ["What's the floor filled with?", "Bills", "Confetti", "Glitter"]
    ]] },
    { title: "Durag vs. Headband", id: "MWLg7_G0_go", cuts: [49.5, 100.2], qs: [[
      ["What year was he hatched?", "'83", "'79", "'91"],
      ["With the right horse he'll buy a white...?", "Porsche", "Ferrari", "Bentley"],
      ["Ever since he came out he's been handing out...?", "Pain", "Cash", "Flyers"],
      ["On stage he's like Great Balls of...?", "Fire", "Steel", "Thunder"],
      ["His big steak is like what kind of tire?", "Jeep", "Tractor", "Bicycle"],
      ["He throws the seasoned biceps in the deep...?", "Fryer", "Freezer", "Oven"]
    ], [
      ["He's sick like feeding what in the summer?", "Squirrels", "Pigeons", "Ducks"],
      ["What is he wearing in the summer?", "Bubble jacket", "Bubble bath", "Bubble gum"],
      ["If this was '96, what would he have packed?", "The Tunnel", "The Garden", "The Apollo"],
      ["His big beard looks like he's...?", "Lumberjacking", "Santa Claus", "A wizard"],
      ["The white guitar is like the one in...?", "Wayne's World", "Back to the Future", "School of Rock"]
    ]] },
    { title: "Baby Blue", id: "bVP_w1rQweE", start: 40, cuts: [87.1, 211.9, 282.5], qs: [[
      ["\"Why you always all on my...\"", "Back", "Case", "Mind"],
      ["Somebody else is eating all the...?", "Pudding", "Pie", "Cake"],
      ["His dashboard is now...?", "Wooden", "Leather", "Chrome"],
      ["He's like a young Doc...?", "Gooden", "Gibson", "Holliday"],
      ["Dark shades 'cause he's stone...?", "Crazy", "Cold", "Cool"],
      ["\"Stop playing on my...\"", "Phone", "Heart", "Name"]
    ], [
      ["There were times he used to hide his...?", "Feelings", "Money", "Face"],
      ["Wait till this chick sees him on...?", "TV", "The radio", "A billboard"],
      ["He's at the crib with the...?", "Chef", "Chauffeur", "Band"],
      ["Not exactly flawless, but gorgeous just like a...?", "Horse", "Peacock", "Sunset"],
      ["The thought of him succeeding makes people...?", "Nauseous", "Nervous", "Jealous"]
    ], [
      ["\"I hope every soda you drink is already...\"", "Shaken up", "Flat", "Warm"],
      ["\"I hope your dreams dry like...\" what in the sun?", "Raisins", "Tomatoes", "Laundry"],
      ["\"I hope it's always snowing in your...\"", "Driveway", "Kitchen", "Backyard"],
      ["Which restaurant does he hope you work at?", "Fridays", "Denny's", "Applebee's"],
      ["\"I hope you win the lottery and lose your...\"", "Ticket", "Wallet", "Keys"]
    ]] },
    { title: "Actin Crazy", id: "debIyWS6Byc", start: 18, cuts: [49.3, 101.2, 176.9], qs: [[
      ["\"Opportunity be...\"", "Knocking", "Calling", "Waiting"],
      ["Who does he kiss on the cheek?", "His mother", "His wife", "His daughter"],
      ["\"You ain't got to worry about the thing, I got it...\"", "Covered", "Handled", "Locked"],
      ["Why you think he's out here acting...?", "Crazy", "Tough", "Funny"],
      ["\"You know I'm still your little...\"", "Baby", "Man", "Brother"]
    ], [
      ["Now he pulls what up?", "The truck", "The Benz", "The bike"],
      ["\"No more tough...\"", "Luck", "Love", "Times"],
      ["You'd swear he's what, but he's not?", "Puerto Rican", "Italian", "Greek"],
      ["All he does is eat...?", "Oysters", "Lobster", "Clams"],
      ["How many languages does he speak?", "Six", "Three", "Ten"],
      ["Adriatic summers on the...?", "Sailboat", "Beach", "Island"]
    ], [
      ["He's staring at the man inside the...?", "Mirror", "Window", "Picture"],
      ["Left-handed, he makes the what cry?", "Defender", "Goalie", "Referee"],
      ["He's half Cherokee and...?", "Gemini", "Leo", "Scorpio"],
      ["Who said it's a man's world?", "James Brown", "Marvin Gaye", "Stevie Wonder"],
      ["What car is he twirling in?", "Trans Am", "Camaro", "Cadillac"],
      ["Now everybody wants to be...?", "Chubby", "Skinny", "Famous"]
    ]] },
    { title: "Easy Rider", id: "58RSC7HO9aU", start: 52, cuts: [86.1, 156.4, 208.9], qs: [[
      ["He's feeling like who in front of the chapel?", "Slash", "Prince", "Elvis"],
      ["Which guitar is he leaned back with?", "Les Paul", "Stratocaster", "Telecaster"],
      ["He spilled dressing on his vest at the...?", "Festival", "Wedding", "Ballgame"],
      ["He almost wrecked the...?", "Saab", "Volvo", "Jeep"],
      ["He started running with the...?", "Stallions", "Wolves", "Bulls"],
      ["Where is he playing frisbee?", "West Indies", "Bahamas", "Hamptons"]
    ], [
      ["Ride the what into the sunset?", "Harley", "Horse", "Cadillac"],
      ["He saw her in the lobby of the...?", "Ritz", "Plaza", "Four Seasons"],
      ["What does her man swing?", "Hockey stick", "Baseball bat", "Golf club"],
      ["A little machine to make...?", "Espresso", "Waffles", "Smoothies"],
      ["What does he wear in the winter?", "The wolf", "The mink", "The bear"],
      ["What does he bite by the dozen?", "Eel", "Shrimp", "Clams"]
    ], [
      ["How much did this toy cost?", "80 grand", "20 grand", "A million"],
      ["Tell the pilot land the plane at Roosevelt and...?", "Main", "Broadway", "Fifth"],
      ["He puts a jacuzzi on which train?", "The 7", "The A", "The F"],
      ["Which jazz legend comes up?", "John Coltrane", "Miles Davis", "Louis Armstrong"],
      ["He knows your crabs from that what taste?", "Old Bay", "Garlic butter", "Lemon pepper"],
      ["He's the what of the game?", "Magic Johnson", "Michael Jordan", "Larry Bird"]
    ]] }
  ]
};
