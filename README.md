# Inglés Práctico

App web instalable (PWA) para practicar inglés de trabajo: escucha y repite, opción múltiple, escritura y armar frases.

## Uso
Abre la app desde GitHub Pages e instálala:
- **Android (Chrome):** menú ⋮ → *Instalar app*
- **iPhone (Safari):** Compartir → *Agregar a inicio*
- **PC (Chrome/Edge):** ícono de instalar en la barra de direcciones

Funciona sin conexión después de abrirla una vez.

## Estructura
- `index.html` — la app completa (frases en el arreglo `CARDS`)
- `manifest.webmanifest` — datos de instalación
- `sw.js` — modo sin conexión (sube el número de `CACHE` al publicar una versión nueva)
- `icon-*.png` — íconos

## Agregar frases
Agrega una línea al arreglo `CARDS` en `index.html`:
```js
["Español","English","pronunciación","nota opcional"],
```
y sube el número de versión en `sw.js` (`ingles-prov-v2`, `v3`…).

## Sincronización (Supabase)
El avance se sincroniza entre dispositivos con un código personal de 20 caracteres.
- Tabla `public.sync_progress` con RLS activado y sin acceso directo.
- Se lee y escribe solo con las funciones `get_progress(code)` y `save_progress(code, data)`.
- La app usa la *publishable key* (pública por diseño). Nunca pongas aquí la secret key.
