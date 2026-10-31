/* South Brooklyn opening scenes for the Nyck Caution game (Avenue J on the Brighton Line, Murrow, Floyd Bennett Field, Marine Park).
   Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes flag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-6deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0% 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes fly{0%{transform:translate(-80px,30px)}100%{transform:translate(480px,-30px)}}' +
    '.plane{animation:fly 9s linear infinite}' +
    '@keyframes beacon{0%,100%{opacity:1}50%{opacity:.2}}' +
    '.bcn{animation:beacon 1.2s infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(34px)}}' +
    '.ball{animation:bounce .8s cubic-bezier(.5,0,.5,1) infinite}' +
    '@keyframes flut{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}' +
    '.tape{animation:flut 1.1s ease-in-out infinite}.tape2{animation-delay:-.55s}' +
    '@keyframes bird{0%{transform:translate(-30px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,0)}}' +
    '.bird{animation:bird 12s linear infinite}.bird2{animation-delay:-6s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-90px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (cx, cy, letter, color, dark) =>
    '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const YEL = "#ffd400", RED = "#e63946", BLUE = "#4cc9f0";
  const cautionTape = (y, cls) => {
    let s = '<g class="tape ' + (cls || "") + '"><rect x="0" y="' + y + '" width="400" height="12" fill="' + YEL + '"/>';
    for (let x = 6; x < 400; x += 92) s += '<text x="' + x + '" y="' + (y + 9.5) + '" font-family="Anton, Impact, sans-serif" font-size="10" fill="#111" letter-spacing="1">CAUTION</text>';
    return s + '</g>';
  };

  /* 1. Avenue J (B/Q): the Brighton Line runs on an embankment here; open platform with a canopy, a Q train pulling in */
  function train() {
    let windows = "";
    for (let x = 22; x < 280; x += 42) windows += '<rect x="' + x + '" y="104" width="26" height="20" rx="3" fill="#dbe7f3" opacity=".9"/>';
    let posts = "";
    for (let x = 24; x < 400; x += 94) posts += '<rect x="' + x + '" y="26" width="6" height="64" fill="#2f5b3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' +
      /* trees and roofs of Midwood behind the line */
      '<g fill="#3f6b45" opacity=".8"><ellipse cx="40" cy="104" rx="50" ry="18"/><ellipse cx="150" cy="100" rx="60" ry="22"/><ellipse cx="270" cy="104" rx="60" ry="18"/><ellipse cx="370" cy="100" rx="50" ry="22"/></g>' +
      '<rect x="0" y="116" width="400" height="32" fill="#6d6a63"/><path d="M0 130h400M0 140h400" stroke="#9a948a" stroke-width="2"/>' +
      /* canopy and posts */
      '<path d="M0 18h400v10H0z" fill="#2f5b3a"/><path d="M0 28h400" stroke="#1d3a25" stroke-width="2"/>' + posts +
      /* station sign */
      '<rect x="44" y="38" width="312" height="40" rx="4" fill="#111"/>' +
      '<text x="58" y="65" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="19" fill="#fff">Avenue J</text>' +
      bullet(290, 58, "B", "#ff6319") + bullet(318, 58, "Q", "#fccc0a", 1) +
      '<g class="anim-train">' +
        '<rect x="6" y="92" width="300" height="56" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + windows +
        '<rect x="6" y="132" width="300" height="5" fill="#fccc0a"/>' +
        '<circle cx="290" cy="114" r="10" fill="#fccc0a"/><text x="290" y="119" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#000">Q</text>' +
        '<circle cx="300" cy="142" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge, then the embankment wall with the station house under it */
      '<rect x="0" y="148" width="400" height="8" fill="#eab308"/><rect x="0" y="156" width="400" height="14" fill="#8f8a80"/>' +
      '<rect x="0" y="170" width="400" height="60" fill="#a39c8e"/>' +
      (function () { let s = ""; for (let x = 0; x < 400; x += 40) s += '<path d="M' + x + ' 170v60" stroke="#8a8476" stroke-width="2"/>'; return s; })() +
      '<rect x="150" y="188" width="100" height="42" fill="#efe9dc"/><rect x="164" y="198" width="28" height="32" fill="#3a3a3a"/><rect x="206" y="198" width="28" height="32" fill="#3a3a3a"/>' +
      '<circle cx="142" cy="196" r="5" fill="#2fa84f" class="flk"/><circle cx="258" cy="196" r="5" fill="#2fa84f" class="flk"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3d44"/><path d="M0 246h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      tag("NYCK", 22, 222, 30, YEL, -5) + tag("CAUTION", 280, 220, 26, RED, -4),
      sky("gs", "#7fb2e0", "#d6e7f5"));
  }

  /* 2. Edward R. Murrow High School on Avenue L: the long brown-brick 1970s school where Pro Era came together; flag waving */
  function murrow() {
    let bands = "";
    for (let y = 96; y < 190; y += 30) bands += '<rect x="40" y="' + y + '" width="320" height="12" fill="#26313b"/>';
    let panes = "";
    for (let y = 96; y < 190; y += 30) for (let x = 46; x < 346; x += 22) panes += '<rect x="' + x + '" y="' + (y + 2) + '" width="16" height="8" fill="#7fa6c4" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gm)"/>' +
      /* trees on Avenue L */
      '<circle cx="18" cy="150" r="30" fill="#4f7d3f"/><circle cx="384" cy="150" r="30" fill="#4f7d3f"/>' +
      /* the building */
      '<rect x="36" y="78" width="328" height="134" fill="#8a5a3c"/><rect x="36" y="74" width="328" height="8" fill="#6b432c"/>' + bands + panes +
      (function () { let s = ""; for (let y = 86; y < 212; y += 8) s += '<path d="M36 ' + y + 'h328" stroke="#7a4f34" stroke-width=".8"/>'; return s; })() +
      /* entrance canopy and name */
      '<rect x="150" y="186" width="100" height="26" fill="#2b2b2b"/><rect x="140" y="178" width="120" height="10" fill="#c9c2b4"/>' +
      '<text x="200" y="68" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff" letter-spacing="1.5">EDWARD R. MURROW HIGH SCHOOL</text>' +
      /* flagpole */
      '<rect x="374" y="20" width="3" height="192" fill="#d0d4da"/>' +
      '<g class="flag"><rect x="377" y="22" width="22" height="14" fill="#b22234"/><rect x="377" y="25" width="22" height="2" fill="#fff"/><rect x="377" y="30" width="22" height="2" fill="#fff"/><rect x="377" y="22" width="9" height="7" fill="#3c3b6e"/></g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#9aa0a6"/><rect x="0" y="236" width="400" height="24" fill="#3a3d44"/>' +
      tag("PRO ERA", 120, 252, 22, YEL, -3),
      sky("gm", "#8ec5ee", "#e3f0fa"));
  }

  /* 3. Floyd Bennett Field at the end of Flatbush Avenue: the buff-brick Art Deco terminal with its glass control tower; a small plane flies over */
  function floyd() {
    return svg(
      '<rect width="400" height="260" fill="url(#gf)"/>' +
      '<g class="plane"><path d="M40 60h46l10-6h6l-6 8 6 8h-6l-10-6H40z" fill="#f2f2f2" stroke="#555" stroke-width="1"/><path d="M58 60l-6-14h8l12 14zM58 64l-6 14h8l12-14z" fill="#e63946"/></g>' +
      /* hangars to the side */
      '<path d="M0 170q50-40 100 0z" fill="#b8b2a4"/><path d="M300 170q50-40 100 0z" fill="#b8b2a4"/>' +
      /* terminal: long buff brick body, raised center block, control tower */
      '<rect x="80" y="132" width="240" height="64" fill="#d9c29a"/><rect x="80" y="128" width="240" height="6" fill="#bfa67c"/>' +
      '<rect x="160" y="100" width="80" height="34" fill="#d9c29a"/><rect x="160" y="96" width="80" height="6" fill="#bfa67c"/>' +
      '<rect x="182" y="70" width="36" height="28" fill="#d9c29a"/>' +
      '<path d="M176 70h48l-6-20h-36z" fill="#2c4a5e"/><path d="M182 66h36M186 58h28" stroke="#9fd0ea" stroke-width="3"/>' +
      '<rect x="196" y="40" width="8" height="10" fill="#6b5a3c"/><circle cx="200" cy="38" r="4" fill="' + RED + '" class="bcn"/>' +
      (function () { let s = ""; for (let x = 94; x < 300; x += 24) s += '<rect x="' + x + '" y="146" width="14" height="30" fill="#33424e"/>'; return s; })() +
      '<rect x="186" y="164" width="28" height="32" fill="#2b2b2b"/>' +
      '<path d="M84 196v-60M316 196v-60" stroke="#bfa67c" stroke-width="3"/>' +
      /* runway */
      '<rect x="0" y="196" width="400" height="64" fill="#5d6168"/><path d="M0 228h400" stroke="#f5f5f5" stroke-width="3" stroke-dasharray="26 18"/>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#e5e7eb" letter-spacing="2">FLOYD BENNETT FIELD</text>',
      sky("gf", "#f6b26b", "#fde3b8"));
  }

  /* 4. Marine Park courts: a blacktop by the salt marsh, caution tape on the fence (where the name came from), a ball bouncing */
  function courts() {
    let fence = "";
    for (let x = 0; x < 400; x += 12) fence += '<path d="M' + x + ' 70l12 70M' + (x + 12) + ' 70l-12 70" stroke="#9aa3ad" stroke-width=".8" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' +
      '<g class="bird"><path d="M30 40q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="bird bird2"><path d="M30 52q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* marsh grass */
      (function () { let s = ""; for (let x = 0; x < 400; x += 7) s += '<path d="M' + x + ' 140q2-' + (10 + (x * 7) % 14) + ' 5-' + (16 + (x * 3) % 10) + '" stroke="#7d8f3e" stroke-width="2" fill="none"/>'; return s; })() +
      /* chain-link fence */
      '<rect x="0" y="66" width="400" height="4" fill="#9aa3ad"/>' + fence +
      cautionTape(84) + cautionTape(112, "tape2") +
      /* court */
      '<rect x="0" y="140" width="400" height="120" fill="#2f6d8f"/><rect x="40" y="152" width="320" height="100" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M200 152v100" stroke="#fff" stroke-width="2"/><circle cx="200" cy="202" r="20" fill="none" stroke="#fff" stroke-width="2"/>' +
      /* hoop */
      '<rect x="318" y="50" width="6" height="140" fill="#555"/><rect x="290" y="44" width="46" height="34" fill="#fff" stroke="#333" stroke-width="2"/>' +
      '<rect x="306" y="60" width="16" height="12" fill="none" stroke="' + RED + '" stroke-width="2"/><ellipse cx="314" cy="80" rx="12" ry="3" fill="none" stroke="#ff6a00" stroke-width="2.5"/>' +
      '<path d="M303 81l4 12M314 83v12M325 81l-4 12" stroke="#fff" stroke-width="1"/>' +
      '<g class="ball"><circle cx="250" cy="170" r="10" fill="#e8742a"/><path d="M240 170h20M250 160v20" stroke="#5a2a10" stroke-width="1.2"/></g>' +
      tag("NYCK", 60, 238, 26, YEL, -4),
      sky("gc", "#9fd3f2", "#e8f5fc"));
  }

  /* 5. Avenue J and East 16th St: green street signs, a brick wall tagged up */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gk)"/>' + stars(10) +
      '<rect x="20" y="70" width="380" height="146" fill="#7a3b2e"/>' +
      (function () { let s = ""; for (let y = 78; y < 216; y += 10) s += '<path d="M20 ' + y + 'h380" stroke="#5e2c22" stroke-width="1"/>'; return s; })() +
      tag("NYCK CAUTION", 100, 156, 34, YEL, -5) +
      tag("PRO ERA", 210, 198, 24, BLUE, -3) +
      tag("OPEN FLAME", 160, 108, 16, RED, -4) +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="4" y="22" width="114" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Avenue J</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">E 16th St</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + RED + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#9fd0f5"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#cbd5e0" letter-spacing="2">MIDWOOD, BROOKLYN</text>',
      sky("gk", "#141a33", "#3a4a78"));
  }

  window.SCENES = { train, murrow, floyd, courts, corner };
})();
