/* johnlegend scenes (Regions tab: St. Louis + Ohio; Springfield, Ohio - John Roger Stephens, born 1978; church choir at 7, North High salutatorian, father at the International Harvester truck plant).
   CSS classes and ids prefixed jl- (the page's own anim-train is kept, used on the truck).
   1 I-70 into Springfield: the green overhead sign for Exit 54, SR 72 - Springfield (real exit), a red truck rolling in under it at dusk.
   2 Sunday at church: his mother leading the choir, his grandmother's organ pipes, a stained-glass window, notes floating up.
   3 The John Legend Theater (Springfield High School's auditorium, renovated with his 2017 gift): red curtains, a grand piano, the spotlight sweeping.
   4 The Springfield truck plant where his father worked: sawtooth roof, the stack steaming, trucks rolling out.
   5 S Fountain Ave and High St: green signs, JOHN LEGEND tagged on the wall, the old City Hall (Heritage Center, 1890 Richardsonian Romanesque, red brick, rock-faced stone towers) behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jlglow{0%,100%{opacity:.55}50%{opacity:1}}.jl-glow{animation:jlglow 2.4s ease-in-out infinite}.jl-g2{animation-delay:-1.2s}' +
    '@keyframes jlnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.jl-note{animation:jlnote 3.2s ease-out infinite}.jl-n2{animation-delay:-1.1s}.jl-n3{animation-delay:-2.2s}' +
    '@keyframes jlsweep{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.jl-beam{transform-box:view-box;transform-origin:200px 0px;animation:jlsweep 5s ease-in-out infinite}' +
    '@keyframes jlsteam{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(18px,-60px) scale(1.6);opacity:0}}.jl-st{transform-box:fill-box;transform-origin:center;animation:jlsteam 3s ease-out infinite}.jl-st2{animation-delay:-1s}.jl-st3{animation-delay:-2s}' +
    '@keyframes jlroll{from{transform:translateX(-130px)}to{transform:translateX(520px)}}.jl-roll{animation:jlroll 9s linear infinite}.jl-r2{animation-delay:-4.5s}' +
    '@keyframes jlcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.jl-car{animation:jlcar 7s linear infinite}' +
    '@keyframes jlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jl-sp{animation:jlspray 1.4s ease-out infinite}.jl-sp2{animation-delay:.45s}' +
    '@keyframes jlsway{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}.jl-sway{animation:jlsway 1.6s ease-in-out infinite}.jl-sw2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#f4d58d", RED = "#d1495b", TEAL = "#7fb7be", SIGN = "#0f6b3a", BRICK = "#9a3f2c", STONE = "#b9a789";
  const note = (x, y, c, cls) => '<g class="jl-note ' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + c + '"/><path d="M' + (x + 4) + ' ' + y + 'v-16l8 3" stroke="' + c + '" stroke-width="2" fill="none"/></g>';

  /* 1. I-70, Exit 54 - SR 72 Springfield */
  function jlhighway() {
    const shield72 = (x, y) => '<rect x="' + (x - 13) + '" y="' + (y - 11) + '" width="26" height="22" rx="3" fill="#fff" stroke="#111" stroke-width="1.5"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#111">72</text>';
    const shield70 = (x, y) => '<path d="M' + (x - 14) + ' ' + (y - 12) + 'h28v14q0 10 -14 14q-14 -4 -14 -14z" fill="#003f87" stroke="#fff" stroke-width="1.5"/><path d="M' + (x - 14) + ' ' + (y - 12) + 'h28v6h-28z" fill="#c8102e"/><text x="' + x + '" y="' + (y + 9) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">70</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#jls1)"/>' +
      '<circle cx="320" cy="150" r="26" fill="#ffb15a" opacity=".85"/>' +
      /* fields + tree line */
      '<rect x="0" y="150" width="400" height="110" fill="#5d7a3a"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (i * 30 + 6) + '" cy="152" r="12" fill="#3e5a2a"/>').join("") +
      /* road */
      '<path d="M0 260L170 160h60L400 260z" fill="#3a3a3e"/><path d="M200 162v98" stroke="#e8c15a" stroke-width="3" stroke-dasharray="14 12"/>' +
      '<path d="M40 260L178 160M360 260L222 160" stroke="#f2f2f2" stroke-width="2"/>' +
      /* sign gantry */
      '<rect x="40" y="40" width="6" height="140" fill="#8c9096"/><rect x="354" y="40" width="6" height="140" fill="#8c9096"/><rect x="40" y="46" width="320" height="6" fill="#8c9096"/>' +
      '<rect x="78" y="22" width="244" height="92" rx="6" fill="' + SIGN + '" stroke="#fff" stroke-width="2.5"/>' +
      '<rect x="248" y="8" width="74" height="18" rx="3" fill="#ffd200" stroke="#111" stroke-width="1"/><text x="285" y="22" text-anchor="middle" ' + font + ' font-size="12" fill="#111">EXIT 54</text>' +
      shield72(200, 46) +
      '<text x="200" y="88" text-anchor="middle" ' + font + ' font-size="26" fill="#fff">Springfield</text>' +
      '<path d="M296 98l10 10l10 -10" stroke="#fff" stroke-width="3" fill="none"/><text x="110" y="106" ' + font + ' font-size="10" fill="#fff">1 MILE</text>' +
      /* the truck */
      '<g class="anim-train"><rect x="60" y="172" width="150" height="58" rx="3" fill="#f2f0ea" stroke="#777" stroke-width="2"/><path d="M60 186h150" stroke="' + RED + '" stroke-width="5"/>' +
      '<path d="M212 182h34l20 22v26h-54z" fill="' + RED + '" stroke="#7a1f2b" stroke-width="2"/><path d="M220 188h22l14 16h-36z" fill="#9fd0e8"/>' +
      '<rect x="262" y="214" width="8" height="6" fill="#ffe27a" class="jl-glow"/>' +
      [84, 112, 230, 254].map(x => '<circle cx="' + x + '" cy="232" r="10" fill="#111"/><circle cx="' + x + '" cy="232" r="4" fill="#888"/>').join("") + '</g>',
      sky("jls1", "#2b2a5a", "#f29a6a"));
  }

  /* 2. The choir loft at church */
  function jlchurch() {
    const robe = (x, c) => '<g class="jl-sway ' + (x % 2 ? "jl-sw2" : "") + '"><circle cx="' + x + '" cy="132" r="8" fill="#6b4630"/><path d="M' + (x - 13) + ' 176q0 -34 13 -34q13 0 13 34z" fill="' + c + '"/><path d="M' + (x - 6) + ' 146l6 8l6 -8" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#3a2418"/>' +
      /* back wall + stained glass */
      '<rect x="0" y="0" width="400" height="180" fill="#5a3a28"/>' +
      '<path d="M170 110v-60q30 -40 60 0v60z" fill="#22304a" stroke="#c9a24a" stroke-width="3"/>' +
      '<g class="jl-glow"><path d="M178 104v-52q22 -30 44 0v52z" fill="' + TEAL + '" opacity=".6"/><path d="M200 34v70M178 70h44" stroke="#c9a24a" stroke-width="2"/><circle cx="200" cy="58" r="8" fill="' + GOLD + '" opacity=".8"/><path d="M182 100l18 -26l18 26z" fill="' + RED + '" opacity=".6"/></g>' +
      /* organ pipes */
      Array.from({ length: 9 }, (_, i) => { const h = 70 - Math.abs(i - 4) * 10; return '<rect x="' + (20 + i * 14) + '" y="' + (110 - h) + '" width="10" height="' + h + '" rx="4" fill="#d9c08a" stroke="#8a6a1f" stroke-width="1"/>'; }).join("") +
      Array.from({ length: 9 }, (_, i) => { const h = 70 - Math.abs(i - 4) * 10; return '<rect x="' + (256 + i * 14) + '" y="' + (110 - h) + '" width="10" height="' + h + '" rx="4" fill="#d9c08a" stroke="#8a6a1f" stroke-width="1"/>'; }).join("") +
      /* choir loft rail */
      robe(110, "#5a2a6a") + robe(150, "#5a2a6a") + robe(190, "#5a2a6a") + robe(230, "#5a2a6a") + robe(270, "#5a2a6a") +
      '<rect x="70" y="170" width="260" height="16" fill="#7a4a2a" stroke="#3a2418" stroke-width="2"/>' +
      Array.from({ length: 13 }, (_, i) => '<rect x="' + (76 + i * 20) + '" y="172" width="6" height="12" fill="#5a3418"/>').join("") +
      /* organ console */
      '<rect x="20" y="186" width="90" height="44" fill="#4a2a18" stroke="#2a170f" stroke-width="2"/><rect x="26" y="196" width="78" height="8" fill="#f7f3ea"/>' +
      [30, 38, 50, 58, 66, 78, 86, 96].map(x => '<rect x="' + x + '" y="196" width="3" height="5" fill="#111"/>').join("") +
      /* pews */
      '<rect x="0" y="230" width="400" height="30" fill="#2a170f"/>' + [140, 250].map(x => '<rect x="' + x + '" y="214" width="100" height="20" rx="3" fill="#6b3f22" stroke="#2a170f" stroke-width="2"/>').join("") +
      note(130, 120, GOLD) + note(200, 126, "#f7f3ea", "jl-n2") + note(270, 118, GOLD, "jl-n3") + note(60, 180, TEAL, "jl-n2"));
  }

  /* 3. The John Legend Theater */
  function jltheater() {
    return svg(
      '<rect width="400" height="260" fill="#120c16"/>' +
      /* proscenium + curtains */
      '<rect x="20" y="20" width="360" height="22" fill="#6a1420"/><text x="200" y="36" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">JOHN LEGEND THEATER</text>' +
      '<path d="M20 42h70q-10 80 6 170h-76z" fill="#9a1d2e"/><path d="M380 42h-70q10 80 -6 170h76z" fill="#9a1d2e"/>' +
      [34, 50, 66, 334, 350, 366].map(x => '<path d="M' + x + ' 46v160" stroke="#6a1420" stroke-width="3"/>').join("") +
      /* spotlight */
      '<g class="jl-beam"><path d="M196 0L120 200h160z" fill="#fff6d0" opacity=".16"/></g>' +
      '<ellipse cx="200" cy="200" rx="80" ry="12" fill="#fff6d0" opacity=".22"/>' +
      /* stage + piano */
      '<rect x="20" y="200" width="360" height="14" fill="#5a3418"/><rect x="20" y="214" width="360" height="46" fill="#1a1016"/>' +
      '<path d="M140 150h70q46 0 46 32v12H140z" fill="#111" stroke="#444" stroke-width="2"/><path d="M144 150l60 -48l6 5l-54 43z" fill="#1a1a1a" stroke="#555" stroke-width="1.5"/>' +
      '<rect x="140" y="182" width="70" height="10" fill="#f7f3ea"/>' + [144, 152, 160, 172, 180, 188, 200].map(x => '<rect x="' + x + '" y="182" width="4" height="6" fill="#111"/>').join("") +
      '<rect x="146" y="194" width="5" height="10" fill="#222"/><rect x="246" y="192" width="5" height="12" fill="#222"/><rect x="160" y="204" width="34" height="8" rx="2" fill="#2a1a1a"/>' +
      /* seat rows */
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (28 + i * 22) + ' 252q9 -14 18 0z" fill="#3a1a22"/>').join("") +
      note(260, 140, GOLD) + note(120, 150, "#f7f3ea", "jl-n2"));
  }

  /* 4. The truck plant */
  function jlplant() {
    const truck = (cls) => '<g class="jl-roll ' + cls + '"><rect x="0" y="206" width="70" height="24" fill="#f2f0ea" stroke="#777" stroke-width="1.5"/><path d="M72 210h16l10 10v10h-26z" fill="' + RED + '"/><path d="M76 213h10l7 8h-17z" fill="#9fd0e8"/><circle cx="14" cy="232" r="6" fill="#111"/><circle cx="56" cy="232" r="6" fill="#111"/><circle cx="88" cy="232" r="6" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jls4)"/>' +
      '<g class="jl-st"><circle cx="330" cy="30" r="12" fill="#e8e8ec"/></g><g class="jl-st jl-st2"><circle cx="330" cy="30" r="12" fill="#e8e8ec"/></g><g class="jl-st jl-st3"><circle cx="330" cy="30" r="12" fill="#e8e8ec"/></g>' +
      '<rect x="320" y="34" width="20" height="110" fill="#7a5a4a"/><path d="M320 46h20M320 60h20" stroke="' + RED + '" stroke-width="4"/>' +
      /* sawtooth roof hall */
      '<rect x="20" y="110" width="360" height="86" fill="#b8b2a6" stroke="#6a655c" stroke-width="2"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 40) + ' 110l40 -26v26z" fill="#8c877d" stroke="#6a655c" stroke-width="1.5"/><path d="M' + (58 + i * 40) + ' 86v22" stroke="#9fd0e8" stroke-width="3"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="128" width="30" height="20" fill="#5a6a78"/>').join("") +
      '<rect x="150" y="160" width="100" height="36" fill="#4a4a50"/><path d="M150 168h100M150 176h100M150 184h100" stroke="#3a3a40" stroke-width="2"/>' +
      '<rect x="120" y="150" width="160" height="0" fill="none"/><text x="200" y="146" text-anchor="middle" ' + font + ' font-size="11" fill="#2a2a2a">TRUCK PLANT</text>' +
      /* lot + road */
      '<rect x="0" y="196" width="400" height="64" fill="#45454a"/><path d="M0 240h400" stroke="#e8c15a" stroke-width="2" stroke-dasharray="18 14"/>' +
      truck("") + truck("jl-r2"),
      sky("jls4", "#8ec3e8", "#e8eef2"));
  }

  /* 5. S Fountain Ave & High St, the old City Hall towers behind */
  function jlcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jls5)"/>' +
      /* Heritage Center: red brick hall, two stone towers (east taller) */
      '<rect x="200" y="92" width="200" height="110" fill="' + BRICK + '" stroke="#5a2216" stroke-width="2"/>' +
      '<path d="M196 92l40 -20h124l40 20z" fill="#5a4a48"/>' +
      [214, 244, 304, 334, 364].map(x => '<path d="M' + x + ' 140v-22q8 -10 16 0v22z" fill="#2a2a3a" stroke="' + STONE + '" stroke-width="2"/>').join("") +
      [214, 244, 304, 334, 364].map(x => '<path d="M' + x + ' 186v-22q8 -10 16 0v22z" fill="#2a2a3a" stroke="' + STONE + '" stroke-width="2"/>').join("") +
      '<rect x="200" y="148" width="200" height="8" fill="' + STONE + '"/>' +
      /* west tower (shorter) */
      '<rect x="262" y="40" width="34" height="162" fill="' + STONE + '" stroke="#7a6a50" stroke-width="2"/><path d="M258 40l21 -22l21 22z" fill="#5a4a48"/>' +
      '<path d="M272 70v-14q7 -8 14 0v14z" fill="#2a2a3a"/>' +
      /* east tower (taller) */
      '<rect x="344" y="14" width="40" height="188" fill="' + STONE + '" stroke="#7a6a50" stroke-width="2"/><path d="M340 14l24 -14l24 14z" fill="#5a4a48"/>' +
      '<path d="M356 50v-18q8 -10 16 0v18z" fill="#2a2a3a"/><path d="M356 90v-18q8 -10 16 0v18z" fill="#2a2a3a"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M262 ' + (52 + i * 14) + 'h34M344 ' + (26 + i * 16) + 'h40" stroke="#a3926f" stroke-width="1"/>').join("") +
      /* wall with the tag */
      '<rect x="0" y="104" width="196" height="116" fill="#3a3448"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (114 + i * 10) + 'h196" stroke="#2c2738" stroke-width="1"/>').join("") +
      tag("JOHN LEGEND", 8, 166, 25, GOLD, -6) + tag("CHAMPION CITY", 22, 204, 16, RED, -3) +
      '<g class="jl-sp"><circle cx="186" cy="138" r="3" fill="' + GOLD + '"/></g><g class="jl-sp jl-sp2"><circle cx="180" cy="148" r="2.5" fill="' + GOLD + '"/></g>' +
      /* street signs */
      '<rect x="246" y="150" width="5" height="70" fill="#555"/>' +
      '<rect x="198" y="146" width="102" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="249" y="158" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">S FOUNTAIN AVE</text>' +
      '<rect x="212" y="164" width="74" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="249" y="176" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HIGH ST</text>' +
      '<rect x="0" y="220" width="400" height="12" fill="#9a958c"/><rect x="0" y="232" width="400" height="28" fill="#2b2b2e"/>' +
      '<g class="jl-car"><rect x="0" y="236" width="64" height="16" rx="5" fill="' + TEAL + '"/><rect x="12" y="230" width="36" height="10" rx="4" fill="#5a9aa2"/><circle cx="14" cy="254" r="5" fill="#111"/><circle cx="50" cy="254" r="5" fill="#111"/></g>',
      sky("jls5", "#2a2a5a", "#f2a07a"));
  }

  window.SCENES = { jlhighway: jlhighway, jlchurch: jlchurch, jltheater: jltheater, jlplant: jlplant, jlcorner: jlcorner };
})();
