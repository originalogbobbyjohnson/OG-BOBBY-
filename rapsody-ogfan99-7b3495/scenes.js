/* rapsody scenes (Regions tab: The Carolinas; Snow Hill, Greene County NC / Raleigh). CSS classes prefixed rp- (the page's own anim-train is kept).
   1 Wilson, NC Amtrak station, the nearest rail stop to Snow Hill: the 1924 red-brick depot with its long canopy, a silver Amtrak train with the red-white-blue stripe sliding in.
   2 NC State's Memorial Belltower in Raleigh, where she found hip hop and Kooley High at school: pale granite Gothic tower, top lit red, birds circling.
   3 A Snow Hill porch at golden hour (Laila's Wisdom: "give me my flowers while I'm here"): rocking chair rocking, flowers in pots, tobacco rows out back, butterflies.
   4 The celebrity game court in Charlotte (2019 All-Star weekend, "Home" team won): hardwood, a no-look pass arcing to the rim, scoreboard blinking.
   5 N Greene St and W 2nd St, Snow Hill: green signs, RAPSODY tagged on the brick, the Greene County Courthouse (1935 brick, white Doric portico) behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rpflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.rp-flk{animation:rpflick 2.2s infinite}.rp-flk2{animation-delay:.7s}' +
    '@keyframes rpbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-30px)}}.rp-bird{animation:rpbird 12s linear infinite}.rp-bird2{animation-delay:-6s}' +
    '@keyframes rpglow{0%,100%{opacity:.55}50%{opacity:1}}.rp-glow{animation:rpglow 2.4s ease-in-out infinite}' +
    '@keyframes rprock{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.rp-rock{transform-box:fill-box;transform-origin:50% 100%;animation:rprock 2.6s ease-in-out infinite}' +
    '@keyframes rpfly{0%{transform:translate(0,0)}25%{transform:translate(30px,-14px)}50%{transform:translate(60px,4px)}75%{transform:translate(30px,12px)}100%{transform:translate(0,0)}}.rp-fly{animation:rpfly 6s ease-in-out infinite}.rp-fly2{animation-delay:-3s}' +
    '@keyframes rpwing{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.3)}}.rp-wing{transform-box:fill-box;transform-origin:50% 50%;animation:rpwing .4s linear infinite}' +
    '@keyframes rppass{0%{transform:translate(0,0)}50%{transform:translate(110px,-70px)}100%{transform:translate(220px,-20px)}}.rp-ball{animation:rppass 2.4s ease-in-out infinite}' +
    '@keyframes rpblink{0%,100%{opacity:.25}50%{opacity:1}}.rp-bl{animation:rpblink 1.2s ease-in-out infinite}.rp-bl2{animation-delay:-.6s}' +
    '@keyframes rpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rp-sp{animation:rpspray 1.4s ease-out infinite}.rp-sp2{animation-delay:.45s}' +
    '@keyframes rpcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.rp-car{animation:rpcar 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '" stroke="#fff" stroke-width="1"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#f4c95d", ROSE = "#e05d8c", TEAL = "#4fb3a9";
  const bricks = (x, y, w, h, base, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>';
    for (let r = 0; r * 7 < h; r++) {
      s += '<path d="M' + x + ' ' + (y + r * 7) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>';
      for (let c = 0; c * 22 < w; c++) { const bx = x + c * 22 + (r % 2) * 11; if (bx < x + w) s += '<path d="M' + bx + ' ' + (y + r * 7) + 'v7" stroke="' + line + '" stroke-width="1"/>'; }
    }
    return s;
  };

  /* 1. Wilson station, Amtrak */
  function rpstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="134" width="32" height="18" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="20" y="124" width="340" height="62" rx="8" fill="#d4d8dc" stroke="#7a828a" stroke-width="2"/>' + win +
      '<rect x="20" y="160" width="340" height="5" fill="#c8102e"/><rect x="20" y="165" width="340" height="3" fill="#fff"/><rect x="20" y="168" width="340" height="5" fill="#1f4e79"/>' +
      '<path d="M340 124h12q8 0 8 10v52h-20z" fill="#bfc5ca"/><circle cx="352" cy="176" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rps1)"/>' +
      '<g fill="#5d6b4a" opacity=".7"><circle cx="20" cy="96" r="22"/><circle cx="60" cy="90" r="26"/><circle cx="360" cy="92" r="24"/><circle cx="392" cy="100" r="18"/></g>' +
      bricks(90, 56, 220, 60, "#9c3f2b", "#7e3020") +
      '<path d="M80 58L200 26 320 58z" fill="#5a4a42"/><path d="M80 58h240" stroke="#3b2f2a" stroke-width="3"/>' +
      [110, 150, 230, 270].map(x => '<rect x="' + x + '" y="72" width="20" height="30" fill="#f6dfa3" opacity=".9"/><path d="M' + x + ' 87h20M' + (x + 10) + ' 72v30" stroke="#7e3020" stroke-width="1.5"/>').join("") +
      '<rect x="184" y="68" width="32" height="48" fill="#3b2a22"/>' +
      '<rect x="0" y="112" width="400" height="8" fill="#4b3f38"/>' + [30, 130, 270, 370].map(x => '<rect x="' + (x - 3) + '" y="112" width="6" height="12" fill="#3a3330"/>').join("") +
      '<g class="rp-flk"><rect x="60" y="118" width="30" height="3" fill="#fff3c4"/></g><g class="rp-flk rp-flk2"><rect x="300" y="118" width="30" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="190" width="400" height="8" fill="#f2c200"/><rect x="0" y="198" width="400" height="62" fill="#a39d92"/><path d="M0 228h400" stroke="#8f897e" stroke-width="2"/>' +
      '<rect x="110" y="206" width="180" height="34" rx="3" fill="#111"/><text x="126" y="229" ' + font + ' font-size="18" fill="#fff">Wilson</text>' + badge(222, 223, "AMTK", "#1f4e79"),
      sky("rps1", "#2b3a66", "#f0b27a"));
  }

  /* 2. Memorial Belltower, NC State */
  function rpbelltower() {
    const stone = "#e9e4d8", shade = "#cfc8b8";
    return svg(
      '<rect width="400" height="260" fill="url(#rps2)"/>' +
      '<g class="rp-bird"><path d="M20 50q6 -6 12 0q6 -6 12 0" stroke="#2a2a3a" stroke-width="2" fill="none"/></g><g class="rp-bird rp-bird2"><path d="M50 74q5 -5 10 0q5 -5 10 0" stroke="#2a2a3a" stroke-width="2" fill="none"/></g>' +
      '<g fill="#3d5a3a"><circle cx="40" cy="196" r="34"/><circle cx="90" cy="206" r="28"/><circle cx="320" cy="198" r="32"/><circle cx="370" cy="204" r="30"/></g>' +
      '<rect x="168" y="70" width="64" height="150" fill="' + stone + '"/><rect x="168" y="70" width="14" height="150" fill="' + shade + '"/>' +
      '<rect x="160" y="60" width="80" height="14" fill="' + stone + '"/>' +
      '<path d="M164 60l6 -24 6 24zM224 60l6 -24 6 24zM188 60l6 -18 6 18zM200 60l6 -18 6 18z" fill="' + stone + '"/>' +
      '<path d="M176 60L200 8 224 60z" fill="' + stone + '"/><path d="M176 60L200 8v52z" fill="' + shade + '"/>' +
      '<g class="rp-glow"><path d="M176 60L200 8 224 60z" fill="#e0303a" opacity=".75"/><path d="M164 60l6 -24 6 24zM224 60l6 -24 6 24z" fill="#e0303a" opacity=".6"/></g>' +
      '<path d="M190 96q10 -16 20 0v40h-20z" fill="#3a3f4a"/><path d="M200 82v54" stroke="' + shade + '" stroke-width="2"/>' +
      '<path d="M184 170q16 -26 32 0v50h-32z" fill="#4a3426"/>' +
      '<rect x="150" y="218" width="100" height="10" fill="' + shade + '"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#8b5a3c"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 226v34" stroke="#744a30" stroke-width="1"/>').join("") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fdf3e0">RALEIGH · NC STATE</text>',
      sky("rps2", "#1c2347", "#e7845e"));
  }

  /* 3. Snow Hill porch */
  function rpporch() {
    const rows = Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'q200 -6 400 0" stroke="#5f8a3a" stroke-width="5" fill="none"/>').join("");
    const pot = (x, c) => '<path d="M' + x + ' 196h22l-4 20h-14z" fill="#b5572e"/>' + [0, 7, 14, 21].map((d, i) => '<circle cx="' + (x + 2 + d * .9) + '" cy="' + (190 - (i % 2) * 5) + '" r="5" fill="' + c + '"/>').join("") + '<circle cx="' + (x + 11) + '" cy="188" r="2.5" fill="#ffd34d"/>';
    const fly = (cls, x, y, c) => '<g class="rp-fly ' + cls + '"><g class="rp-wing"><path d="M' + x + ' ' + y + 'l-7 -6v12zM' + x + ' ' + y + 'l7 -6v12z" fill="' + c + '"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rps3)"/>' +
      '<circle cx="320" cy="70" r="26" fill="#ffd27a" opacity=".9"/>' +
      '<rect x="0" y="118" width="400" height="70" fill="#7aa34a"/>' + rows +
      '<g fill="#3e5a2a"><circle cx="30" cy="112" r="16"/><circle cx="380" cy="108" r="20"/></g>' +
      '<path d="M0 60h250v18H0z" fill="#e8e2d2"/><path d="M0 60L130 30 260 60z" fill="#6b4f3a"/>' +
      [20, 110, 200].map(x => '<rect x="' + x + '" y="78" width="8" height="112" fill="#f4f0e4"/>').join("") +
      '<rect x="250" y="188" width="150" height="72" fill="#6f9a40"/><path d="M250 214h150M250 238h150" stroke="#5f8a3a" stroke-width="3"/>' + '<rect x="0" y="188" width="250" height="12" fill="#a77b52"/><rect x="0" y="200" width="250" height="60" fill="#8a6440"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 22) + ' 200v60" stroke="#76542f" stroke-width="1"/>').join("") +
      '<path d="M0 150h250" stroke="#f4f0e4" stroke-width="4"/>' + Array.from({ length: 24 }, (_, i) => '<path d="M' + (i * 10 + 4) + ' 150v38" stroke="#f4f0e4" stroke-width="2"/>').join("") +
      '<g class="rp-rock"><path d="M60 140v48M100 140v48" stroke="#5a3a22" stroke-width="5"/><rect x="58" y="160" width="46" height="8" fill="#6b4529"/><path d="M60 140h40M60 150h40" stroke="#6b4529" stroke-width="4"/><path d="M48 192q32 10 64 0" stroke="#5a3a22" stroke-width="5" fill="none"/></g>' +
      pot(140, ROSE) + pot(176, GOLD) + pot(270, "#b06bd6") + pot(330, ROSE) +
      fly("", 290, 120, GOLD) + fly("rp-fly2", 180, 104, "#ff9fc3") +
      '<text x="330" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff7e6">SNOW HILL, NC</text>',
      sky("rps3", "#f6a35c", "#fbe3b0"));
  }

  /* 4. Celebrity game court, Charlotte */
  function rpcourt() {
    let floor = "";
    for (let i = 0; i < 20; i++) floor += '<rect x="' + (i * 20) + '" y="160" width="20" height="100" fill="' + (i % 2 ? "#d9a566" : "#cf9a5a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rps4)"/>' +
      Array.from({ length: 80 }, (_, i) => '<circle cx="' + ((i * 41) % 400) + '" cy="' + (70 + (i * 17) % 70) + '" r="2.4" fill="' + [TEAL, "#ffffff", "#6a4c93", "#e8e2c8"][i % 4] + '" opacity=".5"/>').join("") +
      '<rect x="150" y="10" width="100" height="40" rx="4" fill="#111" stroke="#555" stroke-width="2"/><text x="175" y="28" ' + font + ' font-size="9" fill="#ffd34d">HOME</text><text x="208" y="28" ' + font + ' font-size="9" fill="#ffd34d">AWAY</text>' +
      '<g class="rp-bl"><text x="183" y="44" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="13" fill="#ff5a3c">82</text></g><g class="rp-bl rp-bl2"><text x="217" y="44" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="13" fill="#ff5a3c">71</text></g>' +
      '<rect x="0" y="150" width="400" height="10" fill="#1d1d1d"/>' + floor +
      '<path d="M250 160h150v100H230z" fill="' + TEAL + '" opacity=".85"/><path d="M250 160h150M250 160L230 260" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<path d="M0 230q120 -20 230 30" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<rect x="356" y="56" width="6" height="104" fill="#666"/><rect x="316" y="56" width="48" height="36" rx="2" fill="#f4f6f8" stroke="#bbb" stroke-width="2"/><rect x="328" y="70" width="18" height="14" fill="none" stroke="' + ROSE + '" stroke-width="2"/>' +
      '<ellipse cx="333" cy="90" rx="13" ry="3.5" fill="none" stroke="#ff6a1a" stroke-width="3"/><path d="M321 91l4 14h16l4 -14M327 91l2 14M333 91v14M339 91l-2 14" stroke="#fff" stroke-width="1.3" fill="none"/>' +
      '<g class="rp-ball"><circle cx="100" cy="118" r="8" fill="#e9772b" stroke="#6b3311" stroke-width="1.5"/><path d="M92 118h16M100 110v16" stroke="#6b3311" stroke-width="1.2"/></g>' +
      '<text x="80" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2410">CHARLOTTE</text>',
      sky("rps4", "#141020", "#2c2440"));
  }

  /* 5. N Greene St and W 2nd St, Snow Hill */
  function rpcorner() {
    const cols = [148, 166, 184, 202, 220].map(x => '<rect x="' + x + '" y="62" width="8" height="54" fill="#f4f1e8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rps5)"/>' +
      '<g fill="#2b3a2a"><circle cx="30" cy="110" r="26"/><circle cx="370" cy="104" r="30"/></g>' +
      bricks(90, 50, 210, 76, "#a4442e", "#86351f") +
      [102, 124, 250, 272].map(x => '<rect x="' + x + '" y="62" width="14" height="22" fill="#f6dfa3" opacity=".85"/><rect x="' + x + '" y="92" width="14" height="22" fill="#f6dfa3" opacity=".85"/>').join("") +
      '<path d="M138 50L189 24 240 50z" fill="#f4f1e8"/><path d="M146 48L189 30 232 48z" fill="#e2ddd0"/><rect x="138" y="50" width="102" height="10" fill="#f4f1e8"/>' + cols +
      '<rect x="130" y="116" width="118" height="6" fill="#e2ddd0"/>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("RAPSODY", 18, 186, 46, GOLD, -6) + tag("KOOLEY HIGH", 120, 214, 18, TEAL, -4) + tag("1 OF 1", 24, 214, 17, ROSE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="rp-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="#c9d6e3"/><rect x="12" y="228" width="32" height="10" rx="3" fill="#c9d6e3"/><circle cx="13" cy="250" r="5" fill="#111"/><circle cx="45" cy="250" r="5" fill="#111"/></g>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 136, "N Greene St") + sign(270, 124, 104, "W 2nd St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="rp-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="rp-sp"><circle cx="210" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="rp-sp rp-sp2"><circle cx="216" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("rps5", "#2e3566", "#f0a070"));
  }

  window.SCENES = { rpstation: rpstation, rpbelltower: rpbelltower, rpporch: rpporch, rpcourt: rpcourt, rpcorner: rpcorner };
})();
