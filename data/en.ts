import { LocaleInterface, JobExperience, Course } from "./LocaleInterface";

const jobExperiences: JobExperience[] = [
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
    description:
      "A good friend of mine and I got hired to work with our former programming teacher back on our first year at university. We were basically in charge of developing end to end features that clients required from the company's software. This included: Firstly building complex MySQL queries and implement them in the codebase taking care of performance and security details, secondly designing new HTML5 pages and styling them with CSS3 making them accessible and responsive and finally working with huge PHP files by making the data requested from the database accessible from the view.",
    learned: "",
  },
  {
    company: "CAETI - UAI",
    start: new Date("15-06-2019"),
    end: "Present",
    location: "Rosario, Santa Fe, Argentina",
    technologies: [
      { description: "Python" },
      { description: "Flask" },
      { description: "MySQL" },
      { description: "Git" },
      { description: "Linux" },
      { description: "NLTK" },
    ],
    description: `After a year or so of being a technical assistant at my university's computing lab, the faculty's head teacher designed me as the brand new intern at CAETI,which stands for "Centro de Altos Estudios en Tecnología Informática" (IT Advanced Studies Center). This part-time role consists in helping full-time researchers at this center by prototyping web applications that support their scientific papers. Technologically speaking, I basically make "Full Stack" applications using one of the highest-growing Python web frameworks, Flask.`,
    learned: `Despite the fact that's an internship we're talking about, this position has given me the chance to work with a very exciting and modern programming language as Python, using popular PyPi packages as NumPy, Pandas, Googletrans, and others. I also had the chance to better understand REST API's concepts and HTTP protocol methods.`,
  },
];

const courses: Course[] = [
  {
    title: "React from zero to expert (Hooks & MERN)",
    description: `This course helped me to finally understand and dominate modern React.js, as it’s in a 100% built  focusing on React hooks and functional components. It also had sections on unit and integration tests in each application that I did in the course, this includes tests on components, hooks, customHooks, context, Redux, Fetch, mocks, spies, snapshots and much more related to the unit test. It also gave me the necessary knowledge to be a FullStack Developer using React.js and Node.js on the Backend along with MongoDB and Firestore as databases.`,
    projects: [
      {
        name: "GifExpertApp",
        description: `This is the first application that I made during the course. It includes every basic concept about React, using the React Context API as the state management system. I learnt how to make API calls and how to implement useState and useEffect hooks, and how to conditionally render multiple components given a certain list of data (gifs in this case). `,
        technologies: [
          { description: "React" },
          { description: "Context API" },
          { description: "Fetch API" },
          { description: "Jest" },
        ],
        link: `https://juanzitelli.github.io/gif-expert-app/`,
        githubRepo: `https://github.com/juanzitelli/gif-expert-app`,
      },
    ],
  },
];

const en: LocaleInterface = {
  home: {
    navbarItems: ["Home", "About", "Career", "Projects", "Contact"],
    descriptions: [
      "Systems Analyst",
      "Full Stack JavaScript Developer",
      "Software Engineering Student",
      "Amateur Guitarrist",
      "English Language Enthusiast",
    ], // SE Student, FS JS dev ...
    madeBy: "Made with 💞 by",
  },
  career: {
    title: "Career",
    description:
      "This section describes everything you need to know about my career in Software Engineering",
    jobExperiences,
    university: {
      choice: `Since my father is a retired Systems Analyst, I've had a close relationship with computers since I was a little child. As I grew up I started to notice how much potential computers and specially software had, watching my dad speed up regular tasks as writing notes or mailing using tools like Word / email clients (respectively). Firstly I was seduced by videogames, specially Age of Empires II (I wanted to see my home country Argentina be part of that game as a brand new civilization!). Then, robotics and automation called my attention as I saw robotic arms put cars and complex devices together using software and physics. Finally, I saw the lack of efficiency that businesses and state entities had because of the many tasks that they were performing manually (mostly paperwork), and I found myself thinking "This whole waiting line could dissapear if those paper forms could be filled online and sent by email or some platform!". That's when I knew that Software Engineering was my path!`,
      subjects: `I do like the ones where there's a huge project to build and the different topics this particular subject teaches you, help you solve difficulties that may appear along the way. In the other side of the highway, I definetly do not enjoy fully theoretical subjects. Not because I don't like reading theory, but because I truly believe those could be sum up in two or three classes and then, just videoconferences or YouTube videos! And leave more in-class time to practise and ask the teacher for advice.`,
      expectations: ` I expect to learn much more about the "human" part of the software industry. I want to learn how a company is built and what do I need to construct one, also I'd love to learn how software companies manage their teams and how are the dynamics like inside of a development team`,
      averageScore: 9.2,
    },
    courses: [],
  },
  about: {
    title: "About me",
    description: "Find out some non-software related stuff about my life",
    briefDescription: "",
    sports: [
      {
        name: "Taekwondo",
        start: new Date("10-05-2006"),
        end: new Date("20-12-2016"),
        location: "San Nicolás de los Arroyos, Buenos Aires, Argentina",
        learned: `This one left me many experiences and values that I carry with me no matter what. Perseverance (to never give up on something I really desire), self control (to remember to stay calm and thoughtful during unpleasant situations), integrity (to stay true to what I believe it's right), courtesy (to always being polite and respectful to my peers and superiors) and indomitable spirit (to keep on learning from my mistakes and never back down in front of a challenge).`,
      },
    ],
    books: [
      {
        name: "TED Talks - The official TED guide to Public Speaking",
        author: "Chris Anderson",
        publisher: "Houghton Mifflin",
        year: 2017,
        learned: `In spite of being my first ever fully read book, TED Talks felt like a dozen different books in one. I've learnt the more of a thousand aspects that I could improve in my oral expositions (I've given some talks in the past, but oh boy I could've done better!). It has also taught me that ideas are this abstract concept that, if worth spreading, it can turn many lives around.`,
      },
    ],
  },
  contact: {
    title: "Let's work together! (or maybe just have a cup of coffee ☕)", // Contact me...
    emailFormTitle: "Fill the form below and press 'Send' to email me",
    socialMediaLinksTitle: "Or you can contact me via social media!",
  },
};

export default en;
