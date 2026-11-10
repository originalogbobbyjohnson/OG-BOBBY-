/* Jackie Hill Perry scenes (Regions tab: St. Louis + Ohio; born June 21, 1989 in St. Louis and raised there (Wikipedia; Reach Records bio), first poem at a P4CM poetry conference, Humble Beast, now Reach Records; she raps 'That's 314' on Practice). No St. Louis neighborhood on record, so the hood is the 314. CSS classes prefixed jh- (the page's own anim-train is kept).
   0 MetroLink Grand station (Red + Blue lines) in the cut under the Grand Blvd bridge: a MetroLink train sliding in, black sign with the red and blue bullets.
   1 Thy Neighbor: a church sanctuary, stained glass glowing, pews, the pulpit, candles flickering.
   2 Mustard Seed: the Climatron at the Missouri Botanical Garden, the geodesic dome over the reflecting pool, lily pads, a seed sprouting.
   3 Practice ("we talking 'bout practice"): an empty gym, a ball bouncing, PRACTICE on the scoreboard.
   4 N Grand Blvd and Delmar Blvd in Grand Center: green signs, JACKIE HILL PERRY tagged on the wall, Powell Hall's cream terra-cotta front and tall arched windows lit behind (no logos). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jhglow{0%,100%{opacity:.55}50%{opacity:1}}.jh-glow{animation:jhglow 2.6s ease-in-out infinite}.jh-g2{animation-delay:-1.3s}' +
    '@keyframes jhflame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.3)}}.jh-fl{transform-box:fill-box;transform-origin:50% 100%;animation:jhflame .7s ease-in-out infinite}.jh-fl2{animation-delay:-.35s}' +
    '@keyframes jhgrow{0%{transform:scale(.2)}60%,100%{transform:scale(1)}}.jh-grow{transform-box:fill-box;transform-origin:50% 100%;animation:jhgrow 4s ease-out infinite}' +
    '@keyframes jhrip{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.jh-rip{animation:jhrip 3s linear infinite}' +
    '@keyframes jhball{0%,100%{transform:translateY(0)}50%{transform:translateY(-70px)}}.jh-ball{animation:jhball 1s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes jhbulb{0%,100%{opacity:.3}50%{opacity:1}}.jh-bulb{animation:jhbulb .9s ease-in-out infinite}.jh-b2{animation-delay:-.3s}.jh-b3{animation-delay:-.6s}' +
    '@keyframes jhcar{0%{transform:translateX(-90px)}100%{transform:translateX(490px)}}.jh-car{animation:jhcar 7s linear infinite}.jh-car2{animation-delay:-3.5s}' +
    '@keyframes jhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jh-sp{animation:jhspray 1.4s ease-out infinite}.jh-sp2{animation-delay:.45s}' +
    '@keyframes jhdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(30px);opacity:0}}.jh-dr{animation:jhdrip 1.8s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c14e", PURP = "#7b5ea7", CORAL = "#ef6f6c", MLRED = "#d9262e", MLBLUE = "#1f4e79";

  /* 0. MetroLink Grand station */
  function jhstation() {
    const train = '<g class="anim-train"><rect x="20" y="132" width="270" height="66" rx="10" fill="#eef0f2" stroke="#7a828a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 42) + '" y="142" width="32" height="26" rx="3" fill="#2a3440"/>').join("") +
      '<path d="M20 176h270" stroke="' + MLRED + '" stroke-width="6"/><path d="M20 184h270" stroke="' + MLBLUE + '" stroke-width="4"/>' +
      '<circle cx="30" cy="190" r="3.5" fill="#fff6c2"/><path d="M150 132l-14 -22h28z" stroke="#333" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jh0)"/>' +
      '<rect x="0" y="70" width="400" height="16" fill="#9a958c"/><rect x="0" y="86" width="400" height="8" fill="#7a756c"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 8) + '" y="94" width="16" height="104" fill="#a8a296"/>').join("") +
      '<g class="jh-car"><rect x="0" y="58" width="36" height="12" rx="4" fill="' + CORAL + '"/></g><g class="jh-car jh-car2"><rect x="0" y="58" width="30" height="12" rx="4" fill="#f4f4f4"/></g>' +
      '<rect x="0" y="198" width="400" height="62" fill="#8e8a82"/><rect x="0" y="198" width="400" height="6" fill="#e8d84a"/><path d="M0 222h400M0 240h400" stroke="#55514a" stroke-width="3"/>' +
      '<rect x="300" y="110" width="90" height="10" fill="' + MLBLUE + '"/><rect x="310" y="120" width="4" height="78" fill="#555"/><rect x="376" y="120" width="4" height="78" fill="#555"/>' +
      train +
      '<rect x="20" y="14" width="210" height="34" rx="3" fill="#111"/><text x="100" y="37" ' + font + ' font-size="15" fill="#fff">Grand</text>' +
      '<rect x="28" y="20" width="30" height="22" rx="4" fill="' + MLRED + '"/><text x="43" y="35" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">RED</text>' +
      '<rect x="62" y="20" width="32" height="22" rx="4" fill="' + MLBLUE + '"/><text x="78" y="35" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BLUE</text>',
      sky("jh0", "#6aa8e0", "#f4dcb4"));
  }

  /* 1. Thy Neighbor: the sanctuary */
  function jhchurch() {
    const win = (x) => '<path d="M' + x + ' 130v-60a22 22 0 0 1 44 0v60z" fill="#1a1428" stroke="#3a2e1e" stroke-width="3"/>' +
      '<path class="jh-glow" d="M' + (x + 4) + ' 126v-56a18 18 0 0 1 36 0v56z" fill="' + PURP + '"/>' +
      '<path class="jh-glow jh-g2" d="M' + (x + 4) + ' 98h36v28h-36z" fill="' + GOLD + '" opacity=".8"/><path d="M' + (x + 22) + ' 52v74M' + (x + 4) + ' 98h36" stroke="#3a2e1e" stroke-width="2"/>' +
      '<circle cx="' + (x + 22) + '" cy="74" r="8" fill="' + CORAL + '"/>';
    const pew = (y) => '<rect x="20" y="' + y + '" width="140" height="10" rx="2" fill="#6a3e1e"/><rect x="240" y="' + y + '" width="140" height="10" rx="2" fill="#6a3e1e"/>';
    const candle = (x, c) => '<rect x="' + x + '" y="150" width="6" height="18" fill="#f4f0e2"/><path class="jh-fl' + c + '" d="M' + (x + 3) + ' 140q-4 6 0 10q4 -4 0 -10z" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1e2a"/><rect x="0" y="0" width="400" height="180" fill="#3a2a38"/>' +
      win(30) + win(110) + win(246) + win(326) +
      '<rect x="170" y="110" width="60" height="70" fill="#5a3418" stroke="#2e1a0a" stroke-width="2"/><rect x="164" y="104" width="72" height="10" fill="#7a4a24"/><path d="M200 128v26M190 138h20" stroke="' + GOLD + '" stroke-width="4"/>' +
      candle(150, "") + candle(244, " jh-fl2") +
      '<rect x="0" y="180" width="400" height="80" fill="#5a1e2a"/><rect x="180" y="180" width="40" height="80" fill="#7a2a36"/>' +
      pew(196) + pew(218) + pew(240));
  }

  /* 2. The Climatron, Missouri Botanical Garden */
  function jhclimatron() {
    const ribs = [];
    for (let i = 1; i < 8; i++) ribs.push('<path d="M' + (90 + i * 27.5) + ' 160Q' + (90 + i * 27.5) + ' 50 200 40" stroke="#c8d4d8" stroke-width="1.2" fill="none"/>');
    for (let j = 1; j < 5; j++) { const r = 110 - j * 20, cy = 160; ribs.push('<path d="M' + (200 - r * 1.0) + ' ' + (cy - (110 - r) * 0.98) + 'Q200 ' + (cy - (110 - r) * 0.98 - r * 0.3) + ' ' + (200 + r * 1.0) + ' ' + (cy - (110 - r) * 0.98) + '" stroke="#c8d4d8" stroke-width="1.2" fill="none"/>'); }
    const pads = [70, 130, 260, 320].map((x, i) => '<ellipse cx="' + x + '" cy="' + (214 + (i % 2) * 14) + '" rx="16" ry="5" fill="#3f8a3a"/>').join("") + '<circle cx="134" cy="210" r="4" fill="' + CORAL + '"/><circle cx="318" cy="224" r="4" fill="#f4c6d8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jh2)"/>' +
      '<path d="M90 160Q90 40 200 40Q310 40 310 160z" fill="#bfe0e6" opacity=".55" stroke="#9fb4ba" stroke-width="2"/>' + ribs.join("") +
      '<path d="M120 160q10 -40 30 -50q10 30 -6 50zM250 160q14 -50 36 -40q-4 30 -20 40z" fill="#3f8a3a" opacity=".85"/>' +
      '<rect x="0" y="158" width="400" height="36" fill="#6a9a4a"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#3a6a8a"/>' +
      '<g class="jh-rip"><path d="M0 204q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#a8d8ea" stroke-width="1.5" fill="none"/></g>' +
      pads +
      '<g class="jh-grow"><path d="M200 192v-22" stroke="#4a9a3a" stroke-width="3"/><path d="M200 176q-12 -8 -16 -2q8 6 16 2zM200 172q12 -10 16 -4q-8 8 -16 4z" fill="#5aba4a"/></g><ellipse cx="200" cy="194" rx="7" ry="3" fill="#8a6a3a"/>',
      sky("jh2", "#8ac4ec", "#fde6c4"));
  }

  /* 3. Practice: the gym */
  function jhcourt() {
    return svg(
      '<rect width="400" height="260" fill="#2a2430"/><rect x="0" y="0" width="400" height="150" fill="#3a3444"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect class="jh-glow' + (i % 2 ? " jh-g2" : "") + '" x="' + (30 + i * 64) + '" y="10" width="40" height="8" rx="3" fill="#fff6d0"/>').join("") +
      '<rect x="120" y="30" width="160" height="50" rx="4" fill="#111" stroke="#555" stroke-width="2"/><text x="200" y="64" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="' + CORAL + '">PRACTICE</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#c89a5a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 150l-30 110" stroke="#b08446" stroke-width="1"/>').join("") +
      '<path d="M60 260q140 -90 280 0" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<rect x="326" y="80" width="6" height="90" fill="#777"/><rect x="300" y="70" width="60" height="40" fill="#f4f4f4" stroke="#999" stroke-width="2"/><rect x="318" y="86" width="24" height="18" fill="none" stroke="' + CORAL + '" stroke-width="2"/><path d="M314 112h32l-4 22h-24z" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="3 2"/>' +
      '<g class="jh-ball"><circle cx="200" cy="200" r="16" fill="#e2762a" stroke="#6a2a0a" stroke-width="2"/><path d="M184 200h32M200 184v32M189 189q11 11 0 22M211 189q-11 11 0 22" stroke="#6a2a0a" stroke-width="1.5" fill="none"/></g>' +
      '<ellipse cx="200" cy="222" rx="18" ry="4" fill="#000" opacity=".25"/>');
  }

  /* 4. N Grand Blvd and Delmar Blvd in Grand Center, Powell Hall's cream terra-cotta front behind */
  function jhcorner() {
    const bulbs = Array.from({ length: 14 }, (_, i) => '<circle class="jh-bulb' + (i % 3 === 1 ? " jh-b2" : i % 3 === 2 ? " jh-b3" : "") + '" cx="' + (128 + i * 11) + '" cy="108" r="2.2" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jh4)"/>' +
      '<rect x="96" y="26" width="208" height="104" fill="#efe4cc" stroke="#b8a888" stroke-width="2"/><rect x="90" y="20" width="220" height="10" fill="#d8ccb0"/>' +
      [124, 180, 236].map(x => '<path class="jh-glow" d="M' + x + ' 98v-46a20 20 0 0 1 40 0v46z" fill="#f6d68a" stroke="#a89878" stroke-width="2"/><path d="M' + (x + 20) + ' 32v66M' + x + ' 66h40" stroke="#a89878" stroke-width="1.5"/>').join("") +
      '<rect x="120" y="100" width="160" height="16" fill="#7a1e2a" stroke="' + GOLD + '" stroke-width="1.5"/>' + bulbs +
      '<rect x="0" y="130" width="400" height="96" fill="#4a3a5a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#3e3050" stroke-width="1"/>').join("") +
      tag("JACKIE HILL PERRY", 14, 184, 27, GOLD, -4) + tag("JHP", 30, 214, 22, CORAL, -3) + tag("314", 120, 214, 22, "#fff", -5) + tag("GOSPEL", 190, 216, 18, "#c8b0f0", -4) +
      '<g class="jh-dr"><path d="M96 188q-4 6 0 10q4 -4 0 -10z" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="374" y="120" width="6" height="106" fill="#2f2f2f"/>' + sign(296, 124, 100, "N Grand Blvd") + sign(296, 150, 100, "Delmar Blvd") +
      '<g class="jh-sp"><circle cx="276" cy="176" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jh-sp jh-sp2"><circle cx="282" cy="170" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("jh4", "#1c1838", "#7a4a7a"));
  }

  window.SCENES = { jhstation: jhstation, jhchurch: jhchurch, jhclimatron: jhclimatron, jhcourt: jhcourt, jhcorner: jhcorner };
})();
