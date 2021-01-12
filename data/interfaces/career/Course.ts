import { Project } from "./Project";

export interface Course {
  title: string;
  description: string;
  projects: Project[];
}
