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
  var AUTH = null;
  function auth() {
    if (!AUTH) AUTH = db().then(function () { return load("https://www.gstatic.com/firebasejs/" + V + "/firebase-auth-compat.js"); }).then(function () { return firebase.auth(); });
    return AUTH;
  }
  var pair = function (a, b) { return a < b ? a + "_" + b : b + "_" + a; };
  var uid = function () { return firebase.auth().currentUser && firebase.auth().currentUser.uid; };
  var rows = function (q) { var out = []; q.forEach(function (x) { var v = x.data(); v.id = x.id; out.push(v); }); return out; };
  /* the social side: artists (and later fans) sign in, OG Bobby approves them, then friend requests and one-on-one chats */
  var social = {
    signIn: function () { return auth().then(function (a) { return a.signInWithPopup(new firebase.auth.GoogleAuthProvider()); }); },
    signOut: function () { return auth().then(function (a) { return a.signOut(); }); },
    onUser: function (cb) { return auth().then(function (a) { return a.onAuthStateChanged(cb); }); },
    me: function () { return auth().then(function () { var u = uid(); if (!u) return null; return firebase.firestore().collection("members").doc(u).get().then(function (d) { return d.exists ? Object.assign({ id: u }, d.data()) : { id: u, none: true }; }); }); },
    join: function (kind, name, door, adult) { return auth().then(function () { return firebase.firestore().collection("members").doc(uid()).set({ kind: kind, name: String(name).slice(0, 40), door: String(door || "").slice(0, 60), approved: false, adult: !!adult, t: now() }); }); },
    member: function (id) { return db().then(function (d) { return d.collection("members").doc(id).get(); }).then(function (x) { return x.exists ? Object.assign({ id: x.id }, x.data()) : null; }); },
    certsMine: function () { return auth().then(function () { var me = uid(); if (!me) return []; return firebase.firestore().collection("certs").where("fan", "==", me).limit(500).get().then(rows); }); },
    members: function (kind) { return db().then(function (d) { return d.collection("members").where("approved", "==", true).where("kind", "==", kind).limit(500).get(); }).then(rows); },
    pending: function () { return db().then(function (d) { return d.collection("members").where("approved", "==", false).limit(100).get(); }).then(rows); },
    claims: function () { return db().then(function (d) { return d.collection("claims").orderBy("t", "desc").limit(100).get(); }).then(rows); },
    approve: function (id, yes) { return db().then(function (d) { return d.collection("members").doc(id).update({ approved: !!yes }); }); },
    request: function (to) { var me = uid(); return db().then(function (d) { return d.collection("requests").doc(me + "_" + to).set({ from: me, to: to, status: "pending", t: now() }); }); },
    incoming: function () { return db().then(function (d) { return d.collection("requests").where("to", "==", uid()).where("status", "==", "pending").get(); }).then(rows); },
    respond: function (id, yes) { return db().then(function (d) { return d.collection("requests").doc(id).update({ status: yes ? "accepted" : "declined" }); }); },
    friends: function () { var me = uid(); return db().then(function (d) { return Promise.all([d.collection("requests").where("from", "==", me).where("status", "==", "accepted").get(), d.collection("requests").where("to", "==", me).where("status", "==", "accepted").get()]); }).then(function (r) { return rows(r[0]).map(function (x) { return x.to; }).concat(rows(r[1]).map(function (x) { return x.from; })); }); },
    send: function (to, text) { var me = uid(), id = pair(me, to); return db().then(function (d) { return d.collection("chats").doc(id).collection("msgs").add({ from: me, text: String(text).slice(0, 1000), t: now() }); }); },
    listen: function (to, cb) { var id = pair(uid(), to); return db().then(function (d) { return d.collection("chats").doc(id).collection("msgs").orderBy("t").limitToLast(200).onSnapshot(function (q) { cb(rows(q)); }); }); },
    /* fans: a perfect game certifies you for that artist; certified 18+ fans may send that artist one short note a week */
    certify: function (artist) { var me = uid(); return db().then(function (d) { return d.collection("certs").doc(me + "_" + String(artist).replace(/[^A-Za-z0-9]/g, "")).set({ fan: me, artist: String(artist).slice(0, 60), t: now() }); }); },
    certFans: function (artist) { return db().then(function (d) { return d.collection("certs").where("artist", "==", artist).limit(500).get(); }).then(rows); },
    note: function (artistUid, artist, text) { var me = uid(), wk = Math.floor(Date.now() / 6048e5); return db().then(function (d) { return d.collection("notes").doc(me + "_" + artistUid + "_" + wk).set({ fan: me, to: artistUid, artist: String(artist).slice(0, 60), text: String(text).slice(0, 280), wk: wk, t: now() }); }); },
    notes: function () { return db().then(function (d) { return d.collection("notes").where("to", "==", uid()).limit(100).get(); }).then(rows); },
    block: function (who) { return db().then(function (d) { return d.collection("members").doc(uid()).collection("blocked").doc(String(who)).set({ t: now() }); }); },
    report: function (who) { return db().then(function (d) { return d.collection("reports").add({ by: uid(), about: String(who).slice(0, 80), t: now() }); }); }
  };
  window.OGFB = {
    social: social,
    ready: function () { return !!CFG; },
    submitClaim: function (c) { return db().then(function (d) { return d.collection("claims").add({ artist: c.artist, name: c.name, role: c.role, ig: c.ig, email: c.email, phone: c.phone, note: c.note, t: now() }); }); },
    saveRider: function (id, name, pts, rank) { return db().then(function (d) { return d.collection("riders").doc(id).set({ name: name, pts: pts, rank: rank, t: now() }); }); },
    topRiders: function (n) { return db().then(function (d) { return d.collection("riders").orderBy("pts", "desc").limit(n || 20).get(); }).then(function (q) { var out = []; q.forEach(function (x) { var v = x.data(); out.push({ id: x.id, name: v.name, pts: v.pts, rank: v.rank }); }); return out; }); }
  };
})();
