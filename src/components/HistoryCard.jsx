import { MessageSquareText, RotateCcw, X } from 'lucide-react'

function HistoryCard({ session }) {
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

export default HistoryCard