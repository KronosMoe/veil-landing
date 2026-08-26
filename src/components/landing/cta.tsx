import { ArrowRight, Mail } from 'lucide-react'
import { APP_URL, SUPPORT_EMAIL } from '@/content/site'
import Button from '../ui/button'
import { Reveal } from '../motion/reveal'
import { VeilLogo } from './veil-logo'

export function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="veil-aurora pointer-events-none absolute inset-0" aria-hidden="true" />

      <Reveal className="relative mx-auto block max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="veil-card skeuo-plate rounded-3xl p-8 text-center sm:p-12">
          <span className="veil-card mx-auto flex h-14 w-14 items-center justify-center rounded-2xl">
            <VeilLogo className="text-primary-500 h-7 w-7" color="currentColor" />
          </span>

          <h2 className="mt-6 text-3xl font-bold text-balance text-gray-900 sm:text-4xl dark:text-white">
            Your workspace is about a minute away
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-pretty text-gray-600 dark:text-gray-400">
            Make an account, name a workspace, invite the people who matter. Nothing to install, nothing to pay for, and
            no card to hand over.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto">
              <Button color="primary" variant="solid" size="xl" className="w-full sm:w-auto">
                Create your workspace
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="w-full sm:w-auto">
              <Button color="secondary" variant="surface" size="xl" className="w-full sm:w-auto">
                <Mail className="h-4 w-4" />
                Talk to us
              </Button>
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Questions, bugs or ideas — write to {SUPPORT_EMAIL}. A person reads it, usually within a day or two.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
