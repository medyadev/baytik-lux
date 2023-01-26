import React from 'react';
import Logo from '../assets/img/LogoFoot.png';
import {FaFacebookF} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";

const Footer = () => {
    const navLink = [{
        link: "about", name: "О компании"
    }, {
        link: "cottage", name: "Коттеджи"
    }, {
        link: "partner", name: "Партнеры"
    }, {
        link: "contact", name: "Контакты"
    },]
    const messengers = [{
        link: "https://www.facebook.com", elem: <FaFacebookF className="text-[#B66A20]"/>
    }, {
        link: "https://twitter.com", elem: <BsTwitter className="text-[#B66A20]"/>
    }, {
        link: "https://www.instagram.com", elem: <AiFillInstagram className="text-[#B66A20]"/>
    }]
    return (<footer id="footer" className="bg-[#C9AE5D]">
        <div className='container pt-6 pb-3'>
            <div className="flex justify-center items-center">
                <img src={Logo} alt="Baytik_LOGO" className="w-[150px] py-3"/>
            </div>
            <nav className="flex items-center justify-center pt-1">
                {navLink.map((el, idx) => (<a href={`#${el.link}`} key={idx}
                                              className="font-[Sparta] font-[100] text-[15px] px-[20px] text-[#FDFDFD]">{el.name}</a>))}
            </nav>
            <div className="flex justify-center items-center pb-2">
                {messengers.map((el, idx) => (<span
                    className="bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center p-2 cursor-pointer mx-[15px]"
                    onClick={() => {
                        window.open(el.link)
                    }
                    }
                >
                    {el.elem}
                </span>))}
            </div>
            <span className="bg-[#DDCD9D] h-[1px] max-w-[389px] mx-auto"></span>
            <h2 className="mt-5 text-center font-[Jost] font-[300] text-[18px] text-[rgba(51,51,51,0.5)]">Baytik Lux
                2023. All Rights Reserved.</h2>
        </div>
    </footer>);
};

export default Footer;