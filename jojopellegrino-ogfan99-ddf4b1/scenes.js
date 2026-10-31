(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}.blk{animation:blink 1.6s infinite}.blk2{animation:blink 1.6s infinite;animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1;transform:scaleY(1)}30%{opacity:.75;transform:scaleY(.85)}60%{opacity:.95;transform:scaleY(1.1)}}.flk{transform-box:fill-box;transform-origin:50% 100%;animation:flick .9s ease-in-out infinite}.flk2{animation-delay:.35s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spn{transform-box:view-box;animation:spin 12s linear infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-28deg)}50%{transform:rotate(28deg)}}.swp{animation:sweep 5s ease-in-out infinite}' +
    '@keyframes flutter{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.flg{transform-box:fill-box;transform-origin:0 50%;animation:flutter 1.4s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,120px) rotate(200deg);opacity:0}}.lf{animation:fall 5s linear infinite}.lf2{animation-delay:1.7s}.lf3{animation-delay:3.3s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.dft{animation:drift 26s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.bt{animation:boat 18s linear infinite}' +
    '@keyframes swim{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.swm{animation:swim 7s ease-in-out infinite}' +
    '@keyframes peek{0%,30%,100%{transform:translateY(14px)}45%,85%{transform:translateY(0)}}.pk{animation:peek 4s ease-in-out infinite}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes carR{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.cr1{animation:carR 6s linear infinite}.cr2{animation:carR 6s linear infinite;animation-delay:-3s}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.6}100%{transform:translateY(-26px);opacity:0}}.stm{animation:steam 3s ease-out infinite}.stm2{animation-delay:1.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* Staten Island Railway "SIR" bullet */
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="10"/><ellipse cx="-12" cy="-4" rx="11" ry="8"/></g>';
  /* SIR car (stainless, blue band), w long, at x,y top-left */
  const sirCar = (x, y, w) => {
    let win = ""; for (let i = x + 14; i < x + w - 40; i += 42) win += '<rect x="' + i + '" y="' + (y + 12) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="6" fill="#0039a6"/>' + win +
      '<rect x="' + (x + w - 18) + '" y="' + (y + 12) + '" width="12" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>' +
      '<circle cx="' + (x + w - 8) + '" cy="' + (y + 54) + '" r="4" fill="#fff6c2"/>' + sir(x + w - 40, y + 54);
  };
  /* green NYC street sign blade */
  const blade = (x, y, w, txt, rot) =>
    '<g transform="rotate(' + (rot || 0) + ' ' + (x + w / 2) + ' ' + (y + 11) + ')"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#0f7a3d" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">' + txt + '</text></g>';
  const station = (name, x, y, w) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
    '<text x="' + (x + 14) + '" y="' + (y + 25) + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">' + name + '</text>' + sir(x + w - 28, y + 18);
  const RED = "#ff4b3e", GRN = "#2fb24c", GOLD = "#ffd34d";

  /* 1. St. George: end of the line, the SIR train pulling into the covered terminal by the ferry */
  function station1() {
    let ribs = ""; for (let x = 0; x <= W; x += 40) ribs += '<rect x="' + (x - 3) + '" y="40" width="6" height="140" fill="#3a4450"/>';
    return svg(
      '<rect width="400" height="260" fill="#121820"/>' +
      '<rect width="400" height="44" fill="#26303b"/>' +
      (function () { let l = ""; for (let x = 10; x < 400; x += 64) l += '<rect x="' + x + '" y="8" width="40" height="16" rx="2" fill="#7ea3bf" opacity=".55"/>'; return l; })() +
      '<rect y="40" width="400" height="6" fill="#3a4450"/>' + ribs +
      '<circle cx="40" cy="58" r="4" fill="#fff3c4"/><circle cx="360" cy="58" r="4" fill="#fff3c4"/>' +
      station("St. George", 90, 62, 220) +
      '<g class="anim-train">' + sirCar(-10, 110, 330) + '</g>' +
      '<rect y="174" width="400" height="10" fill="#eab308"/>' +
      '<rect y="184" width="400" height="76" fill="#1c232c"/>' +
      '<text x="200" y="208" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="3" fill="#ffd38a">FERRY ↑  ·  END OF THE LINE</text>' +
      tag("PELLE", 24, 244, 30, RED, -4) + tag("FOGEDABOUDID", 196, 248, 24, GRN, -6));
  }

  /* 2. The St. George Theatre on Hyatt St: cream terracotta front, tall red blade sign, chasing marquee bulbs */
  function theatre() {
    let bulbs = ""; for (let x = 108; x <= 292; x += 8) bulbs += '<circle cx="' + x + '" cy="150" r="2.2" fill="#fff3b0" class="' + ((x / 8) % 2 ? "blk" : "blk2") + '"/><circle cx="' + x + '" cy="178" r="2.2" fill="#fff3b0" class="' + ((x / 8) % 2 ? "blk2" : "blk") + '"/>';
    let letters = ""; "STGEORGE".split("").forEach((c, i) => letters += '<text x="200" y="' + (40 + i * 13) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#fff" class="' + (i % 2 ? "blk" : "") + '">' + c + '</text>');
    let windows = ""; [70, 104, 280, 314].forEach(x => windows += '<path d="M' + x + ' 128v-30a8 8 0 0 1 16 0v30z" fill="#3a2a1e" stroke="#c9a24a" stroke-width="1.5"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#t1)"/>' + stars(16) +
      /* side brick buildings */
      '<rect x="0" y="90" width="50" height="150" fill="#5a2f24"/><rect x="350" y="80" width="50" height="160" fill="#5a2f24"/>' +
      /* facade */
      '<rect x="50" y="74" width="300" height="166" fill="#e9dcc0"/>' +
      '<path d="M50 74h300v12H50z" fill="#d6c19a"/>' +
      '<path d="M150 74q50-26 100 0z" fill="#e9dcc0" stroke="#c9a24a" stroke-width="2"/>' +
      '<circle cx="200" cy="66" r="6" fill="#c9a24a"/>' +
      (function () { let o = ""; for (let x = 58; x < 345; x += 14) o += '<circle cx="' + x + '" cy="92" r="3" fill="#c9a24a"/>'; return o; })() +
      windows +
      /* vertical blade sign */
      '<rect x="186" y="22" width="28" height="118" rx="4" fill="#c4161c" stroke="#fff3b0" stroke-width="2"/>' + letters +
      /* marquee */
      '<path d="M96 146h208l-10 36H106z" fill="#1a1a1a" stroke="#c9a24a" stroke-width="2"/>' + bulbs +
      '<rect x="116" y="156" width="168" height="18" fill="#f7f3ea"/>' +
      '<text x="200" y="170" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" textLength="156" lengthAdjust="spacingAndGlyphs" fill="#111">TONIGHT · LIVE HIP-HOP</text>' +
      /* doors */
      '<rect x="120" y="194" width="160" height="46" fill="#3a2a1e"/>' +
      (function () { let d = ""; for (let x = 126; x < 280; x += 26) d += '<rect x="' + x + '" y="198" width="20" height="42" fill="#8a6a3e" stroke="#c9a24a" stroke-width="1"/>'; return d; })() +
      '<rect y="240" width="400" height="20" fill="#2a2a2e"/>' +
      '<text x="12" y="254" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2" fill="#ffd38a">HYATT ST · SINCE 1929</text>',
      sky("t1", "#151a3a", "#6b3a5a"));
  }

  /* 3. Borough Hall: red brick and limestone, mansard roof, the clock tower, the flag flying */
  function hall() {
    let win = ""; for (let x = 92; x < 320; x += 26) { if (x > 180 && x < 220) continue; win += '<path d="M' + x + ' 170v-22a7 7 0 0 1 14 0v22z" fill="#2c3e57" stroke="#efe6d2" stroke-width="2"/><rect x="' + x + '" y="186" width="14" height="22" fill="#2c3e57" stroke="#efe6d2" stroke-width="2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#h1)"/>' + '<g class="dft">' + cloud(60, 40, 1) + cloud(240, 60, .8) + '</g>' +
      /* body */
      '<rect x="80" y="132" width="240" height="94" fill="#a8432f"/>' +
      '<rect x="80" y="176" width="240" height="4" fill="#efe6d2"/><rect x="80" y="132" width="240" height="6" fill="#efe6d2"/>' +
      '<path d="M72 132h256l-14-20H86z" fill="#4a5361"/>' + win +
      /* tower */
      '<rect x="182" y="62" width="36" height="164" fill="#a8432f"/>' +
      '<rect x="180" y="96" width="40" height="5" fill="#efe6d2"/>' +
      '<path d="M178 62h44l-6-22h-32z" fill="#4a5361"/><path d="M190 40l10-16 10 16z" fill="#4a5361"/>' +
      '<line x1="200" y1="24" x2="200" y2="6" stroke="#333" stroke-width="1.5"/>' +
      '<g class="flg"><path d="M200 7h18v11h-18z" fill="#f7f3ea"/><path d="M200 7h7v6h-7z" fill="#0039a6"/><path d="M207 9h11M207 11h11M200 15h18" stroke="#c4161c" stroke-width="1"/></g>' +
      '<circle cx="200" cy="80" r="12" fill="#f7f3ea" stroke="#2b2b2b" stroke-width="2"/>' +
      '<line x1="200" y1="80" x2="200" y2="72" stroke="#111" stroke-width="2"/>' +
      '<g class="spn" style="transform-origin:200px 80px"><line x1="200" y1="80" x2="207" y2="80" stroke="#c4161c" stroke-width="1.5"/></g>' +
      '<path d="M192 226v-26a8 8 0 0 1 16 0v26z" fill="#3a2a1e" stroke="#efe6d2" stroke-width="2"/>' +
      /* steps + lawn */
      '<rect x="60" y="226" width="280" height="6" fill="#cfc6b4"/><rect y="232" width="400" height="28" fill="#3f7a2a"/>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">BOROUGH HALL · RICHMOND TERRACE</text>',
      sky("h1", "#3d8fd6", "#cde9ff"));
  }

  /* 4. Rosebank grotto: stone and shell arches built by Italian neighbors, candles and feast lights */
  function grotto() {
    let stones = ""; for (let i = 0; i < 70; i++) { const x = 60 + (i * 37) % 280, y = 60 + (i * 23) % 150; stones += '<ellipse cx="' + x + '" cy="' + y + '" rx="' + (5 + i % 4) + '" ry="' + (3 + i % 3) + '" fill="' + (i % 3 ? "#8d7f6e" : "#a99a86") + '"/>'; }
    let shells = ""; for (let i = 0; i < 18; i++) { const a = Math.PI * (i / 17), x = 200 - Math.cos(a) * 84, y = 150 - Math.sin(a) * 84; shells += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="3.5" fill="#f4ecdc" stroke="#b9a98f" stroke-width=".8"/>'; }
    let lights = "", cols = [RED, "#ffffff", GRN];
    for (let i = 0; i < 25; i++) { const x = 8 + i * 16, y = 22 + Math.sin(i / 24 * Math.PI) * 14; lights += '<circle cx="' + x + '" cy="' + y.toFixed(1) + '" r="3.2" fill="' + cols[i % 3] + '" class="' + (i % 2 ? "blk" : "blk2") + '"/>'; }
    let candles = ""; [150, 166, 182, 218, 234, 250].forEach((x, i) => candles += '<rect x="' + (x - 4) + '" y="206" width="8" height="14" rx="1" fill="' + (i % 2 ? "#c4161c" : "#f7f3ea") + '"/><path d="M' + x + ' 196q4 6 0 10q-4-4 0-10z" fill="#ffc94d" class="flk' + (i % 2 ? " flk2" : "") + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#r1)"/>' + stars(18) +
      '<path d="M0 30q200 30 400 0" stroke="#333" stroke-width="1" fill="none"/>' + lights +
      '<path d="M40 226V120q0-90 160-90t160 90v106z" fill="#6f6355"/>' + stones +
      '<path d="M116 226v-76a84 84 0 0 1 168 0v76z" fill="#1e1a24"/>' + shells +
      '<path d="M140 226v-70a60 60 0 0 1 120 0v70z" fill="#2b2433"/>' +
      /* simple white figure in the niche, no face */
      '<path d="M200 118a9 9 0 1 1 0 .1z" fill="#f4f1e8"/><path d="M186 186q2-50 14-56q12 6 14 56z" fill="#f4f1e8"/><path d="M190 132q10-6 20 0l-2 30h-16z" fill="#6aa2d8"/>' +
      '<rect x="138" y="220" width="124" height="6" fill="#8d7f6e"/>' + candles +
      '<rect y="226" width="400" height="34" fill="#2a2620"/>' +
      '<text x="200" y="246" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">ROSEBANK · THE GROTTO</text>',
      sky("r1", "#0e1430", "#3a2c52"));
  }

  /* 5. Hyatt St & St Marks Pl, the wall tagged up */
  function corner() {
    let bricks = ""; for (let y = 60; y < 220; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#7a3a2c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' +
      '<rect y="58" width="400" height="164" fill="#5e2b20"/>' + bricks +
      tag("JOJO", 30, 140, 46, RED, -6) + tag("PELLEGRINO", 120, 176, 40, "#fff", -5) + tag("SHAOLIN", 250, 112, 28, GRN, -8) +
      '<g class="drp"><rect x="70" y="146" width="3" height="10" fill="' + RED + '"/></g><g class="drp" style="animation-delay:1s"><rect x="210" y="180" width="3" height="10" fill="#fff"/></g>' +
      '<rect x="350" y="20" width="6" height="210" fill="#4a4a4a"/>' +
      blade(286, 22, 128, "Hyatt St", 0) + blade(296, 48, 112, "St Marks Pl", 0) +
      '<rect y="222" width="400" height="38" fill="#2c2c30"/><rect y="222" width="400" height="6" fill="#9a9a9a"/>' +
      '<g class="cr1"><rect x="0" y="236" width="44" height="14" rx="4" fill="#f2c200"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>',
      sky("c1", "#f08a4b", "#2a1d3d"));
  }

  window.SCENES = { station: station1, theatre, hall, grotto, corner };
})();
