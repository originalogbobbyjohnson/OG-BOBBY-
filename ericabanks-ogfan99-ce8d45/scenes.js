/* ericabanks scenes (Regions tab: Houston + Texas; DeSoto, south of Dallas). CSS classes and ids prefixed ek- (the page's own anim-train is kept).
   1 UNT Dallas, the end of the DART Blue Line and the closest rail stop to DeSoto: at-grade platform under a canopy, the light-rail car pulling in.
   2 DeSoto High School (class of 2017, drill team and theater): the green-and-gold front with the bronze eagle statue, wings spreading.
   3 The parking garage freestyle that first went viral: concrete levels at night, a phone on a stand recording, the red REC light blinking.
   4 The glow-up mirror: ring light, outfit check, sparkles popping (the challenge that took her worldwide).
   5 N Hampton Rd and Pleasant Run Rd in DeSoto: green signs, ERICA BANKS tagged on the wall, the Dallas skyline far off to the north. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ekflap{0%,100%{transform:rotate(0)}50%{transform:rotate(-10deg)}}.ek-wl{transform-box:view-box;transform-origin:200px 112px;animation:ekflap 2.6s ease-in-out infinite}' +
    '@keyframes ekflap2{0%,100%{transform:rotate(0)}50%{transform:rotate(10deg)}}.ek-wr{transform-box:view-box;transform-origin:200px 112px;animation:ekflap2 2.6s ease-in-out infinite}' +
    '@keyframes ekblink{0%,100%{opacity:.2}50%{opacity:1}}.ek-bl{animation:ekblink 1.2s ease-in-out infinite}.ek-bl2{animation-delay:-.6s}' +
    '@keyframes ekflick{0%,100%{opacity:1}44%{opacity:.8}48%{opacity:.3}52%{opacity:.95}}.ek-flk{animation:ekflick 2.6s infinite}' +
    '@keyframes ekbar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ek-bar{transform-box:fill-box;transform-origin:bottom;animation:ekbar .9s ease-in-out infinite}.ek-b2{animation-delay:-.3s}.ek-b3{animation-delay:-.6s}' +
    '@keyframes ekspark{0%,100%{transform:scale(.2);opacity:0}50%{transform:scale(1);opacity:1}}.ek-spk{transform-box:fill-box;transform-origin:center;animation:ekspark 1.6s ease-in-out infinite}.ek-s2{animation-delay:-.5s}.ek-s3{animation-delay:-1.1s}' +
    '@keyframes ekcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.ek-car{animation:ekcar 6s linear infinite}' +
    '@keyframes ekspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ek-sp{animation:ekspray 1.4s ease-out infinite}.ek-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 16) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 16) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "ek-bl" + (i % 2 ? " ek-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const GOLD = "#f2c94c", GREEN = "#1f9d55", PINK = "#ff5fa2", BLUE = "#0067b1";
  const spark = (x, y, r, cls, col) => '<path class="ek-spk ' + cls + '" d="M' + x + ' ' + (y - r) + 'L' + (x + r * 0.3) + ' ' + (y - r * 0.3) + 'L' + (x + r) + ' ' + y + 'L' + (x + r * 0.3) + ' ' + (y + r * 0.3) + 'L' + x + ' ' + (y + r) + 'L' + (x - r * 0.3) + ' ' + (y + r * 0.3) + 'L' + (x - r) + ' ' + y + 'L' + (x - r * 0.3) + ' ' + (y - r * 0.3) + 'z" fill="' + col + '"/>';

  /* 1. UNT Dallas, DART Blue Line terminus (at grade) */
  function ekstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="122" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 182V122q0 -14 14 -14h300q24 0 30 30v44z" fill="#eceae4" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="152" width="344" height="7" fill="' + BLUE + '"/><rect x="24" y="161" width="344" height="3" fill="#c9cdd2"/><rect x="24" y="166" width="344" height="4" fill="#5d646b"/>' +
      '<path d="M340 112q22 4 26 30h-26z" fill="#1c2630"/><circle cx="358" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="98" width="70" height="10" fill="#8a939b"/><path d="M210 98l25 -24l25 24" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="111" width="86" height="10" rx="2" fill="#111"/><text x="83" y="119" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">BLUE · ROWLETT</text>' +
      '<circle cx="96" cy="184" r="7" fill="#222"/><circle cx="296" cy="184" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#eks1)"/>' +
      '<path d="M0 130q70 -12 140 -4t130 -8t130 6v60H0z" fill="#a9c27e" opacity=".75"/>' +
      '<rect x="300" y="88" width="70" height="42" fill="#d9cdb3"/><rect x="306" y="94" width="58" height="8" fill="#7a9a5a"/>' + [0, 1, 2, 3].map(i => '<rect x="' + (310 + i * 14) + '" y="108" width="8" height="14" fill="#6a7a88"/>').join("") +
      '<path d="M0 72h400" stroke="#333" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="68" width="6" height="120" fill="#7a8088"/><path d="M' + (x - 22) + ' 72h44" stroke="#7a8088" stroke-width="3"/>').join("") +
      [70, 330].map(x => '<path d="M' + (x - 56) + ' 92l56 -18l56 18z" fill="#cfd3d8" stroke="#8a9096" stroke-width="1.5"/><rect x="' + (x - 3) + '" y="92" width="6" height="94" fill="#8a9096"/>').join("") +
      train +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#b8b2a6"/><path d="M0 226h400" stroke="#a29a8c" stroke-width="2"/>' +
      '<rect x="56" y="204" width="288" height="38" rx="3" fill="#111"/><text x="72" y="229" ' + font + ' font-size="18" fill="#fff">UNT Dallas</text>' + badge(262, 223, "BLUE", BLUE),
      sky("eks1", "#7ab8e8", "#f6e2bc"));
  }

  /* 2. DeSoto High School: the bronze eagle out front */
  function ekeagle() {
    const wing = side => { const s = side; let d = 'M200 112'; d += 'q' + (s * 40) + ' -40 ' + (s * 92) + ' -38q' + (-s * 12) + ' 10 ' + (-s * 10) + ' 16q' + (-s * 10) + ' 4 ' + (-s * 8) + ' 12q' + (-s * 12) + ' 2 ' + (-s * 12) + ' 10q' + (-s * 30) + ' 4 ' + (-s * 62) + ' 12z'; return '<path d="' + d + '" fill="#9a6a34" stroke="#5a3a18" stroke-width="2"/><path d="M' + (200 + s * 30) + ' 100l' + (s * 40) + ' -14M' + (200 + s * 30) + ' 108l' + (s * 34) + ' -4" stroke="#c48a4a" stroke-width="2"/>'; };
    return svg(
      '<rect width="400" height="260" fill="url(#eks2)"/>' +
      '<rect x="20" y="70" width="360" height="110" fill="#e4d6b8"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 56) + '" y="96" width="36" height="40" fill="#5b7a8c"/>').join("") +
      '<rect x="20" y="52" width="360" height="24" fill="' + GREEN + '"/><rect x="20" y="76" width="360" height="4" fill="' + GOLD + '"/><text x="200" y="70" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" letter-spacing="2">DESOTO EAGLES</text>' +
      '<rect x="40" y="144" width="40" height="36" fill="#0f5a32"/><rect x="320" y="144" width="40" height="36" fill="#0f5a32"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#7fb35a"/><path d="M0 196h400" stroke="#6a9a4a" stroke-width="2"/>' +
      '<rect x="164" y="170" width="72" height="20" fill="#b8b2a6"/><rect x="176" y="150" width="48" height="22" fill="#cfc8ba"/>' +
      '<g class="ek-wl">' + wing(-1) + '</g><g class="ek-wr">' + wing(1) + '</g>' +
      '<path d="M190 150q-4 -30 10 -42q14 12 10 42z" fill="#8a5a2a" stroke="#5a3a18" stroke-width="2"/><path d="M193 108q7 -14 14 0q-7 6 -14 0z" fill="#a8743c" stroke="#5a3a18" stroke-width="1.5"/><path d="M205 104l7 3l-7 3z" fill="#d8a84a"/>' +
      '<g class="ek-bl"><circle cx="60" cy="40" r="2" fill="' + GOLD + '"/><circle cx="340" cy="34" r="2" fill="' + GOLD + '"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="11" fill="#103a20">GREEN AND GOLD · CLASS OF 2017</text>',
      sky("eks2", "#5fa6e0", "#f4e6c4"));
  }

  /* 3. The parking garage freestyle */
  function ekgarage() {
    return svg(
      '<rect width="400" height="260" fill="#14161c"/>' +
      '<rect x="0" y="0" width="400" height="34" fill="#9a9690"/><rect x="0" y="34" width="400" height="6" fill="#6a6660"/>' +
      [30, 140, 260, 370].map(x => '<rect x="' + (x - 9) + '" y="40" width="18" height="160" fill="#8e8a84"/><rect x="' + (x - 9) + '" y="120" width="18" height="10" fill="' + GOLD + '"/>').join("") +
      [90, 210, 320].map(x => '<rect x="' + (x - 22) + '" y="44" width="44" height="6" fill="#fff6d0" class="ek-flk"/><path d="M' + (x - 30) + ' 50L' + (x - 60) + ' 200H' + (x + 60) + 'L' + (x + 30) + ' 50z" fill="#fff6d0" opacity=".06"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#55565c"/>' + [40, 120, 200, 280, 360].map(x => '<path d="M' + x + ' 206l-14 54" stroke="#e8e8e8" stroke-width="3"/>').join("") +
      '<text x="330" y="114" text-anchor="middle" ' + font + ' font-size="22" fill="#e8e8e8" opacity=".6">P3</text>' +
      '<rect x="194" y="150" width="4" height="44" fill="#222"/><path d="M196 194l-18 12M196 194l18 12M196 194v12" stroke="#222" stroke-width="3"/>' +
      '<rect x="176" y="96" width="40" height="64" rx="6" fill="#111" stroke="#666" stroke-width="2"/><rect x="180" y="102" width="32" height="50" rx="2" fill="#24304a"/>' +
      '<g transform="translate(184 140)">' + [0, 1, 2, 3, 4].map(i => '<rect class="ek-bar' + (i % 3 ? " ek-b" + (i % 3 + 1) : "") + '" x="' + (i * 5) + '" y="-24" width="3" height="24" fill="' + PINK + '"/>').join("") + '</g>' +
      '<circle class="ek-bl" cx="207" cy="108" r="3" fill="#ff3b3b"/><text x="186" y="111" ' + font + ' font-size="6" fill="#fff">REC</text>' +
      '<rect x="70" y="232" width="260" height="20" rx="4" fill="#14161c" opacity=".75"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#f4eee6">THE GARAGE FREESTYLE THAT WENT VIRAL</text>');
  }

  /* 4. The glow-up mirror */
  function ekmirror() {
    return svg(
      '<rect width="400" height="260" fill="url(#eks4)"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#e8d6dc"/><rect x="0" y="198" width="400" height="4" fill="#cbb0b8"/>' +
      '<rect x="112" y="30" width="176" height="170" rx="12" fill="#c9a24a"/><rect x="122" y="40" width="156" height="150" rx="8" fill="#cfe6f2"/><path d="M140 60l40 -14M136 90l70 -30" stroke="#fff" stroke-width="4" opacity=".6"/>' +
      '<path d="M176 190v-56q0 -14 24 -14t24 14v56z" fill="' + PINK + '" opacity=".75"/><circle cx="200" cy="104" r="14" fill="#7a4a34" opacity=".55"/>' +
      '<circle cx="60" cy="96" r="38" fill="none" stroke="#fff6e0" stroke-width="10" class="ek-flk"/><rect x="58" y="134" width="4" height="66" fill="#555"/><rect x="48" y="196" width="24" height="6" fill="#555"/>' +
      '<rect x="318" y="120" width="44" height="80" fill="#fff" stroke="#cbb0b8" stroke-width="2"/><rect x="322" y="110" width="36" height="12" fill="' + GOLD + '"/><rect x="326" y="132" width="28" height="22" fill="' + GREEN + '"/><rect x="326" y="160" width="28" height="22" fill="' + PINK + '"/>' +
      spark(150, 60, 10, "", "#fff") + spark(252, 80, 8, "ek-s2", GOLD) + spark(240, 160, 9, "ek-s3", "#fff") + spark(30, 30, 7, "ek-s2", GOLD) + spark(370, 60, 9, "", PINK) +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="11" fill="#5a2a3a">CHECK YOUR REFLECTION · GLOW UP</text>',
      sky("eks4", "#ffd8e6", "#fff2e0"));
  }

  /* 5. N Hampton Rd and Pleasant Run Rd, DeSoto */
  function ekcorner() {
    const sky5 = '<g fill="#2a2440">' + [[150, 30, 16], [168, 50, 14], [184, 22, 18], [204, 40, 12], [218, 56, 14], [234, 28, 16], [252, 44, 12]].map(([x, h, w]) => '<rect x="' + x + '" y="' + (126 - h) + '" width="' + w + '" height="' + h + '"/>').join("") + '</g>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect class="' + (i % 2 ? "ek-bl" : "ek-bl ek-bl2") + '" x="' + (154 + i * 13) + '" y="' + (104 + (i * 7) % 16) + '" width="1.6" height="1.6" fill="#ffe7a0"/>').join("") + '<path d="M218 70v-10M226 84v-8" stroke="' + GREEN + '" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#eks5)"/>' + stars(18) + sky5 +
      '<rect x="0" y="126" width="400" height="98" fill="#d8cdb6"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#c2b69c" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#9c8f74"/>' +
      tag("ERICA", 20, 180, 46, GOLD, -6) + tag("BANKS", 40, 216, 40, PINK, -5) + tag("FLOW QUEEN", 196, 210, 18, GREEN, -4) + tag("1501", 210, 180, 18, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="ek-car"><rect x="0" y="234" width="46" height="14" rx="5" fill="' + GOLD + '"/><circle cx="45" cy="240" r="2" fill="#fff6c2"/><circle cx="10" cy="249" r="4" fill="#111"/><circle cx="36" cy="249" r="4" fill="#111"/></g>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 146, "N Hampton Rd") + sign(232, 124, 164, "Pleasant Run Rd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ek-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="ek-sp"><circle cx="196" cy="166" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="ek-sp ek-sp2"><circle cx="202" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("eks5", "#16123a", "#d9765a"));
  }

  window.SCENES = { ekstation: ekstation, ekeagle: ekeagle, ekgarage: ekgarage, ekmirror: ekmirror, ekcorner: ekcorner };
})();
