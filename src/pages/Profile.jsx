import { useState } from 'react'
import { ArrowLeft, CalendarDays, Check, X } from 'lucide-react'

const hostedRooms = [
	{
		name: 'A24 After Hours: Films That Stay With You',
		date: 'Hosted yesterday',
		status: 'Replay available',
		image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=640&q=85',
		roomId: '402',
	},
	{
		name: 'Slow Cinema Sunday: Perfect Days',
		date: 'Hosted 4 days ago',
		status: 'Ended',
		image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=640&q=85',
		roomId: '401',
	},
	{
		name: 'The Art of the Opening Scene',
		date: 'Hosted last week',
		status: 'Replay available',
		image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=640&q=85',
		roomId: '400'
	},
]

const connections = {
	followers: [
		{ name: 'Maya Chen', handle: 'mayaseesfilms', image: 'https://i.pravatar.cc/96?img=47' },
		{ name: 'Jordan Ellis', handle: 'jordanellis', image: 'https://i.pravatar.cc/96?img=12' },
		{ name: 'Nina Park', handle: 'ninapark', image: 'https://i.pravatar.cc/96?img=44' },
	],
	following: [
		{ name: 'Maya Chen', handle: 'mayaseesfilms', image: 'https://i.pravatar.cc/96?img=47' },
		{ name: 'Theo Martin', handle: 'theoafterdark', image: 'https://i.pravatar.cc/96?img=53' },
	],
}

