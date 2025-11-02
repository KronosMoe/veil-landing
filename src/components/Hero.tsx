import { useEffect, useRef } from 'react'
import { Monitor, Phone, Video } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    updateSize()

    const phrases = ['VEIL', 'WORK', 'VOICE', 'SOCIAL', 'PRIVACY']
    const pixelSize = 8
    const charSpacing = 2
    const wordSpacing = -20
    const scrollSpeed = 0.2

    const font: Record<string, number[][]> = {
      A: [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
      ],
      B: [
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
      ],
      C: [
        [0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
      ],
      D: [
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
      ],
      E: [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
      ],
      G: [
        [0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
      ],
      I: [
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 1],
      ],
      L: [
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
      ],
      M: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
      ],
      N: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1],
      ],
      O: [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
      ],
      P: [
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
      ],
      R: [
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 1, 0, 0],
        [1, 0, 0, 1, 0],
      ],
      S: [
        [0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
      ],
      T: [
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
      ],
      U: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
      ],
      V: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
      ],
      W: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
      ],
      Y: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
      ],
      K: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1],
      ],
      ' ': [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      '•': [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    }

    const getCharWidth = () => 5
    const getCharHeight = () => 5

    const applyMosaicBlur = (blurSize: number) => {
      const rect = canvas.getBoundingClientRect()
      const imageData = ctx.getImageData(0, 0, rect.width, rect.height)
      const blurred = ctx.createImageData(imageData)

      for (let y = 0; y < rect.height; y += blurSize) {
        for (let x = 0; x < rect.width; x += blurSize) {
          let r = 0,
            g = 0,
            b = 0,
            a = 0,
            count = 0

          for (let by = 0; by < blurSize && y + by < rect.height; by++) {
            for (let bx = 0; bx < blurSize && x + bx < rect.width; bx++) {
              const i = ((y + by) * rect.width + (x + bx)) * 4
              r += imageData.data[i]
              g += imageData.data[i + 1]
              b += imageData.data[i + 2]
              a += imageData.data[i + 3]
              count++
            }
          }

          r = Math.round(r / count)
          g = Math.round(g / count)
          b = Math.round(b / count)
          a = Math.round(a / count)

          for (let by = 0; by < blurSize && y + by < rect.height; by++) {
            for (let bx = 0; bx < blurSize && x + bx < rect.width; bx++) {
              const i = ((y + by) * rect.width + (x + bx)) * 4
              blurred.data[i] = r
              blurred.data[i + 1] = g
              blurred.data[i + 2] = b
              blurred.data[i + 3] = a
            }
          }
        }
      }

      ctx.putImageData(blurred, 0, 0)
    }

    const drawChar = (char: string, x: number, y: number) => {
      const pattern = font[char] || font[' ']
      ctx.fillStyle = '#18271B'

      for (let row = 0; row < pattern.length; row++) {
        for (let col = 0; col < pattern[row].length; col++) {
          if (pattern[row][col]) {
            ctx.fillRect(x + col * pixelSize, y + row * pixelSize, pixelSize - 1, pixelSize - 1)
          }
        }
      }
    }

    const drawText = (text: string, x: number, y: number) => {
      let currentX = x
      for (const char of text) {
        if (char === ' ') {
          currentX += getCharWidth() * pixelSize + wordSpacing
        } else {
          drawChar(char, currentX, y)
          currentX += getCharWidth() * pixelSize + charSpacing
        }
      }
      return currentX
    }

    const getTextWidth = (text: string) => {
      let width = 0
      for (const char of text) {
        if (char === ' ') {
          width += getCharWidth() * pixelSize + wordSpacing
        } else {
          width += getCharWidth() * pixelSize + charSpacing
        }
      }
      return width
    }

    const pattern = phrases.join('•') + '•'
    const patternWidth = getTextWidth(pattern)

    let offset = 0

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      let x = offset
      while (x < rect.width + patternWidth) {
        const yPos = (rect.height - getCharHeight() * pixelSize) / 2
        drawText(pattern, x, yPos)
        x += patternWidth
      }

      applyMosaicBlur(2)

      offset -= scrollSpeed
      if (offset <= -patternWidth) {
        offset += patternWidth
      }

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex mx-2 sm:mx-0 w-full flex-col items-center gap-2 rounded-sm border border-zinc-700 p-4 shadow-2xl select-none sm:w-md">
        <div className="relative h-24 w-full overflow-hidden rounded-sm bg-gray-100 shadow-lg">
          <div className="absolute inset-0 rounded-sm bg-[#628E79]" />
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ imageRendering: 'pixelated' }} />
        </div>
        <div className="flex w-full items-center gap-2">
          <div className="flex w-full justify-center rounded-sm bg-zinc-800 px-4 py-2 shadow-lg">
            <Monitor fill="white" size={20} />
          </div>
          <div className="flex w-full justify-center rounded-sm bg-zinc-800 px-4 py-2 shadow-lg">
            <Video fill="white" size={20} />
          </div>
          <div className="flex w-full justify-center rounded-sm bg-zinc-800 px-4 py-2 shadow-lg">
            <Phone fill="red" stroke="" size={20} />
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <h1 className="font-bold">Veil</h1>
          <p className="text-sm text-gray-400">Under Construction</p>
        </div>
      </div>
    </div>
  )
}
