'use client';

import Image from 'next/image';

const Skill = ({ developers, name }) => {
  return (
    
    <div className="flex w-[80%] flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-200 to-blue-300 rounded-2xl shadow-xl  border border-blue-400 ">
      <h2 className="md:text-2xl py-1 font-semibold mb-4 text-redhat ">{name}</h2>
      <div className="flex flex-col md:flex-row space-y-16 md:space-y-1 md:space-x-16">
        {developers?.map((dev, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 transition-all duration-300 ease-in-out hover:scale-105   rounded-xl shadow-md hover:cursor-pointer">
            <Image src={dev.src} alt={dev.name} width={90}    className={dev.name === 'Flutter' || dev.name === 'IOS' || dev.name === 'Angular' || dev.name === 'NextJs' || dev.name === 'Laravel' || dev.name === 'kunernets'  ? 'h-[90px]' : ''} />
            <p className="mt-2 text-sm font-2xl">{dev.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;