import React from "react";

const Header = () => {
  return (
    <header className='bg-primary-color p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-white text-2xl font-bold'>Your Logo</div>
        <nav className='space-x-4'>
          <a href='#' className='text-white hover:underline'>
            Home
          </a>
          <a href='#' className='text-white hover:underline'>
            About
          </a>
          <a href='#' className='text-white hover:underline'>
            Services
          </a>
          <a href='#' className='text-white hover:underline'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
