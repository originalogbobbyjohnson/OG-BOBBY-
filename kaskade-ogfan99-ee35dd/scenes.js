/* Kaskade game (GENRES / Regions: Chicago; born in Chicago, grew up in Northbrook on the North Shore).
   Room 1 is Northbrook on Metra's Milwaukee District North Line (at grade, two side platforms on Shermer Rd) - no other Chicago kit uses it.
   CSS classes prefixed "ksk" (the page's anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kskFlk{0%,100%{opacity:1}46%{opacity:.8}50%{opacity:.35}54%{opacity:.95}}.kskFlk{animation:kskFlk 2.6s infinite}.kskF2{animation-delay:1.2s}' +
    '@keyframes kskFall{0%{transform:translateY(-14px);opacity:.2}50%{opacity:1}100%{transform:translateY(14px);opacity:.2}}.kskFall{animation:kskFall 1.2s linear infinite}.kskL2{animation-delay:.4s}.kskL3{animation-delay:.8s}' +
    '@keyframes kskBeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.kskBeam{transform-box:fill-box;transform-origin:50% 100%;animation:kskBeam 3.4s ease-in-out infinite}.kskB2{animation-delay:-1.7s}' +
    '@keyframes kskBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.kskBob{animation:kskBob .5s ease-in-out infinite}.kskBb2{animation-delay:.25s}' +
    '@keyframes kskSpin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.kskSpin{transform-box:fill-box;transform-origin:50% 50%;animation:kskSpin 1.8s linear infinite}' +
    '@keyframes kskSnow{0%{transform:translateY(-20px)}100%{transform:translateY(280px)}}.kskSnow{animation:kskSnow 7s linear infinite}.kskS2{animation-delay:-2.3s}.kskS3{animation-delay:-4.6s}' +
    '@keyframes kskCar{0%{transform:translateX(-90px)}100%{transform:translateX(490px)}}.kskCar{animation:kskCar 8s linear infinite}' +
    '@keyframes kskBlink{0%,100%{opacity:1}50%{opacity:.15}}.kskBlink{animation:kskBlink 1s steps(1) infinite}.kskK2{animation-delay:.5s}' +
    '@keyframes kskWave{0%,100%{transform:skewX(0)}50%{transform:skewX(-8deg)}}.kskWave{transform-box:fill-box;transform-origin:0 100%;animation:kskWave 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const MDN = "#f68b1f", ICE = "#7fd8ff", FIRE = "#ff6a3d", VIO = "#b388ff";
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, base, r, c) => '<rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (base - r) + '" r="' + r + '" fill="' + (c || "#2f5a34") + '"/><circle cx="' + (x - r * .6) + '" cy="' + (base - r * .6) + '" r="' + (r * .7) + '" fill="' + (c || "#2f5a34") + '"/>';
  const crowd = (y, n, fill) => {
    let s = ""; for (let i = 0; i < n; i++) {
      const x = 10 + i * (400 / n), up = i % 3 !== 1;
      s += '<g class="kskBob' + (i % 2 ? ' kskBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 18) + '" r="7"/><rect x="' + (x - 8) + '" y="' + (y - 11) + '" width="16" height="24" rx="6"/>' +
        (up ? '<path d="M' + (x - 6) + ' ' + (y - 8) + 'l-8 -18M' + (x + 6) + ' ' + (y - 8) + 'l8 -18" stroke="' + fill + '" stroke-width="4" stroke-linecap="round"/>' : '') + '</g>';
    }
    return s;
  };

  /* 1. Northbrook, Metra Milwaukee District North: a double-decker train pulling in at the at-grade platform on Shermer Rd */
  function kskstation() {
    let wins = "";
    for (let x = 30; x < 330; x += 22) { wins += '<rect x="' + x + '" y="120" width="16" height="10" rx="2" fill="#cfe7ff"/><rect x="' + x + '" y="140" width="16" height="10" rx="2" fill="#cfe7ff"/>'; }
    const train = '<g class="anim-train">' +
      '<path d="M14 108h320q24 0 30 24v50H14z" fill="#c9ced6" stroke="#6e7782" stroke-width="2"/>' +
      '<rect x="14" y="158" width="350" height="8" fill="#1f4e79"/>' + wins +
      '<rect x="340" y="118" width="18" height="22" rx="3" fill="#cfe7ff"/>' +
      '<rect x="120" y="150" width="20" height="30" fill="#8a929c"/><rect x="250" y="150" width="20" height="30" fill="#8a929c"/>' +
      '<circle cx="356" cy="172" r="4" fill="#ffe7a0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ksks1)"/>' +
      tree(40, 110, 22) + tree(110, 108, 26, "#3a6a3e") + tree(300, 110, 24) + tree(370, 108, 20, "#3a6a3e") +
      /* far platform + canopy */
      '<rect x="0" y="98" width="400" height="10" fill="#9aa1a8"/>' +
      '<rect x="0" y="182" width="400" height="6" fill="#55595f"/><path d="M0 194h400M0 204h400" stroke="#2a2a2a" stroke-width="3"/>' +
      '<g stroke="#5a4636" stroke-width="3">' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 21) + ' 190v18"/>').join("") + '</g>' +
      /* near platform with yellow edge */
      '<rect x="0" y="210" width="400" height="50" fill="#a8adb3"/><rect x="0" y="210" width="400" height="5" fill="#f2c14e"/>' +
      train +
      /* black station sign with line bullet */
      '<rect x="120" y="222" width="4" height="38" fill="#666"/><rect x="276" y="222" width="4" height="38" fill="#666"/>' +
      '<rect x="96" y="196" width="220" height="34" rx="3" fill="#111" stroke="#444"/>' +
      '<text x="182" y="219" text-anchor="middle" ' + F + ' font-size="17" fill="#fff">NORTHBROOK</text>' +
      '<rect x="264" y="203" width="44" height="20" rx="10" fill="' + MDN + '"/><text x="286" y="217" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">MD-N</text>' +
      '<rect x="18" y="226" width="70" height="16" rx="2" fill="#0f6b3a"/><text x="53" y="238" text-anchor="middle" ' + F + ' font-size="9" fill="#fff">SHERMER RD</text>',
      sky("ksks1", "#9fd3f5", "#fce8c4"));
  }

  /* 2. The record shop on N Clark St where a Northbrook teenager bought his house records: crates, a turntable, a spinning disc */
  function kskrecords() {
    let crates = "";
    for (let i = 0; i < 4; i++) {
      const x = 40 + i * 82;
      crates += '<rect x="' + x + '" y="178" width="70" height="40" fill="#8a5a34" stroke="#4a2e18" stroke-width="2"/>';
      for (let k = 0; k < 6; k++) crates += '<rect x="' + (x + 4 + k * 11) + '" y="' + (160 + (k * 7) % 10) + '" width="9" height="24" fill="' + [ICE, FIRE, VIO, "#ffd23f", "#4ff0c8", "#ff5c8a"][(k + i) % 6] + '" stroke="#222"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="#1a1420"/>' +
      /* brick storefront wall + window */
      '<rect x="0" y="0" width="400" height="150" fill="#6b3a2e"/>' +
      '<g stroke="#57301f" stroke-width="1">' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (i * 15) + 'h400"/>').join("") + '</g>' +
      '<rect x="40" y="24" width="320" height="110" fill="#0e1a24" stroke="#c9a24a" stroke-width="4"/>' +
      '<text x="200" y="60" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" fill="' + ICE + '" class="kskFlk">RECORDS</text>' +
      '<text x="200" y="84" text-anchor="middle" ' + F + ' font-size="11" fill="#ffd23f">HOUSE  ·  TECHNO  ·  12 INCH</text>' +
      '<g transform="translate(270 112)"><circle r="18" fill="#111" class="kskSpin"/><circle r="6" fill="' + FIRE + '"/><path d="M-14 0h28" stroke="#444" stroke-width="1" class="kskSpin"/></g>' +
      '<rect x="80" y="98" width="110" height="28" rx="3" fill="#2a2a32"/><circle cx="110" cy="112" r="10" fill="#111" class="kskSpin"/><circle cx="160" cy="112" r="10" fill="#111" class="kskSpin"/><rect x="128" y="104" width="14" height="16" fill="#444"/>' +
      /* street sign on the corner */
      '<rect x="380" y="20" width="4" height="130" fill="#9aa3ab"/><rect x="328" y="2" width="68" height="16" rx="2" fill="#0f6b3a" stroke="#fff"/><text x="362" y="14" text-anchor="middle" ' + F + ' font-size="9" fill="#fff">N CLARK ST</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2a2230"/>' + crates +
      '<rect x="0" y="218" width="400" height="42" fill="#3a2e24"/>',
      "");
  }

  /* 3. Glenbrook North High School, Northbrook: red brick, white columns, the front steps, snow falling */
  function kskschool() {
    let wins = "";
    for (let x = 40; x < 380; x += 34) if (x < 160 || x > 230) { wins += '<rect x="' + x + '" y="110" width="20" height="24" fill="#cfe3ff"/><rect x="' + x + '" y="150" width="20" height="24" fill="#cfe3ff"/>'; }
    let snow = "";
    for (let i = 0; i < 26; i++) snow += '<circle cx="' + ((i * 61) % 400) + '" cy="' + ((i * 37) % 240) + '" r="' + (i % 3 ? 1.6 : 2.4) + '" fill="#fff" class="kskSnow' + ['', ' kskS2', ' kskS3'][i % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ksks3)"/>' +
      '<rect x="20" y="96" width="360" height="110" fill="#9a4a36" stroke="#5a2a1e" stroke-width="2"/>' +
      '<rect x="16" y="88" width="368" height="10" fill="#e8e2d6"/>' + wins +
      /* entrance portico */
      '<path d="M150 96l50 -30l50 30z" fill="#e8e2d6" stroke="#bdb5a5" stroke-width="2"/>' +
      '<g fill="#f2eee6"><rect x="160" y="98" width="8" height="108"/><rect x="180" y="98" width="8" height="108"/><rect x="212" y="98" width="8" height="108"/><rect x="232" y="98" width="8" height="108"/></g>' +
      '<rect x="190" y="150" width="20" height="56" fill="#3a2a22"/>' +
      '<text x="200" y="91" text-anchor="middle" ' + F + ' font-size="6.5" fill="#5a2a1e">GLENBROOK NORTH</text>' +
      /* the steps */
      '<rect x="140" y="206" width="120" height="8" fill="#d8d2c6"/><rect x="130" y="214" width="140" height="8" fill="#cbc4b6"/><rect x="120" y="222" width="160" height="8" fill="#bdb5a5"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#eef4f8"/>' +
      tree(10, 206, 20, "#2f4a34") + tree(392, 206, 20, "#2f4a34") +
      /* flagpole */
      '<rect x="320" y="30" width="3" height="66" fill="#bbb"/><path d="M323 32h26v16h-26z" fill="' + FIRE + '" class="kskWave"/>' +
      snow,
      sky("ksks3", "#8fa6bf", "#dfe8f0"));
  }

  /* 4. Allegiant Stadium, Las Vegas, Feb 2024: the first-ever in-game DJ at a Super Bowl - the booth, lasers, the crowd */
  function kskvegas() {
    return svg(
      '<rect width="400" height="260" fill="url(#ksks4)"/>' + stars(16) +
      /* black stadium roof shell + seating tiers */
      '<path d="M0 110q200 -110 400 0v20H0z" fill="#111317" stroke="#3a3f48" stroke-width="2"/>' +
      '<path d="M10 130q190 -70 380 0" stroke="#2a2f38" stroke-width="10" fill="none"/>' +
      '<g fill="#ffd98a">' + Array.from({ length: 18 }, (_, i) => '<circle cx="' + (30 + i * 20) + '" cy="' + (128 - Math.round(40 * Math.sin(Math.PI * (i + 1) / 19))) + '" r="1.6" class="kskBlink' + (i % 2 ? ' kskK2' : '') + '"/>').join("") + '</g>' +
      '<g opacity=".65"><path d="M110 170L60 20h22z" fill="' + ICE + '" class="kskBeam"/><path d="M290 170L340 20h-22z" fill="' + FIRE + '" class="kskBeam kskB2"/></g>' +
      /* field */
      '<rect x="0" y="170" width="400" height="90" fill="#1f6b3a"/><path d="M0 200h400M0 230h400" stroke="#fff" stroke-width="2" opacity=".6"/>' +
      /* DJ booth with LED front */
      '<rect x="140" y="136" width="120" height="40" rx="4" fill="#0e1a24" stroke="' + ICE + '" stroke-width="2"/>' +
      '<g class="kskFlk"><rect x="148" y="160" width="104" height="10" fill="' + ICE + '" opacity=".5"/></g>' +
      '<circle cx="200" cy="118" r="8" fill="#0b0b10"/><rect x="190" y="124" width="20" height="16" rx="6" fill="#0b0b10"/>' +
      '<path d="M180 140h40" stroke="#555" stroke-width="3"/>' +
      crowd(256, 14, "#0f2a1a"),
      sky("ksks4", "#05060c", "#1d2440"));
  }

  /* 5. Shermer Rd and Church St in downtown Northbrook, the Northbrook water tower behind */
  function kskcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ksks5)"/>' +
      /* water tower */
      '<g><path d="M150 120l10 -40M250 120l-10 -40M180 120l4 -40M220 120l-4 -40" stroke="#8a929c" stroke-width="4"/>' +
      '<path d="M150 120h100" stroke="#8a929c" stroke-width="3"/><path d="M156 100h88" stroke="#8a929c" stroke-width="2"/>' +
      '<ellipse cx="200" cy="66" rx="52" ry="26" fill="#d9dee4" stroke="#8a929c" stroke-width="2"/><path d="M148 66q52 30 104 0" fill="#c4cad1"/>' +
      '<path d="M190 40q10 -14 20 0z" fill="#c4cad1"/><rect x="198" y="26" width="4" height="12" fill="#8a929c"/>' +
      '<text x="200" y="72" text-anchor="middle" ' + F + ' font-size="12" fill="#1f4e79">NORTHBROOK</text></g>' +
      tree(60, 140, 26) + tree(120, 142, 20, "#3a6a3e") + tree(300, 140, 24) + tree(356, 142, 22, "#3a6a3e") +
      /* wall with the tag */
      '<rect x="0" y="140" width="400" height="80" fill="#8a4a3a"/>' +
      '<g stroke="#723c2e" stroke-width="1">' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (152 + i * 12) + 'h400"/>').join("") + '</g>' +
      tag("KASKADE", 40, 200, 46, ICE, -5) +
      tag("REDUX", 268, 170, 20, FIRE, 4) +
      '<rect x="0" y="220" width="400" height="40" fill="#2b2b33"/><rect x="0" y="218" width="400" height="4" fill="#9a9aa3"/>' +
      /* green street signs */
      '<rect x="364" y="90" width="5" height="130" fill="#9aa3ab"/>' +
      '<rect x="300" y="92" width="96" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="348" y="105" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">SHERMER RD</text>' +
      '<rect x="310" y="114" width="86" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="353" y="127" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">CHURCH ST</text>' +
      '<g class="kskCar"><rect x="0" y="230" width="64" height="18" rx="6" fill="' + VIO + '"/><circle cx="12" cy="250" r="5" fill="#111"/><circle cx="52" cy="250" r="5" fill="#111"/></g>',
      sky("ksks5", "#8fd0f5", "#fbe3c0"));
  }

  window.SCENES = { kskstation, kskrecords, kskschool, kskvegas, kskcorner };
})();
