/* ashanti scenes (NYC map, Long Island: Glen Cove, where Ashanti Shequoiya Douglas was born and raised). 400 x 260 SVGs.
   CSS classes prefixed ash- (the page's own anim-train is kept on the train).
   0 Glen Cove LIRR station (Oyster Bay Branch): two high side platforms in the trees, black sign with the LIRR bullet, a diesel push-pull train rolling in.
   1 Glen Cove High School: brick school, red running track (she was a track star and honor student there), hurdles, a baton runner going round.
   2 Her mom Tina's dance class: mirrors, barre, tap shoes, a mirror ball turning, sparkle on the floor.
   3 Morgan Memorial Park on Hempstead Harbor: the green lawn and water, a sailboat drifting, gulls, sunset.
   4 Glen St and School St in downtown Glen Cove: green signs, ASHANTI tagged with a rose, the old brick post office on Glen St behind. */
(function () {
  const W = 400, H = 260;
  const ROSE = "#e8466e", GOLD = "#ffd27a", CREAM = "#f6ecdc", BRICK = "#9a4a34";
  const css = '<style>' +
    '@keyframes ashflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.95}}.ash-flk{animation:ashflick 2.8s infinite}' +
    '@keyframes ashrun{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.ash-run{animation:ashrun 6s linear infinite}.ash-run2{animation-delay:-3s}' +
    '@keyframes ashspin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.ash-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ashspin 6s linear infinite}' +
    '@keyframes ashtw{0%,100%{opacity:.15}50%{opacity:1}}.ash-tw{animation:ashtw 1.6s ease-in-out infinite}.ash-tw2{animation-delay:-.5s}.ash-tw3{animation-delay:-1.1s}' +
    '@keyframes ashtap{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ash-tap{animation:ashtap .6s ease-in-out infinite}.ash-tap2{animation-delay:-.3s}' +
    '@keyframes ashsail{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.ash-sail{animation:ashsail 12s ease-in-out infinite}' +
    '@keyframes ashbob{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.ash-bob{animation:ashbob 2s ease-in-out infinite}' +
    '@keyframes ashgull{0%{transform:translate(0,0)}50%{transform:translate(40px,-8px)}100%{transform:translate(80px,0)}}.ash-gull{animation:ashgull 8s ease-in-out infinite alternate}' +
    '@keyframes ashspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.ash-sp{animation:ashspray 1.4s ease-out infinite}.ash-spb{animation-delay:.5s}' +
    '@keyframes ashwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.ash-walk{animation:ashwalk 15s linear infinite}.ash-wk2{animation-delay:-7s}' +
    '@keyframes ashflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(6deg)}}.ash-flag{transform-box:fill-box;transform-origin:0 50%;animation:ashflag 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 6 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const rose = (x, y, s) => '<path d="M' + x + ' ' + (y + 4 * s) + 'v' + (16 * s) + '" stroke="#2f7a3a" stroke-width="' + (2 * s) + '"/><path d="M' + x + ' ' + (y + 12 * s) + 'q' + (-7 * s) + ' ' + (-2 * s) + ' ' + (-8 * s) + ' ' + (-7 * s) + 'q' + (6 * s) + ' 0 ' + (8 * s) + ' ' + (5 * s) + 'z" fill="#3a8f4a"/>' +
    '<circle cx="' + x + '" cy="' + y + '" r="' + (6 * s) + '" fill="' + ROSE + '" stroke="#7a1030" stroke-width="' + s + '"/><path d="M' + (x - 3 * s) + ' ' + y + 'q' + (3 * s) + ' ' + (-5 * s) + ' ' + (6 * s) + ' 0q' + (-3 * s) + ' ' + (3 * s) + ' ' + (-5 * s) + ' ' + (1 * s) + '" stroke="#7a1030" stroke-width="' + s + '" fill="none"/>';

  /* 0. Glen Cove LIRR station */
  function ashstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (110 + i * 38) + '" y="122" width="26" height="14" rx="2" fill="#cfe6f5"/><rect x="' + (110 + i * 38) + '" y="142" width="26" height="14" rx="2" fill="#cfe6f5"/>').join("");
    const tr = '<g class="anim-train">' +
      '<rect x="20" y="118" width="78" height="62" rx="6" fill="#2b3b8f" stroke="#141c4a" stroke-width="2"/><rect x="26" y="124" width="30" height="18" rx="2" fill="#cfe6f5"/><rect x="20" y="150" width="78" height="5" fill="#ffd200"/><circle cx="90" cy="170" r="4" fill="#fff6c2"/>' +
      '<rect x="100" y="114" width="244" height="66" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="100" y="160" width="244" height="4" fill="#2b3b8f"/><rect x="100" y="165" width="244" height="2" fill="#e8466e"/>' +
      '<rect x="200" y="118" width="20" height="58" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="30" y="112" width="10" height="6" fill="#141c4a"/><rect x="62" y="112" width="10" height="6" fill="#141c4a"/></g>';
    const trees = [tree(20, 104, 1.6, "#2f6b3a"), tree(70, 98, 1.3, "#3a7a44"), tree(130, 102, 1.5, "#2f6b3a"), tree(200, 96, 1.4, "#3f8a4a"), tree(270, 104, 1.6, "#2f6b3a"), tree(340, 98, 1.4, "#3a7a44"), tree(390, 104, 1.3, "#2f6b3a")].join("");
    return svg('<rect width="400" height="260" fill="url(#ashs0)"/>' + trees +
      '<rect x="0" y="100" width="400" height="10" fill="#6a7a5a"/>' +
      /* far platform + canopy */
      '<rect x="0" y="104" width="400" height="8" fill="#a7a39a"/>' +
      tr +
      '<rect x="0" y="180" width="400" height="8" fill="#5a4a3a"/><path d="M0 184h400" stroke="#9aa0a8" stroke-width="2"/>' +
      /* near high-level platform */
      '<rect x="0" y="188" width="400" height="72" fill="#8f8b82"/><rect x="0" y="188" width="400" height="6" fill="#ffd200"/>' +
      '<rect x="40" y="194" width="4" height="66" fill="#3a3a3a"/><rect x="356" y="194" width="4" height="66" fill="#3a3a3a"/>' +
      '<path d="M20 214h360v-8h-360z" fill="#3b4a5a"/>' +
      /* black station sign */
      '<rect x="120" y="20" width="200" height="44" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="196" y="50" text-anchor="middle" ' + font + ' font-size="22" fill="#fff">Glen Cove</text>' +
      '<rect x="264" y="30" width="46" height="24" rx="12" fill="#0039a6"/><text x="287" y="47" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">LIRR</text>' +
      '<rect x="190" y="64" width="4" height="36" fill="#222"/><rect x="246" y="64" width="4" height="36" fill="#222"/>' +
      '<rect x="150" y="226" width="100" height="18" rx="2" fill="#111"/><text x="200" y="239" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Oyster Bay Branch</text>' +
      '<circle class="ash-flk" cx="20" cy="200" r="5" fill="#fff3c2"/>',
      sky("ashs0", "#8ec6e8", "#e9f2e0"));
  }

  /* 1. Glen Cove High School: brick school + track */
  function ashschool() {
    const wins = Array.from({ length: 10 }, (_, i) => '<rect x="' + (64 + i * 28) + '" y="56" width="16" height="20" fill="#cfe2ee" stroke="#f3eee4" stroke-width="2"/><rect x="' + (64 + i * 28) + '" y="88" width="16" height="20" fill="#cfe2ee" stroke="#f3eee4" stroke-width="2"/>').join("");
    const runner = (cls, c) => '<g class="ash-run ' + cls + '"><circle cx="0" cy="166" r="5" fill="#5a3a2a"/><rect x="-4" y="171" width="8" height="12" rx="2" fill="' + c + '"/><path d="M-2 183l-6 10M2 183l7 9M-4 174l-7 5M4 174l7-4" stroke="#5a3a2a" stroke-width="3" stroke-linecap="round"/><rect x="8" y="166" width="10" height="3" rx="1" fill="' + GOLD + '"/></g>';
    const hurdles = [70, 160, 250, 340].map(x => '<path d="M' + x + ' 222v-14M' + (x + 16) + ' 222v-14" stroke="#eee" stroke-width="2"/><rect x="' + (x - 2) + '" y="204" width="20" height="5" fill="#fff" stroke="#c62e2e" stroke-width="1"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#ashs1)"/>' +
      '<rect x="50" y="40" width="300" height="88" fill="' + BRICK + '"/><rect x="50" y="36" width="300" height="6" fill="#f3eee4"/>' + wins +
      '<rect x="176" y="22" width="48" height="20" fill="' + BRICK + '"/><path d="M170 24l30-14 30 14z" fill="#f3eee4"/>' +
      '<rect x="186" y="98" width="28" height="30" fill="#3a2418"/><rect x="180" y="94" width="40" height="5" fill="#f3eee4"/>' +
      '<rect x="120" y="41" width="160" height="14" rx="2" fill="#f3eee4"/><text x="200" y="52" text-anchor="middle" ' + font + ' font-size="10" fill="#7a1a1a">GLEN COVE HIGH SCHOOL</text>' +
      '<rect x="0" y="128" width="400" height="12" fill="#4f8f3f"/>' +
      '<rect x="0" y="140" width="400" height="90" fill="#b8402e"/>' +
      [150, 168, 186, 204].map(y => '<path d="M0 ' + y + 'h400" stroke="#f3eee4" stroke-width="1.5" opacity=".85"/>').join("") +
      runner("", "#c62e2e") + runner("ash-run2", "#f3eee4") + hurdles +
      '<rect x="0" y="230" width="400" height="30" fill="#4f8f3f"/>' +
      '<rect x="330" y="232" width="56" height="22" rx="2" fill="#111"/><text x="358" y="248" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">FINISH</text>',
      sky("ashs1", "#7fb9e6", "#e4eef6"));
  }

  /* 2. Mom's dance class: mirrors, barre, tap shoes, mirror ball */
  function ashdance() {
    const mirrors = Array.from({ length: 5 }, (_, i) => '<rect x="' + (20 + i * 74) + '" y="40" width="68" height="120" fill="#bcd2de" stroke="#d8c9a8" stroke-width="3"/><path d="M' + (30 + i * 74) + ' 60l30 -14M' + (34 + i * 74) + ' 80l34 -16" stroke="#fff" stroke-width="2" opacity=".5"/>').join("");
    const sparks = [[60, 210, ""], [150, 228, "ash-tw2"], [250, 214, "ash-tw3"], [330, 232, ""], [110, 196, "ash-tw3"], [300, 200, "ash-tw2"]].map(s => '<circle class="ash-tw ' + s[2] + '" cx="' + s[0] + '" cy="' + s[1] + '" r="3" fill="#fff"/>').join("");
    const shoe = (x, cls) => '<g class="ash-tap ' + cls + '"><path d="M' + x + ' 200q0 -14 12 -14h8q4 0 4 6v8h18q8 0 8 6v2h-50z" fill="#111" stroke="#333" stroke-width="1"/><rect x="' + x + '" y="207" width="16" height="3" fill="#c9ced6"/><rect x="' + (x + 38) + '" y="207" width="14" height="3" fill="#c9ced6"/><path d="M' + (x + 12) + ' 190q6 -4 10 0" stroke="' + ROSE + '" stroke-width="2" fill="none"/></g>';
    const ball = '<g class="ash-spin"><circle cx="200" cy="26" r="16" fill="#cfd4da"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (186 + i * 7) + ' 12v28" stroke="#8a9098" stroke-width="1"/>').join("") + '<path d="M184 20h32M184 28h32M186 36h28" stroke="#8a9098" stroke-width="1"/></g>';
    return svg('<rect width="400" height="260" fill="#3a2430"/><rect width="400" height="170" fill="url(#ashs2)"/>' + mirrors +
      '<rect x="0" y="118" width="400" height="5" fill="#c9a26a"/>' + [40, 140, 260, 360].map(x => '<rect x="' + x + '" y="118" width="4" height="52" fill="#8a6a3a"/>').join("") +
      '<rect x="0" y="170" width="400" height="90" fill="#b07a48"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 170l-30 90" stroke="#8a5a30" stroke-width="1.5"/>').join("") +
      '<path d="M200 4v6" stroke="#ccc" stroke-width="2"/>' + ball +
      '<path d="M200 42l-90 140M200 42l100 150M200 42l-10 170" stroke="#fff" stroke-width="1" opacity=".18"/>' +
      shoe(110, "") + shoe(230, "ash-tap2") + sparks +
      '<rect x="140" y="140" width="120" height="22" rx="3" fill="#111"/><text x="200" y="156" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">5, 6, 7, 8 ...</text>',
      sky("ashs2", "#f2d6dc", "#d9b8c4"));
  }

  /* 3. Morgan Memorial Park on Hempstead Harbor */
  function ashharbor() {
    const waves = Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (150 + i * 12) + 'q25 -4 50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0" stroke="#ffd9a8" stroke-width="1.2" fill="none" opacity="' + (.5 - i * .06) + '"/>').join("");
    const boat = '<g class="ash-sail"><g class="ash-bob"><path d="M90 166h50l-8 10h-34z" fill="#f6ecdc" stroke="#5a4a3a" stroke-width="1.5"/><path d="M114 164v-52" stroke="#5a4a3a" stroke-width="2"/><path d="M116 116l26 44h-26z" fill="#fff"/><path d="M112 122l-18 38h18z" fill="' + ROSE + '"/></g></g>';
    const gull = (x, y, cls) => '<g class="ash-gull ' + cls + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>';
    return svg('<rect width="400" height="260" fill="url(#ashs3)"/>' +
      '<circle cx="300" cy="118" r="26" fill="#ffd27a" opacity=".95"/>' +
      '<path d="M0 132q60 -14 120 -4q70 -16 150 0q70 -10 130 2v12h-400z" fill="#4a5a6a"/>' +
      '<rect x="0" y="140" width="400" height="70" fill="#4f7fa8"/>' + waves + boat +
      gull(40, 60, "") + gull(180, 44, "ash-tw2") +
      '<path d="M0 206q120 -10 240 0q80 6 160 -2v56h-400z" fill="#4f8f3f"/>' +
      /* gazebo */
      '<g transform="translate(290 0)"><path d="M10 190l30 -22 30 22z" fill="#f6ecdc" stroke="#8a7a6a" stroke-width="1.5"/><rect x="14" y="190" width="52" height="4" fill="#f6ecdc"/>' +
      '<rect x="16" y="194" width="3" height="26" fill="#f6ecdc"/><rect x="38" y="194" width="3" height="26" fill="#f6ecdc"/><rect x="61" y="194" width="3" height="26" fill="#f6ecdc"/><rect x="12" y="218" width="56" height="5" fill="#d8ccb8"/></g>' +
      tree(40, 236, 1.5, "#2f6b3a") + tree(220, 240, 1.2, "#3a7a44") +
      '<rect x="80" y="222" width="80" height="4" fill="#6a4a2a"/><rect x="84" y="226" width="3" height="10" fill="#6a4a2a"/><rect x="153" y="226" width="3" height="10" fill="#6a4a2a"/>' +
      '<rect x="110" y="238" width="180" height="18" rx="2" fill="#111"/><text x="200" y="251" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Hempstead Harbor, Glen Cove</text>',
      sky("ashs3", "#2a2a5a", "#f2a07a"));
  }

  /* 4. Glen St and School St, downtown Glen Cove */
  function ashcorner() {
    const po = '<g><rect x="200" y="56" width="180" height="120" fill="' + BRICK + '"/><path d="M194 58l96 -30 96 30z" fill="#5a3a2a"/><rect x="194" y="56" width="192" height="6" fill="#efe6d2"/>' +
      '<rect x="278" y="16" width="24" height="16" fill="#efe6d2"/><path d="M276 18l14 -12 14 12z" fill="#2f5f4a"/>' +
      [214, 248, 316, 350].map(x => '<path d="M' + x + ' 140v-46a8 8 0 0 1 16 0v46z" fill="#cfe2ee" stroke="#efe6d2" stroke-width="2"/>').join("") +
      '<path d="M276 176v-60a14 14 0 0 1 28 0v60z" fill="#3a2418" stroke="#efe6d2" stroke-width="2"/>' +
      '<rect x="232" y="70" width="116" height="12" fill="#efe6d2"/><text x="290" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="#5a3a2a">UNITED STATES POST OFFICE</text>' +
      '<rect x="374" y="20" width="2" height="40" fill="#ddd"/><g class="ash-flag"><rect x="376" y="20" width="18" height="11" fill="#c62e2e"/><rect x="376" y="20" width="8" height="6" fill="#2b3b8f"/><path d="M384 23h10M376 27h18" stroke="#fff" stroke-width="1"/></g></g>';
    const walker = (cls, y, c) => '<g class="ash-walk ' + cls + '"><circle cx="0" cy="' + (y - 22) + '" r="4" fill="#3a2a24"/><rect x="-4" y="' + (y - 18) + '" width="8" height="12" rx="2" fill="' + c + '"/><rect x="-3" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/><rect x="0.5" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/></g>';
    return svg('<rect width="400" height="260" fill="url(#ashs4)"/>' + po +
      /* wall with tag */
      '<rect x="0" y="96" width="190" height="128" fill="#d8cdb8"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (112 + i * 14) + 'h190" stroke="#c4b8a0" stroke-width="1"/>').join("") +
      tag("ASHANTI", 10, 170, 30, ROSE, -6) + rose(160, 180, 1.2) + tag("GLEN COVE", 34, 204, 16, GOLD, -3) +
      '<rect x="0" y="176" width="400" height="48" fill="none"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55555b"/><rect x="0" y="222" width="400" height="4" fill="#9a9aa0"/>' +
      '<path d="M0 244h40M70 244h40M140 244h40M210 244h40M280 244h40M350 244h40" stroke="#e8e0c0" stroke-width="2"/>' +
      walker("", 222, "#2b3b8f") + walker("ash-wk2", 222, "#c62e2e") +
      '<rect x="196" y="86" width="6" height="138" fill="#2f2f2f"/>' + sign(150, 88, 100, "Glen St") + sign(148, 114, 104, "School St") +
      '<g class="ash-sp"><circle cx="150" cy="168" r="3" fill="' + ROSE + '" opacity=".7"/></g><g class="ash-sp ash-spb"><circle cx="156" cy="162" r="2" fill="' + ROSE + '" opacity=".6"/></g>',
      sky("ashs4", "#1a1d3e", "#e0906a"));
  }

  window.SCENES = { ashstation: ashstation, ashschool: ashschool, ashdance: ashdance, ashharbor: ashharbor, ashcorner: ashcorner };
})();
