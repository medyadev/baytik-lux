import './components/burger/style.scss';
import Burger from './components/burger/Burger';
import Header from "./components/Header/Header";
import Hero from "./components/hero/hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Partner from "./components/Partner";
import Command from "./components/Command";
import Family from "./components/Family/Family";
import Company from "./components/Company/company";
import Objects from './components/objects/Objects';
import ComponentVideo from './components/ComponentVideo';

function App() {
    return (
        <div className=''>
            <div>
                <Burger />
            </div>
            <div>
                <Header/>
                <Hero/>
                <Family/>
                <Company/>
                <Objects />
                <ComponentVideo/>
                <Command/>
                <Partner/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
