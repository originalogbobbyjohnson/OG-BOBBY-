/* © OG Bobby / OG FAN 99. Small online database for the Riders Board and artist door claims (Firebase Firestore). */
(function () {
  /* paste the web config from the Firebase console here (it is safe to be public; the database rules protect the data) */
  var CFG = null;
  var V = "10.12.2", P = null;
  function load(src) { return new Promise(function (ok, no) { var s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); }); }
  function db() {
    if (!CFG) return Promise.reject(new Error("not set up yet"));
    if (!P) P = load("https://www.gstatic.com/firebasejs/" + V + "/firebase-app-compat.js")
      .then(function () { return load("https://www.gstatic.com/firebasejs/" + V + "/firebase-firestore-compat.js"); })
      .then(function () { if (!firebase.apps.length) firebase.initializeApp(CFG); return firebase.firestore(); });
    return P;
  }
  var now = function () { return firebase.firestore.FieldValue.serverTimestamp(); };
  window.OGFB = {
    ready: function () { return !!CFG; },
    submitClaim: function (c) { return db().then(function (d) { return d.collection("claims").add({ artist: c.artist, name: c.name, role: c.role, ig: c.ig, email: c.email, phone: c.phone, note: c.note, t: now() }); }); },
    saveRider: function (id, name, pts, rank) { return db().then(function (d) { return d.collection("riders").doc(id).set({ name: name, pts: pts, rank: rank, t: now() }); }); },
    topRiders: function (n) { return db().then(function (d) { return d.collection("riders").orderBy("pts", "desc").limit(n || 20).get(); }).then(function (q) { var out = []; q.forEach(function (x) { var v = x.data(); out.push({ id: x.id, name: v.name, pts: v.pts, rank: v.rank }); }); return out; }); }
  };
})();
