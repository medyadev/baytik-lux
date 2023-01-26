import './components/burger/style.scss';
import Burger from './components/burger/Burger';
import Header from "./components/Header";
import Hero from "./components/hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Partner from "./components/Partner";
import Command from "./components/Command";

function App() {
    return (
        <div>
            <div>
                <Burger/>
            </div>
            <div>
                <Header/>
                <Hero/>
                <About/>
                <Command/>
                <Partner/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
