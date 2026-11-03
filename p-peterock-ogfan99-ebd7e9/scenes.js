/* Pete Rock producer game: Mount Vernon, Westchester. Mount Vernon West on Metro-North's Harlem Line, Mount Vernon City Hall
   on Roosevelt Square, the radio mast over Manhattan from his WBLS mix-show days, a park jam in Hartley Park, and the corner of
   S 4th Ave & W Lincoln Ave with St. Paul's Church steeple behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.car{animation:cars 8s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes wave{0%{transform:scale(.3);opacity:1}100%{transform:scale(1.6);opacity:0}}.wv{transform-box:fill-box;transform-origin:50% 50%;animation:wave 2.4s ease-out infinite}.wv2{animation-delay:.8s}.wv3{animation-delay:1.6s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.flg{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:1}100%{transform:translate(30px,-50px);opacity:0}}.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const COPPER = "#f0a35e", MINT = "#5fd0a0", CREAM = "#e8d9b0", HARLEM = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. Metro-North Harlem Line train pulling into Mount Vernon West (open-air platform) */
  function station() {
    let win = "";
    for (let x = 18; x < 320; x += 40) win += '<rect x="' + x + '" y="118" width="26" height="20" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' +
      '<rect x="0" y="70" width="400" height="30" fill="#4a5a3c"/>' +
      (() => { let t = ""; [30, 90, 160, 250, 330].forEach((x, i) => t += '<circle cx="' + x + '" cy="' + (72 - i % 2 * 6) + '" r="' + (22 + i % 3 * 4) + '" fill="#3c4d32"/>'); return t; })() +
      '<rect x="0" y="24" width="400" height="8" fill="#6e6f70"/>' + [20, 140, 260, 380].map(x => '<rect x="' + (x - 2) + '" y="24" width="4" height="80" fill="#6e6f70"/>').join("") +
      '<rect x="110" y="40" width="200" height="30" rx="3" fill="' + HARLEM + '" stroke="#fff" stroke-width="2"/>' +
      '<text x="210" y="61" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Mount Vernon West</text>' +
      '<g class="anim-train"><rect x="0" y="104" width="350" height="72" rx="6" fill="#c9ccd1" stroke="#6a6e74" stroke-width="2"/>' +
      '<rect x="0" y="146" width="350" height="7" fill="' + HARLEM + '"/><rect x="0" y="155" width="350" height="3" fill="#e2483d"/>' + win +
      '<rect x="326" y="114" width="18" height="30" rx="2" fill="#2c3036"/><circle cx="340" cy="166" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#f2d21c"/><rect x="0" y="186" width="400" height="74" fill="#8a8984"/>' +
      '<path d="M0 186h400" stroke="#5d5c58" stroke-width="2"/><circle class="bl" cx="380" cy="150" r="5" fill="#7cf08a"/>',
      sky("s1", "#5a7fb0", "#e7c79a"));
  }

  /* 2. Mount Vernon City Hall, Roosevelt Square: pale limestone, columns, flag waving */
  function cityhall() {
    let cols = "";
    for (let i = 0; i < 6; i++) cols += '<rect x="' + (120 + i * 34) + '" y="92" width="14" height="78" fill="#e9e2d0" stroke="#bdb39c" stroke-width="1.5"/><rect x="' + (117 + i * 34) + '" y="88" width="20" height="6" fill="#d8cfb8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<rect x="40" y="70" width="320" height="110" fill="#d8cfb8"/>' +
      '<path d="M100 72L200 34 300 72z" fill="#e9e2d0" stroke="#bdb39c" stroke-width="2"/><rect x="100" y="72" width="200" height="16" fill="#e9e2d0" stroke="#bdb39c" stroke-width="1.5"/>' +
      '<text x="200" y="84" text-anchor="middle" ' + font + ' font-size="9" fill="#6e6552" letter-spacing="2">CITY HALL</text>' + cols +
      [52, 70, 312, 330].map(x => '<rect x="' + x + '" y="96" width="12" height="22" fill="#3c4a5a"/><rect x="' + x + '" y="132" width="12" height="22" fill="#3c4a5a"/>').join("") +
      '<rect x="40" y="170" width="320" height="10" fill="#bdb39c"/><rect x="100" y="180" width="200" height="8" fill="#cfc6ae"/><rect x="90" y="188" width="220" height="8" fill="#c4bba3"/>' +
      '<rect x="198" y="6" width="3" height="30" fill="#777"/><g class="flg"><rect x="201" y="7" width="30" height="18" fill="#c8102e"/><rect x="201" y="11" width="30" height="2.5" fill="#fff"/><rect x="201" y="16" width="30" height="2.5" fill="#fff"/><rect x="201" y="7" width="13" height="9" fill="#0a3161"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#6f7a5a"/><rect x="0" y="222" width="400" height="38" fill="#45474c"/>' +
      '<g class="car"><rect x="0" y="228" width="58" height="16" rx="4" fill="' + MINT + '"/><path d="M10 228l8-9h22l8 9z" fill="' + MINT + '"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="46" cy="246" r="5" fill="#111"/></g>' +
      [20, 370].map(x => '<circle cx="' + x + '" cy="186" r="20" fill="#4f6b3a"/><rect x="' + (x - 2) + '" y="196" width="4" height="10" fill="#5a3e2b"/>').join(""),
      sky("s2", "#7fb0e0", "#f1dcb2"));
  }

  /* 3. The radio days: mast over the Manhattan night, waves rolling out to a vintage radio on the dial */
  function radio() {
    let bldg = "";
    [[0, 160, 40], [44, 150, 30], [80, 170, 34], [118, 140, 28], [250, 150, 36], [290, 165, 30], [324, 145, 40], [368, 160, 32]].forEach(([x, y, w]) => {
      bldg += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="#2a2d3d"/>';
      for (let yy = y + 6; yy < 196; yy += 10) for (let xx = x + 4; xx < x + w - 4; xx += 8) if ((xx + yy) % 3 === 0) bldg += '<rect x="' + xx + '" y="' + yy + '" width="3" height="4" fill="' + CREAM + '" opacity=".7"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(16) +
      '<rect x="168" y="80" width="64" height="120" fill="#b9b2a2"/><rect x="178" y="58" width="44" height="24" fill="#b9b2a2"/><rect x="188" y="44" width="24" height="16" fill="#b9b2a2"/><rect x="194" y="34" width="12" height="12" fill="#cfc8b6"/>' +
      '<rect x="198" y="6" width="4" height="30" fill="#9d9688"/><circle class="bl" cx="200" cy="6" r="3" fill="#e2483d"/>' +
      '<circle class="wv" cx="200" cy="10" r="24" fill="none" stroke="' + MINT + '" stroke-width="2"/><circle class="wv wv2" cx="200" cy="10" r="24" fill="none" stroke="' + MINT + '" stroke-width="2"/><circle class="wv wv3" cx="200" cy="10" r="24" fill="none" stroke="' + MINT + '" stroke-width="2"/>' +
      bldg +
      '<rect x="0" y="196" width="400" height="64" fill="#3b2b22"/><rect x="0" y="196" width="400" height="6" fill="#53402f"/>' +
      '<rect x="110" y="206" width="180" height="48" rx="8" fill="#7a4a26" stroke="#3b2414" stroke-width="2"/>' +
      '<rect x="122" y="214" width="96" height="20" rx="3" fill="#f2e3b8"/>' +
      (() => { let d = ""; for (let i = 0; i < 9; i++) d += '<path d="M' + (128 + i * 10) + ' 224v6" stroke="#7a5512" stroke-width="1"/>'; return d; })() +
      '<rect class="flk" x="176" y="215" width="3" height="18" fill="#e2483d"/>' +
      '<text x="170" y="246" text-anchor="middle" ' + font + ' font-size="9" fill="' + CREAM + '">FM 107.5</text>' +
      '<circle cx="240" cy="226" r="9" fill="#3b2414"/><circle cx="268" cy="226" r="9" fill="#3b2414"/><circle cx="240" cy="226" r="3" fill="' + COPPER + '"/><circle cx="268" cy="226" r="3" fill="' + COPPER + '"/>' +
      '<g class="nt"><text x="300" y="206" font-size="16" fill="' + MINT + '">&#9834;</text></g><g class="nt nt2"><text x="90" y="206" font-size="16" fill="' + COPPER + '">&#9835;</text></g>',
      sky("s3", "#070a1c", "#33285a"));
  }

  /* 4. Park jam in Hartley Park: speaker stacks, decks on a folding table, string lights, hoop */
  function parkjam() {
    const spk = (x) => '<rect x="' + x + '" y="130" width="48" height="90" fill="#1c1c1f" stroke="#444" stroke-width="2"/>' +
      '<g class="th"><circle cx="' + (x + 24) + '" cy="156" r="16" fill="#333" stroke="#777" stroke-width="2"/><circle cx="' + (x + 24) + '" cy="156" r="6" fill="#111"/></g>' +
      '<g class="th"><circle cx="' + (x + 24) + '" cy="198" r="16" fill="#333" stroke="#777" stroke-width="2"/><circle cx="' + (x + 24) + '" cy="198" r="6" fill="#111"/></g>';
    let lights = '<path d="M0 30Q100 60 200 34T400 40" fill="none" stroke="#333" stroke-width="1.5"/>';
    for (let i = 0; i < 16; i++) { const x = 12 + i * 25, y = 36 + Math.sin(i / 2.5) * 10; lights += '<circle class="bl bl' + (i % 4 + 1) + '" cx="' + x + '" cy="' + y + '" r="4" fill="' + [COPPER, MINT, CREAM, "#e2483d"][i % 4] + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(10) +
      (() => { let t = ""; [40, 120, 300, 370].forEach((x, i) => t += '<circle cx="' + x + '" cy="' + (98 + i % 2 * 8) + '" r="' + (34 + i % 2 * 6) + '" fill="#1f3a26"/><rect x="' + (x - 4) + '" y="110" width="8" height="40" fill="#3b2a1a"/>'); return t; })() +
      lights +
      '<rect x="0" y="150" width="400" height="110" fill="#5a5c60"/><path d="M0 220h400" stroke="#f2f2f2" stroke-width="2" opacity=".6"/>' +
      '<rect x="356" y="70" width="5" height="150" fill="#888"/><rect x="330" y="66" width="44" height="30" fill="#f2f2f2" stroke="#888" stroke-width="2"/><rect x="342" y="78" width="18" height="12" fill="none" stroke="#e2483d" stroke-width="2"/><path d="M340 96h22l-4 18h-14z" fill="none" stroke="#ddd" stroke-width="1.5"/>' +
      '<rect x="210" y="56" width="110" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="265" y="72" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">HARTLEY PARK</text>' +
      spk(20) + spk(72) +
      '<rect x="140" y="170" width="150" height="10" fill="#9a6b3a"/><path d="M150 180l-8 40M280 180l8 40" stroke="#6b4a2a" stroke-width="4"/>' +
      '<g class="vn"><circle cx="180" cy="162" r="14" fill="#0b0b0b"/><circle cx="180" cy="162" r="5" fill="' + COPPER + '"/></g>' +
      '<g class="vn"><circle cx="250" cy="162" r="14" fill="#0b0b0b"/><circle cx="250" cy="162" r="5" fill="' + MINT + '"/></g>' +
      '<rect x="206" y="156" width="20" height="12" rx="2" fill="#38383e"/>',
      sky("s4", "#0c0f24", "#3a2d4a"));
  }

  /* 5. The corner: S 4th Ave & W Lincoln Ave, PETE ROCK tag, St. Paul's Church steeple behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<rect x="150" y="80" width="90" height="50" fill="#8a7d6a"/><path d="M150 80l45-24 45 24z" fill="#6e4a3a"/>' +
      '<rect x="182" y="40" width="26" height="44" fill="#f2efe6"/><rect x="186" y="22" width="18" height="20" fill="#f2efe6"/><path d="M186 22l9-20 9 20z" fill="#f2efe6"/><rect x="191" y="50" width="8" height="12" rx="4" fill="#2a2d3d"/><rect x="193" y="28" width="4" height="8" rx="2" fill="#2a2d3d"/>' +
      '<rect x="0" y="122" width="400" height="104" fill="#7e4632"/>' +
      (() => { let b = ""; for (let y = 128; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#62341f" stroke-width="1"/>'; return b; })() +
      tag("PETE ROCK", 20, 194, 42, COPPER, -5) + tag("SOUL BROTHER", 150, 218, 20, MINT, -4) + tag("MT VERNON", 34, 150, 18, CREAM, -8) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="336" y="40" width="5" height="190" fill="#3d4b3f"/>' +
      '<rect x="268" y="44" width="126" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="331" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">S 4th Av</text>' +
      '<rect x="276" y="70" width="114" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">W Lincoln Av</text>' +
      '<circle class="bl" cx="339" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#5a3a4a"));
  }

  window.SCENES = { station: station, cityhall: cityhall, radio: radio, parkjam: parkjam, corner: corner };
})();
