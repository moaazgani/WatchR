import {
	History as HistoryIcon,
	MessageSquareText,
	RotateCcw,
	Search,
	X,
} from 'lucide-react'

const filters = ['All Activity', 'Hosted Rooms', 'Joined Rooms']

const sessions = [
	{
		status: 'Hosted by You',
		when: 'Yesterday',
		title: 'Nolan Marathon: Interstellar & Tenet',
		meta: '+14 participants',
		host: 'You',
		duration: '3h 42m',
		image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=85',
		avatars: ['https://i.pravatar.cc/32?img=12', 'https://i.pravatar.cc/32?img=49'],
	},
	{
		status: 'Joined Room',
		when: '3 days ago',
		title: 'Cyberpunk Edgerunners Watch Party & Q&A',
		meta: 'Hosted by @alex_v',
		host: 'Alex Rivera',
		duration: '1h 55m',
		image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=400&q=85',
		avatars: ['https://i.pravatar.cc/32?img=12'],
	},
	{
		status: 'Hosted by You',
		when: '5 days ago',
		title: 'Design Systems Live Critique #42',
		meta: '+28 participants',
		host: 'You',
		duration: '2h 10m',
		image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=85',
		avatars: ['https://i.pravatar.cc/32?img=11', 'https://i.pravatar.cc/32?img=32', 'https://i.pravatar.cc/32?img=47'],
	},
	{
		status: 'Joined Room',
		when: 'Last week',
		title: 'Late Night Lo-Fi & Code Session',
		meta: 'Hosted by @code_ninja',
		host: 'Code Ninja',
		duration: '4h 15m',
		image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=400&q=85',
		avatars: ['https://i.pravatar.cc/32?img=13'],
	},
]

function SessionRow({ session }) {
	return (
		<article className="flex flex-col gap-4 rounded-xl border border-neutral-900 bg-neutral-900/75 p-3 sm:flex-row sm:items-center sm:p-3">
			<div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg bg-neutral-800 sm:h-16 sm:w-28">
				<img className="h-full w-full object-cover grayscale-[20%]" src={session.image} alt="" />
				<span className="absolute bottom-1.5 right-1.5 rounded bg-black/80 px-1.5 py-0.5 text-[9px] text-white">{session.duration}</span>
			</div>
			<div className="min-w-0 flex-1">
				<p className="text-[9px] text-neutral-500"><span className="mr-1.5 rounded-full bg-neutral-800 px-2 py-1 text-neutral-200">{session.status}</span> · {session.when}</p>
				<h2 className="mt-2 truncate text-sm font-medium text-white">{session.title}</h2>
				<div className="mt-2 flex items-center gap-2 text-[10px] text-neutral-400">
					<div className="flex -space-x-1.5">
						{session.avatars.map((avatar) => <img className="h-5 w-5 rounded-full border border-neutral-900 object-cover" src={avatar} alt="" key={avatar} />)}
					</div>
					<span>{session.meta}</span>
				</div>
			</div>
			<div className="flex shrink-0 items-center justify-end gap-2">
				<button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-800 px-3 py-2 text-[10px] text-neutral-200 transition hover:bg-white hover:text-black" type="button"><MessageSquareText className="h-3 w-3" />Chat Log</button>
				<button className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-[10px] font-medium text-black transition hover:bg-neutral-200" type="button"><RotateCcw className="h-3 w-3" />Rejoin</button>
				<button className="grid h-7 w-7 place-items-center rounded-full text-neutral-500 transition hover:bg-neutral-800 hover:text-white" type="button" aria-label={`Remove ${session.title} from history`}><X className="h-3.5 w-3.5" /></button>
			</div>
		</article>
	)
}

function History() {
	return (
		<main className="mx-auto w-full max-w-[1180px] px-4 pb-24 pt-6 sm:px-6 md:pb-10 lg:px-8">
			<header className="border-b border-neutral-800 pb-5">
				<div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<h1 className="text-xl font-semibold text-white">Watch History</h1>
						<p className="mt-1 text-xs text-neutral-400 sm:text-sm">Review your past room sessions, chat archives, and participant logs.</p>
					</div>
					<div className="flex w-full gap-2 sm:w-auto">
						<label className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-full bg-neutral-900 px-3 text-neutral-500 sm:w-48 sm:flex-none"><Search className="h-3.5 w-3.5" /><input className="min-w-0 flex-1 bg-transparent text-[10px] text-white outline-none placeholder:text-neutral-500" type="search" placeholder="Search history..." aria-label="Search history" /></label>
						<button className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-800 px-3.5 py-2 text-[10px] text-neutral-200 transition hover:bg-white hover:text-black" type="button"><X className="h-3 w-3" />Clear History</button>
					</div>
				</div>
				<div className="mt-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					{filters.map((filter, index) => <button className={`shrink-0 rounded-full px-4 py-2 text-xs transition ${index === 0 ? 'bg-white text-black' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'}`} type="button" key={filter}>{filter}</button>)}
				</div>
			</header>

			<section className="mt-5 space-y-3" aria-label="Watch history sessions">
				{sessions.map((session) => <SessionRow session={session} key={session.title} />)}
			</section>
		</main>
	)
}

export default History
