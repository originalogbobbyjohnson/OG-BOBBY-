/* BTS game (GENRES: Pop / K-pop; INTERNATIONAL region: ASIA + AUSTRALIA; Nonhyeon-dong, Gangnam-gu, Seoul - the group trained and
   debuted out of Big Hit's first office, the Cheonggu Building on Dosan-daero 16-gil, a short walk from Hakdong station).
   Rooms: a Line 7 train pulling into Hakdong station (underground, olive Line 7, platform screen doors), Yoojung Sikdang - the little
   neighborhood restaurant where the trainees ate, its walls now covered in fan notes - the old Cheonggu Building with the fan-message
   graffiti that keeps coming back, Jamsil's Olympic Main Stadium lit purple for a stadium night, and Dosan-daero 16-gil by Hakdong-ro
   with Lotte World Tower behind. CSS classes prefixed "bts" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes btsTw{0%,100%{opacity:.25}50%{opacity:1}}.btsTw{animation:btsTw 1.8s ease-in-out infinite}.btsT2{animation-delay:-.6s}.btsT3{animation-delay:-1.2s}' +
    '@keyframes btsSteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-26px);opacity:0}}.btsSteam{animation:btsSteam 2.4s ease-out infinite}.btsS2{animation-delay:-.8s}.btsS3{animation-delay:-1.6s}' +
    '@keyframes btsBeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.btsBeam{animation:btsBeam 4s ease-in-out infinite}.btsBm2{animation-delay:-2s}' +
    '@keyframes btsLeaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-60px,270px) rotate(320deg)}}.btsLeaf{animation:btsLeaf 6s linear infinite}.btsL2{animation-delay:-2s}.btsL3{animation-delay:-4s}' +
    '@keyframes btsPen{0%,100%{transform:translate(0,0)}25%{transform:translate(6px,-3px)}50%{transform:translate(12px,1px)}75%{transform:translate(6px,3px)}}.btsPen{animation:btsPen 1.6s ease-in-out infinite}' +
    '@keyframes btsCar{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.btsCar{animation:btsCar 6s linear infinite}' +
    '@keyframes btsHue{0%,100%{fill:#b57edc}50%{fill:#7b2ff7}}.btsHue{animation:btsHue 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const K = 'font-family="Noto Sans CJK KR, Noto Sans KR, Apple SD Gothic Neo, Malgun Gothic, sans-serif" font-weight="700"';
  const PUR = "#b57edc", VIO = "#7b2ff7", GOLD = "#f2c14e", L7 = "#747f00";
  const stars = (n, seed) => {
    let s = "", k = seed || 7;
    for (let i = 0; i < n; i++) { k = (k * 37 + 11) % 101; const x = (k * 4.1 + i * 23) % 400, y = (k * 1.3 + i * 7) % 70; s += '<circle cx="' + x.toFixed(1) + '" cy="' + (6 + y).toFixed(1) + '" r="' + (i % 3 ? 1 : 1.5) + '" fill="#fff" class="btsTw' + (i % 3 ? ' btsT' + (1 + i % 3) : '') + '"/>'; }
    return s;
  };
  const heart = (x, y, s, c) => '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0 6q-8 -5 -7 -10q2 -5 7 -1q5 -4 7 1q1 5 -7 10z" fill="' + c + '"/>';
  const lineDot = (x, y, n, c) => '<g><circle cx="' + x + '" cy="' + y + '" r="11" fill="' + c + '"/><text x="' + x + '" y="' + (y + 5) + '" ' + F + ' font-size="14" fill="#fff" text-anchor="middle">' + n + '</text></g>';
  /* Lotte World Tower: tall tapered pale-glass tower with the split, open crown */
  const lotte = (x, base, k) =>
    '<g><path d="M' + (x - 16 * k) + ' ' + base + 'L' + (x - 5 * k) + ' ' + (base - 200 * k) + 'L' + (x - 1 * k) + ' ' + (base - 214 * k) + 'V' + (base - 196 * k) + 'H' + (x + 1 * k) + 'V' + (base - 214 * k) + 'L' + (x + 5 * k) + ' ' + (base - 200 * k) + 'L' + (x + 16 * k) + ' ' + base + 'z" fill="#c9d6e3"/>' +
    '<path d="M' + x + ' ' + base + 'V' + (base - 196 * k) + '" stroke="#8fa4ba" stroke-width="' + (1.2 * k) + '"/>' +
    '<path d="M' + (x - 4 * k) + ' ' + (base - 204 * k) + 'h' + (8 * k) + '" stroke="#fff" stroke-width="' + (1.5 * k) + '" class="btsTw"/></g>';

  /* 1. Hakdong station: underground, platform screen doors, a silver Line 7 train with an olive stripe pulling in */
  function btshakdong() {
    let doors = "";
    for (let x = 20; x < 400; x += 76) doors += '<rect x="' + x + '" y="104" width="60" height="78" fill="#cfe8f0" fill-opacity=".28" stroke="#9aa6ad" stroke-width="2"/><path d="M' + (x + 30) + ' 104v78" stroke="#9aa6ad" stroke-width="1.5"/>';
    let wins = "";
    for (let x = 30; x < 370; x += 34) wins += '<rect x="' + x + '" y="118" width="24" height="18" rx="2" fill="#24323a"/>';
    const train = '<g class="anim-train"><rect x="10" y="108" width="380" height="72" rx="8" fill="#d7dde1"/>' + wins +
      '<rect x="10" y="146" width="380" height="8" fill="' + L7 + '"/><rect x="10" y="156" width="380" height="2" fill="' + L7 + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#btsSk1)"/>' +
      '<rect x="0" y="0" width="400" height="20" fill="#eaeaea"/>' + [40, 140, 240, 340].map(x => '<rect x="' + x + '" y="8" width="60" height="5" rx="2" fill="#fffbe6"/>').join("") +
      '<rect x="100" y="28" width="200" height="44" rx="4" fill="#fff" stroke="#ccc"/>' +
      lineDot(128, 50, "7", L7) +
      '<text x="214" y="51" ' + K + ' font-size="20" fill="#111" text-anchor="middle">학동</text>' +
      '<text x="214" y="66" ' + F + ' font-size="10" fill="#333" text-anchor="middle">Hakdong</text>' +
      '<rect x="0" y="78" width="400" height="26" fill="#3d4448"/><text x="200" y="95" ' + F + ' font-size="9" fill="#d6dc8a" text-anchor="middle">LINE 7  ·  NONHYEON-DONG  ·  GANGNAM-GU, SEOUL</text>' +
      train + doors +
      '<rect x="0" y="182" width="400" height="8" fill="#ffd200"/><rect x="0" y="190" width="400" height="70" fill="#b7b0a4"/>' +
      '<g fill="#a69f93">' + [20, 100, 180, 260, 340].map(x => '<rect x="' + x + '" y="206" width="50" height="40" rx="2"/>').join("") + '</g>' +
      heart(200, 226, 1.2, PUR),
      sky("btsSk1", "#d9dcdf", "#b9bec2"));
  }

  /* 2. Yoojung Sikdang: a small low restaurant on a back street, warm windows, purple fan notes on the wall, a stew pot steaming */
  function btssikdang() {
    let notes = "";
    const cs = [PUR, "#ffe08a", "#ffffff", "#c9b3f0", "#ffd1e8"];
    for (let i = 0; i < 18; i++) { const x = 36 + (i % 6) * 22, y = 96 + Math.floor(i / 6) * 22; notes += '<rect x="' + x + '" y="' + y + '" width="16" height="16" fill="' + cs[i % 5] + '" transform="rotate(' + ((i * 17) % 13 - 6) + ' ' + (x + 8) + ' ' + (y + 8) + ')"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#btsSk2)"/>' + stars(10, 4) +
      '<rect x="0" y="70" width="60" height="130" fill="#3a3046"/><rect x="340" y="60" width="60" height="140" fill="#342a40"/>' +
      '<rect x="20" y="70" width="360" height="130" fill="#e9dcc5"/>' +
      '<rect x="20" y="62" width="360" height="12" fill="#6b4a32"/>' +
      '<rect x="120" y="38" width="160" height="26" rx="3" fill="#fff8ea" stroke="#6b4a32" stroke-width="2"/>' +
      '<text x="200" y="57" ' + K + ' font-size="15" fill="#3b2418" text-anchor="middle">유정식당</text>' +
      '<rect x="28" y="88" width="148" height="76" fill="#f7efe0" stroke="#8a6a4a" stroke-width="2"/>' + notes +
      '<rect x="196" y="88" width="160" height="76" fill="#ffd98a" stroke="#6b4a32" stroke-width="3"/>' +
      '<path d="M276 88v76M196 126h160" stroke="#6b4a32" stroke-width="2"/>' +
      '<rect x="210" y="138" width="56" height="8" fill="#8a5a3a"/>' +
      '<ellipse cx="238" cy="134" rx="16" ry="6" fill="#2b2b2b"/><ellipse cx="238" cy="132" rx="13" ry="4" fill="#d9472b"/>' +
      '<g fill="#fff" opacity=".85"><circle cx="232" cy="118" r="4" class="btsSteam"/><circle cx="240" cy="114" r="5" class="btsSteam btsS2"/><circle cx="246" cy="120" r="3.5" class="btsSteam btsS3"/></g>' +
      heart(316, 112, 1.6, VIO) + heart(300, 146, 1, PUR) + heart(336, 148, 1, PUR) +
      '<rect x="20" y="164" width="360" height="36" fill="#d4c3a6"/><rect x="170" y="164" width="24" height="36" fill="#6b4a32"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5b5560"/><path d="M0 214h400" stroke="#6c6672" stroke-width="2"/>',
      sky("btsSk2", "#1c1430", "#5a3d7a"));
  }

  /* 3. The old Cheonggu Building: a small beige four-storey office block, its wall covered in fan graffiti, leaves drifting down */
  function btscheonggu() {
    let wins = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) wins += '<rect x="' + (126 + c * 40) + '" y="' + (34 + r * 36) + '" width="26" height="22" fill="' + ((r + c) % 3 ? "#5b6b7a" : "#ffe6a8") + '"/>';
    const scrib = [["ARMY", 20, 198, 14, PUR, -8], ["BTS", 66, 222, 18, "#fff", 4], ["7", 300, 214, 22, GOLD, -6], ["BORAHAE", 296, 186, 11, "#c9b3f0", 3], ["FOREVER", 120, 214, 10, "#ffd1e8", -3], ["MIKROKOSMOS", 186, 228, 9, "#9be2ff", 2]];
    let g = "";
    scrib.forEach(s => g += tag(s[0], s[1], s[2], s[3], s[4], s[5]));
    return svg(
      '<rect width="400" height="260" fill="url(#btsSk3)"/>' +
      '<rect x="112" y="20" width="176" height="160" fill="#d8cbb2"/><rect x="108" y="16" width="184" height="8" fill="#b9aa8f"/>' + wins +
      '<rect x="0" y="170" width="400" height="66" fill="#ece6dc"/>' +
      '<g stroke="#d8d0c2" stroke-width="1">' + [184, 198, 212, 226].map(y => '<path d="M0 ' + y + 'H400"/>').join("") + '</g>' +
      g + heart(250, 196, 1.4, PUR) + heart(372, 200, 1.1, VIO) + heart(100, 186, 1, "#ff8fb1") +
      '<g class="btsPen"><rect x="228" y="200" width="16" height="4" rx="1" fill="' + VIO + '" transform="rotate(-30 236 202)"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#8a8580"/>' +
      '<g fill="#e0a43a"><ellipse cx="80" cy="0" rx="5" ry="3" class="btsLeaf"/><ellipse cx="220" cy="0" rx="5" ry="3" class="btsLeaf btsL2"/><ellipse cx="350" cy="0" rx="5" ry="3" class="btsLeaf btsL3"/></g>',
      sky("btsSk3", "#9cc4e4", "#e8eef4"));
  }

  /* 4. Jamsil Olympic Main Stadium at night: the swooping white roof rim, purple beams sweeping, a sea of purple lights */
  function btsjamsil() {
    let lights = "";
    for (let i = 0; i < 90; i++) { const x = (i * 37) % 400, y = 186 + (i * 13) % 66; lights += '<circle cx="' + x + '" cy="' + y + '" r="1.8" fill="' + (i % 4 ? PUR : "#e8d8ff") + '" class="btsTw' + (i % 3 ? ' btsT' + (1 + i % 3) : '') + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#btsSk4)"/>' + stars(16, 9) +
      '<g opacity=".35"><path d="M120 180L60 0h40z" fill="' + PUR + '" class="btsBeam" style="transform-origin:120px 180px"/><path d="M280 180L300 0h40z" fill="' + VIO + '" class="btsBeam btsBm2" style="transform-origin:280px 180px"/></g>' +
      '<path d="M10 178Q30 92 200 86Q370 92 390 178z" fill="#3a3550"/>' +
      '<path d="M10 178Q30 92 200 86Q370 92 390 178" stroke="#f4f2ee" stroke-width="7" fill="none"/>' +
      '<path d="M40 150Q60 108 200 104Q340 108 360 150" stroke="#e1ddd6" stroke-width="3" fill="none"/>' +
      '<g stroke="#cfcac2" stroke-width="2">' + [40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => '<path d="M' + x + ' ' + (x < 200 ? 178 - (200 - x) * 0.38 : 178 - (x - 200) * 0.38) + 'v' + 22 + '"/>').join("") + '</g>' +
      '<rect x="0" y="178" width="400" height="82" fill="#140f22"/>' + lights +
      '<rect x="150" y="156" width="100" height="24" fill="#241c3a"/><rect x="156" y="160" width="88" height="16" class="btsHue" fill="' + PUR + '"/>',
      sky("btsSk4", "#0b0818", "#3b1d6b"));
  }

  /* 5. Dosan-daero 16-gil by Hakdong-ro in Nonhyeon-dong: blue road signs, the crew tagged on the wall, Lotte World Tower behind */
  function btscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#btsSk5)"/>' + stars(10, 3) +
      lotte(300, 150, 0.62) +
      '<g fill="#221a2e"><rect x="0" y="92" width="60" height="58"/><rect x="232" y="104" width="44" height="46"/><rect x="330" y="96" width="70" height="54"/></g>' +
      '<g fill="#ffe6a8" opacity=".6">' + [8, 22, 36].map(x => '<rect x="' + x + '" y="104" width="8" height="8"/>').join("") + [342, 360, 378].map(x => '<rect x="' + x + '" y="110" width="8" height="8"/>').join("") + '</g>' +
      '<rect x="0" y="118" width="250" height="112" fill="#1b1b1f"/>' +
      '<g stroke="#2a2a30" stroke-width="1">' + [130, 144, 158, 172, 186, 200, 214].map(y => '<path d="M0 ' + y + 'H250"/>').join("") + '</g>' +
      tag("BTS", 24, 196, 52, PUR, -6) + tag("BANGTAN", 120, 186, 22, "#fff", -4) + tag("BORAHAE", 40, 222, 18, GOLD, -3) + tag("BULLETPROOF", 136, 146, 13, "#c9b3f0", 4) +
      '<rect x="0" y="230" width="400" height="30" fill="#3f4246"/><rect x="0" y="228" width="400" height="4" fill="#c8c8c8"/>' +
      '<g class="btsCar"><rect x="0" y="234" width="50" height="14" rx="4" fill="#111"/><rect x="10" y="227" width="28" height="10" rx="3" fill="' + PUR + '"/><circle cx="12" cy="249" r="4" fill="#555"/><circle cx="38" cy="249" r="4" fill="#555"/></g>' +
      '<rect x="318" y="98" width="5" height="132" fill="#8a8f94"/>' +
      '<rect x="246" y="96" width="150" height="22" rx="2" fill="#1d4f9c" stroke="#fff" stroke-width="1.5"/><text x="321" y="111" ' + K + ' font-size="9" fill="#fff" text-anchor="middle">도산대로16길 Dosan-daero 16-gil</text>' +
      '<rect x="268" y="122" width="116" height="22" rx="2" fill="#1d4f9c" stroke="#fff" stroke-width="1.5"/><text x="326" y="137" ' + K + ' font-size="11" fill="#fff" text-anchor="middle">학동로 Hakdong-ro</text>',
      sky("btsSk5", "#140a24", "#8a5ad6"));
  }

  window.SCENES = { btshakdong, btssikdang, btscheonggu, btsjamsil, btscorner };
})();
