/* serengeti scenes (Regions tab: Chicago; Morgan Park, far South Side). CSS classes and ids prefixed sg- (the page's own anim-train is kept).
   1 95th/Dan Ryan on the CTA Red Line: the end of the line in the middle of the Dan Ryan, the long terminal canopy, a silver Red Line train sliding in to the bumper.
   2 Morgan Park High School (1744 W Pryor Ave), where he started writing verses: red brick, limestone trim, green-and-white Mustangs pennant, notebook pages blowing.
   3 Soldier Field ('85 Bears, "Bears, Hawks, Sox, Bulls"): the pale limestone Doric colonnade with the steel-and-glass bowl rising over it, a football spiralling.
   4 Western Ave ("In the Buick down Western, stop and get some more brats"): a brown Buick cruising past a hot dog / Italian beef stand and a softball diamond.
   5 W 111th St and S Western Ave: green signs, SERENGETI tagged, the grey limestone Irish Castle up on the Beverly ridge behind.
   Every 9 is drawn by hand with a straight stem; no logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sgflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sg-flk{animation:sgflick 2.2s infinite}.sg-flk2{animation-delay:.7s}' +
    '@keyframes sgcar{from{transform:translateX(-160px)}to{transform:translateX(540px)}}.sg-car{animation:sgcar 7s linear infinite}.sg-car2{animation-delay:-3.5s}' +
    '@keyframes sgcarL{from{transform:translateX(540px)}to{transform:translateX(-180px)}}.sg-carL{animation:sgcarL 8s linear infinite}.sg-carL2{animation-delay:-4s}' +
    '@keyframes sgball{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(150px,-46px) rotate(540deg)}100%{transform:translate(300px,0) rotate(1080deg)}}.sg-ball{transform-box:fill-box;transform-origin:50% 50%;animation:sgball 3.6s ease-in-out infinite}' +
    '@keyframes sgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.sg-flag{transform-box:fill-box;transform-origin:0 50%;animation:sgflag 1.6s ease-in-out infinite}' +
    '@keyframes sgpage{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(120px,-70px) rotate(200deg);opacity:0}}.sg-page{transform-box:fill-box;transform-origin:50% 50%;animation:sgpage 4.5s linear infinite}.sg-page2{animation-delay:-1.5s}.sg-page3{animation-delay:-3s}' +
    '@keyframes sgsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-24px);opacity:0}}.sg-stm{animation:sgsteam 2s ease-out infinite}.sg-stm2{animation-delay:-.7s}.sg-stm3{animation-delay:-1.4s}' +
    '@keyframes sgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sg-sp{animation:sgspray 1.4s ease-out infinite}.sg-sp2{animation-delay:.45s}' +
    '@keyframes sgbat{0%,60%,100%{transform:rotate(0)}70%{transform:rotate(-70deg)}}.sg-bat{transform-box:fill-box;transform-origin:0 100%;animation:sgbat 2.4s ease-in-out infinite}' +
    '@keyframes sgbl{0%,100%{opacity:.25}50%{opacity:1}}.sg-bl{animation:sgbl 1.6s ease-in-out infinite}.sg-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, inner) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + inner;
  const stxt = (x, y, txt, anchor) => '<text x="' + x + '" y="' + y + '" ' + (anchor ? 'text-anchor="' + anchor + '" ' : '') + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  /* a 9 drawn by hand: round bowl, straight stem */
  const nine = (x, y, sz, c) => { const r = sz * 0.25, w = sz * 0.17; return '<circle cx="' + (x + r + w / 2) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 12) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 46) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const RED = "#c60c30", NAVY = "#0b162a", ORANGE = "#e8642a", MUST = "#e8b84a";

  /* 1. 95th/Dan Ryan, end of the Red Line in the expressway median */
  function sgstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (46 + i * 48) + '" y="112" width="32" height="20" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="26" y="102" width="300" height="60" rx="7" fill="#d4d8dc" stroke="#7a828a" stroke-width="2"/>' + win +
      Array.from({ length: 14 }, (_, i) => '<path d="M' + (34 + i * 20) + ' 138v20" stroke="#b9bfc5" stroke-width="1.5"/>').join("") +
      '<rect x="26" y="134" width="300" height="3" fill="' + RED + '"/><rect x="26" y="137" width="300" height="3" fill="#fff"/><rect x="26" y="140" width="300" height="3" fill="#00a1de"/>' +
      '<rect x="306" y="106" width="18" height="54" rx="4" fill="#b3b9bf"/><circle cx="316" cy="154" r="3.5" fill="#fff6c2"/>' +
      '<rect x="236" y="106" width="64" height="12" rx="2" fill="#111"/><text x="268" y="115" text-anchor="middle" ' + font + ' font-size="8" fill="#ff5a6e">HOWARD</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs1)"/>' +
      /* the long terminal canopy with its glass ribbon */
      '<path d="M0 54h400v16H0z" fill="#9aa3ab"/><path d="M0 58h400" stroke="#cfe6f2" stroke-width="5" opacity=".8"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="70" width="8" height="92" fill="#6b747c"/><path d="M' + (x - 18) + ' 70l22 -10l22 10" stroke="#6b747c" stroke-width="3" fill="none"/>').join("") +
      '<g class="sg-flk"><rect x="70" y="72" width="40" height="4" fill="#fff3c4"/></g><g class="sg-flk sg-flk2"><rect x="270" y="72" width="40" height="4" fill="#fff3c4"/></g>' +
      /* expressway lanes on both sides */
      '<rect x="0" y="22" width="400" height="30" fill="#3a3a3f"/><path d="M0 37h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("sg-carL", 0, 30, "#c0392b") + car("sg-carL sg-carL2", 0, 30, "#e0e4e8") +
      train +
      /* end-of-line bumper */
      '<rect x="356" y="132" width="26" height="30" fill="#f2c200" stroke="#111" stroke-width="2"/><path d="M358 136l22 22M358 148l12 12M368 134l12 12" stroke="#111" stroke-width="3"/>' +
      '<rect x="0" y="162" width="400" height="7" fill="#f2c200"/><rect x="0" y="169" width="400" height="22" fill="#8e8a82"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3a3f"/><path d="M0 245h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("sg-car", 0, 236, "#5d7fa3") +
      '<rect x="84" y="176" width="232" height="34" rx="3" fill="#111"/>' + nine(98, 199, 18, "#fff") +
      '<text x="111" y="199" ' + font + ' font-size="17" fill="#fff">5th/Dan Ryan</text>' + badge(254, 193, "RED", RED) +
      '<text x="200" y="224" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e6d0" opacity=".9">END OF THE LINE · FAR SOUTH SIDE</text>',
      sky("sgs1", "#1d2547", "#d9845c"));
  }

  /* 2. Morgan Park High School */
  function sgschool() {
    const bricks = Array.from({ length: 10 }, (_, i) => '<path d="M60 ' + (96 + i * 9) + 'h280" stroke="#7a2e22" stroke-width=".8" opacity=".6"/>').join("");
    const windows = [0, 1].map(r => Array.from({ length: 8 }, (_, i) => '<rect x="' + (74 + i * 34) + '" y="' + (100 + r * 40) + '" width="20" height="26" fill="#f6e6b0" class="' + ((i + r) % 3 === 0 ? "sg-bl" : "") + '"/><path d="M' + (84 + i * 34) + ' ' + (100 + r * 40) + 'v26M' + (74 + i * 34) + ' ' + (113 + r * 40) + 'h20" stroke="#a9967a" stroke-width="1.5"/><rect x="' + (72 + i * 34) + '" y="' + (126 + r * 40) + '" width="24" height="3" fill="#e9dfc8"/>').join("")).join("");
    const page = (cls, x, y) => '<g class="sg-page ' + cls + '"><rect x="' + x + '" y="' + y + '" width="16" height="20" fill="#fffef6" stroke="#9db7d4" stroke-width=".8"/><path d="M' + (x + 3) + ' ' + (y + 6) + 'h10M' + (x + 3) + ' ' + (y + 10) + 'h10M' + (x + 3) + ' ' + (y + 14) + 'h7" stroke="#5a7fb0" stroke-width="1"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs2)"/>' +
      '<g fill="#2f5a2f" opacity=".85"><circle cx="20" cy="150" r="30"/><circle cx="380" cy="146" r="34"/></g>' +
      '<rect x="60" y="88" width="280" height="98" fill="#9c3d2c"/>' + bricks + windows +
      '<rect x="56" y="82" width="288" height="8" fill="#e9dfc8"/><rect x="56" y="134" width="288" height="4" fill="#e9dfc8"/>' +
      /* central entry pavilion */
      '<rect x="166" y="62" width="68" height="124" fill="#a9442f"/><rect x="162" y="58" width="76" height="8" fill="#e9dfc8"/><path d="M162 58l38 -16l38 16z" fill="#e9dfc8"/>' +
      '<rect x="176" y="70" width="48" height="12" fill="#e9dfc8"/><text x="200" y="79.5" text-anchor="middle" ' + font + ' font-size="6.4" fill="#5a3a2a">MORGAN PARK</text>' +
      '<rect x="184" y="146" width="32" height="40" fill="#3a2a22"/><path d="M184 146q16 -14 32 0" fill="#e9dfc8"/><path d="M200 146v40" stroke="#6a5a4a" stroke-width="1.5"/>' +
      '<text x="200" y="98" text-anchor="middle" ' + font + ' font-size="7" fill="#f4ecd8">HIGH SCHOOL</text>' +
      /* flagpole with the green-and-white Mustangs pennant */
      '<rect x="344" y="40" width="3" height="146" fill="#ccc"/><g class="sg-flag"><path d="M347 44l42 10l-42 10z" fill="#1f6b3a"/><path d="M350 52h18" stroke="#fff" stroke-width="2"/></g>' +
      '<rect x="0" y="186" width="400" height="74" fill="#5f8a3e"/><path d="M150 260l34 -74h32l34 74z" fill="#cfc6b2"/>' +
      '<rect x="10" y="200" width="88" height="40" rx="3" fill="#fffef6" stroke="#333" stroke-width="1.5"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M16 ' + (208 + i * 6) + 'h76" stroke="#9db7d4" stroke-width=".8"/>').join("") +
      '<path d="M22 206v32" stroke="#e08a8a" stroke-width="1"/><text x="54" y="214" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="8" fill="#2a3f7a">first verses</text>' +
      '<path d="M28 222q10 -4 20 0t20 0t20 0M28 230q10 -4 20 0t16 0" stroke="#2a3f7a" stroke-width="1.2" fill="none"/>' +
      page("", 96, 196) + page("sg-page2", 300, 204) + page("sg-page3", 120, 220),
      sky("sgs2", "#7fb2de", "#e8eef2"));
  }

  /* 3. Soldier Field: Doric colonnade with the steel bowl over it */
  function sgsoldier() {
    const cols = Array.from({ length: 14 }, (_, i) => '<rect x="' + (66 + i * 20) + '" y="122" width="10" height="64" fill="#e9e2cf"/><rect x="' + (64 + i * 20) + '" y="118" width="14" height="5" fill="#d8cfb6"/><path d="M' + (69 + i * 20) + ' 124v60M' + (73 + i * 20) + ' 124v60" stroke="#cfc5aa" stroke-width=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sgs3)"/>' +
      /* the modern bowl cantilevered over the old colonnade */
      '<path d="M40 112q160 -96 330 -40l10 40z" fill="#8f99a3"/><path d="M48 108q156 -86 318 -36" stroke="#cfe6f2" stroke-width="6" fill="none" opacity=".8"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (70 + i * 30) + ' 112l' + (i * 2 - 8) + ' -' + (30 + (i < 5 ? i * 8 : (9 - i) * 6)) + '" stroke="#5d6770" stroke-width="2"/>').join("") +
      '<g class="sg-flk"><rect x="120" y="58" width="6" height="12" fill="#fff6c2"/><rect x="280" y="54" width="6" height="12" fill="#fff6c2"/></g>' +
      /* entablature + colonnade */
      '<rect x="52" y="106" width="300" height="14" fill="#efe8d6"/><rect x="52" y="104" width="300" height="3" fill="#d8cfb6"/>' + cols +
      '<rect x="40" y="120" width="26" height="66" fill="#e3dbc4"/><rect x="340" y="120" width="26" height="66" fill="#e3dbc4"/>' +
      '<rect x="40" y="186" width="326" height="8" fill="#d8cfb6"/>' +
      /* spiralling football */
      '<g class="sg-ball"><ellipse cx="50" cy="90" rx="10" ry="6" fill="#7a3f1d"/><path d="M45 90h10M48 88v4M50 88v4M52 88v4" stroke="#fff" stroke-width="1"/></g>' +
      '<rect x="0" y="194" width="400" height="66" fill="#5c7a3a"/><path d="M0 214h400M0 236h400" stroke="#e9f2dc" stroke-width="1.5" opacity=".5"/>' +
      '<g transform="translate(300 206)"><rect x="0" y="0" width="70" height="30" rx="3" fill="' + NAVY + '" stroke="' + ORANGE + '" stroke-width="2"/><text x="35" y="13" text-anchor="middle" ' + font + ' font-size="9" fill="' + ORANGE + '">BEARS HAWKS</text><text x="35" y="25" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">SOX BULLS</text></g>' +
      '<text x="20" y="232" ' + font + ' font-size="10" fill="#fff" opacity=".9">LAKE SHORE · SOUTH LOOP</text>',
      sky("sgs3", "#1b2b4e", "#f09a5c"));
  }

  /* 4. Western Ave: the Buick, a hot dog stand, a softball diamond */
  function sgwestern() {
    const buick = '<g class="sg-car" style="animation-duration:9s;animation-delay:-4s"><rect x="0" y="206" width="96" height="20" rx="5" fill="#7a4a2a"/><path d="M18 206l12 -14h38l12 14z" fill="#7a4a2a"/><path d="M33 204l7 -9h12v9zM56 204v-9h10l6 9z" fill="#bfe3ff"/>' +
      '<rect x="0" y="214" width="96" height="3" fill="#d8c7a6"/><circle cx="20" cy="226" r="8" fill="#111"/><circle cx="20" cy="226" r="3" fill="#aaa"/><circle cx="76" cy="226" r="8" fill="#111"/><circle cx="76" cy="226" r="3" fill="#aaa"/>' +
      '<rect x="72" y="200" width="16" height="7" fill="#c0392b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs4)"/>' +
      /* softball diamond behind a fence */
      '<path d="M250 148l70 -36l70 36l-70 36z" fill="#c9905a"/><path d="M262 148l58 -30l58 30l-58 30z" fill="#5f8a3e"/><rect x="316" y="116" width="8" height="8" fill="#fff"/><rect x="316" y="172" width="8" height="8" fill="#fff"/>' +
      '<g transform="translate(320 160)"><rect x="-3" y="-20" width="6" height="14" fill="' + NAVY + '"/><circle cx="0" cy="-24" r="4" fill="#d9b48c"/><rect class="sg-bat" x="3" y="-30" width="3" height="16" fill="#c9a24a"/></g>' +
      Array.from({ length: 22 }, (_, i) => '<path d="M' + (230 + i * 8) + ' 120v64" stroke="#9aa3ab" stroke-width=".8" opacity=".6"/>').join("") +
      /* the stand */
      '<rect x="30" y="96" width="160" height="88" fill="#f2efe6"/><rect x="24" y="84" width="172" height="16" fill="#c0392b"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (24 + i * 16) + '" y="84" width="8" height="16" fill="#fff"/>').join("") +
      '<rect x="40" y="56" width="140" height="24" rx="3" fill="' + NAVY + '" stroke="' + MUST + '" stroke-width="2"/><text x="110" y="73" text-anchor="middle" ' + font + ' font-size="12" fill="' + MUST + '">BRATS · BEEF · DOGS</text>' +
      '<rect x="44" y="110" width="132" height="40" fill="#2a2a2a"/><g class="sg-flk"><rect x="48" y="114" width="124" height="32" fill="#f6dd8a" opacity=".85"/></g>' +
      '<text x="110" y="134" text-anchor="middle" ' + font + ' font-size="10" fill="#5a2a1a">ITALIAN BEEF · POLISH</text>' +
      '<g class="sg-stm"><path d="M70 104q-4 -8 0 -16" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g><g class="sg-stm sg-stm2"><path d="M110 104q-4 -8 0 -16" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g><g class="sg-stm sg-stm3"><path d="M150 104q-4 -8 0 -16" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g>' +
      /* red cooler on the curb */
      '<rect x="196" y="168" width="26" height="16" rx="2" fill="#c0392b"/><rect x="194" y="164" width="30" height="5" rx="2" fill="#fff"/>' +
      '<rect x="0" y="184" width="400" height="10" fill="#b8b2a6"/><rect x="0" y="194" width="400" height="66" fill="#3a3a3f"/><path d="M0 238h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      buick + car("sg-carL", 0, 248, "#2f5a8a") +
      sign(250, 28, 120, stxt(310, 44, "S Western Ave", "middle")),
      sky("sgs4", "#5aa0d8", "#f5d7a8"));
  }

  /* 5. W 111th St and S Western Ave, the Irish Castle on the ridge behind */
  function sgcorner() {
    const castle = '<g fill="#9a9a92"><rect x="150" y="70" width="110" height="60"/><rect x="134" y="50" width="30" height="80"/><rect x="246" y="58" width="26" height="72"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (134 + i * 8) + '" y="44" width="5" height="7"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (246 + i * 7) + '" y="52" width="5" height="7"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (150 + i * 12.5) + '" y="64" width="7" height="7"/>').join("") + '</g>' +
      '<g fill="#3a3f4a"><rect x="144" y="66" width="8" height="14"/><rect x="254" y="74" width="8" height="12"/><path d="M196 130v-24q9 -10 18 0v24z"/><rect x="170" y="88" width="10" height="16"/><rect x="230" y="88" width="10" height="16"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M150 ' + (78 + i * 9) + 'h110" stroke="#7d7d76" stroke-width=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sgs5)"/>' +
      '<path d="M0 132q100 -18 200 -10t200 2v20H0z" fill="#3f6a34"/>' + castle +
      '<g fill="#2f5a2f"><circle cx="110" cy="122" r="18"/><circle cx="300" cy="120" r="20"/></g>' +
      '<rect x="0" y="130" width="400" height="94" fill="#c8b48a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#a8946a" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#a8946a" stroke-width="1"/>').join("")).join("") +
      tag("SERENGETI", 14, 194, 44, ORANGE, -6) + tag("GRIMM TEACHAZ", 110, 218, 16, MUST, -4) + tag("KD", 30, 158, 24, "#7fc4ff", -8) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' +
      sign(258, 98, 132, stxt(272, 114, "W 111th St")) +
      sign(262, 124, 124, stxt(324, 140, "S Western Ave", "middle")) +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sg-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("sg-carL", 0, 240, "#7a4a2a") +
      '<g class="sg-sp"><circle cx="232" cy="164" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="sg-sp sg-sp2"><circle cx="238" cy="158" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("sgs5", "#24305e", "#f0a070"));
  }

  window.SCENES = { sgstation: sgstation, sgschool: sgschool, sgsoldier: sgsoldier, sgwestern: sgwestern, sgcorner: sgcorner };
})();
