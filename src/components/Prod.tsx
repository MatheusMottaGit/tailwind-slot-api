import React from 'react'

import { tv } from 'tailwind-variants'

import Button from './Button'
import Sizes from './Sizes'
import Image from 'next/image'

import shoe from '../assets/shoe.png'

const container = tv({
  base: "w-full h-full rounded-xl flex items-center justify-center gap-12"
})

const productImg = tv({
  base: "h-full w-80 bg-blue-700 p-4 rounded-xl", 
  variants: {
    size: {
      full: "h-full w-72"
    }
  }
})

const productDescription = tv({
  base: "h-full w-full p-4 rounded-xl flex flex-col gap-3 items-start justify-center"
})

const Prod = () => {
  return (
    <div className={container()}>
      <Image 
        alt=''
        src={shoe}
      />

      <div className={productDescription()}>
        <h1 className='font-bold text-3xl'>
          Nike Adapt BB 2.0
        </h1>

        <span className='flex items-center gap-4 font-bold text-2xl text-white/50'>
          $297.97
        </span>

        <Sizes />

        <Button />
      </div>
    </div>
  )
}

export default Prod