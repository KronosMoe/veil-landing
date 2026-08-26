import LegalLayout from '@/components/legal/legal-layout'
import { TERM_OF_SERVICE_PATH } from '@/constants/routes'

const content = `
### 1. The short of it

These terms are the agreement between you and Veil. By creating an account or using the service, you accept them. They are written to be read, so please do.

Under Thailand's **Electronic Transactions Act B.E. 2544 (2001)**, accepting these terms electronically is as binding as signing them on paper.

If you disagree with something here, the honest answer is not to use Veil — but write to support@veil.in.th first, because we would rather hear it.

### 2. What Veil is

Veil is a communication service: workspaces containing text, voice, whiteboard, to-do, announcement and Q&A channels, plus direct and group messages, calls, and a personal space for files you choose to save. It runs in the browser, as an installed web app and as a desktop app for macOS, Windows and Linux.

Veil is free. There is no paid tier, no trial that expires and nothing to enter a card for.

### 3. Your account

- You must be at least 13 years old. If you are a minor under Thai law, you confirm that a parent or guardian has agreed to these terms on your behalf where their consent is required.
- Give us a real email address. It is how we verify the account and how we reach you if something is wrong.
- Keep your credentials to yourself. Anything done through your account is treated as done by you.
- Sign-in runs through Veil's own OpenID Connect provider. Turning on two-factor authentication is strongly recommended and takes about a minute.
- Tell us at support@veil.in.th if you think someone else is in your account.

### 4. Account recovery

Your conversations are tied to your account rather than to a particular device, so signing in somewhere new brings your history with you. The other side of that: if you lose access to your email **and** your two-factor method, there may be no way for us to give the account back. Keep your recovery options current.

### 5. Your content stays yours

You own what you write, draw and upload, and you keep whatever copyright you have in it under the **Copyright Act B.E. 2537 (1994)**. You give us only the limited, non-exclusive permission needed to run the service — to store your content, move it to the people you sent it to, and show it back to them. That permission ends when the content is deleted.

Your content is end-to-end encrypted. We do not read your messages, mine them, train anything on them or hand them to advertisers. The Privacy Notice sets out how your personal data is handled under the **Personal Data Protection Act B.E. 2562 (2019)**.

### 6. What you may not do with Veil

Thai law applies to what you do here, in particular the **Computer Crime Act B.E. 2550 (2007)** as amended. You may not use Veil for:

- Anything unlawful under Thai law or the law where you are
- Content that offends the monarchy, or that is otherwise prohibited from publication under Thai law
- Harassment, threats, stalking, or targeting someone to make them miserable
- Sexual content involving minors, in any form, ever
- Malware, phishing, or attempting to access other people's accounts or our systems without authorisation
- Spam, mass unsolicited invitations, fraud or scams
- False data likely to damage another person, the public or national security
- Scraping, load-testing or otherwise straining the service on purpose
- Reselling Veil or passing it off as your own product

### 7. Workspaces and moderation

Whoever creates a workspace runs it: they decide who joins, who can see what, and what the rules are inside. Disputes within a workspace are for that workspace to settle.

We step in where the rules above are broken. Because your content is end-to-end encrypted, our moderation works from reports and account-level signals rather than from reading conversations. When we act, it is usually on an account or a workspace, not on individual messages.

Where a competent Thai authority makes a lawful order, we comply with it to the extent we are technically able.

### 8. Availability

We run Veil carefully, but we are a small operation and we do not promise uninterrupted service. Things go down, maintenance happens, and features change. For anything where an outage would genuinely hurt you, keep your own copy of what matters.

### 9. Suspension and ending things

You can delete your account whenever you like, from within the app. Deletion is scheduled fourteen days out and cancels itself if you sign back in during that window.

We may suspend or close an account that breaks these terms, or where keeping it open would put other people or the service at risk. Where it is possible and sensible, we will tell you why.

### 10. No warranty, and limits on what we owe you

Veil is provided as it is, without warranties of any kind. To the fullest extent Thai law allows, we are not liable for indirect or consequential losses, for lost data or lost profits, or for anything arising from your use of a free service.

Nothing here removes rights you have that cannot be waived. In particular, this section does not limit liability for wilful misconduct or gross negligence, and any term that would be unenforceable under the **Unfair Contract Terms Act B.E. 2540 (1997)** applies only so far as that Act permits.

### 11. Changes to these terms

If we change something significant, we will tell you in the app or by email before it takes effect. Continuing to use Veil after that means you accept the new version. The date at the top is always the current one.

### 12. Governing law and disputes

These terms are governed by the laws of the **Kingdom of Thailand**. We would rather sort a problem out by email than in a courtroom, so please write to us first. If that fails, the courts of Thailand have jurisdiction.

This does not affect any right you have to bring a complaint to a Thai consumer protection authority, or to the Office of the Personal Data Protection Committee for anything concerning your personal data.

### 13. Contact

support@veil.in.th. A person reads it.
`

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="The agreement between you and Veil, in plain English: what the service is, what your account is responsible for, what you may not do, and what we owe each other under Thai law."
      path={TERM_OF_SERVICE_PATH}
      lastUpdated="26 August 2026"
      content={content}
      summary={
        <>
          <p>
            Veil is free, you must be 13 or older, and what you create stays yours. We only take the permission needed
            to store your content and deliver it to the people you sent it to.
          </p>
          <p>
            Do not use Veil for anything unlawful, for harassment, or for breaking into other people&apos;s accounts.
            That is most of the rulebook.
          </p>
          <p>
            We do not promise perfect uptime, we cannot recover an account if you lose both your email and your
            two-factor method, and these terms are governed by Thai law.
          </p>
        </>
      }
    />
  )
}
