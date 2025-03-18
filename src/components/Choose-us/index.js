import Image from 'next/image'
import React from 'react'
import codeImg from "../../assets/language.png"
import { IconCloudDemo } from '../techstack'

const Choose = () => {
    return (
        <div className='flex flex-col lg:flex-row mt-2'>
            <div className='lg:w-1/2 lg:min-h-[50vh] lg:h-screen flex flex-col items-center justify-center'>
                <IconCloudDemo />
            </div>
            <div className='lg:w-1/2 lg:min-h-[70vh] lg:h-screen flex items-center justify-center flex-col mb-5 me-0 lg:me-24 text-center'>
                <h1 className='font-redhat text-[2rem] lg:text-[4rem] font-black drop-shadow-lg py-2'>
                    We Design
                </h1>
                <h1 className='font-redhat text-[1rem] md:pe-8 lg:text-[2rem] font-black drop-shadow-lg py-1'>
                    Interactive Mobile And Web Apps
                </h1>
                <h1 className='font-redhat text-blue-600 text-[1.5rem] py-2 font-black drop-shadow-lg lg:text-[2rem]'>
                    To Bring Your Online Platform To Life.
                </h1>
                <p className='text-gray-600 mt-2 text-md max-w-lg text-center mx-4 lg:mx-2'>
                    Consult Our Experts To Launch Your Next Platform Seamlessly.
                </p>
            </div>
        </div>
    )
}

export default Choose
