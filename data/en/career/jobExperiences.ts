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
    description: `A good friend of mine and I got hired to work with our former programming teacher back on our first year at university. We were basically in charge of developing end to end features that clients required from the company's software. This included: Firstly building complex MySQL queries and implement them in the codebase taking care of performance and security details, secondly designing new HTML5 pages and styling them with CSS3 making them accessible and responsive and finally working with huge PHP files by making the data requested from the database accessible from the view.`,
    learned: `This was my first introduction to web development and also a first-look into real world work with databases (I've had worked with SQL Servers DB's before but only for academic purposes). I also had a (rough) first impression to code versioning with Git, SourceTree (client) and Bitbucket (cloud), which gave me a glimpse of what's like to work as part of a software development team!.`,
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

    learned: `Despite the fact that's an internship we're talking about, this position has given me the chance to work with a very exciting and modern programming language as Python, using popular PyPi packages as NumPy, Pandas, Googletrans, and others. I also had the chance to better understand REST API's concepts and HTTP protocol methods`,
  },
];
