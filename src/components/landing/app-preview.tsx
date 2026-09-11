import {
  CheckSquare,
  ChevronDown,
  Hash,
  Headphones,
  Megaphone,
  MessageCircleQuestion,
  Mic,
  Plus,
  Presentation,
  Search,
  Volume2,
} from 'lucide-react'
import { VeilLogo } from './veil-logo'
import { ChannelHeader, ChatActions, Composer, Mention, MessageRow } from './app-chrome'
import { activeRowStyles, panelStyles, railStyles } from '@/lib/app-surfaces'

const channels = [
  { icon: Hash, name: 'general', active: true },
  { icon: Hash, name: 'design-crit', active: false },
  { icon: Volume2, name: 'daily-huddle', active: false },
  { icon: Presentation, name: 'roadmap', active: false },
  { icon: CheckSquare, name: 'this-sprint', active: false },
  { icon: Megaphone, name: 'releases', active: false },
  { icon: MessageCircleQuestion, name: 'ask-anything', active: false },
]

/** Browser workspace, using the current app's menubar, rail, channel list and chat chrome. */
export function AppPreview() {
  return (
    <div className="app-preview veil-card skeuo-plate overflow-hidden rounded-sm">
      <div className="flex h-[380px] flex-col overflow-hidden rounded-sm sm:h-[420px]">
        <div className="preview-menubar skeuo-header">
          <span className="flex items-center gap-1.5 opacity-40">
            <VeilLogo className="size-4" />
            <span className="text-xs font-semibold">veil</span>
          </span>
          <span className="preview-search skeuo-tray">
            <span className="flex items-center gap-2">
              <Search size={11} />
              Search for anything
            </span>
            <kbd className="text-[8px]">ctrl+k</kbd>
          </span>
          <span className="w-4" />
        </div>
        <div className="flex min-h-0 flex-1">
          <div
            className={`hidden shrink-0 flex-col items-center gap-2 py-2 sm:flex ${railStyles}`}
            aria-label="Workspace rail preview"
          >
            <span className="skeuo-raised mx-2 flex size-9 items-center justify-center rounded-sm bg-gray-900 text-white dark:bg-gray-700">
              <VeilLogo className="size-5" />
            </span>
            <hr className="w-1/2 border-gray-600/30" />
            <span className="relative mx-2 flex size-9 items-center justify-center rounded-sm bg-gray-300 text-sm font-semibold text-gray-900 dark:bg-gray-700 dark:text-white">
              <span className="bg-primary-500 absolute -left-2 h-5 w-0.5" />S
            </span>
            <span className="mx-2 flex size-9 items-center justify-center rounded-sm bg-gray-200 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              R
            </span>
            <Plus size={16} className="mt-1 text-gray-500" />
          </div>
          <div className={`hidden w-44 shrink-0 flex-col md:flex ${panelStyles}`} aria-label="Studio channels preview">
            <div className="flex h-11 shrink-0 items-center justify-between border-b border-gray-300 px-3 dark:border-black/60">
              <span className="text-sm font-semibold">Studio</span>
              <ChevronDown size={13} />
            </div>
            <div className="flex items-center gap-1 px-3 pt-3 pb-1 text-[9px] font-semibold tracking-wider text-gray-500 uppercase">
              <ChevronDown size={10} />
              Team channels
              <Plus size={11} className="ml-auto" />
            </div>
            <div className="px-2">
              {channels.map(({ icon: Icon, name, active }) => (
                <span
                  key={name}
                  className={`my-0.5 flex items-center gap-1.5 rounded-sm border px-2 py-1 text-[11px] ${active ? activeRowStyles : 'border-transparent text-gray-500 dark:text-gray-400'}`}
                >
                  <Icon size={13} />
                  <span className="truncate">{name}</span>
                </span>
              ))}
            </div>
            <div className="preview-profile">
              <span className="relative flex size-7 items-center justify-center rounded-sm bg-gray-300 text-[9px] font-semibold dark:bg-gray-700">
                NW
                <span className="absolute -right-0.5 -bottom-0.5 size-2 rounded-full border border-gray-100 bg-[#5d7f6a] dark:border-gray-900" />
              </span>
              <span className="text-[10px] font-semibold">
                Nara<span className="block text-[8px] font-normal text-gray-500">Available</span>
              </span>
              <Mic size={12} className="ml-auto text-gray-500" />
              <Headphones size={12} className="text-gray-500" />
            </div>
          </div>
          <div className="preview-canvas flex min-w-0 flex-1 flex-col bg-gray-100 dark:bg-gray-950">
            <ChannelHeader icon={Hash} name="general" action={<ChatActions />} />
            <div className="flex min-h-0 flex-1 flex-col justify-end overflow-hidden pb-1">
              <div className="mx-4 mb-2 flex items-center gap-3 text-[9px] text-gray-500">
                <span className="h-px flex-1 bg-gray-300 dark:bg-gray-800" />
                Today
                <span className="h-px flex-1 bg-gray-300 dark:bg-gray-800" />
              </div>
              <MessageRow initials="NW" name="Nara" time="9:41 AM" reactions={[{ emoji: '🎉', count: 3 }]}>
                The new onboarding is ready for a second pair of eyes.
              </MessageRow>
              <MessageRow initials="JP" name="Jip" time="9:42 AM">
                Looking now. <Mention>nara</Mention> want to talk it through in the huddle?
              </MessageRow>
              <MessageRow initials="NW" name="Nara" time="9:42 AM" showHeader={false}>
                Already there — screen share is up whenever you are.
              </MessageRow>
            </div>
            <Composer placeholder="Type a message or / for commands…" />
          </div>
        </div>
      </div>
    </div>
  )
}
