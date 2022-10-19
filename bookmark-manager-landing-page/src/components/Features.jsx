import { useState } from "react";
import Link from "./Link";
import { ReactComponent as FeatureImage1 } from "../assets/illustration-features-tab-1.svg";
import { ReactComponent as FeatureImage2 } from "../assets/illustration-features-tab-2.svg";
import { ReactComponent as FeatureImage3 } from "../assets/illustration-features-tab-3.svg";

const FeatureContent = [
    {
        name: "Bookmark in one click",
        body: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        image: (
            <FeatureImage1 className="absolute top-[-15px] right-0 h-[90%] md:right-[10%]" />
        )
    },
    {
        name: "Intelligent search",
        body: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        image: <FeatureImage2 className="absolute top-0 right-[10%] h-[90%]" />
    },
    {
        name: "Share your bookmarks",
        body: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        image: <FeatureImage3 className="absolute top-0 right-[10%] h-[90%]" />
    }
];

const Tab = ({ children, className, tabId, handleClick }) => {
    return (
        <button
            className={`relative cursor-pointer border-t border-solid border-gray-300 py-5 after:absolute  after:left-[33%] after:right-[33%] after:bottom-0 after:h-[5px] after:bg-red after:opacity-0 after:content-[''] hover:text-red focus:text-red md:w-2/6 md:border-t-0 md:after:left-0 md:after:right-0 ${className}`}
            onClick={() => handleClick(tabId)}
        >
            {children}
        </button>
    );
};

const TabGroup = ({ activeTab, handleClick }) => {
    const styles = "text-black after:opacity-100";

    return (
        <div className="mx-auto mt-12 flex flex-col border-b border-solid border-gray-300 md:w-3/5 md:flex-row">
            <Tab
                className={activeTab === 0 ? styles : ""}
                tabId={0}
                handleClick={handleClick}
            >
                Simple Bookmarking
            </Tab>
            <Tab
                className={activeTab === 1 ? styles : ""}
                tabId={1}
                handleClick={handleClick}
            >
                Speedy Searching
            </Tab>
            <Tab
                className={activeTab === 2 ? styles : ""}
                tabId={2}
                handleClick={handleClick}
            >
                Easy Sharing
            </Tab>
        </div>
    );
};

const Feature = ({ name, body, image }) => {
    return (
        <div className="flex flex-col-reverse pt-24 md:flex-row-reverse md:items-center md:pt-16">
            <div className="pl-6 md:w-1/2 md:pr-10 md:pl-24 md:text-left">
                <h3 className="mt-12 text-2xl font-medium text-blue-dark md:mt-0">
                    {name}
                </h3>
                <p className="mt-4">{body}</p>
                <Link className="mt-4 hidden bg-blue py-2 px-4 text-white outline-blue hover:text-blue focus:text-blue md:inline-block">
                    More Info
                </Link>
            </div>
            <div className="relative min-h-[260px] md:h-[300px] md:w-1/2">
                {image}
                <div className="absolute top-[10%] left-0 bottom-0 -z-10 w-[85%] rounded-r-full bg-blue md:top-[20%]"></div>
            </div>
        </div>
    );
};

const Features = () => {
    const [activeTab, setActiveTab] = useState(0);

    const currentFeature = FeatureContent[activeTab];

    return (
        <section id="features">
            <div className="mx-auto max-w-6xl pt-28 pr-6 md:px-0">
                <div>
                    <h2 className="text-3xl font-medium text-blue-dark">
                        Features
                    </h2>
                    <p className="mx-auto mt-4 md:w-1/2">
                        Our aim is to make it quick and easy for you to access
                        your favourite websites. Your bookmarks sync between
                        your devices so you can access them on the go.
                    </p>
                </div>
                <div className="pl-6">
                    <TabGroup
                        activeTab={activeTab}
                        handleClick={tabId => {
                            setActiveTab(tabId);
                        }}
                    />
                </div>
                <Feature {...currentFeature}></Feature>
            </div>
        </section>
    );
};

export default Features;
