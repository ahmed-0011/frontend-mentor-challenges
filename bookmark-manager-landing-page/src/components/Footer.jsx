import { ReactComponent as Bookmark } from "../assets/logo-bookmark.svg";
import { ReactComponent as Facebook } from "../assets/icon-facebook.svg";
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg";

const ListItem = ({ children, id }) => {
    return (
        <li className="mt-8 text-sm uppercase text-white md:mt-0">
            <a
                className="py-2 hover:text-red hover:opacity-80 focus:text-red focus:opacity-80"
                href={`#${id}`}
            >
                {children}
            </a>
        </li>
    );
};

const Footer = () => {
    return (
        <footer className="bg-blue-dark">
            <div className="mx-auto w-full max-w-6xl justify-between py-8 px-6 md:flex lg:pl-28 lg:pr-28">
                <div className="md:flex md:w-1/2 md:items-center">
                    <div>
                        <Bookmark className="mx-auto fill-white" />
                    </div>
                    <ul className="flex w-full flex-col justify-evenly md:ml-5 md:flex-row">
                        <ListItem id="features">Features</ListItem>
                        <ListItem id="pricing">Pricing</ListItem>
                        <ListItem id="contact-us">Contact</ListItem>
                    </ul>
                </div>
                <div className="mt-8 text-white md:mt-0 md:flex">
                    <a
                        className="inline-block hover:text-red hover:opacity-80 focus:text-red focus:opacity-80"
                        href="https://www.facebook.com"
                    >
                        <Facebook className="fill-current"></Facebook>
                    </a>
                    <a
                        className="inline-block hover:text-red hover:opacity-80 focus:text-red focus:opacity-80"
                        href="https://twitter.com"
                    >
                        <Twitter className="ml-6 self-end fill-current"></Twitter>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
