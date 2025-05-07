'use client';
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectItem,{Link} from "./ProjectItem";

export default function ProjectList() {
    const { translations } = useLanguage();
    return (
        <ul>
            {
                translations.projects && translations.projects.map((project: { title: string; link: string, description: string, links: Link[], background?: string }, index: number) => (
                    <ProjectItem project={project} key={index} />
                ))
            }
        </ul>
    );
}