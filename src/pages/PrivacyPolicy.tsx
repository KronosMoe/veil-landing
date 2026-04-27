import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { VeilLogo } from '@/components/landing/veil-logo'
import { BASE_PATH } from '@/constants/routes'
import { Footer } from '@/components/landing/footer'
import { useEffect } from 'react'

const content = `
## Privacy Policy

**Last updated: April 2026**

At Veil, your privacy is at the core of everything we do. This policy explains what data we collect and how we use it.

### 1. Information We Collect

**Account Information:**
- Email address (for account recovery and important notifications)
- Username (chosen by you)
- Profile information you voluntarily provide

**Usage Information:**
- Login timestamps
- Anonymized feature usage statistics
- Device and browser information

### 2. Information We Don't Collect

Because of end-to-end encryption:
- We cannot read the contents of your messages
- We cannot access your encrypted file attachments
- We cannot listen to your voice conversations

### 3. How We Use Your Information

We use collected information to:
- Provide and maintain the Veil service
- Send essential service updates and security notices
- Improve the service and develop new features
- Detect and prevent fraud and abuse

### 4. Personal Drive & Attachments

Files in your personal Drive are stored in encrypted form. You choose what gets saved — nothing is added to your Drive without your explicit action. We do not scan or access the contents of your stored files.

### 5. Data Storage and Security

- Your encrypted data is stored securely on our servers
- We follow industry-standard security practices
- We do not sell your personal information, ever
- We only collect data that's necessary to run the service

### 6. Data Sharing

We do not share your personal information with third parties except:
- When required by applicable law
- To protect the rights and safety of our users
- With your explicit consent

### 7. Your Rights

You have the right to:
- Access your personal information
- Delete your account and all associated data
- Opt out of non-essential communications

### 8. Cookies and Tracking

We use only essential cookies for:
- Maintaining your login session
- Remembering your preferences
- Basic anonymized analytics

### 9. Children's Privacy

Veil is not intended for children under 13. We do not knowingly collect information from anyone under 13.

### 10. International Users

If you're using Veil from outside Thailand, your data may be transferred to and processed in Thailand, where our servers are located.

### 11. Changes to This Policy

We may update this policy from time to time. We'll notify you of significant changes through the service or via email.

### 12. Contact Us

For questions about this privacy policy, contact us at support@veil.in.th.
`

export default function PrivacyPolicy() {
  
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
          className="skeu-btn-ghost mb-8 inline-flex items-center gap-2 rounded-sm text-sm text-gray-500 transition-colors hover:text-white"
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
