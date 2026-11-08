/* mack10 scenes (Regions tab: Los Angeles + SoCal; Inglewood, born and raised, Inglewood High). CSS classes prefixed mk10- (the page's own anim-train is kept).
   1 Metro Local 117 stop on Century Blvd at Prairie Ave, Inglewood ("from Manchester to Century", Inglewood Swangin'): the orange 117 bus pulling in, palms, the bus-stop pole.
   2 Inglewood High School on Grevillea Ave (his school; the Sentinels, green and white): the two-story campus front, the green banner, the flag waving, the bell ringing.
   3 Market Street, downtown Inglewood ("So we spin and we win up and down Market Street"): the old movie palace's tall neon blade sign flickering, storefronts, a drop top cruising.
   4 The backyard boogie ("Straight from Inglewood"): chain-link fence, string lights, the grill smoking, the speaker stack thumping, a green '64 hopping on the lawn.
   5 Manchester Blvd and Market St: green signs, MACK 10 tagged with HOO-BANGIN, MACK DIME and FOE LIFE, the white Inglewood City Hall tower behind.
   400 x 260 SVGs. No logos, no faces. No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mk10flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.mk10-flag{transform-box:fill-box;transform-origin:0% 50%;animation:mk10flag 1.6s ease-in-out infinite}' +
    '@keyframes mk10bell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mk10-bell{transform-box:fill-box;transform-origin:50% 0%;animation:mk10bell 1.2s ease-in-out infinite}' +
    '@keyframes mk10flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.25}55%{opacity:.95}}.mk10-flk{animation:mk10flick 2.2s infinite}.mk10-flk2{animation-delay:-.7s}.mk10-flk3{animation-delay:-1.4s}' +
    '@keyframes mk10car{from{transform:translateX(-110px)}to{transform:translateX(480px)}}.mk10-car{animation:mk10car 6.5s linear infinite;animation-delay:-2.6s}' +
    '@keyframes mk10hop{0%,100%{transform:translateY(0) rotate(0)}30%{transform:translateY(-16px) rotate(-6deg)}55%{transform:translateY(0) rotate(0)}}.mk10-hop{transform-box:fill-box;transform-origin:80% 100%;animation:mk10hop 1.6s ease-in-out infinite}' +
    '@keyframes mk10smoke{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-34px);opacity:0}}.mk10-sm{animation:mk10smoke 2.4s ease-out infinite}.mk10-sm2{animation-delay:-.8s}.mk10-sm3{animation-delay:-1.6s}' +
    '@keyframes mk10thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.mk10-cone{transform-box:fill-box;transform-origin:50% 50%;animation:mk10thump .5s ease-in-out infinite}' +
    '@keyframes mk10tw{0%,100%{opacity:.3}50%{opacity:1}}.mk10-tw{animation:mk10tw 1.6s ease-in-out infinite}.mk10-t2{animation-delay:-.8s}.mk10-t3{animation-delay:-.4s}' +
    '@keyframes mk10spray{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.mk10-spray{transform-box:fill-box;transform-origin:50% 100%;animation:mk10spray 3s ease-in-out infinite}' +
    '@keyframes mk10sp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mk10-sp{animation:mk10sp 1.4s ease-out infinite}.mk10-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#e8b923", GREEN = "#2e8b57", CHROME = "#c9ced4", BUS = "#e8732a";
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-4 -40 4 -80" stroke="#4a3626" stroke-width="5" fill="none"/>' +
    '<path d="M4 -80q-22 -6 -36 8q18 -4 36 -8zM4 -80q22 -8 38 6q-20 -2 -38 -6zM4 -80q-12 -18 -30 -18q16 8 30 18zM4 -80q12 -20 30 -16q-16 6 -30 16z" fill="#2c5e3a"/></g>';
  const lowrider = (x, y, c) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 0q2 -12 16 -14l20 -14h46l18 14h20q10 2 10 14z" fill="' + c + '" stroke="#1a3a2a" stroke-width="1.5"/>' +
    '<path d="M40 -26h40l14 12h-66z" fill="#cfe6f2" opacity=".8"/><path d="M4 -4h124" stroke="' + CHROME + '" stroke-width="2"/>' +
    '<circle cx="28" cy="2" r="9" fill="#222"/><circle cx="28" cy="2" r="5" fill="' + CHROME + '"/><circle cx="106" cy="2" r="9" fill="#222"/><circle cx="106" cy="2" r="5" fill="' + CHROME + '"/></g>';

  /* 1. Metro Local 117, Century Blvd at Prairie Ave */
  function mk10stop() {
    const bus = '<g class="anim-train"><rect x="40" y="118" width="230" height="74" rx="10" fill="' + BUS + '" stroke="#9a4a1a" stroke-width="2"/>' +
      '<rect x="40" y="118" width="230" height="10" rx="6" fill="#f2f2f0"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (52 + i * 38) + '" y="134" width="32" height="26" rx="3" fill="#25313c"/>').join("") +
      '<rect x="244" y="134" width="22" height="50" rx="2" fill="#25313c"/><rect x="232" y="122" width="34" height="9" rx="1" fill="#111"/><text x="249" y="129.4" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb35a">117</text>' +
      '<rect x="40" y="170" width="230" height="5" fill="#f2f2f0"/><circle cx="84" cy="194" r="12" fill="#222"/><circle cx="84" cy="194" r="5" fill="#888"/><circle cx="228" cy="194" r="12" fill="#222"/><circle cx="228" cy="194" r="5" fill="#888"/>' +
      '<circle cx="268" cy="182" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mk1)"/>' +
      '<rect x="0" y="92" width="90" height="40" fill="#c8b49a"/><rect x="96" y="104" width="70" height="28" fill="#b9a68f"/><rect x="180" y="96" width="110" height="36" fill="#d4c2a6"/><rect x="300" y="102" width="100" height="30" fill="#c8b49a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (192 + i * 16) + '" y="106" width="10" height="10" fill="#6a7a8a"/>').join("") +
      palm(20, 120, 0.9) + palm(176, 116, 0.7) + palm(318, 118, 0.8) +
      '<rect x="0" y="130" width="400" height="80" fill="#55575b"/><path d="M0 170h400" stroke="#f1e6a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      '<rect x="0" y="208" width="400" height="52" fill="#b9b2a6"/><rect x="0" y="206" width="400" height="4" fill="#d8d1c4"/>' +
      /* bus stop pole + sign */
      '<rect x="330" y="120" width="4" height="96" fill="#5d6166"/><rect x="306" y="60" width="52" height="62" rx="4" fill="#fff" stroke="#333" stroke-width="2"/>' +
      '<rect x="306" y="60" width="52" height="16" rx="4" fill="' + BUS + '"/><text x="332" y="72" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">METRO</text>' +
      '<text x="332" y="100" text-anchor="middle" ' + font + ' font-size="22" fill="#222">117</text><text x="332" y="114" text-anchor="middle" ' + font + ' font-size="7" fill="#444">LOCAL</text>' +
      sign(12, 20, 138, "W CENTURY BL") + sign(12, 46, 120, "S PRAIRIE AV"),
      sky("mk1", "#f0a868", "#fbdcb6"));
  }

  /* 2. Inglewood High School */
  function mk10school() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="22" height="26" fill="#3a5a6e" stroke="#2e8b57" stroke-width="2"/><path d="M' + (x + 11) + ' ' + y + 'v26M' + x + ' ' + (y + 13) + 'h22" stroke="#e8e4da" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mk2)"/>' +
      palm(26, 196, 1.0) + palm(380, 196, 0.9) +
      /* campus building */
      '<rect x="50" y="88" width="300" height="112" fill="#efe8d8" stroke="#bfb49c" stroke-width="2"/><rect x="44" y="80" width="312" height="10" fill="' + GREEN + '"/>' +
      '<path d="M160 88v-30h80v30z" fill="#efe8d8" stroke="#bfb49c" stroke-width="2"/><path d="M154 60h92l-46 -20z" fill="' + GREEN + '"/>' +
      '<g class="mk10-bell"><path d="M192 66q8 -10 16 0v10h-16z" fill="' + GOLD + '" stroke="#9a7a2a" stroke-width="1.5"/><circle cx="200" cy="79" r="2.4" fill="#9a7a2a"/></g>' +
      win(68, 104) + win(104, 104) + win(276, 104) + win(312, 104) + win(68, 152) + win(104, 152) + win(276, 152) + win(312, 152) +
      /* entrance */
      '<path d="M170 200v-56q30 -24 60 0v56z" fill="#5a3e2a" stroke="#3a2a1c" stroke-width="2"/><path d="M200 128v72" stroke="#3a2a1c" stroke-width="2"/>' +
      '<rect x="140" y="98" width="120" height="18" fill="' + GREEN + '"/><text x="200" y="111.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">SENTINELS</text>' +
      /* flagpole */
      '<rect x="372" y="34" width="3" height="166" fill="#888"/><g class="mk10-flag"><rect x="375" y="36" width="24" height="16" fill="' + GREEN + '"/><rect x="375" y="42" width="24" height="4" fill="#fff"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#7aa86a"/><rect x="150" y="200" width="100" height="60" fill="#c8c0b0"/>' +
      sign(14, 20, 140, "S GREVILLEA AV"),
      sky("mk2", "#8ec2ea", "#f4e3c4"));
  }

  /* 3. Market Street, downtown Inglewood */
  function mk10market() {
    const shop = (x, w, c, aw) => '<rect x="' + x + '" y="120" width="' + w + '" height="80" fill="' + c + '" stroke="#8d8676" stroke-width="1.5"/><rect x="' + (x + 6) + '" y="150" width="' + (w - 12) + '" height="40" fill="#2f3e4c"/>' +
      '<path d="M' + x + ' 140h' + w + 'l-6 10h-' + (w - 12) + 'z" fill="' + aw + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mk3)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="mk10-tw ' + ["", "mk10-t2", "mk10-t3"][i % 3] + '" cx="' + ((i * 61) % 400) + '" cy="' + (12 + (i * 23) % 50) + '" r="1.2" fill="#fff"/>').join("") +
      shop(0, 90, "#d9c7a6", "#2e8b57") + shop(250, 70, "#cdb894", "#b5442e") + shop(326, 74, "#e0d0b0", GOLD) +
      /* the movie palace with its tall blade sign */
      '<rect x="96" y="96" width="150" height="104" fill="#e9e0cc" stroke="#8d8676" stroke-width="2"/><path d="M96 96h150" stroke="' + GREEN + '" stroke-width="5"/>' +
      '<rect x="112" y="140" width="118" height="20" fill="#2a2a2a"/>' + Array.from({ length: 12 }, (_, i) => '<circle class="mk10-tw ' + ["", "mk10-t2", "mk10-t3"][i % 3] + '" cx="' + (118 + i * 10) + '" cy="150" r="2.4" fill="#ffe39a"/>').join("") +
      '<rect x="128" y="166" width="86" height="34" fill="#3a2a1c"/><path d="M171 166v34" stroke="#c9a24a" stroke-width="2"/>' +
      '<rect x="160" y="22" width="22" height="118" rx="4" fill="#1e2a3a" stroke="' + CHROME + '" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect class="mk10-flk ' + ["", "mk10-flk2", "mk10-flk3"][i % 3] + '" x="164" y="' + (28 + i * 18) + '" width="14" height="12" rx="2" fill="none" stroke="' + ["#ff5aa0", "#5ae0ff", GOLD][i % 3] + '" stroke-width="2.4"/>').join("") +
      '<path class="mk10-flk" d="M171 10l3 8h8l-6 5l2 8l-7 -5l-7 5l2 -8l-6 -5h8z" fill="' + GOLD + '"/>' +
      palm(92, 204, 0.9) + palm(250, 204, 0.8) +
      '<rect x="0" y="200" width="400" height="60" fill="#4e5054"/><path d="M0 232h400" stroke="#f1e6a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="mk10-car">' + lowrider(0, 222, GOLD) + '</g>' +
      sign(280, 22, 108, "MARKET ST"),
      sky("mk3", "#1c2440", "#5a4a6e"));
  }

  /* 4. The backyard boogie */
  function mk10yard() {
    const bulbs = Array.from({ length: 21 }, (_, i) => '<circle class="mk10-tw ' + ["", "mk10-t2", "mk10-t3"][i % 3] + '" cx="' + (8 + i * 19) + '" cy="' + (40 + Math.sin(i / 3.3) * 8).toFixed(1) + '" r="3" fill="' + ["#ffe79a", "#ff9aa2", "#9affc8"][i % 3] + '"/>').join("");
    const cone = (cx, cy, r) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#2a2a2a" stroke="#555" stroke-width="2"/><circle class="mk10-cone" cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.55) + '" fill="#444"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mk4)"/>' +
      '<path d="M0 48q100 -16 200 0t200 0" stroke="#333" stroke-width="1" fill="none"/>' + bulbs +
      /* house back wall */
      '<rect x="0" y="70" width="170" height="110" fill="#e6d2b0"/><path d="M0 70l85 -26l85 26z" fill="#a8553a"/><rect x="30" y="96" width="40" height="34" fill="#ffe39a" stroke="#8a7a66" stroke-width="2"/><rect x="100" y="110" width="36" height="70" fill="#6a4a36"/>' +
      palm(214, 130, 0.9) + palm(390, 128, 0.8) +
      /* chain-link fence */
      '<rect x="170" y="120" width="230" height="60" fill="none"/>' + Array.from({ length: 24 }, (_, i) => '<path d="M' + (170 + i * 10) + ' 120l10 20l-10 20l10 20" stroke="#9aa3ad" stroke-width="1" fill="none"/>').join("") +
      '<path d="M170 120h230" stroke="#9aa3ad" stroke-width="3"/>' + [170, 250, 330, 398].map(x => '<rect x="' + (x - 2) + '" y="116" width="4" height="64" fill="#8a929c"/>').join("") +
      /* yard */
      '<rect x="0" y="180" width="400" height="80" fill="#6a9a5a"/><rect x="0" y="180" width="400" height="4" fill="#5a8a4a"/>' +
      /* grill */
      '<path d="M40 196h50q0 22 -25 22t-25 -22z" fill="#222"/><path d="M48 218l-6 22M82 218l6 22M65 218v22" stroke="#222" stroke-width="3"/><rect x="38" y="192" width="54" height="5" fill="#555"/>' +
      '<circle class="mk10-sm" cx="56" cy="184" r="7" fill="#ddd" opacity=".6"/><circle class="mk10-sm mk10-sm2" cx="68" cy="182" r="8" fill="#ddd" opacity=".6"/><circle class="mk10-sm mk10-sm3" cx="76" cy="186" r="6" fill="#ddd" opacity=".6"/>' +
      /* speaker stack */
      '<rect x="120" y="160" width="44" height="80" fill="#1a1a1a" stroke="#444" stroke-width="2"/>' + cone(142, 182, 14) + cone(142, 220, 14) +
      /* folding table with the turntable */
      '<rect x="176" y="200" width="70" height="6" fill="#ccc"/><path d="M182 206l-6 30M240 206l6 30" stroke="#888" stroke-width="2"/><rect x="190" y="190" width="44" height="10" fill="#333"/><circle cx="212" cy="195" r="4" fill="' + GOLD + '"/>' +
      /* the lowrider hopping out front, beyond the fence */
      '<g class="mk10-hop">' + lowrider(262, 236, GREEN) + '</g>',
      sky("mk4", "#2a2a5a", "#e2826a"));
  }

  /* 5. Manchester Blvd and Market St */
  function mk10corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mk5)"/>' +
      /* Inglewood City Hall behind: white modern block with vertical fins */
      '<rect x="150" y="30" width="120" height="96" fill="#f2f0ea" stroke="#bfbab0" stroke-width="2"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (156 + i * 10.5) + '" y="36" width="5" height="88" fill="#d6d2c8"/>').join("") +
      Array.from({ length: 5 }, (_, r) => '<path d="M150 ' + (48 + r * 16) + 'h120" stroke="#5a6a7a" stroke-width="3" opacity=".6"/>').join("") +
      '<rect x="140" y="24" width="140" height="7" fill="#e2ded4"/>' +
      '<rect x="0" y="100" width="130" height="26" fill="#c8b49a"/><rect x="290" y="94" width="110" height="32" fill="#d4c2a6"/>' +
      palm(30, 124, 0.85) + palm(296, 124, 0.75) + palm(370, 122, 0.9) +
      '<rect x="0" y="112" width="400" height="12" fill="#4a4448"/>' +
      '<g class="mk10-car">' + '<g transform="scale(.5) translate(0 220)">' + lowrider(0, 0, GOLD) + '</g></g>' +
      /* wall */
      '<rect x="30" y="124" width="330" height="100" fill="#e3dccf"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M30 ' + (141 + r * 17) + 'h330" stroke="#cfc6b6" stroke-width="1"/>').join("") +
      tag("MACK 10", 48, 184, 44, GOLD, -5) +
      tag("HOO-BANGIN", 254, 158, 16, "#7fe0a8", -6) + tag("MACK DIME", 46, 214, 18, CHROME, -3) + tag("FOE LIFE", 196, 214, 19, "#ffb35a", -4) +
      '<g class="mk10-spray"><rect x="318" y="194" width="12" height="26" rx="3" fill="' + GOLD + '"/><rect x="321" y="188" width="6" height="7" fill="#ddd"/></g>' +
      '<circle class="mk10-sp" cx="324" cy="184" r="3" fill="' + GOLD + '"/><circle class="mk10-sp mk10-sp2" cx="328" cy="182" r="2.4" fill="' + GOLD + '"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#a8a29a"/><rect x="0" y="222" width="400" height="3" fill="#cfc8bd"/>' +
      '<rect x="382" y="40" width="5" height="186" fill="#5d6166"/>' + sign(250, 40, 138, "W MANCHESTER BL") + sign(300, 66, 88, "S MARKET ST"),
      sky("mk5", "#9ac2e6", "#f6dcc0"));
  }

  window.SCENES = { mk10stop, mk10school, mk10market, mk10yard, mk10corner };
})();
