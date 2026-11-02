# La conversación (d) y la lectura (r) de cada tema como una experiencia completa: exp/src/*.txt → content/*.js y content/x-*.js
# Pedido de la persona (30 de octubre de 2026): «que las conversaciones y lecturas sean un poco más completas, por ejemplo vas
# a un restaurante y vives la experiencia completa… así con cada una de las prácticas, para poner todo lo que aprendes en práctica».
#   # k8                 empieza un tema
#   @ escena             la situación de lo que sigue, en español (se ve arriba de su primera línea)
#   A: inglés | español  lo que te dicen
#   B: inglés | español  lo que dices tú: una frase del tema (o de un tema anterior), o una que la contiene («Yes, we're ready to order.»)
#   B: 12                lo mismo, con la frase número 12 del tema
#   == Título            la lectura: su título,
#   en: párrafo          sus párrafos en inglés y en español (uno y uno, en el mismo orden)
#   es: párrafo
#   ? pregunta | opción | *la correcta | opción
# Revisa todo y escribe solo si no hay errores. Uso: python3 exp/gen.py [k n0 …] (sin nada: todas las etapas) [--check: solo revisar]
import sys, os, re, json, glob, subprocess
HERE = os.path.dirname(os.path.abspath(__file__)); REPO = os.path.dirname(HERE)
P = json.loads(subprocess.check_output(["node", os.path.join(HERE, "phr.js"), REPO]))
ORDER = list(P.keys())
only = [a for a in sys.argv[1:] if not a.startswith("--")]
CHECK = "--check" in sys.argv  # solo revisar, sin escribir
GLUE = set("yes no please and or the a an my oh ha hmm hi hello okay ok wow too gmail com everything everybody mr mrs ms st nd rd th".split())
def stems(w):
    out = []
    if w.endswith("ing") and len(w) > 5: out += [w[:-3], w[:-3] + "e"] + ([w[:-4]] if w[-4] == w[-5] else [])
    if w.endswith("ed") and len(w) > 4: out += [w[:-2], w[:-1]] + ([w[:-3]] if w[-3] == w[-4] else [])
    if w.endswith("ies") or w.endswith("ied"): out.append(w[:-3] + "y")
    if w.endswith("s") and not w.endswith("ss"): out.append(w[:-1])
    return out
def toks(s):
    s = re.sub(r"\{(?:name|last|nameS|lastS|email)\|[^}]*\}", " ", s).lower().replace("’", "'")
    return [w.strip("'") for w in re.findall(r"[a-z']+", re.sub(r"\([^)]*\)", " ", s)) if w.strip("'")]
def norm(s):
    s = re.sub(r"\{(?:name|last|nameS|lastS|email)\|([^}]*)\}", r"\1", s)
    s = s.lower().replace("’", "'").replace("`", "'")
    s = re.sub(r"\([^)]*\)", " ", s)
    return " " + re.sub(r"\s+", " ", re.sub(r"[^a-z0-9' ]", " ", s)).strip() + " "
