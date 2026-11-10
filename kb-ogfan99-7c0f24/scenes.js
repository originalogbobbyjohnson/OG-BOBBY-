/* kb scenes (Regions tab: South Florida; born in St. Petersburg, FL, moved back at 8 with his mom to the south side of St. Pete; St. Petersburg Collegiate High School; formed HGA (His Glory Alone) at Trinity College of Florida; Reach Records). CSS classes prefixed kbh- (the page's own anim-train is kept).
   1 PSTA's SunRunner pulling into Grand Central Station on Central Ave, the transfer hub at the door to the south side: palms, the canopy, the black sign with the SR bullet.
   2 St. Petersburg Collegiate High School on the SPC Gibbs campus, the school that set him on the college path: modern three-story block, palms, a grad cap flying.
   3 Trinity College of Florida, where he met the rappers who became HGA: low campus chapel with a white cross, live oaks hung with Spanish moss, a mic stand under the HGA banner.
   4 The Sunshine Skyway over the mouth of Tampa Bay at sunset: the yellow cable fans off the two tall pylons, cars crossing, a pelican gliding.
   5 22nd St S and 7th Ave S on the Deuces, by the old Manhattan Casino: green signs, KB tagged with HGA and SOUTHSIDE, Tropicana Field's tilted white dome lit up behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kbhglow{0%,100%{opacity:.45}50%{opacity:1}}.kbh-glow{animation:kbhglow 2.6s ease-in-out infinite}.kbh-g2{animation-delay:-1.3s}' +
    '@keyframes kbhsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.kbh-sw{transform-box:fill-box;transform-origin:50% 100%;animation:kbhsway 3.4s ease-in-out infinite}.kbh-sw2{animation-delay:-1.7s}' +
    '@keyframes kbhmoss{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.kbh-moss{transform-box:fill-box;transform-origin:50% 0%;animation:kbhmoss 3s ease-in-out infinite}.kbh-m2{animation-delay:-1.5s}' +
    '@keyframes kbhcap{0%{transform:translate(0,0) rotate(0deg)}50%{transform:translate(30px,-50px) rotate(180deg)}100%{transform:translate(60px,0) rotate(360deg)}}.kbh-cap{transform-box:fill-box;transform-origin:50% 50%;animation:kbhcap 3.4s ease-in-out infinite}' +
    '@keyframes kbhcarR{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.kbh-cr{animation:kbhcarR 7s linear infinite}.kbh-cr2{animation-delay:-3.5s}' +
    '@keyframes kbhcarL{0%{transform:translateX(460px)}100%{transform:translateX(-60px)}}.kbh-cl{animation:kbhcarL 8s linear infinite;animation-delay:-2s}' +
    '@keyframes kbhbird{0%{transform:translate(-50px,0)}100%{transform:translate(470px,-20px)}}.kbh-bird{animation:kbhbird 13s linear infinite}' +
    '@keyframes kbhrip{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.kbh-rip{animation:kbhrip 3s linear infinite}' +
    '@keyframes kbhsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.kbh-sp{animation:kbhsp 1.4s ease-out infinite}.kbh-sp2{animation-delay:.5s}' +
    '@keyframes kbhdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(26px);opacity:0}}.kbh-dr{animation:kbhdrip 1.9s ease-in infinite}' +
    '@keyframes kbhflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(7deg)}}.kbh-flag{transform-box:fill-box;transform-origin:0% 50%;animation:kbhflag 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const SUN = "#ffd166", PINK = "#ef476f", TEAL = "#06d6a0", SR = "#f7a81b";
  const palm = (x, y, h, d) => '<g class="kbh-sw' + (d ? " kbh-sw2" : "") + '"><path d="M' + x + ' ' + y + 'q-4 -' + (h / 2) + ' 4 -' + h + '" stroke="#7a5a3a" stroke-width="5" fill="none"/>' +
    [[-30, 8], [-18, -6], [0, -12], [18, -6], [30, 8]].map(([dx, dy]) => '<path d="M' + (x + 4) + ' ' + (y - h) + 'q' + (dx / 2) + ' ' + (dy - 10) + ' ' + dx + ' ' + (dy + 4) + '" stroke="#2e7a3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';

  /* 0. SunRunner at Grand Central Station */
  function kbhstop() {
    const bus = '<g class="anim-train"><rect x="30" y="128" width="270" height="76" rx="12" fill="#f4f6f8" stroke="#8a949c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (76 + i * 42) + '" y="138" width="34" height="30" rx="3" fill="#1d2b36"/>').join("") +
      '<rect x="36" y="136" width="30" height="56" rx="4" fill="#1d2b36"/>' +
      '<path d="M30 176h270v10h-270z" fill="#1f5fa8"/><path d="M30 186h270v5h-270z" fill="' + SR + '"/>' +
      '<circle cx="250" cy="152" r="9" fill="' + SR + '" opacity=".9"/>' + [0, 45, 90, 135, 180, 225, 270, 315].map(a => '<path d="M250 152l' + (Math.cos(a * Math.PI / 180) * 15).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 15).toFixed(1) + '" stroke="' + SR + '" stroke-width="2"/>').join("") +
      '<circle cx="70" cy="208" r="13" fill="#222"/><circle cx="70" cy="208" r="6" fill="#aab"/><circle cx="258" cy="208" r="13" fill="#222"/><circle cx="258" cy="208" r="6" fill="#aab"/>' +
      '<circle cx="34" cy="196" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kbh0)"/>' +
      palm(30, 150, 80, 0) + palm(370, 150, 92, 1) + palm(330, 150, 70, 0) +
      '<rect x="0" y="146" width="400" height="20" fill="#cfc8b8"/><rect x="0" y="166" width="400" height="94" fill="#55555c"/><path d="M0 232h400" stroke="#fff" stroke-width="3" stroke-dasharray="18 12"/>' +
      '<path d="M210 70h180l-10 12h-160z" fill="#e8eef2" stroke="#7a8890" stroke-width="2"/><rect x="226" y="82" width="5" height="70" fill="#7a8890"/><rect x="374" y="82" width="5" height="70" fill="#7a8890"/>' +
      bus +
      '<rect x="20" y="18" width="208" height="36" rx="3" fill="#111"/><circle cx="42" cy="36" r="13" fill="' + SR + '"/><text x="42" y="41" text-anchor="middle" ' + font + ' font-size="11" fill="#111">SR</text>' +
      '<text x="62" y="41" ' + font + ' font-size="13" fill="#fff">Grand Central Station</text>',
      sky("kbh0", "#4aa8e0", "#ffe9b8"));
  }

  /* 1. St. Petersburg Collegiate High School */
  function kbhschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#kbh1)"/>' +
      '<circle cx="330" cy="50" r="24" fill="' + SUN + '" class="kbh-glow"/>' +
      '<rect x="70" y="80" width="260" height="110" fill="#e8e2d4" stroke="#9a9282" stroke-width="2"/><rect x="70" y="80" width="260" height="10" fill="#1f5fa8"/>' +
      [0, 1, 2].map(r => Array.from({ length: 8 }, (_, c) => '<rect x="' + (84 + c * 30) + '" y="' + (98 + r * 28) + '" width="22" height="18" fill="#3a5a7a" stroke="#fff" stroke-width="1"/>').join("")).join("") +
      '<rect x="176" y="150" width="48" height="40" fill="#24323e"/><rect x="164" y="140" width="72" height="8" fill="#1f5fa8"/>' +
      palm(40, 190, 90, 0) + palm(362, 190, 100, 1) +
      '<rect x="0" y="190" width="400" height="70" fill="#6aa04a"/><rect x="176" y="190" width="48" height="70" fill="#d8d0bc"/>' +
      '<rect x="118" y="196" width="4" height="50" fill="#555"/><g class="kbh-flag"><rect x="122" y="198" width="26" height="16" fill="' + PINK + '"/></g>' +
      '<g class="kbh-cap"><path d="M260 214l20 -8l20 8l-20 8z" fill="#111"/><rect x="272" y="216" width="16" height="6" fill="#111"/><path d="M298 214v10" stroke="' + SUN + '" stroke-width="2"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ST. PETE COLLEGIATE HIGH</text>',
      sky("kbh1", "#5ab4ea", "#e6f4fb"));
  }

  /* 2. Trinity College of Florida: where HGA formed */
  function kbhtrinity() {
    const oak = (x, s) => '<rect x="' + (x - 5 * s) + '" y="' + (190 - 60 * s) + '" width="' + (10 * s) + '" height="' + (60 * s) + '" fill="#5a4030"/>' +
      '<ellipse cx="' + x + '" cy="' + (190 - 70 * s) + '" rx="' + (50 * s) + '" ry="' + (26 * s) + '" fill="#2f5a2e"/>' +
      [-30, -10, 12, 32].map((dx, i) => '<path class="kbh-moss' + (i % 2 ? " kbh-m2" : "") + '" d="M' + (x + dx * s) + ' ' + (190 - 56 * s) + 'q-3 12 0 24q3 -12 0 -24" stroke="#a8b8a0" stroke-width="3" fill="none"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kbh2)"/>' +
      '<rect x="130" y="100" width="150" height="90" fill="#f2ede2" stroke="#a89e8a" stroke-width="2"/><path d="M122 102l83 -40l83 40z" fill="#8a5a3a"/>' +
      '<path d="M205 20v34M193 32h24" stroke="#fff" stroke-width="5"/>' +
      '<rect x="190" y="140" width="30" height="50" fill="#5a3a26"/>' + [148, 244].map(x => '<rect x="' + x + '" y="120" width="20" height="34" rx="10" fill="#9ac8e8" class="kbh-glow"/>').join("") +
      oak(56, 1.1) + oak(352, 1) +
      '<rect x="0" y="190" width="400" height="70" fill="#5e9a48"/><rect x="190" y="190" width="30" height="70" fill="#d8d0bc"/>' +
      '<rect x="270" y="150" width="4" height="70" fill="#444"/><rect x="330" y="150" width="4" height="70" fill="#444"/><rect x="262" y="140" width="80" height="26" rx="2" fill="' + PINK + '"/>' +
      '<text x="302" y="159" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="#fff" letter-spacing="3">HGA</text>' +
      '<path d="M110 236v-40" stroke="#333" stroke-width="3"/><path d="M98 236h24" stroke="#333" stroke-width="3"/><rect x="104" y="184" width="12" height="18" rx="6" fill="#444" stroke="#aaa" stroke-width="1.5"/>',
      sky("kbh2", "#7ab8e0", "#f2efd6"));
  }

  /* 3. The Sunshine Skyway at sunset */
  function kbhskyway() {
    const fan = (px) => Array.from({ length: 10 }, (_, i) => {
      const off = 16 + i * 13;
      return '<path d="M' + px + ' ' + (40 + i * 5) + 'L' + (px - off) + ' 160M' + px + ' ' + (40 + i * 5) + 'L' + (px + off) + ' 160" stroke="#ffcc1a" stroke-width="1.6"/>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kbh3)"/>' +
      '<circle cx="200" cy="150" r="36" fill="#ffb347" class="kbh-glow"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#1e6a7a"/>' +
      '<g class="kbh-rip">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (190 + (i % 3) * 18) + 'q10 -4 20 0" stroke="#7ad8d8" stroke-width="2" fill="none" opacity=".6"/>').join("") + '</g>' +
      fan(120) + fan(280) +
      '<path d="M0 166q200 -30 400 0v8q-200 -30 -400 0z" fill="#e8e4dc" stroke="#8a8478" stroke-width="1"/>' +
      [120, 280].map(x => '<rect x="' + (x - 4) + '" y="34" width="8" height="150" fill="#f0eadc" stroke="#8a8478" stroke-width="1"/>').join("") +
      '<g class="kbh-cr"><rect x="0" y="146" width="18" height="7" rx="3" fill="' + PINK + '"/></g><g class="kbh-cr kbh-cr2"><rect x="0" y="146" width="18" height="7" rx="3" fill="#fff"/></g>' +
      '<g class="kbh-cl"><rect x="0" y="150" width="18" height="7" rx="3" fill="' + TEAL + '"/></g>' +
      '<g class="kbh-bird"><path d="M0 90q8 -8 16 0q8 -8 16 0" stroke="#3a2a2a" stroke-width="2.5" fill="none"/><path d="M14 90l6 4" stroke="#3a2a2a" stroke-width="2"/></g>',
      sky("kbh3", "#5a3a7a", "#ff9a5a"));
  }

  /* 4. 22nd St S and 7th Ave S, Tropicana Field's tilted dome behind */
  function kbhcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kbh4)"/>' +
      '<path d="M90 130q110 -80 230 -40l6 40z" fill="#eef0f2" stroke="#9aa0a8" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (110 + i * 30) + ' ' + (126 - i * 4) + 'q10 -20 30 -38" stroke="#c8ccd2" stroke-width="1.5" fill="none"/>').join("") +
      [120, 180, 240, 300].map((x, i) => '<circle class="kbh-glow' + (i % 2 ? " kbh-g2" : "") + '" cx="' + x + '" cy="' + (124 - i * 8) + '" r="3" fill="' + SUN + '"/>').join("") +
      palm(30, 140, 70, 0) + palm(372, 140, 80, 1) +
      '<rect x="0" y="136" width="400" height="90" fill="#e8c86a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#d6b456" stroke-width="1"/>').join("") +
      tag("KB", 30, 204, 64, PINK, -5) + tag("HGA", 140, 190, 36, TEAL, -6) + tag("SOUTHSIDE", 120, 220, 22, "#fff", -3) + tag("K2", 258, 196, 28, SUN, -4) +
      '<g class="kbh-dr"><path d="M60 208q-4 6 0 10q4 -4 0 -10z" fill="' + PINK + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="370" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(296, 98, 100, "22nd St S") + sign(296, 124, 100, "7th Ave S") +
      '<g class="kbh-sp"><circle cx="230" cy="166" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="kbh-sp kbh-sp2"><circle cx="236" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("kbh4", "#162a4a", "#e07a5a"));
  }

  window.SCENES = { kbhstop: kbhstop, kbhschool: kbhschool, kbhtrinity: kbhtrinity, kbhskyway: kbhskyway, kbhcorner: kbhcorner };
})();
