# Inglés Práctico

App web instalable (PWA) para aprender inglés **de cero absoluto a nivel profesional**, organizada como la escuela: 109 unidades y 1,293 frases.

| Etapa | Archivo | MCER | Unidades |
|---|---|---|---|
| Kínder · Primeras palabras | `k.js` | Inicio | 14 |
| Primaria 1 · Primeras frases | `n0.js` | Pre-A1 | 9 |
| Primaria 2 · Lo básico | `n1.js` | A1 | 12 |
| Secundaria · Básico alto | `n2.js` | A2 | 16 |
| Pista extra · Inglés de trabajo | `w.js` | A2–B1 | 5 |
| Preparatoria · Intermedio | `n3.js` | B1 | 16 |
| Universidad 1 · Intermedio alto | `n4.js` | B2 | 15 |
| Universidad 2 · Avanzado | `n5.js` | C1 | 12 |
| Carrera profesional · Dominio | `n6.js` | C2 | 10 |

## Qué incluye
- **Plan de hoy:** repaso pendiente → siguiente lección → inglés real.
- **Unidades:** explicación de gramática en español, frases con audio y pronunciación, práctica, conversación (tú eres B) y examen (8/10 para aprobar).
- **Repetición espaciada:** cada frase tiene nivel 0–6; al acertar se repasa en 1, 2, 4, 8, 16 y 35 días. Las que fallas vuelven al día siguiente y se repiten al final de la sesión.
- **Ejercicios:** opción múltiple, comprensión auditiva, escribir, dictado, armar la frase, hablar con micrófono (reconocimiento de voz del navegador) y escucha y repite.
- **Examen de etapa** para saltarte lo que ya sabes.
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
El avance de cada frase se guarda por su posición dentro de la unidad, así que **agrega frases al final** de `c` en lugar de insertarlas en medio. En `w.js` cada frase lleva un identificador fijo (`w0`…`w44`): no lo cambies.

Después de editar, sube el número de versión en `sw.js`.

## Sincronización (Supabase)
El avance se sincroniza entre dispositivos con un código personal de 20 caracteres.
- Tabla `public.sync_progress` con RLS activado y sin acceso directo.
- Se lee y escribe solo con las funciones `get_progress(code)` y `save_progress(code, data)`.
- La app usa la *publishable key* (pública por diseño). Nunca pongas aquí la secret key.
- El formato anterior (`box`) se convierte automáticamente al nuevo (`c`, `done`).
