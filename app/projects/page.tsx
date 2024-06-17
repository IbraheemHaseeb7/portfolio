import Projects from "@/components/Projects";
import Transition from "@/components/Transition";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
};

export default function Work() {
    const fullStack: {
        title: string;
        technologies: string;
        image: string;
        id: string;
        link: string;
    }[] = [
        {
            title: "Social Media Web App",
            technologies:
                "Full stack web app with user authentication, posts, comments, likes, and profile customization | MERN Stack, JWT, Session, Ejs",
            image: "/projects/placeholder.webp",
            id: "1",
            link: "https://github.com/IbraheemHaseeb7/mern-term-project",
        },
        {
            title: "Portal for IEEE RAS CUI LHR Student Chapter",
            technologies:
                "Complete functional portal for the members to manage members and provide a fun platform with profile customization for members | Next JS, Supabase, Tailwind CSS",
            image: "/projects/full_stack_development/ieee_ras.webp",
            id: "2",
            link: "https://portal.rascui.tech",
        },
        {
            title: "POS System",
            technologies:
                "Point of Sale system for a local business. Helped managing their entire inventory and their sales | Electron JS, Next JS, Supabase",
            image: "/projects/placeholder.webp",
            id: "3",
            link: "https://github.com/IbraheemHaseeb7/product_management/tree/firebase",
        },
        {
            title: "Cleonora London",
            technologies:
                "Portfolio website for a local business | Next JS, Tailwind CSS",
            image:
                "/projects/full_stack_development/cleonora_london.webp" ||
                "/projects/placeholder.webp",
            id: "4",
            link: "https://www.cleonoralondon.com/",
        },
        {
            title: "Fight your Nafs",
            technologies:
                "Web application for a local business to provide a platform for their customers to have a community and share their experiences. | Next JS, Firebase",
            image:
                "/projects/full_stack_development/fight_your_nafs.webp" ||
                "/projects/placeholder.webp",
            id: "4",
            link: "https://fightyournafs.vercel.app/",
        },
        {
            title: "Alpha Cyber",
            technologies:
                "Portfolio website for a small local industry. | React JS",
            image:
                "/projects/full_stack_development/alpha_cyber.webp" ||
                "/projects/placeholder.webp",
            id: "5",
            link: "https://tripanda.vercel.app/",
        },
        {
            title: "Trip Panda",
            technologies:
                "Web application to manage your trips and expenses with proofs for transparency. | React JS, Firebase",
            image:
                "/projects/full_stack_development/trip_panda.webp" ||
                "/projects/placeholder.webp",
            id: "6",
            link: "https://tripanda.vercel.app/",
        },
    ];

    const ai: {
        title: string;
        technologies: string;
        image: string;
        id: string;
        link: string;
    }[] = [
        {
            title: "Tumor Detection with CNN",
            technologies:
                "Trained a CNN that classifies if there is tumor or not, further detection of tumor is performed using segmentation. | SK Learn, OpenCV, Matplotlib",
            image:
                "/projects/ai_ml_ip/tumor_cnn.webp" ||
                "/projects/placeholder.webp",
            id: "1",
            link: "https://github.com/IbraheemHaseeb7/dip-project.git",
        },
        {
            title: "ML Algorithms Implementation",
            technologies: "A point of sale system for a local business.",
            image: "/projects/placeholder.webp",
            id: "2",
            link: "",
        },
    ];

    const devops: {
        title: string;
        technologies: string;
        image: string;
        id: string;
    }[] = [
        {
            title: "Tumor Detection with CNN",
            technologies:
                "Complete functional portal for the members of IEEE RAS CUI LHR Student Chapter to manage members and provide a fun platform with profile customization for members",
            image: "/projects/bg.jpg",
            id: "business-site",
        },
        {
            title: "POS System",
            technologies:
                "Point of Sale system for a local business. Helped managing their entire inventory and their sales | Electron JS, Next JS, Supabase",
            image: "/projects/bg.jpg",
            id: "pos-system",
        },
    ];

    return (
        <Transition name="Projects">
            <main className="min-h-[100vh] bg-backgroundy w-full flex justify-start items-center flex-col py-[7rem] gap-7">
                <Projects projects={fullStack} title="Full Stack Development" />
                {/* <Projects projects={devops} title="DevOps" /> */}
                <Projects projects={ai} title="AI, ML, and Image Processing" />
            </main>
        </Transition>
    );
}
