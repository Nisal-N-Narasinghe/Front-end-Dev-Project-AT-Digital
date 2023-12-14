import React from "react";
import { NavLinks } from "../helpers/Header";

const Header = () => {
  return (
    <header className='bg-primary-color text-white p-8 grid grid-cols-2  '>
      <div className='justify-self-start ml-6'>
        <img
          className='w-logo h-logo'
          src='images/header/White-Logo.png'
          alt='logo'
        />
      </div>
      <div className='justify-self-end mr-6 mt-2'>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
