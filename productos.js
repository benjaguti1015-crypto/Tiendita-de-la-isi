// =============================================================
//  CATÁLOGO · La Tiendita de la Isi
//  Para cambiar un precio, agregar o quitar un perfume, edita
//  solo este archivo. Ver README.md.
// =============================================================
const TIENDA = {
  whatsapp: "56944640625",          // número sin + ni espacios
  instagram: "la__tiendita_de__isi",
};

// Colores de cada acorde (barras de "Acordes principales")
const COLORES_ACORDES = {
  "cítrico": "#F3E56B",
  "amaderado": "#C9A27E",
  "pachulí": "#AEB98A",
  "dulce": "#F29A9F",
  "floral blanco": "#EDEAF5",
  "rosas": "#F58DBB",
  "terrosos": "#BDB3A8",
  "avainillado": "#F7ECC0",
  "floral amarillo": "#F6E07C",
  "cálido especiado": "#E7A98F",
  "atalcado": "#EDE2D2",
  "almizclado": "#DDD2EA",
  "acerezado": "#E37D91",
  "aromático": "#8FCDB9",
  "fresco": "#AFE1EB",
  "afrutados": "#F0835A",
  "caramelo": "#E3B06A",
  "cera de abeja": "#EDBE5A",
  "amielado": "#F4B04A",
  "animálico": "#C79B7A",
  "aldehídico": "#D7E0F2",
  "florales": "#F58FB8",
  "acuático": "#96D9E0",
  "ámbar": "#E8A57A",
  "tabaco": "#CFA672",
  "fresco especiado": "#B2DC7A",
  "iris": "#CDBEE8",
  "lavanda": "#DCCBEE",
  "cacao": "#C29A80",
  "almendrado": "#F1E6D2",
  "nueces": "#D6C3A2",
  "verde": "#93D49A",
  "canela": "#E8A27A",
  "cuero": "#C4A894"
};

