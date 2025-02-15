'use client';

import React from 'react';
import { Heart, Send, Bookmark } from 'lucide-react';
import planet from "../../../public/planet.svg";
import Image from 'next/image';
import glass from "../../../public/glass.png";
import globe from "../../../public/Vector.svg";

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row mt-2 lg:mt-6'>
      {/* Left Container */}
      <div className='lg:w-1/2 lg:min-h-[80vh] lg:h-screen flex items-center justify-center flex-col order-2 lg:order-1'>
        <h1 className='font-redhat text-[6rem]  lg:text-[9rem] font-black drop-shadow-lg '>we build</h1>
        <h1 className='font-redhat text-blue-600 -mt-16 lg:-mt-32 text-[6rem] lg:text-[9rem] font-black drop-shadow-lg'>stuff</h1>
        <p className='text-gray-600 mt-2 text-md max-w-lg text-center mx-2'>
          Hire Certified  Developers To Build Scalable Secure And Customized Applications That Align With Your Business Needs
        </p>
        <div className='flex gap-4 mt-4'>
          <button className='bg-blue-600 text-white px-6 py-2 rounded-full text-lg shadow-lg hover:bg-blue-700'>
            Contact
          </button>
          <button className='border border-black px-6 py-2 rounded-full text-lg shadow-lg hover:bg-gray-100'>
            About
          </button>
        </div>
        <div className='flex gap-4 mt-6'>
          <Heart className='w-6 h-6 text-black' />
          <Send className='w-6 h-6 text-black' />
          <Bookmark className='w-6 h-6 text-black' />
        </div>
      </div>

      {/* Right Container */}
      <div className='lg:w-1/2 lg:min-h-[80vh] lg:h-screen flex flex-col items-center justify-center order-1 lg:order-2'>
        <div className='flex mt-4 lg:mt-24 '>
          <Image
            alt="planet"
            src={planet}
            width={450}
            height={450}
            sizes="150vw"
          
          />
        </div>
        <div className='flex flex-row gap-x-8 lg:gap-x-32 mb-6 lg:mt-4'>
          <Image
            alt="glass"
            src={glass}
            width={200}
            height={200}
            sizes="30vw"
            className='ms-[20px] lg:ms-[80px] -mt-2 lg:mt-2 hidden lg:block'
          />
          <Image
            alt="globe"
            src={globe}
            width={120}
            height={120}
            sizes="25vw"
            className='hidden lg:block'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
