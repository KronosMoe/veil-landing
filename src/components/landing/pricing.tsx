import { motion } from 'framer-motion'
import { ArrowRight, Check, Info, Mail } from 'lucide-react'
import { plans } from '@/content/site'
import { cn } from '@/lib/utils'
import Button from '../ui/button'
import { Reveal, RevealGroup } from '../motion/reveal'
import { revealItemVariants } from '@/lib/motion-variants'

const isMailto = (href: string) => href.startsWith('mailto:')

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-primary-500 text-xs font-semibold tracking-[0.2em] uppercase">Plans</span>
          <h2 className="mt-3 text-3xl font-bold text-balance text-gray-900 sm:text-4xl dark:text-white">
            Start free. Stay free, if that suits you.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-gray-600 dark:text-gray-400">
            Every workspace begins on the free plan with every feature Veil ships today. The paid plans add things for
            teams that have an IT department to satisfy.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={revealItemVariants}
              className={cn('veil-card flex flex-col p-6', plan.featured && 'ring-primary-500/40 ring-2')}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="veil-well text-primary-500 flex h-10 w-10 items-center justify-center rounded-xl">
                  <plan.icon className="h-4 w-4" />
                </span>
                {plan.featured && (
                  <span className="veil-well text-primary-500 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.12em] uppercase">
                    Coming soon
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-base font-bold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{plan.price}</p>
              <p className="text-xs text-gray-500">{plan.cadence}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{plan.tagline}</p>

              <ul className="mt-5 flex flex-col gap-2">
                {plan.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-xs leading-relaxed text-gray-700 dark:text-gray-300"
                  >
                    <Check className="text-primary-500 mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {plan.caveat && (
                <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-gray-500">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {plan.caveat}
                </p>
              )}

              {/* Pushes every card's button onto the same line, whatever the list length. */}
              <div className="mt-auto pt-6">
                <a
                  href={plan.cta.href}
                  {...(isMailto(plan.cta.href) ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group block"
                >
                  <Button
                    color={plan.featured ? 'primary' : 'secondary'}
                    variant={plan.featured ? 'solid' : 'surface'}
                    size="md"
                    className="w-full"
                  >
                    {isMailto(plan.cta.href) ? <Mail className="h-4 w-4" /> : null}
                    {plan.cta.label}
                    {!isMailto(plan.cta.href) && (
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal className="mt-6 block text-center" delay={0.1}>
          <p className="text-xs text-gray-500">
            A workspace&rsquo;s plan lives in its settings, under Plan. Only the owner can change it.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
