import Header from "./components/Header";
import Features from "./components/Features";
import Extension from "./components/Extension";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const Main = () => {
    return (
        <main>
            <Features />
            <Extension />
            <FAQ />
        </main>
    );
};

const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default App;
