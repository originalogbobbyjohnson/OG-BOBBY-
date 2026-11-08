/* wakaflocka scenes (Regions tab: Atlanta; Riverdale, Clayton County). CSS classes and ids prefixed wf- (the page's own anim-train is kept).
   1 MARTA Route 197 (Battle Creek Rd) pulling into Riverdale Town Center on Church St: the white-and-blue bus, the new city hall, the plaza's splash fountain.
   2 Georgia Aquarium downtown (in his Complex guide to Atlanta he says the dolphin show brought out the kid in him): the blue-metal ark hull and wave roofs, dolphins jumping.
   3 Busy Bee Cafe on MLK Jr Dr SW (the soul food he misses most on the road: smothered fried chicken with gravy): the little brick cafe, steam off the plate.
   4 Run N' Shoot on Metropolitan Pkwy (the gym he used to go to, where the streetball mixtape tour stopped): an indoor court, the ball bouncing, the scoreboard.
   5 Church St and Hwy 85 in Riverdale: green signs, FLOCKA tagged on the wall, downtown's stair-stepped pink Georgia-Pacific tower far off behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wfbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.wf-bus{animation:wfbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes wfglow{0%,100%{opacity:.45}50%{opacity:1}}.wf-glow{animation:wfglow 2.2s ease-in-out infinite}.wf-g2{animation-delay:-1.1s}' +
    '@keyframes wfjet{0%,100%{transform:scaleY(.4);opacity:.5}50%{transform:scaleY(1);opacity:1}}.wf-jet{transform-box:fill-box;transform-origin:50% 100%;animation:wfjet 1.1s ease-in-out infinite}.wf-j2{animation-delay:-.55s}' +
    '@keyframes wfdol{0%{transform:translate(0,40px) rotate(30deg);opacity:0}15%{opacity:1}50%{transform:translate(40px,-28px) rotate(-10deg)}85%{opacity:1}100%{transform:translate(80px,40px) rotate(-50deg);opacity:0}}.wf-dol{transform-box:fill-box;transform-origin:50% 50%;animation:wfdol 3.2s ease-in-out infinite}.wf-d2{animation-delay:-1.6s}' +
    '@keyframes wfsteam{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-30px);opacity:0}}.wf-st{animation:wfsteam 2.4s ease-out infinite}.wf-st2{animation-delay:-.8s}.wf-st3{animation-delay:-1.6s}' +
    '@keyframes wfball{0%,100%{transform:translateY(0)}50%{transform:translateY(58px)}}.wf-ball{animation:wfball .9s cubic-bezier(.5,0,.5,1) infinite}' +
    '@keyframes wfsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wf-sp{animation:wfsp 1.4s ease-out infinite}.wf-sp2{animation-delay:.45s}' +
    '@keyframes wfflame{0%,100%{transform:scale(1,1)}50%{transform:scale(1.08,.9)}}.wf-fl{transform-box:fill-box;transform-origin:50% 100%;animation:wfflame .8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="0" width="6" height="22" fill="#5a3e2a"/><path d="M0 -60l16 30h-8l14 22h-44l14 -22h-8z" fill="#1f5a34"/></g>';
  /* a 9 drawn by hand: round head + straight stem. x = left edge, y = baseline, sz = font size */
  const nine = (x, y, sz, c) => { const r = sz * 0.2, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2 + sz * 0.04) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2 + sz * 0.04) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  /* "197" centred on cx */
  const r197 = (cx, y, sz, c) => { const d = sz * 0.56, x0 = cx - 1.5 * d; return '<text x="' + (x0 + d / 2) + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + sz + '" fill="' + c + '">1</text>' + nine(x0 + d, y, sz, c) + '<text x="' + (x0 + 2.5 * d) + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + sz + '" fill="' + c + '">7</text>'; };
  const FLAME = "#ff4d1f", ICE = "#7fd6ff", GOLD = "#f5c542", BUS = "#1f4e79";

  /* 1. MARTA Route 197 at Riverdale Town Center, Church St: the bus slides in, the city hall glass and brick, the plaza splash pad */
  function wfbus() {
    const bus = '<g class="wf-bus"><rect x="34" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (74 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="40" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="34" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="34" y="181" width="236" height="4" fill="#f7941d"/>' +
      '<rect x="38" y="124" width="118" height="11" rx="2" fill="#111"/>' + r197(52, 132.6, 7.5, "#ffb84a") + '<text x="104" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">BATTLE CREEK RD</text>' +
      '<circle cx="82" cy="204" r="12" fill="#222"/><circle cx="82" cy="204" r="5" fill="#9aa1a8"/><circle cx="228" cy="204" r="12" fill="#222"/><circle cx="228" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="38" cy="190" r="3.5" fill="#fff6c2"/></g>';
    const hall = '<rect x="150" y="52" width="210" height="92" fill="#b5654a"/>' +
      '<rect x="210" y="40" width="90" height="104" fill="#cfe3ee" stroke="#7d8f9c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (228 + i * 18) + ' 40v104" stroke="#8aa2b2" stroke-width="1.5"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<path d="M210 ' + (60 + i * 22) + 'h90" stroke="#8aa2b2" stroke-width="1.5"/>').join("") +
      '<rect x="204" y="34" width="102" height="8" fill="#e9e4da"/>' +
      [160, 310].map(x => Array.from({ length: 2 }, (_, r) => '<rect x="' + x + '" y="' + (66 + r * 34) + '" width="40" height="20" fill="#2a3442"/>').join("")).join("") +
      '<text x="255" y="30" text-anchor="middle" ' + font + ' font-size="9" fill="#2a3442" letter-spacing="2">RIVERDALE TOWN CENTER</text>';
    const jets = [60, 110, 160].map((x, i) => '<rect class="wf-jet' + (i % 2 ? " wf-j2" : "") + '" x="' + (x + 230) + '" y="128" width="4" height="16" rx="2" fill="' + ICE + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wf1)"/>' +
      pine(14, 120, 1.05) + pine(54, 124, .85) + pine(100, 120, .95) + pine(388, 122, .9) +
      hall +
      '<rect x="0" y="144" width="400" height="20" fill="#d8d0c0"/><ellipse cx="320" cy="152" rx="60" ry="6" fill="#9fd3ea" opacity=".8"/>' + jets +
      '<rect x="0" y="164" width="400" height="96" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="346" y="86" width="5" height="78" fill="#6b7178"/><rect x="328" y="68" width="42" height="36" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="349" y="82" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text>' + r197(349, 97, 12, "#fff"),
      sky("wf1", "#8ec8ef", "#f6e6c4"));
  }

  /* 2. Georgia Aquarium: the blue-metal ark hull between the silver wave roofs, the dolphin pool out front, two dolphins arcing */
  function wfaquarium() {
    const dolphin = (x, y, cls) => '<g class="wf-dol ' + cls + '"><path d="M' + x + ' ' + y + 'q18 -14 40 -4q6 3 10 0q-2 6 -8 6q-18 10 -40 2z" fill="#8a9bb0" stroke="#4a5a70" stroke-width="1.5"/>' +
      '<path d="M' + (x + 20) + ' ' + (y - 8) + 'l4 -10l6 9z" fill="#6f8098"/><path d="M' + x + ' ' + y + 'l-8 -6l2 8l-4 6z" fill="#6f8098"/><circle cx="' + (x + 40) + '" cy="' + (y - 4) + '" r="1.4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wf2)"/>' +
      '<path d="M0 120q60 -40 130 -30q30 4 40 20v40H0z" fill="#c9ced6" stroke="#8a929c" stroke-width="2"/>' +
      '<path d="M230 110q10 -18 40 -22q70 -8 130 30v32H230z" fill="#c9ced6" stroke="#8a929c" stroke-width="2"/>' +
      '<path d="M120 150l20 -86q60 -20 120 0l20 86z" fill="#2f5d9a" stroke="#1a3a66" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (140 + i * 30) + ' 70l' + (-4 + i * 2) + ' 80" stroke="#3f70ae" stroke-width="2"/>').join("") +
      '<path d="M134 96q66 -18 132 0" stroke="#9fd3ea" stroke-width="3" fill="none" class="wf-glow"/>' +
      '<rect x="0" y="150" width="400" height="14" fill="#e6e1d6"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (10 + i * 34) + '" y="152" width="22" height="10" fill="#9fb4c6"/>').join("") +
      '<rect x="0" y="164" width="400" height="96" fill="#1f86c4"/>' +
      Array.from({ length: 6 }, (_, i) => '<path class="wf-glow' + (i % 2 ? " wf-g2" : "") + '" d="M' + (i * 70) + ' ' + (190 + (i % 3) * 18) + 'q15 -6 30 0t30 0" stroke="#bfe8ff" stroke-width="2" fill="none"/>').join("") +
      dolphin(110, 196, "") + dolphin(230, 200, "wf-d2") +
      '<rect x="0" y="246" width="400" height="14" fill="#d9e6ee"/>',
      sky("wf2", "#7cc0ee", "#eaf4f8"));
  }

  /* 3. The soul food cafe on MLK Jr Dr SW: small brick storefront, striped awning, OPEN glowing, a plate of smothered fried chicken steaming in front */
  function wfbusybee() {
    return svg(
      '<rect width="400" height="260" fill="url(#wf3)"/>' +
      '<rect x="40" y="40" width="320" height="140" fill="#9a3f2a"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M40 ' + (52 + r * 13) + 'h320" stroke="#82331f" stroke-width="1.2"/>').join("") +
      '<rect x="40" y="30" width="320" height="16" fill="#e9e1cf"/>' +
      '<rect x="70" y="50" width="260" height="26" rx="3" fill="#1c1c1c"/><text x="200" y="68" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" letter-spacing="3">SOUL FOOD</text>' +
      '<path d="M50 80h300l-14 24H64z" fill="#f4f0e4"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (54 + i * 30) + ' 80l' + (i < 5 ? 2 : -2) + ' 24h15l' + (i < 5 ? -2 : 2) + ' -24z" fill="#f2b100"/>').join("") +
      '<rect x="74" y="110" width="110" height="64" fill="#26323c" stroke="#e9e1cf" stroke-width="4"/><rect x="216" y="110" width="110" height="64" fill="#26323c" stroke="#e9e1cf" stroke-width="4"/>' +
      '<rect class="wf-glow" x="96" y="124" width="64" height="20" rx="4" fill="none" stroke="' + FLAME + '" stroke-width="3"/><text class="wf-glow" x="128" y="139" text-anchor="middle" ' + font + ' font-size="12" fill="' + FLAME + '">OPEN</text>' +
      '<text x="271" y="140" text-anchor="middle" ' + font + ' font-size="9" fill="#e9e1cf">MLK JR DR SW</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#5a3a28"/><rect x="0" y="180" width="400" height="6" fill="#3a2418"/>' +
      '<ellipse cx="200" cy="226" rx="92" ry="22" fill="#f6f4ee" stroke="#c9c3b6" stroke-width="2"/><ellipse cx="200" cy="224" rx="70" ry="15" fill="#efeae0"/>' +
      '<path d="M150 222q10 -18 36 -14q16 4 10 16q-22 10 -46 -2z" fill="#c07a2a" stroke="#8a4f16" stroke-width="1.5"/><path d="M196 220q12 -16 34 -10q14 6 6 16q-20 8 -40 -6z" fill="#b8701f" stroke="#8a4f16" stroke-width="1.5"/>' +
      '<path d="M154 222q30 6 76 0q-10 10 -40 10q-26 0 -36 -10z" fill="#8a5a2a" opacity=".85"/>' +
      '<ellipse cx="248" cy="226" rx="14" ry="7" fill="#f4e7b0"/><circle cx="168" cy="230" r="4" fill="#3e7d2e"/><circle cx="176" cy="232" r="3.5" fill="#4a8f36"/>' +
      [176, 200, 224].map((x, i) => '<path class="wf-st' + (i ? " wf-st" + (i + 1) : "") + '" d="M' + x + ' 206q-6 -10 0 -20q6 -10 0 -20" stroke="#fff" stroke-width="3" fill="none" opacity=".7" stroke-linecap="round"/>').join(""),
      sky("wf3", "#9fd0f0", "#f4e8cf"));
  }

  /* 4. Run N' Shoot, Metropolitan Pkwy: indoor court, wood floor with the lane painted, the hoop, ball bouncing, the scoreboard glowing */
  function wfcourt() {
    return svg(
      '<rect width="400" height="260" fill="#23262e"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 57) + ' 0v130" stroke="#2e323c" stroke-width="3"/>').join("") +
      [60, 200, 340].map((x, i) => '<rect class="wf-glow' + (i === 1 ? " wf-g2" : "") + '" x="' + (x - 26) + '" y="6" width="52" height="6" rx="3" fill="#fff8dc"/>').join("") +
      '<rect x="140" y="26" width="120" height="44" rx="4" fill="#111" stroke="#444" stroke-width="2"/><text x="170" y="56" text-anchor="middle" ' + font + ' font-size="22" fill="' + FLAME + '" class="wf-glow">88</text><text x="230" y="56" text-anchor="middle" ' + font + ' font-size="22" fill="' + ICE + '">86</text>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="7" fill="#aaa" letter-spacing="2">HOME   GUEST</text>' +
      '<rect x="0" y="130" width="400" height="130" fill="#c98a4a"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 22) + ' 130v130" stroke="#b87a3c" stroke-width="1"/>').join("") +
      '<path d="M120 260l30 -100h100l30 100" fill="' + FLAME + '" opacity=".75"/><path d="M150 160h100" stroke="#fff" stroke-width="3"/><ellipse cx="200" cy="160" rx="50" ry="10" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<path d="M0 230q200 -60 400 0" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<rect x="196" y="72" width="8" height="90" fill="#555"/><rect x="160" y="80" width="80" height="50" rx="2" fill="#f4f4f4" stroke="#999" stroke-width="2"/><rect x="186" y="98" width="28" height="20" fill="none" stroke="' + FLAME + '" stroke-width="2.5"/>' +
      '<ellipse cx="200" cy="124" rx="16" ry="4" fill="none" stroke="' + FLAME + '" stroke-width="3"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (186 + i * 5.6) + ' 126l' + (i < 3 ? 2 : -2) + ' 16" stroke="#fff" stroke-width="1.2"/>').join("") +
      '<g class="wf-ball"><circle cx="292" cy="160" r="13" fill="#e07020" stroke="#5a2a0a" stroke-width="2"/><path d="M279 160h26M292 147v26M283 150q9 10 0 20M301 150q-9 10 0 20" stroke="#5a2a0a" stroke-width="1.5" fill="none"/></g>' +
      '<ellipse cx="292" cy="234" rx="16" ry="4" fill="#000" opacity=".25"/>',
      "");
  }

  /* 5. Church St and Hwy 85 in Riverdale at dusk: green signs, FLOCKA tagged with a flame, downtown's pink Georgia-Pacific stair-step tower far off */
  function wfcorner() {
    const gp = '<g fill="#c98a8a" opacity=".9"><path d="M200 40h22v6h6v8h6v8h6v8h6v62H200z"/></g>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M202 ' + (48 + r * 9) + 'h' + (20 + Math.min(r, 4) * 6) + '" stroke="#e8b8b0" stroke-width="1.2" opacity=".7"/>').join("");
    const skyline = '<g fill="#3a2a46">' +
      '<rect x="120" y="96" width="24" height="44"/><rect x="148" y="84" width="20" height="56"/><rect x="172" y="100" width="22" height="40"/><rect x="252" y="92" width="22" height="48"/><rect x="278" y="104" width="26" height="36"/></g>';
    const flame = '<g class="wf-fl"><path d="M300 200q-22 -18 -8 -44q4 14 12 16q-4 -22 12 -36q-2 22 12 34q10 10 4 30z" fill="' + FLAME + '" stroke="#000" stroke-width="2.5"/><path d="M308 198q-8 -10 0 -22q6 10 10 10q4 6 0 12z" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wf5)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="' + (i % 4 ? "" : "wf-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 41) % 36) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      skyline + gp +
      '<g fill="#14261c">' + [0, 40, 330, 366].map((x, i) => '<path d="M' + (x + 20) + ' ' + (82 + (i % 2) * 8) + 'l22 58h-44z"/>').join("") + '</g>' +
      '<rect x="0" y="140" width="400" height="84" fill="#6e6a62"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 140v84" stroke="#625e56" stroke-width="2"/>').join("") +
      tag("BRICK SQUAD", 22, 162, 16, ICE, -3) + tag("FLOCKA", 18, 206, 52, FLAME, -6) + flame + tag("WAKA 2016", 30, 220, 14, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="366" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 96, "Church St") + sign(316, 124, 70, "Hwy 85") +
      '<g class="wf-sp"><circle cx="232" cy="168" r="3" fill="' + FLAME + '" opacity=".7"/></g><g class="wf-sp wf-sp2"><circle cx="238" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("wf5", "#1a1030", "#e0743a"));
  }

  window.SCENES = { wfbus: wfbus, wfaquarium: wfaquarium, wfbusybee: wfbusybee, wfcourt: wfcourt, wfcorner: wfcorner };
})();
