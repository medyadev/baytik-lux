import React from 'react';
import logo from '../assets/img/Logo.svg'
const Header = () => {
    return (
      <section>
          <div className="container">
                  <div className="flex justify-end">
                  <img src={logo} alt=""/>
              </div>
          </div>
      </section>
    );
};

export default Header;