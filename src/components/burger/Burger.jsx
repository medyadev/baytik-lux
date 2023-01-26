import React, { useState } from "react";
import MobileMenu from "./ModileMenu";
import '../hero/media.scss'
import "./style.scss";

export default function Burger() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className=" burger fixed w-[100%] z-[999] bg-[#C9AE5D] max-w-[100px] min-h-[100vh]">
      {<MobileMenu className={openBurger ? "transform" : ""} />}
      <button
        onClick={() => setOpenBurger(!openBurger)}
        className={`burger-button ${openBurger ? "active" : ""} ml-auto`}
      >
        <div className="burger-button-top w-[15px] rounded-[10px] ml-auto h-[2px] bg-white"></div>
        <div className="burger-button-center w-[30px] rounded-[10px] h-[2px] bg-red"></div>
        <div className="burger-button-bottom w-[15px] rounded-[10px] h-[2px] bg-white"></div>
      </button>
    </div>
  );
}
