/**
 * Catálogo de fotografías de la exposición.
 * Fuente única de información de la galería.
 */

const photos = [

    {
        id: 1,
        title: "Paisaje al amanecer",
        subtitle: "Luz dorada sobre la selva",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto01.jpg",
        thumbnail: "img/foto01.jpg",
        description: `
            Un paisaje sereno capturado al amanecer, donde la luz dorada baña la vegetación y crea un contraste suave entre sombras y tonos verdes.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Naturaleza",
            "Amanecer"
        ]
    },

    {
        id: 2,
        title: "Camino entre palmeras",
        subtitle: "Sendero tropical",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto02.jpg",
        thumbnail: "img/foto02.jpg",
        description: `
            Un sendero trazado entre palmeras altas y follaje denso que invita a recorrer un paisaje tropical lleno de paz y frescura.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Paisaje",
            "Tropical"
        ]
    },

    {
        id: 3,
        title: "Reflejo en el agua",
        subtitle: "Espejo natural",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto03.jpg",
        thumbnail: "img/foto03.jpg",
        description: `
            Una escena tranquila en la que el agua recoge los colores del cielo y la vegetación, creando un reflejo casi perfecto.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Reflejo",
            "Agua"
        ]
    },

    {
        id: 4,
        title: "Arquitectura ancestral",
        subtitle: "Texturas del tiempo",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto04.jpg",
        thumbnail: "img/foto04.jpg",
        description: `
            Un encuadre que destaca la textura de una estructura antigua, resaltando las capas del pasado y la interacción entre luz y piedra.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Arquitectura",
            "Historia"
        ]
    },

    {
        id: 5,
        title: "Calle iluminada",
        subtitle: "Noches de ciudad",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto05.jpg",
        thumbnail: "img/foto05.jpg",
        description: `
            Una calle urbana donde las luces amarillas resaltan el pavimento mojado y crean una atmósfera íntima y cálida.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Urbano",
            "Nocturna"
        ]
    },

    {
        id: 6,
        title: "Bicicleta abandonada",
        subtitle: "Historia cotidiana",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto06.jpg",
        thumbnail: "img/foto06.jpg",
        description: `
            Una bicicleta estacionada contra una pared texturizada, que sugiere historias de viajes, pausas y recuerdos locales.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Retrato",
            "Calle"
        ]
    },

    {
        id: 7,
        title: "Sombras en blanco y negro",
        subtitle: "Contraste dramático",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto07.jpg",
        thumbnail: "img/foto07.jpg",
        description: `
            Una imagen que juega con siluetas y sombras, creando un contraste visual intenso y una sensación de misterio.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Blanco y negro",
            "Silueta"
        ]
    },

    {
        id: 8,
        title: "Detalle floral",
        subtitle: "Color y fragancia",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto08.jpg",
        thumbnail: "img/foto08.jpg",
        description: `
            Un primer plano de una flor vibrante, con pétalos delicados y colores saturados que atraen la mirada.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Macro",
            "Flor"
        ]
    },

    {
        id: 9,
        title: "Atardecer en la playa",
        subtitle: "Cielos cálidos",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto09.jpg",
        thumbnail: "img/foto09.jpg",
        description: `
            Las olas suaves y los tonos anaranjados del cielo se funden en una escena tranquila de playa al atardecer.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Playa",
            "Atardecer"
        ]
    },

    {
        id: 10,
        title: "Reflejo urbano",
        subtitle: "Ciudad en cristal",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto10.jpg",
        thumbnail: "img/foto10.jpg",
        description: `
            Edificios modernos se reflejan en una superficie de agua o vidrio, generando una composición geométrica elegante.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Urbano",
            "Reflejo"
        ]
    },

    {
        id: 11,
        title: "Retrato en el mercado",
        subtitle: "Rostro y emoción",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto11.jpg",
        thumbnail: "img/foto11.jpg",
        description: `
            Un retrato que captura la expresión y la personalidad de una persona en un entorno cotidiano y vibrante.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Retrato",
            "Cultura"
        ]
    },

    {
        id: 12,
        title: "Río tranquilo",
        subtitle: "Movimiento sereno",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto12.jpg",
        thumbnail: "img/foto12.jpg",
        description: `
            El curso de un río fluye suavemente entre vegetación, con una atmósfera de calma y equilibrio natural.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Agua",
            "Naturaleza"
        ]
    },

    {
        id: 13,
        title: "Detalles de arquitectura",
        subtitle: "Líneas y volúmenes",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto13.jpg",
        thumbnail: "img/foto13.jpg",
        description: `
            Un encuadre que realza las formas arquitectónicas y juega con la sombra para definir estructuras geométricas.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Arquitectura",
            "Detalle"
        ]
    },

    {
        id: 14,
        title: "Silencio del desierto",
        subtitle: "Arenas y texturas",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto14.jpg",
        thumbnail: "img/foto14.jpg",
        description: `
            Una escena abierta donde las dunas y las texturas del terreno evocan la inmensidad y la quietud del desierto.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Paisaje",
            "Desierto"
        ]
    },

    {
        id: 15,
        title: "Noche estrellada",
        subtitle: "Cielo infinito",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto15.jpg",
        thumbnail: "img/foto15.jpg",
        description: `
            El cielo nocturno aparece lleno de estrellas, con una composición que invita a contemplar la vastedad del universo.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Nocturna",
            "Cielo"
        ]
    },

    {
        id: 16,
        title: "Puerta antigua",
        subtitle: "Entrada al pasado",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto16.jpg",
        thumbnail: "img/foto16.jpg",
        description: `
            Una puerta de madera envejecida cuenta historias de generaciones, con detalles de herrajes y textura en cada veta.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Arquitectura",
            "Patrimonio"
        ]
    },

    {
        id: 17,
        title: "Niños jugando",
        subtitle: "Alegría espontánea",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto17.jpg",
        thumbnail: "img/foto17.jpg",
        description: `
            Un momento lleno de energía y sonrisa, donde los niños se mueven libremente y transmiten una sensación de felicidad.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Retrato",
            "Infancia"
        ]
    },

    {
        id: 18,
        title: "Hojas en el viento",
        subtitle: "Movimiento natural",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto18.jpg",
        thumbnail: "img/foto18.jpg",
        description: `
            Una escena de hojas mecidas por el viento que captura el movimiento sutil y la frescura del entorno.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Naturaleza",
            "Movimiento"
        ]
    },

    {
        id: 19,
        title: "Tren en la estación",
        subtitle: "Viaje en espera",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto19.jpg",
        thumbnail: "img/foto19.jpg",
        description: `
            Una composición que sugiere desplazamiento y pausa, con líneas de ferrocarril y la presencia silenciosa de la estación.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Transporte",
            "Estación"
        ]
    },

    {
        id: 20,
        title: "Mirada al horizonte",
        subtitle: "Esperanza y espacio",
        author: "Autor",
        place: "Yucatán",
        municipality: "",
        state: "",
        country: "México",
        date: "2026",
        image: "img/foto20.jpg",
        thumbnail: "img/foto20.jpg",
        description: `
            Un encuadre amplio donde el horizonte se extiende más allá, transmitiendo serenidad, amplitud y promesa de nuevos comienzos.
        `,
        technique: "",
        collection: "",
        year: 2026,
        tags: [
            "Horizonte",
            "Paisaje"
        ]
    }

];