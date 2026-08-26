import { CheckSquare, Hash, Megaphone, MessageCircleQuestion, Presentation, Volume2 } from 'lucide-react'
import { VeilLogo } from './veil-logo'
import { Composer, EncryptedBadge, Mention, MessageRow } from './app-chrome'
import { activeRowStyles, headerStyles, panelStyles, railStyles } from '@/lib/app-surfaces'

// Same icon per channel type as the app's `channelIcons` map.
const channels = [
  { icon: Hash, name: 'general', active: true },
  { icon: Hash, name: 'design-crit', active: false },
  { icon: Volume2, name: 'daily-huddle', active: false },
  { icon: Presentation, name: 'roadmap', active: false },
  { icon: CheckSquare, name: 'this-sprint', active: false },
  { icon: Megaphone, name: 'releases', active: false },
  { icon: MessageCircleQuestion, name: 'ask-anything', active: false },
]

/** A still of the app, built from the app's own surface classes. Pure markup,
 *  so it stays sharp at any size and costs nothing to load. */
export function AppPreview() {
  return (
    <div className="veil-card skeuo-plate overflow-hidden rounded-2xl p-1.5">
      <div className="flex h-[360px] overflow-hidden rounded-xl sm:h-[420px]">
        {/* Workspace rail */}
        <div className={`hidden shrink-0 flex-col items-center gap-2 py-2 sm:flex ${railStyles}`}>
          <span className="mx-2 flex size-9 items-center justify-center rounded-lg">
            <VeilLogo className="size-5 text-black drop-shadow dark:text-white" color="currentColor" />
          </span>
          <hr className="w-1/2 border-gray-600/50" />
          <span className="skeuo-inset mx-2 flex size-9 items-center justify-center rounded-lg bg-gray-300 text-sm font-semibold text-black dark:bg-gray-700 dark:text-white">
            S
          </span>
          <span className="mx-2 flex size-9 items-center justify-center rounded-lg bg-gray-300/60 text-sm font-semibold text-gray-600 dark:bg-gray-700/60 dark:text-gray-400">
            R
          </span>
        </div>

        {/* Channel list */}
        <nav className={`hidden w-44 shrink-0 flex-col px-2 py-2 md:flex ${panelStyles}`}>
          <p className="px-2 pb-1.5 text-[10px] font-semibold tracking-wider text-gray-500 uppercase">Studio</p>
          {channels.map(({ icon: Icon, name, active }) => (
            <span
              key={name}
              className={`group relative my-[2px] flex items-center rounded-lg px-2 py-1 text-xs text-gray-600 dark:text-gray-300 ${
                active ? activeRowStyles : ''
              }`}
            >
              <span className="flex min-w-0 flex-1 items-center gap-1">
                <Icon size={14} className="shrink-0" />
                <span className="truncate">{name}</span>
              </span>
            </span>
          ))}
        </nav>

        {/* Channel content */}
        <div className="flex min-w-0 flex-1 flex-col bg-gray-50 dark:bg-gray-950">
          <div className={`flex items-center gap-2 px-3 py-2.5 ${headerStyles}`}>
            <Hash size={16} className="shrink-0 text-gray-500" />
            <span className="text-sm font-bold text-black dark:text-white">general</span>
            <span className="ml-auto">
              <EncryptedBadge />
            </span>
          </div>

          <div className="flex flex-1 flex-col justify-end overflow-hidden pb-2">
            <MessageRow initials="NW" name="Nara" time="9:41 AM" reactions={[{ emoji: '🎉', count: 3 }]}>
              Pushed the new onboarding — whiteboard sync is instant now.
            </MessageRow>
            <MessageRow initials="JP" name="Jip" time="9:42 AM">
              Opening it. <Mention>nara</Mention> can we do the call in the huddle after?
            </MessageRow>
            <MessageRow initials="NW" name="Nara" time="9:42 AM" showHeader={false}>
              Already in there — screen share is up whenever you are.
            </MessageRow>
          </div>

          <Composer placeholder="Message #general" />
        </div>
      </div>
    </div>
  )
}
