/* plo scenes (Regions tab: The Bay Area; Pinole). CSS classes prefixed pl- (the page's own anim-train is kept). No 9s drawn as text. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes plglow{0%,100%{opacity:.4}50%{opacity:1}}.pl-glow{animation:plglow 2.2s ease-in-out infinite}.pl-g2{animation-delay:-1.1s}' +
    '@keyframes plbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.pl-bob{animation:plbob 2.4s ease-in-out infinite}' +
    '@keyframes plsweep{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.pl-sw{transform-box:fill-box;transform-origin:50% 0%;animation:plsweep 4s ease-in-out infinite}.pl-sw2{animation-delay:-2s}' +
    '@keyframes pldrift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.pl-drift{animation:pldrift 26s linear infinite}.pl-d2{animation-duration:38s;animation-delay:-14s}' +
    '@keyframes plcircle{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.pl-hawk{transform-box:view-box;transform-origin:250px 70px;animation:plcircle 9s linear infinite}' +
    '@keyframes plsail{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.pl-sail{animation:plsail 12s ease-in-out infinite}' +
    '@keyframes plsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.pl-sway{transform-box:fill-box;transform-origin:50% 100%;animation:plsway 3.4s ease-in-out infinite}' +
    '@keyframes plspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pl-sp{animation:plspray 1.4s ease-out infinite}.pl-sp2{animation-delay:.45s}' +
    '@keyframes plpump{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.pl-pump{transform-box:fill-box;transform-origin:50% 50%;animation:plpump .5s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const pill = (x, y, txt, color) => { const w = txt.length > 2 ? 28 : 22; return '<rect x="' + x + '" y="' + (y - 9) + '" width="' + w + '" height="18" rx="9" fill="' + color + '" stroke="#fff" stroke-width="1.2"/><text x="' + (x + w / 2) + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>'; };
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "pl-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-4 -50 4 -96" stroke="#4a3a2c" stroke-width="5" fill="none"/><g transform="translate(4 -96)"><g class="pl-sway">' +
    [-70, -30, 10, 50, 90, 130, 170, 210].map(a => '<path d="M0 0q' + (Math.cos(a * Math.PI / 180) * 18).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 18 - 8).toFixed(1) + ' ' + (Math.cos(a * Math.PI / 180) * 34).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 34 + 6).toFixed(1) + '" stroke="#2a4a30" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g></g></g>';
  const oak = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0v-22" stroke="#4a3626" stroke-width="5"/><path d="M0 -14l-10 -10M0 -16l9 -9" stroke="#4a3626" stroke-width="3"/>' +
    '<ellipse cx="0" cy="-34" rx="30" ry="16" fill="' + (c || "#4f6b34") + '"/><ellipse cx="-16" cy="-28" rx="16" ry="11" fill="' + (c || "#4f6b34") + '"/><ellipse cx="17" cy="-28" rx="16" ry="11" fill="' + (c || "#4f6b34") + '"/></g>';
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="26" ry="9" fill="#fff" opacity=".85"/><ellipse cx="-10" cy="-6" rx="13" ry="9" fill="#fff" opacity=".85"/><ellipse cx="10" cy="-8" rx="15" ry="10" fill="#fff" opacity=".85"/></g></g>';
  const MAG = "#ff4fd8", GOLD = "#ffd23f", BLUE = "#3fa9ff";
  /* WestCAT has no official route colors; these badge colors are the game's own */
  const R = { JL: "#1f7a3a", JR: "#c8102e", JPX: "#0057b8", C3: "#7a3fa0", "16": "#e87722" };

  /* 1. WestCAT stop at San Pablo Ave & Appian Way, Old Town Pinole: the low storefronts, the golden Pinole hills behind, the stop pole with the black sign + route badges, a white WestCAT bus pulling in */
  function plostation() {
    const bus = '<g class="anim-train"><rect x="20" y="140" width="250" height="68" rx="9" fill="#f6f6f4" stroke="#8a9198" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (66 + i * 40) + '" y="152" width="34" height="26" rx="3" fill="#22303c"/>').join("") +
      '<rect x="26" y="152" width="30" height="50" rx="2" fill="#22303c"/><path d="M20 184h250v6H20z" fill="#0057b8"/><path d="M20 191h250v3H20z" fill="#2bb3a3"/>' +
      '<rect x="24" y="142" width="120" height="10" rx="2" fill="#111"/><text x="84" y="150" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">JPX  HERCULES TRANSIT CTR</text>' +
      '<circle cx="66" cy="208" r="12" fill="#222"/><circle cx="66" cy="208" r="5" fill="#9aa1a8"/><circle cx="226" cy="208" r="12" fill="#222"/><circle cx="226" cy="208" r="5" fill="#9aa1a8"/><circle cx="24" cy="198" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pl1)"/>' + cloud(80, 30, 1, "pl-drift") + cloud(260, 44, .8, "pl-drift pl-d2") +
      /* golden hills */
      '<path d="M0 92q60 -40 130 -18q60 -30 130 -6q70 -26 140 0V130H0z" fill="#c9a45c"/><path d="M0 108q90 -24 190 -8q110 -20 210 4V130H0z" fill="#b38b48"/>' +
      oak(60, 104, .5, "#5d6f3a") + oak(300, 100, .45, "#5d6f3a") +
      /* Old Town storefronts */
      '<rect x="0" y="96" width="78" height="44" fill="#a8553c"/><rect x="0" y="92" width="78" height="6" fill="#7e3a28"/>' + [8, 30, 52].map(x => '<rect x="' + x + '" y="102" width="16" height="12" fill="#f3d9a4" class="pl-glow pl-g2"/>').join("") +
      '<rect x="78" y="104" width="90" height="36" fill="#e5d3b0"/><rect x="78" y="100" width="90" height="6" fill="#bfa77c"/><rect x="84" y="110" width="78" height="10" fill="#2f5c7a"/><text x="123" y="118" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">OLD TOWN PINOLE</text>' +
      '<rect x="168" y="98" width="70" height="42" fill="#5a7a8c"/><rect x="168" y="94" width="70" height="6" fill="#3e5866"/>' + [176, 200, 222].map(x => '<rect x="' + x + '" y="104" width="12" height="12" fill="#f3d9a4"/>').join("") +
      '<rect x="238" y="106" width="80" height="34" fill="#d9b48a"/><rect x="238" y="102" width="80" height="6" fill="#a5845e"/><path d="M244 120h68l-6 -8h-56z" fill="#c8323f"/>' +
      '<rect x="318" y="100" width="82" height="40" fill="#8c6a4f"/>' + palm(372, 140, .7) +
      /* street + sidewalk */
      '<rect x="0" y="140" width="400" height="12" fill="#cfc8bc"/><rect x="0" y="152" width="400" height="108" fill="#4a4a50"/><path d="M0 232h400" stroke="#e8d24a" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      /* stop pole + black sign */
      '<rect x="318" y="78" width="5" height="160" fill="#7d838a"/><rect x="282" y="80" width="112" height="56" rx="4" fill="#111" stroke="#666" stroke-width="1"/>' +
      '<text x="338" y="96" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">San Pablo Av</text><text x="338" y="108" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">&amp; Appian Way</text>' +
      pill(286, 124, "JL", R.JL) + pill(310, 124, "JR", R.JR) + pill(334, 124, "JPX", R.JPX) + pill(364, 124, "C3", R.C3) +
      '<rect x="300" y="140" width="44" height="14" rx="2" fill="#0057b8"/><text x="322" y="150.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">WestCAT</text>' + pill(348, 147, "16", R["16"]),
      sky("pl1", "#5aa6d8", "#f3d6a0"));
  }

  /* 2. Pinole Valley High School theater, May 7, 2025: the Key to the City ceremony on his birthday. Blue curtains, spotlights sweeping, the podium, a giant gold key floating over the stage, P-LO DAY banner */
  function ploschool() {
    return svg(
      '<rect width="400" height="260" fill="#120c1c"/>' +
      /* curtains */
      '<path d="M0 0h400v20H0z" fill="#1d3f8a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 20q20 14 40 0" fill="#1d3f8a"/>').join("") +
      '<path d="M0 20q30 80 10 200H0z" fill="#183577"/><path d="M400 20q-30 80 -10 200H400z" fill="#183577"/>' +
      [0, 12, 24, 376, 388].map(x => '<path d="M' + x + ' 20v196" stroke="#132a60" stroke-width="3"/>').join("") +
      /* back wall + banner */
      '<rect x="40" y="34" width="320" height="150" fill="#22193a"/>' +
      '<rect x="90" y="44" width="220" height="30" rx="3" fill="' + GOLD + '"/><text x="200" y="65" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#1b1030">P-LO DAY · MAY 7</text>' +
      '<text x="200" y="90" text-anchor="middle" ' + font + ' font-size="10" fill="#cfd6ff" letter-spacing="2">PINOLE VALLEY HIGH · SPARTANS</text>' +
      /* spotlights */
      '<g class="pl-sw"><path d="M110 0l-40 190h80z" fill="#fff" opacity=".09"/></g><g class="pl-sw pl-sw2"><path d="M290 0l-40 190h80z" fill="#fff" opacity=".09"/></g>' +
      /* giant key */
      '<g class="pl-bob"><circle cx="150" cy="132" r="22" fill="none" stroke="' + GOLD + '" stroke-width="9"/><circle cx="150" cy="132" r="8" fill="' + GOLD + '"/>' +
      '<rect x="170" y="127" width="96" height="10" rx="2" fill="' + GOLD + '"/><rect x="238" y="137" width="8" height="14" fill="' + GOLD + '"/><rect x="254" y="137" width="8" height="10" fill="' + GOLD + '"/>' +
      '<path d="M140 116l8 -6" stroke="#fff6c2" stroke-width="3" stroke-linecap="round"/></g>' +
      /* stage + podium + mic */
      '<rect x="20" y="184" width="360" height="18" fill="#5a3a24"/><rect x="20" y="182" width="360" height="4" fill="#7a5234"/>' +
      '<path d="M300 184l6 -44h36l6 44z" fill="#3a2a1c" stroke="#8a6a44" stroke-width="2"/><rect x="302" y="134" width="44" height="8" fill="#4a3624"/><path d="M324 134l-6 -16" stroke="#999" stroke-width="2.5"/><rect x="313" y="110" width="8" height="10" rx="4" fill="#666"/>' +
      /* crowd seats */
      '<rect x="0" y="202" width="400" height="58" fill="#0b0814"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 21 - 4) + ' 260v-34q10 -10 20 0v34" fill="#1e1830"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<path class="pl-bob" d="M' + (30 + i * 64) + ' 232v-16" stroke="#2c2444" stroke-width="5" stroke-linecap="round" style="animation-delay:-' + (i * .4) + 's"/>').join(""));
  }

  /* 3. The Bernardo Fernandez House (c. 1894) at 100 Tennent Ave, Old Town Pinole: Second Empire Victorian, central mansard pavilion with arched dormers, slanted bay with a pedimented gable on the left, stick trim, picket fence */
  function plomansion() {
    const win = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#3a4658" stroke="#fbf8ef" stroke-width="2.5"/><path d="M' + (x - 3) + ' ' + (y - 3) + 'h' + (w + 6) + '" stroke="#fbf8ef" stroke-width="4"/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + 'M' + x + ' ' + (y + h / 2) + 'h' + w + '" stroke="#fbf8ef" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pl3)"/>' + cloud(60, 34, 1.1, "pl-drift") + cloud(300, 26, .8, "pl-drift pl-d2") +
      '<path d="M0 150q100 -24 200 -8q100 -18 200 6V200H0z" fill="#a9b37a"/>' +
      palm(48, 196, .9) + oak(356, 196, .9, "#3f5f34") +
      /* main body */
      '<rect x="100" y="96" width="210" height="100" fill="#efe2bf"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (104 + i * 17) + ' 96v100" stroke="#e2d2a8" stroke-width="1"/>').join("") +
      '<path d="M100 146h210" stroke="#fbf8ef" stroke-width="3"/><path d="M96 96h218" stroke="#fbf8ef" stroke-width="5"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (100 + i * 15) + '" y="96" width="5" height="6" fill="#fbf8ef"/>').join("") +
      /* left slanted bay with pedimented gable */
      '<path d="M100 60h56v136h-56z" fill="#f3e7c8"/><path d="M94 62l34 -24l34 24z" fill="#efe2bf" stroke="#fbf8ef" stroke-width="3"/><circle cx="128" cy="52" r="5" fill="#3a4658" stroke="#fbf8ef" stroke-width="1.5"/>' +
      win(112, 72, 32, 40) + win(112, 154, 32, 34) +
      /* central mansard pavilion */
      '<path d="M190 96v-40l8 -14h56l8 14v40z" fill="#5d6470"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (194 + i * 12) + ' ' + (58 + (i % 2) * 2) + 'l6 5l6 -5" stroke="#4a515c" stroke-width="1.5" fill="none"/>').join("") +
      '<path d="M190 56h72" stroke="#fbf8ef" stroke-width="3"/><path d="M196 42h60" stroke="#fbf8ef" stroke-width="3"/>' +
      '<path d="M214 96v-24q12 -12 24 0v24z" fill="#3a4658" stroke="#fbf8ef" stroke-width="2.5"/>' +
      win(176, 108, 22, 32) + win(254, 108, 22, 32) + win(284, 108, 20, 32) + win(176, 154, 22, 32) + win(284, 154, 20, 32) +
      /* door + porch steps */
      '<rect x="218" y="150" width="20" height="46" fill="#6a3d24" stroke="#fbf8ef" stroke-width="2.5"/><path d="M212 150h32" stroke="#fbf8ef" stroke-width="4"/>' +
      '<rect x="206" y="196" width="44" height="5" fill="#cfc6b0"/><rect x="200" y="201" width="56" height="5" fill="#bdb49e"/>' +
      /* lawn + fence */
      '<rect x="0" y="206" width="400" height="54" fill="#6f8f45"/><path d="M228 206l-30 54h60z" fill="#d8ceb4"/>' +
      Array.from({ length: 30 }, (_, i) => (i > 13 && i < 17) ? "" : '<path d="M' + (4 + i * 13.5) + ' 238v-16l3 -4l3 4v16z" fill="#fbf8ef"/>').join("") + '<path d="M0 228h190M266 228h134" stroke="#fbf8ef" stroke-width="3"/>' +
      /* birds */
      '<g class="pl-drift"><path d="M40 70q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="pl-drift pl-d2"><path d="M20 50q4 -4 8 0q4 -4 8 0" stroke="#333" stroke-width="1.8" fill="none"/></g>',
      sky("pl3", "#7fbfe8", "#e8f2f4"));
  }

  /* 4. Pinole Valley Park: golden summer hills, valley oaks, the fire road climbing, Pinole Creek in the willows, a red-tailed hawk circling */
  function plohills() {
    return svg(
      '<rect width="400" height="260" fill="url(#pl4)"/>' + cloud(120, 36, .9, "pl-drift") +
      '<circle cx="330" cy="46" r="20" fill="#fff4c4" opacity=".9"/>' +
      '<path d="M0 120q70 -60 150 -30q70 -40 140 -10q60 -30 110 0V260H0z" fill="#c8a157"/>' +
      '<path d="M0 160q90 -50 200 -20q110 -40 200 0V260H0z" fill="#d9b468"/>' +
      '<path d="M0 200q120 -36 230 -12q100 -22 170 4V260H0z" fill="#b8913f"/>' +
      /* fire road */
      '<path d="M120 260q30 -40 80 -60q60 -24 90 -66q14 -20 30 -30" stroke="#e8d8b0" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      oak(60, 168, 1.1) + oak(250, 150, .8) + oak(350, 190, 1.2, "#44602e") + oak(180, 120, .55) + oak(310, 104, .5) +
      /* creek + willows */
      '<path d="M0 238q60 -12 120 4t140 -6t140 8V260H0z" fill="#5f8fa8"/><path d="M20 244q30 -4 60 0M180 246q30 -4 60 0" stroke="#bfe0ee" stroke-width="2" class="pl-glow"/>' +
      [30, 96, 210, 300, 370].map(x => '<path class="pl-sway" d="M' + x + ' 240q-2 -20 0 -34M' + (x - 6) + ' 240q-6 -16 -4 -28M' + (x + 6) + ' 240q6 -16 4 -28" stroke="#5c7a3a" stroke-width="3" fill="none"/>').join("") +
      /* hawk */
      '<g class="pl-hawk"><path d="M250 30q-10 -6 -20 0q8 -2 14 4l6 -2l6 2q6 -6 14 -4q-10 -6 -20 0z" fill="#5a3a22"/><path d="M247 32l3 6l3 -6z" fill="#b5482a"/></g>',
      sky("pl4", "#6fb2e0", "#f1e2b8"));
  }

  /* 5. The corner: Tennent Ave and San Pablo Ave in Old Town Pinole, P-LO tagged on the wall, San Pablo Bay at sunset with Mount Tamalpais across the water, a sailboat drifting */
  function plocorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pl5)"/>' + stars(8) +
      /* Mount Tam across the bay */
      '<path d="M120 112l40 -26l22 10l30 -30l26 22l18 -6l40 30z" fill="#4a3a5e"/><path d="M0 112q60 -10 120 0h240q20 -4 40 0V118H0z" fill="#4a3a5e"/>' +
      '<circle cx="56" cy="106" r="16" fill="#ffcf7a" opacity=".9"/>' +
      /* bay */
      '<rect x="0" y="112" width="400" height="30" fill="#6b5a8c"/><path d="M200 116h100M220 124h70M236 132h40" stroke="#ffcf7a" stroke-width="2" opacity=".7"/>' +
      '<g class="pl-sail"><path d="M90 136h24l-4 5h-16z" fill="#222"/><path d="M101 134v-20l10 18z" fill="#f4f0e6"/><path d="M100 134v-16l-7 14z" fill="#e8e0d0"/></g>' +
      /* wall */
      '<rect x="0" y="140" width="400" height="86" fill="#8c5a8a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 140v86" stroke="#7a4c78" stroke-width="2"/>').join("") +
      tag("P-LO", 24, 206, 54, GOLD, -6) + tag("SAME SQUAD", 160, 160, 18, BLUE, -4) + tag("HBK", 190, 212, 26, MAG, -5) + tag("BRING THE BASS BACK", 18, 222, 12, "#fff", -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55525a"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="352" y="92" width="6" height="134" fill="#2f2f2f"/>' + sign(306, 94, 92, "Tennent Ave") + sign(298, 120, 100, "San Pablo Ave") +
      '<g class="pl-sp"><circle cx="140" cy="176" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="pl-sp pl-sp2"><circle cx="146" cy="170" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("pl5", "#1a1238", "#e08060"));
  }

  window.SCENES = { plostation: plostation, ploschool: ploschool, plomansion: plomansion, plohills: plohills, plocorner: plocorner };
})();
