import {
  ArrowBigUp,
  BarChart3,
  CheckSquare,
  Clock,
  Hash,
  HeadphoneOff,
  Highlighter,
  LayoutGrid,
  ListTodo,
  Megaphone,
  MessageCircle,
  MessageCircleQuestion,
  MessageSquare,
  Mic,
  MicOff,
  Monitor,
  MonitorUp,
  PhoneOff,
  Plus,
  Presentation,
  Search,
  Smile,
  Users,
  Video,
  Volume2,
} from 'lucide-react'
import { AppFrame, ChannelMention, Composer, Mention, MessageRow } from './app-chrome'
import { raisedControlStyles } from '@/lib/app-surfaces'

/* -------------------------------------------------------------------------- */
/* Text channel                                                               */
/* -------------------------------------------------------------------------- */

export function MessagesDemo() {
  return (
    <AppFrame icon={Hash} name="design-crit" meta="6 members">
      <div className="flex min-h-0 flex-1 flex-col justify-end overflow-hidden pb-2">
        <MessageRow initials="NW" name="Nara" time="9:41 AM">
          The empty state still feels cold. Anyone want to sketch it with me?
        </MessageRow>
        <MessageRow
          initials="JP"
          name="Jip"
          time="9:43 AM"
          reactions={[
            { emoji: '🔥', count: 4, reacted: true },
            { emoji: '👀', count: 2 },
          ]}
        >
          Started a board in <ChannelMention icon={Presentation}>roadmap</ChannelMention> — jump in.
        </MessageRow>
        <MessageRow initials="JP" name="Jip" time="9:43 AM" showHeader={false}>
          <Mention>nara</Mention> I copied your last version so nothing gets lost.
        </MessageRow>
      </div>
      <Composer placeholder="Message #design-crit" />
    </AppFrame>
  )
}

/* -------------------------------------------------------------------------- */
/* Voice + video                                                              */
/* -------------------------------------------------------------------------- */

const filmstrip = [
  { name: 'Nara', initials: 'NW', speaking: true, muted: false, deafened: false },
  { name: 'Jip', initials: 'JP', speaking: false, muted: true, deafened: false },
  { name: 'Ploy', initials: 'PS', speaking: false, muted: false, deafened: false },
  { name: 'Tem', initials: 'TK', speaking: false, muted: false, deafened: true },
]

const speakingTile = 'ring-2 ring-green-400 shadow-[0_0_14px_rgba(74,222,128,0.45)]'
const idleTile = 'ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_3px_8px_rgba(0,0,0,0.5)]'

const dockStyles =
  'flex items-center gap-1.5 rounded-xl border border-gray-300 bg-gray-100/95 px-2.5 py-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.08),0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-black/60 dark:bg-gray-950/80 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.45),0_1px_0_rgba(255,255,255,0.05)]'

const dockButton = 'rounded-lg p-1.5 text-gray-600 dark:text-gray-300'

/** In-meeting side panel tabs, as `MeetingSidePanel` lists them. */
const panelTabs = [
  { icon: MessageSquare, label: 'Chat', active: true },
  { icon: BarChart3, label: 'Polls', active: false },
  { icon: Users, label: 'People', active: false },
]

