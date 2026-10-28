// Cuántas frases tiene cada tema (base + extra) y sus textos: node counts.js <repo> > counts.json
const repo = process.argv[2];
global.window = {};
for (const f of ["k","n0","n1","n2","w","n3","n4","n5","n6"]) require(repo + "/content/" + f + ".js");
for (const f of ["k","n0","n1","n2","w","n3","n4","n5","n6"]) require(repo + "/content/x-" + f + ".js");
const out = {};
for (const lv of window.COURSE) for (const u of lv.units) { const cards = u.c.concat((window.EXTRA[u.id] && window.EXTRA[u.id].v) || []); out[u.id] = { lv: lv.id, t: u.t, n: cards.length, en: cards.map(c => c[1]) }; }
console.log(JSON.stringify(out));
