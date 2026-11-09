/* willienelson scenes (Regions tab: Houston + Texas; Abbott, Hill County, Texas, just east of I-35). CSS classes prefixed wn- (the page's own anim-train is kept).
   1 I-35 north to Abbott: a pickup rolling past the green ABBOTT sign and the red-white-blue Interstate 35 shield, a windmill turning on the prairie.
   2 Abbott United Methodist Church: the little white frame church where he sang as a boy, the bell swinging in the steeple, a mesquite tree.
   3 Luckenbach: the weathered dance hall with its tin roof, string lights twinkling, the Texas flag waving.
   4 On the road again: the tour bus rolling down a Hill Country highway at sunset, wheels spinning.
   5 Willie Nelson Blvd and Lavaca St in Austin: green signs, WILLIE tagged on a brick wall, the pink granite Texas Capitol dome behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wnspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.wn-spin{transform-box:fill-box;transform-origin:50% 50%;animation:wnspin 3s linear infinite}.wn-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:wnspin .8s linear infinite}' +
    '@keyframes wnswing{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.wn-bell{transform-box:fill-box;transform-origin:50% 0;animation:wnswing 1.6s ease-in-out infinite}' +
    '@keyframes wncloud{0%{transform:translateX(-30px)}100%{transform:translateX(50px)}}.wn-cloud{animation:wncloud 12s ease-in-out infinite alternate}' +
    '@keyframes wnglow{0%,100%{opacity:.35}50%{opacity:1}}.wn-gl{animation:wnglow 1.4s ease-in-out infinite}.wn-gl2{animation-delay:-.5s}.wn-gl3{animation-delay:-1s}' +
    '@keyframes wnwave{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.wn-wave{transform-box:fill-box;transform-origin:0 50%;animation:wnwave 1.6s ease-in-out infinite}' +
    '@keyframes wndash{from{transform:translateX(0)}to{transform:translateX(-44px)}}.wn-dash{animation:wndash .6s linear infinite}' +
    '@keyframes wnbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.5px)}}.wn-bob{animation:wnbob .5s ease-in-out infinite}' +
    '@keyframes wnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wn-sp{animation:wnspray 1.4s ease-out infinite}.wn-sp2{animation-delay:.45s}' +
    '@keyframes wnfly{0%{transform:translate(0,0)}100%{transform:translate(420px,-24px)}}.wn-fly{animation:wnfly 13s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const RED = "#d9562b", GOLD = "#e8b84a", TEAL = "#3fb6a8";
  const cloud = (x, y, s) => '<g class="wn-cloud"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".9"><ellipse cx="0" cy="0" rx="26" ry="10"/><ellipse cx="18" cy="-6" rx="18" ry="11"/><ellipse cx="-16" cy="-4" rx="14" ry="8"/></g></g>';
  const mesquite = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-2 0q-2 -20 -12 -30M0 0q2 -24 14 -34M0 -14q-4 -10 2 -22" stroke="#4e3a26" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="-14" cy="-36" rx="20" ry="10" fill="#5c7a3a"/><ellipse cx="14" cy="-40" rx="22" ry="11" fill="#6a8a42"/><ellipse cx="2" cy="-48" rx="16" ry="8" fill="#5c7a3a"/></g>';
  const truck = (body) => '<g><path d="M0 24v-14q0 -4 4 -4h40l14 -14h30q6 0 8 6l8 14q4 0 4 6v10z" fill="' + body + '" stroke="#222" stroke-width="1.5"/><path d="M62 4h22l6 12h-28z" fill="#9fc6e0"/>' +
    '<circle cx="22" cy="26" r="9" fill="#222"/><circle cx="22" cy="26" r="4" fill="#9a8a70"/><circle cx="84" cy="26" r="9" fill="#222"/><circle cx="84" cy="26" r="4" fill="#9a8a70"/></g>';

  /* 1. I-35 north to Abbott */
  function wnsign() {
    const shield = '<g transform="translate(58 48)"><path d="M0 4q0 -4 4 -4h40q4 0 4 4v28q0 14 -24 22q-24 -8 -24 -22z" fill="#1d4f9c" stroke="#fff" stroke-width="2.5"/><path d="M2 4q0 -2 2 -2h40q2 0 2 2v10h-44z" fill="#c8202c"/>' +
      '<text x="24" y="11" text-anchor="middle" ' + font + ' font-size="5.5" fill="#fff">INTERSTATE</text><text x="24" y="38" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">35</text></g>';
    const big = '<rect x="124" y="36" width="196" height="78" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/><text x="222" y="70" text-anchor="middle" ' + font + ' font-size="26" fill="#fff">ABBOTT</text>' +
      '<text x="222" y="94" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">HILLSBORO   NORTH</text><text x="222" y="108" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">NEXT RIGHT</text>' +
      '<rect x="176" y="114" width="6" height="44" fill="#8a9098"/><rect x="262" y="114" width="6" height="44" fill="#8a9098"/>';
    const mill = '<g transform="translate(354 70)"><path d="M-6 90l6 -80l6 80M-4 60h8M-5 76h10" stroke="#8a9098" stroke-width="2.5" fill="none"/><g class="wn-spin">' +
      Array.from({ length: 12 }, (_, i) => '<path d="M0 10l-3 -20h6z" fill="#c8ccd2" transform="rotate(' + i * 30 + ' 0 10)"/>').join("") + '<circle cx="0" cy="10" r="3" fill="#6b7178"/></g><path d="M2 10l18 4l-18 3z" fill="#c8ccd2"/></g>';
    return svg('<rect width="400" height="260" fill="url(#wns1)"/>' + cloud(90, 30, 1) + cloud(300, 22, 0.8) + '<rect x="0" y="130" width="400" height="30" fill="#c8b06a"/><path d="M0 132q100 -8 200 -2t200 -4v8h-400z" fill="#a8984e"/>' +
      mill + mesquite(30, 160, 0.9) + '<rect x="82" y="78" width="4" height="82" fill="#8a9098"/>' + shield + big +
      '<rect x="0" y="160" width="400" height="100" fill="#55565c"/><path d="M0 162h400M0 252h400" stroke="#f2f2f2" stroke-width="3"/><path d="M0 207h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="26 18"/>' +
      '<g class="anim-train"><g transform="translate(150 182) scale(1.5)">' + truck("#7a2a1e") + '</g></g>', sky("wns1", "#5aa6e6", "#f2e6c8"));
  }

  /* 2. Abbott United Methodist Church */
  function wnchurch() {
    const church = '<g transform="translate(130 44)"><rect x="0" y="70" width="140" height="84" fill="#f6f4ee"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (78 + i * 8) + 'h140" stroke="#dcd8ce" stroke-width="1"/>').join("") +
      '<path d="M-8 72l78 -34l78 34z" fill="#8a3a2a"/><rect x="52" y="8" width="36" height="46" fill="#f6f4ee"/><path d="M48 10l22 -40l22 40z" fill="#8a3a2a"/><path d="M70 -40v10M65 -35h10" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path d="M58 22h24v26h-24z" fill="#3a3e46"/><g class="wn-bell"><path d="M62 24q8 -4 16 0v12q2 4 4 5h-24q2 -1 4 -5z" fill="' + GOLD + '" stroke="#7a5a1a" stroke-width="1.5"/><circle cx="70" cy="43" r="2.5" fill="#7a5a1a"/></g>' +
      '<rect x="56" y="106" width="28" height="48" fill="#6a4a2a"/><path d="M70 106v48" stroke="#4a3018" stroke-width="2"/>' +
      [14, 102].map(x => '<rect x="' + x + '" y="90" width="22" height="40" rx="11" fill="#8fb0d8" stroke="#f6f4ee" stroke-width="2"/><path d="M' + (x + 11) + ' 90v40M' + x + ' 110h22" stroke="#f6f4ee" stroke-width="2"/>').join("") + '</g>';
    const fence = '<path d="M0 214h400M0 226h400" stroke="#8a7050" stroke-width="2.5"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (i * 40) + '" y="206" width="5" height="30" fill="#6a5038"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#wns2)"/>' + cloud(70, 40, 1.1) + cloud(320, 30, 0.9) + '<rect x="0" y="180" width="400" height="80" fill="#9aa64e"/><path d="M0 182q120 -10 240 -2t160 -4v8h-400z" fill="#8a9444"/>' +
      church + mesquite(60, 192, 1.4) + mesquite(350, 196, 1.1) + '<rect x="190" y="198" width="20" height="62" fill="#c8b890"/>' + fence +
      '<path class="wn-fly" d="M-20 60l6 -4l6 4l6 -4l6 4" stroke="#333" stroke-width="2" fill="none"/>', sky("wns2", "#4c9ae0", "#e8f2f8"));
  }

  /* 3. Luckenbach dance hall */
  function wnhall() {
    const hall = '<g transform="translate(40 70)"><rect x="0" y="40" width="240" height="96" fill="#8a8478"/>' + Array.from({ length: 24 }, (_, i) => '<rect x="' + (i * 10) + '" y="40" width="9" height="96" fill="' + (i % 3 ? "#7e786c" : "#948e82") + '"/>').join("") +
      '<path d="M-14 42l134 -40l134 40z" fill="#a8acb2"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M' + (-8 + i * 15) + ' 40l' + (i < 9 ? 10 : -10) + ' -' + (i < 9 ? 3 + i * 4 : 3 + (17 - i) * 4) + '" stroke="#8a8e94" stroke-width="1"/>').join("") +
      [20, 70, 150, 200].map(x => '<rect x="' + x + '" y="66" width="22" height="40" fill="#f2c860" opacity=".85"/><path d="M' + x + ' 86h22M' + (x + 11) + ' 66v40" stroke="#5a5448" stroke-width="2"/>').join("") +
      '<rect x="104" y="80" width="34" height="56" fill="#3a3228"/><rect x="70" y="14" width="100" height="18" fill="#f2ead6" stroke="#5a5448" stroke-width="1.5"/><text x="120" y="27" text-anchor="middle" ' + font + ' font-size="10" fill="#7a2a1e">DANCE HALL</text></g>';
    const lights = '<path d="M0 60q70 30 140 6t140 4t120 -8" stroke="#3a3228" stroke-width="1.5" fill="none"/>' +
      Array.from({ length: 16 }, (_, i) => { const x = 10 + i * 25, y = 60 + Math.sin(i * 0.9) * 8 + 10; return '<circle class="wn-gl ' + (i % 3 === 1 ? "wn-gl2" : i % 3 === 2 ? "wn-gl3" : "") + '" cx="' + x + '" cy="' + y + '" r="3.2" fill="' + ["#ffd27a", "#ff8a6a", "#9ae0d0"][i % 3] + '"/>'; }).join("");
    const flag = '<rect x="330" y="70" width="3" height="136" fill="#c9c9cf"/><g class="wn-wave"><rect x="333" y="72" width="16" height="30" fill="#1d4f9c"/><rect x="349" y="72" width="30" height="15" fill="#fff"/><rect x="349" y="87" width="30" height="15" fill="#c8202c"/>' +
      '<path d="M341 81l1.6 4.6h4.8l-3.9 2.8l1.5 4.6l-4 -2.8l-4 2.8l1.5 -4.6l-3.9 -2.8h4.8z" fill="#fff"/></g>';
    return svg('<rect width="400" height="260" fill="url(#wns3)"/><circle cx="60" cy="40" r="2" fill="#fff"/><circle cx="160" cy="24" r="1.5" fill="#fff"/><circle cx="280" cy="36" r="1.8" fill="#fff"/><circle cx="360" cy="20" r="1.5" fill="#fff"/>' +
      '<path d="M0 170q100 -26 200 -14t200 -8v112h-400z" fill="#3a4a2a"/>' + mesquite(310, 210, 1.6) + hall + flag + '<rect x="0" y="206" width="400" height="54" fill="#8a7a5a"/>' + lights,
      sky("wns3", "#1a2048", "#c8704a"));
  }

  /* 4. On the road again: the tour bus at sunset */
  function wnbus() {
    const bus = '<g class="wn-bob"><g transform="translate(96 132)"><rect x="0" y="0" width="210" height="62" rx="10" fill="#2a2a30"/><rect x="0" y="34" width="210" height="8" fill="' + RED + '"/><rect x="0" y="44" width="210" height="4" fill="' + GOLD + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (14 + i * 28) + '" y="8" width="22" height="20" rx="3" fill="#9fc6e0" opacity=".85"/>').join("") +
      '<path d="M182 4h22q6 0 6 8v20h-28z" fill="#bfe3f2"/><rect x="204" y="44" width="8" height="8" rx="2" fill="#ffe08a"/>' +
      [40, 172].map(x => '<g class="wn-wheel"><circle cx="' + x + '" cy="64" r="13" fill="#1a1a1e"/><path d="M' + (x - 8) + ' 64h16M' + x + ' 56v16" stroke="#8a8e94" stroke-width="3"/></g>').join("") + '</g></g>';
    const road = '<path d="M0 206h400v54h-400z" fill="#4a4b50"/><g class="wn-dash"><path d="M0 232h444" stroke="' + GOLD + '" stroke-width="3" stroke-dasharray="24 20"/></g>';
    return svg('<rect width="400" height="260" fill="url(#wns4)"/><circle cx="300" cy="150" r="40" fill="#ffc06a" opacity=".9"/>' +
      '<path d="M0 170q60 -40 130 -20t130 -24t140 18v62h-400z" fill="#6a4a5a"/><path d="M0 190q80 -24 170 -8t230 -10v34h-400z" fill="#4a3a48"/>' +
      road + bus + '<path class="wn-fly" d="M-20 60l6 -4l6 4l6 -4l6 4" stroke="#2a2a32" stroke-width="2" fill="none"/>', sky("wns4", "#3a3a7a", "#f08a4a"));
  }

  /* 5. Willie Nelson Blvd and Lavaca St, the Capitol behind */
  function wncorner() {
    const PG = "#d8a090";
    const capitol = '<g transform="translate(260 8)"><rect x="-10" y="96" width="140" height="20" fill="' + PG + '"/><rect x="20" y="62" width="80" height="36" fill="' + PG + '"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (26 + i * 9.5) + '" y="66" width="4" height="30" fill="#c08878"/>').join("") +
      '<path d="M24 64q36 -66 72 0z" fill="' + PG + '" stroke="#b07868" stroke-width="2"/><path d="M40 64q20 -50 40 0" stroke="#b07868" stroke-width="2" fill="none"/>' +
      '<rect x="54" y="22" width="12" height="12" fill="' + PG + '"/><path d="M53 22h14" stroke="#b07868" stroke-width="2"/><path d="M60 22v-8" stroke="#c9a24a" stroke-width="3"/><circle cx="60" cy="12" r="2.5" fill="#c9a24a"/></g>';
    const bricks = Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (128 + r * 9) + 'h400" stroke="#6a2a1e" stroke-width="1"/>' + Array.from({ length: 21 }, (_, c) => '<path d="M' + (c * 20 + (r % 2 ? 10 : 0)) + ' ' + (128 + r * 9) + 'v9" stroke="#6a2a1e" stroke-width="1"/>').join("")).join("");
    return svg('<rect width="400" height="260" fill="url(#wns5)"/>' + capitol + '<rect x="0" y="122" width="400" height="90" fill="#9a3e2c"/>' + bricks + '<path d="M0 122h400" stroke="#5a2418" stroke-width="3"/>' +
      tag("WILLIE", 112, 182, 50, RED, -6) + tag("FAMILY BAND", 110, 204, 16, GOLD, -4) + tag("TRIGGER", 300, 196, 20, TEAL, -3) +
      '<g fill="' + RED + '"><circle class="wn-sp" cx="282" cy="160" r="2.5"/><circle class="wn-sp wn-sp2" cx="290" cy="156" r="2"/></g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#5a5b60"/><path d="M40 228l14 8M200 240l18 -6M300 224l-10 10" stroke="#2f3034" stroke-width="2"/>' +
      '<rect x="56" y="36" width="5" height="178" fill="#6b7178"/>' + sign(2, 40, 160, "WILLIE NELSON BLVD") + sign(14, 66, 100, "LAVACA ST"),
      sky("wns5", "#20284a", "#e8946a"));
  }

  window.SCENES = { wnsign: wnsign, wnchurch: wnchurch, wnhall: wnhall, wnbus: wnbus, wncorner: wncorner };
})();
