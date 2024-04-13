import Project from "./Project";

export default function Projects({
    projects,
}: {
    projects: {
        title: string;
        technologies: string;
        image: string;
        id: string;
    }[];
}) {
    return (
        <div className="w-[80%] grid grid-cols-4 grid-rows-none gap-x-5 mt-[7rem]">
            {projects.map((project) => {
                return (
                    <Project
                        key={project.id}
                        img={project.image}
                        technologies={project.technologies}
                        title={project.title}
                    />
                );
            })}
        </div>
    );
}
