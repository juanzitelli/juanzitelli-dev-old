import { JobExperience } from "../../interfaces/career/JobExperience";

export const jobExperiences: JobExperience[] = [
  {
    company: "Bi-Sports",
    start: new Date("01-01-2019"),
    end: new Date("01-06-2019"),
    location: "Rosario, Santa Fe, Argentina",
    technologies: [
      {
        description: "PHP",
      },
      {
        description: "MySQL",
      },
      {
        description: "HTML5",
      },
      {
        description: "CSS3",
      },
      {
        description: "Git",
      },
    ],
    description: `Un muy buen amigo mío y yo fuimos contratados para trabajar con nuestro primer profesor de programación en nuestro primer año de la universidad. Estábamos básicamente  a cargo de desarrollar requerimientos completos que los clientes requerían del software de la compañía. Esto incluía: Primeramente construir consultas MySQL complejas e implementarlas en el código teniendo en consideración la performance y detalles de seguridad. También, diseñar nuevas páginas HTML5 y estilizarlas usando CSS3 haciéndolas accesibles y  adaptables y finalmente trabajar con archivos PHP gigantes logrando que la información solicitada de la base de datos sea accesible en la vista`,
    learned: `Como este fue mi primer trabajo en la industria del software, aprendí lo básico acerca del desarrollo web (cómo funcionan las aplicaciones web que funcionan con "Server Side Rendering") y también tuve una breve introducción a lo que es trabajar en un equipo de desarrollo real, usando Git como herramienta de desarrollo y tratar de respetar buenas prácticas para tener un código coherente a lo largo del proyecto.`,
  },
  {
    company: "CAETI - UAI",
    start: new Date("15-06-2019"),
    end: "Presente",
    location: "Rosario, Santa Fe, Argentina",
    technologies: [
      { description: "Python" },
      { description: "Flask" },
      { description: "MySQL" },
      { description: "Git" },
      { description: "Linux" },
      { description: "NLTK" },
    ],
    description: `Luego de aproximadamente un año de ser asistente técnico en el laboratorio de computación de mi universidad, El director de la facultad me designó como el nuevo becario en CAETI, cuyas siglas significan “Centro de altos estudios en tecnología informática”. Este  puesto de medio tiempo consiste en ayudar a investigadores tiempo completo del centro a prototipar aplicaciones web que pongan en práctica sus papers científicos. Tecnológicamente hablando básicamente realizaba aplicaciones full stack utilizando uno de los frameworks web mayormente utilizados de Python: Flask.`,

    learned: `A pesar que es un  becariado de lo que estamos hablando, Este puesto me ha permitido trabajar con un muy emocionante y moderno lenguaje de programación como lo es Python. Usando paquetes  de PyPi como NumPy, Pandas, Googletrans, entre otros. También tuve la oportunidad de entender de una mejor forma conceptos de protocolos HTTP y REST API’s.`,
  },
];