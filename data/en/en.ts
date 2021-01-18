import { LocaleInterface } from "../interfaces/LocaleInterface";
import { jobExperiences } from "./career/jobExperiences";

const en: LocaleInterface = {
  home: {
    navbarItems: [
      { description: "Home", url: "/" },
      { description: "Career", url: "/career" },
      { description: "About", url: "/about" },
      { description: "Projects", url: "/projects" },
      { description: "Contact", url: "/contact" },
    ],
    descriptions: [
      "Systems Analyst",
      "Full Stack JavaScript Developer",
      "Software Engineering Student",
      "Amateur Guitarrist",
      "English Language Enthusiast",
    ],
    madeBy: "Made with 💞 by",
    downloadCVButton: "Download my CV",
    getToKnowMeButton: "Get to know me!",
  },
  career: {
    title: "Career",
    description:
      "This section describes everything you need to know about my career in Software Engineering",
    jobExperiencesSection: {
      title: "Job Experiences",
      jobExperiences,
      timeline: { title: "When?" },
      location: { title: "Where?" },
      learned: { title: "What did I learn?" },
      description: { title: "Description" },
      technologies: { title: "Technologies" },
    },
    universitySection: {
      averageScore: { title: "Average score" },
      choice: { title: "Why did I choose Software Engineering?" },
      expectations: { title: "Expectation for the following years" },
      subjects: { title: "What subjects do I like the most?" },
      title: "University",
      university: {
        choice: `Since my father is a retired Systems Analyst, I've had a close relationship with computers since I was a little child. As I grew up I started to notice how much potential computers and specially software had, watching my dad speed up regular tasks as writing notes or mailing using tools like Word / email clients (respectively). Firstly I was seduced by videogames, specially Age of Empires II (I wanted to see my home country Argentina be part of that game as a brand new civilization!). Then, robotics and automation called my attention as I saw robotic arms put cars and complex devices together using software and physics. Finally, I saw the lack of efficiency that businesses and state entities had because of the many tasks that they were performing manually (mostly paperwork), and I found myself thinking "This whole waiting line could dissapear if those paper forms could be filled online and sent by email or some platform!". That's when I knew that Software Engineering was my path!`,
        subjects: `I do like the ones where there's a huge project to build and the different topics this particular subject teaches you, help you solve difficulties that may appear along the way. In the other side of the highway, I definetly do not enjoy fully theoretical subjects. Not because I don't like reading theory, but because I truly believe those could be sum up in two or three classes and then, just videoconferences or YouTube videos! And leave more in-class time to practise and ask the teacher for advice.`,
        expectations: ` I expect to learn much more about the "human" part of the software industry. I want to learn how a company is built and what do I need to construct one, also I'd love to learn how software companies manage their teams and how are the dynamics like inside of a development team`,
        averageScore: 9.2,
      },
    },
    coursesSection: {
      coursesURLs: [""],
      title: "Courses",
    },
  },
  about: {
    title: "About me",
    description: "Find out some non-software related stuff about my life",
    briefDescription:
      "Systems Analyst and future software engineer with focus in social impact initiatives. I like to use web technologies to solve little problems. Gained some experience in idea spreading and teamwork thanks to TEDxSanNicolás. Always fond of learning and applying new skills, and I hope to give back to community in the future.",
    sportsSection: {
      title: "Sports",
      timeline: {
        title: "When?",
      },
      location: {
        title: "Where?",
      },
      learned: {
        title: "What did I learn?",
      },
      sports: [
        {
          name: "Taekwondo",
          start: new Date(2006, 5, 10),
          end: new Date(2016, 21, 20),
          location: "San Nicolás de los Arroyos, Buenos Aires, Argentina",
          learned: `This one left me many experiences and values that I carry with me no matter what. Perseverance (to never give up on something I really desire), self control (to remember to stay calm and thoughtful during unpleasant situations), integrity (to stay true to what I believe it's right), courtesy (to always being polite and respectful to my peers and superiors) and indomitable spirit (to keep on learning from my mistakes and never back down in front of a challenge).`,
        },
      ],
    },
    booksSection: {
      title: "Books",
      name: {
        title: "Name",
      },
      author: {
        title: "Author",
      },
      publisher: {
        title: "Publisher",
      },
      year: {
        title: "Release year",
      },
      learned: {
        title: "What did I learn?",
      },
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
    musicSection: {
      title: "Music",
      description: "Check out my 2020's favorite songs!",
    },
  },
  contact: {
    title: "Let's work together!",
    subtitle: "(Or maybe just have a cup of coffee ☕)",
    emailFormTitle: "Fill the form below and press 'Send' to email me",
    socialMediaLinksTitle: "Or you can contact me via social media!",
    email: {
      emailSentError: "Oops, something went wrong... Try again later! 😅",
      emailSentSuccess: "Your email was successfully sent! 😁",
      sendButtonText: "Send",
      buttonTitles: {
        githubRepositoryTitle: "Go to the project's Github repo",
        projectWebsiteTitle: "Go to the project's website",
      },
    },
    fields: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email address",
      message: "Message",
    },
  },
  projects: {
    title: "Projects",
    description: "Check out my public projects! If the project's deployed, you can check it's website out by pressing the green button",
    takeMeThereText: "Take me there!",
  },
};

export default en;
