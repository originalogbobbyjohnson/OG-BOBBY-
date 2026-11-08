/* veeze scenes (Regions tab: Detroit; northwest side, W 7 Mile & Southfield, "7 Mile popstar"). CSS classes prefixed vz- (the page's own anim-train is kept).
   1 DDOT Route 46 Southfield pulling up to the Southfield & 7 Mile stop on the service drive, the Southfield Freeway sunk in its trench below, bungalows at night.
   2 Mumford High School on Wyoming (his school): the new brick-and-glass building, powder blue and burgundy MUSTANGS banner, the flag waving.
   3 His dad's car wash on Livernois (near his dad's and grandma's block): wash bay, spinning brushes, suds and bubbles, a navy car rolling through.
   4 The Ganger Tour stage: navy-blue light wash, rolling waves on the screen ("Navy Wavy"), lights sweeping, the crowd's phone lights.
   5 W 7 Mile Rd and the Southfield Fwy service drive: green signs, VEEZE tagged with GANGER and NAVY WAVY, the Gothic stone tower of Marygrove's Madame Cadillac Hall far off. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes vztw{0%,100%{opacity:.25}50%{opacity:1}}.vz-tw{animation:vztw 1.6s ease-in-out infinite}.vz-tw2{animation-delay:-.8s}' +
    '@keyframes vzcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.vz-car{animation:vzcar 5s linear infinite}.vz-car2{animation-delay:-2.5s}' +
    '@keyframes vzflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.vz-flag{transform-box:fill-box;transform-origin:0 50%;animation:vzflag 1.4s ease-in-out infinite}' +
    '@keyframes vzspin{to{transform:rotate(360deg)}}.vz-spin{transform-box:fill-box;transform-origin:50% 50%;animation:vzspin 1.2s linear infinite}' +
    '@keyframes vzbub{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-60px);opacity:0}}.vz-bub{animation:vzbub 2.4s ease-in infinite}.vz-bub2{animation-delay:-.8s}.vz-bub3{animation-delay:-1.6s}' +
    '@keyframes vzroll{0%{transform:translateX(-40px)}100%{transform:translateX(40px)}}.vz-roll{animation:vzroll 4s ease-in-out infinite alternate}' +
    '@keyframes vzsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.vz-sw{transform-box:fill-box;transform-origin:50% 0;animation:vzsweep 3s ease-in-out infinite}.vz-sw2{animation-delay:-1.5s}' +
    '@keyframes vzwave{from{transform:translateX(0)}to{transform:translateX(-48px)}}.vz-wave{animation:vzwave 1.6s linear infinite}' +
    '@keyframes vzbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.vz-bob{animation:vzbob .8s ease-in-out infinite}.vz-bob2{animation-delay:-.4s}' +
    '@keyframes vzsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(16px,-24px);opacity:0}}.vz-sp{animation:vzsp 1.3s ease-out infinite}.vz-sp2{animation-delay:-.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const DDOT = "#0b6e4f", NAVY = "#1f3f8f", AQUA = "#5ab8ff", GOLD = "#ffd166", PBLUE = "#9cc9ec", BURG = "#7a1f35";
  const stars = (n, h) => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 53 + 17) % 400) + '" cy="' + ((i * 29 + 9) % h) + '" r="1.2" fill="#fff" class="vz-tw' + (i % 2 ? " vz-tw2" : "") + '"/>').join("");
  const bungalow = (x, y, c, lit) => '<rect x="' + x + '" y="' + y + '" width="60" height="40" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + y + 'l36 -22l36 22z" fill="#3a2e2a"/>' +
    '<rect x="' + (x + 8) + '" y="' + (y + 10) + '" width="14" height="12" fill="' + (lit ? "#ffd98a" : "#2a2a36") + '"/><rect x="' + (x + 38) + '" y="' + (y + 10) + '" width="14" height="12" fill="' + (lit ? "#2a2a36" : "#ffd98a") + '"/><rect x="' + (x + 25) + '" y="' + (y + 18) + '" width="10" height="22" fill="#4a3428"/>';
  const wavy = (x, y, w, c, sw) => { let d = 'M' + x + ' ' + y; for (let i = 0; i < w; i += 12) d += 'q3 -5 6 0t6 0'; return '<path d="' + d + '" stroke="' + c + '" stroke-width="' + (sw || 2) + '" fill="none"/>'; };

  /* 1. DDOT 46 Southfield at Southfield & 7 Mile */
  function vzstation() {
    const bus = '<g class="anim-train"><rect x="30" y="116" width="250" height="70" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
      '<rect x="30" y="164" width="250" height="12" fill="' + DDOT + '"/><rect x="30" y="160" width="250" height="4" fill="#ffcc33"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (70 + i * 40) + '" y="126" width="32" height="26" rx="3" fill="#24323c"/>').join("") +
      '<rect x="34" y="124" width="30" height="52" rx="3" fill="#2c3a44"/><path d="M49 124v52" stroke="#8a9096"/>' +
      '<rect x="34" y="118" width="74" height="8" rx="2" fill="#111"/><text x="71" y="124.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffcc33">46 SOUTHFIELD</text>' +
      '<circle cx="76" cy="188" r="13" fill="#1a1a1a"/><circle cx="76" cy="188" r="5" fill="#888"/><circle cx="236" cy="188" r="13" fill="#1a1a1a"/><circle cx="236" cy="188" r="5" fill="#888"/>' +
      '<circle cx="32" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#vzs1)"/>' + stars(16, 60) + '<circle cx="350" cy="30" r="12" fill="#f4eccf"/>' +
      bungalow(14, 76, "#6a5a7a", true) + bungalow(96, 76, "#5a6a6e", false) + bungalow(178, 76, "#7a6450", true) +
      /* freeway trench on the right, cars below */
      '<rect x="262" y="92" width="138" height="24" fill="#2e3036"/><rect x="262" y="90" width="138" height="4" fill="#9a9a96"/><path d="M262 104h138" stroke="#ffd36b" stroke-width="1.5" stroke-dasharray="10 8"/>' +
      '<g class="vz-car"><rect x="0" y="96" width="22" height="8" rx="3" fill="#d6d6d6"/><circle cx="2" cy="100" r="2" fill="#ff4a3a"/></g>' +
      '<rect x="262" y="58" width="128" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="326" y="73" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SOUTHFIELD FWY · M-39</text>' +
      '<rect x="0" y="116" width="400" height="80" fill="#a9a59c"/><rect x="0" y="194" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3f4148"/><path d="M0 232h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus + car("vz-car", 0, 240, NAVY) + car("vz-car vz-car2", 0, 240, "#c0c4ca") +
      '<rect x="306" y="112" width="5" height="84" fill="#555"/><rect x="290" y="100" width="38" height="20" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/><text x="309" y="114" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="294" y="124" width="30" height="14" rx="3" fill="#ffcc33"/><text x="309" y="135" text-anchor="middle" ' + font + ' font-size="10" fill="#111">7 46</text>' +
      '<rect x="196" y="204" width="194" height="26" rx="3" fill="#111"/><text x="206" y="222" ' + font + ' font-size="13" fill="#fff">Southfield &amp; 7 Mile</text>' +
      '<rect x="360" y="209" width="24" height="16" rx="3" fill="' + DDOT + '"/><text x="372" y="221" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">46</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DDOT ROUTE 46 · SOUTHFIELD · NORTHWEST SIDE</text>',
      sky("vzs1", "#070c26", "#2a3a7a"));
  }

  /* 2. Mumford High School on Wyoming */
  function vzschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#vzs2)"/>' +
      '<circle cx="70" cy="44" r="18" fill="#fff4c8" opacity=".9"/>' +
      /* new building: brick wings, glass center */
      '<rect x="40" y="96" width="320" height="96" fill="#8a4a3a"/><rect x="40" y="92" width="320" height="6" fill="#5a2e24"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (54 + i * 18) + '" y="110" width="12" height="30" fill="#bcd6ea"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (250 + i * 18) + '" y="110" width="12" height="30" fill="#bcd6ea"/>').join("") +
      '<rect x="160" y="74" width="80" height="118" fill="#5f87a8"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M' + (176 + i * 16) + ' 74v118" stroke="#d8e8f4" stroke-width="2"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<path d="M160 ' + (94 + i * 20) + 'h80" stroke="#d8e8f4" stroke-width="2"/>').join("") +
      '<rect x="150" y="66" width="100" height="10" fill="' + BURG + '"/>' +
      '<rect x="44" y="150" width="104" height="26" rx="2" fill="' + PBLUE + '" stroke="' + BURG + '" stroke-width="3"/><text x="96" y="168" text-anchor="middle" ' + font + ' font-size="13" fill="' + BURG + '">MUMFORD</text>' +
      '<rect x="252" y="150" width="104" height="26" rx="2" fill="' + BURG + '" stroke="' + PBLUE + '" stroke-width="3"/><text x="304" y="168" text-anchor="middle" ' + font + ' font-size="13" fill="' + PBLUE + '">MUSTANGS</text>' +
      '<rect x="182" y="160" width="36" height="32" fill="#2a3a4a"/><path d="M200 160v32" stroke="#d8e8f4"/>' +
      /* flagpole */
      '<rect x="374" y="40" width="3" height="152" fill="#ccc"/><g class="vz-flag"><rect x="377" y="42" width="22" height="14" fill="' + PBLUE + '"/><rect x="377" y="49" width="22" height="7" fill="' + BURG + '"/></g>' +
      '<rect x="0" y="192" width="400" height="20" fill="#c9c4b8"/><rect x="0" y="212" width="400" height="48" fill="#4a7a3a"/>' +
      '<path d="M0 212h400" stroke="#3a6a2e" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<circle cx="' + (20 + i * 62) + '" cy="226" r="10" fill="#2f5e26"/>').join("") +
      '<rect x="110" y="232" width="180" height="20" rx="3" fill="#111"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">WYOMING AVE · MUSTANG PRIDE</text>',
      sky("vzs2", "#7fb4e6", "#d8ecfa"));
  }

  /* 3. His dad's car wash on Livernois */
  function vzwash() {
    const brush = (x) => '<g><rect x="' + (x - 2) + '" y="86" width="4" height="96" fill="#555"/><g class="vz-spin"><circle cx="' + x + '" cy="134" r="22" fill="none" stroke="' + AQUA + '" stroke-width="10" stroke-dasharray="6 5"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#vzs3)"/>' +
      '<rect x="20" y="50" width="360" height="150" fill="#e8e2d4"/><rect x="20" y="40" width="360" height="14" fill="' + NAVY + '"/>' +
      '<rect x="120" y="14" width="160" height="30" rx="4" fill="#111" stroke="' + AQUA + '" stroke-width="2"/><text x="200" y="36" text-anchor="middle" ' + font + ' font-size="17" fill="' + AQUA + '">CAR WASH</text>' +
      '<rect x="80" y="70" width="240" height="130" fill="#3a3f48"/><rect x="80" y="70" width="240" height="10" fill="#22262c"/>' +
      brush(120) + brush(280) +
      '<g class="vz-roll"><rect x="148" y="150" width="104" height="26" rx="8" fill="' + NAVY + '"/><rect x="168" y="134" width="62" height="20" rx="6" fill="' + NAVY + '"/>' +
      '<rect x="174" y="138" width="22" height="13" fill="#bfe3ff"/><rect x="202" y="138" width="22" height="13" fill="#bfe3ff"/><circle cx="170" cy="178" r="9" fill="#111"/><circle cx="230" cy="178" r="9" fill="#111"/></g>' +
      Array.from({ length: 9 }, (_, i) => '<circle cx="' + (140 + i * 14) + '" cy="' + (150 - (i % 3) * 6) + '" r="' + (3 + i % 3) + '" fill="#fff" opacity=".85" class="vz-bub' + (i % 3 ? " vz-bub" + (1 + i % 3) : "") + '"/>').join("") +
      '<rect x="30" y="80" width="40" height="60" rx="3" fill="#fff"/><text x="50" y="100" text-anchor="middle" ' + font + ' font-size="8" fill="' + NAVY + '">HAND</text><text x="50" y="112" text-anchor="middle" ' + font + ' font-size="8" fill="' + NAVY + '">WASH</text><text x="50" y="128" text-anchor="middle" ' + font + ' font-size="11" fill="#c0392b">$</text>' +
      '<rect x="330" y="80" width="40" height="60" rx="3" fill="#fff"/><text x="350" y="104" text-anchor="middle" ' + font + ' font-size="8" fill="' + NAVY + '">SOAP</text><text x="350" y="116" text-anchor="middle" ' + font + ' font-size="8" fill="' + NAVY + '">+ WAX</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#4a4c52"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52) + '" y="206" width="30" height="4" fill="#5ab8ff" opacity=".4"/>').join("") +
      '<rect x="100" y="226" width="200" height="22" rx="3" fill="#111"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LIVERNOIS · POPS\' SPOT</text>',
      sky("vzs3", "#86c5f0", "#e4f2fb"));
  }

  /* 4. The Ganger Tour stage, navy waves on the screen */
  function vzstage() {
    const crowd = Array.from({ length: 22 }, (_, i) => '<g class="vz-bob' + (i % 2 ? " vz-bob2" : "") + '"><circle cx="' + (10 + i * 18) + '" cy="' + (222 + (i % 3) * 4) + '" r="8" fill="#0a0d18"/><rect x="' + (2 + i * 18) + '" y="' + (228 + (i % 3) * 4) + '" width="16" height="40" rx="6" fill="#0a0d18"/>' +
      (i % 4 === 1 ? '<rect x="' + (14 + i * 18) + '" y="' + (200 + (i % 3) * 4) + '" width="5" height="8" rx="1" fill="#fff" class="vz-tw"/>' : '') + '</g>').join("");
    let waves = ''; for (let r = 0; r < 4; r++) { let d = 'M60 ' + (78 + r * 18); for (let i = 0; i < 26; i++) d += 'q6 -8 12 0t12 0'; waves += '<path d="' + d + '" stroke="' + (r % 2 ? AQUA : "#fff") + '" stroke-width="3" fill="none" opacity="' + (0.9 - r * 0.15) + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="#050816"/>' +
      '<rect x="60" y="40" width="280" height="110" rx="4" fill="' + NAVY + '" stroke="#2a2f40" stroke-width="4"/>' +
      '<clipPath id="vzclip"><rect x="62" y="42" width="276" height="106"/></clipPath><g clip-path="url(#vzclip)"><g class="vz-wave">' + waves + '</g></g>' +
      '<text x="200" y="74" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">GANGER</text>' +
      '<g class="vz-sw"><path d="M90 0l-30 200h60z" fill="' + AQUA + '" opacity=".18"/></g><g class="vz-sw vz-sw2"><path d="M310 0l-30 200h60z" fill="' + GOLD + '" opacity=".16"/></g>' +
      '<rect x="0" y="0" width="400" height="12" fill="#1a1d28"/>' + Array.from({ length: 8 }, (_, i) => '<circle cx="' + (30 + i * 48) + '" cy="10" r="4" fill="' + (i % 2 ? AQUA : GOLD) + '" class="vz-tw' + (i % 2 ? " vz-tw2" : "") + '"/>').join("") +
      '<rect x="0" y="166" width="400" height="30" fill="#1c2030"/><rect x="0" y="162" width="400" height="6" fill="#2e3448"/>' +
      '<rect x="190" y="130" width="3" height="36" fill="#888"/><rect x="186" y="124" width="10" height="10" rx="4" fill="#333"/>' +
      '<rect x="40" y="140" width="30" height="26" fill="#111"/><circle cx="55" cy="153" r="8" fill="#333" class="vz-tw"/><rect x="330" y="140" width="30" height="26" fill="#111"/><circle cx="345" cy="153" r="8" fill="#333" class="vz-tw vz-tw2"/>' +
      crowd);
  }

  /* 5. W 7 Mile Rd and the Southfield Fwy service drive */
  function vzcorner() {
    const tower = '<g fill="#3a3550" opacity=".95"><rect x="196" y="56" width="22" height="74"/><path d="M194 56l13 -26l13 26z"/><rect x="190" y="52" width="6" height="10"/><rect x="218" y="52" width="6" height="10"/>' +
      '<rect x="150" y="96" width="114" height="34"/></g><rect x="203" y="70" width="8" height="14" fill="#ffd98a" class="vz-tw"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#vzs5)"/>' + stars(14, 50) + tower +
      '<rect x="0" y="130" width="400" height="94" fill="#3a3e5a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#2e3248" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#2e3248" stroke-width="1"/>').join("")).join("") +
      wavy(20, 196, 230, AQUA, 3) +
      tag("VEEZE", 24, 186, 44, AQUA, -6) + tag("GANGER", 168, 176, 22, GOLD, -4) + tag("NAVY WAVY", 40, 216, 17, "#ff6b8a", -3) +
      '<g class="vz-sp"><circle cx="150" cy="160" r="3" fill="' + AQUA + '" opacity=".7"/></g><g class="vz-sp vz-sp2"><circle cx="156" cy="152" r="2" fill="' + AQUA + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(272, 106, 126, "W 7 Mile Rd") + sign(272, 132, 126, "Southfield Fwy") +
      car("vz-car", 0, 244, NAVY),
      sky("vzs5", "#080c2a", "#3a3a8a"));
  }

  window.SCENES = { vzstation: vzstation, vzschool: vzschool, vzwash: vzwash, vzstage: vzstage, vzcorner: vzcorner };
})();
