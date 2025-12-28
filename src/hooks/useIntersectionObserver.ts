import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = true
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // If already been visible and we should freeze, don't observe
    if (freezeOnceVisible && hasBeenVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting

        setIsVisible(visible)

        if (visible && !hasBeenVisible) {
          setHasBeenVisible(true)
        }
      },
      {
        threshold,
        root,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, freezeOnceVisible, hasBeenVisible])

  return { ref: elementRef, isVisible, hasBeenVisible }
}
