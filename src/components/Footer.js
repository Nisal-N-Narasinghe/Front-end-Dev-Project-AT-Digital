import React from "react";
import { FooterServicesList, FooterTechnologiesList } from "../helpers/Footer";

const Footer = () => {
  return (
    <div className='bg-primary-color '>
      <footer className='text-white p-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-start md:justify-items-end ml-6 mr-6'>
        <div className='md:order-0'>
          <div className='mb-4 text-center md:text-left '>
            <img
              className='w-logo h-logo'
              src='images/header/White-Logo.png'
              alt='logo'
            />
          </div>
          <ul>
            <p className='text-accent-color-2'>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective - your
              business results.
            </p>
          </ul>
        </div>

        <div className=' md:text-left '>
          <h2 className='text-accent-color-2 text-xl mb-4 font-semibold'>
            Our Technologies
          </h2>
          <FooterTechnologiesList />
        </div>
        <div className=' md:text-left '>
          <h2 className='text-accent-color-2 text-xl mb-4 font-semibold'>
            Our Services
          </h2>
          <FooterServicesList />
        </div>
      </footer>
      <div class='flex justify-center items-center '>
        <div className='w-5/6 md:w-footerdivider'>
          <hr class='border-t border-accent-color-2 mt-4' />
          <div className='grid grid-cols-3 md:grid-cols-3 ml-0 md:ml-32 mr-0 md:mr-32'>
            <p className='text-accent-color-2 text-sm my-4 text-center md:text-left'>
              Privacy Policy
            </p>
            <p class='text-accent-color-2 text-sm my-4 justify-self-center'>
              |
            </p>
            <p className='text-accent-color-2 text-sm my-4 text-center md:text-right'>
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
