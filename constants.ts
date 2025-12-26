
import { SkillCategory, Experience, Project } from './types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "JSON", "WordPress", "Joomla"]
  },
  {
    title: "JavaScript Libraries",
    skills: ["jQuery", "Angular CLI", "React JS", "Bootstrap"]
  },
  {
    title: "Frameworks",
    skills: ["Angular 5/6", "CDT4", "Dev Extreme"]
  },
  {
    title: "Debugging Tools",
    skills: ["Firebug", "Bugzilla"]
  },
  {
    title: "Database",
    skills: ["MySQL"]
  },
  {
    title: "Tools & IDEs",
    skills: ["Notepad++", "Sublime Text", "Visual Studio", "Eclipse"]
  },
  {
    title: "Version Control",
    skills: ["GitHub", "Tortoise SVN"]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Senior Consultant",
    company: "OFSS",
    period: "May 2019 – Present"
  },
  {
    role: "UI Developer",
    company: "Insol Application Pvt Ltd",
    period: "Feb 2017 – Apr 2019"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Securities Lending Enterprise",
    client: "StateStreet Corp US",
    teamSize: 8,
    tools: ["React JS", "Redux", "JavaScript", "MySQL", "JSON", "GitHub", "REST API", "Spring Boot"],
    description: "Securities lending management platform with instruction lifecycle handling (DMS).",
    responsibilities: [
      "Built end-to-end UI using React & Next.js",
      "Migrated JSP pages to React components",
      "Data migration & MySQL integration",
      "Code reviews & bug fixing",
      "Coordination with onsite & QA teams"
    ]
  },
  {
    title: "Security Lending Datamart",
    client: "StateStreet Corp US",
    teamSize: 12,
    tools: ["React JS", "Redux", "JavaScript", "JSON", "CSS3", "GitHub", "REST API", "Bootstrap", "Spring Boot"],
    description: "A comprehensive data migration and framework development project for high-volume securities data.",
    responsibilities: [
      "Developed reusable React framework using CDT4",
      "Metadata-driven UI generation",
      "Migrated 175+ screens efficiently"
    ]
  },
  {
    title: "GetSetHealthy",
    client: "GetSetEpidemology",
    teamSize: 4,
    tools: ["HTML5", "CSS3", "Angular 5/6", "JavaScript", "JSON", "GitHub", "REST API", "Bootstrap"],
    description: "Pharmacy store management and admin dashboard system.",
    responsibilities: [
      "UI architecture with Angular 5/6",
      "Implemented reactive forms and dashboard visualization",
      "REST API integration and state management"
    ]
  },
  {
    title: "Starling Science",
    domain: "Medical Science",
    teamSize: 4,
    tools: ["PHP", "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    description: "Scientific research and journal publishing platform.",
    responsibilities: [
      "Frontend development with responsive design",
      "Journal submission workflow management",
      "Cross-browser compatibility optimization"
    ]
  },
  {
    title: "United Express",
    domain: "International Courier Service",
    teamSize: 2,
    tools: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "Sublime Text"],
    description: "Courier service website for domestic and international shipping.",
    responsibilities: [
      "UI/UX Design and full frontend implementation",
      "Shipping calculator integration",
      "Dynamic tracking interface"
    ]
  }
];
