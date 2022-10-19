import { useState } from "react";
import Link from "./Link";

const Accordion = ({ children, title }) => {
    const [active, setActive] = useState(false);

    return (
        <div className="mx-auto text-left md:w-[50%]">
            <button
                className={`relative w-full pb-3 pt-4 text-left text-black before:absolute  before:right-0 before:content-[url(./assets/icon-arrow.svg)] hover:text-red hover:text-opacity-80 md:before:right-[3%] ${
                    active
                        ? "before:rotate-180 before:content-[url(./assets/icon-red-arrow.svg)] "
                        : ""
                }`}
                onClick={() => setActive(prev => !prev)}
            >
                {title}
            </button>
            <div
                className={`border-b border-b-blue-gray transition-[padding] duration-500 ${
                    active ? "pt-4 pb-8" : ""
                }`}
            >
                {active && <p>{children}</p>}
            </div>
        </div>
    );
};

const AccordionGroup = () => {
    return (
        <div className="mt-4">
            <Accordion title="What is Bookmark?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.
            </Accordion>
            <Accordion title="How can I request a new browser?">
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros
                aliquet convallis ultricies. Mauris augue massa, ultricies non
                ligula. Suspendisse imperdiet.
            </Accordion>
            <Accordion title="Is there a mobile app?">
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.
            </Accordion>
            <Accordion title="What about other Chromium browsers?">
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit.
            </Accordion>
        </div>
    );
};

const FAQ = () => {
    return (
        <section>
            <div className="mx-auto max-w-6xl px-6 py-28">
                <h1 className="text-3xl font-medium text-blue-dark">
                    Frequently Asked Questions
                </h1>
                <p className="mx-auto mt-4 md:w-1/2">
                    Here are some of our FAQs. If you have any other questions
                    you’d like answered please feel free to email us.
                </p>
                <AccordionGroup />
                <Link className="mt-12 inline-block bg-blue py-3 px-5 text-white outline-blue hover:text-blue focus:text-blue">
                    More Info
                </Link>
            </div>
        </section>
    );
};

export default FAQ;
