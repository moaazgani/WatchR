import { Edit3, Search } from 'lucide-react'

const conversations = [
	{ name: 'Sarah Jenkins', preview: 'Watching Interstellar together', time: '2m', image: 'https://i.pravatar.cc/80?img=49', active: true, online: true },
	{ name: 'Alex Rivera', preview: 'Sent an attachment', time: '1h', image: 'https://i.pravatar.cc/80?img=12', online: true },
	{ name: 'Cinema Club Official', preview: 'New room invite: Anime Night', time: '3h', image: 'https://i.pravatar.cc/80?img=68', unread: true },
	{ name: 'Marcus Vance', preview: 'Haha totally agreed!', time: 'Yesterday', image: 'https://i.pravatar.cc/80?img=11' },
	{ name: 'Elena Rostova', preview: 'Check out this clip', time: '3d', image: 'https://i.pravatar.cc/80?img=47' },
] 

function ConversationList() {
	return (
		<aside className="hidden w-[285px] shrink-0 border-r border-neutral-800 bg-[#090909] md:block">
			<div className="flex h-full flex-col">
				<div className="flex items-center justify-between px-5 pb-4 pt-5">
					<h1 className="text-sm font-semibold text-white">Messages</h1>
					<button className="grid h-7 w-7 place-items-center rounded-full bg-neutral-800 text-neutral-300 transition hover:bg-white hover:text-black" type="button" aria-label="New message">
						<Edit3 className="h-3.5 w-3.5" />
					</button>
				</div>
				<label className="mx-5 flex h-9 items-center gap-2 rounded-lg bg-neutral-800 px-3 text-neutral-500">
					<Search className="h-3.5 w-3.5" />
					<input className="min-w-0 flex-1 bg-transparent text-[10px] text-white outline-none placeholder:text-neutral-400" type="search" placeholder="Search messages or users" />
				</label>
				<div className="mt-4 flex gap-1 px-5 text-[9px] font-medium text-neutral-500">
					<button className="rounded-full bg-neutral-800 px-3 py-1.5 text-white" type="button">Primary</button>
					<button className="rounded-full px-3 py-1.5 hover:bg-neutral-800 hover:text-white" type="button">General</button>
					<button className="rounded-full px-3 py-1.5 hover:bg-neutral-800 hover:text-white" type="button">Requests <span className="ml-1 rounded-full bg-white px-1 text-[8px] text-black">3</span></button>
				</div>
				<div className="mt-3">
					{conversations.map((conversation) => (
						<button className={`flex w-full items-center gap-3 border-t border-neutral-900 px-5 py-3 text-left transition hover:bg-neutral-900 ${conversation.active ? 'bg-neutral-800' : ''}`} type="button" key={conversation.name}>
							<div className="relative shrink-0">
								<img className="h-9 w-9 rounded-full object-cover" src={conversation.image} alt="" />
								{conversation.online && <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-neutral-900 bg-emerald-400" aria-label="Online" />}
							</div>
							<div className="min-w-0 flex-1">
								<div className="flex items-center justify-between gap-2"><p className="truncate text-xs font-medium text-white">{conversation.name}</p><span className="shrink-0 text-[9px] text-neutral-500">{conversation.time}</span></div>
								<p className="mt-1 truncate text-[10px] text-neutral-400">{conversation.preview}</p>
							</div>
							{conversation.unread && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-label="Unread" />}
						</button>
					))}
				</div>
			</div>
		</aside>
	)
}

export default ConversationList