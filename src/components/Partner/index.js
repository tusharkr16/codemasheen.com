import React from 'react'
import partner from "../../../public/partner.svg"
import Image from 'next/image'

const Partner = () => {
    return (
        <div className='w-screen h-screen mt-32 flex justify-center items-center'>
            <Image
                alt="planet"
                src={partner}
                width={2050}
                height={1050}
                sizes="150vw"

            />
        </div>
    )
}

export default Partner
