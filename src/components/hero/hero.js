import React from 'react';
import '../burger/style.scss'
import '../hero/media.scss'
import baytik from '../../assets/img/Baytik_350_7 2.png';

const Hero = () => {
    return (
        <section id='hero'>
            <div className="container">
                <div className='flex justify-between hero-content items-center'>
                    <div className='pt-24 '>
                        <h1 className="hero-h1 font-[Jost] pb-[15px] text-[#C9AE5D] text-[86px] leading-[50px] font-bold">Семейный <br/> уют <span className=' hero-span leading-[90px] text-[#252525] text-[86px] font-[Jost]  font-bold'>  в новые  стены</span></h1>
                        <div className='flex hero-desc'>
                            <svg width="4" height="96" viewBox="0 0 4 96" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="4" height="96" fill="#C9AE5D"/>
                            </svg>
                            <p className='hero-p  font-[Jost] text-[#252525] text-[24px] font-[300] leading-[32px] tracking-[5px] pl-4'>Стабильность <br/>
                                Надежность <br/>
                                Комфорт</p>
                        </div>
                        <button className='button '>Посмотреть коттеджи</button>

                    </div>
                    <div className='relative hero-block'>
                       <div  style={{
                       border:'3px solid #C9AE5D'
                       }
                       } className='hero-block1  w-[550px] h-[665px]'></div>
                        <img className='absolute hero-block2  top-[30px] right-[30px] ' src={baytik} alt=""/>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default Hero;