// para: "ella" o "el" · fresco/dulce/intenso: de 1 a 5
const PERFUMES = [
  {
    "id": "chanel",
    "para": "ella",
    "marca": "Chanel",
    "nombre": "Coco Mademoiselle Intense",
    "imagen": "img/chanel.jpg",
    "color": "#FFE0D2",
    "etiqueta": "Premium",
    "acordes": [
      "cítrico",
      "amaderado",
      "pachulí",
      "dulce",
      "floral blanco",
      "rosas"
    ],
    "descripcion": "Elegancia con carácter. Un destello cítrico que se vuelve rosas y flores blancas, y se queda en tu piel con pachulí, vainilla y madera. Deja estela y todos preguntan cuál es.",
    "extra": null,
    "fresco": 2,
    "dulce": 3,
    "intenso": 5,
    "idealPara": "Cenas y ocasiones especiales",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 7,
        "precio": 20000
      },
      {
        "ml": 10,
        "precio": 25000
      }
    ]
  },
  {
    "id": "qdolce",
    "para": "ella",
    "marca": "Dolce & Gabbana",
    "nombre": "Q by Dolce & Gabbana",
    "imagen": "img/qdolce.jpg",
    "color": "#FFD9E0",
    "etiqueta": "Favorito",
    "acordes": [
      "cítrico",
      "atalcado",
      "almizclado",
      "acerezado",
      "amaderado",
      "dulce"
    ],
    "descripcion": "Dulce, luminoso y con corona. Cítricos chispeantes sobre un fondo suave de cereza, polvo y almizcle. Te hace sentir reina en cualquier plan.",
    "extra": null,
    "fresco": 3,
    "dulce": 4,
    "intenso": 3,
    "idealPara": "Todo el día, con actitud de reina",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 5,
        "precio": 10000
      },
      {
        "ml": 10,
        "precio": 15000
      }
    ]
  },
  {
    "id": "lightblue",
    "para": "ella",
    "marca": "Dolce & Gabbana",
    "nombre": "Light Blue",
    "imagen": "img/lightblue.jpg",
    "color": "#D9EEF4",
    "etiqueta": "Fresco",
    "acordes": [
      "cítrico",
      "amaderado",
      "fresco",
      "afrutados",
      "aromático"
    ],
    "descripcion": "Un verano dentro de un frasco. Limón y manzana crujiente con jazmín, bambú y almizcle sobre madera de cedro. Limpio, fresco y siempre a tono.",
    "extra": "Notas: limón, manzana, cedro, bambú, almizcle y jazmín. Dura unas 6 horas.",
    "fresco": 5,
    "dulce": 2,
    "intenso": 2,
    "idealPara": "Verano, playa y días de calor",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 5,
        "precio": 12000
      },
      {
        "ml": 10,
        "precio": 18000
      }
    ]
  },
  {
    "id": "lacoste",
    "para": "ella",
    "marca": "Lacoste",
    "nombre": "Pour Femme Intense",
    "imagen": "img/lacoste.jpg",
    "color": "#EAD6C0",
    "etiqueta": "Cálido",
    "acordes": [
      "caramelo",
      "amaderado",
      "dulce",
      "atalcado",
      "almizclado"
    ],
    "descripcion": "Calidez que abraza. Caramelo y madera con un dulzor suave y un fondo de polvo y almizcle. Perfecto para tardes de café y noches tranquilas.",
    "extra": null,
    "fresco": 1,
    "dulce": 4,
    "intenso": 4,
    "idealPara": "Tardes de café y noches tranquilas",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 5,
        "precio": 6000
      },
      {
        "ml": 10,
        "precio": 10000
      }
    ]
  },
  {
    "id": "nectar",
    "para": "ella",
    "marca": "DKNY · Donna Karan",
    "nombre": "Nectar Love",
    "imagen": "img/nectar.jpg",
    "color": "#FBE6B3",
    "etiqueta": "Goloso",
    "acordes": [
      "cera de abeja",
      "amielado",
      "afrutados",
      "dulce",
      "avainillado",
      "animálico"
    ],
    "descripcion": "Dulzura dorada. Cera de abeja y miel con frutas jugosas, vainilla y un toque dulce que enamora. Golosa, adictiva y muy tú.",
    "extra": null,
    "fresco": 1,
    "dulce": 5,
    "intenso": 4,
    "idealPara": "Carretes y antojos dulces",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 5,
        "precio": 6000
      },
      {
        "ml": 10,
        "precio": 10000
      }
    ]
  },
  {
    "id": "dkny",
    "para": "ella",
    "marca": "DKNY · Donna Karan",
    "nombre": "Be Extra Delicious",
    "imagen": "img/dkny.jpg",
    "color": "#FBD9E6",
    "etiqueta": "Alegre",
    "acordes": [
      "afrutados",
      "dulce",
      "caramelo",
      "florales",
      "fresco",
      "acuático"
    ],
    "descripcion": "Fruta, caramelo y flores en versión liviana. Jugoso al empezar, floral al medio y con un toque acuático que lo hace fresco. Alegre y fácil de amar.",
    "extra": null,
    "fresco": 4,
    "dulce": 4,
    "intenso": 2,
    "idealPara": "Paseos y días alegres",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 5,
        "precio": 6000
      },
      {
        "ml": 10,
        "precio": 10000
      }
    ]
  },
  {
    "id": "choo",
    "para": "ella",
    "marca": "Jimmy Choo",
    "nombre": "I Want Choo Forever",
    "imagen": "img/choo.jpg",
    "color": "#F6E1E7",
    "etiqueta": "Dulce",
    "acordes": [
      "avainillado",
      "dulce",
      "rosas",
      "acerezado",
      "almendrado",
      "nueces"
    ],
    "descripcion": "Dulce y adictiva. Vainilla, rosas y cereza con un toque de almendra y nueces. Femenina, cálida y difícil de olvidar.",
    "extra": null,
    "fresco": 1,
    "dulce": 5,
    "intenso": 4,
    "idealPara": "Citas y noches especiales",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 10,
        "precio": 10000
      }
    ]
  },
  {
    "id": "ladymillion",
    "para": "ella",
    "marca": "Paco Rabanne",
    "nombre": "Lady Million Privé",
    "imagen": "img/ladymillion.jpg",
    "color": "#F3E0C8",
    "etiqueta": "Lujo",
    "acordes": [
      "dulce",
      "amaderado",
      "cacao",
      "cálido especiado",
      "amielado",
      "avainillado"
    ],
    "descripcion": "Lujo dorado. Cacao, miel y vainilla con especias cálidas y madera. Golosa, intensa y hecha para brillar de noche.",
    "extra": null,
    "fresco": 1,
    "dulce": 5,
    "intenso": 5,
    "idealPara": "Fiestas y noches de frío",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 10,
        "precio": 15000
      }
    ]
  },
  {
    "id": "theone",
    "para": "ella",
    "marca": "Dolce & Gabbana",
    "nombre": "The One EDP",
    "imagen": "img/theone.jpg",
    "color": "#FAEDC4",
    "etiqueta": "Elegante",
    "acordes": [
      "afrutados",
      "floral blanco",
      "avainillado",
      "atalcado",
      "dulce",
      "ámbar"
    ],
    "descripcion": "Femenina y luminosa. Frutas, flores blancas y vainilla con un fondo cálido de ámbar. Clásica, elegante y siempre un acierto.",
    "extra": null,
    "fresco": 2,
    "dulce": 4,
    "intenso": 3,
    "idealPara": "Todo el día, elegante y cálida",
    "bleed": true,
    "blend": true,
    "formatos": [
      {
        "ml": 10,
        "precio": 15000
      }
    ]
  },
  {
    "id": "dylan",
    "para": "ella",
    "marca": "Versace",
    "nombre": "Pour Femme Dylan Blue",
    "imagen": "img/dylan.jpg",
    "color": "#DCE4F6",
    "etiqueta": "Radiante",
    "acordes": [
      "afrutados",
      "florales",
      "verde",
      "rosas",
      "fresco",
      "amaderado"
    ],
    "descripcion": "Fresca y radiante. Frutas jugosas, flores y rosas con un toque verde y madera. Alegre, moderna y perfecta para el día.",
    "extra": null,
    "fresco": 4,
    "dulce": 3,
    "intenso": 2,
    "idealPara": "Día, oficina y primavera",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 5,
        "precio": 7000
      },
      {
        "ml": 10,
        "precio": 13000
      }
    ]
  },
  {
    "id": "blackxs",
    "para": "el",
    "marca": "Paco Rabanne",
    "nombre": "Black XS",
    "imagen": "img/blackxs.jpg",
    "color": "#E3E6EA",
    "etiqueta": "Rebelde",
    "acordes": [
      "cítrico",
      "cálido especiado",
      "dulce",
      "ámbar",
      "aromático",
      "amaderado"
    ],
    "descripcion": "Rebelde y seductor. Cítricos y especias que se funden con un dulzor ambarado y madera. Para el que llega y se hace notar.",
    "extra": null,
    "fresco": 2,
    "dulce": 3,
    "intenso": 4,
    "idealPara": "Salidas de noche y carretes",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 10,
        "precio": 13000
      }
    ]
  },
  {
    "id": "onemen",
    "para": "el",
    "marca": "Dolce & Gabbana",
    "nombre": "The One for Men",
    "imagen": "img/onemen.jpg",
    "color": "#F2DFC4",
    "etiqueta": "Clásico",
    "acordes": [
      "cálido especiado",
      "ámbar",
      "tabaco",
      "aromático",
      "cítrico",
      "dulce"
    ],
    "descripcion": "Elegancia clásica. Especias cálidas, ámbar y tabaco con un toque cítrico. Sofisticado, envolvente y perfecto para la noche.",
    "extra": null,
    "fresco": 1,
    "dulce": 3,
    "intenso": 5,
    "idealPara": "Noches elegantes y días de frío",
    "bleed": true,
    "blend": true,
    "formatos": [
      {
        "ml": 10,
        "precio": 15000
      }
    ]
  },
  {
    "id": "lbhomme",
    "para": "el",
    "marca": "Dolce & Gabbana",
    "nombre": "Light Blue Pour Homme",
    "imagen": "img/lbhomme.jpg",
    "color": "#DDEBF2",
    "etiqueta": "Fresco",
    "acordes": [
      "cítrico",
      "fresco especiado",
      "aromático",
      "amaderado"
    ],
    "descripcion": "Frescura mediterránea. Cítricos chispeantes con especias frescas, hierbas y madera. Limpio, liviano y perfecto para el día a día.",
    "extra": null,
    "fresco": 5,
    "dulce": 1,
    "intenso": 2,
    "idealPara": "Verano, oficina y día a día",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 10,
        "precio": 15000
      }
    ]
  },
  {
    "id": "chpasion",
    "para": "el",
    "marca": "Carolina Herrera",
    "nombre": "CH Pasión for Him",
    "imagen": "img/chpasion.png",
    "color": "#EFE0D2",
    "etiqueta": "Cálido",
    "acordes": [
      "amaderado",
      "ámbar",
      "atalcado",
      "iris",
      "cálido especiado"
    ],
    "descripcion": "Cálido y con carácter. Madera y ámbar con un toque atalcado de iris y especias. Elegante, masculino y muy envolvente.",
    "extra": null,
    "fresco": 1,
    "dulce": 2,
    "intenso": 4,
    "idealPara": "Citas y ocasiones especiales",
    "bleed": false,
    "blend": false,
    "formatos": [
      {
        "ml": 10,
        "precio": 15000
      }
    ]
  },
  {
    "id": "gucci",
    "para": "el",
    "marca": "Gucci",
    "nombre": "Guilty Intense Pour Homme",
    "imagen": "img/gucci.jpg",
    "color": "#E1E3E6",
    "etiqueta": "Magnético",
    "acordes": [
      "cítrico",
      "aromático",
      "floral blanco",
      "lavanda",
      "ámbar",
      "amaderado"
    ],
    "descripcion": "Moderno y magnético. Cítricos y lavanda sobre un fondo de ámbar, madera y pachulí. Para el que juega con estilo.",
    "extra": null,
    "fresco": 3,
    "dulce": 2,
    "intenso": 4,
    "idealPara": "Oficina y noches con estilo",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 10,
        "precio": 15000
      }
    ]
  },
  {
    "id": "onemillion",
    "para": "el",
    "marca": "Paco Rabanne",
    "nombre": "1 Million",
    "imagen": "img/onemillion.jpg",
    "color": "#F5E6C4",
    "etiqueta": "Icónico",
    "acordes": [
      "cálido especiado",
      "canela",
      "cítrico",
      "ámbar",
      "amaderado",
      "cuero"
    ],
    "descripcion": "Seductor y dorado. Especias cálidas con canela y un toque cítrico, sobre ámbar, madera y cuero. Un clásico que no pasa desapercibido.",
    "extra": null,
    "fresco": 2,
    "dulce": 3,
    "intenso": 5,
    "idealPara": "Fiestas y salidas de noche",
    "bleed": false,
    "blend": true,
    "formatos": [
      {
        "ml": 10,
        "precio": 13000
      }
    ]
  }
];
