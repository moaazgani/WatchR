import {
	Eye,
	Grid2X2,
	Radio,
	TrendingUp,
	Users,
} from 'lucide-react'

const filters = [
	{ label: 'All', icon: Grid2X2, active: true },
	{ label: 'Live Rooms', icon: Radio },
	{ label: 'Trending', icon: TrendingUp },
	{ label: 'Following', icon: Users },
]

const rooms = [
	{
		title: 'Refactoring Legacy Monoliths to Modern Systems',
		host: 'sarah_dev',
		viewers: '842',
		duration: '42m',
		image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
	},
	{
		title: 'Brutalist UI Layouts & Spatial Systems',
		host: 'elena_v',
		viewers: '1.2k',
		duration: '1h 15m',
		image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=85',
	},
	{
		title: 'Algorithmic Trading & Low-Latency Systems',
		host: 'MarcusQ',
		viewers: '530',
		duration: '28m',
		image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85',
	},
	{
		title: 'Modular Soundscapes & Ambient Textures',
		host: 'synths_live',
		viewers: '910',
		duration: '50m',
		image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=85',
	},
	{
		title: 'Zero-Day Threat Analysis & Kernel Security',
		host: 'root_access',
		viewers: '2.4k',
		duration: '2h 05m',
		image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=85',
	},
	{
		title: 'Shader Programming & Procedural Worlds',
		host: 'vector_zen',
		viewers: '615',
		duration: '1h',
		image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85',
	},
]

function RoomCard({ room }) {
	return (
		<article className="overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-700">
			<div className="relative aspect-video overflow-hidden bg-neutral-900">
				<img className="h-full w-full object-cover opacity-80 transition duration-300 hover:scale-105" src={room.image} alt="" />
				<span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
					<span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
					Live
				</span>
				<span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/75 px-2 py-1 text-[10px] text-neutral-200 backdrop-blur-sm">
					<Eye className="h-3 w-3" />
					{room.viewers}
				</span>
			</div>

			<div className="p-4">
				<div className="mb-1 flex justify-end text-[9px] font-semibold text-neutral-500">
					<span>{room.duration}</span>
				</div>
				<h3 className="truncate text-sm font-bold text-neutral-100 sm:text-[15px]">{room.title}</h3>
				<div className="mt-4 flex items-center justify-between gap-3">
					<div className="flex min-w-0 items-center gap-2 text-xs text-neutral-400">
						<img className="h-6 w-6 rounded-full object-cover" src={`https://i.pravatar.cc/48?u=${room.host}`} alt="" />
						<span className="truncate">{room.host}</span>
					</div>
					<a className="shrink-0 rounded-full border border-neutral-500 px-4 py-1.5 text-xs font-medium text-white no-underline transition hover:bg-white hover:text-black active:bg-neutral-200" href="/room/402">
						Join room
					</a>
				</div>
			</div>
		</article>
	)
}

function Home() {
	return (
		<main className="mx-auto w-full max-w-[1180px] px-4 pb-24 pt-5 sm:px-6 md:pb-10 lg:px-8">
			<div className="mb-6 flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				{filters.map(({ label, icon: Icon, active }) => (
					<button
						className={`flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-xs font-semibold transition ${active ? 'bg-white text-black' : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'}`}
						type="button"
						key={label}
					>
						<Icon className="h-4 w-4" strokeWidth={active ? 2.5 : 1.8} />
						{label}
					</button>
				))}
			</div>

			<div className="mb-4 flex items-end justify-between gap-4">
				<div>
					<p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">Watch together</p>
					<h2 className="text-xl font-bold tracking-tight text-white">Active streams</h2>
				</div>
				<span className="text-[10px] text-neutral-500">Showing 6 live rooms</span>
			</div>

			<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="Active streams">
				{rooms.map((room) => <RoomCard room={room} key={room.title} />)}
			</section>
		</main>
	)
}

export default Home