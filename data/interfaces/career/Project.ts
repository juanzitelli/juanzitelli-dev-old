import { Technology } from "./Technology";

export interface Project {
  name: string;
  description: string;
  technologies: Technology[];
  link: string;
  githubRepo: string;
}
