/* masego scenes (Regions tab: Virginia; Newport News). CSS classes prefixed mg- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mgnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-70px);opacity:0}}.mg-nt{animation:mgnote 3s ease-out infinite}.mg-nt2{animation-delay:1s}.mg-nt3{animation-delay:2s}' +
    '@keyframes mgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.mg-fl{transform-box:fill-box;transform-origin:0 50%;animation:mgflag 1.4s ease-in-out infinite}' +
    '@keyframes mgjet{0%{transform:translate(-120px,40px) rotate(-8deg)}100%{transform:translate(460px,-90px) rotate(-8deg)}}.mg-jet{animation:mgjet 7s linear infinite}' +
    '@keyframes mgglow{0%,100%{opacity:.35}50%{opacity:1}}.mg-gl{animation:mgglow 1.8s ease-in-out infinite}.mg-gl2{animation-delay:-.9s}' +
    '@keyframes mgripple{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.mg-rp{animation:mgripple 4s linear infinite}' +
    '@keyframes mgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mg-sp{animation:mgspray 1.4s ease-out infinite}.mg-sp2{animation-delay:.45s}' +
    '@keyframes mgbeacon{0%,100%{opacity:1}50%{opacity:.15}}.mg-bc{animation:mgbeacon 1s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, base, r, c) => '<rect x="' + (x - 3) + '" y="' + (base - r * 1.4) + '" width="6" height="' + (r * 1.4) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (base - r * 1.6) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * 0.7) + '" cy="' + (base - r * 1.2) + '" r="' + (r * 0.7) + '" fill="' + c + '"/><circle cx="' + (x + r * 0.7) + '" cy="' + (base - r * 1.2) + '" r="' + (r * 0.7) + '" fill="' + c + '"/>';
  const note = (x, y, c, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/><path d="M' + (x + 5.6) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  /* a gold alto sax: neck, body, bell turned up, keys */
  const sax = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q10 -4 14 4l2 6" stroke="#d9a93a" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M14 8l10 52q4 18 18 14q12 -4 10 -22l-2 -10" stroke="#e8c15a" stroke-width="9" fill="none" stroke-linecap="round"/><ellipse cx="50" cy="40" rx="9" ry="4" fill="#f4d77c" stroke="#9a7420" stroke-width="1.5"/>' +
    [18, 26, 34, 42].map(k => '<circle cx="' + (17 + k * 0.18) + '" cy="' + k + '" r="2.2" fill="#fff4cf" stroke="#9a7420" stroke-width="1"/>').join("") + '</g>';
  const PINK = "#f2a7c3", GOLD = "#e8c15a", TEAL = "#4fb3a9", HRT = "#0b4f9c";

  /* 1. HRT Route 107 rolling up Warwick Blvd to the Warwick / Denbigh stop in Newport News: white bus with the blue-and-green band, the bus-stop sign, live oaks */
  function mgbus() {
    const bus = '<g class="anim-train"><rect x="40" y="120" width="290" height="78" rx="10" fill="#f6f6f3" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (84 + i * 38) + '" y="132" width="32" height="30" rx="3" fill="#20303e"/>').join("") +
      '<rect x="48" y="132" width="30" height="58" rx="3" fill="#20303e"/><path d="M40 172h290v8h-290z" fill="' + HRT + '"/><path d="M40 182q150 -6 290 4v4h-290z" fill="#2fa84f"/>' +
      '<rect x="46" y="122" width="150" height="11" rx="2" fill="#111"/><text x="121" y="130.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb84a">107 DENBIGH BLVD</text>' +
      '<circle cx="92" cy="198" r="13" fill="#222"/><circle cx="92" cy="198" r="5" fill="#9aa1a8"/><circle cx="278" cy="198" r="13" fill="#222"/><circle cx="278" cy="198" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="186" r="3.5" fill="#fff6c2"/></g>';
    const stop = '<rect x="352" y="88" width="5" height="122" fill="#6f757b"/><rect x="334" y="70" width="42" height="40" rx="4" fill="#fff" stroke="' + HRT + '" stroke-width="3"/>' +
      '<text x="355" y="86" text-anchor="middle" ' + font + ' font-size="10" fill="' + HRT + '">HRT</text><rect x="338" y="92" width="34" height="13" rx="2" fill="' + HRT + '"/><text x="355" y="102" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">107</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#mg1)"/>' + tree(20, 210, 28, "#3c6f38") + tree(380, 210, 26, "#3c6f38") +
      sign(110, 36, 180, "WARWICK BLVD") + sign(130, 62, 140, "DENBIGH BLVD") +
      '<rect x="0" y="206" width="400" height="54" fill="#55585c"/><path d="M0 230h400" stroke="#f2d04a" stroke-width="3" stroke-dasharray="22 16"/><rect x="0" y="204" width="400" height="4" fill="#cfcac0"/>' +
      stop + bus,
      sky("mg1", "#8fc4e8", "#f7e4c4"));
  }

  /* 2. Woodside High School in Newport News, where Micah Davis became "Masego": the long brick front, the marquee, the flag moving, notes floating out the band-room windows */
  function mgschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#mg2)"/>' + tree(26, 200, 24, "#2f6a35") + tree(374, 200, 24, "#2f6a35") +
      '<rect x="40" y="92" width="320" height="110" fill="#9c4a33"/><rect x="40" y="88" width="320" height="8" fill="#e4ddd0"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (56 + i * 38) + '" y="108" width="26" height="22" fill="#2a3a4a" stroke="#e4ddd0" stroke-width="2"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (56 + i * 38) + '" y="146" width="26" height="22" fill="#2a3a4a" stroke="#e4ddd0" stroke-width="2"/>').join("") +
      '<rect x="168" y="150" width="64" height="52" fill="#e4ddd0"/><rect x="176" y="158" width="22" height="44" fill="#3a4f63"/><rect x="202" y="158" width="22" height="44" fill="#3a4f63"/>' +
      '<rect x="140" y="64" width="120" height="22" fill="#e4ddd0"/><text x="200" y="80" text-anchor="middle" ' + font + ' font-size="13" fill="#1d3557">WOODSIDE HIGH</text>' +
      '<rect x="318" y="20" width="3" height="72" fill="#cfd3d8"/><g class="mg-fl"><rect x="321" y="22" width="34" height="20" fill="#c8102e"/><rect x="321" y="22" width="15" height="10" fill="#1d3557"/>' +
      [26, 30, 34, 38].map(y => '<rect x="336" y="' + y + '" width="19" height="2" fill="#fff"/>').join("") + '</g>' +
      '<rect x="30" y="206" width="110" height="40" rx="3" fill="#1d3557" stroke="#e8c15a" stroke-width="2"/><text x="85" y="222" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BAND CONCERT</text><text x="85" y="236" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">FRIDAY 7 PM</text>' +
      '<rect x="82" y="246" width="6" height="14" fill="#555"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#6e8f4e" opacity=".55"/>' +
      note(80, 118, GOLD, "mg-nt") + note(118, 160, PINK, "mg-nt mg-nt2") + note(98, 140, "#fff", "mg-nt mg-nt3"),
      sky("mg2", "#7fb6e0", "#fde9c8"));
  }

  /* 3. Newport News/Williamsburg International Airport: the control tower, the runway lights, a jet climbing out (Studying Abroad, passport in hand) */
  function mgplane() {
    const jet = '<g class="mg-jet"><path d="M10 40h70q12 0 14 5q-2 5 -14 5h-70q-6 -5 0 -10z" fill="#f4f4f6" stroke="#8d949b" stroke-width="1.5"/><path d="M40 44l-14 22h10l22 -20z" fill="#d9dde2" stroke="#8d949b"/><path d="M40 42l-10 -14h8l18 12z" fill="#d9dde2" stroke="#8d949b"/>' +
      '<path d="M10 40l-6 -14h8l10 14z" fill="' + PINK + '"/>' + Array.from({ length: 7 }, (_, i) => '<circle cx="' + (30 + i * 8) + '" cy="44" r="1.6" fill="#2a3a4a"/>').join("") + '</g>';
    const passport = '<g transform="rotate(-8 330 190)"><rect x="300" y="162" width="58" height="76" rx="5" fill="#1d3a6a" stroke="' + GOLD + '" stroke-width="2"/><circle cx="329" cy="196" r="13" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M316 196h26M329 183v26" stroke="' + GOLD + '" stroke-width="1.2"/><text x="329" y="176" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">PASSPORT</text><text x="329" y="226" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">STUDYING ABROAD</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mg3)"/>' +
      '<rect x="60" y="70" width="14" height="96" fill="#d9d4ca"/><path d="M48 52h38l-4 18h-30z" fill="#2a3a4a" stroke="#d9d4ca" stroke-width="3"/><rect x="62" y="42" width="10" height="10" fill="#d9d4ca"/><circle cx="67" cy="40" r="3" fill="#ff4d4d" class="mg-bc"/>' +
      '<rect x="90" y="126" width="180" height="40" fill="#e9e5dc"/><rect x="90" y="120" width="180" height="8" fill="#7d8790"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (98 + i * 19) + '" y="134" width="14" height="22" fill="#5f8fb4"/>').join("") +
      '<text x="180" y="117" text-anchor="middle" ' + font + ' font-size="9" fill="#1d3557">NEWPORT NEWS / WILLIAMSBURG INTL</text>' +
      '<rect x="0" y="166" width="400" height="94" fill="#5d6a4a"/><path d="M0 210l400 -16v36l-400 18z" fill="#4a4d52"/><path d="M20 220l360 -14" stroke="#fff" stroke-width="3" stroke-dasharray="20 14"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + (20 + i * 38) + '" cy="' + (238 - i * 1.6) + '" r="2.5" fill="#ffd166" class="mg-gl' + (i % 2 ? " mg-gl2" : "") + '"/>').join("") +
      jet + passport,
      sky("mg3", "#f0a6a0", "#fde3b0"));
  }

  /* 4. The church where he learned music (both parents pastors): white chapel with the steeple, stained glass glowing, a gold sax on its stand out front, notes rising */
  function mgchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#mg4)"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (10 + (i * 29) % 90) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<path d="M120 110l80 -50 80 50z" fill="#e9e4da"/><rect x="128" y="110" width="144" height="100" fill="#f4f0e8"/>' +
      '<rect x="186" y="18" width="28" height="52" fill="#f4f0e8"/><path d="M182 20l18 -22 18 22z" fill="#e9e4da"/><rect x="198" y="-6" width="4" height="14" fill="' + GOLD + '"/><rect x="194" y="-2" width="12" height="3" fill="' + GOLD + '"/>' +
      '<g class="mg-gl"><path d="M150 124h26v40h-26z" fill="#c0392b"/><path d="M150 124h13v20h-13z" fill="#2e86de"/><path d="M163 144h13v20h-13z" fill="#f1c40f"/></g>' +
      '<g class="mg-gl mg-gl2"><path d="M224 124h26v40h-26z" fill="#27ae60"/><path d="M224 124h13v20h-13z" fill="#f1c40f"/><path d="M237 144h13v20h-13z" fill="#8e44ad"/></g>' +
      '<circle cx="200" cy="92" r="12" fill="#2e86de" class="mg-gl"/><path d="M200 80v24M188 92h24" stroke="#f4f0e8" stroke-width="2"/>' +
      '<path d="M184 210v-34q16 -14 32 0v34z" fill="#6b3f26"/><rect x="0" y="210" width="400" height="50" fill="#3d4a35"/><path d="M150 260l34 -50h32l34 50z" fill="#9b9488"/>' +
      '<rect x="306" y="196" width="3" height="20" fill="#333"/><path d="M296 216l11 -6 11 6" stroke="#333" stroke-width="2" fill="none"/>' + sax(290, 130, 0.9) +
      note(320, 120, GOLD, "mg-nt") + note(340, 140, PINK, "mg-nt mg-nt2") + note(300, 110, "#fff", "mg-nt mg-nt3"),
      sky("mg4", "#1d1b3a", "#5b3b6b"));
  }

  /* 5. Warwick Blvd and J. Clyde Morris Blvd: green street signs, MASEGO tagged on the wall, the Lions Bridge over Lake Maury at the Mariners' Museum Park behind */
  function mgcorner() {
    const lion = (x) => '<g transform="translate(' + x + ' 92)"><rect x="-10" y="18" width="30" height="16" fill="#bdb6a8"/><path d="M-6 18q0 -14 10 -16q10 -2 12 6l2 10z" fill="#d6cfbf"/><circle cx="2" cy="4" r="8" fill="#c9c1b0"/><path d="M14 16q6 -2 8 2" stroke="#bdb6a8" stroke-width="3" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mg5)"/>' +
      '<rect x="0" y="118" width="400" height="20" fill="#3d6f8f"/><g class="mg-rp"><path d="M0 126q10 -3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#9cc7de" stroke-width="1.5" fill="none"/></g>' +
      '<path d="M40 126v-14h300v14z" fill="#d6cfbf"/><path d="M60 126q20 -18 40 0M120 126q20 -18 40 0M180 126q20 -18 40 0M240 126q20 -18 40 0" fill="#3d6f8f" stroke="#bdb6a8" stroke-width="2"/>' +
      '<rect x="40" y="104" width="300" height="8" fill="#c9c1b0"/>' + lion(52) + lion(236) +
      tree(10, 120, 18, "#2f5a2f") + tree(380, 120, 20, "#2f5a2f") +
      '<rect x="0" y="138" width="400" height="86" fill="#efe6d6"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (150 + i * 11) + 'h400" stroke="#e1d6c2" stroke-width="1"/>').join("") +
      tag("TRAPHOUSE JAZZ", 28, 162, 16, GOLD, -4) + tag("MASEGO", 26, 210, 46, PINK, -6) + tag("LADY LADY", 186, 160, 15, TEAL, -5) + sax(250, 168, 0.5) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="88" width="6" height="136" fill="#2f2f2f"/>' + sign(292, 92, 106, "Warwick Blvd") + sign(282, 118, 116, "J Clyde Morris") +
      '<g class="mg-sp"><circle cx="126" cy="150" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="mg-sp mg-sp2"><circle cx="132" cy="144" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("mg5", "#2c3e70", "#f2a7a0"));
  }

  window.SCENES = { mgbus: mgbus, mgschool: mgschool, mgplane: mgplane, mgchurch: mgchurch, mgcorner: mgcorner };
})();
