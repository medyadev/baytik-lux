import './components/burger/style.scss';
import Burger from './components/burger/Burger';
import Header from "./components/Header/Header";
import Hero from "./components/hero/hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Partner from "./components/Partner";
import Command from "./components/Command";
import Family from "./components/Family/Family";
import Company from "./components/Company/company";

function App() {
    return (
        <div className=''>
            <div>
                <Burger/>
            </div>
            <div>
                <Header/>
                <Hero/>
                <Family/>
                <Company/>
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
