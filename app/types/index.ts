export type PagesID = "#home" | "#about" | "#work" | "#skills" | "#contact"
export type TechName = 'NextJs' | 'ReactJs' | 'Web App' | 'Responsive' | 'Tailwind' | 'Wordpress' | "GO" | 'All'

export interface Data {
    techs:      TechName[]
    about:      About[];
    projects:   Project[];
    experience: Experience;
}

export interface About {
    img:  string;
    name: string;
    body: string;
}

export interface Experience {
    skills: Skill[];
    exp:    ExperienceExp[];
}

export interface ExperienceExp {
    year: number;
    exp:  ExpExp[];
}

export interface ExpExp {
    name:    string;
    company: string;
}

export interface Skill {
    img:  string;
    name: string;
}

export interface Project {
    titulo: string;
    desc:   string;
    link:   string;
    repo:   null | string;
    tag:    string[];
    img:    string;
}

