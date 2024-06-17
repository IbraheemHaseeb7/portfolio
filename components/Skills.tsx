"use client";

import Skill from "./Skill";

export default function Skills() {
    const frontEndSkills: {
        title: string;
        description: string;
        skills: Array<{ img: string; name: string }>;
    } = {
        title: "Frontend Development",
        description:
            "I have experience with the following front end technologies:",
        skills: [
            { img: "/skills/frontend/next.webp", name: "Next" },
            { img: "/skills/frontend/react.webp", name: "React" },
            { img: "/skills/frontend/redux.webp", name: "Redux" },
            { img: "/skills/frontend/electron.webp", name: "Electron" },
            { img: "/skills/frontend/html.webp", name: "HTML" },
            { img: "/skills/frontend/css.webp", name: "CSS" },
            { img: "/skills/frontend/javascript.webp", name: "Javascript" },
            { img: "/skills/frontend/jquery.webp", name: "JQuery" },
            { img: "/skills/frontend/svelte.webp", name: "Svelte" },
            { img: "/skills/frontend/react.webp", name: "React Native" },
            { img: "/skills/frontend/flutter.webp", name: "Flutter" },
            { img: "/skills/frontend/javafx.webp", name: "JavaFX" },
        ],
    };

    const backEndSkills: {
        title: string;
        description: string;
        skills: Array<{ img: string; name: string }>;
    } = {
        title: "Backend Development",
        description:
            "I have experience with the following front end technologies:",
        skills: [
            { img: "/skills/backend/nodejs.webp", name: "Node JS" },
            { img: "/skills/backend/express.webp", name: "Express" },
            { img: "/skills/backend/springboot.webp", name: "SpringBoot" },
            { img: "/skills/backend/supabase.webp", name: "Supabase" },
            { img: "/skills/backend/firebase.webp", name: "Firebase" },
            { img: "/skills/backend/vercel.webp", name: "Vercel" },
            { img: "/skills/backend/aws.webp", name: "AWS" },
            { img: "/skills/backend/azure.webp", name: "Azure" },
            { img: "/skills/backend/mongodb.webp", name: "MongoDB" },
            { img: "/skills/backend/sqlserver.webp", name: "SQL Server" },
            { img: "/skills/backend/neo4j.webp", name: "Neo4j" },
            { img: "/skills/backend/mariadb.webp", name: "MariaDB" },
            { img: "/skills/backend/postgresql.webp", name: "PostgreSQL" },
            { img: "/skills/backend/github.webp", name: "Git/Github" },
        ],
    };
    const machineLearning: {
        title: string;
        description: string;
        skills: Array<{ img: string; name: string }>;
    } = {
        title: "Machine Learning",
        description:
            "I have experience with the following front end technologies:",
        skills: [
            { img: "/skills/machine_learning/sklearn.webp", name: "SK Learn" },
            { img: "/skills/machine_learning/opencv.webp", name: "OpenCV" },
            { img: "/skills/machine_learning/pandas.webp", name: "Pandas" },
            {
                img: "/skills/machine_learning/matplotlib.webp",
                name: "Matplotlib",
            },
            {
                img: "/skills/machine_learning/tidyverse.webp",
                name: "Tidyverse",
            },
        ],
    };
    const pLanguages: {
        title: string;
        description: string;
        skills: Array<{ img: string; name: string }>;
    } = {
        title: "Programming Languages",
        description:
            "I have experience with the following front end technologies:",
        skills: [
            { img: "/skills/programming_languages/java.webp", name: "Java" },
            {
                img: "/skills/programming_languages/typescript.webp",
                name: "TypeScript",
            },
            {
                img: "/skills/programming_languages/python.webp",
                name: "Python",
            },
            {
                img: "/skills/programming_languages/javascript.webp",
                name: "JavaScript",
            },
            { img: "/skills/programming_languages/c.webp", name: "C/C++" },
            { img: "/skills/programming_languages/rust.webp", name: "Rust" },
            { img: "/skills/programming_languages/r.webp", name: "R" },
        ],
    };

    return (
        <div className="w-full">
            <Skill
                title={backEndSkills.title}
                description={backEndSkills.description}
                skills={backEndSkills.skills}
            />
            <Skill
                title={frontEndSkills.title}
                description={frontEndSkills.description}
                skills={frontEndSkills.skills}
            />
            <Skill
                title={machineLearning.title}
                description={machineLearning.description}
                skills={machineLearning.skills}
            />
            <Skill
                title={pLanguages.title}
                description={pLanguages.description}
                skills={pLanguages.skills}
            />
        </div>
    );
}
