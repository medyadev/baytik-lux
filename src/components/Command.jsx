import React from 'react'
import CommandIcon from '../assets/img/KomandaIcon.svg'
import '../style/command.scss'
import { commands } from './helper/command'

const Command = () => {
  return (
    <section id="command">
      <div className="pt-5 pb-10 max-md:w-[90%] mx-auto">
        <div className="md:pl-[80px]">
          <div className="flex justify-center items-center">
            <img src={CommandIcon} alt="ContactIcon" width={40} height={40} />{' '}
            <h2 className="text-[#B66A20] pl-3 font-[300] uppercase font-[Jost] text-[22px]">
              команда
            </h2>
          </div>
          <div className="flex justify-center pt-7 max-sm:px-4">
            <h1 className="text-[60px] max-md:text-[40px] max-sm:text-[30px] font-[Jost] font-[300] tracking-[0.5px] leading-[90%] text-center normal-case text-[#C9AE5D]">
              Ключевые <br className="max-sm:hidden" />
              <span className="text-[60px] max-md:text-[40px] max-sm:text-[30px] font-[Jost] font-[300] tracking-[0.5px] leading-[90%] text-center text-[#252525]">
                лица компании
              </span>
            </h1>
          </div>
          <div className="flex pt-10 max-md:pt-8 max-md:flex-col items-center justify-center flex-wrap command__card">
            {commands.map((el, idx) => (
              <div
                key={idx}
                className="relative max-w-[330px] min-w-[250px] mb-5 mx-4 cards__item"
              >
                <img src={el.img} alt="Command_Images" className="cards__img" />
                <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0)0%,#000000_100%)] absolute bottom-0 top-[50%] left-0 right-0 flex justify-between items-end">
                  <div className="pl-[20px] pb-[20px] pr-[10px]">
                    <p className="font-[Jost] text-[#FFFFFF] font-[300] opacity-[0.7] text-[18px]">
                      {el.position}
                    </p>
                    <h4 className="font-[Jost] text-[#FFFFFF] font-[300] text-[24px]">
                      {el.name}
                    </h4>
                  </div>
                  <div className="pr-[20px] pb-[20px] command__messanger">
                    {el.messengers.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-white w-[35px] mt-4 h-[35px] rounded-full flex justify-center items-center p-2 cursor-pointer"
                        onClick={() => {
                          window.open(item.link)
                        }}
                      >
                        {item.icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Command
