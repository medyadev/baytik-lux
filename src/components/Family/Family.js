import React from 'react';
import {AiFillHome} from "react-icons/ai";
import er from '../../assets/img/ert.png'
import '../Family/family.scss'
const Family = () => {
    return (
        <section className=' family pt-[200px] flex justify-between items-center overflow-hidden '>
            <div className=" red container pl-[200px]">
                <div className="family flex justify-space-between">
                    <div>
                        <div className='flex pb-[10px] items-center'>
                            <div style={{
                            border:'1px solid #DDCD9D'}
                            } className='w-[40px] h-[40px] rounded-[50%] flex justify-center items-center text-[#B66A20]'>
                                <AiFillHome/>

                            </div>
                            <h1 className='  text-[#B66A20] text-[22px] font-[300] uppercase pl-3'>Семья</h1>
                        </div>
                        <h1 className='  family-h1 w-[320px] text-[#C9AE5D] text-[60px] font-[300] leading-[50px] font-[Jost] '>Комфорт <span className=' text-[#252525] text-[60px] font-[300] leading-[60px] font-[Jost]'> для счастья</span></h1>
                        <p className='family-p pt-[10px] w-[486px] text-[ #252525] font-[300] text-[22px]'>Основная деятельность компании - строительство и реализация жилой недвижимости для вашего счастья . <br/>
                            Все для комфортного проживания и отдыха. </p>
                    </div>

                </div>

            </div>
            <img className='ferner' src={er} alt=""/>
        </section>
    );
};

export default Family;