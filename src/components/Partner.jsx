import React from 'react';
import PartnerIcons from "../assets/img/PartnerIcon.svg";

const Partner = () => {
    return (
        <section id="partner">
            <div>
                <div className="flex justify-center items-center">
                    <img src={PartnerIcons} alt="ContactIcon" width={40} height={40}/> <h2
                    className="text-[#B66A20] pl-3 font-[300] uppercase font-[Jost] text-[22px]">партнеры</h2>
                </div>
            </div>
        </section>
    );
};

export default Partner;