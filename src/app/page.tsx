import Prod from '@/components/Prod'

import { tv } from 'tailwind-variants'

const container = tv({
  base: "bg-zinc-950 text-[#cfcada] rounded-xl w-full h-64 p-6 flex items-center justify-center"
})

const { base } = container

export default function Home() {
  return (
    <div className={base}>
      <Prod />
    </div>
  )
}
