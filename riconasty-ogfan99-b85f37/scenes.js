/* riconasty scenes (Regions tab: THE DMV; Largo / Palmer Park, Prince George's County, Maryland). CSS classes prefixed rn- (the page's own anim-train is kept).
   1 Downtown Largo (Blue + Silver Line), the end of the line where she was born: elevated island platform under the open concrete canopy, a train sliding in.
   2 Charles Herbert Flowers High School, Springdale: the red-brick school with its tall glass entrance, flag waving. Where her rapping started.
   3 The Boulevard at the Capital Centre, Largo: the open-air shopping street at night, string lights, shoppers walking ("When I walk up in the mall...").
   4 The coasters out in Prince George's County: a red steel coaster climbing and diving under a pink sky ("Rage").
   5 Barlowe Rd and Matthew Henson Ave in Palmer Park (where she grew up from 11): green signs, RICO tagged, the Palmer Park boxing center behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rnflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.rn-flk{animation:rnflick 2.4s infinite}.rn-flk2{animation-delay:.8s}' +
    '@keyframes rnblink{0%,100%{opacity:.25}50%{opacity:1}}.rn-bl{animation:rnblink 1.4s ease-in-out infinite}.rn-bl2{animation-delay:-.7s}' +
    '@keyframes rnwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.rn-walk{animation:rnwalk 10s linear infinite}.rn-walk2{animation-delay:-3.3s}.rn-walk3{animation-delay:-6.6s}' +
    '@keyframes rnwalkb{from{transform:translateX(440px)}to{transform:translateX(-40px)}}.rn-walkb{animation:rnwalkb 12s linear infinite}.rn-walkb2{animation-delay:-6s}' +
    '@keyframes rnflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.rn-flag{transform-box:fill-box;transform-origin:0 50%;animation:rnflag 1.6s ease-in-out infinite}' +
    '@keyframes rnride{0%{offset-distance:0%}100%{offset-distance:100%}}' +
    '.rn-cart{offset-path:path("M-30 214 L40 214 Q70 214 96 150 L130 64 Q140 44 152 64 L214 214 Q228 236 250 196 Q282 130 310 196 Q326 230 352 170 Q366 140 384 170 L430 214");offset-rotate:auto;animation:rnride 6s linear infinite}.rn-cart2{animation-delay:-.18s}.rn-cart3{animation-delay:-.36s}' +
    '@keyframes rnbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.rn-bird{animation:rnbird 13s linear infinite}.rn-bird2{animation-delay:-6.5s}' +
    '@keyframes rnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rn-sp{animation:rnspray 1.4s ease-out infinite}.rn-sp2{animation-delay:.45s}' +
    '@keyframes rnswing{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.rn-sw{transform-box:fill-box;transform-origin:50% 0;animation:rnswing 2.2s ease-in-out infinite}' +
    '@keyframes rncar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.rn-car{animation:rncar 6s linear infinite}.rn-car2{animation-delay:-3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const dot = (x, y, c, txt) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + c + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const person = (cls, x, y, c, c2) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (y - 22) + '" r="4.5" fill="#2a1a1a"/><rect x="' + (x - 5) + '" y="' + (y - 17) + '" width="10" height="14" rx="3" fill="' + c + '"/><rect x="' + (x - 4) + '" y="' + (y - 3) + '" width="3.5" height="11" fill="' + c2 + '"/><rect x="' + (x + 0.5) + '" y="' + (y - 3) + '" width="3.5" height="11" fill="' + c2 + '"/></g>';
  const BL = "#0078ae", SV = "#a1a2a1", PINK = "#ff4fa3", LIME = "#b6ff3b", PURP = "#a77bff";

  /* 1. Downtown Largo, elevated, end of the Blue and Silver lines */
  function rnstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (44 + i * 46) + '" y="104" width="30" height="20" rx="3" fill="#1d2833"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="94" width="330" height="58" rx="8" fill="#d9dde1" stroke="#7d858d" stroke-width="2"/>' + win +
      '<rect x="24" y="130" width="330" height="4" fill="' + BL + '"/><rect x="24" y="134" width="330" height="3" fill="#bf0d3e"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (68 + i * 60) + '" y="128" width="20" height="22" fill="#c4c9ce" stroke="#9aa1a8"/>').join("") +
      '<rect x="332" y="98" width="20" height="50" rx="5" fill="#bfc4c9"/><circle cx="342" cy="144" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="97" width="60" height="11" rx="2" fill="#111"/><text x="300" y="105.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb03c">FRANCONIA</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rns1)"/>' +
      '<g class="rn-bird"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#3a2a4a" stroke-width="2" fill="none"/></g><g class="rn-bird rn-bird2"><path d="M60 26q5 -5 10 0q5 -5 10 0" stroke="#3a2a4a" stroke-width="2" fill="none"/></g>' +
      '<g fill="#5b3f6a" opacity=".8"><rect x="0" y="120" width="46" height="60"/><rect x="330" y="112" width="70" height="68"/><path d="M300 180v-40l18 -14l18 14v40z"/></g>' +
      /* open concrete canopy over the island platform */
      '<path d="M10 64q190 -34 380 0v10q-190 -30 -380 0z" fill="#cfc8bb" stroke="#8f887c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (38 + i * 80) + '" y="70" width="8" height="84" fill="#b9b2a5"/>').join("") +
      '<g class="rn-flk"><rect x="80" y="70" width="40" height="3" fill="#fff3c4"/></g><g class="rn-flk rn-flk2"><rect x="270" y="70" width="40" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="154" width="400" height="6" fill="#e9d36a"/><rect x="0" y="160" width="400" height="18" fill="#a59d90"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + (10 + i * 20) + '" cy="157" r="1.6" fill="#fff" class="rn-bl' + (i % 2 ? " rn-bl2" : "") + '"/>').join("") +
      /* the elevated guideway and its piers */
      '<rect x="0" y="178" width="400" height="16" fill="#bdb6a8"/><rect x="0" y="194" width="400" height="4" fill="#8f887c"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (40 + i * 110) + ' 198h34l-6 62h-22z" fill="#b2ab9e"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#4a4550"/>' +
      '<rect x="96" y="206" width="208" height="28" rx="3" fill="#111"/><text x="108" y="226" ' + font + ' font-size="15" fill="#fff">Downtown Largo</text>' + dot(264, 220, BL, "BL") + dot(288, 220, SV, "SV") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff5fa">END OF THE LINE · LARGO, MD</text>',
      sky("rns1", "#2a1d4f", "#ff8fb8"));
  }

  /* 2. Charles Herbert Flowers High School, Springdale */
  function rnflowers() {
    const bricks = (x, y, w, h) => Array.from({ length: Math.floor(h / 8) }, (_, i) => '<path d="M' + x + ' ' + (y + 8 + i * 8) + 'h' + w + '" stroke="#8a3a2a" stroke-width="1"/>').join("");
    const winrow = (x, y, n) => Array.from({ length: n }, (_, i) => '<rect x="' + (x + i * 26) + '" y="' + y + '" width="18" height="16" fill="#9fd0ea" stroke="#e8e0d0" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rns2)"/>' +
      '<g class="rn-bird"><path d="M20 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="14" y="92" width="130" height="96" fill="#a8432f"/>' + bricks(14, 92, 130, 96) + winrow(24, 106, 5) + winrow(24, 140, 5) +
      '<rect x="256" y="92" width="130" height="96" fill="#a8432f"/>' + bricks(256, 92, 130, 96) + winrow(266, 106, 5) + winrow(266, 140, 5) +
      '<rect x="10" y="86" width="138" height="8" fill="#e8e0d0"/><rect x="252" y="86" width="138" height="8" fill="#e8e0d0"/>' +
      /* tall glass entrance */
      '<path d="M144 188V70l56 -26l56 26v118z" fill="#7fb6d6" stroke="#e8e0d0" stroke-width="4"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (152 + i * 16) + ' ' + (i < 3 ? 66 - i * 7 : 66 - (5 - i) * 7) + 'V188" stroke="#e8e0d0" stroke-width="2"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<path d="M144 ' + (92 + i * 20) + 'h112" stroke="#e8e0d0" stroke-width="2"/>').join("") +
      '<rect x="176" y="158" width="48" height="30" fill="#2a3a46"/><path d="M200 158v30" stroke="#e8e0d0" stroke-width="2"/>' +
      '<rect x="150" y="62" width="100" height="0" fill="none"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#7a9a54"/><path d="M150 188l-30 72h160l-30 -72z" fill="#c9c2b4"/>' +
      '<rect x="20" y="202" width="150" height="34" rx="3" fill="#3a1f5c" stroke="#e8c45a" stroke-width="2"/><text x="95" y="216" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">CHARLES HERBERT FLOWERS</text><text x="95" y="229" text-anchor="middle" ' + font + ' font-size="9" fill="#e8c45a">HIGH SCHOOL</text>' +
      '<rect x="330" y="40" width="3" height="150" fill="#ddd"/><g class="rn-flag"><rect x="333" y="42" width="40" height="24" fill="#b22234"/>' + Array.from({ length: 3 }, (_, i) => '<rect x="333" y="' + (46 + i * 7) + '" width="40" height="3" fill="#fff"/>').join("") + '<rect x="333" y="42" width="16" height="12" fill="#3c3b6e"/></g>' +
      '<g fill="#3a1f5c" opacity=".55"><circle cx="300" cy="226" r="4"/><circle cx="294" cy="219" r="2"/><circle cx="300" cy="216" r="2"/><circle cx="306" cy="219" r="2"/><circle cx="330" cy="242" r="4"/><circle cx="324" cy="235" r="2"/><circle cx="330" cy="232" r="2"/><circle cx="336" cy="235" r="2"/></g>' +
      person("rn-walk", 0, 250, PINK, "#222") + person("rn-walk rn-walk2", 0, 252, PURP, "#333") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a1f5c">SPRINGDALE, MD · WHERE THE RAPS STARTED</text>',
      sky("rns2", "#8fd0f0", "#fbe7f0"));
  }

  /* 3. The Boulevard at the Capital Centre, Largo, at night */
  function rnboulevard() {
    const shop = (x, w, c, glow) => '<rect x="' + x + '" y="96" width="' + w + '" height="92" fill="' + c + '"/><rect x="' + x + '" y="96" width="' + w + '" height="8" fill="#e6dccb"/>' +
      '<rect x="' + (x + 8) + '" y="140" width="' + (w - 16) + '" height="48" fill="' + glow + '" opacity=".8" class="rn-bl"/><rect x="' + (x + 8) + '" y="114" width="' + (w - 16) + '" height="16" fill="#2a2333"/>' +
      '<rect x="' + (x + 14) + '" y="118" width="' + (w - 28) + '" height="8" rx="2" fill="' + glow + '" opacity=".9"/>';
    const bulbs = Array.from({ length: 21 }, (_, i) => { const x = i * 20; const y = 80 + Math.sin(i * 0.9) * 0 + (i % 2 ? 6 : 2); return '<circle cx="' + x + '" cy="' + y + '" r="2.6" fill="#ffe8a8" class="rn-bl' + (i % 2 ? " rn-bl2" : "") + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rns3)"/>' +
      Array.from({ length: 22 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + ((i * 29) % 50 + 8) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      shop(0, 96, "#5a3d6e", PINK) + shop(100, 92, "#3e4d6e", "#7fe0ff") + shop(196, 100, "#6e3d4d", "#ffd166") + shop(300, 100, "#3d5e4d", LIME) +
      '<path d="M0 80q100 14 200 0t200 0" stroke="#2a2333" stroke-width="1.5" fill="none"/>' + bulbs +
      '<rect x="0" y="188" width="400" height="16" fill="#b9b0a2"/><rect x="0" y="204" width="400" height="56" fill="#3a3540"/><path d="M0 232h400" stroke="#e8e0d0" stroke-width="2" stroke-dasharray="16 12"/>' +
      person("rn-walk", 0, 198, PINK, "#222") + person("rn-walk rn-walk2", 0, 199, LIME, "#333") + person("rn-walk rn-walk3", 0, 198, PURP, "#222") + person("rn-walkb", 0, 200, "#ffd166", "#333") + person("rn-walkb rn-walkb2", 0, 199, "#7fe0ff", "#222") +
      '<g class="rn-car"><rect x="0" y="236" width="62" height="14" rx="5" fill="#d0202e"/><rect x="12" y="228" width="34" height="10" rx="3" fill="#d0202e"/><rect x="15" y="230" width="13" height="6" fill="#bfe3ff"/><rect x="31" y="230" width="13" height="6" fill="#bfe3ff"/><circle cx="14" cy="250" r="5" fill="#111"/><circle cx="48" cy="250" r="5" fill="#111"/></g>' +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="10" fill="#ffe8f3">THE BOULEVARD AT THE CAPITAL CENTRE · LARGO</text>',
      sky("rns3", "#120a24", "#5a2a6e"));
  }

  /* 4. The coasters out in Prince George's County */
  function rncoaster() {
    const track = "M-30 214 L40 214 Q70 214 96 150 L130 64 Q140 44 152 64 L214 214 Q228 236 250 196 Q282 130 310 196 Q326 230 352 170 Q366 140 384 170 L430 214";
    const legs = [[96, 150], [113, 107], [130, 64], [152, 64], [172, 114], [194, 164], [250, 196], [282, 150], [310, 196], [352, 170], [384, 170]].map(p => '<path d="M' + p[0] + ' ' + (p[1] + 4) + 'V236" stroke="#d8d4cc" stroke-width="3"/>').join("") +
      '<path d="M96 236L130 70M130 236L113 110M152 236L172 118M194 236L152 70" stroke="#d8d4cc" stroke-width="1.5"/>';
    const cart = (cls) => '<g class="rn-cart ' + cls + '"><rect x="-9" y="-12" width="18" height="10" rx="3" fill="' + LIME + '" stroke="#1a1a1a" stroke-width="1.5"/><circle cx="-5" cy="-1" r="2" fill="#1a1a1a"/><circle cx="5" cy="-1" r="2" fill="#1a1a1a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rns4)"/>' +
      '<circle cx="320" cy="56" r="26" fill="#ffd8a8" opacity=".9"/>' +
      '<g fill="#3e6a3a"><ellipse cx="30" cy="236" rx="60" ry="22"/><ellipse cx="200" cy="240" rx="80" ry="20"/><ellipse cx="370" cy="236" rx="60" ry="22"/></g>' +
      legs +
      '<path d="' + track + '" stroke="#c8102e" stroke-width="6" fill="none" stroke-linejoin="round"/><path d="' + track + '" stroke="#ff6b7a" stroke-width="1.5" fill="none" stroke-dasharray="4 6"/>' +
      cart("") + cart("rn-cart2") + cart("rn-cart3") +
      '<rect x="0" y="236" width="400" height="24" fill="#2e4a2e"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#ffe8f3">THE COASTERS · PRINCE GEORGE\'S COUNTY · RAGE</text>',
      sky("rns4", "#ff7eb3", "#ffcfa0"));
  }

  /* 5. Barlowe Rd and Matthew Henson Ave, Palmer Park; the boxing center behind */
  function rncorner() {
    const gym = '<rect x="150" y="70" width="190" height="62" fill="#9c4a36"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M150 ' + (78 + i * 8) + 'h190" stroke="#7f3a2a" stroke-width="1"/>').join("") +
      '<rect x="146" y="64" width="198" height="8" fill="#d9d0c0"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (162 + i * 36) + '" y="84" width="22" height="16" fill="#ffe2a0" opacity=".8"/>').join("") +
      '<rect x="156" y="104" width="86" height="18" rx="2" fill="#1a1a1a"/><text x="199" y="117" text-anchor="middle" ' + font + ' font-size="9" fill="#ffd166">BOXING CENTER</text>' +
      '<path d="M170 64v8M174 64v8" stroke="#555"/><g class="rn-sw"><path d="M172 64v10" stroke="#ddd" stroke-width="1.5"/><path d="M164 74h16v10q0 6 -8 6t-8 -6z" fill="#d0202e" stroke="#7a0a1c" stroke-width="1.5"/></g>' +
      '<g class="rn-sw" style="animation-delay:-1.1s"><path d="M320 64v10" stroke="#ddd" stroke-width="1.5"/><path d="M312 74h16v10q0 6 -8 6t-8 -6z" fill="#d0202e" stroke="#7a0a1c" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rns5)"/>' +
      '<g fill="#3a2a55"><rect x="0" y="90" width="70" height="42"/><rect x="74" y="100" width="60" height="32"/><rect x="350" y="96" width="50" height="36"/></g>' +
      gym +
      '<rect x="0" y="130" width="400" height="94" fill="#3b2b3f"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#2c2030" stroke-width="1"/>').join("") +
      tag("RICO", 18, 200, 62, PINK, -7) + tag("SUGAR TRAP", 150, 214, 18, LIME, -4) + tag("RAGE", 190, 186, 22, PURP, -8) +
      '<rect x="0" y="224" width="400" height="36" fill="#55505a"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="100" width="6" height="124" fill="#2f2f2f"/>' + sign(278, 102, 112, "Barlowe Rd") + sign(244, 128, 150, "Matthew Henson Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="rn-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="rn-sp"><circle cx="136" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="rn-sp rn-sp2"><circle cx="142" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff5fa">PALMER PARK, PRINCE GEORGE\'S COUNTY</text>',
      sky("rns5", "#1e1440", "#e8608f"));
  }

  window.SCENES = { rnstation: rnstation, rnflowers: rnflowers, rnboulevard: rnboulevard, rncoaster: rncoaster, rncorner: rncorner };
})();
