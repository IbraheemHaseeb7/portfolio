"use client";

import { getContactSelector, typing } from "@/state/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const dispatch = useDispatch();
    const contact = useSelector((state: any) => getContactSelector(state));

    const contacts = [
        {
            name: "name",
            placeholder: "John Doe",
            value: contact.name,
            classes: "h-[3rem]",
        },
        {
            name: "email",
            placeholder: "john@doe.com",
            value: contact.email,
            classes: "h-[3rem]",
        },
        {
            name: "description",
            placeholder: "Anything you want to say...",
            value: contact.description,
            classes: "h-[10rem] col-[1/3] w-full",
        },
    ];

    function handleChange(e: any) {
        dispatch(typing({ name: e.target.name, value: e.target.value }));
    }

    function handleSubmit(e: any) {
        e.preventDefault();

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID || "",
            process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
            e.target,
            "cLnDlUFWllsE3rt4k"
        );
    }

    return (
        <form
            className="w-1/2 grid grid-cols-2 justify-items-center gap-5 ml-[4rem] max-sm:w-2/3 max-sm:ml-0"
            onSubmit={handleSubmit}
        >
            {contacts.map((data) => {
                if (data.name === "description") {
                    return (
                        <div className={data.classes} key={data.name}>
                            <span className="text-creamy ml-2 capitalize">
                                {data.name}
                            </span>
                            <textarea
                                className={`${data.classes} pt-2 pl-3 resize-none bg-transparent border-2 border-creamy outline-none hover:border-pinky focus:border-pinky transition-all ease duration-[0.25s]`}
                                key={data.name}
                                name={data.name}
                                placeholder={data.placeholder}
                                value={data.value}
                                onChange={handleChange}
                            />
                        </div>
                    );
                } else {
                    return (
                        <div className="w-full" key={data.name}>
                            <span className="text-creamy ml-2 capitalize">
                                {data.name}
                            </span>
                            <input
                                className={`${data.classes} w-full bg-transparent border-2 border-creamy outline-none hover:border-pinky focus:border-pinky transition-all ease duration-[0.25s] pl-2`}
                                key={data.name}
                                name={data.name}
                                placeholder={data.placeholder}
                                value={data.value}
                                onChange={handleChange}
                            />
                        </div>
                    );
                }
            })}
            <input
                className="border-2 border-creamy col-[1/3] mt-5 px-[0.75rem] py-[0.25rem] text-creamy hover:text-pinky transition-all ease duration-[0.25s]"
                value="Submit"
                type="submit"
            />
        </form>
    );
}
