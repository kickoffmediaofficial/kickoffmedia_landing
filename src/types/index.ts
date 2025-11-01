import { StaticImageData } from "next/image";

export enum ProjectCategory {
  WebDevelopment = "Web Development",
  DigitalMarketing = "Digital Marketing",
  SEO = "SEO",
  Blockchain = "Blockchain",
  AppDevelopment = "App Development",
}

export interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  category: ProjectCategory[];
  url: string;
  metrics: { duration: string; platform: string };
}
