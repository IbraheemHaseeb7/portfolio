import ContactForm from "@/components/ContactForm";
import ContactModel from "@/components/ContactModel";
import Transition from "@/components/Transition";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
};

export default function Contact() {
    return (
        <Transition name="Contact">
            <div className="min-h-screen w-full bg-backgroundy">
                <div className="absolute w-full h-screen top-0 right-0 flex justify-center items-center max-sm:flex-col-reverse max-sm:gap-5">
                    <ContactForm />
                    <ContactModel />
                </div>
            </div>
        </Transition>
    );
}
