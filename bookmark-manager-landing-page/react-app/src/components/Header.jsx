import { useEffect, useState } from "react";
import Link from "./Link";
import { ReactComponent as Bookmark } from "../assets/logo-bookmark.svg";
import { ReactComponent as Hamburger } from "../assets/icon-hamburger.svg";
import { ReactComponent as HeroImage } from "../assets/illustration-hero.svg";
import { ReactComponent as Close } from "../assets/icon-close.svg";
import { ReactComponent as Facebook } from "../assets/icon-facebook.svg";
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg";

const MenuItem = ({ children, className = "", handleItemClick, href }) => {
    return (
        <li className="border-t border-t-blue-gray py-4 md:mr-8 md:border-t-0 md:py-0">
            <a
                className={`inline-block hover:opacity-50 focus:opacity-50 md:px-4 md:py-3 md:hover:text-red md:hover:opacity-100 md:focus:text-red md:focus:opacity-100 ${className}`}
                href={href}
                onClick={handleItemClick}
            >
                {children}
            </a>
        </li>
    );
};

const Menu = ({ sideMenuActive, setSideMenuActive, handleClick }) => {
    const handleItemClick = () => {
        document.body.classList.remove("overflow-hidden");
        setSideMenuActive(false);
    };

    useEffect(() => {
        let mql = window.matchMedia("(min-width: 768px)");
        // handle the case when the menu is opened and the window is resized
        const handleChange = e => {
            if (!e.matches) return;

            document.body.classList.remove("overflow-hidden");
            setSideMenuActive(false);
        };

        mql.addEventListener("change", handleChange);

        return () => mql.removeEventListener("change", handleChange);
    }, []);

    return (
        <div
            className={`fixed left-0 right-0 top-0 bottom-0 z-20 flex h-screen w-screen ${
                sideMenuActive ? "translate-x-0" : "translate-x-[100%]"
            } flex-col overflow-auto bg-blue-dark p-8 px-6 text-xl uppercase text-white opacity-90 md:static md:h-[50px] md:translate-x-0 md:flex-row md:bg-transparent md:p-0 md:text-sm md:text-blue-dark`}
        >
            <div className="flex justify-between pb-8 md:hidden">
                <a href="#" className="hover:opacity-50 focus:opacity-50">
                    <Bookmark className="fill-current" />
                </a>
                <button
                    className="cursor-pointer hover:text-red focus:text-red"
                    onClick={handleClick}
                >
                    <Close className="fill-current" />
                </button>
            </div>
            <ul className="md:ml-auto md:flex md:items-center">
                <MenuItem href="#features" handleItemClick={handleItemClick}>
                    Features
                </MenuItem>
                <MenuItem href="#pricing" handleItemClick={handleItemClick}>
                    Pricing
                </MenuItem>
                <MenuItem href="#contact-us" handleItemClick={handleItemClick}>
                    Contact
                </MenuItem>
                <MenuItem
                    className="w-full rounded-lg border-2 py-2 font-medium tracking-widest md:border-red md:bg-red md:px-10 md:py-2 md:text-white md:hover:bg-white md:focus:bg-white"
                    href="#"
                    handleItemClick={handleItemClick}
                >
                    Login
                </MenuItem>
            </ul>
            <div className="mt-14 text-white md:mt-0 md:hidden">
                <a
                    className="inline-block hover:opacity-50 focus:opacity-50"
                    href="https://www.facebook.com"
                >
                    <Facebook className="fill-current"></Facebook>
                </a>
                <a
                    className="inline-block hover:opacity-50 focus:text-blue-gray focus:opacity-80"
                    href="https://twitter.com"
                >
                    <Twitter className="ml-6 fill-current"></Twitter>
                </a>
            </div>
        </div>
    );
};

const Nav = () => {
    const [sideMenuActive, setSideMenuActive] = useState(false);

    const handleClick = () => {
        setSideMenuActive(prev => {
            document.body.classList.toggle("overflow-hidden", !prev);
            return !prev;
        });
    };

    return (
        <nav>
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10 lg:pl-28 lg:pr-28">
                <div>
                    <a href="#">
                        <Bookmark
                            className={`fill-blue-dark ${
                                sideMenuActive ? "opacity-0" : ""
                            }`}
                        />
                    </a>
                </div>
                <button
                    className={`cursor-pointer md:hidden ${
                        sideMenuActive ? "opacity-0" : ""
                    }`}
                    onClick={handleClick}
                >
                    <Hamburger />
                </button>
                <Menu
                    sideMenuActive={sideMenuActive}
                    setSideMenuActive={setSideMenuActive}
                    handleClick={handleClick}
                />
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <div
            className="mx-auto flex max-w-6xl flex-col-reverse
        md:flex-row md:items-center"
        >
            <div className="mt-10 px-6 md:mt-0 md:w-1/2 md:pl-10 md:text-left lg:pl-28">
                <h1 className="text-4xl font-medium leading-tight text-blue-dark">
                    A Simple Bookmark Manager
                </h1>
                <p className="mt-4 leading-relaxed">
                    A clean and simple interface to organize your favourite
                    websites. Open a new browser tab and see your sites load
                    instantly. Try it for free.
                </p>

                <div className="mx-auto mt-8 flex w-max md:mx-0">
                    <Link className="bg-blue text-white outline-blue hover:text-blue focus:text-blue">
                        Get it on Chrome
                    </Link>
                    <Link className="ml-4 bg-gray-50 text-gray-600 outline-gray-600">
                        Get it on Firefox
                    </Link>
                </div>
            </div>
            <div className="relative md:w-3/5">
                <HeroImage className="max-w-full md:w-[96%] md:pl-6 md:pr-3 md:pb-2"></HeroImage>
                <div className="absolute top-1/5 right-0 bottom-0 -z-10 w-4/5 rounded-l-full bg-blue md:top-[30%]"></div>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <header>
            <Nav />
            <Hero />
        </header>
    );
};

export default Header;
