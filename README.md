# Inglés Práctico

App web instalable (PWA) para aprender inglés **de cero absoluto a nivel profesional**, organizada como la escuela: 109 unidades, 2,943 frases y 109 lecturas.

| Etapa | Lecciones | Vocabulario y lectura | MCER | Unidades |
|---|---|---|---|---|
| Kínder · Primeras palabras | `k.js` | `x-k.js` | Inicio | 14 |
| Primaria 1 · Primeras frases | `n0.js` | `x-n0.js` | Pre-A1 | 9 |
| Primaria 2 · Lo básico | `n1.js` | `x-n1.js` | A1 | 12 |
| Secundaria · Básico alto | `n2.js` | `x-n2.js` | A2 | 16 |
| Pista extra · Inglés de trabajo | `w.js` | `x-w.js` | A2–B1 | 5 |
| Preparatoria · Intermedio | `n3.js` | `x-n3.js` | B1 | 16 |
| Universidad 1 · Intermedio alto | `n4.js` | `x-n4.js` | B2 | 15 |
| Universidad 2 · Avanzado | `n5.js` | `x-n5.js` | C1 | 12 |
| Carrera profesional · Dominio | `n6.js` | `x-n6.js` | C2 | 10 |

## Qué incluye
- **Entrenador personal (pestaña Hoy):** al empezar pregunta tu nombre, tu objetivo y tu nivel (con examen de ubicación de 15 preguntas por etapa). No hay plan de tiempo: la práctica va en bloques de unos 10 minutos y al terminar uno se arma el siguiente, sin límite (`buildToday(blk)` y `nextBlock()`; el video sale una vez al día). Cada día arma la sesión solo —repaso, lección nueva, conversación, lectura, refuerzo de la habilidad más débil, exámenes e inglés real— y la ejecuta parte por parte. Se adapta a los aciertos de los últimos 7 días, a los repasos acumulados y a los días sin practicar. Va **un tema a la vez**: solo la unidad que sigue (`activeUnits()`), y la siguiente se abre al aprobar el examen de esta. La lógica está en `buildToday()` de `index.html`.
- **Unidades:** explicación de gramática en español, de 27 a 42 frases y vocabulario con audio (pronunciación escrita hasta Secundaria), práctica, conversación (tú eres B), lectura con preguntas y examen.
- **Avance exigente:** el examen de unidad se desbloquea al aprender todas las frases, **dominarlas todas**, practicar la conversación y aprobar la lectura; pide 85%. Cada etapa termina con un examen final de 30 preguntas (85%) que abre la siguiente. Las unidades de etapas que aún no se abren (incluida la pista de trabajo, que se abre al terminar Secundaria) se pueden leer pero no practicar, y sus frases no salen en repasos ni prácticas (`prevLocked()` y `open()` en `index.html`); las unidades que vienen después de la actual tampoco dejan aprender frases nuevas. **Si después se te olvida algo aprobado** (más de 4 de cada 10 de las últimas respuestas de esa unidad, `watchUnit()`): se pausa lo nuevo y en cada bloque se vuelve a explicar la unidad, se practica y hay una prueba corta (7 de 8, modo `check`) hasta que la pases.
- **Dominar antes de lo nuevo:** una frase está dominada cuando la contestaste bien y sin ayuda en 2 prácticas distintas (sesiones distintas; pueden ser el mismo día) y al menos una vez la produjiste tú (decirla, escribirla, armarla o el dictado). Un error la regresa a cero; si la corriges en esa misma práctica, cuenta como la primera. Se guarda en `S.dm[id]` (4 × ya la produjiste + aciertos, de 0 a 3; sin dato se toma del nivel de repaso), lo calculan `dmMark()`, `dmV()` y `dominated()`, y cuentan todos los ejercicios, también repasos y exámenes. En Hoy, antes de frases nuevas va «Dominar: tema» con las que ya viste y no dominas (hasta 10, una vez cada una en un ejercicio donde la produces, `masterPractice()`), y después de las frases nuevas va «Practicar lo nuevo». Si al llegar a las frases nuevas todavía no dominas las anteriores, se quitan del bloque (`skipGated()`) y esperan al siguiente. Las frases agregadas a una unidad ya aprobada se enseñan antes de seguir (`catchUnit()`).
- **Primero las palabras:** antes de las frases nuevas se enseñan las palabras que traen (de 3 en 3: cómo suenan y qué significan) y se preguntan («¿Qué significa?», 4 opciones). Las que ya salieron en frases aprendidas solo se preguntan («¿Te acuerdas?»). Por sesión entran hasta 6 palabras nuevas y 6 para recordar: las frases se toman en orden hasta llenar ese cupo (`learnPlan()`, `wordSteps()`). Solo cuenta el primer intento (`S.kw[palabra]`: 1 = la sabe, 0 = la falló y la próxima vez se enseña otra vez); si la fallas, vuelve en un momento (hasta 2 veces más) antes de las frases. No se enseñan las letras sueltas (A, B, C), las palabras que se dicen igual en español (hotel, ideal) ni las de frases de una sola palabra (la frase misma la enseña). En cualquier frase, lectura, diálogo o lista se puede tocar una palabra para oírla y ver qué significa (`wordTip()`); al fallar una frase se ve el significado palabra por palabra (`wbwHTML()`). Ese significado es el de la palabra **en esa frase** (`ctxItems()`): las expresiones van juntas (get up = levantarse, how much = cuánto, there is = hay), los auxiliares que no se traducen lo dicen (do al preguntar, to antes de un verbo, it como sujeto), have + participio = he/ha/había, y si la palabra tiene varios significados se elige el que aparece en la traducción, y la pantalla de «Vamos a verla con calma» también lo muestra. Cada unidad tiene la lista de sus palabras nuevas, con ✓ en las que ya sabes. Al repasar una unidad que se estaba olvidando, primero se vuelven a preguntar sus palabras.
- **Repetición espaciada:** cada frase tiene nivel 0–6; al acertar el día que toca se repasa en 1, 2, 4, 8, 16 y 35 días (practicar antes no sube el nivel). Las que fallas vuelven al día siguiente.
- **Corregir antes de terminar:** en las sesiones de práctica (no en exámenes) una frase fallada vuelve unos pasos después en un ejercicio más fácil y luego en el original; a la segunda falla aparece una pantalla que la enseña palabra por palabra con la regla de la unidad; con 3 fallas de 5 la sesión hace una pausa (repaso de la explicación + 2 frases de unidades anteriores) y pospone las frases nuevas. Hay botones «Pista» y «No sé»; con pista la frase no sube de nivel. El repaso espaciado solo califica el primer intento. Lógica en `answered()` y `struggle()` de `index.html`. Si en un ejercicio de hablar eliges «Mejor escribirla», esa frase se da por corregida al escribirla bien y el resto de la sesión ya no pide hablar (`SES.write`).
- **Video del día:** `content/videos.js` tiene un video de YouTube por unidad (109), elegido por tema y nivel y verificado con oEmbed (existe, canal correcto, se puede insertar). Se reproduce dentro de la app con la API de YouTube; cuenta solo el tiempo en reproducción (70% del video, máx. 10 min) y luego pide un resumen en inglés. Si un video deja de funcionar, la app ofrece abrirlo en YouTube; para reemplazarlo, cambia su `id` en `videos.js`.
- **Pantalla de práctica:** una tarea por pantalla. Arriba el progreso, al centro la tarea (tarjeta de la frase, opciones en 2 columnas en computadora con teclas 1–4, micrófono grande) y abajo una barra fija con el botón principal; ahí mismo aparece el resultado en verde o rojo. Durante la práctica se oculta el encabezado (`body.focus`). Funciones `foot()`, `plate()` y `band()` en `index.html`. Después de contestar, y al conocer una frase o una palabra nueva, el botón para seguir se activa cuando termina de sonar el audio, para que siempre escuches la pronunciación (`holdGo()`; si el dispositivo no tiene voz, se activa solo).
- **Practicar en Frases:** con lo que muestra el buscador y el filtro (también «Las que aún no domino») o con las frases que eliges con «Elegir frases» (se guardan en este dispositivo). Practica de 5 en 5, empezando por las que más te cuestan: primero las palabras que traen y que no sabes, la presentación si la frase es nueva, y luego 3 vueltas: entenderla (oírla o ver el dibujo y elegir), armarla o escribirla, y decirla con el micrófono (`practiceStart()`, `practiceRound()`).
- **Ejercicios:** opción múltiple, comprensión auditiva, escribir, dictado, armar la frase, hablar con micrófono (reconocimiento de voz del navegador), escucha y repite, y «solo dibujo».
- **Todo con dibujo:** cada frase tiene un dibujo junto a su significado (en la tarjeta, que muestra «= significado» en grande, en las opciones, en el resultado y en la lista de la unidad) y cada unidad tiene su ícono. Las frases cuyo dibujo representa el significado por sí solo salen en el ejercicio «solo dibujo»: ves la imagen, sin español, y eliges la frase en inglés (`pic` en `step()`), para que el cerebro tenga que recordar. Al terminar cada práctica hay un repaso con dibujos: ves el dibujo, dices la frase en inglés y tocas para comprobar, empezando por las que fallaste (`recallHTML()`).
- **Audio sin cortes:** la voz espera a que la salida de audio despierte (audífonos Bluetooth, bocinas) y la mantiene despierta con un sonido inaudible durante la práctica (`audioAwake()`); después de usar el micrófono espera un momento antes de hablar. Todo se ve: los botones de audio dicen «Preparando…» y «Sonando…» (con ondas que se mueven) y la palabra que se está diciendo se subraya (`ttsState()`, `speakSpans()`); el micrófono pasa por «Espera…», «¡Habla ahora!», «Te estoy oyendo…» (verde) y «Revisando…» (`hear(onState)`, `micLook()`), y junta todo lo que dijiste aunque hagas pausas. Si el reconocedor no alcanza a dar un resultado final (pasa con palabras sueltas), usa lo último que entendió; si se corta solo al arrancar, vuelve a escuchar una vez sin que toques nada; en Chrome/Edge de computadora muestra un medidor del volumen del micrófono y avisa si no capta sonido (`meterStart()`). Si cortas el audio, el diálogo o la lectura ya no siguen solos.
- **Pronunciación escrita:** hasta Secundaria cada frase dice cómo suena en inglés americano (como la voz de la app), escrito para leerse en español: acento donde va la fuerza, ii/uu = vocal larga, z = TH, j = h suave, y = J inglesa, y la o americana se escribe a (nat, jat, káfi). Se explica en Método.
- **Revisión estricta:** al hablar solo cuenta lo que el reconocedor entendió primero, palabra por palabra y en orden (`speechCheck()`); se perdona solo lo que suena idéntico (two/to, see/sea, I'm/I am, nombres con otra ortografía, letras deletreadas) y, en frases de 6+ palabras, 1–2 palabras cortas (a, the, to…). Muestra en rojo lo que no coincidió sin revelar la respuesta si aún no se ve. Al escribir, un error de dedo solo se perdona en palabras de 6+ letras (`closeEnough()`). Los números se comparan como cifras: «two hundred (and) fifty» = 250, «one million» = 1,000,000 (`numWords()`, `foldNum()`), y al hablar los números de varias palabras se revisan juntos y cifra por cifra (`numGroups()`), así que da igual si el reconocedor escribe «250», «5512» o «1990».
- **Examen final de etapa** también sirve para saltarte lo que ya sabes.
- **Método:** rutina diaria, etapas y qué escuchar en cada nivel.

## Uso
Dirección: **https://english-har.netlify.app/**

Instálala desde el navegador:
- **Android (Chrome):** menú ⋮ → *Instalar app*
- **iPhone (Safari):** Compartir → *Agregar a inicio*
- **PC (Chrome/Edge):** ícono de instalar en la barra de direcciones

Funciona sin conexión después de abrirla una vez.

## Estructura
- `index.html` — la app (vistas, ejercicios, repaso espaciado, sincronización)
- `content/*.js` — el contenido del curso, un archivo por etapa (ver tabla). El orden de carga en `index.html` define el orden del curso. Las unidades se pueden insertar en cualquier posición: el avance se guarda por el `id` de la unidad, no por su lugar.
- `content/emoji.js` — el dibujo de cada frase y el ícono de cada unidad
- `content/words.js` — qué significa cada palabra del curso (2,112), para enseñarlas antes de las frases
- `manifest.webmanifest` — datos de instalación
- `sw.js` — modo sin conexión (sube el número de `CACHE` al publicar una versión nueva)
- `icon-*.png` — íconos

## Agregar o editar contenido
Cada unidad en `content/*.js` tiene:
```js
{
  id: "n1u3", t: "Título", goal: "Objetivo",
  g: ["Párrafo", ["English example", "Ejemplo en español"], "!Consejo"],
  c: [["Español", "English", "pronunciación", "nota opcional"]],
  d: [["A", "Line in English", "Traducción"], ["B", "...", "..."]]
}
```
El vocabulario extra y la lectura de cada unidad van en `content/x-*.js`:
```js
n1u3: {
  v: [["Español", "English", "pronunciación", "nota"]],
  r: { t: "Título", en: "Texto\ncon párrafos", es: "Traducción", q: [["Pregunta", ["a", "b", "c"], 0]] }
}
```
El avance de cada frase se guarda por su posición dentro de la unidad (primero las de `c`, luego las de `v`). Por eso **no agregues frases a `c`**; agrégalas **al final de `v`**. Una frase también puede llevar su identificador fijo como 5º elemento (`["veinte", "twenty", "tuénti", "", "n0u2.29"]`): así se puede poner en cualquier lugar. En `w.js` todas lo llevan (`w0`…`w44`) y en `n0u2` (números) también, para enseñarlas en orden (1–10, 11–20, decenas, cientos, miles, ordinales…); si agregas frases ahí, ponles el siguiente número libre (`n0u2.42`…). No cambies los identificadores que ya existen.

**Tu nombre en las frases.** En las frases donde la persona habla de sí misma se usan marcadores con un nombre de ejemplo: `{name|Ana}` (nombre), `{last|López}` (apellido), `{nameS|A-N-A}` / `{lastS|L-O-P-E-Z}` (deletreado; en el campo de pronunciación se escribe cómo suenan las letras: `{nameS|ei-en-ei}`) y `{email|ana dot ruiz}`. Si la persona escribió su nombre (al crear su plan, en «Ajustar mi plan» o en la tarjeta de Hoy), `applyNames()` los cambia por sus datos; si no, se ven los de ejemplo. Funcionan en frases, conversaciones, explicaciones y lecturas (si el nombre chocara con una opción de las preguntas, esa lectura se queda con los nombres de ejemplo). Usa marcadores solo cuando la frase la dice o la recibe quien practica (en las conversaciones, la persona es B).

**Dibujos.** `content/emoji.js` tiene el dibujo de cada frase por su id (`k5.0`, `n2u7.12`, `w3`…) y el ícono de cada unidad: `"👍"` = el dibujo representa el significado por sí solo (sale en el ejercicio de solo dibujo; úsalo solo si no se confunde con otra frase de la misma etapa), `"~📅"` = solo acompaña, `""` = sin dibujo. Si una frase no aparece ahí y su español empieza con un emoji (`"🐶 perro"`), se usa ese. Al agregar frases, agrégales su dibujo. Usa emojis de Unicode 12 o anteriores y sin banderas, para que se vean igual en todos los teléfonos y en Windows.

**Palabras.** `content/words.js` tiene el significado de cada palabra en minúsculas, un renglón por palabra: `"rather":"preferir (I'd rather) / bastante"`. Separa con ` / ` los significados distintos (en la frase se elige el que aparece en su traducción) y con coma los sinónimos. Los nombres propios no van. Si agregas frases con palabras nuevas, agrégalas aquí; si una palabra no está, simplemente no se enseña. Al final del archivo, `PHRASES` tiene las expresiones de varias palabras con todas sus formas (`"got up":"levantarse"`): se enseñan y se muestran como una sola.

Después de editar, sube el número de versión en `sw.js`.

## Publicación
La app se publica en **Netlify**, proyecto `english-har` (https://english-har.netlify.app/): cada `git push` a `main` la publica sola en segundos. El plan gratis da 300 créditos al mes y cada publicación gasta 15 (unas 20 al mes), así que se juntan varios cambios en un solo push, y los cambios que solo tocan documentación se dejan en la rama `pendiente` hasta el siguiente cambio de la app. El service worker pregunta siempre al servidor si hay versión nueva (`cache: "no-cache"`) y, si el servidor falla, usa la copia guardada. (`.nojekyll` queda por si algún día se usa GitHub Pages.)

La dirección anterior, `english-practico.netlify.app` (otra cuenta de Netlify), se quedó en la versión del 25 de octubre porque se acabaron sus créditos del periodo (17 oct – 16 nov). Para pasar el avance: en la app anterior, Hoy → «Sincronizar teléfono y PC» → «Activar en este dispositivo» y copiar el código; en la nueva, escribirlo en «¿Ya usabas la app?» de la primera pantalla.

## Sincronización (Supabase)
El avance se sincroniza entre dispositivos con un código personal de 20 caracteres.
- Tabla `public.sync_progress` con RLS activado y sin acceso directo.
- Se lee y escribe solo con las funciones `get_progress(code)` y `save_progress(code, data)`.
- La app usa la *publishable key* (pública por diseño). Nunca pongas aquí la secret key.
- El formato anterior (`box`) se convierte automáticamente al nuevo (`c`, `done`).
