# La Tiendita de la Isi · Página web

Catálogo de decants con carrito. La clienta elige perfumes y formatos, arma su pedido y lo envía por WhatsApp con el detalle y el total ya escritos.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La página |
| `styles.css` | Colores y diseño (paleta de la marca) |
| `app.js` | Carrito y mensaje de WhatsApp |
| `productos.js` | **Perfumes, precios y número de WhatsApp. Es el único archivo que necesitas editar.** |
| `img/` | Fotos de los frascos y logo |
| `fonts/` | Tipografías |

## Cambiar un precio

En `productos.js`, busca el perfume y cambia el número en `formatos`:

```js
"formatos": [
  { "ml": 5, "precio": 10000 },
  { "ml": 10, "precio": 15000 }
]
```

Escribe el precio sin punto ni signo `$` (10000, no 10.000).

## Agregar un perfume

1. Sube la foto del frasco a `img/` (fondo blanco, recortada al frasco).
2. En `productos.js`, copia un bloque `{ ... }` completo de otro perfume, pégalo antes del `]` final y cambia sus datos:
   - `id`: nombre corto sin espacios ni tildes (ej. `"goodgirl"`)
   - `para`: `"ella"` o `"el"`
   - `imagen`: `"img/goodgirl.jpg"`
   - `color`: color pastel de fondo (ej. `"#F6E1E7"`)
   - `acordes`: hasta 6 (los colores salen de `COLORES_ACORDES`)
   - `fresco`, `dulce`, `intenso`: del 1 al 5
3. Guarda y sube los cambios.

## Quitar un perfume

Borra su bloque `{ ... }` en `productos.js` (cuida que las comas queden bien).

## Cambiar el WhatsApp o Instagram

Al inicio de `productos.js`:

```js
const TIENDA = {
  whatsapp: "56944640625",
  instagram: "la__tiendita_de__isi",
};
```

## Publicarla gratis con GitHub Pages

1. En GitHub, entra al repositorio → **Settings** → **Pages**.
2. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** → **Save**.
3. En 1 o 2 minutos queda en `https://benjaguti1015-crypto.github.io/tiendita-de-la-isi/`.

## Probarla en tu computador

Abre una terminal en esta carpeta y ejecuta `python3 -m http.server`, luego entra a `http://localhost:8000`.
