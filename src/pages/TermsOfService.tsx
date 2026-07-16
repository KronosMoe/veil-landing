import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { BASE_PATH } from '@/constants/routes'
import { VeilLogo } from '@/components/landing/veil-logo'
import { Footer } from '@/components/landing/footer'
import { useEffect } from 'react'

const content = `
## Terms of Service

**Last updated: April 2026**

Welcome to Veil! By using our service, you agree to these terms. Please read them carefully.

### 1. Acceptance of Terms

By accessing or using Veil, you agree to be bound by these Terms of Service. If you don't agree, please don't use our service.

### 2. Description of Service

Veil provides a communication platform including messaging, workspaces, voice channels, todo list channels, announcement channels, and personal drive storage. All communications are protected with end-to-end encryption.

### 3. User Accounts

- You must provide accurate information when creating an account
- You are responsible for maintaining the security of your account
- You must be at least 13 years old to use Veil
- One person may not maintain more than one account

### 4. Acceptable Use

You agree not to use Veil for:
- Any illegal activities
- Harassment, bullying, or threatening behavior
- Distributing malware or harmful content
- Spamming or unauthorized advertising
- Attempting to compromise other users' security or privacy

### 5. Content and Data

- You retain ownership of content you create and share
- You grant Veil a license to transmit and store your encrypted content solely for the purpose of providing the service
- We cannot access the contents of your encrypted messages or files
- Files are saved to your personal Drive only when you explicitly choose to save them — nothing is saved automatically

### 6. Privacy

Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.

### 7. Service Availability

We aim to keep Veil available around the clock, but we cannot guarantee uninterrupted access. Scheduled maintenance or updates may temporarily affect availability.

### 8. Termination

We may terminate or suspend your account if you violate these terms. You may also delete your account at any time.

### 9. Changes to Terms

We may update these terms from time to time. We'll notify users of significant changes through the service or via email.

### 10. Contact

If you have questions about these terms, contact us at support@veil.in.th.
`

export default function TermsOfService() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="mt-10" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <VeilLogo className="mx-auto mb-10 h-10 w-10" color="#ffffff" />
        <Link
          to={BASE_PATH}
          className="skeu-btn-ghost mb-8 inline-flex items-center gap-2 rounded-lg text-sm text-gray-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="space-y-1">
          {content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) {
              return (
                <h2 key={i} className="mt-0 mb-5 pt-2 text-2xl font-bold text-white">
                  {line.replace('## ', '')}
                </h2>
              )
            }
            if (line.startsWith('### ')) {
              return (
                <h3 key={i} className="mt-7 mb-2 text-base font-semibold text-white">
                  {line.replace('### ', '')}
                </h3>
              )
            }
            if (line.startsWith('**') && line.endsWith('**')) {
              return (
                <p key={i} className="mt-4 mb-1 font-semibold text-gray-300">
                  {line.replace(/\*\*/g, '')}
                </p>
              )
            }
            if (line.startsWith('- ')) {
              return (
                <li key={i} className="ml-5 list-disc text-sm leading-relaxed text-gray-400">
                  {line.replace('- ', '')}
                </li>
              )
            }
            if (line.trim() === '') {
              return <div key={i} className="h-1" />
            }
            return (
              <p key={i} className="text-sm leading-relaxed text-gray-400">
                {line}
              </p>
            )
          })}
        </div>
      </div>
      <div className="mt-10" />
      <Footer />
    </div>
  )
}
