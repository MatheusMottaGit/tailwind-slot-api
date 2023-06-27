import React from 'react'
import { tv } from 'tailwind-variants'
import Button from './Button'
import Sizes from './Sizes'

const container = tv({
  base: "w-full h-full rounded-xl flex items-center justify-center gap-12"
})

const productImg = tv({
  base: "h-full w-80 bg-blue-700 p-4 rounded-xl"
})

const productDescription = tv({
  base: "h-full w-full p-4 rounded-xl flex flex-col gap-3 items-start justify-center"
})

const Prod = () => {
  return (
    <div className={container()}>
      <div className={productImg()}></div>

      <div className={productDescription()}>
        <h1 className='font-bold text-3xl'>
          Nike Adapt BB 2.0
        </h1>

        <span className='flex items-center gap-4 font-bold text-2xl'>
          $297.97

          <p className='text-xl text-white/40'>$350</p>

          <p className='text-xl text-green-600'>20% off</p>
        </span>

        <Sizes />

        <Button />
      </div>
    </div>
  )
}

export default Prod