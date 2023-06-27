import React from 'react'
import { tv } from 'tailwind-variants'

const button = tv({
  base: "flex items-center gap-4",
  variants: {
    color: {
      primary: "bg-[#0b5ccd] hover:bg-blue-800 text-white",
      secondary: "bg-transparent border-2 border-[#0b5ccd] text-[#0b5ccd]"
    },

    text: {
      strong: "font-bold uppercase"
    },

    size: {
      lg: "p-2 w-32 flex justify-center rounded-lg"
    }
  }
})

const Button = () => {
  return (
    <div className={button()}>
      <button className={button({color: 'primary', text: 'strong', size: 'lg'})}>
        Buy now
      </button>

      <button className={button({color: 'secondary', text: 'strong', size: 'lg'})}>
        Add to cart
      </button>
    </div>
  )
}

export default Button