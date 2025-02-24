import React from 'react'
import { AnimatedListDemo } from '../List'
import { TerminalDemo } from '../terminal'

const Experience = () => {
  return (
    <div className='w-screen  flex mt-12 flex-col items-center'>
      <h1 className=' text-2xl text-center md:text-4xl py-5 text-blue-500 font-redhat  text-bold py-2 font-black drop-shadow-lg'>Scale your Business With Our Dedicated Team Of Developers</h1>
      <div className='flex flex-row gap-x-4'>
        <div className=''>
        <TerminalDemo/>
          {/* <h3 className='mt-24 text-xl'>We will introduce a skilled team of developers for you to choose the most optimistic and passionate off shore developer.</h3> */}
        </div>
      </div>
    </div>
  )
}

export default Experience
