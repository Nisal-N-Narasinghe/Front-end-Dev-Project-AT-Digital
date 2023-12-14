import React from "react";
import { styles } from "../styles/Body";

const Body = () => {
  return (
    <div>
      <img
        style={styles.image}
        src='images/body/Body-Upper-Image.png'
        alt='body'
      />
      <div style={styles.contentContainer}>
        <p
          className='text-accent-color-2 font-bold mb-4'
          style={styles.heading}>
          We crush your competitors, goals, and sales records - without the B.S.
        </p>

        <button
          className='bg-secondary-color text-accent-color-2 font-semibold'
          style={styles.consultationbutton}>
          GET FREE CONSULTATION
        </button>
      </div>
      <div className='grid grid-cols-2  justify-items-center'>
        <div className='w-bodySubImage h-bodySubImage'>
          <img src='images/body/Desktop-Image.png' alt='DesktopImage' />
        </div>
        <div className='w-bodyParagraphBox h-bodyParagraphBox '>
          <h1 className='text-primary-color font-bold mt-20 text-bodySubHeading'>
            Web & Mobile App Development
          </h1>
          <p className='text-text-color-light mt-4 text-bodyParagraph'>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button
            className='bg-secondary-color text-accent-color-2 font-semibold mt-4'
            style={styles.learnMoreButton}>
            LEARN MORE
          </button>
        </div>
      </div>
      <div className='grid grid-cols-2  justify-items-center'>
        <div className='w-bodyParagraphBox h-bodyParagraphBox '>
          <h1 className='text-primary-color font-bold mt-20 text-bodySubHeading '>
            Digital Strategy Consulting
          </h1>

          <p className='text-text-color-light mt-4  text-bodyParagraph '>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>

          <button
            className='bg-secondary-color text-accent-color-2 font-semibold mt-4  '
            style={styles.learnMoreButton}>
            LEARN MORE
          </button>
        </div>
        <div className='w-bodySubImage h-bodySubImage mb-2'>
          <img src='images/body/Search-Image.png' alt='SearchImage' />
        </div>
      </div>
    </div>
  );
};

export default Body;
