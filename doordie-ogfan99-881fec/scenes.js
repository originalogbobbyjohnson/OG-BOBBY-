/* doordie scenes (Regions tab: Chicago; East Garfield Park, West Side). CSS classes and ids prefixed dd- (the page's own anim-train is kept).
   1 California on the CTA Green Line: the Lake Street 'L' over Lake St and California Ave in East Garfield Park, the 1996 white-steel-and-glass
     station house with green trim and the peaked latticed canopy (the station reopened in 1996, the year "Po Pimp" broke), a Green Line train sliding in.
   2 W Chicago Ave on the West Side at seven double-oh p.m. ("Po Pimp"): the group grew up on the West Side streets around Chicago Avenue
     (Chicago Sun-Times / Jim DeRogatis, 2005). A long gold Caddy rolls past the storefronts, the 66 Chicago bus behind.
   3 Houston, where they went to sign with Rap-A-Lot in 1996 (Chicago had no hip-hop label with national distribution): the Houston skyline at dusk,
     a gold record spinning on the desk next to the contract.
   4 A Chicago radio booth at 107.5 FM, the station that put "Higher" in rotation: ON AIR light, the dial, the mic, the Loop through the window.
   5 N California Ave and W Lake St under the Green Line: green signs, DO OR DIE tagged on the brick, the Willis Tower's black stacked tubes and twin antennas behind.
   No logos, no faces; no 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ddcar{from{transform:translateX(-200px)}to{transform:translateX(460px)}}.dd-car{animation:ddcar 7s linear infinite}' +
    '@keyframes ddbus{from{transform:translateX(420px)}to{transform:translateX(-200px)}}.dd-bus{animation:ddbus 11s linear infinite}' +
    '@keyframes ddspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dd-spin{animation:ddspin 2.4s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes ddblink{0%,100%{opacity:.25}50%{opacity:1}}.dd-bl{animation:ddblink 1.4s ease-in-out infinite}.dd-bl2{animation-delay:-.7s}' +
    '@keyframes ddwave{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.dd-w{animation:ddwave .9s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom}.dd-w2{animation-delay:-.3s}.dd-w3{animation-delay:-.6s}' +
    '@keyframes ddbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-16px)}}.dd-bird{animation:ddbird 12s linear infinite}.dd-bird2{animation-delay:-6s}' +
    '@keyframes ddpen{0%,100%{transform:translate(0,0)}50%{transform:translate(18px,-2px)}}.dd-pen{animation:ddpen 2s ease-in-out infinite}' +
    '@keyframes ddspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dd-sp{animation:ddspray 1.4s ease-out infinite}.dd-sp2{animation-delay:.45s}' +
    '@keyframes ddtrain{from{transform:translateX(440px)}to{transform:translateX(-420px)}}.dd-train{animation:ddtrain 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const label = (txt, y, fill, bg) => '<rect x="0" y="' + (y - 14) + '" width="400" height="20" fill="' + (bg || "#000") + '" opacity=".55"/><text x="200" y="' + y + '" text-anchor="middle" ' + font + ' font-size="11" letter-spacing="1.5" fill="' + (fill || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "dd-bl" + (i % 2 ? " dd-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const GOLD = "#f5c542", GRN = "#009b3a", RED = "#c8102e", CREAM = "#f4ecd8";
  /* long 90s Caddy, no badge: body at y0, length ~190 */
  const caddy = (x, y, col) => '<g transform="translate(' + x + ' ' + y + ')">' +
    '<path d="M0 30h190v-10q-6 -10 -30 -12l-26 -18h-74l-24 18h-26q-10 2 -10 12z" fill="' + col + '" stroke="#5a4510" stroke-width="2"/>' +
    '<path d="M44 8l22 -16h30v16zM102 8v-16h28l22 16z" fill="#2a3440" stroke="#5a4510" stroke-width="1.5"/>' +
    '<rect x="-2" y="20" width="194" height="4" fill="#e8e2d0"/><rect x="186" y="12" width="6" height="6" fill="#fff6c2"/><rect x="-2" y="12" width="6" height="6" fill="#ff5a4a"/>' +
    '<circle cx="36" cy="32" r="12" fill="#1a1a1a"/><circle cx="36" cy="32" r="6" fill="#d8d8d8"/><circle cx="154" cy="32" r="12" fill="#1a1a1a"/><circle cx="154" cy="32" r="6" fill="#d8d8d8"/></g>';

  /* 1. California on the Green Line, the L over Lake St */
  function ddstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="96" width="28" height="18" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><rect x="34" y="88" width="332" height="44" rx="8" fill="#d7dce1" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="34" y="118" width="332" height="5" fill="' + GRN + '"/><rect x="330" y="94" width="30" height="20" rx="3" fill="#1c2630"/>' +
      '<rect x="282" y="90" width="44" height="7" rx="1" fill="#111"/><text x="304" y="96" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb84a">ASHLAND/63RD</text><circle cx="358" cy="126" r="3" fill="#fff6c2"/></g>';
    const house = '<g><rect x="250" y="56" width="140" height="76" fill="#eef2f3" stroke="#b9c2c6" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (258 + i * 22) + '" y="66" width="16" height="44" fill="#9fc6d8" opacity=".85"/>').join("") +
      '<rect x="250" y="112" width="140" height="6" fill="' + GRN + '"/><rect x="250" y="56" width="140" height="4" fill="' + GRN + '"/></g>';
    const canopy = '<path d="M0 62l200 -26l200 26z" fill="#e6ebec" stroke="#aab3b8" stroke-width="2"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (80 + i * 15) + ' ' + (62 - 0) + 'l7 -14l8 14" stroke="#aab3b8" stroke-width="1.2" fill="none"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (18 + i * 74) + '" y="62" width="5" height="70" fill="#dfe5e7"/>').join("");
    const posts = Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 76) + '" y="150" width="10" height="70" fill="#5e6a62"/><path d="M' + (20 + i * 76) + ' 152l-14 -10M' + (30 + i * 76) + ' 152l14 -10" stroke="#5e6a62" stroke-width="4"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dds1)"/>' +
      '<g class="dd-bird"><path d="M20 16q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g fill="#8a5a44"><rect x="0" y="70" width="70" height="150"/><rect x="330" y="80" width="70" height="140"/></g>' +
      house + canopy +
      '<rect x="0" y="132" width="400" height="20" fill="#4d5a52"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 134l10 16l10 -16" stroke="#3b4640" stroke-width="2" fill="none"/>').join("") +
      train + '<rect x="0" y="130" width="400" height="5" fill="#cfd5d8"/>' + posts +
      '<rect x="0" y="220" width="400" height="40" fill="#5d5a55"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="40" y="4" width="290" height="28" rx="3" fill="#111"/><rect x="40" y="4" width="290" height="4" fill="' + GRN + '"/>' +
      '<text x="54" y="27" ' + font + ' font-size="16" fill="#fff">California</text>' +
      '<rect x="236" y="11" width="84" height="17" rx="8.5" fill="' + GRN + '"/><text x="278" y="23.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">GREEN</text>' +
      label("LAKE ST · CALIFORNIA AVE · EAST GARFIELD PARK", 214, CREAM),
      sky("dds1", "#8cc8f0", "#f4e2c2"));
  }

  /* 2. W Chicago Ave on the West Side, seven double-oh p.m. */
  function ddchicagoave() {
    const shops = [["#7a4a3a", 0, "CORNER STORE"], ["#5b6470", 100, "BARBER"], ["#8a6a3a", 200, "BEAUTY SUPPLY"], ["#6a3a4a", 300, "RIB TIPS"]].map(s =>
      '<rect x="' + s[1] + '" y="60" width="100" height="134" fill="' + s[0] + '" stroke="#2a1a14" stroke-width="2"/>' +
      '<rect x="' + (s[1] + 8) + '" y="70" width="36" height="28" fill="#e8c27a" opacity=".55"/><rect x="' + (s[1] + 56) + '" y="70" width="36" height="28" fill="#e8c27a" opacity=".55"/>' +
      '<rect x="' + (s[1] + 6) + '" y="118" width="88" height="16" fill="#111"/><text x="' + (s[1] + 50) + '" y="130" text-anchor="middle" ' + font + ' font-size="8" fill="#ffd36b">' + s[2] + '</text>' +
      '<rect x="' + (s[1] + 10) + '" y="140" width="80" height="50" fill="#f1d58a" opacity=".45"/>').join("");
    const bus = '<g class="dd-bus"><rect x="0" y="146" width="150" height="46" rx="6" fill="#e9edf0" stroke="#7d868f" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (14 + i * 26) + '" y="152" width="20" height="16" rx="2" fill="#1c2630"/>').join("") +
      '<rect x="0" y="176" width="150" height="4" fill="#3d6fb6"/><rect x="6" y="148" width="40" height="8" fill="#111"/><text x="26" y="155" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb84a">66 CHICAGO</text>' +
      '<circle cx="30" cy="194" r="9" fill="#222"/><circle cx="120" cy="194" r="9" fill="#222"/></g>';
    const clock = '<g><rect x="186" y="14" width="4" height="40" fill="#222"/><circle cx="188" cy="16" r="15" fill="#f4ecd8" stroke="#222" stroke-width="3"/>' +
      '<path d="M188 16v-10" stroke="#222" stroke-width="2.2"/><path d="M188 16l-4 7" stroke="#222" stroke-width="2.6"/><circle cx="188" cy="16" r="1.6" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dds2)"/>' + stars(10) + shops + clock +
      '<rect x="0" y="194" width="400" height="66" fill="#3e3c3a"/><path d="M0 228h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="0" y="192" width="400" height="4" fill="#bdb6a8"/>' + bus +
      '<g class="dd-car">' + caddy(0, 196, GOLD) + '</g>' +
      label("W CHICAGO AVE · WEST SIDE · SEVEN DOUBLE-OH P.M.", 254, GOLD),
      sky("dds2", "#2b2552", "#e88a5a"));
  }

  /* 3. Houston, signing with the label down south */
  function ddhouston() {
    const towers = [[20, 70, 36], [62, 40, 30], [98, 86, 40], [146, 26, 34], [186, 60, 44], [240, 34, 30], [276, 76, 40], [322, 50, 34], [360, 90, 40]].map((t, i) =>
      '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (150 - t[1]) + '" fill="' + (i % 2 ? "#2c3550" : "#36405e") + '"/>' +
      Array.from({ length: Math.floor((150 - t[1]) / 14) }, (_, r) => '<rect x="' + (t[0] + 5) + '" y="' + (t[1] + 6 + r * 14) + '" width="' + (t[2] - 10) + '" height="3" fill="#ffd98a" opacity="' + (r % 3 ? .35 : .7) + '"/>').join("")).join("") +
      '<path d="M146 26l17 -16l17 16z" fill="#36405e"/><path d="M240 34l15 -22l15 22z" fill="#2c3550"/><circle class="dd-bl" cx="255" cy="10" r="3" fill="#ff5a4a"/><circle class="dd-bl dd-bl2" cx="163" cy="8" r="2.5" fill="#ff5a4a"/>';
    const desk = '<rect x="0" y="176" width="400" height="84" fill="#5a3a24"/><rect x="0" y="172" width="400" height="6" fill="#7a5234"/>';
    const contract = '<g transform="rotate(-6 250 210)"><rect x="210" y="186" width="96" height="62" fill="#f6f1e4" stroke="#b8ae96"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="218" y="' + (196 + i * 7) + '" width="' + (i === 5 ? 40 : 78) + '" height="2.5" fill="#9a927e"/>').join("") +
      '<path d="M222 240q10 -8 18 0t18 -2" stroke="#1c3a8a" stroke-width="1.8" fill="none"/></g>' +
      '<g class="dd-pen"><path d="M262 232l40 -22" stroke="#222" stroke-width="5" stroke-linecap="round"/><path d="M262 232l-4 3" stroke="#c9a24a" stroke-width="3"/></g>';
    const record = '<g><circle cx="110" cy="206" r="46" fill="#2a2214" stroke="#c9a24a" stroke-width="3"/>' +
      '<g class="dd-spin"><circle cx="110" cy="206" r="40" fill="' + GOLD + '"/><circle cx="110" cy="206" r="30" fill="none" stroke="#b8902c" stroke-width="1.5"/><circle cx="110" cy="206" r="22" fill="none" stroke="#b8902c" stroke-width="1.5"/>' +
      '<circle cx="110" cy="206" r="12" fill="' + RED + '"/><rect x="104" y="197" width="12" height="3" fill="#fff" opacity=".8"/><circle cx="110" cy="206" r="2" fill="#111"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dds3)"/>' + stars(12) + towers +
      '<rect x="0" y="150" width="400" height="26" fill="#1d2236"/>' + desk + record + contract +
      label("HOUSTON, TX · CHI-TOWN SIGNS DOWN SOUTH", 254, GOLD),
      sky("dds3", "#1b1f3d", "#d9705a"));
  }

  /* 4. The radio booth at 107.5 FM */
  function ddradio() {
    const loop = '<g fill="#3a4766">' + [[96, 52, 18], [118, 30, 14], [136, 62, 20], [160, 22, 16], [180, 46, 18], [202, 66, 14], [222, 38, 18], [244, 58, 16], [264, 70, 18]].map(t => '<rect x="' + t[0] + '" y="' + (40 + t[1]) + '" width="' + t[2] + '" height="' + (110 - t[1]) + '"/>').join("") + '</g>';
    const bars = [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect class="dd-w' + (i % 3 === 1 ? " dd-w2" : i % 3 === 2 ? " dd-w3" : "") + '" x="' + (40 + i * 10) + '" y="196" width="6" height="24" fill="' + (i < 5 ? GRN : GOLD) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1c1a22"/>' +
      '<rect x="80" y="28" width="210" height="122" fill="url(#dds4)" stroke="#444" stroke-width="6"/>' + loop +
      '<g class="dd-bl"><rect x="300" y="22" width="84" height="28" rx="4" fill="#c8102e"/><text x="342" y="42" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">ON AIR</text></g>' +
      '<rect x="306" y="64" width="78" height="44" rx="4" fill="#111" stroke="#555" stroke-width="2"/><text x="345" y="96" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="22" fill="#7bf2a0">107.5</text>' +
      '<text x="345" y="121" text-anchor="middle" ' + font + ' font-size="9" fill="#ccc">FM · CHICAGO</text>' +
      '<rect x="0" y="170" width="400" height="90" fill="#2c2a30"/><rect x="20" y="182" width="360" height="60" rx="4" fill="#3b3940" stroke="#55525a" stroke-width="2"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (170 + i * 18) + '" y="192" width="6" height="40" rx="2" fill="#111"/><rect x="' + (168 + i * 18) + '" y="' + (196 + (i * 7) % 26) + '" width="10" height="6" rx="1" fill="' + (i % 3 ? "#ddd" : GOLD) + '"/>').join("") +
      bars +
      '<path d="M140 170v-36q0 -10 10 -10" stroke="#777" stroke-width="5" fill="none"/><rect x="146" y="98" width="22" height="36" rx="11" fill="#555" stroke="#888" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M148 ' + (106 + i * 6) + 'h18" stroke="#777" stroke-width="1"/>').join("") +
      label("107.5 FM · THE CHI RADIO BOOTH · HIGHER IN ROTATION", 254, CREAM),
      sky("dds4", "#2a3a6a", "#f0a868"));
  }

  /* 5. N California Ave and W Lake St, under the Green Line, the Willis Tower behind */
  function ddcorner() {
    const willis = '<g fill="#1b1d22"><rect x="150" y="70" width="22" height="58"/><rect x="172" y="40" width="22" height="88"/><rect x="194" y="22" width="22" height="106"/><rect x="216" y="52" width="22" height="76"/>' +
      '<rect x="199" y="0" width="3" height="22"/><rect x="208" y="4" width="3" height="18"/></g>' +
      '<g class="dd-bl"><circle cx="200.5" cy="1" r="2" fill="#ff5a4a"/><circle cx="209.5" cy="5" r="2" fill="#ff5a4a"/></g>' +
      '<g fill="#3a3e4c"><rect x="60" y="80" width="30" height="48"/><rect x="96" y="60" width="26" height="68"/><rect x="252" y="66" width="28" height="62"/><rect x="290" y="88" width="34" height="40"/></g>';
    const L = '<rect x="0" y="100" width="400" height="14" fill="#4d5a52"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 102l10 10l10 -10" stroke="#3b4640" stroke-width="2" fill="none"/>').join("") +
      '<g class="dd-train"><rect x="0" y="80" width="200" height="22" rx="4" fill="#d7dce1" stroke="#7d868f" stroke-width="1.5"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 32) + '" y="84" width="20" height="9" rx="2" fill="#1c2630"/>').join("") + '<rect x="0" y="96" width="200" height="3" fill="' + GRN + '"/></g>' +
      '<rect x="40" y="114" width="8" height="110" fill="#5e6a62"/><rect x="250" y="114" width="8" height="110" fill="#5e6a62"/>';
    const bricks = '<rect x="0" y="128" width="400" height="96" fill="#8a4b3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#6e3a2c" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dds5)"/>' + stars(14) + willis + bricks + L +
      tag("DO OR DIE", 60, 196, 44, GOLD, -6) + tag("ALPHA OMEGA", 70, 216, 15, GRN, -3) + tag("WEST SIDE", 196, 214, 15, "#fff", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="344" y="104" width="6" height="120" fill="#2f2f2f"/>' +
      sign(274, 112, 124, "N California Ave") + sign(292, 138, 88, "W Lake St") +
      '<g class="dd-sp"><circle cx="250" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="dd-sp dd-sp2"><circle cx="256" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("dds5", "#151a35", "#d9805a"));
  }

  window.SCENES = { ddstation: ddstation, ddchicagoave: ddchicagoave, ddhouston: ddhouston, ddradio: ddradio, ddcorner: ddcorner };
})();
