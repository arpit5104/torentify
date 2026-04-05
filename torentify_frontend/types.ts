
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  postedAt: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

export type LocationType = 'US' | 'Canada' | 'UK';
