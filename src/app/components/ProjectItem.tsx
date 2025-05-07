'use client';
import { useState } from "react";
import Image from "next/image";

export type Link = {
    title: string;
    link: string;
}
type ProjectItem = {
    title: string;
    link: string;
    description: string;
    links: Link[],
    background?: string;

}
type ProjectItemProps = {
    project: ProjectItem;
}
export default function ProjectItem({project}: ProjectItemProps) {
    const [ expanded, setExpanded] = useState(false);

    return (
        <li className="flex flex-col gap-2 items-center project-list-item" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${project.background})`}}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:underline-offset-4">
                {project.title}
            </a>
            {expanded && 
                <>  
                <p className="text-sm text-white-500">{project.description}</p>
                <p className="text-sm text-white-500">Links:</p>
                <ul className="flex flex-col gap-2 flex-wrap">
                    {project.links && project.links.map( (link:Link,index:number) => 
                        <li key={index} className="text-sm text-white-500 hover:underline hover:underline-offset-4">
                            <a href={link.link} target="_blank" rel="noopener noreferrer">{link.title}</a>
                        </li>
                    )}
                </ul>
                </>
            }

            <button onClick={() => setExpanded(!expanded)} className="text-sm text-gray-500 hover:text-white-700">
                <Image
                aria-hidden
                src={`/expand-${expanded?"up":"down"}.svg`}
                alt="Github icon"
                width={32}
                height={32}
                />
            </button>
        </li>
    );
}