/* pink scenes (Regions tab: Philadelphia; Doylestown, Bucks County). CSS classes prefixed pk- (the page's own anim-train is kept).
   1 Doylestown station, the end of SEPTA Regional Rail's Lansdale/Doylestown Line: low platform, the little brick depot with its deep eaves, the bumper block at the end of the track, black sign with the purple RR badge, a stainless Silverliner sliding in.
   2 Central Bucks High School West, the Doylestown high school she went to: long brick school front, flag on the pole, yellow school buses, a balance beam out front for the kid gymnast she was.
   3 Club Fever on South Street, Philadelphia, where she got on the mic as a teenager: small stage, pink neon FEVER sign buzzing, mirror ball, crowd bouncing.
   4 The aerial show: an arena with a silhouette flying on silks over the stage (her trademark stunt since Glitter in the Air), spotlights sweeping, glitter falling.
   5 N Main St and E State St, the middle of Doylestown: green signs, brick wall with P!NK tagged, the Mercer Museum's gray concrete castle towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pkglow{0%,100%{opacity:.45}50%{opacity:1}}.pk-glow{animation:pkglow 2.4s ease-in-out infinite}.pk-glow2{animation-delay:-1.2s}' +
    '@keyframes pkbuzz{0%,100%{opacity:1}46%{opacity:1}48%{opacity:.25}50%{opacity:1}52%{opacity:.35}54%{opacity:1}}.pk-buzz{animation:pkbuzz 3s linear infinite}' +
    '@keyframes pkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.pk-flag{transform-box:fill-box;transform-origin:0 50%;animation:pkflag 1.8s ease-in-out infinite}' +
    '@keyframes pkbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.pk-b{animation:pkbounce .7s ease-in-out infinite}.pk-b2{animation-delay:-.35s}' +
    '@keyframes pksweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.pk-sw{transform-box:fill-box;transform-origin:50% 0%;animation:pksweep 3.8s ease-in-out infinite}.pk-sw2{animation-delay:-1.9s}' +
    '@keyframes pkswing{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.pk-swing{transform-box:view-box;transform-origin:200px 0px;animation:pkswing 4.2s ease-in-out infinite}' +
    '@keyframes pkfall{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.pk-fall{animation:pkfall 5s linear infinite}.pk-fall2{animation-delay:-1.7s}.pk-fall3{animation-delay:-3.4s}' +
    '@keyframes pkspin{0%,100%{opacity:.3}50%{opacity:1}}.pk-dot{animation:pkspin 1s steps(2) infinite}.pk-dot2{animation-delay:-.5s}' +
    '@keyframes pkcloud{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.pk-cloud{animation:pkcloud 26s linear infinite}.pk-cloud2{animation-delay:-13s}' +
    '@keyframes pkbus{0%,100%{transform:translateX(0)}50%{transform:translateX(-30px)}}.pk-bus{animation:pkbus 7s ease-in-out infinite}' +
    '@keyframes pkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pk-sp{animation:pkspray 1.4s ease-out infinite}.pk-sp2{animation-delay:.45s}' +
    '@keyframes pkcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.pk-car{animation:pkcar 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "pk-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="11" ry="7"/></g></g>';
  const PINK = "#ff3fa4", HOT = "#ff7ac6", RR = "#91456c", SILVER = "#c9ccd3";
  /* a person shape, no face: just a dark silhouette */
  const fig = (x, y, s, col, cls) => '<g class="' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="' + col + '"><circle cx="0" cy="-30" r="6"/><path d="M-7 -23h14l3 22h-6l-1 22h-5l-1 -14l-1 14h-5l-1 -22h-6z"/></g></g>';

  /* 1. Doylestown station, end of the line */
  function pkstation() {
    const tr = '<g class="anim-train"><rect x="40" y="132" width="300" height="66" rx="8" fill="#d6dbe0" stroke="#7b828a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 44) + '" y="142" width="30" height="20" rx="3" fill="#1d2731"/>').join("") +
      '<rect x="40" y="168" width="300" height="4" fill="#c8102e"/><rect x="40" y="173" width="300" height="4" fill="#1f4e9a"/>' +
      [128, 236].map(x => '<rect x="' + x + '" y="176" width="22" height="20" fill="#aab1b9" stroke="#7b828a"/>').join("") +
      '<rect x="40" y="136" width="18" height="60" rx="5" fill="#b4bbc3"/><circle cx="49" cy="188" r="3.5" fill="#fff6c2"/>' +
      '<path d="M190 132l-14 -16h36l-14 16" fill="none" stroke="#333" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pk-s1)"/>' + cloud(60, 34, 1, "pk-cloud") + cloud(240, 22, .8, "pk-cloud pk-cloud2") +
      /* trees of Bucks County behind */
      Array.from({ length: 9 }, (_, i) => '<ellipse cx="' + (i * 50 + 10) + '" cy="' + (100 + (i % 3) * 4) + '" rx="34" ry="22" fill="' + (i % 2 ? "#4f7a3c" : "#5d8a45") + '"/>').join("") +
      /* catenary */
      '<rect x="0" y="108" width="400" height="2" fill="#555"/><rect x="90" y="96" width="4" height="40" fill="#666"/><rect x="300" y="96" width="4" height="40" fill="#666"/><rect x="88" y="96" width="220" height="3" fill="#666"/>' +
      /* track + bumper block at the end of the line */
      '<rect x="0" y="198" width="400" height="8" fill="#5b4a3a"/><rect x="0" y="200" width="400" height="2" fill="#a9a9a9"/>' +
      '<rect x="356" y="178" width="30" height="22" fill="#e2b33a" stroke="#333"/><path d="M356 182l30 14M356 196l30 -14" stroke="#333" stroke-width="2"/>' +
      tr +
      /* little brick depot */
      '<rect x="248" y="70" width="140" height="10" fill="#4a2e22"/><path d="M240 80h156l-10 -14h-136z" fill="#5a3a2a"/><rect x="258" y="80" width="120" height="44" fill="#9c4a33"/>' +
      '<rect x="270" y="90" width="16" height="22" fill="#2a2a2a"/><rect x="296" y="88" width="20" height="36" fill="#3b2a20"/><rect x="326" y="90" width="16" height="22" fill="#2a2a2a"/><rect x="352" y="90" width="16" height="22" fill="#2a2a2a"/>' +
      /* platform */
      '<rect x="0" y="206" width="400" height="54" fill="#8c8c8c"/><rect x="0" y="206" width="400" height="6" fill="#e9d24a"/>' +
      /* station sign */
      '<rect x="8" y="216" width="214" height="34" rx="3" fill="#111"/><text x="16" y="240" ' + font + ' font-size="17" fill="#fff">DOYLESTOWN</text>' +
      '<rect x="146" y="222" width="44" height="22" rx="11" fill="' + RR + '"/><text x="168" y="238" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">RR</text>' +
      '<rect x="234" y="222" width="158" height="22" rx="3" fill="#111"/><text x="313" y="237" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">END OF THE LINE</text>',
      sky("pk-s1", "#9cc8ea", "#f3d6e6"));
  }

  /* 2. Central Bucks High School West */
  function pkschool() {
    const bus = x => '<rect x="' + x + '" y="186" width="86" height="34" rx="5" fill="#f2b705" stroke="#8a6a00"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 8 + i * 15) + '" y="192" width="11" height="10" fill="#2a3640"/>').join("") +
      '<rect x="' + x + '" y="206" width="86" height="2" fill="#222"/><circle cx="' + (x + 18) + '" cy="221" r="6" fill="#222"/><circle cx="' + (x + 68) + '" cy="221" r="6" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pk-s2)"/>' + cloud(90, 30, 1, "pk-cloud") + cloud(300, 44, .7, "pk-cloud pk-cloud2") +
      /* long brick school */
      '<rect x="20" y="88" width="360" height="96" fill="#a5543c"/><rect x="20" y="82" width="360" height="8" fill="#d9d2c4"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + (30 + (i % 8) * 44 + (i % 8 > 3 ? 14 : 0)) + '" y="' + (98 + Math.floor(i / 8) * 40) + '" width="26" height="26" fill="#cfe3ee" stroke="#e8e2d4" stroke-width="2"/>').join("") +
      /* entrance */
      '<rect x="182" y="70" width="36" height="114" fill="#8c4632"/><rect x="176" y="64" width="48" height="8" fill="#d9d2c4"/><rect x="188" y="148" width="24" height="36" fill="#2c3a44"/>' +
      '<rect x="120" y="40" width="160" height="22" rx="3" fill="#1f3f8a"/><text x="200" y="56" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">CENTRAL BUCKS WEST</text>' +
      /* flag pole */
      '<rect x="356" y="40" width="3" height="146" fill="#ccc"/><g class="pk-flag"><rect x="359" y="42" width="30" height="18" fill="#fff"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="359" y="' + (42 + i * 4.5) + '" width="30" height="2.2" fill="#b22234"/>').join("") + '<rect x="359" y="42" width="12" height="9" fill="#3c3b6e"/></g>' +
      /* lawn + walk */
      '<rect x="0" y="184" width="400" height="76" fill="#5c9a3e"/><path d="M182 184h36l40 76h-116z" fill="#c9c2b2"/>' +
      '<g class="pk-bus">' + bus(268) + '</g>' +
      /* balance beam with a little gymnast */
      '<rect x="24" y="210" width="96" height="6" rx="2" fill="#e8d7b5" stroke="#8a6a3a"/><rect x="36" y="216" width="4" height="22" fill="#666"/><rect x="104" y="216" width="4" height="22" fill="#666"/>' +
      '<g class="pk-b">' + fig(72, 210, .6, PINK) + '</g>',
      sky("pk-s2", "#7fb6e6", "#d7ecf7"));
  }

  /* 3. Club Fever, South Street */
  function pkfever() {
    const crowd = Array.from({ length: 12 }, (_, i) => fig(18 + i * 34, 262, 1.1, "#3a1834", "pk-b" + (i % 2 ? " pk-b2" : ""))).join("");
    return svg(
      '<rect width="400" height="260" fill="#12060e"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="url(#pk-s3)"/>' +
      /* neon sign */
      '<g class="pk-buzz"><rect x="118" y="20" width="164" height="46" rx="8" fill="none" stroke="' + PINK + '" stroke-width="3"/>' +
      '<text x="200" y="56" text-anchor="middle" font-family="Barlow, Helvetica, Arial, sans-serif" font-weight="700" font-size="32" fill="none" stroke="' + HOT + '" stroke-width="2.2" letter-spacing="6">FEVER</text></g>' +
      /* mirror ball */
      '<rect x="279" y="66" width="2" height="22" fill="#999"/><circle cx="280" cy="100" r="14" fill="#cfd3da"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect class="pk-dot' + (i % 2 ? " pk-dot2" : "") + '" x="' + (271 + (i % 4) * 5) + '" y="' + (92 + Math.floor(i / 4) * 8) + '" width="3" height="3" fill="#fff"/>').join("") +
      /* light beams */
      '<path class="pk-sw" d="M60 0l-30 170h60z" fill="' + PINK + '" opacity=".22"/><path class="pk-sw pk-sw2" d="M340 0l-30 170h60z" fill="#8a7cff" opacity=".22"/>' +
      /* stage + mic + speaker stacks */
      '<rect x="40" y="150" width="320" height="30" fill="#2a1424"/><rect x="40" y="150" width="320" height="4" fill="' + PINK + '"/>' +
      '<rect x="44" y="98" width="34" height="52" fill="#1a1a1a" stroke="#333"/><circle cx="61" cy="114" r="9" fill="#333"/><circle cx="61" cy="136" r="7" fill="#333"/>' +
      '<rect x="322" y="98" width="34" height="52" fill="#1a1a1a" stroke="#333"/><circle cx="339" cy="114" r="9" fill="#333"/><circle cx="339" cy="136" r="7" fill="#333"/>' +
      '<rect x="199" y="112" width="2.5" height="38" fill="#bbb"/><ellipse cx="200" cy="110" rx="4" ry="5" fill="#444"/>' +
      fig(176, 150, 1.2, "#7a2a62", "pk-b") +
      crowd,
      sky("pk-s3", "#3a0b2c", "#12060e"));
  }

  /* 4. The aerial show */
  function pkaerial() {
    const glit = cls => Array.from({ length: 14 }, (_, i) => '<rect x="' + ((i * 61) % 400) + '" y="' + ((i * 37) % 120) + '" width="3" height="3" fill="' + ["#ffd166", HOT, "#fff", SILVER][i % 4] + '" transform="rotate(45 ' + ((i * 61) % 400) + ' ' + ((i * 37) % 120) + ')"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pk-s4)"/>' + stars(24) +
      /* rig truss */
      '<rect x="20" y="8" width="360" height="8" fill="#555"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M' + (20 + i * 20) + ' 8l10 8l10 -8" fill="none" stroke="#777"/>').join("") +
      /* spotlights */
      '<path class="pk-sw" d="M90 16l-50 220h100z" fill="#fff" opacity=".14"/><path class="pk-sw pk-sw2" d="M310 16l-50 220h100z" fill="' + HOT + '" opacity=".16"/>' +
      /* swinging silks + flyer */
      '<g class="pk-swing"><path d="M196 16q-4 70 2 120M204 16q4 70 -2 120" stroke="' + PINK + '" stroke-width="4" fill="none"/>' +
      '<g transform="translate(200 132) rotate(-30)" fill="#1b0b16"><circle cx="0" cy="-30" r="6"/><path d="M-6 -23h12l10 18l-5 3l-7 -10l-1 14l14 14l-4 4l-16 -14l-12 12l-4 -4l12 -14l0 -14l-6 8l-5 -3z"/></g></g>' +
      /* glitter falling */
      '<g class="pk-fall">' + glit() + '</g><g class="pk-fall pk-fall2">' + glit() + '</g><g class="pk-fall pk-fall3">' + glit() + '</g>' +
      /* stage + crowd */
      '<rect x="60" y="196" width="280" height="18" fill="#22101c"/><rect x="60" y="196" width="280" height="3" fill="' + PINK + '"/>' +
      Array.from({ length: 16 }, (_, i) => '<g class="pk-b' + (i % 2 ? " pk-b2" : "") + '"><circle cx="' + (12 + i * 25) + '" cy="236" r="9" fill="#0b0408"/><rect x="' + (2 + i * 25) + '" y="242" width="20" height="20" fill="#0b0408"/>' +
        (i % 3 === 0 ? '<rect x="' + (17 + i * 25) + '" y="216" width="3" height="20" fill="#0b0408"/><rect x="' + (15 + i * 25) + '" y="212" width="7" height="5" rx="1" fill="#9fe0ff" class="pk-glow"/>' : "") + '</g>').join(""),
      sky("pk-s4", "#1c0a2a", "#3d0f2e"));
  }

  /* 5. N Main St and E State St, Doylestown */
  function pkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pk-s5)"/>' + cloud(70, 30, .9, "pk-cloud") +
      /* Mercer Museum: gray concrete castle with towers and a red tile roof */
      '<g fill="#a7a49d" stroke="#7d7a73" stroke-width="1">' +
      '<rect x="170" y="50" width="120" height="80"/><rect x="150" y="30" width="34" height="100"/><rect x="262" y="40" width="30" height="90"/><rect x="214" y="16" width="30" height="114"/>' +
      '</g>' +
      '<path d="M150 30l17 -16l17 16z" fill="#b5523c"/><path d="M214 16l15 -14l15 14z" fill="#b5523c"/><path d="M262 40l15 -14l15 14z" fill="#b5523c"/><path d="M184 50h78l-10 -10h-58z" fill="#b5523c"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + [160, 160, 222, 222, 270, 270, 192, 236, 262][i] + '" y="' + [46, 76, 34, 66, 56, 86, 70, 98, 104][i] + '" width="8" height="12" fill="#3a3a3a"/>').join("") +
      /* trees */
      '<ellipse cx="120" cy="120" rx="40" ry="24" fill="#4f7a3c"/><ellipse cx="320" cy="122" rx="40" ry="22" fill="#5d8a45"/>' +
      /* brick wall with the tag */
      '<rect x="0" y="118" width="260" height="84" fill="#8e3f2c"/>' +
      Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (126 + r * 10) + 'h260" stroke="#6e2e20" stroke-width="1"/>').join("") +
      tag("P!NK", 30, 178, 50, PINK, -8) + tag("BUCKS CO", 160, 192, 17, "#fff", -4) +
      '<g class="pk-sp"><circle cx="150" cy="150" r="3" fill="' + PINK + '"/></g><g class="pk-sp pk-sp2"><circle cx="157" cy="146" r="2" fill="' + HOT + '"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="202" width="400" height="12" fill="#a9a9a9"/><rect x="0" y="214" width="400" height="46" fill="#4a4a4a"/><rect x="0" y="236" width="400" height="3" fill="#e9d24a"/>' +
      '<g class="pk-car"><rect x="0" y="222" width="56" height="16" rx="5" fill="' + HOT + '"/><rect x="12" y="216" width="30" height="9" rx="3" fill="#cfe3ee"/><circle cx="14" cy="239" r="5" fill="#222"/><circle cx="44" cy="239" r="5" fill="#222"/></g>' +
      /* sign pole */
      '<rect x="318" y="110" width="5" height="96" fill="#5a5a5a"/>' + sign(272, 108, 98, "N MAIN ST") + sign(294, 134, 98, "E STATE ST"),
      sky("pk-s5", "#86bdea", "#f6d9e8"));
  }

  window.SCENES = { pkstation, pkschool, pkfever, pkaerial, pkcorner };
})();
