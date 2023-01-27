import React from 'react'
import Logo from '../assets/img/LogoFoot.png'
import { messengers } from './helper/messengers'

const Footer = () => {
  const navLink = [
    {
      link: 'about',
      name: 'О компании',
    },
    {
      link: 'cottage',
      name: 'Коттеджи',
    },
    {
      link: 'partner',
      name: 'Партнеры',
    },
    {
      link: 'contact',
      name: 'Контакты',
    },
  ]
  return (
    <footer id="footer" className="bg-[#C9AE5D]">
      <div className="pt-6 pb-3">
        <div className="flex justify-center items-center">
          <img src={Logo} alt="Baytik_LOGO" className="w-[150px] py-3" />
        </div>
        <nav className="flex items-center justify-center pt-1 max-md:hidden">
          {navLink.map((el, idx) => (
            <a
              href={`#${el.link}`}
              key={idx}
              className="font-[Sparta] font-[100] text-[15px] px-[20px] text-[#FDFDFD]"
            >
              {el.name}
            </a>
          ))}
        </nav>
        <div className="flex justify-center items-center py-4">
          {messengers.map((el, idx) => (
            <span
              key={idx}
              className="bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center p-2 cursor-pointer mx-[15px]"
              onClick={() => {
                window.open(el.link)
              }}
            >
              {el.elem}
            </span>
          ))}
        </div>
        <div className="bg-[#DDCD9D] h-[1px] max-w-[389px] min-w-[300px] mx-auto"></div>
        <h2 className="mt-5 text-center font-[Jost] font-[300] text-[18px] text-[rgba(51,51,51,0.5)]">
          Baytik Lux 2023. All Rights Reserved.
        </h2>
      </div>
    </footer>
  )
}

export default Footer
