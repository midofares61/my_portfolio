export interface Project {
  id: number;
  title: string;
  description: string;
  challenges: string;
  technologies: string[];
  role: string;
  contributions: string[];
  links: {
    live?: string;
    github?: string;
    appStore?: string;
    playStore?: string;
  };
  imageUrl: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  teamSize: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export type Theme = 'light' | 'dark';