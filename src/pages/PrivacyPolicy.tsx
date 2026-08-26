import LegalLayout from '@/components/legal/legal-layout'
import { PRIVACY_POLICY_PATH } from '@/constants/routes'

const content = `
This Privacy Notice is provided under the **Personal Data Protection Act B.E. 2562 (2019)** of Thailand, referred to here as the PDPA. It explains what personal data Veil collects, why, on what lawful basis, and how you can exercise the rights the PDPA gives you.

### 1. Data controller

Veil is the **Data Controller** for the personal data described here. Veil operates the website at veil.in.th and the application at app.veil.in.th.

You can reach us about anything in this notice, including any request to exercise your rights, at **support@veil.in.th**.

### 2. Personal data we collect

**Data you give us when you register**

- Email address
- Username, and optionally a display name, short biography and profile image
- Your password, retained only as a cryptographic hash
- If you enable two-factor authentication, an authenticator secret or passkey credential

**Data generated as you use Veil**

- Content you create — messages, file attachments, announcements, polls, Q&A posts and whiteboards — held in encrypted form as described in section 4
- The workspaces, channels and conversations you belong to
- Authentication records, including timestamps and the IP address a sign-in came from
- Technical data your browser transmits with each request, such as browser type and version
- A push notification subscription, only where you have enabled notifications

**Data we do not collect**

We do not ask for your telephone number, your contact list, your identification documents or your legal name. We do not collect the special categories of personal data described in section 26 of the PDPA, and you should not post such data into Veil.

### 3. Purposes and lawful bases

The PDPA requires a lawful basis for each purpose. Ours are:

- **Performance of a contract (s.24(3))** — creating and maintaining your account, delivering your messages, operating workspaces and channels, and providing the service you signed up for.
- **Legitimate interests (s.24(5))** — keeping the service secure and available, retaining authentication records to detect unauthorised access, preventing abuse, and diagnosing faults. We have weighed these against your rights and freedoms.
- **Consent (s.19)** — push notifications, and any optional profile information you choose to provide. You may withdraw consent at any time under section 19 paragraph five, and withdrawal is as easy as giving it. Withdrawal does not affect processing carried out before it.
- **Legal obligation (s.24(6))** — where Thai law requires us to retain or disclose data.

We do not use your personal data for advertising, profiling or automated decision-making that produces legal effects.

### 4. How your content is protected

Veil is **end-to-end encrypted**. Messages, file attachments, announcements, polls, Q&A posts and whiteboard scenes are encrypted with AES-256-GCM on your device before transmission, remain encrypted in transit, and are stored encrypted at rest. Direct messages use a key derived from an X25519 key exchange between you and your correspondent. Each channel holds a distinct key.

Attachments are encrypted before upload to object storage that we operate. Sensitive account fields — your two-factor secret, push subscription details and attachment filenames — are separately encrypted in the database.

Authentication is handled by Veil's own OpenID Connect provider, an industry-standard protocol, rather than credentials passed directly to the application.

Voice and video calls are encrypted in transit and routed through a media server so participants remain synchronised. Calls are not recorded, transcribed or stored.

### 5. Disclosure to third parties

We do not sell, rent or trade personal data. We disclose it only to processors acting on our instructions, and only as needed to run the service:

- **Object storage** for encrypted file attachments and whiteboard assets, operated by us
- **A GIF provider**, which receives your search terms when you use the GIF picker
- **Push notification services** provided by your browser or operating system, where you have enabled notifications
- **An email provider**, for verification codes, security notices and account correspondence

We may also disclose personal data where required by Thai law, a court order or a lawful request from a competent authority.

There is no advertising network, analytics product or tracking technology operating on this site or in the application.

### 6. Cross-border transfer

Our servers are located in **Thailand**. Where a processor named above operates outside Thailand, any transfer is made in accordance with sections 28 and 29 of the PDPA, on the basis of adequate protection or appropriate safeguards.

### 7. Cookies and local storage

- A session cookie maintains your signed-in state on the web; the desktop application stores an equivalent token locally
- Your browser's local database holds encryption keys so the application can decrypt your conversations
- Local storage retains preferences such as theme, accent colour, audio devices and layout

None of this is used to profile you or to track you across other websites.

### 8. Retention

We retain your content until you or your workspace deletes it. Authentication records are retained for a limited period for security purposes.

When you request deletion of your account, deletion is scheduled **fourteen days** ahead. Signing in during that period cancels it. After the period ends, your account and the personal data attached to it are erased. Your display name is retained in archived form so that messages you authored continue to show an author for other participants in those conversations.

### 9. Your rights under the PDPA

Subject to the conditions and exceptions in the Act, you have the right to:

- **Be informed** about the collection and use of your personal data (s.23)
- **Access** your personal data and obtain a copy (s.30)
- **Data portability** — receive your data in a machine-readable format, and have it transmitted onward where technically feasible (s.31)
- **Object** to processing carried out on the basis of legitimate interests (s.32)
- **Erasure**, including where you have withdrawn consent or the data is no longer necessary (s.33)
- **Restriction** of processing in the circumstances the Act specifies (s.34)
- **Rectification** of data that is inaccurate, incomplete, misleading or out of date (s.35)
- **Withdraw consent** at any time, where consent is our basis (s.19)
- **Lodge a complaint** with the Office of the Personal Data Protection Committee (s.73)

To exercise any of these, write to **support@veil.in.th**. We will respond within **thirty days** of receiving your request, as required by the Act. If we cannot act on a request, we will tell you why and record the reason.

### 10. Security measures

We apply appropriate technical and organisational measures under section 37 of the Act, including encryption in transit and at rest, hashed passwords, optional two-factor authentication, access controls on our infrastructure, and logging of administrative access. Where a data breach poses a risk to your rights and freedoms, we will notify the Office of the Personal Data Protection Committee within **seventy-two hours** of becoming aware of it, and will notify you where the risk is high, as section 37(4) requires.

### 11. Children

Veil is not intended for anyone under 13. Where a user is a minor under Thai law and consent is our lawful basis, section 20 of the Act may require the consent of a person holding parental responsibility. If we learn that we hold the personal data of a child under 13, we will delete it.

### 12. Changes to this notice

Where we make a material change, we will notify you through the application or by email rather than amending this page silently. The date shown above is always the version in force.

### 13. Contact and complaints

Write to **support@veil.in.th** for any privacy question or to exercise a right.

If you are not satisfied with our response, you may complain to the **Office of the Personal Data Protection Committee (PDPC)**, Ministry of Digital Economy and Society, Bangkok, Thailand.
`

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Notice"
      description="How Veil collects and protects your personal data under Thailand's Personal Data Protection Act (PDPA) — lawful bases, retention, cross-border transfer, and how to exercise your rights."
      path={PRIVACY_POLICY_PATH}
      lastUpdated="26 August 2026"
      content={content}
      summary={
        <>
          <p>
            We collect the little we need to run an account: an email, a username, and the encrypted content you create.
            No phone number, no contacts, no legal name.
          </p>
          <p>
            Veil is end-to-end encrypted. Your messages are sealed on your device before they are sent and stay
            encrypted in transit and at rest.
          </p>
          <p>
            No ads, no analytics products, no trackers, and nothing sold to anyone. Under the PDPA you can access,
            correct, export or erase your data by writing to us — we answer within thirty days.
          </p>
        </>
      }
    />
  )
}
