const Link = ({ children, className }) => {
    return (
        <a
            className={`inline-block rounded-lg py-4 px-5 hover:bg-white hover:outline hover:outline-2 hover:outline-offset-[-2px] focus:bg-white focus:outline focus:outline-2 focus:outline-offset-[-2px] ${className}`}
            href="#"
        >
            {children}
        </a>
    );
};

export default Link;
