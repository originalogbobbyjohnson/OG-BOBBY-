/* dax scenes (Regions tab: Canada; Ottawa, Ontario). CSS classes and ids prefixed dx- (the page's own anim-train is kept).
   1 Rideau station on the O-Train Line 1 (Confederation Line), underground: a white train with its red band sliding in, the black station sign with the red Line 1 bullet.
   2 Parliament Hill: the sandstone Centre Block and its clock tower with green copper roofs, the maple leaf flag waving on top.
   3 The Rideau Canal Skateway in winter: skaters gliding on the ice under the bridges, snow falling.
   4 ByWard Market: the red-brick market building with its stalls and awnings, a car rolling past.
   5 Rideau St and Sussex Dr: green signs, DAX tagged on the brick, the copper-roofed Chateau Laurier behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dxflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.dx-flk{animation:dxflick 2.2s infinite}' +
    '@keyframes dxflag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.dx-flag{transform-box:fill-box;transform-origin:0% 50%;animation:dxflag 1.6s ease-in-out infinite}' +
    '@keyframes dxsnow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.dx-sn{animation:dxsnow 6s linear infinite}.dx-sn2{animation-delay:-2s}.dx-sn3{animation-delay:-4s}' +
    '@keyframes dxskate{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.dx-sk{animation:dxskate 9s linear infinite}.dx-sk2{animation-delay:-3s;animation-duration:11s}.dx-sk3{animation-delay:-6s}' +
    '@keyframes dxskateL{from{transform:translateX(460px)}to{transform:translateX(-60px)}}.dx-skL{animation:dxskateL 10s linear infinite}' +
    '@keyframes dxcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.dx-car{animation:dxcar 7s linear infinite}' +
    '@keyframes dxswing{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.dx-sw{transform-box:fill-box;transform-origin:50% 0%;animation:dxswing 1.8s ease-in-out infinite}.dx-sw2{animation-delay:-.9s}' +
    '@keyframes dxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dx-sp{animation:dxspray 1.4s ease-out infinite}.dx-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const RED = "#da291c", GOLD = "#e8b84a", COPPER = "#5fa38a";
  /* simple maple leaf, centred at x,y, size s */
  const leaf = (x, y, s, c) => '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0 -10l2 4 3 -1-1 5 4 -3 1 2 3 -1-2 5 2 1-6 3 1 3-6 -1v5h-2v-5l-6 1 1 -3-6 -3 2 -1-2 -5 3 1 1 -2 4 3-1 -5 3 1z" fill="' + c + '"/>';
  const flag = (x, y) => '<rect x="' + (x - 1) + '" y="' + y + '" width="2" height="30" fill="#ddd"/><g class="dx-flag"><rect x="' + (x + 1) + '" y="' + y + '" width="30" height="16" fill="#fff"/><rect x="' + (x + 1) + '" y="' + y + '" width="8" height="16" fill="' + RED + '"/><rect x="' + (x + 23) + '" y="' + y + '" width="8" height="16" fill="' + RED + '"/>' + leaf(x + 16, y + 8, 0.55, RED) + '</g>';

  /* 1. Rideau station, O-Train Line 1 */
  function dxstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (50 + i * 56) + '" y="128" width="40" height="24" rx="4" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="116" width="330" height="72" rx="14" fill="#f3f4f4" stroke="#8a9096" stroke-width="2"/>' + win +
      '<rect x="24" y="160" width="330" height="10" fill="' + RED + '"/><rect x="24" y="174" width="330" height="3" fill="#2b2b2b"/>' +
      '<path d="M326 120q28 4 28 34v20h-28z" fill="#e2e4e5"/><rect x="332" y="130" width="16" height="20" rx="3" fill="#1e2a33"/><circle cx="342" cy="180" r="3.5" fill="#fff6c2"/>' +
      '<rect x="272" y="122" width="48" height="10" rx="2" fill="#111"/><text x="296" y="130" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">LINE 1</text></g>';
    return svg(
      '<rect width="400" height="260" fill="#2b2f36"/>' +
      '<path d="M0 0h400v70q-200 -40 -400 0z" fill="#3c424b"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (10 + i * 46) + '" y="8" width="26" height="6" rx="3" fill="#f6f1d0" class="' + (i % 3 ? "" : "dx-flk") + '"/>').join("") +
      '<rect x="0" y="70" width="400" height="120" fill="#5b6470"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="70" width="48" height="120" fill="' + (i % 2 ? "#606a76" : "#58616c") + '"/>').join("") +
      '<rect x="0" y="188" width="400" height="10" fill="#1a1a1a"/>' +
      train +
      '<rect x="0" y="198" width="400" height="62" fill="#9a9590"/><rect x="0" y="198" width="400" height="6" fill="#f2d33b"/>' +
      '<rect x="80" y="62" width="4" height="22" fill="#222"/><rect x="306" y="62" width="4" height="22" fill="#222"/>' +
      '<rect x="60" y="80" width="270" height="32" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<circle cx="84" cy="96" r="11" fill="' + RED + '"/><text x="84" y="101" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">1</text>' +
      '<text x="104" y="103" ' + font + ' font-size="19" fill="#fff">Rideau</text><text x="320" y="101" text-anchor="end" ' + font + ' font-size="10" fill="#bbb">O-TRAIN LINE 1</text>' +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="11" fill="#222">RIDEAU · DOWNTOWN OTTAWA</text>',
      "");
  }

  /* 2. Parliament Hill, Centre Block */
  function dxparl() {
    const win = (x0, n, y) => Array.from({ length: n }, (_, i) => '<path d="M' + (x0 + i * 16) + ' ' + (y + 18) + 'v-12q4 -6 8 0v12z" fill="#2c3440"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dxs2)"/>' +
      '<rect x="20" y="130" width="360" height="70" fill="#c9b48a" stroke="#8f7a52" stroke-width="2"/>' +
      '<path d="M20 130l20 -22h80l20 22z" fill="' + COPPER + '"/><path d="M260 130l20 -22h80l20 22z" fill="' + COPPER + '"/>' +
      win(34, 6, 140) + win(270, 6, 140) + win(34, 6, 168) + win(270, 6, 168) +
      '<rect x="170" y="42" width="60" height="158" fill="#cdb88e" stroke="#8f7a52" stroke-width="2"/>' +
      '<path d="M166 42l34 -32 34 32z" fill="' + COPPER + '"/><rect x="198" y="0" width="4" height="12" fill="#7a8a80"/>' +
      '<circle cx="200" cy="64" r="13" fill="#f6efd6" stroke="#2a2a2a" stroke-width="1.5"/><path d="M200 64v-8M200 64l6 3" stroke="#2a2a2a" stroke-width="1.5"/>' +
      '<path d="M184 88v24q16 -12 32 0v-24z" fill="#2c3440"/><path d="M186 130v20q14 -10 28 0v-20z" fill="#2c3440"/><path d="M188 168v32h24v-32q-12 -10 -24 0z" fill="#4a3a28"/>' +
      flag(186, -2) +
      '<rect x="0" y="200" width="400" height="60" fill="#5e8a4a"/><path d="M180 200h40l20 60h-80z" fill="#cfc6b5"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">PARLIAMENT HILL · OTTAWA</text>',
      sky("dxs2", "#8fc3e6", "#f6efe2"));
  }

  /* 3. Rideau Canal Skateway */
  function dxcanal() {
    const skater = (cls, x, c) => '<g class="' + cls + '"><circle cx="' + x + '" cy="176" r="5" fill="' + c + '"/><path d="M' + x + ' 181l-2 14 6 6M' + x + ' 186l-8 6M' + x + ' 186l9 -2" stroke="' + c + '" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M' + (x - 6) + ' 202h10" stroke="#ccc" stroke-width="2"/><rect x="' + (x - 4) + '" y="170" width="8" height="4" fill="' + RED + '"/></g>';
    const fl = (cls, x, y) => '<g class="dx-sn ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="2" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dxs3)"/>' +
      '<g fill="#7e8aa0"><rect x="0" y="70" width="40" height="80"/><rect x="44" y="90" width="30" height="60"/><rect x="330" y="60" width="36" height="90"/><rect x="368" y="84" width="32" height="66"/></g>' +
      '<path d="M90 110q110 -40 220 0v16q-110 -36 -220 0z" fill="#8c8478"/><rect x="90" y="120" width="10" height="34" fill="#8c8478"/><rect x="300" y="120" width="10" height="34" fill="#8c8478"/>' +
      '<path d="M0 150h400v110H0z" fill="#dfe9f2"/><path d="M0 150q200 -10 400 0v10q-200 -8 -400 0z" fill="#f8fbff"/>' +
      '<path d="M0 214q200 -14 400 0" stroke="#bcd0e2" stroke-width="2" fill="none"/>' +
      skater("dx-sk", 0, "#1f3a7a") + skater("dx-sk dx-sk2", 0, "#2a6e3f") + skater("dx-skL", 0, "#6b2a5a") +
      fl("", 40, 0) + fl("dx-sn2", 120, 0) + fl("dx-sn3", 200, 0) + fl("", 280, -60) + fl("dx-sn2", 360, -30) + fl("dx-sn3", 80, -90) +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#2a3a4a">RIDEAU CANAL SKATEWAY</text>',
      sky("dxs3", "#b9c8da", "#eef3f8"));
  }

  /* 4. ByWard Market */
  function dxbyward() {
    const aw = ["#b5402a", "#2a6e3f", "#d4a017", "#1f3a7a", "#b5402a"];
    return svg(
      '<rect width="400" height="260" fill="url(#dxs4)"/>' +
      '<rect x="70" y="60" width="260" height="120" fill="#9b4a34" stroke="#6e2f20" stroke-width="2"/><path d="M60 60l140 -30 140 30z" fill="#4c5560"/>' +
      '<rect x="180" y="18" width="40" height="18" fill="#e8e0d0"/><path d="M178 18l22 -12 22 12z" fill="#4c5560"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (88 + i * 40) + ' 116v-30q10 -10 20 0v30z" fill="#f6dfa3" opacity=".9"/>').join("") +
      '<rect x="70" y="128" width="260" height="6" fill="#e8e0d0"/>' +
      aw.map((c, i) => '<path d="M' + (20 + i * 76) + ' 170h70l-6 14H' + (26 + i * 76) + 'z" fill="' + c + '"/><path d="M' + (20 + i * 76) + ' 184h70" stroke="#fff" stroke-width="2" stroke-dasharray="6 6"/>' +
        '<rect x="' + (26 + i * 76) + '" y="184" width="58" height="22" fill="#6b4a2a"/>' +
        '<circle cx="' + (36 + i * 76) + '" cy="182" r="5" fill="' + ["#e8505b", "#f2c94c", "#3aa655", "#e8743b", "#c94f86"][i] + '"/><circle cx="' + (50 + i * 76) + '" cy="182" r="5" fill="' + ["#f2c94c", "#e8505b", "#e8743b", "#3aa655", "#f2c94c"][i] + '"/>').join("") +
      '<g class="dx-sw"><rect x="160" y="140" width="2" height="16" fill="#333"/><rect x="150" y="156" width="22" height="12" rx="2" fill="#2a6e3f"/><text x="161" y="165" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">OPEN</text></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#4a4a4f"/><path d="M0 236h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="dx-car"><rect x="0" y="222" width="58" height="14" rx="5" fill="#d9d9d9"/><rect x="12" y="214" width="32" height="10" rx="3" fill="#d9d9d9"/><rect x="15" y="216" width="12" height="6" fill="#bfe3ff"/><rect x="30" y="216" width="12" height="6" fill="#bfe3ff"/><circle cx="13" cy="236" r="5" fill="#111"/><circle cx="45" cy="236" r="5" fill="#111"/></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="11" fill="#eee">BYWARD MARKET · OTTAWA</text>',
      sky("dxs4", "#a9d3f2", "#f6efe2"));
  }

  /* 5. Rideau St and Sussex Dr, Chateau Laurier behind */
  function dxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dxs5)"/>' +
      '<rect x="100" y="60" width="200" height="80" fill="#c9b99a" stroke="#8f7a52" stroke-width="2"/>' +
      '<path d="M96 60l24 -26h160l24 26z" fill="' + COPPER + '"/><path d="M110 34l14 -24 14 24z" fill="' + COPPER + '"/><path d="M262 34l14 -24 14 24z" fill="' + COPPER + '"/>' +
      '<path d="M180 34l20 -28 20 28z" fill="' + COPPER + '"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (114 + i * 26) + '" y="70" width="12" height="16" fill="#f6dfa3" opacity=".9"/><rect x="' + (114 + i * 26) + '" y="96" width="12" height="16" fill="#f6dfa3" opacity=".9"/>').join("") +
      '<g fill="#2b2f45"><rect x="0" y="86" width="90" height="50"/><rect x="310" y="76" width="90" height="60"/></g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("DAX", 34, 196, 66, GOLD, -6) + tag("GO TODAY", 150, 214, 20, "#ff7a6b", -4) + tag("PAIN PAINTS", 30, 216, 15, "#9fd3ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(260, 98, 120, "Rideau St") + sign(254, 124, 130, "Sussex Dr") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="dx-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="dx-sp"><circle cx="150" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="dx-sp dx-sp2"><circle cx="156" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("dxs5", "#2e3566", "#f0a070"));
  }

  window.SCENES = { dxstation: dxstation, dxparl: dxparl, dxcanal: dxcanal, dxbyward: dxbyward, dxcorner: dxcorner };
})();
