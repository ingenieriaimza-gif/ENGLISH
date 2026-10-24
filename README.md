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
- **Ejercicios:** opción múltiple, comprensión auditiva, escribir, dictado, armar la frase, hablar con micrófono (reconocimiento de voz del navegador) y escucha y repite.
- **Revisión estricta:** al hablar solo cuenta lo que el reconocedor entendió primero, palabra por palabra y en orden (`speechCheck()`); se perdona solo lo que suena idéntico (two/to, see/sea, I'm/I am, nombres con otra ortografía, letras deletreadas) y, en frases de 6+ palabras, 1–2 palabras cortas (a, the, to…). Muestra en rojo lo que no coincidió sin revelar la respuesta si aún no se ve. Al escribir, un error de dedo solo se perdona en palabras de 6+ letras (`closeEnough()`).
- **Examen final de etapa** también sirve para saltarte lo que ya sabes.
- **Método:** rutina diaria, etapas y qué escuchar en cada nivel.

## Uso
Instálala desde el navegador:
- **Android (Chrome):** menú ⋮ → *Instalar app*
- **iPhone (Safari):** Compartir → *Agregar a inicio*
- **PC (Chrome/Edge):** ícono de instalar en la barra de direcciones

Funciona sin conexión después de abrirla una vez.

## Estructura
- `index.html` — la app (vistas, ejercicios, repaso espaciado, sincronización)
- `content/*.js` — el contenido del curso, un archivo por etapa (ver tabla). El orden de carga en `index.html` define el orden del curso. Las unidades se pueden insertar en cualquier posición: el avance se guarda por el `id` de la unidad, no por su lugar.
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

Después de editar, sube el número de versión en `sw.js`.

## Sincronización (Supabase)
El avance se sincroniza entre dispositivos con un código personal de 20 caracteres.
- Tabla `public.sync_progress` con RLS activado y sin acceso directo.
- Se lee y escribe solo con las funciones `get_progress(code)` y `save_progress(code, data)`.
- La app usa la *publishable key* (pública por diseño). Nunca pongas aquí la secret key.
- El formato anterior (`box`) se convierte automáticamente al nuevo (`c`, `done`).
