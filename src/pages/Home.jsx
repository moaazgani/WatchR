import HomeCard from '../components/HomeCard'
import {
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
				{rooms.map((room) => <HomeCard room={room} key={room.title} />)}
			</section>
		</main>
	)
}

export default Home