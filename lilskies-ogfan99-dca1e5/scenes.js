/* lilskies scenes (Regions tab: Philadelphia region; Waynesboro, Franklin County PA). CSS classes and ids prefixed sk- (the page's own anim-train is kept on the bus).
   1 Washington County Transit's 222 bus at its Smithsburg end, the closest fixed-route bus to Waynesboro (just south over the Mason-Dixon Line); South Mountain behind.
   2 Memorial Square, Chambersburg (where he was born): the 1878 Memorial Fountain with the Union soldier on top, the columned Franklin County Courthouse behind.
   3 Waynesboro Area Senior High School (class of 2016), blue and gold: the brick school, the stadium lights, a ball flying through the uprights.
   4 Life of a Dark Rose (his 2018 debut album): a stage with giant red roses on black, spotlights sweeping over the crowd.
   5 E Main St and N Church St at Center Square, Waynesboro: green signs, SKIES tagged on the brick, South Mountain's ridge behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes skblink{0%,100%{opacity:.25}50%{opacity:1}}.sk-bl{animation:skblink 1.6s ease-in-out infinite}.sk-bl2{animation-delay:-.8s}' +
    '@keyframes skjet{0%{transform:scaleY(.6)}50%{transform:scaleY(1)}100%{transform:scaleY(.6)}}.sk-jet{transform-box:fill-box;transform-origin:50% 100%;animation:skjet 1.2s ease-in-out infinite}.sk-jet2{animation-delay:-.6s}' +
    '@keyframes skdrop{0%{transform:translateY(0);opacity:1}100%{transform:translateY(22px);opacity:0}}.sk-dr{animation:skdrop 1s linear infinite}.sk-dr2{animation-delay:-.5s}' +
    '@keyframes skball{0%{transform:translate(0,0)}100%{transform:translate(150px,-90px);opacity:0}}.sk-ball{animation:skball 2.6s ease-out infinite}' +
    '@keyframes skbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.sk-beam{transform-box:fill-box;transform-origin:50% 0%;animation:skbeam 4s ease-in-out infinite}.sk-beam2{animation-delay:-2s}' +
    '@keyframes skpetal{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(-40px,150px) rotate(220deg);opacity:0}}.sk-pt{animation:skpetal 5s linear infinite}.sk-p2{animation-delay:-1.7s}.sk-p3{animation-delay:-3.4s}' +
    '@keyframes skhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.sk-hand{animation:skhand 1s ease-in-out infinite}.sk-h2{animation-delay:-.5s}' +
    '@keyframes skcar{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.sk-car{animation:skcar 8s linear infinite}' +
    '@keyframes skspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sk-sp{animation:skspray 1.4s ease-out infinite}.sk-sp2{animation-delay:.45s}' +
    '@keyframes skflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.sk-flag{transform-box:fill-box;transform-origin:0% 50%;animation:skflag 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const ROSE = "#e23b4e", GOLD = "#f2c94c", BLUE = "#1f4fa3", DARK = "#120a0e";
  const ridge = (y, c1, c2) => '<path d="M0 ' + y + 'q60 -34 130 -30t120 -20t150 24v60h-400z" fill="' + c1 + '"/><path d="M0 ' + (y + 14) + 'q80 -22 160 -12t140 -16t100 10v40h-400z" fill="' + c2 + '"/>';
  const rose = (x, y, s, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"' + (cls ? ' class="' + cls + '"' : "") + '><path d="M0 0v60" stroke="#2f6b3a" stroke-width="4"/><path d="M0 34q-16 -8 -20 4q12 6 20 -4z" fill="#2f6b3a"/>' +
    '<circle cx="0" cy="0" r="14" fill="#a3172c"/><path d="M-12 2q0 -16 12 -16q12 0 12 16q-4 -8 -12 -8t-12 8z" fill="' + ROSE + '"/><path d="M-6 0q6 -10 12 0q-6 6 -12 0z" fill="#7a0f20"/><path d="M-14 -2q-4 12 14 14q-12 -2 -14 -14zM14 -2q4 12 -14 14q12 -2 14 -14z" fill="#c62a40"/></g>';

  /* 1. WCT 222 at Smithsburg */
  function skstop() {
    const bus = '<g class="anim-train"><rect x="40" y="120" width="240" height="84" rx="10" fill="#f6f6f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (82 + i * 38) + '" y="134" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="134" width="30" height="60" rx="2" fill="#24323e"/><rect x="40" y="172" width="240" height="6" fill="' + BLUE + '"/><rect x="40" y="180" width="240" height="4" fill="#c8102e"/>' +
      '<rect x="44" y="122" width="108" height="11" rx="2" fill="#111"/><text x="98" y="130.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">222 SMITHSBURG</text>' +
      '<circle cx="90" cy="204" r="12" fill="#222"/><circle cx="90" cy="204" r="5" fill="#9aa1a8"/><circle cx="236" cy="204" r="12" fill="#222"/><circle cx="236" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sk1)"/>' + ridge(96, "#5d7f9a", "#4a6b55") +
      '<rect x="0" y="120" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="140" width="400" height="120" fill="#4e4e54"/><path d="M0 238h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="80" width="5" height="84" fill="#6b7178"/><rect x="312" y="56" width="54" height="42" rx="3" fill="' + BLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="70" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BUS STOP</text><text x="339" y="91" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '">222</text>' +
      '<rect x="294" y="104" width="100" height="14" rx="2" fill="#111"/><text x="344" y="114" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">SMITHSBURG</text>' +
      '<rect x="8" y="58" width="96" height="30" rx="3" fill="#fff" stroke="#111" stroke-width="1.5"/><text x="56" y="71" text-anchor="middle" ' + font + ' font-size="7.5" fill="#111">WAYNESBORO PA</text><text x="56" y="83" text-anchor="middle" ' + font + ' font-size="7.5" fill="#111">↑ NORTH</text>',
      sky("sk1", "#8fc6ea", "#f6e3c6"));
  }

  /* 2. Memorial Square, Chambersburg */
  function skchambers() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (128 + i * 26) + '" y="72" width="10" height="70" fill="#f4f1e8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sk2)"/>' +
      '<rect x="0" y="70" width="110" height="100" fill="#9a5a40"/><rect x="290" y="70" width="110" height="100" fill="#8a4e38"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + ((i < 4 ? 10 : 300) + (i % 4) * 26) + '" y="86" width="14" height="22" fill="#2b2320"/>').join("") +
      '<rect x="112" y="60" width="176" height="96" fill="#d9cfbd"/><path d="M118 62l82 -30l82 30z" fill="#efe8da" stroke="#b8ad98" stroke-width="2"/>' +
      '<rect x="186" y="14" width="28" height="22" fill="#efe8da"/><path d="M186 14q14 -22 28 0z" fill="#c8a24a"/><rect x="198" y="2" width="4" height="8" fill="#c8a24a"/>' + cols +
      '<rect x="112" y="142" width="176" height="14" fill="#c4b9a3"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#8d8a84"/><ellipse cx="200" cy="214" rx="110" ry="22" fill="#6e6a64"/><ellipse cx="200" cy="210" rx="100" ry="18" fill="#5f8fb0"/>' +
      '<rect x="190" y="132" width="20" height="80" fill="#7c7c78"/><ellipse cx="200" cy="168" rx="34" ry="8" fill="#6e6e6a"/>' +
      '<g class="sk-jet"><path d="M176 166q-12 18 -20 40" stroke="#bfe3ff" stroke-width="3" fill="none"/></g><g class="sk-jet sk-jet2"><path d="M224 166q12 18 20 40" stroke="#bfe3ff" stroke-width="3" fill="none"/></g>' +
      '<g class="sk-dr"><circle cx="160" cy="172" r="2" fill="#bfe3ff"/></g><g class="sk-dr sk-dr2"><circle cx="240" cy="172" r="2" fill="#bfe3ff"/></g>' +
      '<g fill="#4a4a46"><rect x="194" y="104" width="12" height="28"/><circle cx="200" cy="98" r="6"/><rect x="195" y="88" width="10" height="5"/><rect x="207" y="96" width="3" height="34"/></g>' +
      '<rect x="96" y="230" width="208" height="20" rx="3" fill="#111"/><text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MEMORIAL SQUARE · CHAMBERSBURG</text>',
      sky("sk2", "#7fb4e0", "#f4dcc0"));
  }

  /* 3. Waynesboro Area Senior High, blue and gold */
  function skschool() {
    const win = Array.from({ length: 12 }, (_, i) => '<rect x="' + (66 + (i % 6) * 46) + '" y="' + (70 + Math.floor(i / 6) * 34) + '" width="26" height="20" fill="#2b3a4e" stroke="#e8e2d2" stroke-width="2"/>').join("");
    const light = (x) => '<rect x="' + x + '" y="20" width="4" height="120" fill="#6b7178"/><rect x="' + (x - 14) + '" y="12" width="32" height="14" rx="2" fill="#3a3e46"/>' +
      [0, 1, 2].map(i => '<circle class="sk-bl' + (i === 1 ? " sk-bl2" : "") + '" cx="' + (x - 7 + i * 9) + '" cy="19" r="3" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sk3)"/>' + light(26) + light(374) +
      '<rect x="50" y="56" width="300" height="100" fill="#a3543c"/><rect x="50" y="50" width="300" height="10" fill="#e8e2d2"/>' + win +
      '<rect x="180" y="138" width="40" height="18" fill="#2b3a4e"/><rect x="160" y="125" width="80" height="12" fill="' + BLUE + '"/><text x="200" y="134" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">WAYNESBORO</text>' +
      '<rect x="0" y="156" width="400" height="104" fill="#3f8a46"/>' + [0, 1, 2, 3, 4, 5, 6].map(i => '<path d="M' + (20 + i * 60) + ' 156v104" stroke="#fff" stroke-width="2" opacity=".7"/>').join("") +
      '<g transform="translate(300 150)"><path d="M0 70v-50M-22 20h44M-22 20v-40M22 20v-40" stroke="' + GOLD + '" stroke-width="4" fill="none"/></g>' +
      '<g class="sk-ball"><ellipse cx="140" cy="226" rx="9" ry="5.5" fill="#7a4a2a" transform="rotate(-30 140 226)"/></g>' +
      '<g class="sk-flag"><rect x="64" y="196" width="88" height="30" fill="' + BLUE + '" stroke="' + GOLD + '" stroke-width="2"/><text x="108" y="215" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">CLASS OF 2016</text></g>',
      sky("sk3", "#16234a", "#4a5d8f"));
  }

  /* 4. Life of a Dark Rose stage */
  function skrose() {
    const crowd = Array.from({ length: 22 }, (_, i) => '<circle cx="' + (8 + i * 18.5) + '" cy="' + (230 + (i % 3) * 4) + '" r="10" fill="#0a0507"/>').join("") +
      [30, 120, 210, 300, 370].map((x, i) => '<rect class="sk-hand' + (i % 2 ? " sk-h2" : "") + '" x="' + x + '" y="200" width="6" height="26" rx="3" fill="#0a0507"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="' + DARK + '"/>' +
      '<g class="sk-beam"><path d="M110 0l-40 220h80z" fill="#fff" opacity=".08"/></g><g class="sk-beam sk-beam2"><path d="M290 0l-40 220h80z" fill="#fff" opacity=".08"/></g>' +
      '<rect x="40" y="30" width="320" height="150" fill="#050304" stroke="#2a1a1e" stroke-width="3"/>' +
      rose(120, 80, 1.6) + rose(200, 64, 2.1) + rose(280, 80, 1.6) +
      '<rect x="40" y="154" width="320" height="26" fill="#050304"/><text x="200" y="173" text-anchor="middle" ' + font + ' font-size="15" letter-spacing="4" fill="' + ROSE + '">LIFE OF A DARK ROSE</text>' +
      '<g class="sk-pt"><ellipse cx="160" cy="40" rx="4" ry="2.5" fill="' + ROSE + '"/></g><g class="sk-pt sk-p2"><ellipse cx="250" cy="30" rx="4" ry="2.5" fill="' + ROSE + '"/></g><g class="sk-pt sk-p3"><ellipse cx="320" cy="44" rx="4" ry="2.5" fill="' + ROSE + '"/></g>' +
      '<rect x="0" y="182" width="400" height="14" fill="#2a1a1e"/>' + crowd);
  }

  /* 5. E Main St & N Church St, Center Square, Waynesboro */
  function skcorner() {
    const bricks = Array.from({ length: 8 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 - (r % 2) * 15) + '" y="' + (112 + r * 13) + '" width="28" height="11" fill="' + ((r + c) % 4 ? "#9a4a36" : "#8a402e") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sk5)"/>' + ridge(84, "#4f7290", "#3f6a52") +
      '<rect x="0" y="110" width="400" height="108" fill="#7a3a2a"/>' + bricks +
      tag("SKIES", 40, 186, 48, ROSE, -7) + tag("AWG", 236, 168, 30, GOLD, -5) + rose(216, 150, 0.7) +
      '<g class="sk-sp"><circle cx="300" cy="150" r="3" fill="' + ROSE + '"/></g><g class="sk-sp sk-sp2"><circle cx="308" cy="146" r="2.4" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="218" width="400" height="42" fill="#4e4e54"/><path d="M0 240h400" stroke="#fff" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="sk-car"><rect x="0" y="226" width="60" height="14" rx="5" fill="' + BLUE + '"/><rect x="12" y="218" width="34" height="10" rx="3" fill="' + BLUE + '"/><circle cx="14" cy="241" r="5" fill="#111"/><circle cx="46" cy="241" r="5" fill="#111"/></g>' +
      '<rect x="336" y="40" width="5" height="180" fill="#6b7178"/>' + sign(284, 44, 104, "E MAIN ST") + sign(290, 70, 98, "N CHURCH ST"),
      sky("sk5", "#88c2ea", "#f8dcc4"));
  }

  window.SCENES = { skstop, skchambers, skschool, skrose, skcorner };
})();
