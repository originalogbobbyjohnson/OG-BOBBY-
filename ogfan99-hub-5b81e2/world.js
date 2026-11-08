/* © OG Bobby / OG FAN 99 — the wider world around the map:
   LOUNGE (artists link up), FANS (fan side), REGIONS (cities beyond NYC), GENRES (sounds beyond rap).
   The map page itself is untouched; these are panes that swap in above the bottom bar. */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var owner = function () { try { return localStorage.getItem("ogfan99owner") === "1"; } catch (e) { return false; } };
  var LS = function (k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || "null"); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } };
  var live = function () { return !!(window.OGFB && OGFB.ready() && OGFB.social); };

  /* ---------- styles ---------- */
  var css = [
    ".hbar{display:grid!important;grid-template-columns:44px 1fr 44px;align-items:center;gap:6px}",
    ".hbar .hmid{display:flex;align-items:center;justify-content:center;gap:8px;min-width:0}",
    ".hb,.hfind{width:42px;height:38px;border:2px solid #000;border-radius:10px;background:#1d2033;box-shadow:0 2px 0 #000;cursor:pointer;display:grid;place-items:center;padding:0;color:#fff;font-size:18px}",
    ".hfind{background:#e8b84a;color:#000}",
    ".hb{align-content:center;gap:4px}.hb i{display:block;width:20px;height:3px;border-radius:2px;background:#fff}",
    ".hmenu{position:fixed;inset:0;z-index:2700;background:rgba(0,0,0,.6);display:flex}",
    ".hmenu[hidden]{display:none}",
    ".hm-in{width:min(84vw,340px);height:100%;overflow-y:auto;background:#151726;border-right:3px solid #d62828;padding:max(14px,env(safe-area-inset-top)) 14px max(18px,env(safe-area-inset-bottom));box-sizing:border-box;display:flex;flex-direction:column;gap:6px;animation:hmin .18s ease-out}",
    "@keyframes hmin{from{transform:translateX(-100%)}to{transform:none}}",
    ".hm-h{display:flex;justify-content:space-between;align-items:center}",
    ".hm-h span{font-family:var(--tag);font-size:1.8rem;color:#fff;-webkit-text-stroke:1px #000;text-shadow:2px 2px 0 #000}.hm-h span b{color:#d62828;font-weight:400}",
    ".hm-x{border:0;background:none;color:#fff;font-size:22px;cursor:pointer}",
    ".hm-sub{font:800 .62rem/1.3 Helvetica,Arial,sans-serif;letter-spacing:.12em;color:#e8b84a;margin-bottom:4px}",
    ".hm-sec{font:900 .62rem/1 Helvetica,Arial,sans-serif;letter-spacing:.16em;color:#e8b84a;margin:10px 0 2px}",
    ".hm-list{display:grid;gap:5px}",
    ".hm-list button{display:grid;grid-template-columns:30px 1fr auto;align-items:center;gap:8px;text-align:left;border:2px solid #2c3050;border-radius:10px;background:#1d2033;color:#fff;padding:10px;font:800 .82rem/1 Helvetica,Arial,sans-serif;letter-spacing:.06em;cursor:pointer}",
    ".hm-list button.on{border-color:#e8b84a;background:#2a2410}",
    ".hm-list button b{font-size:18px;text-align:center}",
    ".hm-list em{font-style:normal;font:900 .6rem/1 Helvetica,Arial,sans-serif;letter-spacing:.1em;padding:4px 6px;border-radius:5px;background:repeating-linear-gradient(-45deg,#f2c14e 0 6px,#e0a800 6px 12px);color:#000}",
    ".hm-list em.g{background:#e8b84a;color:#000;max-width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
    ".exb{display:inline-grid;place-items:center;width:20px;height:20px;border:2px solid #fff;border-radius:4px;font:900 12px/1 Helvetica,Arial,sans-serif}",
    ".wback{flex:none;border:2px solid #e8b84a;border-radius:10px;background:#1d2033;color:#e8b84a;font:900 .72rem/1 Helvetica,Arial,sans-serif;letter-spacing:.12em;padding:8px;cursor:pointer}",
    ".wback[hidden]{display:none}",
    ".wtabs{flex:none;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:4px;margin:-2px 0 0}",
    ".wtabs button{position:relative;border:2px solid #000;border-radius:10px;background:#1d2033;color:#fff;font:900 9.5px/1 Helvetica,Arial,sans-serif;letter-spacing:.06em;padding:6px 1px 5px;box-shadow:0 2px 0 #000;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px}",
    ".wtabs button b{font-size:14px;line-height:1}",
    ".wtabs button.on{background:#e8b84a;color:#000}",
    ".wtabs button .uc{position:absolute;top:-5px;right:-3px;background:repeating-linear-gradient(-45deg,#f2c14e 0 4px,#000 4px 8px);width:14px;height:8px;border-radius:2px;border:1px solid #000}",
    ".wrap.app.paneon>.perkbar,.wrap.app.paneon>.metrorow,.wrap.app.paneon>.mapbox,.wrap.app.paneon>.boros,.wrap.app.paneon>.bhead,.wrap.app.paneon>.listwrap{display:none!important}",
    ".wpane{flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;display:flex;flex-direction:column;gap:10px;padding:2px 0 8px}",
    ".wpane[hidden]{display:none}",
    ".prh{display:flex;justify-content:space-between;align-items:center;border-left:5px solid;padding:8px 12px;margin-top:6px;background:#0d1426;border-radius:6px}",
    ".prh b{font:900 20px/1 Anton,Impact,sans-serif;letter-spacing:2px;color:#fff}.prh span{font:800 12px Barlow,sans-serif;color:#fff;background:#24304d;border-radius:20px;padding:3px 9px}",
    ".prl{display:flex;flex-direction:column;gap:6px}",
    ".prr{display:flex;align-items:center;gap:10px;width:100%;text-align:left;background:#111a30;border:1px solid #24304d;border-radius:10px;padding:10px 12px;color:#fff;cursor:pointer}",
    ".prr .st{font:900 .6rem/1 Helvetica,Arial,sans-serif;letter-spacing:.12em;padding:5px 7px;border-radius:5px;border:1.5px solid #000;flex:none}.prr .st.live{background:#35b867;color:#031}.prr .st.uc{background:repeating-linear-gradient(-45deg,#f2c14e 0 6px,#e0a800 6px 12px);color:#000}",
    ".prdot{width:10px;height:10px;border-radius:50%;flex:none}.prn{flex:1;display:flex;flex-direction:column}.prn b{font:800 15px Barlow,sans-serif;color:#fff}.prn small{font:600 12px Barlow,sans-serif;color:#e8e8e8}",

    ".wpane>*{flex:none}",
    ".wp-h{text-align:center;display:grid;gap:3px}",
    ".wp-h .t{font-family:var(--tag);font-size:2rem;line-height:1;color:#fff;-webkit-text-stroke:1px #000;text-shadow:2px 2px 0 #000;transform:rotate(-2deg)}",
    ".wp-h .s{font:800 .7rem/1.3 Helvetica,Arial,sans-serif;letter-spacing:.14em;color:#e8b84a}",
    ".wbox{background:#151726;border:2px solid #2c3050;border-radius:14px;padding:12px;display:grid;gap:8px;color:#fff}",
    ".wbox h4{margin:0;font-family:var(--display);letter-spacing:.1em;font-size:1rem;color:#fff}",
    ".wbox p{margin:0;font-size:.86rem;line-height:1.35;color:#fff}",
    ".wsteps{display:grid;gap:6px;margin:0;padding:0;list-style:none;counter-reset:s}",
    ".wsteps li{counter-increment:s;display:grid;grid-template-columns:24px 1fr;gap:8px;align-items:center;font-size:.86rem;color:#fff}",
    ".wsteps li:before{content:counter(s);width:24px;height:24px;border-radius:50%;background:#e8b84a;color:#000;font:900 13px/24px Helvetica,Arial,sans-serif;text-align:center}",
    ".wbtn{display:block;width:100%;border:2px solid #000;border-radius:12px;padding:12px 10px;font-family:var(--display);letter-spacing:.1em;font-size:1rem;box-shadow:0 3px 0 #000;cursor:pointer;background:#d62828;color:#fff}",
    ".wbtn.gold{background:#e8b84a;color:#000}.wbtn.dark{background:#1d2033;color:#fff;border-color:#e8b84a}",
    ".wbtn.sm{display:inline-block;width:auto;padding:7px 10px;font-size:.78rem;box-shadow:0 2px 0 #000}",
    ".wmsg{font-size:.8rem;color:#e8b84a;text-align:center;min-height:1em}",
    ".tape{position:relative;overflow:hidden;border-radius:14px;border:2px solid #000;background:#151726;padding:22px 12px 12px;display:grid;gap:8px;color:#fff}",
    ".tape:before{content:'';position:absolute;left:0;right:0;top:0;height:12px;background:repeating-linear-gradient(-45deg,#f2c14e 0 12px,#000 12px 24px)}",
    ".tape .uc{justify-self:center;background:#f2c14e;color:#000;font:900 .72rem/1 Helvetica,Arial,sans-serif;letter-spacing:.14em;padding:6px 10px;border:2px solid #000;border-radius:6px;box-shadow:0 2px 0 #000}",
    ".tape h4{margin:0;font-family:var(--display);letter-spacing:.1em;font-size:1.05rem;text-align:center}",
    ".tape p{margin:0;font-size:.84rem;line-height:1.35;text-align:center}",
    ".wgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px}", ".rg-h{grid-column:1/-1;font-family:var(--tag);font-size:2.1rem;line-height:1;color:#e8b84a;-webkit-text-stroke:1.5px #000;text-shadow:3px 3px 0 #000;transform:rotate(-2deg);margin:18px 0 6px;padding-bottom:6px;border-bottom:3px solid #e8b84a;letter-spacing:.02em}",
    ".wtile{position:relative;border:2px solid #000;border-radius:12px;padding:12px 10px 10px;background:#1d2033;color:#fff;text-align:left;box-shadow:0 3px 0 #000;display:grid;gap:4px;cursor:pointer;font:inherit}",
    ".wtile .bar{position:absolute;left:0;right:0;top:0;height:6px;border-radius:10px 10px 0 0}",
    ".wtile b{font-family:var(--display);letter-spacing:.06em;font-size:1rem;line-height:1.05}",
    ".wtile small{font-size:.72rem;line-height:1.25;color:#fff}",
    ".wtile .st{justify-self:start;font:900 .6rem/1 Helvetica,Arial,sans-serif;letter-spacing:.12em;padding:4px 6px;border-radius:5px;border:1.5px solid #000}",
    ".wtile .st.live{background:#35b867;color:#031}.wtile .st.uc{background:repeating-linear-gradient(-45deg,#f2c14e 0 6px,#e0a800 6px 12px);color:#000}",
    ".wtile.mini{padding:14px 10px 10px;grid-template-columns:1fr;align-content:start;justify-items:start;gap:7px;min-height:52px}",
    ".wtile.mini b{font-size:.92rem;overflow-wrap:normal;word-break:normal;hyphens:none;min-width:0}", ".wtile.mini{min-width:0}", ".wgrid{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}",
    ".wtile .cnt{font:900 .62rem/1 Helvetica,Arial,sans-serif;letter-spacing:.1em;padding:5px 7px;border-radius:6px;border:1.5px solid #000;white-space:nowrap}",
    ".wtile .cnt.on{background:#35b867;color:#031}.wtile .cnt.soon{background:#e8b84a;color:#000}",
    ".wtile.open{outline:3px solid #e8b84a;outline-offset:-1px}",
    ".wdrw{grid-column:1/-1;background:#0f1424;border:2px solid #e8b84a;border-radius:12px;padding:12px;display:grid;gap:8px;color:#fff;font-size:.82rem;line-height:1.35}",
    ".wdrw .dh{font-family:var(--display);letter-spacing:.08em;font-size:1rem;color:#e8b84a}",
    ".wdrw .lk{color:#e8b84a;font-weight:800}",
    ".rg-h{display:flex;align-items:flex-end;justify-content:space-between;gap:8px}",
    ".rg-h em{font:900 .78rem/1 Helvetica,Arial,sans-serif;font-style:normal;letter-spacing:.1em;color:#000;background:#e8b84a;border:2px solid #000;border-radius:8px;padding:6px 9px;transform:rotate(2deg);-webkit-text-stroke:0;text-shadow:none;white-space:nowrap}",
    ".wtot{display:flex;justify-content:center;gap:10px;margin:2px 0 12px}.wtot button{font:900 .8rem/1 Helvetica,Arial,sans-serif;letter-spacing:.1em;color:#000;background:#35b867;border:2px solid #000;border-radius:999px;padding:9px 14px;box-shadow:0 3px 0 #000;cursor:pointer}.wtot button.g{background:#e8b84a}.wtot button.on{transform:translateY(2px);box-shadow:0 1px 0 #000;outline:2px solid #fff}",
    ".prn em.life{display:inline-block;align-self:flex-start;width:max-content;margin:3px 0 0;font:900 .58rem/1 Helvetica,Arial,sans-serif;letter-spacing:.1em;font-style:normal;color:#000;background:#ff8a3d;border-radius:4px;padding:3px 5px;vertical-align:middle}",
    ".wldg{border:2px solid #e8b84a;border-radius:12px;background:#12142a;padding:10px;margin:0 0 14px;display:grid;gap:6px}.wldg .dh{font:900 .9rem/1 Helvetica,Arial,sans-serif;letter-spacing:.12em;color:#e8b84a;text-align:center;margin-bottom:4px}.wldg .lh{display:flex;justify-content:space-between;align-items:center;margin-top:8px;padding:6px 4px;border-bottom:2px solid #e8b84a}.wldg .lh b{font:900 .78rem/1 Helvetica,Arial,sans-serif;letter-spacing:.1em;color:#fff}.wldg .lh em{font:900 .72rem/1 Helvetica,Arial,sans-serif;font-style:normal;color:#000;background:#e8b84a;border-radius:999px;padding:4px 8px}",
    ".wtile.wide{grid-column:1/-1}",
    /* lounge */
    ".lsub{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:4px}",
    ".lsub button{border:2px solid #000;border-radius:9px;background:#1d2033;color:#fff;font:900 9.5px/1 Helvetica,Arial,sans-serif;letter-spacing:.06em;padding:8px 2px;cursor:pointer;position:relative}",
    ".lsub button.on{background:#e8b84a;color:#000}",
    ".lsub button i{position:absolute;top:-6px;right:-4px;background:#d62828;color:#fff;font:900 9px/16px Helvetica,Arial,sans-serif;min-width:16px;height:16px;border-radius:8px;border:1.5px solid #000;font-style:normal}",
    ".prof{display:grid;grid-template-columns:54px 1fr;gap:10px;align-items:center;background:linear-gradient(135deg,#1d2550,#151726);border:2px solid #e8b84a;border-radius:14px;padding:10px}",
    ".prof .av{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;font-family:var(--tag);font-size:1.4rem;color:#fff;-webkit-text-stroke:.6px #000;border:2.5px solid #fff;box-shadow:0 2px 0 #000}",
    ".prof .nm{font-family:var(--tag);font-size:1.45rem;line-height:1;color:#fff;-webkit-text-stroke:.6px #000}",
    ".prof .mt{font:800 .66rem/1.35 Helvetica,Arial,sans-serif;letter-spacing:.08em;color:#e8b84a}",
    ".prow{display:grid;grid-template-columns:38px 1fr auto;gap:9px;align-items:center;background:#151726;border:1.5px solid #2c3050;border-radius:12px;padding:8px 9px}",
    ".prow .av{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;font-family:var(--tag);font-size:1rem;color:#fff;-webkit-text-stroke:.5px #000;border:2px solid #fff}",
    ".prow .nm{font-family:var(--tag);font-size:1.1rem;line-height:1;color:#fff;-webkit-text-stroke:.5px #000}",
    ".prow .mt{font:700 .64rem/1.3 Helvetica,Arial,sans-serif;letter-spacing:.06em;color:#e8b84a}",
    ".prow .acts{display:flex;gap:5px}",
    ".lsearch{width:100%;box-sizing:border-box;border:2px solid #e8b84a;border-radius:10px;background:#0b0c14;color:#fff;padding:10px;font:600 15px Helvetica,Arial,sans-serif}",
    ".lsearch::placeholder{color:#e8b84a;opacity:.8}",
    ".sample{justify-self:start;max-width:100%;white-space:normal;line-height:1.3;background:#2c3050;color:#fff;font:900 .58rem/1 Helvetica,Arial,sans-serif;letter-spacing:.12em;padding:4px 6px;border-radius:5px}",
    /* chat window */
    ".chat{position:fixed;inset:0;z-index:2600;background:#0b0c14;display:flex;flex-direction:column;max-width:460px;margin:0 auto}",
    ".chat[hidden]{display:none}",
    ".chat .ch{flex:none;display:grid;grid-template-columns:40px 38px 1fr 40px;gap:8px;align-items:center;padding:max(10px,env(safe-area-inset-top)) 10px 10px;background:#151726;border-bottom:3px solid #d62828}",
    ".chat .ch button{border:0;background:none;color:#fff;font-size:22px;cursor:pointer}",
    ".chat .msgs{flex:1 1 auto;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:6px;background:linear-gradient(#0b0c14,#121428)}",
    ".chat .bub{max-width:78%;padding:8px 11px;border-radius:16px;font-size:.92rem;line-height:1.3;color:#fff;background:#2c3050;align-self:flex-start;border-bottom-left-radius:4px;white-space:pre-wrap;word-wrap:break-word}",
    ".chat .bub.me{align-self:flex-end;background:#d62828;border-bottom-left-radius:16px;border-bottom-right-radius:4px}",
    ".chat .day{align-self:center;font:800 .62rem/1 Helvetica,Arial,sans-serif;letter-spacing:.12em;color:#e8b84a;padding:4px 0}",
    ".chat .cf{flex:none;display:grid;grid-template-columns:1fr auto;gap:8px;padding:10px 10px max(12px,env(safe-area-inset-bottom));background:#151726;border-top:2px solid #2c3050}",
    ".chat .cf textarea{resize:none;height:42px;border:2px solid #e8b84a;border-radius:12px;background:#0b0c14;color:#fff;padding:10px;font:15px Helvetica,Arial,sans-serif}",
    ".chat .cf textarea::placeholder{color:#e8b84a;opacity:.85}",
    ".chat .cf button{border:2px solid #000;border-radius:12px;background:#e8b84a;color:#000;font-family:var(--display);letter-spacing:.1em;padding:0 16px;cursor:pointer}",
    ".chat .safe{flex:none;display:flex;justify-content:center;gap:14px;padding:6px;background:#151726}",
    ".chat .safe button{background:none;border:0;color:#e8b84a;font:800 .66rem Helvetica,Arial,sans-serif;letter-spacing:.12em;cursor:pointer;text-decoration:underline}"
  ].join("\n");
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* ---------- helpers ---------- */
  var BORO_C = { Brooklyn: "#d62828", Queens: "#7b3fbf", Bronx: "#00933c", "the Bronx": "#00933c", Manhattan: "#0039a6", "Staten Island": "#ff6319" };
  var initials = function (n) { return String(n || "?").replace(/[^A-Za-z0-9 ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase() || "?"; };
  var boroOf = function (a) { return (a && a.boro) || "Brooklyn"; };
  var avColor = function (a) { return BORO_C[boroOf(a)] || "#e8b84a"; };
  var A = function () { try { return ARTISTS; } catch (e) { return []; } };
  var bobby = function () { var L = A(); for (var i = 0; i < L.length; i++) if (L[i].who === "OG Bobby") return L[i]; return { who: "OG Bobby", boro: "Brooklyn", hood: "Bay Ridge" }; };
  var meta = function (a) { return [a.hood, boroOf(a)].filter(function (v, i, r) { return v && r.indexOf(v) === i; }).join(", "); };
  var bul = function (a) { return (a.trains || []).slice(0, 4).map(function (t) { var n = Array.isArray(t) ? t[0] : t, c = Array.isArray(t) ? t[1] : "#e8b84a", y = /fccc0a/i.test(c); return '<span style="display:inline-grid;place-items:center;width:15px;height:15px;border-radius:50%;background:' + c + ';color:' + (y ? "#000" : "#fff") + ';font:900 9px/1 Helvetica,Arial,sans-serif;margin-left:3px;vertical-align:-3px">' + esc(n) + '</span>'; }).join(""); };

  /* ---------- tab bar ---------- */
  var TABS = [
    { id: "map", ic: "&#128647;", t: "MAP" },
    { id: "lounge", ic: "&#127908;", t: "LOUNGE" },
    { id: "fans", ic: "&#128293;", t: "FANS" },
    { id: "producers", ic: "&#127899;", t: "PRODUCERS" },
    { id: "regions", ic: "&#127758;", t: "CITIES", uc: 1 },
    { id: "genres", ic: "&#127926;", t: "GENRES", uc: 1 },
    { id: "women", ic: "&#128081;", t: "FEMALE RAPPERS" },
    { id: "rip", ic: "&#128330;", t: "REST IN POWER" }
  ];
  var app = document.querySelector(".wrap.app"), bar = document.querySelector(".appbar");
  if (!app || !bar) return;
  /* one ☰ menu holds everything that used to crowd the board; FIND stays one tap away on the right */
  var hb = document.createElement("button"); hb.type = "button"; hb.className = "hb"; hb.setAttribute("aria-label", "Menu"); hb.innerHTML = "<i></i><i></i><i></i>";
  var fb = document.createElement("button"); fb.type = "button"; fb.className = "hfind"; fb.setAttribute("aria-label", "Find an artist"); fb.innerHTML = "&#128269;";
  var mid = document.createElement("div"); mid.className = "hmid"; while (bar.firstChild) mid.appendChild(bar.firstChild);
  bar.appendChild(hb); bar.appendChild(mid); bar.appendChild(fb); bar.classList.add("hbar");
  fb.onclick = function () { if (cur !== "map") go("map"); var f = $("findBtn2"); if (f) f.click(); };
  var menu = document.createElement("div"); menu.className = "hmenu"; menu.hidden = true;
  menu.innerHTML = '<div class="hm-in" role="dialog" aria-label="Menu"><div class="hm-h"><span>OG FAN <b>99</b></span><button type="button" class="hm-x" aria-label="Close">&#10005;</button></div><div class="hm-sub">THE SOCIAL GAMING PLATFORM FOR MUSICIANS &amp; FANS</div><nav class="hm-list" id="hmList"></nav></div>';
  document.body.appendChild(menu);
  var nav = menu.querySelector("#hmList");
  var dock = document.querySelector(".dock2");
  var back = document.createElement("button"); back.type = "button"; back.className = "wback"; back.innerHTML = "&#9664; BACK"; back.hidden = true; app.insertBefore(back, dock);
  back.onclick = function () { go("map"); };
  var panes = {};
  TABS.forEach(function (t) { if (t.id === "map") return; var p = document.createElement("section"); p.className = "wpane"; p.id = "w-" + t.id; p.hidden = true; app.insertBefore(p, dock); panes[t.id] = p; });
  var click = function (id) { var e = $(id); if (e) e.click(); };
  function drawMenu() {
    var ex = (function () { try { return localStorage.getItem("ogfan99explicit") === "1"; } catch (e) { return false; } })();
    var td = $("today"), tdName = td && !td.hidden ? (td.querySelector("b") || {}).textContent : "";
    var it = function (k, ic, t, extra, on) { return '<button type="button" data-m="' + k + '"' + (on ? ' class="on"' : '') + '><b>' + ic + '</b><span>' + t + '</span>' + (extra || "") + '</button>'; };
    nav.innerHTML = '<div class="hm-sec">GO TO</div>' + TABS.map(function (t) { return it("w:" + t.id, t.ic, ({ map: "THE MAP", lounge: "ARTIST LOUNGE", fans: "FAN ZONE", producers: "PRODUCERS", regions: "OTHER CITIES", genres: "OTHER GENRES", women: "FEMALE RAPPERS", rip: "REST IN POWER" })[t.id], t.uc ? '<em>SOON</em>' : '', cur === t.id); }).join("") +
      '<div class="hm-sec">YOU</div>' + it("metro", "&#127915;", "MY RIDER CARD") + (tdName ? it("today", "&#9733;", "TODAY'S TRAIN 2X", '<em class="g">' + esc(tdName) + '</em>') : "") + it("perks", "&#127873;", "PLAY TO WIN PERKS") +
      '<div class="hm-sec">SETTINGS</div>' + it("ex", "<span class=\"exb\">E</span>", "EXPLICIT LYRICS 18+", '<em class="' + (ex ? "g" : "") + '">' + (ex ? "ON" : "OFF") + '</em>') + it("key", "&#128647;", "SUBWAY KEY + LEGEND") + it("over", "&#8634;", "START OVER");
  }
  var openMenu = function (on) { if (on) drawMenu(); menu.hidden = !on; };
  hb.onclick = function () { openMenu(true); };
  menu.onclick = function (e) {
    if (e.target === menu || e.target.closest(".hm-x")) return openMenu(false);
    var b = e.target.closest("[data-m]"); if (!b) return; var m = b.dataset.m; openMenu(false);
    if (m.indexOf("w:") === 0) return go(m.slice(2));
    if (cur !== "map" && m !== "over") go("map");
    setTimeout(function () { click({ metro: "metro", today: "today", perks: "perkBar", ex: "exBtn", key: "moreBtn", over: "restartAll" }[m]); }, cur === "map" ? 0 : 60);
  };

  var cur = "map";
  function go(id) {
    cur = id; LS("ogfan99tab", id);
    app.classList.toggle("paneon", id !== "map"); back.hidden = id === "map";
    Object.keys(panes).forEach(function (k) { panes[k].hidden = k !== id; });
    if (id === "map") { setTimeout(function () { try { window.__map && window.__map.invalidateSize({ pan: false }); } catch (e) {} }, 30); return; }
    ({ lounge: drawLounge, fans: drawFans, producers: drawProducers, regions: drawRegions, genres: drawGenres, women: drawWomen, rip: drawRip })[id]();
    panes[id].scrollTop = 0;
  }
  window.OGW = { go: go, h: { row: function () { return row.apply(null, arguments); }, initials: initials, avColor: avColor, meta: meta, bul: bul, owner: owner, live: live, LS: LS, cert: function (a) { return certInfo(a); } } };

  /* ---------- LOUNGE: artist to artist ---------- */
  var L = { sub: "friends", q: "", preview: false };
  var sampleFriends = [{ who: "Sample Artist 1", boro: "Queens", hood: "Jamaica", trains: [["E", "#0039a6"]] }, { who: "Sample Artist 2", boro: "Bronx", hood: "Mott Haven", trains: [["6", "#00933c"]] }];
  var sampleReqs = [{ who: "Sample Artist 3", boro: "Manhattan", hood: "Harlem", trains: [["A", "#0039a6"]] }];
  function pstate() { return LS("ogfan99lounge") || { sent: {}, acc: {}, chats: {} }; }
  function psave(s) { LS("ogfan99lounge", s); }

  function drawLounge() {
    var p = panes.lounge;
    var head = '<div class="wp-h"><div class="t">ARTIST LOUNGE</div><div class="s">WHERE THE ARTISTS LINK UP</div></div>';
    if (L.preview && owner()) { p.innerHTML = head + loungeInside(); wireInside(); return; }
    if (live() && !L.gate) { p.innerHTML = head + '<p class="wmsg">Loading...</p>'; OGFB.social.me().then(function (m) {
        if (!m) { L.gate = 1; drawLounge(); L.gate = 0; return; }
        if (m.none) return pickDoor(true);
        if (!m.approved) { p.innerHTML = head + '<div class="wbox"><h4>YOU\'RE ON THE LIST</h4><p>Your door is <b>' + esc(m.door) + '</b>. OG Bobby checks every artist before they get in. You\'ll be able to add OG 99 friends as soon as he approves you.</p></div>' + (owner() ? '<button class="wbtn gold" id="lgAdm2" type="button">OPEN APPROVALS (OWNER)</button>' : '') + '<button class="wbtn dark" id="lgOut" type="button">SIGN OUT</button>'; $("lgOut").onclick = function () { OGFB.social.signOut().then(drawLounge); }; if ($("lgAdm2")) $("lgAdm2").onclick = drawApprovals; return; }
        liveInside(m);
      }).catch(function () { L.gate = 1; drawLounge(); L.gate = 0; }); return; }
    p.innerHTML = head +
      '<div class="wbox"><h4>OG 99 FRIENDS</h4><p>Every artist on the map gets a door. Inside the Lounge, artists find each other, send friend requests and talk one-on-one.</p>' +
      '<ol class="wsteps"><li>Claim your door on the map</li><li>OG Bobby approves you, so every artist in here is real</li><li>Sign in, add OG 99 friends and start talking</li></ol></div>' +
      '<button class="wbtn" id="lgClaim" type="button">ARE YOU AN ARTIST? CLAIM YOUR DOOR</button>' +
      '<button class="wbtn dark" id="lgIn" type="button">ALREADY APPROVED? SIGN IN</button>' +
      '<div class="wmsg" id="lgMsg"></div>' +
      (owner() ? '<div class="wbox"><h4>OWNER PREVIEW</h4><p>See the Lounge the way an approved artist will, signed in as you. Sample artists stand in until real artists join.</p><button class="wbtn gold" id="lgPrev" type="button">PREVIEW THE LOUNGE AS OG BOBBY</button></div>' + '<div class="wbox"><h4>DOOR CLAIMS + APPROVALS</h4><p>Artists who claim their door land here. Approve the real ones to let them into the Lounge.</p><button class="wbtn dark" id="lgAdm" type="button">OPEN APPROVALS</button></div>' : "");
    $("lgClaim").onclick = pickDoor;
    $("lgIn").onclick = function () {
      if (live()) { OGFB.social.signIn().then(function () { drawLounge(); }).catch(function () { $("lgMsg").textContent = "Sign-in didn't go through. Try again."; }); return; }
      $("lgMsg").textContent = "Sign-in opens when the Lounge goes live.";
    };
    if ($("lgPrev")) $("lgPrev").onclick = function () { L.preview = true; drawLounge(); };
    if ($("lgAdm")) $("lgAdm").onclick = drawApprovals;
  }

  /* owner only: door claims and Lounge sign-ups waiting for OG Bobby's OK (the database rules only let his Google account do this) */
  function drawApprovals() {
    var p = panes.lounge;
    p.innerHTML = '<div class="wp-h"><div class="t">APPROVALS</div><div class="s">ONLY REAL ARTISTS GET IN</div></div><div id="apBody" style="display:grid;gap:8px"></div><button class="wbtn dark" id="apBack" type="button">BACK</button>';
    $("apBack").onclick = drawLounge;
    var body = $("apBody");
    if (!live()) { body.innerHTML = '<div class="tape"><span class="uc">OPENS WITH THE LOUNGE</span><h4>HOW IT WILL WORK</h4><p>1. An artist taps CLAIM YOUR DOOR and sends their name, Instagram and email.<br>2. Their claim shows up right here.<br>3. You check their Instagram, then tap APPROVE. They can sign in and start adding OG 99 friends.</p></div>'; return; }
    body.innerHTML = '<p class="wmsg">Loading...</p>';
    OGFB.social.me().then(function (m) {
      if (!m) { body.innerHTML = '<button class="wbtn gold" id="apIn" type="button">SIGN IN AS OG BOBBY</button>'; $("apIn").onclick = function () { OGFB.social.signIn().then(drawApprovals); }; return; }
      return Promise.all([OGFB.social.claims().catch(function () { return null; }), OGFB.social.pending().catch(function () { return null; })]).then(function (r) {
        var cl = r[0], pe = r[1];
        if (cl === null && pe === null) { body.innerHTML = '<p class="wmsg">This Google account can\'t open approvals. Sign in with your own.</p>'; return; }
        var h = '<h4 style="margin:0;font-family:var(--display);letter-spacing:.1em">DOOR CLAIMS (' + (cl || []).length + ')</h4>';
        h += (cl || []).map(function (c) { return '<div class="wbox"><p><b>' + esc(c.artist) + '</b> · ' + esc(c.role) + '</p><p>' + esc(c.name) + ' · ' + esc(c.ig) + '<br>' + esc(c.email) + (c.phone ? ' · ' + esc(c.phone) : '') + '</p>' + (c.note ? '<p>' + esc(c.note) + '</p>' : '') + '</div>'; }).join("") || '<p class="wmsg">No claims yet.</p>';
        h += '<h4 style="margin:6px 0 0;font-family:var(--display);letter-spacing:.1em">WAITING TO GET IN (' + (pe || []).length + ')</h4>';
        h += (pe || []).map(function (m2) { return row({ who: m2.name, hood: m2.door }, '<button class="wbtn sm gold" type="button" data-ok="' + esc(m2.id) + '">APPROVE</button>'); }).join("") || '<p class="wmsg">Nobody waiting.</p>';
        body.innerHTML = h;
        body.onclick = function (e) { var b2 = e.target.closest("[data-ok]"); if (!b2) return; b2.disabled = true; OGFB.social.approve(b2.dataset.ok, true).then(drawApprovals); };
      });
    }).catch(function () { body.innerHTML = '<p class="wmsg">Couldn\'t load approvals. Try again.</p>'; });
  }

  function pickDoor(join) {
    var p = panes.lounge;
    p.innerHTML = '<div class="wp-h"><div class="t">' + (join ? "WHICH DOOR IS YOURS?" : "CLAIM YOUR DOOR") + '</div><div class="s">FIND YOUR NAME ON THE MAP</div></div>' +
      '<input class="lsearch" id="pdQ" placeholder="Type your artist name" autocapitalize="off" autocomplete="off">' +
      '<div id="pdList" style="display:grid;gap:6px"></div><button class="wbtn dark" id="pdBack" type="button">BACK</button>';
    var draw = function () {
      var q = $("pdQ").value.trim().toLowerCase(), out = [];
      A().forEach(function (a, i) { if (a.who === "OG Bobby" && !join) return; if (!q || a.who.toLowerCase().indexOf(q) >= 0) out.push([a, i]); });
      $("pdList").innerHTML = out.slice(0, 30).map(function (x) { return row(x[0], '<button class="wbtn sm gold" type="button" data-i="' + x[1] + '">THAT\'S ME</button>'); }).join("") || '<p class="wmsg">Not on the map yet? Message OG Bobby on Instagram to get your door.</p>';
    };
    $("pdQ").oninput = draw; draw();
    $("pdList").onclick = function (e) { var b = e.target.closest("[data-i]"); if (!b) return;
      if (join) { b.disabled = true; var a = A()[+b.dataset.i]; OGFB.social.join("artist", a.who, a.who, true, window.OGROOM ? OGROOM.id(a) : "").then(drawLounge); return; }
      if (typeof openClaim === "function") openClaim(+b.dataset.i); };
    $("pdBack").onclick = join ? function () { OGFB.social.signOut().then(drawLounge); } : drawLounge;
  }

  function row(a, acts, tag) {
    return '<div class="prow"><div class="av" style="background:' + avColor(a) + '">' + esc(initials(a.who)) + '</div><div><div class="nm">' + esc(a.who) + '</div><div class="mt">' + esc(meta(a)) + bul(a) + (tag ? '<br>' + tag : '') + '</div></div><div class="acts">' + (acts || "") + '</div></div>';
  }

  function loungeInside() {
    var me = bobby(), s = pstate(), reqs = sampleReqs.filter(function (r) { return !s.acc[r.who]; });
    var friends = sampleFriends.concat(sampleReqs.filter(function (r) { return s.acc[r.who] === 1; }));
    var subs = [["friends", "FRIENDS", 0], ["requests", "REQUESTS", reqs.length], ["find", "FIND", 0], ["fans", "MY FANS", 1], ["messages", "MESSAGES", 0]];
    var h = '<div class="prof"><div class="av" style="background:' + avColor(me) + '">OG</div><div><div class="nm">' + esc(me.who) + '</div><div class="mt">' + esc(meta(me)) + bul(me) + '<br>&#129309; ' + friends.length + ' OG 99 FRIENDS</div></div></div>' +
      '<button class="wbtn gold" id="lgRoom" type="button">&#128682; OPEN MY ROOM</button>' +
      '<span class="sample">PREVIEW · SAMPLE ARTISTS UNTIL THE LOUNGE GOES LIVE</span>' +
      '<div class="lsub">' + subs.map(function (x) { return '<button type="button" data-s="' + x[0] + '"' + (L.sub === x[0] ? ' class="on"' : '') + '>' + x[1] + (x[2] ? '<i>' + x[2] + '</i>' : '') + '</button>'; }).join("") + '</div><div id="lgBody" style="display:grid;gap:6px"></div>' +
      '<button class="wbtn dark" id="lgExit" type="button">EXIT PREVIEW</button>';
    return h;
  }

  function wireInside() {
    var p = panes.lounge;
    p.querySelector(".lsub").onclick = function (e) { var b = e.target.closest("[data-s]"); if (!b) return; L.sub = b.dataset.s; drawLounge(); };
    $("lgExit").onclick = function () { L.preview = false; drawLounge(); };
    if ($("lgRoom")) $("lgRoom").onclick = function () { var i = A().findIndex(function (x) { return x.who === "OG Bobby"; }); if (window.OGROOM && i >= 0) OGROOM.open(i); };
    var body = $("lgBody"), s = pstate();
    if (L.sub === "friends") {
      var fr = sampleFriends.concat(sampleReqs.filter(function (r) { return s.acc[r.who] === 1; }));
      body.innerHTML = fr.map(function (a) { return row(a, '<button class="wbtn sm gold" type="button" data-chat="' + esc(a.who) + '">MESSAGE</button>', "&#129309; FRIENDS"); }).join("");
    } else if (L.sub === "requests") {
      var rq = sampleReqs.filter(function (r) { return !s.acc[r.who]; });
      body.innerHTML = rq.length ? rq.map(function (a) { return row(a, '<button class="wbtn sm gold" type="button" data-acc="' + esc(a.who) + '">ACCEPT</button><button class="wbtn sm dark" type="button" data-dec="' + esc(a.who) + '">&#10005;</button>', "WANTS TO LINK"); }).join("") : '<p class="wmsg">No new friend requests.</p>';
    } else if (L.sub === "fans") {
      var muted = s.muted || {};
      body.innerHTML = '<div class="wbox"><h4>CERTIFIED FANS</h4><p>Fans who got a perfect run on your game. They see your updates. You can mute or remove anyone.</p>' +
        sampleFans.filter(function (f) { return muted[f.who] !== 2; }).map(function (f) { return row(f, muted[f.who] ? '<button class="wbtn sm dark" type="button" disabled>MUTED</button>' : '<button class="wbtn sm dark" type="button" data-mute="' + esc(f.who) + '">MUTE</button><button class="wbtn sm" type="button" data-rm="' + esc(f.who) + '">&#10005;</button>', "&#9733; CERTIFIED · " + f.n + (f.n === 1 ? " ARTIST" : " ARTISTS")); }).join("") + '</div>' +
        '<div class="wbox"><h4>FAN NOTES</h4><p>One note per fan per week, 18+ only. You decide who you write back.</p>' +
        (muted["Sample Fan 2"] ? '' : '<div class="prow" style="grid-template-columns:38px 1fr"><div class="av" style="background:#7b3fbf">SF</div><div><div class="nm">Sample Fan 2</div><div style="color:#fff;font-size:.86rem;line-height:1.3;margin:4px 0 6px">Got a perfect run on your game. Your last song is my favorite. Keep them coming!</div><div class="acts"><button class="wbtn sm gold" type="button" data-chat="Sample Fan 2">REPLY</button><button class="wbtn sm dark" type="button" data-mute="Sample Fan 2">IGNORE</button></div></div></div>') + '</div>';
    } else if (L.sub === "find") {
      body.innerHTML = '<input class="lsearch" id="lgQ" placeholder="Search artists, hoods, boroughs" autocapitalize="off" autocomplete="off" value="' + esc(L.q) + '"><div id="lgFind" style="display:grid;gap:6px"></div>';
      var draw = function () {
        var q = $("lgQ").value.trim().toLowerCase(); L.q = $("lgQ").value; var out = [];
        A().forEach(function (a) { if (a.who === "OG Bobby") return; var hay = (a.who + " " + (a.hood || "") + " " + (a.boro || "")).toLowerCase(); if (!q || hay.indexOf(q) >= 0) out.push(a); });
        $("lgFind").innerHTML = out.slice(0, 40).map(function (a) { var sent = s.sent[a.who]; return row(a, sent ? '<button class="wbtn sm dark" type="button" disabled>SENT</button>' : '<button class="wbtn sm" type="button" data-add="' + esc(a.who) + '">+ ADD</button>'); }).join("");
      };
      $("lgQ").oninput = draw; draw();
    } else {
      var names = Object.keys(s.chats).concat(sampleFriends.map(function (a) { return a.who; })).filter(function (v, i, arr) { return arr.indexOf(v) === i; });
      body.innerHTML = names.map(function (n) { var c = s.chats[n] || []; var last = c.length ? c[c.length - 1].t : "Say what's up"; var a = find(n); return row(a, '<button class="wbtn sm gold" type="button" data-chat="' + esc(n) + '">OPEN</button>', esc(last.slice(0, 26))); }).join("");
    }
    body.onclick = function (e) {
      var b = e.target.closest("button"); if (!b) return; var st2 = pstate();
      if (b.dataset.chat) return openChat(b.dataset.chat);
      if (b.dataset.acc) { st2.acc[b.dataset.acc] = 1; psave(st2); L.sub = "friends"; return drawLounge(); }
      if (b.dataset.dec) { st2.acc[b.dataset.dec] = 2; psave(st2); return drawLounge(); }
      if (b.dataset.mute || b.dataset.rm) { st2.muted = st2.muted || {}; st2.muted[b.dataset.mute || b.dataset.rm] = b.dataset.rm ? 2 : 1; psave(st2); return drawLounge(); }
      if (b.dataset.add) { st2.sent[b.dataset.add] = 1; psave(st2); b.outerHTML = '<button class="wbtn sm dark" type="button" disabled>SENT</button>'; }
    };
  }
  /* LIVE lounge: real approved artists, friend requests and chats from the online database */
  function liveInside(m) {
    var p = panes.lounge, S = OGFB.social;
    Promise.all([S.members("artist"), S.incoming(), S.friends()]).then(function (r) {
      var mem = {}; r[0].forEach(function (x) { mem[x.id] = x; }); var inc = r[1], fr = r[2];
      var door = function (x) { var n = x && (x.door || x.name); return Object.assign({}, find(n), { who: (x && x.name) || n }); };
      var me = door(m), sent = LS("ogfan99sent") || {};
      var subs = [["friends", "FRIENDS", 0], ["requests", "REQUESTS", inc.length], ["find", "FIND", 0], ["fans", "MY FANS", 0], ["messages", "MESSAGES", 0]];
      p.innerHTML = '<div class="wp-h"><div class="t">ARTIST LOUNGE</div><div class="s">WHERE THE ARTISTS LINK UP</div></div>' +
        '<div class="prof"><div class="av" style="background:' + avColor(me) + '">' + esc(initials(me.who)) + '</div><div><div class="nm">' + esc(me.who) + '</div><div class="mt">' + esc(meta(me)) + bul(me) + '<br>&#129309; ' + fr.length + ' OG 99 FRIENDS</div></div></div>' +
        '<div class="lsub">' + subs.map(function (x) { return '<button type="button" data-s="' + x[0] + '"' + (L.sub === x[0] ? ' class="on"' : '') + '>' + x[1] + (x[2] ? '<i>' + x[2] + '</i>' : '') + '</button>'; }).join("") + '</div><div id="lgBody" style="display:grid;gap:6px"></div>' +
        '<button class="wbtn gold" id="lgRoom" type="button">&#128682; OPEN MY ROOM</button>' + (owner() ? '<button class="wbtn dark" id="lgAdm3" type="button">APPROVALS (OWNER)</button>' : '') + '<button class="wbtn dark" id="lgOut" type="button">SIGN OUT</button>';
      p.querySelector(".lsub").onclick = function (e) { var b = e.target.closest("[data-s]"); if (!b) return; L.sub = b.dataset.s; liveInside(m); };
      if ($("lgAdm3")) $("lgAdm3").onclick = drawApprovals;
      $("lgRoom").onclick = function () { var i = A().findIndex(function (x) { return x.who === (m.door || m.name); }); if (window.OGROOM && i >= 0) OGROOM.open(i); };
      $("lgOut").onclick = function () { S.signOut().then(drawLounge); };
      var body = $("lgBody");
      var chatBtn = function (u) { return '<button class="wbtn sm gold" type="button" data-cu="' + esc(u) + '">MESSAGE</button>'; };
      if (L.sub === "friends" || L.sub === "messages") {
        body.innerHTML = fr.map(function (u) { return row(door(mem[u] || { name: "Artist" }), chatBtn(u), "&#129309; FRIENDS"); }).join("") || '<p class="wmsg">No OG 99 friends yet. Tap FIND ARTISTS.</p>';
      } else if (L.sub === "fans") {
        body.innerHTML = '<p class="wmsg">Loading...</p>';
        Promise.all([S.certFans(m.door || m.name), S.notes()]).then(function (r2) {
          var cf = r2[0], nt = r2[1], ids = cf.map(function (c) { return c.fan; }).concat(nt.map(function (n) { return n.fan; })).filter(function (v, k, arr) { return arr.indexOf(v) === k; });
          return Promise.all(ids.map(function (id) { return S.member(id).catch(function () { return null; }); })).then(function (fm) {
            var nm = {}; fm.forEach(function (f) { if (f) nm[f.id] = f.name; });
            body.innerHTML = '<div class="wbox"><h4>CERTIFIED FANS (' + cf.length + ')</h4>' + (cf.map(function (c) { return row({ who: nm[c.fan] || "Fan", boro: "Brooklyn" }, '', "&#9733; PERFECT RUN"); }).join("") || '<p>No Certified Fans yet. A fan gets here with a perfect run on your game.</p>') + '</div>' +
              '<div class="wbox"><h4>FAN NOTES (' + nt.length + ')</h4>' + (nt.map(function (n) { return '<div class="prow" style="grid-template-columns:1fr"><div><div class="nm">' + esc(nm[n.fan] || "Fan") + '</div><div style="color:#fff;font-size:.86rem;line-height:1.3;margin-top:4px">' + esc(n.text) + '</div></div></div>'; }).join("") || '<p>No notes yet.</p>') + '</div>';
          });
        }).catch(function () { body.innerHTML = '<p class="wmsg">Couldn\'t load your fans. Try again.</p>'; });
      } else if (L.sub === "requests") {
        body.innerHTML = inc.map(function (q) { return row(door(mem[q.from] || { name: "Artist" }), '<button class="wbtn sm gold" type="button" data-acc="' + esc(q.id) + '">ACCEPT</button><button class="wbtn sm dark" type="button" data-dec="' + esc(q.id) + '">&#10005;</button>', "WANTS TO LINK"); }).join("") || '<p class="wmsg">No new friend requests.</p>';
      } else {
        var list = r[0].filter(function (x) { return x.id !== m.id && fr.indexOf(x.id) < 0; });
        body.innerHTML = list.map(function (x) { return row(door(x), sent[x.id] ? '<button class="wbtn sm dark" type="button" disabled>SENT</button>' : '<button class="wbtn sm" type="button" data-add="' + esc(x.id) + '">+ ADD</button>'); }).join("") || '<p class="wmsg">You\'re linked with every artist in the Lounge so far.</p>';
      }
      body.onclick = function (e) {
        var b = e.target.closest("button"); if (!b || b.disabled) return; b.disabled = true;
        if (b.dataset.cu) { b.disabled = false; return openChat(door(mem[b.dataset.cu]).who, b.dataset.cu); }
        if (b.dataset.acc) return S.respond(b.dataset.acc, true).then(function () { L.sub = "friends"; liveInside(m); });
        if (b.dataset.dec) return S.respond(b.dataset.dec, false).then(function () { liveInside(m); });
        if (b.dataset.add) return S.request(b.dataset.add).then(function () { sent[b.dataset.add] = 1; LS("ogfan99sent", sent); b.textContent = "SENT"; }).catch(function () { b.disabled = false; });
      };
    }).catch(function () { p.innerHTML = '<p class="wmsg">Couldn\'t load the Lounge. Check your connection and try again.</p>'; });
  }

  function find(n) { var all = A().concat(sampleFriends, sampleReqs, sampleFans); for (var i = 0; i < all.length; i++) if (all[i].who === n) return all[i]; return { who: n }; }

  /* chat window (preview keeps messages on this phone; live mode uses the online database) */
  var chat = document.createElement("div"); chat.className = "chat"; chat.hidden = true; chat.setAttribute("role", "dialog");
  chat.innerHTML = '<div class="ch"><button type="button" id="chX" aria-label="Back">&#8592;</button><div class="av" id="chAv" style="width:38px;height:38px;border-radius:50%;display:grid;place-items:center;font-family:var(--tag);color:#fff;border:2px solid #fff"></div><div><div class="nm" id="chNm" style="font-family:var(--tag);font-size:1.2rem;color:#fff;line-height:1"></div><div id="chMt" style="font:700 .62rem Helvetica,Arial,sans-serif;letter-spacing:.08em;color:#e8b84a"></div></div><span></span></div>' +
    '<div class="msgs" id="chMsgs"></div><div class="safe"><button type="button" id="chBlock">BLOCK</button><button type="button" id="chReport">REPORT</button></div>' +
    '<div class="cf"><textarea id="chIn" maxlength="1000" placeholder="Message"></textarea><button type="button" id="chSend">SEND</button></div>';
  document.body.appendChild(chat);
  var chWith = null, chUid = null, chOff = null;
  function openChat(n, uid) {
    chWith = n; chUid = uid || null; var a = find(n);
    if (chOff) { try { chOff(); } catch (e) {} chOff = null; }
    if (chUid) { $("chMsgs").innerHTML = ""; OGFB.social.listen(chUid, function (msgs) { var me = firebase.auth().currentUser.uid; $("chMsgs").innerHTML = '<div class="day">YOU\'RE OG 99 FRIENDS · SAY WHAT\'S UP</div>' + msgs.map(function (x) { return '<div class="bub' + (x.from === me ? " me" : "") + '">' + esc(x.text) + '</div>'; }).join(""); $("chMsgs").scrollTop = 1e6; }).then(function (off) { chOff = off; }); }
    $("chAv").textContent = initials(n); $("chAv").style.background = avColor(a); $("chNm").textContent = n; $("chMt").innerHTML = esc(meta(a)) + bul(a);
    if (!chUid) paintChat(); chat.hidden = false; setTimeout(function () { $("chIn").focus(); }, 50);
  }
  function paintChat() {
    var c = (pstate().chats[chWith] || []);
    var first = '<div class="day">YOU\'RE OG 99 FRIENDS · SAY WHAT\'S UP</div>';
    $("chMsgs").innerHTML = first + c.map(function (m) { return '<div class="bub' + (m.me ? " me" : "") + '">' + esc(m.t) + '</div>'; }).join("");
    $("chMsgs").scrollTop = 1e6;
  }
  $("chX").onclick = function () { chat.hidden = true; if (chOff) { try { chOff(); } catch (e) {} chOff = null; } if (cur === "lounge") drawLounge(); };
  $("chSend").onclick = function () {
    var t = $("chIn").value.trim(); if (!t) return;
    if (chUid) { $("chIn").value = ""; OGFB.social.send(chUid, t).catch(function () { note("COULDN'T SEND. TRY AGAIN."); $("chIn").value = t; }); return; } var s = pstate(); (s.chats[chWith] = s.chats[chWith] || []).push({ me: 1, t: t.slice(0, 1000) }); psave(s); $("chIn").value = ""; paintChat();
  };
  $("chIn").addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("chSend").click(); } });
  var note = function (t) { var d = document.createElement("div"); d.className = "day"; d.textContent = t; $("chMsgs").appendChild(d); $("chMsgs").scrollTop = 1e6; };
  $("chBlock").onclick = function () { if (chUid) OGFB.social.block(chUid); note(chUid ? "BLOCKED. THEY CAN'T MESSAGE YOU." : "PREVIEW · BLOCK WORKS WHEN THE LOUNGE GOES LIVE"); };
  $("chReport").onclick = function () { if (chUid) OGFB.social.report(chUid + " " + chWith); note(chUid ? "REPORTED. OG BOBBY WILL TAKE A LOOK." : "PREVIEW · REPORTS GO TO OG BOBBY WHEN LIVE"); };

  /* ---------- OG CERTIFIED: beat the game, then all 99 in a row on the 99 Challenge ---------- */
  /* Rule set (Bobby, Nov 2 2026). One place for every number so the server rules can copy it later. */
  var CERT_RULES = {
    unlock: "Beat the artist's full game (all 9 boxes) to unlock their 99 Challenge.",
    pass: 99,                 /* all 99 right, in a row */
    retryDays: 7,             /* miss one = wait a week to retake */
    fanMsgPerWeek: 1,         /* fan -> artist: one message a week */
    fanMsgChars: 280,         /* owner range 100-500; 280 to start */
    artistMsg: "anytime",     /* artist -> fan: no limit, like any platform */
    credits: { live: false, perRetry: 1, maxPaidRetriesPerWeek: 2, rollover: "VIP Lounge perks after you pass", note: "Optional. Never needed to play." }
  };
  window.OG_CERT_RULES = CERT_RULES;
  var CERT_LV = [[1, "OG CERTIFIED"], [5, "TRUE FAN"], [10, "DEEP CUT"], [25, "HALL OF FAMER"], [50, "OG LEGEND"]];
  function certInfo(a) {
    if (a.who === "OG Bobby") { var g = LS("ogPlus") || {}; var b = g.t99best || 0; return { pct: Math.min(100, Math.round(b / 99 * 100)), ok: b >= 99, played: b > 0 }; }
    if (!a.save) return { pct: 0, ok: false, played: false };
    var best = { pct: 0, ok: false, played: false };
    [a.save, a.save + "x"].forEach(function (k) {
      var v = LS(k); if (!v) return; var any = Object.keys(v.stars || {}).length || Object.keys(v.cleared || {}).length;
      var cb = typeof v.chalBest === "number" ? v.chalBest : null, ok = cb != null && cb >= CERT_RULES.pass;
      var pct = cb != null ? Math.min(100, Math.round(cb / 99 * 100)) : Math.min(99, Math.round(Object.keys(v.cleared || {}).length / 9 * 50));
      if (ok || pct > best.pct) best = { pct: pct, ok: ok, played: best.played || !!any || cb != null };
      if (any || cb != null) best.played = true;
    });
    return best;
  }
  function certs() { var out = []; A().forEach(function (a, i) { var c = certInfo(a); if (c.played) out.push({ a: a, i: i, c: c }); }); return out; }
  function certLevel(n) { var r = null, nx = CERT_LV[0]; CERT_LV.forEach(function (x, k) { if (n >= x[0]) { r = x; nx = CERT_LV[k + 1] || null; } }); return { cur: r, next: nx }; }
  window.OGCERT = { info: certInfo, all: certs };

  /* ---------- FANS: the fan side ---------- */
  var F = { sub: "me" };
  var sampleFans = [{ who: "Sample Fan 1", boro: "Brooklyn", hood: "Bensonhurst", n: 4 }, { who: "Sample Fan 2", boro: "Queens", hood: "Astoria", n: 9 }, { who: "Sample Fan 3", boro: "the Bronx", hood: "Fordham", n: 1 }];
  var RULES = ["Respect every artist and every fan. No harassment, threats, hate or bullying.",
    "No stalking: never post or ask for an artist's home, location, schedule or family.",
    "No links, phone numbers or addresses in notes or messages.",
    "OG Certified means follow-for-follow with that artist. The artist can message you anytime.",
    "Fan messages to an artist: 18+ only, one a week, up to 280 characters.",
    "Missed the 99 Challenge? You can retake it in a week.",
    "Artists can mute, block or remove any fan. Removing a fan takes back that Certified badge.",
    "Two reports from different artists locks your messages until OG Bobby reviews it. Serious cases are banned for good."];
  var FM = { me: undefined, certs: null };
  function fanLive(done) {
    if (!live()) { FM.me = null; return done(); }
    OGFB.social.me().then(function (m) { FM.me = m; if (!m || m.none) { FM.certs = null; return done(); }
      return OGFB.social.certsMine().then(function (c) { FM.certs = c; done(); }); }).catch(function () { FM.me = null; done(); });
  }
  function fanNote(a) {
    var body = $("fzBody");
    body.innerHTML = '<div class="wbox"><h4>FAN NOTE TO ' + esc(a.who).toUpperCase() + '</h4><p>One note a week. No links, phone numbers or addresses. Keep it respectful.</p><textarea class="lsearch" id="fnText" maxlength="280" rows="4" placeholder="Say something real"></textarea><button class="wbtn gold" id="fnSend" type="button">SEND NOTE</button><button class="wbtn dark" id="fnBack" type="button">BACK</button><div class="wmsg" id="fnMsg"></div></div>';
    $("fnBack").onclick = drawFans;
    $("fnSend").onclick = function () {
      var t = $("fnText").value.trim(); if (!t) return;
      if (/https?:|www\.|\d{3}[-. ]?\d{3}[-. ]?\d{4}/i.test(t)) { $("fnMsg").textContent = "No links or phone numbers in notes."; return; }
      $("fnSend").disabled = true;
      OGFB.social.members("artist").then(function (ms) { var to = ms.filter(function (m) { return m.door === a.who; })[0];
        if (!to) { $("fnMsg").textContent = a.who + " isn't in the Lounge yet. Your note can go out once they join."; $("fnSend").disabled = false; return; }
        return OGFB.social.note(to.id, a.who, t).then(function () { $("fnMsg").textContent = "Sent. You can send " + a.who + " another note next week."; });
      }).catch(function () { $("fnMsg").textContent = "You already sent " + a.who + " a note this week, or something went wrong."; $("fnSend").disabled = false; });
    };
  }
  function drawFans() {
    if (FM.me === undefined) { panes.fans.innerHTML = '<p class="wmsg">Loading...</p>'; return fanLive(drawFans); }
    var p = panes.fans, list = certs(), lv;
    /* signed-in fans: only perfect runs the site watched count */
    if (FM.certs) { list = list.map(function (x) { var ok = FM.certs.some(function (c) { return c.artist === x.a.who; }); return { a: x.a, i: x.i, c: { pct: ok ? 100 : Math.min(x.c.pct, 99), ok: ok, played: true } }; });
      FM.certs.forEach(function (c) { if (!list.some(function (x) { return x.a.who === c.artist; })) { var i = A().findIndex(function (a) { return a.who === c.artist; }); if (i >= 0) list.push({ a: A()[i], i: i, c: { pct: 100, ok: true, played: true } }); } }); }
    var got = list.filter(function (x) { return x.c.ok; }); lv = certLevel(got.length);
    var subs = [["me", "MY CARD"], ["certified", "CERTIFIED"], ["friends", "FAN FRIENDS"], ["wall", "FAN WALL"]];
    var h = '<div class="wp-h"><div class="t">FAN ZONE</div><div class="s">WHERE THE TRUE FANS RIDE TOGETHER</div></div>' +
      '<div class="lsub">' + subs.map(function (x) { return '<button type="button" data-f="' + x[0] + '"' + (F.sub === x[0] ? ' class="on"' : '') + '>' + x[1] + (x[0] === "certified" && got.length ? '<i>' + got.length + '</i>' : '') + '</button>'; }).join("") + '</div><div id="fzBody" style="display:grid;gap:8px"></div>';
    p.innerHTML = h;
    p.querySelector(".lsub").onclick = function (e) { var b = e.target.closest("[data-f]"); if (!b) return; F.sub = b.dataset.f; drawFans(); };
    var body = $("fzBody");
    if (F.sub === "me") {
      var metro = $("metro") ? $("metro").innerHTML : "", r = LS("ogfan99rider") || {};
      var acct = !live() ? '' : !FM.me ? '<div class="wbox"><h4>SIGN IN AS A FAN</h4><p>Sign in so your perfect runs count on the site, follow your Certified artists and send fan notes.</p><button class="wbtn gold" id="fzIn" type="button">SIGN IN WITH GOOGLE</button></div>'
        : FM.me.none ? '<div class="wbox"><h4>MAKE YOUR FAN CARD</h4><input class="lsearch" id="fzName" maxlength="24" placeholder="Your fan name"><div class="chk" style="display:flex;gap:8px;align-items:center;color:#fff;font-size:.86rem"><input type="checkbox" id="fzAdult"><span>I\'m 18 or older (needed to send fan notes)</span></div><div class="chk" style="display:flex;gap:8px;align-items:center;color:#fff;font-size:.86rem"><input type="checkbox" id="fzRules"><span>I agree to the Fan Rules below</span></div><button class="wbtn gold" id="fzJoin" type="button">START MY FAN CARD</button><div class="wmsg" id="fzMsg"></div></div>'
        : '<div class="wbox"><h4>SIGNED IN AS ' + esc(FM.me.name).toUpperCase() + '</h4><p>' + (FM.me.kind === "artist" ? "This is your artist account. Use a different Google account to play as a fan." : "Your perfect runs count on the site now." + (FM.me.adult ? "" : " Fan notes are for 18+.")) + '</p><button class="wbtn dark" id="fzOut" type="button">SIGN OUT</button></div>';
      body.innerHTML = acct + '<div class="wbox"><h4>YOUR RIDER CARD</h4>' + (metro ? '<button class="metro" type="button" id="fzMetro" style="width:100%">' + metro + '</button>' : '') +
        '<p>' + (r.name ? "Riding as <b>" + esc(r.name) + "</b>." : "Play any game to start your rider card.") + '</p></div>' +
        '<div class="prof"><div class="av" style="background:#e8b84a;color:#000">&#9733;</div><div><div class="nm">' + (lv.cur ? lv.cur[1] : "NOT CERTIFIED YET") + '</div><div class="mt">' + got.length + ' ARTIST' + (got.length === 1 ? '' : 'S') + ' CERTIFIED' + (lv.next ? ' · ' + (lv.next[0] - got.length) + ' MORE FOR ' + lv.next[1] : '') + '</div></div></div>' +
        '<div class="wbox"><h4>CONNECT WITH THE ARTISTS</h4><ol class="wsteps"><li>Beat the artist\'s full game. That unlocks their 99 Challenge</li><li>Get all 99 right, in a row</li><li>You\'re OG Certified: an automatic follow-for-follow with that artist, and a spot on their Certified Fans wall</li><li>The artist can message you anytime. You can message them once a week, up to 280 characters (18+)</li><li>Missed one? Retake the 99 Challenge in a week. Retry Credits to go again sooner are coming soon, and any you don\'t use roll into VIP Lounge perks once you\'re Certified</li></ol><p>The more artists you master, the higher your OG rank.</p></div>' +
        '<button class="wbtn gold" id="fzGo" type="button">SEE MY CERTIFIED ARTISTS</button>' +
        '<div class="wbox"><h4>FAN RULES</h4><ol class="wsteps">' + RULES.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ol></div>';
      if ($("fzMetro")) $("fzMetro").onclick = function () { go("map"); setTimeout(function () { $("metro").click(); }, 60); };
      $("fzGo").onclick = function () { F.sub = "certified"; drawFans(); };
      if ($("fzIn")) $("fzIn").onclick = function () { OGFB.social.signIn().then(function () { FM.me = undefined; drawFans(); }); };
      if ($("fzOut")) $("fzOut").onclick = function () { OGFB.social.signOut().then(function () { FM.me = undefined; FM.certs = null; drawFans(); }); };
      if ($("fzJoin")) $("fzJoin").onclick = function () { var n = $("fzName").value.trim(); if (!n) { $("fzMsg").textContent = "Pick a fan name."; return; } if (!$("fzRules").checked) { $("fzMsg").textContent = "Check the box to agree to the Fan Rules."; return; }
        OGFB.social.join("fan", n, "", $("fzAdult").checked).then(function () { FM.me = undefined; drawFans(); }).catch(function () { $("fzMsg").textContent = "Couldn't save. Try again."; }); };
    } else if (F.sub === "certified") {
      var near = list.filter(function (x) { return !x.c.ok; }).sort(function (x, y) { return y.c.pct - x.c.pct; }).slice(0, 8);
      body.innerHTML = '<div class="wbox"><h4>OG CERTIFIED (' + got.length + ')</h4>' + (got.length ? got.map(function (x) { return row(x.a, (FM.me && FM.me.adult && FM.me.kind === "fan" ? '<button class="wbtn sm" type="button" data-note="' + x.i + '">NOTE</button>' : '') + '<button class="wbtn sm gold" type="button" data-room="' + x.i + '">ROOM</button>', "&#9733; CERTIFIED FAN"); }).join("") : '<p>No perfect games yet. Clear every box of an artist\'s game with 3 stars to get certified.</p>') + '</div>' +
        '<div class="wbox"><h4>ALMOST THERE</h4>' + (near.length ? near.map(function (x) { return row(x.a, '<button class="wbtn sm" type="button" data-play="' + x.i + '">GO</button>', x.c.pct + '% PERFECT'); }).join("") : '<p>Start any game on the map and it shows up here.</p>') + '</div>';
      body.onclick = function (e) { var nb = e.target.closest("[data-note]"); if (nb) return fanNote(A()[+nb.dataset.note]); var rb = e.target.closest("[data-room]"); if (rb && window.OGROOM) return OGROOM.open(+rb.dataset.room); var b = e.target.closest("[data-play]"); if (!b) return; go("map"); setTimeout(function () { try { openCard(+b.dataset.play); } catch (er) {} }, 80); };
    } else if (F.sub === "friends") {
      var fs = LS("ogfan99fans") || {};
      body.innerHTML = '<span class="sample">PREVIEW · SAMPLE FANS UNTIL FAN SIGN-IN GOES LIVE</span>' +
        sampleFans.map(function (f) { return row(f, fs[f.who] ? '<button class="wbtn sm dark" type="button" disabled>SENT</button>' : '<button class="wbtn sm" type="button" data-fan="' + esc(f.who) + '">+ ADD</button>', "&#9733; " + f.n + " CERTIFIED"); }).join("") +
        uc("FAN MESSAGES", "Fan-to-fan chat comes next, with the same block, report and 18+ rules as the Lounge.");
      body.onclick = function (e) { var b = e.target.closest("[data-fan]"); if (!b) return; fs[b.dataset.fan] = 1; LS("ogfan99fans", fs); b.outerHTML = '<button class="wbtn sm dark" type="button" disabled>SENT</button>'; };
    } else {
      body.innerHTML = uc("FAN WALL", "Post your scores, call out your favorite artist and show off your badges.") +
        uc("CREWS", "Start a crew with your block, your school or your borough and play as a team.") +
        uc("FAN LEADERBOARDS", "Top fans for every artist, every borough and every region.");
    }
  }
  function uc(t, d) { return '<div class="tape"><span class="uc">UNDER CONSTRUCTION</span><h4>' + t + '</h4><p>' + d + '</p></div>'; }

  /* play a region/genre game; 18+ games get a one-tap age check right there */
  function rgIsRap(n) { var G = window.OG_GENRE_OF || {}; return !G[n]; }
  function rgPlay(name, g, box, row) {
    var exOn = (function () { try { return localStorage.getItem("ogfan99explicit") === "1"; } catch (er) { return false; } })();
    if (g.ex === 2 && !exOn) {
      var old = box.querySelector(".rgAge"); if (old) old.remove();
      (row || box).insertAdjacentHTML(row ? "afterend" : "beforeend", '<div class="rgAge" style="margin-top:10px;padding:10px;border:2px solid #e8b84a;border-radius:10px"><p style="color:#fff;margin:0 0 8px">' + esc(name) + "'s game has explicit lyrics (18+). The questions always stay clean.</p>" +
        '<button type="button" class="wbtn gold" style="width:100%">I\'M 18+ · PLAY ' + esc(name).toUpperCase() + '</button></div>');
      box.querySelector(".rgAge button").onclick = function (ev) { ev.stopPropagation(); try { localStorage.setItem("ogfan99explicit", "1"); } catch (er) {} location.href = g.url + "?from=ogfan99"; };
      try { box.querySelector(".rgAge").scrollIntoView({ behavior: "smooth", block: "nearest" }); } catch (er) {}
      return;
    }
    location.href = g.url + "?from=ogfan99";
  }

  /* ---------- REGIONS: beyond NYC ---------- */
  var REGIONS = [
    { n: "NEW YORK CITY + METRO", d: "The five boroughs, Westchester, Long Island and Jersey. Riding now.", c: "#d62828", live: 1, wide: 1 },
    { g: "THE SOUTH" },
    { n: "SOUTH FLORIDA", d: "Miami, Fort Lauderdale, West Palm Beach.", c: "#ff4fa3", coming: ["Hotboii", "Lil Poppa", "Luh Tyler", "BossMan Dlow", "SpaceGhostPurrp", "Doechii", "Pitbull", "Yungeen Ace", "City Girls", "Ace Hood", "Plies", "Ski Mask the Slump God", "Trick Daddy", "Flo Rida", "Trina", "Pouya", "Denzel Curry"], locked: [{ who: "Sevin Soprano", ig: "sevinsoprano" }] },
    { n: "ATLANTA", d: "The A, Decatur, College Park, East Point.", c: "#d62828", coming: ["India.Arie", "Gladys Knight", "Ciara", "Monica", "TLC", "Bankroll Mafia", "Hoodrich Pablo Juan", "YoungBloodZ", "D4L", "Shop Boyz", "Bankroll Fresh", "Trinidad James", "Kodie Shane", "Russ", "Dem Franchize Boyz", "Jermaine Dupri", "Rocko", "Waka Flocka Flame", "Lil Gotit", "Lil Keed", "Young Nudy", "Lil Nas X", "Childish Gambino", "Gunna", "21 Savage", "2 Chainz", "Kris Kross", "Arrested Development", "Lil Jon", "Rich Homie Quan", "Lil Yachty", "Young Thug", "Lil Baby", "Pastor Troy", "Big Boi", "Latto", "Killer Mike", "T.I.", "Jeezy", "Future", "Andr\u00e9 3000", "Ludacris", "CyHi the Prynce", "Jarren Benton", "Baby Tate", "Kenny Mason", "J.I.D", "Deante' Hitchcock", "EarthGang"] },
    { n: "HOUSTON + TEXAS", d: "H-Town, Dallas, Austin, San Antonio.", c: "#0039a6", coming: ["Destiny's Child", "Chingo Bling", "Baby Bash", "The D.O.C.", "Lil Loaded", "Lil' O", "Asian Doll", "Dorrough", "Kevin Abstract", "Erica Banks", "iann dior", "Mo3", "Fat Pat", "Big Moe", "Lil' Flip", "Kirko Bangz", "That Mexican OT", "BigXthaPlug", "Maxo Kream", "Trae tha Truth", "Mike Jones", "Travis Scott", "Chamillionaire", "Lil' Keke", "Slim Thug", "Megan Thee Stallion", "Paul Wall", "Scarface", "Bun B", "Bobby Sessions", "Monaleo", "Devin the Dude", "Fat Tony", "Tobe Nwigwe"] },
    { n: "NEW ORLEANS", d: "Uptown, the 3rd Ward, the 7th Ward.", c: "#7b3fbf", coming: ["Lil Phat", "Silkk the Shocker", "Jay Electronica", "Big Freedia", "Turk", "Mia X", "Birdman", "B.G.", "Lil Wayne", "Master P", "Juvenile", "Nesby Phips", "Curren$y", "Dee-1", "Alfred Banks", "Pell"] },
    { n: "MEMPHIS + TENNESSEE", d: "Memphis and Nashville.", c: "#e8b84a", coming: ["Struggle Jennings", "Kenny Muney", "Big Boogie", "Blac Youngsta", "Duke Deuce", "Big Scarr", "Lil Wyte", "Al Kapone", "Pooh Shiesty", "Moneybagg Yo", "Young Dolph", "GloRilla", "8Ball & MJG", "Starlito", "Don Trip", "Isaiah Rashad", "Count Bass D"] },
    { n: "VIRGINIA", d: "Virginia Beach, Norfolk, Richmond.", c: "#00933c", coming: ["The Lady of Rage", "Timbaland & Magoo", "Fly Anakin", "Lil Ugly Mane", "Shelley FKA DRAM", "Missy Elliott", "Pusha T", "Skillz", "Nickelus F", "Tonedeff"] },
    { n: "THE CAROLINAS", d: "Charlotte, Raleigh-Durham, Fayetteville, Columbia.", c: "#0099d8", coming: ["Anthony Hamilton", "Toosii", "Speaker Knockerz", "Phonte", "Rapper Big Pooh", "Mavi", "Stunna 4 Vegas", "King Mez", "Morray", "Petey Pablo", "J. Cole", "Deniro Farrar", "Little Brother", "Lute", "Rapsody"] },
    { n: "MORE OF THE SOUTH", d: "Every other Southern city.", c: "#35b867", coming: ["Lionel Richie", "OMB Peezy", "Field Mob", "Pink Siifu", "Flo Milli", "CunninLynguists", "Jack Harlow", "Bubba Sparxxx", "David Banner", "Yelawolf", "Big K.R.I.T."], locked: [{ who: "The real_Saddium", ig: "the_real_saddium" }] },
    { g: "EAST COAST" },
    { n: "PHILADELPHIA", d: "North Philly, West Philly, South Philly.", c: "#004c54", coming: ["Matt Ox", "Jedi Mind Tricks", "Ms. Jade", "Lil Skies", "Oschino", "Reed Dollaz", "Gillie Da King", "Steady B", "Beanie Sigel", "King Syze", "Amos Lee", "Bill Haley & His Comets", "Frankie Avalon", "Bobby Rydell", "The War on Drugs", "Japanese Breakfast", "Kurt Vile", "Ivy Sole", "Jim Croce", "The Delfonics", "Santigold", "P!nk", "Chubby Checker", "Hall & Oates", "The O'Jays", "Teddy Pendergrass", "Kurupt", "Patti LaBelle", "Boyz II Men", "Will Smith", "Musiq Soulchild", "Jazmine Sullivan", "Jill Scott", "Black Thought", "Young Gunz", "The Last Emperor", "Lay Bankz", "Kur", "PnB Rock", "Reef the Lost Cauze", "Chill Moody", "Bahamadia", "Freeway", "Lil Dicky", "Cassidy", "Three Times Dope", "Lil Uzi Vert", "Eve", "Tierra Whack", "DJ Jazzy Jeff & The Fresh Prince", "Armani White", "Chiddy Bang", "Meek Mill", "The Roots", "Vinnie Paz"] },
    { n: "THE DMV", d: "D.C., Maryland, Northern Virginia.", c: "#e81828", coming: ["Raheem DeVaughn", "Ginuwine", "Toni Braxton", "JPEGMafia", "Cordae", "GoldLink", "Shordie Shordie", "IDK", "Logic", "Wale", "Rico Nasty", "Uptown XO", "Substantial", "ANKHLEJOHN", "Oddisee"] },
    { n: "UPSTATE NEW YORK", d: "Middletown, Albany, Rochester, Buffalo, Syracuse.", c: "#7b3fbf", coming: ["Elcamino", "Ch\u00e9 Noir", "Stove God Cook$", "Sammus", "Conway the Machine", "Westside Gunn", "Cage"] },
    { n: "BOSTON + NEW ENGLAND", d: "Boston, Providence, Hartford.", c: "#0b3d91", coming: ["Latrell James", "Chris Webby", "Cam Meekins", "Millyz", "Big Shug", "Dutch ReBelle", "Akua Naru", "Aimee Mann", "Michael Bolton", "The Mighty Mighty Bosstones", "Pixies", "Boston", "The Cars", "Passion Pit", "Dropkick Murphys", "James Taylor", "Bell Biv DeVoe", "Donna Summer", "Akrobatik", "New Kids on the Block", "Reks", "Meghan Trainor", "Termanology", "Guru's Jazzmatazz", "New Edition", "Michael Christmas", "Cousin Stizz", "Ed O.G.", "Joyner Lucas", "Mr. Lif", "Esoteric", "Slaine", "Sage Francis", "Apathy"] },
    { g: "MIDWEST" },
    { n: "CHICAGO", d: "The Chi, North to South Side.", c: "#00a1de", coming: ["Earth, Wind & Fire", "Jennifer Hudson", "Rockie Fresh", "Dreezy", "Calboy", "Shawnna", "Lil Bibby", "Crucial Conflict", "Do or Die", "Juice WRLD", "Lil Durk", "Polo G", "Vic Mensa", "Chance the Rapper", "Da Brat", "Lupe Fiasco", "Twista", "Common", "Joey Purp", "Serengeti", "Tink", "Mick Jenkins", "Noname", "Saba"] },
    { n: "DETROIT", d: "The D, East Side to West Side.", c: "#ff6319", coming: ["Aretha Franklin", "Anita Baker", "Rio Da Yung OG", "Peezy", "BabyTron", "Veeze", "Trick-Trick", "D12", "DeJ Loaf", "Payroll Giovanni", "Icewear Vezzo", "Babyface Ray", "Tee Grizzley", "Danny Brown", "Kash Doll", "Royce da 5'9\"", "Eminem", "Slum Village", "Dizzy Wright", "Jon Connor", "Guilty Simpson", "Black Milk", "eLZhi", "Quelle Chris", "One Be Lo"] },
    { n: "PITTSBURGH", d: "The Steel City. Hill District to Point Breeze.", c: "#ffb612", coming: ["Boaz", "Wiz Khalifa", "Mac Miller"] },
    { n: "MINNEAPOLIS", d: "Minneapolis and St. Paul. Rhymesayers country.", c: "#7b3fbf", coming: ["Morris Day and The Time", "Mint Condition", "Doomtree", "Yung Gravy", "P.O.S", "Toki Wright", "Dessa", "Slug", "Brother Ali", "Eyedea"] },
    { n: "KANSAS CITY", d: "KC, Missouri and Kansas.", c: "#d62828", coming: ["Joey Cool", "Kutt Calhoun", "Mac Lethal", "Krizz Kaliko", "Stik Figa", "Tech N9ne"] },
    { n: "ST. LOUIS + OHIO", d: "St. Louis, Cleveland, Cincinnati, Columbus.", c: "#f2c14e", coming: ["The Isley Brothers", "Krayzie Bone", "St. Lunatics", "Jibbs", "Huey", "J-Kwon", "Murphy Lee", "Machine Gun Kelly", "Chingy", "Nelly", "Kid Cudi", "King Chip", "Blueprint", "Stalley", "Smino"] },
    { g: "WEST COAST" },
    { n: "LOS ANGELES + SOCAL", d: "LA, Long Beach, Compton, Inglewood, the IE, San Diego.", c: "#f2c14e", coming: ["Teena Marie", "Brandy", "Yo-Yo", "Mr. Capone-E", "Lighter Shade of Brown", "Delinquent Habits", "Dilated Peoples", "Lil Rob", "House of Pain", "People Under the Stairs", "Jurassic 5", "Kid Frost", "Cypress Hill", "Young MC", "Freestyle Fellowship", "Above the Law", "King Tee", "Tha Alkaholiks", "Ice-T", "Kalan.FrFr", "Remble", "Domo Genesis", "Doja Cat", "Snow Tha Product", "Xzibit", "Jayo Felony", "Hit-Boy", "Kid Ink", "Problem", "Westside Boogie", "Dom Kennedy", "Baby Keem", "Earl Sweatshirt", "YG", "Drakeo the Ruler", "Blxst", "MC Eiht", "ScHoolboy Q", "Ab-Soul", "Jay Rock", "Vince Staples", "Nipsey Hussle", "MC Ren", "Ice Cube", "Eazy-E", "Kendrick Lamar", "Warren G", "Snoop Dogg", "Luckyiam", "Reverie", "The Pharcyde", "Murs", "Aceyalone", "Evidence", "Blu", "Busdriver", "Open Mike Eagle"] },
    { n: "THE BAY AREA", d: "Oakland, San Francisco, Vallejo, Richmond, San Jose.", c: "#0099d8", coming: ["Tony! Toni! Ton\u00e9!", "En Vogue", "MC Hammer", "Blackalicious", "Hieroglyphics", "Symba", "SOB X RBE", "Rappin' 4-Tay", "The Jacka", "Keak da Sneak", "Guapdad 4000", "Rexx Life Raj", "P-Lo", "Iamsu!", "Richie Rich", "Mac Mall", "Andre Nickatina", "Yukmouth", "Mozzy", "Nef the Pharaoh", "G-Eazy", "Mistah F.A.B.", "Larry June", "Mac Dre", "Saweetie", "Souls of Mischief", "E-40", "Zion I", "Rocky Rivera", "Kamaiyah", "Lyrics Born", "Del the Funky Homosapien", "Gift of Gab", "Rasco", "The Grouch", "Planet Asia"] },
    { n: "THE NORTHWEST", d: "Seattle and Portland.", c: "#35b867", coming: ["Shabazz Palaces", "Grynch", "Travis Thompson", "Amin\u00e9", "Macklemore", "Sir Mix-a-Lot", "Mic Capes", "Onry Ozzborn", "Dave B", "Grieves", "Sol", "Blue Scholars"] }
  ];
  /* compact tiles: name + small badge; tap opens a drawer right under the row with the details */
  function tileGrid(p, items) {
    var g = p.querySelector(".wgrid");
    g.innerHTML = items.map(function (it, i) {
      if (it.sec) return '<div class="rg-h"><span>' + it.sec + '</span>' + (it.secN != null ? '<em>' + it.secN + (it.secN === 1 ? ' GAME' : ' GAMES') + '</em>' : '') + '</div>';
      return '<button class="wtile mini' + (it.wide ? " wide" : "") + '" type="button" data-i="' + i + '"><span class="bar" style="background:' + it.c + '"></span><b>' + esc(it.n) + '</b>' +
        '<span class="cnt ' + (it.badge ? "on" : "soon") + '">' + (it.badge || "SOON") + '</span></button>';
    }).join("");
    g.onclick = function (e) {
      if (e.target.closest(".wdrw")) return;
      var b = e.target.closest("[data-i]"); if (!b) return; var it = items[+b.dataset.i];
      if (it.go) return it.go();
      var was = b.classList.contains("open");
      g.querySelectorAll(".wdrw").forEach(function (d) { d.remove(); }); g.querySelectorAll(".wtile.open").forEach(function (t) { t.classList.remove("open"); });
      if (was) return;
      b.classList.add("open");
      /* drawer goes after the last tile in this row (2 per row) */
      var tiles = Array.prototype.slice.call(g.children), idx = tiles.indexOf(b), after = b;
      if (!b.classList.contains("wide")) { var row = [b], k = idx - 1; while (k >= 0 && tiles[k].classList.contains("wtile") && !tiles[k].classList.contains("wide")) { row.unshift(tiles[k]); k--; } var pos = row.length - 1; if (pos % 2 === 0 && tiles[idx + 1] && tiles[idx + 1].classList.contains("wtile") && !tiles[idx + 1].classList.contains("wide")) after = tiles[idx + 1]; }
      var d = document.createElement("div"); d.className = "wdrw"; d.innerHTML = it.detail(); after.insertAdjacentElement("afterend", d);
      if (it.wire) it.wire(d);
      try { d.scrollIntoView({ behavior: "smooth", block: "nearest" }); } catch (er) {}
    };
  }
  var LIFE = { "Steady B": 1 };
  function gameRows(names, c, sub) {
    var RG = window.OG_REGION_GAMES || {};
    return '<div class="prl">' + names.map(function (n) { var g = RG[n]; return '<button type="button" class="prr" data-gg="' + esc(n) + '"><span class="prdot" style="background:' + c + '"></span><span class="prn"><b>' + esc(n) + '</b>' + (LIFE[n] ? '<em class="life">SERVING LIFE</em>' : '') + '</span><span class="st live">' + (g.ex === 2 ? "PLAY 18+" : "PLAY") + '</span></button>'; }).join("") + '</div>';
  }
  function wireRows(d) { var RG = window.OG_REGION_GAMES || {}; d.querySelectorAll("[data-gg]").forEach(function (x) { x.onclick = function (ev) { ev.stopPropagation(); rgPlay(x.dataset.gg, RG[x.dataset.gg], d, x); }; }); }

  function drawRegions() {
    var p = panes.regions, RG = window.OG_REGION_GAMES || {};
    var gamesIn = function (r) { return (r.coming || []).filter(rgIsRap).filter(function (n) { return RG[n]; }); };
    var secN = {}, sec = null, nyc = (typeof ARTISTS !== "undefined" && ARTISTS.length) || 0, total = nyc, cities = nyc ? 1 : 0;
    REGIONS.forEach(function (r) { if (r.g) { sec = r.g; secN[sec] = 0; return; } if (r.live) return; var n = gamesIn(r).length; if (sec) secN[sec] += n; total += n; if (n) cities++; });
    p.innerHTML = '<div class="wp-h"><div class="t">OTHER CITIES</div><div class="s">TAP A CITY</div></div><div class="wtot"><button type="button" data-led="games">' + total + ' GAMES &#9662;</button><button type="button" class="g" data-led="cities">' + cities + ' CITIES &#9662;</button></div><div class="wldg" hidden></div><div class="wgrid"></div>';
    var ldg = p.querySelector(".wldg"), cur = null, nycRows = function () {
      var L = A().map(function (a, i) { return { n: a.who, i: i }; }).sort(function (x, y) { return x.n.localeCompare(y.n); });
      return '<div class="prl">' + L.map(function (x) { return '<button type="button" class="prr" data-nyc="' + x.i + '"><span class="prdot" style="background:#d62828"></span><span class="prn"><b>' + esc(x.n) + '</b></span><span class="st live">PLAY</span></button>'; }).join("") + '</div>';
    };
    p.querySelectorAll("[data-led]").forEach(function (b) { b.onclick = function () {
      var k = b.dataset.led; p.querySelectorAll("[data-led]").forEach(function (x) { x.classList.remove("on"); });
      if (cur === k) { cur = null; ldg.hidden = true; ldg.innerHTML = ""; return; }
      cur = k; b.classList.add("on"); ldg.hidden = false;
      if (k === "cities") {
        ldg.innerHTML = '<div class="dh">ALL CITIES</div><div class="prl">' + REGIONS.filter(function (r) { return !r.g; }).map(function (r) { var n = r.live ? nyc : gamesIn(r).length; return '<button type="button" class="prr" data-city="' + esc(r.n) + '"><span class="prdot" style="background:' + r.c + '"></span><span class="prn"><b>' + esc(r.n) + '</b></span><span class="st ' + (n ? "live" : "uc") + '">' + (n ? n + (n === 1 ? " GAME" : " GAMES") : "SOON") + '</span></button>'; }).join("") + '</div>';
      } else {
        var h = '<div class="dh">ALL GAMES</div><div class="lh"><b>NEW YORK CITY + METRO</b><em>' + nyc + '</em></div>' + nycRows();
        REGIONS.forEach(function (r) { if (r.g || r.live) return; var gs = gamesIn(r).slice().sort(); if (!gs.length) return; h += '<div class="lh"><b>' + esc(r.n) + '</b><em>' + gs.length + '</em></div>' + gameRows(gs, r.c); });
        ldg.innerHTML = h;
      }
      wireRows(ldg);
      ldg.querySelectorAll("[data-nyc]").forEach(function (x) { x.onclick = function () { var k2 = +x.dataset.nyc; go("map"); setTimeout(function () { try { openCard(k2); } catch (er) {} }, 80); }; });
      ldg.querySelectorAll("[data-city]").forEach(function (x) { x.onclick = function () {
        var nm = x.dataset.city; cur = null; ldg.hidden = true; ldg.innerHTML = ""; p.querySelectorAll("[data-led]").forEach(function (y) { y.classList.remove("on"); });
        var t = Array.prototype.slice.call(p.querySelectorAll(".wtile")).filter(function (y) { return y.querySelector("b").textContent === nm; })[0];
        if (t) { t.click(); try { t.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (er) {} }
      }; });
    }; });
    tileGrid(p, REGIONS.map(function (r) {
      if (r.g) return { sec: r.g, secN: secN[r.g] };
      if (r.live) return { n: r.n, c: r.c, wide: 1, badge: nyc ? nyc + " GAMES" : "LIVE", go: function () { go("map"); } };
      var games = gamesIn(r), wait = (r.coming || []).filter(rgIsRap).filter(function (n) { return !RG[n]; });
      return { n: r.n, c: r.c, badge: games.length ? games.length + (games.length === 1 ? " GAME" : " GAMES") : "",
        detail: function () {
          return '<div class="dh">' + esc(r.n) + '</div><div>' + esc(r.d) + '</div>' +
            (games.length ? gameRows(games, r.c) : '<div>Games coming soon.</div>') +
            (wait.length ? '<div>Coming: ' + wait.map(esc).join(", ") + '</div>' : '') +
            (r.locked ? '<div class="lk">&#128274; LOCKED IN: ' + r.locked.map(function (x) { return esc(x.who) + (x.ig ? ' <a href="https://www.instagram.com/' + encodeURIComponent(x.ig) + '/" target="_blank" rel="noopener" style="color:#e8b84a">@' + esc(x.ig) + '</a>' : ""); }).join(", ") + '</div>' : '');
        }, wire: wireRows };
    }));
  }



  /* front page helpers: game count per region, open one region, open the full games list */
  window.OGW.regionCounts = function () { var RG = window.OG_REGION_GAMES || {}; return REGIONS.filter(function (r) { return !r.g && !r.live; }).map(function (r) { return { n: r.n, c: r.c, k: (r.coming || []).filter(rgIsRap).filter(function (x) { return RG[x]; }).length }; }); };
  window.OGW.openRegion = function (nm) { go("regions"); setTimeout(function () { var t = Array.prototype.slice.call(panes.regions.querySelectorAll(".wtile")).filter(function (y) { return y.querySelector("b").textContent === nm; })[0]; if (t) { t.click(); try { t.scrollIntoView({ block: "start" }); } catch (e) {} } }, 40); };
  window.OGW.allGames = function () { go("regions"); setTimeout(function () { var b = panes.regions.querySelector('[data-led="games"]'); if (b) b.click(); }, 40); };

  /* ---------- PRODUCERS: the beatmakers, their own category (hip-hop only) ---------- */
  var PROD_TIERS = [["mainstream", "MAINSTREAM", "#e8b84a"], ["legend", "LEGENDS", "#d62828"], ["indie", "INDIE", "#35b867"]];
  function drawProducers() {
    var p = panes.producers, L = window.PRODUCERS || [];
    p.innerHTML = '<div class="wp-h"><div class="t">PRODUCERS</div><div class="s">TAP A LEVEL</div></div><div class="wgrid"></div>';
    tileGrid(p, PROD_TIERS.map(function (t) {
      var list = L.filter(function (x) { return x.tier === t[0]; }), live = list.filter(function (x) { return x.url; });
      return { n: t[1], c: t[2], wide: 1, badge: live.length ? live.length + (live.length === 1 ? " GAME" : " GAMES") : "",
        detail: function () {
          return '<div class="prl">' + list.map(function (x) { return '<button type="button" class="prr" data-p="' + esc(x.slug) + '"><span class="prdot" style="background:' + t[2] + '"></span><span class="prn"><b>' + esc(x.name) + '</b></span><span class="st ' + (x.url ? "live" : "uc") + '">' + (x.url ? (x.ex === 2 ? "PLAY 18+" : "PLAY") : "SOON") + '</span></button>'; }).join("") + '</div>';
        },
        wire: function (d) { d.querySelectorAll("[data-p]").forEach(function (b) { b.onclick = function (ev) { ev.stopPropagation(); var x = L.filter(function (y) { return y.slug === b.dataset.p; })[0]; if (!x || !x.url) return; rgPlay(x.name, { url: x.url.replace(/\?.*$/, ""), ex: x.ex }, d, b); }; }); } };
    }));
  }


  /* ---------- GENRES: beyond rap ---------- */
  var GENRES = [
    { n: "HIP-HOP + RAP", d: "Every game on the map right now.", c: "#d62828", live: 1, wide: 1 },
    { n: "FEMALE RAPPERS", d: "Every woman in rap on the app.", c: "#e84aa0", women: 1, wide: 1 },
    { n: "R&B", d: "Singers and songwriters.", c: "#7b3fbf" },
    { n: "LATIN + REGGAETON", d: "Reggaeton, Latin trap, salsa and bachata.", c: "#ff6319" },
    { n: "DANCEHALL + AFROBEATS", d: "Island and African sounds.", c: "#35b867" },
    { n: "POP", d: "The hits.", c: "#e84aa0" },
    { n: "ROCK", d: "Rock, punk and metal.", c: "#e04e1b" },
    { n: "COUNTRY", d: "Country and Americana.", c: "#b5651d" },
    { n: "GOSPEL", d: "Gospel and Christian.", c: "#f2c14e" },
    { n: "DANCE + HOUSE", d: "House, EDM and club.", c: "#0099d8" }
  ];
  function drawGenres() {
    var p = panes.genres, RG = window.OG_REGION_GAMES || {}, GO = window.OG_GENRE_OF || {};
    var gamesOf = function (g) { return Object.keys(GO).filter(function (n) { return GO[n] === g.n && RG[n]; }); };
    p.innerHTML = '<div class="wp-h"><div class="t">OTHER GENRES</div><div class="s">TAP A GENRE</div></div><div class="wgrid"></div>';
    tileGrid(p, GENRES.map(function (g) {
      if (g.live) return { n: g.n, c: g.c, wide: 1, badge: "LIVE", go: function () { go("map"); } };
      if (g.women) return { n: g.n, c: g.c, wide: 1, badge: "&#128081;", go: function () { go("women"); } };
      var games = gamesOf(g);
      return { n: g.n, c: g.c, badge: games.length ? games.length + (games.length === 1 ? " GAME" : " GAMES") : "",
        detail: function () { return '<div class="dh">' + esc(g.n) + '</div><div>' + esc(g.d) + '</div>' + (games.length ? gameRows(games, g.c) : '<div>Games coming soon.</div>'); },
        wire: wireRows };
    }));
  }




  /* ---------- FEMALE RAPPERS: every woman on the map or in a region, sorted by where she's from ---------- */
  var WOMEN = ["Remy Ma", "Ice Spice", "Cardi B", "Rah Digga", "Queen Latifah", "Princess Nokia", "Azealia Banks", "Melii", "MC Lyte", "Roxanne Shant\u00e9", "HeeSun Lee", "Hanifah Walidah", "Lauryn Hill", "Coi Leray", "Justina Valentine", "Leikeli47", "Nitty Scott", "Salt-N-Pepa", "Sha-Rock", "Jean Grae", "Lil Mama", "Lil' Kim", "Young M.A", "Foxy Brown", "Nicki Minaj", "Lola Brooke", "Queen Pen", "Junglepussy", "Heather B.", "Hurricane G", "Monie Love", "Sweet Tee", "Lady London",
    "Tierra Whack", "Eve", "Bahamadia", "Lay Bankz", "Noname", "Rapsody", "Dessa", "Tink", "Kamaiyah", "Reverie", "Rocky Rivera", "Sammus", "Akua Naru", "Rico Nasty", "Baby Tate", "Dutch ReBelle", "Monaleo", "Da Brat", "GloRilla", "Megan Thee Stallion", "Saweetie", "Kash Doll", "Trina", "Latto", "Missy Elliott", "Mia X", "Ché Noir", "DeJ Loaf", "City Girls", "Flo Milli", "Kodie Shane", "Ms. Jade", "Maiya the Don", "Shawnna", "Erica Banks", "Doechii", "Snow Tha Product", "Asian Doll", "Dreezy", "Doja Cat", "The Lady of Rage", "Yo-Yo", "Destiny's Child", "Toni Braxton", "Jennifer Hudson", "Anita Baker", "En Vogue", "TLC", "Monica", "Ciara", "Aretha Franklin", "Brandy", "Teena Marie", "Gladys Knight", "India.Arie"];
  function drawWomen() {
    var p = panes.women, RG = window.OG_REGION_GAMES || {}, L = A(), C = "#e84aa0";
    var groups = [], idx = {};
    var add = function (area, color, item) { if (!idx[area]) { idx[area] = { n: area, c: color, list: [] }; groups.push(idx[area]); } idx[area].list.push(item); };
    var BOROS = ["Brooklyn", "Queens", "the Bronx", "Manhattan", "Staten Island", "Long Island", "Westchester", "New Jersey"];
    BOROS.forEach(function (b) { L.forEach(function (a, k) { if (WOMEN.indexOf(a.who) >= 0 && boroOf(a) === b) add(b === "the Bronx" ? "The Bronx" : b, BORO_C[b] || C, { who: a.who, k: k }); }); });
    REGIONS.forEach(function (r) { (r.coming || []).forEach(function (n) { if (WOMEN.indexOf(n) >= 0 && RG[n]) add(r.n, r.c, { who: n, rg: 1 }); }); });
    var total = groups.reduce(function (t, g) { return t + g.list.length; }, 0);
    p.innerHTML = '<div class="wp-h"><div class="t">FEMALE RAPPERS</div><div class="s">' + total + ' QUEENS · TAP WHERE SHE\'S FROM</div></div><div class="wgrid"></div>';
    tileGrid(p, groups.map(function (g) {
      return { n: g.n.toUpperCase(), c: g.c, badge: g.list.length + (g.list.length === 1 ? " GAME" : " GAMES"),
        detail: function () { return '<div class="prl">' + g.list.map(function (x, i) { var e = x.rg ? RG[x.who] : L[x.k]; return '<button type="button" class="prr" data-wi="' + i + '"><span class="prdot" style="background:' + g.c + '"></span><span class="prn"><b>' + esc(x.who) + '</b></span><span class="st live">' + (e && e.ex === 2 ? "PLAY 18+" : "PLAY") + '</span></button>'; }).join("") + '</div>'; },
        wire: function (d) { d.querySelectorAll("[data-wi]").forEach(function (b) { b.onclick = function (ev) { ev.stopPropagation(); var x = g.list[+b.dataset.wi];
          if (x.rg) return rgPlay(x.who, RG[x.who], d, b);
          go("map"); setTimeout(function () { try { openCard(x.k); } catch (er) {} }, 80); }; }); } };
    }));
  }

  /* ---------- REST IN POWER: the legends we lost, their own category ---------- */
  var RIP = [
    { who: "MF DOOM", d: "All caps when you spell the man name. Long Island's villain.", home: "Long Beach, Long Island" },
    { who: "Sean Price", d: "Ruck from Heltah Skeltah. Brownsville's funniest killer bars.", home: "Brownsville, Brooklyn" },
    { who: "Tame One", d: "The Artifacts. Brick City graffiti and bars.", home: "Newark, New Jersey" },
    { who: "Chino XL", d: "Punchline king. Bronx-born, East Orange raised.", home: "East Orange, New Jersey" },
    { who: "Eyedea", d: "Battle champ and freestyle genius. Rhymesayers.", home: "St. Paul, Minnesota", rg: 1 },
    { who: "Gift of Gab", d: "Blackalicious. The fastest, smoothest tongue in the Bay.", home: "Sacramento, Northern California", rg: 1 },
    { who: "The Notorious B.I.G.", d: "From St James Pl to King of New York.", home: "Clinton Hill, Brooklyn" },
    { who: "Big L", d: "Harlem's Finest from the Danger Zone on Lenox Av.", home: "Harlem, Manhattan" },
    { who: "DMX", d: "The Dog from School Street who made Yonkers bark.", home: "Yonkers, Westchester" },
    { who: "Heavy D", d: "The Overweight Lover from Money Earnin' Mount Vernon.", home: "Mount Vernon, Westchester" },
    { who: "Big Pun", d: "Soundview's Puerto Rock, the Dream Shatterer.", home: "Soundview, the Bronx" },
    { who: "Prodigy", d: "Mobb Deep. The 41st Side, Prodigy Way.", home: "Queensbridge, Queens" },
    { who: "Pop Smoke", d: "The Woo from Canarsie who took Brooklyn drill worldwide.", home: "Canarsie, Brooklyn" },
    { who: "Ol' Dirty Bastard", d: "Wu-Tang's wild card. Brooklyn Zoo to ODB Jones Way.", home: "Fort Greene / Bed-Stuy, Brooklyn" },
    { who: "Black Rob", d: "Bad Boy from East Harlem. Like whoa.", home: "East Harlem, Manhattan" },
    { who: "Guru", d: "The voice of Gang Starr and Jazzmatazz. Roxbury to Fort Greene.", home: "Fort Greene, Brooklyn" },
    { who: "Craig Mack", d: "The brand new flava from Brentwood who kicked off Bad Boy.", home: "Brentwood, Long Island" },
    { who: "Chinx", d: "Far Rock's own, Riot Squad to Coke Boys. Welcome to JFK.", home: "Far Rockaway, Queens" },
    { who: "Biz Markie", d: "The Clown Prince of hip-hop. Make the music with your mouth.", home: "Patchogue, Long Island" },
    { who: "Lil Peep", d: "Long Beach's emo-rap star. Star shopping forever.", home: "Long Beach, Long Island" },
    { who: "Phife Dawg", d: "The Five-Foot Assassin. A Tribe Called Quest, Linden Blvd.", home: "St. Albans, Queens" },
    { who: "Grand Daddy I.U.", d: "Cold Chillin' smooth talker in a suit and tie.", home: "Hempstead, Long Island" },
    { who: "Pumpkinhead", d: "Park Slope battle legend. Robert PH Diaz Way on Degraw St.", home: "Park Slope, Brooklyn" },
    { who: "Hurricane G", d: "Hit Squad's Boricua queen from Brooklyn. Neva give up.", home: "Brooklyn" },
    { who: "Capital STEEZ", d: "Pro Era co-founder from Flatbush. Free the robots.", home: "Flatbush, Brooklyn" },
    { who: "Rob Base & DJ E-Z Rock", d: "It Takes Two. Harlem's party-rap legends, both gone too soon.", home: "Harlem, Manhattan" }
  ];
  function drawRip() {
    var p = panes.rip, RG = window.OG_REGION_GAMES || {};
    p.innerHTML = '<div class="wp-h"><div class="t">REST IN POWER</div><div class="s">THEIR MUSIC LIVES ON</div></div>' +
      '<div class="prh" style="border-color:#e8b84a"><b>&#128330; LEGENDS</b><span>' + RIP.length + '</span></div>' +
      '<div class="prl">' + RIP.map(function (x, i) { return '<button type="button" class="prr" data-rip="' + i + '"><span class="prdot" style="background:#e8b84a"></span><span class="prn"><b>' + esc(x.who) + '</b></span><span class="st live">PLAY</span></button>'; }).join("") + '</div>' +
      '<div class="wmsg" id="ripMsg"></div>';
    p.onclick = function (e) {
      var b = e.target.closest("[data-rip]"); if (!b) return; var x = RIP[+b.dataset.rip];
      if (x.rg) { var g = RG[x.who]; if (!g) return; rgPlay(x.who, g, p, b); return; }
      var L = A(), k = -1; for (var j = 0; j < L.length; j++) if (L[j].who === x.who) { k = j; break; }
      if (k < 0) return; go("map"); setTimeout(function () { try { openCard(k); } catch (er) {} }, 80);
    };
  }
})();
