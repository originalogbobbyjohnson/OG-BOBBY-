(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}.blk{animation:blink 1.6s infinite}.blk2{animation:blink 1.6s infinite;animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1;transform:scaleY(1)}30%{opacity:.75;transform:scaleY(.85)}60%{opacity:.95;transform:scaleY(1.1)}}.flk{transform-box:fill-box;transform-origin:50% 100%;animation:flick .9s ease-in-out infinite}.flk2{animation-delay:.35s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spn{transform-box:view-box;animation:spin 12s linear infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-28deg)}50%{transform:rotate(28deg)}}.swp{animation:sweep 5s ease-in-out infinite}' +
    '@keyframes flutter{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.flg{transform-box:fill-box;transform-origin:0 50%;animation:flutter 1.4s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,120px) rotate(200deg);opacity:0}}.lf{animation:fall 5s linear infinite}.lf2{animation-delay:1.7s}.lf3{animation-delay:3.3s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.dft{animation:drift 26s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.bt{animation:boat 18s linear infinite}' +
    '@keyframes swim{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.swm{animation:swim 7s ease-in-out infinite}' +
    '@keyframes peek{0%,30%,100%{transform:translateY(14px)}45%,85%{transform:translateY(0)}}.pk{animation:peek 4s ease-in-out infinite}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes carR{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.cr1{animation:carR 6s linear infinite}.cr2{animation:carR 6s linear infinite;animation-delay:-3s}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.6}100%{transform:translateY(-26px);opacity:0}}.stm{animation:steam 3s ease-out infinite}.stm2{animation-delay:1.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* Staten Island Railway "SIR" bullet */
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="10"/><ellipse cx="-12" cy="-4" rx="11" ry="8"/></g>';
  /* SIR car (stainless, blue band), w long, at x,y top-left */
  const sirCar = (x, y, w) => {
    let win = ""; for (let i = x + 14; i < x + w - 40; i += 42) win += '<rect x="' + i + '" y="' + (y + 12) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="6" fill="#0039a6"/>' + win +
      '<rect x="' + (x + w - 18) + '" y="' + (y + 12) + '" width="12" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>' +
      '<circle cx="' + (x + w - 8) + '" cy="' + (y + 54) + '" r="4" fill="#fff6c2"/>' + sir(x + w - 40, y + 54);
  };
  /* green NYC street sign blade */
  const blade = (x, y, w, txt, rot) =>
    '<g transform="rotate(' + (rot || 0) + ' ' + (x + w / 2) + ' ' + (y + 11) + ')"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#0f7a3d" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">' + txt + '</text></g>';
  const station = (name, x, y, w) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
    '<text x="' + (x + 14) + '" y="' + (y + 25) + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">' + name + '</text>' + sir(x + w - 28, y + 18);
  const ORG = "#ffb347", RED = "#ff5a36", PALE = "#ffe08a";

  /* 1. Stapleton, looking inland: the elevated SIR platform, the stair down to Bay St and up St. Paul's Av, the Victorian rooftops of Stapleton Heights on the hill behind */
  function station1() {
    const vic = (x, y, body, roof) => '<rect x="' + x + '" y="' + y + '" width="34" height="30" fill="' + body + '"/><path d="M' + (x - 3) + ' ' + y + 'l20-16 20 16z" fill="' + roof + '"/><rect x="' + (x + 22) + '" y="' + (y - 22) + '" width="9" height="22" fill="' + body + '"/><path d="M' + (x + 20) + ' ' + (y - 22) + 'l6.5-9 6.5 9z" fill="' + roof + '"/><rect x="' + (x + 6) + '" y="' + (y + 8) + '" width="7" height="9" fill="#f7f3ea"/>';
    let steps = ""; for (let i = 0; i < 8; i++) steps += '<rect x="' + (318 + i * 7) + '" y="' + (182 + i * 7) + '" width="40" height="3" fill="#7a828c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + '<g class="dft">' + cloud(80, 26, .9) + cloud(300, 34, .7) + '</g>' +
      /* the hill with the Victorians */
      '<path d="M0 120Q90 50 200 58T400 84V180H0z" fill="#4f8a3a"/>' +
      vic(20, 92, "#7fa8c9", "#4a3a4a") + vic(78, 70, "#e6b85a", "#5a3a3a") + vic(140, 60, "#b85a6a", "#3a3a4a") + vic(210, 58, "#9ab07a", "#4a3a4a") + vic(270, 66, "#e6d6b0", "#5a3a3a") + vic(340, 80, "#c98a5a", "#3a3a4a") +
      '<circle cx="120" cy="96" r="14" fill="#d9822b"/><circle cx="250" cy="88" r="12" fill="#3f7a3a"/>' +
      '<rect x="0" y="40" width="400" height="10" fill="#3a4250"/><rect x="0" y="50" width="400" height="4" fill="' + ORG + '"/>' +
      (function () { let p = ""; for (let x = 60; x < 400; x += 140) p += '<rect x="' + x + '" y="54" width="6" height="120" fill="#3a4250"/>'; return p; })() +
      station("Stapleton", 70, 66, 200) +
      /* exit sign toward St. Paul's Av */
      '<rect x="284" y="66" width="108" height="34" rx="3" fill="#111"/><text x="338" y="80" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">EXIT ↓ Bay St</text><text x="338" y="93" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="' + PALE + '">↑ up St. Paul\'s Av</text>' +
      '<g class="anim-train">' + sirCar(-60, 112, 350) + '</g>' +
      '<rect y="174" width="400" height="10" fill="#eab308"/><rect y="184" width="310" height="12" fill="#55606a"/>' +
      /* the stair down off the platform */
      '<rect x="312" y="184" width="88" height="76" fill="#3a4250"/>' + steps + '<path d="M316 180L372 240" stroke="#c9ced6" stroke-width="2"/>' +
      '<rect y="196" width="312" height="38" fill="#5a4a42"/>' +
      (function () { let c = ""; for (let x = 20; x < 300; x += 70) c += '<rect x="' + x + '" y="196" width="8" height="38" fill="#4a525c"/>'; return c; })() +
      '<rect y="234" width="312" height="26" fill="#2c2c30"/>' +
      '<g class="cr1"><rect x="0" y="240" width="44" height="14" rx="4" fill="' + ORG + '"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="34" cy="254" r="4" fill="#111"/></g>' +
      tag("TRIFE", 40, 226, 26, ORG, -4) + tag("THEODORE", 150, 228, 20, PALE, -5),
      sky("s1", "#8fc4f0", "#fde7c4"));
  }
  /* 2. St. Paul's Episcopal on St. Paul's Av (Stapleton Heights, 1870): rough gray stone Gothic church, steep slate roof, pointed windows, leaves and a bird going by */
  function paramount() {
    let stone = ""; for (let y = 96; y < 206; y += 9) for (let x = (y / 9) % 2 ? 92 : 84; x < 300; x += 18) stone += '<rect x="' + x + '" y="' + y + '" width="15" height="7" rx="1.5" fill="' + ((x + y) % 3 ? "#8d8c86" : "#7a7973") + '"/>';
    let tstone = ""; for (let y = 50; y < 206; y += 9) for (let x = (y / 9) % 2 ? 302 : 296; x < 344; x += 14) tstone += '<rect x="' + x + '" y="' + y + '" width="11" height="7" rx="1.5" fill="' + ((x + y) % 3 ? "#8d8c86" : "#7a7973") + '"/>';
    const arch = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'V' + (y + w / 2) + 'Q' + (x + w / 2) + ' ' + (y - w / 2) + ' ' + (x + w) + ' ' + (y + w / 2) + 'V' + (y + h) + 'z" fill="#3a3a52" stroke="#d8d2c0" stroke-width="2"/>';
    return svg(
      '<style>@keyframes fly{0%{transform:translate(-40px,30px)}100%{transform:translate(440px,-20px)}}.pg{animation:fly 9s linear infinite}</style>' +
      '<rect width="400" height="260" fill="url(#p1)"/>' + '<g class="dft">' + cloud(70, 34, .8) + '</g>' +
      '<circle cx="40" cy="190" r="34" fill="#3f7a3a"/><circle cx="370" cy="186" r="30" fill="#d9822b"/>' +
      /* nave: steep slate roof over gray stone */
      '<path d="M76 98L188 22 300 98z" fill="#3e4652"/>' +
      '<path d="M76 98L188 22 300 98" stroke="#2a3038" stroke-width="3" fill="none"/>' +
      (function () { let r = ""; for (let y = 40; y < 96; y += 8) r += '<path d="M' + (188 - (y - 22) * 1.47) + ' ' + y + 'H' + (188 + (y - 22) * 1.47) + '" stroke="#55606e" stroke-width="1"/>'; return r; })() +
      '<rect x="84" y="96" width="216" height="110" fill="#9a9993"/>' + stone +
      arch(108, 128, 24, 52) + arch(156, 128, 24, 52) + arch(216, 128, 24, 52) +
      '<path d="M188 40m-12 0a12 12 0 1 0 24 0a12 12 0 1 0 -24 0" fill="#5a4a7a" stroke="#d8d2c0" stroke-width="2"/><path d="M176 40h24M188 28v24" stroke="#d8d2c0" stroke-width="1.5"/>' +
      /* the tower with its spirelet */
      '<rect x="294" y="50" width="52" height="156" fill="#9a9993"/>' + tstone +
      '<path d="M290 52L320 6 350 52z" fill="#3e4652"/><path d="M320 6v-10M315 -2h10" stroke="#2a3038" stroke-width="2"/>' +
      arch(310, 70, 20, 34) + '<path d="M296 168h48v38h-48z" fill="#5a3a2a"/><path d="M304 206v-26q16-20 32 0v26z" fill="#6a2a2a" stroke="#d8d2c0" stroke-width="2"/>' +
      '<rect y="206" width="400" height="14" fill="#9a9a9a"/><rect y="220" width="400" height="40" fill="#2c2c30"/>' +
      '<g class="lf"><path d="M330 150l5 3-5 3-5-3z" fill="#e6b13a"/></g><g class="lf lf2"><path d="M360 150l5 3-5 3-5-3z" fill="#b8461f"/></g><g class="lf lf3"><path d="M50 160l5 3-5 3-5-3z" fill="#d9822b"/></g>' +
      '<g class="pg"><path d="M0 60q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="cr2"><rect x="0" y="232" width="44" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="34" cy="246" r="4" fill="#111"/></g>' +
      '<text x="200" y="256" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2" fill="#fff">ST. PAUL\'S EPISCOPAL · ST. PAUL\'S AV · 1870</text>',
      sky("p1", "#9fcff2", "#f2e2c8"));
  }
  /* 3. Stapleton Heights: the painted Victorian houses up St. Paul's Ave, gables and porches, the harbor below, leaves coming down */
  function stpauls() {
    const house = (x, y, body, trim, roof) =>
      '<rect x="' + x + '" y="' + y + '" width="80" height="84" fill="' + body + '" stroke="' + trim + '" stroke-width="2"/>' +
      '<path d="M' + (x - 6) + ' ' + y + 'l46-34 46 34z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 50) + '" y="' + (y - 40) + '" width="18" height="40" fill="' + body + '" stroke="' + trim + '" stroke-width="2"/><path d="M' + (x + 46) + ' ' + (y - 40) + 'l13-16 13 16z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 14) + '" y="' + (y + 10) + '" width="14" height="20" fill="#cfe2ee" stroke="' + trim + '"/><rect x="' + (x + 52) + '" y="' + (y + 10) + '" width="14" height="20" fill="#cfe2ee" stroke="' + trim + '"/>' +
      '<rect x="' + (x - 4) + '" y="' + (y + 46) + '" width="88" height="5" fill="' + trim + '"/>' +
      '<rect x="' + x + '" y="' + (y + 51) + '" width="3" height="33" fill="' + trim + '"/><rect x="' + (x + 38) + '" y="' + (y + 51) + '" width="3" height="33" fill="' + trim + '"/><rect x="' + (x + 77) + '" y="' + (y + 51) + '" width="3" height="33" fill="' + trim + '"/>' +
      '<rect x="' + (x + 48) + '" y="' + (y + 56) + '" width="14" height="28" fill="#5a3a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#h1)"/>' +
      '<rect y="70" width="400" height="26" fill="#5a8ab0"/><g fill="#8a98a8"><rect x="20" y="56" width="8" height="14"/><rect x="32" y="50" width="6" height="20"/><rect x="40" y="60" width="12" height="10"/></g>' +
      '<path d="M0 96h400v164H0z" fill="#4f8a3a"/>' +
      house(20, 126, "#7fa8c9", "#f7f3ea", "#4a3a4a") + house(150, 116, "#e6b85a", "#7a2a2a", "#5a3a3a") + house(282, 128, "#b85a6a", "#f7f3ea", "#3a3a4a") +
      '<path d="M0 214q200-16 400 0v46H0z" fill="#8a8a8a"/><path d="M0 222q200-16 400 0" stroke="#f7f3ea" stroke-width="2" stroke-dasharray="10 10" fill="none"/>' +
      '<circle cx="130" cy="120" r="22" fill="#d9822b"/><circle cx="268" cy="108" r="18" fill="#b8461f"/>' +
      '<g class="lf"><path d="M140 100l5 3-5 3-5-3z" fill="#e6b13a"/></g><g class="lf lf2"><path d="M270 96l5 3-5 3-5-3z" fill="#b8461f"/></g><g class="lf lf3"><path d="M200 90l5 3-5 3-5-3z" fill="#d9822b"/></g>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">ST. PAUL\'S AVE · STAPLETON HEIGHTS</text>',
      sky("h1", "#8fc4f0", "#f8ecd8"));
  }

  /* 4. URBY on the Stapleton waterfront (2016): the boxy rental buildings with the farm up top, the harbor and Manhattan behind, the ferry going by */
  function outerbridge() {
    const box = (x, y, w, h, body, acc) => {
      let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + body + '"/>';
      for (let yy = y + 8; yy < y + h - 10; yy += 16) for (let xx = x + 6; xx < x + w - 12; xx += 16) s += '<rect x="' + xx + '" y="' + yy + '" width="11" height="10" fill="' + (((xx + yy) / 16) % 4 < 1 ? acc : "#2f3f52") + '"/>';
      return s;
    };
    let farm = ""; for (let x = 156; x < 248; x += 12) farm += '<rect x="' + x + '" y="98" width="8" height="6" rx="3" fill="#5aa04a"/><circle class="flk" cx="' + (x + 4) + '" cy="97" r="2" fill="#e8504a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#o1)"/>' + '<g class="dft">' + cloud(330, 30, .8) + '</g>' +
      /* lower Manhattan across the harbor */
      '<g fill="#8a9ab0">' + [[10, 62, 10, 30], [24, 48, 12, 44], [40, 66, 10, 26], [54, 30, 14, 62], [72, 58, 10, 34], [86, 70, 16, 22]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + b[3] + '"/>').join("") + '<path d="M58 30l3-14 3 14z"/></g>' +
      '<rect y="92" width="400" height="44" fill="#4a7aa0"/>' +
      '<g class="bt"><path d="M0 104h56l-6 10H6z" fill="' + ORG + '"/><rect x="10" y="96" width="36" height="8" fill="' + ORG + '"/><rect x="14" y="98" width="28" height="3" fill="#2f3f52"/></g>' +
      '<g class="wv"><path d="M0 126q10-3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#fff" stroke-width="1.2" fill="none" opacity=".4"/></g>' +
      /* the boxy buildings */
      box(20, 120, 120, 96, "#e8e6e0", ORG) + box(150, 104, 104, 112, "#3a4250", "#e6b85a") + box(262, 128, 118, 88, "#e8e6e0", "#7fb0d0") +
      '<rect x="150" y="94" width="104" height="10" fill="#6a4a32"/>' + farm +
      '<rect x="166" y="80" width="2" height="14" fill="#ccc"/>' +
      '<rect x="0" y="216" width="400" height="12" fill="#a9a398"/><rect y="228" width="400" height="32" fill="#2c2c30"/>' +
      '<rect x="40" y="186" width="80" height="20" rx="2" fill="#2c2c30"/><text x="80" y="200" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="12" letter-spacing="3" fill="#fff">URBY</text>' +
      '<g class="cr1"><rect x="0" y="236" width="44" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">STAPLETON WATERFRONT · FRONT ST</text>',
      sky("o1", "#8fc4f0", "#f8ecd8"));
  }

  /* 5. Tompkins Av & Hill St at the Stapleton Houses: the brick NYCHA blocks behind, green signs, the tag wall */
  function corner() {
    let bricks = ""; for (let y = 96; y < 220; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < 250; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#7a4a30"/>';
    let proj = ""; [[0, 26, 120], [130, 14, 130], [270, 30, 130]].forEach(b => { proj += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="80" fill="#8a4a36"/>'; for (let y = b[1] + 8; y < b[1] + 72; y += 12) for (let x = b[0] + 8; x < b[0] + b[2] - 10; x += 16) proj += '<rect x="' + x + '" y="' + y + '" width="9" height="7" fill="' + ((x + y) % 5 ? "#3a2a2a" : "#ffd98a") + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' + proj +
      '<rect y="94" width="270" height="128" fill="#5a3422"/>' + bricks +
      tag("TRIFE DA GOD", 14, 152, 34, ORG, -6) + tag("DIESEL", 40, 198, 32, RED, -4) + tag("THEODORE", 150, 210, 22, PALE, -7) +
      '<g class="drp"><rect x="70" y="154" width="3" height="10" fill="' + ORG + '"/></g>' +
      '<rect x="330" y="40" width="6" height="182" fill="#4a4a4a"/>' +
      blade(272, 44, 122, "Tompkins Av", 0) + blade(286, 70, 94, "Hill St", 0) +
      '<text x="333" y="112" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="1" fill="#fff">STAPLETON HOUSES</text>' +
      '<rect y="222" width="400" height="38" fill="#2c2c30"/><rect y="222" width="400" height="6" fill="#9a9a9a"/>' +
      '<g class="cr2"><rect x="0" y="236" width="44" height="14" rx="4" fill="' + PALE + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>',
      sky("c1", "#ffb347", "#2d1a12"));
  }
  window.SCENES = { station: station1, paramount, stpauls, outerbridge, corner };
})();
