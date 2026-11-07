/* westsidegunn scenes (Regions tab: Upstate New York; East Buffalo). LaSalle Metro Rail station under Main St, the Albright-Knox marble temple over Hoyt Lake,
   Bennett High School on Main St with the NFTA 8 bus, a Sabres game at the arena, Main St & Amherst St with the Electric Tower lit downtown. 400 x 260 SVGs.
   CSS classes prefixed wg- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wgflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.wg-flk{animation:wgflick 2.4s infinite}.wg-flk2{animation-delay:.8s}' +
    '@keyframes wgripple{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.wg-rp{animation:wgripple 3s ease-in-out infinite}.wg-rp2{animation-delay:-1.5s}' +
    '@keyframes wgswan{0%{transform:translateX(0)}50%{transform:translateX(-60px)}100%{transform:translateX(0)}}.wg-swan{animation:wgswan 14s ease-in-out infinite}' +
    '@keyframes wgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.wg-flag{transform-box:fill-box;transform-origin:0 50%;animation:wgflag 1.6s ease-in-out infinite}' +
    '@keyframes wgbus{0%{transform:translateX(-300px)}45%,100%{transform:translateX(0)}}.wg-bus{animation:wgbus 7s ease-out infinite;animation-delay:-3s}' +
    '@keyframes wgpuck{0%{transform:translate(0,0)}25%{transform:translate(120px,18px)}50%{transform:translate(40px,30px)}75%{transform:translate(-80px,10px)}100%{transform:translate(0,0)}}.wg-puck{animation:wgpuck 4s ease-in-out infinite}' +
    '@keyframes wgbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.wg-bob{animation:wgbob .7s ease-in-out infinite}.wg-bob2{animation-delay:-.35s}' +
    '@keyframes wgglow{0%,100%{opacity:.55}50%{opacity:1}}.wg-glow{animation:wgglow 2.4s ease-in-out infinite}.wg-g2{animation-delay:-1.2s}' +
    '@keyframes wgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wg-sp{animation:wgspray 1.4s ease-out infinite}.wg-sp2{animation-delay:.45s}' +
    '@keyframes wgsnow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.wg-sn{animation:wgsnow 7s linear infinite}.wg-sn2{animation-delay:-2.3s;animation-duration:8s}.wg-sn3{animation-delay:-4.6s;animation-duration:6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const snow = n => Array.from({ length: n }, (_, i) => '<circle class="wg-sn wg-sn' + (i % 3 + 1) + '" cx="' + ((i * 71) % 400) + '" cy="' + ((i * 37) % 100 - 20) + '" r="' + (i % 2 ? 1.5 : 2.2) + '" fill="#fff" opacity=".85"/>').join("");
  const GOLD = "#f0d27a", PINK = "#d9568f", BLUE = "#4aa3df", NFTA = "#1f4e79", SABRE = "#003087", SGOLD = "#ffb81c";

  /* 1. LaSalle station, underground under Main St: tiled walls, the black station sign with the MR bullet, the silver Metro Rail car pulling in */
  function wgstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 42) + '" y="118" width="28" height="24" rx="3" fill="#cfe6f7" opacity=".9"/>').join("");
    const tr = '<g class="anim-train"><rect x="16" y="106" width="324" height="74" rx="10" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="16" y="150" width="324" height="7" fill="' + NFTA + '"/><rect x="16" y="159" width="324" height="3" fill="' + GOLD + '"/>' +
      '<rect x="318" y="114" width="18" height="34" rx="3" fill="#2b3340"/><circle cx="332" cy="170" r="4" fill="#fff6c2"/>' +
      '<rect x="150" y="110" width="24" height="64" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/></g>';
    const tiles = Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (20 + i * 10) + 'h400" stroke="#bfc6cf" stroke-width="1"/>').join("") +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 18v84" stroke="#bfc6cf" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#d9dee4"/>' + tiles +
      '<rect x="0" y="0" width="400" height="18" fill="#22262d"/>' + [40, 170, 300].map((x, i) => '<rect class="wg-flk' + (i === 1 ? " wg-flk2" : "") + '" x="' + x + '" y="7" width="60" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="92" width="400" height="10" fill="' + NFTA + '"/><rect x="0" y="102" width="400" height="88" fill="#2a2e36"/>' + tr +
      '<rect x="0" y="182" width="400" height="8" fill="#f2c200"/><rect x="0" y="190" width="400" height="70" fill="#8a8680"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="190" width="40" height="70" fill="none" stroke="#7a766f" stroke-width="1"/>').join("") +
      '<rect x="74" y="28" width="252" height="52" rx="4" fill="#111"/><rect x="74" y="28" width="252" height="4" fill="#fff"/>' +
      '<text x="96" y="64" ' + font + ' font-size="26" fill="#fff">LaSalle</text>' + badge(262, 56, "MR", NFTA) +
      '<text x="98" y="76" ' + font + ' font-size="8" fill="' + BLUE + '" letter-spacing="2">METRO RAIL  ·  MAIN ST</text>' +
      [16, 384].map(x => '<rect x="' + (x - 8) + '" y="18" width="16" height="164" fill="#4a5260"/>').join("") +
      '<rect x="150" y="210" width="100" height="5" rx="2" fill="#fff6c2" opacity=".4" class="wg-flk"/>',
      "");
  }

  /* 2. The Albright-Knox (Buffalo AKG): the white marble Greek temple with Ionic columns and the caryatid porch, over Hoyt Lake in Delaware Park, a swan gliding */
  function wgalbright() {
    const cols = Array.from({ length: 8 }, (_, i) => {
      const x = 118 + i * 22;
      return '<rect x="' + x + '" y="78" width="10" height="64" fill="#f4f1ea"/><path d="M' + (x + 2) + ' 80v60M' + (x + 5) + ' 80v60M' + (x + 8) + ' 80v60" stroke="#dcd6ca" stroke-width="1"/>' +
        '<rect x="' + (x - 3) + '" y="74" width="16" height="5" rx="2" fill="#efe9dc"/><circle cx="' + (x - 1) + '" cy="76" r="2.5" fill="#dcd6ca"/><circle cx="' + (x + 11) + '" cy="76" r="2.5" fill="#dcd6ca"/>';
    }).join("");
    /* the side porch: plain carved figures holding up the roof (statues, no faces) */
    const cary = Array.from({ length: 4 }, (_, i) => {
      const x = 300 + i * 14;
      return '<rect x="' + x + '" y="104" width="8" height="38" rx="3" fill="#ece6d8"/><circle cx="' + (x + 4) + '" cy="100" r="4" fill="#ece6d8"/><rect x="' + (x - 1) + '" y="94" width="10" height="3" fill="#dcd6ca"/>';
    }).join("");
    const trees = [[30, 120, 34], [70, 128, 26], [376, 124, 30]].map(([x, y, r]) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="30" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="' + r + '" fill="#3f7a3a"/><circle cx="' + (x + 10) + '" cy="' + (y - 14) + '" r="' + (r * 0.6) + '" fill="#4f8f45"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wg2)"/>' + trees +
      '<path d="M102 70L206 40L310 70z" fill="#f4f1ea" stroke="#dcd6ca" stroke-width="2"/><path d="M122 66L206 46L290 66z" fill="#e8e2d4"/>' +
      '<rect x="100" y="68" width="212" height="8" fill="#efe9dc"/>' + cols +
      '<rect x="112" y="80" width="186" height="62" fill="#e2dccd" opacity=".35"/>' +
      '<rect x="292" y="88" width="66" height="8" fill="#efe9dc"/><rect x="290" y="96" width="70" height="4" fill="#dcd6ca"/>' + cary +
      '<rect x="60" y="88" width="50" height="54" fill="#efe9dc"/><rect x="60" y="84" width="50" height="6" fill="#e2dccd"/>' +
      '<rect x="90" y="142" width="240" height="6" fill="#e2dccd"/><rect x="80" y="148" width="260" height="6" fill="#d8d2c4"/><rect x="70" y="154" width="280" height="6" fill="#cec8ba"/>' +
      '<rect x="0" y="160" width="400" height="22" fill="#5f9a4a"/>' +
      '<rect x="0" y="182" width="400" height="78" fill="#3f78a8"/>' +
      Array.from({ length: 7 }, (_, i) => '<path class="wg-rp' + (i % 2 ? " wg-rp2" : "") + '" d="M' + (20 + i * 56) + ' ' + (198 + (i % 3) * 18) + 'h30" stroke="#a9d0ef" stroke-width="2" opacity=".7"/>').join("") +
      '<path d="M100 196L206 188L310 196" stroke="#f4f1ea" stroke-width="3" opacity=".25"/>' +
      '<g class="wg-swan"><g transform="translate(300 214)"><ellipse cx="0" cy="0" rx="16" ry="7" fill="#fff"/><path d="M-12 -2q-6 -18 4 -20q6 0 4 6" stroke="#fff" stroke-width="4" fill="none"/><path d="M-4 -16l5 2" stroke="#f08a2a" stroke-width="3"/></g></g>',
      sky("wg2", "#8cc4ec", "#e6f1f8"));
  }

  /* 3. Bennett High School on Main St: red-brown brick with the tall central tower and limestone trim, the flag waving, the NFTA 8 Main bus rolling by */
  function wgbennett() {
    const winRow = (y, n, x0, step) => Array.from({ length: n }, (_, i) => '<rect x="' + (x0 + i * step) + '" y="' + y + '" width="12" height="16" fill="#26313e"/><rect x="' + (x0 + i * step) + '" y="' + (y - 3) + '" width="12" height="3" fill="#e7dcc4"/>').join("");
    const bus = '<g class="wg-bus"><rect x="60" y="166" width="220" height="62" rx="8" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (96 + i * 34) + '" y="176" width="28" height="24" rx="3" fill="#24323e"/>').join("") +
      '<rect x="244" y="176" width="30" height="40" rx="3" fill="#24323e"/><rect x="60" y="206" width="220" height="6" fill="' + NFTA + '"/>' +
      '<rect x="206" y="168" width="70" height="10" rx="2" fill="#111"/><text x="241" y="176" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">8 MAIN</text>' +
      '<circle cx="100" cy="228" r="11" fill="#222"/><circle cx="100" cy="228" r="4.5" fill="#9aa1a8"/><circle cx="240" cy="228" r="11" fill="#222"/><circle cx="240" cy="228" r="4.5" fill="#9aa1a8"/>' +
      '<circle cx="278" cy="214" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wg3)"/>' +
      '<rect x="20" y="78" width="360" height="82" fill="#8e4a36"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M20 ' + (86 + i * 8) + 'h360" stroke="#7a3e2c" stroke-width="1"/>').join("") +
      '<rect x="20" y="74" width="360" height="6" fill="#e7dcc4"/>' + winRow(92, 6, 34, 20) + winRow(122, 6, 34, 20) + winRow(92, 6, 254, 20) + winRow(122, 6, 254, 20) +
      /* the tower */
      '<rect x="168" y="40" width="64" height="120" fill="#94503a"/><rect x="164" y="36" width="72" height="6" fill="#e7dcc4"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (164 + i * 13) + '" y="28" width="7" height="9" fill="#e7dcc4"/>').join("") +
      '<path d="M182 82v-20q8 -12 16 0v20zM202 82v-20q8 -12 16 0v20z" fill="#26313e" stroke="#e7dcc4" stroke-width="2"/>' +
      '<path d="M186 158v-34q14 -16 28 0v34z" fill="#3a2a22" stroke="#e7dcc4" stroke-width="3"/><rect x="176" y="100" width="48" height="6" fill="#e7dcc4"/>' +
      '<text x="200" y="96" text-anchor="middle" ' + font + ' font-size="8" fill="#f7f3ea" letter-spacing="1">BENNETT</text>' +
      '<path d="M200 28v-22" stroke="#666" stroke-width="2"/><rect class="wg-flag" x="201" y="6" width="20" height="12" fill="#c8102e"/><rect class="wg-flag" x="201" y="6" width="9" height="6" fill="#1f3a8a"/>' +
      '<rect x="0" y="160" width="400" height="10" fill="#c7c2b6"/><rect x="0" y="170" width="400" height="90" fill="#4e4e54"/><path d="M0 246h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="352" y="104" width="5" height="66" fill="#6b7178"/><rect x="338" y="92" width="34" height="28" rx="3" fill="' + NFTA + '" stroke="#fff" stroke-width="1.5"/><text x="355" y="105" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">NFTA</text><text x="355" y="116" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">8</text>',
      sky("wg3", "#9fc8e8", "#f2e6cf"));
  }

  /* 4. A Sabres game downtown: blue and gold crowd, the white sheet with the red center line and blue lines, the puck sliding, the scoreboard glowing (no logos) */
  function wgsabres() {
    const crowd = Array.from({ length: 3 }, (_, r) => Array.from({ length: 22 }, (_, i) => '<g class="wg-bob' + ((i + r) % 2 ? " wg-bob2" : "") + '"><circle cx="' + (10 + i * 18 + (r % 2) * 9) + '" cy="' + (62 + r * 16) + '" r="5" fill="#141824"/><rect x="' + (4 + i * 18 + (r % 2) * 9) + '" y="' + (66 + r * 16) + '" width="12" height="9" rx="3" fill="' + [SABRE, SGOLD, "#f7f3ea", SABRE][(i + r) % 4] + '"/></g>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="#0c1020"/>' +
      '<rect x="150" y="2" width="100" height="40" rx="3" fill="#1a2030" stroke="#3a4256" stroke-width="2"/><rect class="wg-glow" x="156" y="8" width="88" height="28" rx="2" fill="' + SABRE + '"/>' +
      '<text x="200" y="27" text-anchor="middle" ' + font + ' font-size="14" fill="' + SGOLD + '">BUF  3 - 1</text>' +
      '<rect x="0" y="54" width="400" height="56" fill="#1c2236"/>' + crowd +
      '<rect x="0" y="108" width="400" height="12" fill="' + SGOLD + '"/><rect x="0" y="120" width="400" height="6" fill="#f7f3ea"/>' +
      '<path d="M0 126h400v134H0z" fill="#eef3f7"/>' +
      '<path d="M110 126v134M290 126v134" stroke="' + SABRE + '" stroke-width="6"/><path d="M200 126v134" stroke="#c8102e" stroke-width="5"/>' +
      '<circle cx="200" cy="192" r="34" fill="none" stroke="#4a7ab8" stroke-width="2"/><circle cx="200" cy="192" r="3" fill="#4a7ab8"/>' +
      '<circle cx="60" cy="214" r="22" fill="none" stroke="#c8102e" stroke-width="2"/><circle cx="340" cy="214" r="22" fill="none" stroke="#c8102e" stroke-width="2"/>' +
      '<path d="M0 150h22M378 150h22" stroke="#c8102e" stroke-width="2"/><rect x="380" y="140" width="20" height="22" fill="none" stroke="#c8102e" stroke-width="3"/>' +
      '<g class="wg-puck"><ellipse cx="150" cy="178" rx="6" ry="3" fill="#111"/></g>' +
      '<path d="M0 126h400" stroke="#c8ccd2" stroke-width="2"/>',
      "");
  }

  /* 5. Main St and Amherst St at night: green signs, GUNN tagged big on the brick, the Electric Tower lit up downtown behind, a little snow */
  function wgcorner() {
    const et = '<g>' +
      '<rect x="176" y="56" width="48" height="88" fill="#e9e4d6"/>' + Array.from({ length: 6 }, (_, r) => Array.from({ length: 3 }, (_, c) => '<rect class="' + ((r + c) % 3 ? "" : "wg-glow") + '" x="' + (182 + c * 14) + '" y="' + (64 + r * 13) + '" width="8" height="8" fill="' + ((r + c) % 3 ? "#5a5a66" : "#ffe9a8") + '"/>').join("")).join("") +
      '<rect x="184" y="38" width="32" height="20" fill="#efeadc"/><rect x="190" y="24" width="20" height="16" fill="#f4f0e4"/><rect x="195" y="14" width="10" height="12" fill="#f4f0e4"/><path d="M196 14l4 -8l4 8z" fill="#f4f0e4"/>' +
      '<rect class="wg-glow" x="184" y="38" width="32" height="20" fill="' + PINK + '" opacity=".22"/><rect class="wg-glow wg-g2" x="190" y="24" width="20" height="16" fill="' + BLUE + '" opacity=".22"/><circle class="wg-glow" cx="200" cy="20" r="4" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wg5)"/>' + snow(26) +
      '<g fill="#232838"><rect x="60" y="96" width="40" height="48"/><rect x="104" y="80" width="30" height="64"/><rect x="250" y="88" width="34" height="56"/><rect x="290" y="100" width="44" height="44"/></g>' + et +
      '<rect x="0" y="140" width="400" height="86" fill="#7a3a2c"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#6a3024" stroke-width="1"/>').join("") +
      tag("GUNN", 24, 204, 60, GOLD, -6) + tag("FLYGOD", 200, 176, 30, PINK, -4) + tag("FASHION REBELS", 26, 222, 16, "#fff", -3) + tag("4TH ROPE", 190, 218, 18, BLUE, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55534e"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="340" y="98" width="6" height="128" fill="#2f2f2f"/>' + sign(306, 100, 74, "Main St") + sign(294, 126, 98, "Amherst St") +
      '<g class="wg-sp"><circle cx="186" cy="150" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="wg-sp wg-sp2"><circle cx="192" cy="144" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("wg5", "#0e1230", "#5a3a6a"));
  }

  window.SCENES = { wgstation: wgstation, wgalbright: wgalbright, wgbennett: wgbennett, wgsabres: wgsabres, wgcorner: wgcorner };
})();
