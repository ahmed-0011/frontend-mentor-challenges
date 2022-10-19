import { useState } from "react";
import { ReactComponent as Error } from "../assets/icon-error.svg";

const ContactUs = () => {
    const [error, setError] = useState(false);

    const handleChange = e => {
        const value = e.currentTarget.value;
        if (value != "" && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
            setError(true);
        } else {
            setError(false);
        }
    };

    return (
        <section className="bg-blue" id="contact-us">
            <div className="mx-auto h-full max-w-[450px] px-8 py-16 text-sm font-medium text-white md:w-3/4 md:max-w-[600px]">
                <p className="uppercase tracking-[5px]">
                    35,000+ already joined
                    <strong className="mt-4 block text-2xl normal-case tracking-normal md:text-3xl">
                        Stay up-to-date with what we’re doing
                    </strong>
                </p>
                <div className="mt-8 md:flex">
                    <div className="relative md:w-full">
                        <label htmlFor="email_address"></label>
                        <input
                            className={`block w-full rounded-md p-5 pl-6 text-black md:h-full md:p-2 md:pl-4 ${
                                error ? "shadow-error outline-none" : ""
                            }`}
                            type="email"
                            placeholder="Enter your email address"
                            id="email_address"
                            required
                            onChange={handleChange}
                        />
                        <Error
                            className={`absolute top-1/2 right-[3%] -translate-y-1/2 ${
                                error ? "block" : "hidden"
                            }`}
                        ></Error>
                        <div
                            className={`absolute left-0 right-0 bottom-[-1.7em] h-[2em] rounded-b-lg bg-red py-1 pl-4 text-left text-xs italic text-white ${
                                error ? "block" : "hidden"
                            }`}
                        >
                            Whoops, make sure it&#39;s an email
                        </div>
                    </div>
                    <button
                        className={`w-full rounded-md bg-red px-10 py-4 outline-2 outline-red hover:bg-white hover:text-red hover:outline hover:outline-offset-[-2px] focus:bg-white focus:text-red focus:outline focus:outline-offset-[-2px] md:mt-0 md:ml-6 md:w-2/6 md:px-5 md:py-4 ${
                            error ? "mt-10" : "mt-4"
                        }`}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
