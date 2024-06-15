import Project from "./Project";

export default function Projects({
    projects,
    title,
}: {
    projects: {
        title: string;
        technologies: string;
        image: string;
        id: string;
        link: string;
    }[];
    title: string;
}) {
    return (
        <div className="w-full flex justify-start items-center flex-col">
            <h1 className="text-creamy font-bold text-lg">{title}</h1>
            <div className="w-[80%] grid grid-cols-4 grid-rows-none gap-x-5">
                {projects.map((project) => {
                    return (
                        <Project
                            key={project.id}
                            img={project.image}
                            technologies={project.technologies}
                            title={project.title}
                            link={project.link}
                        />
                    );
                })}
            </div>
        </div>
    );
}
