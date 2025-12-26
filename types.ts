
export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details?: string[];
}

export interface Project {
  title: string;
  client?: string;
  domain?: string;
  teamSize: number;
  tools: string[];
  description: string;
  responsibilities: string[];
}
