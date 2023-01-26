/* Local dependencies */
import "./style.scss";
import {AiFillInstagram, AiFillTwitterCircle,} from "react-icons/ai";
import { FaFacebook} from 'react-icons/fa'
import right from '../../assets/img/Rectangle 3.svg'

export default function MobileMenu({className}) {
    return (
        <div
            className={`mobile-menu ${className} h-[100vh] w-[1400px] bg-[#C9AE5D] left-0 right-0 fixed z-[5] pt-[120px] justify-center `}
        >
            <div className=" mx-auto max-w-[700px] w-[800px] ">
                <div className=" flex justify-between items-center">
                  <div>
                      <nav className='flex flex-col'>
                          <a className='pt-[20px] font-[Jost] text-white text-3xl font-light leading-[50px]'  href="src/components/burger#">Главная</a>
                          <a className='pt-[20px] font-[Jost] text-white text-3xl font-light leading-[50px]'  href="src/components/burger#">О компании</a>
                          <a className='pt-[20px] font-[Jost] text-white text-3xl font-light leading-[50px]'  href="src/components/burger#">ЖК - Байтик</a>
                          <a className='pt-[20px] font-[Jost] text-white text-3xl font-light leading-[50px]'  href="src/components/burger#">Выбрать дом</a>
                      </nav>
                      <div className='flex justify-between items-center w-[200px] pt-[130px]'>
                        <div className='w-[45px] bg-[#252525] rounded-[50%] h-[45px] flex justify-center items-center'>  <FaFacebook className='text-[24px] text-white' /></div>
                        <div className='w-[45px] bg-[#252525] rounded-[50%] h-[45px] flex justify-center items-center'>  <AiFillTwitterCircle className='text-[24px] text-white' /></div>
                        <div className='w-[45px] bg-[#252525] rounded-[50%] h-[45px] flex justify-center items-center'>  <AiFillInstagram className='text-[24px] text-white' /></div>
                      </div>
                  </div>
                    <img className='mt-[-109px]' src={right} alt=""/>
                    <div className='flex flex-col mt-[-150px] '>
                        <a className='text-[20px]  text-white pt-[15px]font-light leading-[50px]' href="src/components/burger#">+312(0706) 14-15-10</a>
                        <a className='text-[20px]  text-white pt-[15px]font-light leading-[50px]' href="src/components/burger#">+996(0706) 14-15-10</a>
                        <a className='text-[20px]  text-white pt-[15px]font-light leading-[50px]' href="src/components/burger#">+996(0706) 14-15-10</a>
                        <a className='text-[20px]  text-white pt-[15px]font-light leading-[50px]' href="src/components/burger#">+996(0706) 14-15-10</a>
                        <a className='text-[20px]  text-white pt-[15px]font-light leading-[50px]' href="src/components/burger#">+312(0706) 14-15-10</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