export function CallDemo() {
  return (
    <AppFrame
      icon={Volume2}
      name="daily-huddle"
      meta="4 connected"
      action={
        <span className="flex items-center gap-1.5 rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] font-bold text-green-600 dark:text-green-400">
          <span className="size-1.5 rounded-full bg-green-500" />
          Live
        </span>
      }
    >
      <div className="flex min-h-0 flex-1 gap-2 p-2.5">
        {/* Speaker view: the shared screen holds the stage, everyone else drops
            into the filmstrip underneath. */}
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-black/60 bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_14px_rgba(0,0,0,0.5)]">
            {/* The screen being shared */}
            <div className="absolute inset-0 flex flex-col gap-2 bg-gray-900 p-3">
              <span className="text-[11px] font-bold text-white">Onboarding — drop-off by step</span>
              <div className="flex flex-1 items-end gap-2">
                {[38, 62, 90, 46, 28].map((height, index) => (
                  <span
                    key={height}
                    className={`flex-1 rounded-t ${index === 2 ? 'bg-primary-500' : 'bg-gray-700'}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Live annotation drawn on top of the share */}
            <svg className="absolute inset-0 size-full" viewBox="0 0 200 120" fill="none" aria-hidden="true">
              <ellipse
                cx="118"
                cy="62"
                rx="26"
                ry="34"
                stroke="#f3701e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="4 3"
              />
              <path d="M168 26 L136 48" stroke="#f3701e" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M136 48 l9 -1 l-4 -8" stroke="#f3701e" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="absolute top-2 right-2 z-10 rounded-md bg-[#f3701e] px-1.5 py-0.5 text-[9px] font-semibold text-white">
              Ploy is annotating
            </span>

            {/* Floating reaction, as ReactionsOverlay renders them */}
            <span className="absolute right-6 bottom-10 z-10 text-lg">🎉</span>

            <span className="absolute bottom-2 left-2 z-10 flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 text-[10px] text-white backdrop-blur-sm">
              <Monitor size={12} />
              Nara
            </span>
          </div>

          <div className="flex h-12 shrink-0 gap-2 overflow-hidden sm:h-16">
            {filmstrip.map((participant) => (
              <div
                key={participant.name}
                className={`relative flex aspect-video h-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-black/60 bg-gray-950 ${
                  participant.speaking ? speakingTile : idleTile
                }`}
              >
                <span className="flex size-7 items-center justify-center rounded-lg bg-gray-800 text-[10px] font-bold text-white ring-4 ring-white/10">
                  {participant.initials}
                </span>
                <span className="absolute bottom-1 left-1 z-10 rounded-md bg-black/60 px-1 py-px text-[9px] text-white backdrop-blur-sm">
                  {participant.name}
                </span>
                <span className="absolute right-1 bottom-1 z-10 flex items-center gap-0.5">
                  {participant.muted && (
                    <span className="rounded bg-red-600/90 p-0.5">
                      <MicOff size={9} className="text-white" />
                    </span>
                  )}
                  {participant.deafened && (
                    <span className="rounded bg-red-600/90 p-0.5">
                      <HeadphoneOff size={9} className="text-white" />
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Side panel: chat, polls, Q&A and people, all over the data channel */}
        <div className="skeuo-plate hidden w-48 shrink-0 flex-col overflow-hidden rounded-xl border border-black/20 bg-gray-100 lg:flex dark:border-black/60 dark:bg-gray-900">
          <div className="flex shrink-0 items-stretch border-b border-black/10 dark:border-black/50">
            {panelTabs.map((tab) => (
              <span
                key={tab.label}
                className={`flex flex-1 items-center justify-center gap-1 px-1 py-1.5 text-[10px] font-semibold ${
                  tab.active
                    ? 'bg-gray-100 text-black dark:bg-gray-900 dark:text-white'
                    : 'bg-black/5 text-gray-500 dark:bg-black/25'
                }`}
              >
                <tab.icon size={11} />
                {tab.label}
              </span>
            ))}
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-2 p-2">
            <p className="text-[10px] leading-snug text-gray-600 dark:text-gray-400">
              <span className="font-bold text-black dark:text-white">Jip </span>
              step 3 is the drop-off
            </p>
            <p className="text-[10px] leading-snug text-gray-600 dark:text-gray-400">
              <span className="font-bold text-black dark:text-white">Tem </span>
              can we cut it entirely?
            </p>

            {/* A poll running inside the call */}
            <div className="skeuo-inset mt-auto rounded-lg border border-black/10 p-2 dark:border-black/40">
              <p className="text-[10px] font-semibold text-black dark:text-white">Cut step 3?</p>
              <div className="mt-1.5 space-y-1">
                <span className="block h-1.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                  <span className="bg-primary-500 block h-full w-3/4 rounded-full" />
                </span>
                <span className="block h-1.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                  <span className="block h-full w-1/4 rounded-full bg-gray-400" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The dock, same shell and divider rhythm as MeetingControlBar */}
      <div className="flex shrink-0 items-center justify-center pb-2.5">
        <div className={dockStyles}>
          <span className={`${raisedControlStyles} ${dockButton}`}>
            <Mic size={13} />
          </span>
          <span className={`${raisedControlStyles} ${dockButton}`}>
            <Video size={13} />
          </span>
          <span className={`${raisedControlStyles} ${dockButton}`}>
            <MonitorUp size={13} />
          </span>
          <span className={`${raisedControlStyles} ${dockButton} hidden sm:block`}>
            <Highlighter size={13} />
          </span>
          <span className={`${raisedControlStyles} ${dockButton} hidden sm:block`}>
            <Smile size={13} />
          </span>
          <span className={`${raisedControlStyles} ${dockButton} hidden sm:block`}>
            <LayoutGrid size={13} />
          </span>
          <span className="mx-1 h-6 w-px shrink-0 bg-gray-300 dark:bg-gray-700" />
          <span className="shrink-0 rounded-lg bg-red-600 p-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_2px_4px_rgba(0,0,0,0.35)]">
            <PhoneOff size={13} />
          </span>
        </div>
      </div>
    </AppFrame>
  )
}

/* -------------------------------------------------------------------------- */
/* Whiteboard                                                                 */
/* -------------------------------------------------------------------------- */

const notes = [
  { text: 'Sign-up is 4 screens', color: '#fbbf24', className: 'left-[6%] top-[14%] -rotate-2' },
  { text: 'Cut screen 3?', color: '#60a5fa', className: 'left-[38%] top-[30%] rotate-1' },
  { text: 'Ask 5 people first', color: '#34d399', className: 'left-[12%] top-[58%] rotate-[-1deg]' },
]

export function WhiteboardDemo() {
  return (
    <AppFrame icon={Presentation} name="roadmap" meta="3 drawing">
      <div className="relative min-h-0 flex-1 overflow-hidden bg-white dark:bg-gray-900">
        {/* Excalidraw's dotted canvas */}
        <div
          className="absolute inset-0 opacity-70 dark:opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(120,120,120,0.35) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        {notes.map((note) => (
          <span
            key={note.text}
            className={`absolute w-28 rounded-sm p-2 text-[11px] leading-snug font-medium text-black shadow-[2px_3px_6px_rgba(0,0,0,0.25)] ${note.className}`}
            style={{ backgroundColor: note.color }}
          >
            {note.text}
          </span>
        ))}

        <span className="absolute top-[22%] right-[8%] h-20 w-32 rounded-lg border-2 border-dashed border-gray-400 dark:border-gray-600" />
        <span className="absolute top-[30%] right-[12%] text-[11px] font-semibold text-gray-500">new flow</span>

        {/* Live collaborator cursors, relayed as ciphertext like the real board */}
        <span className="absolute top-[46%] left-[52%] flex items-center gap-1">
          <span className="size-3 rotate-[-20deg] rounded-[2px] bg-[#f3701e]" />
          <span className="rounded bg-[#f3701e] px-1.5 py-0.5 text-[10px] font-semibold text-white">Nara</span>
        </span>
        <span className="absolute top-[70%] left-[30%] flex items-center gap-1">
          <span className="size-3 rotate-[-20deg] rounded-[2px] bg-[#3b82f6]" />
          <span className="rounded bg-[#3b82f6] px-1.5 py-0.5 text-[10px] font-semibold text-white">Ploy</span>
        </span>
      </div>
    </AppFrame>
  )
}

/* -------------------------------------------------------------------------- */
/* To-do board                                                                */
/* -------------------------------------------------------------------------- */

const columns = [
  {
    id: 'TODO',
    name: 'Todo',
    color: '#6B7280',
    tasks: [
      {
        title: 'Rewrite the empty state copy',
        priority: 'Medium',
        bg: 'bg-yellow-500/20',
        color: 'text-yellow-600 dark:text-yellow-400',
        due: 'Sep 02',
      },
      {
        title: 'Ship the invite email',
        priority: 'Low',
        bg: 'bg-blue-500/20',
        color: 'text-blue-500 dark:text-blue-400',
        due: 'Sep 05',
      },
    ],
  },
  {
    id: 'IN_PROGRESS',
    name: 'In Progress',
    color: '#3B82F6',
    tasks: [
      {
        title: 'Whiteboard sync on slow networks',
        priority: 'Urgent',
        bg: 'bg-red-500/20',
        color: 'text-red-500 dark:text-red-400',
        due: 'Aug 28',
      },
    ],
  },
  {
    id: 'DONE',
    name: 'Done',
    color: '#10B981',
    tasks: [
      {
        title: 'Passkey sign-in',
        priority: 'High',
        bg: 'bg-orange-500/20',
        color: 'text-orange-500 dark:text-orange-400',
        due: 'Aug 21',
      },
    ],
  },
]

export function TodoDemo() {
  return (
    <AppFrame icon={CheckSquare} name="this-sprint" meta="4 tasks">
      <div className="flex min-h-0 flex-1 gap-3 overflow-hidden p-3">
        {columns.map((column) => (
          <div key={column.id} className="flex min-w-0 flex-1 flex-col">
            <div className="mb-2 space-y-1 px-1">
              <div className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-lg" style={{ backgroundColor: column.color }} />
                <span className="truncate text-xs font-semibold text-black dark:text-white">{column.name}</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-gray-500">
                <span className="flex items-center gap-1">
                  <ListTodo size={12} />
                  {column.tasks.length}
                </span>
                <Plus size={13} className="ml-auto text-gray-400" />
              </div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden rounded-lg border border-dashed border-gray-200 p-2 dark:border-gray-800">
              {column.tasks.map((task) => (
                <div
                  key={task.title}
                  className="skeuo-raised rounded-lg border border-gray-200 bg-white p-3 dark:border-black/60 dark:bg-gray-900"
                >
                  <p className="text-sm leading-snug text-gray-800 dark:text-gray-200">{task.title}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-lg px-1.5 py-0.5 text-[10px] font-medium ${task.bg} ${task.color}`}
                    >
                      {task.priority}
                    </span>
                    <span className="text-xs text-gray-500">{task.due}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppFrame>
  )
}

/* -------------------------------------------------------------------------- */
/* Announcements                                                              */
/* -------------------------------------------------------------------------- */

/** `AnnouncementList.tsx` renders each card with this exact shell. */
const announcementCardStyles =
  'flex w-full flex-col overflow-hidden rounded-2xl border border-black/20 bg-gradient-to-b from-white to-gray-50 text-left shadow-[0_2px_12px_-2px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.8)] dark:border-black/40 dark:from-gray-900 dark:to-gray-950 dark:shadow-[0_2px_12px_-2px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.05)]'

const announcements = [
  {
    title: 'Veil 1.4 — whiteboards go real-time',
    excerpt:
      'Cursors, live scenes and image assets now sync as you draw. Everything still leaves your device encrypted.',
    author: 'Nara',
    date: '26/08/2026',
    reactions: [
      { emoji: '🎉', count: 18 },
      { emoji: '🚀', count: 9 },
    ],
    comments: 6,
    gradient: 'from-primary-500/70 to-secondary-500/70',
  },
  {
    title: 'Office is closed Monday',
    excerpt: 'Public holiday. The on-call rota is unchanged and the huddle moves to Tuesday morning.',
    author: 'Ploy',
    date: '22/08/2026',
    reactions: [{ emoji: '👍', count: 24 }],
    comments: 2,
    gradient: 'from-blue-500/60 to-emerald-500/60',
  },
]

export function AnnouncementsDemo() {
  return (
    <AppFrame icon={Megaphone} name="releases" meta="everyone can read, admins post">
      <div className="min-h-0 flex-1 overflow-hidden p-3">
        <div className="flex flex-col gap-3">
          {announcements.map((announcement) => (
            <div key={announcement.title} className={announcementCardStyles}>
              <span className={`h-10 w-full shrink-0 bg-gradient-to-r ${announcement.gradient}`} />
              <div className="flex flex-1 flex-col justify-center p-3.5">
                <h4 className="line-clamp-1 text-sm font-bold text-black dark:text-white">{announcement.title}</h4>
                <p className="mt-1 line-clamp-2 text-xs text-gray-500">{announcement.excerpt}</p>
                <div className="mt-3 flex items-center gap-3 text-[10px] text-gray-500">
                  <span className="font-medium">{announcement.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {announcement.date}
                  </span>
                  <span className="flex items-center gap-1">
                    {announcement.reactions.map((reaction) => (
                      <span
                        key={reaction.emoji}
                        className="skeuo-inset flex items-center gap-0.5 rounded-full border border-gray-300 bg-gray-100 px-1.5 py-0.5 text-[10px] dark:border-black/60 dark:bg-gray-950"
                      >
                        <span>{reaction.emoji}</span>
                        <span className="font-semibold text-gray-600 dark:text-gray-400">{reaction.count}</span>
                      </span>
                    ))}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <MessageCircle size={10} />
                    {announcement.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppFrame>
  )
}

/* -------------------------------------------------------------------------- */
/* Q&A                                                                        */
/* -------------------------------------------------------------------------- */

const qaCardStyles =
  'skeuo-raised overflow-hidden rounded-xl border border-black/20 bg-gradient-to-b from-white to-gray-100 dark:border-black/60 dark:from-gray-800 dark:to-gray-900'

const questions = [
  {
    title: 'Can we self-host Veil?',
    detail: 'Asked before the offsite — worth an answer on the record so it stops coming up.',
    author: 'Tem',
    votes: 12,
    answers: 3,
    answered: true,
    upvoted: true,
  },
  {
    title: 'How do passkeys work on the desktop app?',
    detail: 'Set one up on the web and it carried over to the Tauri build without another prompt.',
    author: 'Jip',
    votes: 5,
    answers: 1,
    answered: false,
    upvoted: false,
  },
  {
    title: 'Where do saved files actually live?',
    detail: 'Keep says "encrypted at rest" — is that the same key as the channel?',
    author: 'Ploy',
    votes: 3,
    answers: 0,
    answered: false,
    upvoted: false,
  },
]

const upvoteIdle =
  'skeuo-raised border-black/20 bg-gray-100 text-gray-600 dark:border-black/60 dark:bg-gray-900 dark:text-gray-300'

const upvoteActive =
  'skeuo-pressed border-blue-500/50 bg-blue-500/15 text-blue-600 dark:border-blue-400/50 dark:bg-blue-500/20 dark:text-blue-300'

export function QADemo() {
  return (
    <AppFrame
      icon={MessageCircleQuestion}
      name="ask-anything"
      meta="14 questions"
      action={
        <span className="bg-primary-500 flex items-center gap-1 rounded-lg px-2.5 py-1 text-[10px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.3)]">
          <Plus size={11} />
          Ask
        </span>
      }
    >
      <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden bg-gray-100 p-3 dark:bg-gray-950">
        {/* Search + status filter, as the QA channel header offers them */}
        <div className="flex shrink-0 items-center gap-2">
          <span className="skeuo-inset flex flex-1 items-center gap-1.5 rounded-lg border border-black/20 bg-gray-100 px-2 py-1 text-[11px] text-gray-500 dark:border-black/60 dark:bg-gray-900">
            <Search size={12} />
            Search questions
          </span>
          <span className={`${raisedControlStyles} rounded-lg px-2 py-1 text-[11px] text-gray-600 dark:text-gray-300`}>
            Unanswered
          </span>
        </div>

        {questions.map((question) => (
          <div key={question.title} className={qaCardStyles}>
            <div className="flex items-start gap-3 p-3">
              <span
                className={`flex shrink-0 flex-col items-center rounded-lg border px-2 py-1 ${
                  question.upvoted ? upvoteActive : upvoteIdle
                }`}
              >
                <ArrowBigUp size={14} />
                <span className="text-xs font-bold">{question.votes}</span>
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="truncate text-sm font-semibold text-black dark:text-white">{question.title}</h4>
                  {question.answered && (
                    <span className="flex shrink-0 items-center gap-1 rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] font-bold text-green-600 dark:text-green-400">
                      Answered
                    </span>
                  )}
                </div>
                <p className="mt-1 line-clamp-2 text-xs break-words text-gray-600 dark:text-gray-400">
                  {question.detail}
                </p>
                <div className="mt-1.5 flex items-center gap-2 text-[10px] text-gray-500">
                  <span>{question.author}</span>
                  <span className="flex items-center gap-0.5">
                    <MessageCircle size={10} />
                    {question.answers}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppFrame>
  )
}
