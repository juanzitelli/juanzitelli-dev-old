import { Technology } from "./Technology";

export interface JobExperience {
  company: string;
  start: Date;
  end: Date | string;
  location: string;
  technologies: Technology[];
  description: string;
  learned: string;
}
