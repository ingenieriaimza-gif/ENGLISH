// Las frases de cada tema (en orden del curso), para exp/gen.py: node exp/phr.js <repo> [full]
// full: también la conversación (d) y la lectura (r) tal como quedaron, para comprobar lo escrito
const repo = process.argv[2], full = process.argv[3] === "full";
global.window = {};
for (const f of ["k","n0","n1","n2","w","n3","n4","n5","n6"]) require(repo + "/content/" + f + ".js");
for (const f of ["k","n0","n1","n2","w","n3","n4","n5","n6"]) require(repo + "/content/x-" + f + ".js");
const clean = s => String(s).replace(/^(?:\p{Extended_Pictographic}|️|‍|\s)+/u, "");
const out = {};
for (const lv of window.COURSE) for (const u of lv.units) {
  const c = u.c.concat((window.EXTRA[u.id] && window.EXTRA[u.id].v) || []);
  out[u.id] = { lv: lv.id, t: u.t, en: c.map(x => x[1]), es: c.map(x => clean(x[0])) };
  if (full) { out[u.id].d = u.d; out[u.id].r = (window.EXTRA[u.id] || {}).r || {}; }
}
console.log(JSON.stringify(out));
