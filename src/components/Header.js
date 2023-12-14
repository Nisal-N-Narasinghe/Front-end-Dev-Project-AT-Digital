import React from "react";
import { NavLinks } from "../helpers/Header";

const Header = () => {
  const navigationLinks = [
    {
      name: "SERVICES",
      url: "#",
    },
    {
      name: "ABOUT US",
      url: "#",
    },
    {
      name: "CONTACT US",
      url: "#",
    },
    {
      name: "CAREERS",
      url: "#",
    },
  ];
  return (
    <header className='bg-primary-color'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='m-4'>
          <img
            className='w-logo h-logo'
            src='images/header/White-Logo.png'
            alt='logo'
          />
        </div>
        <NavLinks links={navigationLinks} />
      </div>
    </header>
  );
};

export default Header;
