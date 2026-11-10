/* nf scenes (Regions tab: Detroit; Gladwin, Michigan). CSS classes and ids prefixed nf- (the page's own anim-train is kept).
   1 M-61 into Gladwin: a green highway sign with the white M-61 diamond, pines along the road, a car pulling in.
   2 Gladwin High's gym (he played on the basketball team): royal blue and white, a ball dropping through the net.
   3 His parents' van, where he wrote his first raps: the dome light on, a notebook glowing, notes drifting out.
   4 The Fine Arts Festival at Connection Church in Canton (first place, rap, Michigan 2008): a stage, a spotlight, a ribbon.
   5 W Cedar Ave and S Bowery Ave in downtown Gladwin: green signs, NF tagged on the wall, the buff Art Deco courthouse behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nfflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.nf-flk{animation:nfflick 2.4s infinite}.nf-flk2{animation-delay:.8s}' +
    '@keyframes nfball{0%{transform:translate(-80px,-30px)}45%{transform:translate(0,-4px)}60%{transform:translate(0,22px)}100%{transform:translate(0,70px);opacity:0}}.nf-ball{animation:nfball 2.6s ease-in infinite}' +
    '@keyframes nfnet{0%,50%,100%{transform:scaleY(1)}62%{transform:scaleY(1.25)}}.nf-net{transform-box:fill-box;transform-origin:50% 0%;animation:nfnet 2.6s ease-in infinite}' +
    '@keyframes nfnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.nf-note{animation:nfnote 3s ease-out infinite}.nf-note2{animation-delay:1s}.nf-note3{animation-delay:2s}' +
    '@keyframes nfspot{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.nf-spot{transform-box:fill-box;transform-origin:50% 0%;animation:nfspot 4s ease-in-out infinite}' +
    '@keyframes nfsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.nf-rib{transform-box:fill-box;transform-origin:50% 0%;animation:nfsway 2.2s ease-in-out infinite}' +
    '@keyframes nfcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.nf-car{animation:nfcar 8s linear infinite}' +
    '@keyframes nfsnow{from{transform:translateY(-20px)}to{transform:translateY(280px)}}.nf-snow{animation:nfsnow 6s linear infinite}.nf-snow2{animation-delay:-3s}' +
    '@keyframes nfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.nf-sp{animation:nfspray 1.4s ease-out infinite}.nf-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const BLUE = "#2f6fd6", WHITE = "#f4f4f4", RED = "#d9342b";
  const pine = (x, base, h, c) => '<path d="M' + x + ' ' + (base - h) + 'l' + (h * 0.22) + ' ' + (h * 0.35) + 'h-' + (h * 0.09) + 'l' + (h * 0.2) + ' ' + (h * 0.32) + 'h-' + (h * 0.1) + 'l' + (h * 0.22) + ' ' + (h * 0.33) + 'h-' + (h * 1.08) + 'l' + (h * 0.22) + ' -' + (h * 0.33) + 'h-' + (h * 0.1) + 'l' + (h * 0.2) + ' -' + (h * 0.32) + 'h-' + (h * 0.09) + 'z" fill="' + c + '"/>';
  /* Michigan trunkline marker: white diamond, black border, M over the number */
  const mshield = (cx, cy, s, num) => '<path d="M' + cx + ' ' + (cy - s) + 'l' + s + ' ' + s + 'l-' + s + ' ' + s + 'l-' + s + ' -' + s + 'z" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
    '<text x="' + cx + '" y="' + (cy - s * 0.12) + '" text-anchor="middle" ' + font + ' font-size="' + (s * 0.55) + '" fill="#111">M</text>' +
    '<text x="' + cx + '" y="' + (cy + s * 0.5) + '" text-anchor="middle" ' + font + ' font-size="' + (s * 0.6) + '" fill="#111">' + num + '</text>';

  /* 1. M-61 into Gladwin */
  function nfhighway() {
    const trees = Array.from({ length: 16 }, (_, i) => pine(i * 27 - 6, 150, 46 + (i * 13) % 22, i % 2 ? "#1f4a33" : "#173b29")).join("");
    const car = '<g class="anim-train"><rect x="120" y="186" width="120" height="30" rx="10" fill="' + BLUE + '"/><rect x="146" y="168" width="70" height="24" rx="8" fill="' + BLUE + '"/>' +
      '<rect x="152" y="172" width="26" height="16" rx="3" fill="#bcd6f2"/><rect x="184" y="172" width="26" height="16" rx="3" fill="#bcd6f2"/>' +
      '<circle cx="148" cy="216" r="11" fill="#151515"/><circle cx="214" cy="216" r="11" fill="#151515"/><circle cx="148" cy="216" r="4" fill="#9aa0a6"/><circle cx="214" cy="216" r="4" fill="#9aa0a6"/>' +
      '<rect x="232" y="192" width="8" height="6" rx="2" fill="#fff3b0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nfs1)"/>' + trees +
      '<rect x="0" y="150" width="400" height="110" fill="#4b4f55"/><rect x="0" y="150" width="400" height="6" fill="#6f7a52"/>' +
      '<path d="M0 204h400" stroke="#f2d04b" stroke-width="3" stroke-dasharray="24 18"/><rect x="0" y="234" width="400" height="3" fill="#e8e8e8"/>' +
      '<rect x="292" y="58" width="6" height="96" fill="#7d8287"/><rect x="352" y="58" width="6" height="96" fill="#7d8287"/>' +
      '<rect x="250" y="20" width="146" height="76" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      mshield(280, 46, 16, "61") + '<text x="340" y="44" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">WEST</text>' +
      '<text x="323" y="84" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">Gladwin</text>' +
      car,
      sky("nfs1", "#7fb2e0", "#e8dcc4"));
  }

  /* 2. Gladwin High gym */
  function nfgym() {
    const boards = Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 170v90" stroke="#b07a3e" stroke-width="1.5"/>').join("");
    const seats = Array.from({ length: 5 }, (_, r) => '<rect x="0" y="' + (70 + r * 18) + '" width="400" height="10" fill="' + (r % 2 ? "#3a5f9e" : "#2c4c84") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1d2a44"/>' +
      '<rect x="0" y="0" width="400" height="66" fill="' + BLUE + '"/><rect x="0" y="60" width="400" height="6" fill="' + WHITE + '"/>' +
      '<text x="96" y="44" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="' + WHITE + '" stroke="#12305e" stroke-width="2" paint-order="stroke">FLYING G\'S</text>' +
      seats +
      '<rect x="0" y="170" width="400" height="90" fill="#d8a35e"/>' + boards +
      '<path d="M120 260q80 -60 160 0" stroke="' + BLUE + '" stroke-width="4" fill="none"/><path d="M0 214h400" stroke="' + WHITE + '" stroke-width="3"/>' +
      '<rect x="306" y="14" width="6" height="66" fill="#c9ced6"/><rect x="266" y="30" width="86" height="56" rx="2" fill="#f7f9fc" stroke="#9aa3b0" stroke-width="2"/><rect x="292" y="52" width="34" height="24" fill="none" stroke="' + RED + '" stroke-width="3"/>' +
      '<rect x="290" y="84" width="38" height="4" fill="' + RED + '"/>' +
      '<path class="nf-net" d="M292 88l6 26h22l6 -26" fill="none" stroke="#fff" stroke-width="1.5"/>' +
      '<g class="nf-ball"><circle cx="309" cy="70" r="11" fill="#e07a2c" stroke="#5a2a10" stroke-width="1.5"/><path d="M298 70h22M309 59v22" stroke="#5a2a10" stroke-width="1.2"/></g>' +
      '<rect x="20" y="104" width="120" height="44" rx="4" fill="#111"/><text x="80" y="122" text-anchor="middle" ' + font + ' font-size="10" fill="#ffcf4a">HOME</text>' +
      '<text x="80" y="142" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="18" fill="' + RED + '">56 - 48</text>',
      "");
  }

  /* 3. The family van */
  function nfvan() {
    const stars = Array.from({ length: 22 }, (_, i) => '<circle cx="' + ((i * 73) % 400) + '" cy="' + ((i * 37) % 90 + 8) + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" opacity=".8"/>').join("");
    const note = (x, y, cls) => '<g class="nf-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="5" fill="#ffe7a3"/><rect x="' + (x + 3.5) + '" y="' + (y - 20) + '" width="2.2" height="20" fill="#ffe7a3"/><path d="M' + (x + 5.7) + ' ' + (y - 20) + 'q8 4 6 12" stroke="#ffe7a3" stroke-width="2.2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nfs3)"/>' + stars +
      pine(20, 172, 70, "#0f2a1f") + pine(70, 172, 52, "#11301f") + pine(350, 172, 76, "#0f2a1f") + pine(390, 172, 56, "#11301f") +
      '<rect x="0" y="172" width="400" height="88" fill="#2b2f33"/><rect x="0" y="172" width="400" height="4" fill="#3d4247"/>' +
      '<path d="M86 110h170q40 0 54 26l18 34v26h-242z" fill="#8c2f2a"/><path d="M86 110h170q40 0 54 26l18 34v6h-242z" fill="#a33a33"/>' +
      '<rect x="98" y="120" width="56" height="32" rx="4" fill="#ffd77a"/><rect x="162" y="120" width="56" height="32" rx="4" fill="#3b4652"/><path d="M226 120h34q22 0 32 20l4 12h-70z" fill="#3b4652"/>' +
      '<circle class="nf-flk" cx="126" cy="124" r="4" fill="#fff6d8"/>' +
      '<rect x="108" y="134" width="30" height="14" rx="1" fill="#fbf8ef" transform="rotate(-6 123 141)"/><path d="M112 138h20M112 142h16" stroke="' + BLUE + '" stroke-width="1.4" transform="rotate(-6 123 141)"/>' +
      '<rect x="216" y="160" width="4" height="12" fill="#5a1d1a"/><rect x="86" y="176" width="242" height="8" fill="#5a1d1a"/>' +
      '<circle cx="128" cy="196" r="16" fill="#151515"/><circle cx="128" cy="196" r="6" fill="#9aa0a6"/><circle cx="282" cy="196" r="16" fill="#151515"/><circle cx="282" cy="196" r="6" fill="#9aa0a6"/>' +
      '<rect x="318" y="160" width="10" height="7" rx="2" fill="#fff3b0"/>' +
      note(140, 108, "") + note(118, 100, "nf-note2") + note(160, 104, "nf-note3"),
      sky("nfs3", "#0b1430", "#2a3a62"));
  }

  /* 4. Fine Arts Festival, Connection Church, Canton */
  function nffest() {
    const crowd = Array.from({ length: 18 }, (_, i) => '<circle cx="' + (i * 23 + 6) + '" cy="' + (238 - (i % 2) * 6) + '" r="11" fill="#141821"/><rect x="' + (i * 23 - 6) + '" y="' + (244 - (i % 2) * 6) + '" width="24" height="30" rx="8" fill="#141821"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1530"/>' +
      '<path d="M0 0h400v40q-200 30 -400 0z" fill="#5c1f2e"/><path d="M0 0v200l40 -10v-180zM400 0v200l-40 -10v-180z" fill="#6e2436"/>' +
      '<g class="nf-spot"><path d="M200 0l-70 200h140z" fill="#fff6d8" opacity=".18"/></g>' +
      '<rect x="40" y="186" width="320" height="22" fill="#3b2a22"/><rect x="40" y="186" width="320" height="4" fill="#6b4c3a"/>' +
      '<rect x="98" y="52" width="204" height="30" rx="3" fill="' + BLUE + '" stroke="' + WHITE + '" stroke-width="2"/><text x="200" y="73" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="' + WHITE + '">FINE ARTS FESTIVAL</text>' +
      '<rect x="197" y="128" width="5" height="58" fill="#555"/><rect x="186" y="184" width="28" height="4" fill="#555"/><rect x="193" y="112" width="13" height="20" rx="6" fill="#9aa0a6"/>' +
      '<g class="nf-rib"><circle cx="318" cy="112" r="20" fill="' + BLUE + '" stroke="#ffd34a" stroke-width="3"/><text x="318" y="110" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">1ST</text><text x="318" y="122" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">RAP</text>' +
      '<path d="M306 128l-6 34l10 -6l6 8l2 -34zM330 128l6 34l-10 -6l-6 8l-2 -34z" fill="' + BLUE + '"/></g>' +
      '<text x="82" y="120" text-anchor="middle" ' + font + ' font-size="11" fill="#ffd34a">CANTON, MI</text><text x="82" y="136" text-anchor="middle" ' + font + ' font-size="11" fill="#ffd34a">2008</text>' +
      crowd,
      "");
  }

  /* 5. W Cedar Ave and S Bowery Ave, Gladwin */
  function nfcorner() {
    const deco = '<g><rect x="150" y="62" width="150" height="74" fill="#e2cfa0"/><rect x="196" y="40" width="58" height="96" fill="#e9d8ab"/><rect x="210" y="28" width="30" height="14" fill="#e9d8ab"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (204 + i * 12) + '" y="50" width="6" height="56" fill="#b49b68"/>').join("") +
      [0, 1, 2].map(i => '<rect x="' + (160 + i * 12) + '" y="76" width="7" height="40" fill="#8f7a52"/><rect x="' + (268 + i * 12) + '" y="76" width="7" height="40" fill="#8f7a52"/>').join("") +
      '<rect x="212" y="112" width="26" height="24" fill="#6b5a3c"/></g>';
    const flakes = Array.from({ length: 14 }, (_, i) => '<circle class="nf-snow' + (i % 2 ? " nf-snow2" : "") + '" cx="' + (i * 29 + 8) + '" cy="' + ((i * 41) % 120) + '" r="1.8" fill="#fff" opacity=".85"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nfs5)"/>' +
      pine(30, 136, 60, "#1d3b2c") + pine(380, 136, 64, "#1d3b2c") + deco +
      '<rect x="0" y="130" width="400" height="94" fill="#41464f"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#363b43" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#363b43" stroke-width="1"/>').join("")).join("") +
      tag("NF", 40, 202, 64, WHITE, -6) + tag("REAL MUSIC", 130, 214, 20, "#7fb0ff", -4) + tag("GLADWIN", 132, 184, 16, "#ff8a7a", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 140, "W Cedar Ave") + sign(266, 124, 116, "S Bowery Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="nf-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="nf-sp"><circle cx="124" cy="168" r="3" fill="' + WHITE + '" opacity=".7"/></g><g class="nf-sp nf-sp2"><circle cx="130" cy="162" r="2" fill="' + WHITE + '" opacity=".6"/></g>' +
      flakes,
      sky("nfs5", "#23324f", "#9fb3c8"));
  }

  window.SCENES = { nfhighway: nfhighway, nfgym: nfgym, nfvan: nfvan, nffest: nffest, nfcorner: nfcorner };
})();
