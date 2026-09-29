import SearchCard from '../components/SearchCard'

import {
	Search as SearchIcon,
	Settings2,
} from 'lucide-react'

const trendingQueries = [
	'#Cyberpunk2077Watchparty',
	'Lo-Fi Coding Session',
	'Indie Film Premiere',
	'AI Keynote Live',
	'Vinyl Listening Room',
]

const categories = ['All', 'Live', 'Cinema', 'Tech', 'Music']

const rooms = [
	{
		started: 'Started 42m ago',
		title: 'Midnight Sci-Fi Marathon: Blade Runner 2049 Commentary',
		description: 'Deep dive discussion on cinematography, sound design, and dystopian world building with special guest creators.',
		host: 'Alex Mercer',
		viewers: '1.4k watching',
		image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=85',
	},
	{
		started: 'Started 2h ago',
		title: 'Building a High-Performance Design System from Scratch',
		description: 'Live coding session focusing on robust token architectures and strict monochrome UI principles.',
		host: 'Sarah Lin',
		viewers: '850 watching',
		image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=700&q=85',
	},
	{
		started: 'Started 15m ago',
		title: 'Late Night Vinyl Sessions: Ambient & Industrial Techno',
		description: 'Uninterrupted analog soundscapes curated from rare underground pressings.',
		host: 'Kaelen Voss',
		viewers: '2.1k watching',
		image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=85',
	},
]

const creators = [
	{ name: 'Elena Rostova', followers: '42.8k followers', image: 'https://i.pravatar.cc/64?img=47' },
	{ name: 'Marcus Vance', followers: '19.2k followers', image: 'https://i.pravatar.cc/64?img=11' },
	{ name: 'Chloe Bennett', followers: '31.5k followers', image: 'https://i.pravatar.cc/64?img=32' },
	{ name: 'Julian Thorne', followers: '54.1k followers', image: 'https://i.pravatar.cc/64?img=13' },
]

function Search() {
	return (
		<main className="mx-auto w-full max-w-[1180px] px-4 pb-24 pt-5 sm:px-6 md:pb-10 lg:px-8">
			<form className="flex h-11 items-center gap-3 rounded-lg border border-neutral-900 bg-neutral-900/80 px-4" onSubmit={(event) => event.preventDefault()}>
				<SearchIcon className="h-4 w-4 shrink-0 text-neutral-400" />
				<input className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-neutral-400" type="search" placeholder="Search rooms, creators, movies, or live streams..." aria-label="Search rooms, creators, movies, or live streams" />
				<button className="rounded-md bg-white px-3 py-1.5 text-[10px] font-semibold text-black transition hover:bg-neutral-200" type="submit">Search</button>
			</form>

			<section className="mt-5">
				<p className="mb-2 text-[9px] font-bold uppercase tracking-[0.12em] text-neutral-500">Trending queries</p>
				<div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					{trendingQueries.map((query) => <button className="shrink-0 rounded-full bg-neutral-900 px-3 py-1.5 text-[10px] text-neutral-300 transition hover:bg-neutral-800 hover:text-white" type="button" key={query}>{query}</button>)}
				</div>
			</section>

			<div className="mt-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				{categories.map((category, index) => <button className={`shrink-0 rounded-full px-4 py-2 text-[10px] font-semibold transition ${index === 0 ? 'bg-white text-black' : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'}`} type="button" key={category}>{category}</button>)}
			</div>

			<div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_230px] lg:items-start">
				<section>
					<div className="mb-4 flex items-end justify-between gap-4">
						<h1 className="text-xl font-bold tracking-tight text-white">Trending Rooms</h1>
						<span className="text-[10px] text-neutral-500">Showing 24 live streams</span>
					</div>
					<div className="space-y-4">
						{rooms.map((room) => <SearchCard room={room} key={room.title} />)}
					</div>
				</section>

				<aside className="space-y-4">
					<section className="rounded-xl border border-neutral-900 bg-neutral-900/75 p-4">
						<div className="mb-4 flex items-center justify-between">
							<h2 className="text-sm font-bold text-white">Featured Creators</h2>
							<Settings2 className="h-4 w-4 text-neutral-400" />
						</div>
						<div className="space-y-4">
							{creators.map((creator) => <div className="flex items-center gap-2" key={creator.name}>
								<img className="h-8 w-8 rounded-full object-cover grayscale" src={creator.image} alt="" />
								<div className="min-w-0 flex-1"><p className="truncate text-[10px] font-semibold text-white">{creator.name}</p><p className="text-[9px] text-neutral-500">{creator.followers}</p></div>
								<button className="rounded-full bg-neutral-800 px-2.5 py-1 text-[9px] text-neutral-300 transition hover:bg-white hover:text-black" type="button">Follow</button>
							</div>)}
						</div>
					</section>

					<section className="rounded-xl border border-neutral-900 bg-neutral-900/75 p-4">
						<h2 className="text-sm font-bold text-white">Network Activity</h2>
						<div className="mt-5 grid grid-cols-2 gap-3">
							<div><strong className="block text-lg text-white">14.2k</strong><span className="text-[9px] text-neutral-500">Active Rooms</span></div>
							<div><strong className="block text-lg text-white">128k</strong><span className="text-[9px] text-neutral-500">Viewers Online</span></div>
						</div>
					</section>
				</aside>
			</div>
		</main>
	)
}

export default Search
