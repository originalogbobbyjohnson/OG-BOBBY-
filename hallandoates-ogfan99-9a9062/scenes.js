/* hallandoates scenes (Regions tab: Philadelphia; Wash West, S Quince St). CSS classes prefixed ho- (the page's own anim-train is kept).
   1 Temple University station on SEPTA Regional Rail (9th & Berks, up on the embankment by campus, where they both went to school): high-level platform, canopy, catenary, black sign with the purple RR badge, a stainless Silverliner sliding in, cherry-and-white banners on the lamp posts.
   2 The Adelphi Ballroom in West Philly, 1967: the battle of the bands where Daryl (the Temptones) and John (the Masters) first met, both ducking into the same service elevator when the night got wild. Stage, two band setups, mirror ball spinning, the elevator's floor arrow swinging.
   3 The abandoned Rosedale Diner outside Pottstown (Daryl's hometown), the real diner on the "Abandoned Luncheonette" cover: barrel-roof stainless diner gone to rust, boarded windows, tall weeds swaying, crows crossing a gray sky.
   4 JFK Stadium in South Philly, Live Aid, July 13 1985: the giant scaffold stage and speaker stacks, the concrete horseshoe packed, the crowd bouncing, lights sweeping.
   5 S Quince St and Pine St, by 406 S Quince where the mailbox said HALL & OATES: tiny brick trinity row homes, gas-style lamp, green signs, HALL & OATES tagged on the wall, Pennsylvania Hospital's white cupola down Pine behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hoglow{0%,100%{opacity:.45}50%{opacity:1}}.ho-glow{animation:hoglow 2.6s ease-in-out infinite}.ho-glow2{animation-delay:-1.3s}' +
    '@keyframes hospin{0%,100%{opacity:.25}50%{opacity:1}}.ho-dot{animation:hospin 1.2s steps(2) infinite}.ho-dot2{animation-delay:-.6s}' +
    '@keyframes hosweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.ho-sw{transform-box:fill-box;transform-origin:50% 0%;animation:hosweep 3.6s ease-in-out infinite}.ho-sw2{animation-delay:-1.8s}' +
    '@keyframes hoarrow{0%,100%{transform:rotate(-60deg)}50%{transform:rotate(60deg)}}.ho-arr{transform-box:view-box;animation:hoarrow 4s ease-in-out infinite}' +
    '@keyframes hosway{0%,100%{transform:skewX(-6deg)}50%{transform:skewX(6deg)}}.ho-weed{transform-box:fill-box;transform-origin:50% 100%;animation:hosway 2.4s ease-in-out infinite}.ho-weed2{animation-delay:-1.2s}' +
    '@keyframes hocrow{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.ho-crow{animation:hocrow 11s linear infinite}.ho-crow2{animation-delay:-5.5s}' +
    '@keyframes hobounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ho-b{animation:hobounce .7s ease-in-out infinite}.ho-b2{animation-delay:-.35s}' +
    '@keyframes hoflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.ho-flag{transform-box:fill-box;transform-origin:0 50%;animation:hoflag 1.8s ease-in-out infinite}' +
    '@keyframes hospray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ho-sp{animation:hospray 1.4s ease-out infinite}.ho-sp2{animation-delay:.45s}' +
    '@keyframes hocar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ho-car{animation:hocar 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  /* a 9 with a straight stem */
  const nine = (x, y, h, col) => '<circle cx="' + (x + h * 0.27) + '" cy="' + (y - h * 0.7) + '" r="' + (h * 0.22) + '" fill="none" stroke="' + col + '" stroke-width="' + (h * 0.17) + '"/><rect x="' + (x + h * 0.40) + '" y="' + (y - h * 0.72) + '" width="' + (h * 0.17) + '" height="' + (h * 0.72) + '" fill="' + col + '"/>';
  /* monospace number/text line; every 9 drawn with nine() */
  const mono = (str, x, y, h, col) => { let o = "", cw = h * 0.62; for (let i = 0; i < str.length; i++) { const ch = str[i], cx = x + i * cw; if (ch === "9") o += nine(cx + h * 0.08, y, h * 0.7, col); else if (ch !== " ") o += '<text x="' + cx + '" y="' + y + '" font-family="Courier New, monospace" font-weight="700" font-size="' + h * 1.0 + '" fill="' + col + '">' + ch + '</text>'; } return o; };
  const monoW = (str, h) => str.length * h * 0.62;
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ho-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2cf6b", BLUE = "#7ec4e6", CORAL = "#e06c5a", RR = "#91456c", CHERRY = "#9d2235";

  /* 1. Temple University station, Regional Rail */
  function hostation() {
    const tr = '<g class="anim-train"><rect x="16" y="118" width="340" height="74" rx="8" fill="#d3d8de" stroke="#7b828a" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (30 + i * 45) + '" y="128" width="30" height="22" rx="3" fill="#1d2731"/>').join("") +
      '<rect x="16" y="156" width="340" height="4" fill="#c8102e"/><rect x="16" y="161" width="340" height="4" fill="#1f4e9a"/>' +
      [118, 238].map(x => '<rect x="' + x + '" y="166" width="22" height="24" fill="#aab1b9" stroke="#7b828a"/>').join("") +
      '<rect x="336" y="122" width="20" height="68" rx="5" fill="#b4bbc3"/><circle cx="347" cy="182" r="3.5" fill="#fff6c2"/>' +
      '<path d="M150 118l-14 -18h40l-14 18" fill="none" stroke="#333" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ho-s1)"/>' +
      /* campus behind: brick blocks + a tower */
      '<rect x="0" y="66" width="90" height="50" fill="#7a4a3a"/><rect x="96" y="54" width="70" height="62" fill="#8a5a46"/><rect x="250" y="60" width="80" height="56" fill="#7a4a3a"/><rect x="336" y="74" width="64" height="42" fill="#6a3e30"/>' +
      Array.from({ length: 22 }, (_, i) => '<rect class="' + (i % 5 ? "" : "ho-glow") + '" x="' + [6, 24, 42, 60, 104, 122, 140, 258, 276, 294, 312, 344, 362, 380][i % 14] + '" y="' + (74 + Math.floor(i / 14) * 18) + '" width="9" height="10" fill="' + (i % 3 ? "#ffe2a0" : "#3a2a2a") + '" opacity=".85"/>').join("") +
      '<rect x="172" y="62" width="70" height="54" fill="#9a6a52"/>' + [180, 198, 216].map(x => '<rect x="' + x + '" y="72" width="10" height="12" fill="#ffe2a0" opacity=".8"/>').join("") +
      /* catenary */
      '<path d="M0 98h400" stroke="#222" stroke-width="1.5"/><path d="M0 92q100 8 200 0t200 0" stroke="#222" stroke-width="1" fill="none"/>' +
      [40, 360].map(x => '<rect x="' + (x - 3) + '" y="60" width="6" height="140" fill="#4a4f56"/><rect x="' + (x - 20) + '" y="88" width="40" height="4" fill="#4a4f56"/>').join("") +
      tr +
      /* canopy + platform */
      '<rect x="0" y="12" width="400" height="10" fill="#3a3f46"/><rect x="0" y="22" width="400" height="4" fill="#5a6068"/>' +
      [120, 280].map(x => '<rect x="' + (x - 3) + '" y="26" width="6" height="168" fill="#5a6068"/>').join("") +
      '<rect x="110" y="32" width="180" height="30" rx="3" fill="#111"/><text x="120" y="52" ' + font + ' font-size="14" fill="#fff">Temple University</text>' +
      '<rect x="252" y="38" width="30" height="18" rx="4" fill="' + RR + '"/><text x="267" y="51" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">RR</text>' +
      '<rect x="0" y="192" width="400" height="8" fill="#f2c200"/><rect x="0" y="200" width="400" height="60" fill="#9a958c"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 200v60" stroke="#8a857c" stroke-width="1"/>').join("") +
      /* lamp posts with cherry banners */
      [70, 330].map(x => '<g><rect x="' + (x - 2) + '" y="206" width="4" height="54" fill="#2a2a2a"/><circle class="ho-glow" cx="' + x + '" cy="204" r="5" fill="#fff2b0"/><g class="ho-flag"><rect x="' + (x + 2) + '" y="214" width="16" height="26" fill="' + CHERRY + '"/><rect x="' + (x + 2) + '" y="234" width="16" height="4" fill="#fff"/></g></g>').join(""),
      sky("ho-s1", "#2a3a6a", "#e89a6a"));
  }

  /* 2. The Adelphi Ballroom, West Philly, 1967 */
  function hoadelphi() {
    const band = (x, col) => '<rect x="' + x + '" y="132" width="26" height="30" rx="2" fill="#2a2a2a" stroke="#555"/><rect x="' + (x + 3) + '" y="136" width="20" height="16" fill="#444"/>' +
      '<circle cx="' + (x + 50) + '" cy="150" r="13" fill="' + col + '" stroke="#111" stroke-width="2"/><circle cx="' + (x + 50) + '" cy="150" r="6" fill="#eee"/><ellipse cx="' + (x + 36) + '" cy="136" rx="9" ry="2.5" fill="#d8b860"/><ellipse cx="' + (x + 66) + '" cy="134" rx="9" ry="2.5" fill="#d8b860"/>' +
      '<rect x="' + (x + 84) + '" y="112" width="2" height="50" fill="#bbb"/><circle cx="' + (x + 85) + '" cy="110" r="3.5" fill="#888"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1022"/>' +
      /* ceiling + mirror ball */
      '<rect x="0" y="0" width="400" height="30" fill="#2a1a30"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 0v30" stroke="#3a2840" stroke-width="2"/>').join("") +
      '<path d="M200 0v22" stroke="#999" stroke-width="1.5"/><circle cx="200" cy="34" r="13" fill="#b8c0cc"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect class="ho-dot' + (i % 2 ? " ho-dot2" : "") + '" x="' + (192 + (i % 4) * 5) + '" y="' + (26 + Math.floor(i / 4) * 6) + '" width="4" height="4" fill="#fff"/>').join("") +
      Array.from({ length: 16 }, (_, i) => '<circle class="ho-dot' + (i % 2 ? " ho-dot2" : "") + '" cx="' + ((i * 61) % 380 + 10) + '" cy="' + (50 + (i * 37) % 70) + '" r="1.6" fill="#fff" opacity=".8"/>').join("") +
      /* spotlights */
      '<g class="ho-sw"><path d="M110 0l-30 170h60z" fill="#fff6c8" opacity=".12"/></g><g class="ho-sw ho-sw2"><path d="M290 0l-30 170h60z" fill="#fff6c8" opacity=".12"/></g>' +
      /* banner */
      '<rect x="74" y="58" width="252" height="34" rx="3" fill="' + CORAL + '" stroke="#000" stroke-width="2"/>' +
      '<text x="200" y="74" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="1">BATTLE OF THE BANDS</text>' +
      mono("1967", 200 - monoW("1967", 11) / 2, 88, 11, "#fff") +
      /* stage */
      '<rect x="20" y="162" width="300" height="16" fill="#6a3a22"/><rect x="20" y="160" width="300" height="4" fill="#8a5232"/><rect x="20" y="178" width="300" height="30" fill="#4a2616"/>' +
      band(36, GOLD) + band(176, BLUE) +
      '<text x="96" y="124" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">THE TEMPTONES</text><text x="236" y="124" text-anchor="middle" ' + font + ' font-size="9" fill="' + BLUE + '">THE MASTERS</text>' +
      /* service elevator on the right wall */
      '<rect x="332" y="96" width="60" height="112" fill="#3a3a40"/><rect x="338" y="120" width="24" height="88" fill="#8a9098" stroke="#555"/><rect x="362" y="120" width="24" height="88" fill="#8a9098" stroke="#555"/>' +
      '<path d="M342 128h16M366 128h16" stroke="#6a7078"/><circle cx="362" cy="108" r="9" fill="#d8b860" stroke="#000"/><g class="ho-arr" style="transform-origin:362px 108px"><path d="M362 108l0 -7" stroke="#000" stroke-width="2"/></g>' +
      '<text x="362" y="92" text-anchor="middle" ' + font + ' font-size="7" fill="#ddd">SERVICE</text>' +
      /* dance floor */
      '<rect x="0" y="208" width="400" height="52" fill="#3a2418"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 208l-20 52" stroke="#2a180e" stroke-width="2"/>').join("") +
      Array.from({ length: 11 }, (_, i) => { const x = 22 + i * 34; return '<g class="ho-b' + (i % 2 ? " ho-b2" : "") + '"><circle cx="' + x + '" cy="222" r="6" fill="#120a14"/><rect x="' + (x - 7) + '" y="228" width="14" height="26" rx="5" fill="' + ["#2a2238", "#3a1a2a", "#1a2a3a"][i % 3] + '"/></g>'; }).join(""));
  }

  /* 3. The abandoned luncheonette (Rosedale Diner, outside Pottstown) */
  function holunch() {
    return svg(
      '<rect width="400" height="260" fill="url(#ho-s3)"/>' +
      /* far hills + trees */
      '<path d="M0 128q60 -20 120 -6t130 -10t150 8v40h-400z" fill="#6a7a5a"/>' +
      [30, 66, 330, 370].map(x => '<rect x="' + (x - 2) + '" y="104" width="4" height="30" fill="#4a3a2a"/><circle cx="' + x + '" cy="100" r="16" fill="#4a5a3a"/>').join("") +
      /* crows */
      '<g class="ho-crow"><path d="M0 46q6 -6 12 0q6 -6 12 0" stroke="#222" stroke-width="2" fill="none"/></g><g class="ho-crow ho-crow2"><path d="M0 64q5 -5 10 0q5 -5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      /* the diner: barrel roof, stainless bands gone to rust */
      '<path d="M70 110q130 -26 260 0v6h-260z" fill="#7a7068"/>' +
      '<rect x="70" y="114" width="260" height="76" fill="#a8a29a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="70" y="' + (166 + i * 4) + '" width="260" height="2" fill="#8a847c"/>').join("") +
      '<rect x="70" y="160" width="260" height="6" fill="#8a2a22"/>' +
      '<path d="M100 166q20 10 6 24M220 166q-10 12 4 24M290 166q14 8 0 24" stroke="#8a5a2a" stroke-width="3" opacity=".7" fill="none"/>' +
      /* windows: some boarded, some broken */
      Array.from({ length: 8 }, (_, i) => { const x = 82 + i * 30; return '<rect x="' + x + '" y="124" width="24" height="30" fill="#2a2a30"/>' +
        (i % 3 === 0 ? '<rect x="' + (x - 2) + '" y="130" width="28" height="6" fill="#9a7a4a" transform="rotate(-8 ' + (x + 12) + ' 133)"/><rect x="' + (x - 2) + '" y="142" width="28" height="6" fill="#8a6a3a" transform="rotate(6 ' + (x + 12) + ' 145)"/>' :
          '<path d="M' + (x + 4) + ' 128l8 10l-4 8l10 4" stroke="#7a8a9a" stroke-width="1" fill="none"/>'); }).join("") +
      /* door + sign frame, letters long gone */
      '<rect x="186" y="128" width="28" height="62" fill="#3a3430"/><rect x="190" y="132" width="20" height="26" fill="#2a2a30"/>' +
      '<rect x="150" y="82" width="100" height="18" fill="#5a524a" stroke="#3a3430" stroke-width="2"/><text x="200" y="95" text-anchor="middle" ' + font + ' font-size="11" fill="#8a2a22" opacity=".55" letter-spacing="2">DINER</text>' +
      '<rect x="160" y="100" width="4" height="12" fill="#3a3430"/><rect x="236" y="100" width="4" height="12" fill="#3a3430"/>' +
      /* ground, cracked lot */
      '<rect x="0" y="190" width="400" height="70" fill="#6a6258"/><path d="M40 210l30 6l10 14M240 220l40 -6l20 16M330 200l-20 20" stroke="#4a443c" stroke-width="1.5" fill="none"/>' +
      /* weeds */
      Array.from({ length: 22 }, (_, i) => { const x = 6 + i * 18 + (i % 3) * 3, h = 18 + (i * 7) % 22; return '<path class="ho-weed' + (i % 2 ? " ho-weed2" : "") + '" d="M' + x + ' 196q-3 -' + h / 2 + ' 2 -' + h + 'M' + (x + 4) + ' 196q4 -' + h / 2 + ' 0 -' + (h - 6) + '" stroke="' + (i % 3 ? "#6a7a3a" : "#8a8a4a") + '" stroke-width="2" fill="none"/>'; }).join("") +
      Array.from({ length: 14 }, (_, i) => { const x = 10 + i * 29, h = 24 + (i * 11) % 20; return '<path class="ho-weed' + (i % 2 ? "" : " ho-weed2") + '" d="M' + x + ' 252q-4 -' + h / 2 + ' 3 -' + h + 'M' + (x + 6) + ' 252q5 -' + h / 2 + ' 0 -' + (h - 8) + '" stroke="#5a6a2a" stroke-width="2.5" fill="none"/>'; }).join(""),
      sky("ho-s3", "#8a9098", "#c8c4b8"));
  }

  /* 4. JFK Stadium, Live Aid, July 13 1985 */
  function holiveaid() {
    return svg(
      '<rect width="400" height="260" fill="url(#ho-s4)"/>' +
      /* horseshoe stands: concrete tiers curving around */
      '<path d="M0 70q200 -40 400 0v90h-400z" fill="#b8b0a2"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (78 + i * 13) + 'q200 -40 400 0" stroke="#9a9284" stroke-width="1.5" fill="none"/>').join("") +
      Array.from({ length: 120 }, (_, i) => { const x = (i * 37) % 400, row = Math.floor(i / 20), y = 84 + row * 12 - 26 * Math.sin(Math.PI * x / 400); return '<circle cx="' + x + '" cy="' + y.toFixed(1) + '" r="2" fill="' + ["#e86a5a", "#f2e6c8", "#5a8ad8", "#f2cf6b", "#222"][i % 5] + '"/>'; }).join("") +
      /* the stage: scaffold, roof, speaker stacks, screen */
      '<rect x="110" y="40" width="180" height="10" fill="#2a2a2e"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (112 + i * 29) + '" y="50" width="4" height="100" fill="#3a3a40"/>').join("") +
      '<path d="M112 60l170 60M112 120l170 -60" stroke="#3a3a40" stroke-width="2"/>' +
      '<rect x="80" y="70" width="34" height="90" fill="#1a1a1e"/><rect x="286" y="70" width="34" height="90" fill="#1a1a1e"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle cx="97" cy="' + (80 + i * 14) + '" r="5" fill="#333"/><circle cx="303" cy="' + (80 + i * 14) + '" r="5" fill="#333"/>').join("") +
      '<rect x="150" y="62" width="100" height="44" fill="#16243a" stroke="#000" stroke-width="2"/>' +
      '<text x="200" y="80" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="1">JULY 13</text>' + mono("1985", 200 - monoW("1985", 12) / 2, 98, 12, GOLD) +
      '<rect x="116" y="140" width="170" height="20" fill="#2a2a2e"/><rect x="116" y="138" width="170" height="4" fill="#4a4a50"/>' +
      [150, 200, 250].map(x => '<rect x="' + (x - 1) + '" y="118" width="2" height="22" fill="#ccc"/><circle cx="' + x + '" cy="117" r="2.5" fill="#888"/>').join("") +
      '<g class="ho-sw"><path d="M130 50l-24 90h48z" fill="#fff6c8" opacity=".18"/></g><g class="ho-sw ho-sw2"><path d="M270 50l-24 90h48z" fill="#fff6c8" opacity=".18"/></g>' +
      /* field crowd */
      '<rect x="0" y="160" width="400" height="100" fill="#3a6a3a"/>' +
      Array.from({ length: 60 }, (_, i) => { const x = 4 + (i % 20) * 20 + (Math.floor(i / 20) % 2) * 10, y = 176 + Math.floor(i / 20) * 26; return '<g class="ho-b' + (i % 2 ? " ho-b2" : "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="#2a1e18"/><rect x="' + (x - 7) + '" y="' + (y + 6) + '" width="14" height="18" rx="5" fill="' + ["#e8e2d6", "#c8402e", "#1f4a8a", "#f2cf6b", "#4a8a5a"][i % 5] + '"/>' + (i % 4 === 0 ? '<path d="M' + (x + 5) + ' ' + (y + 4) + 'l6 -12" stroke="#2a1e18" stroke-width="3"/>' : '') + '</g>'; }).join(""),
      sky("ho-s4", "#4a8ad0", "#bfe0f2"));
  }

  /* 5. S Quince St and Pine St */
  function hocorner() {
    const house = (x, w, col) => '<rect x="' + x + '" y="112" width="' + w + '" height="114" fill="' + col + '"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + x + ' ' + (120 + i * 18) + 'h' + w + '" stroke="#5a2a20" stroke-width=".8" opacity=".5"/>').join("") +
      [0, 1].map(r => '<rect class="' + (r ? "ho-glow" : "") + '" x="' + (x + w / 2 - 9) + '" y="' + (124 + r * 36) + '" width="18" height="24" fill="#ffd98a" opacity=".85"/><rect x="' + (x + w / 2 - 15) + '" y="' + (124 + r * 36) + '" width="5" height="24" fill="#1a1a1a"/><rect x="' + (x + w / 2 + 10) + '" y="' + (124 + r * 36) + '" width="5" height="24" fill="#1a1a1a"/>').join("") +
      '<rect x="' + x + '" y="108" width="' + w + '" height="5" fill="#e8e2d6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ho-s5)"/>' + stars(14) +
      /* Pennsylvania Hospital's Pine Building: Georgian brick, white trim, the white cupola */
      '<rect x="120" y="58" width="160" height="54" fill="#8a4a36"/><path d="M114 60h172l-86 -22z" fill="#e8e2d6"/><path d="M128 58h144l-72 -16z" fill="#8a4a36"/>' +
      '<rect x="186" y="22" width="28" height="18" fill="#f2efe6"/><path d="M182 24h36l-18 -12z" fill="#e8e2d6"/><rect x="198" y="2" width="4" height="12" fill="#e8e2d6"/><circle cx="200" cy="2" r="2" fill="' + GOLD + '"/>' +
      [190, 200, 210].map(x => '<rect x="' + (x - 2) + '" y="26" width="4" height="10" fill="#3a3448"/>').join("") +
      Array.from({ length: 12 }, (_, i) => '<rect class="' + (i % 4 ? "" : "ho-glow ho-glow2") + '" x="' + (130 + (i % 6) * 24) + '" y="' + (68 + Math.floor(i / 6) * 22) + '" width="10" height="14" fill="' + (i % 3 ? "#3a3048" : "#ffd98a") + '" stroke="#e8e2d6" stroke-width="1.2"/>').join("") +
      '<rect x="0" y="86" width="110" height="30" fill="#2a2440"/><rect x="290" y="80" width="110" height="36" fill="#2a2440"/>' +
      /* Quince St row homes */
      house(0, 64, "#9a4a3a") + house(64, 60, "#8a4234") +
      /* the HALL & OATES mailbox on the stoop */
      '<rect x="40" y="200" width="22" height="16" rx="2" fill="#2a2a2a" stroke="#000"/><rect x="36" y="216" width="30" height="10" fill="#c8c0b0"/><rect x="42" y="206" width="18" height="6" fill="' + GOLD + '"/><text x="51" y="211" text-anchor="middle" ' + font + ' font-size="4.2" fill="#000">HALL &amp; OATES</text>' +
      /* brick wall with the tags */
      '<rect x="124" y="140" width="276" height="86" fill="#7a3e30"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M124 ' + (148 + i * 8) + 'h276" stroke="#6a3226" stroke-width="1"/>').join("") +
      tag("HALL &amp; OATES", 132, 192, 30, GOLD, -6) + tag("ROCK 'N SOUL", 140, 216, 16, BLUE, -3) + tag("QUINCE ST", 262, 214, 16, CORAL, -3) +
      /* gas-style lamp */
      '<rect x="112" y="150" width="4" height="76" fill="#1a1a1a"/><path d="M106 150h16l-3 -14h-10z" fill="#1a1a1a"/><rect class="ho-glow" x="109" y="139" width="10" height="10" fill="#ffe6a0"/>' +
      /* street */
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + (i * 26) + '" y="232" width="22" height="9" rx="2" fill="#6a665e"/>').join("") +
      '<g class="ho-car"><rect x="0" y="240" width="58" height="13" rx="5" fill="' + BLUE + '"/><rect x="12" y="232" width="32" height="10" rx="3" fill="' + BLUE + '"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="46" cy="253" r="4" fill="#111"/></g>' +
      /* signs */
      '<rect x="384" y="74" width="6" height="152" fill="#2f2f2f"/>' + sign(300, 76, 94, "S Quince St") + sign(300, 102, 94, "Pine St") +
      '<g class="ho-sp"><circle cx="292" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ho-sp ho-sp2"><circle cx="298" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("ho-s5", "#140f2c", "#7a4a5a"));
  }

  window.SCENES = { hostation: hostation, hoadelphi: hoadelphi, holunch: holunch, holiveaid: holiveaid, hocorner: hocorner };
})();
