import { Book } from "./about/Book";
import { Sport } from "./about/Sport";
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
      coursesURLs: string[];
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
    email: {
      sendButtonText: string;
      emailSentSuccess: string;
      emailSentError: string;
      buttonTitles: {
        githubRepositoryTitle: string;
        projectWebsiteTitle: string;
      }
    }
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
