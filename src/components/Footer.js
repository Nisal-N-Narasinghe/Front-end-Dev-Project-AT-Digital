import React from "react";
import { FooterServicesList, FooterTechnologiesList } from "../helpers/Footer";

const Footer = () => {
  return (
    <div className='bg-primary-color '>
      <footer className=' text-white p-8 grid grid-cols-3 gap-8 justify-items-end ml-6 mr-6'>
        <div>
          <div className='mb-4'>
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
        <div>
          <h2 className='text-accent-color-2 text-xl mb-4 font-semibold'>
            Our Technologies
          </h2>
          <FooterTechnologiesList />
        </div>
        <div>
          <h2 className='text-accent-color-2 text-xl mb-4 font-semibold'>
            Our Services
          </h2>
          <FooterServicesList />
        </div>
      </footer>
      <div class='flex justify-center items-center '>
        <div class='w-footerdivider '>
          <hr class='border-t border-accent-color-2 mt-4' />
          <div class='grid grid-cols-3 ml-32 mr-32'>
            <p class='text-accent-color-2 text-sm my-4 justify-self-end'>
              Privacy Policy
            </p>
            <p class='text-accent-color-2 text-sm my-4 justify-self-center'>
              |
            </p>
            <p class='text-accent-color-2 text-sm my-4 justify-self-start'>
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
