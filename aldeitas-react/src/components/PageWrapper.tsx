
import React from 'react'
import { motion } from 'framer-motion'

interface PageWrapperProps {
    children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    )
}
