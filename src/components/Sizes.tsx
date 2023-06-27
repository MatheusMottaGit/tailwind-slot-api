'use client'
import React, { useState } from 'react'
import { tv } from 'tailwind-variants'

const sizes = tv({
  base: "rounded-full h-12 w-12 flex items-center justify-center p-4", 
  variants: {
    color: {
      primary: "text-white bg-transparent hover:bg-[#0b5ccd]",
      pressed: "text-white bg-[#0b5ccd]"
    },

    text: {
      strong: "uppercase font-bold text-xl"
    }
  }
})

const Sizes = () => {

  return (
    <ul className='flex items-center gap-3'>
      <li className={sizes({color: 'primary', text: 'strong'})}>
        xs
      </li>
      <li className={sizes({color: 'primary', text: 'strong'})}>
        s
      </li>
      <li className={sizes({color: 'primary', text: 'strong'})}>
        m
      </li>
      <li className={sizes({color: 'primary', text: 'strong'})}>
        l
      </li>
      <li className={sizes({color: 'primary', text: 'strong'})}>
        xl
      </li>
    </ul>
  )
}

export default Sizes