import './components/burger/style.scss';
import Burger from './components/burger/Burger';
import Header from "./components/Header";
import Hero from "./components/hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Partner from "./components/Partner";
import Command from "./components/Command";
import Objects from './components/objects/Objects';
import ComponentVideo from './components/ComponentVideo';

function App() {
    return (
        <div>
            <div>
                <Burger />
            </div>
            <div>
       <Footer />

                <Header/>
                <Hero/>
                <About/>
                <ComponentVideo/>
                <Objects />
                <Command/>
                <Partner/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
