import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FULL_TEXT = 'WE BUILD WEBSITES THAT CLOSE JOBS.'
const CHAR_DELAY = 55 // ms per character

export default function LoadingScreen({ onComplete }) {
  const [displayed, setDisplayed] = useState('')
  const [visible, setVisible] = useState(true)
  const [cursorOn, setCursorOn] = useState(true)

  // Type out characters one by one
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(FULL_TEXT.slice(0, i))
      if (i >= FULL_TEXT.length) {
        clearInterval(interval)
        // Hold for a beat, then fade out
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 600)
        }, 800)
      }
    }, CHAR_DELAY)
    return () => clearInterval(interval)
  }, [onComplete])

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setCursorOn(c => !c), 530)
    return () => clearInterval(blink)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Logo mark */}
          <motion.div
            className="mb-8 font-mono text-xs tracking-[0.4em] uppercase text-snow/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Adiran Tech
          </motion.div>

          {/* Typing text */}
          <div className="font-hero text-3xl md:text-4xl tracking-wide text-snow">
            {displayed}
            <span
              className="inline-block w-[3px] h-[1em] ml-1 align-middle bg-cyan"
              style={{ opacity: cursorOn ? 1 : 0, transition: 'opacity 0.1s' }}
            />
          </div>

          {/* Bottom progress line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-cyan"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: FULL_TEXT.length * (CHAR_DELAY / 1000) + 0.8, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
