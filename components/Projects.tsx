export default function Projects({
    projects,
}: {
    projects: {
        title: string;
        description: string;
        image: string;
        id: string;
    }[];
}) {
    return (
        <div>
            {projects.map((project) => {
                return <img src={project.image} />;
            })}
        </div>
    );
}
