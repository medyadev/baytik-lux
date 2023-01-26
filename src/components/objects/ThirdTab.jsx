import Image from "../../assets/img/FristImageForObejects.png";
import ArrowLiner from "../../assets/svg/ArrowLiner";
import ArrowLinerOrange from "../../assets/svg/ArrowLinerOrange";
import BlueArrows from "../../assets/svg/BlueArrow";

export default function ThirdTab() {
  const lists = [
    {
      title: "Площадь застройки:",
      subtitle: "300 м2",
      svg: <ArrowLinerOrange />,
    },
    {
      title: "Материал стен:",
      subtitle: "Газобетон",
      svg: <ArrowLinerOrange />,
    },
    {
      title: "Материал кровли:",
      subtitle: "Эксплуатируемая",
      svg: <ArrowLinerOrange />,
    },
    {
      title: "Количество этажей:",
      subtitle: "2 этажа",
      svg: <ArrowLinerOrange />,
    },
  ];

  return (
    <div className="max-w-[1600px] px-[20px] mx-auto">
      <div className="mx-auto ">
        <div className="mb-[30px]">
          <img src={Image} />
        </div>
        <div className="flex flex-col lg:flex-row justify-between md:px-[30px]">
          <div className="w-full mb-[56px] flex flex-col items-center lg:items-start">
            <p className="text-start pb-[42px] text-[#252525] text-[32px]">
              Smart House
            </p>
            <p className="text-start pb-[20px] text-[21px]">2 этажа</p>
            <div className="w-[200px] mb-[40px] flex justify-between items-center">
              <BlueArrows />
              <p className="font-[600] text-[32px]">335</p>
              <p className="font-[600] text-[32px]">M2</p>
            </div>
            <button className="w-[208px] text-[18px] px-[20px] py-[7px] flex justify-between items-center bg-[#343232] text-white">
              Планировка <ArrowLiner />
            </button>
          </div>
          <div className="mx-auto gap-[10px] flex justify-center flex-wrap lg:flex-col lg:flex-nowrap">
            {lists.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-[20px]"
              >
                {item.svg}
                <div className="w-full w-[200px] ml-[20px]">
                  <p className="text-start text-[18px] text-[#252525] font-[600]">
                    {item.subtitle}
                  </p>
                  <p className="text-start text-[18px]">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
