# Hashoes.pe — Catálogo Oficial de Zapatillas

Catálogo web de zapatillas originales de **Hashoes.pe**. Permite explorar el inventario por marca, talla y género, armar un carrito y enviar el pedido por WhatsApp.

🌐 **Sitio:** [hashoes.net.pe](https://hashoes.net.pe)

## Características

- Catálogo de **37 modelos** de marcas como Nike, New Balance, Adidas, Under Armour, On Cloud, HOKA, Skechers, Puma, Converse y Air Jordan.
- Galería de fotos por producto (91 imágenes), con la primera foto como portada.
- Carrito de compras persistente con `localStorage`, para que el cliente no pierda su selección al recargar la página.
- Pedido final enviado por **WhatsApp** desde el sitio.
- Sitio estático: no requiere backend ni base de datos.

## Tecnologías

- HTML5 y CSS
- JavaScript (vanilla, sin frameworks)
- `localStorage` para el carrito
- Enlaces `wa.me` para el envío de pedidos

## Estructura del proyecto

```
hashoes/
├── index.html          # Página principal (catálogo, carrito y pedido)
├── productos.js        # Datos del catálogo: nombre, marca, talla, género y fotos
├── zapatillas_jpg/     # Fotografías de los productos
├── grupo-zapatillas-1.jpg  # Imagen principal (hero)
└── CNAME               # Dominio personalizado de GitHub Pages
```

## Actualizar el catálogo

Todo el inventario se maneja desde `productos.js`, sin tocar el HTML.

**Agregar una zapatilla:**
1. Copia un bloque `{ ... }` dentro del arreglo `products`.
2. Cambia `id`, `name`, `brand`, `size`, `gender` y los demás campos.
3. Sube sus fotos a `zapatillas_jpg/` con el formato `<id>-<modelo>-<n>.jpg`.

**Quitar una zapatilla:** borra su bloque completo, incluida la coma.

## Publicación

El sitio es estático: basta con subir los archivos del repositorio a un hosting o a GitHub Pages.

## Contacto

Para consultas de inventario o pedidos, escribe por WhatsApp desde el sitio.
