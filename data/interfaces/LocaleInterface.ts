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
  career: {
    title: string;
    description: string;
    jobExperiences: JobExperience[];
    university: University;
    courses: Course[];
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
  };

  contact: {
    title: string; // Contact me...
    emailFormTitle: string;
    socialMediaLinksTitle: string;
  };
}
