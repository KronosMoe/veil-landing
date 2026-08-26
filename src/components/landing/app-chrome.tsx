import type { ReactNode } from 'react'
import { Lock, Send, type LucideIcon } from 'lucide-react'
import { headerStyles, raisedControlStyles } from '@/lib/app-surfaces'

const pillBaseStyles = 'flex items-center gap-1.5 rounded-full border px-2 py-0.5'

const pillIdleStyles =
  'skeuo-raised border-black/20 bg-gray-100 text-black dark:border-black/60 dark:bg-gray-900 dark:text-white'

const pillReactedStyles =
  'skeuo-pressed border-blue-500/50 bg-blue-500/15 text-blue-600 dark:border-blue-400/50 dark:bg-blue-500/20 dark:text-blue-300'

/** A `@name` mention, styled as `MentionRenderer` does in the app. */
export function Mention({ children }: { children: ReactNode }) {
  return <span className="text-primary-600 dark:text-primary-400 font-medium">@{children}</span>
}

/** A `#channel` mention, styled as `ChannelMentionRenderer` does in the app. */
export function ChannelMention({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <span className="text-primary-600 dark:text-primary-400 bg-primary-500/10 inline-flex items-center gap-0.5 rounded px-1 font-medium">
      <Icon size={12} className="shrink-0" />
      {children}
    </span>
  )
}

export type Reaction = { emoji: string; count: number; reacted?: boolean }

type MessageRowProps = {
  /** Two-letter stand-in for the app's avatar image. */
  initials: string
  name: string
  time: string
  children: ReactNode
  /** False renders the app's continuation row: no avatar, no name, no time. */
  showHeader?: boolean
  reactions?: Reaction[]
}

/**
 * One row of a channel, matching `TextChannel/message/MessageItem.tsx` —
 * the 40px rounded-square avatar, the bold sender, the muted timestamp, the
 * 15px/22px body, and the reaction pills underneath. Consecutive messages from
 * one person drop the header exactly as the app groups them.
 */
export function MessageRow({ initials, name, time, children, showHeader = true, reactions }: MessageRowProps) {
  return (
    <div className={showHeader ? 'mt-2' : 'mt-0'}>
      <div
        className={`group relative mx-2 flex items-start space-x-3 rounded-lg px-2 hover:bg-gray-100 dark:hover:bg-gray-900 ${
          showHeader ? 'py-[4px]' : ''
        }`}
      >
        {showHeader ? (
          <span className="skeuo-raised flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-white to-gray-200 text-xs font-bold text-gray-700 dark:from-gray-700 dark:to-gray-900 dark:text-gray-300">
            {initials}
          </span>
        ) : (
          <span className="block w-10 shrink-0" />
        )}

        <div className="min-w-0 flex-1">
          {showHeader && (
            <div className="flex items-center space-x-2">
              <span className="font-bold text-black dark:text-gray-200">{name}</span>
              <span className="text-xs text-gray-400">{time}</span>
            </div>
          )}

          <div className="relative">
            <div className="flex flex-col items-start text-[0.9375rem] leading-[1.375rem]">
              <p className="leading-[1.375rem] text-gray-800 dark:text-gray-200">{children}</p>
            </div>

            {reactions && reactions.length > 0 && (
              <div className="mt-1.5 flex flex-wrap items-center gap-1">
                {reactions.map((reaction) => (
                  <span
                    key={reaction.emoji}
                    className={`${pillBaseStyles} ${reaction.reacted ? pillReactedStyles : pillIdleStyles}`}
                  >
                    <span className="text-sm leading-none">{reaction.emoji}</span>
                    <span className="text-xs font-semibold">{reaction.count}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/** The recessed message box at the bottom of a channel. */
export function Composer({ placeholder }: { placeholder: string }) {
  return (
    <div className="p-3 pt-0">
      <div className="skeuo-inset flex items-center justify-between gap-2 rounded-lg border border-black/20 bg-gray-100 px-3 py-2.5 dark:border-black/60 dark:bg-gray-900">
        <span className="text-sm text-gray-500">{placeholder}</span>
        <Send size={14} className="text-primary-500 shrink-0" />
      </div>
    </div>
  )
}

/** The badge the app shows in a channel header once a key is in place. */
export function EncryptedBadge() {
  return (
    <span
      className={`${raisedControlStyles} flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1 text-[10px] font-medium text-gray-600 dark:text-gray-400`}
    >
      <Lock size={11} className="text-primary-500" />
      End-to-end encrypted
    </span>
  )
}

/** Plate + page header, the shell every channel type renders inside. */
export function AppFrame({
  icon: Icon,
  name,
  meta,
  action,
  children,
  className,
}: {
  icon: LucideIcon
  name: string
  meta?: string
  action?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <div className="veil-card skeuo-plate flex h-full flex-col overflow-hidden rounded-2xl p-1.5">
      <div
        className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-950 ${className ?? ''}`}
      >
        <div className={`flex shrink-0 items-center gap-2 px-3 py-2.5 ${headerStyles}`}>
          <Icon size={16} className="shrink-0 text-gray-500" />
          <span className="truncate text-sm font-bold text-black dark:text-white">{name}</span>
          {meta && <span className="hidden truncate text-xs text-gray-500 sm:inline">{meta}</span>}
          <span className="ml-auto flex items-center gap-2">{action ?? <EncryptedBadge />}</span>
        </div>
        {children}
      </div>
    </div>
  )
}
