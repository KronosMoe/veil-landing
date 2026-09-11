import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Check, LockKeyhole, MessageCircle, Presentation } from 'lucide-react'
import { MessagesDemo, TodoDemo, WhiteboardDemo } from './showcase-demos'

const chapters = [
  {
    number: '01',
    word: 'Talk it through.',
    title: 'Start where the question is.',
    body: 'A question in chat gives the group a starting point. Share the context, bring in the right people and decide what needs attention.',
    caption: '01 / A QUESTION, SHARED',
    Demo: MessagesDemo,
    Icon: MessageCircle,
  },
  {
    number: '02',
    word: 'Find a way.',
    title: 'Make the plan together.',
    body: 'Take the discussion into a shared whiteboard. Sketch the options, or talk them through in a call, while everyone stays in the same workspace.',
    caption: '02 / AN IDEA, WORKED THROUGH',
    Demo: WhiteboardDemo,
    Icon: Presentation,
  },
  {
    number: '03',
    word: 'Make it happen.',
    title: 'Give the next step an owner.',
    body: 'Add the agreed work to a task board. Choose an assignee and a due date, then keep the group updated in chat. Your people move the work forward.',
    caption: '03 / A DECISION, PUT INTO ACTION',
    Demo: TodoDemo,
    Icon: Check,
  },
]

function StoryScene({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const chapter = chapters[index]
  const start = index / 3
  const end = (index + 1) / 3
  const opacity = useTransform(progress, [start - 0.055, start + 0.035, end - 0.04, end + 0.05], [0, 1, 1, 0])
  const y = useTransform(progress, [start, end], [60, -35])
  const rotate = useTransform(progress, [start, end], [index % 2 === 0 ? 4 : -4, 0])
  const scale = useTransform(progress, [start, start + 0.13, end], [0.88, 1, 1])
  const wordX = useTransform(progress, [start, end], [35, -35])
  const { Demo, Icon } = chapter
  return (
    <motion.div className="story-scene" style={{ opacity }} aria-hidden="true">
      <motion.div className="story-giant-word" style={{ x: wordX }}>
        {chapter.word}
      </motion.div>
      <div className="story-scene-layout">
        <div className="story-copy">
          <span className="eyebrow">{chapter.number} / CHAT LEADS TO WORK</span>
          <h3>{chapter.title}</h3>
          <p>{chapter.body}</p>
          <div className="story-caption">
            <Icon size={16} />
            {chapter.caption}
          </div>
        </div>
        <motion.div className="story-product" style={{ y, rotate, scale }}>
          <div className="story-window-label">
            <span>
              <span className="status-dot" /> STUDIO / TOGETHER
            </span>
            <span>ILLUSTRATIVE PREVIEW</span>
          </div>
          <Demo />
          <div className="story-product-note">
            <LockKeyhole size={13} /> One workspace. Your circle.
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function AnimatedStoryPassage() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  // Hold the first and last scenes fully visible at the edges of the pinned sequence.
  const progress = useTransform(scrollYProgress, [0, 1], [0.04, 0.955])
  const line = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={ref} id="showcase" className="story-passage" aria-label="From chat to shared work">
      <div className="sr-only">
        {chapters.map(({ title, body }) => (
          <div key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
      <div className="story-sticky">
        <div className="story-topline">
          <span>02 / FROM CONVERSATION TO COORDINATION</span>
          <a href="#security">
            Next: privacy & security <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="story-orb" aria-hidden="true" />
        {chapters.map((chapter, index) => (
          <StoryScene key={chapter.number} index={index} progress={progress} />
        ))}
        <div className="story-timeline" aria-hidden="true">
          <div>
            <span>01 / TALK</span>
            <span>02 / PLAN</span>
            <span>03 / DO</span>
          </div>
          <div className="story-timeline-track">
            <motion.span style={{ width: line }} />
          </div>
        </div>
        <div className="story-scroll-hint" aria-hidden="true">
          ONE GROUP. ONE WORKSPACE. FOLLOW THE NEXT STEP. <ArrowDown size={13} />
        </div>
      </div>
    </section>
  )
}

function StaticStoryPassage() {
  return (
    <section id="showcase" className="story-static editorial-section" aria-label="From chat to shared work">
      <div className="section-marker">CHAT LEADS TO WORK</div>
      {chapters.map(({ number, title, body, Demo }) => (
        <article key={number}>
          <div>
            <span className="eyebrow">{number} / YOUR GROUP’S WORKFLOW</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="story-static-demo">
            <Demo />
          </div>
        </article>
      ))}
    </section>
  )
}

export default function StoryPassage() {
  const reduceMotion = useReducedMotion()
  return reduceMotion ? <StaticStoryPassage /> : <AnimatedStoryPassage />
}
