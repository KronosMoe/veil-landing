import { useRef, type ComponentType } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { Check } from 'lucide-react'
import { showcaseScenes, type ShowcaseScene } from '@/content/site'
import { AnnouncementsDemo, CallDemo, MessagesDemo, QADemo, TodoDemo, WhiteboardDemo } from './showcase-demos'
import { Reveal } from '../motion/reveal'

const demos: Record<ShowcaseScene['id'], ComponentType> = {
  messages: MessagesDemo,
  calls: CallDemo,
  whiteboard: WhiteboardDemo,
  todo: TodoDemo,
  announcements: AnnouncementsDemo,
  qa: QADemo,
}

const total = showcaseScenes.length

/** Scroll distance each scene owns. Lower feels brisker, higher holds longer. */
const SCENE_HEIGHT_SVH = 90

/**
 * The scroll window a scene owns, plus the softer window either side of it
 * where it is fading in or out. Scene 0 starts already on screen, so its
 * entrance is collapsed to nothing.
 */
function sceneRange(index: number) {
  const span = 1 / total
  const start = index * span
  const end = start + span
  const fade = span * 0.34

  const enterFrom = index === 0 ? start - 0.0001 : start - fade
  const enterTo = index === 0 ? start : start + fade

  return [enterFrom, enterTo, end - fade, end + fade]
}

function SceneCopy({ scene, progress, index }: { scene: ShowcaseScene; progress: MotionValue<number>; index: number }) {
  const range = sceneRange(index)
  const opacity = useTransform(progress, range, [0, 1, 1, 0])
  const y = useTransform(progress, range, [40, 0, 0, -40])

  return (
    <motion.div style={{ opacity, y }} className="lg:pr-6">
      <span className="text-primary-500 text-xs font-semibold tracking-[0.2em] uppercase">{scene.eyebrow}</span>
      <h3 className="mt-3 text-2xl font-bold text-balance text-gray-900 sm:text-3xl dark:text-white">{scene.title}</h3>
      <p className="mt-3 hidden text-base leading-relaxed text-pretty text-gray-600 sm:block dark:text-gray-400">
        {scene.body}
      </p>
      <ul className="mt-5 space-y-2.5">
        {scene.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
            <span className="veil-card mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md">
              <Check className="text-primary-500 size-3" />
            </span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function SceneDemo({ scene, progress, index }: { scene: ShowcaseScene; progress: MotionValue<number>; index: number }) {
  const range = sceneRange(index)
  const opacity = useTransform(progress, range, [0, 1, 1, 0])
  const y = useTransform(progress, range, [70, 0, 0, -70])
  const scale = useTransform(progress, range, [0.93, 1, 1, 0.93])
  const Demo = demos[scene.id]

  return (
    <motion.div style={{ opacity, y, scale }} className="h-[300px] sm:h-[360px] lg:h-[420px]">
      <Demo />
    </motion.div>
  )
}

/** One label in the rail above the stage, lit while its scene is on screen. */
function StepLabel({ scene, progress, index }: { scene: ShowcaseScene; progress: MotionValue<number>; index: number }) {
  const range = sceneRange(index)
  const opacity = useTransform(progress, range, [0.35, 1, 1, 0.35])
  const scaleX = useTransform(progress, range, [0, 1, 1, 0])

  return (
    <motion.span style={{ opacity }} className="relative flex shrink-0 items-center gap-1.5 pb-1.5">
      <scene.icon className="size-3.5" />
      <span className="hidden text-xs font-semibold whitespace-nowrap sm:inline">{scene.label}</span>
      <motion.span
        style={{ scaleX }}
        className="from-primary-500 to-secondary-500 absolute inset-x-0 bottom-0 h-0.5 origin-left rounded-full bg-gradient-to-r"
      />
    </motion.span>
  )
}

/**
 * A pinned tour of the app: the section is `scenes × 100svh` tall and the stage
 * inside it sticks, so each scene enters, holds while you scroll its slice, and
 * leaves again. Reduced motion gets the same scenes as a plain stacked list.
 */
export function Showcase() {
  const trackRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] })
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 32, restDelta: 0.001 })

  const heading = (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="text-primary-500 text-xs font-semibold tracking-[0.2em] uppercase">A look inside</span>
      <h2 className="mt-3 text-3xl font-bold text-balance text-gray-900 sm:text-4xl dark:text-white">
        See what a day in Veil looks like
      </h2>
    </Reveal>
  )

  if (shouldReduceMotion) {
    return (
      <section id="showcase" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {heading}
          <div className="mt-14 space-y-16">
            {showcaseScenes.map((scene) => {
              const Demo = demos[scene.id]
              return (
                <div key={scene.id} className="grid items-center gap-8 lg:grid-cols-2">
                  <div>
                    <span className="text-primary-500 text-xs font-semibold tracking-[0.2em] uppercase">
                      {scene.eyebrow}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{scene.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">{scene.body}</p>
                    <ul className="mt-5 space-y-2.5">
                      {scene.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                          <span className="veil-card mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md">
                            <Check className="text-primary-500 size-3" />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-[360px]">
                    <Demo />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="showcase" className="relative">
      <div ref={trackRef} style={{ height: `${total * SCENE_HEIGHT_SVH}svh` }}>
        <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-4 pt-20 sm:px-6 lg:px-8">
            {heading}

            {/* Rail of scene labels, lit by scroll position. */}
            <div className="mt-6 flex items-end justify-center gap-4 overflow-hidden text-gray-500 sm:gap-7 dark:text-gray-400">
              {showcaseScenes.map((scene, index) => (
                <StepLabel key={scene.id} scene={scene} progress={progress} index={index} />
              ))}
            </div>
          </div>

          {/* Stage: every scene stacked, only the active one at full opacity. */}
          <div className="relative mx-auto w-full max-w-6xl flex-1 px-4 pb-10 sm:px-6 lg:px-8">
            {showcaseScenes.map((scene, index) => (
              <div
                key={scene.id}
                className="absolute inset-x-4 inset-y-0 grid content-center gap-6 sm:inset-x-6 lg:inset-x-8 lg:grid-cols-2 lg:items-center lg:gap-10"
              >
                <SceneCopy scene={scene} progress={progress} index={index} />
                <SceneDemo scene={scene} progress={progress} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
