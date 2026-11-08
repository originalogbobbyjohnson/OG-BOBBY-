/* mya scenes (Regions tab: THE DMV; born in Washington, D.C., raised in Prince George's County, MD; Eleanor Roosevelt High School in Greenbelt). CSS classes prefixed my- (the page's own anim-train is kept).
   1 New Carrollton, the end of Metro's Orange Line up the road from Greenbelt: open-air platform, a silver Metro train sliding in, the MARC Penn Line track alongside, black station sign with the orange OR bullet.
   2 The tap studio (she came up in the D.C. troupe Tappers With Attitude): wood floor, mirror wall, ballet barre, a pair of tap shoes tapping with sparks.
   3 Eleanor Roosevelt High School in Greenbelt, where she graduated at 16: long brick school, graduation caps flying.
   4 McKeldin Mall at the University of Maryland, College Park: the long green lawn, McKeldin Library's brick and white columns and dome, a sprinkler arc on the grass.
   5 Greenbelt Rd and Hanover Pkwy: green signs, MYA tagged on the wall, the old Art Deco Greenbelt movie house behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes myglow{0%,100%{opacity:.4}50%{opacity:1}}.my-glow{animation:myglow 2.2s ease-in-out infinite}.my-glow2{animation-delay:-1.1s}' +
    '@keyframes mytap{0%,100%{transform:rotate(0)}50%{transform:rotate(-12deg)}}.my-tap{transform-box:fill-box;transform-origin:0% 100%;animation:mytap .5s ease-in-out infinite}.my-tap2{animation-delay:-.25s}' +
    '@keyframes myspark{0%{transform:translate(0,0);opacity:1}100%{transform:translate(var(--dx),-14px);opacity:0}}.my-spark{animation:myspark .5s ease-out infinite}' +
    '@keyframes mycap{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(4px,-46px) rotate(160deg)}100%{transform:translate(8px,0) rotate(360deg)}}.my-cap{transform-box:fill-box;transform-origin:50% 50%;animation:mycap 2.6s ease-in-out infinite}.my-cap2{animation-delay:-.9s}.my-cap3{animation-delay:-1.7s}' +
    '@keyframes mysprk{0%,100%{opacity:.25}50%{opacity:.8}}.my-water{animation:mysprk 1.4s ease-in-out infinite}' +
    '@keyframes mycar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.my-car{animation:mycar 7s linear infinite}' +
    '@keyframes myspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.my-sp{animation:myspray 1.4s ease-out infinite}.my-sp2{animation-delay:.45s}' +
    '@keyframes mychase{0%,100%{opacity:1}50%{opacity:.3}}.my-chase{animation:mychase .8s steps(1) infinite}.my-chase2{animation-delay:-.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "my-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#3a2a1c"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const LIL = "#c3a6ff", MINT = "#6fe0c8", GOLD = "#ffcf70", ORG = "#ed8b00";

  /* 1. New Carrollton, Orange Line terminal */
  function mystation() {
    const car = x => '<rect x="' + x + '" y="118" width="168" height="70" rx="6" fill="#c7ccd3" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="130" width="168" height="20" fill="#1c232c"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (x + 8 + i * 27) + '" y="133" width="20" height="14" rx="2" fill="#33414f"/>').join("") +
      '<rect x="' + (x + 30) + '" y="154" width="18" height="30" fill="#9aa1aa" stroke="#6b737e"/><rect x="' + (x + 120) + '" y="154" width="18" height="30" fill="#9aa1aa" stroke="#6b737e"/>' +
      '<circle cx="' + (x + 26) + '" cy="192" r="7" fill="#222"/><circle cx="' + (x + 142) + '" cy="192" r="7" fill="#222"/>';
    const train = '<g class="anim-train">' + car(20) + car(192) + '<circle class="my-glow" cx="352" cy="172" r="4" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#my-s1)"/>' +
      /* office towers by the station */
      '<rect x="20" y="40" width="54" height="70" fill="#8a96a6"/><rect x="300" y="30" width="70" height="80" fill="#7a8696"/>' +
      Array.from({ length: 5 }, (_, r) => Array.from({ length: 4 }, (_, i) => '<rect x="' + (26 + i * 12) + '" y="' + (46 + r * 12) + '" width="7" height="7" fill="#c8d4e2"/>').join("")).join("") +
      Array.from({ length: 6 }, (_, r) => Array.from({ length: 5 }, (_, i) => '<rect x="' + (306 + i * 13) + '" y="' + (36 + r * 12) + '" width="8" height="7" fill="#c8d4e2"/>').join("")).join("") +
      /* MARC track behind */
      '<rect x="0" y="100" width="400" height="6" fill="#6a6458"/><rect x="120" y="82" width="160" height="16" rx="2" fill="#1d3f8a"/><text x="200" y="94" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">MARC PENN LINE · AMTRAK</text>' +
      '<path d="M0 52L200 70L400 52v10L200 80L0 62z" fill="#d8d2c4"/>' +
      [60, 340].map(x => '<rect x="' + (x - 3) + '" y="64" width="6" height="136" fill="#7a746a"/>').join("") +
      train +
      '<rect x="0" y="200" width="400" height="8" fill="#3a2e26"/><path d="M0 202h400M0 206h400" stroke="#8a8f96" stroke-width="1.2"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#8e8a82"/><rect x="0" y="208" width="400" height="5" fill="#d8d2c4"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect class="my-glow' + (i % 2 ? " my-glow2" : "") + '" x="' + (8 + i * 40) + '" y="213" width="24" height="3" fill="#fff3c0"/>').join("") +
      '<rect x="90" y="224" width="220" height="28" rx="3" fill="#111"/><text x="186" y="244" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">NEW CARROLLTON</text>' +
      '<circle cx="288" cy="238" r="10" fill="' + ORG + '"/><text x="288" y="242" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">OR</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".95">ORANGE LINE · END OF THE LINE · UP THE ROAD FROM GREENBELT</text>',
      sky("my-s1", "#86b4e4", "#f2dccc"));
  }

  /* 2. Tap studio */
  function mytap() {
    const shoe = (x, y, cls) => '<g class="my-tap ' + cls + '"><path d="M' + x + ' ' + y + 'h44q8 0 8 -8v-6q-14 0 -22 -10h-14q-6 0 -10 6q-6 2 -6 8z" fill="#111" stroke="#444" stroke-width="1.5"/><path d="M' + (x + 2) + ' ' + (y + 2) + 'h50" stroke="#c9ccd2" stroke-width="3"/><path d="M' + (x + 24) + ' ' + (y - 22) + 'q6 4 10 2" stroke="' + LIL + '" stroke-width="2" fill="none"/></g>';
    const spark = (x, y, dx) => '<circle class="my-spark" style="--dx:' + dx + 'px" cx="' + x + '" cy="' + y + '" r="2" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#my-s2)"/>' +
      /* mirror wall */
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (10 + i * 96) + '" y="30" width="90" height="120" fill="#8ea6c0" opacity=".55" stroke="#c8d4e2" stroke-width="2"/><path d="M' + (24 + i * 96) + ' 40l30 50" stroke="#fff" stroke-width="3" opacity=".35"/>').join("") +
      /* barre */
      '<rect x="0" y="112" width="400" height="5" rx="2" fill="#c9a24a"/>' + [40, 200, 360].map(x => '<rect x="' + x + '" y="116" width="4" height="36" fill="#8a6a2a"/>').join("") +
      /* wood floor */
      '<rect x="0" y="150" width="400" height="110" fill="#b07a44"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (160 + i * 13) + 'h400" stroke="#8a5a2a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 37 + (i % 2) * 18) + ' 150v110" stroke="#8a5a2a" stroke-width=".8" opacity=".6"/>').join("") +
      '<ellipse class="my-glow" cx="200" cy="200" rx="120" ry="22" fill="#fff6c8" opacity=".25"/>' +
      shoe(130, 206, "") + shoe(214, 214, "my-tap2") +
      spark(134, 208, -10) + spark(178, 208, 8) + spark(218, 216, -8) + spark(262, 216, 10) +
      '<text x="120" y="24" ' + font + ' font-size="10" fill="' + LIL + '">TAPPERS WITH ATTITUDE · D.C.</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">SHE WAS TAPPING BEFORE SHE WAS SINGING</text>',
      sky("my-s2", "#2a2238", "#4a3a5a"));
  }

  /* 3. Eleanor Roosevelt High School, Greenbelt */
  function myroosevelt() {
    const cap = (x, y, cls) => '<g class="my-cap ' + cls + '"><path d="M' + (x - 14) + ' ' + y + 'l14 -6l14 6l-14 6z" fill="#1a1a2a"/><rect x="' + (x - 7) + '" y="' + (y + 2) + '" width="14" height="6" fill="#1a1a2a"/><path d="M' + (x + 10) + ' ' + (y + 1) + 'v10" stroke="' + GOLD + '" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#my-s3)"/>' +
      '<path d="M0 196q200 -14 400 0v64H0z" fill="#4f7a3a"/>' + tree(20, 170, 1.8, "#3c6a2e") + tree(384, 168, 1.9, "#3c6a2e") +
      '<rect x="40" y="96" width="320" height="100" fill="#b0603e"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M40 ' + (102 + i * 8) + 'h320" stroke="#8a4a2e" stroke-width=".8"/>').join("") +
      '<rect x="34" y="88" width="332" height="10" fill="#e8e0d0"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (54 + i * 38) + '" y="108" width="26" height="22" fill="#2a3a4a" stroke="#e8e0d0" stroke-width="2"/>').join("") +
      '<rect x="170" y="146" width="60" height="50" fill="#2a3a4a" stroke="#e8e0d0" stroke-width="3"/><path d="M200 146v50" stroke="#e8e0d0" stroke-width="2"/>' +
      '<rect x="120" y="62" width="160" height="22" rx="2" fill="#123a6a"/><text x="200" y="77" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ELEANOR ROOSEVELT HIGH</text>' +
      cap(110, 60, "") + cap(200, 44, "my-cap2") + cap(300, 58, "my-cap3") + cap(250, 30, "") + cap(150, 34, "my-cap2") +
      '<rect x="270" y="160" width="84" height="34" rx="3" fill="#123a6a" stroke="' + GOLD + '" stroke-width="2"/><text x="312" y="174" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">CONGRATS</text><text x="312" y="186" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">GRADUATES</text>' +
      '<rect x="294" y="194" width="6" height="12" fill="#5a5f66"/><rect x="324" y="194" width="6" height="12" fill="#5a5f66"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">HANOVER PKWY · GREENBELT · GRADUATED AT 16</text>',
      sky("my-s3", "#86b8e8", "#f6dcb8"));
  }

  /* 4. McKeldin Mall, University of Maryland */
  function mymckeldin() {
    return svg(
      '<rect width="400" height="260" fill="url(#my-s4)"/>' +
      tree(30, 150, 2, "#3c6a2e") + tree(370, 150, 2, "#3c6a2e") + tree(80, 156, 1.5, "#4a7a3a") + tree(320, 156, 1.5, "#4a7a3a") +
      /* library: brick body, white portico, dome */
      '<rect x="110" y="90" width="180" height="70" fill="#a0523a"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M110 ' + (96 + i * 8) + 'h180" stroke="#83402c" stroke-width=".8"/>').join("") +
      '<rect x="150" y="96" width="100" height="64" fill="#f2efe6"/><path d="M144 98l56 -22l56 22z" fill="#f2efe6" stroke="#c8c4b8"/>' +
      [158, 176, 194, 212, 230].map(x => '<rect x="' + x + '" y="100" width="8" height="60" fill="#fff" stroke="#c8c4b8"/>').join("") +
      '<rect x="180" y="58" width="40" height="14" fill="#f2efe6"/><path d="M178 60q22 -30 44 0z" fill="#e8e4d8" stroke="#c8c4b8"/><rect x="198" y="22" width="4" height="12" fill="#c8c4b8"/>' +
      [120, 136, 264, 280].map(x => '<rect x="' + x + '" y="108" width="10" height="16" fill="#2a3440" stroke="#fff" stroke-width="1.2"/>').join("") +
      /* the long mall lawn */
      '<path d="M0 160h400v100H0z" fill="#5a9a42"/><path d="M180 160L120 260h160L220 160z" fill="#d8d0b8"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (20 + i * 70) + ' ' + (190 + (i % 2) * 20) + 'l4 -6l4 6" stroke="#4a8a34" stroke-width="2" fill="none"/>').join("") +
      /* sprinkler arc */
      '<path class="my-water" d="M60 236q30 -50 70 0" stroke="#bfe6ff" stroke-width="2" fill="none" stroke-dasharray="3 4"/><path class="my-water" d="M330 236q-30 -50 -70 0" stroke="#bfe6ff" stroke-width="2" fill="none" stroke-dasharray="3 4" style="animation-delay:-.7s"/>' +
      '<rect x="90" y="14" width="220" height="20" rx="3" fill="#a8122a"/><text x="200" y="28" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">McKELDIN MALL · COLLEGE PARK</text>',
      sky("my-s4", "#7fb4ea", "#e8eef4"));
  }

  /* 5. Greenbelt Rd and Hanover Pkwy */
  function mycorner() {
    const theatre = '<g>' +
      '<rect x="40" y="70" width="170" height="56" fill="#efe2c8"/>' +
      '<path d="M40 70h170" stroke="' + MINT + '" stroke-width="3"/><path d="M40 78h170" stroke="' + LIL + '" stroke-width="2"/>' +
      /* stepped deco tower */
      '<rect x="104" y="28" width="42" height="44" fill="#efe2c8"/><rect x="110" y="18" width="30" height="12" fill="#efe2c8"/><rect x="118" y="10" width="14" height="10" fill="#efe2c8"/>' +
      '<path d="M112 34v34M125 24v44M138 34v34" stroke="#c8b898" stroke-width="2"/>' +
      /* marquee */
      '<rect x="70" y="88" width="110" height="18" fill="#1a1a2a"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="my-chase' + (i % 2 ? " my-chase2" : "") + '" cx="' + (74 + i * 9.2) + '" cy="90" r="1.6" fill="' + GOLD + '"/>').join("") +
      '<text x="125" y="102" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">GREENBELT</text>' +
      '<rect class="my-glow" x="96" y="108" width="58" height="18" fill="#ffe9b0" opacity=".5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#my-s5)"/>' + stars(14) +
      tree(236, 120, 1.6, "#1e3324") + tree(20, 120, 1.4, "#1e3324") + theatre +
      '<rect x="0" y="126" width="400" height="8" fill="#1a1a2a"/>' +
      '<rect x="0" y="132" width="400" height="76" fill="#3a3448"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#2a2438" stroke-width="1"/>').join("") +
      tag("MYA", 34, 196, 56, LIL, -5) + tag("FREE", 196, 164, 22, MINT, -3) + tag("TWA", 220, 202, 24, GOLD, -6) +
      '<circle class="my-sp" cx="208" cy="194" r="3" fill="' + LIL + '" opacity=".8"/><circle class="my-sp my-sp2" cx="214" cy="198" r="2" fill="' + MINT + '" opacity=".8"/>' +
      '<rect x="0" y="208" width="400" height="10" fill="#8e8a82"/><rect x="0" y="218" width="400" height="42" fill="#2a2a30"/>' +
      '<path d="M0 240h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="my-car"><rect x="0" y="222" width="64" height="16" rx="5" fill="#5a3a8a"/><rect x="12" y="216" width="36" height="10" rx="4" fill="#5a3a8a"/><circle cx="14" cy="240" r="5" fill="#111"/><circle cx="50" cy="240" r="5" fill="#111"/><circle cx="62" cy="228" r="2" fill="#fff6c8"/></g>' +
      '<rect x="358" y="64" width="5" height="146" fill="#5a5f66"/>' +
      sign(262, 64, 136, "GREENBELT RD") + sign(262, 90, 136, "HANOVER PKWY") +
      '<text x="270" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="' + LIL + '" opacity=".9">GREENBELT, PRINCE GEORGE\'S COUNTY</text>',
      sky("my-s5", "#0c0a24", "#3a2a5a"));
  }

  window.SCENES = { mystation: mystation, mytap: mytap, myroosevelt: myroosevelt, mymckeldin: mymckeldin, mycorner: mycorner };
})();
