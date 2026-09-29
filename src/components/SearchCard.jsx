import { Eye } from 'lucide-react'

function SearchCard({ room }) {
	return (
		<article className="grid overflow-hidden rounded-xl border border-neutral-900 bg-neutral-900/75 transition hover:border-neutral-700 sm:grid-cols-[160px_1fr]">
			<div className="relative aspect-video overflow-hidden bg-neutral-800 sm:aspect-auto sm:min-h-[148px]">
				<img className="h-full w-full object-cover grayscale-[35%] transition duration-300 hover:scale-105" src={room.image} alt="" />
				<span className="absolute left-3 top-3 rounded bg-black/80 px-2 py-1 text-[9px] font-bold uppercase text-white">Live now</span>
			</div>
			<div className="flex min-w-0 flex-col justify-between p-4">
				<div>
					<p className="text-[9px] font-medium text-neutral-500">{room.started}</p>
					<h2 className="mt-2 line-clamp-2 text-sm font-bold leading-tight text-white">{room.title}</h2>
					<p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-neutral-400">{room.description}</p>
				</div>
				<div className="mt-4 flex items-center justify-between gap-3 border-t border-neutral-800 pt-3 text-[10px] text-neutral-400">
					<span className="flex items-center gap-2"><img className="h-5 w-5 rounded-full object-cover" src={`https://i.pravatar.cc/40?u=${room.host}`} alt="" />{room.host}</span>
					<span className="flex items-center gap-1 whitespace-nowrap"><Eye className="h-3 w-3" />{room.viewers}</span>
				</div>
			</div>
		</article>
	)
}

export default SearchCard