import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'For small teams getting started',
    features: ['Up to 10 members', 'Encrypted messaging', 'Voice calls', '1 GB file storage', 'Community support'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$8',
    period: '/user/mo',
    desc: 'For growing teams that need more',
    features: [
      'Unlimited members',
      'Everything in Free',
      'Video calls & screen share',
      '50 GB file storage',
      'Priority support',
      'Custom integrations',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For organizations with compliance needs',
    features: [
      'Everything in Pro',
      'Self-hosted deployment',
      'SSO & SAML',
      'Unlimited storage',
      'Dedicated support',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animate('.pricing-heading', {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            ease: 'outExpo',
          })
          animate('.pricing-card', {
            opacity: [0, 1],
            translateY: [40, 0],
            delay: stagger(150),
            duration: 700,
            ease: 'outExpo',
          })
        }
      },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="pricing-heading mb-12 text-center opacity-0">
          <h2 className="mb-3 text-3xl font-bold">Pricing</h2>
          <p className="mx-auto max-w-xl text-zinc-400">Simple, transparent pricing. No surprises.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card flex flex-col rounded-sm border p-6 opacity-0 shadow-lg ${
                plan.highlight
                  ? 'border-emerald-700 bg-emerald-950/30 ring-1 ring-emerald-800/50'
                  : 'border-zinc-700 bg-zinc-900'
              }`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="text-xs text-zinc-500">{plan.desc}</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-zinc-500">{plan.period}</span>
              </div>
              <ul className="mb-6 flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <Check size={14} className="shrink-0 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://app.veil.in.th">
                <button
                  className={`w-full rounded-sm px-4 py-2.5 text-sm font-medium transition-all ${
                    plan.highlight
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                      : 'border border-zinc-700 bg-zinc-800 hover:bg-zinc-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
