import {
	Camera,
	ChevronLeft,
	Edit3,
	Image,
	Info,
	Mic,
	Phone,
	Play,
	Search,
	Send,
	Smile,
	Video,
} from 'lucide-react'

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

function Chat() {
	return (
		<main className="flex h-[calc(100dvh-8.25rem-env(safe-area-inset-bottom))] w-full overflow-hidden bg-[#0b0b0b] md:h-[calc(100dvh-4rem)]">
			<ConversationList />
			<section className="flex min-h-0 min-w-0 flex-1 flex-col">
				<header className="flex h-14 shrink-0 items-center justify-between border-b border-neutral-800 px-4 sm:px-6">
					<div className="flex min-w-0 items-center gap-3">
						<button className="grid h-8 w-8 place-items-center rounded-full text-neutral-400 hover:bg-neutral-800 hover:text-white md:hidden" type="button" aria-label="Back to messages"><ChevronLeft className="h-4 w-4" /></button>
						<div className="relative shrink-0"><img className="h-8 w-8 rounded-full object-cover" src="https://i.pravatar.cc/80?img=49" alt="Sarah Jenkins" /><span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-[#0b0b0b] bg-emerald-400" /></div>
						<div className="min-w-0"><h2 className="truncate text-xs font-semibold text-white">Sarah Jenkins</h2><p className="text-[9px] text-emerald-400">Active now · In Watch Room #402</p></div>
					</div>
					<div className="flex items-center gap-1 text-neutral-400">
						<button className="grid h-8 w-8 place-items-center rounded-full hover:bg-neutral-800 hover:text-white" type="button" aria-label="Call"><Phone className="h-3.5 w-3.5" /></button>
						<button className="grid h-8 w-8 place-items-center rounded-full hover:bg-neutral-800 hover:text-white" type="button" aria-label="Video call"><Video className="h-3.5 w-3.5" /></button>
						<button className="grid h-8 w-8 place-items-center rounded-full hover:bg-neutral-800 hover:text-white" type="button" aria-label="Chat information"><Info className="h-3.5 w-3.5" /></button>
					</div>
				</header>

				<div className="min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain px-4 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8 lg:px-14">
					<div className="flex justify-center"><span className="rounded-full bg-neutral-900 px-3 py-1 text-[9px] font-medium text-neutral-500">TODAY</span></div>
					<div className="flex items-end gap-2">
						<img className="h-6 w-6 rounded-full object-cover" src="https://i.pravatar.cc/60?img=49" alt="" />
						<div><div className="rounded-2xl rounded-bl-sm bg-neutral-900 px-4 py-3 text-xs text-neutral-200">Hey! Are you joining the Nolan marathon in 10 mins?</div><span className="mt-1 inline-block rounded-full bg-neutral-800 px-2 py-0.5 text-[9px] text-neutral-400">💗 2</span></div>
					</div>
					<div className="flex justify-end"><div className="max-w-[80%] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-xs text-black sm:max-w-[58%]">Yes absolutely! Just grabbing snacks. Which stream are we using?<span className="mt-2 block text-right text-[9px] text-neutral-500">Seen 10:42 PM</span></div></div>
					<div className="flex items-end gap-2">
						<img className="h-6 w-6 rounded-full object-cover" src="https://i.pravatar.cc/60?img=49" alt="" />
						<div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-neutral-900 p-3 sm:max-w-[58%]">
							<p className="mb-3 text-xs text-neutral-200">Great! Room 402 is locked in. Here's the timestamp cue we agreed on.</p>
							<div className="relative overflow-hidden rounded-xl border border-neutral-700 bg-black">
								<img className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85" alt="Shared watch room preview" />
									<span className="absolute inset-0 grid place-items-center">
										<span className="grid h-10 w-10 place-items-center rounded-full bg-white text-black"><Play className="ml-0.5 h-4 w-4 fill-current" />
										</span>
									</span>
									<span className="absolute bottom-2 left-2 text-[8px] text-neutral-400">WatchR · Messages</span>
							</div>
						</div>
					</div>
					<div className="flex justify-end"><div className="rounded-2xl rounded-br-sm bg-white px-4 py-3 text-xs text-black">Awesome, see you in there!<span className="mt-2 block text-right text-[9px] text-neutral-500">Delivered</span></div></div>
				</div>

				<form className="flex min-h-16 shrink-0 items-center gap-3 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:px-6 md:pb-3" onSubmit={(event) => event.preventDefault()}>
					<button className="text-neutral-400 hover:text-white" type="button" aria-label="Take photo"><Camera className="h-4 w-4" /></button>
					<button className="text-neutral-400 hover:text-white" type="button" aria-label="Record voice message"><Mic className="h-4 w-4" /></button>
					<button className="text-neutral-400 hover:text-white" type="button" aria-label="Attach image"><Image className="h-4 w-4" /></button>
					<div className="flex h-9 min-w-0 flex-1 items-center rounded-full bg-neutral-900 px-4"><input className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-neutral-400" type="text" placeholder="Message..." /><button className="text-neutral-400 hover:text-white" type="button" aria-label="Add emoji"><Smile className="h-4 w-4" /></button></div>
					<button className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-black transition hover:scale-105 hover:bg-neutral-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-3" type="submit" aria-label="Send message"><Send className="h-4 w-4" /></button>
				</form>
			</section>
		</main>
	)
}

export default Chat
