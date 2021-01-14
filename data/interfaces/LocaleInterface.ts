import { Book } from "./about/Book";
import { Sport } from "./about/Sport";
import { Course } from "./career/Course";
import { JobExperience } from "./career/JobExperience";
import { University } from "./career/University";
import { NavbarItem } from "./ui/NavbarItem";

export interface LocaleInterface {
  home: {
    navbarItems: NavbarItem[];
    descriptions: string[];
    madeBy: string;
    getToKnowMeButton: string;
    downloadCVButton: string;
  };
  /**
   * company
      start
      end
      location
      technologies
      description
      learned
  },
   */
  career: {
    title: string;
    description: string;
    jobExperiencesSection: {
      timeline: { title: string };
      location: { title: string };
      learned: { title: string };
      description: { title: string };
      technologies: { title: string };
      title: string;
      jobExperiences: JobExperience[];
    };
    universitySection: {
      choice: { title: string };
      expectations: { title: string };
      averageScore: { title: string };
      subjects: { title: string };
      title: string;
      university: University;
    };
    coursesSection: {
      title: string;
      courses: Course[];
    };
  };
  about: {
    title: string;
    description: string;
    briefDescription: string;
    sportsSection: {
      title: string;
      timeline: {
        title: string;
      };
      location: {
        title: string;
      };
      learned: {
        title: string;
      };
      sports: Sport[];
    };
    booksSection: {
      title: string;
      name: {
        title: string;
      };
      author: {
        title: string;
      };
      publisher: {
        title: string;
      };
      year: {
        title: string;
      };
      learned: {
        title: string;
      };
      books: Book[];
    };
    musicSection: {
      title: string;
      description: string;
    };
  };

  contact: {
    title: string;
    subtitle: string;
    emailFormTitle: string;
    socialMediaLinksTitle: string;
    sendButtonText: string;
    fields: {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
    };
  };
  projects: {
    title: string;
    description: string;
    takeMeThereText: string;
  };
}