function Profile() {
	const [isFollowing, setIsFollowing] = useState(false)
	const [listType, setListType] = useState(null)
	const [followedHandles, setFollowedHandles] = useState(() => new Set(connections.following.map((person) => person.handle)))
	const followerCount = isFollowing ? '2,481' : '2,480'

	function togglePersonFollow(handle) {
		setFollowedHandles((currentHandles) => {
			const nextHandles = new Set(currentHandles)
			if (nextHandles.has(handle)) nextHandles.delete(handle)
			else nextHandles.add(handle)
			return nextHandles
		})
	}

	return (
		<main className="mx-auto min-h-[calc(100vh-4rem)] w-full max-w-[700px] bg-[#0A0A0A] pb-24 md:pb-10">
			<header className="flex h-12 items-center gap-6 border-b border-neutral-800 px-4 sm:px-6">
				<a className="grid h-9 w-9 place-items-center rounded-full text-white transition hover:bg-neutral-900 active:bg-white active:text-black" href="/" aria-label="Back to home">
					<ArrowLeft className="h-5 w-5" />
				</a>
				<div>
					<h1 className="text-base font-bold text-white">Alex Morgan</h1>
					<p className="text-[11px] text-neutral-500">18 rooms hosted</p>
				</div>
			</header>

			<section className="relative px-4 pb-5 sm:px-6" aria-labelledby="profile-name">
				<img className="mt-5 h-24 w-24 rounded-full border-4 border-[#0A0A0A] bg-neutral-800 object-cover grayscale sm:h-28 sm:w-28" src="https://i.pravatar.cc/240?img=12" alt="Alex Morgan" />
				<div className="absolute right-4 top-4 sm:right-6">
					<button className={`inline-flex h-10 items-center gap-2 rounded-full border px-5 text-xs font-bold transition active:scale-[0.98] ${isFollowing ? 'border-white bg-white text-black hover:bg-neutral-200 active:bg-black active:text-white' : 'border-neutral-600 bg-transparent text-white hover:bg-white hover:text-black active:bg-white active:text-black'}`} type="button" aria-pressed={isFollowing} onClick={() => setIsFollowing((value) => !value)}>
						{isFollowing && <Check className="h-3.5 w-3.5" />}
						{isFollowing ? 'Following' : 'Follow'}
					</button>
				</div>
				<div className="mt-3">
					<h2 id="profile-name" className="text-2xl font-extrabold tracking-tight text-white">Alex Morgan</h2>
					<p className="mt-0.5 text-sm text-neutral-500">@alexmorgan</p>
					<p className="mt-3 max-w-lg text-sm leading-6 text-neutral-300">Finding the frame worth pausing on. Film nights, thoughtful company, and the occasional director&apos;s cut.</p>
					<p className="mt-3 inline-flex items-center gap-1.5 text-xs text-neutral-500"><CalendarDays className="h-3.5 w-3.5" /> Joined March 2023</p>
				</div>

				<div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-b border-neutral-800 pb-5">
					<button className="rounded-md text-left text-xs text-neutral-500 transition hover:text-white active:text-neutral-300" type="button" onClick={() => setListType('followers')}><span className="mr-1 font-bold text-white">{followerCount}</span> Followers</button>
					<button className="rounded-md text-left text-xs text-neutral-500 transition hover:text-white active:text-neutral-300" type="button" onClick={() => setListType('following')}><span className="mr-1 font-bold text-white">684</span> Following</button>
					<a className="rounded-md text-xs text-neutral-500 no-underline transition hover:text-white active:text-neutral-300" href="#hosted-rooms"><span className="mr-1 font-bold text-white">18</span> Rooms hosted</a>
				</div>
			</section>

			<section id="hosted-rooms" aria-labelledby="hosted-heading">
				<div className="border-b border-neutral-800 px-4 py-4 sm:px-6">
					<h2 id="hosted-heading" className="text-base font-bold text-white">Rooms hosted</h2>
				</div>
				<div className="divide-y divide-neutral-800">
					{hostedRooms.map((room) => (
						<a className="group flex gap-4 px-4 py-4 text-white no-underline transition hover:bg-neutral-950 sm:px-6" href={`/room/${room.roomId}`} key={room.roomId}>
							<img className="h-[84px] w-[120px] shrink-0 rounded-xl bg-neutral-900 object-cover grayscale transition group-hover:grayscale-0 sm:h-[96px] sm:w-[150px]" src={room.image} alt="" />
							<div className="flex min-w-0 flex-1 flex-col justify-center">
								<p className="line-clamp-2 text-sm font-bold leading-5 text-white">{room.name}</p>
								<p className="mt-2 text-xs text-neutral-500">{room.date}</p>
								<span className="mt-2 w-fit rounded-full border border-neutral-700 px-2.5 py-1 text-[10px] font-medium text-neutral-300">{room.status}</span>
							</div>
						</a>
					))}
				</div>
			</section>

			{listType && (
				<div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4" onClick={() => setListType(null)}>
					<section className="w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-800 bg-[#0A0A0A]" role="dialog" aria-modal="true" aria-labelledby="connections-title" onClick={(event) => event.stopPropagation()}>
						<header className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
							<h2 id="connections-title" className="text-sm font-bold capitalize text-white">{listType}</h2>
							<button className="grid h-8 w-8 place-items-center rounded-full text-neutral-400 transition hover:bg-neutral-900 hover:text-white active:bg-white active:text-black" type="button" aria-label="Close list" onClick={() => setListType(null)}><X className="h-4 w-4" /></button>
						</header>
						<ul className="divide-y divide-neutral-800">
							{connections[listType].map((person) => (
								<li className="flex items-center gap-3 px-4 py-3" key={person.handle}>
									<img className="h-10 w-10 rounded-full object-cover grayscale" src={person.image} alt="" />
									<div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold text-white">{person.name}</p><p className="mt-0.5 truncate text-xs text-neutral-500">@{person.handle}</p></div>
									<button className={`h-8 shrink-0 rounded-full border px-4 text-xs font-bold transition active:scale-[0.98] ${followedHandles.has(person.handle) ? 'border-white bg-white text-black hover:bg-neutral-200 active:bg-black active:text-white' : 'border-neutral-600 text-white hover:bg-white hover:text-black active:bg-white active:text-black'}`} type="button" aria-pressed={followedHandles.has(person.handle)} onClick={() => togglePersonFollow(person.handle)}>
										{followedHandles.has(person.handle) ? 'Following' : 'Follow'}
									</button>
								</li>
							))}
						</ul>
					</section>
				</div>
			)}
		</main>
	)
}

export default Profile