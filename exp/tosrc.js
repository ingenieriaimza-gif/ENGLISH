// La conversación y la lectura de unos temas tal como están, en el formato de exp/src (para revisarlas o pasarlas allá):
// node exp/tosrc.js k8 n1u6
const repo = require("path").resolve(__dirname, "..");
global.window = {};
for (const f of ["k","n0","n1","n2","w","n3","n4","n5","n6"]) require(repo + "/content/" + f + ".js");
for (const f of ["k","n0","n1","n2","w","n3","n4","n5","n6"]) require(repo + "/content/x-" + f + ".js");
const units = window.COURSE.flatMap(lv => lv.units);
for (const id of process.argv.slice(2)) {
  const u = units.find(x => x.id === id), r = (window.EXTRA[id] || {}).r;
  console.log("# " + id);
  for (const l of u.d) console.log(l[0] === "@" ? "@ " + l[1] : `${l[0]}: ${l[1]} | ${l[2]}`);
  if (r) {
    console.log("== " + r.t);
    const en = r.en.split("\n"), es = r.es.split("\n");
    en.forEach((p, i) => { console.log("en: " + p); console.log("es: " + es[i]); });
    for (const q of r.q) console.log("? " + q[0] + " | " + q[1].map((o, i) => (i === q[2] ? "*" : "") + o).join(" | "));
  }
  console.log("");
}
