/* OG Made · Season 2 release plan. One list, used by the game and the free-single drop page (ogbobbybrooklyn.com/drop/).
   To change the song order: move titles around in EPISODES. Position 1, 4 and 7 are the free singles (no catch);
   the two after each one are played in the game, and open only after the free single's questions are cleared.
   Releases go out in blocks of three: block 1 = episodes 1-3, block 2 = 4-6, block 3 = 7-9.
   LIVE_BLOCKS is how many blocks are out. It stays 0 until release morning, then goes up by one each drop.
   A song's "audio" file is only added on the morning it drops, so nothing can be heard early. */
window.OG_S2 = {
  LIVE_BLOCKS: 0,
  EPISODES: [
    { title: "After Hours",                audio: "", art: "" },
    { title: "The Ridge to the Beach",     audio: "", art: "" },
    { title: "Wall Street Machine, Pt. 1", audio: "", art: "" },
    { title: "Ridge Reels",                audio: "", art: "" },
    { title: "Mikey the Rat",              audio: "", art: "" },
    { title: "Fort Hamilton Parkway",      audio: "", art: "" },
    { title: "Bridgeview to Vegas",        audio: "", art: "" },
    { title: "Wall Street Machine, Pt. 2", audio: "", art: "" },
    { title: "Everybody’s Bay Ridge",  audio: "", art: "" }
  ]
};
/* Helpers both pages use. */
window.OG_S2.isFree = i => i % 3 === 0;                       // 0, 3, 6 -> episodes 1, 4, 7
window.OG_S2.isOut = i => Math.floor(i / 3) < window.OG_S2.LIVE_BLOCKS;
