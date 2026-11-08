/* rapperbigpooh scenes (Regions tab: The Carolinas; Durham, NC — "Born in VA, transport to NC"). CSS classes and ids prefixed rp- (the page's own anim-train is kept).
   1 GoDurham route 12 (E Main St – NCCU) pulling up at the E Main St / Dillard St stop, downtown Durham at dusk.
   2 Lake Anne Plaza, Reston, Virginia (where he grew up): the Heron House tower over the lake, the fountain going, ducks drifting.
   3 I-85 into North Carolina: the blue welcome sign, the interstate shield, cars rolling south under the pines.
   4 Major the Bull, the bronze bull in CCB Plaza, downtown Durham: Bull City, string lights blinking.
   5 E Main St and Roxboro St: green signs, POOH tagged on the brick, Duke Chapel's stone tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rpflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.rp-flk{animation:rpflick 2.2s infinite}.rp-flk2{animation-delay:.7s}' +
    '@keyframes rpspray{0%{transform:translateY(0) scale(1);opacity:.9}100%{transform:translateY(-22px) scale(1.4);opacity:0}}.rp-spray{transform-box:fill-box;transform-origin:50% 100%;animation:rpspray 1.2s ease-out infinite}.rp-s2{animation-delay:-.4s}.rp-s3{animation-delay:-.8s}' +
    '@keyframes rpduck{0%,100%{transform:translateX(0)}50%{transform:translateX(30px)}}.rp-duck{animation:rpduck 7s ease-in-out infinite}' +
    '@keyframes rpcar{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.rp-car{animation:rpcar 6s linear infinite}.rp-car2{animation-duration:9s;animation-delay:-3s}' +
    '@keyframes rpbl{0%,100%{opacity:.25}50%{opacity:1}}.rp-bl{animation:rpbl 1.3s ease-in-out infinite}.rp-bl2{animation-delay:-.65s}' +
    '@keyframes rpbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.rp-bird{animation:rpbird 10s linear infinite}.rp-bird2{animation-delay:-5s}' +
    '@keyframes rpsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-20px);opacity:0}}.rp-steam{animation:rpsteam 1.8s ease-out infinite}.rp-st2{animation-delay:-.9s}' +
    '@keyframes rpsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rp-sp{animation:rpsp 1.4s ease-out infinite}.rp-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, base, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>';
    for (let r = 0; r * 7 < h; r++) {
      s += '<path d="M' + x + ' ' + (y + r * 7) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>';
      for (let c = 0; c * 22 < w; c++) { const bx = x + c * 22 + (r % 2) * 11; if (bx < x + w) s += '<path d="M' + bx + ' ' + (y + r * 7) + 'v7" stroke="' + line + '" stroke-width="1"/>'; }
    }
    return s;
  };
  const pine = (x, y, s) => '<path d="M' + x + ' ' + (y - 40 * s) + 'l' + (14 * s) + ' ' + (22 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (18 * s) + 'h' + (-40 * s) + 'l' + (12 * s) + ' ' + (-18 * s) + 'h' + (-6 * s) + 'z" fill="#1f4a32"/><rect x="' + (x - 2 * s) + '" y="' + y + '" width="' + (4 * s) + '" height="' + (8 * s) + '" fill="#4a3426"/>';

  /* 1. GoDurham 12 at E Main St / Dillard St */
  function rpstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (58 + i * 40) + '" y="126" width="32" height="26" rx="3" fill="#18222c"/>').join("");
    const bus = '<g class="anim-train"><rect x="34" y="114" width="318" height="72" rx="10" fill="#eef0f2" stroke="#7a8189" stroke-width="2"/>' + win +
      '<path d="M34 164h318v10h-318z" fill="#2c7a4b"/><path d="M34 158h318v6h-318z" fill="#1f5fa8"/>' +
      '<rect x="314" y="124" width="32" height="40" rx="4" fill="#18222c"/>' +
      '<rect x="250" y="116" width="96" height="10" rx="2" fill="#111"/><text x="298" y="124" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb000">12 E MAIN ST · NCCU</text>' +
      '<circle cx="92" cy="188" r="12" fill="#222"/><circle cx="92" cy="188" r="5" fill="#888"/><circle cx="292" cy="188" r="12" fill="#222"/><circle cx="292" cy="188" r="5" fill="#888"/>' +
      '<circle cx="348" cy="174" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rps1)"/>' +
      bricks(0, 54, 120, 70, "#7d3f2e", "#5f2f22") + bricks(270, 64, 130, 60, "#8a5a3c", "#6a4430") +
      '<rect x="128" y="40" width="130" height="84" fill="#4a4e5a"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (138 + (i % 4) * 30) + '" y="' + (50 + Math.floor(i / 4) * 22) + '" width="18" height="12" fill="' + (i % 3 ? "#ffd27a" : "#2a2e38") + '" class="' + (i % 2 ? "rp-flk" : "rp-flk rp-flk2") + '"/>').join("") +
      bus +
      '<rect x="0" y="198" width="400" height="8" fill="#bdb6aa"/><rect x="0" y="206" width="400" height="54" fill="#4f5358"/><path d="M0 234h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="20" y="96" width="4" height="104" fill="#3a3f45"/><rect x="8" y="84" width="28" height="16" rx="2" fill="#1f5fa8"/><text x="22" y="95" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="96" y="210" width="208" height="38" rx="3" fill="#111"/><rect x="106" y="217" width="24" height="24" rx="5" fill="#1f5fa8"/><text x="118" y="234" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">12</text>' +
      '<text x="138" y="228" ' + font + ' font-size="11" fill="#fff">E Main St / Dillard St</text><text x="138" y="241" ' + font + ' font-size="8.5" fill="#cfd8dc">GoDurham · downtown Durham</text>',
      sky("rps1", "#1b2140", "#d98a5e"));
  }

  /* 2. Lake Anne Plaza, Reston VA */
  function rplake() {
    let tower = '<rect x="250" y="34" width="70" height="146" fill="#d9d4ca"/>';
    for (let r = 0; r < 13; r++) tower += '<rect x="246" y="' + (40 + r * 11) + '" width="78" height="3" fill="#bfb8ab"/><rect x="254" y="' + (44 + r * 11) + '" width="62" height="6" fill="' + ((r * 7) % 3 ? "#5a6670" : "#ffd27a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rps2)"/>' +
      '<g class="rp-bird"><path d="M20 50q6 -6 12 0q6 -6 12 0" stroke="#2a3040" stroke-width="2" fill="none"/></g>' +
      '<g fill="#3d6b3a"><circle cx="30" cy="166" r="34"/><circle cx="80" cy="172" r="24"/><circle cx="370" cy="166" r="32"/></g>' +
      tower +
      '<rect x="90" y="132" width="160" height="48" fill="#cfc8bb"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (100 + i * 25) + ' 180v-26q10 -12 20 0v26" fill="#4a4a50"/>').join("") +
      '<rect x="86" y="126" width="168" height="8" fill="#b7af9f"/><rect x="320" y="140" width="50" height="40" fill="#cfc8bb"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#3f6f8f"/>' +
      '<path d="M250 184h70v40h-70z" fill="#d9d4ca" opacity=".25"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M' + (20 + i * 80) + ' ' + (200 + (i % 2) * 18) + 'h40" stroke="#9fc4d8" stroke-width="2" opacity=".6"/>').join("") +
      '<rect x="160" y="196" width="40" height="10" rx="2" fill="#9a958a"/><g class="rp-spray"><path d="M174 196q6 -20 12 0" fill="#d6ecf6"/></g><g class="rp-spray rp-s2"><path d="M168 196q12 -26 24 0" fill="none" stroke="#d6ecf6" stroke-width="2"/></g><g class="rp-spray rp-s3"><path d="M176 196q4 -16 8 0" fill="#eaf6fb"/></g>' +
      '<g class="rp-duck"><path d="M60 236q10 -8 22 0z" fill="#6b4a2a"/><circle cx="80" cy="230" r="4" fill="#2f6b3a"/><path d="M84 230l4 1-4 1z" fill="#f2a83b"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#eaf2f7">LAKE ANNE · RESTON, VIRGINIA</text>',
      sky("rps2", "#5a86c4", "#f6d7a6"));
  }

  /* 3. I-85 into North Carolina */
  function rphighway() {
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h40v26q0 14 -20 22q-20 -8 -20 -22z" fill="#1f4e9e" stroke="#fff" stroke-width="2"/><path d="M' + x + ' ' + y + 'h40v8h-40z" fill="#c8102e"/><text x="' + (x + 20) + '" y="' + (y + 30) + '" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">85</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#rps3)"/>' +
      pine(20, 150, 1.4) + pine(60, 156, 1.1) + pine(330, 150, 1.5) + pine(372, 156, 1.2) + pine(110, 160, .9) + pine(290, 160, .9) +
      '<path d="M0 160h400v100h-400z" fill="#5b8a3e"/>' +
      '<path d="M120 260L190 160h20l70 100z" fill="#4f5358"/><path d="M200 166v94" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="12 10"/>' +
      '<g class="rp-car"><rect x="0" y="232" width="60" height="18" rx="6" fill="#9d7bff"/><rect x="10" y="222" width="36" height="14" rx="5" fill="#b49cff"/><circle cx="14" cy="252" r="5" fill="#222"/><circle cx="48" cy="252" r="5" fill="#222"/></g>' +
      '<rect x="74" y="98" width="5" height="70" fill="#8a8f96"/><rect x="232" y="98" width="5" height="70" fill="#8a8f96"/>' +
      '<rect x="52" y="34" width="210" height="70" rx="6" fill="#1f4e9e" stroke="#fff" stroke-width="3"/>' +
      '<text x="157" y="62" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">WELCOME TO</text><text x="157" y="88" text-anchor="middle" ' + font + ' font-size="19" fill="#fff">NORTH CAROLINA</text>' +
      shield(290, 60) + '<rect x="308" y="108" width="4" height="60" fill="#8a8f96"/>' +
      '<text x="310" y="54" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SOUTH</text>',
      sky("rps3", "#4f7fc4", "#f4cf96"));
  }

  /* 4. Major the Bull, CCB Plaza */
  function rpbull() {
    const lights = Array.from({ length: 14 }, (_, i) => '<circle cx="' + (12 + i * 28) + '" cy="' + (44 + Math.sin(i / 13 * Math.PI) * 16).toFixed(1) + '" r="3.5" fill="#ffd27a" class="rp-bl' + (i % 2 ? " rp-bl2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rps4)"/>' +
      bricks(0, 60, 130, 110, "#7a4030", "#5c3024") + '<rect x="270" y="50" width="130" height="120" fill="#4a505c"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (282 + (i % 4) * 28) + '" y="' + (62 + Math.floor(i / 4) * 30) + '" width="16" height="18" fill="#ffd27a" class="rp-flk' + (i % 2 ? " rp-flk2" : "") + '"/>').join("") +
      '<path d="M0 44q200 34 400 0" stroke="#2a2a2a" stroke-width="1.2" fill="none"/>' + lights +
      '<rect x="0" y="170" width="400" height="90" fill="#9a8f80"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (i * 56) + ' 170l-30 90" stroke="#857a6c" stroke-width="2"/>').join("") +
      '<rect x="120" y="180" width="170" height="20" rx="3" fill="#6f665a"/>' +
      '<g fill="#7a5230" stroke="#4a3018" stroke-width="2">' +
      '<rect x="156" y="150" width="12" height="34" rx="3"/><rect x="178" y="152" width="12" height="32" rx="3"/><rect x="238" y="152" width="12" height="32" rx="3"/><rect x="258" y="150" width="12" height="34" rx="3"/>' +
      '<path d="M150 158q-6 -34 26 -42q40 -8 76 0q22 4 26 22q2 18 -10 26q-40 10 -108 0q-8 0 -10 -6z"/>' +
      '<path d="M268 124q14 -12 30 -4q12 8 14 22q2 12 -8 16q-12 4 -22 -4q-12 -10 -14 -30z"/>' +
      '<path d="M286 120q-6 -16 6 -22q-2 10 4 16z"/><path d="M300 122q10 -14 24 -10q-12 4 -16 14z"/>' +
      '<path d="M290 128q-8 -4 -12 2q6 4 12 0z" fill="#5a3a20"/>' +
      '</g><circle cx="300" cy="134" r="2" fill="#1a1008"/><ellipse cx="312" cy="152" rx="4" ry="3" fill="#4a3018"/>' +
      '<path d="M150 140q-16 4 -16 30" stroke="#4a3018" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<path d="M182 128q36 -8 70 0" stroke="#a87a4a" stroke-width="3" fill="none" opacity=".7"/>' +
      '<g class="rp-steam"><circle cx="320" cy="150" r="4" fill="#e6e1d8" opacity=".7"/></g><g class="rp-steam rp-st2"><circle cx="324" cy="154" r="3" fill="#e6e1d8" opacity=".7"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2420">MAJOR THE BULL · CCB PLAZA · BULL CITY</text>',
      sky("rps4", "#20244a", "#c97a5a"));
  }

  /* 5. E Main St and Roxboro St, Duke Chapel behind */
  function rpcorner() {
    const chapel = '<g transform="translate(230 0)">' +
      '<rect x="40" y="40" width="44" height="140" fill="#c9b48a"/><path d="M40 40l6 -16h32l6 16z" fill="#b8a27a"/>' +
      [40, 84].map(x => '<path d="M' + (x - 4) + ' 24v-14l4 -8 4 8v14z" fill="#b8a27a"/>').join("") +
      '<path d="M58 24v-18l4 -6 4 6v18z" fill="#b8a27a"/>' +
      '<path d="M52 70v-14q10 -12 20 0v14z" fill="#3a3a44"/><path d="M52 110v-20q10 -14 20 0v20z" fill="#3a3a44"/>' +
      '<rect x="0" y="120" width="140" height="60" fill="#bfa97f"/><path d="M0 120l70 -26 70 26z" fill="#a8916a"/>' +
      [16, 36, 98, 118].map(x => '<path d="M' + x + ' 160v-24q5 -8 10 0v24z" fill="#3a3a44"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rps5)"/>' +
      chapel +
      '<rect x="0" y="176" width="400" height="84" fill="#4e5257"/><path d="M0 216h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<g class="rp-car rp-car2"><rect x="0" y="196" width="70" height="20" rx="6" fill="#3fb6a8"/><rect x="12" y="186" width="42" height="14" rx="5" fill="#55cbbd"/><circle cx="16" cy="218" r="6" fill="#222"/><circle cx="56" cy="218" r="6" fill="#222"/></g>' +
      bricks(0, 66, 200, 110, "#7d4535", "#5f3226") +
      tag("POOH", 22, 136, 50, "#9d7bff", -8) +
      tag("FAT BOY FRESH", 30, 164, 16, "#f6c453", -5) +
      '<g class="rp-sp"><circle cx="176" cy="114" r="2" fill="#9d7bff"/></g><g class="rp-sp rp-sp2"><circle cx="184" cy="122" r="2" fill="#f6c453"/></g>' +
      '<rect x="206" y="40" width="5" height="160" fill="#4a4f57"/>' +
      sign(148, 40, 120, "E Main St") + sign(158, 66, 100, "Roxboro St"),
      sky("rps5", "#1b1d3e", "#d98a62"));
  }

  window.SCENES = { rpstation, rplake, rphighway, rpbull, rpcorner };
})();
