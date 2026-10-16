/* =============================================================================
   HASHOES.PE — DATOS DEL CATÁLOGO
   Edita este archivo para agregar, quitar o modificar zapatillas.
   La página (index.html) lee todo desde aquí; no hace falta tocar el HTML.

   CAMPOS DE CADA ZAPATILLA
   - id          Número único (no repetir). Se muestra como "#id" en la tarjeta.
   - name        Nombre del modelo.
   - subtitle    Texto exacto del catálogo de WhatsApp (ej. "• Talla 38 - 23.5 cm Orig").
   - brand       Marca. Debe escribirse igual en todas (ej. "New Balance", "On Cloud").
   - size        Talla EUR como texto (ej. "38", "43 1/3").
   - cm          Largo en centímetros (ej. "24cm").
   - detail      Condición: "Orig", "RA1", "Sin caja", "Orig Sin caja"...
   - price       Precio en soles (PEN).
   - collections Pestañas donde aparece: siempre "All items" y además
                 "Hombre", "Mujer" y/o "Todas Mujer".
   - colors      3 colores (hex) para el dibujo de respaldo cuando no hay foto.
   - img         Foto por defecto si "photos" está vacío (ej. "zapatillas_jpg/45.jpg").
   - photos      Archivos dentro de la carpeta zapatillas_jpg/. La primera es la portada.
                 Formato de nombre: <id>-<modelo>-<n>.jpg (ej. "44-adidas-campus-00s-green-1.jpg").

   PARA AGREGAR UNA ZAPATILLA: copia un bloque { ... }, pégalo al final de la
   lista, cambia el id y los datos, y pon sus fotos en zapatillas_jpg/.
   PARA QUITARLA: borra su bloque { ... } completo (incluida la coma).
   ============================================================================= */

// Carpeta de las fotos
const IMG_BASE = "zapatillas_jpg/";

// Fotos del collage principal (hero). Si hay menos de 3, se completan con portadas.
const HERO_PHOTOS = ["grupo-zapatillas-1.jpg"];

