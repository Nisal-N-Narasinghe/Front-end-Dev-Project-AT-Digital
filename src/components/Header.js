import React, { useEffect, useState } from "react";
import { NavLinks } from "../helpers/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth < 750);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {showMenu ? (
          <FontAwesomeIcon icon={faBars} size='2x' color='white' />
        ) : (
          <NavLinks />
        )}
      </div>
    </header>
  );
};

export default Header;
