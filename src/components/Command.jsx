import React from 'react';
import CommandIcon from '../assets/img/KomandaIcon.svg'
import {commands} from "./helper/command";

const Command = () => {
    return (
        <section id="command">
            <div className="pl-[100px]">
                <div className="flex justify-center items-center">
                    <img src={CommandIcon} alt="ContactIcon" width={40} height={40}/> <h2
                    className="text-[#B66A20] pl-3 font-[300] uppercase font-[Jost] text-[22px]">команда</h2>
                </div>
                <div className="flex justify-evenly py-[20px]">
                    {
                        commands.map((el, idx) => (
                            <div>
                                <img src={el.img} alt="Command_Images"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
export default Command;