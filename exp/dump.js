// Lo que hace falta para escribir la experiencia completa de unos temas: node exp/dump.js k3 k4 …  (o una etapa: node exp/dump.js k)
const repo = require("path").resolve(__dirname, "..");
global.window = {};
for (const f of ["k","n0","n1","n2","w","n3","n4","n5","n6"]) require(repo + "/content/" + f + ".js");
for (const f of ["k","n0","n1","n2","w","n3","n4","n5","n6"]) require(repo + "/content/x-" + f + ".js");
require(repo + "/content/lessons.js");
const X = window.EXTRA, L = window.LESSONS, arg = process.argv.slice(2);
const units = window.COURSE.flatMap(lv => lv.units.map(u => Object.assign(u, { lv: lv.id })));
const pick = units.filter(u => arg.includes(u.id) || arg.includes(u.lv));
const clean = s => String(s).replace(/^(?:\p{Extended_Pictographic}|️|‍|\s)+/u, "");
for (const u of pick) {
  const c = u.c.concat((X[u.id] && X[u.id].v) || []), r = (X[u.id] || {}).r;
  console.log(`\n# ${u.id} · ${u.t} — ${u.goal}`);
  console.log("frases: " + c.map((x, i) => `${i} ${x[1]} = ${clean(x[0])}`).join(" · "));
  (L[u.id] || []).forEach((l, i) => console.log(`clase ${i}: ${l.g} — ${l.s}`));
  console.log("lectura actual: " + (r ? `${r.t} (${r.en.split(/\s+/).length} palabras)` : "—"));
}
