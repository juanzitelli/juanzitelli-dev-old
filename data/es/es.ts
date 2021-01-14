import { LocaleInterface } from "../interfaces/LocaleInterface";
import { courses } from "../es/career/courses";
import { jobExperiences } from "../es/career/jobExperiences";

const es: LocaleInterface = {
  home: {
    navbarItems: [
      { description: "Inicio", url: "/" },
      { description: "Carrera", url: "/career" },
      { description: "Sobre mí", url: "/about" },
      { description: "Proyectos", url: "/projects" },
      { description: "Contacto", url: "/contact" },
    ],
    descriptions: [
      "Analista en sistemas",
      "Desarrollador JavaScript Full Stack",
      "Estudiante de ingeniería en sistemas informáticos",
      "Guitarrista amateur",
      "Entusiasta del idioma inglés",
    ],
    madeBy: "Desarrollado con 💞 por",
    downloadCVButton: "Descargá mi CV",
    getToKnowMeButton: "¿Quién soy?",
  },
  career: {
    title: "Carrera",
    description:
      "Esta sección describe todo lo que necesitás saber acerca de mi carrera en Ingeniería en sistemas",
    coursesSection: {
      title: "Cursos",
      courses: courses,
    },
    jobExperiencesSection: {
      title: "Experiencias laborales",
      jobExperiences,
      timeline: { title: "¿Cuándo?" },
      location: { title: "¿Dónde?" },
      learned: { title: "¿Qué aprendí?" },
      description: { title: "Descripción" },
      technologies: { title: "Tecnologías utilizadas" },
    },
    universitySection: {
      averageScore: { title: "Puntaje promedio hasta la fecha" },
      choice: { title: "¿Por qué elegí Ingeniería en Sistemas Informáticos?" },
      expectations: { title: "Expectativas para próximos años" },
      subjects: { title: "¿Qué materias me gustan más?" },
      title: "Universidad",
      university: {
        choice: `Como mi padre es un analista en sistemas retirado, tengo una relación cercana con las computadoras desde que era pequeño. A medida que fue creciendo empecé a notar cuánto potencial tenían las computadoras y especialmente el software, Mientras veía a mi padre agilizar tareas regulares Cómo escribir notas o enviar correos electrónicos con herramientas como Microsoft Word / Gmail respectivamente. En un primer momento me vi seducido por los videojuegos,  especialmente Age of Empires 2 (Quería ver a mi país de origen Argentina como una nueva civilización participante del juego, y quería incluirla yo mismo). Luego la robótica y La automatización llamaron mi atención mientras veía a brazos robóticos ensamblar autos y dispositivos complejos utilizando software y conceptos de física. Finalmente comencé a ver la falta de eficiencia qué negocios y entidades estatales tenían debido a la cantidad de tareas que estaban realizando de forma manual (Principalmente trámites y papeleo), dado esto, me encontré a mi mismo pensando: “Esta línea de espera completa podría desaparecer si esos formularios en papel pudieran ser completados de forma online y enviados vía correo electrónico o por alguna plataforma web”. Ahí es cuando supe que la ingeniería en sistemas era mi camino.`,
        subjects: `Me gustan las materias donde hay un gran proyecto que construir y los diferentes tópicos De dicha materia te ayudan a resolver dificultades que pueden llegar a parecer a lo largo del camino de construir ese proyecto. Por otro lado,  no me gustan las materias que son 100% teóricas,  no porque no me guste leer teoría, pero porque realmente creo que dicha materias podrían ser resumidas en dos o tres clases y luego sólo videoconferencias o vídeos de YouTube,  para así dejar más tiempo de clase para preguntarle cosas al docente y practicar mediante ejercicios.
`,
        expectations: `Espero aprender mucho más acerca de la parte humana de la Industria del software. Quiero aprender cómo se construye una compañía y que necesito para poder llevar a cabo una. Además me gustaría aprender cómo las compañías de software manejan sus equipos y cómo son las dinámicas dentro de un equipo de desarrollo con clientes reales.`,
        averageScore: 9.2,
      },
    },
  },
  about: {
    title: "Sobre mí",
    description: "Algunas cosas no relacionadas con software acerca de mi vida",
    briefDescription:
      "Analista y futuro ingeniero en sistemas informáticos con enfoque en iniciativas con impacto social. Me gusta usar tecnologías web para resolver pequeños problemas. Tengo experiencia en difusión de ideas gracias a TEDxSanNicolás. Siempre comprometido a aprender y aplicar nuevas habilidades, y espero devolverle a la comunidad con trabajo en el futuro.",
    sportsSection: {
      title: "Deportes",
      sports: [
        {
          name: "Taekwondo",
          start: new Date("10-05-2006"),
          end: new Date("20-12-2016"),
          location: "San Nicolás de los Arroyos, Buenos Aires, Argentina",
          learned: `Este me dejó con muchas experiencias y valores que llevo conmigo sin importar la situación. Perseverancia (A nunca dejar de lado algo que realmente deseo), Autocontrol (Para siempre recordar mantenerme calmó Y pensativo durante situaciones poco agradables), Integridad (Para mantenerme fiel a lo que creo que es correcto), Cortesía (Para siempre ser educado y respetuoso con mis compañeros y superiores) y Espíritu indomáble (Para seguir aprendiendo de mis errores y nunca retroceder en frente de un desafío)`,
        },
      ],
      learned: {
        title: "¿Qué aprendí?",
      },
      timeline: {
        title: "¿Cuándo?",
      },
      location: {
        title: "¿Dónde?",
      },
    },
    booksSection: {
      title: "Libros",
      name: {
        title: "Nombre",
      },
      author: {
        title: "Autor",
      },
      publisher: {
        title: "Editorial",
      },
      year: {
        title: "Año de lanzamiento",
      },
      learned: {
        title: "¿Qué aprendí?",
      },
      books: [
        {
          name: "Charlas TED - La guía oficial TED para hablar en público",
          author: "Chris Anderson",
          publisher: "Houghton Mifflin",
          year: 2017,
          learned: `A pesar de ser este mi primer libro Leído completo, "Charlas TED" se sintió como una docena de libros diferentes en uno solo. Aprendí los más de 1000 aspectos que podría mejorar en mis exposiciones orales (dí algunas charlas en el pasado pero claramente podría haberlas hecho mejor). También me enseñó que las ideas son este abstracto concepto, que si vale la pena difundirse, puede cambiar el curso de muchas vidas.`,
        },
      ],
    },
    musicSection: {
      title: "Música",
      description: "¡Estas son mis canciones favoritas del 2020!",
    },
  },
  contact: {
    title: "¡Trabajemos juntos!",
    subtitle: "(O quizás solo ir por una taza de café ☕)",
    emailFormTitle: `Completá el siguiente formulario y presiona "Enviar" para enviarme un correo electrónico`,
    socialMediaLinksTitle: "¡También podés contactarme vía redes sociales!",
    sendButtonText: "Enviar",
    fields: {
      firstName: "Nombre/s",
      lastName: "Apellido/s",
      email: "Dirección de correo electrónico",
      message: "Mensaje",
    },
  },
  projects: {
    title: "Proyectos",
    description: "¡Estos son mis proyectos públicos! Hacé click en ellos para ver más detalles",
    takeMeThereText:"¡Quiero verlo!"
  },
};

export default es;
