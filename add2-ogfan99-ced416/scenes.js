/* add2 scenes (Regions tab: CHICAGO; Englewood, South Side). CSS classes prefixed a2- (the page's own anim-train is kept).
   1 Ashland/63rd, the end of the Green Line's Ashland branch: elevated terminal over 63rd St, a silver CTA train sliding in.
   2 Mt. Pisgah Missionary Baptist Church on King Dr in Bronzeville (the old Sinai Temple, pale limestone with columns), home of his Haven Studio for South Side teens.
   3 The 63rd Street Beach House in Jackson Park: the long cream arcade on the lake, the sun coming up over Lake Michigan ("sun rising through the dark night").
   4 Kennedy-King College at 63rd and Halsted in Englewood: red brick and glass campus, the radio station's ON AIR light blinking.
   5 S Normal Ave and W 72nd St: green Chicago street signs, ADD-2 tagged on the wall, the Hamilton Park fieldhouse behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes a2note{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-70px);opacity:0}}.a2-note{animation:a2note 3s ease-out infinite}.a2-note2{animation-delay:-1s}.a2-note3{animation-delay:-2s}' +
    '@keyframes a2sun{0%{transform:translateY(16px)}100%{transform:translateY(-10px)}}.a2-sun{animation:a2sun 8s ease-out infinite alternate}' +
    '@keyframes a2wave{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.a2-wave{animation:a2wave 3s ease-in-out infinite}.a2-wave2{animation-delay:-1.5s}' +
    '@keyframes a2gull{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.a2-gull{animation:a2gull 12s linear infinite}.a2-gull2{animation-delay:-6s}' +
    '@keyframes a2blink{0%,100%{opacity:.25}50%{opacity:1}}.a2-bl{animation:a2blink 1.4s ease-in-out infinite}.a2-bl2{animation-delay:-.7s}' +
    '@keyframes a2walk{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.a2-walk{animation:a2walk 14s linear infinite}.a2-walk2{animation-delay:-7s}' +
    '@keyframes a2car{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.a2-car{animation:a2car 7s linear infinite}' +
    '@keyframes a2spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.a2-sp{animation:a2spray 1.4s ease-out infinite}.a2-sp2{animation-delay:.45s}' +
    '@keyframes a2flag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.a2-flag{transform-box:fill-box;transform-origin:0% 50%;animation:a2flag 2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const person = (x, y, c) => '<circle cx="' + x + '" cy="' + (y - 22) + '" r="4" fill="#2b2119"/><rect x="' + (x - 4) + '" y="' + (y - 18) + '" width="8" height="12" rx="2" fill="' + c + '"/><rect x="' + (x - 4) + '" y="' + (y - 6) + '" width="3" height="8" fill="#223"/><rect x="' + (x + 1) + '" y="' + (y - 6) + '" width="3" height="8" fill="#223"/>';

  function a2station() {
    let girders = '';
    for (let x = 6; x < 400; x += 56) girders += '<rect x="' + x + '" y="150" width="8" height="110" fill="#3d4247"/><path d="M' + (x + 4) + ' 150l-10 -10h28z" fill="#3d4247"/>';
    let win = '';
    for (let i = 0; i < 5; i++) win += '<rect x="' + (14 + i * 30) + '" y="104" width="20" height="16" rx="2" fill="#bfe3ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#a2s1)"/>' +
      // South Side rooftops below
      '<rect x="0" y="196" width="400" height="64" fill="#5a4a40"/><rect x="20" y="176" width="60" height="30" fill="#7a5a45"/><rect x="96" y="182" width="48" height="24" fill="#8a6a50"/><rect x="250" y="174" width="70" height="32" fill="#6d5546"/><rect x="336" y="184" width="54" height="22" fill="#7f6150"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#3a3a3e"/><g class="a2-car"><rect x="0" y="236" width="50" height="13" rx="4" fill="#d24a3a"/><rect x="10" y="229" width="28" height="9" rx="3" fill="#d24a3a"/></g>' +
      girders +
      // deck + platform + canopy
      '<rect x="0" y="134" width="400" height="18" fill="#4a5056"/><rect x="0" y="126" width="400" height="8" fill="#8d9399"/>' +
      '<rect x="180" y="40" width="220" height="10" fill="#2b2f33"/><path d="M180 50h220v6H180z" fill="#3ec46d"/>' +
      '<rect x="196" y="56" width="5" height="70" fill="#2b2f33"/><rect x="300" y="56" width="5" height="70" fill="#2b2f33"/><rect x="390" y="56" width="5" height="70" fill="#2b2f33"/>' +
      // station sign (CTA: dark panel, line color strip)
      '<rect x="214" y="64" width="160" height="34" rx="3" fill="#111"/><rect x="214" y="92" width="160" height="6" fill="#009b3a"/><text x="294" y="86" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Ashland/63rd</text>' +
      '<rect x="214" y="102" width="74" height="16" rx="3" fill="#009b3a"/><text x="251" y="114" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">GREEN LINE</text>' +
      // train
      '<g class="anim-train"><rect x="4" y="96" width="166" height="32" rx="6" fill="#c9ced3" stroke="#6c737a" stroke-width="2"/><rect x="4" y="122" width="166" height="4" fill="#009b3a"/>' + win +
      '<rect x="160" y="100" width="8" height="14" rx="2" fill="#bfe3ff"/><rect x="112" y="86" width="56" height="12" rx="2" fill="#111"/><text x="140" y="95" text-anchor="middle" ' + font + ' font-size="7" fill="#3ec46d">ASHLAND/63</text></g>',
      sky('a2s1', '#f5b26b', '#7fa7c9'));
  }

  function a2pisgah() {
    let cols = '';
    for (let i = 0; i < 6; i++) cols += '<rect x="' + (112 + i * 34) + '" y="104" width="14" height="96" fill="#efe6cf" stroke="#c9bb98" stroke-width="1.5"/><rect x="' + (108 + i * 34) + '" y="98" width="22" height="8" fill="#e2d6b8"/><rect x="' + (108 + i * 34) + '" y="198" width="22" height="6" fill="#e2d6b8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#a2s2)"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#7c7f84"/><rect x="0" y="212" width="400" height="10" fill="#b8b9ba"/>' +
      // trees on King Dr
      '<circle cx="34" cy="150" r="30" fill="#4e8a3e"/><rect x="31" y="170" width="6" height="44" fill="#5a3d24"/><circle cx="372" cy="146" r="32" fill="#4e8a3e"/><rect x="369" y="168" width="6" height="46" fill="#5a3d24"/>' +
      // temple body
      '<rect x="88" y="78" width="224" height="134" fill="#e9dfc4" stroke="#bcae8c" stroke-width="2"/>' +
      '<path d="M84 80l116 -42l116 42z" fill="#efe6cf" stroke="#bcae8c" stroke-width="2"/><rect x="88" y="80" width="224" height="16" fill="#ded2b2"/>' +
      '<text x="200" y="92" text-anchor="middle" ' + font + ' font-size="10" fill="#6b5a3a" letter-spacing="2">MT. PISGAH</text>' +
      '<rect x="100" y="104" width="200" height="96" fill="#5b4a36" opacity=".35"/>' + cols +
      '<rect x="176" y="150" width="48" height="50" rx="2" fill="#5a3a22"/><path d="M176 150q24 -18 48 0" fill="#5a3a22"/>' +
      '<rect x="96" y="204" width="208" height="6" fill="#d8ccad"/><rect x="104" y="210" width="192" height="6" fill="#cfc2a1"/>' +
      // Haven Studio sign + music notes
      '<rect x="318" y="176" width="70" height="26" rx="3" fill="#1e2a22" stroke="#3ec46d" stroke-width="1.5"/><text x="353" y="187" text-anchor="middle" ' + font + ' font-size="8" fill="#3ec46d">HAVEN</text><text x="353" y="197" text-anchor="middle" ' + font + ' font-size="8" fill="#f2c14e">STUDIO</text>' +
      '<g class="a2-note"><text x="240" y="150" font-size="18" fill="#f2c14e">&#9835;</text></g><g class="a2-note a2-note2"><text x="150" y="160" font-size="16" fill="#3ec46d">&#9834;</text></g><g class="a2-note a2-note3"><text x="200" y="140" font-size="18" fill="#fff">&#9835;</text></g>',
      sky('a2s2', '#8fc4ee', '#d8ecfa'));
  }

  function a2beach() {
    let arches = '';
    for (let i = 0; i < 8; i++) arches += '<path d="M' + (66 + i * 34) + ' 196v-26q11 -14 22 0v26z" fill="#6a5a46"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#a2s3)"/>' +
      '<g class="a2-sun"><circle cx="300" cy="78" r="26" fill="#ffd34d"/><circle cx="300" cy="78" r="36" fill="#ffd34d" opacity=".25"/></g>' +
      // lake
      '<rect x="0" y="96" width="400" height="56" fill="#2f78a8"/><path d="M270 102h60M278 110h44M284 118h32M290 126h20M294 134h12" stroke="#ffd34d" stroke-width="3" opacity=".7"/>' +
      '<g class="a2-wave"><path d="M10 112q10 -5 20 0t20 0M90 126q10 -5 20 0t20 0M210 118q10 -5 20 0t20 0M320 132q10 -5 20 0t20 0" stroke="#bfe3ff" stroke-width="2" fill="none"/></g>' +
      '<g class="a2-wave a2-wave2"><path d="M40 140q10 -5 20 0t20 0M150 108q10 -5 20 0t20 0M270 144q10 -5 20 0t20 0" stroke="#bfe3ff" stroke-width="2" fill="none"/></g>' +
      '<g class="a2-gull"><path d="M0 60q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="a2-gull a2-gull2"><path d="M0 44q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      // beach
      '<rect x="0" y="150" width="400" height="22" fill="#e8d3a0"/>' +
      // beach house: long cream arcade, low hipped roof
      '<rect x="40" y="152" width="320" height="50" fill="#efe3c4" stroke="#bfa97c" stroke-width="2"/><path d="M34 154l20 -16h292l20 16z" fill="#b5653a"/>' +
      '<rect x="160" y="126" width="80" height="28" fill="#efe3c4" stroke="#bfa97c" stroke-width="2"/><path d="M154 128l46 -16l46 16z" fill="#b5653a"/>' +
      arches +
      '<text x="200" y="146" text-anchor="middle" ' + font + ' font-size="8" fill="#6a5a46">63RD ST BEACH</text>' +
      '<rect x="0" y="202" width="400" height="58" fill="#7aa35a"/><path d="M0 222h400" stroke="#c9b98c" stroke-width="10"/>' +
      '<g class="a2-walk">' + person(20, 230, '#e2574c') + '</g><g class="a2-walk a2-walk2">' + person(20, 232, '#3ec46d') + '</g>',
      sky('a2s3', '#3b4f86', '#f6a96a'));
  }

  function a2kkc() {
    let win = '';
    for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) win += '<rect x="' + (40 + c * 22) + '" y="' + (98 + r * 28) + '" width="14" height="18" fill="#bfe3ff" opacity=".8"/>';
    let glass = '';
    for (let c = 0; c < 6; c++) glass += '<rect x="' + (196 + c * 18) + '" y="80" width="16" height="122" fill="#7fb6d8" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#a2s4)"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#7c7f84"/><rect x="0" y="204" width="400" height="10" fill="#b8b9ba"/>' +
      // brick wing
      '<rect x="28" y="86" width="150" height="118" fill="#9c3f2c" stroke="#5e2216" stroke-width="2"/><rect x="28" y="80" width="150" height="8" fill="#5e2216"/>' + win +
      // glass atrium
      '<rect x="190" y="74" width="114" height="130" fill="#3d5f78" stroke="#1d3344" stroke-width="2"/>' + glass + '<rect x="190" y="70" width="114" height="6" fill="#d9dde0"/>' +
      // second brick wing
      '<rect x="310" y="100" width="76" height="104" fill="#a8482f" stroke="#5e2216" stroke-width="2"/><rect x="320" y="114" width="16" height="20" fill="#bfe3ff" opacity=".8"/><rect x="350" y="114" width="16" height="20" fill="#bfe3ff" opacity=".8"/><rect x="320" y="150" width="16" height="20" fill="#bfe3ff" opacity=".8"/><rect x="350" y="150" width="16" height="20" fill="#bfe3ff" opacity=".8"/>' +
      // name band + ON AIR light
      '<rect x="40" y="56" width="250" height="20" rx="2" fill="#f4f1e8"/><text x="165" y="70" text-anchor="middle" ' + font + ' font-size="11" fill="#1d3344" letter-spacing="1">KENNEDY-KING COLLEGE</text>' +
      '<rect x="318" y="76" width="60" height="18" rx="3" fill="#2a1010"/><rect class="a2-bl" x="321" y="79" width="54" height="12" rx="2" fill="#e2574c"/><text x="348" y="89" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">ON AIR</text>' +
      '<g class="a2-walk">' + person(20, 222, '#f2c14e') + '</g><g class="a2-walk a2-walk2">' + person(20, 224, '#2f78a8') + '</g>',
      sky('a2s4', '#6fa6d6', '#cfe4f4'));
  }

  function a2corner() {
    let arch = '';
    for (let i = 0; i < 5; i++) arch += '<path d="M' + (120 + i * 34) + ' 120v-18q10 -14 20 0v18z" fill="#5a4a38"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#a2s5)"/>' +
      // Hamilton Park fieldhouse behind: cream stucco, arched windows, red tile roof
      '<rect x="96" y="80" width="200" height="56" fill="#efe1c0" stroke="#bfa97c" stroke-width="2"/><path d="M88 82l30 -22h156l30 22z" fill="#b5523a"/>' + arch +
      '<text x="196" y="132" text-anchor="middle" ' + font + ' font-size="8" fill="#6a5a46">HAMILTON PARK</text>' +
      '<circle cx="60" cy="112" r="26" fill="#4e8a3e"/><circle cx="318" cy="112" r="22" fill="#4e8a3e"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#55585c"/><rect x="0" y="218" width="400" height="8" fill="#a9aaab"/>' +
      // wall
      '<rect x="0" y="136" width="280" height="82" fill="#8a4a32"/><path d="M0 150h280M0 164h280M0 178h280M0 192h280M0 206h280" stroke="#6d3622" stroke-width="1"/>' +
      tag('ADD-2', 30, 192, 44, '#3ec46d', -6) + tag('JAMLA', 160, 208, 18, '#f2c14e', -4) +
      '<g class="a2-sp"><circle cx="196" cy="168" r="3" fill="#3ec46d"/><circle cx="204" cy="162" r="2" fill="#3ec46d"/></g><g class="a2-sp a2-sp2"><circle cx="200" cy="172" r="2.5" fill="#f2c14e"/></g>' +
      // pole + signs
      '<rect x="352" y="96" width="6" height="124" fill="#4a4f55"/>' + sign(296, 100, 100, 'S Normal Av') + sign(304, 126, 86, 'W 72nd St') +
      '<g class="a2-car"><rect x="0" y="230" width="56" height="14" rx="5" fill="#2f78a8"/><rect x="12" y="222" width="30" height="10" rx="3" fill="#2f78a8"/><circle cx="12" cy="245" r="4" fill="#111"/><circle cx="44" cy="245" r="4" fill="#111"/></g>',
      sky('a2s5', '#2a3f6b', '#e8936a'));
  }

  window.SCENES = { a2station: a2station, a2pisgah: a2pisgah, a2beach: a2beach, a2kkc: a2kkc, a2corner: a2corner };
})();
