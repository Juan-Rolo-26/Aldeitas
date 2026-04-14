import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <motion.div
            className="scroll-progress-bar"
            style={{
                scaleX,
                position: 'fixed',
                top: '40px', // Below announcement bar
                left: 0,
                right: 0,
                height: '3px',
                backgroundColor: 'var(--gold)',
                transformOrigin: '0%',
                zIndex: 1001,
            }}
        />
    )
}
