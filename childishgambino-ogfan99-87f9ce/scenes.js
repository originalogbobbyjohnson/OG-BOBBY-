/* childishgambino scenes (Regions tab: Atlanta; Stone Mountain, DeKalb County). CSS classes and ids prefixed cg- (the page's own anim-train is kept).
   1 MARTA Route 118 (Rockbridge Road) pulling up to the S Stone Mountain Lithonia Rd / Rockbridge Rd stop by Wade Walker Park: white MARTA bus with blue + orange bands, the stop flag, pines.
   2 Edwards Air Force Base, California (where he was born): Mojave desert, dry lakebed runway, a hangar, a jet climbing out, Joshua trees.
   3 30 Rockefeller Plaza, Manhattan (he wrote for 30 Rock there): the pale limestone Art Deco tower with its setbacks, the rink and flags below.
   4 Kauai, Hawaii (the Kauai EP / STN MTN-Kauai): green Na Pali sea cliffs, blue water, waves rolling in, a tiny boat.
   5 Rockbridge Rd and S Stone Mountain Lithonia Rd in Stone Mountain: green signs, CHILDISH GAMBINO tagged with STN MTN and HOL' UP, Wade Walker Park's lake, pier and pines behind, fireflies.
   400 x 260 SVGs. No logos, no faces. Every 9 is drawn by hand with a straight stem (none are needed here). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cgbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.cg-bus{animation:cgbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes cgglow{0%,100%{opacity:.35}50%{opacity:1}}.cg-glow{animation:cgglow 2.2s ease-in-out infinite}.cg-g2{animation-delay:-1.1s}.cg-g3{animation-delay:-.6s}' +
    '@keyframes cgjet{from{transform:translate(-90px,70px)}to{transform:translate(470px,-90px)}}.cg-jet{animation:cgjet 8s linear infinite}' +
    '@keyframes cgheat{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}.cg-heat{animation:cgheat 1.6s ease-in-out infinite}' +
    '@keyframes cgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.cg-flag{transform-box:fill-box;transform-origin:0% 50%;animation:cgflag 1.4s ease-in-out infinite}.cg-f2{animation-delay:-.5s}' +
    '@keyframes cgskate{from{transform:translateX(-20px)}to{transform:translateX(20px)}}.cg-skate{animation:cgskate 3s ease-in-out infinite alternate}.cg-sk2{animation-delay:-1.5s}' +
    '@keyframes cgwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.cg-wave{animation:cgwave 3s linear infinite}.cg-wv2{animation-duration:4.4s}' +
    '@keyframes cgboat{0%,100%{transform:translate(0,0)}50%{transform:translate(14px,-2px)}}.cg-boat{animation:cgboat 5s ease-in-out infinite}' +
    '@keyframes cgfly{0%{transform:translate(0,0)}25%{transform:translate(6px,-5px)}50%{transform:translate(-3px,-9px)}75%{transform:translate(-7px,-3px)}100%{transform:translate(0,0)}}.cg-fly{animation:cgfly 4s ease-in-out infinite}.cg-fy2{animation-delay:-1.3s}.cg-fy3{animation-delay:-2.6s}' +
    '@keyframes cgsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cg-sp{animation:cgsp 1.4s ease-out infinite}.cg-sp2{animation-delay:.45s}' +
    '@keyframes cgcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.cg-car{animation:cgcar 6.5s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const YEL = "#ffb703", ORG = "#fb8500", SKY = "#8ecae6", BUS = "#1f4e79", MORANGE = "#f7941d";
  const pine = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-8" width="4" height="10" fill="#5a3e2a"/><path d="M0 -60l14 26h-6l12 22h-40l12 -22h-6z" fill="' + (c || "#2f5a34") + '"/></g>';

  /* 1. MARTA Route 118 at Rockbridge Rd by Wade Walker Park */
  function cgbus() {
    const bus = '<g class="cg-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + MORANGE + '"/>' +
      '<rect x="44" y="124" width="122" height="11" rx="2" fill="#111"/><text x="105" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">118 ROCKBRIDGE RD</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cg1)"/>' +
      '<circle cx="330" cy="42" r="18" fill="#ffe9a8" opacity=".85"/>' +
      pine(16, 128, 1.1) + pine(52, 124, .85) + pine(92, 130, 1.2) + pine(140, 126, .9) + pine(186, 130, 1.15) + pine(232, 126, .8) + pine(270, 130, 1.1) + pine(318, 128, .95) + pine(372, 130, 1.2) +
      /* Wade Walker Park entrance sign, plain */
      '<rect x="196" y="90" width="70" height="26" rx="3" fill="#7a5a3a"/><text x="231" y="101" text-anchor="middle" ' + font + ' font-size="7" fill="#f4ecd8">WADE WALKER</text><text x="231" y="111" text-anchor="middle" ' + font + ' font-size="7" fill="#f4ecd8">PARK</text>' +
      '<rect x="0" y="140" width="400" height="22" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 238h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="22 14"/>' +
      bus +
      /* the stop flag */
      '<rect x="330" y="96" width="4" height="70" fill="#5b6168"/><rect x="314" y="72" width="36" height="34" rx="3" fill="#fff" stroke="#9aa1a8" stroke-width="1.5"/>' +
      '<rect x="314" y="72" width="36" height="9" rx="2" fill="' + BUS + '"/><text x="332" y="79.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">MARTA</text>' +
      '<text x="332" y="94" text-anchor="middle" ' + font + ' font-size="11" fill="#111">118</text><text x="332" y="102.5" text-anchor="middle" ' + font + ' font-size="5" fill="#333">BUS STOP</text>' +
      /* black stop name plate */
      '<rect x="16" y="20" width="236" height="46" rx="4" fill="#111"/><text x="28" y="38" ' + font + ' font-size="12" fill="#fff">S Stone Mountain Lithonia Rd</text><text x="28" y="56" ' + font + ' font-size="12" fill="#fff">/ Rockbridge Rd</text>' +
      '<circle cx="226" cy="50" r="11" fill="' + MORANGE + '"/><text x="226" y="54" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">118</text>',
      sky("cg1", "#6fb2e3", "#f6e2b4"));
  }

  /* 2. Edwards Air Force Base, Mojave desert */
  function cgbase() {
    const jt = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#5d6a3a" stroke="#4a3a26" stroke-width="3" stroke-linecap="round"><path d="M0 0v-28M0 -20l-10 -10M0 -24l9 -8M-10 -30v-6M9 -32v-6" fill="none"/>' +
      '<circle cx="-10" cy="-37" r="4" stroke="none"/><circle cx="9" cy="-39" r="4" stroke="none"/><circle cx="0" cy="-31" r="4" stroke="none"/></g>';
    const jet = '<g class="cg-jet"><g transform="translate(40 120) rotate(-16)"><path d="M0 6h62l10 -3l-10 -3h-62z" fill="#cfd6de"/><path d="M26 6l-14 16h8l20 -16zM26 0l-14 -16h8l20 16z" fill="#9aa4ae"/>' +
      '<path d="M2 6l-6 -12h6l8 12z" fill="#9aa4ae"/><rect x="-14" y="2" width="14" height="4" rx="2" fill="' + ORG + '" opacity=".8"/><circle class="cg-glow" cx="60" cy="3" r="1.8" fill="#ff4a4a"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cg2)"/>' +
      '<circle cx="80" cy="54" r="22" fill="#fff4c8"/>' +
      '<path d="M0 132l50 -26l46 18l58 -34l52 28l44 -14l60 22l40 -18l50 24v20h-400z" fill="#b98a62"/>' +
      '<path d="M0 140l70 -12l80 10l90 -14l80 12l80 -6v20h-400z" fill="#a37652"/>' +
      '<rect x="0" y="146" width="400" height="114" fill="#e4cf9e"/>' +
      /* dry lakebed + runway */
      '<path d="M0 188l400 -10v40l-400 14z" fill="#efe5cc"/><path d="M0 200l400 -10v12l-400 12z" fill="#6c6c70"/><path d="M10 211l380 -14" stroke="#fff" stroke-width="2" stroke-dasharray="14 12"/>' +
      /* hangar */
      '<path d="M230 166q46 -40 92 0z" fill="#d7dbe0"/><rect x="230" y="164" width="92" height="20" fill="#c5cad0"/><rect x="250" y="168" width="52" height="16" fill="#3a4048"/>' +
      '<rect x="336" y="140" width="4" height="44" fill="#7a7a7a"/><g class="cg-flag"><path d="M340 140l18 4l-18 4z" fill="' + ORG + '"/></g>' +
      /* tower */
      '<rect x="190" y="138" width="10" height="46" fill="#cfc6b4"/><rect x="184" y="128" width="22" height="12" fill="#3d5566"/><rect x="182" y="126" width="26" height="3" fill="#8a8a8a"/>' +
      jt(30, 196, 1.2) + jt(120, 186, .9) + jt(360, 240, 1.4) + jt(70, 246, 1.5) +
      '<g class="cg-heat"><path d="M10 176q20 -4 40 0t40 0" stroke="#fff" stroke-width="1" fill="none" opacity=".35"/><path d="M200 230q20 -4 40 0t40 0" stroke="#fff" stroke-width="1" fill="none" opacity=".3"/></g>' +
      jet +
      '<rect x="10" y="12" width="168" height="22" rx="3" fill="#1a1a1e" opacity=".85"/><text x="94" y="27" text-anchor="middle" ' + font + ' font-size="10" fill="#f4ecd8">EDWARDS AFB, CALIFORNIA</text>',
      sky("cg2", "#4f9fd8", "#f3d7a6"));
  }

  /* 3. 30 Rockefeller Plaza */
  function cgrock() {
    const lime = "#e6dcc4", lineC = "#c7baa0";
    let tower = '<path d="M150 260V96h12V70h12V44h52v26h12v26h12v164z" fill="' + lime + '"/>';
    for (let x = 158; x < 246; x += 7) tower += '<path d="M' + x + ' ' + (x < 174 || x > 226 ? (x < 162 || x > 238 ? 98 : 72) : 46) + 'V214" stroke="' + lineC + '" stroke-width="1.4"/>';
    tower += '<rect x="176" y="36" width="48" height="10" fill="#d6cab0"/>';
    const flags = [YEL, "#d64545", SKY, "#3a9d5d", ORG, "#7d5ba6"].map((c, i) => '<rect x="' + (60 + i * 52) + '" y="196" width="2.5" height="40" fill="#bbb"/><g class="cg-flag ' + (i % 2 ? "cg-f2" : "") + '"><rect x="' + (62.5 + i * 52) + '" y="197" width="16" height="10" fill="' + c + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cg3)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="' + (i % 3 ? "" : "cg-glow") + '" cx="' + ((i * 61) % 400) + '" cy="' + (8 + (i * 29) % 50) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      /* neighbour buildings */
      '<rect x="40" y="120" width="70" height="140" fill="#3a3f52"/><rect x="290" y="110" width="80" height="150" fill="#363b4e"/><rect x="0" y="150" width="44" height="110" fill="#2e3344"/><rect x="366" y="140" width="34" height="120" fill="#2e3344"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect class="' + (i % 4 ? "" : "cg-glow cg-g2") + '" x="' + (48 + (i % 4) * 15) + '" y="' + (130 + Math.floor(i / 4) * 16) + '" width="8" height="8" fill="#ffe7a1" opacity=".7"/>').join("") +
      Array.from({ length: 16 }, (_, i) => '<rect class="' + (i % 5 ? "" : "cg-glow cg-g3") + '" x="' + (298 + (i % 4) * 18) + '" y="' + (122 + Math.floor(i / 4) * 16) + '" width="9" height="8" fill="#ffe7a1" opacity=".7"/>').join("") +
      tower +
      Array.from({ length: 8 }, (_, i) => '<rect class="' + (i % 2 ? "cg-glow" : "cg-glow cg-g2") + '" x="' + (170 + (i % 4) * 16) + '" y="' + (120 + Math.floor(i / 4) * 34) + '" width="6" height="10" fill="#ffe7a1" opacity=".8"/>').join("") +
      /* the gold figure plaza + rink */
      '<rect x="0" y="214" width="400" height="46" fill="#6a6a70"/><ellipse cx="200" cy="240" rx="120" ry="14" fill="#cfe7f5"/><ellipse cx="200" cy="240" rx="120" ry="14" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="188" y="214" width="24" height="12" fill="#b88a2a"/><path d="M186 214q14 -16 28 0" fill="#d9a93a"/>' +
      '<g class="cg-skate"><circle cx="150" cy="232" r="2.5" fill="#222"/><path d="M150 234v8" stroke="#222" stroke-width="2"/></g><g class="cg-skate cg-sk2"><circle cx="250" cy="236" r="2.5" fill="#222"/><path d="M250 238v8" stroke="#222" stroke-width="2"/></g>' +
      flags +
      '<rect x="128" y="12" width="144" height="20" rx="3" fill="#111" opacity=".85"/><text x="200" y="26" text-anchor="middle" ' + font + ' font-size="10" fill="#f4ecd8">30 ROCKEFELLER PLAZA</text>',
      sky("cg3", "#0e1430", "#47507a"));
  }

  /* 4. Kauai, the Na Pali coast */
  function cgkauai() {
    return svg(
      '<rect width="400" height="260" fill="url(#cg4)"/>' +
      '<circle cx="318" cy="60" r="24" fill="#fff3c4" opacity=".9"/>' +
      /* ridged sea cliffs */
      '<path d="M0 170L0 60l24 -20l18 40l20 -50l22 48l20 -56l24 60l18 -34l20 52l16 -20l22 50l30 40z" fill="#2f7a3e"/>' +
      '<path d="M34 170l10 -80M70 170l12 -96M110 170l8 -100M150 170l8 -70M186 170l6 -52" stroke="#1f5a2c" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M0 170l0 -40l40 -10l40 20l50 -14l60 18l34 26z" fill="#3f9450"/>' +
      '<path d="M224 170q26 -24 56 -8q20 -26 46 -6q24 -16 74 -4v18z" fill="#3a8a4a"/>' +
      /* sea */
      '<rect x="0" y="166" width="400" height="94" fill="#1f7fb6"/><rect x="0" y="166" width="400" height="12" fill="#4ab0d8"/>' +
      '<g class="cg-wave"><path d="M0 196q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e8f6fb" stroke-width="2.5" fill="none" opacity=".75"/></g>' +
      '<g class="cg-wave cg-wv2"><path d="M0 224q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e8f6fb" stroke-width="2.5" fill="none" opacity=".55"/></g>' +
      '<path d="M0 176q30 -6 60 0t60 0" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>' +
      '<g class="cg-boat"><path d="M286 206h34l-6 8h-22z" fill="#f4f4f2"/><path d="M302 206v-22l12 20z" fill="' + YEL + '"/></g>' +
      /* birds */
      '<path d="M220 60q5 -5 10 0q5 -5 10 0M250 80q4 -4 8 0q4 -4 8 0" stroke="#1d2a3a" stroke-width="2" fill="none"/>' +
      '<rect x="12" y="12" width="156" height="20" rx="3" fill="#0e2a3a" opacity=".85"/><text x="90" y="26" text-anchor="middle" ' + font + ' font-size="10" fill="#f4ecd8">KAUAI, NA PALI COAST</text>',
      sky("cg4", "#6cc1ec", "#fde7b8"));
  }

  /* 5. Rockbridge Rd and S Stone Mountain Lithonia Rd, Stone Mountain */
  function cgcorner() {
    const lake = '<rect x="0" y="108" width="400" height="28" fill="#2c4f66"/><path d="M0 116h400M0 126h400" stroke="#5f8aa3" stroke-width="1" opacity=".6"/>' +
      '<rect x="40" y="114" width="80" height="4" fill="#8a6a46"/>' + [46, 64, 82, 100, 116].map(x => '<rect x="' + x + '" y="118" width="2" height="10" fill="#6a4e32"/>').join("");
    const flies = [[60, 70], [120, 52], [180, 80], [250, 60], [310, 86], [360, 50], [220, 100], [90, 96]].map((p, i) => '<g class="cg-fly ' + ["", "cg-fy2", "cg-fy3"][i % 3] + '"><circle class="cg-glow ' + (i % 2 ? "cg-g2" : "") + '" cx="' + p[0] + '" cy="' + p[1] + '" r="2.2" fill="' + YEL + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cg5)"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + ((i * 97 + 30) % 400) + '" cy="' + (8 + (i * 37) % 30) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      pine(20, 112, 1.2, "#1f3d28") + pine(70, 110, .9, "#1f3d28") + pine(130, 112, 1.3, "#1f3d28") + pine(190, 110, 1, "#1f3d28") + pine(250, 112, 1.25, "#1f3d28") + pine(310, 110, .95, "#1f3d28") + pine(370, 112, 1.2, "#1f3d28") +
      lake + flies +
      '<rect x="0" y="136" width="400" height="88" fill="#e9e3d6"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (136 + r * 10) + 'h400" stroke="#d6cfbf" stroke-width="1"/>').join("") +
      tag("STN MTN", 20, 166, 24, ORG, -4) + tag("CHILDISH", 14, 196, 30, YEL, -5) + tag("GAMBINO", 60, 220, 30, YEL, -5) + tag("HOL' UP", 196, 176, 20, SKY, -6) + tag("BINO", 214, 214, 16, "#222", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="cg-car"><rect x="0" y="232" width="70" height="16" rx="6" fill="#3a6ea5"/><rect x="12" y="226" width="40" height="10" rx="4" fill="#2a4f78"/><circle cx="14" cy="249" r="5" fill="#111"/><circle cx="56" cy="249" r="5" fill="#111"/><circle cx="68" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="368" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(286, 94, 110, "Rockbridge Rd") + sign(244, 120, 152, "S Stone Mtn Lithonia Rd", 11) +
      '<g class="cg-sp"><circle cx="200" cy="182" r="3" fill="' + YEL + '" opacity=".7"/></g><g class="cg-sp cg-sp2"><circle cx="206" cy="176" r="2" fill="' + YEL + '" opacity=".6"/></g>',
      sky("cg5", "#0d1a2e", "#5a4a6e"));
  }

  window.SCENES = { cgbus: cgbus, cgbase: cgbase, cgrock: cgrock, cgkauai: cgkauai, cgcorner: cgcorner };
})();
