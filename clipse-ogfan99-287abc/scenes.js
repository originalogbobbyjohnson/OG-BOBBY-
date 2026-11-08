/* clipse scenes (Regions tab: Virginia; Virginia Beach). HRT Route 20 stop at Virginia Beach Blvd & Lynnhaven Pkwy, I-64 East into Virginia Beach (the Bronx-to-the-Beach move, 1979),
   the Grindin' beat banged out on a school lunch table, The Dome at the Oceanfront (2025 homecoming), Laskin Rd & First Colonial Rd at Hilltop with the Lesner Bridge's lit arches behind.
   CSS classes prefixed cl-. 400 x 260 each. No digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes clflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.cl-flk{animation:clflick 2.6s infinite}.cl-flk2{animation-delay:.9s}' +
    '@keyframes cldrift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.cl-cld{animation:cldrift 34s linear infinite}.cl-cld2{animation-delay:-17s}' +
    '@keyframes cltruck{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.cl-truck{animation:cltruck 9s linear infinite}' +
    '@keyframes clcar{from{transform:translateX(430px)}to{transform:translateX(-90px)}}.cl-car{animation:clcar 5s linear infinite}.cl-car2{animation-delay:-2.5s}' +
    '@keyframes clbang{0%,100%{transform:translateY(0)}40%{transform:translateY(-14px)}60%{transform:translateY(2px)}}.cl-fist{transform-box:fill-box;animation:clbang .5s ease-in infinite}.cl-f2{animation-delay:-.25s}' +
    '@keyframes clnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-34px);opacity:0}}.cl-note{animation:clnote 1.8s ease-out infinite}.cl-n2{animation-delay:-.6s}.cl-n3{animation-delay:-1.2s}' +
    '@keyframes clbeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.cl-beam{transform-box:fill-box;transform-origin:50% 100%;animation:clbeam 4s ease-in-out infinite}.cl-bm2{animation-delay:-2s}' +
    '@keyframes clglow{0%,100%{opacity:.4}50%{opacity:1}}.cl-glow{animation:clglow 1.7s ease-in-out infinite}.cl-g2{animation-delay:-.85s}' +
    '@keyframes clwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.cl-wave{animation:clwave 3.4s ease-in-out infinite}' +
    '@keyframes clsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cl-sp{animation:clsp 1.4s ease-out infinite}.cl-sp2{animation-delay:.45s}' +
    '@keyframes clhands{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.cl-hand{animation:clhands .7s ease-in-out infinite}.cl-h2{animation-delay:-.35s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const T = (x, y, s, fill, txt, extra) => '<text x="' + x + '" y="' + y + '" ' + font + ' font-size="' + s + '" fill="' + fill + '"' + (extra || "") + '>' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="11.5" fill="#fff">' + txt + '</text>';
  const cloud = (x, y, s, cls) => '<g class="cl-cld ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "cl-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BONE = "#f5f1e6", RED = "#d63a2f", GOLD = "#c9a24a", HRT = "#00539f", INK = "#141416";

  /* 1. HRT Route 20 stop on Virginia Beach Blvd at Lynnhaven Pkwy: curbside shelter, black stop sign with the HRT pill and the 20, a white-and-blue bus pulling in */
  function clstation() {
    const bus = '<g class="anim-train"><rect x="20" y="108" width="296" height="84" rx="10" fill="#f4f6f8" stroke="#5d6670" stroke-width="2"/>' +
      '<path d="M20 170h296v10H20z" fill="' + HRT + '"/><path d="M20 160h296v4H20z" fill="' + RED + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (32 + i * 42) + '" y="120" width="34" height="32" rx="3" fill="#1d262e"/>').join("") +
      '<rect x="284" y="118" width="30" height="60" rx="3" fill="#2a3440"/>' +
      '<rect x="262" y="96" width="52" height="12" rx="2" fill="#111"/>' + T(288, 105.5, 9, "#ffb300", "20 VB BLVD", ' text-anchor="middle"') +
      '<circle cx="76" cy="192" r="14" fill="#1b1b1b"/><circle cx="76" cy="192" r="6" fill="#9aa1a8"/><circle cx="262" cy="192" r="14" fill="#1b1b1b"/><circle cx="262" cy="192" r="6" fill="#9aa1a8"/>' +
      '<circle class="cl-glow" cx="312" cy="176" r="3.5" fill="#fff6c2"/></g>';
    const myrtle = (x, c) => '<rect x="' + (x - 3) + '" y="70" width="6" height="56" fill="#7a5a44"/><g fill="' + c + '"><circle cx="' + x + '" cy="62" r="20"/><circle cx="' + (x - 16) + '" cy="72" r="14"/><circle cx="' + (x + 16) + '" cy="72" r="14"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cl1)"/>' + cloud(70, 30, 1) + cloud(250, 22, .8, "cl-cld2") +
      /* strip mall + trees along the boulevard */
      '<rect x="0" y="86" width="400" height="40" fill="#d9cdb8"/><rect x="0" y="80" width="400" height="8" fill="#b9ab92"/>' +
      [10, 96, 182, 268].map(x => '<rect x="' + x + '" y="96" width="70" height="22" fill="#7d93a6" opacity=".8"/>').join("") +
      myrtle(40, "#d65a8a") + myrtle(200, "#cf4f80") +
      /* shelter */
      '<rect x="330" y="88" width="66" height="6" fill="#2f3a44"/><rect x="332" y="94" width="4" height="104" fill="#2f3a44"/><rect x="390" y="94" width="4" height="104" fill="#2f3a44"/>' +
      '<rect x="336" y="98" width="54" height="70" fill="#bfe0f0" opacity=".45"/><rect x="340" y="170" width="46" height="5" fill="#6b5a4a"/>' +
      /* road + curb */
      '<rect x="0" y="198" width="400" height="62" fill="#4a4d52"/><rect x="0" y="196" width="400" height="5" fill="#d8d4c8"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 56) + '" y="236" width="30" height="4" fill="#f2f2f2"/>').join("") +
      bus +
      /* stop sign */
      '<rect x="356" y="44" width="5" height="154" fill="#2a2a2a"/><rect x="312" y="18" width="86" height="58" rx="3" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<rect x="318" y="24" width="30" height="13" rx="6.5" fill="' + HRT + '"/>' + T(333, 34, 9.5, "#fff", "HRT", ' text-anchor="middle"') +
      '<circle cx="380" cy="31" r="9" fill="#fff"/>' + T(380, 35, 10, "#111", "20", ' text-anchor="middle"') +
      T(318, 52, 8.6, "#fff", "VA BEACH BLVD") + T(318, 66, 8.6, "#fff", "LYNNHAVEN PKWY"),
      sky("cl1", "#7cc2ec", "#e6f3fa"));
  }

  /* 2. Bronx to the Beach: I-64 East, green overhead sign for Virginia Beach, the family moving truck rolling south at sunset */
  function clmove() {
    const truck = '<g class="cl-truck"><rect x="0" y="150" width="104" height="52" rx="3" fill="#f0ece2" stroke="#6d6a62" stroke-width="2"/>' +
      '<path d="M8 162h88" stroke="' + RED + '" stroke-width="4"/>' + T(52, 186, 13, INK, "BX TO VB", ' text-anchor="middle"') +
      '<path d="M104 166h26l14 16v20h-40z" fill="#e2d9c4" stroke="#6d6a62" stroke-width="2"/><path d="M110 170h18l10 12h-28z" fill="#2a3a4a"/>' +
      '<circle cx="24" cy="204" r="9" fill="#1b1b1b"/><circle cx="84" cy="204" r="9" fill="#1b1b1b"/><circle cx="126" cy="204" r="9" fill="#1b1b1b"/>' +
      '<circle class="cl-glow" cx="142" cy="192" r="3" fill="#fff3b0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cl2)"/>' +
      '<circle cx="300" cy="118" r="34" fill="#ffd27a" opacity=".9"/>' + cloud(80, 46, 1.1) + cloud(240, 30, .7, "cl-cld2") +
      /* pines along the interstate */
      '<g fill="#2f4a36">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 36) + ' 156l14 -' + (34 + (i % 3) * 8) + 'l14 ' + (34 + (i % 3) * 8) + 'z"/>').join("") + '</g>' +
      '<rect x="0" y="154" width="400" height="106" fill="#55585e"/><rect x="0" y="152" width="400" height="4" fill="#d8d4c8"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 56 + 10) + '" y="214" width="30" height="4" fill="#f2f2f2"/>').join("") +
      '<rect x="0" y="244" width="400" height="3" fill="#f2c200"/>' +
      /* overhead gantry + sign */
      '<rect x="40" y="40" width="6" height="114" fill="#8a929b"/><rect x="354" y="40" width="6" height="114" fill="#8a929b"/><rect x="40" y="46" width="320" height="5" fill="#8a929b"/>' +
      '<rect x="120" y="22" width="190" height="66" rx="5" fill="#1f7a3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M140 32h30v18q0 12 -15 18q-15 -6 -15 -18z" fill="#1a4fa0" stroke="#fff" stroke-width="1.6"/><rect x="140" y="32" width="30" height="7" fill="' + RED + '"/>' +
      T(155, 58, 12, "#fff", "64", ' text-anchor="middle"') + T(182, 44, 11, "#fff", "EAST") +
      T(182, 64, 14, "#fff", "Virginia Beach") + T(140, 82, 8.5, "#d9f2df", "BRONX TO THE BEACH") +
      truck,
      sky("cl2", "#f39a5b", "#ffe1b0"));
  }

  /* 3. The Grindin' beat on the lunch table: a Virginia Beach school cafeteria, fists banging the table, notes flying up */
  function cllunch() {
    const fist = (x, cls) => '<g class="cl-fist ' + cls + '"><rect x="' + x + '" y="148" width="14" height="40" rx="5" fill="#7a4e33"/><rect x="' + (x - 4) + '" y="140" width="22" height="18" rx="6" fill="#8a5a3c"/></g>';
    const tray = (x, c) => '<rect x="' + x + '" y="176" width="44" height="10" rx="2" fill="#c9ced3"/><circle cx="' + (x + 12) + '" cy="178" r="5" fill="' + c + '"/><rect x="' + (x + 24) + '" y="174" width="12" height="6" rx="1" fill="#f2efe6"/>';
    return svg(
      '<rect width="400" height="260" fill="#ebe3cf"/>' +
      '<rect x="0" y="0" width="400" height="70" fill="#d7ccb0"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 0v70" stroke="#c9bd9f" stroke-width="2"/>').join("") +
      '<rect x="0" y="70" width="400" height="6" fill="' + HRT + '"/>' +
      /* windows + pennant */
      [24, 300].map(x => '<rect x="' + x + '" y="88" width="76" height="52" fill="#bfe0f0" stroke="#8a8270" stroke-width="3"/><path d="M' + (x + 38) + ' 88v52M' + x + ' 114h76" stroke="#8a8270" stroke-width="2"/>').join("") +
      '<rect x="130" y="26" width="140" height="24" rx="3" fill="#2b2b2b"/>' + T(200, 43, 12, "#ffe08a", "LUNCH  ·  VA BEACH", ' text-anchor="middle"') +
      '<rect x="0" y="210" width="400" height="50" fill="#b9b0a0"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 210l-20 50" stroke="#a69c8b" stroke-width="1.5"/>').join("") +
      /* table */
      '<rect x="20" y="186" width="360" height="12" rx="3" fill="#5a7f9e"/><rect x="40" y="198" width="8" height="24" fill="#444"/><rect x="352" y="198" width="8" height="24" fill="#444"/>' +
      tray(36, "#e2574c") + tray(300, "#f2c200") +
      fist(110, "") + fist(150, "cl-f2") + fist(232, "") + fist(272, "cl-f2") +
      '<g fill="' + INK + '">' + [[180, "cl-note"], [212, "cl-note cl-n2"], [196, "cl-note cl-n3"]].map(n => '<g class="' + n[1] + '"><ellipse cx="' + n[0] + '" cy="150" rx="6" ry="4.5"/><rect x="' + (n[0] + 4) + '" y="128" width="2.4" height="22"/><path d="M' + (n[0] + 6) + ' 128q8 4 6 12" stroke="' + INK + '" stroke-width="2.4" fill="none"/></g>').join("") + '</g>' +
      tag("GRINDIN'", 128, 112, 30, RED, -4),
      "");
  }

  /* 4. The Dome at the Oceanfront: the low white dome on 19th St, the CLIPSE homecoming marquee, spotlights, hands up, the Atlantic behind */
  function cldome() {
    const ribs = Array.from({ length: 9 }, (_, i) => { const x = 110 + i * 22.5; return '<path d="M' + x + ' 150Q200 ' + (40 + Math.abs(i - 4) * 10) + ' ' + (400 - x) + ' 150" stroke="#cfd6dc" stroke-width="1.4" fill="none" opacity=".7"/>'; }).join("");
    const hand = (x, cls) => '<g class="cl-hand ' + cls + '"><circle cx="' + x + '" cy="214" r="9" fill="#14141a"/><path d="M' + (x - 5) + ' 208l-6 -22M' + (x + 5) + ' 208l6 -22" stroke="#14141a" stroke-width="4" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cl4)"/>' + stars(16) +
      '<g class="cl-wave"><path d="M-20 122q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v20h-460z" fill="#1d3a5c"/></g>' +
      '<rect x="0" y="134" width="400" height="20" fill="#16314f"/>' +
      '<path class="cl-beam" d="M70 150l-18 -130h36z" fill="#fff6c2" opacity=".18"/><path class="cl-beam cl-bm2" d="M330 150l-18 -130h36z" fill="#fff6c2" opacity=".18"/>' +
      /* dome */
      '<path d="M96 152Q200 26 304 152z" fill="#eef1f3"/>' + ribs +
      '<path d="M96 152Q200 26 304 152" stroke="#9aa6b0" stroke-width="2" fill="none"/>' +
      '<rect x="90" y="150" width="220" height="30" fill="#2b3036"/><rect x="90" y="148" width="220" height="4" fill="#9aa6b0"/>' +
      '<rect x="120" y="154" width="160" height="22" rx="2" fill="#0e0e10" stroke="' + GOLD + '" stroke-width="2"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="cl-glow' + (i % 2 ? " cl-g2" : "") + '" cx="' + (126 + i * 11.4) + '" cy="152" r="1.8" fill="#ffe08a"/>').join("") +
      T(200, 170, 12, BONE, "THE DOME  ·  CLIPSE", ' text-anchor="middle" letter-spacing="1"') +
      '<rect x="0" y="180" width="400" height="80" fill="#22252b"/>' +
      [30, 66, 102, 138, 174, 210, 246, 282, 318, 354].map((x, i) => hand(x, i % 2 ? "cl-h2" : "")).join("") +
      '<rect x="0" y="222" width="400" height="38" fill="#14141a"/>' + T(200, 246, 11, "#8d96a0", "HOMECOMING  ·  VIRGINIA BEACH OCEANFRONT", ' text-anchor="middle"'),
      sky("cl4", "#0a1022", "#26406a"));
  }

  /* 5. Laskin Rd & First Colonial Rd at Hilltop: green signs, CLIPSE tagged on the wall, the Lesner Bridge's lit arches over Lynnhaven Inlet behind */
  function clcorner() {
    const arch = (x0, x1, top) => '<path d="M' + x0 + ' 92Q' + ((x0 + x1) / 2) + ' ' + top + ' ' + x1 + ' 92" stroke="#7fd0ff" stroke-width="3" fill="none" class="cl-glow"/>' +
      Array.from({ length: 6 }, (_, i) => { const t = (i + 1) / 7, x = x0 + (x1 - x0) * t, y = (1 - t) * (1 - t) * 92 + 2 * (1 - t) * t * top + t * t * 92; return '<path d="M' + x.toFixed(1) + ' ' + y.toFixed(1) + 'V92" stroke="#7fd0ff" stroke-width="1" opacity=".6"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cl5)"/>' + stars(14) +
      '<rect x="0" y="92" width="400" height="48" fill="#132a44"/><g class="cl-wave"><path d="M-20 104h460M-20 116h460M-20 128h460" stroke="#2a5a80" stroke-width="1.2" opacity=".6"/></g>' +
      '<rect x="20" y="90" width="360" height="5" fill="#9fb3c4"/>' + arch(40, 200, 40) + arch(200, 360, 40) +
      [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="90" width="6" height="22" fill="#9fb3c4"/>').join("") +
      /* wall */
      '<rect x="0" y="140" width="400" height="86" fill="#3a3c42"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#33353b" stroke-width="1"/>').join("") +
      tag("CLIPSE", 20, 200, 52, BONE, -6) + tag("RE-UP GANG", 214, 170, 20, GOLD, -4) + tag("GRINDIN'", 214, 210, 22, RED, -3) +
      '<g class="cl-sp"><circle cx="200" cy="164" r="3" fill="' + BONE + '" opacity=".7"/></g><g class="cl-sp cl-sp2"><circle cx="206" cy="158" r="2" fill="' + BONE + '" opacity=".6"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="cl-car"><rect x="0" y="236" width="50" height="14" rx="5" fill="#1c1c1c"/><rect x="10" y="229" width="28" height="9" rx="4" fill="#1c1c1c"/><circle cx="12" cy="250" r="4" fill="#666"/><circle cx="38" cy="250" r="4" fill="#666"/><circle cx="2" cy="242" r="2" fill="#ff5a4a"/></g>' +
      '<rect x="352" y="92" width="6" height="134" fill="#2f2f2f"/>' + sign(286, 96, 110, "Laskin Rd") + sign(264, 120, 132, "First Colonial Rd"),
      sky("cl5", "#070b18", "#2a3a66"));
  }

  window.SCENES = { clstation: clstation, clmove: clmove, cllunch: cllunch, cldome: cldome, clcorner: clcorner };
})();
