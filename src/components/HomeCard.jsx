import { Eye } from 'lucide-react'

function HomeCard({ room }) {
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

export default HomeCard