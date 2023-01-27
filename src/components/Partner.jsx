import React from 'react';
import PartnerIcons from "../assets/img/PartnerIcon.svg";
import bit from "../assets/img/Bitmap.svg";

const Partner = () => {
    return (
        <section id="partner">
            <div className='py-5 mb-16'>
                <div className="flex justify-center items-center">
                    <img src={PartnerIcons} alt="ContactIcon" width={40} height={40}/> <h2
                    className="text-[#B66A20] pl-3 font-[300] uppercase font-[Jost] text-[22px]">партнеры</h2>
                </div>
                <div className='flex flex-wrap justify-evenly pt-[20px]'>
                    <img className='mb-[10px]' src={bit} alt=""/>
                    <img className='mb-[10px]' src={bit} alt=""/>
                    <img className='mb-[15px]' src={bit} alt=""/>
                </div>
                <div className='flex flex-wrap justify-evenly'>
                    <img src={bit} alt=""/>
                    <img src={bit} alt=""/>
                    <img src={bit} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Partner;