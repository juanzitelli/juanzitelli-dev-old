import { Course } from "../../interfaces/career/Course";

export const courses: Course[] = [
  {
    title: "React de cero a experto (Hooks & MERN)",
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