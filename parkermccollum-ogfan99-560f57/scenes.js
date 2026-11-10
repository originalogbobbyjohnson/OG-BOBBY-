/* parkermccollum scenes (Regions: Houston + Texas / Genres: country; Conroe, Montgomery County, TX). CSS classes prefixed pkmc- (the page's own anim-train is kept).
   Sources: Wikipedia "Parker McCollum" (born 1992 and raised in Conroe; worked summers on grandfather Bobby Yancey's cattle ranches in Houston and Limestone Counties,
   hence "The Limestone Kid"; The Woodlands College Park High; moved to Austin; own label PYM Music, MCA Nashville 2019); Community Impact (Conroe Connection city buses,
   transfer center at Booker T. Washington Park); "Young Man's Blues" (County Road 2854; FM 2854 runs west out of Conroe from Loop 336).
   Montgomery County Courthouse in downtown Conroe (1936, buff stone, Moderne). Lake Conroe on the West Fork of the San Jacinto. No logos, no faces. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#d4a24a", BLUE = "#3a6ea5", CREAM = "#f3ead8", RED = "#b8322a", BUFF = "#d9c6a0";
  const css = '<style>' +
    '@keyframes pkmcglow{0%,100%{opacity:.45}50%{opacity:1}}.pkmc-glow{animation:pkmcglow 2.4s ease-in-out infinite}.pkmc-g2{animation-delay:-1.2s}' +
    '@keyframes pkmcnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.pkmc-nt{animation:pkmcnote 3.2s ease-out infinite}.pkmc-nt2{animation-delay:-1.1s}' +
    '@keyframes pkmccloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.pkmc-cl{animation:pkmccloud 14s ease-in-out infinite alternate}' +
    '@keyframes pkmcflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.pkmc-flag{transform-box:fill-box;transform-origin:0 50%;animation:pkmcflag 1.6s ease-in-out infinite}' +
    '@keyframes pkmcspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.pkmc-spin{transform-box:fill-box;transform-origin:50% 50%;animation:pkmcspin 6s linear infinite}' +
    '@keyframes pkmcboat{0%{transform:translateX(0)}100%{transform:translateX(150px)}}.pkmc-boat{animation:pkmcboat 12s ease-in-out infinite alternate}' +
    '@keyframes pkmcrip{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.pkmc-rip{transform-box:fill-box;transform-origin:50% 50%;animation:pkmcrip 2.4s ease-out infinite}.pkmc-r2{animation-delay:-1.2s}' +
    '@keyframes pkmcgraze{0%,100%{transform:rotate(0)}50%{transform:rotate(8deg)}}.pkmc-graze{transform-box:fill-box;transform-origin:100% 0;animation:pkmcgraze 2.6s ease-in-out infinite}' +
    '@keyframes pkmcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pkmc-sp{animation:pkmcspray 1.4s ease-out infinite}.pkmc-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, c) => { let s = ''; for (let j = 0; j * 7 < h; j++) s += '<path d="M' + x + ' ' + (y + j * 7) + 'h' + w + '" stroke="' + c + '" stroke-width=".7"/>'; return s; };
  const pine = (x, y, h, c) => '<path d="M' + x + ' ' + (y - h) + 'l-' + (h * .22) + ' ' + (h * .45) + 'h' + (h * .1) + 'l-' + (h * .16) + ' ' + (h * .35) + 'h' + (h * .56) + 'l-' + (h * .16) + ' -' + (h * .35) + 'h' + (h * .1) + 'z" fill="' + c + '"/><rect x="' + (x - 2) + '" y="' + (y - h * .2) + '" width="4" height="' + (h * .2) + '" fill="#4a3424"/>';
  const pines = (y, c) => Array.from({ length: 22 }, (_, i) => pine(i * 19 + 4, y + (i % 3) * 3, 40 + (i * 7) % 18, c)).join("");

  /* ROOM 0: a Conroe Connection city bus pulling into the transfer center at Booker T. Washington Park */
  function pkmctrain() {
    return svg(
      '<rect width="400" height="260" fill="url(#pkmc1)"/>' +
      '<g class="pkmc-cl"><ellipse cx="80" cy="30" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="46" ry="8" fill="#fff" opacity=".5"/></g>' +
      pines(150, "#2f5a34") +
      /* shelter */
      '<rect x="210" y="96" width="160" height="8" fill="#5a6066"/><path d="M204 96h172l-10 -12h-152z" fill="' + BLUE + '"/>' + [216, 290, 362].map(x => '<rect x="' + x + '" y="104" width="4" height="48" fill="#5a6066"/>').join("") +
      '<rect x="230" y="128" width="110" height="6" fill="#8a6a4a"/><rect x="232" y="134" width="4" height="16" fill="#5a6066"/><rect x="334" y="134" width="4" height="16" fill="#5a6066"/>' +
      /* black stop sign with the route bullet */
      '<rect x="30" y="120" width="4" height="40" fill="#555"/><rect x="134" y="120" width="4" height="40" fill="#555"/><rect x="14" y="96" width="140" height="30" rx="3" fill="#111"/>' +
      '<text x="84" y="110" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">TRANSFER CENTER</text><text x="84" y="121" text-anchor="middle" ' + font + ' font-size="8" fill="#d8d8d8">B.T. WASHINGTON PARK</text>' +
      '<rect x="24" y="130" width="120" height="14" rx="7" fill="' + BLUE + '"/><text x="84" y="140.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">CONROE CONNECTION</text>' +
      /* curb + road */
      '<rect x="0" y="150" width="400" height="10" fill="#b8b2a6"/><rect x="0" y="160" width="400" height="100" fill="#4a4a4e"/>' +
      '<path d="M0 236h400" stroke="#e8d24a" stroke-width="3" stroke-dasharray="22 16"/>' +
      /* the bus sliding in */
      '<g class="anim-train"><rect x="20" y="160" width="270" height="54" rx="8" fill="#f4f1ea"/><rect x="20" y="196" width="270" height="8" fill="' + BLUE + '"/><rect x="20" y="204" width="270" height="4" fill="' + GOLD + '"/>' +
      [34, 74, 114, 154, 194, 234].map(x => '<rect x="' + x + '" y="168" width="32" height="22" rx="2" fill="#7aa8c8"/>').join("") +
      '<rect x="272" y="168" width="16" height="30" rx="2" fill="#7aa8c8"/><rect x="230" y="162" width="56" height="6" rx="2" fill="#111"/><text x="258" y="167" text-anchor="middle" ' + font + ' font-size="4.6" fill="#ffb84a">DOWNTOWN</text>' +
      '<circle cx="286" cy="206" r="3" fill="#ffe28a" class="pkmc-glow"/>' + [60, 240].map(x => '<circle cx="' + x + '" cy="214" r="10" fill="#1d1d1d"/><circle cx="' + x + '" cy="214" r="4" fill="#888"/>').join("") + '</g>',
      sky("pkmc1", "#5a9ad8", "#f4e2c0"));
  }

  /* ROOM 1: the Montgomery County Courthouse in downtown Conroe (1936), buff stone, tall Moderne center block, flags out front */
  function pkmccourt() {
    return svg(
      '<rect width="400" height="260" fill="url(#pkmc2)"/>' +
      '<g class="pkmc-cl"><ellipse cx="90" cy="30" rx="38" ry="8" fill="#fff" opacity=".6"/><ellipse cx="310" cy="40" rx="42" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#6a9a4a"/>' +
      /* wings + center tower block */
      '<rect x="50" y="96" width="300" height="82" fill="' + BUFF + '"/><rect x="140" y="56" width="120" height="122" fill="#e2d2b0"/><rect x="150" y="46" width="100" height="12" fill="#e2d2b0"/>' +
      '<path d="M50 96h300" stroke="#b8a47a" stroke-width="3"/>' +
      [62, 86, 110, 290, 314].map(x => '<rect x="' + x + '" y="108" width="14" height="22" fill="#3a4a5a"/><rect x="' + x + '" y="140" width="14" height="22" fill="#3a4a5a"/>').join("") +
      /* tall vertical windows between stone piers */
      [156, 180, 204, 228].map(x => '<rect x="' + x + '" y="68" width="14" height="70" fill="#3a4a5a"/>').join("") +
      '<rect x="146" y="60" width="108" height="4" fill="#b8a47a"/>' +
      '<text x="200" y="152" text-anchor="middle" ' + font + ' font-size="7" fill="#6a5a3a" letter-spacing="1">MONTGOMERY COUNTY</text>' +
      '<rect x="180" y="156" width="40" height="22" fill="#4a3a2a"/><path d="M168 178h64v8h-64z" fill="#c8b890"/>' +
      /* flags */
      '<rect x="30" y="60" width="3" height="118" fill="#ccc"/><g class="pkmc-flag"><rect x="33" y="62" width="34" height="20" fill="#fff"/><rect x="33" y="72" width="34" height="10" fill="' + RED + '"/><rect x="33" y="62" width="12" height="20" fill="#1a3a8a"/><circle cx="39" cy="72" r="2.6" fill="#fff"/></g>' +
      '<path d="M176 260l12 -74h24l12 74z" fill="#d8d0c2"/>' + [100, 300].map(x => '<circle cx="' + x + '" cy="186" r="14" fill="#3f7a3a"/>').join(""),
      sky("pkmc2", "#4a90dc", "#dbeaf6"));
  }

  /* ROOM 2: Lake Conroe at sundown, pines on the far shore, a boat crossing */
  function pkmclake() {
    return svg(
      '<rect width="400" height="260" fill="url(#pkmc3)"/>' +
      '<circle cx="290" cy="128" r="30" fill="#ffcf7a"/>' +
      pines(136, "#1f3a2a") +
      '<rect x="0" y="134" width="400" height="126" fill="#3a5a7a"/>' +
      '<path d="M240 146h100M250 160h80M262 176h56M272 194h36" stroke="#ffcf7a" stroke-width="3" opacity=".6"/>' +
      /* dock */
      '<rect x="20" y="196" width="150" height="10" fill="#8a6a4a"/>' + [30, 70, 110, 150].map(x => '<rect x="' + x + '" y="206" width="5" height="30" fill="#5a4030"/>').join("") +
      '<rect x="120" y="166" width="4" height="30" fill="#5a4030"/>' +
      /* guitar case + boots on the dock */
      '<path d="M54 188q-2 -16 10 -16h40q12 0 10 16z" fill="#2a1d14"/><rect x="132" y="180" width="8" height="16" fill="#7a4a2a"/><rect x="132" y="192" width="14" height="5" fill="#7a4a2a"/>' +
      /* boat */
      '<g class="pkmc-boat"><path d="M150 150h60l-8 10h-46z" fill="#f4f1ea"/><rect x="168" y="142" width="20" height="8" fill="' + BLUE + '"/><path d="M146 162q30 4 60 0" stroke="#c8d4dc" stroke-width="1.4" fill="none"/></g>' +
      '<ellipse cx="300" cy="220" rx="20" ry="4" fill="none" stroke="#c8d4dc" class="pkmc-rip"/><ellipse cx="240" cy="236" rx="18" ry="3" fill="none" stroke="#c8d4dc" class="pkmc-rip pkmc-r2"/>',
      sky("pkmc3", "#2a3a6a", "#f0a06a"));
  }

  /* ROOM 3: grandpa's cattle ranch in Limestone County, where he got "The Limestone Kid"; windmill turning, a cow grazing */
  function pkmcranch() {
    const blades = Array.from({ length: 12 }, (_, i) => '<path d="M0 0L' + (24 * Math.cos(i * Math.PI / 6)).toFixed(1) + ' ' + (24 * Math.sin(i * Math.PI / 6)).toFixed(1) + '" stroke="#c9ccd0" stroke-width="4"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pkmc4)"/>' +
      '<g class="pkmc-cl"><ellipse cx="70" cy="34" rx="38" ry="8" fill="#fff" opacity=".6"/></g>' +
      '<path d="M0 150q100 -16 200 -4q100 -14 200 2V260H0z" fill="#b8a45a"/><path d="M0 176q120 -12 240 0q80 6 160 -4V260H0z" fill="#9a8a42"/>' +
      /* windmill */
      '<path d="M300 160l14 -100h4l14 100z" fill="none" stroke="#7a7e84" stroke-width="3"/><path d="M304 130h24M308 100h16" stroke="#7a7e84" stroke-width="2"/>' +
      '<g transform="translate(316 58)"><g class="pkmc-spin">' + blades + '<circle r="5" fill="#7a7e84"/></g></g><path d="M318 58l26 4 -2 6z" fill="#c9ccd0"/>' +
      /* barbed wire fence */
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44 + 6) + '" y="176" width="5" height="40" fill="#6a4a2a"/>').join("") + '<path d="M0 186h400M0 200h400" stroke="#555" stroke-width="1.2"/>' +
      /* ranch gate sign (letters only) */
      '<rect x="40" y="110" width="6" height="70" fill="#5a3a22"/><rect x="150" y="110" width="6" height="70" fill="#5a3a22"/><rect x="34" y="104" width="128" height="8" fill="#5a3a22"/>' +
      '<rect x="46" y="114" width="104" height="18" fill="#2a1d14"/><text x="98" y="127" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="' + GOLD + '">LIMESTONE CO.</text>' +
      /* cow grazing */
      '<g transform="translate(190 200)"><rect x="0" y="-22" width="44" height="22" rx="8" fill="#6a3a22"/><rect x="4" y="0" width="5" height="14" fill="#4a2a18"/><rect x="34" y="0" width="5" height="14" fill="#4a2a18"/>' +
      '<g class="pkmc-graze"><rect x="-14" y="-18" width="16" height="12" rx="4" fill="#6a3a22"/><rect x="-14" y="-10" width="8" height="5" fill="#f0e6d6"/></g><path d="M44 -18q8 4 4 14" stroke="#4a2a18" stroke-width="2" fill="none"/></g>',
      sky("pkmc4", "#5a9ad8", "#f4e2c0"));
  }

  /* ROOM 4: FM 2854 at Loop 336 on the west side of Conroe ("County Road 2854" in Young Man's Blues); pines and the water tower behind */
  function pkmccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pkmc5)"/>' +
      pines(120, "#2f4a34") +
      /* water tower */
      '<rect x="300" y="60" width="4" height="70" fill="#9aa2a8"/><rect x="336" y="60" width="4" height="70" fill="#9aa2a8"/><path d="M300 90l40 -20M300 70l40 20" stroke="#9aa2a8" stroke-width="1.5"/>' +
      '<ellipse cx="320" cy="52" rx="34" ry="18" fill="#dfe4e8"/><text x="320" y="56" text-anchor="middle" ' + font + ' font-size="9" fill="' + BLUE + '">CONROE</text>' +
      /* wall with the tags */
      '<rect x="0" y="130" width="400" height="92" fill="#7a5a44"/>' + bricks(0, 130, 400, 92, "#5a4030") +
      tag("PARKER", 150, 176, 32, GOLD, -5) + tag("McCOLLUM", 160, 208, 26, CREAM, -4) + tag("LIMESTONE KID", 288, 158, 13, "#8ab4e0", 4) +
      '<g class="pkmc-sp"><circle cx="356" cy="196" r="2" fill="' + GOLD + '"/><circle cx="362" cy="190" r="1.5" fill="' + GOLD + '"/></g><g class="pkmc-sp pkmc-sp2"><circle cx="350" cy="206" r="1.5" fill="' + CREAM + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8478"/><path d="M0 222h400" stroke="#b8b0a2" stroke-width="2"/>' +
      '<rect x="44" y="64" width="5" height="158" fill="#6a6e72"/>' + sign(6, 64, 88, "FM 2854") + sign(10, 90, 84, "LOOP 336"),
      sky("pkmc5", "#2a3a6a", "#e8884a"));
  }

  window.SCENES = { pkmctrain: pkmctrain, pkmccourt: pkmccourt, pkmclake: pkmclake, pkmcranch: pkmcranch, pkmccorner: pkmccorner };
})();
