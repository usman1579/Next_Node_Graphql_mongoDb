import React from 'react'
import { motion } from 'framer-motion';

interface Itoggle {
  toggle: boolean;
  onClick: (data : any) => void;
}

export const Toggle = ({ toggle , onClick }: Itoggle) => {
  return (
    <div 
    onClick={onClick}
    className={`flex h-6 w-12 cursor-pointer rounded-full border border-grey ${toggle ? 'justify-start bg-white' : 'justify-end bg-black'
      } p-[1px]`}>
      <motion.div className={`h-5 w-5 rounded-full ${toggle ? 'bg-red-950' : 'bg-green-500'}`}
        layout
        transition={{ type: 'spring', stiffness: '700', damping: 30 }} />
    </div>
  )
}
