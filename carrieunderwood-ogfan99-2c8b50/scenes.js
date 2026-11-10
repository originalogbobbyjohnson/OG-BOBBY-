/* carrieunderwood scenes (Regions tab: More of the South, Checotah OK). CSS classes prefixed cu- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cuglow{0%,100%{opacity:.45}50%{opacity:1}}.cu-glow{animation:cuglow 2.4s ease-in-out infinite}.cu-g2{animation-delay:-1.2s}' +
    '@keyframes cunote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-62px);opacity:0}}.cu-nt{animation:cunote 3.2s ease-out infinite}.cu-nt2{animation-delay:-1.1s}.cu-nt3{animation-delay:-2.2s}' +
    '@keyframes cusway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.cu-sw{transform-box:fill-box;transform-origin:50% 100%;animation:cusway 3s ease-in-out infinite}' +
    '@keyframes cucloud{0%{transform:translateX(0)}100%{transform:translateX(60px)}}.cu-cl{animation:cucloud 14s ease-in-out infinite alternate}' +
    '@keyframes cubob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.cu-bob{animation:cubob 2.6s ease-in-out infinite}' +
    '@keyframes cuwave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.cu-wave{animation:cuwave 4s linear infinite}' +
    '@keyframes cuball{0%{transform:translate(0,0)}50%{transform:translate(60px,-40px)}100%{transform:translate(120px,0)}}.cu-ball{animation:cuball 2.4s ease-in-out infinite alternate}' +
    '@keyframes cuflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.cu-flag{transform-box:fill-box;transform-origin:0% 50%;animation:cuflag 1.8s ease-in-out infinite}' +
    '@keyframes cuspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cu-sp{animation:cuspray 1.4s ease-out infinite}.cu-sp2{animation-delay:.45s}' +
    '@keyframes cutwk{0%,100%{opacity:.2}50%{opacity:1}}.cu-tw{animation:cutwk 1.8s ease-in-out infinite}.cu-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="cu-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const tree = (x, base, r, c) => '<g class="cu-sw"><rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (base - r - r * 0.4) + '" r="' + r * 0.8 + '" fill="' + (c || "#2f5a2a") + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#2f5a2a") + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#2f5a2a") + '"/></g>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".7" opacity=".6"/>'; return s; };
  const star = (x, y, r, c, cls) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '" class="' + (cls || "") + '"/>'; };
  const PINK = "#e8457a", GOLD = "#f2c14e", SKY = "#7fc4ec", CREAM = "#f6ecd6", BRICK = "#9a3b2a";

  /* 1. Rolling east on I-40: the green Checotah exit sign, the blue town sign, a pickup sliding in, the oak hills of McIntosh County behind */
  function cuhwy() {
    let trees = "";
    for (let i = 0; i < 9; i++) trees += tree(14 + i * 48, 170, 13 + (i * 5) % 8, i % 2 ? "#3c6a30" : "#4b7a38");
    const i40 = (x, y) => '<path d="M' + x + ' ' + (y + 6) + 'q17 -8 34 0v20q0 10 -17 16q-17 -6 -17 -16z" fill="#1f4fa8" stroke="#fff" stroke-width="2"/><path d="M' + x + ' ' + (y + 6) + 'q17 -8 34 0v6h-34z" fill="#d22630"/>' +
      '<text x="' + (x + 17) + '" y="' + (y + 34) + '" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">40</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#cu1)"/>' +
      '<g class="cu-cl"><ellipse cx="60" cy="40" rx="34" ry="9" fill="#fff" opacity=".7"/><ellipse cx="300" cy="26" rx="40" ry="10" fill="#fff" opacity=".6"/></g>' +
      '<circle cx="40" cy="70" r="15" fill="#ffd36b" opacity=".9"/>' +
      '<path d="M0 150q70 -34 140 -12t130 -16t130 10v40h-400z" fill="#6b8a4c"/>' + trees +
      '<rect x="0" y="170" width="400" height="90" fill="#4a4d52"/><rect x="0" y="168" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 214h400" stroke="#fff" stroke-width="3" stroke-dasharray="26 22"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      /* overhead-style guide sign on two posts */
      '<rect x="172" y="96" width="6" height="74" fill="#9aa0a6"/><rect x="330" y="96" width="6" height="74" fill="#9aa0a6"/>' +
      '<rect x="150" y="18" width="210" height="88" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<rect x="290" y="10" width="66" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="323" y="23" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">EXIT 265</text>' +
      '<text x="255" y="56" text-anchor="middle" ' + font + ' font-size="30" fill="#fff">Checotah</text>' +
      '<path d="M170 68h170" stroke="#fff" stroke-width="1.5" opacity=".6"/><text x="236" y="94" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">1/2 MILE</text>' +
      '<path d="M318 96v-14l-8 8M318 82l8 8" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      i40(80, 84) + '<rect x="72" y="128" width="50" height="14" fill="#fff" stroke="#000"/><text x="97" y="139" text-anchor="middle" ' + font + ' font-size="10" fill="#000">EAST</text><rect x="94" y="142" width="5" height="28" fill="#9aa0a6"/>' +
      /* small blue hometown sign */
      '<rect x="16" y="118" width="46" height="30" rx="3" fill="#1f4fa8" stroke="#fff" stroke-width="1.5"/><text x="39" y="130" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">HOME OF</text><text x="39" y="141" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">CARRIE</text><rect x="37" y="148" width="4" height="22" fill="#9aa0a6"/>' +
      /* pickup sliding in */
      '<g class="anim-train"><g transform="translate(220 176)"><rect x="0" y="12" width="110" height="24" rx="5" fill="' + PINK + '"/><path d="M8 12l12 -16h34l10 16z" fill="' + PINK + '"/><path d="M22 10l8 -11h12v11z" fill="#bfe6ff"/><path d="M46 10v-11h6l7 11z" fill="#bfe6ff"/><rect x="64" y="6" width="46" height="8" fill="#b8325c"/>' +
      '<circle cx="24" cy="38" r="9" fill="#222"/><circle cx="24" cy="38" r="4" fill="#bbb"/><circle cx="90" cy="38" r="9" fill="#222"/><circle cx="90" cy="38" r="4" fill="#bbb"/><rect x="-2" y="18" width="6" height="5" fill="#fff6c0"/></g></g>',
      sky("cu1", "#5aa8e0", "#cfe9f7"));
  }

  /* 2. Friday night at Checotah High: the Wildcats field under the lights, scoreboard glowing, a football spiraling */
  function cufield() {
    let lights = "";
    [40, 360].forEach(x => { lights += '<rect x="' + (x - 2) + '" y="30" width="4" height="120" fill="#888"/><rect x="' + (x - 18) + '" y="18" width="36" height="16" fill="#555"/>'; for (let i = 0; i < 4; i++) lights += '<circle cx="' + (x - 13 + i * 9) + '" cy="26" r="3.5" fill="#fff8d0" class="cu-glow' + (i % 2 ? " cu-g2" : "") + '"/>'; });
    let stands = "";
    for (let i = 0; i < 6; i++) stands += '<rect x="80" y="' + (96 + i * 9) + '" width="240" height="6" fill="' + (i % 2 ? "#6a6f78" : "#7d838c") + '"/>';
    let fans = "";
    for (let i = 0; i < 22; i++) fans += '<circle cx="' + (88 + i * 10.5) + '" cy="' + (100 + (i % 3) * 18) + '" r="3.6" fill="' + ["#e8457a", "#f2c14e", "#fff", "#7a1f2b"][i % 4] + '"/>';
    let yard = "";
    for (let i = 0; i < 9; i++) yard += '<path d="M' + (20 + i * 45) + ' 168l' + (-8 + i * 2) + ' 92" stroke="#fff" stroke-width="2" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cu2)"/>' +
      star(60, 60, 2, "#fff", "cu-tw") + star(330, 70, 2, "#fff", "cu-tw cu-tw2") + star(200, 18, 1.6, "#fff", "cu-tw") +
      /* scoreboard */
      '<rect x="146" y="20" width="108" height="56" rx="4" fill="#5a1a24" stroke="#ddd" stroke-width="2"/><text x="200" y="36" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">WILDCATS</text>' +
      '<rect x="156" y="42" width="34" height="22" fill="#111"/><rect x="210" y="42" width="34" height="22" fill="#111"/>' +
      '<text x="173" y="59" text-anchor="middle" ' + font + ' font-size="16" fill="' + GOLD + '" class="cu-glow">21</text><text x="227" y="59" text-anchor="middle" ' + font + ' font-size="16" fill="' + GOLD + '">14</text>' +
      '<text x="173" y="72" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">HOME</text><text x="227" y="72" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">GUEST</text>' +
      '<rect x="196" y="76" width="8" height="16" fill="#777"/>' +
      lights + stands + fans +
      '<rect x="0" y="150" width="400" height="110" fill="#3f8a3a"/><rect x="0" y="150" width="400" height="18" fill="#357a32"/>' + yard +
      /* goal post */
      '<path d="M360 196v-40M344 156h32M344 156v-26M376 156v-26" stroke="' + GOLD + '" stroke-width="4" fill="none"/>' +
      '<g class="cu-ball"><ellipse cx="120" cy="190" rx="9" ry="5.5" fill="#7a3d1c" transform="rotate(-25 120 190)"/><path d="M116 191l8 -3" stroke="#fff" stroke-width="1.2"/></g>' +
      '<text x="200" y="232" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="#fff" opacity=".35" letter-spacing="6">CHECOTAH</text>',
      sky("cu2", "#0b1430", "#2a2a5a"));
  }

  /* 3. Eufaula Lake at sundown, 5 miles west of town: the boat dock, a fishing boat bobbing, the sun sinking into the water */
  function culake() {
    let shore = "";
    for (let i = 0; i < 10; i++) shore += tree(10 + i * 44, 128, 9 + (i * 3) % 6, i % 2 ? "#2c4a2a" : "#36583a");
    let waves = "";
    for (let i = 0; i < 6; i++) waves += '<path d="M0 ' + (150 + i * 18) + 'q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#fff" stroke-width="1.2" fill="none" opacity="' + (0.15 + i * 0.05) + '"/>';
    let dock = "";
    for (let i = 0; i < 7; i++) dock += '<rect x="' + (232 + i * 24) + '" y="168" width="4" height="40" fill="#5a3a22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cu3)"/>' +
      '<circle cx="140" cy="118" r="30" fill="#ffb347"/>' +
      '<g class="cu-cl"><ellipse cx="260" cy="44" rx="44" ry="8" fill="#ffd0a8" opacity=".6"/><ellipse cx="70" cy="34" rx="30" ry="6" fill="#ffd0a8" opacity=".5"/></g>' +
      '<path d="M0 132q100 -22 200 -6t200 -4v10h-400z" fill="#3a4a3a"/>' + shore +
      '<rect x="0" y="130" width="400" height="130" fill="url(#cu3w)"/>' +
      '<g class="cu-wave"><path d="M100 150h80M110 166h60M120 182h40" stroke="#ffcf7a" stroke-width="4" stroke-linecap="round" opacity=".8"/>' + waves + '</g>' +
      dock + '<rect x="226" y="162" width="174" height="8" fill="#8a5a32"/><rect x="226" y="170" width="174" height="3" fill="#5a3a22"/>' +
      /* fishing boat */
      '<g class="cu-bob"><path d="M40 196h100l-14 18h-74z" fill="#d8dde2" stroke="#556" stroke-width="1.5"/><rect x="60" y="184" width="28" height="12" fill="' + PINK + '"/><rect x="128" y="180" width="8" height="18" fill="#333"/>' +
      '<path d="M76 184l40 -46" stroke="#5a3a22" stroke-width="2"/><path d="M116 138q10 30 6 62" stroke="#ddd" stroke-width=".8" fill="none"/></g>' +
      '<rect x="380" y="128" width="4" height="34" fill="#333"/><circle cx="382" cy="126" r="5" fill="#fff3b0" class="cu-glow"/>' +
      note(300, 130, CREAM) + note(350, 120, GOLD, "cu-nt2"),
      sky("cu3", "#3a2a6a", "#ff9a5a") + '<linearGradient id="cu3w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d27a5a"/><stop offset="1" stop-color="#2a3a6a"/></linearGradient>');
  }

  /* 4. Seminary Hall at Northeastern State in Tahlequah: red brick, white stone trim, the tall clock tower, students heading to class */
  function cunsu() {
    const win = (x, y, h) => '<path d="M' + x + ' ' + (y + h) + 'v-' + (h - 6) + 'q7 -8 14 0v' + (h - 6) + 'z" fill="#22303c" stroke="#efe6d2" stroke-width="1.5"/>';
    let w1 = "", w2 = "";
    for (let i = 0; i < 5; i++) { w1 += win(40 + i * 24, 120, 26); w2 += win(250 + i * 24, 120, 26); }
    for (let i = 0; i < 5; i++) { w1 += win(40 + i * 24, 160, 22); w2 += win(250 + i * 24, 160, 22); }
    let lawn = "";
    for (let i = 0; i < 4; i++) lawn += tree(i < 2 ? 14 + i * 4 : 382 - (i - 2) * 6, 210, 16 + i * 2, "#3b6a32");
    return svg(
      '<rect width="400" height="260" fill="url(#cu4)"/>' +
      '<g class="cu-cl"><ellipse cx="70" cy="30" rx="36" ry="8" fill="#fff" opacity=".7"/><ellipse cx="320" cy="42" rx="30" ry="7" fill="#fff" opacity=".6"/></g>' +
      /* wings */
      bricks(28, 106, 140, 92, BRICK, "#6e2a1c") + bricks(232, 106, 140, 92, BRICK, "#6e2a1c") +
      '<path d="M22 108l76 -26l76 26z" fill="#6a5a52"/><path d="M226 108l76 -26l76 26z" fill="#6a5a52"/>' +
      '<rect x="28" y="150" width="140" height="4" fill="#efe6d2"/><rect x="232" y="150" width="140" height="4" fill="#efe6d2"/>' + w1 + w2 +
      /* central tower */
      bricks(168, 50, 64, 148, "#a84530", "#6e2a1c") +
      '<path d="M162 52l38 -34l38 34z" fill="#5e4e48"/><rect x="196" y="4" width="8" height="16" fill="#5e4e48"/>' +
      '<circle cx="200" cy="74" r="14" fill="#f6ecd6" stroke="#efe6d2" stroke-width="3"/><path d="M200 74v-9M200 74l7 3" stroke="#222" stroke-width="2" stroke-linecap="round"/>' +
      '<rect x="168" y="96" width="64" height="5" fill="#efe6d2"/>' + win(186, 104, 34) + win(200, 104, 34) +
      '<path d="M178 198v-36q22 -24 44 0v36z" fill="#3a2016" stroke="#efe6d2" stroke-width="3"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#4f8a3c"/><path d="M178 198l-20 62h84l-20 -62z" fill="#d9cdb4"/>' + lawn +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">TAHLEQUAH</text>' +
      note(120, 96, GOLD) + note(280, 92, PINK, "cu-nt2"),
      sky("cu4", "#4a9ad8", "#cde6f6"));
  }

  /* 5. W Gentry Ave and N Broadway in downtown Checotah: red-brick storefronts, her name on the wall, the old Katy depot down the tracks behind */
  function cucorner() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="16" height="22" fill="#22303c" stroke="#efe6d2" stroke-width="1.5"/>';
    let fr = "";
    for (let i = 0; i < 4; i++) fr += win(204 + i * 25, 64);
    return svg(
      '<rect width="400" height="260" fill="url(#cu5)"/>' +
      star(40, 30, 2.4, "#fff", "cu-tw") + star(250, 20, 2, "#fff", "cu-tw cu-tw2") + star(360, 40, 2, "#fff", "cu-tw") +
      /* the Katy depot behind: long low brick building, hip roof, MKT-style sign board */
      '<path d="M0 112l24 -22h150l24 22z" fill="#4a3a34"/>' + bricks(8, 112, 182, 52, "#b0583a", "#7a3a24") +
      '<rect x="60" y="96" width="80" height="14" fill="' + CREAM + '"/><text x="100" y="107" text-anchor="middle" ' + font + ' font-size="10" fill="#7a1f2b" letter-spacing="2">KATY</text>' +
      '<rect x="24" y="124" width="16" height="22" fill="#22303c"/><rect x="54" y="124" width="16" height="22" fill="#22303c"/><rect x="130" y="124" width="16" height="22" fill="#22303c"/><rect x="160" y="124" width="16" height="22" fill="#22303c"/><rect x="90" y="122" width="22" height="42" fill="#3a2016"/>' +
      '<rect x="0" y="162" width="400" height="4" fill="#666"/><path d="M0 166h400" stroke="#888" stroke-width="2"/>' +
      /* storefront at the corner (front right) */
      bricks(196, 50, 110, 128, BRICK, "#6e2a1c") + '<rect x="190" y="46" width="122" height="8" fill="#e4dcc6"/>' + fr +
      '<rect x="204" y="112" width="40" height="44" fill="#22303c" stroke="#e4dcc6" stroke-width="2" class="cu-glow"/><rect x="254" y="112" width="40" height="44" fill="#22303c" stroke="#e4dcc6" stroke-width="2"/>' +
      '<rect x="196" y="100" width="110" height="8" fill="' + PINK + '"/>' +
      /* low wall with the tags */
      '<rect x="0" y="178" width="400" height="46" fill="#8a3e2c"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (184 + i * 6) + 'h400" stroke="#5e2a1c" stroke-width="1"/>').join("") +
      '<rect x="0" y="174" width="400" height="5" fill="#e4dcc6"/>' +
      tag("CARRIE", 18, 216, 36, PINK, -5) + tag("PLAY ON", 168, 208, 20, GOLD, -4) + tag("CHECOTAH", 254, 220, 17, CREAM, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="360" y="66" width="6" height="158" fill="#2f2f2f"/>' + sign(300, 66, 96, "W Gentry Ave") + sign(296, 92, 100, "N Broadway") +
      '<g class="cu-sp"><circle cx="120" cy="196" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="cu-sp cu-sp2"><circle cx="126" cy="190" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("cu5", "#141a44", "#e08a6a"));
  }

  window.SCENES = { cuhwy: cuhwy, cufield: cufield, culake: culake, cunsu: cunsu, cucorner: cucorner };
})();
