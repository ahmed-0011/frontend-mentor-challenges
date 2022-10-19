import { ReactComponent as Firefox } from "../assets/logo-firefox.svg";
import { ReactComponent as Chrome } from "../assets/logo-chrome.svg";
import { ReactComponent as Opera } from "../assets/logo-opera.svg";

const Card = ({ browser, logo, minVersion, className }) => {
    return (
        <div
            className={`min-h-[300px] rounded-lg shadow-card md:w-[31%] ${className}`}
        >
            <div className="p-8 pt-10">
                <div className="">
                    {logo}
                    <p className="mt-6 mb-1 font-medium text-blue-dark">
                        Add to {browser}
                    </p>
                    <strong className="text-sm font-normal text-blue-gray">
                        Minimum version {minVersion}
                    </strong>
                </div>
            </div>
            <div className="bg-dots bg-contain bg-no-repeat p-6 md:p-4">
                <a
                    className="inline-block w-full rounded-lg bg-blue py-5 text-sm font-medium text-white outline-blue hover:bg-white hover:text-blue hover:outline hover:outline-2 focus:bg-white focus:text-blue md:py-4"
                    href="#"
                >
                    Add & Install Extension
                </a>
            </div>
        </div>
    );
};

const Extension = () => {
    return (
        <section id="pricing">
            <div className="mx-auto max-w-6xl px-6 pt-28">
                <h2 className="text-3xl font-medium text-blue-dark">
                    Download the extension
                </h2>
                <p className="mx-auto mt-4 md:w-1/2">
                    We’ve got more browsers in the pipeline. Please do let us
                    know if you’ve got a favourite you’d like us to prioritize.
                </p>
                <div className="mx-auto mt-10 px-6 md:flex md:w-[85%] md:items-start md:justify-between">
                    <Card
                        browser="Chrome"
                        logo={<Chrome className="mx-auto max-w-[100px]" />}
                        minVersion="62"
                    ></Card>
                    <Card
                        className="mt-10"
                        browser="Firefox"
                        logo={<Firefox className="mx-auto max-w-[100px]" />}
                        minVersion="55"
                    ></Card>
                    <Card
                        className="mt-10 md:mt-20"
                        browser="Opera"
                        logo={<Opera className="mx-auto max-w-[100px]" />}
                        minVersion="46"
                    ></Card>
                </div>
            </div>
        </section>
    );
};

export default Extension;
