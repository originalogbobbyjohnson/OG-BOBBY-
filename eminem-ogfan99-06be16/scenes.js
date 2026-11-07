/* eminem scenes (Regions tab: Detroit; East 8 Mile, Dresden St). CSS classes and ids prefixed em- (the page's own anim-train is kept, used on the bus).
   1 DDOT Route 17 (Eight Mile) pulling up to the 8 Mile & Dresden stop on the east side, a few blocks up from the Dresden St house.
   2 The Dresden St house from The Marshall Mathers LP cover: the small tan house, the porch and steps, the chain-link fence, the porch light flickering.
   3 The Michigan Theatre parking garage downtown (the 8 Mile movie): the gilded, crumbling theatre ceiling over parked cars, dust falling.
   4 Comerica Park (the Home & Home Tour, 2010): the ballpark at night, light towers, the stage lights sweeping, the crowd's lights waving.
   5 E 8 Mile Rd and Dresden St: green signs, EMINEM tagged on the cinder block, the bronze Joe Louis fist hanging from its pyramid frame behind.
   No logos, no faces, no numeral 9 anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes emflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.em-flk{animation:emflick 2.2s infinite}.em-flk2{animation-delay:.7s}' +
    '@keyframes emglow{0%,100%{opacity:.35}50%{opacity:1}}.em-gl{animation:emglow 2s ease-in-out infinite}.em-gl2{animation-delay:.6s}.em-gl3{animation-delay:1.2s}' +
    '@keyframes emcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.em-car{animation:emcar 7s linear infinite}.em-car2{animation-delay:-3.5s}' +
    '@keyframes emsnow{from{transform:translateY(-20px)}to{transform:translateY(280px)}}.em-sn{animation:emsnow 6s linear infinite}.em-sn2{animation-delay:-2s}.em-sn3{animation-delay:-4s}' +
    '@keyframes emdust{0%{transform:translateY(0);opacity:0}20%{opacity:.8}100%{transform:translateY(120px);opacity:0}}.em-du{animation:emdust 3.2s linear infinite}.em-du2{animation-delay:-1.1s}.em-du3{animation-delay:-2.2s}' +
    '@keyframes emsweepL{0%,100%{transform:rotate(-26deg)}50%{transform:rotate(22deg)}}.em-swL{transform-box:view-box;transform-origin:150px 196px;animation:emsweepL 3.4s ease-in-out infinite}' +
    '@keyframes emsweepR{0%,100%{transform:rotate(24deg)}50%{transform:rotate(-24deg)}}.em-swR{transform-box:view-box;transform-origin:250px 196px;animation:emsweepR 3s ease-in-out infinite}' +
    '@keyframes emwave{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.em-wv{animation:emwave .9s ease-in-out infinite}.em-wv2{animation-delay:.3s}.em-wv3{animation-delay:.6s}' +
    '@keyframes emsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.em-sway{transform-box:view-box;transform-origin:250px 40px;animation:emsway 4s ease-in-out infinite}' +
    '@keyframes emspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.em-sp{animation:emspray 1.4s ease-out infinite}.em-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const RED = "#e23b3b", GOLD = "#e8b04a", BLUE = "#4a8fd6", DDOT = "#0b6e4f", BRONZE = "#8a5a2b";
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 47 + 9) % 400) + '" cy="' + ((i * 31) % 80 + 6) + '" r="1.1" fill="#fff" opacity=".7"/>').join("");
  const snow = n => Array.from({ length: n }, (_, i) => '<circle class="em-sn' + (i % 3 === 1 ? " em-sn2" : i % 3 === 2 ? " em-sn3" : "") + '" cx="' + ((i * 37 + 11) % 400) + '" cy="' + ((i * 53) % 200) + '" r="' + (1 + (i % 2)) + '" fill="#fff" opacity=".75"/>').join("");

  /* 1. DDOT Route 17 at 8 Mile & Dresden */
  function emstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (80 + i * 40) + '" y="122" width="32" height="26" rx="3" fill="#1e2a26"/>').join("");
    const bus = '<g class="anim-train"><rect x="48" y="110" width="326" height="86" rx="10" fill="#f2f4f1" stroke="#98a0a6" stroke-width="2"/>' + win +
      '<rect x="48" y="156" width="326" height="13" fill="' + DDOT + '"/><rect x="48" y="171" width="326" height="3" fill="' + GOLD + '"/>' +
      '<rect x="52" y="120" width="22" height="54" rx="2" fill="#1e2a26"/>' +
      '<rect x="78" y="113" width="200" height="7" rx="2" fill="#111"/><text x="178" y="118.6" text-anchor="middle" ' + font + ' font-size="5.4" fill="#ffb347">17 EIGHT MILE · EAST</text>' +
      '<text x="330" y="188" text-anchor="middle" ' + font + ' font-size="11" fill="' + DDOT + '">DDOT</text>' +
      '<circle cx="112" cy="198" r="15" fill="#1b1b1b"/><circle cx="112" cy="198" r="6" fill="#9aa1a6"/><circle cx="318" cy="198" r="15" fill="#1b1b1b"/><circle cx="318" cy="198" r="6" fill="#9aa1a6"/>' +
      '<circle class="em-flk" cx="368" cy="184" r="4" fill="#fff6c2"/></g>';
    const pole = '<rect x="22" y="70" width="4" height="146" fill="#666"/><rect x="4" y="62" width="40" height="40" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="24" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text><circle cx="24" cy="91" r="8" fill="#fff"/><text x="24" y="94.5" text-anchor="middle" ' + font + ' font-size="9" fill="' + DDOT + '">17</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#ems1)"/>' +
      '<g fill="#4a4c55"><rect x="0" y="88" width="84" height="42"/><rect x="88" y="96" width="60" height="34"/><rect x="154" y="84" width="96" height="46"/><rect x="256" y="92" width="64" height="38"/><rect x="326" y="80" width="74" height="50"/></g>' +
      '<g fill="#6a6c75"><rect x="160" y="74" width="84" height="12"/><text x="202" y="83.5" text-anchor="middle" ' + font + ' font-size="8" fill="#e8e6df">PARTY STORE</text></g>' +
      Array.from({ length: 9 }, (_, i) => '<rect class="em-gl' + (i % 3 ? " em-gl2" : "") + '" x="' + (12 + i * 44) + '" y="' + (100 + (i % 2) * 10) + '" width="10" height="7" fill="' + GOLD + '" opacity=".6"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#3d4148"/><rect x="0" y="208" width="400" height="4" fill="#e9edf2"/>' +
      '<path d="M0 236h400" stroke="#f2d23c" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus + pole + snow(26) +
      '<rect x="92" y="20" width="216" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="35" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">8 MILE &amp; DRESDEN</text>' +
      '<rect x="128" y="40" width="22" height="11" rx="5.5" fill="' + DDOT + '"/><text x="139" y="48.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">17</text>' +
      '<text x="158" y="48.5" ' + font + ' font-size="8" fill="#cfd3d8">EAST SIDE · DETROIT</text>',
      sky("ems1", "#5b6270", "#a9adb5"));
  }

  /* 2. The Dresden St house (The Marshall Mathers LP cover) */
  function emhouse() {
    const siding = Array.from({ length: 14 }, (_, i) => '<path d="M110 ' + (96 + i * 6) + 'h180" stroke="#9c8463" stroke-width="1"/>').join("");
    const fence = Array.from({ length: 30 }, (_, i) => '<path d="M' + (i * 14) + ' 196l7 -18l7 18" stroke="#9aa0a6" stroke-width="1" fill="none"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ems2)"/>' + stars(10) +
      '<g fill="#2b2a2f"><rect x="0" y="120" width="96" height="66"/><path d="M0 120l48-30l48 30z"/><rect x="306" y="124" width="94" height="62"/><path d="M306 124l47-28l47 28z"/></g>' +
      '<rect class="em-gl" x="30" y="140" width="14" height="12" fill="' + GOLD + '" opacity=".5"/><rect class="em-gl em-gl3" x="340" y="146" width="14" height="12" fill="' + GOLD + '" opacity=".5"/>' +
      /* house */
      '<path d="M100 96l100-52l100 52z" fill="#4a3a2c"/><path d="M100 96l100-52l100 52" fill="none" stroke="#2a2018" stroke-width="3"/>' +
      '<rect x="110" y="94" width="180" height="86" fill="#c2a77e"/>' + siding +
      '<rect x="186" y="60" width="28" height="24" fill="#c2a77e" stroke="#7a6446" stroke-width="2"/><rect x="192" y="64" width="16" height="16" fill="#3a3a44"/>' +
      '<rect x="124" y="108" width="40" height="34" fill="#2d2f38" stroke="#efe9dc" stroke-width="3"/><path d="M144 108v34M124 125h40" stroke="#efe9dc" stroke-width="2"/>' +
      '<rect x="236" y="108" width="40" height="34" fill="#2d2f38" stroke="#efe9dc" stroke-width="3"/><path d="M256 108v34M236 125h40" stroke="#efe9dc" stroke-width="2"/>' +
      '<rect x="184" y="112" width="32" height="54" fill="#5a3b26" stroke="#efe9dc" stroke-width="2"/><circle cx="210" cy="140" r="2" fill="' + GOLD + '"/>' +
      /* porch */
      '<rect x="160" y="100" width="80" height="6" fill="#efe9dc"/><rect x="164" y="104" width="5" height="64" fill="#efe9dc"/><rect x="231" y="104" width="5" height="64" fill="#efe9dc"/>' +
      '<rect x="156" y="166" width="88" height="8" fill="#8f8f94"/><rect x="166" y="174" width="68" height="7" fill="#a3a3a8"/><rect x="176" y="181" width="48" height="7" fill="#b6b6bb"/>' +
      '<circle class="em-flk" cx="226" cy="114" r="3.5" fill="#fff3c4"/><circle class="em-flk" cx="226" cy="114" r="10" fill="#fff3c4" opacity=".25"/>' +
      /* yard, fence, street */
      '<rect x="0" y="186" width="400" height="24" fill="#4f5a3a"/>' +
      '<rect x="0" y="176" width="400" height="2" fill="#9aa0a6"/>' + fence + '<rect x="0" y="194" width="400" height="2" fill="#9aa0a6"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#34373e"/><rect x="0" y="208" width="400" height="3" fill="#c8ccd2"/>' +
      '<g class="em-car"><rect x="0" y="228" width="58" height="16" rx="5" fill="' + BLUE + '"/><rect x="10" y="219" width="34" height="11" rx="4" fill="' + BLUE + '"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="46" cy="244" r="5" fill="#111"/><circle cx="56" cy="234" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="262" y="226" width="124" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="324" y="241" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Dresden St</text>',
      sky("ems2", "#232838", "#7f6a72"));
  }

  /* 3. The Michigan Theatre parking garage (8 Mile) */
  function emgarage() {
    const ribs = Array.from({ length: 7 }, (_, i) => '<path d="M' + (20 + i * 60) + ' 20q0 40 ' + (i < 3 ? 30 : i > 3 ? -30 : 0) + ' 70" stroke="' + GOLD + '" stroke-width="3" fill="none" opacity=".75"/>').join("");
    const rosettes = Array.from({ length: 12 }, (_, i) => '<circle cx="' + (18 + i * 33) + '" cy="' + (16 + (i % 2) * 8) + '" r="6" fill="none" stroke="' + GOLD + '" stroke-width="2" opacity=".8"/>').join("");
    const holes = '<path d="M120 0q20 22 52 10q14 18 40 4l-4 -14z" fill="#141217"/><path d="M290 0q10 16 34 12q8 10 26 2l0 -14z" fill="#141217"/>';
    const car = (x, col) => '<g><rect x="' + x + '" y="196" width="66" height="20" rx="5" fill="' + col + '"/><rect x="' + (x + 12) + '" y="184" width="40" height="14" rx="4" fill="' + col + '"/><rect x="' + (x + 16) + '" y="187" width="14" height="9" fill="#2b3340"/><rect x="' + (x + 34) + '" y="187" width="14" height="9" fill="#2b3340"/><circle cx="' + (x + 14) + '" cy="216" r="6" fill="#111"/><circle cx="' + (x + 52) + '" cy="216" r="6" fill="#111"/></g>';
    const dust = Array.from({ length: 14 }, (_, i) => '<circle class="em-du' + (i % 3 === 1 ? " em-du2" : i % 3 === 2 ? " em-du3" : "") + '" cx="' + (30 + i * 26) + '" cy="' + (40 + (i % 4) * 6) + '" r="1.4" fill="#e9dcc0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1715"/>' +
      '<path d="M0 0h400v100q-200 -40 -400 0z" fill="#6e5a3e"/>' + rosettes + ribs + holes +
      '<path d="M0 100q200 -40 400 0" stroke="' + GOLD + '" stroke-width="4" fill="none"/>' +
      '<path d="M0 108q200 -40 400 0" stroke="#a8874f" stroke-width="2" fill="none"/>' +
      '<g fill="#8b7350"><rect x="20" y="96" width="22" height="130"/><rect x="358" y="96" width="22" height="130"/></g>' +
      '<g fill="' + GOLD + '" opacity=".7"><rect x="18" y="96" width="26" height="6"/><rect x="356" y="96" width="26" height="6"/></g>' +
      '<path d="M60 96q80 -24 140 -24t140 24v8h-280z" fill="#4a3e2e"/>' +
      '<rect x="0" y="150" width="400" height="12" fill="#2e2a26"/>' +
      '<path d="M200 40l-70 186h140z" fill="#fff4d6" opacity=".09"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4b4c50"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (50 + i * 64) + ' 216l-10 44" stroke="#f2f2ee" stroke-width="2.5"/>').join("") +
      car(56, "#7a2f2f") + car(140, "#3a4f6e") + car(270, "#c9c3b4") + dust +
      '<rect x="146" y="116" width="108" height="22" rx="2" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="131" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">PARK ON LEVEL 3</text>',
      "");
  }

  /* 4. Comerica Park, Home & Home Tour night */
  function emcomerica() {
    const tower = x => '<rect x="' + (x + 8) + '" y="40" width="4" height="120" fill="#3a3d46"/><rect x="' + x + '" y="26" width="20" height="16" rx="2" fill="#2a2d35"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle class="em-flk' + (i % 2 ? " em-flk2" : "") + '" cx="' + (x + 3 + (i % 3) * 7) + '" cy="' + (30 + Math.floor(i / 3) * 7) + '" r="2.4" fill="#fffbe6"/>').join("");
    const crowd = Array.from({ length: 40 }, (_, i) => '<circle class="em-wv' + (i % 3 === 1 ? " em-wv2" : i % 3 === 2 ? " em-wv3" : "") + '" cx="' + (6 + i * 10) + '" cy="' + (236 + (i % 2) * 6) + '" r="6" fill="#111"/>').join("") +
      Array.from({ length: 14 }, (_, i) => '<circle class="em-wv' + (i % 2 ? " em-wv2" : "") + ' em-flk" cx="' + (16 + i * 28) + '" cy="' + (218 + (i % 3) * 4) + '" r="2" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ems4)"/>' + stars(16) +
      '<g fill="#1f2230"><rect x="40" y="70" width="26" height="44"/><rect x="70" y="56" width="20" height="58"/><rect x="300" y="62" width="24" height="52"/><rect x="330" y="76" width="30" height="38"/></g>' +
      '<path d="M0 120q200 -40 400 0v40h-400z" fill="#2a2f3e"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M0 ' + (126 + i * 7) + 'q200 -40 400 0" stroke="#3a4256" stroke-width="2" fill="none"/>').join("") +
      tower(14) + tower(366) +
      '<rect x="150" y="62" width="100" height="44" rx="2" fill="#141824" stroke="#5d6478" stroke-width="2"/><text x="200" y="80" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">HOME &amp; HOME</text><text x="200" y="96" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">DETROIT</text>' +
      '<rect x="0" y="160" width="400" height="60" fill="#2f6b3a"/><path d="M80 220l120 -50l120 50z" fill="#b5835a" opacity=".65"/>' +
      '<g class="em-swL"><path d="M150 196l-60 -160h30z" fill="' + BLUE + '" opacity=".35"/></g><g class="em-swR"><path d="M250 196l60 -160h-30z" fill="' + RED + '" opacity=".35"/></g>' +
      '<rect x="120" y="186" width="160" height="22" fill="#111"/><rect x="120" y="182" width="160" height="5" fill="' + GOLD + '"/>' +
      '<rect x="128" y="160" width="6" height="26" fill="#333"/><rect x="266" y="160" width="6" height="26" fill="#333"/><rect x="128" y="158" width="144" height="5" fill="#333"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle class="em-flk' + (i % 2 ? " em-flk2" : "") + '" cx="' + (140 + i * 24) + '" cy="166" r="3" fill="' + (i % 2 ? RED : BLUE) + '"/>').join("") +
      crowd,
      sky("ems4", "#0a0c18", "#2a2a46"));
  }

  /* 5. E 8 Mile Rd and Dresden St, the Joe Louis fist behind */
  function emcorner() {
    const fist = '<g><path d="M200 34l-60 100M200 34l60 100M200 34l-26 100M200 34l26 100" stroke="#5f646d" stroke-width="3" fill="none"/>' +
      '<path d="M200 34v12M188 36l12 10l12 -10" stroke="#5f646d" stroke-width="1.6" fill="none"/>' +
      '<g class="em-sway"><path d="M200 46v14" stroke="#5f646d" stroke-width="1.6"/>' +
      '<rect x="160" y="60" width="64" height="15" rx="6" fill="' + BRONZE + '"/>' +
      '<rect x="220" y="56" width="26" height="23" rx="6" fill="#9a6a36"/><path d="M228 58v19M234 58v19M240 58v19" stroke="#6e4620" stroke-width="1.4"/>' +
      '<path d="M162 64h56" stroke="#b07c44" stroke-width="2" opacity=".7"/></g></g>';
    const block = Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (140 + i * 7) + 'h400" stroke="#9c9c98" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 11 }, (_, j) => '<path d="M' + (j * 40 + (i % 2) * 20) + ' ' + (133 + i * 7) + 'v7" stroke="#9c9c98" stroke-width="1"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ems5)"/>' + stars(14) +
      '<g fill="#2a2d3a"><rect x="60" y="100" width="40" height="34"/><rect x="104" y="88" width="30" height="46"/><rect x="270" y="92" width="34" height="42"/><rect x="308" y="104" width="44" height="30"/></g>' +
      '<rect x="126" y="130" width="148" height="6" fill="#4a4e58"/>' + fist +
      '<rect x="0" y="133" width="400" height="91" fill="#b9b8b2"/>' + block +
      tag("EMINEM", 26, 190, 44, RED, -6) + tag("SLIM SHADY", 30, 214, 22, "#f5f5f0", -4) + tag("D12", 214, 210, 20, BLUE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 128, "E 8 Mile Rd") + sign(262, 124, 128, "Dresden St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="em-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="em-sp"><circle cx="238" cy="172" r="3" fill="' + RED + '" opacity=".7"/></g><g class="em-sp em-sp2"><circle cx="244" cy="166" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("ems5", "#0e0f1c", "#3f4a6a"));
  }

  window.SCENES = { emstation: emstation, emhouse: emhouse, emgarage: emgarage, emcomerica: emcomerica, emcorner: emcorner };
})();
