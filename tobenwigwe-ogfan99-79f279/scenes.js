/* tobenwigwe scenes (Regions tab: Houston + Texas; Alief, southwest Houston, "the Swat"). CSS classes and ids prefixed tn- (the page's own anim-train is kept).
   1 METRO local bus 2 Bellaire pulling into the Bellaire @ Wilcrest stop in Alief: the wide boulevard, a strip of shop signs, palms, the bus sign with the 2.
   2 "The city with the spaceships" (EAT): the space center's rocket park at night, a rocket lifting off on a smoke trail, the shuttle riding piggyback on its carrier jet.
   3 Houston slab on the freeway feeder ("still stunt hard on the feeder", "paint the Hyundai candy"): candy-paint car with swangas poking out, trunk popped, rolling under the overpass.
   4 Denton: the mean-green college football field where he played before the foot injury, the ball sailing through the uprights.
   5 Bissonnet St and Club Creek Dr in Alief ("from Bissonnet to Club Creek"): green signs, TOBE tagged on the wall, the Uptown tower with its sweeping beacon behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tnflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.tn-flk{animation:tnflick 2.2s infinite}.tn-flk2{animation-delay:.7s}' +
    '@keyframes tncar{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.tn-car{animation:tncar 8s linear infinite}.tn-car2{animation-delay:-4s}' +
    '@keyframes tnsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.tn-palm{transform-box:fill-box;transform-origin:50% 100%;animation:tnsway 3.2s ease-in-out infinite}.tn-palm2{animation-delay:-1.6s}' +
    '@keyframes tnlift{0%{transform:translateY(40px)}100%{transform:translateY(-230px)}}.tn-rkt{animation:tnlift 6s ease-in infinite}' +
    '@keyframes tnpuff{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.8);opacity:0}}.tn-pf{transform-box:fill-box;transform-origin:50% 50%;animation:tnpuff 1.6s ease-out infinite}.tn-pf2{animation-delay:-.55s}.tn-pf3{animation-delay:-1.1s}' +
    '@keyframes tntw{0%,100%{opacity:.25}50%{opacity:1}}.tn-tw{animation:tntw 1.8s ease-in-out infinite}.tn-tw2{animation-delay:-.9s}' +
    '@keyframes tnspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.tn-rim{transform-box:fill-box;transform-origin:50% 50%;animation:tnspin .5s linear infinite}' +
    '@keyframes tnbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.tn-bnc{animation:tnbounce .6s ease-in-out infinite}' +
    '@keyframes tnroad{from{transform:translateX(0)}to{transform:translateX(-64px)}}.tn-road{animation:tnroad .5s linear infinite}' +
    '@keyframes tnkick{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(130px,-120px) rotate(720deg)}}.tn-ball{transform-box:fill-box;transform-origin:50% 50%;animation:tnkick 2.4s ease-out infinite}' +
    '@keyframes tnflag{0%,100%{transform:skewX(0)}50%{transform:skewX(8deg)}}.tn-flag{transform-box:fill-box;transform-origin:0% 50%;animation:tnflag 1.4s ease-in-out infinite}' +
    '@keyframes tnbeam{0%,100%{transform:rotate(-35deg)}50%{transform:rotate(35deg)}}.tn-beam{transform-box:fill-box;transform-origin:50% 0%;animation:tnbeam 4s ease-in-out infinite}' +
    '@keyframes tnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tn-sp{animation:tnspray 1.4s ease-out infinite}.tn-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => '<g class="tn-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 0 ' + (-h) + '" stroke="#6b4a2e" stroke-width="5" fill="none"/>' +
    [[-26, -8], [-20, 10], [24, -10], [20, 10], [0, -18]].map(d => '<path d="M' + x + ' ' + (base - h) + 'q' + (d[0] / 2) + ' ' + (d[1] - 10) + ' ' + d[0] + ' ' + (d[1] + 4) + '" stroke="#2f7d3a" stroke-width="5" stroke-linecap="round" fill="none"/>').join("") + '</g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "tn-tw" + (i % 2 ? " tn-tw2" : "")) + '" cx="' + ((i * 89) % 400) + '" cy="' + (6 + (i * 47) % 90) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff" opacity=".8"/>'; return s; };
  const BUS = "#1f4e79", MINT = "#7fe0c2", GOLD = "#ffd23f", ORANGE = "#ff7a33";

  /* 1. Bellaire @ Wilcrest, METRO 2 Bellaire */
  function tnstation() {
    const shops = [["#c0392b", "PHO"], ["#f1c40f", "BOBA"], ["#2e86c1", "TAQUERIA"], ["#27ae60", "MARKET"]];
    const strip = '<rect x="0" y="86" width="400" height="58" fill="#e9dcc4"/><rect x="0" y="82" width="400" height="6" fill="#b85c38"/>' +
      shops.map((s, i) => '<rect x="' + (6 + i * 84) + '" y="94" width="74" height="16" rx="2" fill="' + s[0] + '"/><text x="' + (43 + i * 84) + '" y="106" text-anchor="middle" ' + font + ' font-size="10" fill="' + (i === 1 ? "#222" : "#fff") + '">' + s[1] + '</text>' +
        '<rect x="' + (14 + i * 84) + '" y="114" width="58" height="28" fill="#2b3a46"/><rect x="' + (16 + i * 84) + '" y="116" width="26" height="24" fill="#9fc4dc" opacity=".6"/>').join("");
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 40) + '" y="152" width="32" height="24" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="30" y="142" width="310" height="66" rx="9" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="36" y="150" width="22" height="48" rx="2" fill="#1d2833"/><rect x="30" y="182" width="310" height="7" fill="' + BUS + '"/><rect x="30" y="191" width="310" height="3" fill="#e31837"/>' +
      '<rect x="34" y="143" width="96" height="10" rx="2" fill="#111"/><text x="82" y="151" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">2 BELLAIRE</text>' +
      '<circle cx="80" cy="210" r="12" fill="#222"/><circle cx="80" cy="210" r="5" fill="#9aa1a8"/><circle cx="290" cy="210" r="12" fill="#222"/><circle cx="290" cy="210" r="5" fill="#9aa1a8"/>' +
      '<circle cx="34" cy="198" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tns1)"/>' +
      palm(30, 90, 56) + palm(372, 90, 62, "tn-palm2") + strip +
      '<rect x="0" y="144" width="400" height="10" fill="#c9c3b7"/><rect x="0" y="154" width="400" height="106" fill="#4e4f55"/><path d="M0 238h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="372" y="96" width="5" height="122" fill="#6b7178"/><rect x="356" y="84" width="38" height="34" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/><text x="375" y="98" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><text x="375" y="113" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">2</text>' +
      '<rect x="96" y="222" width="208" height="32" rx="3" fill="#111"/><text x="108" y="243" ' + font + ' font-size="14" fill="#fff">Bellaire @ Wilcrest</text>' + badge(262, 238, "2", BUS),
      sky("tns1", "#7db8e8", "#f6e3c3"));
  }

  /* 2. The city with the spaceships */
  function tnspace() {
    const rocket = '<g class="tn-rkt"><path d="M300 150v-58l8 -18l8 18v58z" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="1.5"/><rect x="300" y="112" width="16" height="6" fill="#222"/><rect x="300" y="132" width="16" height="4" fill="#222"/>' +
      '<path d="M300 140l-8 14h8zM316 140l8 14h-8z" fill="#c9cdd2"/><path d="M302 154q6 22 6 34q0 -12 6 -34z" fill="' + ORANGE + '"/><path d="M305 154q3 12 3 20q0 -8 3 -20z" fill="' + GOLD + '"/>' +
      [0, 1, 2].map(i => '<circle class="tn-pf tn-pf' + (i + 1) + '" cx="' + (308 + (i - 1) * 6) + '" cy="' + (196 + i * 8) + '" r="9" fill="#e9e6df"/>').join("") + '</g>';
    const jet = '<g><path d="M30 186q0 -10 14 -12h190q26 0 34 12q-8 10 -34 10H44q-14 0 -14 -10z" fill="#f4f4f2" stroke="#8f979e" stroke-width="1.5"/>' +
      '<path d="M34 178l-14 -22h14l16 20z" fill="#e8e8e6" stroke="#8f979e" stroke-width="1.5"/><path d="M110 192l40 22h22l-24 -22z" fill="#d9dcde"/><rect x="60" y="182" width="170" height="3" fill="' + BUS + '"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + (70 + i * 13) + '" cy="188" r="1.6" fill="#24323e"/>').join("") +
      '<path d="M90 172q0 -12 12 -14h100q22 2 30 14z" fill="#fbfbfa" stroke="#8f979e" stroke-width="1.5"/><path d="M120 158l20 -18h24l-8 18z" fill="#fbfbfa" stroke="#8f979e" stroke-width="1.5"/>' +
      '<path d="M196 172q10 -4 36 0" stroke="#111" stroke-width="5" fill="none"/><path d="M94 166h22" stroke="#111" stroke-width="3"/><path d="M110 168l-6 6h20l4 -6z" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tns2)"/>' + stars(60) +
      '<circle cx="64" cy="44" r="16" fill="#f3efe0"/><circle cx="58" cy="40" r="3" fill="#d6d1c0"/><circle cx="70" cy="50" r="2" fill="#d6d1c0"/>' +
      rocket +
      '<rect x="0" y="206" width="400" height="54" fill="#2f4a2c"/><rect x="0" y="204" width="400" height="4" fill="#4c6b44"/>' +
      '<rect x="40" y="196" width="6" height="12" fill="#555"/><rect x="226" y="196" width="6" height="12" fill="#555"/>' + jet +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="10" fill="#dfe9f2">CLEAR LAKE · THE CITY WITH THE SPACESHIPS</text>',
      sky("tns2", "#070b1e", "#283a6a"));
  }

  /* 3. Slab on the feeder */
  function tnslab() {
    const rim = (cx, cy) => '<circle cx="' + cx + '" cy="' + cy + '" r="15" fill="#111"/><g class="tn-rim"><circle cx="' + cx + '" cy="' + cy + '" r="9" fill="#d8dde2"/>' +
      [0, 60, 120].map(a => '<rect x="' + (cx - 1.5) + '" y="' + (cy - 9) + '" width="3" height="18" fill="#8a939b" transform="rotate(' + a + ' ' + cx + ' ' + cy + ')"/>').join("") + '</g>' +
      '<path d="M' + (cx - 3) + ' ' + (cy - 3) + 'l-16 -4v14l16 -4z" fill="#e6eaee" stroke="#8a939b" stroke-width="1"/>';
    const car = '<g class="tn-bnc"><path d="M60 196v-22q0 -8 10 -10l30 -4l24 -22h96l28 22l44 6q12 2 12 12v18z" fill="url(#tnpaint)" stroke="#3a1050" stroke-width="2"/>' +
      '<path d="M132 142h40v20h-58z" fill="#bfe3ff" opacity=".85"/><path d="M178 142h38l22 20h-60z" fill="#bfe3ff" opacity=".85"/>' +
      '<path d="M60 176h244" stroke="#f6d8ff" stroke-width="2" opacity=".7"/><rect x="292" y="168" width="10" height="6" fill="#ff4d4d"/><rect x="60" y="168" width="8" height="6" fill="#fff6c2"/>' +
      '<path d="M294 164l40 -36l6 6l-34 34z" fill="#4a1866" stroke="#3a1050" stroke-width="2"/><rect x="306" y="132" width="26" height="24" rx="2" fill="#141414" transform="rotate(-42 319 144)"/>' +
      '<text x="318" y="148" text-anchor="middle" transform="rotate(-42 319 144)" ' + font + ' font-size="7" fill="' + MINT + '">SWAT</text>' +
      rim(106, 198) + rim(262, 198) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tns3)"/>' +
      '<g fill="#5a6a7e" opacity=".6"><rect x="20" y="60" width="22" height="70"/><rect x="48" y="40" width="18" height="90"/><rect x="330" y="50" width="26" height="80"/><rect x="362" y="72" width="20" height="58"/></g>' +
      '<rect x="0" y="70" width="400" height="18" fill="#9aa0a6"/><rect x="0" y="88" width="400" height="5" fill="#6d737a"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 7) + '" y="93" width="14" height="44" fill="#8a9097"/>').join("") +
      '<rect x="126" y="34" width="148" height="26" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="51" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SW FREEWAY FEEDER</text><rect x="196" y="60" width="4" height="10" fill="#555"/>' +
      '<rect x="0" y="137" width="400" height="8" fill="#b9b4aa"/><rect x="0" y="145" width="400" height="115" fill="#45464c"/>' +
      '<g class="tn-road"><path d="M0 228h464" stroke="#f2c200" stroke-width="3" stroke-dasharray="32 32"/></g>' + car,
      sky("tns3", "#f08a4b", "#ffd9a0") + '<linearGradient id="tnpaint" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c06bff"/><stop offset=".5" stop-color="#7a1fb0"/><stop offset="1" stop-color="#3a0d5c"/></linearGradient>');
  }

  /* 4. Denton: the green football field */
  function tnfield() {
    const lines = Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 45) + ' 150L' + (-40 + i * 60) + ' 260" stroke="#e9f5ec" stroke-width="2" opacity=".85"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tns4)"/>' +
      '<path d="M0 110q200 -50 400 0v40H0z" fill="#2c3a33"/>' + Array.from({ length: 70 }, (_, i) => '<circle cx="' + ((i * 41) % 400) + '" cy="' + (98 + (i * 11) % 40) + '" r="2" fill="' + ["#00853e", "#ffffff", "#0a5c2e", "#cfd8d2"][i % 4] + '" opacity=".7"/>').join("") +
      [60, 340].map((x, i) => '<rect x="' + (x - 3) + '" y="20" width="6" height="88" fill="#c9ced3"/><g class="tn-flick"><rect x="' + (x - 14) + '" y="14" width="28" height="10" fill="#fff6c2" class="tn-flk' + (i ? " tn-flk2" : "") + '"/></g>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#2f8f4a"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="0" y="' + (150 + i * 20) + '" width="400" height="10" fill="#2a8243"/>').join("") + lines +
      '<path d="M196 152v-60M176 92h40M176 92v-40M216 92v-40" stroke="#ffd23f" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<g class="tn-flag"><path d="M176 52l-2 0" stroke="#fff"/></g>' +
      '<g class="tn-ball"><ellipse cx="60" cy="220" rx="11" ry="7" fill="#7a3e1d" stroke="#3d1d0c" stroke-width="1.5"/><path d="M54 220h12M57 218v4M60 218v4M63 218v4" stroke="#fff" stroke-width="1"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#eaf7ee">DENTON, TX · MEAN GREEN</text>',
      sky("tns4", "#0c1a2c", "#3b5878"));
  }

  /* 5. Bissonnet St and Club Creek Dr */
  function tncorner() {
    const tower = '<g><path d="M268 140V40l14 -14l14 14v100z" fill="#4a5a72"/><path d="M282 26v114h14V40z" fill="#3a4860"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M270 ' + (48 + i * 8) + 'h24" stroke="#7d8fa8" stroke-width="1"/>').join("") +
      '<circle cx="282" cy="24" r="3.5" fill="#fff6c2"/><g class="tn-beam"><path d="M282 24l-60 -50h120z" fill="#fff6c2" opacity=".18"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tns5)"/>' + stars(18) +
      '<g fill="#2a3150"><rect x="220" y="100" width="30" height="40"/><rect x="300" y="88" width="24" height="52"/><rect x="330" y="104" width="40" height="36"/></g>' + tower +
      '<rect x="0" y="128" width="400" height="96" fill="#d8c9a8"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#c4b48f" stroke-width="1"/>').join("") +
      tag("TOBE", 24, 194, 60, GOLD, -6) + tag("SWAT", 196, 214, 22, MINT, -4) + tag("ON GOD", 28, 216, 17, ORANGE, -3) + tag("FYE FYE", 168, 178, 18, "#ff8fb1", -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 98, 150, "Bissonnet St") + sign(258, 124, 124, "Club Creek Dr") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="tn-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="tn-sp"><circle cx="150" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tn-sp tn-sp2"><circle cx="156" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("tns5", "#1d2147", "#e8875a"));
  }

  window.SCENES = { tnstation: tnstation, tnspace: tnspace, tnslab: tnslab, tnfield: tnfield, tncorner: tncorner };
})();
