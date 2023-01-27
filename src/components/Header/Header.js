import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/Logo.svg'
import LogoPhone from '../../assets/img/Logo (1).svg'
import '../Header/header.scss'
import { messengers } from '../helper/messengers'

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false)
  const classesLine =
    'absolute rounded-[3px] transition ease-in-out h-[3px] z-[1500]'
  const openMenu = () => {
    setBurgerMenu(!burgerMenu)
  }
  const NewBurgerPhone = () => {
    return (
      <div className="bg-[#C9AE5D] md:hidden max-md:fixed w-[100vw] top-0 left-0 right-0 z-[1500]">
        <div className="flex justify-between items-center relative">
          <button
            className={
              'm-5 flex relative w-[30px] h-[2px] menu_transition py-1 px-[20px] items-center justify-center cursor-pointer border-none outline-none rounded-[1px]'
            }
            onClick={openMenu}
          >
            <span
              className={`${classesLine} menu_transition bg-white w-full ${
                burgerMenu
                  ? 'rotate-[-40deg] translate-y-0'
                  : 'translate-y-[-11px]'
              }`}
            ></span>
            <span
              className={`${classesLine} menu_transition bg-white w-full left-0 right-0 ${
                burgerMenu
                  ? 'rotate-[40deg] translate-y-0'
                  : 'translate-y-[11px]'
              }`}
            ></span>
          </button>
          <Menu />
          <img src={LogoPhone} alt="Logo" className="w-[150px] m-5 z-[1500]" />
        </div>
      </div>
    )
  }
  const Menu = () => {
    return (
      <div
        className={`absolute top-0 left-0 z-[1100] menu_transition ${
          burgerMenu
            ? 'translate-y-0 rounded-none'
            : 'translate-y-[-250%] rounded-[50%]'
        }`}
      >
        <div className="w-[100vw] h-[100vh] bg-[#C9AE5D] pt-14 px-6">
          <div className="flex flex-col items-center justify-center py-4">
            <a
              href="#home"
              className="font-[Jost] font-[300] text-[34px] text-white mt-4"
            >
              Главная
            </a>
            <a
              href="#about"
              className="font-[Jost] font-[300] text-[34px] text-white mt-4"
            >
              О компании
            </a>
            <a
              href="#baytik"
              className="font-[Jost] font-[300] text-[34px] text-white mt-4"
            >
              ЖК - Байтик
            </a>
            <a
              href="#object"
              className="font-[Jost] font-[300] text-[34px] text-white mt-4"
            >
              Выбрать дом
            </a>
          </div>
          <div className="flex justify-center items-center pt-8">
            {messengers.map((el, idx) => (
              <span
                className="bg-black rounded-full p-4 flex justify-center items-center mx-4 cursor-pointer"
                key={idx}
                onClick={() => {
                  window.open(el.link)
                }}
              >
                {el.iconWhite}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    if (currentScrollPos > 1) {
      setBurgerMenu(false)
      setPrevScrollPos(prevScrollPos)
    }
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <header>
      <div className="container">
        <div className="flex justify-end p-[30px] header">
          <img src={logo} alt="" />
        </div>
      </div>
      <NewBurgerPhone />
    </header>
  )
}

export default Header
