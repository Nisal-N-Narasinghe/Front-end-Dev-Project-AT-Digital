import React from "react";
import { FooterServicesList, FooterTechnologiesList } from "../helpers/Footer";

const Footer = () => {
  return (
    <div className='bg-primary-color '>
      <footer className='text-white p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start md:justify-items-start lg:justify-items-center ml-6 mr-6'>
        <div className='md:col-span-2 lg:col-span-1 md:order-0'>
          <div className='mb-4 text-center md:text-left '>
            <img
              className='w-logo h-logo'
              src='images/header/White-Logo.png'
              alt='Descriptive text about your logo or business'
            />
          </div>
          <p className='text-accent-color-2 md:text-left lg:text-start md:w-3/5 lg:w-auto'>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>

        <div className='md:text-left '>
          <h2 className='text-accent-color-2 text-xl mb-4 font-semibold'>
            Our Technologies
          </h2>
          <FooterTechnologiesList />
        </div>

        <div className='md:text-left '>
          <h2 className='text-accent-color-2 text-xl mb-4 font-semibold'>
            Our Services
          </h2>
          <FooterServicesList />
        </div>
      </footer>

      <div className='flex justify-center items-center '>
        <div className='w-5/6 lg:w-footerdivider'>
          <hr className='border-t border-accent-color-2 mt-4' />
          <div className='grid grid-cols-3 '>
            <p className='text-accent-color-2 text-sm my-4 text-right'>
              Privacy Policy
            </p>
            <p className='text-accent-color-2 text-sm my-4 justify-self-center'>
              |
            </p>
            <p className='text-accent-color-2 text-sm my-4 text-left'>
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
