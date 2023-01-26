import React from 'react';
import ContactIcons from '../assets/img/ContactLogo.svg'

const Contact = () => {
    return (<section id="contact">
        <div>
            <div className="flex justify-center items-center">
                <img src={ContactIcons} alt="ContactIcon" width={40} height={40}/> <h2
                className="text-[#B66A20] pl-3 font-[300] uppercase font-[Jost] text-[22px]">контакты</h2>
            </div>
        </div>
    </section>);
};
export default Contact;