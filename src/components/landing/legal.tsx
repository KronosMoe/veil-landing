import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { XIcon } from './icons'

const termsContent = `
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

const privacyContent = `
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

function Modal({
  isOpen,
  onClose,
  title,
  content,
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2 }}
            className="skeu-card fixed inset-4 z-50 flex flex-col overflow-hidden rounded-sm sm:inset-8 md:inset-16 lg:inset-20"
          >
            <div className="flex items-center justify-between border-b border-[#2a2a2a] px-5 py-4 sm:px-7">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <button
                onClick={onClose}
                className="skeu-btn-ghost rounded-sm p-2 transition-all duration-150"
                aria-label="Close"
              >
                <XIcon className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
              <div className="max-w-none space-y-1">
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function Legal() {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <>
      <section ref={ref} className="border-t border-[#1e1e1e] py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center justify-center gap-3 text-sm sm:flex-row">
            <button
              onClick={() => setShowTerms(true)}
              className="text-gray-500 underline-offset-2 transition-colors hover:text-[#f3701e] hover:underline"
            >
              Terms of Service
            </button>
            <span className="hidden text-gray-700 sm:inline">·</span>
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-gray-500 underline-offset-2 transition-colors hover:text-[#f3701e] hover:underline"
            >
              Privacy Policy
            </button>
          </div>
        </motion.div>
      </section>

      <Modal isOpen={showTerms} onClose={() => setShowTerms(false)} title="Terms of Service" content={termsContent} />
      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
        content={privacyContent}
      />
    </>
  )
}
