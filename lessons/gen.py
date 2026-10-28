# Arma content/lessons.js a partir de lessons/src/*.txt (las clases de cada tema: meta, frases, escena y misión)
#   # tema            empieza un tema
#   = Meta | 0-8 12   una clase: su meta (empieza con verbo) y sus frases (números de frase del tema, rangos a-b)
#   @ escena          la escena de la misión (en español)
#   A: inglés | español   lo que te dicen
#   B: 3              lo que contestas: la frase número 3 del tema (de esta clase o de una anterior)
import sys, os, re, json, glob, subprocess
HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(sys.argv[1]) if len(sys.argv) > 1 else os.path.dirname(HERE)
counts = json.loads(subprocess.check_output(["node", os.path.join(HERE, "counts.js"), REPO]))
def nums(s):
    out = []
    for p in re.split(r"[\s,]+", s.strip()):
        if not p: continue
        if "-" in p: a, b = p.split("-"); out += list(range(int(a), int(b) + 1))
        else: out.append(int(p))
    return out
L, errs, warns = {}, [], []
for f in sorted(glob.glob(os.path.join(HERE, "src", "*.txt"))):
    uid = None
    for ln, raw in enumerate(open(f, encoding="utf-8"), 1):
        line = raw.strip()
        if not line or line.startswith("//"): continue
        where = f"{os.path.basename(f)}:{ln}"
        if line.startswith("#"):
            uid = line[1:].strip().split()[0]
            if uid not in counts: errs.append(f"{where}: no existe el tema {uid}"); uid = None; continue
            if uid in L: errs.append(f"{where}: {uid} repetido")
            L[uid] = []; continue
        if uid is None: errs.append(f"{where}: línea fuera de un tema"); continue
        if line.startswith("="):
            g, _, cs = line[1:].partition("|")
            L[uid].append({"g": g.strip(), "c": nums(cs), "m": [], "s": ""}); continue
        if not L[uid]: errs.append(f"{where}: falta la línea «= meta | frases»"); continue
        les = L[uid][-1]
        if line.startswith("@"): les["s"] = line[1:].strip()
        elif line.startswith("A:"):
            en, _, es = line[2:].partition("|")
            if not es.strip(): errs.append(f"{where}: A sin español")
            les["m"].append(["A", en.strip(), es.strip()])
        elif line.startswith("B:"): les["m"].append(["B", int(line[2:].strip())])
        else: errs.append(f"{where}: no entiendo «{line}»")
# validar
for uid, ls in L.items():
    n, en = counts[uid]["n"], counts[uid]["en"]
    seen = {}
    for i, l in enumerate(ls):
        g = l["g"]
        if not g or g.endswith(".") or not g[0].isupper() or len(g) > 60: errs.append(f"{uid}.{i}: meta rara «{g}»")
        if not re.match(r"^[A-ZÁÉÍÓÚ][a-záéíóúñ]*(ar|er|ir|ír)(se|te|le|les|lo|la|los|las)?\b", g): warns.append(f"{uid}.{i}: la meta no empieza con verbo: «{g}»")
        for k in l["c"]:
            if k < 0 or k >= n: errs.append(f"{uid}.{i}: la frase {k} no existe (hay {n})")
            elif k in seen: errs.append(f"{uid}.{i}: la frase {k} ya está en la clase {seen[k]}")
            else: seen[k] = i
        bs = [x[1] for x in l["m"] if x[0] == "B"]
        if len(bs) < 3: warns.append(f"{uid}.{i}: la misión tiene {len(bs)} respuestas")
        for b in bs:
            if b not in seen or seen[b] > i: errs.append(f"{uid}.{i}: la respuesta B {b} no es de esta clase ni de una anterior")
        if len(l["c"]) < 5 or len(l["c"]) > 15: warns.append(f"{uid}.{i}: {len(l['c'])} frases")
    miss = [k for k in range(n) if k not in seen]
    if miss: errs.append(f"{uid}: faltan las frases {miss}")
for w in warns: print("aviso:", w)
if errs:
    print("\n".join("ERROR: " + e for e in errs)); sys.exit(1)
out = os.path.join(REPO, "content", "lessons.js")
body = ",\n".join(f'"{u}":' + json.dumps([{k: v for k, v in l.items() if v != ""} for l in ls], ensure_ascii=False, separators=(",", ":")) for u, ls in L.items())
open(out, "w", encoding="utf-8").write("// Las clases de cada tema: meta (g), frases (c), escena (s) y misión (m). Se arma con lessons/gen.py\nwindow.LESSONS = {\n" + body + "\n};\n")
tot = sum(len(ls) for ls in L.values())
print(f"OK: {len(L)} temas, {tot} clases → {out} ({os.path.getsize(out) // 1024} KB)")
for st in ["k", "n0", "n1", "n2", "w", "n3", "n4", "n5", "n6"]:
    us = [u for u in counts if counts[u]["lv"] == st]
    print(f"  {st}: {sum(1 for u in us if u in L)}/{len(us)} temas con clases")
