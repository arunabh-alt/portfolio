export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export interface Publication {
  title: string;
  journal: string;
  url: string;
  type: 'article' | 'conference';
  isFirstAuthor: boolean;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
}