/* eslint-disable react-hooks/refs */
import { FloatingPortal, useFloating, arrow, shift, offset } from '@floating-ui/react-dom-interactions'
import { useId, useRef, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

export default function Popover({ children, className, renderPopover }) {
  const [open, setOpen] = useState(false)
  const arrowRef = useRef(null)
  const { x, y, reference, floating, strategy, middlewareData } = useFloating({
    middleware: [offset(6), shift(), arrow({ element: arrowRef })]
  })

  const id = useId()

  const showPopover = () => {
    setOpen(true)
  }
  const hidePopover = () => {
    setOpen(false)
  }
  return (
    <div className={className} ref={reference} onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      {children}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {open && (
            <motion.div
              className='text-white'
              ref={floating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ x: 0, transform: 'scale(0)' }}
              animate={{ x: 1, transform: 'scale(1)' }}
              exit={{ x: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              <span
                className='border-x-transparent border-t-transparent border-b-white border-11 absolute -translate-y-full z-10'
                ref={arrowRef}
                style={{
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y
                }}
              />
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </div>
  )
}
