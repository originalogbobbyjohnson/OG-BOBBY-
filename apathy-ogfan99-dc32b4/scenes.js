/* apathy scenes (Regions tab: Boston + New England; Willimantic, CT) */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-140px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}' +
    '@keyframes flame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}.fm{transform-box:fill-box;transform-origin:50% 100%;animation:flame .6s ease-in-out infinite}.fm2{animation-delay:-.3s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.fg{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '@keyframes glide{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.gld{animation:glide 16s linear infinite}' +
    '@keyframes smoke{0%{transform:translateY(0);opacity:.6}100%{transform:translateY(-40px);opacity:0}}.smk{animation:smoke 2.6s ease-out infinite}.smk2{animation-delay:-1.3s}' +
    '@keyframes spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp{animation:spray 1.4s ease-out infinite}.sp2{animation-delay:.45s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.sw{transform-box:fill-box;transform-origin:0% 50%;animation:sweep 4s ease-in-out infinite}' +
    '@keyframes flow{from{transform:translateX(0)}to{transform:translateX(-40px)}}.fl{animation:flow 2.4s linear infinite}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vy{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes run{0%{transform:translate(0,0)}100%{transform:translate(60px,-56px)}}.run{animation:run 4s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bl") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const pole = (x, y1, y2) => '<rect x="' + (x - 3) + '" y="' + y1 + '" width="6" height="' + (y2 - y1) + '" fill="#2f2f2f"/>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 12) + '" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="' + (x + 46) + '" cy="' + (y + 14) + '" r="4" fill="#111"/></g>';
  const FROG = "#6ee06e", AMB = "#f0a830", RED = "#c94a4a";
  /* US route shield: white shield, black numerals */
  const shield = (x, y, n) => '<path d="M' + (x - 14) + ' ' + y + 'h28q2 8 -2 18q-4 10 -12 14q-8 -4 -12 -14q-4 -10 -2 -18z" fill="#fff" stroke="#111" stroke-width="2"/><text x="' + x + '" y="' + (y + 19) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#111">' + n + '</text>';
  /* a frog sitting on a thread spool (the Thread City Crossing frogs) */
  const frogSpool = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<rect x="-18" y="0" width="36" height="8" rx="2" fill="#b89a6a"/><rect x="-14" y="8" width="28" height="30" fill="#e8e0cc"/><path d="M-14 14h28M-14 20h28M-14 26h28M-14 32h28" stroke="#c8bca0" stroke-width="1.5"/><rect x="-18" y="38" width="36" height="8" rx="2" fill="#b89a6a"/>' +
    '<path d="M-14 0q-2 -16 14 -22q16 6 14 22z" fill="#4f9a4a" stroke="#2e5e2a" stroke-width="1.5"/><circle cx="-7" cy="-20" r="5" fill="#4f9a4a" stroke="#2e5e2a" stroke-width="1.5"/><circle cx="7" cy="-20" r="5" fill="#4f9a4a" stroke="#2e5e2a" stroke-width="1.5"/>' +
    '<circle cx="-7" cy="-21" r="2" fill="#111"/><circle cx="7" cy="-21" r="2" fill="#111"/><path d="M-16 -2q-6 2 -4 6M16 -2q6 2 4 6" stroke="#2e5e2a" stroke-width="2" fill="none"/></g>';

  /* 1. US 6 East into Willimantic: big green highway sign over the road, cars rolling under it, hills and mill smokestack ahead */
  function highway() {
    return svg(
      '<rect width="400" height="260" fill="url(#a1)"/>' +
      '<path d="M0 150q80 -40 160 -10t140 -14t100 4v120H0z" fill="#5f8a4e"/><path d="M0 160q100 -20 200 0t200 -6v106H0z" fill="#4c7a3e"/>' +
      '<rect x="340" y="132" width="8" height="28" fill="#8a5a42"/><rect x="300" y="146" width="70" height="18" fill="#9a8a74"/>' +
      '<path d="M0 260L160 160h80L400 260z" fill="#55585e"/><path d="M200 166v12M200 190v16M200 220v24" stroke="#f2f2f2" stroke-width="3"/><path d="M0 260L160 160M400 260L240 160" stroke="#e8e8e8" stroke-width="2"/>' +
      '<rect x="40" y="40" width="6" height="140" fill="#8a8f96"/><rect x="354" y="40" width="6" height="140" fill="#8a8f96"/><rect x="40" y="40" width="320" height="6" fill="#8a8f96"/>' +
      '<rect x="80" y="48" width="240" height="78" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' + shield(120, 58, "6") +
      '<text x="148" y="72" ' + font + ' font-size="13" fill="#fff">EAST</text><text x="200" y="104" text-anchor="middle" ' + font + ' font-size="24" fill="#fff">Willimantic</text><text x="200" y="120" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">THREAD CITY  NEXT RIGHT</text>' +
      '<g class="car"><rect x="0" y="222" width="54" height="16" rx="5" fill="' + RED + '"/><rect x="12" y="214" width="28" height="10" rx="3" fill="' + RED + '"/><circle cx="12" cy="238" r="4" fill="#111"/><circle cx="42" cy="238" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="200" width="44" height="13" rx="4" fill="#3a6aa8"/><rect x="10" y="193" width="22" height="9" rx="3" fill="#3a6aa8"/><circle cx="10" cy="213" r="3.5" fill="#111"/><circle cx="34" cy="213" r="3.5" fill="#111"/></g>',
      sky("a1", "#86b8e6", "#e8f2fa"));
  }

  /* 2. The old American Thread mills on the Willimantic River: long granite mill, rows of windows, smokestack, the river running past */
  function mills() {
    const win = Array.from({ length: 4 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (44 + c * 22) + '" y="' + (78 + r * 24) + '" width="10" height="14" fill="' + ((r + c) % 5 ? "#2c3440" : "#ffd98a") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#a2)"/>' +
      '<rect x="350" y="20" width="18" height="120" fill="#8a5a42"/><g class="smk"><circle cx="359" cy="14" r="8" fill="#ccc"/></g><g class="smk smk2"><circle cx="363" cy="8" r="10" fill="#ddd"/></g>' +
      '<rect x="30" y="66" width="320" height="110" fill="#a8a294"/><path d="M26 66h328l-12 -18H38z" fill="#5a5a60"/>' + win +
      '<rect x="180" y="40" width="30" height="40" fill="#a8a294"/><path d="M176 40h38l-19 -16z" fill="#5a5a60"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#2f5a6a"/><path d="M0 176h400" stroke="#7a7466" stroke-width="6"/>' +
      '<g class="fl" opacity=".55"><path d="M0 200q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#bfe3ee" stroke-width="2" fill="none"/><path d="M0 230q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#bfe3ee" stroke-width="2" fill="none"/></g>' +
      '<path d="M0 260q20 -30 50 -40l20 40z" fill="#4c7a3e"/>',
      sky("a2", "#9cc4e8", "#f2f6fa"));
  }

  /* 3. 90.3 on the radio dial: the college radio booth, ON AIR light blinking, the record spinning */
  function radio() {
    return svg(
      '<rect width="400" height="260" fill="#14161c"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#2a2440"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="36" height="150" fill="#332c4e"/>').join("") +
      '<rect x="140" y="20" width="120" height="34" rx="4" fill="#1a0a0a" stroke="#555"/><text class="bl" x="200" y="44" text-anchor="middle" ' + font + ' font-size="20" fill="#ff3b3b" letter-spacing="3">ON AIR</text>' +
      '<rect x="40" y="70" width="110" height="40" rx="4" fill="#0b0b0b" stroke="' + AMB + '" stroke-width="2"/><text x="95" y="98" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="22" fill="' + AMB + '">90.3 FM</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3a2a20"/><rect x="40" y="160" width="320" height="60" rx="4" fill="#24242a" stroke="#555"/>' +
      '<g class="vy"><circle cx="110" cy="190" r="24" fill="#0b0b0b"/><circle cx="110" cy="190" r="16" fill="none" stroke="#2a2a2a"/><circle cx="110" cy="190" r="7" fill="' + FROG + '"/></g>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (170 + i * 18) + '" y="172" width="6" height="36" fill="#444"/><rect x="' + (167 + i * 18) + '" y="' + (176 + (i * 7) % 24) + '" width="12" height="6" fill="' + (i % 2 ? AMB : "#ddd") + '"/>').join("") +
      '<path d="M300 150v-50" stroke="#888" stroke-width="3"/><path d="M300 100q30 0 30 30" stroke="#888" stroke-width="3" fill="none"/><rect x="318" y="126" width="24" height="34" rx="12" fill="#ccc" stroke="#666" stroke-width="2"/>',
      "");
  }

  /* 4. Block Island: the red-brick Southeast Lighthouse on the bluff, beam sweeping, a schooner with a skull flag sailing by */
  function blockisland() {
    return svg(
      '<rect width="400" height="260" fill="url(#a4)"/>' + stars(20) +
      '<g class="sw" style="transform-origin:100% 50%"><path d="M290 60l-200 -30v60z" fill="#fff6c2" opacity=".18"/></g>' +
      '<path d="M200 260v-90q60 -30 200 -36v126z" fill="#6a7a4a"/><path d="M200 170q60 -30 200 -36v14q-140 6 -200 36z" fill="#c9b68a"/>' +
      '<rect x="250" y="112" width="70" height="34" fill="#a8432e"/><path d="M246 112l39 -18 39 18z" fill="#3a3a3a"/><rect x="278" y="64" width="22" height="50" fill="#a8432e"/><rect x="274" y="56" width="30" height="10" fill="#222"/><rect x="280" y="44" width="18" height="12" fill="#ffe680" class="flk"/><path d="M276 44h26l-13 -10z" fill="#222"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (258 + i * 20) + '" y="122" width="8" height="12" fill="#f4ecd8"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#0e2a44"/>' +
      '<g class="gld"><path d="M0 200h80l-10 16H10z" fill="#3b2414"/><rect x="38" y="140" width="3" height="60" fill="#3b2414"/><path d="M41 144l26 24h-26z" fill="#e8e0cc"/><path d="M38 150l-24 30h24z" fill="#e8e0cc"/><rect x="41" y="132" width="14" height="9" fill="#111"/><circle cx="48" cy="136.5" r="2.4" fill="#fff"/></g>' +
      '<g class="fl" opacity=".5"><path d="M0 230q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#7fb8e0" stroke-width="2" fill="none"/></g>',
      sky("a4", "#0a1428", "#2a4a6e"));
  }

  /* 5. Main St and Bridge St, Willimantic: green signs, AP tagged on the wall, the Thread City Crossing frogs on their spools behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#a5)"/>' +
      '<rect x="0" y="104" width="400" height="10" fill="#9a9a94"/><rect x="0" y="96" width="400" height="8" fill="#b8b8b0"/>' + frogSpool(70, 46, 0.95) + frogSpool(330, 46, 0.95) +
      '<rect x="0" y="126" width="400" height="98" fill="#7a4a3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#6a3e30" stroke-width="1"/>').join("") +
      tag("APATHY", 22, 186, 46, FROG, -6) + tag("DEMIGODZ", 150, 214, 22, AMB, -4) + tag("CT CASUAL", 24, 214, 18, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      pole(339, 96, 224) + sign(290, 98, 98, "Main St") + sign(290, 124, 98, "Bridge St") +
      '<g class="sp"><circle cx="150" cy="166" r="3" fill="' + FROG + '" opacity=".7"/></g><g class="sp sp2"><circle cx="156" cy="160" r="2" fill="' + FROG + '" opacity=".6"/></g>',
      sky("a5", "#6a8ec2", "#f0c890"));
  }

  window.SCENES = { highway: highway, mills: mills, radio: radio, blockisland: blockisland, corner: corner };
})();
