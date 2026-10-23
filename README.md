# Inglés con Proveedores

App web instalable (PWA) para practicar inglés de trabajo con proveedores: escucha y repite, opción múltiple, escritura y armar frases.

## Uso
Abre la app desde GitHub Pages e instálala:
- **Android (Chrome):** menú ⋮ → *Instalar app*
- **iPhone (Safari):** Compartir → *Agregar a inicio*
- **PC (Chrome/Edge):** ícono de instalar en la barra de direcciones

Funciona sin conexión después de abrirla una vez.

## Estructura
- `index.html` — la app completa (frases en el arreglo `CARDS`)
- `manifest.webmanifest` — datos de instalación
- `sw.js` — modo sin conexión (cambia `CACHE` al publicar una versión nueva)
- `icon-*.png` — íconos

## Agregar frases
Agrega una línea al arreglo `CARDS` en `index.html`:
```js
["Español","English","pronunciación","nota opcional"],
```
y sube el número de versión en `sw.js` (`ingles-prov-v2`, `v3`…).
