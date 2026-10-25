# Inglés Práctico

App web instalable (PWA) para aprender inglés **de cero absoluto a nivel profesional**, organizada como la escuela: 109 unidades, 2,928 frases y 109 lecturas.

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
- **Entrenador personal (pestaña Hoy):** al empezar pregunta objetivo, minutos al día y nivel (con examen de ubicación de 15 preguntas por etapa). Cada día arma la sesión solo —repaso, lección nueva, conversación, lectura, refuerzo de la habilidad más débil, exámenes e inglés real— y la ejecuta parte por parte. Se adapta a los aciertos de los últimos 7 días, a los repasos acumulados y a los días sin practicar. La lógica está en `buildToday()` de `index.html`.
- **Unidades:** explicación de gramática en español, ~27 frases y vocabulario con audio (pronunciación escrita hasta Secundaria), práctica, conversación (tú eres B), lectura con preguntas y examen.
- **Avance exigente:** el examen de unidad se desbloquea al aprender todas las frases, acertar el 80% en días distintos, practicar la conversación y aprobar la lectura; pide 85%. Cada etapa termina con un examen final de 30 preguntas (85%) que abre la siguiente. Las unidades de etapas que aún no se abren (incluida la pista de trabajo, que se abre al terminar Secundaria) se pueden leer pero no practicar, y sus frases no salen en repasos ni prácticas (`prevLocked()` y `open()` en `index.html`).
- **Repetición espaciada:** cada frase tiene nivel 0–6; al acertar el día que toca se repasa en 1, 2, 4, 8, 16 y 35 días (practicar antes no sube el nivel). Las que fallas vuelven al día siguiente.
- **Dominar antes de terminar:** en las sesiones de práctica (no en exámenes) una frase fallada vuelve unos pasos después en un ejercicio más fácil y luego en el original; a la segunda falla aparece una pantalla que la enseña palabra por palabra con la regla de la unidad; con 3 fallas de 5 la sesión hace una pausa (repaso de la explicación + 2 frases de unidades anteriores) y pospone las frases nuevas. Hay botones «Pista» y «No sé»; con pista la frase no sube de nivel. El repaso espaciado solo califica el primer intento. Lógica en `answered()` y `struggle()` de `index.html`.
- **Video del día:** `content/videos.js` tiene un video de YouTube por unidad (109), elegido por tema y nivel y verificado con oEmbed (existe, canal correcto, se puede insertar). Se reproduce dentro de la app con la API de YouTube; cuenta solo el tiempo en reproducción (70% del video, máx. 10 min) y luego pide un resumen en inglés. Si un video deja de funcionar, la app ofrece abrirlo en YouTube; para reemplazarlo, cambia su `id` en `videos.js`.
- **Pantalla de práctica:** una tarea por pantalla. Arriba el progreso, al centro la tarea (tarjeta de la frase, opciones en 2 columnas en computadora con teclas 1–4, micrófono grande) y abajo una barra fija con el botón principal; ahí mismo aparece el resultado en verde o rojo. Durante la práctica se oculta el encabezado (`body.focus`). Funciones `foot()`, `plate()` y `band()` en `index.html`.
- **Ejercicios:** opción múltiple, comprensión auditiva, escribir, dictado, armar la frase, hablar con micrófono (reconocimiento de voz del navegador), escucha y repite, y «solo dibujo».
- **Todo con dibujo:** cada frase tiene un dibujo junto a su significado (en la tarjeta, que muestra «= significado» en grande, en las opciones, en el resultado y en la lista de la unidad) y cada unidad tiene su ícono. Las frases cuyo dibujo representa el significado por sí solo salen en el ejercicio «solo dibujo»: ves la imagen, sin español, y eliges la frase en inglés (`pic` en `step()`), para que el cerebro tenga que recordar. Al terminar cada práctica hay un repaso con dibujos: ves el dibujo, dices la frase en inglés y tocas para comprobar, empezando por las que fallaste (`recallHTML()`).
- **Audio sin cortes:** la voz espera a que la salida de audio despierte (audífonos Bluetooth, bocinas) y la mantiene despierta con un sonido inaudible durante la práctica (`audioAwake()`); después de usar el micrófono espera un momento antes de hablar. Todo se ve: los botones de audio dicen «Preparando…» y «Sonando…» (con ondas que se mueven) y la palabra que se está diciendo se subraya (`ttsState()`, `speakSpans()`); el micrófono pasa por «Espera…», «¡Habla ahora!», «Te estoy oyendo…» (verde) y «Revisando…» (`hear(onState)`, `micLook()`), y junta todo lo que dijiste aunque hagas pausas. Si cortas el audio, el diálogo o la lectura ya no siguen solos.
- **Revisión estricta:** al hablar solo cuenta lo que el reconocedor entendió primero, palabra por palabra y en orden (`speechCheck()`); se perdona solo lo que suena idéntico (two/to, see/sea, I'm/I am, nombres con otra ortografía, letras deletreadas) y, en frases de 6+ palabras, 1–2 palabras cortas (a, the, to…). Muestra en rojo lo que no coincidió sin revelar la respuesta si aún no se ve. Al escribir, un error de dedo solo se perdona en palabras de 6+ letras (`closeEnough()`).
- **Examen final de etapa** también sirve para saltarte lo que ya sabes.
- **Método:** rutina diaria, etapas y qué escuchar en cada nivel.

## Uso
Dirección: **https://ingenieriaimza-gif.github.io/ENGLISH/**

Instálala desde el navegador:
- **Android (Chrome):** menú ⋮ → *Instalar app*
- **iPhone (Safari):** Compartir → *Agregar a inicio*
- **PC (Chrome/Edge):** ícono de instalar en la barra de direcciones

Funciona sin conexión después de abrirla una vez.

## Estructura
- `index.html` — la app (vistas, ejercicios, repaso espaciado, sincronización)
- `content/*.js` — el contenido del curso, un archivo por etapa (ver tabla). El orden de carga en `index.html` define el orden del curso. Las unidades se pueden insertar en cualquier posición: el avance se guarda por el `id` de la unidad, no por su lugar.
- `content/emoji.js` — el dibujo de cada frase y el ícono de cada unidad
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
El avance de cada frase se guarda por su posición dentro de la unidad (primero las de `c`, luego las de `v`). Por eso **no agregues frases a `c`**; agrégalas **al final de `v`**. En `w.js` cada frase lleva un identificador fijo (`w0`…`w44`): no lo cambies.

**Tu nombre en las frases.** En las frases donde la persona habla de sí misma se usan marcadores con un nombre de ejemplo: `{name|Ana}` (nombre), `{last|López}` (apellido), `{nameS|A-N-A}` / `{lastS|L-O-P-E-Z}` (deletreado; en el campo de pronunciación se escribe cómo suenan las letras: `{nameS|ei-en-ei}`) y `{email|ana dot ruiz}`. Si la persona escribió su nombre (al crear su plan, en «Ajustar mi plan» o en la tarjeta de Hoy), `applyNames()` los cambia por sus datos; si no, se ven los de ejemplo. Funcionan en frases, conversaciones, explicaciones y lecturas (si el nombre chocara con una opción de las preguntas, esa lectura se queda con los nombres de ejemplo). Usa marcadores solo cuando la frase la dice o la recibe quien practica (en las conversaciones, la persona es B).

**Dibujos.** `content/emoji.js` tiene el dibujo de cada frase por su id (`k5.0`, `n2u7.12`, `w3`…) y el ícono de cada unidad: `"👍"` = el dibujo representa el significado por sí solo (sale en el ejercicio de solo dibujo; úsalo solo si no se confunde con otra frase de la misma etapa), `"~📅"` = solo acompaña, `""` = sin dibujo. Si una frase no aparece ahí y su español empieza con un emoji (`"🐶 perro"`), se usa ese. Al agregar frases, agrégales su dibujo. Usa emojis de Unicode 12 o anteriores y sin banderas, para que se vean igual en todos los teléfonos y en Windows.

Después de editar, sube el número de versión en `sw.js`.

## Publicación
La app se publica con **GitHub Pages** desde la rama `main` (carpeta raíz): cada `git push` a `main` la publica en 1–2 minutos, sin límite de publicaciones. `.nojekyll` hace que GitHub sirva los archivos tal cual. El service worker pregunta siempre al servidor si hay versión nueva (`cache: "no-cache"`) y, si el servidor falla, usa la copia guardada.

La dirección anterior en Netlify (`english-practico.netlify.app`) se quedó en la versión del 25 de octubre: el plan gratis de Netlify da 300 créditos al mes y cada publicación gasta 15 (unas 20 al mes). Para pasar el avance a la nueva dirección: en la app anterior, Hoy → «Sincronizar teléfono y PC» → «Activar en este dispositivo» y copiar el código; en la nueva, escribirlo en «¿Ya usabas la app?» de la primera pantalla.

## Sincronización (Supabase)
El avance se sincroniza entre dispositivos con un código personal de 20 caracteres.
- Tabla `public.sync_progress` con RLS activado y sin acceso directo.
- Se lee y escribe solo con las funciones `get_progress(code)` y `save_progress(code, data)`.
- La app usa la *publishable key* (pública por diseño). Nunca pongas aquí la secret key.
- El formato anterior (`box`) se convierte automáticamente al nuevo (`c`, `done`).
