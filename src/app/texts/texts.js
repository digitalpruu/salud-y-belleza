const title = "Salud y Belleza";
const email = "aracelysierra1972@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en los servicios de " + title + " y me gustaría recibir más información sobre limpieza de uñas. ¡Gracias!"
);
const numeroWhatsApp = "+573202150663"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En 'Salud y Belleza' nos especializamos en el cuidado personal, proporcionando servicios de limpieza de uñas de alta calidad. Nos dedicamos a brindarte una experiencia única que realce tu belleza y bienestar.",
        description2: "Utilizamos productos seleccionados cuidadosamente para ofrecerte resultados impecables, enfocándonos en mejorar tu salud y apariencia a través de un servicio profesional y personalizado. ¡Descubre la experiencia 'Salud y Belleza' y siéntete renovada!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Vida saludable",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/", // No proporcionado, link genérico
        instagram: "https://www.instagram.com/", // No proporcionado, link genérico
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
