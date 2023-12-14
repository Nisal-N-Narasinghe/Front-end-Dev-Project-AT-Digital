import React from "react";

const Footer = () => {
  return (
    <footer className='bg-primary-color text-white p-8'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Column 1</h2>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-4'>Column 2</h2>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-4'>Column 3</h2>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
