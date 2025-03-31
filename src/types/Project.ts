import { StaticImageData } from "next/image";

export interface ProjectType {
  linkPreview: string | null;
  linkArticle: string | null;
  linkFigma: string | null;
  image: StaticImageData;
  description: string;
  title: string;
  linkGithub: string | null;
  technologies: Array<string>;
  tags: Array<string>;
}