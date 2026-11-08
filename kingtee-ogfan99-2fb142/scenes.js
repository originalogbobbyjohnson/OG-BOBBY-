/* King Tee scenes (Regions tab: Los Angeles + SoCal; Compton). CSS classes prefixed kgt- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kgtbus{0%{transform:translateX(420px)}45%,100%{transform:translateX(0)}}.kgt-bus{animation:kgtbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes kgtglow{0%,100%{opacity:.45}50%{opacity:1}}.kgt-glow{animation:kgtglow 2.2s ease-in-out infinite}.kgt-g2{animation-delay:-1.1s}' +
    '@keyframes kgthop{0%,60%,100%{transform:rotate(0)}30%{transform:rotate(-7deg)}}.kgt-hop{transform-box:fill-box;transform-origin:100% 100%;animation:kgthop 1.6s ease-in-out infinite}' +
    '@keyframes kgtdrip{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(40px);opacity:0}}.kgt-drip{animation:kgtdrip 1.2s linear infinite}.kgt-d2{animation-delay:-.4s}.kgt-d3{animation-delay:-.8s}' +
    '@keyframes kgtroll{0%{transform:translateX(-260px)}100%{transform:translateX(460px)}}.kgt-roll{animation:kgtroll 9s linear infinite;animation-delay:-4.6s}' +
    '@keyframes kgtspin{to{transform:rotate(360deg)}}.kgt-spin{transform-box:fill-box;transform-origin:50% 50%;animation:kgtspin 1s linear infinite}' +
    '@keyframes kgtbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.kgt-bob{animation:kgtbob .8s ease-in-out infinite}' +
    '@keyframes kgtspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kgt-sp{animation:kgtspray 1.4s ease-out infinite}.kgt-sp2{animation-delay:.45s}' +
    '@keyframes kgtwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.kgt-wave{animation:kgtwave 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' -2 -' + h + '" stroke="' + c + '" stroke-width="4" fill="none"/>' +
    [-50, -20, 10, 40, 70, 160, 200].map(a => '<path d="M' + (x - 2) + ' ' + (y - h) + 'q' + (Math.cos(a * Math.PI / 180) * 14).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 14 - 6).toFixed(1) + ' ' + (Math.cos(a * Math.PI / 180) * 26).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 20 + 6).toFixed(1) + '" stroke="' + c + '" stroke-width="3" fill="none"/>').join("");
  /* a '63-style lowrider, side view, candy paint, wire wheels; x,y = rear bottom-left */
  const lowrider = (x, y, paint, cls) => '<g class="' + (cls || "") + '"><path d="M' + x + ' ' + (y - 14) + 'l8 -16h40l22 -18h66l22 18h36q10 0 12 10v10z" fill="' + paint + '" stroke="#222" stroke-width="1.5"/>' +
    '<path d="M' + (x + 76) + ' ' + (y - 46) + 'l18 -14h58l18 14z" fill="#9fd4ef" opacity=".8"/><path d="M' + (x + 4) + ' ' + (y - 22) + 'h196" stroke="#f4f4f4" stroke-width="2"/>' +
    [x + 46, x + 166].map(cx => '<g><circle cx="' + cx + '" cy="' + (y - 8) + '" r="15" fill="#111"/><g class="kgt-spin"><circle cx="' + cx + '" cy="' + (y - 8) + '" r="10" fill="#d9d9de"/>' + [0, 30, 60, 90, 120, 150].map(a => '<path d="M' + (cx + Math.cos(a * Math.PI / 180) * 9).toFixed(1) + ' ' + (y - 8 + Math.sin(a * Math.PI / 180) * 9).toFixed(1) + 'L' + (cx - Math.cos(a * Math.PI / 180) * 9).toFixed(1) + ' ' + (y - 8 - Math.sin(a * Math.PI / 180) * 9).toFixed(1) + '" stroke="#888" stroke-width="1"/>').join("") + '<circle cx="' + cx + '" cy="' + (y - 8) + '" r="3" fill="#f2c200"/></g></g>').join("") + '</g>';
  const GOLD = "#ffd23f", CANDY = "#c8102e", TEAL = "#2ec4b6", BUSO = "#e16710";

  /* 1. Metro Local 60 pulling up on Long Beach Blvd at Alondra Blvd in Compton: the orange Metro bus, the bus stop sign with the 60, palms and power lines in the late sun */
  function kgtstation() {
    const bus = '<g class="kgt-bus"><rect x="40" y="118" width="236" height="82" rx="10" fill="' + BUSO + '" stroke="#7a3a0a" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="130" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="130" width="26" height="58" rx="2" fill="#24323e"/><rect x="40" y="168" width="236" height="10" fill="#f4f4f2"/>' +
      '<rect x="44" y="120" width="96" height="11" rx="2" fill="#111"/><text x="92" y="128.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">60 LONG BEACH BL</text>' +
      '<circle cx="88" cy="200" r="12" fill="#222"/><circle cx="88" cy="200" r="5" fill="#9aa1a8"/><circle cx="234" cy="200" r="12" fill="#222"/><circle cx="234" cy="200" r="5" fill="#9aa1a8"/><circle cx="44" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kgt1)"/>' +
      '<path d="M0 44q100 14 200 4t200 6" stroke="#333" stroke-width="1.2" fill="none"/><path d="M0 52q100 12 200 2t200 6" stroke="#333" stroke-width="1.2" fill="none"/>' +
      palm(30, 150, 100, "#2a3424") + palm(120, 150, 80, "#2a3424") + palm(380, 150, 110, "#2a3424") +
      /* low stucco storefronts */
      '<rect x="0" y="96" width="400" height="54" fill="#d9b88a"/><rect x="0" y="92" width="400" height="6" fill="#b8956a"/>' + [20, 120, 220, 320].map((x, i) => '<rect x="' + x + '" y="108" width="60" height="30" fill="' + (i % 2 ? "#ffd98a" : "#3a4652") + '"/>').join("") +
      '<rect x="0" y="150" width="400" height="14" fill="#bdb8ae"/><rect x="0" y="164" width="400" height="96" fill="#4c4c52"/><path d="M0 238h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="332" y="84" width="5" height="80" fill="#6b7178"/><rect x="314" y="64" width="42" height="34" rx="3" fill="' + BUSO + '" stroke="#fff" stroke-width="1.5"/><text x="335" y="78" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><text x="335" y="93" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">60</text>' +
      '<rect x="300" y="104" width="70" height="16" rx="2" fill="#111"/><text x="335" y="115.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ALONDRA BL</text>',
      sky("kgt1", "#f6b26b", "#fbe3b8"));
  }

  /* 2. King Tee's crib, Likwit Crew headquarters, the house where he named Tha Alkaholiks: stucco bungalow, porch light, a boombox on the steps, a crate of 12-inches, the lawn sprinkler going */
  function kgtcrib() {
    return svg(
      '<rect width="400" height="260" fill="url(#kgt2)"/>' + Array.from({ length: 12 }, (_, i) => '<circle class="' + (i % 3 ? "" : "kgt-glow") + '" cx="' + ((i * 71) % 400) + '" cy="' + (10 + (i * 37) % 50) + '" r="1.2" fill="#fff" opacity=".7"/>').join("") +
      palm(360, 150, 120, "#141820") +
      '<rect x="70" y="80" width="250" height="110" fill="#e8d6b4"/><path d="M56 84l144 -48l144 48z" fill="#8a3a2a"/><path d="M56 84h288" stroke="#5a2418" stroke-width="4"/>' +
      '<rect x="98" y="104" width="54" height="44" fill="#ffd98a"/><path d="M125 104v44M98 126h54" stroke="#b8956a" stroke-width="3"/>' +
      '<rect x="236" y="104" width="54" height="44" fill="#2a3442"/><path d="M263 104v44M236 126h54" stroke="#b8956a" stroke-width="3"/>' +
      '<rect x="176" y="112" width="38" height="78" fill="#5a3a24"/><circle cx="206" cy="152" r="2.5" fill="' + GOLD + '"/>' +
      '<circle class="kgt-glow" cx="166" cy="114" r="5" fill="#fff2b0"/><circle cx="166" cy="114" r="18" fill="#fff2b0" opacity=".12"/>' +
      '<rect x="150" y="190" width="90" height="8" fill="#b0a690"/><rect x="140" y="198" width="110" height="8" fill="#a0967e"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2f5a2a"/><path d="M0 206h400" stroke="#3d7034" stroke-width="3"/>' +
      /* boombox */
      '<g class="kgt-bob"><rect x="154" y="170" width="52" height="22" rx="3" fill="#222" stroke="#888" stroke-width="1.5"/><circle cx="166" cy="181" r="7" fill="#444" stroke="#aaa"/><circle cx="194" cy="181" r="7" fill="#444" stroke="#aaa"/><rect x="174" y="174" width="12" height="6" fill="' + TEAL + '"/><path d="M160 170q20 -12 40 0" stroke="#888" stroke-width="2" fill="none"/></g>' +
      /* crate */
      '<rect x="216" y="172" width="28" height="20" fill="#8a6a3a" stroke="#4a3418"/>' + [0, 1, 2].map(i => '<rect x="' + (220 + i * 8) + '" y="164" width="6" height="14" fill="' + [GOLD, CANDY, TEAL][i] + '"/>').join("") +
      /* sprinkler */
      '<path d="M60 230v-6" stroke="#666" stroke-width="3"/>' + [0, 1, 2].map(i => '<circle class="kgt-drip kgt-d' + (i + 1) + '" cx="' + (52 + i * 8) + '" cy="196" r="2" fill="#9fd4ef"/>').join("") +
      '<rect x="96" y="60" width="200" height="18" rx="2" fill="#111" opacity=".85"/><text x="196" y="73" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="1.5">LIKWIT CREW HQ</text>',
      sky("kgt2", "#141633", "#4a3a66"));
  }

  /* 3. "Drove her straight down to the wash spot": a Compton hand car wash, the suds dripping, a candy-red '63 lowrider hitting the switch, the WASH sign blinking */
  function kgtwash() {
    return svg(
      '<rect width="400" height="260" fill="url(#kgt3)"/>' +
      '<rect x="20" y="40" width="360" height="20" fill="#2e6fb5"/><rect x="20" y="60" width="360" height="8" fill="#f4f4f2"/><path d="M30 68v112M370 68v112" stroke="#9aa1a8" stroke-width="8"/>' +
      '<rect class="kgt-glow" x="146" y="14" width="108" height="24" rx="4" fill="' + CANDY + '"/><text x="200" y="31" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="3">HAND WASH</text>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="kgt-drip kgt-d' + (i % 3 + 1) + '" cx="' + (60 + i * 30) + '" cy="72" r="3" fill="#cfe9ff"/>').join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#5a5e66"/><path d="M0 182h400" stroke="#7a7e86" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<ellipse cx="' + (60 + i * 60) + '" cy="226" rx="26" ry="5" fill="#9fd4ef" opacity=".35"/>').join("") +
      lowrider(84, 214, CANDY, "kgt-hop") +
      /* suds */
      Array.from({ length: 9 }, (_, i) => '<circle cx="' + (110 + i * 22) + '" cy="' + (176 - (i % 3) * 4) + '" r="' + (5 + i % 3) + '" fill="#fff" opacity=".85"/>').join("") +
      /* bucket + towel */
      '<path d="M330 210l4 30h22l4 -30z" fill="#e8e4dc" stroke="#888"/><rect x="304" y="200" width="20" height="40" rx="2" fill="' + GOLD + '"/>',
      sky("kgt3", "#7fc4ea", "#e8f2f8"));
  }

  /* 4. "I took Imperial to the beach": Sunday dippin' down Imperial Hwy to the coast, palms going by, a gold lowrider rolling three-wheel, the ocean and the pier at the end of the road */
  function kgtbeach() {
    return svg(
      '<rect width="400" height="260" fill="url(#kgt4)"/>' +
      '<circle cx="320" cy="64" r="26" fill="#ffd27a"/>' +
      '<g class="kgt-wave"><rect x="-20" y="104" width="440" height="40" fill="#2f86b8"/><path d="M-20 112q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6ff" stroke-width="2" fill="none"/></g>' +
      /* pier */
      '<rect x="230" y="96" width="170" height="6" fill="#7a5a3a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (236 + i * 20) + ' 102v24" stroke="#5a4028" stroke-width="3"/>').join("") +
      '<rect x="0" y="140" width="400" height="16" fill="#f0dca8"/>' +
      palm(30, 168, 110, "#1e2a22") + palm(100, 168, 80, "#1e2a22") + palm(312, 168, 96, "#1e2a22") + palm(378, 168, 118, "#1e2a22") +
      '<rect x="0" y="156" width="400" height="104" fill="#3e3e44"/><path d="M0 214h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="22 14"/>' +
      '<g class="kgt-roll">' + lowrider(0, 246, "#d4a017", "") + '</g>' +
      '<rect x="18" y="168" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="70" y="184" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">IMPERIAL HWY</text>',
      sky("kgt4", "#f7a35c", "#fde8c4"));
  }

  /* 5. W Myrrh St and S Willowbrook Ave in Compton: green street signs, KING TEE tagged big on the wall, the little white 1869 Heritage House behind, palms */
  function kgtcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kgt5)"/>' +
      /* Heritage House: small white two-story farmhouse with gable roof and porch */
      '<rect x="150" y="56" width="96" height="78" fill="#f4f1e8" stroke="#bdb6a6" stroke-width="1.5"/><path d="M142 60l56 -34l56 34z" fill="#6e6a62"/>' +
      [164, 214].map(x => '<rect x="' + x + '" y="70" width="18" height="24" fill="#3a4a5a"/><path d="M' + x + ' 82h18" stroke="#f4f1e8" stroke-width="1.5"/>').join("") +
      '<rect x="140" y="100" width="116" height="6" fill="#e8e4d8"/>' + [146, 176, 220, 250].map(x => '<path d="M' + x + ' 106v28" stroke="#e8e4d8" stroke-width="3"/>').join("") +
      '<rect x="190" y="108" width="16" height="26" fill="#6a4a30"/>' +
      palm(60, 134, 104, "#2a3424") + palm(330, 134, 92, "#2a3424") +
      /* wall */
      '<rect x="0" y="132" width="400" height="92" fill="#cfc4ae"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#c0b49c" stroke-width="1"/>').join("") +
      tag("KING TEE", 18, 194, 50, GOLD, -6) + tag("IV LIFE", 220, 212, 22, TEAL, -3) + tag("AT YOUR OWN RISK", 22, 216, 14, CANDY, -2) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="352" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 120, "W Myrrh St") + sign(254, 124, 136, "S Willowbrook Ave") +
      '<g class="kgt-sp"><circle cx="196" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="kgt-sp kgt-sp2"><circle cx="202" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("kgt5", "#5aa0d8", "#f2dcb0"));
  }

  window.SCENES = { kgtstation: kgtstation, kgtcrib: kgtcrib, kgtwash: kgtwash, kgtbeach: kgtbeach, kgtcorner: kgtcorner };
})();
