import {
	BellRing,
	CalendarX2,
	Check,
	CircleUserRound,
	Radio,
	Search,
	Settings2,
	UserPlus,
} from 'lucide-react'

const filters = [
	{ label: 'All Activity', count: null, active: true },
	{ label: 'Invites', count: 3 },
	{ label: 'Live Alerts', count: null },
	{ label: 'Followers', count: null },
]

const notifications = [
	{
		name: 'Elena Rostova',
		text: 'invited you to join screening "Blade Runner 2049 IMAX Session" in Room #884.',
		time: '2 minutes ago',
		image: 'https://i.pravatar.cc/72?img=47',
		icon: UserPlus,
		actions: ['Decline', 'Join Room'],
	},
	{
		name: 'CyberWatch Live',
		text: 'went live: "The Future of Decentralized Cinema - Q&A". 428 users watching now.',
		time: '15 minutes ago',
		image: 'https://i.pravatar.cc/72?img=12',
		icon: Radio,
		actions: ['Watch Stream'],
	},
	{
		name: 'Marcus Vance',
		text: 'started following your public watch parties and shared playlists.',
		time: '1 hour ago',
		image: 'https://i.pravatar.cc/72?img=11',
		icon: CircleUserRound,
		actions: ['Follow Back'],
	},
	{
		name: 'Sora Kim',
		text: 'invited you to "Midnight Noir Film Marathon #3".',
		time: '3 hours ago',
		image: 'https://i.pravatar.cc/72?img=32',
		icon: CalendarX2,
		actions: ['Room Closed'],
	},
	{
		name: 'System Update',
		text: 'WatchR v4.2 is now deployed. New Ultra-Low Latency relay nodes active in Tokyo and Frankfurt.',
		time: 'Yesterday',
		image: null,
		icon: Settings2,
		actions: ['Read Notes'],
	},
]

function NotificationRow({ notification }) {
	const Icon = notification.icon

	return (
		<article className="flex flex-col gap-4 rounded-xl border border-neutral-900 bg-neutral-900/70 px-4 py-4 sm:flex-row sm:items-center sm:gap-5 sm:px-5">
			<span className="hidden h-2 w-2 shrink-0 rounded-full bg-white sm:block" aria-hidden="true" />
			<div className="flex min-w-0 flex-1 items-start gap-3">
				<div className="relative shrink-0">
					{notification.image ? (
						<img className="h-9 w-9 rounded-full object-cover grayscale" src={notification.image} alt="" />
					) : (
						<span className="grid h-9 w-9 place-items-center rounded-full border border-neutral-700 bg-neutral-950 text-neutral-300">
							<Icon className="h-4 w-4" />
						</span>
					)}
					<span className="absolute -bottom-1 -right-1 grid h-4 w-4 place-items-center rounded-full border border-neutral-900 bg-black text-neutral-300">
						<Icon className="h-2.5 w-2.5" />
					</span>
				</div>
				<div className="min-w-0 text-xs leading-relaxed text-neutral-300 sm:text-[13px]">
					<p><strong className="font-bold text-white">{notification.name}</strong> {notification.text}</p>
					<p className="mt-1 text-neutral-500">{notification.time}</p>
				</div>
			</div>
			<div className="flex shrink-0 items-center justify-end gap-2 sm:ml-auto">
				{notification.actions.map((action, index) => (
					<button
						className={`rounded-full px-3.5 py-2 text-xs font-medium transition sm:px-4 ${index === notification.actions.length - 1 && action !== 'Room Closed' ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-neutral-300 hover:bg-neutral-800'} ${action === 'Room Closed' ? 'cursor-default bg-transparent text-neutral-500' : ''}`}
						type="button"
						key={action}
					>
						{action}
					</button>
				))}
			</div>
		</article>
	)
}

function Notification() {
	return (
		<main className="mx-auto w-full max-w-[1180px] px-4 pb-24 pt-5 sm:px-6 md:pb-10 lg:px-8">
			<section className="mb-6 rounded-xl border border-neutral-900 bg-neutral-950 px-5 py-5 sm:px-7 sm:py-6">
				<div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
					<div>
						<p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
							<span className="h-1.5 w-1.5 rounded-full bg-neutral-300" aria-hidden="true" />
							System feed & alerts
						</p>
						<h1 className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">Notifications</h1>
						<p className="mt-1 text-xs text-neutral-400 sm:text-sm">Real-time stream updates, room invitations, and social activity.</p>
					</div>
					<div className="flex flex-wrap gap-2">
						<button className="inline-flex items-center gap-2 rounded-full bg-neutral-800 px-3.5 py-2 text-xs font-medium text-white transition hover:bg-neutral-700" type="button">
							<Check className="h-3.5 w-3.5" />
							Mark all read
						</button>
					</div>
				</div>
			</section>

			<div className="mb-5 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
				<div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					{filters.map(({ label, count, active }) => (
						<button className={`flex h-9 shrink-0 items-center gap-2 rounded-full px-4 text-xs font-medium transition ${active ? 'bg-white text-black' : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'}`} type="button" key={label}>
							{label}
							{count && <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${active ? 'bg-black/10 text-black' : 'bg-neutral-800 text-neutral-300'}`}>{count}</span>}
						</button>
					))}
				</div>
				<label className="flex h-9 w-full items-center gap-2 rounded-lg bg-neutral-900 px-3 text-xs text-neutral-500 xl:max-w-[185px]">
					<Search className="h-3.5 w-3.5" />
					<input className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-neutral-500" type="search" placeholder="Filter notifications..." />
				</label>
			</div>

			<section className="space-y-3" aria-label="Notifications list">
				{notifications.map((notification) => <NotificationRow notification={notification} key={`${notification.name}-${notification.time}`} />)}
			</section>

			<button className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-medium text-neutral-300 transition hover:bg-neutral-800 hover:text-white" type="button">
				<span aria-hidden="true">⌄</span>
				Load earlier notifications
			</button>
		</main>
	)
}

export default Notification
