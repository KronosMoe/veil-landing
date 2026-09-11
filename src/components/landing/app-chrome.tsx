import type { ReactNode } from 'react'
import { File, Info, PanelRightOpen, Pin, Plus, Sticker, Users, type LucideIcon } from 'lucide-react'
import { headerStyles } from '@/lib/app-surfaces'
import '@/styles/app-preview.css'

const pillBaseStyles = 'flex items-center gap-1.5 rounded-full border px-2 py-0.5'

const pillIdleStyles =
  'skeuo-raised border-black/15 bg-gray-100 text-gray-900 dark:border-black/60 dark:bg-gray-900 dark:text-white'

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
 * One row of a channel, matching `ChatChannel/message/MessageItem.tsx` —
 * the 40px rounded-square avatar, the bold sender, the muted timestamp, the
 * 15px/22px body, and the reaction pills underneath. Consecutive messages from
 * one person drop the header exactly as the app groups them.
 */
export function MessageRow({ initials, name, time, children, showHeader = true, reactions }: MessageRowProps) {
  return (
    <div className={showHeader ? 'mt-2' : 'mt-0'}>
      <div
        className={`group relative mx-2 flex items-start space-x-3 rounded-sm px-2 hover:bg-gray-100 dark:hover:bg-gray-900 ${
          showHeader ? 'py-[4px]' : ''
        }`}
      >
        {showHeader ? (
          <span className="skeuo-raised flex size-10 shrink-0 items-center justify-center rounded-sm bg-gray-200 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            {initials}
          </span>
        ) : (
          <span className="block w-10 shrink-0" />
        )}

        <div className="min-w-0 flex-1">
          {showHeader && (
            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-900 dark:text-gray-200">{name}</span>
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

/** Single-row composer matched to utils/message/MessageInput. */
export function Composer({ placeholder }: { placeholder: string }) {
  return (
    <div className="shrink-0 p-2">
      <div className="skeuo-inset flex min-w-0 items-center gap-3 rounded-sm border border-black/30 bg-gray-100 px-3 py-3 dark:border-black/60 dark:bg-gray-900">
        <Plus size={17} className="shrink-0 text-gray-500" />
        <span className="min-w-0 flex-1 truncate text-xs text-gray-500">{placeholder}</span>
        <Sticker size={17} className="shrink-0 text-gray-500" />
      </div>
    </div>
  )
}

export function ChatActions() {
  return (
    <div className="preview-toolbar-actions" aria-label="Chat tools preview">
      <span title="Threads">
        <PanelRightOpen size={15} />
      </span>
      <span title="Pins">
        <Pin size={15} />
      </span>
      <span className="preview-secondary-action" title="Attachments">
        <File size={15} />
      </span>
      <span title="Members">
        <Users size={15} />
      </span>
    </div>
  )
}

export function ChannelHeader({
  icon: Icon,
  name,
  meta,
  action,
}: {
  icon: LucideIcon
  name: string
  meta?: string
  action?: ReactNode
}) {
  return (
    <div className={`${headerStyles} gap-2 px-3`}>
      <Icon size={14} className="shrink-0 text-gray-600 dark:text-gray-300" />
      <span className="truncate text-sm font-semibold text-gray-900 dark:text-white">{name}</span>
      <Info size={12} className="shrink-0 text-gray-500" />
      {meta && (
        <span className="preview-secondary-action hidden truncate text-[10px] text-gray-500 sm:inline">{meta}</span>
      )}
      <div className="ml-auto flex shrink-0 items-center gap-2">
        {action ?? <Users size={16} className="text-gray-500" />}
      </div>
    </div>
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
    <div className="app-preview veil-card skeuo-plate flex h-full flex-col overflow-hidden rounded-sm">
      <div
        className={`preview-canvas flex min-h-0 flex-1 flex-col overflow-hidden rounded-sm bg-gray-50 dark:bg-gray-950 ${className ?? ''}`}
      >
        <ChannelHeader icon={Icon} name={name} meta={meta} action={action} />
        {children}
      </div>
    </div>
  )
}