SEP = re.compile(r"\s\|\s")  # « | » con espacios: el | de {name|Ana} no separa
T, errs, warns = {}, [], []
for f in sorted(glob.glob(os.path.join(HERE, "src", "*.txt"))):
    uid = None
    for ln, raw in enumerate(open(f, encoding="utf-8"), 1):
        line = raw.strip()
        if not line or line.startswith("//"): continue
        where = f"{os.path.basename(f)}:{ln}"
        if line.startswith("# "):
            uid = line[2:].strip().split()[0]
            if uid not in P: errs.append(f"{where}: no existe el tema {uid}"); uid = None; continue
            if uid in T: errs.append(f"{where}: {uid} repetido")
            T[uid] = {"d": [], "t": "", "en": [], "es": [], "q": [], "where": where}; continue
        if uid is None: errs.append(f"{where}: línea fuera de un tema"); continue
        t = T[uid]
        if line.startswith("@"): t["d"].append(["@", line[1:].strip()])
        elif line.startswith("A:") or line.startswith("B:"):
            who, rest = line[0], line[2:].strip()
            if who == "B" and re.fullmatch(r"\d+", rest):
                k = int(rest)
                if k >= len(P[uid]["en"]): errs.append(f"{where}: la frase {k} no existe"); continue
                t["d"].append(["B", P[uid]["en"][k], P[uid]["es"][k]]); continue
            parts = SEP.split(rest)
            if len(parts) != 2 or not parts[1].strip(): errs.append(f"{where}: {who} necesita «inglés | español»"); continue
            t["d"].append([who, parts[0].strip(), parts[1].strip()])
        elif line.startswith("=="): t["t"] = line[2:].strip()
        elif line.startswith("en:"): t["en"].append(line[3:].strip())
        elif line.startswith("es:"): t["es"].append(line[3:].strip())
        elif line.startswith("?"):
            parts = [x.strip() for x in SEP.split(line[1:])]
            q, opts = parts[0], parts[1:]
            ok = [i for i, o in enumerate(opts) if o.startswith("*")]
            if len(ok) != 1 or len(opts) < 3: errs.append(f"{where}: la pregunta necesita 3+ opciones y una sola correcta (*)")
            t["q"].append([q, [o.lstrip("*").strip() for o in opts], ok[0] if ok else 0])
        else: errs.append(f"{where}: no entiendo «{line}»")
# revisar
for uid, t in T.items():
    if only and P[uid]["lv"] not in only and uid not in only: continue
    i0 = ORDER.index(uid)
    mine = [norm(x) for x in P[uid]["en"]]
    before = set(norm(x) for u in ORDER[:i0] for x in P[u]["en"])
    d = t["d"]; lines = [l for l in d if l[0] != "@"]
    B = [l for l in lines if l[0] == "B"]
    if sum(1 for l in d if l[0] == "@") < 2: errs.append(f"{uid}: menos de 2 escenas")
    if d and d[0][0] != "@": errs.append(f"{uid}: debe empezar con una escena (@)")
    if len(B) < 6: warns.append(f"{uid}: solo {len(B)} líneas tuyas")
    for a, b in zip(lines, lines[1:]):
        if a[0] == b[0] == "B": warns.append(f"{uid}: dos líneas tuyas seguidas: «{a[1]}» / «{b[1]}»")
    # también los nombres de las escenas («tu prima Laura») y lo que te acaban de decir (se ve arriba de tu turno)
    known = GLUE | set(w for u in ORDER[:i0 + 1] for x in P[u]["en"] for w in toks(x)) | set(w for l in d if l[0] == "@" for w in toks(l[1]))
    known |= set(b for w in list(known) for b in stems(w))  # «copying» ya enseña «copy»
    # una forma de una palabra que ya conoces también cuenta: plural, 's, -ed, -ing (arrived, stopped, studied, cooking)
    def knows(w, extra):
        extra = extra | set(x[:-1] for x in extra if x.endswith("s"))  # te dijeron «flights»: «flight» también
        if w in known or w in extra: return True
        bases = [w.split("'")[0] if re.search(r"'(re|ll|ve|d|m)$", w) else "", w[:-2] if w.endswith("'s") else "", w[:-1] if w.endswith("s") else "", w[:-2] if w.endswith("es") else "",
                 w[:-3] + "y" if w.endswith("ies") or w.endswith("ied") else "", w[:-2] if w.endswith("ed") else "", w[:-1] if w.endswith("ed") else "",
                 w[:-3] if w.endswith("ed") and len(w) > 4 and w[-3] == w[-4] else "", w[:-3] if w.endswith("ing") else "", w[:-3] + "e" if w.endswith("ing") else "",
                 w[:-4] if w.endswith("ing") and len(w) > 5 and w[-4] == w[-5] else "", w[:-2] if w.endswith("er") else "", w[:-3] if w.endswith("est") else ""]
        return any(b and (b in known or b in extra) for b in bases)
    for k, l in enumerate(lines):
        if l[0] != "B": continue
        prev = set(toks(lines[k - 1][1])) if k and lines[k - 1][0] == "A" else set()
        prev |= set(toks(l[2]))  # nombres que van igual en español (Manhattan, Marta)
        new = [w for w in toks(l[1]) if not knows(w, prev)]
        if new: warns.append(f"{uid}: «{l[1]}» tiene palabras que aún no conoces: {', '.join(new)}")
    said = [m for m in mine if any(m in norm(l[1]) for l in B)]
    sent = [m for m in mine if len(m.split()) >= 3]
    t["cov"] = f"{len(said)}/{len(mine)} frases ({sum(1 for m in sent if m in said)}/{len(sent)} de las de 3+ palabras)"
    if not t["t"] or not t["en"] or len(t["en"]) != len(t["es"]): errs.append(f"{uid}: la lectura necesita título y párrafos en inglés y en español (iguales)")
    if len(t["q"]) < 3: errs.append(f"{uid}: la lectura necesita 3+ preguntas")
