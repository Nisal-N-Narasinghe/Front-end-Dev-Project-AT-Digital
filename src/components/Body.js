import React from "react";
import { styles } from "../styles/Body";

const Body = () => {
  return (
    <div>
      <img
        className='w-full md:h-bodyTopImagemd lg:h-bodyTopImagelg xl:h-bodyTopImagexl'
        src='images/body/Body-Upper-Image.png'
        alt='body'
      />
      <div
        className='md:w-full lg:w-5/12 lg:left-20 lg:top-consultationContainer  lg:absolute '
        style={styles.contentContainer}>
        <p
          className='text-accent-color-2 font-bold mb-4'
          style={styles.heading}>
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </p>

        <button
          className='bg-secondary-color text-accent-color-2 font-semibold'
          style={styles.consultationbutton}>
          GET FREE CONSULTATION
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center text-center md:text-left  md:mr-20 '>
        <div className='w-bodySubImagemd h-bodySubImagemd md:w-bodySubImagemd md:h-bodySubImagemd lg:w-bodySubImagelg lg:h-bodySubImagelg xl:w-bodySubImagexl xl:h-bodySubImagexl'>
          <img src='images/body/Desktop-Image.png' alt='DesktopImage' />
        </div>
        <div className='w-bodyParagraphFrame h-bodyParagraphBox xs:relative md:static md:mb-20 lg:mb-0 xs:w-bodyParagraphsm md:w-auto'>
          <h1 className='text-primary-color md:mt-20 font-bold text-bodySubHeading '>
            Web & Mobile App Development
          </h1>
          <p className='text-text-color-light mt-4 text-bodyParagraph '>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button
            className='bg-secondary-color text-accent-color-2 font-semibold mt-4 '
            style={styles.learnMoreButton}>
            LEARN MORE
          </button>
        </div>
      </div>
      <div className='grid grid-col-1 md:grid-cols-2 justify-items-center text-center md:text-left md:ml-20 xs:mb-20 md:mb-20 lg:mb-0 '>
        <div className='w-bodyParagraphFrame h-bodyParagraphBox order-2 md:order-1 xs:relative md:static xs:w-bodyParagraphsm md:w-auto'>
          <h1 className='text-primary-color font-bold  text-bodySubHeading md:mt-20'>
            Digital Strategy Consulting
          </h1>

          <p className='text-text-color-light mt-4 text-bodyParagraph '>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation, and every business needs a different mix.
            We provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>

          <button
            className='bg-secondary-color text-accent-color-2 font-semibold mt-4 '
            style={styles.learnMoreButton}>
            LEARN MORE
          </button>
        </div>
        <div className='order-1 md:order-2 w-bodySubImagemd h-bodySubImagemd md:w-bodySubImagemd md:h-bodySubImagemd lg:w-bodySubImagelg lg:h-bodySubImagelg xl:w-bodySubImagexl xl:h-bodySubImagexl xs:mt-20  md:mt-0  xl:mb-4 md:mb-4  '>
          <img src='images/body/Search-Image.png' alt='SearchImage' />
        </div>
      </div>
    </div>
  );
};

export default Body;
