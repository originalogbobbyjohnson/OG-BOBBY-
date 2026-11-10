/* kameronmarlowe scenes (Regions: The Carolinas / Genres: country; Kannapolis, Cabarrus County, NC). CSS classes prefixed kmln- (the page's own anim-train is kept).
   Sources: Wikipedia "Kameron Marlowe" (born and raised in Kannapolis NC; grandfather played country radio on hunting and fishing trips; sang in church from age 10, later a worship leader;
   A.L. Brown High School, class of 2015; The Voice season 15, 2018); Independent Tribune (Sept 2018, "Kannapolis native", A.L. Brown grad);
   Wikipedia "Kannapolis station" (201 S Main St, Colonial Revival depot, 2004; Amtrak Piedmont + Carolinian); Wikipedia "A.L. Brown High School" (kelly green and white, the Wonders,
   brick buildings with white trim around a courtyard); NC Research Campus on the old Cannon Mills Plant 1 site downtown (Core Lab = brick, white columns, big dome).
   No logos, no faces. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e8b04a", GREEN = "#1f8a4c", RED = "#b8322a", CREAM = "#f3ead8", BRICK = "#9c4a32";
  const css = '<style>' +
    '@keyframes kmlnglow{0%,100%{opacity:.45}50%{opacity:1}}.kmln-glow{animation:kmlnglow 2.4s ease-in-out infinite}.kmln-g2{animation-delay:-1.2s}' +
    '@keyframes kmlnnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.kmln-nt{animation:kmlnnote 3.2s ease-out infinite}.kmln-nt2{animation-delay:-1.1s}.kmln-nt3{animation-delay:-2.2s}' +
    '@keyframes kmlncloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.kmln-cl{animation:kmlncloud 14s ease-in-out infinite alternate}' +
    '@keyframes kmlnflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.kmln-flag{transform-box:fill-box;transform-origin:0 50%;animation:kmlnflag 1.6s ease-in-out infinite}' +
    '@keyframes kmlnbob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.kmln-bob{animation:kmlnbob 1.8s ease-in-out infinite}' +
    '@keyframes kmlnrip{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.kmln-rip{transform-box:fill-box;transform-origin:50% 50%;animation:kmlnrip 2.4s ease-out infinite}.kmln-r2{animation-delay:-1.2s}' +
    '@keyframes kmlnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kmln-sp{animation:kmlnspray 1.4s ease-out infinite}.kmln-sp2{animation-delay:.45s}' +
    '@keyframes kmlnbird{0%{transform:translateX(0)}100%{transform:translateX(120px)}}.kmln-bird{animation:kmlnbird 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="kmln-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const bricks = (x, y, w, h, c) => { let s = ''; for (let j = 0; j * 7 < h; j++) s += '<path d="M' + x + ' ' + (y + j * 7) + 'h' + w + '" stroke="' + c + '" stroke-width=".7"/>'; return s; };
  const win = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#2c3e50" stroke="#f4f1ea" stroke-width="2"/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + 'M' + x + ' ' + (y + h / 2) + 'h' + w + '" stroke="#f4f1ea" stroke-width="1.2"/>';
  /* the domed Core Lab on the NC Research Campus (old Cannon Mills Plant 1 site) */
  const coreLab = (x, y, s, c, dome) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<rect x="-90" y="0" width="180" height="56" fill="' + c + '"/>' + [-78, -60, -42, 30, 48, 66].map(px => '<rect x="' + px + '" y="12" width="10" height="16" fill="#2c3e50"/><rect x="' + px + '" y="34" width="10" height="16" fill="#2c3e50"/>').join("") +
    '<path d="M-30 4h60l-30 -14z" fill="#f4f1ea"/>' + [-26, -14, -2, 10, 22].map(px => '<rect x="' + px + '" y="4" width="5" height="52" fill="#f4f1ea"/>').join("") +
    '<rect x="-34" y="-22" width="68" height="14" fill="#f4f1ea"/><path d="M-30 -22q30 -48 60 0z" fill="' + dome + '"/><rect x="-3" y="-52" width="6" height="10" fill="#f4f1ea"/></g>';

  /* ROOM 0: Kannapolis station, 201 S Main St, the Colonial Revival depot (2004); the Piedmont pulling in */
  function kmlntrain() {
    return svg(
      '<rect width="400" height="260" fill="url(#kmln1)"/>' +
      '<g class="kmln-cl"><ellipse cx="80" cy="32" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="290" cy="22" rx="46" ry="8" fill="#fff" opacity=".5"/></g>' +
      /* depot: red brick, white trim, hip roof, cupola */
      '<rect x="110" y="70" width="180" height="76" fill="' + BRICK + '"/>' + bricks(110, 70, 180, 76, "#7a3624") +
      '<path d="M100 72l20 -26h160l20 26z" fill="#4a4f55"/><rect x="186" y="28" width="28" height="20" fill="#f4f1ea"/><path d="M182 28l18 -12 18 12z" fill="#4a4f55"/>' +
      '<rect x="106" y="68" width="188" height="5" fill="#f4f1ea"/>' + win(124, 88, 22, 30) + win(160, 88, 22, 30) + win(218, 88, 22, 30) + win(254, 88, 22, 30) +
      '<rect x="190" y="96" width="20" height="50" fill="#f4f1ea"/><rect x="193" y="99" width="14" height="47" fill="#3a2a20"/>' +
      /* black station sign */
      '<rect x="126" y="50" width="148" height="0" fill="none"/>' +
      '<rect x="30" y="120" width="4" height="40" fill="#555"/><rect x="134" y="120" width="4" height="40" fill="#555"/><rect x="18" y="98" width="132" height="28" rx="3" fill="#111"/>' +
      '<text x="84" y="117" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">KANNAPOLIS</text>' +
      '<rect x="20" y="130" width="62" height="14" rx="7" fill="#00205b"/><text x="51" y="140.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">PIEDMONT</text>' +
      '<rect x="86" y="130" width="62" height="14" rx="7" fill="#c8102e"/><text x="117" y="140.5" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">CAROLINIAN</text>' +
      /* platform canopy + platform */
      '<rect x="0" y="146" width="400" height="14" fill="#b8b2a6"/><rect x="0" y="158" width="400" height="4" fill="#e8d24a"/>' +
      '<rect x="0" y="162" width="400" height="98" fill="#5a5048"/>' +
      '<path d="M0 214h400M0 232h400" stroke="#8a8e94" stroke-width="3"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="210" width="8" height="26" fill="#3a2e26"/>').join("") +
      /* the train sliding in: blue + silver with a red stripe */
      '<g class="anim-train"><path d="M20 168h250q34 0 40 22v18h-290z" fill="#00205b"/><rect x="20" y="190" width="290" height="6" fill="#c8102e"/><rect x="20" y="196" width="290" height="6" fill="#c9ccd0"/>' +
      '<path d="M278 172h18q10 2 12 14h-30z" fill="#a8cde0"/>' + [40, 80, 120, 160, 200, 240].map(x => '<rect x="' + x + '" y="174" width="26" height="12" rx="2" fill="#a8cde0"/>').join("") +
      '<circle cx="304" cy="200" r="3" fill="#ffe28a" class="kmln-glow"/>' + [50, 90, 230, 270].map(x => '<circle cx="' + x + '" cy="210" r="7" fill="#1d1d1d"/>').join("") + '</g>',
      sky("kmln1", "#5a9ad8", "#f4e2c0"));
  }

  /* ROOM 1: A.L. Brown High School, home of the Wonders (kelly green and white), brick with white trim around the courtyard; he graduated in 2015 */
  function kmlnschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#kmln2)"/>' +
      '<g class="kmln-cl"><ellipse cx="90" cy="30" rx="38" ry="8" fill="#fff" opacity=".6"/><ellipse cx="300" cy="40" rx="42" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#5f9a46"/>' +
      '<rect x="40" y="70" width="320" height="92" fill="' + BRICK + '"/>' + bricks(40, 70, 320, 92, "#7a3624") +
      '<rect x="34" y="64" width="332" height="8" fill="#f4f1ea"/>' + [56, 92, 128, 244, 280, 316].map(x => win(x, 84, 22, 28) + win(x, 122, 22, 28)).join("") +
      /* white portico */
      '<path d="M156 92h88l-44 -26z" fill="#f4f1ea"/>' + [160, 178, 196, 214, 232].map(x => '<rect x="' + x + '" y="92" width="7" height="70" fill="#f4f1ea"/>').join("") +
      '<rect x="190" y="128" width="20" height="34" fill="#3a2a20"/>' +
      '<text x="200" y="88" text-anchor="middle" ' + font + ' font-size="6.5" fill="#5a4a3a">A.L. BROWN</text>' +
      /* kelly green banner */
      '<rect x="20" y="178" width="170" height="38" rx="4" fill="' + GREEN + '" stroke="#fff" stroke-width="2.5"/><text x="105" y="204" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#fff">WONDERS</text>' +
      '<rect x="356" y="40" width="3" height="122" fill="#ccc"/><g class="kmln-flag"><rect x="359" y="42" width="30" height="18" fill="' + GREEN + '"/><text x="374" y="55" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">AB</text></g>' +
      '<path d="M180 260l14 -98h12l14 98z" fill="#d8d0c2"/>' +
      note(240, 196, GREEN) + note(280, 186, "#fff", "kmln-nt2") + note(320, 200, GREEN, "kmln-nt3"),
      sky("kmln2", "#4a90dc", "#dbeaf6"));
  }

  /* ROOM 2: Granddad's truck at the farm pond before sunup; the country radio playing on hunting and fishing trips */
  function kmlnpond() {
    return svg(
      '<rect width="400" height="260" fill="url(#kmln3)"/>' +
      '<circle cx="300" cy="120" r="24" fill="#ffc27a" opacity=".9"/>' +
      '<path d="M0 132q60 -30 120 -6q60 -26 130 -2q70 -24 150 4v20h-400z" fill="#2f4a36"/>' +
      /* pines */
      Array.from({ length: 12 }, (_, i) => { const x = 10 + i * 34, h = 30 + (i % 3) * 10; return '<path d="M' + x + ' 140l10 -' + h + 'l10 ' + h + 'z" fill="#1e3526"/>'; }).join("") +
      '<rect x="0" y="140" width="400" height="60" fill="#5a7a96"/><rect x="0" y="140" width="400" height="60" fill="url(#kmlnw)" opacity=".6"/>' +
      '<ellipse cx="300" cy="150" rx="30" ry="4" fill="#ffc27a" opacity=".5"/>' +
      '<g class="kmln-rip"><ellipse cx="150" cy="170" rx="14" ry="3" fill="none" stroke="#e8eef4" stroke-width="1.2"/></g><g class="kmln-rip kmln-r2"><ellipse cx="150" cy="170" rx="14" ry="3" fill="none" stroke="#e8eef4" stroke-width="1.2"/></g>' +
      '<g class="kmln-bob"><circle cx="150" cy="168" r="3.5" fill="#d94a3d"/><rect x="146.5" y="168" width="7" height="3" fill="#fff"/></g>' +
      '<path d="M60 206l90 -38" stroke="#3a2a1a" stroke-width="2.4"/><path d="M150 168" stroke="#ddd" stroke-width=".6"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#6a5a3a"/>' +
      /* old pickup with the radio glowing */
      '<path d="M220 214h120v26h-150v-18z" fill="#8a2a22"/><path d="M262 214l10 -24h44l10 24z" fill="#8a2a22"/><path d="M276 194h18v18h-24z" fill="#a8cde0"/><path d="M298 194h14l8 18h-22z" fill="#a8cde0"/>' +
      '<rect x="296" y="220" width="20" height="8" rx="2" fill="#111"/><rect x="299" y="222" width="10" height="4" fill="#ffd27a" class="kmln-glow"/>' +
      [216, 318].map(x => '<circle cx="' + x + '" cy="242" r="11" fill="#1d1d1d"/><circle cx="' + x + '" cy="242" r="4" fill="#9aa"/>').join("") +
      '<rect x="188" y="222" width="36" height="4" fill="#5a4a2a"/>' +
      note(330, 186, GOLD) + note(350, 176, CREAM, "kmln-nt2") + note(370, 190, GOLD, "kmln-nt3") +
      '<g class="kmln-bird"><path d="M20 60q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="1.6" fill="none"/></g>',
      sky("kmln3", "#3a4a7a", "#f2b27a") + '<linearGradient id="kmlnw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffc27a"/><stop offset="1" stop-color="#2a3a4a"/></linearGradient>');
  }

  /* ROOM 3: The little white church where he started singing at 10 and later led worship; stained glass lit, the hymn rising */
  function kmlnchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#kmln4)"/>' +
      '<circle cx="70" cy="50" r="18" fill="#fff6d8" opacity=".85"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + (20 + (i * 53) % 380) + '" cy="' + (16 + (i * 29) % 70) + '" r="1.2" fill="#fff" class="kmln-glow ' + (i % 2 ? "kmln-g2" : "") + '"/>').join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#2f4a2a"/>' +
      /* church */
      '<rect x="130" y="100" width="150" height="82" fill="#f4f1ea"/><path d="M120 104l85 -40 85 40z" fill="#5a5f66"/>' +
      '<rect x="186" y="28" width="38" height="52" fill="#f4f1ea"/><path d="M182 30l23 -16 23 16z" fill="#5a5f66"/><rect x="203" y="0" width="4" height="15" fill="' + GOLD + '"/><rect x="198" y="4" width="14" height="3.5" fill="' + GOLD + '"/>' +
      '<rect x="196" y="40" width="18" height="22" rx="9" fill="#2c3e50"/>' +
      [146, 172, 238, 258].map(x => '<rect x="' + x + '" y="118" width="14" height="30" rx="7" fill="' + GOLD + '" class="kmln-glow"/><path d="M' + (x + 7) + ' 118v30M' + x + ' 132h14" stroke="#b8322a" stroke-width="1.4"/>').join("") +
      '<rect x="194" y="138" width="22" height="44" rx="2" fill="#7a4a2a"/><rect x="194" y="138" width="22" height="44" fill="none" stroke="' + GOLD + '" stroke-width="1"/>' +
      '<path d="M180 260l14 -78h22l14 78z" fill="#b8b0a2"/>' +
      note(170, 98, GOLD) + note(220, 92, CREAM, "kmln-nt2") + note(260, 100, GOLD, "kmln-nt3") +
      '<path d="M20 182q20 -14 40 0M330 182q24 -18 48 0" fill="#1e3526"/>',
      sky("kmln4", "#121a3a", "#3a4a7a"));
  }

  /* ROOM 4: his corner downtown, West Ave and Oak Ave, the domed Core Lab of the NC Research Campus behind */
  function kmlncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kmln5)"/>' +
      coreLab(250, 70, 1, "#a8553a", "#6f9a8a") + '<circle cx="250" cy="20" r="2.4" fill="#ff5a4a" class="kmln-glow"/>' +
      '<rect x="0" y="110" width="150" height="40" fill="#6a5a4a"/>' + [12, 52, 92].map(x => '<rect x="' + x + '" y="120" width="26" height="16" fill="#ffd27a" class="kmln-glow"/>').join("") +
      /* brick wall + tags */
      '<rect x="0" y="150" width="400" height="70" fill="' + BRICK + '"/>' + bricks(0, 150, 400, 70, "#6e3020") +
      tag("KAMERON MARLOWE", 64, 186, 22, GOLD, -4) + tag("KANNAPOLIS", 250, 212, 16, CREAM, -6) + tag("STEADY HEART", 70, 212, 13, "#7fe0a4", -3) +
      '<g class="kmln-sp"><circle cx="270" cy="202" r="2" fill="' + GOLD + '"/><circle cx="276" cy="196" r="1.5" fill="' + GOLD + '"/></g><g class="kmln-sp kmln-sp2"><circle cx="264" cy="208" r="1.5" fill="' + CREAM + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8478"/><path d="M0 222h400" stroke="#b8b0a2" stroke-width="2"/>' +
      '<rect x="44" y="64" width="5" height="158" fill="#6a6e72"/>' + sign(6, 64, 92, "WEST AVE") + sign(14, 90, 86, "OAK AVE"),
      sky("kmln5", "#141a3a", "#e8884a"));
  }

  window.SCENES = { kmlntrain: kmlntrain, kmlnschool: kmlnschool, kmlnpond: kmlnpond, kmlnchurch: kmlnchurch, kmlncorner: kmlncorner };
})();
