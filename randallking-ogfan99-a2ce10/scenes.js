/* randallking scenes (Regions: Houston + Texas / Genres: country; Hereford, Deaf Smith County, Texas Panhandle). CSS classes prefixed rkg- (the page's own anim-train is kept).
   Sources: Wikitia "Randall King (singer)" (born and raised in Hereford TX; father a truck driver; moved to Lubbock 2009 for Texas Tech, then South Plains College (Levelland) for music production);
   TexasCourthouses.com + KFDA NewsChannel 10 (Deaf Smith County Courthouse, 1910, Classical Revival, four stories, Georgia marble veneer, portico with plain columns under a pediment, the only all-marble courthouse in Texas);
   Hereford = "Beef Capital of the World" (feedyards, grain elevators) on US 60 / US 385. Hereford has no rail or city bus, so room 1 is the road in on US 60.
   No logos, no faces. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#f0c75e", BLUE = "#2f6fb0", RED = "#d94a3d", CREAM = "#f3ead8", MARBLE = "#e9e4da";
  const css = '<style>' +
    '@keyframes rkgglow{0%,100%{opacity:.45}50%{opacity:1}}.rkg-glow{animation:rkgglow 2.4s ease-in-out infinite}.rkg-g2{animation-delay:-1.2s}' +
    '@keyframes rkgnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.rkg-nt{animation:rkgnote 3.2s ease-out infinite}.rkg-nt2{animation-delay:-1.1s}.rkg-nt3{animation-delay:-2.2s}' +
    '@keyframes rkgcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.rkg-cl{animation:rkgcloud 14s ease-in-out infinite alternate}' +
    '@keyframes rkgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rkg-spin{transform-box:fill-box;transform-origin:50% 50%;animation:rkgspin 4s linear infinite}' +
    '@keyframes rkgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.rkg-flag{transform-box:fill-box;transform-origin:0 50%;animation:rkgflag 1.6s ease-in-out infinite}' +
    '@keyframes rkgmoo{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.rkg-moo{animation:rkgmoo 1.8s ease-in-out infinite}.rkg-m2{animation-delay:-.9s}' +
    '@keyframes rkgdust{0%{transform:translateX(0);opacity:.6}100%{transform:translateX(-40px);opacity:0}}.rkg-dust{animation:rkgdust 2s ease-out infinite}' +
    '@keyframes rkgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rkg-sp{animation:rkgspray 1.4s ease-out infinite}.rkg-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="rkg-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* concrete grain elevator row (the Panhandle skyline) */
  const elevators = (x, y, n, w, h, c, sh) => { let s = ''; for (let i = 0; i < n; i++) s += '<rect x="' + (x + i * w) + '" y="' + y + '" width="' + (w - 2) + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x + i * w + w - 6) + '" y="' + y + '" width="4" height="' + h + '" fill="' + sh + '"/>'; return s + '<rect x="' + (x + w * n * .35) + '" y="' + (y - h * .35) + '" width="' + (w * 1.4) + '" height="' + (h * .36) + '" fill="' + c + '"/>'; };
  const cow = (x, y, c, cls) => '<g class="rkg-moo ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="13" ry="7" fill="' + c + '"/><rect x="' + (x + 9) + '" y="' + (y - 9) + '" width="9" height="8" rx="3" fill="' + c + '"/><rect x="' + (x + 11) + '" y="' + (y - 7) + '" width="5" height="5" rx="2" fill="#f4f0e6"/>' +
    '<rect x="' + (x - 10) + '" y="' + (y + 5) + '" width="3" height="7" fill="' + c + '"/><rect x="' + (x + 6) + '" y="' + (y + 5) + '" width="3" height="7" fill="' + c + '"/></g>';
  const shield = (x, y, num) => '<path d="M' + x + ' ' + y + 'h40v18q0 18 -20 25q-20 -7 -20 -25z" fill="#fff" stroke="#111" stroke-width="2"/><path d="M' + (x + 4) + ' ' + (y + 4) + 'h32v14q0 14 -16 20q-16 -6 -16 -20z" fill="none" stroke="#111" stroke-width="1.4"/><text x="' + (x + 20) + '" y="' + (y + 25) + '" text-anchor="middle" ' + font + ' font-size="17" fill="#111">' + num + '</text>';

  /* ROOM 0: US 60 rolling into Hereford, the 18-wheeler (his dad drove a truck) pulling in, grain elevators on the flat horizon */
  function rkgroad() {
    return svg(
      '<rect width="400" height="260" fill="url(#rkg1)"/>' +
      '<g class="rkg-cl"><ellipse cx="80" cy="36" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="280" cy="24" rx="46" ry="8" fill="#fff" opacity=".5"/></g>' +
      elevators(250, 104, 6, 18, 44, "#d8d2c4", "#b0a898") +
      '<rect x="0" y="146" width="400" height="114" fill="#c2a86a"/><path d="M0 146h400" stroke="#a88c52" stroke-width="2"/>' +
      '<path d="M0 260L176 154h48L400 260z" fill="#3e3e40"/><path d="M200 154v106" stroke="#f2d04a" stroke-width="3" stroke-dasharray="12 10"/><path d="M0 260L176 154M400 260L224 154" stroke="#f4f4f2" stroke-width="2"/>' +
      /* green guide sign */
      '<rect x="40" y="96" width="5" height="64" fill="#6a6e72"/><rect x="150" y="96" width="5" height="64" fill="#6a6e72"/>' +
      '<rect x="22" y="56" width="152" height="54" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="98" y="80" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">Hereford</text>' +
      '<text x="98" y="100" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">DEAF SMITH COUNTY</text>' +
      '<rect x="203" y="80" width="4" height="74" fill="#6a6e72"/>' + shield(185, 36, "60") +
      /* 18-wheeler sliding in */
      '<g class="anim-train"><rect x="40" y="176" width="180" height="48" rx="3" fill="#f3ead8" stroke="#2a2a2a" stroke-width="2"/><rect x="40" y="210" width="180" height="5" fill="' + RED + '"/>' +
      '<path d="M222 186h34q10 0 14 10l8 14v14h-56z" fill="' + BLUE + '" stroke="#1a2a3a" stroke-width="2"/><path d="M246 190h12q6 0 9 8l3 6h-24z" fill="#a8cde0"/><rect x="226" y="168" width="5" height="22" fill="#8a8e94"/>' +
      [70, 92, 190, 244, 266].map(x => '<circle cx="' + x + '" cy="228" r="9" fill="#1d1d1d"/><circle cx="' + x + '" cy="228" r="3.5" fill="#9aa"/>').join("") +
      '<circle cx="276" cy="214" r="3" fill="#ffe28a" class="rkg-glow"/><g class="rkg-dust"><circle cx="30" cy="226" r="6" fill="#d8c08a"/><circle cx="20" cy="220" r="4" fill="#d8c08a"/></g></g>',
      sky("rkg1", "#4f8fd8", "#f6dcb0"));
  }

  /* ROOM 1: the Beef Capital of the World, a Hereford feedyard at sundown, the windmill turning */
  function rkgfeed() {
    let cows = ''; for (let i = 0; i < 10; i++) cows += cow(26 + i * 38, 196 + (i % 3) * 10, ["#6a3a24", "#2a1d14", "#8a5a34"][i % 3], i % 2 ? "rkg-m2" : "");
    return svg(
      '<rect width="400" height="260" fill="url(#rkg2)"/>' +
      '<circle cx="80" cy="110" r="26" fill="#ffb86a" opacity=".85"/>' +
      elevators(220, 96, 5, 20, 54, "#cfc6b4", "#a89e8a") +
      '<rect x="0" y="150" width="400" height="110" fill="#a88a5a"/>' +
      /* windmill */
      '<path d="M150 150l10 -86h6l10 86z" fill="none" stroke="#5a5a5a" stroke-width="2.5"/><path d="M154 120h18M157 96h12" stroke="#5a5a5a" stroke-width="2"/>' +
      '<g class="rkg-spin">' + Array.from({ length: 12 }, (_, i) => '<rect x="161.5" y="40" width="3" height="22" fill="#d8d8d2" transform="rotate(' + (i * 30) + ' 163 62)"/>').join("") + '<circle cx="163" cy="62" r="4" fill="#5a5a5a"/></g>' +
      '<path d="M166 62h22l-4 6h-18z" fill="#8a8e94"/>' +
      /* sign */
      '<rect x="262" y="160" width="4" height="26" fill="#5a3a22"/><rect x="364" y="160" width="4" height="26" fill="#5a3a22"/><rect x="250" y="130" width="130" height="34" rx="3" fill="#5a3a22" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="315" y="145" text-anchor="middle" ' + font + ' font-size="9" fill="' + CREAM + '">BEEF CAPITAL</text><text x="315" y="158" text-anchor="middle" ' + font + ' font-size="9" fill="' + CREAM + '">OF THE WORLD</text>' +
      /* pens: pipe fence */
      cows + '<path d="M0 182h400M0 196h400M0 232h400" stroke="#d8d2c4" stroke-width="2.5"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (i * 40) + '" y="176" width="3" height="64" fill="#d8d2c4"/>').join(""),
      sky("rkg2", "#2a3a6a", "#f2a868"));
  }

  /* ROOM 2: South Plains College in Levelland, where he studied music production; the studio light on, the Texas flag flying */
  function rkgspc() {
    return svg(
      '<rect width="400" height="260" fill="url(#rkg3)"/>' +
      '<g class="rkg-cl"><ellipse cx="90" cy="30" rx="38" ry="8" fill="#fff" opacity=".6"/><ellipse cx="300" cy="40" rx="42" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#7a9a54"/>' +
      /* campus building: tan brick, long windows */
      '<rect x="60" y="74" width="280" height="80" fill="#c9a77a"/><rect x="54" y="68" width="292" height="8" fill="#e8dcc4"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (74 + i * 30) + '" y="86" width="18" height="24" fill="#2a3a4a"/><rect x="' + (74 + i * 30) + '" y="118" width="18" height="24" fill="#2a3a4a"/>').join("") +
      '<rect x="164" y="118" width="18" height="24" fill="' + GOLD + '" class="rkg-glow"/><rect x="194" y="118" width="18" height="24" fill="' + GOLD + '" class="rkg-glow rkg-g2"/>' +
      '<rect x="182" y="124" width="36" height="30" fill="#5a3a22"/>' +
      /* Texas flag */
      '<rect x="356" y="40" width="3" height="114" fill="#ccc"/><g class="rkg-flag"><rect x="359" y="42" width="14" height="24" fill="#002868"/><rect x="373" y="42" width="24" height="12" fill="#fff"/><rect x="373" y="54" width="24" height="12" fill="#bf0a30"/>' +
      '<path d="M366 48l1.6 4h4l-3.2 2.4 1.2 4-3.6-2.6-3.6 2.6 1.2-4-3.2-2.4h4z" fill="#fff"/></g>' +
      /* monument sign */
      '<rect x="20" y="176" width="190" height="34" rx="3" fill="' + BLUE + '" stroke="#fff" stroke-width="2"/><text x="115" y="198" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">SOUTH PLAINS COLLEGE</text>' +
      '<rect x="14" y="210" width="202" height="8" fill="#b8b0a2"/>' +
      '<path d="M200 260l14 -106h12l60 106z" fill="#c8c0aa"/>' +
      note(170, 104, BLUE) + note(214, 98, GOLD, "rkg-nt2") + note(250, 110, BLUE, "rkg-nt3"),
      sky("rkg3", "#3f86d6", "#e8eef4"));
  }

  /* ROOM 3: the Deaf Smith County Courthouse (1910), the only all-marble courthouse in Texas, plain columns under the pediment */
  function rkgcourt() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (150 + i * 20) + '" y="96" width="9" height="66" fill="#f6f3ec" stroke="#c8c0b0" stroke-width=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rkg4)"/>' +
      '<g class="rkg-cl"><ellipse cx="70" cy="26" rx="38" ry="8" fill="#fff" opacity=".6"/></g>' +
      '<rect x="0" y="182" width="400" height="78" fill="#6f8f4a"/>' +
      /* four-story marble block */
      '<rect x="70" y="56" width="260" height="126" fill="' + MARBLE + '" stroke="#bdb5a6" stroke-width="1.5"/><rect x="64" y="50" width="272" height="8" fill="#d8d0c2"/>' +
      [62, 90, 118, 146].map(y => [80, 100, 120, 270, 290, 310].map(x => '<rect x="' + x + '" y="' + y + '" width="10" height="18" fill="#3a4a5a"/>').join("")).join("") +
      /* portico */
      '<path d="M140 96h120l-60 -26z" fill="#f2eee6" stroke="#bdb5a6" stroke-width="1.5"/><rect x="140" y="92" width="120" height="6" fill="#d8d0c2"/>' + cols +
      '<rect x="134" y="162" width="132" height="8" fill="#d8d0c2"/><rect x="128" y="170" width="144" height="6" fill="#cfc6b6"/><rect x="122" y="176" width="156" height="6" fill="#c6bcaa"/>' +
      '<rect x="190" y="132" width="20" height="30" fill="#5a3a22"/>' +
      '<text x="200" y="88" text-anchor="middle" ' + font + ' font-size="6" fill="#6a6258">COURTHOUSE</text>' +
      /* flags on the lawn */
      '<rect x="40" y="110" width="3" height="76" fill="#ccc"/><g class="rkg-flag"><rect x="43" y="112" width="30" height="18" fill="#bf0a30"/>' + [0, 1, 2].map(i => '<rect x="43" y="' + (114 + i * 5.5) + '" width="30" height="2.6" fill="#fff"/>').join("") + '<rect x="43" y="112" width="13" height="10" fill="#002868"/></g>' +
      '<rect x="356" y="110" width="3" height="76" fill="#ccc"/><g class="rkg-flag"><rect x="359" y="112" width="10" height="18" fill="#002868"/><rect x="369" y="112" width="20" height="9" fill="#fff"/><rect x="369" y="121" width="20" height="9" fill="#bf0a30"/></g>' +
      '<path d="M170 260l20 -78h20l20 78z" fill="#d8d0c2"/>',
      sky("rkg4", "#4a90dc", "#dbeaf6"));
  }

  /* ROOM 4: his corner in Hereford, Main St and 3rd St downtown, the grain elevators behind */
  function rkgcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rkg5)"/>' +
      elevators(210, 60, 8, 22, 92, "#cfc6b4", "#9a907c") + '<circle cx="290" cy="34" r="2.4" fill="#ff5a4a" class="rkg-glow"/>' +
      '<rect x="0" y="118" width="190" height="34" fill="#6a5a4a"/>' +
      /* brick wall + tags */
      '<rect x="0" y="150" width="400" height="70" fill="#a85a3a"/>' + Array.from({ length: 9 }, (_, j) => '<path d="M0 ' + (150 + j * 8) + 'h400" stroke="#7a3a24" stroke-width=".8"/>').join("") +
      tag("RANDALL KING", 64, 200, 28, GOLD, -5) + tag("HEREFORD", 310, 178, 16, CREAM, -8) + tag("HONKY TONK", 296, 210, 14, "#7fc4ff", -3) +
      '<g class="rkg-sp"><circle cx="276" cy="202" r="2" fill="' + GOLD + '"/><circle cx="282" cy="196" r="1.5" fill="' + GOLD + '"/></g><g class="rkg-sp rkg-sp2"><circle cx="270" cy="208" r="1.5" fill="' + CREAM + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8478"/><path d="M0 222h400" stroke="#b8b0a2" stroke-width="2"/>' +
      '<rect x="44" y="70" width="5" height="152" fill="#6a6e72"/>' + sign(8, 70, 100, "MAIN ST") + sign(18, 96, 90, "3RD ST"),
      sky("rkg5", "#141a3a", "#e8884a"));
  }

  window.SCENES = { rkgroad: rkgroad, rkgfeed: rkgfeed, rkgspc: rkgspc, rkgcourt: rkgcourt, rkgcorner: rkgcorner };
})();