// Catálogo (en el orden en que se muestra)
const products = [
  {
    id: 1,
    name: "Nike Guide 10",
    subtitle: "• Talla 43 - 27.5 • Orig (Sin caja)",
    brand: "Nike",
    size: "43",
    cm: "27.5cm",
    detail: "Orig (Sin caja)",
    price: 200.00,
    collections: ["All items"],
    colors: ["#222222", "#555555", "#999999"],
    img: "zapatillas_jpg/1.jpg",
    photos: [
      "01-nike-guide-10-1.jpg"
    ]
  },
  {
    id: 2,
    name: "HOKA Challenger 8 - Black",
    subtitle: "• Talla 44 - 28cm Sin caja",
    brand: "HOKA",
    size: "44",
    cm: "28cm",
    detail: "Sin caja",
    price: 200.00,
    collections: ["All items"],
    colors: ["#1c1c1c", "#333333", "#111111"],
    img: "zapatillas_jpg/2.jpg",
    photos: [
      "02-hoka-challenger-8-black-1.jpg"
    ]
  },
  {
    id: 3,
    name: "Adidas Lightblaze",
    subtitle: "• Talla 43 1/3 - 27.5cm Orig Sin caja",
    brand: "Adidas",
    size: "43 1/3",
    cm: "27.5cm",
    detail: "Orig Sin caja",
    price: 250.00,
    collections: ["All items"],
    colors: ["#8b929a", "#2b2e33", "#e5e7eb"],
    img: "zapatillas_jpg/3.jpg",
    photos: [
      "03-adidas-lightblaze-1.jpg"
    ]
  },
  {
    id: 4,
    name: "Puma Nitro Gray",
    subtitle: "• Talla 43 - 28cm Orig Sin caja",
    brand: "Puma",
    size: "43",
    cm: "28cm",
    detail: "Orig Sin caja",
    price: 180.00,
    collections: ["All items"],
    colors: ["#7a7e85", "#1f2022", "#f3f4f6"],
    img: "zapatillas_jpg/4.jpg",
    photos: [
      "04-puma-nitro-gray-1.jpg",
      "04-puma-nitro-gray-2.jpg",
      "04-puma-nitro-gray-3.jpg",
      "04-puma-nitro-gray-4.jpg",
      "04-puma-nitro-gray-5.jpg"
    ]
  },
  {
    id: 5,
    name: "New Balance 740 White Marsh Green",
    subtitle: "• Talla 41.5 - 26cm Orig Sin caja",
    brand: "New Balance",
    size: "41.5",
    cm: "26cm",
    detail: "Orig Sin caja",
    price: 260.00,
    collections: ["All items"],
    colors: ["#f5f5f5", "#2d6a4f", "#c0c5ce"],
    img: "zapatillas_jpg/5.jpg",
    photos: [
      "05-new-balance-740-white-marsh-green-1.jpg",
      "05-new-balance-740-white-marsh-green-2.jpg",
      "05-new-balance-740-white-marsh-green-3.jpg",
      "05-new-balance-740-white-marsh-green-4.jpg"
    ]
  },
  {
    id: 6,
    name: "Cloudtec On Running",
    subtitle: "•Talla 40 - 25cm Sin caja",
    brand: "On Cloud",
    size: "40",
    cm: "25cm",
    detail: "Sin caja",
    price: 200.00,
    collections: ["All items"],
    colors: ["#555b61", "#22252a", "#9ca3af"],
    img: "zapatillas_jpg/6.jpg",
    photos: [
      "06-cloudtec-on-running-1.jpg",
      "06-cloudtec-on-running-2.jpg"
    ]
  },
  {
    id: 7,
    name: "HOKA gore - TEX",
    subtitle: "• Talla 45 - 29cm RA1",
    brand: "HOKA",
    size: "45",
    cm: "29cm",
    detail: "RA1",
    price: 230.00,
    collections: ["All items", "Hombre"],
    colors: ["#2b2d2f", "#44474a", "#1e2022"],
    img: "zapatillas_jpg/7.jpg",
    photos: [
      "07-hoka-gore-tex-1.jpg"
    ]
  },
  {
    id: 8,
    name: "Under Armour Surge White Mujer",
    subtitle: "• Talla 36 - 22.5cm RA1",
    brand: "Under Armour",
    size: "36",
    cm: "22.5cm",
    detail: "RA1",
    price: 180.00,
    collections: ["All items", "Todas Mujer"],
    colors: ["#f8f9fa", "#1f2937", "#ffffff"],
    img: "zapatillas_jpg/8.jpg",
    photos: [
      "08-under-armour-surge-white-mujer-1.jpg",
      "08-under-armour-surge-white-mujer-2.jpg"
    ]
  },
  {
    id: 9,
    name: "Under Armour Surge 3 Mujer",
    subtitle: "• Talla 37.5 - 23.5cm",
    brand: "Under Armour",
    size: "37.5",
    cm: "23.5cm",
    detail: "Catálogo",
    price: 180.00,
    collections: ["All items", "Todas Mujer"],
    colors: ["#18181b", "#ffffff", "#f4f4f5"],
    img: "zapatillas_jpg/9.jpg",
    photos: [
      "09-under-armour-surge-3-mujer-1.jpg",
      "09-under-armour-surge-3-mujer-2.jpg"
    ]
  },
  {
    id: 10,
    name: "Under Armour Mujer",
    subtitle: "• Talla 40 - 25.5cm",
    brand: "Under Armour",
    size: "40",
    cm: "25.5cm",
    detail: "Catálogo",
    price: 180.00,
    collections: ["All items", "Todas Mujer"],
    colors: ["#18181b", "#d4af37", "#ffffff"],
    img: "zapatillas_jpg/10.jpg",
    photos: [
      "10-under-armour-mujer-1.jpg",
      "10-under-armour-mujer-2.jpg"
    ]
  },
  {
    id: 12,
    name: "Under Armour Surge Tricolor Mujer",
    subtitle: "• Talla 39 - 25cm",
    brand: "Under Armour",
    size: "39",
    cm: "25cm",
    detail: "Catálogo",
    price: 180.00,
    collections: ["All items", "Todas Mujer"],
    colors: ["#18181b", "#38bdf8", "#bef264"],
    img: "zapatillas_jpg/12.jpg",
    photos: [
      "12-under-armour-surge-tricolor-mujer-1.jpg",
      "12-under-armour-surge-tricolor-mujer-2.jpg"
    ]
  },
  {
    id: 13,
    name: "New Balance Black Mujer",
    subtitle: "• Talla 37 - 22.5cm Orig Sin caja",
    brand: "New Balance",
    size: "37",
    cm: "22.5cm",
    detail: "Orig Sin caja",
    price: 230.00,
    collections: ["All items", "Todas Mujer"],
    colors: ["#18181b", "#ffffff", "#f5f5f4"],
    img: "zapatillas_jpg/13.jpg",
    photos: [
      "13-new-balance-black-mujer-1.jpg",
      "13-new-balance-black-mujer-2.jpg"
    ]
  },
  {
    id: 14,
    name: "New Balance 57/40 Gamuza",
    subtitle: "• Talla 44 - 28cm • Sin caja Orig",
    brand: "New Balance",
    size: "44",
    cm: "28cm",
    detail: "Sin caja Orig",
    price: 250.00,
    collections: ["All items"],
    colors: ["#b8b2a6", "#f5f5f4", "#27272a"],
    img: "zapatillas_jpg/14.jpg",
    photos: [
      "14-new-balance-57-40-gamuza-1.jpg",
      "14-new-balance-57-40-gamuza-2.jpg"
    ]
  },
  {
    id: 15,
    name: "New Balance 530",
    subtitle: "• Talla 44 - 28cm Orig",
    brand: "New Balance",
    size: "44",
    cm: "28cm",
    detail: "Orig",
    price: 260.00,
    collections: ["All items", "Hombre"],
    colors: ["#ffffff", "#18181b", "#d4d4d8"],
    img: "zapatillas_jpg/15.jpg",
    photos: [
      "15-new-balance-530-1.jpg",
      "15-new-balance-530-2.jpg"
    ]
  },
  {
    id: 16,
    name: "New Balance Mujer",
    subtitle: "• Talla 37 - 22.5cm Orig",
    brand: "New Balance",
    size: "37",
    cm: "22.5cm",
    detail: "Orig",
    price: 230.00,
    collections: ["All items", "Todas Mujer"],
    colors: ["#18181b", "#ffffff", "#e7e5e4"],
    img: "zapatillas_jpg/16.jpg",
    photos: [
      "16-new-balance-mujer-1.jpg"
    ]
  },
  {
    id: 17,
    name: "Nike Free Metcon 6 Turqueza",
    subtitle: "• Talla 43 - 27.5cm Orig",
    brand: "Nike",
    size: "43",
    cm: "27.5cm",
    detail: "Orig",
    price: 250.00,
    collections: ["All items"],
    colors: ["#0891b2", "#22d3ee", "#ffffff"],
    img: "zapatillas_jpg/17.jpg",
    photos: [
      "17-nike-free-metcon-6-turqueza-1.jpg"
    ]
  },
  {
    id: 18,
    name: "Air Jordan Flight",
    subtitle: "• Talla 38 - 24cm Orig",
    brand: "Air Jordan",
    size: "38",
    cm: "24cm",
    detail: "Orig",
    price: 250.00,
    collections: ["All items"],
    colors: ["#18181b", "#dc2626", "#9ca3af"],
    img: "zapatillas_jpg/18.jpg",
    photos: [
      "18-air-jordan-flight-1.jpg",
      "18-air-jordan-flight-2.jpg"
    ]
  },
  {
    id: 21,
    name: "Atmos X Adidas Adimatic USA",
    subtitle: "• Talla 44.5 - 28.5cm Orig",
    brand: "Adidas",
    size: "44.5",
    cm: "28.5cm",
    detail: "Orig",
    price: 260.00,
    collections: ["All items"],
    colors: ["#18181b", "#16a34a", "#f5f5f4"],
    img: "zapatillas_jpg/21.jpg",
    photos: [
      "21-atmos-x-adidas-adimatic-usa-1.jpg",
      "21-atmos-x-adidas-adimatic-usa-2.jpg",
      "21-atmos-x-adidas-adimatic-usa-3.jpg"
    ]
  },
  {
    id: 22,
    name: "Skechers Go Run",
    subtitle: "• Talla 44 - 27cm Orig",
    brand: "Skechers",
    size: "44",
    cm: "27cm",
    detail: "Orig",
    price: 190.00,
    collections: ["All items"],
    colors: ["#18181b", "#3f3f46", "#27272a"],
    img: "zapatillas_jpg/22.jpg",
    photos: [
      "22-skechers-go-run-1.jpg"
    ]
  },
  {
    id: 23,
    name: "New Balance Fresh Foam 880",
    subtitle: "• Talla 45 - 29 cm Orig",
    brand: "New Balance",
    size: "45",
    cm: "29 cm",
    detail: "Orig",
    price: 200.00,
    collections: ["All items"],
    colors: ["#e5e7eb", "#9ca3af", "#f9fafb"],
    img: "zapatillas_jpg/23.jpg",
    photos: [
      "23-new-balance-fresh-foam-880-1.jpg",
      "23-new-balance-fresh-foam-880-2.jpg",
      "23-new-balance-fresh-foam-880-3.jpg",
      "23-new-balance-fresh-foam-880-4.jpg"
    ]
  },
  {
    id: 24,
    name: "New Balance Fresh Foam X Mujer",
    subtitle: "• Talla 36 - 22cm Orig",
    brand: "New Balance",
    size: "36",
    cm: "22cm",
    detail: "Orig",
    price: 200.00,
    collections: ["All items", "Todas Mujer"],
    colors: ["#f5f5f4", "#e7e5e4", "#ffffff"],
    img: "zapatillas_jpg/24.jpg",
    photos: [
      "24-new-balance-fresh-foam-x-mujer-1.jpg",
      "24-new-balance-fresh-foam-x-mujer-2.jpg",
      "24-new-balance-fresh-foam-x-mujer-3.jpg",
      "24-new-balance-fresh-foam-x-mujer-4.jpg"
    ]
  },
  {
    id: 26,
    name: "Adidas Yeezy BOOST 700",
    subtitle: "• Talla 39 - 24.5cm Orig",
    brand: "Adidas",
    size: "39",
    cm: "24.5cm",
    detail: "Orig",
    price: 150.00,
    collections: ["All items"],
    colors: ["#27272a", "#3f3f46", "#451a03"],
    img: "zapatillas_jpg/26.jpg",
    photos: [
      "26-adidas-yeezy-boost-700-1.jpg",
      "26-adidas-yeezy-boost-700-2.jpg"
    ]
  },
  {
    id: 28,
    name: "Adidas Adizero Adios Pro 3 RA1",
    subtitle: "• Talla 39 - 24.5cm RA1",
    brand: "Adidas",
    size: "39",
    cm: "24.5cm",
    detail: "RA1",
    price: 200.00,
    collections: ["All items"],
    colors: ["#e7e5e4", "#18181b", "#f97316"],
    img: "zapatillas_jpg/28.jpg",
    photos: [
      "28-adidas-adizero-adios-pro-3-ra1-1.jpg",
      "28-adidas-adizero-adios-pro-3-ra1-2.jpg",
      "28-adidas-adizero-adios-pro-3-ra1-3.jpg"
    ]
  },
  {
    id: 29,
    name: "Running On Cloudsurfer",
    subtitle: "• Talla 45 - 29cm Orig",
    brand: "On Cloud",
    size: "45",
    cm: "29cm",
    detail: "Orig",
    price: 250.00,
    collections: ["All items"],
    colors: ["#1e3a8a", "#172554", "#f97316"],
    img: "zapatillas_jpg/29.jpg",
    photos: [
      "29-running-on-cloudsurfer-1.jpg",
      "29-running-on-cloudsurfer-2.jpg",
      "29-running-on-cloudsurfer-3.jpg"
    ]
  },
  {
    id: 30,
    name: "Nike Dunk Low \"Valentine's Day\" 2024",
    subtitle: "• Talla 37.5 - 23.5cm Orig",
    brand: "Nike",
    size: "37.5",
    cm: "23.5cm",
    detail: "Orig",
    price: 250.00,
    collections: ["All items", "Todas Mujer"],
    colors: ["#fef2f2", "#991b1b", "#f87171"],
    img: "zapatillas_jpg/30.jpg",
    photos: [
      "30-nike-dunk-low-valentines-day-2024-1.jpg",
      "30-nike-dunk-low-valentines-day-2024-2.jpg"
    ]
  },
  {
    id: 31,
    name: "Converse X Comme Des Garçons PLAY Chuck 70",
    subtitle: "• Low - Top en color blanco/crema • Talla 35 - 22cm Orig",
    brand: "Converse",
    size: "35",
    cm: "22cm",
    detail: "Low - Top blanco/crema • Orig",
    price: 200.00,
    collections: ["All items"],
    colors: ["#fefce8", "#dc2626", "#ffffff"],
    img: "zapatillas_jpg/31.jpg",
    photos: [
      "31-converse-x-comme-des-garcons-play-chuck-70-1.jpg",
      "31-converse-x-comme-des-garcons-play-chuck-70-2.jpg"
    ]
  },
  {
    id: 33,
    name: "Nike Free Metcon 6",
    subtitle: "• Talla 44 - 28cm Orig",
    brand: "Nike",
    size: "44",
    cm: "28cm",
    detail: "Orig",
    price: 250.00,
    collections: ["All items"],
    colors: ["#ffffff", "#dc2626", "#f3f4f6"],
    img: "zapatillas_jpg/33.jpg",
    photos: [
      "33-nike-free-metcon-6-1.jpg",
      "33-nike-free-metcon-6-2.jpg",
      "33-nike-free-metcon-6-3.jpg"
    ]
  },
  {
    id: 34,
    name: "Nike Dunk Low / Unisex",
    subtitle: "• Talla 39 - 24.5cm Orig",
    brand: "Nike",
    size: "39",
    cm: "24.5cm",
    detail: "Orig",
    price: 230.00,
    collections: ["All items", "Mujer", "Todas Mujer"],
    colors: ["#fde047", "#9ca3af", "#ffffff"],
    img: "zapatillas_jpg/34.jpg",
    photos: [
      "34-nike-dunk-low-unisex-1.jpg"
    ]
  },
  {
    id: 35,
    name: "Nike Court Vision Low Green",
    subtitle: "• Talla 40 - 25cm Orig",
    brand: "Nike",
    size: "40",
    cm: "25cm",
    detail: "Orig",
    price: 230.00,
    collections: ["All items"],
    colors: ["#ffffff", "#3f6212", "#f5f5f4"],
    img: "zapatillas_jpg/35.jpg",
    photos: [
      "35-nike-court-vision-low-green-1.jpg"
    ]
  },
  {
    id: 36,
    name: "Nike Dunk Low Recraft Mujer",
    subtitle: "• Talla 38 - 24cm Orig",
    brand: "Nike",
    size: "38",
    cm: "24cm",
    detail: "Orig",
    price: 230.00,
    collections: ["All items", "Mujer", "Todas Mujer"],
    colors: ["#fbcfe8", "#f472b6", "#ffffff"],
    img: "zapatillas_jpg/36.jpg",
    photos: [
      "36-nike-dunk-low-recraft-mujer-1.jpg",
      "36-nike-dunk-low-recraft-mujer-2.jpg",
      "36-nike-dunk-low-recraft-mujer-3.jpg"
    ]
  },
  {
    id: 37,
    name: "Nike ZoomX",
    subtitle: "•Talla 43- 27.5cm Orig",
    brand: "Nike",
    size: "43",
    cm: "27.5cm",
    detail: "Orig",
    price: 180.00,
    collections: ["All items"],
    colors: ["#f8fafc", "#18181b", "#2dd4bf"],
    img: "zapatillas_jpg/37.jpg",
    photos: [
      "37-nike-zoomx-1.jpg",
      "37-nike-zoomx-2.jpg"
    ]
  },
  {
    id: 38,
    name: "HOKA Bondi 8",
    subtitle: "• Talla 39 - 24.5cm Orig",
    brand: "HOKA",
    size: "39",
    cm: "24.5cm",
    detail: "Orig",
    price: 200.00,
    collections: ["All items"],
    colors: ["#9ca3af", "#4b5563", "#d1d5db"],
    img: "zapatillas_jpg/38.jpg",
    photos: [
      "38-hoka-bondi-8-1.jpg",
      "38-hoka-bondi-8-2.jpg"
    ]
  },
  {
    id: 39,
    name: "Air Force X LV 1 07 White Grey",
    subtitle: "• Talla 40 - 25cm Orig",
    brand: "Nike",
    size: "40",
    cm: "25cm",
    detail: "Orig",
    price: 280.00,
    collections: ["All items"],
    colors: ["#f8fafc", "#d1d5db", "#ffffff"],
    img: "zapatillas_jpg/39.jpg",
    photos: [
      "39-air-force-x-lv-1-07-white-grey-1.jpg"
    ]
  },
  {
    id: 41,
    name: "Nike Air Zoom",
    subtitle: "• Talla 45 - 29 cm Orig",
    brand: "Nike",
    size: "45",
    cm: "29 cm",
    detail: "Orig",
    price: 200.00,
    collections: ["All items"],
    colors: ["#1e293b", "#ea580c", "#ffffff"],
    img: "zapatillas_jpg/41.jpg",
    photos: [
      "41-nike-air-zoom-1.jpg"
    ]
  },
  {
    id: 42,
    name: "New Balance 57/40 Gamuza Mujer",
    subtitle: "• Talla 38 - 23.5cm Orig",
    brand: "New Balance",
    size: "38",
    cm: "23.5cm",
    detail: "Orig",
    price: 250.00,
    collections: ["All items", "Mujer", "Todas Mujer"],
    colors: ["#a8a29e", "#f5f5f4", "#18181b"],
    img: "zapatillas_jpg/42.jpg",
    photos: [
      "42-new-balance-57-40-gamuza-mujer-1.jpg",
      "42-new-balance-57-40-gamuza-mujer-2.jpg"
    ]
  },
  {
    id: 43,
    name: "On Cloud - Cloudtec",
    subtitle: "•Talla 41 - 26 cm RA1",
    brand: "On Cloud",
    size: "41",
    cm: "26 cm",
    detail: "RA1",
    price: 200.00,
    collections: ["All items"],
    colors: ["#f5f5f4", "#7f1d1d", "#e7e5e4"],
    img: "zapatillas_jpg/43.jpg",
    photos: [
      "43-on-cloud-cloudtec-1.jpg",
      "43-on-cloud-cloudtec-2.jpg"
    ]
  },
  {
    id: 44,
    name: "Adidas Campus 00s Green",
    subtitle: "• Talla 38 - 23.5 cm Orig",
    brand: "Adidas",
    size: "38",
    cm: "23.5 cm",
    detail: "Orig",
    price: 250.00,
    collections: ["All items", "Hombre"],
    colors: ["#047857", "#ffffff", "#fde68a"],
    img: "zapatillas_jpg/44.jpg",
    photos: [
      "44-adidas-campus-00s-green-1.jpg",
      "44-adidas-campus-00s-green-2.jpg",
      "44-adidas-campus-00s-green-3.jpg"
    ]
  }
];
