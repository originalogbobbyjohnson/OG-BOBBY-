/* lupefiasco scenes (Regions tab: Chicago; East Garfield Park, West Side). CSS classes and ids prefixed lf- (the page's own anim-train is kept).
   1 Kedzie on the CTA Green Line: the steel L structure over Lake St in East Garfield Park, a silver Green Line train sliding in (he grew up in the Madison Terrace homes on W Madison St, a few blocks south).
   2 Grant Park Skate Park at Roosevelt Rd ("Kick, Push"): concrete bowls and a ledge, a skateboard rolling and kicking up, the "no skating here" sign, the skyline behind.
   3 O'Hare Terminal 1's neon tunnel ("Paris, Tokyo": sleep in Paris, wake up in Tokyo): the glass ceiling over the moving walkway, rainbow neon tubes pulsing, a rolling suitcase gliding.
   4 Thornton Township High School in Harvey, where he went to high school: brown brick with limestone trim and the tall clock tower, notebook pages blowing.
   5 W Madison St and N Kedzie Ave in East Garfield Park: green signs, LUPE tagged, the Garfield Park Conservatory's glass Palm House glowing behind at dusk.
   No logos, no faces; no 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lfboard{0%{transform:translate(-80px,0) rotate(0)}40%{transform:translate(120px,0) rotate(0)}55%{transform:translate(180px,-34px) rotate(-18deg)}70%{transform:translate(240px,0) rotate(0)}100%{transform:translate(480px,0) rotate(0)}}.lf-board{animation:lfboard 4.5s linear infinite}' +
    '@keyframes lfneon{0%,100%{opacity:.35}50%{opacity:1}}.lf-n{animation:lfneon 1.8s ease-in-out infinite}.lf-n2{animation-delay:-.45s}.lf-n3{animation-delay:-.9s}.lf-n4{animation-delay:-1.35s}' +
    '@keyframes lfbag{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.lf-bag{animation:lfbag 6s linear infinite}' +
    '@keyframes lfbelt{from{transform:translateX(0)}to{transform:translateX(-24px)}}.lf-belt{animation:lfbelt .8s linear infinite}' +
    '@keyframes lfpage{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(260px,-90px) rotate(200deg);opacity:0}}.lf-pg{animation:lfpage 4s linear infinite}.lf-pg2{animation-delay:-1.3s}.lf-pg3{animation-delay:-2.6s}' +
    '@keyframes lfhand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.lf-hand{animation:lfhand 10s linear infinite}' +
    '@keyframes lfbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-18px)}}.lf-bird{animation:lfbird 12s linear infinite}.lf-bird2{animation-delay:-6s}' +
    '@keyframes lfblink{0%,100%{opacity:.3}50%{opacity:1}}.lf-bl{animation:lfblink 1.4s ease-in-out infinite}.lf-bl2{animation-delay:-.7s}' +
    '@keyframes lfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lf-sp{animation:lfspray 1.4s ease-out infinite}.lf-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "lf-bl" + (i % 2 ? " lf-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const GOLD = "#ffd23f", PINK = "#ff4d6d", AQUA = "#7bdff2", GRN = "#009b3a";

  /* 1. Kedzie on the Green Line, the L over Lake St */
  function lfstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="78" width="28" height="20" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><rect x="34" y="68" width="332" height="50" rx="8" fill="#d7dce1" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="34" y="102" width="332" height="5" fill="' + GRN + '"/><rect x="330" y="74" width="30" height="24" rx="3" fill="#1c2630"/>' +
      '<rect x="292" y="70" width="34" height="7" rx="1" fill="#111"/><text x="309" y="76" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb84a">HARLEM/LAKE</text><circle cx="358" cy="110" r="3" fill="#fff6c2"/></g>';
    const posts = Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 76) + '" y="132" width="10" height="86" fill="#5e6a62"/><path d="M' + (20 + i * 76) + ' 134l-14 -10M' + (30 + i * 76) + ' 134l14 -10" stroke="#5e6a62" stroke-width="4"/>').join("");
    const flats = [["#9a5a44", 0], ["#7d6450", 90], ["#a8754f", 180], ["#8a4b3a", 270], ["#6f6a5e", 340]].map(s => '<rect x="' + s[1] + '" y="30" width="86" height="190" fill="' + s[0] + '"/>' + [0, 1, 2].map(r => '<rect x="' + (s[1] + 10) + '" y="' + (150 + r * 22) + '" width="16" height="14" fill="#cfe3f0" opacity=".55"/><rect x="' + (s[1] + 52) + '" y="' + (150 + r * 22) + '" width="16" height="14" fill="#cfe3f0" opacity=".55"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lfs1)"/>' +
      '<g class="lf-bird"><path d="M20 16q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      flats +
      '<rect x="0" y="118" width="400" height="16" fill="#4d5a52"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 120l10 12l10 -12" stroke="#3b4640" stroke-width="2" fill="none"/>').join("") +
      '<rect x="0" y="56" width="400" height="4" fill="#6b7a70"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (i * 40) + '" y="56" width="3" height="12" fill="#6b7a70"/>').join("") +
      train + posts +
      '<rect x="0" y="218" width="400" height="42" fill="#5d5a55"/><path d="M0 238h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="60" y="4" width="280" height="30" rx="3" fill="#111"/><rect x="60" y="4" width="280" height="5" fill="' + GRN + '"/>' +
      '<text x="76" y="29" ' + font + ' font-size="16" fill="#fff">Kedzie</text>' +
      '<rect x="244" y="12" width="84" height="17" rx="8.5" fill="' + GRN + '"/><text x="286" y="24.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">GREEN</text>',
      sky("lfs1", "#8cc8f0", "#f4e2c2"));
  }

  /* 2. Grant Park Skate Park, kick, push */
  function lfskate() {
    const board = '<g class="lf-board"><rect x="0" y="186" width="56" height="7" rx="3.5" fill="' + PINK + '" stroke="#5a1424" stroke-width="1.5"/><circle cx="10" cy="197" r="4.5" fill="#f4f1e8" stroke="#333"/><circle cx="46" cy="197" r="4.5" fill="#f4f1e8" stroke="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lfs2)"/>' +
      '<g fill="#8796a6" opacity=".7"><rect x="20" y="40" width="34" height="110"/><rect x="60" y="70" width="40" height="80"/><rect x="110" y="20" width="28" height="130"/><rect x="113" y="8" width="3" height="12"/><rect x="132" y="8" width="3" height="12"/><rect x="150" y="56" width="44" height="94"/><rect x="250" y="34" width="36" height="116"/><rect x="292" y="60" width="44" height="90"/><rect x="342" y="44" width="40" height="106"/></g>' +
      '<g class="lf-bird"><path d="M30 30q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="lf-bird lf-bird2"><path d="M70 50q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g fill="#3f7a3a"><ellipse cx="200" cy="146" rx="30" ry="18"/><ellipse cx="236" cy="150" rx="22" ry="14"/><ellipse cx="0" cy="148" rx="30" ry="16"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#c9c4b8"/>' +
      '<path d="M0 150q60 0 80 40v70H0z" fill="#b2ad9f"/><path d="M0 150q60 0 80 40" stroke="#7d786c" stroke-width="3" fill="none"/>' +
      '<path d="M400 150q-70 0 -94 46v64H400z" fill="#b2ad9f"/><path d="M400 150q-70 0 -94 46" stroke="#7d786c" stroke-width="3" fill="none"/>' +
      '<rect x="80" y="196" width="226" height="64" fill="#d3cec2"/><rect x="150" y="172" width="80" height="14" fill="#a39e90"/><rect x="150" y="170" width="80" height="3" fill="#6e6a60"/>' +
      board +
      '<rect x="330" y="96" width="4" height="60" fill="#555"/><rect x="306" y="74" width="52" height="30" rx="3" fill="#fff" stroke="#c0392b" stroke-width="2.5"/>' +
      '<text x="332" y="87" text-anchor="middle" ' + font + ' font-size="8" fill="#c0392b">NO SKATING</text><text x="332" y="98" text-anchor="middle" ' + font + ' font-size="8" fill="#c0392b">HERE</text>' +
      '<rect x="100" y="230" width="200" height="20" rx="10" fill="#000" opacity=".55"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">KICK, PUSH, KICK, PUSH, COAST</text>',
      sky("lfs2", "#7fbbe8", "#f4f0d8"));
  }

  /* 3. O'Hare Terminal 1 neon tunnel, Paris to Tokyo */
  function lftunnel() {
    const cols = [PINK, "#ffa53f", GOLD, "#5cf28a", AQUA, "#a77bff"];
    const tubes = Array.from({ length: 18 }, (_, i) => '<path class="lf-n lf-n' + (i % 4 + 1) + '" d="M' + (i * 23 - 4) + ' 26q-6 30 0 60" stroke="' + cols[i % 6] + '" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") +
      Array.from({ length: 18 }, (_, i) => '<path class="lf-n lf-n' + ((i + 2) % 4 + 1) + '" d="M' + (i * 23 + 6) + ' 30q-5 26 0 52" stroke="' + cols[(i + 3) % 6] + '" stroke-width="3" fill="none" opacity=".8"/>').join("");
    const bag = '<g class="lf-bag"><rect x="0" y="150" width="30" height="40" rx="5" fill="' + PINK + '" stroke="#5a1424" stroke-width="2"/><rect x="11" y="140" width="8" height="10" fill="none" stroke="#333" stroke-width="2.5"/><path d="M6 160h18M6 170h18" stroke="#5a1424" stroke-width="1.5"/><circle cx="6" cy="193" r="3" fill="#333"/><circle cx="24" cy="193" r="3" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#120d24"/>' +
      '<path d="M0 0h400v26H0z" fill="#1e1838"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 0v26" stroke="#3a3260" stroke-width="2"/>').join("") +
      '<rect x="0" y="22" width="400" height="66" fill="#1a1432"/>' + tubes +
      '<rect x="0" y="88" width="400" height="12" fill="#2a2248"/>' +
      '<rect x="0" y="100" width="400" height="92" fill="#221c3c"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (i * 70 + 10) + '" y="110" width="50" height="70" fill="' + cols[i] + '" opacity=".18"/>').join("") +
      bag +
      '<rect x="0" y="196" width="400" height="18" fill="#3b3b44"/><g class="lf-belt">' + Array.from({ length: 19 }, (_, i) => '<rect x="' + (i * 24) + '" y="199" width="16" height="12" fill="#55555f"/>').join("") + '</g>' +
      '<rect x="0" y="192" width="400" height="5" fill="#1c1c22"/><rect x="0" y="214" width="400" height="46" fill="#1c1830"/>' +
      '<rect x="80" y="226" width="240" height="22" rx="11" fill="#000" opacity=".6"/>' +
      '<text x="200" y="241" text-anchor="middle" ' + font + ' font-size="11" fill="' + AQUA + '">SLEEP IN PARIS · WAKE UP IN TOKYO</text>');
  }

  /* 4. Thornton Township High School, Harvey */
  function lfthornton() {
    const BR = "#8a4a32";
    const wins = []; for (let r = 0; r < 3; r++) for (let c = 0; c < 10; c++) { if (c === 4 || c === 5) continue; wins.push('<rect x="' + (48 + c * 31) + '" y="' + (106 + r * 26) + '" width="15" height="17" fill="#2c3d4d"/><rect x="' + (46 + c * 31) + '" y="' + (123 + r * 26) + '" width="19" height="3" fill="#e6dcc3"/>'); }
    const pages = [0, 1, 2].map(i => '<g class="lf-pg' + (i ? " lf-pg" + (i + 1) : "") + '"><rect x="' + (40 + i * 20) + '" y="226" width="16" height="20" fill="#fffef6" stroke="#9fb6d0" stroke-width="1"/><path d="M' + (43 + i * 20) + ' 232h10M' + (43 + i * 20) + ' 237h10M' + (43 + i * 20) + ' 242h7" stroke="#9fb6d0" stroke-width="1"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lfs4)"/>' +
      '<g class="lf-bird"><path d="M30 30q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="36" y="94" width="328" height="96" fill="' + BR + '"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M36 ' + (100 + i * 8) + 'h328" stroke="#74392a" stroke-width="1"/>').join("") +
      '<rect x="32" y="88" width="336" height="8" fill="#e6dcc3"/>' + wins.join("") +
      /* clock tower */
      '<rect x="172" y="20" width="56" height="170" fill="#93503a"/><rect x="168" y="16" width="64" height="8" fill="#e6dcc3"/><rect x="176" y="2" width="48" height="16" fill="#93503a"/><path d="M174 4h52l-26 -12z" fill="#4a5a52"/>' +
      '<circle cx="200" cy="48" r="15" fill="#f4efe0" stroke="#3a2a22" stroke-width="2"/>' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + (200 + Math.sin(a) * 11) + ' ' + (48 - Math.cos(a) * 11) + 'L' + (200 + Math.sin(a) * 13.5) + ' ' + (48 - Math.cos(a) * 13.5) + '" stroke="#3a2a22" stroke-width="1.2"/>'; }).join("") +
      '<path d="M200 48v-8" stroke="#3a2a22" stroke-width="2"/><g class="lf-hand" style="transform-origin:200px 48px"><path d="M200 48v-12" stroke="#3a2a22" stroke-width="1.3"/></g>' +
      '<rect x="190" y="74" width="20" height="40" rx="10" fill="#2c3d4d"/><path d="M182 190v-40q18 -22 36 0v40z" fill="#e6dcc3"/><path d="M188 190v-36q12 -14 24 0v36z" fill="#3a2a22"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#78ad5a"/><path d="M188 190l-24 70h72l-24 -70z" fill="#cfc8b8"/>' +
      '<g fill="#3d6f34"><ellipse cx="20" cy="178" rx="26" ry="28"/><ellipse cx="380" cy="178" rx="26" ry="28"/></g>' + pages +
      '<rect x="216" y="232" width="176" height="18" rx="9" fill="#000" opacity=".55"/>' +
      '<text x="304" y="245" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">THORNTON TOWNSHIP HIGH</text>',
      sky("lfs4", "#8cc8f0", "#f4f0d8"));
  }

  /* 5. W Madison St and N Kedzie Ave, the Garfield Park Conservatory behind */
  function lfcorner() {
    const glass = '<g><path d="M150 128q0 -80 70 -96q70 16 70 96z" fill="#bfe6e0" fill-opacity=".55" stroke="#e6f6f2" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (162 + i * 23) + ' 128q2 -60 ' + (58 - i * 23) + ' -94" stroke="#e6f6f2" stroke-width="1" fill="none" opacity=".8"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (154 + i * 4) + ' ' + (110 - i * 18) + 'q66 ' + (-14 + i * 2) + ' ' + (132 - i * 8) + ' 0" stroke="#e6f6f2" stroke-width="1" fill="none" opacity=".7"/>').join("") +
      '<path d="M80 128q0 -30 70 -36v36z" fill="#bfe6e0" fill-opacity=".45" stroke="#e6f6f2" stroke-width="1.5"/><path d="M360 128q0 -30 -70 -36v36z" fill="#bfe6e0" fill-opacity=".45" stroke="#e6f6f2" stroke-width="1.5"/>' +
      '<g fill="#3f8a4a" opacity=".85"><path d="M214 128v-50" stroke="#5b4330" stroke-width="3"/><path d="M214 80q-20 -4 -30 8q16 -12 30 -8q-6 -16 -22 -18q18 4 22 18q10 -14 26 -10q-16 0 -26 10q22 -4 30 10q-14 -10 -30 -10z"/></g>' +
      '<g class="lf-bl"><circle cx="190" cy="100" r="2" fill="#fff6c2"/><circle cx="250" cy="96" r="2" fill="#fff6c2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lfs5)"/>' + stars(16) + glass +
      '<rect x="0" y="128" width="400" height="96" fill="#d8d2c4"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#c4bdae" stroke-width="1"/>').join("") +
      tag("LUPE", 26, 198, 70, GOLD, -6) + tag("1ST &amp; 15TH", 196, 216, 18, PINK, -4) + tag("KICK PUSH", 24, 216, 15, AQUA, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="344" y="98" width="6" height="126" fill="#2f2f2f"/>' +
      sign(276, 100, 122, "W Madison St") + sign(282, 126, 112, "N Kedzie Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="lf-bl" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="lf-sp"><circle cx="186" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="lf-sp lf-sp2"><circle cx="192" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("lfs5", "#1a1838", "#d9805a"));
  }

  window.SCENES = { lfstation: lfstation, lfskate: lfskate, lftunnel: lftunnel, lfthornton: lfthornton, lfcorner: lfcorner };
})();
