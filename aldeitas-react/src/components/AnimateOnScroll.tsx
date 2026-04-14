

import React from 'react'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

interface Props extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: any
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
}

export function AnimateOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30,
  ...rest
}: Props) {

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      scale: 0.98,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: delay * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={className}
      {...(rest as any)}
    >
      {children}
    </motion.div>
  )
}
