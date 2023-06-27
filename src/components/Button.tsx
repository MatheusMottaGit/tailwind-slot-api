import React from 'react'
import { tv } from 'tailwind-variants'

const button = tv({
  base: "flex items-center gap-4",
  variants: {
    color: {
      primary: "bg-[#0b5ccd]"
    }
  }
})

const Button = () => {
  return (
    <div className={button()}>
      <button>Buy now</button>

      <button>Add to cart</button>
    </div>
  )
}

export default Button