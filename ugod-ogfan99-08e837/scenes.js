/* Grasmere and Park Hill, Staten Island opening scenes for U-God's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.2}}.blk{animation:blink 1s steps(1) infinite}.b2{animation-delay:-.25s}.b3{animation-delay:-.5s}.b4{animation-delay:-.75s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sway{animation:sway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:top center}.sw2{animation-delay:-1.5s}' +
    '@keyframes rise{0%{transform:translateY(0);opacity:.0}20%{opacity:.6}100%{transform:translateY(-60px);opacity:0}}.rise{animation:rise 4s linear infinite}.r2{animation-delay:-1.3s}.r3{animation-delay:-2.6s}' +
    '@keyframes slide{from{transform:translateX(-140px)}to{transform:translateX(480px)}}.slide{animation:slide 20s linear infinite;animation-delay:-6s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes lift{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}.lift{animation:lift 1.6s ease-in-out infinite}' +
    '@keyframes shoot{0%{transform:translate(0,0);opacity:0}10%{opacity:1}40%{transform:translate(-160px,70px);opacity:0}100%{opacity:0;transform:translate(-160px,70px)}}.shoot{animation:shoot 5s ease-out infinite}' +
    '@keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}.pls{animation:pulse 2.4s ease-in-out infinite}.p2{animation-delay:-1.2s}' +
    '@keyframes run{from{transform:translateX(0)}to{transform:translateX(300px)}}.run{animation:run 5s linear infinite}.rn2{animation-delay:-2.5s}' +
    '@keyframes splash{0%,100%{transform:scale(.6);opacity:0}40%{transform:scale(1);opacity:.9}}.spl{animation:splash 1.6s ease-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '@keyframes pop{0%,100%{transform:scale(.85)}50%{transform:scale(1.08)}}.pop{animation:pop 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes rain{from{transform:translate(0,-40px)}to{transform:translate(-20px,260px)}}.rain{animation:rain .9s linear infinite}.rn3{animation-delay:-.45s}' +
    '@keyframes hop{0%,40%,100%{transform:translate(0,0)}20%{transform:translate(0,-14px)}}.hop{animation:hop 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* Staten Island Railway "SIR" bullet */
  const sir = (x, y) => '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + FONT + ' font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* the SIR car: stainless with the blue band, w long, top-left at x,y */
  const sirCar = (x, y, w) => { let win = ""; for (let i = x + 16; i < x + w - 76; i += 42) win += '<rect x="' + i + '" y="' + (y + 10) + '" width="28" height="19" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="54" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 35) + '" width="' + w + '" height="6" fill="#0039a6"/>' + win +
      '<circle cx="' + (x + w - 8) + '" cy="' + (y + 46) + '" r="4" fill="#fff6c2"/>' + sir(x + w - 46, y + 20); };
  /* black station sign */
  const stSign = (x, y, w, name) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="32" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
    '<text x="' + (x + 12) + '" y="' + (y + 24) + '" ' + FONT + ' font-size="16" fill="#fff">' + name + '</text>' + sir(x + w - 24, y + 17);
  /* green NYC street sign blade */
  const blade = (cx, y, txt) => { const w = txt.length * 7 + 18; return '<rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="' + cx + '" y="' + (y + 13) + '" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">' + txt + '</text>'; };
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 2; yy < y + h - 4; yy += 12) for (let xx = x + (((yy - y) / 12) % 2 ? -8 : 2); xx < x + w - 6; xx += 30) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(28, x + w - Math.max(x, xx)) + '" height="10" fill="' + mortar + '"/>'; return b; };
  /* street corner: wall with tags, streetlight, two street blades */
  const corner = (g, s1, s2, tags, accent) => svg(
    '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
    brick(16, 60, 240, 160, "#4a2a24", "#5a3229") + '<rect x="16" y="56" width="240" height="6" fill="#2a1a16"/>' + tags +
    '<rect class="drp" x="120" y="126" width="3" height="8" fill="' + accent + '"/><rect class="drp" x="186" y="114" width="3" height="8" fill="' + accent + '" style="animation-delay:-1s"/>' +
    '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
    '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
    blade(302, 88, s1) + blade(302, 110, s2) +
    '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
    sky("g5", g[0], g[1]));
  const LIME = "#7cf29a", GOLD = "#f2c14e", RED = "#e04a3a";

  /* 1. Grasmere: the SIR down in the open cut in the morning, island platform, the Clove Rd bridge overhead */
  function station() {
    return svg('<rect width="400" height="260" fill="url(#g1)"/><circle cx="70" cy="34" r="16" fill="#fff3c4"/>' +
      /* trees on top of the cut */
      '<path d="M0 70q20-30 40-6 20-26 50 0 24-30 50 0 30-26 60 0 30-30 60 0 26-24 50 0 30-28 50 0 20-20 40 0v20H0z" fill="#3d7a33"/>' +
      /* the cut walls */
      '<path d="M0 84h400v30H0z" fill="#7a7466"/>' +
      /* the Clove Rd bridge across the top */
      '<rect x="0" y="22" width="400" height="16" fill="#8a8578" stroke="#5a564c" stroke-width="2"/><path d="M0 22h400" stroke="#5a564c" stroke-width="4"/>' +
      '<g class="slide"><rect x="0" y="10" width="34" height="12" rx="3" fill="' + RED + '"/><circle cx="8" cy="22" r="3" fill="#111"/><circle cx="26" cy="22" r="3" fill="#111"/></g>' +
      /* canopy over the island platform */
      '<rect x="80" y="56" width="240" height="7" fill="#3a4250"/><rect x="120" y="63" width="5" height="40" fill="#59616e"/><rect x="275" y="63" width="5" height="40" fill="#59616e"/>' +
      stSign(118, 66, 164, "Grasmere") +
      '<g class="anim-train">' + sirCar(10, 112, 300) + '</g>' +
      '<rect x="0" y="166" width="400" height="7" fill="#eab308"/><rect x="0" y="173" width="400" height="20" fill="#9a958a"/>' +
      '<rect x="0" y="193" width="400" height="67" fill="#4a4a4e"/><path d="M0 214h400M0 236h400" stroke="#8a8a8e" stroke-width="3"/>' +
      '<path d="M20 214v22M60 214v22M100 214v22M140 214v22M180 214v22M220 214v22M260 214v22M300 214v22M340 214v22M380 214v22" stroke="#5a4030" stroke-width="5"/>' +
      tag("PARK HILL", 130, 252, 26, LIME, -3),
      sky("g1", "#7fbfe8", "#f2e6c8"));
  }

  /* 2. Von Briesen Park: the lawn on the bluff over the Narrows, a big ship heading out, the bridge tower off to the side */
  function bluff() {
    return svg('<rect width="400" height="260" fill="url(#g2)"/><circle cx="300" cy="46" r="18" fill="#fff3c4"/>' +
      /* Brooklyn shore far off */
      '<path d="M0 110h400v6H0z" fill="#8a96a8"/><rect x="40" y="96" width="10" height="14" fill="#8a96a8"/><rect x="60" y="100" width="16" height="10" fill="#8a96a8"/><rect x="200" y="92" width="12" height="18" fill="#8a96a8"/>' +
      /* the bridge tower, gray, at the right edge */
      '<rect x="356" y="20" width="8" height="96" fill="#7a8494"/><rect x="380" y="20" width="8" height="96" fill="#7a8494"/><rect x="356" y="30" width="32" height="5" fill="#7a8494"/><rect x="356" y="70" width="32" height="5" fill="#7a8494"/>' +
      '<path d="M360 22Q260 100 120 112M384 22Q300 90 200 106" stroke="#7a8494" stroke-width="2" fill="none"/><rect x="0" y="104" width="400" height="4" fill="#6a7484"/>' +
      /* the Narrows */
      '<rect x="0" y="116" width="400" height="70" fill="#3a6a9a"/><path class="pls" d="M30 130h50M150 150h70M280 140h60M60 170h80" stroke="#cfe6ff" stroke-width="2"/>' +
      /* the ship */
      '<g class="slide" style="animation-duration:30s"><path d="M0 150h120l-12 18H10z" fill="#2a3a4a"/><rect x="10" y="134" width="22" height="16" fill="#c8302c"/><rect x="34" y="138" width="18" height="12" fill="#2a7a5a"/><rect x="54" y="134" width="22" height="16" fill="#e0a030"/><rect x="78" y="138" width="18" height="12" fill="#3a5ac8"/><rect x="98" y="122" width="16" height="28" fill="#f6efdc"/><rect x="102" y="116" width="6" height="8" fill="#333"/></g>' +
      /* the bluff, lawn, trees and a bench */
      '<path d="M0 186q120-20 240-6t160 0v80H0z" fill="#4f8f3a"/>' +
      '<rect x="30" y="140" width="10" height="80" fill="#5a3e2a"/><circle cx="35" cy="130" r="30" fill="#3d7a33"/><circle cx="60" cy="150" r="20" fill="#2f6a2a"/>' +
      '<rect x="230" y="208" width="60" height="6" fill="#2f5a3a"/><rect x="234" y="214" width="4" height="14" fill="#222"/><rect x="282" y="214" width="4" height="14" fill="#222"/>' +
      '<path d="M0 230q200-10 400 0v30H0z" fill="#3d7a33"/>' +
      tag("THE NARROWS", 90, 252, 24, GOLD, -3),
      sky("g2", "#7ab8e6", "#e8eef2"));
  }

  /* 3. The weight room: gold plates, a barbell going up and down, the chalk dust flying, the mirror wall */
  function gym() {
    let rack = "";
    [40, 64, 88, 112].forEach((x, i) => rack += '<rect x="' + (x - 7) + '" y="168" width="14" height="14" rx="3" fill="' + GOLD + '" stroke="#7a5512" stroke-width="1.5"/><rect x="' + (x - 7) + '" y="188" width="14" height="14" rx="3" fill="' + GOLD + '" stroke="#7a5512" stroke-width="1.5"/>');
    return svg('<rect width="400" height="260" fill="#1d1d22"/>' +
      /* mirror wall */
      '<rect x="0" y="20" width="400" height="140" fill="#3a4654"/><path d="M100 20v140M200 20v140M300 20v140" stroke="#222" stroke-width="4"/><path d="M20 40l40 90M120 40l40 90M220 40l40 90M320 40l40 90" stroke="#5a6a7a" stroke-width="3" opacity=".6"/>' +
      '<rect x="0" y="0" width="400" height="20" fill="#2a2a30"/><rect class="flk" x="80" y="8" width="80" height="6" fill="#fff4c8"/><rect class="flk flk2" x="240" y="8" width="80" height="6" fill="#fff4c8"/>' +
      /* rubber floor */
      '<rect x="0" y="160" width="400" height="100" fill="#2a2a2e"/><path d="M0 210h400M130 160v100M270 160v100" stroke="#1a1a1e" stroke-width="2"/>' +
      /* dumbbell rack */
      '<rect x="24" y="182" width="104" height="4" fill="#555"/><rect x="24" y="202" width="104" height="4" fill="#555"/><rect x="26" y="182" width="4" height="40" fill="#555"/><rect x="122" y="182" width="4" height="40" fill="#555"/>' + rack +
      /* the bench and the barbell going up */
      '<rect x="190" y="200" width="100" height="12" rx="4" fill="#1a1a1a"/><rect x="200" y="212" width="6" height="28" fill="#555"/><rect x="274" y="212" width="6" height="28" fill="#555"/>' +
      '<path d="M206 196V120M274 196V120" stroke="#777" stroke-width="5"/>' +
      '<g class="lift"><rect x="160" y="146" width="160" height="5" fill="#cfd6de"/><rect x="164" y="128" width="12" height="40" rx="2" fill="' + GOLD + '" stroke="#7a5512" stroke-width="2"/><rect x="304" y="128" width="12" height="40" rx="2" fill="' + GOLD + '" stroke="#7a5512" stroke-width="2"/><rect x="178" y="134" width="8" height="28" rx="2" fill="' + GOLD + '" stroke="#7a5512" stroke-width="1.5"/><rect x="294" y="134" width="8" height="28" rx="2" fill="' + GOLD + '" stroke="#7a5512" stroke-width="1.5"/></g>' +
      /* chalk */
      '<circle class="rise" cx="340" cy="210" r="4" fill="#f6efdc"/><circle class="rise r2" cx="346" cy="210" r="3" fill="#f6efdc"/><circle class="rise r3" cx="334" cy="210" r="3" fill="#f6efdc"/><rect x="326" y="210" width="28" height="16" fill="#555"/>' +
      tag("GOLDEN ARMS", 150, 250, 28, GOLD, -4),
      "");
  }

  /* 4. Ocean Breeze: the big indoor track house, the blue banked oval under the white roof trusses, runners lapping */
  function track() {
    let truss = "";
    for (let x = 0; x <= 400; x += 40) truss += '<path d="M' + x + ' 0L' + (x + 20) + ' 50L' + (x + 40) + ' 0" stroke="#d8dde4" stroke-width="2" fill="none"/>';
    const runner = (cls, col) => '<g class="run ' + cls + '"><circle cx="40" cy="168" r="5" fill="#7a4a2a"/><path d="M40 174v16M40 180l-8 6M40 180l8-4M40 190l-8 10M40 190l8 8" stroke="' + col + '" stroke-width="4" stroke-linecap="round"/></g>';
    return svg('<rect width="400" height="260" fill="#eef2f6"/>' +
      '<path d="M0 0h400v60Q200 20 0 60z" fill="#f8fafc"/>' + truss + '<path d="M0 50h400" stroke="#d8dde4" stroke-width="3"/>' +
      /* the windows high up, light coming in */
      '<rect x="0" y="60" width="400" height="40" fill="#c8d4e2"/><path d="M40 60v40M120 60v40M200 60v40M280 60v40M360 60v40" stroke="#9aa8ba" stroke-width="3"/>' +
      /* the stands */
      '<path d="M0 100h400v30H0z" fill="#5a6a7a"/><path d="M0 110h400M0 120h400" stroke="#3a4654" stroke-width="2"/>' +
      /* the banked blue track */
      '<path d="M0 140h400v80H0z" fill="#2a64b8"/><path d="M0 154h400M0 168h400M0 182h400M0 196h400M0 210h400" stroke="#fff" stroke-width="1.5" opacity=".8"/>' +
      runner("", LIME) + runner("rn2", RED) +
      /* the infield */
      '<rect x="0" y="220" width="400" height="40" fill="#c84a3a"/><rect x="120" y="226" width="160" height="6" fill="#fff"/>' +
      '<rect x="330" y="80" width="54" height="16" rx="2" fill="#111"/><text x="357" y="92" text-anchor="middle" font-family="monospace" font-size="11" fill="' + LIME + '" class="blk">0:47.3</text>' +
      tag("OCEAN BREEZE", 140, 252, 24, GOLD, -3),
      "");
  }

  /* 5. Clove Rd and Narrows Rd South, by the Grasmere stop */
  function block() {
    return corner(["#0d1022", "#24342a"], "Clove Rd", "Narrows Rd S",
      tag("U-GOD", 26, 124, 52, LIME, -7) + tag("GOLDEN ARMS", 36, 162, 26, GOLD, -4) + tag("KEYNOTE", 120, 196, 24, RED, -3) + tag("WU-TANG", 30, 214, 20, "#f6efdc", -2), LIME);
  }

  window.SCENES = { station, bluff, gym, track, block };
})();