for w in warns: print("aviso:", w)
if errs: print("\n".join("ERROR: " + e for e in errs)); sys.exit(1)
if CHECK:
    for uid, t in T.items():
        if not only or P[uid]["lv"] in only or uid in only:
            nb = sum(1 for l in t["d"] if l[0] == "B"); ns = sum(1 for l in t["d"] if l[0] == "@")
            print(f"  {uid}: {ns} escenas, {nb} tuyas, {t['cov']} · lectura {len(' '.join(t['en']).split())} palabras, {len(t['q'])} preguntas")
    print("revisado (sin escribir)"); sys.exit(0)
# escribir: la conversación en content/<etapa>.js y la lectura en content/x-<etapa>.js
def jd(x): return json.dumps(x, ensure_ascii=False)
done = 0
for uid, t in T.items():
    lv = P[uid]["lv"]
    if only and lv not in only and uid not in only: continue
    fa = os.path.join(REPO, "content", lv + ".js"); s = open(fa, encoding="utf-8").read()
    a = s.find(f'id: "{uid}"'); b = s.find("\n      d: [\n", a); e = s.find("\n      ]", b + 1)
    nxt = s.find('id: "', a + 5)
    if a < 0 or b < 0 or e < 0 or (nxt > 0 and b > nxt): print(f"ERROR: no encontré la conversación de {uid} en {fa}"); sys.exit(1)
    body = "\n      d: [\n" + ",\n".join("        " + jd(l) for l in t["d"]) + "\n      ]"
    s = s[:b] + body + s[e + len("\n      ]"):]
    open(fa, "w", encoding="utf-8").write(s)
    fx = os.path.join(REPO, "content", "x-" + lv + ".js"); s = open(fx, encoding="utf-8").read()
    a = s.find(f"\n  {uid}: {{"); b = s.find("\n    r: {\n", a); e = s.find("\n    }", b + 1)
    nxt = re.search(r"\n  [a-z0-9]+: \{", s[a + 3:])
    if a < 0 or b < 0 or e < 0 or (nxt and b > a + 3 + nxt.start()): print(f"ERROR: no encontré la lectura de {uid} en {fx}"); sys.exit(1)
    body = ("\n    r: {\n" f"      t: {jd(t['t'])},\n      en: {jd(chr(10).join(t['en']))},\n      es: {jd(chr(10).join(t['es']))},\n      q: [\n"
            + ",\n".join("        " + jd(q) for q in t["q"]) + "\n      ]\n    }")
    s = s[:b] + body + s[e + len("\n    }"):]
    open(fx, "w", encoding="utf-8").write(s)
    done += 1
    nb = sum(1 for l in t["d"] if l[0] == "B"); ns = sum(1 for l in t["d"] if l[0] == "@")
    print(f"  {uid}: {ns} escenas, {nb} tuyas, {t['cov']} · lectura {len(' '.join(t['en']).split())} palabras, {len(t['q'])} preguntas")
# comprobar que quedó igual a lo escrito
chk = json.loads(subprocess.check_output(["node", os.path.join(HERE, "phr.js"), REPO, "full"]))
bad = [u for u, t in T.items() if (not only or P[u]["lv"] in only or u in only) and (chk[u]["d"] != t["d"] or chk[u]["r"]["t"] != t["t"] or chk[u]["r"]["q"] != t["q"])]
if bad: print("ERROR: no quedaron iguales:", bad); sys.exit(1)
print(f"OK: {done} temas escritos")
