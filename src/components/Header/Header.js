import React from 'react';
import logo from '../../assets/img/Logo.svg'
import '../Header/header.scss'

const Header = () => {
    return (
            <div className="container">
                <div className="flex justify-end p-[30px] header">
                    <img src={logo} alt=""/>
                </div>
            </div>
    );
};

export default Header;