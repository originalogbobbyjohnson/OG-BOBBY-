/* reeddollaz scenes (Regions tab: Philadelphia; Bartram Village, Southwest Philly). CSS classes prefixed rd- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rdglow{0%,100%{opacity:.45}50%{opacity:1}}.rd-glow{animation:rdglow 2.2s ease-in-out infinite}.rd-g2{animation-delay:-1.1s}' +
    '@keyframes rdspark{0%,100%{opacity:0}50%{opacity:1}}.rd-spk{animation:rdspark .9s steps(2) infinite}' +
    '@keyframes rdsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.rd-sway{transform-box:fill-box;transform-origin:50% 100%;animation:rdsway 3s ease-in-out infinite}.rd-sw2{animation-delay:-1.5s}' +
    '@keyframes rdsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.rd-sw{transform-box:fill-box;transform-origin:50% 0%;animation:rdsweep 3.4s ease-in-out infinite}.rd-swb{animation-delay:-1.7s}' +
    '@keyframes rdbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.rd-bob{animation:rdbob .8s ease-in-out infinite}.rd-bob2{animation-delay:-.4s}' +
    '@keyframes rdblink{0%,49%{opacity:1}50%,100%{opacity:0}}.rd-blink{animation:rdblink 1s steps(1) infinite}' +
    '@keyframes rdbar{0%{width:10px}100%{width:150px}}.rd-bar{animation:rdbar 4s linear infinite}' +
    '@keyframes rdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rd-sp{animation:rdspray 1.4s ease-out infinite}.rd-sp2{animation-delay:.45s}' +
    '@keyframes rdsmoke{0%{transform:translate(0,0);opacity:.55}100%{transform:translate(18px,-40px);opacity:0}}.rd-smk{animation:rdsmoke 4s ease-out infinite}.rd-smk2{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "rd-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const MINT = "#7ad7a0", GOLD = "#f2c14e", ORANGE = "#e0702a", TGREEN = "#5a960a";
  const tree = (x, y, s, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="rd-sway' + (cls || "") + '"><rect x="-3" y="-4" width="6" height="34" fill="#5a3e2a"/><circle cx="0" cy="-14" r="20" fill="#3f7d3a"/><circle cx="-12" cy="-6" r="13" fill="#4a8c42"/><circle cx="12" cy="-8" r="14" fill="#356e32"/></g></g>';

  /* 1. 54th St & Lindbergh Blvd on SEPTA's T5 trolley (the old Route 36): street-level stop on Lindbergh, the overhead wire with its spark, the green T5 stop sign, the white-and-red trolley pulling in, Southwest rowhomes and trees behind */
  function rdstation() {
    const car = '<g class="anim-train"><rect x="40" y="116" width="250" height="78" rx="9" fill="#f2f2ee" stroke="#8a9098" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (78 + i * 40) + '" y="128" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="128" width="24" height="56" rx="2" fill="#24323e"/><rect x="40" y="164" width="250" height="6" fill="#c8202c"/><rect x="40" y="172" width="250" height="4" fill="#1f4e9a"/>' +
      '<rect x="44" y="118" width="74" height="10" rx="2" fill="#111"/><text x="81" y="126" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">T5 EASTWICK</text>' +
      '<path d="M150 116l18 -38h10" stroke="#3a3e46" stroke-width="3" fill="none"/><circle cx="44" cy="186" r="3.5" fill="#fff6c2"/>' +
      '<circle cx="90" cy="196" r="9" fill="#222"/><circle cx="240" cy="196" r="9" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rd1)"/>' +
      [0, 80, 160, 240, 320].map((x, i) => '<rect x="' + x + '" y="60" width="80" height="86" fill="' + ["#9a5a40", "#8a6a5a", "#a05a3e", "#7a5e50", "#94604a"][i] + '"/><rect x="' + x + '" y="56" width="80" height="6" fill="#4a3a32"/>' +
        '<rect x="' + (x + 10) + '" y="72" width="22" height="22" fill="#2a3442"/><rect x="' + (x + 46) + '" y="72" width="22" height="22" fill="' + (i % 2 ? "#ffd98a" : "#2a3442") + '"/>' +
        '<rect x="' + (x + 4) + '" y="104" width="72" height="5" fill="#e8e4dc"/>').join("") +
      tree(30, 120, 0.9) + tree(370, 118, 1, " rd-sw2") +
      '<path d="M0 78h400" stroke="#2a2a2a" stroke-width="1.5"/><circle class="rd-spk" cx="178" cy="78" r="4" fill="#bfe6ff"/>' +
      '<rect x="0" y="146" width="400" height="16" fill="#bdb8ae"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/>' +
      '<path d="M0 206h400M0 216h400" stroke="#8a8a8a" stroke-width="3"/>' + car +
      '<rect x="330" y="96" width="5" height="66" fill="#6b7178"/><rect x="312" y="76" width="42" height="34" rx="4" fill="' + TGREEN + '" stroke="#fff" stroke-width="1.5"/><text x="333" y="98" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">T5</text>' +
      '<rect x="296" y="112" width="74" height="14" rx="2" fill="#111"/><text x="333" y="122" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">54th - Lindbergh</text>',
      sky("rd1", "#8ec2ea", "#f2e2c8"));
  }

  /* 2. Bartram Village, the 1940s garden-apartment projects where he grew up: long two-story red-brick rows with white trim, the courtyard lawn and trees between them, a kite up over the roofs, clothes on the line */
  function rdvillage() {
    const row = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="62" fill="#9c4a34" stroke="#6a2e20" stroke-width="2"/><path d="M' + (x - 4) + ' ' + y + 'h' + (w + 8) + 'l-8 -12h' + (-w + 8) + 'z" fill="#5a4a44"/>' +
      Array.from({ length: Math.floor(w / 26) }, (_, i) => '<rect x="' + (x + 8 + i * 26) + '" y="' + (y + 10) + '" width="14" height="14" fill="' + ((i * 3 + x) % 7 === 0 ? "#ffd98a" : "#2a3442") + '" stroke="#f4f1ea" stroke-width="1.5"/><rect x="' + (x + 8 + i * 26) + '" y="' + (y + 36) + '" width="14" height="14" fill="#2a3442" stroke="#f4f1ea" stroke-width="1.5"/>').join("") +
      Array.from({ length: Math.floor(w / 78) }, (_, i) => '<rect x="' + (x + 30 + i * 78) + '" y="' + (y + 40) + '" width="14" height="22" fill="#f4f1ea"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rd2)"/>' +
      row(12, 66, 170) + row(222, 66, 170) +
      '<rect x="0" y="128" width="400" height="132" fill="#6aa04a"/><path d="M196 128l-40 132h88z" fill="#c9c2b2"/>' +
      tree(200, 120, 1.1) + tree(60, 168, 1, " rd-sw2") + tree(340, 172, 1.05) +
      '<path d="M90 214h110" stroke="#e8e4dc" stroke-width="1.5"/><path d="M90 206v26M200 206v26" stroke="#6b7178" stroke-width="3"/>' +
      [[100, "#e0702a"], [124, "#7ad7a0"], [150, "#f2c14e"], [174, "#fff"]].map(([x, c]) => '<rect class="rd-sway rd-sw2" x="' + x + '" y="214" width="16" height="18" fill="' + c + '"/>').join("") +
      '<g class="rd-bob"><path d="M300 24l14 16l-14 16l-14 -16z" fill="' + GOLD + '" stroke="#7a5a1a" stroke-width="1.5"/><path d="M300 56q-6 20 4 34q8 14 0 30" stroke="#555" stroke-width="1.2" fill="none"/></g>',
      sky("rd2", "#7ab8e6", "#e8f0d8"));
  }

  /* 3. The battle stage (Philly vs Harrisburg, 2004, and every league since): two mic stands squared up, ROUND 3 on the card, the crowd circled tight around, the lights sweeping, the camera red light on */
  function rdbattle() {
    const mic = (x) => '<path d="M' + x + ' 150v70M' + (x - 16) + ' 220h32" stroke="#2a2a2e" stroke-width="4"/><rect x="' + (x - 6) + '" y="128" width="12" height="22" rx="6" fill="#c9ced6" stroke="#555" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="#0b0d14"/>' +
      '<rect x="0" y="40" width="400" height="110" fill="#1e2028"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 50) + ' 40v110" stroke="#16181e" stroke-width="2"/>').join("") +
      tag("PHILLY", 30, 104, 40, MINT, -5) + tag("VS", 186, 92, 30, "#fff", -3) + tag("THE WORLD", 228, 112, 26, GOLD, -4) +
      '<path class="rd-sw" d="M100 0l-50 210h100z" fill="#fff6c8" opacity=".14"/><path class="rd-sw rd-swb" d="M300 0l-50 210h100z" fill="' + MINT + '" opacity=".14"/>' +
      '<rect x="90" y="0" width="20" height="10" fill="#333"/><rect x="290" y="0" width="20" height="10" fill="#333"/>' +
      '<ellipse cx="200" cy="222" rx="180" ry="30" fill="#191b24"/>' + mic(150) + mic(250) +
      '<rect x="170" y="150" width="60" height="30" rx="3" fill="#f4f1ea"/><text x="200" y="164" text-anchor="middle" ' + font + ' font-size="9" fill="#111">ROUND</text><text x="200" y="177" text-anchor="middle" ' + font + ' font-size="13" fill="' + ORANGE + '">3</text>' +
      '<g opacity=".95">' + Array.from({ length: 14 }, (_, i) => '<g class="rd-bob' + (i % 2 ? " rd-bob2" : "") + '"><circle cx="' + (10 + i * 29) + '" cy="238" r="8" fill="#05060a"/><rect x="' + (i * 29) + '" y="244" width="20" height="20" rx="5" fill="#05060a"/></g>').join("") + '</g>' +
      '<path d="M396 160L364 196" stroke="#3a3e46" stroke-width="4"/><rect x="346" y="190" width="26" height="16" rx="2" fill="#2a2a2e"/><circle cx="344" cy="198" r="5" fill="#5a7a9a"/><circle class="rd-blink" cx="368" cy="194" r="2.2" fill="#e0533d"/>',
      "");
  }

  /* 4. 2005, before anybody: the bedroom desk with the boxy CRT monitor, a freestyle clip playing in a plain web video player, the view counter climbing, the webcam on top with its light on, the dial-up modem blinking */
  function rdweb() {
    return svg(
      '<rect width="400" height="260" fill="#232a36"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 0v180" stroke="#2a3240" stroke-width="18"/>').join("") +
      '<rect x="292" y="20" width="90" height="70" fill="#1a2030" stroke="#5a4a3a" stroke-width="4"/><circle cx="320" cy="44" r="6" fill="#f4f1ea" class="rd-glow"/>' + stars(0) +
      '<rect x="0" y="180" width="400" height="80" fill="#6a4a32"/><rect x="0" y="176" width="400" height="8" fill="#8a6446"/>' +
      '<rect x="70" y="44" width="200" height="140" rx="10" fill="#d8d2c2" stroke="#8a8474" stroke-width="3"/><rect x="86" y="58" width="168" height="108" rx="6" fill="#0e1218"/>' +
      '<rect x="94" y="64" width="152" height="80" fill="#2a3a4a"/><path d="M94 144l40 -36l28 22l30 -30l54 44z" fill="#3a5a4a"/>' +
      '<circle cx="170" cy="104" r="16" fill="#fff" opacity=".85"/><path d="M164 96v16l14 -8z" fill="#2a3a4a"/>' +
      '<rect x="94" y="148" width="152" height="6" rx="3" fill="#3a4250"/><rect class="rd-bar" x="94" y="148" width="40" height="6" rx="3" fill="' + MINT + '"/>' +
      '<text x="96" y="163" ' + font + ' font-size="8" fill="#cfd6e0">REED DOLLAZ FREESTYLE</text><text x="244" y="163" text-anchor="end" ' + font + ' font-size="8" fill="' + GOLD + '" class="rd-glow">VIEWS ++</text>' +
      '<rect x="146" y="184" width="48" height="10" fill="#bdb6a6"/><rect x="120" y="192" width="100" height="8" rx="2" fill="#a8a294"/>' +
      '<rect x="150" y="28" width="40" height="18" rx="9" fill="#2a2a2e"/><circle cx="170" cy="37" r="5" fill="#5a7a9a"/><circle class="rd-blink" cx="184" cy="34" r="2" fill="#7ad7a0"/>' +
      '<rect x="270" y="198" width="90" height="16" rx="2" fill="#2a2a2e"/>' + Array.from({ length: 5 }, (_, i) => '<circle class="rd-blink" style="animation-delay:-' + (i * 0.3).toFixed(1) + 's" cx="' + (282 + i * 16) + '" cy="206" r="2.5" fill="' + (i % 2 ? MINT : GOLD) + '"/>').join("") +
      '<rect x="40" y="200" width="70" height="40" rx="3" fill="#e8e4dc"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M46 ' + (210 + i * 7) + 'h' + (52 - (i % 2) * 14) + '" stroke="#5a6a8a" stroke-width="1.5"/>').join(""),
      "");
  }

  /* 5. S 56th St and Lindbergh Blvd at Bartram Village: green signs, REED DOLLAZ tagged on the brick wall with DOLLA DAY and GENERAL, the old refinery's towers and tanks across the Schuylkill behind, a slow smoke trail */
  function rdcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rd5)"/>' + stars(12) +
      '<g fill="#2a2e3a"><rect x="120" y="44" width="10" height="92"/><rect x="146" y="30" width="8" height="106"/><rect x="176" y="58" width="14" height="78"/><rect x="220" y="70" width="60" height="66"/><rect x="290" y="88" width="80" height="48"/></g>' +
      '<g fill="#3a3e4c"><rect x="220" y="96" width="44" height="40" rx="6"/><rect x="40" y="100" width="60" height="36" rx="8"/><rect x="300" y="104" width="34" height="32" rx="6"/></g>' +
      '<path d="M150 104h70M120 80h60" stroke="#3a3e4c" stroke-width="2"/>' +
      [[125, 40], [150, 26]].map(([x, y], i) => '<circle class="rd-glow' + (i ? " rd-g2" : "") + '" cx="' + x + '" cy="' + y + '" r="2.5" fill="#ff5a4a"/>').join("") +
      '<g class="rd-smk"><circle cx="150" cy="22" r="6" fill="#9aa0aa" opacity=".4"/></g><g class="rd-smk rd-smk2"><circle cx="150" cy="22" r="5" fill="#9aa0aa" opacity=".35"/></g>' +
      '<rect x="0" y="126" width="400" height="10" fill="#2a3a52"/>' +
      '<rect x="0" y="132" width="400" height="92" fill="#8a4430"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#743726" stroke-width="1"/>').join("") +
      tag("REED", 18, 186, 52, MINT, -6) + tag("DOLLAZ", 150, 190, 44, GOLD, -5) + tag("DOLLA DAY", 24, 216, 18, "#fff", -3) + tag("GENERAL", 178, 216, 18, ORANGE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(316, 96, 82, "S 56th St") + sign(290, 122, 108, "Lindbergh Blvd") +
      '<g class="rd-sp"><circle cx="300" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="rd-sp rd-sp2"><circle cx="306" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("rd5", "#141c34", "#d0784a"));
  }

  window.SCENES = { rdstation: rdstation, rdvillage: rdvillage, rdbattle: rdbattle, rdweb: rdweb, rdcorner: rdcorner };
})();
