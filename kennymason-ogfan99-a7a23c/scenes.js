/* kennymason scenes (Regions tab: Atlanta; Southwest Atlanta - Oakland City / Campbellton Rd / Dill Ave, Pittsburgh in high school). CSS classes and ids prefixed km- (the page's own anim-train is kept).
   1 Oakland City station on MARTA's Red + Gold lines: at-grade island platform up on the embankment, a silver train sliding in.
   2 Lakewood Amphitheatre, south of Pittsburgh: the big white shed roof, stage lights sweeping, the lawn crowd bouncing.
   3 Pittsburgh, Southwest Atlanta (where he settled in high school): porch houses, a pup with metal wings flying over the roofs.
   4 The Downtown Connector at night (the HIGHWAY project): I-75 / I-85 shields, headlight and taillight streams, the skyline.
   5 Campbellton Rd SW and Lee St SW by Oakland City: green signs, KENNY MASON tagged, the round glass Westin tower downtown behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.km-flk{animation:kmflick 2.2s infinite}.km-flk2{animation-delay:.7s}' +
    '@keyframes kmsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.km-beam{transform-box:fill-box;transform-origin:50% 100%;animation:kmsweep 3s ease-in-out infinite}.km-beam2{animation-delay:-1.5s}' +
    '@keyframes kmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.km-bob{animation:kmbob .6s ease-in-out infinite}.km-bob2{animation-delay:-.3s}' +
    '@keyframes kmfly{0%{transform:translate(-80px,20px)}50%{transform:translate(200px,-14px)}100%{transform:translate(480px,10px)}}.km-fly{animation:kmfly 9s linear infinite}' +
    '@keyframes kmflap{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(16deg)}}.km-wing{transform-box:fill-box;transform-origin:0% 100%;animation:kmflap .5s ease-in-out infinite}' +
    '@keyframes kmR{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.km-r{animation:kmR 2.6s linear infinite}.km-r2{animation-delay:-.9s}.km-r3{animation-delay:-1.7s}' +
    '@keyframes kmL{from{transform:translateX(460px)}to{transform:translateX(-60px)}}.km-l{animation:kmL 3s linear infinite}.km-l2{animation-delay:-1s}.km-l3{animation-delay:-2s}' +
    '@keyframes kmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.km-sp{animation:kmspray 1.4s ease-out infinite}.km-sp2{animation-delay:.45s}' +
    '@keyframes kmcar{from{transform:translateX(440px)}to{transform:translateX(-120px)}}.km-car{animation:kmcar 7s linear infinite}' +
    '@keyframes kmtw{0%,100%{opacity:.3}50%{opacity:1}}.km-tw{animation:kmtw 1.8s ease-in-out infinite}.km-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 5 ? "" : "km-tw") + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const RD = "#ce242b", GD = "#d4a723", RED = "#e63946", METAL = "#c9d1d9", ANGEL = "#7fd1ff";

  /* 1. Oakland City station */
  function kmstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="112" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="102" width="330" height="66" rx="8" fill="#d3d8dc" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="140" width="330" height="6" fill="#f08a24"/><rect x="24" y="148" width="330" height="4" fill="#1f5fa8"/>' +
      '<rect x="334" y="106" width="18" height="56" rx="4" fill="#aeb4ba"/><circle cx="344" cy="156" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="106" width="60" height="12" rx="2" fill="#111"/><text x="300" y="115" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">AIRPORT</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms1)"/>' +
      /* trees and roofs below the embankment far side */
      '<g fill="#2f4a33"><circle cx="30" cy="80" r="22"/><circle cx="70" cy="74" r="18"/><circle cx="330" cy="78" r="24"/><circle cx="378" cy="84" r="18"/></g>' +
      /* platform canopy */
      '<rect x="60" y="40" width="280" height="10" fill="#8a96a2"/><rect x="60" y="50" width="280" height="4" fill="#5d6772"/>' + [80, 200, 320].map(x => '<rect x="' + (x - 3) + '" y="54" width="6" height="36" fill="#5d6772"/>').join("") +
      '<g class="km-flk"><rect x="110" y="56" width="36" height="3" fill="#fff3c4"/></g><g class="km-flk km-flk2"><rect x="250" y="56" width="36" height="3" fill="#fff3c4"/></g>' +
      '<rect x="0" y="88" width="400" height="10" fill="#7a7468"/>' +
      train +
      '<rect x="0" y="168" width="400" height="8" fill="#f2c200"/><rect x="0" y="176" width="400" height="20" fill="#9a958c"/>' +
      /* grassy embankment */
      '<path d="M0 196h400v64H0z" fill="#5a7a3a"/><path d="M0 196q100 14 200 4t200 6" stroke="#6f8f48" stroke-width="3" fill="none"/>' +
      '<rect x="78" y="200" width="244" height="40" rx="3" fill="#111"/><text x="92" y="226" ' + font + ' font-size="18" fill="#fff">Oakland City</text>' + badge(232, 220, "RD", RD) + badge(270, 220, "GD", GD, true),
      sky("kms1", "#3a6fb0", "#f3c58a"));
  }

  /* 2. Lakewood Amphitheatre */
  function kmamph() {
    const heads = Array.from({ length: 22 }, (_, i) => '<g class="km-bob' + (i % 2 ? " km-bob2" : "") + '"><circle cx="' + (10 + i * 18) + '" cy="' + (206 + (i % 3) * 8) + '" r="8" fill="#1a1420"/><rect x="' + (2 + i * 18) + '" y="' + (212 + (i % 3) * 8) + '" width="16" height="30" rx="5" fill="#1a1420"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kms2)"/>' + stars(26) +
      /* beams */
      '<g opacity=".5"><path class="km-beam" d="M150 40L120 140h60z" fill="' + ANGEL + '" opacity=".35"/><path class="km-beam km-beam2" d="M250 40L220 140h60z" fill="' + RED + '" opacity=".35"/></g>' +
      /* shed roof */
      '<path d="M20 70Q200 20 380 70L370 84Q200 40 30 84z" fill="#f2f2ee" stroke="#c9c9c2" stroke-width="2"/>' +
      [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 3) + '" y="' + (x === 200 ? 48 : 64) + '" width="6" height="' + (x === 200 ? 110 : 94) + '" fill="#9aa0a8"/>').join("") +
      /* stage */
      '<rect x="90" y="120" width="220" height="40" fill="#24202c"/><rect x="90" y="156" width="220" height="10" fill="#3a3444"/>' +
      '<rect x="110" y="100" width="20" height="56" fill="#111"/><rect x="270" y="100" width="20" height="56" fill="#111"/>' +
      [140, 170, 200, 230, 260].map((x, i) => '<circle class="km-flk' + (i % 2 ? " km-flk2" : "") + '" cx="' + x + '" cy="92" r="5" fill="' + [RED, METAL, ANGEL, METAL, RED][i] + '"/>').join("") +
      /* lawn */
      '<rect x="0" y="176" width="400" height="84" fill="#2d4a2a"/>' + heads +
      label(120, 160, "LAKEWOOD AMPHITHEATRE"),
      sky("kms2", "#0b0f24", "#3a2a5a"));
  }

  /* 3. Pittsburgh porch houses, a winged pup flying */
  function kmpitt() {
    const house = (x, c, roof) => '<path d="M' + (x - 6) + ' 140l' + 46 + ' -30l' + 46 + ' 30z" fill="' + roof + '"/><rect x="' + x + '" y="140" width="80" height="74" fill="' + c + '"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + x + ' ' + (146 + i * 10) + 'h80" stroke="#000" stroke-width=".6" opacity=".15"/>').join("") +
      '<rect x="' + (x - 6) + '" y="168" width="92" height="5" fill="#efe6d0"/>' + [x - 4, x + 36, x + 78].map(px => '<rect x="' + px + '" y="173" width="4" height="41" fill="#efe6d0"/>').join("") +
      '<rect x="' + (x + 10) + '" y="148" width="18" height="16" fill="#ffe7a8" opacity=".8"/><rect x="' + (x + 50) + '" y="148" width="18" height="16" fill="#ffe7a8" opacity=".8"/><rect x="' + (x + 32) + '" y="180" width="16" height="34" fill="#5a3f2a"/>';
    const pup = '<g class="km-fly"><g transform="translate(0,60)">' +
      '<ellipse cx="30" cy="20" rx="20" ry="9" fill="#e9e1d4"/><circle cx="52" cy="14" r="8" fill="#e9e1d4"/><path d="M46 8l4 -8l4 8z" fill="#d8cfc0"/><circle cx="55" cy="13" r="1.6" fill="#111"/><circle cx="60" cy="16" r="1.8" fill="#333"/>' +
      '<path d="M10 18q-8 -6 -10 -2" stroke="#e9e1d4" stroke-width="3" fill="none"/><rect x="18" y="26" width="4" height="8" fill="#e9e1d4"/><rect x="38" y="26" width="4" height="8" fill="#e9e1d4"/>' +
      '<g class="km-wing"><path d="M26 14l-6 -22l8 4l2 -6l6 6l4 -4l2 18z" fill="' + METAL + '" stroke="#7d868f" stroke-width="1.5"/></g></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms3)"/>' +
      '<g fill="#b8c4cf" opacity=".6"><rect x="120" y="70" width="18" height="44"/><rect x="142" y="58" width="14" height="56"/><rect x="160" y="80" width="26" height="34"/><rect x="250" y="66" width="20" height="48"/><rect x="274" y="84" width="30" height="30"/></g>' +
      '<g fill="#3f6b3a"><circle cx="20" cy="120" r="26"/><circle cx="388" cy="118" r="24"/></g>' +
      house(14, "#c9a96e", "#5a3a2a") + house(112, "#8fb3c4", "#3a4a5a") + house(210, "#d98a6a", "#5a2a2a") + house(308, "#e3dcc2", "#4a4a4a") +
      pup +
      '<rect x="0" y="214" width="400" height="46" fill="#6e6a64"/><path d="M0 214h400" stroke="#aaa59c" stroke-width="3"/>' +
      label(110, 180, "PITTSBURGH · SOUTHWEST ATLANTA"),
      sky("kms3", "#7fb8e0", "#f6e1b8"));
  }

  /* 4. Downtown Connector at night */
  function kmconnector() {
    const shield = (x, num) => '<g><path d="M' + x + ' 30h36v20q0 14 -18 20q-18 -6 -18 -20z" fill="#1f4fa8" stroke="#fff" stroke-width="2"/><path d="M' + x + ' 30h36v8h-36z" fill="#c8102e"/><text x="' + (x + 18) + '" y="58" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + num + '</text></g>';
    const head = (cls, y) => '<g class="km-r ' + cls + '"><rect x="0" y="' + y + '" width="40" height="3" rx="1.5" fill="#fff6c2" opacity=".85"/></g>';
    const tail = (cls, y) => '<g class="km-l ' + cls + '"><rect x="0" y="' + y + '" width="40" height="3" rx="1.5" fill="#ff3a3a" opacity=".85"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms4)"/>' + stars(20) +
      '<g fill="#1f2440"><rect x="20" y="90" width="30" height="80"/><rect x="56" y="70" width="24" height="100"/><rect x="86" y="100" width="40" height="70"/><rect x="250" y="80" width="28" height="90"/><rect x="284" y="96" width="44" height="74"/><rect x="334" y="74" width="26" height="96"/></g>' +
      '<rect x="160" y="54" width="36" height="116" rx="16" fill="#2a3352"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="164" y="' + (60 + i * 10) + '" width="28" height="2" fill="#7fd1ff" opacity=".35"/>').join("") +
      Array.from({ length: 20 }, (_, i) => '<rect class="' + (i % 4 ? "" : "km-tw") + '" x="' + [26, 38, 60, 70, 92, 108, 256, 266, 290, 310, 340, 348][i % 12] + '" y="' + (100 + (i * 11) % 60) + '" width="3" height="3" fill="#ffe7a8" opacity=".7"/>').join("") +
      /* overhead sign gantry */
      '<rect x="0" y="22" width="400" height="5" fill="#555"/><rect x="10" y="22" width="5" height="150" fill="#555"/><rect x="385" y="22" width="5" height="150" fill="#555"/>' +
      '<rect x="60" y="27" width="140" height="48" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + shield(70, "75") + shield(112, "85") + '<text x="178" y="56" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">NORTH</text>' +
      '<rect x="220" y="27" width="120" height="48" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="280" y="48" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Downtown</text><text x="280" y="64" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">EXIT ONLY</text>' +
      /* road */
      '<path d="M0 170h400v90H0z" fill="#26262c"/><path d="M0 214h400" stroke="#e8d36b" stroke-width="2"/>' +
      [190, 236].map(y => '<path d="M0 ' + y + 'h400" stroke="#fff" stroke-width="2" stroke-dasharray="18 14" opacity=".5"/>').join("") +
      head("", 180) + head("km-r2", 198) + head("km-r3", 204) + tail("", 222) + tail("km-l2", 244) + tail("km-l3", 230) +
      label(124, 152, "THE DOWNTOWN CONNECTOR"),
      sky("kms4", "#0a0f26", "#3a2a5a"));
  }

  /* 5. Campbellton Rd SW and Lee St SW, the Westin tower behind */
  function kmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kms5)"/>' +
      '<g fill="#3a3550"><rect x="20" y="70" width="34" height="60"/><rect x="60" y="86" width="26" height="44"/><rect x="250" y="60" width="30" height="70"/><rect x="286" y="80" width="40" height="50"/></g>' +
      '<rect x="166" y="14" width="34" height="116" fill="#556a86"/><rect x="166" y="14" width="10" height="116" fill="#6f87a6"/><rect x="190" y="14" width="10" height="116" fill="#43566f"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="166" y="' + (22 + i * 9) + '" width="34" height="2" fill="#bfe6fb" opacity=".5"/>').join("") +
      '<rect x="163" y="8" width="40" height="8" fill="#3d4d63"/><rect x="181" y="0" width="4" height="8" fill="#3d4d63"/>' +
      '<rect x="0" y="122" width="400" height="102" fill="#8a4a34"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#703a28" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#703a28" stroke-width="1"/>').join("")).join("") +
      tag("KENNY MASON", 14, 194, 36, RED, -6) + tag("PUP", 40, 150, 22, METAL, -4) + tag("HOODRAT", 200, 214, 18, ANGEL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="km-car"><rect x="0" y="234" width="64" height="16" rx="5" fill="#f2f2ee"/><rect x="12" y="226" width="34" height="11" rx="4" fill="#9aa0a8"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="50" cy="251" r="5" fill="#111"/></g>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 144, "Campbellton Rd SW") + sign(290, 124, 100, "Lee St SW") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="km-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="km-sp"><circle cx="246" cy="168" r="3" fill="' + RED + '" opacity=".7"/></g><g class="km-sp km-sp2"><circle cx="252" cy="162" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("kms5", "#2a3466", "#f09a6a"));
  }

  window.SCENES = { kmstation: kmstation, kmamph: kmamph, kmpitt: kmpitt, kmconnector: kmconnector, kmcorner: kmcorner };
})();
