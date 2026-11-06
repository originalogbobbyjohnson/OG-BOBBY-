/* passionpit scenes (Regions tab: Boston + New England; Cambridge, MA). CSS classes and ids prefixed pp- (the page's own anim-train is kept).
   1 Harvard on the Red Line, Cambridge: the underground platform with its brick walls and curved ceiling, the black HARVARD sign with the RL badge and the 1 bus badge (Mass Ave bus), the silver train with its red band sliding in.
   2 Emerson College on Boylston St across from the Common, where Michael Angelakos wrote the Chunk of Change songs as a late Valentine's gift: the white Gothic terracotta front of the Little Building, one dorm window glowing with a laptop, hearts floating out, elms of the Common.
   3 The Charles River at the Weeks Footbridge ("Take a Walk"): the brick arches of the footbridge, the red-brick Dunster House tower with its red-and-white cupola behind, a rowing shell gliding by, ripples.
   4 The Lawn on D in South Boston, where they played their 2015 homecoming show: the glowing ring swings swaying on the lawn, the little stage with lights sweeping, the Seaport towers behind.
   5 Massachusetts Ave and JFK St in Harvard Square: green signs, PASSION PIT tagged on the brick, the Harvard Yard wall and the white steeple of Memorial Church behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ppflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.pp-flk{animation:ppflick 2.2s infinite}.pp-flk2{animation-delay:.7s}' +
    '@keyframes ppheart{0%{transform:translate(0,0) scale(.6);opacity:0}15%{opacity:1}100%{transform:translate(20px,-70px) scale(1.1);opacity:0}}.pp-heart{transform-box:fill-box;transform-origin:50% 50%;animation:ppheart 3.4s ease-out infinite}.pp-h2{animation-delay:-1.1s}.pp-h3{animation-delay:-2.2s}' +
    '@keyframes ppboat{from{transform:translateX(-160px)}to{transform:translateX(520px)}}.pp-boat{animation:ppboat 9s linear infinite}' +
    '@keyframes ppoar{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.pp-oar{transform-box:fill-box;transform-origin:50% 50%;animation:ppoar 1s ease-in-out infinite}' +
    '@keyframes ppwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.pp-wave{animation:ppwave 3.4s linear infinite}' +
    '@keyframes ppswing{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.pp-sw{transform-box:fill-box;transform-origin:50% 0;animation:ppswing 2.4s ease-in-out infinite}.pp-sw2{animation-delay:-.8s}.pp-sw3{animation-delay:-1.6s}' +
    '@keyframes ppglow{0%,100%{opacity:.35}50%{opacity:1}}.pp-glow{animation:ppglow 1.6s ease-in-out infinite}.pp-glow2{animation-delay:-.5s}.pp-glow3{animation-delay:-1s}' +
    '@keyframes ppbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.pp-beam{transform-box:fill-box;transform-origin:50% 100%;animation:ppbeam 3s ease-in-out infinite}.pp-beam2{animation-delay:-1.5s}' +
    '@keyframes ppbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.pp-bird{animation:ppbird 12s linear infinite}' +
    '@keyframes ppspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pp-sp{animation:ppspray 1.4s ease-out infinite}.pp-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, tc) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const heart = (cls, x, y, c) => '<path class="pp-heart ' + cls + '" d="M' + x + ' ' + (y + 8) + 'c-10 -6 -10 -15 -4 -16 2 0 4 1.5 4 3.5 0 -2 2 -3.5 4 -3.5 6 1 6 10 -4 16z" fill="' + c + '"/>';
  const RED = "#da291c", PINK = "#ff6f91", TEAL = "#3fd0c9", LILAC = "#b79cff", CREAM = "#f4f1e8";

  /* 1. Harvard, Red Line, underground */
  function ppstation() {
    let bricks = "";
    for (let r = 0; r < 9; r++) for (let c = 0; c < 14; c++) bricks += '<rect x="' + (c * 30 + (r % 2) * 15 - 15) + '" y="' + (24 + r * 9) + '" width="29" height="8" fill="' + ((r * 3 + c) % 4 ? "#9c5a3c" : "#8a4d33") + '"/>';
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="132" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="122" width="330" height="70" rx="8" fill="#cfd4d8" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="160" width="330" height="9" fill="' + RED + '"/><rect x="24" y="172" width="330" height="3" fill="' + RED + '"/>' +
      '<rect x="334" y="126" width="18" height="60" rx="4" fill="#aeb4ba"/><circle cx="344" cy="180" r="3.5" fill="#fff6c2"/>' +
      '<rect x="282" y="128" width="48" height="12" rx="2" fill="#111"/><text x="306" y="137" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">ALEWIFE</text></g>';
    return svg(
      '<rect width="400" height="260" fill="#1b1a1f"/>' +
      '<path d="M0 26Q200 -10 400 26V0H0z" fill="#2c2b33"/>' + bricks +
      '<rect x="0" y="104" width="400" height="18" fill="#3a3640"/>' +
      '<g class="pp-flk"><rect x="50" y="12" width="60" height="5" rx="2" fill="#fff6d6"/></g><g class="pp-flk pp-flk2"><rect x="290" y="12" width="60" height="5" rx="2" fill="#fff6d6"/></g>' +
      '<rect x="114" y="40" width="172" height="30" rx="3" fill="#111"/><text x="128" y="61" ' + font + ' font-size="17" fill="#fff">Harvard</text>' + badge(208, 55, "RL", RED) + badge(246, 55, "1", "#ffc72c", "#111") +
      train +
      '<rect x="0" y="194" width="400" height="8" fill="#f2c200"/><rect x="0" y="202" width="400" height="58" fill="#8e8a84"/><path d="M0 230h400" stroke="#7e7a74" stroke-width="2"/>' +
      '<rect x="356" y="212" width="6" height="36" fill="#444"/><rect x="342" y="208" width="34" height="8" rx="2" fill="#555"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">HARVARD SQUARE · CAMBRIDGE</text>');
  }

  /* 2. Emerson College on Boylston St: the Little Building, a glowing dorm window, hearts */
  function ppemerson() {
    const bay = (x) => '<rect x="' + x + '" y="56" width="34" height="122" fill="#ece6d6"/>' +
      [64, 92, 120, 148].map(y => '<rect x="' + (x + 6) + '" y="' + y + '" width="22" height="20" fill="#6f8798"/><path d="M' + (x + 17) + ' ' + y + 'v20" stroke="#ece6d6" stroke-width="2"/>').join("") +
      '<path d="M' + x + ' 56l17 -14 17 14z" fill="#e2dac6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pps2)"/>' +
      '<circle cx="340" cy="38" r="14" fill="#fff4c8" opacity=".85"/>' +
      /* the Little Building, white Gothic terracotta */
      '<rect x="96" y="48" width="208" height="130" fill="#ddd5c2"/>' + [100, 150, 200, 250].map(bay).join("") +
      [96, 146, 196, 246, 296].map(x => '<rect x="' + (x - 2) + '" y="40" width="12" height="138" fill="#f4efe2"/><path d="M' + (x - 2) + ' 40l6 -12 6 12z" fill="#f4efe2"/>').join("") +
      /* one glowing dorm window with a laptop */
      '<rect class="pp-flk" x="206" y="92" width="22" height="20" fill="#ffd27a"/><rect x="211" y="102" width="12" height="7" fill="#2a2f3a"/><rect x="209" y="109" width="16" height="2" fill="#555"/>' +
      heart("", 214, 82, PINK) + heart("pp-h2", 222, 86, LILAC) + heart("pp-h3", 206, 88, TEAL) +
      '<rect x="176" y="150" width="48" height="28" fill="#3a2a20"/><rect x="180" y="153" width="19" height="25" fill="#c9a24a" opacity=".7"/><rect x="201" y="153" width="19" height="25" fill="#c9a24a" opacity=".7"/>' +
      /* the Common's elms */
      '<circle cx="34" cy="126" r="30" fill="#2f6b3a"/><circle cx="64" cy="142" r="22" fill="#3a7a44"/><rect x="30" y="140" width="8" height="40" fill="#4a3424"/>' +
      '<circle cx="368" cy="128" r="28" fill="#2f6b3a"/><rect x="364" y="140" width="8" height="40" fill="#4a3424"/>' +
      '<rect x="82" y="150" width="3" height="30" fill="#222"/><circle class="pp-flk" cx="83.5" cy="148" r="5" fill="#ffe9a8"/>' +
      '<rect x="0" y="178" width="400" height="10" fill="#c7c1b5"/><rect x="0" y="188" width="400" height="72" fill="#4a4a4f"/><path d="M0 226h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">BOYLSTON ST · EMERSON · CHUNK OF CHANGE</text>',
      sky("pps2", "#2c2a5a", "#d98fa6"));
  }

  /* 3. Charles River, Weeks Footbridge, Dunster House tower */
  function ppcharles() {
    const arches = [70, 150, 230, 310].map(x => '<path d="M' + (x - 40) + ' 150h80v20q-40 -34 -80 0z" fill="#8a4d33"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pps3)"/>' +
      '<g class="pp-bird"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* Dunster House: red brick block, tower with red-and-white cupola */
      '<rect x="40" y="88" width="320" height="50" fill="#a0533a"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (52 + i * 26) + '" y="98" width="12" height="16" fill="#e8dcc0"/>').join("") +
      '<rect x="176" y="46" width="48" height="92" fill="#a0533a"/><rect x="186" y="58" width="12" height="18" fill="#e8dcc0"/><rect x="202" y="58" width="12" height="18" fill="#e8dcc0"/>' +
      '<rect x="182" y="34" width="36" height="14" fill="#f4efe2"/><rect x="186" y="20" width="28" height="16" fill="#c0392b"/>' + [190, 199, 208].map(x => '<rect x="' + x + '" y="24" width="4" height="10" fill="#f4efe2"/>').join("") +
      '<path d="M184 20h32l-16 -14z" fill="#c0392b"/><rect x="198" y="0" width="4" height="8" fill="#c9a24a"/>' +
      '<circle cx="24" cy="128" r="22" fill="#3f8a4a"/><circle cx="380" cy="128" r="22" fill="#3f8a4a"/>' +
      /* footbridge */
      '<rect x="0" y="136" width="400" height="14" fill="#9c5a3c"/><rect x="0" y="132" width="400" height="5" fill="#d8d0c0"/>' + arches +
      /* river */
      '<rect x="0" y="170" width="400" height="90" fill="#2e5f86"/>' +
      '<g class="pp-wave">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' 196q10 -5 20 0t20 0" stroke="#9cc4e4" stroke-width="2" fill="none"/><path d="M' + (i * 40 + 20) + ' 236q10 -5 20 0t20 0" stroke="#7fb0d8" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<g class="pp-boat"><path d="M40 214h140l-10 6H50z" fill="#f4efe2"/><rect x="60" y="208" width="100" height="6" fill="#1f3a5c"/>' +
      [70, 95, 120, 145].map(x => '<circle cx="' + x + '" cy="204" r="4" fill="#2a2a2a"/><g class="pp-oar"><path d="M' + x + ' 210l-6 18" stroke="#c9a24a" stroke-width="2"/></g>').join("") + '</g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">THE CHARLES · TAKE A WALK</text>',
      sky("pps3", "#f2a47a", "#fde6c8"));
  }

  /* 4. The Lawn on D, South Boston: glowing ring swings, a little stage */
  function pplawn() {
    const swing = (x, cls, c, g) => '<g class="pp-sw ' + cls + '"><path d="M' + (x - 10) + ' 112l-2 52M' + (x + 10) + ' 112l2 52" stroke="#ccc" stroke-width="1.5"/><ellipse class="pp-glow ' + g + '" cx="' + x + '" cy="168" rx="22" ry="7" fill="none" stroke="' + c + '" stroke-width="5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pps4)"/>' +
      /* Seaport towers */
      '<g fill="#2a2f4a"><rect x="10" y="40" width="40" height="80"/><rect x="56" y="22" width="30" height="98"/><rect x="300" y="30" width="36" height="90"/><rect x="342" y="50" width="50" height="70"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (62 + (i % 2) * 12) + '" y="' + (32 + Math.floor(i / 2) * 22) + '" width="6" height="8" fill="#ffd27a" opacity=".7"/>').join("") +
      /* stage */
      '<rect x="120" y="70" width="160" height="50" fill="#1b1b24"/><rect x="114" y="62" width="172" height="10" fill="#3a3a48"/>' +
      '<g class="pp-beam"><path d="M160 72l-20 46h40z" fill="' + TEAL + '" opacity=".35"/></g><g class="pp-beam pp-beam2"><path d="M240 72l-20 46h40z" fill="' + PINK + '" opacity=".35"/></g>' +
      '<rect x="196" y="96" width="8" height="24" fill="#555"/><circle cx="200" cy="94" r="4" fill="#777"/>' +
      /* swing frame */
      '<rect x="20" y="104" width="360" height="8" fill="#e8e8e8"/><rect x="24" y="104" width="6" height="88" fill="#e8e8e8"/><rect x="370" y="104" width="6" height="88" fill="#e8e8e8"/>' +
      '<rect x="0" y="182" width="400" height="78" fill="#3f7a3a"/>' +
      swing(70, "", PINK, "") + swing(140, "pp-sw2", TEAL, "pp-glow2") + swing(210, "pp-sw3", LILAC, "pp-glow3") + swing(280, "", "#ffd23f", "pp-glow2") + swing(346, "pp-sw2", PINK, "pp-glow3") +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">THE LAWN ON D · SOUTH BOSTON · LIFTED UP</text>',
      sky("pps4", "#141434", "#4a3a7a"));
  }

  /* 5. Massachusetts Ave and JFK St, Harvard Square; Memorial Church steeple behind the Yard wall */
  function ppcorner() {
    const steeple = '<g><rect x="168" y="40" width="44" height="70" fill="#f4efe2"/><rect x="174" y="22" width="32" height="20" fill="#f4efe2"/><rect x="180" y="8" width="20" height="16" fill="#f4efe2"/>' +
      '<path d="M180 8l10 -8 10 8z" fill="#f4efe2"/><path d="M188 0v-10" stroke="#c9a24a" stroke-width="2"/>' +
      '<rect x="182" y="50" width="16" height="26" rx="8" fill="#6f8798"/><circle cx="190" cy="32" r="5" fill="#2b2f3a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pps5)"/>' +
      '<circle cx="80" cy="96" r="30" fill="#2f5a3a"/><circle cx="300" cy="94" r="32" fill="#2f5a3a"/>' + steeple +
      /* Harvard Yard brick wall with a gate */
      '<rect x="0" y="104" width="400" height="22" fill="#8a4d33"/><rect x="0" y="100" width="400" height="5" fill="#d8d0c0"/><rect x="96" y="92" width="14" height="34" fill="#8a4d33"/><rect x="146" y="92" width="14" height="34" fill="#8a4d33"/><path d="M110 104h36" stroke="#222" stroke-width="2"/>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("PASSION PIT", 18, 186, 36, PINK, -6) + tag("CHUNK OF CHANGE", 22, 214, 16, TEAL, -3) + tag("GOSSAMER", 196, 212, 17, LILAC, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 144, "Massachusetts Av") + sign(276, 124, 92, "JFK St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="pp-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="pp-sp"><circle cx="230" cy="166" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="pp-sp pp-sp2"><circle cx="236" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("pps5", "#2a2a5e", "#e88fa0"));
  }

  window.SCENES = { ppstation: ppstation, ppemerson: ppemerson, ppcharles: ppcharles, pplawn: pplawn, ppcorner: ppcorner };
})();
