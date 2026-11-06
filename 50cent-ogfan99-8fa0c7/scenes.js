/* 50 Cent game (NYC map, Queens: South Jamaica). The F at Sutphin Blvd under Hillside Av, Andrew Jackson High School in
   Cambria Heights (his high school, brick and limestone, 1937), the neighborhood boxing gym where he sparred as a kid,
   the 2022 halftime show at SoFi Stadium where he hung upside down like the In Da Club video, and 161st St & 140th Av
   in South Jamaica (his grandmother's block) with the jets coming in low over the rooftops to JFK.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.4s ease-in-out infinite}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(50px,170px) rotate(320deg)}}.lf{transform-box:fill-box;transform-origin:50% 50%;animation:leaf 6s linear infinite}.lf2{animation-delay:-2s}.lf3{animation-delay:-4s}' +
    '@keyframes swing{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.swing{transform-box:fill-box;transform-origin:50% 0;animation:swing 1.3s ease-in-out infinite}' +
    '@keyframes rattle{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.rat{transform-box:fill-box;transform-origin:50% 0;animation:rattle .18s linear infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.beam{transform-box:fill-box;transform-origin:50% 100%;animation:sweep 3.2s ease-in-out infinite}.beam2{animation-delay:-1.6s}' +
    '@keyframes dangle{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.dang{transform-box:fill-box;transform-origin:50% 0;animation:dangle 2.4s ease-in-out infinite}' +
    '@keyframes jet{from{transform:translate(-120px,30px)}to{transform:translate(480px,-40px)}}.jet{animation:jet 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, c) => '<circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 24) + '" width="12" height="16" rx="4" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 9) + 'v9M' + (x + 3) + ' ' + (y - 9) + 'v9" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/>';
  const BDFM = "#ff6319", GREEN = "#3ddc84", GOLD = "#d4af37", RED = "#e03131", SIGN = "#0f6b3a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const blade = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';

  /* 1. The F pulling into Sutphin Blvd, underground under Hillside Av: cream tile walls, a deep blue tile band with a black border,
        I-beam columns, the black hanging sign with the orange F, the silver train sliding in */
  function station() {
    let tile = "";
    for (let y = 30; y < 176; y += 10) tile += '<path d="M0 ' + y + 'h400" stroke="#ddd6c2" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tile += '<path d="M' + x + ' 30v146" stroke="#ddd6c2" stroke-width=".8"/>';
    let win = "";
    for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="126" width="24" height="22" rx="2" fill="#bcd3ea" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe8d4"/>' + tile +
      '<rect x="0" y="0" width="400" height="26" fill="#34373b"/>' +
      [10, 110, 210, 310].map(x => '<rect x="' + x + '" y="10" width="44" height="5" rx="2" fill="#fffbe6" class="flk"/>').join("") +
      /* tile band */
      '<rect x="0" y="54" width="400" height="16" fill="#111"/><rect x="0" y="57" width="400" height="10" fill="#2f3f8f"/>' +
      '<rect x="60" y="76" width="120" height="22" fill="#111"/><text x="120" y="91.5" text-anchor="middle" ' + font + ' font-size="11" fill="#efe8d4" letter-spacing="2">SUTPHIN</text>' +
      '<rect x="220" y="76" width="120" height="22" fill="#111"/><text x="280" y="91.5" text-anchor="middle" ' + font + ' font-size="11" fill="#efe8d4" letter-spacing="2">SUTPHIN</text>' +
      /* black hanging sign */
      '<rect x="110" y="26" width="180" height="24" rx="2" fill="#111"/><rect x="110" y="26" width="180" height="2.5" fill="#fff"/>' +
      '<text x="122" y="43" ' + font + ' font-size="13" fill="#fff">Sutphin Blvd</text>' + bullet(270, 38, "F", BDFM, false, 9) +
      '<text x="212" y="43" ' + font + ' font-size="8" fill="#cfcfcf">Hillside Av</text>' +
      /* columns */
      [26, 374].map(x => '<rect x="' + (x - 5) + '" y="26" width="10" height="150" fill="#2a2d33"/><rect x="' + (x - 8) + '" y="26" width="16" height="4" fill="#2a2d33"/>').join("") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="114" width="310" height="62" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="0" y="152" width="316" height="4" fill="' + BDFM + '"/>' +
        '<rect x="296" y="124" width="16" height="24" rx="2" fill="#bcd3ea"/>' + bullet(304, 163, "F", BDFM, false, 9) +
        '<circle cx="16" cy="166" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/><rect x="0" y="186" width="400" height="74" fill="#8d8f8c"/>' +
      '<path d="M0 214h400M0 240h400" stroke="#7a7c79" stroke-width="2"/>' +
      person(80, 248, "#22252b") + person(210, 252, "#3b2a24") + person(236, 250, "#1f3a2a") +
      tag("SOUTHSIDE", 262, 238, 17, GREEN, -4)
    );
  }

  /* 2. Andrew Jackson High School on 116th Av in Cambria Heights (1937, now the Campus Magnet campus): the long three-story red-brick
        front with limestone trim and cornice, rows of tall windows, the limestone entrance with the bronze doors, the flag moving, leaves coming down */
  function school() {
    let brick = "", wins = "";
    for (let y = 70; y < 206; y += 6) brick += '<path d="M10 ' + y + 'h380" stroke="#7d3424" stroke-width=".8" opacity=".55"/>';
    for (let r = 0; r < 3; r++) for (let c = 0; c < 10; c++) { const x = 22 + c * 37 + (c > 4 ? 10 : 0), y = 84 + r * 40; if (c === 4 || c === 5) continue;
      wins += '<rect x="' + x + '" y="' + y + '" width="22" height="28" fill="#c9d8e4" stroke="#efe6d0" stroke-width="2.5"/><path d="M' + (x + 11) + ' ' + y + 'v28M' + x + ' ' + (y + 14) + 'h22" stroke="#efe6d0" stroke-width="1.2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<g class="lf"><ellipse cx="60" cy="20" rx="4" ry="2.5" fill="#d9822b"/></g><g class="lf lf2"><ellipse cx="300" cy="10" rx="4" ry="2.5" fill="#c0392b"/></g><g class="lf lf3"><ellipse cx="200" cy="30" rx="4" ry="2.5" fill="#e3a72f"/></g>' +
      /* wings + center */
      '<rect x="10" y="70" width="380" height="136" fill="#a84a33"/>' + brick +
      '<rect x="6" y="62" width="388" height="10" fill="#efe6d0"/><rect x="10" y="118" width="380" height="3" fill="#efe6d0"/><rect x="10" y="158" width="380" height="3" fill="#efe6d0"/>' + wins +
      /* centre pavilion: limestone frontispiece */
      '<rect x="160" y="52" width="80" height="154" fill="#e9e0c8" stroke="#c9bd9c" stroke-width="2"/><rect x="154" y="46" width="92" height="9" fill="#efe6d0"/>' +
      '<rect x="172" y="70" width="56" height="12" fill="#d8cdb0"/><text x="200" y="79.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#5b4a2c" letter-spacing="1">ANDREW JACKSON</text>' +
      '<rect x="176" y="92" width="48" height="44" fill="#c9d8e4" stroke="#efe6d0" stroke-width="3"/><path d="M200 92v44M176 114h48" stroke="#efe6d0" stroke-width="2"/>' +
      '<path d="M178 206v-46q22-18 44 0v46z" fill="#d8cdb0"/><rect x="184" y="166" width="32" height="40" fill="#6b4a22"/><rect x="186" y="168" width="13" height="36" fill="#8a6a2e"/><rect x="201" y="168" width="13" height="36" fill="#8a6a2e"/>' +
      '<rect x="168" y="200" width="64" height="6" fill="#c9bd9c"/>' +
      /* flagpole */
      '<rect x="200" y="12" width="2.5" height="36" fill="#9aa3ad"/><g class="flag"><rect x="202.5" y="13" width="26" height="15" fill="#b22234"/><rect x="202.5" y="15" width="26" height="2" fill="#fff"/><rect x="202.5" y="19" width="26" height="2" fill="#fff"/><rect x="202.5" y="23" width="26" height="2" fill="#fff"/><rect x="202.5" y="13" width="11" height="8" fill="#3c3b6e"/></g>' +
      /* lawn, walk, street */
      '<rect x="0" y="206" width="400" height="18" fill="#5f8f45"/><rect x="186" y="206" width="28" height="18" fill="#c9c3b3"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="46" height="13" rx="4" fill="#1d4ed8"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      person(120, 222, "#2a2a33") + person(290, 222, "#3a2a50"),
      sky("s2", "#8fc3ee", "#eaf4fb"));
  }

  /* 3. The neighborhood boxing gym in South Jamaica where he started sparring as a kid: the ring with red, white and blue ropes,
        a heavy bag swinging, the speed bag rattling, gloves on a hook, the round timer flashing, a bench and a jump rope */
  function gym() {
    let fl = "";
    for (let x = 0; x < 400; x += 26) fl += '<path d="M' + x + ' 200l-30 60" stroke="#6b4a2e" stroke-width="1" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="#2b2a30"/>' +
      '<rect x="0" y="0" width="400" height="200" fill="#3d3a42"/>' +
      (() => { let b = ""; for (let y = 6; y < 200; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#34313a" stroke-width="2"/>'; return b; })() +
      /* window to the street */
      '<rect x="22" y="22" width="90" height="58" fill="#7fb4e6" stroke="#1f1d22" stroke-width="5"/><path d="M67 22v58M22 51h90" stroke="#1f1d22" stroke-width="3"/>' +
      '<rect x="26" y="58" width="22" height="20" fill="#8b4a36"/><rect x="52" y="52" width="26" height="26" fill="#a0573e"/><rect x="82" y="60" width="26" height="18" fill="#6e3b2c"/>' +
      /* round timer */
      '<rect x="160" y="18" width="80" height="34" rx="4" fill="#111" stroke="#555" stroke-width="2"/><text x="200" y="42" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="20" fill="#ff3b3b" class="bl">3:00</text>' +
      '<circle cx="250" cy="35" r="5" fill="#2ecc71" class="bl bl2"/>' +
      /* lamps */
      '<path d="M150 0v60M290 0v60" stroke="#222" stroke-width="2"/><path d="M136 60h28l-6 8h-16zM276 60h28l-6 8h-16z" fill="#1e1e1e"/><ellipse cx="150" cy="70" rx="10" ry="3" fill="#fff6c2" class="flk"/><ellipse cx="290" cy="70" rx="10" ry="3" fill="#fff6c2" class="flk"/>' +
      /* ring */
      '<path d="M120 170h270v28H120z" fill="#1d3557"/><path d="M110 168h290v6H110z" fill="#e8e8e8"/>' +
      '<rect x="120" y="96" width="8" height="78" fill="#c9ced6"/><rect x="384" y="96" width="8" height="78" fill="#c9ced6"/>' +
      '<path d="M124 110h264" stroke="' + RED + '" stroke-width="4"/><path d="M124 128h264" stroke="#fff" stroke-width="4"/><path d="M124 146h264" stroke="#1d4ed8" stroke-width="4"/>' +
      '<rect x="116" y="104" width="16" height="48" fill="' + RED + '" opacity=".9"/>' +
      /* heavy bag */
      '<path d="M66 0v96" stroke="#888" stroke-width="2"/><g class="swing"><path d="M66 96v8" stroke="#888" stroke-width="2"/><rect x="50" y="104" width="32" height="74" rx="12" fill="#7a1f1f" stroke="#3b0d0d" stroke-width="2"/><rect x="50" y="120" width="32" height="4" fill="#3b0d0d"/><rect x="50" y="158" width="32" height="4" fill="#3b0d0d"/></g>' +
      /* speed bag platform */
      '<rect x="316" y="60" width="76" height="8" fill="#5a3a20"/><rect x="350" y="68" width="6" height="6" fill="#999"/><g class="rat"><ellipse cx="353" cy="86" rx="9" ry="13" fill="#c0392b" stroke="#6b1a12" stroke-width="2"/></g>' +
      /* gloves on a hook */
      '<path d="M136 74h44" stroke="#5a3a20" stroke-width="4"/><path d="M146 74v10M170 74v10" stroke="#aaa" stroke-width="2"/><path d="M136 84q10-6 20 0v14q-10 6-20 0z" fill="' + RED + '" stroke="#5a0d0d" stroke-width="2"/><path d="M160 84q10-6 20 0v14q-10 6-20 0z" fill="' + RED + '" stroke="#5a0d0d" stroke-width="2"/>' +
      /* floor, bench, rope */
      '<rect x="0" y="200" width="400" height="60" fill="#8a6440"/>' + fl +
      '<rect x="22" y="214" width="80" height="8" rx="2" fill="#222"/><rect x="28" y="222" width="5" height="16" fill="#222"/><rect x="92" y="222" width="5" height="16" fill="#222"/>' +
      '<path d="M140 236q30 26 60 0" stroke="' + GOLD + '" stroke-width="2.5" fill="none"/><rect x="134" y="228" width="6" height="12" rx="2" fill="#111"/><rect x="200" y="228" width="6" height="12" rx="2" fill="#111"/>' +
      tag("STAY HUNGRY", 238, 236, 16, GREEN, -4)
    );
  }

  /* 4. The 2022 halftime show at SoFi Stadium in Inglewood: the see-through roof canopy over the bowl at night, the white city-block
        stage set, light beams sweeping, phone lights twinkling in the crowd, and a tiny figure hanging upside down from the ceiling like the In Da Club video */
  function halftime() {
    let crowd = "";
    for (let i = 0; i < 70; i++) crowd += '<circle class="bl bl' + (i % 3 + 1) + '" cx="' + ((i * 37) % 400) + '" cy="' + (176 + (i * 13) % 34) + '" r="1.4" fill="#fffbe0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#h4)"/>' + stars(14) +
      /* roof canopy */
      '<path d="M-10 58Q200 -6 410 58L410 72Q200 10 -10 72z" fill="#cfd8e3" opacity=".55"/>' +
      (() => { let t = ""; for (let x = 10; x < 400; x += 26) t += '<path d="M' + x + ' ' + (58 - Math.sin(x / 400 * Math.PI) * 50) + 'l6 12" stroke="#9fb0c4" stroke-width="1" opacity=".7"/>'; return t; })() +
      /* stands */
      '<path d="M0 90Q200 60 400 90V200H0z" fill="#1c2233"/><path d="M0 120Q200 96 400 120" stroke="#2c3550" stroke-width="10" fill="none"/><path d="M0 150Q200 130 400 150" stroke="#2c3550" stroke-width="10" fill="none"/>' +
      /* light beams */
      '<path class="beam" d="M80 200L60 40L100 40z" fill="#fff6c2" opacity=".18"/><path class="beam beam2" d="M320 200L300 40L340 40z" fill="#9be7ff" opacity=".18"/>' +
      '<path class="beam beam2" d="M200 200L176 30L224 30z" fill="' + GREEN + '" opacity=".13"/>' +
      /* white stage-set block */
      '<rect x="110" y="128" width="180" height="60" fill="#f2f2f2"/><rect x="110" y="122" width="180" height="8" fill="#ddd"/>' +
      [120, 156, 192, 228, 264].map(x => '<rect x="' + x + '" y="138" width="18" height="16" fill="#d0d6de"/><rect x="' + x + '" y="162" width="18" height="16" fill="#d0d6de"/>').join("") +
      '<rect x="190" y="164" width="20" height="24" fill="#bfc6cf"/>' +
      /* hanging figure (silhouette, upside down) */
      '<path d="M200 66v40" stroke="#ddd" stroke-width="1.2"/>' +
      '<g class="dang"><path d="M200 66v40" stroke="none"/><g transform="translate(200 106)"><path d="M-3 -16v-10M3 -16v-10" stroke="#111" stroke-width="4" stroke-linecap="round"/><rect x="-6" y="-16" width="12" height="16" rx="4" fill="#111"/><circle cx="0" cy="6" r="5.5" fill="#111"/><path d="M-6 -12l-8 10M6 -12l8 10" stroke="#111" stroke-width="3" stroke-linecap="round"/></g></g>' +
      /* field + crowd */
      '<rect x="0" y="188" width="400" height="72" fill="#123018"/>' + crowd +
      '<rect x="0" y="230" width="400" height="30" fill="#0b0f18"/>' +
      tag("IN DA CLUB", 20, 252, 20, GOLD, -3),
      sky("h4", "#05060f", "#1d2a4a"));
  }

  /* 5. 161st St and 140th Av, South Jamaica: green street signs, the two-story row houses with stoops and awnings, the wall tagged 50 CENT,
        a jet coming in low over the rooftops toward JFK, landing lights blinking */
  function corner() {
    let houses = "";
    for (let i = 0; i < 4; i++) { const x = 168 + i * 56, c = ["#b7a07a", "#9a6a4a", "#c9b79a", "#8a5a44"][i];
      houses += '<rect x="' + x + '" y="112" width="54" height="116" fill="' + c + '"/><rect x="' + (x - 2) + '" y="108" width="58" height="6" fill="#5a4a3a"/>' +
        '<rect x="' + (x + 8) + '" y="126" width="14" height="18" fill="' + (i % 2 ? "#ffe7a8" : "#3a3550") + '"/><rect x="' + (x + 32) + '" y="126" width="14" height="18" fill="' + (i % 2 ? "#3a3550" : "#ffe7a8") + '"/>' +
        '<path d="M' + (x + 4) + ' 162h46l-4 8h-38z" fill="' + (i % 2 ? GREEN : RED) + '" opacity=".85"/><rect x="' + (x + 20) + '" y="172" width="14" height="40" fill="#3a2a1e"/><path d="M' + (x + 14) + ' 212h26v6h6v10h-38v-10h6z" fill="#bfb6a6"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(16) +
      /* jet */
      '<g class="jet"><path d="M20 60l44-6 10-4 6 2-6 6 24-4 4 3-26 8-8 2-40 2z" fill="#d6dbe3"/><path d="M48 58l-10-14h6l16 12z" fill="#b0b8c4"/><path d="M50 66l-6 12h6l12-12z" fill="#b0b8c4"/>' +
        '<circle class="bl" cx="22" cy="64" r="2" fill="#ff4d4d"/><circle class="bl bl2" cx="80" cy="60" r="2.2" fill="#fffbe0"/></g>' +
      houses +
      /* tag wall */
      '<rect x="0" y="140" width="170" height="88" fill="#4b4950"/>' +
      (() => { let b = ""; for (let y = 146; y < 228; y += 8) b += '<path d="M0 ' + y + 'h170" stroke="#3e3c43" stroke-width="1"/>'; return b; })() +
      tag("50 CENT", 6, 196, 40, GREEN, -5) + tag("GET RICH", 20, 220, 16, GOLD, -4) +
      /* street */
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car car2"><rect x="0" y="240" width="48" height="13" rx="4" fill="#111"/><rect x="10" y="234" width="24" height="8" rx="3" fill="#111"/><circle cx="10" cy="253" r="4" fill="#333"/><circle cx="38" cy="253" r="4" fill="#333"/></g>' +
      /* sign pole */
      '<rect x="380" y="56" width="5" height="172" fill="#3d4b3f"/><circle class="flk" cx="382" cy="56" r="4" fill="#fff6c2"/>' +
      blade(300, 70, 96, "161 St") + blade(300, 94, 96, "140 Av"),
      sky("c5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { station: station, school: school, gym: gym, halftime: halftime, corner: corner };
})();
